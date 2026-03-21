import unittest

from check_report_uniqueness import (
    build_entries,
    summarize_bespoke_coverage,
    validate_full_bespoke_coverage,
)


class CheckReportUniquenessTests(unittest.TestCase):
    def test_build_entries_uses_bespoke_main_points_only(self):
        data = {
            'books': [{
                'slug': 'demo-book',
                'title': 'Demo Book',
                'summary': 'Summary text',
                'topics': ['old fallback topic'],
            }],
            'bespokeKeyPoints': {},
            'bespokeDetailedReports': {},
            'bespokeTldrs': {},
        }

        entries = build_entries(data)

        self.assertEqual(entries[0]['sections']['main_points'], [])
        self.assertFalse(entries[0]['has_bespoke_points'])

    def test_validate_full_bespoke_coverage_reports_each_missing_section(self):
        entries = [{
            'slug': 'demo-book',
            'has_bespoke_points': False,
            'has_bespoke_report': False,
            'has_bespoke_tldr': False,
        }]

        _, missing_by_section = summarize_bespoke_coverage(entries)
        errors = validate_full_bespoke_coverage(missing_by_section)

        self.assertEqual(len(errors), 3)
        self.assertIn('Missing bespoke Main Points: demo-book', errors)
        self.assertIn('Missing bespoke Book Report: demo-book', errors)
        self.assertIn('Missing bespoke TL;DR: demo-book', errors)


if __name__ == '__main__':
    unittest.main()