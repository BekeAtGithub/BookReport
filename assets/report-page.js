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
let contextNotesEl;
let reportAnglesEl;
let detailedSummaryEl;
let tldrEl;

const bespokeDetailedReports = {
  'the-old-man-and-the-sea': [
    `The Old Man and the Sea opens with Santiago already carrying the weight of failure. He has gone many days without catching a fish, and the village sees him as unlucky, but Hemingway makes clear from the beginning that the old man still possesses pride, skill, and a deeply disciplined sense of vocation. The tenderness between Santiago and the boy Manolin gives the opening emotional warmth and also frames the novel as a story about inheritance, loyalty, and the passing on of a code for how to live.`,
    `Once Santiago rows far out into the Gulf Stream and hooks the great marlin, the book narrows into an intense test of endurance. The struggle is physical, but Hemingway turns it into something larger by showing Santiago talking to himself, to the fish, and to the sea as if each were part of a moral universe. The marlin is not just a prize. It becomes an opponent Santiago admires, respects, and measures himself against, which makes the contest feel noble rather than merely competitive.`,
    `The later movement of the novel deepens that tension by forcing Santiago to win and lose almost at the same time. He kills the marlin through extraordinary patience and skill, yet the sharks strip away the tangible reward before he can bring it home. This is the central irony of the book: outward defeat does not erase inner greatness. The voyage back transforms the novella from an adventure story into a meditation on what can and cannot be taken from a person.`,
    `Thematically, Hemingway fills the novella with ideas of dignity, isolation, craftsmanship, suffering, and spiritual endurance. Santiago's hands, wounds, hunger, and exhaustion matter because they make his perseverance visible. The sea is not presented simply as nature in the abstract, but as a living field of struggle where beauty, violence, and necessity exist together. The book's spareness is part of its force: the language is stripped down so the reader feels the purity of the test.`,
    `The ending feels victorious even though Santiago returns with only the marlin's skeleton. The novel's lasting claim is that human worth is measured by courage, discipline, and the refusal to surrender one's inner standard. Santiago cannot control luck or the world, but he can control how he meets them, and that is what gives the book its enduring emotional power.`
  ],
  'green-hills-of-africa': [
    `Green Hills of Africa is much more than a hunting narrative. Hemingway uses the African safari as a setting in which travel, competition, skill, conversation, and self-presentation all become part of the book's meaning. The opening establishes camp life, the rhythm of the hunt, and the author's fascination with landscape, weather, animals, and the social world that forms around the expedition.`,
    `As the book moves through different hunting episodes, the action is never only about killing game. The pursuit of kudu and other animals becomes a test of patience, eyesight, nerve, and endurance. Hemingway repeatedly turns attention to the details of tracking, waiting, and judging distance, and those details matter because they show how seriously he values craft and competence in the face of difficulty.`,
    `The middle of the work also opens out into reflection. Conversations about writing, literature, truth, and artistic standards make the safari feel like a moving intellectual workshop as well as an adventure. This gives the book a layered quality: the hunt is an immediate physical experience, but it is also a way for Hemingway to think about what it means to see clearly, to write honestly, and to measure oneself against demanding standards.`,
    `The book also carries visible tensions. It presents masculinity, competition, and performance in a very self-conscious way, and it is shaped by the colonial setting in which Europeans and Americans move through Africa with authority and privilege. The result is a text that is vivid and confident on the surface, but also revealing about the era's assumptions, ambitions, and blind spots.`,
    `The book remains interesting even for readers who are less interested in hunting itself. It offers a portrait of Hemingway trying to turn lived experience into art and trying to discover whether courage, style, and truthful observation can be made to coincide. It matters because it is both a travel narrative and a performance of the values Hemingway wanted his life and prose to embody.`
  ],
  'the-sun-also-rises': [
    `The Sun Also Rises begins in the drifting world of postwar expatriates, where cafés, taxis, hotels, and late-night conversations create an atmosphere of movement without real direction. Jake Barnes stands at the center of the novel as a man whose war wound has damaged not only his body but also his emotional future. His attachment to Brett Ashley gives the opening its sadness, because the novel quickly makes clear that love, desire, and fulfillment will never align neatly for these characters.`,
    `The trip from Paris to Spain provides the book's real structural movement. What first seems like a change of scenery becomes a pressure chamber in which rivalries, attractions, resentments, and illusions come into the open. Robert Cohn, Mike Campbell, Brett, Jake, and later Romero are all caught in a shifting web of jealousy and performance. The fiesta in Pamplona intensifies everything already present in the group rather than creating new problems from nowhere.`,
    `Bullfighting is especially important because Hemingway uses it as a measure of authenticity. Pedro Romero's grace and control stand against the emotional disorder of the expatriate circle. Jake recognizes in the bullring a kind of discipline and courage missing from the lives around him, and that contrast helps explain why the novel's outwardly casual style carries such moral weight. What characters do, how they drink, how they speak, and how they endure embarrassment all matter in this world.`,
    `The novel's later sections show the group breaking apart under pressures that have been building all along. Cohn's humiliations, Brett's attraction to Romero, and Jake's helpless loyalty bring the emotional contradictions of the novel into full view. The ending in Madrid does not resolve the love story; instead, it makes the impossibility of that resolution unmistakable. Jake and Brett can imagine another life together, but only as a painful fantasy.`,
    `The novel is not merely about glamorous sadness or travel. It is a disciplined portrait of a generation damaged by war, stripped of easy ideals, and trying to invent meaning through style, companionship, appetite, and endurance. The final power of the book lies in its restraint: the feelings are so carefully controlled on the surface that their emptiness and pain become even more devastating underneath.`
  ],
  'the-great-gatsby': [
    `The Great Gatsby opens with Nick Carraway entering a world of money, display, and social performance on Long Island. Through Nick's observant but limited point of view, the novel gradually reveals East Egg and West Egg as more than places. They are social worlds shaped by old wealth, new wealth, aspiration, exclusion, and self-invention. The opening chapters matter because they place Gatsby's glamour beside Tom and Daisy Buchanan's carelessness, preparing the reader to see that elegance and moral emptiness will be tightly linked throughout the novel.`,
    `When Gatsby emerges from rumor into reality, the book turns into a study of longing disguised as success. His mansion, parties, clothes, and stories all seem expansive, but this enormous performance is organized around one desire: recovering Daisy and recovering a version of the past he refuses to admit is gone. Fitzgerald makes Gatsby emotionally grand and tragically naïve at the same time, which is why the character remains so compelling.`,
    `The middle and later sections bring the novel's class tensions into sharper focus. Tom understands immediately that Gatsby's money does not grant true entry into the old social order, and the confrontation in the Plaza Hotel exposes the fragility of Gatsby's dream. Myrtle's death, Daisy's retreat into privilege, and Gatsby's willingness to protect her all show how unevenly consequences are distributed. The novel moves from dazzling surfaces to moral reckoning without ever abandoning its atmosphere of beauty and illusion.`,
    `The symbols of the green light, the eyes of Doctor T. J. Eckleburg, the valley of ashes, and Gatsby's parties connect personal desire to national fantasy. The book is not only about one failed love story. It is also about the American Dream as a promise distorted by class, consumption, and nostalgia. Gatsby's faith is moving because it is so absolute, but it is also what destroys him.`,
    `The ending is devastating because Gatsby dies still attached to a dream that the Buchanans can simply step away from, and Nick leaves with a deeper understanding of the emptiness at the center of the world he has witnessed. The novel endures because it turns style into judgment and beauty into tragedy, showing how hope itself can become fatal when it is bound to illusion and to a past that cannot be restored.`
  ],
  '1984': [
    `1984 begins by immersing the reader in a world where control extends into language, memory, work, and the body. Winston Smith is introduced not as a grand rebel, but as an ordinary man whose private dissatisfaction already feels dangerous. The power of the opening lies in how fully Orwell makes the state present in everyday life: telescreens watch constantly, history is rewritten, slogans replace thought, and even inner life seems vulnerable to invasion.`,
    `Winston's rebellion first takes the form of memory and language. His diary, his uncertain recollections, and his desire to preserve a private self are politically significant because the Party's power depends on making reality unstable and ownership of truth impossible. Julia then enlarges the rebellion by introducing secrecy, desire, and temporary physical freedom, which gives the novel a fragile middle section in which resistance appears almost imaginable.`,
    `The later part of the novel destroys that hope with deliberate cruelty. O'Brien's betrayal matters not simply because it defeats Winston personally, but because it reveals a system that does not settle for obedience. The Party seeks domination at the deepest possible level, aiming to reshape perception itself. The torture sequences, especially in the Ministry of Love, are central because they show how fear, pain, and isolation can be used to dismantle both belief and identity.`,
    `The book's major themes are power, truth, language, surveillance, and the destruction of inward freedom. Orwell makes these themes concrete through Newspeak, the memory hole, the Two Minutes Hate, Room 101, and the repeated insistence that reality belongs to whoever controls it. The world of the novel functions as a warning about political systems that do not merely govern bodies but seek to colonize minds.`,
    `The ending is one of the most chilling in modern fiction. Winston is not martyred; he is remade. His love for Big Brother is the novel's final proof that total power aims at spiritual conquest, not just submission. The book remains enduring because it shows how fragile truth and personhood can become when language is corrupted, fear is organized, and public lies are made stronger than private memory.`
  ],
  'moby-dick': [
    `Moby-Dick begins with Ishmael's restless need to go to sea, but the novel quickly expands beyond the motives of any one man. The opening chapters establish both realism and symbolic depth through the whaling world, the friendship between Ishmael and Queequeg, and the ominous atmosphere surrounding the Pequod. These early sections are not merely introductory. They build the emotional, philosophical, and religious framework that will make Ahab's obsession feel immense rather than eccentric.`,
    `Once the voyage is underway, Melville turns the whaling ship into a floating world that contains labor, commerce, ritual, hierarchy, comradeship, and prophecy. The encyclopedic whale chapters are not digressions to be skipped over. They are part of the novel's design, broadening the scale of the book and showing how difficult it is to master, classify, or fully understand the natural world Ahab is determined to conquer.`,
    `Ahab's entrance changes the book from a maritime narrative into a tragic study of monomania. His pursuit of the white whale gives the voyage a terrifying unity, because every event becomes subordinate to a single will. The crew are gradually drawn into that obsession, and speeches, omens, and encounters at sea deepen the sense that the Pequod is moving toward an ending that is both chosen and fated.`,
    `The final chase provides the dramatic climax, but its force depends on the vast symbolic pressure built up beforehand. The whale can be read in many ways: as nature, mystery, evil, blankness, or the limit of human interpretation itself. Ahab's refusal to accept limit or uncertainty is what destroys him. Ishmael survives, not because he triumphs, but because he becomes the witness left behind to tell the story.`,
    `The novel is so much larger than an adventure about a whale hunt. It is about obsession, knowledge, fate, leadership, human pride, and the terrifying scale of what exceeds human understanding. The book endures because Melville fuses story, sermon, drama, philosophy, and description into a single overwhelming vision of what happens when the desire to master the world becomes indistinguishable from self-destruction.`
  ],
  'crime-and-punishment': [
    `Crime and Punishment opens in poverty, heat, claustrophobia, and mental strain, placing the reader inside Raskolnikov's fractured consciousness from the start. His decision to murder the pawnbroker is prepared not as a simple act of greed, but as the result of pride, desperation, resentment, and a theory that certain extraordinary individuals may stand above ordinary moral law. The crime matters not only because it happens, but because it exposes the self-deceiving logic through which Raskolnikov tries to justify it.`,
    `The murder itself, along with the unexpected killing of Lizaveta, turns the novel immediately from argument into spiritual crisis. The middle of the book is not about escaping detection in the ordinary thriller sense. Instead, it traces guilt as fever, paranoia, alienation, and inner disintegration. Raskolnikov's mind becomes the real battlefield of the novel, and his inability to live peacefully with his own idea reveals the emptiness of that idea.`,
    `Characters like Sonya, Porfiry, Razumikhin, Dunya, and Svidrigailov are central because each one reflects a different possible response to suffering, power, and moral responsibility. Sonya in particular matters as the novel's counterforce to pride. Through humility, endurance, and compassion, she represents a path back toward human connection and redemption that Raskolnikov cannot reach until his intellectual arrogance is broken.`,
    `The novel's later movement toward confession and Siberian punishment marks the beginning of transformation rather than the simple closing of a legal case. Dostoevsky makes punishment inward before it becomes outward. The formal sentence matters, but the deeper question is whether Raskolnikov can accept moral reality and rejoin the human world he has tried to stand above.`,
    `The novel endures because it is both psychological and philosophical. It examines crime, but even more powerfully it examines pride, suffering, conscience, and the longing for renewal. The final pages matter because they suggest that redemption is possible only when abstraction gives way to humility, relationship, and the painful acceptance of shared human limits.`
  ],
  'war-and-peace': [
    `War and Peace opens in drawing rooms rather than on battlefields, immediately establishing Tolstoy's central method: history will be shown through the lives of families, friendships, marriages, ambitions, and disappointments as much as through armies and emperors. Pierre, Prince Andrei, Natasha, and the wider network of Russian aristocratic life are introduced in a way that makes private experience inseparable from national history. That breadth of design is essential to the novel from the first pages.`,
    `As the novel moves between salons, estates, military campaigns, and domestic crises, Tolstoy refuses to separate public greatness from ordinary vulnerability. Battles such as Austerlitz and Borodino matter, but so do dances, engagements, letters, spiritual crises, and family scenes. The novel repeatedly insists that history is lived by embodied people whose hopes, mistakes, and limitations cannot be reduced to abstract historical formulas.`,
    `The middle and later sections are especially powerful because characters undergo long, uneven transformations. Pierre moves through confusion, idealism, humiliation, and moral awakening. Andrei confronts ambition, disillusionment, injury, and mortality. Natasha passes from vitality through error and grief toward greater maturity. These slow inward developments are where much of the novel's emotional and philosophical depth resides.`,
    `At the same time, Tolstoy uses Napoleon's invasion and the burning of Moscow to challenge heroic ideas of history. His essays and reflections argue against the notion that great men alone shape events. The novel's historical philosophy is part of its structure: the same work that gives the reader intimate scenes of love and suffering also questions how causation, leadership, and national destiny are usually understood.`,
    `The book remains one of the greatest novels ever written because it does not simply combine war and domestic life; it shows that the meaning of history is inseparable from the moral and emotional life of individuals. The final power of the novel lies in its vastness joined to its humanity: it treats empires, families, time, death, and spiritual searching as parts of one living whole.`
  ],
  'anna-karenina': [
    `Anna Karenina begins with disorder in a household, but the novel quickly expands into a wide portrait of family life, social expectation, desire, and moral strain. Anna's entrance into the story immediately gives it radiance and danger. Her intelligence, charm, and emotional intensity make her compelling from the start, yet Tolstoy places her within a society whose codes of marriage, status, and respectability are rigid, unequal, and unforgiving. That tension drives the novel from the first pages.`,
    `The novel gains its full depth by placing Anna's story beside Levin's. Anna and Vronsky move deeper into passion, scandal, and estrangement, while Levin moves through work, courtship, doubt, and a search for meaningful life. Levin is not a side plot. His storyline is essential because it provides another way of asking what love, labor, sincerity, and moral truth might look like in a compromised world.`,
    `As Anna becomes increasingly isolated, the novel shows how social hypocrisy and personal fear reinforce each other. Her affair begins in emotional intensity, but later chapters reveal jealousy, suspicion, dependence, and despair. The tragedy is powerful because Tolstoy does not present Anna as a simple victim or villain. Instead, he makes the reader experience the narrowing of her world and the exhaustion of her hope.`,
    `The later movement toward Anna's death and Levin's spiritual awakening gives the novel its double ending. These two conclusions speak to one another. Anna's fate exposes the cruelty of a society that judges women differently from men, but it also shows the destructive force of emotional absolutism when trust and inner steadiness collapse. Levin's final insight does not erase pain, yet it offers a more durable way of living within uncertainty.`,
    `The novel endures because it joins psychological precision to social vision. It is a book about passion, marriage, faith, family, class, and moral confusion, but above all it is about the difficulty of living truthfully among competing claims of desire, duty, and society. That depth is what makes Anna's tragedy and Levin's search feel permanently alive.`
  ],
  'jane-eyre': [
    `Jane Eyre begins by establishing Jane's emotional and moral formation through injury, exclusion, and resistance. Her childhood at Gateshead and her years at Lowood are not simply background episodes; they teach the reader how Jane's integrity is built. From the start Jane is a narrator who insists on her own inward reality. She may be poor, plain, and socially vulnerable, but she refuses to see herself as spiritually lesser.`,
    `At Thornfield, the novel deepens into a blend of romance, psychological tension, and gothic mystery. Jane's growing attachment to Rochester matters because it is rooted in conversation, intelligence, and emotional recognition rather than superficial charm. Rochester attracts Jane because he engages her mind as well as her feelings, and the atmosphere of secrecy in the house prevents that attraction from becoming simple or secure.`,
    `The interrupted wedding and the revelation of Bertha Mason form the novel's central turning point. Jane's decision to leave is essential because it shows that love alone is not enough for her. She will not accept a relationship that destroys her moral independence, even at the cost of profound suffering. The later episodes of wandering, inheritance, and St. John Rivers extend the novel's concern with vocation, conscience, and the right balance between feeling and duty.`,
    `When Jane returns to Rochester, the ending works because both characters have changed. Rochester has lost power and gained humility, while Jane has secured autonomy, resources, and self-command. The union is therefore not a surrender, but a relationship finally made possible on terms of greater equality. The novel prepares this resolution carefully by making independence a condition of love rather than an obstacle to it.`,
    `The book remains so influential because it is a romance, but it is also a fierce argument for female inwardness, dignity, and moral agency. Jane's voice gives the novel its authority, and the lasting power of the work lies in how completely it binds desire to conscience without reducing either one.`
  ],
  'wuthering-heights': [
    `Wuthering Heights opens through layers of narration, and that structure matters. Lockwood first encounters the strange atmosphere of Wuthering Heights from the outside, but Nelly Dean's long retrospective narrative then draws the reader into the violent history of the Earnshaws, the Lintons, Catherine, and Heathcliff. The frame creates both distance and intimacy, making the story feel at once legendary, local, and unstable.`,
    `The emotional center of the novel lies in the bond between Catherine Earnshaw and Heathcliff, a bond so intense that it resists ordinary categories of affection or social compatibility. Catherine's decision to marry Edgar Linton is a crucial turning point, because it joins social ambition to emotional betrayal. That choice shapes Heathcliff's revenge and links private injury to the destruction of whole households.`,
    `The middle of the book is driven by Heathcliff's return and by the relentless extension of his bitterness across both generations. Violence, coercion, inheritance, and emotional cruelty dominate these chapters, but the novel's force comes from how it presents obsession as both terrible and compelling, refusing easy moral simplification.`,
    `Equally important is the second generation. Cathy, Hareton, and Linton replay parts of the earlier drama, but they also create the possibility of change. The movement from inherited damage toward partial reconciliation gives the novel a larger structure than pure revenge, and the younger characters alter the emotional climate of the ending.`,
    `The novel is so haunting because it is about passion, class, revenge, and possession, but also about narrative itself: how stories are retold, distorted, and preserved. The wildness of the moors, the instability of the narrators, and the extremity of feeling all contribute to a work that feels less like social realism than like a storm of memory, desire, and unresolved human intensity.`
  ],
  'great-expectations': [
    `Great Expectations begins with Pip as a frightened child in a graveyard, and this opening scene is essential because it introduces fear, guilt, class anxiety, and the instability of appearances all at once. The convict Magwitch enters the novel like a figure of terror, yet Dickens later transforms him into one of its deepest sources of feeling. The book repeatedly unsettles Pip's first judgments.`,
    `Pip's visits to Satis House give the novel its second major pressure point. Miss Havisham's frozen world and Estella's beauty create in Pip a painful sense of social inadequacy. From this point forward, his desire to become a gentleman is tied not only to ambition but also to shame. Dickens makes class aspiration emotionally convincing while also exposing its deforming power.`,
    `The revelation of Pip's benefactor is one of the novel's great turning points because it destroys the fantasy on which he has built his future. He has imagined refinement, romance, and advancement as if they naturally belonged together, but Magwitch's return forces him to confront the rough, morally entangled origins of his expectations. The middle and later sections become a long education in disillusionment and sympathy.`,
    `Joe, Biddy, Herbert, Jaggers, Wemmick, and Magwitch all matter because they embody the moral alternatives around Pip. Joe's loyalty, Magwitch's rough devotion, and Wemmick's divided life show that Dickens is interested in character as moral texture, not just in plot. Pip grows not by becoming grander, but by learning to see value where his vanity once saw only embarrassment.`,
    `The novel remains so moving because it is a coming-of-age story, but also a critique of class fantasy and self-deception. Pip's real education lies in learning that love, loyalty, and moral worth cannot be secured by status. That is why the book's emotional force survives its melodrama: Dickens turns humiliation and aspiration into a searching account of how a person learns to judge rightly.`
  ],
  'the-picture-of-dorian-gray': [
    `The Picture of Dorian Gray opens in an atmosphere of beauty, refinement, and influence, but the novel quickly turns that elegance into moral danger. Basil Hallward's portrait captures Dorian's youth and charm, while Lord Henry's brilliant, corrosive talk begins to reshape how Dorian thinks about pleasure, selfhood, and responsibility. The novel's first movement is not only about temptation, but about the power of language to make corruption sound attractive.`,
    `Dorian's wish that the portrait bear the marks of age and sin while he remains outwardly untouched gives the novel its central device and its central moral argument. Once the wish is granted, the story becomes a study in divided existence. Publicly Dorian remains beautiful and admired; privately he descends into cruelty, vanity, and secret vice. The portrait functions as conscience made visible.`,
    `The Sibyl Vane episode is especially important because it reveals how quickly Dorian learns to treat other people as instruments of sensation rather than as moral realities. Later chapters, including the murder of Basil and Dorian's increasing fear of exposure, show the cost of living as if aesthetics could be separated from ethics. The more perfectly Dorian preserves the surface, the more monstrous the hidden truth becomes.`,
    `The novel's themes include influence, duplicity, desire, performance, conscience, and the relationship between art and life. Wilde is not simply condemning beauty or pleasure. Instead, he is exploring what happens when style is severed from responsibility and when the self is treated as an object to be endlessly curated rather than a character to be morally formed.`,
    `The ending feels inevitable. Dorian's attempt to destroy the portrait is really an attempt to escape judgment without transformation, and that is why it kills him. The book endures because it combines wit, atmosphere, and moral seriousness in a way that makes its warning unforgettable: no surface can remain innocent once the soul beneath it has been trained to love corruption.`
  ],
  '7-habits-of-highly-effective-people': [
    `The 7 Habits of Highly Effective People is a practical argument that lasting success has to be built on character rather than on quick tricks or surface techniques. Covey begins by contrasting a shallow personality ethic with a deeper character ethic, arguing that effectiveness comes from principles such as responsibility, integrity, and disciplined self-government rather than from image management alone. That contrast explains the logic of the whole book.`,
    `The first three habits form what Covey calls a movement toward private victory. Be Proactive asks the reader to take responsibility for choices instead of living reactively. Begin with the End in Mind pushes the reader to define purpose, values, and desired direction before acting. Put First Things First then turns those values into practice through time management, discipline, and the ordering of priorities. These habits build on one another rather than standing alone.`,
    `The next three habits move from self-mastery to relationships and public life. Think Win-Win argues that healthy cooperation depends on mutual benefit rather than domination. Seek First to Understand, Then to Be Understood teaches deep listening before persuasion. Synergize presents teamwork as something more than compromise: it is the creation of better outcomes through trust, difference, and creative cooperation. At this stage the book shifts from independence toward interdependence.`,
    `The seventh habit, Sharpen the Saw, gives the system its long-term rhythm by insisting on renewal. Covey argues that physical, mental, emotional, and spiritual maintenance are not extras but conditions for sustaining effectiveness. This part matters because it prevents the book from becoming a one-time productivity formula; instead, it presents growth as something that must be renewed continuously.`,
    `The book remains influential because its core claim is that personal effectiveness is not mainly about speed or ambition, but about aligning habits with enduring principles. Whether a reader finds the book inspiring or idealistic, its lasting appeal comes from the way it links personal responsibility, purpose, discipline, communication, cooperation, and renewal into one coherent model of self-development.`
  ],
  'how-spies-think': [
    `How Spies Think is a guide to disciplined judgment under conditions of uncertainty. David Omand is not only describing intelligence agencies; he is also showing how ordinary readers can think more carefully when information is partial, motives are hidden, and events are still unfolding. The book's real subject is reasoning under pressure.`,
    `The opening lessons focus on how analysts build order out of incomplete information. Situational awareness stresses that our picture of reality is always fragmentary. Explanation then asks what model best makes sense of the facts. Estimations moves from explanation toward probabilistic judgment about what may happen next. Strategic notice widens the frame further by emphasizing the need to detect threats and opportunities early enough to act. These first four lessons create a method for seeing, explaining, estimating, and anticipating.`,
    `The middle of the book becomes more psychological by examining the ways judgment goes wrong. Omand warns that our own demons, biases, and fixed ideas can distort analysis. He adds that obsessive states of mind make people cling to false patterns, while deception and manipulation mean that even apparently solid evidence may be staged or misleading. The book treats error as both internal and external.`,
    `The later lessons move from analysis to interaction and strategy. Readers are urged to imagine themselves in the shoes of the person on the other side, to recognize trustworthiness as the basis of durable partnerships, and to understand that modern subversion increasingly operates through digital channels. This final movement matters because it connects intelligence not just to secret information, but to empathy, alliances, and the changing character of conflict in the information age.`,
    `The book is useful beyond the world of espionage because its central lesson is that good thinking requires humility, probabilistic reasoning, resistance to bias, alertness to deception, and awareness of long-term risk. It remains valuable because it turns intelligence practice into a broader model for reasoning well when certainty is impossible and mistakes can be costly.`
  ],
  'arvisura': [
    `Arvisura presents sacred ancestry and legendary origins as the foundation of a people's spiritual identity. Rather than reading like detached academic history, it blends myth, memory, and national tradition so that origins become a source of meaning, continuity, and obligation in the present.`,
    `Early parts of the book link mythic history to heroic identity. Figures, lineages, and remembered struggles are used to show what kind of character the tradition admires: courage, fidelity to inheritance, and loyalty to an order that is older and larger than the individual self.`,
    `The middle of the work treats spiritual tradition and memory as living forces rather than as museum material. Legend is used to interpret history, and history is used to keep legend morally active, so the book continually turns remembrance into a question of cultural survival.`,
    `Because of that structure, nation and legend are never merely decorative themes. They become ways of explaining how a people see themselves, what they honor, and what they fear losing when continuity with the past is broken.`,
    `By the end, Arvisura reads as an attempt to recover identity through sacred memory. Its force comes from the claim that ancestry, mythic history, and spiritual inheritance are not ornamental stories, but the framework through which a nation understands destiny, obligation, and belonging.`
  ]
};

