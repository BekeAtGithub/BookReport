const slug = document.body.dataset.bookSlug;
const book = (window.bookReports || []).find(entry => entry.slug === slug);

const panelEl = document.querySelector('.panel');
const categoryEl = document.getElementById('bookCategory');
const titleEl = document.getElementById('bookTitle');
const summaryEl = document.getElementById('bookSummary');
const topicListEl = document.getElementById('topicList');
const topicHeadingEl = topicListEl?.previousElementSibling?.tagName === 'H2'
  ? topicListEl.previousElementSibling
  : null;

let authorEl;
let keyPointsEl;
let detailedSummaryEl;
let tldrEl;
let keyPointsSectionEl;
let detailedSummarySectionEl;
let tldrSectionEl;

const bespokeDetailedReports = {
  'the-old-man-and-the-sea': [
    `The Old Man and the Sea opens with Santiago already carrying the weight of failure. He has gone many days without catching a fish, and the village sees him as unlucky, but Hemingway makes clear from the beginning that the old man still possesses pride, skill, and a deeply disciplined sense of vocation. The tenderness between Santiago and the boy Manolin gives the opening emotional warmth and also frames the novel as a story about inheritance, loyalty, and the passing on of a code for how to live.`,
    `Once Santiago rows far out into the Gulf Stream and hooks the great marlin, the novella narrows into an ordeal of endurance. The struggle is physical, but Hemingway enlarges it by having Santiago speak to himself, to the fish, and to the sea as though all three belonged to the same moral universe. The marlin is not just a catch. It becomes an adversary Santiago admires and measures himself against, which makes the contest feel ceremonial rather than merely competitive.`,
    `The later movement deepens that tension by forcing Santiago to win and lose almost at the same time. He kills the marlin through extraordinary patience and skill, yet sharks strip away the tangible reward before he can bring it home. That central irony means outward defeat never cancels inner greatness. The voyage back turns the novella from an adventure into a meditation on what can and cannot be taken from a person.`,
    `Hemingway fills the novella with dignity, isolation, craftsmanship, suffering, and spiritual endurance. Santiago's hands, wounds, hunger, and exhaustion make perseverance visible. The sea is not presented simply as nature in the abstract, but as a living field of struggle where beauty, violence, and necessity exist together. Its spareness is part of the force: the language is stripped down so the reader feels the purity of the test.`,
    `The ending feels victorious even though Santiago returns with only the marlin's skeleton. The novel's lasting claim is that human worth is measured by courage, discipline, and the refusal to surrender one's inner standard. Santiago cannot control luck or the world, but he can control how he meets them, and that is what gives the novella its enduring emotional power.`
  ],
  'green-hills-of-africa': [
    `Green Hills of Africa is much more than a hunting narrative. Hemingway uses the African safari as a stage where travel, competition, skill, conversation, and self-presentation all carry meaning. The opening establishes camp life, the rhythm of the hunt, and the author's fascination with landscape, weather, animals, and the social world that forms around the expedition.`,
    `As the safari moves through different hunting episodes, the action is never only about killing game. The pursuit of kudu and other animals becomes a test of patience, eyesight, nerve, and endurance. Hemingway repeatedly turns attention to the details of tracking, waiting, and judging distance, and those details reveal how seriously he values craft and competence in the face of difficulty.`,
    `The middle stretch also opens into reflection. Conversations about writing, literature, truth, and artistic standards make the safari feel like a moving intellectual workshop as well as an adventure. This gives the narrative a layered quality: the hunt is an immediate physical experience, but it is also a way for Hemingway to think about what it means to see clearly, to write honestly, and to measure oneself against demanding standards.`,
    `The narrative also carries visible tensions. It presents masculinity, competition, and performance in a very self-conscious way, and it is shaped by the colonial setting in which Europeans and Americans move through Africa with authority and privilege. The result is a text that is vivid and confident on the surface, but also revealing about the era's assumptions, ambitions, and blind spots.`,
    `It remains interesting even for readers who care less about hunting itself. The safari becomes a portrait of Hemingway trying to turn lived experience into art and trying to discover whether courage, style, and truthful observation can be made to coincide. That double ambition gives the work its continuing interest as both travel narrative and performance of the values Hemingway wanted his life and prose to embody.`
  ],
  'the-sun-also-rises': [
    `The Sun Also Rises begins in the drifting world of postwar expatriates, where cafés, taxis, hotels, and late-night conversations create an atmosphere of movement without real direction. Jake Barnes stands at the center of the novel as a man whose war wound has damaged not only his body but also his emotional future. His attachment to Brett Ashley gives the opening its sadness, because the novel quickly makes clear that love, desire, and fulfillment will never align neatly for these characters.`,
    `The trip from Paris to Spain gives the novel its real structural movement. What first seems like a change of scenery becomes a pressure chamber in which rivalries, attractions, resentments, and illusions come into the open. Robert Cohn, Mike Campbell, Brett, Jake, and later Romero are all caught in a shifting web of jealousy and performance. The fiesta in Pamplona intensifies everything already present in the group rather than creating new problems from nowhere.`,
    `Bullfighting is especially important because Hemingway uses it as a measure of authenticity. Pedro Romero's grace and control stand against the emotional disorder of the expatriate circle. Jake recognizes in the bullring a kind of discipline and courage missing from the lives around him, and that contrast helps explain why the novel's outwardly casual style carries such moral weight. What characters do, how they drink, how they speak, and how they endure embarrassment all matter in this world.`,
    `The novel's later sections show the group breaking apart under pressures that have been building all along. Cohn's humiliations, Brett's attraction to Romero, and Jake's helpless loyalty bring the emotional contradictions of the novel into full view. The ending in Madrid does not resolve the love story; instead, it makes the impossibility of that resolution unmistakable. Jake and Brett can imagine another life together, but only as a painful fantasy.`,
    `The novel is not merely about glamorous sadness or travel. It is a disciplined portrait of a generation damaged by war, stripped of easy ideals, and trying to invent meaning through style, companionship, appetite, and endurance. The final power of Hemingway's novel lies in its restraint: the feelings are so carefully controlled on the surface that their emptiness and pain become even more devastating underneath.`
  ],
  'heart-of-darkness': [
    `Heart of Darkness starts on the Thames, with Marlow telling his story from the deck of the Nellie, and that frame is crucial, since the imperial center is haunting the Congo before the steamer ever arrives there. Marlow is hired to retrieve Kurtz, but even his passage through Brussels — the polished “whited sepulchre” of European respectability — hints that the language of trade and civilization is hiding something rotten. Once he reaches the stations, broken machinery, pointless blasting, starving laborers, and petty agents make the colonial mission look less like order than like greed with paperwork.`,
    `The upriver movement gives Conrad his strongest atmosphere. Fog, drums, rumor, delay, and the sense of moving deeper into an opaque system keep tightening the pressure on Marlow’s mind. One of the sharpest reversals in the story is the cannibal crew, who show more discipline under deprivation than the supposedly superior Europeans around them. Conrad keeps exposing imperial hierarchy as theater: the people armed with titles and rifles look frightened, grasping, and incompetent, while the people they exploit are treated as background until the narrative forces attention back onto their suffering.`,
    `Kurtz enters as a voice long before he appears as a body. Reports, whispers, and his own rhetoric make him sound like a visionary of the Company, someone who can extract ivory and compose ideals in the same breath. When Marlow finally reaches him, Kurtz is not a simple villain but a concentration of appetite, vanity, brilliance, and unrestrained power. The hut ringed with severed heads and the scrawl “Exterminate all the brutes!” show what happens when imperial ambition stops bothering to disguise itself as uplift. Kurtz is terrifying not because he is alien to the system, but because he expresses it too honestly.`,
    `Marlow’s return to Europe matters as much as the river itself. He hears Kurtz die with “The horror! The horror!” on his lips, then later lies to Kurtz’s Intended instead of delivering the truth. That choice is crucial. Conrad refuses the comforting ending where exposure leads to moral clarity. The same culture that sent men to plunder the Congo also depends on drawing-room myths about nobility, sacrifice, and progress, and Marlow cannot quite bring himself to smash those illusions in person.`,
    `What gives Heart of Darkness its lasting bite is the way colonial violence, psychological disintegration, and narrative ambiguity stay fused together. Conrad does not hand over a clean adventure or a neat moral lecture. He offers a fevered account of extraction, worship of force, and the ease with which refined societies outsource brutality. Kurtz is monstrous, but the more disturbing suggestion is that Europe made room for him long before the jungle did.`
  ],
  'a-passage-to-india': [
    `A Passage to India begins in Chandrapore, where every social gesture is already bent by the Raj. Aziz can be charming, impulsive, and generous, and Cyril Fielding can behave decently across the racial line, yet Forster makes clear from the start that goodwill operates inside a structure built to humiliate. The mosque meeting, the Club, and the absurd “Bridge Party” all expose the same pattern: the British want India administered, not genuinely encountered. Friendship has to fight the political atmosphere before any personal failure even enters the scene.`,
    `Adela Quested and Mrs. Moore arrive wanting the “real India,” but Forster never lets that desire remain innocent. Adela’s curiosity is mixed with abstraction and confusion, while Mrs. Moore’s openness runs into the sheer difficulty of human contact across religion, language, class, and empire. Aziz’s invitation to the Marabar Caves grows out of generosity and wounded pride at once, which is why the whole excursion feels unstable before it even begins. Everyone is trying to mean well while standing on ground that is already broken.`,
    `The Marabar section is the center of the story because the caves destroy ordinary explanation. Their echo reduces speech, prayer, civility, and distinction to the same dead “boum,” and Adela’s accusation against Aziz detonates all the racial suspicion the Anglo-Indian order has been storing up. Forster is brilliant here because he does not turn the crisis into a tidy mystery. The real force comes from watching uncertainty harden into imperial certainty the moment the frightened Englishwoman and the accused Indian man fall into their assigned roles.`,
    `The trial and everything after it expose the limits of liberal decency. Fielding stands by Aziz, but his fairness remains personal rather than structural. Adela retracts the charge, yet the damage cannot simply be undone, because the accusation has revealed what British rule already assumes about race, truth, and whose fear counts. By the time the narrative reaches Mau, affection between Aziz and Fielding still exists, but politics has entered the bloodstream of their friendship.`,
    `Forster’s achievement lies in refusing the sentimental ending where sincerity defeats empire. The final answer — not now, not yet — is what gives the work its force. Landscape, bureaucracy, religion, festival, misunderstanding, and wounded pride keep colliding, and no single character can simplify India into a lesson. That resistance to simplification is exactly why the novel stays alive.`
  ],
  'catch-22': [
    `Catch-22 drops the reader into Pianosa, where Yossarian and the rest of the squadron live under rules engineered to make self-preservation look irrational. Colonel Cathcart keeps raising the mission count, Doc Daneeka explains the trap that gives the story its title, and every official voice insists the system is reasonable precisely when it is most murderous. Heller’s brilliance is that the insanity is never random. The bureaucracy works exactly as intended: it protects itself, multiplies paperwork, and treats the airmen as expendable inventory.`,
    `Yossarian’s fear is the moral center. He is not a coward in any cheap sense; he is one of the only people still responding sanely to the fact that strangers are trying to kill him for reasons that have nothing to do with him. Around that fear Heller builds an unforgettable gallery: Milo Minderbinder turning war into a syndicate, Major Major hiding from his own office, Scheisskopf worshipping parades, and the chaplain stumbling through a universe that punishes innocence as efficiently as guilt. Each figure makes the machinery funnier and filthier at the same time.`,
    `Heller’s fractured structure keeps circling back to trauma. Snowden’s death is withheld, revisited, and finally shown in full, and once that scene lands, huge portions of the earlier absurdity darken instantly. Heller trains the reader to laugh at circular orders, bizarre conversations, and institutional stupidity, then forces that laughter to answer for the torn body inside the plane. The result is not a sudden change from comedy to seriousness, but the realization that the comedy was built on horror from the beginning.`,
    `Milo’s contracts, the bombing of one’s own side for profit, and the bland euphemisms of command turn capitalism and military hierarchy into the same joke with different stationery. No single mastermind is required; incentives do the work. That is why Catch-22 feels larger than one wartime farce. It shows how organizations become machines for laundering cruelty into procedure while everyone inside them claims to be following orders, economics, or administrative necessity.`,
    `In the closing movement, Yossarian’s refusal to cooperate with the script of noble sacrifice is what gives the story its bite. Orr’s disappearance stops looking like nonsense and becomes a model of escape, while Yossarian’s decision to run to Sweden registers as one of the few intact acts of judgment left in the novel. Heller leaves behind not a patriotic lesson but a savage account of institutions that call madness duty and call survival selfishness.`
  ],
  'the-great-gatsby': [
    `The Great Gatsby begins with Nick Carraway renting a house in West Egg and discovering that Long Island society is sorted by invisible but rigid lines. East Egg carries inherited assurance, West Egg carries noisy arrival, and the valley of ashes sits between them as the cost nobody elegant wants to discuss. Fitzgerald makes setting do real work: geography itself becomes a map of class, performance, and moral insulation.`,
    `Gatsby’s parties are the most seductive surfaces in the story and also the first major warning sign. Guests arrive uninvited, gossip invents the host faster than facts can catch up, and Nick slowly realizes that Gatsby has built an entire public persona to serve one private fixation. James Gatz has remade himself into Jay Gatsby, but the mansion, pink suit, imported shirts, and perfect hospitality are all instruments in a campaign to retrieve Daisy Buchanan and freeze time around one Louisville romance.`,
    `Tom and Daisy matter because Fitzgerald never lets wealth stay glamorous for long. Tom’s brutality, Daisy’s softness without courage, Myrtle’s desperate reach, and George Wilson’s ash-gray exhaustion show a social order in which desire always moves downward into damage. The Plaza Hotel confrontation is where the whole arrangement cracks. Gatsby can display money, but Tom understands that pedigree still controls the room, and Daisy cannot bear the cost of crossing that line for real.`,
    `The symbols land because they stay attached to material systems rather than floating above the plot. The green light is Gatsby’s private beacon and America’s public promise at once. Doctor T. J. Eckleburg watches over waste rather than revelation. The car is mobility, status, and lethal irresponsibility in one object. Fitzgerald keeps translating dream language back into property, class, distance, and carelessness.`,
    `After Myrtle is killed, the mood changes from glitter to exposure. Gatsby keeps watch outside Daisy’s house like a man guarding a fantasy that has already abandoned him, and Nick discovers that almost nobody who consumed Gatsby’s hospitality will stand up for him in death. That ending is why the story stays sharp. It is not merely sad that Gatsby wants the past back; it is devastating that the people best protected by money can let others absorb the wreckage and then disappear into comfort.`
  ],
  '1984': [
    `1984 begins by immersing the reader in a world where control extends into language, memory, work, and the body. Winston Smith is introduced not as a grand rebel, but as an ordinary man whose private dissatisfaction already feels dangerous. The power of the opening lies in how fully Orwell makes the state present in everyday life: telescreens watch constantly, history is rewritten, slogans replace thought, and even inner life seems vulnerable to invasion.`,
    `Winston's rebellion first takes the form of memory and language. His diary, his uncertain recollections, and his desire to preserve a private self are politically significant because the Party's power depends on making reality unstable and ownership of truth impossible. Julia then enlarges the rebellion by introducing secrecy, desire, and temporary physical freedom, which gives the novel a fragile middle section in which resistance appears almost imaginable.`,
    `The later part of the novel destroys that hope with deliberate cruelty. O'Brien's betrayal matters not simply because it defeats Winston personally, but because it reveals a system that does not settle for obedience. The Party seeks domination at the deepest possible level, aiming to reshape perception itself. The torture sequences, especially in the Ministry of Love, are central because they show how fear, pain, and isolation can be used to dismantle both belief and identity.`,
    `Power, truth, language, surveillance, and the destruction of inward freedom are made concrete through Newspeak, the memory hole, the Two Minutes Hate, Room 101, and the repeated insistence that reality belongs to whoever controls it. Oceania works as a warning about political systems that do not merely govern bodies but seek to colonize minds.`,
    `The ending is one of the most chilling in modern fiction. Winston is not martyred; he is remade. His love for Big Brother is the novel's final proof that total power aims at spiritual conquest, not just submission. Orwell leaves the reader with a vision of how fragile truth and personhood become when language is corrupted, fear is organized, and public lies overpower private memory.`
  ],
  'moby-dick': [
    `Moby-Dick opens with Ishmael looking for the sea as if it were medicine, then immediately widens into a world of inns, sermons, shipowners, harpoons, and cosmologies. The pairing of Ishmael and Queequeg is crucial from the start. Their unexpected friendship gives the narrative warmth and comic life before the Pequod ever sails, and it also establishes Melville’s interest in fellowship across custom, race, and creed. Those early chapters do not merely set the stage; they create the moral and imaginative range that Ahab will later try to collapse into one obsession.`,
    `Once aboard the Pequod, Melville makes whaling concrete: wages, rope, blubber, hierarchy, storms, work routines, and the strange democracy of men trapped together at sea. That density is why the cetology chapters matter. They are not filler pasted around the chase. They show a narrator trying to classify what resists classification, and that effort gives the whale an intellectual scale long before it becomes Ahab’s personal enemy. The world of the ship feels lived in enough that obsession can later destroy something real rather than a symbolic sketch.`,
    `Ahab’s quarter-deck speech is the turning point. Up to that point the voyage still belongs partly to commerce and seamanship; afterward it belongs to one man’s vendetta. Melville gives Ahab an almost theatrical force, but he does not leave the character as pure grandeur. Fedallah’s eerie presence, Starbuck’s revulsion, and the crew’s coerced complicity show a captain turning command into possession. Every later encounter — the gam with the Rachel, the warnings from other ships, the prophecies circling the white whale — measures how completely Ahab has subordinated duty to monomania.`,
    `The whale itself keeps slipping every stable meaning. Melville can make Moby Dick seem like brute animal power, cosmic blankness, divine insult, unreadable nature, or the object onto which a damaged mind projects everything it cannot master. That instability is the point. Ahab wants a final adversary he can strike through, whereas Ishmael’s style keeps generating more analogies, more knowledge, more wonder, and more uncertainty. One consciousness narrows; the other expands.`,
    `The last chase hits so hard because Melville has spent hundreds of pages loading the sea with labor, myth, theology, comedy, and dread. The Pequod goes down, Ahab is dragged with his own line, and Ishmael survives by clinging to Queequeg’s coffin, one of the strangest and best turns in the entire work. Moby-Dick stays enormous because it is simultaneously a whaling manual, a revenge tragedy, a metaphysical argument, and a record of how catastrophic a single will becomes when it tries to turn the whole world into a target.`
  ],
  'lord-of-the-flies': [
    `Lord of the Flies starts with boys, not savages. Ralph finds the conch, assemblies are called, shelters are planned, and the signal fire is supposed to bind rescue, order, and shared purpose together. Golding’s cruelty is that he lets the apparatus of civilization appear in miniature before showing how thin it is. The island does not corrupt some previously innocent paradise; it exposes how quickly hierarchy, vanity, fear, and appetite reorganize the group.`,
    `The struggle between Ralph and Jack is not just a clash of personalities. Ralph is trying, however imperfectly, to keep collective priorities visible: fire, shelter, rules, speaking in turn. Jack wants spectacle, meat, paint, obedience, and the thrill of becoming the center of a tribe. Once hunting gives him status, politics stops being about competence and turns into theater backed by intimidation. That shift turns the island frightening in a new way.`,
    `Piggy and Simon provide the two most important alternative intelligences in the story. Piggy understands procedure, evidence, and the practical uses of reason, but his body and accent make him easy for the others to dismiss. Simon sees more deeply than anyone else that the beast is not an animal waiting in the jungle but something the boys are carrying with them. His encounter with the pig’s head — the Lord of the Flies itself — turns the moral argument into an image: the terror on the island is generated from within and then worshipped as if it came from outside.`,
    `The two killings mark the descent in different registers. Simon dies in a storm of chant, fear, and ecstatic misrecognition; Piggy dies in daylight, with the conch shattered beside him, after organized cruelty has become explicit rule. By that point Jack’s camp has masks, raids, punishments, and weapons. Golding is careful here: the boys do not lose order altogether. They create a new one built on violence, myth, and the pleasure of belonging to the stronger side.`,
    `The naval officer at the end does not restore innocence. His arrival only widens the frame, because the children have reproduced on a beach the same logic of domination and war that the adult world is already living out. That final irony gives Lord of the Flies its force. Civilization and savagery are not opposites lined up neatly against each other; one keeps leaking into the other.`
  ],
  'the-divine-comedy': [
    `The Divine Comedy begins with Dante lost in a dark wood, and the lostness is moral, political, intellectual, and personal at the same time. Virgil arrives not just as a guide but as the authority of classical reason, leading the pilgrim through an afterlife arranged with startling precision. From the first cantos onward, Dante is doing far more than offering religious scenery. He is building a total map in which sin, punishment, memory, history, and desire all have exact shape and consequence.`,
    `Inferno is unforgettable because every punishment clarifies a character. Francesca carried by the winds, Ugolino gnawing in the ice, flatterers sunk in filth, and the sowers of schism cut open again and again all stick in the mind because contrapasso makes the inner logic of sin visible. Hell is not random torture. It is a realm where souls become trapped in the deformed loves, appetites, hatreds, and identities they refused to relinquish on earth. Dante also fills it with Florentine enemies, popes, and public figures, so moral vision and political score-settling are deliberately entangled.`,
    `Purgatorio changes the rhythm completely. Souls still suffer, but now suffering has direction. Pride is bent low under stone, envy has its eyes sewn shut, wrath walks through smoke, and the mountain becomes a school in relearning desire. The poem grows warmer here because music, prayer, memory, friendship, and hope enter the frame differently. Virgil can guide only so far, though, and that limit matters: reason can lead upward, but it cannot by itself carry the pilgrim into beatific vision.`,
    `Beatrice’s arrival marks the shift from correction to illumination. Paradiso is the hardest cantica for many readers because it trades grotesque physical imagery for light, motion, proportion, intellect, and praise, but that difficulty belongs to the poem’s point. Dante is trying to imagine a reality where blessed souls are more themselves, not less, because their loves are ordered correctly. The further he ascends, the more language strains, since paradise exceeds the kinds of concrete description that worked below.`,
    `What keeps The Divine Comedy so powerful is the sheer boldness of its construction. Dante puts classical epic, Christian theology, autobiography, exile, metaphysics, lyric intensity, and partisan politics inside one ascending structure held together by terza rima and obsessive formal control. The result is not just a tour of the afterlife. It is an argument that the universe has shape and that human souls are deformed or fulfilled according to what they love.`
  ],
  'crime-and-punishment': [
    `Crime and Punishment opens in poverty, heat, claustrophobia, and mental strain, placing the reader inside Raskolnikov's fractured consciousness from the start. His decision to murder the pawnbroker is prepared not as a simple act of greed, but as the result of pride, desperation, resentment, and a theory that certain extraordinary individuals may stand above ordinary moral law. The crime matters not only because it happens, but because it exposes the self-deceiving logic through which Raskolnikov tries to justify it.`,
    `The murder itself, along with the unexpected killing of Lizaveta, turns the novel immediately from argument into spiritual crisis. The central stretch is not about escaping detection in the ordinary thriller sense. Instead, it traces guilt as fever, paranoia, alienation, and inner disintegration. Raskolnikov's mind becomes the real battlefield of the novel, and his inability to live peacefully with his own idea reveals the emptiness of that idea.`,
    `Characters like Sonya, Porfiry, Razumikhin, Dunya, and Svidrigailov are central because each one reflects a different possible response to suffering, power, and moral responsibility. Sonya in particular matters as the novel's counterforce to pride. Through humility, endurance, and compassion, she represents a path back toward human connection and redemption that Raskolnikov cannot reach until his intellectual arrogance is broken.`,
    `The novel's later movement toward confession and Siberian punishment marks the beginning of transformation rather than the simple closing of a legal case. Dostoevsky makes punishment inward before it becomes outward. The formal sentence matters, but the deeper question is whether Raskolnikov can accept moral reality and rejoin the human world he has tried to stand above.`,
    `Crime and Punishment endures as both psychological and philosophical fiction. It examines crime, but even more powerfully it examines pride, suffering, conscience, and the longing for renewal. The final pages suggest that redemption becomes possible only when abstraction gives way to humility, relationship, and the painful acceptance of shared human limits.`
  ],
  'war-and-peace': [
    `War and Peace opens in drawing rooms rather than on battlefields, immediately establishing Tolstoy's central method: history will be shown through the lives of families, friendships, marriages, ambitions, and disappointments as much as through armies and emperors. Pierre, Prince Andrei, Natasha, and the wider network of Russian aristocratic life are introduced in a way that makes private experience inseparable from national history. That breadth of design is essential to the novel from the first pages.`,
    `As the novel moves between salons, estates, military campaigns, and domestic crises, Tolstoy refuses to separate public greatness from ordinary vulnerability. Battles such as Austerlitz and Borodino matter, but so do dances, engagements, letters, spiritual crises, and family scenes. The novel repeatedly insists that history is lived by embodied people whose hopes, mistakes, and limitations cannot be reduced to abstract historical formulas.`,
    `The middle and later sections are especially powerful because characters undergo long, uneven transformations. Pierre moves through confusion, idealism, humiliation, and moral awakening. Andrei confronts ambition, disillusionment, injury, and mortality. Natasha passes from vitality through error and grief toward greater maturity. These slow inward developments are where much of the novel's emotional and philosophical depth resides.`,
    `At the same time, Tolstoy uses Napoleon's invasion and the burning of Moscow to challenge heroic ideas of history. His essays and reflections argue against the notion that great men alone shape events. The novel's historical philosophy is part of its structure: the same work that gives the reader intimate scenes of love and suffering also questions how causation, leadership, and national destiny are usually understood.`,
    `War and Peace remains one of the greatest novels ever written because it does not simply combine war and domestic life; it shows that the meaning of history is inseparable from the moral and emotional life of individuals. The final power of the novel lies in its vastness joined to its humanity: it treats empires, families, time, death, and spiritual searching as parts of one living whole.`
  ],
  'anna-karenina': [
    `Anna Karenina begins with disorder in a household, but the novel quickly expands into a wide portrait of family life, social expectation, desire, and moral strain. Anna's entrance into the story immediately gives it radiance and danger. Her intelligence, charm, and emotional intensity make her compelling from the start, yet Tolstoy places her within a society whose codes of marriage, status, and respectability are rigid, unequal, and unforgiving. That tension drives the novel from the first pages.`,
    `The novel gains its full depth by placing Anna's story beside Levin's. Anna and Vronsky move deeper into passion, scandal, and estrangement, while Levin moves through work, courtship, doubt, and a search for meaningful life. Levin is not a side plot. His storyline is essential because it provides another way of asking what love, labor, sincerity, and moral truth might look like in a compromised world.`,
    `As Anna becomes increasingly isolated, the novel shows how social hypocrisy and personal fear reinforce each other. Her affair begins in emotional intensity, but later chapters reveal jealousy, suspicion, dependence, and despair. The tragedy is powerful because Tolstoy does not present Anna as a simple victim or villain. Instead, he makes the reader experience the narrowing of her world and the exhaustion of her hope.`,
    `The later movement toward Anna's death and Levin's spiritual awakening gives the novel its double ending. These two conclusions speak to one another. Anna's fate exposes the cruelty of a society that judges women differently from men, but it also shows the destructive force of emotional absolutism when trust and inner steadiness collapse. Levin's final insight does not erase pain, yet it offers a more durable way of living within uncertainty.`,
    `Anna Karenina joins psychological precision to social vision. Tolstoy turns passion, marriage, faith, family, class, and moral confusion into an exact portrait of how difficult it is to live truthfully among competing claims of desire, duty, and society. That depth keeps Anna's tragedy and Levin's search permanently alive.`
  ],
  'jane-eyre': [
    `Jane Eyre begins by establishing Jane's emotional and moral formation through injury, exclusion, and resistance. Her childhood at Gateshead and her years at Lowood are not simply background episodes; they teach the reader how Jane's integrity is built. From the start Jane is a narrator who insists on her own inward reality. She may be poor, plain, and socially vulnerable, but she refuses to see herself as spiritually lesser.`,
    `At Thornfield, the novel deepens into a blend of romance, psychological tension, and gothic mystery. Jane's growing attachment to Rochester is rooted in conversation, intelligence, and emotional recognition rather than superficial charm. Rochester attracts Jane because he engages her mind as well as her feelings, and the atmosphere of secrecy in the house prevents that attraction from becoming simple or secure.`,
    `The interrupted wedding and the revelation of Bertha Mason form the novel's central turning point. Jane's decision to leave is essential because it shows that love alone is not enough for her. She will not accept a relationship that destroys her moral independence, even at the cost of profound suffering. The later episodes of wandering, inheritance, and St. John Rivers extend the novel's concern with vocation, conscience, and the right balance between feeling and duty.`,
    `When Jane returns to Rochester, the ending works because both characters have changed. Rochester has lost power and gained humility, while Jane has secured autonomy, resources, and self-command. The union is therefore not a surrender, but a relationship finally made possible on terms of greater equality. The novel prepares this resolution carefully by making independence a condition of love rather than an obstacle to it.`,
    `Jane Eyre remains so influential because it is a romance, but it is also a fierce argument for female inwardness, dignity, and moral agency. Jane's voice gives the novel its authority, and the lasting power of the work lies in how completely it binds desire to conscience without reducing either one.`
  ],
  'wuthering-heights': [
    `Wuthering Heights opens through layers of narration, and that structure matters. Lockwood first encounters the strange atmosphere of Wuthering Heights from the outside, but Nelly Dean's long retrospective narrative then draws the reader into the violent history of the Earnshaws, the Lintons, Catherine, and Heathcliff. The frame creates both distance and intimacy, making the story feel at once legendary, local, and unstable.`,
    `The emotional center of the novel lies in the bond between Catherine Earnshaw and Heathcliff, a bond so intense that it resists ordinary categories of affection or social compatibility. Catherine's decision to marry Edgar Linton is a crucial turning point, because it joins social ambition to emotional betrayal. That choice shapes Heathcliff's revenge and links private injury to the destruction of whole households.`,
    `The novel's second movement is driven by Heathcliff's return and by the relentless extension of his bitterness across both generations. Violence, coercion, inheritance, and emotional cruelty dominate these chapters, but the novel's force comes from how it presents obsession as both terrible and compelling, refusing easy moral simplification.`,
    `Equally important is the second generation. Cathy, Hareton, and Linton replay parts of the earlier drama, but they also create the possibility of change. The movement from inherited damage toward partial reconciliation gives the novel a larger structure than pure revenge, and the younger characters alter the emotional climate of the ending.`,
    `The novel is so haunting because it is about passion, class, revenge, and possession, but also about narrative itself: how stories are retold, distorted, and preserved. The wildness of the moors, the instability of the narrators, and the extremity of feeling all contribute to a work that feels less like social realism than like a storm of memory, desire, and unresolved human intensity.`
  ],
  'great-expectations': [
    `Great Expectations begins with Pip as a frightened child in a graveyard, and this opening scene is essential because it introduces fear, guilt, class anxiety, and the instability of appearances all at once. The convict Magwitch enters the novel like a figure of terror, yet Dickens later transforms him into one of its deepest sources of feeling. Dickens keeps unsettling Pip's first judgments.`,
    `Pip's visits to Satis House give the novel its second major pressure point. Miss Havisham's frozen world and Estella's beauty create in Pip a painful sense of social inadequacy. From this point forward, his desire to become a gentleman is tied not only to ambition but also to shame. Dickens makes class aspiration emotionally convincing while also exposing its deforming power.`,
    `The revelation of Pip's benefactor is one of the novel's great turning points because it destroys the fantasy on which he has built his future. He has imagined refinement, romance, and advancement as if they naturally belonged together, but Magwitch's return forces him to confront the rough, morally entangled origins of his expectations. The middle and later sections become a long education in disillusionment and sympathy.`,
    `Joe, Biddy, Herbert, Jaggers, Wemmick, and Magwitch embody the moral alternatives around Pip. Joe's loyalty, Magwitch's rough devotion, and Wemmick's divided life show that Dickens is interested in character as moral texture, not just in plot. Pip grows not by becoming grander, but by learning to see value where his vanity once saw only embarrassment.`,
    `The novel remains so moving because it is a coming-of-age story, but also a critique of class fantasy and self-deception. Pip's real education lies in learning that love, loyalty, and moral worth cannot be secured by status. That is why the novel's emotional force survives its melodrama: Dickens turns humiliation and aspiration into a searching account of how a person learns to judge rightly.`
  ],
  'the-picture-of-dorian-gray': [
    `The Picture of Dorian Gray opens in an atmosphere of beauty, refinement, and influence, but the novel quickly turns that elegance into moral danger. Basil Hallward's portrait captures Dorian's youth and charm, while Lord Henry's brilliant, corrosive talk begins to reshape how Dorian thinks about pleasure, selfhood, and responsibility. The novel's first movement is not only about temptation, but about the power of language to make corruption sound attractive.`,
    `Dorian's wish that the portrait bear the marks of age and sin while he remains outwardly untouched gives the novel its central device and its central moral argument. Once the wish is granted, the story becomes a study in divided existence. Publicly Dorian remains beautiful and admired; privately he descends into cruelty, vanity, and secret vice. The portrait functions as conscience made visible.`,
    `The Sibyl Vane episode is especially important because it reveals how quickly Dorian learns to treat other people as instruments of sensation rather than as moral realities. Later chapters, including the murder of Basil and Dorian's increasing fear of exposure, show the cost of living as if aesthetics could be separated from ethics. The more perfectly Dorian preserves the surface, the more monstrous the hidden truth becomes.`,
    `The novel's themes include influence, duplicity, desire, performance, conscience, and the relationship between art and life. Wilde is not simply condemning beauty or pleasure. Instead, he is exploring what happens when style is severed from responsibility and when the self is treated as an object to be endlessly curated rather than a character to be morally formed.`,
    `The ending feels inevitable. Dorian's attempt to destroy the portrait is really an attempt to escape judgment without transformation, and that is why it kills him. Wilde's novel lasts because it combines wit, atmosphere, and moral seriousness in a way that makes its warning unforgettable: no surface can remain innocent once the soul beneath it has been trained to love corruption.`
  ],
  '7-habits-of-highly-effective-people': [
    `The 7 Habits of Highly Effective People is a practical argument that lasting success has to be built on character rather than on quick tricks or surface techniques. Covey begins by contrasting a shallow personality ethic with a deeper character ethic, arguing that effectiveness comes from principles such as responsibility, integrity, and disciplined self-government rather than from image management alone. That contrast explains the logic of the whole book.`,
    `The first three habits form what Covey calls a movement toward private victory. Be Proactive asks the reader to take responsibility for choices instead of living reactively. Begin with the End in Mind pushes the reader to define purpose, values, and desired direction before acting. Put First Things First then turns those values into practice through time management, discipline, and the ordering of priorities. These habits build on one another rather than standing alone.`,
    `The next three habits move from self-mastery to relationships and public life. Think Win-Win argues that healthy cooperation depends on mutual benefit rather than domination. Seek First to Understand, Then to Be Understood teaches deep listening before persuasion. Synergize presents teamwork as something more than compromise: it is the creation of better outcomes through trust, difference, and creative cooperation. At this stage Covey shifts from independence toward interdependence.`,
    `The seventh habit, Sharpen the Saw, gives the system its long-term rhythm by insisting on renewal. Covey argues that physical, mental, emotional, and spiritual maintenance are not extras but conditions for sustaining effectiveness. That emphasis prevents the framework from collapsing into a one-time productivity formula; instead, it presents growth as something that must be renewed continuously.`,
    `Its long influence comes from a core claim that personal effectiveness is not mainly about speed or ambition, but about aligning habits with enduring principles. Whether readers find Covey inspiring or idealistic, the appeal lies in the way he links personal responsibility, purpose, discipline, communication, cooperation, and renewal into one coherent model of self-development.`
  ],
  'how-spies-think': [
    `David Omand's How Spies Think is a guide to disciplined judgment under conditions of uncertainty. He is not only describing intelligence agencies; he is also showing how ordinary readers can think more carefully when information is partial, motives are hidden, and events are still unfolding. Its real subject is reasoning under pressure.`,
    `The opening lessons focus on how analysts build order out of incomplete information. Situational awareness stresses that our picture of reality is always fragmentary. Explanation then asks what model best makes sense of the facts. Estimations moves from explanation toward probabilistic judgment about what may happen next. Strategic notice widens the frame further by emphasizing the need to detect threats and opportunities early enough to act. These first four lessons create a method for seeing, explaining, estimating, and anticipating.`,
    `The middle chapters become more psychological by examining the ways judgment goes wrong. Omand warns that our own demons, biases, and fixed ideas can distort analysis. He adds that obsessive states of mind make people cling to false patterns, while deception and manipulation mean that even apparently solid evidence may be staged or misleading. The argument treats error as both internal and external.`,
    `The later lessons move from analysis to interaction and strategy. Readers are urged to imagine themselves in the shoes of the person on the other side, to recognize trustworthiness as the basis of durable partnerships, and to understand that modern subversion increasingly operates through digital channels. This final movement connects intelligence not just to secret information, but to empathy, alliances, and the changing character of conflict in the information age.`,
    `These lessons remain useful beyond espionage because the central claim is that good thinking requires humility, probabilistic reasoning, resistance to bias, alertness to deception, and awareness of long-term risk. Omand turns intelligence practice into a broader model for reasoning well when certainty is impossible and mistakes can be costly.`
  ],
  'arvisura': [
    `Arvisura presents sacred ancestry and legendary origins as the foundation of a people's spiritual identity. Rather than reading like detached academic history, it blends myth, memory, and national tradition so that origins become a source of meaning, continuity, and obligation in the present.`,
    `Early chapters link mythic history to heroic identity. Figures, lineages, and remembered struggles are used to show what kind of character the tradition admires: courage, fidelity to inheritance, and loyalty to an order that is older and larger than the individual self.`,
    `The central movement treats spiritual tradition and memory as living forces rather than as museum material. Legend is used to interpret history, and history is used to keep legend morally active, so Arvisura continually turns remembrance into a question of cultural survival.`,
    `Because of that structure, nation and legend are never merely decorative themes. They become ways of explaining how a people see themselves, what they honor, and what they fear losing when continuity with the past is broken.`,
    `In its closing movement, Arvisura reads as an attempt to recover identity through sacred memory. Its force comes from the claim that ancestry, mythic history, and spiritual inheritance are not ornamental stories, but the framework through which a nation understands destiny, obligation, and belonging.`
  ],
  'bloodlines': [
    `Bloodlines takes place in Varangantua, the immense hive-city on Alecto where class difference is built into the architecture of everyday life. Agusto Zidarov is a veteran probator who already knows that the city runs on influence, bribery, exhaustion, and selective enforcement long before the main case begins. When he is summoned to the estate of the wealthy magnate Udmil Terashova to locate her missing son and heir, the job first looks like one more upper-class cleanup operation, with money trying to erase scandal before it becomes public rot. The setup immediately shows how the privileged live behind walls, retainers, and private discretion while the rest of the city is left to crowding, grime, fear, and institutional indifference.`,
    `As Zidarov pushes past the family's official version of events, the investigation drifts from noble embarrassment into the lower arteries of Varangantua, where gangs, pleasure dens, and black-market commerce meet Imperial bureaucracy. The missing heir's trail leads toward the practice of cell-draining, one of the novel's ugliest ideas and one of its clearest statements about the Imperium's moral structure. Young bodies are harvested so that the rich can buy stolen vitality in rejuvenat treatments, which means the distance between the hive's elite and its poor is not just economic or aesthetic. The comfort at the top is literally sustained by consuming life from below. Chris Wraight uses that crime to make the social order feel obscene rather than merely unequal.`,
    `The case then escalates in classic noir fashion. What seemed like a missing-person inquiry becomes entangled with gang violence, corporate pressure, compromised officials, and the self-protective reflexes of the entire city. Zidarov's efforts to break the cell-draining network trigger a disastrous raid, casualties inside the enforcer ranks, and a widening conflict that leaves him squeezed from every direction. The important thing is not only that the plot becomes more dangerous, but that every layer of Varangantua turns out to be connected to every other one. The underworld is not separate from respectable society. Trade combines, family dynasties, street predators, and official enforcement all feed each other while pretending to stand apart.`,
    `Alongside the investigation, Chris Wraight keeps returning to Zidarov's home life, and that is one reason the novel lands so well. He is not a detached detective with nothing to lose. He is a husband and father trying to hold together a household that has been worn thin by his career, his secrecy, and the wider brutality of Imperial life. His daughter Naxi's movement toward the Imperial Guard gives the story another angle on the setting, because enlistment appears at once as escape, duty, and another form of surrender to the machinery of the Imperium. Those domestic scenes make the world feel larger than the case file. Varangantua is not only a place of crime scenes and interrogations. It is a place where ordinary family bonds are steadily ground down by fear, ambition, distance, and the constant pressure to survive.`,
    `In the closing stretch, Bloodlines delivers justice only in the harsh and partial way this setting allows. Zidarov uncovers enough of the truth to expose how tightly the missing heir, the cell-draining racket, and the city's elite interests are knotted together, but there is no cleansing resolution waiting on the other side of revelation. Varangantua remains what it was from the beginning: a machine for turning hierarchy into daily reality. The rich are cushioned, perfumed, protected, and extended; the poor are crowded, disposable, and useful mainly as labor, bodies, or collateral damage. Bloodlines stands out because it shows that in the Imperium, privilege is not a softer version of the same life. It is a different species of existence built on everyone else's ruin.`
  ],
  'lord-of-the-rings': [
    `The Lord of the Rings begins by taking the ordinary world of the Shire and placing it under the shadow of an evil that cannot be managed through comfort, delay, or private innocence. Frodo inherits the Ring, but more importantly he inherits a burden no one can carry lightly. Tolkien makes the early movement through the Shire, Bree, and Rivendell matter because the quest is never just geographic. It is moral from the start. The closer the characters get to the truth about the Ring, the clearer it becomes that power itself is the danger, even when it is imagined in the hands of the wise or the well-intentioned.`,
    `The Fellowship provides Tolkien's first great image of unity, but Tolkien is too serious a writer to leave unity simple. Boromir's fall, the breaking of the company, and the splintering of the narrative all show that loyalty has to survive separation, uncertainty, and failure. Aragorn, Legolas, and Gimli move through Rohan and Gondor in one register of the story, where kingship, war, stewardship, and public responsibility come to the front. Frodo and Sam move in another, harsher register, where exhaustion, temptation, secrecy, and pity do the real moral work. That split structure prevents heroism from being reduced to one style.`,
    `Frodo's road with Sam and Gollum is the story's deepest test. Gollum is not merely a monster trailing the plot. He is the visible image of what the Ring does over time, and that is why Bilbo's and Frodo's pity toward him turns out to matter so much. The approach to Mordor, the Dead Marshes, Shelob, and the climb toward Mount Doom all sharpen the same point: evil is not defeated by grand confidence, but by endurance under pressure and by repeated acts of refusal. Even Frodo cannot simply master the Ring at the end by strength of will, which is one of Tolkien's boldest and most truthful decisions.`,
    `Meanwhile, the wider war shows that the story is not only private or inward. The defense of Helm's Deep, the ride of the Rohirrim, Denethor's collapse, and Aragorn's rise all ask what rightful authority looks like in a world threatened by domination. Tolkien keeps contrasting stewardship with possession, service with self-assertion, and kingship with mere appetite for rule. That is why Aragorn matters. He is not a fantasy of power for its own sake, but an image of power disciplined by patience, memory, and obligation.`,
    `The ending refuses cheap triumph. Sauron falls, but Frodo does not simply go back to being the person he was before the quest. The return to the Shire, the lingering damage, and finally the Grey Havens make clear that victory can be real without being emotionally restorative in a simple way. The Lord of the Rings endures because it joins epic scale to spiritual seriousness. It is about friendship, war, language, loss, loyalty, decline, and hope, but above all it is about the difference between possessing power and renouncing it. That contrast is the story's moral center, and it is why Middle-earth feels larger than spectacle.`
  ],
  'the-iliad': [
    `The Iliad does not try to narrate the whole Trojan War. Instead, it concentrates on the wrath of Achilles and shows how one man's wounded honor can radiate outward into collective disaster. The quarrel with Agamemnon is not a petty preface to later heroics; it establishes the poem's whole field of pressure. Status, reputation, entitlement, and rage are not private feelings here. They shape battle, leadership, loyalty, and death for everyone around them.`,
    `Homer gives the war scale, but he also gives it terrible intimacy. Duels, speeches, councils, taunts, supplications, and battlefield killings are all rendered with an attention that keeps glory tied to bodily cost. Hector, Ajax, Diomedes, Patroclus, and the other warriors matter not just as names in a martial pageant, but as men caught inside a code that prizes honor while constantly feeding them toward mortality. The poem is heroic, but it is never naive about what heroism consumes.`,
    `Achilles' withdrawal allows Hector to dominate the field, and that in turn gives the poem one of its strongest tensions: the best fighter is absent while the cost of his absence keeps rising. Patroclus' death changes everything because it turns Achilles back toward battle through grief rather than reconciliation. When Achilles returns, the poem becomes darker, not cleaner. His killing of Hector is magnificent and horrifying at once, and the desecration of the body shows rage moving past justice into something nearly inhuman.`,
    `The Iliad becomes greater than a war story in the way it opens moments of pity inside a world built on violence. Hector with Andromache and Astyanax, the laments of women, and above all Priam's appeal to Achilles all interrupt the machinery of revenge with shared mortality. Priam asking for his son's body is one of the decisive scenes in world literature, since it makes Achilles see not an enemy, but a father and a grief that mirrors what he himself will suffer.`,
    `The poem ends without the fall of Troy because its true subject is not victory but mortality under the pressure of honor, anger, and fate. Its lasting force comes from celebrating martial greatness while also exposing the sorrow beneath it. The final pages leave pity, grief, and human vulnerability alive inside the very culture that seems least designed to protect them.`
  ],
  odyssey: [
    `The Odyssey begins after the great public action is already over. Troy has fallen, but the real question now is what it means to return and whether return is even still possible. Odysseus is far from home, Telemachus is growing up under humiliation, and Penelope is holding Ithaca together while the suitors consume the household from within. Homer makes the opening powerful by dividing the idea of homecoming across several people at once. Ithaca has to be preserved before Odysseus can reclaim it.`,
    `The wandering books are full of monsters, islands, temptations, and divine interference, but the poem is not just a string of adventures. Each episode tests some part of Odysseus' identity: his cunning, his restraint, his pride, his endurance, and his ability to survive through intelligence rather than brute force alone. The Cyclops episode shows him at his most brilliant and at his most self-defeating, because escape is secured by cunning but prolonged suffering follows from the need to announce his name. That pattern matters throughout the poem.`,
    `The Odyssey is also a poem about recognition. Telemachus learning to stand beside his father, Eurycleia identifying Odysseus by the scar, Argos recognizing his master, and Penelope testing the stranger before she trusts him are all central scenes because the home he seeks cannot simply be walked back into. It has to be earned through signs, memory, and mutual proof. Penelope is central here, not passive reward at the end of the road. Her intelligence and delay are part of what keeps the kingdom morally intact long enough for restoration to happen at all.`,
    `When Odysseus finally acts against the suitors, the violence is not random release but judgment on a deep social violation. Hospitality, fidelity, household order, and the bond between host and guest have all been corrupted in Ithaca, and the slaughter restores a broken moral structure as much as a throne. Yet Homer does not let restoration feel effortless. The poem has spent too long showing loss, absence, and disguise for the ending to work as a simple return to normal.`,
    `The Odyssey joins adventure to inward testing. Monsters and voyages matter, but so do marriage, fathers and sons, the uses of cunning, the discipline of waiting, and the fragile work of rebuilding a home after long violence. Return itself is treated as a human achievement rather than a guarantee, and that is what keeps the poem alive.`
  ],
  'to-kill-a-mockingbird': [
    `To Kill a Mockingbird is structured as a childhood narrative, but Harper Lee uses childhood not to soften the world, but to show how a social order is absorbed before it is fully understood. Scout Finch begins in the smaller dramas of school, neighbors, family lore, and fascination with Boo Radley, yet all of these early materials are already linked to the larger moral world of Maycomb. The town teaches by custom, tone, gossip, and silence long before it teaches by explicit argument. That is why Scout's perspective is so effective. She does not yet know how much she is learning.`,
    `Atticus Finch gives the novel its clearest moral voice, but Harper Lee is after more than a simple sermon. His defense of Tom Robinson matters not only as legal action, but as a way of forcing Maycomb to look at itself. The trial scenes are the novel's center because they strip away local politeness and reveal the racial structure underneath it. Tom's innocence is not enough to save him, and that is exactly the point. The law is shown as capable of procedure without justice.`,
    `Lee also returns to the education of sympathy. Atticus's advice about climbing into another person's skin is not sentimental wallpaper. It becomes the principle that links the Tom Robinson case, the children's understanding of their neighbors, and Scout's changing view of Boo Radley. Lee is asking what it would take to see other people truly in a culture built on habits of mis-seeing. The answer is not easy innocence. It requires moral imagination, and Maycomb has far less of that than it likes to claim.`,
    `Boo Radley is therefore not a side curiosity. His story completes the novel's inward movement. What begins as childhood myth ends as recognition that a hidden, damaged, and misunderstood person has been there all along in moral reality rather than rumor. The ending works because Scout's shift in perception is quiet but decisive. She has learned to read the world less through fear, fantasy, and inherited talk and more through human presence and vulnerability.`,
    `Its lasting force comes from binding public injustice to private formation. Harper Lee is writing about race, law, class, and the false decency of the Jim Crow South, but also about how a child becomes morally literate inside a community organized around blindness. The novel does not merely tell the reader what is wrong. It dramatizes how wrongness becomes ordinary and what it costs to see it clearly.`
  ],
  'art-of-war': [
    `The Art of War is easy to misread as a celebration of aggression, but its real subject is disciplined advantage. Sun Tzu begins from the premise that war is serious state business and therefore cannot be handled through impulse, vanity, or theatrical bravado. Calculation, preparation, and clear assessment matter first. Sun Tzu keeps pressing the idea that the best victory is the one secured before open collision becomes necessary, which means strategy begins long before battle lines meet.`,
    `From there the treatise keeps returning to information and deception. To know the enemy, conceal your own shape, manipulate appearances, and force the opponent into bad judgments: these are not secondary tricks in Sun Tzu's argument, but central methods. Sun Tzu sees battle as a contest of perception as much as force. If you can distort what the opponent thinks is happening, you can make his strength unusable and his movement self-destructive. That is why the text feels so modern. It treats confusion, timing, and intelligence as decisive forms of power.`,
    `Sun Tzu is also deeply concerned with command. Leadership in The Art of War is not macho display. A capable general governs discipline, morale, adaptation, logistics, and environment. Terrain is never just scenery; it changes what is possible. Troops are never just numbers; their condition, confidence, and organization determine whether opportunity can be used. Sun Tzu's argument is broad because he understands that battlefield success comes from the alignment of many conditions, not from a single burst of courage.`,
    `Sun Tzu's argument hates waste. Reckless battle, prolonged campaigns, emotional decision-making, and self-flattering ignorance are all treated as expensive stupidity. Strength without understanding is a liability. That is why the most famous formulations in the text still land so hard: know the enemy and know yourself, shape the field, attack plans before armies, and refuse to confuse noise with competence.`,
    `The Art of War endures as more than ancient military advice. It is a compact philosophy of judgment under conflict. Even outside literal war, it keeps asking the same hard question: are you acting from knowledge, discipline, and leverage, or are you just lunging forward and hoping force will cover for bad thinking?`
  ],
  meditations: [
    `Meditations is not a polished treatise arranged for students. It is Marcus Aurelius writing to himself in order to stay morally awake. That private, unfinished quality is central to its power. The emperor is not performing brilliance; he is trying to prevent his own mind from becoming swollen with vanity, irritated by inconvenience, or weakened by self-pity. Every entry feels like part of an ongoing labor of recollection in which Stoic doctrine has to be turned back into lived discipline again and again.`,
    `Much of Meditations concerns control and miscontrol. Marcus keeps reminding himself that external events are not fully his, but judgment remains his responsibility. That is why so many passages focus on perception, anger, desire, and complaint. The point is not numbness. It is to keep the ruling faculty from becoming enslaved to moods, fears, and resentments. Stoicism here is not abstraction for its own sake. It is the attempt to remain governable from within even while governing an empire from without.`,
    `Mortality is another constant pressure in the notebook. Marcus repeatedly shrinks fame, luxury, reputation, and even life itself by setting them against time, nature, and death. These reminders are not morbid decoration. They are practical tools for humiliating the ego before it starts treating itself as central. By remembering how quickly people vanish, how often glory decays into dust, and how little bodily comfort really secures, he tries to clear away illusion and return to proportion.`,
    `At the same time, the notebook is strongly civic. Marcus does not use philosophy to justify withdrawal from duty. He keeps calling himself back to service, work, and cooperation with other human beings, even when they are foolish, selfish, or exhausting. This is one of the most important things about Meditations: the ideal self it imagines is not detached from the world, but active within it without being inwardly conquered by it.`,
    `Meditations endures because it records philosophy as practice rather than display. Marcus remains alive on the page whenever readers recognize in him the same recurring struggle they know in themselves: the mind drifting toward vanity, frustration, distraction, fear, or laziness and then being forced back toward clarity, responsibility, and self-command. Its greatness lies in that repeated return.`
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
    `Bluntly, the Tao Te Ching argues that forcing, boasting, and overreaching usually backfire. It favors softness, restraint, emptiness, and unforced action over the noisy urge to control everything.`
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
  ],
  'lord-of-the-rings': [
    `Bluntly, The Lord of the Rings says power is most dangerous exactly when decent people imagine they could use it for good ends. The real heroes are not the ones who grab domination best, but the ones who carry burden, refuse corruption, and keep faith with each other long enough to destroy what nobody should possess.`
  ],
  'the-iliad': [
    `The Iliad is not a patriotic victory lap. It is a brutal poem about rage, status, grief, and the fact that glory in war is always wrapped around dead bodies. Achilles is magnificent, but Homer never lets you forget that magnificence becomes terrifying once honor turns into revenge.`
  ],
  odyssey: [
    `The Odyssey is not just monsters and clever escapes. It is a long argument that getting home requires identity, patience, discipline, and recognition, not just survival. Odysseus has to become worthy of return, while Penelope and Telemachus keep the home from collapsing before he gets there.`
  ],
  'to-kill-a-mockingbird': [
    `Bluntly, To Kill a Mockingbird is about a town that thinks of itself as decent while running on racial lies and routine cowardice. Atticus gives the novel its moral spine, but the trial of Tom Robinson makes the harder point: one good man's integrity does not by itself defeat a whole community's willingness to see injustice and call it normal.`
  ],
  'art-of-war': [
    `The Art of War says the best strategist does not confuse aggression with intelligence. If you do not understand conditions, timing, information, morale, and the opponent in front of you, then strength just becomes an expensive way of making dumb mistakes faster.`
  ],
  meditations: [
    `Meditations is basically an emperor telling himself, over and over, not to be vain, reactive, soft, petty, or distracted. Its power comes from how unglamorous that struggle is: Marcus is trying to keep his own mind in order because he knows external power is useless if the inside of the soul is a mess.`
  ]
};

