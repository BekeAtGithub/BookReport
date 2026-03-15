const slug = document.body.dataset.bookSlug;
const book = (window.bookReports || []).find(entry => entry.slug === slug);

const panelEl = document.querySelector('.panel');
const categoryEl = document.getElementById('bookCategory');
const titleEl = document.getElementById('bookTitle');
const summaryEl = document.getElementById('bookSummary');
const topicListEl = document.getElementById('topicList');

let authorEl;
let readingGuideEl;
let keyPointsEl;
let importantLinesEl;
let detailedSummaryEl;

function lowerFirst(text) {
  return text ? text.charAt(0).toLowerCase() + text.slice(1) : '';
}

function ensureAuthorElement() {
  if (!titleEl) return null;
  authorEl = document.getElementById('bookAuthor');
  if (authorEl) return authorEl;

  authorEl = document.createElement('p');
  authorEl.id = 'bookAuthor';
  authorEl.className = 'book-author';
  authorEl.hidden = true;
  titleEl.insertAdjacentElement('afterend', authorEl);
  return authorEl;
}

function ensureDetailSections() {
  if (!panelEl || document.getElementById('readingGuide')) {
    readingGuideEl = document.getElementById('readingGuide');
    keyPointsEl = document.getElementById('keyPoints');
    importantLinesEl = document.getElementById('importantLines');
    return;
  }

  const details = document.createElement('div');
  details.className = 'report-details';
  details.innerHTML = `
    <section class="detail-section">
      <h2>How to Read This Book</h2>
      <p id="readingGuide" class="helper"></p>
    </section>
    <section class="detail-section">
      <h2>Main Points</h2>
      <ul id="keyPoints" class="detail-list"></ul>
    </section>
    <section class="detail-section">
      <h2>Important Lines / Ideas to Notice</h2>
      <ul id="importantLines" class="detail-list quote-list"></ul>
    </section>
    <section class="detail-section">
      <h2>Detailed Summary / Book Report</h2>
      <div id="detailedSummary" class="report-paragraphs"></div>
    </section>
  `;

  panelEl.appendChild(details);
  readingGuideEl = document.getElementById('readingGuide');
  keyPointsEl = document.getElementById('keyPoints');
  importantLinesEl = document.getElementById('importantLines');
  detailedSummaryEl = document.getElementById('detailedSummary');
}

function getReadingGuide(entry) {
  const [first, second, third] = entry.topics;
  const focus = `Read it with attention to how ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} develop through the book's major scenes and turning points.`;

  if (entry.category.includes('Poetry & Drama')) {
    return `${focus} Pay special attention to imagery, speeches, symbols, and changes in tone.`;
  }
  if (entry.category.includes('Epic & Myth')) {
    return `${focus} Track the hero's choices, the role of fate, and what the journey says about honor, duty, or identity.`;
  }
  if (entry.category.includes('Manifestos & Politics')) {
    return `${focus} Follow the main claim, the reasons given for it, and the change in society the author wants or predicts.`;
  }
  if (entry.category.includes('Religion & Philosophy')) {
    return `${focus} Look closely at the central teaching or argument and how the text defines wisdom, truth, or human duty.`;
  }
  if (entry.category.includes('Modern History')) {
    return `${focus} Follow the author's evidence, how events connect across time, and how ideology, institutions, or public opinion shape the historical outcome.`;
  }
  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return `${focus} Follow the causes of each conflict, the decisions made by leaders, and how battles reshape the larger political order.`;
  }
  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return `${focus} Ask what warning the imagined world is making about real life, power, language, or technology.`;
  }
  if (entry.category.includes('Gothic & Horror')) {
    return `${focus} Notice how fear, isolation, and the unknown create meaning as much as the plot does.`;
  }
  if (entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return `${focus} Watch how the journey tests character, leadership, loyalty, and survival.`;
  }
  if (entry.category.includes('War & Satire')) {
    return `${focus} Notice what is being mocked and how absurd scenes reveal the deeper message.`;
  }

  return `${focus} Track character choices, relationships, and what the ending says about society, identity, or values.`;
}

