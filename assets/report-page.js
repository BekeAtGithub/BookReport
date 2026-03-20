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
  ],
  'bloodlines': [
    `Bloodlines takes place in Varangantua, the immense hive-city on Alecto where class difference is built into the architecture of everyday life. Agusto Zidarov is a veteran probator who already knows that the city runs on influence, bribery, exhaustion, and selective enforcement long before the main case begins. When he is summoned to the estate of the wealthy magnate Udmil Terashova to locate her missing son and heir, the job first looks like one more upper-class cleanup operation, with money trying to erase scandal before it becomes public rot. That opening matters because it immediately shows how the privileged live behind walls, retainers, and private discretion while the rest of the city is left to crowding, grime, fear, and institutional indifference.`,
    `As Zidarov pushes past the family's official version of events, the investigation drifts from noble embarrassment into the lower arteries of Varangantua, where gangs, pleasure dens, and black-market commerce meet Imperial bureaucracy. The missing heir's trail leads toward the practice of cell-draining, one of the novel's ugliest ideas and one of its clearest statements about the Imperium's moral structure. Young bodies are harvested so that the rich can buy stolen vitality in rejuvenat treatments, which means the distance between the hive's elite and its poor is not just economic or aesthetic. The comfort at the top is literally sustained by consuming life from below. Chris Wraight uses that crime to make the social order feel obscene rather than merely unequal.`,
    `The case then escalates in classic noir fashion. What seemed like a missing-person inquiry becomes entangled with gang violence, corporate pressure, compromised officials, and the self-protective reflexes of the entire city. Zidarov's efforts to break the cell-draining network trigger a disastrous raid, casualties inside the enforcer ranks, and a widening conflict that leaves him squeezed from every direction. The important thing is not only that the plot becomes more dangerous, but that every layer of Varangantua turns out to be connected to every other one. The underworld is not separate from respectable society. Trade combines, family dynasties, street predators, and official enforcement all feed each other while pretending to stand apart.`,
    `Alongside the investigation, the novel keeps returning to Zidarov's home life, and that is one of the reasons the book lands so well. He is not a detached detective with nothing to lose. He is a husband and father trying to hold together a household that has been worn thin by his career, his secrecy, and the wider brutality of Imperial life. His daughter Naxi's movement toward the Imperial Guard gives the story another angle on the setting, because enlistment appears at once as escape, duty, and another form of surrender to the machinery of the Imperium. Those domestic scenes make the world feel larger than the case file. The city is not only a place of crime scenes and interrogations. It is a place where ordinary family bonds are steadily ground down by fear, ambition, distance, and the constant pressure to survive.`,
    `By the end, Bloodlines delivers justice only in the harsh and partial way this setting allows. Zidarov uncovers enough of the truth to expose how tightly the missing heir, the cell-draining racket, and the city's elite interests are knotted together, but there is no cleansing resolution waiting on the other side of revelation. Varangantua remains what it was from the beginning: a machine for turning hierarchy into daily reality. The rich are cushioned, perfumed, protected, and extended; the poor are crowded, disposable, and useful mainly as labor, bodies, or collateral damage. That is why Bloodlines stands out as such a strong answer to the question of noble luxury versus hive-city misery. It shows that in the Imperium, privilege is not a softer version of the same life. It is a different species of existence built on everyone else's ruin.`
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
  ],
  'bloodlines': [
    `Agusto Zidarov is a veteran probator whose cynicism comes from long experience, but the case works because he still cannot stop himself from pushing toward the truth when everyone around him wants compromise.`,
    `Varangantua is the real star of the novel: a hive-city where nobles, trade combines, enforcers, gang lords, and laboring masses all occupy the same system but live in radically different conditions.`,
    `The missing Terashova heir is not just a detective hook; the disappearance becomes the thread that pulls together elite decadence, organized crime, and the city's hidden economy of violence.`,
    `Cell-draining gives the book its most brutal image of class society, since the rich preserve youth and comfort by turning poorer bodies into consumable stock.`,
    `The novel treats policing as compromised from the start, with raids, paperwork, hierarchy, and political pressure constantly limiting what justice can actually look like.`,
    `Zidarov's family storyline, especially the strain around Naxi and the pull of the Imperial Guard, gives the setting a civilian scale that most larger Warhammer stories skip over.`,
    `The ending refuses clean redemption and instead shows how deeply exploitation is built into the normal functioning of the Imperium.`
  ]
};

const bespokeTldrs = {
  'the-great-gatsby': [
    `Bluntly, The Great Gatsby says almost everybody here is full of shit: old money, new money, and the hustlers hanging around the edges, all of them dressing up insecurity with houses, cars, parties, and polished manners. Gatsby can build the mansion, invent the persona, and throw the perfect show, but he still cannot turn Daisy into the dream in his head, and after all that sad striving he ends up dead while the careless people keep moving.`
  ],
  'the-holy-bible': [
    `The Holy Bible is not one neat slogan but a huge running drama about creation, covenant, rebellion, judgment, mercy, suffering, and redemption. It keeps returning to the same hard point: human beings wreck things constantly, and the real question is whether they can be judged, forgiven, reshaped, or saved.`
  ],
  'torah': [
    `The Torah is the foundation layer: origins, patriarchs, Egypt, Moses, Sinai, law, wilderness, and the formation of Israel as a people under covenant. It is not just spiritual uplift. It is memory, law, identity, and obligation fused together.`
  ],
  'tanakh': [
    `The Tanakh takes that Torah foundation and shows what happens when a people actually tries to live under it: conquest, judges, kings, prophetic warning, collapse, exile, poetry, wisdom, and stubborn hope. If the Torah is the charter, the Tanakh is the full civilizational story plus the voices that keep judging it.`
  ],
  'talmud': [
    `The Talmud is what happens when a civilization refuses to let law stay simple. It is argument, interpretation, precedent, disagreement, and practical reasoning on an enormous scale. The point is not smooth inspiration. The point is disciplined thought about how to live.`
  ],
  'the-quran': [
    `The Qur’an comes as revelation, warning, command, and judgment: one God, earlier prophets, accountability, communal order, and the constant reminder that human beings answer for what they do.`
  ],
  'bhagavad-gita': [
    `The Bhagavad Gita begins with Arjuna wanting out and Krishna refusing the easy escape. It turns battlefield panic into a hard argument about duty, detached action, devotion, knowledge, and what it means to act without being owned by fear or outcome.`
  ],
  'tao-te-ching': [
    `The Tao Te Ching keeps saying the hard, showy, controlling approach is usually the stupid one. It praises the soft, the empty, the quiet, and the unforced, then treats restraint as smarter than domination.`
  ],
  'dhammapada': [
    `The Dhammapada is brutally simple about the source of suffering: your mind is building your life whether you notice it or not. Craving, anger, negligence, and ego manufacture suffering; discipline, clarity, compassion, and detachment are the way out.`
  ],
  'the-guns-of-august': [
    `Bluntly, The Guns of August shows how Europe blundered into industrial slaughter because prestige, mobilization timetables, political vanity, and bad assumptions beat common sense. Its power comes from making the opening of World War I feel less like destiny and more like a chain reaction of elite stupidity with catastrophic consequences.`
  ],
  'storm-of-steel': [
    `Bluntly, Storm of Steel is not a clean sermon about patriotism or peace. It is trench warfare from the inside: mud, shellfire, waiting, wounds, adrenaline, survival, and the strange emotional hardening that modern combat can produce. That is why it feels so different from a polished history of the war.`
  ],
  'bloodlines': [
    `Bluntly, Bloodlines is a hive-city detective story about what Imperial class society really looks like once you stop admiring the gothic skyline. Rich families buy discretion, poor bodies get consumed, enforcers are compromised from the start, and Zidarov's case works because the missing heir leads straight into the machinery that makes elite comfort possible in the first place.`
  ]
};

function lowerFirst(text) {
  return text ? text.charAt(0).toLowerCase() + text.slice(1) : '';
}

function trimEndingPunctuation(text) {
  return text ? text.replace(/[.!?]+$/, '') : '';
}

function joinWithCommasAnd(items) {
  if (!items.length) return '';
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
}

function getSlugSeed(slug) {
  return Array.from(slug || '').reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function pickVariant(seed, variants) {
  return variants[seed % variants.length];
}

function getTopicPhrase(entry, count = 3) {
  return joinWithCommasAnd((entry.topics || []).slice(0, count).filter(Boolean));
}

function lowerLeadingArticle(text) {
  const trimmed = (text || '').trim();
  if (!trimmed) return '';
  return /^(A|An|The)\b/.test(trimmed)
    ? trimmed.charAt(0).toLowerCase() + trimmed.slice(1)
    : trimmed;
}

function ensureSentence(text) {
  const trimmed = (text || '').trim();
  if (!trimmed) return '';
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function getTldrLead(entry, cleanedSummary) {
  if (!cleanedSummary) return `${entry.title} matters.`;
  if (/^(A|An|The)\b/.test(cleanedSummary)) {
    return `${entry.title} is ${lowerLeadingArticle(cleanedSummary)}.`;
  }
  return ensureSentence(cleanedSummary);
}

function getTldrMode(entry) {
  if (entry.category.includes('Manifestos & Politics')) return 'argument';
  if (entry.category.includes('Religion & Philosophy')) return 'scripture';
  if (entry.category.includes('Modern History') || entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) return 'history';
  if (entry.category.includes('Self-Development') || entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) return 'nonfiction';
  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) return 'journey';
  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) return 'speculative';
  if (entry.category.includes('Gothic & Horror')) return 'horror';
  if (entry.category.includes('Poetry & Drama')) return 'drama';
  if (entry.category.includes('War & Satire')) return 'satire';
  return 'narrative';
}