function getCleanItems(items) {
  return Array.isArray(items)
    ? items.map(item => (item || '').trim()).filter(Boolean)
    : [];
}

function getDisplayKeyPoints(entry) {
  const bespokePoints = getCleanItems(bespokeKeyPoints[entry.slug]);
  if (bespokePoints.length) {
    return bespokePoints;
  }

  return getCleanItems(entry.topics);
}

function getDisplayDetailedSummary(entry) {
  return getCleanItems(bespokeDetailedReports[entry.slug]);
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

function hideLegacyTopicSection() {
  if (topicHeadingEl) {
    topicHeadingEl.hidden = true;
  }

  if (topicListEl) {
    topicListEl.hidden = true;
    topicListEl.innerHTML = '';
  }
}

function ensureDetailSections() {
  if (!panelEl || document.getElementById('keyPoints')) {
    keyPointsSectionEl = document.getElementById('keyPointsSection');
    detailedSummarySectionEl = document.getElementById('detailedSummarySection');
    tldrSectionEl = document.getElementById('tldrSection');
    keyPointsEl = document.getElementById('keyPoints');
    detailedSummaryEl = document.getElementById('detailedSummary');
    tldrEl = document.getElementById('tldrSummary');
    return;
  }

  const details = document.createElement('div');
  details.className = 'report-details';
  details.innerHTML = `
    <section id="keyPointsSection" class="detail-section">
      <h2>Main Points</h2>
      <ul id="keyPoints" class="detail-list"></ul>
    </section>
    <section id="detailedSummarySection" class="detail-section">
      <h2>Book Report</h2>
      <div id="detailedSummary" class="report-paragraphs"></div>
    </section>
    <section id="tldrSection" class="detail-section">
      <h2>TL;DR</h2>
      <div id="tldrSummary" class="report-paragraphs"></div>
    </section>
  `;

  panelEl.appendChild(details);
  keyPointsSectionEl = document.getElementById('keyPointsSection');
  detailedSummarySectionEl = document.getElementById('detailedSummarySection');
  tldrSectionEl = document.getElementById('tldrSection');
  keyPointsEl = document.getElementById('keyPoints');
  detailedSummaryEl = document.getElementById('detailedSummary');
  tldrEl = document.getElementById('tldrSummary');
}

function normalizeTldrParagraph(text) {
  const normalized = (text || '').trim();
  return normalized ? normalized.charAt(0).toUpperCase() + normalized.slice(1) : normalized;
}

function getDisplayTldr(entry) {
  return getCleanItems(bespokeTldrs[entry.slug]).map(normalizeTldrParagraph);
}

function renderList(target, items, className) {
  target.innerHTML = '';
  getCleanItems(items).forEach(text => {
    const item = document.createElement('li');
    item.className = className;
    item.textContent = text;
    target.appendChild(item);
  });
}

function renderParagraphs(target, items) {
  target.innerHTML = '';
  getCleanItems(items).forEach(text => {
    const paragraph = document.createElement('p');
    paragraph.className = 'report-paragraph';
    paragraph.textContent = text;
    target.appendChild(paragraph);
  });
}

function setSectionVisibility(sectionEl, visible) {
  if (sectionEl) {
    sectionEl.hidden = !visible;
  }
}

ensureDetailSections();
ensureAuthorElement();
hideLegacyTopicSection();

if (!detailedSummaryEl) {
  detailedSummaryEl = document.getElementById('detailedSummary');
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
  if (keyPointsEl) keyPointsEl.innerHTML = '';
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

  const keyPoints = getDisplayKeyPoints(book);
  const detailedSummary = getDisplayDetailedSummary(book);
  const tldr = getDisplayTldr(book);

  if (keyPointsEl) {
    renderList(keyPointsEl, keyPoints, 'detail-item');
  }
  if (detailedSummaryEl) {
    renderParagraphs(detailedSummaryEl, detailedSummary);
  }
  if (tldrEl) {
    renderParagraphs(tldrEl, tldr);
  }

  setSectionVisibility(keyPointsSectionEl, keyPoints.length > 0);
  setSectionVisibility(detailedSummarySectionEl, detailedSummary.length > 0);
  setSectionVisibility(tldrSectionEl, tldr.length > 0);
}