const bespokeKeyPoints = {
  '7-habits-of-highly-effective-people': [
    `Habit 1: Be Proactive — take responsibility for your responses, choices, and conduct instead of blaming circumstances or other people.`,
    `Habit 2: Begin with the End in Mind — define your principles, long-term goals, and desired direction before deciding what to do day to day.`,
    `Habit 3: Put First Things First — organize time around what matters most so values and priorities control the schedule rather than urgency alone.`,
    `Habit 4: Think Win-Win — aim for solutions that create mutual benefit instead of treating relationships as zero-sum contests.`,
    `Habit 5: Seek First to Understand, Then to Be Understood — listen deeply and accurately before trying to persuade, defend, or correct.`,
    `Habit 6: Synergize — use difference, trust, and cooperation to create better outcomes than any one person could produce alone.`,
    `Habit 7: Sharpen the Saw — renew yourself physically, mentally, emotionally, and spiritually so effectiveness can be sustained over time.`
  ],
  'how-spies-think': [
    `Lesson 1: Situational Awareness — begin by building the clearest possible picture of reality, knowing that information is always incomplete and sometimes wrong.`,
    `Lesson 2: Explanation — facts do not speak for themselves, so the analyst must test which explanation best accounts for what is known.`,
    `Lesson 3: Estimations — judgments about what happens next should be framed as reasoned probabilities, not false certainty.`,
    `Lesson 4: Strategic notice — look early for signals of danger or opportunity so surprise does not force rushed, unprepared reactions.`,
    `Lesson 5: It is our own demons that are most likely to mislead us — bias, ego, and wishful thinking can distort analysis from within.`,
    `Lesson 6: We are all susceptible to obsessive states of mind — people can become trapped in fixed narratives and keep forcing evidence to fit them.`,
    `Lesson 7: Seeing is not always believing: beware manipulation, deception and faking — evidence may be staged, filtered, or designed to mislead.`,
    `Lesson 8: Imagine yourself in the shoes of the person on the other side — understand motives, fears, and incentives by reasoning from the opponent's point of view.`,
    `Lesson 9: Trustworthiness creates lasting partnerships — intelligence works best when cooperation is built on credibility, reliability, and shared confidence.`,
    `Lesson 10: Subversion and sedition are now digital — modern influence campaigns and destabilization increasingly move through networks, platforms, and online information systems.`
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
    contextNotesEl = document.getElementById('contextNotes');
    reportAnglesEl = document.getElementById('reportAngles');
    detailedSummaryEl = document.getElementById('detailedSummary');
    tldrEl = document.getElementById('tldrSummary');
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
      <h2>Context / Why This Book Matters</h2>
      <div id="contextNotes" class="report-paragraphs"></div>
    </section>
    <section class="detail-section">
      <h2>Questions / Angles for a Strong Report</h2>
      <ul id="reportAngles" class="detail-list"></ul>
    </section>
    <section class="detail-section">
      <h2>Detailed Summary / Book Report</h2>
      <div id="detailedSummary" class="report-paragraphs"></div>
    </section>
    <section class="detail-section">
      <h2>TL;DR</h2>
      <div id="tldrSummary" class="report-paragraphs"></div>
    </section>
  `;

  panelEl.appendChild(details);
  readingGuideEl = document.getElementById('readingGuide');
  keyPointsEl = document.getElementById('keyPoints');
  importantLinesEl = document.getElementById('importantLines');
  contextNotesEl = document.getElementById('contextNotes');
  reportAnglesEl = document.getElementById('reportAngles');
  detailedSummaryEl = document.getElementById('detailedSummary');
  tldrEl = document.getElementById('tldrSummary');
}

function normalizeTldrParagraph(text) {
  const normalized = text.replace(/^Bluntly,\s*/, '');
  return normalized ? normalized.charAt(0).toUpperCase() + normalized.slice(1) : normalized;
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
  const bespokePoints = bespokeKeyPoints[entry.slug];

  if (bespokePoints) {
    return bespokePoints;
  }

  const [first, second, third, fourth, fifth] = entry.topics;
  return [
    `${entry.title} mainly explores ${lowerFirst(first)} and ${lowerFirst(second)} through its central conflict or argument.`,
    `${lowerFirst(third)} develops through the book's major scenes, examples, or turning points rather than appearing as a single isolated idea.`,
    `${entry.title} also gives special weight to ${lowerFirst(fourth || first)}, which helps reveal what the author values most under pressure.`,
    `By the later chapters, ${lowerFirst(fifth || second)} becomes important because it helps connect the middle of the book to the ending.`,
    `The conclusion usually gathers ${lowerFirst(fifth || first)} and ${lowerFirst(second)} into a final message that feels earned rather than sudden.`
  ];
}