function getKeyPoints(entry) {
  const [first, second, third, fourth, fifth] = entry.topics;
  return [
    `${entry.title} mainly explores ${lowerFirst(first)} and ${lowerFirst(second)} through its central conflict.`,
    `Another major point is ${lowerFirst(third)}${fourth ? `, which is deepened by ${lowerFirst(fourth)}` : ''}.`,
    `For a book report, connect the ending back to ${lowerFirst(fifth || first)} because that helps explain the author's final message.`
  ];
}

function getImportantLines(entry) {
  const [first, second, third, fourth] = entry.topics;
  return [
    `Mark lines that clearly reveal ${lowerFirst(first)} or show a character responding to it.`,
    `Notice passages where ${lowerFirst(second)} clashes with ${lowerFirst(third)}.`,
    `Use a turning-point or ending passage to explain the book's final view of ${lowerFirst(fourth || first)}.`
  ];
}

function getDetailedSummary(entry) {
  const [first, second, third, fourth, fifth] = entry.topics;
  const intro = `${entry.title} is best approached as a work centered on ${lowerFirst(first)} and ${lowerFirst(second)}. ${entry.summary}`;

  if (entry.category.includes('Manifestos & Politics')) {
    return [
      `${entry.title} works more like an extended argument than a traditional story. The opening movement establishes the main claim and makes clear what political, social, or historical problem the writer is trying to explain or change.`,
      `As the text develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main framework for understanding the work. A strong book report should show how each major section builds the larger argument rather than treating the text as a loose collection of opinions.`,
      `By the end, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} help explain the author's final message. The best summary will close by stating what kind of action, warning, or future the work points toward.`
    ];
  }

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `${entry.title} should be summarized through its central teachings and the questions it raises about truth, morality, and human purpose. The opening sections usually establish the main problem or spiritual issue the text wants the reader to confront.`,
      `In the middle of the work, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} shape the key lessons or reflections. For a detailed report, explain how the text defines wisdom or duty and how those ideas are repeated in different examples, arguments, or stories.`,
      `The ending matters because ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} show what the work ultimately values. A strong summary should end with the main insight the text gives about human life, responsibility, or redemption.`
    ];
  }

  if (entry.category.includes('Modern History')) {
    return [
      `${entry.title} should be read as an interpretive history rather than a simple sequence of facts. The opening usually establishes the historical setting, the author’s main question, and the political or moral stakes behind the subject being studied.`,
      `In the middle of the work, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main framework for understanding the argument. A strong book report should explain how the author uses documents, public speeches, institutions, or political movements to build the case.`,
      `By the end, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} show why the history still matters. The best summary connects the evidence to larger questions about memory, responsibility, ideology, and the long-term consequences of political decisions.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `${entry.title} should be read as a study of conflict, leadership, and the forces that produce decisive battles. The opening establishes the political situation, rival powers, or strategic problem that makes war seem inevitable or necessary.`,
      `In the middle, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} shape the main campaigns or turning points. A detailed report should explain not only who is fighting, but also how planning, morale, terrain, alliances, or discipline affect the outcome.`,
      `By the end, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} show why the battles matter beyond the field itself. The strongest summary connects victory or defeat to larger changes in power, identity, empire, or historical memory.`
    ];
  }

  if (entry.category.includes('Poetry & Drama')) {
    return [
      `${intro} In the opening scenes or passages, the conflict is introduced clearly, along with the emotional pressure that will drive the rest of the work. Relationships, speeches, and early choices establish the central tension before the tragedy or climax fully unfolds.`,
      `The middle of the work deepens ${lowerFirst(third)} and ${lowerFirst(fourth || second)} through confrontation, misunderstanding, and increasingly serious decisions. For a book report, pay attention to how language, imagery, and dramatic irony make the central conflict feel unavoidable.`,
      `The final movement is where ${lowerFirst(fifth || first)} becomes fully clear. A detailed summary should show not only what happens at the end, but also why the ending reveals the work's larger view of power, identity, guilt, love, or human weakness.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `${intro} The beginning usually introduces the journey, the challenge, or the larger world that gives the story its scale. Important early scenes set up what is at stake and what kind of growth the main character or group will need.`,
      `In the middle of the book, trials connected to ${lowerFirst(third)} and ${lowerFirst(fourth || second)} test loyalty, judgment, and endurance. A strong report should explain how these episodes are not just adventures, but stages in the book's deeper moral or emotional development.`,
      `By the conclusion, ${lowerFirst(fifth || first)} helps explain the meaning of the quest or struggle. The most effective summary connects the final victory, loss, or return to the values the work has been building all along.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `${intro} The opening is especially important because it introduces a world shaped by unusual rules, systems, or technologies. A good summary should explain how that world works before moving to the personal conflict inside it.`,
      `As the story unfolds, ${lowerFirst(third)} and ${lowerFirst(fourth || second)} reveal what is most dangerous or unstable about the society being shown. For a detailed report, connect the character struggles to the larger warning the book is making about power, truth, or human behavior.`,
      `The ending usually brings the warning into sharp focus through ${lowerFirst(fifth || first)}. A strong book report should finish by explaining what the imagined future says about the real world.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `${intro} At the beginning, the book creates unease by introducing mystery, isolation, or a disturbing force that does not fully make sense at first. That atmosphere is part of the meaning, not just background decoration.`,
      `In the middle, ${lowerFirst(third)} and ${lowerFirst(fourth || second)} become stronger as fear spreads and characters react under pressure. A detailed summary should show how the horror exposes hidden desires, moral weakness, or social anxiety.`,
      `By the end, ${lowerFirst(fifth || first)} reveals why the fear in the story matters. The strongest reports explain how the final horror also functions as an argument about the mind, the body, society, or the unknown.`
    ];
  }

  return [
    `${intro} In the opening part of the book, the main characters, relationships, or social pressures are introduced so the central conflict feels grounded and meaningful. This is where the report should establish the situation before the major turning points begin.`,
    `As the middle of the work develops, ${lowerFirst(third)} and ${lowerFirst(fourth || second)} become more intense through decisions, misunderstandings, or major events. A good detailed summary should trace how these pressures change the characters and deepen the book's central themes.`,
    `By the ending, ${lowerFirst(fifth || first)} helps clarify the final message of the book. A strong report should connect the outcome to the author's broader ideas about morality, society, identity, power, or human nature.`
  ];
}