function getTldrFocusSentence(entry, mode, topics, seed) {
  const [first, second, third] = topics;
  const trio = joinWithCommasAnd(topics.filter(Boolean));

  if (mode === 'argument') {
    return pickVariant(seed, [
      `${trio} are the machinery of the case, not decorative side topics.`,
      `If you want the book in concrete terms, start with ${first}, then watch ${second} and ${third} lock the worldview into place.`,
      `The real pressure sits in ${trio}, because that is where the rhetoric turns into a program.`,
      `${first}, ${second}, and ${third} are how the book tries to make its picture of power and conflict feel unavoidable.`
    ]);
  }

  if (mode === 'scripture') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are the parts that tell you what sort of life, devotion, or discipline the text is trying to form.`,
      `Its center of gravity is ${trio}, because that is where the teaching stops floating and becomes concrete.`,
      `If you want more than pious fog, stay with ${first}, ${second}, and ${third}; that is where the text makes its demands clear.`,
      `${trio} are the pressure points that reveal what the book thinks obedience, wisdom, or awakening should actually look like.`
    ]);
  }

  if (mode === 'history') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are what keep the story anchored in decisions, actors, and consequences instead of vague historical weather.`,
      `The history gets concrete through ${trio}, not through empty talk about “forces.”`,
      `If the book has real bite, it is because ${first}, ${second}, and ${third} keep dragging the period back to actual choices under pressure.`,
      `${trio} are the sequence that turns background context into a real causal chain.`
    ]);
  }

  if (mode === 'nonfiction') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are the operating logic, not just chapter headings.`,
      `The argument gets usable through ${trio}; that is where the book either becomes practical or stays presentation-deck fluff.`,
      `If you strip away the branding, ${first}, ${second}, and ${third} are the moving parts doing the actual work.`,
      `${trio} are where the author’s main claim has to start proving itself.`
    ]);
  }

  if (mode === 'journey') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are the trials and turns that give the journey its meaning.`,
      `The story earns its scale through ${trio}, because that is where movement turns into testing.`,
      `If you want the book’s real backbone, it is the movement through ${first}, ${second}, and ${third}.`,
      `${trio} are where the quest stops being scenery and starts becoming judgment.`
    ]);
  }

  if (mode === 'speculative') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are the mechanisms that make the invented world actually work.`,
      `The nightmare gets specific through ${trio}, not just through a generic “future bad” mood.`,
      `If the book sticks, it is because ${first}, ${second}, and ${third} build a system you can feel operating on people.`,
      `${trio} are where the satire, tech, or dystopian machinery becomes concrete.`
    ]);
  }

  if (mode === 'horror') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are the rot underneath the surface.`,
      `The dread gets real through ${trio}, because that is where fear joins guilt, obsession, or moral failure.`,
      `If the book has claws, it is because ${first}, ${second}, and ${third} keep turning atmosphere into threat.`,
      `${trio} are where the horror stops hiding and starts telling you what kind of corruption is in play.`
    ]);
  }

  if (mode === 'drama') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are where speech, performance, and conflict do the real cutting.`,
      `The force sits in ${trio}, because that is where language stops sounding ornamental and starts drawing blood.`,
      `If you want the pressure points, they are ${first}, ${second}, and ${third}.`,
      `${trio} are where the form sharpens the conflict instead of merely carrying it.`
    ]);
  }

  if (mode === 'satire') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are where the joke turns into indictment.`,
      `The comedy has teeth because ${trio} keep exposing what everybody has learned to call normal.`,
      `If the book lands, it is because ${first}, ${second}, and ${third} make the absurdity feel bureaucratically real.`,
      `${trio} are what turn the humor from amusement into accusation.`
    ]);
  }

  return pickVariant(seed, [
    `${first}, ${second}, and ${third} are where the book stops being a premise and becomes lived pressure.`,
    `What makes it more than plot is the collision between ${first}, ${second}, and ${third}.`,
    `The book really lives in ${trio}, not in a shelf-ready theme list.`,
    `${trio} are the parts doing the real human and moral work.`
  ]);
}

function getTldrVerdictSentence(entry, mode, topics, seed) {
  const [fourth, fifth] = topics;

  if (mode === 'argument') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} are where the book stops diagnosing and tells you what it wants to justify, demand, or tear down.`,
      `By the time you hit ${fourth} and ${fifth}, the program hiding inside the rhetoric is fully visible.`,
      `The tell is ${fourth} together with ${fifth}; that is where worldview hardens into prescription.`,
      `${fourth} and ${fifth} are where the pose becomes policy.`
    ]);
  }

  if (mode === 'scripture') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} show what the teaching finally asks of conduct, devotion, or self-command.`,
      `By the end, ${fourth} and ${fifth} are where doctrine turns into practice, judgment, or hope.`,
      `${fourth} and ${fifth} are the part that tells you what kind of person or community the text is trying to form.`,
      `The real demand arrives with ${fourth} and ${fifth}, because that is where sacred language becomes a way of life.`
    ]);
  }

  if (mode === 'history') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} are where the judgment shows up: who chose what, who paid, and what later memory tries to do with it.`,
      `By the time you reach ${fourth} and ${fifth}, the book is no longer just narrating events; it is assigning responsibility.`,
      `${fourth} and ${fifth} are where the author cashes the chronology out into warning, blame, or aftermath.`,
      `That is why ${fourth} and ${fifth} matter: they reveal what the period finally meant, not just what happened.`
    ]);
  }

  if (mode === 'nonfiction') {
    return pickVariant(seed, [
      `If the book earns its keep anywhere, it is in ${fourth} and ${fifth}, where the claim has to survive contact with reality.`,
      `${fourth} and ${fifth} are the stress test: that is where the argument either becomes usable or starts sounding like conference-room incense.`,
      `By the time you get to ${fourth} and ${fifth}, you can tell whether the author has a framework or just a slogan.`,
      `${fourth} and ${fifth} are where the book has to answer the obvious objections instead of waving past them.`
    ]);
  }

  if (mode === 'journey') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} show what the ordeal finally meant and what it cost.`,
      `By the end, ${fourth} and ${fifth} are what turn travel or war into transformation.`,
      `${fourth} and ${fifth} are where the journey reveals what kind of person, kingdom, or world is left standing.`,
      `The real payoff lands in ${fourth} and ${fifth}, because that is where the quest’s judgment becomes unmistakable.`
    ]);
  }

  if (mode === 'speculative') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} show what the system is really doing to the people inside it.`,
      `By the time ${fourth} and ${fifth} arrive, the invented world has stopped being clever décor and become a social diagnosis.`,
      `${fourth} and ${fifth} are where the warning cashes out into actual control, damage, or collapse.`,
      `That is where the book stops showing off the premise and starts exposing the trap: ${fourth} and ${fifth}.`
    ]);
  }

  if (mode === 'horror') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} are what keep the fear from being cheap; they tell you what the book thinks is actually rotten.`,
      `By the time ${fourth} and ${fifth} hit, the book has made clear that the monster is carrying a judgment, not just a scare.`,
      `${fourth} and ${fifth} are where dread turns into consequence.`,
      `The horror really declares itself in ${fourth} and ${fifth}, because that is where terror becomes indictment.`
    ]);
  }

  if (mode === 'drama') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} are where the language stops announcing the pressure and starts making you feel it.`,
      `By the end, ${fourth} and ${fifth} carry the blow that the earlier speeches have been preparing.`,
      `${fourth} and ${fifth} are what turn the formal conflict into a final judgment.`,
      `The last real cut usually comes through ${fourth} and ${fifth}.`
    ]);
  }

  if (mode === 'satire') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} are where the comedy curdles and the human damage becomes impossible to laugh off.`,
      `By the time ${fourth} and ${fifth} show up, the joke has fully become an autopsy of normality.`,
      `${fourth} and ${fifth} are what make the satire mean instead of merely funny.`,
      `That is where the laughter dies: ${fourth} and ${fifth}.`
    ]);
  }

  return pickVariant(seed, [
    `${fourth} and ${fifth} are where the cost lands.`,
    `By the time ${fourth} and ${fifth} arrive, the book has turned its ideas into consequence.`,
    `${fourth} and ${fifth} are what keep the whole thing from staying abstract.`,
    `The final judgment usually sharpens around ${fourth} and ${fifth}.`
  ]);
}

function getTopicSet(entry) {
  const topics = (entry.topics || []).filter(Boolean);
  const first = topics[0] || 'the book\'s central concern';
  const second = topics[1] || first;
  const third = topics[2] || second;
  const fourth = topics[3] || third;
  const fifth = topics[4] || fourth;
  return { first, second, third, fourth, fifth };
}