function getImportantLines(entry) {
  const [first, second, third, fourth, fifth] = entry.topics;
  return [
    `Mark lines that clearly reveal ${lowerFirst(first)} or show a character responding to it.`,
    `Notice passages where ${lowerFirst(second)} clashes with ${lowerFirst(third)}.`,
    `Flag a scene, example, or argument that makes ${lowerFirst(fourth || first)} concrete instead of abstract.`,
    `Save a line that makes ${lowerFirst(fifth || second)} especially vivid, memorable, or controversial.`,
    `Use a turning-point or ending passage to explain the book's final view of ${lowerFirst(fourth || first)}.`
  ];
}

function getContextNotes(entry) {
  const [first, second, third, fourth] = entry.topics;

  if (entry.category.includes('Modern History')) {
    return [
      `${entry.title} matters because it turns ${lowerFirst(first)} into a way of understanding a much larger historical moment. The book should be read not only for events, but for the wider system of institutions, ideologies, and decisions surrounding them.`,
      `${lowerFirst(second)} and ${lowerFirst(third)} are connected into an interpretation of cause and consequence. History books are not just timelines; they are arguments about why events unfolded as they did.`,
      `Its lasting value comes from the way it links the past to larger questions about ${lowerFirst(fourth || first)}, public memory, and political judgment. That is what makes the subject feel bigger than one place, leader, or crisis.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `${entry.title} matters because it treats conflict as a test of leadership, organization, and human judgment rather than as a mere sequence of battles. The political stakes and strategic setting are essential from the start.`,
      `The deeper interest of the book often lies in how ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} interact under pressure. Strong military or strategic writing shows that victory and defeat grow from decisions, morale, timing, and structure as much as from force.`,
      `Its long-term significance usually comes from what it teaches about ${lowerFirst(fourth || first)}, power, and the consequences of leadership. That is why these books often remain relevant well beyond the original conflict they describe.`
    ];
  }

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `${entry.title} matters because it is trying to shape how the reader thinks about truth, discipline, and the purpose of human life. It should be read as a guide to formation, not merely as a source of famous quotations.`,
      `Its importance comes partly from how it defines the relationship between ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)}. The teaching and the method used to deliver it are equally important.`,
      `The book remains influential because it offers a durable way of thinking about ${lowerFirst(fourth || first)}, moral duty, and spiritual order. That larger vision is what gives the text its authority across time.`
    ];
  }

  if (entry.category.includes('Self-Development')) {
    return [
      `${entry.title} matters because it presents more than advice: it offers a model of the kind of person the reader is supposed to become. Its ideal of character, action, or self-command is part of the book's real substance.`,
      `Its real argument is usually built on assumptions about ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)}. The advice makes the most sense when those underlying assumptions are made clear.`,
      `The book's broader importance lies in the way it connects ${lowerFirst(fourth || first)} to everyday conduct, ambition, discipline, and long-term growth. That is why these books are often judged by both their inspiration and their realism.`
    ];
  }

  if (entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) {
    return [
      `${entry.title} matters because it takes a big question and makes it understandable through examples, cases, or historical explanation. The central puzzle or claim is what gives the whole book its shape.`,
      `The work becomes stronger when the reader follows how ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} are connected into a line of reasoning. Good nonfiction teaches the reader a way of thinking, not just a collection of facts.`,
      `Its lasting value usually comes from the way it changes how we think about ${lowerFirst(fourth || first)}, evidence, judgment, and the hidden structure of ordinary events or major discoveries.`
    ];
  }

  if (entry.category.includes('Art, Music & Culture')) {
    return [
      `${entry.title} matters because it treats culture as a record of what a society values, admires, displays, and preserves. Style and taste are never detached from power, ritual, status, or everyday life.`,
      `The book becomes richer when the reader tracks how ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} move from individual examples to a larger cultural pattern. Works of art, buildings, music, or foodways are being used to explain a whole social world.`,
      `Its deeper significance lies in what it reveals about ${lowerFirst(fourth || first)}, memory, craftsmanship, and collective identity. That is why the subject remains valuable even after the specific period has passed.`
    ];
  }

  if (entry.category.includes('Poetry & Drama')) {
    return [
      `${entry.title} matters because its meaning is carried not only by events, but by speech, imagery, rhythm, and dramatic structure. Form is part of the argument rather than decoration.`,
      `The work gains force when the reader notices how ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} are intensified through repetition, contrast, performance, or symbolic language.`,
      `Its enduring importance comes from the way it turns ${lowerFirst(fourth || first)} into an experience for the audience rather than a simple statement. That fusion of form and theme is what keeps the work alive.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `${entry.title} matters because the journey or quest is being used to test character, loyalty, endurance, and identity. The larger challenge matters more than a simple list of episodes along the way.`,
      `The story becomes more meaningful when ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} are treated as part of a pattern of growth, danger, and moral testing rather than as disconnected adventures.`,
      `Its lasting appeal comes from what it says about ${lowerFirst(fourth || first)}, belonging, courage, and the cost of reaching one's goal. That is why these works endure as more than entertainment.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `${entry.title} matters because the imagined world is a warning as well as a setting. Institutions, technology, or social rules create pressure on ordinary life and reveal the book's warning.`,
      `Its real power comes from how ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} reveal the book's critique of the world it has invented. The personal conflict and the social argument should be read together.`,
      `The book remains important because it turns ${lowerFirst(fourth || first)} into a question about the future of truth, freedom, identity, or human dignity. That relevance is what gives the story its force.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `${entry.title} matters because fear in this kind of book is never just about shock. The work turns emotional, moral, or social anxiety into story.`,
      `The book becomes more meaningful when ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} are read as pressures acting on the mind, the body, or the social order. Atmosphere and theme work together here.`,
      `Its lasting strength comes from the way it connects ${lowerFirst(fourth || first)} to deeper questions about guilt, corruption, desire, repression, or the limits of human control.`
    ];
  }

  if (entry.category.includes('War & Satire')) {
    return [
      `${entry.title} matters because it uses humor, absurdity, or exaggeration to expose systems that have become morally upside down. Beneath the comedy, the book is attacking a real logic, institution, or habit of mind.`,
      `Its force comes from the way ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} are made to look ridiculous without becoming trivial. The laughter is part of the critique.`,
      `The work remains important because it turns ${lowerFirst(fourth || first)} into a wider judgment about bureaucracy, war, survival, and the human ability to normalize madness.`
    ];
  }

  return [
    `${entry.title} matters because it turns ${lowerFirst(first)} and ${lowerFirst(second)} into a larger reflection on character, society, and human motivation. The book is doing more than telling a story.`,
    `Its deeper interest often lies in how ${lowerFirst(third)} and ${lowerFirst(fourth || first)} develop through conflict, relationships, and changing pressure. The middle of the book usually reveals what the opening only hints at.`,
    `The work endures because it gives lasting shape to questions about identity, morality, memory, power, and consequence. That broader significance is what makes the book worth reporting on carefully.`
  ];
}

function getReportAngles(entry) {
  const [first, second, third, fourth, fifth] = entry.topics;
  return [
    `Explain the opening situation clearly and show why ${lowerFirst(first)} matters from the beginning.`,
    `Trace how ${lowerFirst(second)} shapes the middle of the book instead of jumping too quickly from opening to ending.`,
    `Use at least one turning point, scene, or major example to show how ${lowerFirst(third)} changes the direction of the work.`,
    `Point out how the author uses structure, voice, evidence, or symbolism to make ${lowerFirst(first)} and ${lowerFirst(second)} more convincing.`,
    `Connect ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} to the ending so the conclusion feels prepared rather than sudden.`,
    `Close by explaining why ${entry.title} still matters and what it teaches about society, history, belief, character, or power.`
  ];
}

function getDetailedSummary(entry) {
  const [first, second, third, fourth, fifth] = entry.topics;
  const intro = `${entry.title} is a book about ${lowerFirst(first)} and ${lowerFirst(second)}. ${entry.summary}`;
  const bespokeReport = bespokeDetailedReports[entry.slug];

  if (bespokeReport) {
    return bespokeReport;
  }

  if (entry.category.includes('Manifestos & Politics')) {
    return [
      `${entry.title} works as an extended political argument rather than a neutral piece of analysis. ${entry.summary} The opening usually defines a crisis, names the forces said to be responsible for it, and presents the existing order as weak, corrupt, or incapable of solving the problem on its own.`,
      `From there, the book builds its case by linking ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} into a single explanation of how power operates and why change is necessary. The ideas are rarely presented as isolated observations; they are arranged so that each claim strengthens the next and makes the argument feel internally complete.`,
      `The middle sections usually turn that analysis into a worldview. Opponents are simplified, causes are ranked, and political conflict is framed as a struggle between necessity and failure rather than as a debate between legitimate alternatives.`,
      `Tone is part of the book's substance. Certainty, blame, urgency, prophecy, and ideological language are used to make the argument feel inevitable and to turn interpretation into momentum.`,
      `Later chapters move from diagnosis to prescription, showing how ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} are supposed to justify a program, a warning, or a political future. The book's practical claims only make sense once its picture of crisis and authority has been fully established.`,
      `By the end, ${entry.title} stands as both an argument and a political artifact. Its importance lies not only in what it advocates, but in the kind of world it imagines, the fears and hopes it organizes, and the kind of action or obedience it tries to make seem reasonable.`
    ];
  }

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `${entry.title} is structured as a sustained reflection on truth, moral order, and human purpose rather than as a loose collection of inspirational lines. ${entry.summary} The opening typically establishes the spiritual problem or philosophical tension at the center of the work and defines the kind of life the text treats as serious, disciplined, or worthy.`,
      `Early sections often lay out the book's basic vocabulary: what counts as wisdom, what counts as error, and how the soul, the self, duty, or the sacred world are meant to be understood. Those starting assumptions shape everything that follows.`,
      `In the main body, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main channels through which the book teaches. Depending on the text, those ideas may be developed through verse, dialogue, mythic narrative, command, meditation, or repeated contrasts between the higher and lower ways of living.`,
      `Method matters because the form is part of the message. Some works persuade by argument, some by sacred story, and some by repetition meant to reform attention itself. The result is that the reader is not only given claims, but also trained in a particular way of seeing and judging.`,
      `Later sections bring ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} into sharper focus and show what the earlier teaching is trying to produce: peace, discipline, devotion, self-command, memory, enlightenment, or right relation to the sacred.`,
      `By the end, ${entry.title} offers a larger vision of what a human being is for and how a meaningful life is supposed to be ordered. That is why these books endure: they do not just present ideas, they try to reshape conduct, identity, and ultimate loyalty.`
    ];
  }

  if (entry.category.includes('Modern History')) {
    return [
      `${entry.title} works as an interpretive history, not just a chronology of events. ${entry.summary} The opening chapters usually set the period, introduce the major actors and institutions, and make clear why the subject carries political or moral weight beyond the immediate timeline.`,
      `Once that frame is established, the book starts linking incidents into an argument. ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main structure through which documents, speeches, policies, movements, and individual decisions are turned into a coherent explanation of the past.`,
      `The middle of the book is where causation becomes more important than sequence. Instead of merely telling the reader what happened next, the author explains why certain pressures built up, why particular decisions were taken, and how institutions or beliefs shaped what followed.`,
      `Good historical writing also moves constantly between people and systems. Leaders matter, but so do bureaucracies, public moods, ideological habits, economic constraints, and the inherited structures that make some outcomes more likely than others.`,
      `Later chapters usually widen the focus and show why ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} matter beyond the immediate case. The book turns a specific narrative into a larger argument about memory, responsibility, nationalism, empire, social change, or political judgment.`,
      `By the end, ${entry.title} is making a claim about meaning as much as about fact. It tells the reader not only what happened, but what ought to be understood about the period, why the subject still matters, and how that past continues to shape the present.`
    ];
  }

  if (entry.category.includes('Art, Music & Culture')) {
    return [
      `${entry.title} reads as a cultural history of taste, creativity, and social meaning. ${entry.summary} The opening normally establishes the period, setting, and institutions that shape the culture under discussion so the reader can see how art, music, food, or style are produced, ranked, and consumed.`,
      `That setting matters because culture in books like this is never just decorative. Courts, cities, workshops, salons, religious spaces, theaters, restaurants, and patrons all determine what counts as refinement, prestige, authenticity, or excellence.`,
      `As the discussion expands, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main way the book explains how works and practices take on meaning. Style is tied to status, ritual, identity, labor, craft, and historical change rather than treated as an isolated aesthetic object.`,
      `The middle chapters usually become strongest when they focus on examples: specific buildings, performances, menus, artworks, or habits of taste that reveal a whole social world. Concrete cases show how beauty, pleasure, authority, and discipline get embodied in everyday cultural forms.`,
      `Later sections often shift from description to legacy and show why ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} continue to matter. The subject becomes a way of thinking about heritage, memory, aspiration, creativity, and the public display of values.`,
      `By the end, ${entry.title} teaches the reader to interpret culture historically. Its larger claim is that artistic or everyday forms are never only personal preferences; they store power, hierarchy, identity, and collective memory.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `${entry.title} studies conflict as a problem of leadership, organization, and judgment rather than as a simple sequence of fights. ${entry.summary} The opening usually explains the political setting, the rival powers involved, and the pressures that make confrontation seem inevitable.`,
      `Very quickly, the book establishes what is really at stake: territory, legitimacy, survival, revenge, prestige, imperial power, or the maintenance of order. Those stakes give the campaigns and battles their meaning.`,
      `In the central movement, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} shape the major turning points. The book usually shows that outcomes depend on planning, morale, intelligence, timing, terrain, logistics, alliances, and command discipline as much as on raw force.`,
      `The middle chapters often reveal deeper patterns underneath the action. Individual decisions matter, but so do political structures, institutional habits, fear, ambition, and the quality of leadership under pressure.`,
      `Later sections widen the lens and show why ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} matter beyond the battlefield itself. Military events become part of a larger argument about kingship, empire, state power, social order, memory, or strategic thought.`,
      `By the end, ${entry.title} is explaining what conflict teaches about power and judgment. Its lasting value comes from the kind of leadership it rewards, the mistakes it exposes, and the way it connects victory or defeat to larger political and human realities.`
    ];
  }

  if (entry.category.includes('Poetry & Drama')) {
    return [
      `${intro} The opening establishes the dramatic situation, the central relationships, and the emotional pressure that gives the first scenes their force. Conflict is usually present from the start, even before it has fully expanded into tragedy, revelation, or collapse.`,
      `Early speeches, confrontations, and symbolic details matter because they reveal motive and expose the values at stake. In poetry and drama, the language is never separate from the action; it is one of the main ways the work tells the audience what kind of world they are in.`,
      `As the work develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} intensify through conflict, misunderstanding, hesitation, temptation, or moral weakness. The pressure builds through scenes and reversals rather than through simple plot summary.`,
      `The middle of the work often deepens the meaning through imagery, repetition, irony, contrast, and tonal change. These formal choices make the emotional movement feel inevitable and give the drama its interpretive weight.`,
      `By the final movement, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} come fully into view through recognition, reversal, catastrophe, or hard-won understanding. The ending does not just close the story; it reveals what the conflict has really been about.`,
      `That is why the work endures. ${entry.title} leaves the reader or audience with a sharpened sense of power, guilt, love, ambition, identity, fate, or human weakness, and its form makes those insights feel heavier than paraphrase alone can capture.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `${intro} The opening sets the larger journey, quest, or ordeal in motion and establishes the world through which the characters will be tested. Stakes are usually defined early through exile, danger, prophecy, loyalty, inheritance, or the threat of disorder.`,
      `The first encounters matter because they establish the story's moral direction. Companions, promises, enemies, sacred obligations, or family ties give the later episodes their meaning and make the adventure feel like more than movement from one obstacle to another.`,
      `As the narrative unfolds, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} organize the main trials. Each test reveals something about courage, endurance, leadership, loyalty, cunning, or the cost of pursuing a larger purpose.`,
      `The middle of the work usually becomes richer as the setting expands. Landscapes, monsters, rival peoples, rituals, magical forces, or dangerous choices turn the journey into a map of the world's order and disorder.`,
      `By the final movement, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} show what the journey has actually achieved. The ending clarifies whether the hero has merely survived, restored something, discovered an identity, or learned what kind of power can be carried without corruption.`,
      `That larger meaning is why these books last. ${entry.title} finally speaks about courage, belonging, destiny, leadership, and moral endurance, using adventure to ask what kind of person can move through danger without losing the center of the self.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `${intro} The opening establishes an imagined system with its own rules, technologies, institutions, and methods of control. In books like this, the world is part of the argument: the setting itself shows what the author thinks becomes dangerous when power, knowledge, or innovation take a particular shape.`,
      `Early chapters usually show how ordinary life is disciplined by that system. Thought, memory, language, work, desire, status, and social routine are shaped so that control feels normal before the main conflict fully emerges.`,
      `As the story develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main pressure points through which the book tests its own world. Individual decisions matter because they expose the moral logic hidden inside the larger system.`,
      `The middle of the work usually sharpens the warning by revealing that what first looked efficient, rational, or progressive is also manipulative, dehumanizing, or spiritually empty. The book's critique becomes clearer as the costs of the system become harder to ignore.`,
      `By the end, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} make the larger message unmistakable. The fate of the characters shows what the imagined society believes about truth, freedom, conformity, resistance, or the future of human life.`,
      `That is what gives the story its force beyond its plot. ${entry.title} uses an invented world to push recognizable fears in the real one into clearer focus, turning fiction into a warning about politics, technology, language, culture, or human behavior.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `${intro} The opening establishes dread, instability, or mystery long before the full threat is visible. In gothic and horror fiction, atmosphere is part of the substance of the book because fear changes how space, time, and even ordinary perception are experienced.`,
      `Very early on, the story usually introduces a place, obsession, absence, secret, or invading force that disturbs the emotional order of the world. That disturbance sets the tone and makes the reader feel that reality itself has become unreliable or contaminated.`,
      `As the plot deepens, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} intensify through isolation, secrecy, temptation, obsession, bodily threat, or psychic pressure. The fear becomes a way of uncovering what characters cannot master or safely admit.`,
      `The middle of the work often reveals that the horror is social or psychological as much as physical. Questions of guilt, repression, desire, power, corruption, identity, and forbidden knowledge start to emerge beneath the immediate danger.`,
      `By the ending, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} explain why the fear mattered in the first place. The final events usually expose a larger argument about moral weakness, collapse, vulnerability, or the thinness of civilized control.`,
      `That deeper pressure is why the book lingers. ${entry.title} turns fear into meaning by showing what happens when the mind, the body, the home, or the social order can no longer keep darkness at a distance.`
    ];
  }

   if (entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) {
    return [
      `${entry.title} is organized around explanation, interpretation, and the gradual development of a central claim. ${entry.summary} The opening usually frames the main puzzle clearly and explains why the topic matters before moving into evidence or case material.`,
      `Once that question is in place, the book builds its argument by linking ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} through examples, case studies, comparisons, or historical episodes. Each section adds another layer to the explanation rather than simply repeating the headline idea.`,
      `The middle of the work is usually where the method becomes clearest. Facts are not left sitting on the page by themselves; they are interpreted so the reader can see patterns, hidden mechanisms, or mistaken assumptions that were easy to miss at first.`,
      `This is what gives the book its intellectual shape. The author moves from illustration to interpretation, showing not only what happened or what exists, but what way of thinking makes the evidence meaningful.`,
      `Later sections bring ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} into sharper focus and widen the scope of the argument. The immediate topic starts to connect to larger questions about judgment, institutions, history, behavior, science, or social life.`,
      `By the end, ${entry.title} leaves the reader with a more specific claim about how the world works and how it should be interpreted. Its value lies in the habits of thought it encourages, the assumptions it challenges, and the sharper lens it gives the reader for seeing familiar things differently.`
    ];
  }

  if (entry.category.includes('Self-Development')) {
    return [
      `${entry.title} is a practical argument about how a person is supposed to change. ${entry.summary} The opening usually identifies a common weakness or confusion in the reader's life and then presents the kind of transformation the book believes is possible.`,
      `Very early, the author lays out a view of human behavior built around mindset, habit, awareness, ambition, fear, discipline, or responsibility. That model of the person gives the later advice its logic.`,
      `As the book progresses, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main principles the reader is asked to adopt. The ideas are usually arranged as a sequence or system so that one change in thought or behavior supports the next.`,
      `The middle chapters often reinforce the message through stories, examples, contrasts, and memorable formulas. The point is not only to explain the principle, but to make it feel usable, emotionally convincing, and repeatable in ordinary life.`,
      `Later sections bring ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} into practice and show what the transformed person is meant to look like in action: more disciplined, more effective, calmer, more responsible, more decisive, or more internally ordered.`,
      `By the end, ${entry.title} has also revealed its deeper vision of the good life. It is not just offering tips; it is promoting a picture of character, success, and self-command that explains why the advice feels powerful to some readers and limited to others.`
    ];
  }

  if (entry.category.includes('War & Satire')) {
    return [
      `${intro} The book uses absurdity to expose the logic of a real institution or system. Its opening usually presents a world that is already irrational, morally compromised, or bureaucratically distorted, so the reader can feel the target of the satire from the start.`,
      `Because the setting is already warped, ordinary actions begin to look revealing. Rules cancel each other out, authority becomes self-protective, and language starts to hide reality instead of describing it.`,
      `As the story develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} intensify through repetition, contradiction, and comic escalation. The humor does not soften the critique; it makes the disorder impossible to ignore.`,
      `The middle sections are usually where the satire becomes most damaging. Ridiculous episodes show how institutions keep working even when everyone inside them can see that the logic is cruel, stupid, or empty.`,
      `By the end, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} reveal what remains after the official slogans and polite justifications have been stripped away. The plot resolves, but it also leaves the system morally exposed.`,
      `That is the book's lasting force. ${entry.title} uses laughter, shock, and exaggeration to reveal truths about war, bureaucracy, power, survival, or moral compromise that would sound flatter in direct argument alone.`
    ];
  }

  return [
    `${intro} The opening establishes the main characters or subjects, the social setting, and the first pressure shaping the book. Those early pages matter because they define the conflict, desire, or question that will organize everything that follows.`,
    `Once that foundation is in place, the work begins building its deeper meaning through scene, argument, or example. What first looks simple usually starts to widen into a more serious claim about relationships, identity, morality, memory, or power.`,
    `As the book develops, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} become the main pattern through which its meaning unfolds. Turning points matter because they show how those forces change the direction of the story or the argument.`,
    `The middle sections often reveal what is hidden underneath the surface: motives, tensions, mistaken assumptions, or consequences that were only partly visible at the beginning. Pressure makes the deeper structure of the work easier to see.`,
    `By the later stages, ${lowerFirst(fourth || first)} and ${lowerFirst(fifth || second)} bring the central meaning into sharper focus. The ending gains force because it gathers the earlier material into a clearer judgment about what has been won, lost, exposed, or finally understood.`,
    `That final movement is what gives ${entry.title} its larger significance. The book ends up saying something broader about society, belief, desire, identity, memory, or human nature, which is why it remains worth reading as more than a bare plot or summary.`
  ];
}

