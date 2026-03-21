#!/usr/bin/env python3

import argparse
import json
import re
import subprocess
import sys
from collections import defaultdict
from itertools import combinations
from pathlib import Path
from textwrap import shorten

GENERIC_PHRASES = [
    'this book', 'the book', 'by the end', 'a story of', 'a study of',
    'journey into', 'explores themes', 'what makes', 'matters because',
]
GENERIC_OPENERS = [
    re.compile(r"^(a|an) [a-z' -]{0,50}(novel|story|tale|journey|epic|poem|tragedy|work)\b"),
    re.compile(r"^(a|an) [a-z' -]{0,60}\b(exposing|following|about|that|in which|built around|centered on)\b"),
    re.compile(r"^this (book|novel|work)\b"),
]
WORD_RE = re.compile(r"[^\W_]+(?:['’][^\W_]+)?", re.UNICODE)


def clean_items(items):
    return [str(item).strip() for item in items or [] if str(item).strip()]


def normalize_tldr(text):
    text = (text or '').strip()
    return text[:1].upper() + text[1:] if text else text


def tokenize(text):
    return WORD_RE.findall((text or '').lower().replace('’', "'"))


def load_data(repo_root: Path):
    node_script = r"""
const fs = require('fs');
const vm = require('vm');

function extractLiteral(source, marker) {
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Missing marker: ${marker}`);
  let i = start + marker.length;
  while (/\s/.test(source[i])) i += 1;
  const open = source[i];
  const close = open === '{' ? '}' : open === '[' ? ']' : null;
  if (!close) throw new Error(`Expected literal after ${marker}`);
  let depth = 0;
  let quote = null;
  let escape = false;
  for (let j = i; j < source.length; j += 1) {
    const ch = source[j];
    const next = source[j + 1];
    if (quote) {
      if (escape) {
        escape = false;
      } else if (ch === '\\') {
        escape = true;
      } else if (ch === quote) {
        quote = null;
      }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      continue;
    }
    if (ch === '/' && next === '/') {
      j = source.indexOf('\n', j + 2);
      if (j === -1) break;
      continue;
    }
    if (ch === '/' && next === '*') {
      j = source.indexOf('*/', j + 2);
      if (j === -1) throw new Error('Unterminated block comment');
      j += 1;
      continue;
    }
    if (ch === open) depth += 1;
    if (ch === close) {
      depth -= 1;
      if (depth === 0) return source.slice(i, j + 1);
    }
  }
  throw new Error(`Could not extract literal for ${marker}`);
}

const booksPath = process.argv[1];
const reportPath = process.argv[2];
const booksSource = fs.readFileSync(booksPath, 'utf8');
const reportSource = fs.readFileSync(reportPath, 'utf8');

const payload = {
  books: vm.runInNewContext(`(${extractLiteral(booksSource, 'window.bookReports =')})`),
  bespokeDetailedReports: vm.runInNewContext(`(${extractLiteral(reportSource, 'const bespokeDetailedReports =')})`),
  bespokeKeyPoints: vm.runInNewContext(`(${extractLiteral(reportSource, 'const bespokeKeyPoints =')})`),
  bespokeTldrs: vm.runInNewContext(`(${extractLiteral(reportSource, 'const bespokeTldrs =')})`),
};

process.stdout.write(JSON.stringify(payload));
"""
    result = subprocess.run(
        ['node', '-e', node_script, str(repo_root / 'assets' / 'books.js'), str(repo_root / 'assets' / 'report-page.js')],
        capture_output=True,
        text=True,
        encoding='utf-8',
        errors='replace',
        check=True,
    )
    return json.loads(result.stdout)


def build_entries(data):
    entries = []
    for book in data['books']:
        slug = book['slug']
        sections = {
            'summary': clean_items([book.get('summary', '')]),
            'main_points': clean_items(data['bespokeKeyPoints'].get(slug)),
            'book_report': clean_items(data['bespokeDetailedReports'].get(slug)),
            'tldr': [normalize_tldr(text) for text in clean_items(data['bespokeTldrs'].get(slug))],
        }
        entries.append({
            'slug': slug,
            'title': book['title'],
            'sections': sections,
            'full_text': ' '.join(piece for parts in sections.values() for piece in parts),
            'has_bespoke_points': bool(clean_items(data['bespokeKeyPoints'].get(slug))),
            'has_bespoke_report': bool(sections['book_report']),
            'has_bespoke_tldr': bool(sections['tldr']),
        })
    return entries


def summarize_bespoke_coverage(entries):
    missing_by_section = {
        'Main Points': [entry['slug'] for entry in entries if not entry['has_bespoke_points']],
        'Book Report': [entry['slug'] for entry in entries if not entry['has_bespoke_report']],
        'TL;DR': [entry['slug'] for entry in entries if not entry['has_bespoke_tldr']],
    }
    counts_by_section = {
        label: len(entries) - len(missing)
        for label, missing in missing_by_section.items()
    }
    return counts_by_section, missing_by_section


def format_missing_coverage(label, missing_slugs):
    if not missing_slugs:
        return None
    preview = ', '.join(missing_slugs[:10])
    suffix = '' if len(missing_slugs) <= 10 else f' ... (+{len(missing_slugs) - 10} more)'
    return f'Missing bespoke {label}: {preview}{suffix}'