function isLiteraryCategory(entry) {
  return entry.category.includes('Classics')
    || entry.category.includes('Modern Fiction')
    || entry.category.includes('Historical Fiction');
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
  const normalized = (text || '').trim();
  return normalized ? normalized.charAt(0).toUpperCase() + normalized.slice(1) : normalized;
}

function getReadingGuide(entry) {
  const { first, second, third } = getTopicSet(entry);
  const focus = `Use ${first}, ${second}, and ${third} as your anchors; they show you where the book gets concrete and where its real pressure sits.`;

  if (entry.category.includes('Poetry & Drama')) {
    return `${focus} Watch how speeches, imagery, repetition, and tonal shifts make those pressures heavier instead of treating them like detachable themes.`;
  }
  if (entry.category.includes('Epic & Myth')) {
    return `${focus} Track each oath, detour, divine intervention, and ordeal to see what the journey says about fate, honor, loyalty, or identity.`;
  }
  if (entry.category.includes('Manifestos & Politics')) {
    return `${focus} Follow how the author defines the crisis, assigns blame, and turns description into a demand for action, discipline, or obedience.`;
  }
  if (entry.category.includes('Religion & Philosophy')) {
    return `${focus} Notice how the teaching method—verse, dialogue, command, meditation, or sacred story—shapes what counts as wisdom, duty, or right order.`;
  }
  if (isLiteraryCategory(entry)) {
    return `${focus} Watch how scenes, relationships, narration, and recurring symbols keep changing what those pressures mean; in novels like this, the real judgment builds through accumulation, not just plot beats.`;
  }
  if (entry.category.includes('Modern History')) {
    return `${focus} Keep asking what evidence is being used, which causal chain is being emphasized, and where the author's interpretation goes beyond bare chronology.`;
  }
  if (entry.category.includes('Art, Music & Culture')) {
    return `${focus} Stay with the concrete examples—buildings, performances, patrons, rituals, craft, foodways, or court life—because that is where the larger culture actually becomes visible.`;
  }
  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return `${focus} Track who decides, with what information, under what constraints, and how those decisions reshape the political order beyond the immediate clash.`;
  }
  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return `${focus} Ask what part of the invented system is supposed to look uncomfortably familiar once the book strips away the futuristic packaging.`;
  }
  if (entry.category.includes('Gothic & Horror')) {
    return `${focus} Pay attention to setting, secrecy, obsession, and bodily threat, because the fear is carrying the book's argument as much as the plot is.`;
  }
  if (entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return `${focus} Watch how landscapes, companions, enemies, and trials keep testing what kind of person the protagonist really is.`;
  }
  if (entry.category.includes('War & Satire')) {
    return `${focus} Notice which official language, routines, or institutions are being made ridiculous and what moral ugliness the comedy is exposing.`;
  }

  return `${focus} Stay with the pressure points, not just the plot beats, and use the ending to show what the book finally clarifies about character, power, or value.`;
}

function getKeyPoints(entry) {
  const bespokePoints = bespokeKeyPoints[entry.slug];

  if (bespokePoints) {
    return bespokePoints;
  }

  const { first, second, third, fourth, fifth } = getTopicSet(entry);
  const seed = getSlugSeed(entry.slug);

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `${first} is one of the clearest places to start, because it shows what the text thinks wisdom, order, or devotion actually are.`,
      `${second} matters because the book is not just naming an ideal there; it is trying to train conduct, attention, or loyalty around it.`,
      `${third} is usually where the teaching stops sounding ornamental and starts demanding a way of life.`,
      `${fourth} often reveals what kind of discipline, memory, or spiritual posture the book wants to produce in its reader.`,
      `By the end, ${fifth} helps explain why ${entry.title} lasted as a guide for living, not just a source of quotable lines.`
    ];
  }

  if (isLiteraryCategory(entry)) {
    return [
      `${first} is one of the clearest ways the novel tells you what kind of emotional, social, or moral world you are entering.`,
      `${second} matters because it changes relationships, not just events, and that is usually where the book's pressure really sits.`,
      `${third} often turns private feeling into a judgment about class, love, guilt, ambition, or power.`,
      `${fourth} keeps the middle alive by exposing motive, consequence, or self-deception that a simpler plot summary would miss.`,
      `By the end, ${fifth} gathers the book's human cost into its real conclusion.`
    ];
  }

  if (entry.category.includes('Modern History')) {
    return [
      `${first} gets the book moving because it ties the period to concrete governments, actors, or crises instead of vague historical “forces.”`,
      `${second} matters because it shows how institutions, personalities, and contingency keep colliding rather than yielding a one-cause explanation.`,
      `${third} is often where the author's real argument about responsibility, error, or consequence becomes hardest to dodge.`,
      `${fourth} keeps the narrative from becoming date-stacking; it links events to judgment, memory, and aftermath.`,
      `By the end, ${fifth} clarifies what the period changed and why the book still expects later readers to care.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `${first} shows the strategic setting, not just the clash on the surface.`,
      `${second} is where leadership, morale, legitimacy, or logistics usually start deciding outcomes.`,
      `${third} makes clear how political aims and military action keep colliding inside the book.`,
      `${fourth} usually marks the cost of bad judgment, overreach, or institutional weakness rather than serving as a generic “lesson.”`,
      `${fifth} is what keeps the book relevant after the campaign itself ends.`
    ];
  }

  if (entry.category.includes('Self-Development')) {
    return [
      `${first} is part of the book's diagnosis of what people usually do badly by default.`,
      `${second} matters because it shows what habit, practice, or discipline is supposed to replace that failure.`,
      `${third} is where the advice becomes concrete enough to test in ordinary life instead of sitting there as motivational fog.`,
      `${fourth} usually reveals the kind of person the book is trying to build, not just the tactic it recommends.`,
      `${fifth} gathers the book's idea of long-term change into something sturdier than a temporary burst of enthusiasm.`
    ];
  }

  if (entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) {
    return [
      `${first} identifies the real puzzle or blind spot the author wants the reader to see clearly.`,
      `${second} matters because it turns cases and examples into a method rather than a pile of interesting trivia.`,
      `${third} is often where the argument becomes persuasive instead of merely clever or surprising.`,
      `${fourth} shows what the book thinks ordinary judgment, institutions, or received wisdom keep misreading.`,
      `${fifth} is part of the larger shift in perception ${entry.title} is trying to install.`
    ];
  }

  if (entry.category.includes('Art, Music & Culture')) {
    return [
      `${first} lets the book move from object-level detail into a whole culture of taste, ritual, or power.`,
      `${second} matters because the craft details are carrying social meaning rather than sitting there as decoration.`,
      `${third} is often where patrons, audiences, institutions, or court life come sharply into view.`,
      `${fourth} keeps the subject from flattening into a style list by showing what these forms did in lived settings.`,
      `${fifth} is part of why the book treats culture as evidence instead of trivia.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `${first} is one of the clearest pieces of the machine the book wants you to distrust.`,
      `${second} shows how the invented setting pressures ordinary human choices instead of staying background lore.`,
      `${third} is where the warning stops being worldbuilding and starts biting.`,
      `${fourth} usually reveals what the system actually consumes—truth, dignity, loyalty, bodies, or freedom.`,
      `${fifth} is what makes the future setting point straight back at the present.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `${first} is part of the threat architecture, not just a spooky motif floating at the edge of the story.`,
      `${second} matters because it shows where desire, vanity, guilt, or corruption start deforming the book from within.`,
      `${third} is often the pressure point where the fear turns moral or psychological instead of merely atmospheric.`,
      `${fourth} gives the horror lasting force because it stains the body, the home, or the conscience.`,
      `${fifth} gathers the book's warning into something uglier than a single scare.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `${first} gives the journey its first serious test, calling, or pull forward.`,
      `${second} matters because it changes the quest from motion into moral pressure.`,
      `${third} is where the landscape, ally, enemy, or ordeal starts reshaping the protagonist.`,
      `${fourth} keeps the middle from becoming episodic by tying each trial to consequence.`,
      `${fifth} helps show what kind of home, honor, power, or identity the story thinks is worth earning.`
    ];
  }

  if (entry.category.includes('War & Satire')) {
    return [
      `${first} shows what absurd piece of official logic the book is putting on trial.`,
      `${second} matters because it turns the humor into accusation instead of disposable comedy.`,
      `${third} is usually where the joke becomes a structural criticism of a larger institution.`,
      `${fourth} keeps the satire from floating away by making the underlying damage visible.`,
      `${fifth} is what the ending leaves behind as the part of the madness nobody has really solved.`
    ];
  }

  return [
    pickVariant(seed, [
      `A strong way into ${entry.title} is ${first}; that is one of the earliest places the book's real shape becomes visible.`,
      `${first} is one of the clearest entry points into the book, because it gives the rest of the material its first real grip.`
    ]),
    pickVariant(seed + 1, [
      `${second} keeps changing the stakes instead of sitting there as background material.`,
      `${second} matters because it keeps redefining what success, failure, danger, or meaning actually look like.`
    ]),
    pickVariant(seed + 2, [
      `${third} is usually where the book stops sounding abstract and starts showing its logic in action.`,
      `One of the clearest pressure points in the book is ${third}, because that is where the conflict or argument becomes concrete.`
    ]),
    pickVariant(seed + 3, [
      `${fourth} is what keeps the middle from feeling like filler; it links development to consequence.`,
      `Watch how ${fourth} connects major scenes, examples, or reversals rather than appearing once and disappearing.`
    ]),
    pickVariant(seed + 4, [
      `By the end, ${fifth} helps gather the earlier material into the book's actual conclusion.`,
      `Taken together, ${first}, ${second}, and ${fifth} show what ${entry.title} is really trying to make unavoidable.`
    ])
  ];
}