function getExpandedSummaryNotes(entry) {
  const [first, second, third, fourth, fifth] = entry.topics;

  if (entry.category.includes('Manifestos & Politics')) {
    return [
      `The argument gains force through rhetoric as much as through evidence. Repetition, blame, certainty, urgency, and dramatic simplification make ${lowerFirst(first)} and ${lowerFirst(second)} feel not merely plausible, but historically necessary.`,
      `The book is often just as revealing in what it excludes. The treatment of ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} can show where the worldview becomes selective, distorted, or dangerous.`
    ];
  }

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `These works also shape the reader through posture as much as through doctrine. Contemplation, obedience, recollection, dialogue, repetition, or mythic imagination can all be part of how ${lowerFirst(first)} and ${lowerFirst(second)} are supposed to enter the reader's life.`,
      `Difficulty is usually central rather than accidental. Suffering, failure, temptation, duty, and moral struggle are often the conditions through which ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} become spiritually or philosophically real.`
    ];
  }

  if (entry.category.includes('Modern History')) {
    return [
      `The strongest history books move between individual actors and larger structures without letting either level dominate. That movement is especially important when ${lowerFirst(first)} and ${lowerFirst(second)} could otherwise be reduced to a few famous names or dates.`,
      `They are also arguments about memory. The treatment of ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} shows how the author wants later readers to interpret the past, not merely remember it.`
    ];
  }

  if (entry.category.includes('Art, Music & Culture')) {
    return [
      `Books in this category are strongest when they keep moving between the object and the world around it. Buildings, artworks, performances, and traditions matter because ${lowerFirst(first)} and ${lowerFirst(second)} are always tied to patrons, audiences, institutions, and everyday habits of taste.`,
      `By the end, ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} usually become part of a broader lesson in how culture stores identity, hierarchy, memory, and power.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `The real substance of these books often lies in the link between immediate action and long-term structure. Battles matter, but command, logistics, morale, fear, and political purpose are what give ${lowerFirst(first)} and ${lowerFirst(second)} their explanatory depth.`,
      `They also reveal what kind of judgment the author respects. The treatment of ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} usually shows whether the book values patience, adaptability, deception, audacity, moral authority, or ruthless efficiency.`
    ];
  }

  if (entry.category.includes('Poetry & Drama')) {
    return [
      `In literary works like these, language carries meaning as heavily as plot. Metaphor, rhythm, recurring images, speeches, pauses, and reversals give ${lowerFirst(first)} and ${lowerFirst(second)} their emotional and interpretive force.`,
      `By the final scenes or closing lines, ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} usually feel intensified or tragically clarified, which is why the ending lands with more force than a simple summary can convey.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `The worlds in these books are rarely random backdrops. Roads, seas, monsters, rival peoples, sacred places, and trials help explain what kind of order or disorder the hero is moving through, giving ${lowerFirst(first)} and ${lowerFirst(second)} a larger symbolic weight.`,
      `The journey is also a test of maturity. By the end, ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} usually reveal whether the hero has merely survived or has actually learned something about duty, identity, fate, belonging, or leadership.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `A key part of the book's argument is usually how the imagined system reproduces itself. Rules, technologies, routines, myths, and incentives make distortion feel normal, which is where ${lowerFirst(first)} and ${lowerFirst(second)} become especially revealing.`,
      `The warning also becomes sharper when it is named precisely. ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} usually point back toward dangers that already exist in real politics, culture, technology, or human behavior.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `The fear in these books usually has a shape and an argument behind it. Settings, secrets, bodies, doubles, voices, and forbidden knowledge make ${lowerFirst(first)} and ${lowerFirst(second)} mean more than simple atmosphere.`,
      `The ending often refuses total closure, which is part of the effect. ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} usually remain unsettled even after the final event, and that lingering pressure is what makes the work continue to haunt the reader.`
    ];
  }

  if (entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) {
    return [
      `The force of good nonfiction lies in the movement of the argument, not just the final claim. Questions, examples, distinctions, and reinterpretations are what make ${lowerFirst(first)} and ${lowerFirst(second)} persuasive rather than merely asserted.`,
      `These books also train habits of mind. The treatment of ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} usually shows whether the author is cultivating skepticism, curiosity, historical awareness, clearer reasoning, or a new way of interpreting familiar evidence.`
    ];
  }

  if (entry.category.includes('Self-Development')) {
    return [
      `Advice books usually rest on an implicit theory of the person. ${lowerFirst(first)} and ${lowerFirst(second)} become clearer once they are seen as parts of a larger view of weakness, motivation, discipline, and personal agency.`,
      `The later sections also show how the book translates principle into practice. ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} reveal whether the advice is concrete, demanding, flexible, idealistic, or repetitive.`
    ];
  }

  if (entry.category.includes('War & Satire')) {
    return [
      `Satire works here through tone as much as through event. Repetition, contradiction, deadpan description, circular logic, and absurd escalation expose the emptiness of institutions more effectively than direct denunciation, which is why ${lowerFirst(first)} and ${lowerFirst(second)} cannot be separated from the book's style.`,
      `The ending usually leaves unease rather than comfort. ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} reveal what people have learned to accept as normal, and that normalization is often the book's deepest target.`
    ];
  }

  return [
    `Method still matters in the background of the summary. Point of view, structure, contrast, repetition, and the arrangement of scenes or examples shape how ${lowerFirst(first)} and ${lowerFirst(second)} are actually felt by the reader.`,
    `The ending also changes the meaning of what came before. Whether the work closes with victory, loss, uncertainty, or reflection, ${lowerFirst(third)}, ${lowerFirst(fourth || first)}, and ${lowerFirst(fifth || second)} help explain what the final pages want the reader to understand more deeply.`
  ];
}

