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

const bespokeDetailedReports = {
  'the-old-man-and-the-sea': [
    `The Old Man and the Sea opens with Santiago already carrying the weight of failure. He has gone many days without catching a fish, and the village sees him as unlucky, but Hemingway makes clear from the beginning that the old man still possesses pride, skill, and a deeply disciplined sense of vocation. The tenderness between Santiago and the boy Manolin gives the opening emotional warmth and also frames the novel as a story about inheritance, loyalty, and the passing on of a code for how to live.`,
    `Once Santiago rows far out into the Gulf Stream and hooks the great marlin, the book narrows into an intense test of endurance. The struggle is physical, but Hemingway turns it into something larger by showing Santiago talking to himself, to the fish, and to the sea as if each were part of a moral universe. A proper report should emphasize that the marlin is not just a prize. It becomes an opponent Santiago admires, respects, and measures himself against, which makes the contest feel noble rather than merely competitive.`,
    `The later movement of the novel deepens that tension by forcing Santiago to win and lose almost at the same time. He kills the marlin through extraordinary patience and skill, yet the sharks strip away the tangible reward before he can bring it home. This is the central irony of the book: outward defeat does not erase inner greatness. A strong detailed summary should show how the voyage back transforms the novel from an adventure story into a meditation on what can and cannot be taken from a person.`,
    `Thematically, Hemingway fills the novella with ideas of dignity, isolation, craftsmanship, suffering, and spiritual endurance. Santiago's hands, wounds, hunger, and exhaustion matter because they make his perseverance visible. The sea is not presented simply as nature in the abstract, but as a living field of struggle where beauty, violence, and necessity exist together. The book's spareness is part of its force: the language is stripped down so the reader feels the purity of the test.`,
    `A strong concluding paragraph for a report should explain why the ending feels victorious even though Santiago returns with only the marlin's skeleton. The novel's lasting claim is that human worth is measured by courage, discipline, and the refusal to surrender one's inner standard. Santiago cannot control luck or the world, but he can control how he meets them, and that is what gives the book its enduring emotional power.`
  ],
  'green-hills-of-africa': [
    `Green Hills of Africa should be read as much more than a hunting narrative. Hemingway uses the African safari as a setting in which travel, competition, skill, conversation, and self-presentation all become part of the book's meaning. The opening establishes camp life, the rhythm of the hunt, and the author's fascination with landscape, weather, animals, and the social world that forms around the expedition.`,
    `As the book moves through different hunting episodes, a strong report should show that the action is never only about killing game. The pursuit of kudu and other animals becomes a test of patience, eyesight, nerve, and endurance. Hemingway repeatedly turns attention to the details of tracking, waiting, and judging distance, and those details matter because they show how seriously he values craft and competence in the face of difficulty.`,
    `The middle of the work also opens out into reflection. Conversations about writing, literature, truth, and artistic standards make the safari feel like a moving intellectual workshop as well as an adventure. This gives the book a layered quality: the hunt is an immediate physical experience, but it is also a way for Hemingway to think about what it means to see clearly, to write honestly, and to measure oneself against demanding standards.`,
    `A careful report should also notice the book's tensions. It presents masculinity, competition, and performance in a very self-conscious way, and it is shaped by the colonial setting in which Europeans and Americans move through Africa with authority and privilege. The result is a text that is vivid and confident on the surface, but also revealing about the era's assumptions, ambitions, and blind spots.`,
    `The best conclusion explains why the book remains interesting even for readers who are less interested in hunting itself. It offers a portrait of Hemingway trying to turn lived experience into art and trying to discover whether courage, style, and truthful observation can be made to coincide. A strong final judgment should say that the book matters because it is both a travel narrative and a performance of the values Hemingway wanted his life and prose to embody.`
  ],
  'the-sun-also-rises': [
    `The Sun Also Rises begins in the drifting world of postwar expatriates, where cafés, taxis, hotels, and late-night conversations create an atmosphere of movement without real direction. Jake Barnes stands at the center of the novel as a man whose war wound has damaged not only his body but also his emotional future. His attachment to Brett Ashley gives the opening its sadness, because the novel quickly makes clear that love, desire, and fulfillment will never align neatly for these characters.`,
    `The trip from Paris to Spain provides the book's real structural movement. What first seems like a change of scenery becomes a pressure chamber in which rivalries, attractions, resentments, and illusions come into the open. A good detailed summary should explain how Robert Cohn, Mike Campbell, Brett, Jake, and later Romero are all caught in a shifting web of jealousy and performance. The fiesta in Pamplona intensifies everything already present in the group rather than creating new problems from nowhere.`,
    `Bullfighting is especially important to a proper report because Hemingway uses it as a measure of authenticity. Pedro Romero's grace and control stand against the emotional disorder of the expatriate circle. Jake recognizes in the bullring a kind of discipline and courage missing from the lives around him, and that contrast helps explain why the novel's outwardly casual style carries such moral weight. What characters do, how they drink, how they speak, and how they endure embarrassment all matter in this world.`,
    `The novel's later sections show the group breaking apart under pressures that have been building all along. Cohn's humiliations, Brett's attraction to Romero, and Jake's helpless loyalty bring the emotional contradictions of the novel into full view. A strong report should emphasize that the ending in Madrid does not resolve the love story; instead, it makes the impossibility of that resolution unmistakable. Jake and Brett can imagine another life together, but only as a painful fantasy.`,
    `A strong conclusion should argue that the novel is not merely about glamorous sadness or travel. It is a disciplined portrait of a generation damaged by war, stripped of easy ideals, and trying to invent meaning through style, companionship, appetite, and endurance. The final power of the book lies in its restraint: the feelings are so carefully controlled on the surface that their emptiness and pain become even more devastating underneath.`
  ],
  'the-great-gatsby': [
    `The Great Gatsby opens with Nick Carraway entering a world of money, display, and social performance on Long Island. Through Nick's observant but limited point of view, the novel gradually reveals East Egg and West Egg as more than places. They are social worlds shaped by old wealth, new wealth, aspiration, exclusion, and self-invention. The opening chapters matter because they place Gatsby's glamour beside Tom and Daisy Buchanan's carelessness, preparing the reader to see that elegance and moral emptiness will be tightly linked throughout the novel.`,
    `When Gatsby emerges from rumor into reality, the book turns into a study of longing disguised as success. His mansion, parties, clothes, and stories all seem expansive, but a proper report should make clear that this enormous performance is organized around one desire: recovering Daisy and recovering a version of the past he refuses to admit is gone. Fitzgerald makes Gatsby emotionally grand and tragically naïve at the same time, which is why the character remains so compelling.`,
    `The middle and later sections bring the novel's class tensions into sharper focus. Tom understands immediately that Gatsby's money does not grant true entry into the old social order, and the confrontation in the Plaza Hotel exposes the fragility of Gatsby's dream. Myrtle's death, Daisy's retreat into privilege, and Gatsby's willingness to protect her all show how unevenly consequences are distributed. A strong detailed summary should explain how the novel moves from dazzling surfaces to moral reckoning without ever abandoning its atmosphere of beauty and illusion.`,
    `The symbols of the green light, the eyes of Doctor T. J. Eckleburg, the valley of ashes, and Gatsby's parties should appear in any immersive report because they connect personal desire to national fantasy. The book is not only about one failed love story. It is also about the American Dream as a promise distorted by class, consumption, and nostalgia. Gatsby's faith is moving because it is so absolute, but it is also what destroys him.`,
    `A strong conclusion should explain why the ending is so devastating. Gatsby dies still attached to a dream that the Buchanans can simply step away from, and Nick leaves with a deeper understanding of the emptiness at the center of the world he has witnessed. The novel endures because it turns style into judgment and beauty into tragedy, showing how hope itself can become fatal when it is bound to illusion and to a past that cannot be restored.`
  ],
  '1984': [
    `1984 begins by immersing the reader in a world where control extends into language, memory, work, and the body. Winston Smith is introduced not as a grand rebel, but as an ordinary man whose private dissatisfaction already feels dangerous. The power of the opening lies in how fully Orwell makes the state present in everyday life: telescreens watch constantly, history is rewritten, slogans replace thought, and even inner life seems vulnerable to invasion.`,
    `A proper report should explain that Winston's rebellion first takes the form of memory and language. His diary, his uncertain recollections, and his desire to preserve a private self are politically significant because the Party's power depends on making reality unstable and ownership of truth impossible. Julia then enlarges the rebellion by introducing secrecy, desire, and temporary physical freedom, which gives the novel a fragile middle section in which resistance appears almost imaginable.`,
    `The later part of the novel destroys that hope with deliberate cruelty. O'Brien's betrayal matters not simply because it defeats Winston personally, but because it reveals a system that does not settle for obedience. The Party seeks domination at the deepest possible level, aiming to reshape perception itself. The torture sequences, especially in the Ministry of Love, should be central in any strong report because they show how fear, pain, and isolation can be used to dismantle both belief and identity.`,
    `The book's major themes are power, truth, language, surveillance, and the destruction of inward freedom. Orwell makes these themes concrete through Newspeak, the memory hole, the Two Minutes Hate, Room 101, and the repeated insistence that reality belongs to whoever controls it. A detailed summary should show how the world of the novel functions as a warning about political systems that do not merely govern bodies but seek to colonize minds.`,
    `A strong conclusion should explain why the ending is one of the most chilling in modern fiction. Winston is not martyred; he is remade. His love for Big Brother is the novel's final proof that total power aims at spiritual conquest, not just submission. The book remains enduring because it shows how fragile truth and personhood can become when language is corrupted, fear is organized, and public lies are made stronger than private memory.`
  ],
  'moby-dick': [
    `Moby-Dick begins with Ishmael's restless need to go to sea, but the novel quickly expands beyond the motives of any one man. The opening chapters establish both realism and symbolic depth through the whaling world, the friendship between Ishmael and Queequeg, and the ominous atmosphere surrounding the Pequod. A strong report should show that these early sections are not merely introductory. They build the emotional, philosophical, and religious framework that will make Ahab's obsession feel immense rather than eccentric.`,
    `Once the voyage is underway, Melville turns the whaling ship into a floating world that contains labor, commerce, ritual, hierarchy, comradeship, and prophecy. A proper summary should not treat the encyclopedic whale chapters as digressions to be skipped over. They are part of the novel's design, broadening the scale of the book and showing how difficult it is to master, classify, or fully understand the natural world Ahab is determined to conquer.`,
    `Ahab's entrance changes the book from a maritime narrative into a tragic study of monomania. His pursuit of the white whale gives the voyage a terrifying unity, because every event becomes subordinate to a single will. A detailed report should explain how the crew are gradually drawn into that obsession and how speeches, omens, and encounters at sea deepen the sense that the Pequod is moving toward an ending that is both chosen and fated.`,
    `The final chase provides the dramatic climax, but its force depends on the vast symbolic pressure built up beforehand. The whale can be read in many ways: as nature, mystery, evil, blankness, or the limit of human interpretation itself. Ahab's refusal to accept limit or uncertainty is what destroys him. Ishmael survives, not because he triumphs, but because he becomes the witness left behind to tell the story.`,
    `A strong conclusion should explain why the novel is so much larger than an adventure about a whale hunt. It is about obsession, knowledge, fate, leadership, human pride, and the terrifying scale of what exceeds human understanding. The book endures because Melville fuses story, sermon, drama, philosophy, and description into a single overwhelming vision of what happens when the desire to master the world becomes indistinguishable from self-destruction.`
  ],
  'crime-and-punishment': [
    `Crime and Punishment opens in poverty, heat, claustrophobia, and mental strain, placing the reader inside Raskolnikov's fractured consciousness from the start. His decision to murder the pawnbroker is prepared not as a simple act of greed, but as the result of pride, desperation, resentment, and a theory that certain extraordinary individuals may stand above ordinary moral law. A proper report should explain that the crime is important not only because it happens, but because it exposes the self-deceiving logic through which Raskolnikov tries to justify it.`,
    `The murder itself, along with the unexpected killing of Lizaveta, turns the novel immediately from argument into spiritual crisis. The middle of the book is not about escaping detection in the ordinary thriller sense. Instead, it traces guilt as fever, paranoia, alienation, and inner disintegration. A strong detailed summary should show how Raskolnikov's mind becomes the real battlefield of the novel, and how his inability to live peacefully with his own idea reveals the emptiness of that idea.`,
    `Characters like Sonya, Porfiry, Razumikhin, Dunya, and Svidrigailov should be central to any immersive report because each one reflects a different possible response to suffering, power, and moral responsibility. Sonya in particular matters as the novel's counterforce to pride. Through humility, endurance, and compassion, she represents a path back toward human connection and redemption that Raskolnikov cannot reach until his intellectual arrogance is broken.`,
    `The novel's later movement toward confession and Siberian punishment should be read as the beginning of transformation rather than the simple closing of a legal case. Dostoevsky makes punishment inward before it becomes outward. The formal sentence matters, but the deeper question is whether Raskolnikov can accept moral reality and rejoin the human world he has tried to stand above.`,
    `A strong conclusion should argue that the novel endures because it is both psychological and philosophical. It examines crime, but even more powerfully it examines pride, suffering, conscience, and the longing for renewal. The final pages matter because they suggest that redemption is possible only when abstraction gives way to humility, relationship, and the painful acceptance of shared human limits.`
  ],
  'war-and-peace': [
    `War and Peace opens in drawing rooms rather than on battlefields, immediately establishing Tolstoy's central method: history will be shown through the lives of families, friendships, marriages, ambitions, and disappointments as much as through armies and emperors. Pierre, Prince Andrei, Natasha, and the wider network of Russian aristocratic life are introduced in a way that makes private experience inseparable from national history. A strong report should begin by emphasizing this breadth of design.`,
    `As the novel moves between salons, estates, military campaigns, and domestic crises, a proper summary should show how Tolstoy refuses to separate public greatness from ordinary vulnerability. Battles such as Austerlitz and Borodino matter, but so do dances, engagements, letters, spiritual crises, and family scenes. The novel repeatedly insists that history is lived by embodied people whose hopes, mistakes, and limitations cannot be reduced to abstract historical formulas.`,
    `The middle and later sections are especially powerful because characters undergo long, uneven transformations. Pierre moves through confusion, idealism, humiliation, and moral awakening. Andrei confronts ambition, disillusionment, injury, and mortality. Natasha passes from vitality through error and grief toward greater maturity. A robust book report should trace these changes carefully, because the emotional and philosophical depth of the novel lies in these slow inward developments.`,
    `At the same time, Tolstoy uses Napoleon's invasion and the burning of Moscow to challenge heroic ideas of history. His essays and reflections argue against the notion that great men alone shape events. A detailed summary should explain that the novel's historical philosophy is part of its structure: the same work that gives the reader intimate scenes of love and suffering also questions how causation, leadership, and national destiny are usually understood.`,
    `A strong conclusion should explain why the book remains one of the greatest novels ever written. It does not simply combine war and domestic life; it shows that the meaning of history is inseparable from the moral and emotional life of individuals. The final power of the novel lies in its vastness joined to its humanity: it treats empires, families, time, death, and spiritual searching as parts of one living whole.`
  ],
  'anna-karenina': [
    `Anna Karenina begins with disorder in a household, but the novel quickly expands into a wide portrait of family life, social expectation, desire, and moral strain. Anna's entrance into the story immediately gives it radiance and danger. Her intelligence, charm, and emotional intensity make her compelling from the start, yet Tolstoy places her within a society whose codes of marriage, status, and respectability are rigid, unequal, and unforgiving. A strong report should establish that tension early.`,
    `The novel gains its full depth by placing Anna's story beside Levin's. Anna and Vronsky move deeper into passion, scandal, and estrangement, while Levin moves through work, courtship, doubt, and a search for meaningful life. A proper detailed summary should not reduce Levin to a side plot. His storyline is essential because it provides another way of asking what love, labor, sincerity, and moral truth might look like in a compromised world.`,
    `As Anna becomes increasingly isolated, the novel shows how social hypocrisy and personal fear reinforce each other. Her affair begins in emotional intensity, but later chapters reveal jealousy, suspicion, dependence, and despair. The tragedy is powerful because Tolstoy does not present Anna as a simple victim or villain. Instead, he makes the reader experience the narrowing of her world and the exhaustion of her hope.`,
    `The later movement toward Anna's death and Levin's spiritual awakening gives the novel its double ending. A strong report should explain how these two conclusions speak to one another. Anna's fate exposes the cruelty of a society that judges women differently from men, but it also shows the destructive force of emotional absolutism when trust and inner steadiness collapse. Levin's final insight does not erase pain, yet it offers a more durable way of living within uncertainty.`,
    `A strong conclusion should argue that the novel endures because it joins psychological precision to social vision. It is a book about passion, marriage, faith, family, class, and moral confusion, but above all it is about the difficulty of living truthfully among competing claims of desire, duty, and society. That depth is what makes Anna's tragedy and Levin's search feel permanently alive.`
  ],
  'jane-eyre': [
    `Jane Eyre begins by establishing Jane's emotional and moral formation through injury, exclusion, and resistance. Her childhood at Gateshead and her years at Lowood are not simply background episodes; they teach the reader how Jane's integrity is built. A proper report should emphasize that from the start Jane is a narrator who insists on her own inward reality. She may be poor, plain, and socially vulnerable, but she refuses to see herself as spiritually lesser.`,
    `At Thornfield, the novel deepens into a blend of romance, psychological tension, and gothic mystery. Jane's growing attachment to Rochester matters because it is rooted in conversation, intelligence, and emotional recognition rather than superficial charm. A strong detailed summary should explain why Rochester attracts Jane and why the atmosphere of secrecy in the house prevents that attraction from becoming simple or secure.`,
    `The interrupted wedding and the revelation of Bertha Mason form the novel's central turning point. Jane's decision to leave is essential to any serious report because it shows that love alone is not enough for her. She will not accept a relationship that destroys her moral independence, even at the cost of profound suffering. The later episodes of wandering, inheritance, and St. John Rivers extend the novel's concern with vocation, conscience, and the right balance between feeling and duty.`,
    `When Jane returns to Rochester, the ending works because both characters have changed. Rochester has lost power and gained humility, while Jane has secured autonomy, resources, and self-command. The union is therefore not a surrender, but a relationship finally made possible on terms of greater equality. A proper report should show how carefully the novel prepares this resolution.`,
    `A strong conclusion should explain why the book remains so influential. It is a romance, but it is also a fierce argument for female inwardness, dignity, and moral agency. Jane's voice gives the novel its authority, and the lasting power of the work lies in how completely it binds desire to conscience without reducing either one.`
  ],
  'wuthering-heights': [
    `Wuthering Heights opens through layers of narration, and a strong report should explain why that structure matters. Lockwood first encounters the strange atmosphere of Wuthering Heights from the outside, but Nelly Dean's long retrospective narrative then draws the reader into the violent history of the Earnshaws, the Lintons, Catherine, and Heathcliff. The frame creates both distance and intimacy, making the story feel at once legendary, local, and unstable.`,
    `The emotional center of the novel lies in the bond between Catherine Earnshaw and Heathcliff, a bond so intense that it resists ordinary categories of affection or social compatibility. Catherine's decision to marry Edgar Linton is a crucial turning point, because it joins social ambition to emotional betrayal. A proper detailed summary should show how this choice shapes Heathcliff's revenge and how the novel links private injury to the destruction of whole households.`,
    `The middle of the book is driven by Heathcliff's return and by the relentless extension of his bitterness across both generations. Violence, coercion, inheritance, and emotional cruelty dominate these chapters, but a strong report should not flatten Heathcliff into a simple villain. The novel's force comes from how it presents obsession as both terrible and compelling, refusing easy moral simplification.`,
    `Equally important is the second generation. Cathy, Hareton, and Linton replay parts of the earlier drama, but they also create the possibility of change. The movement from inherited damage toward partial reconciliation gives the novel a larger structure than pure revenge. A serious summary should trace how the younger characters alter the emotional climate of the ending.`,
    `A strong conclusion should explain why the novel is so haunting. It is about passion, class, revenge, and possession, but also about narrative itself: how stories are retold, distorted, and preserved. The wildness of the moors, the instability of the narrators, and the extremity of feeling all contribute to a work that feels less like social realism than like a storm of memory, desire, and unresolved human intensity.`
  ],
  'great-expectations': [
    `Great Expectations begins with Pip as a frightened child in a graveyard, and this opening scene is essential because it introduces fear, guilt, class anxiety, and the instability of appearances all at once. The convict Magwitch enters the novel like a figure of terror, yet Dickens later transforms him into one of its deepest sources of feeling. A strong report should show how the book repeatedly unsettles Pip's first judgments.`,
    `Pip's visits to Satis House give the novel its second major pressure point. Miss Havisham's frozen world and Estella's beauty create in Pip a painful sense of social inadequacy. From this point forward, his desire to become a gentleman is tied not only to ambition but also to shame. A proper detailed summary should explain how Dickens makes class aspiration emotionally convincing while also exposing its deforming power.`,
    `The revelation of Pip's benefactor is one of the novel's great turning points because it destroys the fantasy on which he has built his future. He has imagined refinement, romance, and advancement as if they naturally belonged together, but Magwitch's return forces him to confront the rough, morally entangled origins of his expectations. The middle and later sections should be summarized as a long education in disillusionment and sympathy.`,
    `Joe, Biddy, Herbert, Jaggers, Wemmick, and Magwitch should all appear in a serious report because they embody the moral alternatives around Pip. Joe's loyalty, Magwitch's rough devotion, and Wemmick's divided life show that Dickens is interested in character as moral texture, not just in plot. Pip grows not by becoming grander, but by learning to see value where his vanity once saw only embarrassment.`,
    `A strong conclusion should explain why the novel remains so moving. It is a coming-of-age story, but also a critique of class fantasy and self-deception. Pip's real education lies in learning that love, loyalty, and moral worth cannot be secured by status. That is why the book's emotional force survives its melodrama: Dickens turns humiliation and aspiration into a searching account of how a person learns to judge rightly.`
  ],
  'the-picture-of-dorian-gray': [
    `The Picture of Dorian Gray opens in an atmosphere of beauty, refinement, and influence, but the novel quickly turns that elegance into moral danger. Basil Hallward's portrait captures Dorian's youth and charm, while Lord Henry's brilliant, corrosive talk begins to reshape how Dorian thinks about pleasure, selfhood, and responsibility. A strong report should explain that the novel's first movement is not only about temptation, but about the power of language to make corruption sound attractive.`,
    `Dorian's wish that the portrait bear the marks of age and sin while he remains outwardly untouched gives the novel its central device and its central moral argument. Once the wish is granted, the story becomes a study in divided existence. Publicly Dorian remains beautiful and admired; privately he descends into cruelty, vanity, and secret vice. A proper detailed summary should emphasize that the portrait functions as conscience made visible.`,
    `The Sibyl Vane episode is especially important because it reveals how quickly Dorian learns to treat other people as instruments of sensation rather than as moral realities. Later chapters, including the murder of Basil and Dorian's increasing fear of exposure, show the cost of living as if aesthetics could be separated from ethics. The more perfectly Dorian preserves the surface, the more monstrous the hidden truth becomes.`,
    `The novel's themes include influence, duplicity, desire, performance, conscience, and the relationship between art and life. A strong report should show that Wilde is not simply condemning beauty or pleasure. Instead, he is exploring what happens when style is severed from responsibility and when the self is treated as an object to be endlessly curated rather than a character to be morally formed.`,
    `A strong conclusion should explain why the ending feels inevitable. Dorian's attempt to destroy the portrait is really an attempt to escape judgment without transformation, and that is why it kills him. The book endures because it combines wit, atmosphere, and moral seriousness in a way that makes its warning unforgettable: no surface can remain innocent once the soul beneath it has been trained to love corruption.`
  ]
};

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
  if (entry.category.includes('Art, Music & Culture')) {
    return `${focus} Notice how style, patronage, ritual, craft, and everyday taste help explain the larger culture the book is describing.`;
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
  const bespokeReport = bespokeDetailedReports[entry.slug];

  if (bespokeReport) {
    return bespokeReport;
  }

  if (entry.category.includes('Manifestos & Politics')) {
    return [
      `${entry.title} works more like an extended political argument than a conventional narrative. ${entry.summary} A full-length report should therefore begin by identifying the historical problem, grievance, or ambition that gives the book its force.`,
      `The opening sections usually establish the author's sense of crisis and define the enemies, failures, or conditions that supposedly make change necessary. A strong summary should explain this opening framework clearly, because the rest of the work depends on how the author first defines the world.`,
      `As the argument develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the major pillars of the book's logic. A proper report should trace how these ideas are repeated, sharpened, and linked together from one section to the next rather than listing them as isolated opinions.`,
      `The middle of the book is also where tone matters. Readers should note how certainty, emotional pressure, blame, prophecy, or ideological language are used to make the argument feel inevitable and urgent.`,
      `Later sections normally move from diagnosis to prescription, showing how ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} are meant to justify a program, warning, or political future. A robust book report should explain not only what the author wants, but how the book tries to persuade the reader that such a conclusion follows logically from what came before.`,
      `A strong concluding paragraph should evaluate the book as a political document: what worldview it creates, what sort of action it encourages, what fears or hopes it depends on, and why its ideas matter historically or intellectually even when they are dangerous, influential, or deeply controversial.`
    ];
  }

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `${entry.title} should be treated as a sustained reflection on truth, morality, and human purpose rather than as a text that can be reduced to a few quotations. ${entry.summary} A full report should open by explaining the spiritual or philosophical problem the book places before the reader.`,
      `The beginning of the work often defines the basic terms of the discussion: what wisdom is, what error looks like, what kind of life is considered worthy, and what the human being owes to God, reason, duty, or the soul. A proper summary should make those starting assumptions clear.`,
      `In the main body of the book, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} shape the key lessons. A robust report should explain how these themes are developed through sayings, arguments, stories, examples, prayers, or meditative reflections depending on the kind of text being read.`,
      `It is also important to show how the work teaches rather than only what it teaches. Some texts persuade through command, some through dialogue, some through poetry, and some through repetition and contrast. That method is part of the meaning and should appear in a serious book report.`,
      `Toward the end, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} clarify what the text ultimately values. A detailed summary should explain how the closing movement gathers the earlier teachings into a final vision of duty, peace, enlightenment, obedience, self-mastery, or redemption.`,
      `A strong concluding paragraph should state the central insight the book offers about human life and explain why the work has remained influential: what kind of person it wants to shape, what sort of truth it claims to reveal, and what lasting moral or spiritual discipline it asks of the reader.`
    ];
  }

  if (entry.category.includes('Modern History')) {
    return [
      `${entry.title} should be read as an interpretive work of history rather than a mere list of events. ${entry.summary} A proper full-length report should begin by setting out the historical period, the author's central question, and the larger political or moral stakes attached to the subject.`,
      `The opening chapters usually explain why the topic matters and introduce the people, institutions, or crises that drive the narrative. A strong summary should show how the author frames the past before moving into the main evidence.`,
      `As the book develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main structure of the argument. A robust report should follow how the author links events across time and how documents, speeches, policies, movements, or eyewitness accounts are used to support the interpretation.`,
      `The middle of the work is often where the argument becomes most analytical. Instead of only describing events, the report should explain causation: why particular decisions were made, how institutions shaped outcomes, and how ideas or pressures changed what followed.`,
      `Later sections usually show why ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} matter beyond the immediate case. A serious summary should connect the specific narrative to larger issues such as ideology, public memory, social change, empire, nationalism, or responsibility.`,
      `A strong conclusion should explain the book's final historical claim: not just what happened, but what the author believes the reader ought to understand about the past, why the subject remains important, and how this history continues to affect modern political or cultural life.`
    ];
  }

  if (entry.category.includes('Art, Music & Culture')) {
    return [
      `${entry.title} should be read as a cultural history of taste, creativity, and social meaning. ${entry.summary} A full report should begin by identifying the period, setting, or tradition under discussion and explaining why the subject mattered not only artistically, but socially and politically as well.`,
      `The opening usually establishes the world in which the culture operates: courts, cities, workshops, salons, religious institutions, dining tables, theaters, or systems of patronage. A strong summary should describe that setting clearly so the reader understands how culture is being produced and consumed.`,
      `As the book develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the major framework of the report. Rather than treating art, music, or food as isolated objects, a proper summary should explain how style is tied to status, ritual, identity, craft, and historical change.`,
      `The middle of the book is also where examples matter most. A robust report should show how particular works, performances, spaces, tastes, or practices illustrate the larger culture being described and how they reveal standards of beauty, discipline, prestige, pleasure, or authority.`,
      `Later sections often show why ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} continue to matter. The best summary connects the book's concrete examples to larger questions about memory, heritage, social aspiration, creativity, and the way societies put their values on display.`,
      `A strong concluding paragraph should explain the book's lasting significance: how it teaches the reader to interpret culture historically, why the subject remains influential, and what the work suggests about the relationship between everyday life, artistic form, power, and collective identity.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `${entry.title} should be approached as a study of conflict, leadership, and the forces that produce victory, defeat, or strategic insight. ${entry.summary} A full-length report should begin by explaining the political setting, the rival powers involved, and the conditions that make conflict seem likely or unavoidable.`,
      `The opening movement of the book usually establishes the stakes of the struggle: territory, legitimacy, survival, revenge, prestige, or imperial expansion. A proper summary should describe those stakes before moving into the campaigns or battles themselves.`,
      `In the central chapters, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} shape the major turning points. A strong report should explain not only what happened, but how planning, discipline, morale, intelligence, terrain, supply, alliances, or leadership influenced the result.`,
      `The middle of the work is also where strong book reports should distinguish immediate events from deeper patterns. The best summaries show how battlefield decisions reveal larger ideas about command, political judgment, human character, or the structure of war itself.`,
      `Later sections show why ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} matter beyond the battlefield. A robust report should connect the conflict to broader changes in power, kingship, empire, social order, or collective memory.`,
      `A good concluding paragraph should explain the work's ultimate lesson about conflict: what kind of leadership it values, what it teaches about winning or losing, and why the struggles described still matter historically, politically, or philosophically.`
    ];
  }

  if (entry.category.includes('Poetry & Drama')) {
    return [
      `${intro} A proper full-length report should begin by establishing the dramatic situation, the central relationships, and the emotional pressure that gives the opening scenes their force. The first act or first movement matters because it plants the conflict that will later expand into crisis or tragedy.`,
      `Early speeches, confrontations, and symbolic details should be included in the report because they reveal motive, tension, and the values at stake. A strong summary does not merely state the plot; it explains why the language of the opening already points toward later consequences.`,
      `As the work develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become more intense through conflict, delay, misunderstanding, or moral weakness. A robust report should trace these changes scene by scene or movement by movement so the escalation feels earned and intelligible.`,
      `The middle of the work is also where literary technique becomes essential. Imagery, repetition, irony, contrast, and changes in tone should be discussed because they shape how the audience interprets the action rather than simply decorating it.`,
      `By the final movement, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} come into full view through reversal, revelation, or catastrophe. A good book report should explain how the ending resolves the dramatic tension while also uncovering the work's larger judgment about power, love, guilt, ambition, identity, or fate.`,
      `A strong concluding paragraph should state why the drama endures: what it shows about human weakness or greatness, how the form intensifies the theme, and what the audience is left understanding more deeply after the final scene or closing lines.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `${intro} A full-length report should begin by explaining the larger journey, quest, or challenge that sets the work in motion. The opening matters because it establishes the world, the stakes, and the kind of growth or testing the central figure will have to undergo.`,
      `Important early scenes should be summarized carefully because they define the moral and emotional direction of the story. They often introduce loyalties, prophecies, ambitions, dangers, or promises that give later episodes their meaning.`,
      `As the narrative unfolds, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} organize the major trials of the book. A strong report should show how each challenge tests judgment, endurance, leadership, loyalty, or self-knowledge rather than presenting the episodes as disconnected adventure.`,
      `The middle of the work is also where setting and encounter matter most. A proper summary should explain how landscapes, enemies, companions, rituals, or turning points enlarge the story and deepen the book's idea of heroism, survival, or destiny.`,
      `By the final movement, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} reveal what the journey has truly accomplished. The ending should be described not only as a victory, defeat, or return, but as the moment where the meaning of the quest becomes clear.`,
      `A strong conclusion should explain what the book finally says about courage, identity, fate, belonging, leadership, or moral endurance, and why the adventure continues to matter as more than entertainment.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `${intro} A proper report should begin by explaining how the imagined world is built: its rules, technologies, institutions, fears, and methods of control. The opening is essential because the social system is part of the argument, not just the background.`,
      `Early chapters usually show how ordinary life is shaped by power. A strong summary should explain how the setting disciplines thought, behavior, memory, language, work, desire, or social order before turning to the main personal conflict.`,
      `As the story develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main way the book tests the stability of its world. A robust report should connect character decisions and turning points to the broader critique the work is making.`,
      `The middle of the book is where the warning becomes sharper. A proper summary should show how systems that first appear efficient, rational, or inevitable are exposed as destructive, dehumanizing, manipulative, or morally empty.`,
      `By the end, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} make the book's larger message unmistakable. The conclusion should explain what the fate of the characters reveals about truth, freedom, resistance, conformity, or the future of society.`,
      `A strong final paragraph should connect the imagined world back to the real one and state clearly what the book warns readers to notice in politics, technology, language, culture, or human behavior.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `${intro} A full report should begin by describing how the book establishes dread, mystery, or instability from the start. In gothic and horror works, atmosphere is not secondary; it is one of the main ways meaning is created.`,
      `The opening usually introduces a place, force, obsession, or absence that unsettles both the characters and the reader. A strong summary should explain how that disturbance changes the emotional tone of the story long before the central threat is fully revealed.`,
      `As the book develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} intensify through secrecy, isolation, obsession, temptation, or fear. A proper report should show how the pressure of the unknown changes judgment, relationships, and moral perception.`,
      `The middle sections are especially important because they reveal that horror is often psychological or social as well as physical. A robust summary should explain what anxieties the book exposes about desire, identity, guilt, decay, power, the body, or forbidden knowledge.`,
      `By the ending, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} clarify why the fear matters. The conclusion of the plot should be tied to the book's larger argument about human weakness, moral corruption, repression, or the fragility of civilized order.`,
      `A strong final paragraph should explain why the work remains powerful: what kind of fear it turns into meaning, how its atmosphere shapes interpretation, and what it reveals about the mind or society beneath the surface of the story.`
    ];
  }

   if (entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) {
    return [
      `${entry.title} should be read as a serious nonfiction work built around explanation, interpretation, and the careful development of a central idea. ${entry.summary} A full report should start by identifying the main question or claim that organizes the book.`,
      `The opening chapters usually introduce the puzzle the author wants to solve and establish why the subject matters. A strong summary should explain this framing clearly so the reader understands what problem the book is trying to illuminate.`,
      `As the argument develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} provide the main structure of the discussion. A robust report should trace how examples, case studies, historical episodes, or comparisons are used to build the author's reasoning.`,
      `The middle of the book is where analytical method becomes most important. Instead of listing examples, a proper summary should show how the evidence changes the reader's understanding and how the author moves from illustration to interpretation.`,
      `Later sections bring ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} into sharper focus and show why the idea reaches beyond the immediate topic. A strong book report should connect the book's specific material to larger intellectual, social, historical, or scientific questions.`,
      `A good concluding paragraph should state the book's major insight in clear terms and explain why the author's approach matters: what habits of thought it encourages, what assumptions it challenges, and what the reader is meant to understand more deeply by the end.`
    ];
  }

  if (entry.category.includes('Self-Development')) {
    return [
      `${entry.title} should be summarized as a sustained practical argument about how a person ought to think, act, or change. ${entry.summary} A full report should begin by identifying the problem the book believes many readers face and the kind of transformation it promises.`,
      `The opening usually defines the author's view of mindset, habit, awareness, fear, ambition, or personal responsibility. A proper summary should make that foundation clear because the later advice depends on those assumptions about human behavior.`,
      `As the book progresses, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main steps or principles the reader is asked to adopt. A robust report should explain how these ideas are linked together rather than presenting them as unrelated motivational slogans.`,
      `The middle of the work often uses stories, examples, contrasts, or repeated formulas to reinforce the lesson. A strong report should describe how the author tries to persuade the reader emotionally as well as logically.`,
      `By the later sections, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} show what successful change is supposed to look like in practice. A detailed summary should explain the concrete behavior, attitude, or discipline the book wants the reader to cultivate.`,
      `A strong concluding paragraph should evaluate the book's overall message: what vision of a good life it promotes, what kind of self it tries to produce, and why its advice may feel powerful, limited, inspiring, or controversial.`
    ];
  }

  if (entry.category.includes('War & Satire')) {
    return [
      `${intro} A proper full-length report should begin by explaining the real-world system, institution, or logic that the work sets out to mock. In satire, the absurd surface is important precisely because it exposes deeper disorder underneath.`,
      `The opening normally establishes a world that already feels distorted, irrational, or morally compromised. A strong summary should show how this distorted setting frames the characters' problems and prepares the reader for the book's criticism.`,
      `As the work develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} intensify through repetition, contradiction, and comic escalation. A robust report should explain how the humor sharpens the critique rather than softening it.`,
      `The middle sections deserve close attention because they reveal how systems of power keep functioning even when they are clearly senseless. A proper summary should connect the funniest or strangest moments to the book's larger view of war, bureaucracy, authority, or survival.`,
      `By the end, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} show what remains when the satire has stripped away the official language and public excuses. The final movement should be summarized as both narrative resolution and moral exposure.`,
      `A strong concluding paragraph should explain what the work ultimately condemns, why satire is the right form for that condemnation, and what truth about modern institutions or human behavior the reader is meant to recognize.`
    ];
  }

  return [
    `${intro} A full-length book report should begin by establishing the opening situation clearly: the main characters or subjects, the social setting, the immediate pressure, and the question or conflict that will shape everything that follows.`,
    `The early part of the work matters because it provides the emotional and intellectual foundation of the whole book. A proper summary should explain what is at stake from the start and why the reader is meant to care about the people, relationships, or ideas being introduced.`,
    `As the work develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main pattern through which the book's meaning unfolds. A strong report should trace these themes through the major turning points instead of flattening the middle into a quick plot outline.`,
    `The middle sections should also show how pressure changes the characters or the argument. Whether through conflict, misunderstanding, discovery, or crisis, a robust summary should explain how deeper motives and tensions become visible as events progress.`,
    `By the later stages of the book, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} help bring the central meaning into focus. A proper report should connect the ending to what the work has been building all along rather than treating the conclusion as an isolated final event.`,
    `A strong concluding paragraph should state the book's larger significance in clear terms: what it suggests about morality, society, identity, memory, power, human nature, or culture, and why the work remains worth reading as more than just a story or summary topic.`
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