function renderList(target, items, className) {
  target.innerHTML = '';
  items.forEach(text => {
    const item = document.createElement('li');
    item.className = className;
    item.textContent = text;
    target.appendChild(item);
  });
}

function renderParagraphs(target, items) {
  target.innerHTML = '';
  items.forEach(text => {
    const paragraph = document.createElement('p');
    paragraph.className = 'report-paragraph';
    paragraph.textContent = text;
    target.appendChild(paragraph);
  });
}

ensureDetailSections();
ensureAuthorElement();

if (!detailedSummaryEl) {
  detailedSummaryEl = document.getElementById('detailedSummary');
}

if (!book) {
  document.title = 'Report Not Found';
  titleEl.textContent = 'Report not found';
  summaryEl.textContent = 'This report page could not find a matching book entry.';
  categoryEl.textContent = 'Missing';
  if (authorEl) {
    authorEl.textContent = '';
    authorEl.hidden = true;
  }
  if (readingGuideEl) readingGuideEl.textContent = 'Return to the homepage and choose a valid book report.';
  if (keyPointsEl) keyPointsEl.innerHTML = '';
  if (importantLinesEl) importantLinesEl.innerHTML = '';
  if (detailedSummaryEl) detailedSummaryEl.innerHTML = '';
} else {
  document.title = `${book.title} | Book Report Home`;
  categoryEl.textContent = book.category;
  titleEl.textContent = book.title;
  if (authorEl) {
    authorEl.textContent = book.author ? `By ${book.author}` : '';
    authorEl.hidden = !book.author;
  }
  summaryEl.textContent = book.summary;

  renderList(topicListEl, book.topics, 'topic');

  if (readingGuideEl) {
    readingGuideEl.textContent = getReadingGuide(book);
  }
  if (keyPointsEl) {
    renderList(keyPointsEl, getKeyPoints(book), 'detail-item');
  }
  if (importantLinesEl) {
    renderList(importantLinesEl, getImportantLines(book), 'detail-item quote-item');
  }
  if (detailedSummaryEl) {
    renderParagraphs(detailedSummaryEl, getDetailedSummary(book));
  }
}