function getBluntConclusion(entry) {
  const [first, second, third] = entry.topics;

  if (entry.slug === 'the-great-gatsby') {
    return [
      `Bluntly, The Great Gatsby says almost everybody here is full of shit: old money, new money, and the hustlers hanging around the edges, all of them dressing up insecurity with houses, cars, parties, and polished manners. Gatsby can build the mansion, invent the persona, and throw the perfect show, but he still cannot turn Daisy into the dream in his head, and after all that sad striving he ends up dead while the careless people keep moving. If you want the casual takeaway, it is that money and status are never just about head knowledge; they are mostly behavior, vanity, fantasy, and the stories people tell to hide what they lack.`
    ];
  }

  if (entry.category.includes('Manifestos & Politics')) {
    return [
      `Bluntly, books like this are often what happens when grievance, ego, and certainty get dressed up as destiny. Strip away the grand language and ${entry.title} usually comes down to somebody insisting that ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} justify power, blame, or control.`
    ];
  }

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `Bluntly, big spiritual or philosophical books keep asking one awkward question: are you actually going to live differently, or are you just collecting noble sentences that make you feel wise for five minutes? ${entry.title} matters because it pushes ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} out of the abstract and into the problem of how a person really lives.`
    ];
  }

  if (entry.category.includes('Modern History')) {
    return [
      `Bluntly, a lot of history is the same miserable pattern: ambitious people make huge decisions, ordinary people pay for them, and later everyone tries to rename the mess as inevitability or strategy. ${entry.title} lasts because it makes ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} look like real forces with real human costs instead of polished textbook language.`
    ];
  }

  if (entry.category.includes('Art, Music & Culture')) {
    return [
      `Bluntly, half of what gets called taste is status wearing better clothes. ${entry.title} is good because it does not just admire beautiful things; it shows how ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} get tied to power, prestige, and the need people have to prove they belong.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `Bluntly, war gets sold as honor, genius, and glory, but most of the time it is ego, fear, logistics, and human beings getting crushed by decisions made above them. ${entry.title} still matters because ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} show what conflict looks like once the heroic slogans wear off.`
    ];
  }

  if (entry.category.includes('Poetry & Drama')) {
    return [
      `Bluntly, people can speak beautifully and still wreck themselves. That is why ${entry.title} lands: beneath the style and emotion, ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} expose how pride, desire, fear, or blindness keep pushing people toward consequences they could almost see coming.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `Bluntly, once you strip away the monsters, maps, and heroic speeches, these stories usually ask whether someone can actually grow up, carry responsibility, and pay the cost of what they want. ${entry.title} earns its place because ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} turn the adventure into a test of character instead of empty spectacle.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `Bluntly, the gadgets may change, but the control freaks stay the same. ${entry.title} works because it shows how ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} let people dress domination up as order, progress, safety, or common sense.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `Bluntly, the monster is usually not the whole problem; it just drags hidden rot into the light. ${entry.title} sticks with people because ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} reveal the fear, guilt, obsession, or corruption that was already there under the surface.`
    ];
  }

  if (entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) {
    return [
      `Bluntly, the world runs on systems most people never think about until something breaks. ${entry.title} is worth reading because ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} stop looking like random facts and start looking like the hidden machinery underneath everyday life.`
    ];
  }

  if (entry.category.includes('Self-Development')) {
    return [
      `Bluntly, books like this usually come down to one annoying truth: the problem is rarely that people need a little more information; it is that behavior, discipline, and self-deception matter more than motivational talk. ${entry.title} works best when ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} stop being slogans and start becoming habits.`
    ];
  }

  if (entry.category.includes('War & Satire')) {
    return [
      `Bluntly, a lot of institutions are insane, but they sound official enough that people keep obeying them anyway. ${entry.title} bites because ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} show how absurdity becomes normal once bureaucracy, fear, and self-interest get a uniform and a script.`
    ];
  }

  return [
    `Bluntly, whatever the setting, people spend a lot of time dressing up insecurity, desire, fear, or pride in nicer language. ${entry.title} lasts because ${lowerFirst(first)}, ${lowerFirst(second)}, and ${lowerFirst(third)} eventually strip that performance down and show what the characters or ideas are really made of.`
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

if (!contextNotesEl) {
  contextNotesEl = document.getElementById('contextNotes');
}

if (!reportAnglesEl) {
  reportAnglesEl = document.getElementById('reportAngles');
}

if (!tldrEl) {
  tldrEl = document.getElementById('tldrSummary');
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
  if (contextNotesEl) contextNotesEl.innerHTML = '';
  if (reportAnglesEl) reportAnglesEl.innerHTML = '';
  if (detailedSummaryEl) detailedSummaryEl.innerHTML = '';
  if (tldrEl) tldrEl.innerHTML = '';
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
  if (contextNotesEl) {
    renderParagraphs(contextNotesEl, getContextNotes(book));
  }
  if (reportAnglesEl) {
    renderList(reportAnglesEl, getReportAngles(book), 'detail-item');
  }
  if (detailedSummaryEl) {
    renderParagraphs(detailedSummaryEl, getDetailedSummary(book).concat(getExpandedSummaryNotes(book)));
  }
  if (tldrEl) {
    renderParagraphs(tldrEl, getBluntConclusion(book).map(normalizeTldrParagraph));
  }
}