def validate_full_bespoke_coverage(missing_by_section):
    errors = []
    for label, missing_slugs in missing_by_section.items():
        if missing_slugs:
            errors.append(format_missing_coverage(label, missing_slugs))
    return errors


def generic_hits(entries, limit):
    hits = []
    seen = set()
    for entry in entries:
        for section in ('summary', 'book_report', 'tldr'):
            for text in entry['sections'][section]:
                lowered = text.lower()
                for phrase in GENERIC_PHRASES:
                    if phrase in lowered:
                        key = (entry['slug'], section, f'phrase:{phrase}')
                        if key not in seen:
                            hits.append((entry['slug'], section, f'phrase:{phrase}', text))
                            seen.add(key)
                        break
                else:
                    if any(pattern.search(lowered) for pattern in GENERIC_OPENERS):
                        key = (entry['slug'], section, 'generic-opener')
                        if key not in seen:
                            hits.append((entry['slug'], section, 'generic-opener', text))
                            seen.add(key)
    return hits[:limit]


def repeated_starters(entries, width, limit):
    starters = defaultdict(list)
    for entry in entries:
        for section in ('summary', 'book_report', 'tldr'):
            for text in entry['sections'][section]:
                tokens = tokenize(text)
                if len(tokens) >= width:
                    starters[' '.join(tokens[:width])].append(f"{entry['slug']}:{section}")
    rows = [(len(refs), phrase, refs) for phrase, refs in starters.items() if len(refs) > 1]
    rows.sort(key=lambda row: (-row[0], row[1]))
    return rows[:limit]


def shingle_set(text, width=4):
    tokens = tokenize(text)
    if len(tokens) < width:
        return set(tokens)
    return {' '.join(tokens[i:i + width]) for i in range(len(tokens) - width + 1)}


def similar_pairs(entries, threshold, limit):
    rows = []
    shingles = {entry['slug']: shingle_set(entry['full_text']) for entry in entries if entry['full_text'].strip()}
    for left, right in combinations(entries, 2):
        a = shingles.get(left['slug'], set())
        b = shingles.get(right['slug'], set())
        if not a or not b:
            continue
        score = len(a & b) / len(a | b)
        rows.append((score, left['slug'], right['slug']))
    rows.sort(key=lambda row: (-row[0], row[1], row[2]))
    flagged = [row for row in rows if row[0] >= threshold]
    return flagged[:limit], rows[:limit]


def main(argv=None):
    parser = argparse.ArgumentParser(description='Audit book-report text for repetition and slop.')
    parser.add_argument('--top', type=int, default=12, help='Number of rows to show per section.')
    parser.add_argument('--min-similarity', type=float, default=0.12, help='Minimum Jaccard score for similar pair output.')
    parser.add_argument('--starter-width', type=int, default=5, help='Word count used for repeated opening phrases.')
    parser.add_argument(
        '--require-full-bespoke',
        action='store_true',
        help='Exit non-zero if any book is missing bespoke Main Points, Book Report, or TL;DR.',
    )
    args = parser.parse_args(argv)

    repo_root = Path(__file__).resolve().parents[1]
    data = load_data(repo_root)
    entries = build_entries(data)

    counts_by_section, missing_by_section = summarize_bespoke_coverage(entries)

    print(f'Loaded {len(entries)} books.')
    print('')
    print('Bespoke coverage')
    print(f"  Main Points: {counts_by_section['Main Points']}/{len(entries)}")
    print(f"  Book Report: {counts_by_section['Book Report']}/{len(entries)}")
    print(f"  TL;DR:       {counts_by_section['TL;DR']}/{len(entries)}")

    coverage_errors = validate_full_bespoke_coverage(missing_by_section)
    if coverage_errors:
        print('')
        for error in coverage_errors:
            print(error)

    hits = generic_hits(entries, args.top)
    print('')
    print('Generic phrase / opener hits')
    if not hits:
        print('  None above the current heuristics.')
    for slug, section, reason, text in hits:
        print(f'  {slug} [{section}] {reason} -> {shorten(text, width=110, placeholder="...")}')

    starters = repeated_starters(entries, args.starter_width, args.top)
    print('')
    print(f'Repeated opening {args.starter_width}-grams')
    if not starters:
        print('  None found.')
    for count, phrase, refs in starters:
        joined = ', '.join(refs[:4])
        extra = '' if len(refs) <= 4 else f' ... (+{len(refs) - 4} more)'
        print(f'  {count}x "{phrase}" -> {joined}{extra}')

    flagged_pairs, top_pairs = similar_pairs(entries, args.min_similarity, args.top)
    print('')
    print(f'Rendered-report similarity threshold: {args.min_similarity:.2f}')
    if not flagged_pairs:
        print('  None above threshold; showing nearest pairs instead.')
    for score, left, right in (flagged_pairs or top_pairs):
        print(f'  {score:.3f}  {left} <-> {right}')

    if args.require_full_bespoke and coverage_errors:
        print('')
        print('Full bespoke coverage required but missing entries remain.', file=sys.stderr)
        return 1

    return 0


if __name__ == '__main__':
    try:
        sys.exit(main())
    except subprocess.CalledProcessError as exc:
        sys.stderr.write(exc.stderr or str(exc))
        sys.exit(exc.returncode or 1)