function getImportantLines(entry) {
  const { first, second, third, fourth, fifth } = getTopicSet(entry);
  const seed = getSlugSeed(entry.slug);

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `Mark an early verse, command, scene, or saying that makes ${first} concrete instead of leaving it as a pious abstraction.`,
      `Save a passage where ${second} is attached to actual duty, discipline, devotion, or self-command.`,
      `Underline the line or exchange where ${third} stops sounding like doctrine and starts sounding like lived demand.`,
      `Keep a passage where ${fourth} shows the reader what kind of spiritual or moral posture the text is trying to form.`,
      `Hold onto an ending or late passage that shows what the book finally decides about ${fifth}.`
    ];
  }

  if (isLiteraryCategory(entry)) {
    return [
      `Mark the early scene, exchange, or description that makes ${first} emotionally live from the start.`,
      `Save a passage where ${second} changes how two characters see each other or themselves.`,
      `Underline the moment where ${third} stops being background and becomes a moral or psychological pressure point.`,
      `Keep a scene where narration, imagery, or dialogue makes ${fourth} sharper than summary could.`,
      `Use a late passage that reveals what the novel finally decides about ${fifth}.`
    ];
  }

  if (entry.category.includes('Modern History')) {
    return [
      `Mark the early passage that names the crisis, regime, or setting making ${first} historically urgent.`,
      `Save a paragraph where ${second} is tied to evidence, institutions, or actors rather than broad historical mood.`,
      `Underline a decision point, diplomatic move, reform, or collapse that turns ${third} into a real causal pressure.`,
      `Keep a passage where ${fourth} is used to move from chronology into responsibility, interpretation, or memory.`,
      `Use a late passage that reveals what the author finally wants readers to conclude about ${fifth}.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `Mark the passage that establishes the strategic problem behind ${first}, not just the battle surface.`,
      `Save a line where ${second} clearly narrows the available options for a commander, army, or state.`,
      `Underline a speech, order, maneuver, or battlefield reversal that makes ${third} concrete under pressure.`,
      `Keep a scene where ${fourth} exacts a visible cost in blood, legitimacy, morale, or political stability.`,
      `Use an ending judgment that shows what the book finally thinks ${fifth} reveals about power or leadership.`
    ];
  }

  if (entry.category.includes('Self-Development')) {
    return [
      `Mark the line where the book diagnoses the bad habit, confusion, or failure that makes ${first} necessary.`,
      `Save a passage where ${second} is turned into a practice someone could actually attempt.`,
      `Underline an exercise, rule, or scenario that makes ${third} testable in everyday life.`,
      `Keep the moment where ${fourth} reveals the kind of person the book is trying to build.`,
      `Hold onto a late passage that shows how ${fifth} fits the book's long-game picture of change.`
    ];
  }

  if (entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) {
    return [
      `Mark the sentence where the book states the puzzle, blind spot, or misconception that makes ${first} worth pursuing.`,
      `Save the case, experiment, proof, or example that turns ${second} into method instead of anecdote.`,
      `Underline the point where ${third} overturns a lazy assumption or forces a sharper interpretation.`,
      `Keep a passage where ${fourth} shows what the author thinks most readers or institutions keep getting wrong.`,
      `Use an ending paragraph that makes clear how ${fifth} is supposed to change the reader's judgment.`
    ];
  }

  if (entry.category.includes('Art, Music & Culture')) {
    return [
      `Mark the place where a building, performance, object, or practice first makes ${first} visible in concrete detail.`,
      `Save a passage where craft, form, or style turns ${second} into social evidence rather than decoration.`,
      `Underline the example that makes ${third} legible through one patron, audience, ritual, or institution.`,
      `Keep the paragraph where ${fourth} is tied to lived use, prestige, hierarchy, or collective memory.`,
      `Use a late passage showing how ${fifth} explains the larger culture the book is reconstructing.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `Mark the first scene or description that shows how ${first} is built into the system's machinery.`,
      `Save the moment where ${second} starts shaping a character's actual choices instead of sitting in the background.`,
      `Underline the revelation, investigation, or rupture that turns ${third} into the book's real warning.`,
      `Keep a passage where ${fourth} exposes the human cost of the invented order.`,
      `Use an ending line that makes clear what the book finally decides about ${fifth} and why it points back at the present.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `Mark the first image, temptation, or setting detail that makes ${first} threatening rather than decorative.`,
      `Save the line where ${second} curdles from attraction or vanity into dread, guilt, or corruption.`,
      `Underline the scene where ${third} becomes physically or morally unavoidable.`,
      `Keep a passage where tone or atmosphere makes ${fourth} feel stained, claustrophobic, or damned.`,
      `Use a late passage that shows how ${fifth} is the part of the horror the book refuses to wash clean.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `Mark the call, omen, challenge, or departure that makes ${first} matter from the start.`,
      `Save the passage where ${second} turns travel into testing instead of just motion.`,
      `Underline the ally, enemy, ordeal, or landscape encounter that makes ${third} a genuine turning point.`,
      `Keep the moment where ${fourth} starts exacting a clear cost in loyalty, identity, endurance, or honor.`,
      `Use a late scene that shows what the story finally decides about ${fifth}.`
    ];
  }

  if (entry.category.includes('War & Satire')) {
    return [
      `Mark the first passage that reveals the absurd official logic hiding inside ${first}.`,
      `Save the scene where ${second} turns a joke into an accusation against an institution or routine.`,
      `Underline a contradiction, circular rule, or performance of authority that makes ${third} concrete.`,
      `Keep a line where ${fourth} shows the damage underneath the comedy.`,
      `Use an ending passage that reveals what the book finally decides about ${fifth} and the system wrapped around it.`
    ];
  }

  return [
    pickVariant(seed, [
      `Mark the first passage that makes ${first} concrete instead of merely thematic.`,
      `Save the earliest scene, example, or claim that locks ${first} into place.`
    ]),
    pickVariant(seed + 1, [
      `Notice where ${second} starts changing the stakes for a character, institution, or argument.`,
      `Flag a moment where ${second} stops being background context and starts driving decisions.`
    ]),
    pickVariant(seed + 2, [
      `Find the point where ${third} becomes impossible to treat as an abstract idea.`,
      `Underline a scene, case, speech, or example that turns ${third} into a pressure point.`
    ]),
    pickVariant(seed + 3, [
      `Keep a passage where ${fourth} is made especially vivid, costly, or revealing.`,
      `Save the line or paragraph that shows ${fourth} doing real work inside the book's structure.`
    ]),
    pickVariant(seed + 4, [
      `Use an ending passage that reveals the book's final position on ${fifth}.`,
      `Hold onto the late passage that best explains what the book finally decides about ${fifth}.`
    ])
  ];
}

function getContextNotes(entry) {
  const { first, second, third, fourth } = getTopicSet(entry);

  if (entry.category.includes('Modern History')) {
    return [
      `${entry.title} matters because it uses ${first} to open up a much larger historical field. The point is not only to know what happened, but to see which institutions, ideologies, and decisions made the period take the shape it did.`,
      `${second} and ${third} are usually where the book stops being a timeline and becomes an argument about causation, responsibility, and consequence.`,
      `${fourth} helps explain why the subject stays alive outside the archive. Books like this are also arguments about memory, judgment, and what later readers are supposed to learn from the period.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `${entry.title} matters because it treats conflict as politics under pressure, not as a scoreboard of battles. The strategic setting and the stakes behind the fighting matter from the start.`,
      `${first}, ${second}, and ${third} are where the book usually shows what really decides outcomes: command, morale, intelligence, timing, logistics, or legitimacy.`,
      `${fourth} is part of why the book stays relevant after the immediate campaign ends. The deeper argument is usually about power, leadership, and the cost of bad judgment.`
    ];
  }

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `${entry.title} matters because it is trying to train judgment, conduct, and attention, not just hand the reader a stack of quotable lines.`,
      `${first}, ${second}, and ${third} show how the text defines right order, right action, and the kind of person it wants to form. The teaching and the form of the teaching belong together here.`,
      `${fourth} is part of why the book remains influential. Texts like this survive when they give readers a durable framework for duty, discipline, and ultimate meaning.`
    ];
  }

  if (isLiteraryCategory(entry)) {
    return [
      `${entry.title} matters because it turns private lives into a way of judging a whole social and moral world. Character, desire, class, loyalty, and self-deception usually matter as much as outward event.`,
      `${first}, ${second}, and ${third} are where the book shows how relationships carry its real pressure. In fiction like this, meaning often accumulates through scenes, voice, symbols, and repeated choices rather than direct thesis statements.`,
      `${fourth} is part of why the novel lasts. Books in this lane stay alive when they make inward conflict, social pressure, and consequence feel inseparable.`
    ];
  }

  if (entry.category.includes('Self-Development')) {
    return [
      `${entry.title} matters because it is selling a model of the person as much as a list of tips. Its image of character, action, and self-command is part of the real argument.`,
      `${first}, ${second}, and ${third} are the book's deeper assumptions about what people do wrong and how change is supposed to happen.`,
      `${fourth} is where the advice usually reaches everyday life. That is why books in this category get judged by whether they feel merely energizing or actually usable.`
    ];
  }

  if (entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) {
    return [
      `${entry.title} matters because it takes a real puzzle and turns it into an intelligible argument through cases, examples, or historical explanation.`,
      `${first}, ${second}, and ${third} are what give the reasoning its shape. Good nonfiction does not just hand over facts; it teaches the reader what to notice and how to connect it.`,
      `${fourth} is part of why the book lasts. The best books in this lane sharpen judgment by changing how ordinary evidence, institutions, or discoveries are interpreted.`
    ];
  }

  if (entry.category.includes('Art, Music & Culture')) {
    return [
      `${entry.title} matters because it treats culture as evidence. Style, taste, ritual, and craft are not detached from power, status, or ordinary life.`,
      `${first}, ${second}, and ${third} are where the book usually moves from isolated examples to a wider account of how a whole society imagines prestige, beauty, or order.`,
      `${fourth} is part of the payoff. The subject becomes a way of thinking about memory, craftsmanship, hierarchy, and collective identity instead of a museum label.`
    ];
  }

  if (entry.category.includes('Poetry & Drama')) {
    return [
      `${entry.title} matters because its meaning is carried by language and structure as much as by raw event. Form is part of the pressure, not decoration laid on afterward.`,
      `${first}, ${second}, and ${third} gain force through repetition, contrast, voice, staging, and symbolic language rather than through summary alone.`,
      `${fourth} helps explain why the work still lands. The audience is made to experience the pressure instead of merely hearing about it.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `${entry.title} matters because the journey is being used to test character, loyalty, endurance, or identity rather than to provide a random string of episodes.`,
      `${first}, ${second}, and ${third} are what turn the quest into a pattern of growth, danger, and moral testing.`,
      `${fourth} is part of why the story lasts. Books like this keep speaking because adventure becomes a way of asking who deserves power, home, honor, or survival.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `${entry.title} matters because its imagined world is a warning as well as a setting. Institutions, technologies, and social rules are there to show what becomes dangerous once a system hardens.`,
      `${first}, ${second}, and ${third} are usually where the critique bites hardest. The personal conflict matters because it exposes the moral logic of the invented world.`,
      `${fourth} is part of why the story keeps its force. The book stays relevant when its warning clearly points back toward real problems in truth, freedom, identity, or human dignity.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `${entry.title} matters because fear here is doing interpretive work, not just delivering shocks. The book turns moral, social, or psychological anxiety into narrative pressure.`,
      `${first}, ${second}, and ${third} are what make the atmosphere count for something. They show where the threat is acting on the mind, the body, the home, or the social order.`,
      `${fourth} is part of the reason the book lingers. The fear keeps opening into guilt, corruption, desire, repression, or the limits of human control.`
    ];
  }

  if (entry.category.includes('War & Satire')) {
    return [
      `${entry.title} matters because it uses comedy to expose systems that have become morally upside down. Beneath the absurdity, the book is attacking a real institution or habit of mind.`,
      `${first}, ${second}, and ${third} are what the book makes ridiculous without letting them become trivial. The laughter is part of the indictment.`,
      `${fourth} is what keeps the satire from being disposable. The work lands because it turns jokes into a wider judgment about bureaucracy, war, survival, or the normalization of madness.`
    ];
  }

  return [
    `${entry.title} matters because ${first} and ${second} are not ornamental themes; they are the pressure points that tell you what the book is really doing.`,
    `${third} and ${fourth} show where the conflict, argument, or emotional weight actually develops instead of just decorating the plot.`,
    `The work endures because it gives lasting shape to questions about identity, morality, memory, power, and consequence. That broader significance is what makes the book worth reporting on carefully.`
  ];
}

function getReportAngles(entry) {
  const { first, second, third, fourth, fifth } = getTopicSet(entry);

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `Start with the spiritual, moral, or metaphysical problem that makes ${first} urgent instead of treating it as a detached theme.`,
      `Show how ${second} shapes duty, discipline, devotion, or right order for the kind of person the book wants to form.`,
      `Use a command, parable, dialogue turn, aphorism, or ritual scene to prove what ${third} actually does in the text.`,
      `Pay attention to form—verse, law, meditation, story, commentary—because it changes how ${fourth} is taught.`,
      `Do not let ${fifth} float at the end by itself; connect it to the larger vision of the good life or sacred order prepared earlier.`,
      `Close by stating what kind of soul, community, or loyalty ${entry.title} is trying to produce.`
    ];
  }

  if (isLiteraryCategory(entry)) {
    return [
      `Open with the relationship, wound, desire, or social pressure that makes ${first} matter in this specific novel.`,
      `Show how ${second} changes the emotional or moral stakes instead of merely advancing the plot.`,
      `Use one scene, confrontation, or narrated realization to prove what ${third} actually does.`,
      `Explain how voice, point of view, or recurring imagery makes ${fourth} land harder than summary alone would.`,
      `Tie ${fifth} to the ending as the part of the book that gathers the human cost or judgment.`,
      `Close by stating what the novel sees clearly about love, class, guilt, memory, ambition, or social order.`
    ];
  }

  if (entry.category.includes('Modern History')) {
    return [
      `Open with the concrete crisis, state, or period that makes ${first} historically live.`,
      `Show how ${second} links personalities, institutions, and contingency instead of pretending one cause explains everything.`,
      `Use one decision point, diplomatic move, reform, or collapse to prove what ${third} changes.`,
      `Keep ${fourth} tied to evidence, interpretation, and aftermath rather than reciting dates.`,
      `When you reach ${fifth}, explain how the book wants later readers to assign responsibility, memory, or warning.`,
      `Close with the author's real argument about why this period still matters now.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `Begin with the strategic problem or political stake that makes ${first} more than battlefield scenery.`,
      `Show how ${second} affects decision-making, morale, timing, legitimacy, or logistics.`,
      `Use a campaign, speech, maneuver, or breakdown to demonstrate ${third} under pressure.`,
      `Treat ${fourth} as a consequence of command choices, not as an abstract lesson pasted on later.`,
      `Tie ${fifth} to what the war reveals about power once the immediate fighting is over.`,
      `Close by stating what the book sees clearly about leadership, conflict, or statecraft.`
    ];
  }

  if (entry.category.includes('Self-Development')) {
    return [
      `Start with the failure of habit or judgment that makes ${first} necessary.`,
      `Show how ${second} moves from slogan to discipline with real behavioral consequences.`,
      `Use an exercise, principle, or scenario to make ${third} testable in daily life.`,
      `Explain what kind of person ${fourth} is supposed to build rather than listing it as a tip.`,
      `Tie ${fifth} to the book's long-game idea of change instead of a single wave of motivation.`,
      `Close by saying what version of maturity, effectiveness, or self-command the book is actually selling.`
    ];
  }

  if (entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) {
    return [
      `Open with the exact puzzle or misconception that makes ${first} worth arguing about.`,
      `Explain how ${second} turns examples into reasoning instead of a pile of facts.`,
      `Use one case, experiment, proof, or historical episode to show ${third} doing real explanatory work.`,
      `Let ${fourth} reveal what the author thinks normal judgment or normal institutions keep missing.`,
      `Carry ${fifth} into the ending as the broader change in how the reader is supposed to think.`,
      `Close with the habit of mind ${entry.title} is trying to install.`
    ];
  }

  if (entry.category.includes('Art, Music & Culture')) {
    return [
      `Begin with the object, style, or practice that makes ${first} visible on the ground.`,
      `Show how ${second} connects craft detail to patronage, ritual, class, or power.`,
      `Use one building, performance, artwork, court, or meal to make ${third} concrete.`,
      `Treat ${fourth} as social evidence, not just aesthetic description.`,
      `Let ${fifth} explain why the subject carries prestige, memory, or identity beyond the object itself.`,
      `Close by stating what kind of culture the book reconstructs through these details.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `Open with the system, city, institution, or technology that makes ${first} dangerous.`,
      `Show how ${second} presses on ordinary lives rather than staying background lore.`,
      `Use one investigation, rebellion, revelation, or breakdown to make ${third} bite.`,
      `Explain what ${fourth} reveals about the human cost of the invented order.`,
      `Tie ${fifth} to the book's warning about the present, not just its fictional future.`,
      `Close by stating what this imagined world exposes more clearly than realism could.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `Start with the temptation, secret, or setting that makes ${first} threatening from the beginning.`,
      `Show how ${second} links beauty, desire, repression, or corruption to the book's fear.`,
      `Use one portrait, room, letter, confession, or encounter to make ${third} physically vivid.`,
      `Explain how tone and atmosphere make ${fourth} morally charged rather than merely eerie.`,
      `Bring ${fifth} into the ending as the stain the book refuses to wash clean.`,
      `Close by stating what rot in the person or social world the horror exposes.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `Begin with the call, exile, quest, or journey pressure that makes ${first} matter.`,
      `Show how ${second} turns travel into testing instead of a string of episodes.`,
      `Use one ally, enemy, landscape, or ordeal to prove what ${third} changes in the protagonist.`,
      `Explain how ${fourth} ties the adventure to questions of worth, loyalty, or identity.`,
      `Bring ${fifth} into the ending as the earned or lost thing the quest was really about.`,
      `Close by saying what sort of person the story thinks deserves home, honor, or survival.`
    ];
  }

  if (entry.category.includes('War & Satire')) {
    return [
      `Open with the absurd system or official logic that makes ${first} ridiculous in the first place.`,
      `Show how ${second} turns laughter into accusation instead of light entertainment.`,
      `Use one scene of bureaucratic madness, contradiction, or circular logic to prove what ${third} does.`,
      `Explain how ${fourth} exposes the moral ugliness underneath the joke.`,
      `Tie ${fifth} to the ending as the part of the madness that never really goes away.`,
      `Close by stating what institution or habit of mind the book is actually trying to indict.`
    ];
  }

  return [
    `Open with the specific situation, argument, or relationship that makes ${first} matter in this book, not just in books generally.`,
    `Show how ${second} changes the stakes once the opening setup gives way to real pressure.`,
    `Use one scene, speech, case study, or turning point to prove what ${third} actually does inside the work.`,
    `Explain how structure, tone, evidence, imagery, or symbolism makes ${fourth} hit harder than a bare plot summary would.`,
    `Do not let the ending float by itself; connect ${fifth} back to the earlier material that prepared it.`,
    `Close by stating what ${entry.title} sees clearly about society, history, belief, character, or power that a generic summary would miss.`
  ];
}

function getDetailedSummary(entry) {
  const { first, second, third, fourth, fifth } = getTopicSet(entry);
  const intro = `${entry.summary} The book keeps returning to ${first} and ${second}, which is where its deeper pressure sits.`;
  const bespokeReport = bespokeDetailedReports[entry.slug];

  if (bespokeReport) {
    return bespokeReport;
  }

  if (entry.category.includes('Manifestos & Politics')) {
    return [
      `${entry.title} works as an extended political argument rather than a neutral piece of analysis. ${entry.summary} The opening usually defines a crisis, names the forces said to be responsible for it, and presents the existing order as weak, corrupt, or incapable of solving the problem on its own.`,
      `From there, the book builds its case by linking ${first}, ${second}, and ${third} into a single explanation of how power operates and why change is necessary. The ideas are arranged so that each claim strengthens the next and makes the worldview feel internally complete.`,
      `The middle sections usually turn that analysis into a worldview. Opponents are simplified, causes are ranked, and political conflict is framed as a struggle between necessity and failure rather than as a debate between legitimate alternatives.`,
      `Tone is part of the book's substance. Certainty, blame, urgency, prophecy, and ideological language are used to make the argument feel inevitable and to turn interpretation into momentum.`,
      `Later chapters move from diagnosis to prescription, showing how ${fourth} and ${fifth} are supposed to justify a program, a warning, or a political future. The book's practical claims only make sense once its picture of crisis and authority has been fully established.`,
      `By the end, ${entry.title} stands as both an argument and a political artifact. Its importance lies not only in what it advocates, but in the kind of world it imagines, the fears and hopes it organizes, and the kind of action or obedience it tries to make seem reasonable.`
    ];
  }

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `${entry.title} is structured as a sustained reflection on truth, moral order, and human purpose rather than as a loose collection of inspirational lines. ${entry.summary} The opening typically establishes the spiritual problem or philosophical tension at the center of the work and defines the kind of life the text treats as serious, disciplined, or worthy.`,
      `Early sections often lay out the book's basic vocabulary: what counts as wisdom, what counts as error, and how the soul, the self, duty, or the sacred world are meant to be understood. Those starting assumptions shape everything that follows.`,
      `In the main body, the book keeps returning to ${first}, ${second}, and ${third}. Depending on the text, those ideas may be developed through verse, dialogue, mythic narrative, command, meditation, or repeated contrasts between the higher and lower ways of living.`,
      `Method matters because the form is part of the message. Some works persuade by argument, some by sacred story, and some by repetition meant to reform attention itself. The result is that the reader is not only given claims, but also trained in a particular way of seeing and judging.`,
      `Later sections bring ${fourth} and ${fifth} into sharper focus and show what the earlier teaching is trying to produce: peace, discipline, devotion, self-command, memory, enlightenment, or right relation to the sacred.`,
      `By the end, ${entry.title} offers a larger vision of what a human being is for and how a meaningful life is supposed to be ordered. That is why these books endure: they do not just present ideas, they try to reshape conduct, identity, and ultimate loyalty.`
    ];
  }

  if (isLiteraryCategory(entry)) {
    return [
      `${entry.title} is built as a literary narrative in which character, setting, and social pressure matter as much as overt plot. ${entry.summary} The opening usually establishes the wound, desire, class position, or moral imbalance that will govern how the reader sees everything afterward.`,
      `Very quickly, the book shows that outward events only matter because of what they do to relationships. ${first}, ${second}, and ${third} become the main lines through which attachment, resentment, ambition, guilt, memory, or longing are made legible.`,
      `The middle of the work usually deepens through scenes of conversation, misreading, exposure, temptation, or reversal. Instead of pushing only toward action, the novel keeps asking what people want, what they hide, and what they are willing to sacrifice to keep a self-image intact.`,
      `Form matters here as much as event. Voice, point of view, symbolic detail, recurring places, and the rhythm of scenes make the moral pressure accumulate gradually rather than arriving as a thesis statement.`,
      `Later sections bring ${fourth} and ${fifth} into sharper focus and show what the earlier choices have really cost. The ending usually matters because it clarifies whether the book believes insight, reconciliation, punishment, endurance, or loss is the truest response to what has happened.`,
      `By the end, ${entry.title} has used individual lives to say something broader about society and the human heart. That is why books like this last: they turn specific people and situations into a durable judgment about love, class, guilt, desire, memory, or moral responsibility.`
    ];
  }

  if (entry.category.includes('Modern History')) {
    return [
      `${entry.title} works as an interpretive history, not just a chronology of events. ${entry.summary} The opening chapters usually set the period, introduce the major actors and institutions, and make clear why the subject carries political or moral weight beyond the immediate timeline.`,
      `Once that frame is established, the book starts linking incidents into an argument. ${first}, ${second}, and ${third} become the main structure through which documents, speeches, policies, movements, and individual decisions are turned into a coherent explanation of the past.`,
      `The middle of the book is where causation becomes more important than sequence. Instead of merely telling the reader what happened next, the author explains why certain pressures built up, why particular decisions were taken, and how institutions or beliefs shaped what followed.`,
      `Good historical writing also moves constantly between people and systems. Leaders matter, but so do bureaucracies, public moods, ideological habits, economic constraints, and the inherited structures that make some outcomes more likely than others.`,
      `Later chapters usually widen the focus and show why ${fourth} and ${fifth} matter beyond the immediate case. The book turns a specific narrative into a larger argument about memory, responsibility, nationalism, empire, social change, or political judgment.`,
      `By the end, ${entry.title} is making a claim about meaning as much as about fact. It tells the reader not only what happened, but what ought to be understood about the period, why the subject still matters, and how that past continues to shape the present.`
    ];
  }

  if (entry.category.includes('Art, Music & Culture')) {
    return [
      `${entry.title} reads as a cultural history of taste, creativity, and social meaning. ${entry.summary} The opening normally establishes the period, setting, and institutions that shape the culture under discussion so the reader can see how art, music, food, or style are produced, ranked, and consumed.`,
      `That setting matters because culture in books like this is never just decorative. Courts, cities, workshops, salons, religious spaces, theaters, restaurants, and patrons all determine what counts as refinement, prestige, authenticity, or excellence.`,
      `As the discussion expands, ${first}, ${second}, and ${third} become the main way the book explains how works and practices take on meaning. Style is tied to status, ritual, identity, labor, craft, and historical change rather than treated as an isolated aesthetic object.`,
      `The middle chapters usually become strongest when they focus on examples: specific buildings, performances, menus, artworks, or habits of taste that reveal a whole social world. Concrete cases show how beauty, pleasure, authority, and discipline get embodied in everyday cultural forms.`,
      `Later sections often shift from description to legacy and show why ${fourth} and ${fifth} continue to matter. The subject becomes a way of thinking about heritage, memory, aspiration, creativity, and the public display of values.`,
      `By the end, ${entry.title} teaches the reader to interpret culture historically. Its larger claim is that artistic or everyday forms are never only personal preferences; they store power, hierarchy, identity, and collective memory.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `${entry.title} studies conflict as a problem of leadership, organization, and judgment rather than as a simple sequence of fights. ${entry.summary} The opening usually explains the political setting, the rival powers involved, and the pressures that make confrontation seem inevitable.`,
      `Very quickly, the book establishes what is really at stake: territory, legitimacy, survival, revenge, prestige, imperial power, or the maintenance of order. Those stakes give the campaigns and battles their meaning.`,
      `In the central movement, ${first}, ${second}, and ${third} shape the major turning points. The book usually shows that outcomes depend on planning, morale, intelligence, timing, terrain, logistics, alliances, and command discipline as much as on raw force.`,
      `The middle chapters often reveal deeper patterns underneath the action. Individual decisions matter, but so do political structures, institutional habits, fear, ambition, and the quality of leadership under pressure.`,
      `Later sections widen the lens and show why ${fourth} and ${fifth} matter beyond the battlefield itself. Military events become part of a larger argument about kingship, empire, state power, social order, memory, or strategic thought.`,
      `By the end, ${entry.title} is explaining what conflict teaches about power and judgment. Its lasting value comes from the kind of leadership it rewards, the mistakes it exposes, and the way it connects victory or defeat to larger political and human realities.`
    ];
  }

  if (entry.category.includes('Poetry & Drama')) {
    return [
      `${intro} The opening establishes the dramatic situation, the central relationships, and the emotional pressure that gives the first scenes their force. Conflict is usually present from the start, even before it has fully expanded into tragedy, revelation, or collapse.`,
      `Early speeches, confrontations, and symbolic details matter because they reveal motive and expose the values at stake. In poetry and drama, the language is never separate from the action; it is one of the main ways the work tells the audience what kind of world they are in.`,
      `As the work develops, ${first}, ${second}, and ${third} intensify through conflict, misunderstanding, hesitation, temptation, or moral weakness. The pressure builds through scenes and reversals rather than through simple plot summary.`,
      `The middle of the work often deepens the meaning through imagery, repetition, irony, contrast, and tonal change. These formal choices make the emotional movement feel inevitable and give the drama its interpretive weight.`,
      `By the final movement, ${fourth} and ${fifth} come fully into view through recognition, reversal, catastrophe, or hard-won understanding. The ending does not just close the story; it reveals what the conflict has really been about.`,
      `That is why the work endures. ${entry.title} leaves the reader or audience with a sharpened sense of power, guilt, love, ambition, identity, fate, or human weakness, and its form makes those insights feel heavier than paraphrase alone can capture.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `${intro} The opening sets the larger journey, quest, or ordeal in motion and establishes the world through which the characters will be tested. Stakes are usually defined early through exile, danger, prophecy, loyalty, inheritance, or the threat of disorder.`,
      `The first encounters matter because they establish the story's moral direction. Companions, promises, enemies, sacred obligations, or family ties give the later episodes their meaning and make the adventure feel like more than movement from one obstacle to another.`,
      `As the narrative unfolds, ${first}, ${second}, and ${third} organize the main trials. Each test reveals something about courage, endurance, leadership, loyalty, cunning, or the cost of pursuing a larger purpose.`,
      `The middle of the work usually becomes richer as the setting expands. Landscapes, monsters, rival peoples, rituals, magical forces, or dangerous choices turn the journey into a map of the world's order and disorder.`,
      `By the final movement, ${fourth} and ${fifth} show what the journey has actually achieved. The ending clarifies whether the hero has merely survived, restored something, discovered an identity, or learned what kind of power can be carried without corruption.`,
      `That larger meaning is why these books last. ${entry.title} finally speaks about courage, belonging, destiny, leadership, and moral endurance, using adventure to ask what kind of person can move through danger without losing the center of the self.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `${intro} The opening establishes an imagined system with its own rules, technologies, institutions, and methods of control. In books like this, the world is part of the argument: the setting itself shows what the author thinks becomes dangerous when power, knowledge, or innovation take a particular shape.`,
      `Early chapters usually show how ordinary life is disciplined by that system. Thought, memory, language, work, desire, status, and social routine are shaped so that control feels normal before the main conflict fully emerges.`,
      `As the story develops, ${first}, ${second}, and ${third} become the main pressure points through which the book tests its own world. Individual decisions matter because they expose the moral logic hidden inside the larger system.`,
      `The middle of the work usually sharpens the warning by revealing that what first looked efficient, rational, or progressive is also manipulative, dehumanizing, or spiritually empty. The book's critique becomes clearer as the costs of the system become harder to ignore.`,
      `By the end, ${fourth} and ${fifth} make the larger message unmistakable. The fate of the characters shows what the imagined society believes about truth, freedom, conformity, resistance, or the future of human life.`,
      `That is what gives the story its force beyond its plot. ${entry.title} uses an invented world to push recognizable fears in the real one into clearer focus, turning fiction into a warning about politics, technology, language, culture, or human behavior.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `${intro} The opening establishes dread, instability, or mystery long before the full threat is visible. In gothic and horror fiction, atmosphere is part of the substance of the book because fear changes how space, time, and even ordinary perception are experienced.`,
      `Very early on, the story usually introduces a place, obsession, absence, secret, or invading force that disturbs the emotional order of the world. That disturbance sets the tone and makes the reader feel that reality itself has become unreliable or contaminated.`,
      `As the plot deepens, ${first}, ${second}, and ${third} intensify through isolation, secrecy, temptation, obsession, bodily threat, or psychic pressure. The fear becomes a way of uncovering what characters cannot master or safely admit.`,
      `The middle of the work often reveals that the horror is social or psychological as much as physical. Questions of guilt, repression, desire, power, corruption, identity, and forbidden knowledge start to emerge beneath the immediate danger.`,
      `By the ending, ${fourth} and ${fifth} explain why the fear mattered in the first place. The final events usually expose a larger argument about moral weakness, collapse, vulnerability, or the thinness of civilized control.`,
      `That deeper pressure is why the book lingers. ${entry.title} turns fear into meaning by showing what happens when the mind, the body, the home, or the social order can no longer keep darkness at a distance.`
    ];
  }

   if (entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) {
    return [
      `${entry.title} is organized around explanation, interpretation, and the gradual development of a central claim. ${entry.summary} The opening usually frames the main puzzle clearly and explains why the topic matters before moving into evidence or case material.`,
      `Once that question is in place, the book builds its argument by linking ${first}, ${second}, and ${third} through examples, case studies, comparisons, or historical episodes. Each section adds another layer to the explanation rather than simply repeating the headline idea.`,
      `The middle of the work is usually where the method becomes clearest. Facts are not left sitting on the page by themselves; they are interpreted so the reader can see patterns, hidden mechanisms, or mistaken assumptions that were easy to miss at first.`,
      `This is what gives the book its intellectual shape. The author moves from illustration to interpretation, showing not only what happened or what exists, but what way of thinking makes the evidence meaningful.`,
      `Later sections bring ${fourth} and ${fifth} into sharper focus and widen the scope of the argument. The immediate topic starts to connect to larger questions about judgment, institutions, history, behavior, science, or social life.`,
      `By the end, ${entry.title} leaves the reader with a more specific claim about how the world works and how it should be interpreted. Its value lies in the habits of thought it encourages, the assumptions it challenges, and the sharper lens it gives the reader for seeing familiar things differently.`
    ];
  }

  if (entry.category.includes('Self-Development')) {
    return [
      `${entry.title} is a practical argument about how a person is supposed to change. ${entry.summary} The opening usually identifies a common weakness or confusion in the reader's life and then presents the kind of transformation the book believes is possible.`,
      `Very early, the author lays out a view of human behavior built around mindset, habit, awareness, ambition, fear, discipline, or responsibility. That model of the person gives the later advice its logic.`,
      `As the book progresses, ${first}, ${second}, and ${third} become the main principles the reader is asked to adopt. The ideas are usually arranged as a sequence or system so that one change in thought or behavior supports the next.`,
      `The middle chapters often reinforce the message through stories, examples, contrasts, and memorable formulas. The point is not only to explain the principle, but to make it feel usable, emotionally convincing, and repeatable in ordinary life.`,
      `Later sections bring ${fourth} and ${fifth} into practice and show what the transformed person is meant to look like in action: more disciplined, more effective, calmer, more responsible, more decisive, or more internally ordered.`,
      `By the end, ${entry.title} has also revealed its deeper vision of the good life. It is not just offering tips; it is promoting a picture of character, success, and self-command that explains why the advice feels powerful to some readers and limited to others.`
    ];
  }

  if (entry.category.includes('War & Satire')) {
    return [
      `${intro} The book uses absurdity to expose the logic of a real institution or system. Its opening usually presents a world that is already irrational, morally compromised, or bureaucratically distorted, so the reader can feel the target of the satire from the start.`,
      `Because the setting is already warped, ordinary actions begin to look revealing. Rules cancel each other out, authority becomes self-protective, and language starts to hide reality instead of describing it.`,
      `As the story develops, ${first}, ${second}, and ${third} intensify through repetition, contradiction, and comic escalation. The humor does not soften the critique; it makes the disorder impossible to ignore.`,
      `The middle sections are usually where the satire becomes most damaging. Ridiculous episodes show how institutions keep working even when everyone inside them can see that the logic is cruel, stupid, or empty.`,
      `By the end, ${fourth} and ${fifth} reveal what remains after the official slogans and polite justifications have been stripped away. The plot resolves, but it also leaves the system morally exposed.`,
      `That is the book's lasting force. ${entry.title} uses laughter, shock, and exaggeration to reveal truths about war, bureaucracy, power, survival, or moral compromise that would sound flatter in direct argument alone.`
    ];
  }

  return [
    `${intro} The opening establishes the main characters or subjects, the social setting, and the first pressure shaping the book. Those early pages matter because they define the conflict, desire, or question that will organize everything that follows.`,
    `Once that foundation is in place, the work begins building its deeper meaning through scene, argument, or example. What first looks simple usually starts to widen into a more serious claim about relationships, identity, morality, memory, or power.`,
    `As the book develops, ${first}, ${second}, and ${third} become the main pattern through which its meaning unfolds. Turning points matter because they show how those forces change the direction of the story or the argument.`,
    `The middle sections often reveal what is hidden underneath the surface: motives, tensions, mistaken assumptions, or consequences that were only partly visible at the beginning. Pressure makes the deeper structure of the work easier to see.`,
    `By the later stages, ${fourth} and ${fifth} bring the central meaning into sharper focus. The ending gains force because it gathers the earlier material into a clearer judgment about what has been won, lost, exposed, or finally understood.`,
    `That final movement is what gives ${entry.title} its larger significance. The book ends up saying something broader about society, belief, desire, identity, memory, or human nature, which is why it remains worth reading as more than a bare plot or summary.`
  ];
}

function getExpandedSummaryNotes(entry) {
  const { first, second, third, fourth, fifth } = getTopicSet(entry);

  if (entry.category.includes('Manifestos & Politics')) {
    return [
      `The argument gains force through rhetoric as much as through evidence. Repetition, blame, certainty, urgency, and dramatic simplification make ${first} and ${second} feel not merely plausible, but historically necessary.`,
      `The book is often just as revealing in what it excludes. The treatment of ${third}, ${fourth}, and ${fifth} can show where the worldview becomes selective, distorted, or dangerous.`
    ];
  }

  if (entry.category.includes('Religion & Philosophy')) {
    return [
      `These works also shape the reader through posture as much as through doctrine. Contemplation, obedience, recollection, dialogue, repetition, or mythic imagination can all be part of how ${first} and ${second} are supposed to enter the reader's life.`,
      `Difficulty is usually central rather than accidental. Suffering, failure, temptation, duty, and moral struggle are often the conditions through which ${third}, ${fourth}, and ${fifth} become spiritually or philosophically real.`
    ];
  }

  if (isLiteraryCategory(entry)) {
    return [
      `Novels like this do their real work through accumulation. Gesture, dialogue, silence, setting, and recurring symbols can make ${first} and ${second} more revealing than any single plot event.`,
      `The ending usually reinterprets what came before. The treatment of ${third}, ${fourth}, and ${fifth} shows whether the book finally leans toward irony, pity, reconciliation, indictment, or tragic exposure.`
    ];
  }

  if (entry.category.includes('Modern History')) {
    return [
      `The strongest history books move between individual actors and larger structures without letting either level dominate. That movement is especially important when ${first} and ${second} could otherwise be reduced to a few famous names or dates.`,
      `They are also arguments about memory. The treatment of ${third}, ${fourth}, and ${fifth} shows how the author wants later readers to interpret the past, not merely remember it.`
    ];
  }

  if (entry.category.includes('Art, Music & Culture')) {
    return [
      `Books in this category are strongest when they keep moving between the object and the world around it. Buildings, artworks, performances, and traditions matter because ${first} and ${second} are always tied to patrons, audiences, institutions, and everyday habits of taste.`,
      `By the end, ${third}, ${fourth}, and ${fifth} usually become part of a broader lesson in how culture stores identity, hierarchy, memory, and power.`
    ];
  }

  if (entry.category.includes('History & Warfare') || entry.category.includes('Strategy & Philosophy')) {
    return [
      `The real substance of these books often lies in the link between immediate action and long-term structure. Battles matter, but command, logistics, morale, fear, and political purpose are what give ${first} and ${second} their explanatory depth.`,
      `They also reveal what kind of judgment the author respects. The treatment of ${third}, ${fourth}, and ${fifth} usually shows whether the book values patience, adaptability, deception, audacity, moral authority, or ruthless efficiency.`
    ];
  }

  if (entry.category.includes('Poetry & Drama')) {
    return [
      `In literary works like these, language carries meaning as heavily as plot. Metaphor, rhythm, recurring images, speeches, pauses, and reversals give ${first} and ${second} their emotional and interpretive force.`,
      `By the final scenes or closing lines, ${third}, ${fourth}, and ${fifth} usually feel intensified or tragically clarified, which is why the ending lands with more force than a simple summary can convey.`
    ];
  }

  if (entry.category.includes('Epic & Myth') || entry.category.includes('Adventure') || entry.category.includes('Fantasy')) {
    return [
      `The worlds in these books are rarely random backdrops. Roads, seas, monsters, rival peoples, sacred places, and trials help explain what kind of order or disorder the hero is moving through, giving ${first} and ${second} a larger symbolic weight.`,
      `The journey is also a test of maturity. By the end, ${third}, ${fourth}, and ${fifth} usually reveal whether the hero has merely survived or has actually learned something about duty, identity, fate, belonging, or leadership.`
    ];
  }

  if (entry.category.includes('Dystopian') || entry.category.includes('Science Fiction')) {
    return [
      `A key part of the book's argument is usually how the imagined system reproduces itself. Rules, technologies, routines, myths, and incentives make distortion feel normal, which is where ${first} and ${second} become especially revealing.`,
      `The warning also becomes sharper when it is named precisely. ${third}, ${fourth}, and ${fifth} usually point back toward dangers that already exist in real politics, culture, technology, or human behavior.`
    ];
  }

  if (entry.category.includes('Gothic & Horror')) {
    return [
      `The fear in these books usually has a shape and an argument behind it. Settings, secrets, bodies, doubles, voices, and forbidden knowledge make ${first} and ${second} mean more than simple atmosphere.`,
      `The ending often refuses total closure, which is part of the effect. ${third}, ${fourth}, and ${fifth} usually remain unsettled even after the final event, and that lingering pressure is what makes the work continue to haunt the reader.`
    ];
  }

  if (entry.category.includes('Ideas & Nonfiction') || entry.category.includes('Science & Math History')) {
    return [
      `The force of good nonfiction lies in the movement of the argument, not just the final claim. Questions, examples, distinctions, and reinterpretations are what make ${first} and ${second} persuasive rather than merely asserted.`,
      `These books also train habits of mind. The treatment of ${third}, ${fourth}, and ${fifth} usually shows whether the author is cultivating skepticism, curiosity, historical awareness, clearer reasoning, or a new way of interpreting familiar evidence.`
    ];
  }

  if (entry.category.includes('Self-Development')) {
    return [
      `Advice books usually rest on an implicit theory of the person. ${first} and ${second} become clearer once they are seen as parts of a larger view of weakness, motivation, discipline, and personal agency.`,
      `The later sections also show how the book translates principle into practice. ${third}, ${fourth}, and ${fifth} reveal whether the advice is concrete, demanding, flexible, idealistic, or repetitive.`
    ];
  }

  if (entry.category.includes('War & Satire')) {
    return [
      `Satire works here through tone as much as through event. Repetition, contradiction, deadpan description, circular logic, and absurd escalation expose the emptiness of institutions more effectively than direct denunciation, which is why ${first} and ${second} cannot be separated from the book's style.`,
      `The ending usually leaves unease rather than comfort. ${third}, ${fourth}, and ${fifth} reveal what people have learned to accept as normal, and that normalization is often the book's deepest target.`
    ];
  }

  return [
    `Method still matters in the background of the summary. Point of view, structure, contrast, repetition, and the arrangement of scenes or examples shape how ${first} and ${second} are actually felt by the reader.`,
    `The ending also changes the meaning of what came before. Whether the work closes with victory, loss, uncertainty, or reflection, ${third}, ${fourth}, and ${fifth} help explain what the final pages want the reader to understand more deeply.`
  ];
}

function getBluntConclusion(entry) {
  const bespoke = bespokeTldrs[entry.slug];
  if (bespoke) {
    return bespoke;
  }

  const seed = getSlugSeed(entry.slug);
  const { first, second, third, fourth, fifth } = getTopicSet(entry);
  const cleanedSummary = trimEndingPunctuation(entry.summary || `${entry.title} matters`);
  const mode = getTldrMode(entry);
  const opener = getTldrLead(entry, cleanedSummary);
  const focus = getTldrFocusSentence(entry, mode, [first, second, third], seed);
  const closer = getTldrVerdictSentence(entry, mode, [fourth, fifth], seed + 1);

  return [`${opener} ${focus}`, closer];
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
