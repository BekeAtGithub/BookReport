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
  ],
  'kite-runner': [
    `Amir's betrayal of Hassan under the shadow of the alley scene gives The Kite Runner its permanent wound, because everything afterward is shaped by the fact that cowardice once looked easier than loyalty. Kabul is first shown through privilege, games, servants, and Baba's imposing presence, but Hosseini keeps letting ethnic hierarchy and private shame crack that surface. When Amir and Baba flee to America, exile does not erase the past; it only postpones the moment when memory comes back demanding payment. The return to Taliban Afghanistan, the discovery of Hassan's fate, and Sohrab's rescue turn redemption into something bloody, partial, and painfully late rather than sentimental.`
  ],
  'ulysses': [
    `Joyce takes one June day in Dublin and loads it with enough language, appetite, memory, and formal invention to make ordinary life feel inexhaustible. Leopold Bloom moving through funerals, ads, meals, streets, and humiliations matters as much as any epic quest because Ulysses keeps insisting that consciousness itself is an eventful terrain. Stephen Dedalus brings intellectual restlessness and filial trouble, Molly Bloom closes the novel with sensual, unpunctuated force, and the Homeric parallels work less as a gimmick than as a way of enlarging the common day until it can carry myth. The result is a novel where wandering, bodily life, urban detail, and inner speech all become heroic without stopping being ordinary.`
  ],
  'one-hundred-years-of-solitude': [
    `Macondo grows in One Hundred Years of Solitude like a dream that keeps hardening into history and then dissolving again into legend. José Arcadio Buendía's founding vision, the insomnia plague, alchemy, ghostly returns, civil war, Remedios the Beauty's ascent, and the banana-company massacre all belong to one narrative weather in which miracle and massacre occupy the same street. García Márquez makes repetition the family's curse: names recur, desires recur, mistakes recur, and solitude keeps reappearing as both inward condition and inherited destiny. By the time Melquíades's parchments are deciphered, the novel has turned the Buendías into a grand pattern of memory, desire, violence, and forgetting that was always moving toward its own erasure.`
  ],
  'the-holy-bible': [
    `Rather than one voice speaking in one register, the Holy Bible is a library of law, lament, genealogy, prophecy, gospel, wisdom, apocalypse, and pastoral instruction gathered across centuries. Genesis and Exodus establish creation, covenant, fall, liberation, and law; the historical books test kingship and national fidelity; the prophets turn poetry into accusation; the wisdom books wrestle with suffering, praise, love, and finitude. The New Testament reshapes the whole inheritance around Jesus's life, crucifixion, resurrection, and the formation of the early church, while Revelation pushes history toward judgment and renewal through visionary violence and promise. Its force lies partly in that vast internal variety: narrative, command, song, parable, argument, and vision keep pressing different answers to what God asks of human beings and what human beings do with that demand.`
  ],
  frankenstein: [
    `Mary Shelley frames Frankenstein through voyages, letters, and layered testimony so that creation and pursuit are always bound to narration itself. Victor's act of animation is only the beginning; the real horror begins when he recoils from the being he has assembled and leaves intelligence, feeling, and need to grow in abandonment. The Creature's education through the De Lacey family, his desperate appeal for recognition, and the revenge that follows make the novel far more tragic than a simple mad-scientist tale. Shelley keeps the question of monstrosity unstable, forcing the reader to decide whether the greater outrage is unnatural creation or the refusal to take responsibility for what one has brought into the world.`
  ],
  'gone-with-the-wind': [
    `Scarlett O'Hara survives the Civil War and Reconstruction by treating sentiment as a luxury she cannot afford, and that hard practicality is what keeps Gone With the Wind moving even when its social vision is warped by plantation nostalgia. Tara becomes more than an estate; it is Scarlett's obsessive anchor while Atlanta burns, markets shift, and the old Southern order loses the material conditions that once upheld it. Her fixation on Ashley Wilkes keeps exposing how badly romantic self-deception can distort judgment, while Rhett Butler sees the collapse more clearly and profits from it with cynical energy. The novel's grip comes from watching female endurance, hunger, vanity, desire, and historical upheaval collide inside one relentless personality.`
  ],
  'oliver-twist': [
    `Oliver Twist begins with institutional cruelty so coldly routine that the famous request for more food lands like an act of rebellion. Dickens drives Oliver from the workhouse into Fagin's criminal orbit, Nancy's divided loyalties, and Bill Sikes's brutal world, but the novel never lets respectable society feel clean by contrast. Parish officials, undertakers, magistrates, and benefactors all participate in systems that sort children into usefulness, discardability, or spectacle. London becomes a map of exploitation in which innocence survives less because the city deserves it than because Dickens keeps insisting that moral disgust can still be sharper than the excuses of law and charity.`
  ],
  'the-works-of-hp-lovecraft': [
    `Lovecraft's best stories keep luring scholars, antiquarians, sailors, and curious outsiders toward evidence that human beings are provincials in a universe too old and too vast to care about them. Whether the threat arrives through Cthulhu's submerged cult, Innsmouth's hereditary corruption, Antarctic ruins, or forbidden books like the Necronomicon, the pattern is the same: knowledge expands just long enough to humiliate the knower. The atmosphere is built from crumbling towns, obsessive archives, and narrators already half broken by what they are trying to recount. What survives beyond the period baggage is the special chill of cosmic indifference, the sense that revelation does not ennoble consciousness but reduces it.`
  ],
  'five-weeks-in-a-balloon': [
    `Verne sends Dr. Ferguson, Kennedy, and Joe over Africa in a balloon so that engineering, geography, and danger can all be staged in continuous motion. The pleasure of Five Weeks in a Balloon lies in watching practical improvisation answer wind, altitude, thirst, attack, and terrain while the Victoria remains both vehicle and experiment. Seen from above, exploration becomes spectacle, but Verne also reveals how dependent that spectacle is on calculation, equipment, and the ability to keep solving problems before they become fatal. The novel belongs to the age of adventurous science, when travel narrative, invention, and imperial imagination could still be folded together inside one buoyant machine.`
  ],
  'the-adventures-of-huckleberry-finn': [
    `Huck and Jim drifting down the Mississippi gives Twain a moving stage on which friendship can keep colliding with the slaveholding conscience Huck has inherited. The raft often feels freer than the shore, yet every landing brings feuds, scams, mobs, fraud preachers, and the everyday moral ugliness of a society that treats Jim as property. Huck's great achievement is not polished virtue but the decision to side with a person he loves against the religion and law that tell him he is wrong. That is why the novel's humor cuts so hard: behind the tall tales and comic voices is a boy discovering that decency may require disobeying everything respectable around him.`
  ],
  'the-last-of-the-mohicans': [
    `Cooper turns the French and Indian War into pursuit fiction, but the chases matter because the wilderness is already filled with competing empires, broken alliances, and peoples facing disappearance. Hawkeye, Chingachgook, and Uncas move through that landscape with a competence the British often lack, while Magua gives the novel a vengeful intelligence that prevents conflict from collapsing into simple heroics. Rescue scenes, ambushes, and marches through forest and fort are charged with the sense that an entire frontier order is being remade by war. The elegiac note surrounding Uncas and the “last of” idea is what lingers, since adventure here is inseparable from loss.`
  ],
  'robinson-crusoe': [
    `Crusoe survives shipwreck first by salvage and inventory, then by habit, accounting, cultivation, and a stubborn need to turn isolation into managed property. Defoe makes the island intensely practical: tools, shelters, crops, goats, weather, and calendars all matter, since labor is the means by which panic gets translated into order. At the same time, providence saturates the narrative, so repentance and self-examination accompany the building of fences and storage jars. Friday's arrival changes the novel from solitary survival to colonial hierarchy, exposing how quickly Crusoe's resourcefulness becomes a fantasy of mastery over land, labor, and another human being.`
  ],
  'the-jungle-books': [
    `Kipling's jungle is not chaos but law, rank, and hard instruction, which is why Mowgli's education under Baloo and Bagheera feels closer to apprenticeship than wild freedom. Shere Khan's threat gives the stories dramatic pressure, yet the deeper interest lies in belonging: wolf pack, Bandar-log disorder, village suspicion, and the shifting boundary between animal order and human society. Other tales in the collection widen that world through seals, mongooses, elephants, and military animals, all governed by codes of work, courage, and hierarchy. The charm of the stories comes from their fable-like clarity, but their real shape is tougher than nostalgia suggests.`
  ],
  'kim-rudyard-kipling': [
    `Kim lives by disguise, language, quick reading of people, and sheer mobility, so the Great Trunk Road becomes both his playground and his training ground. Kipling binds the lama's search for spiritual release to the espionage maneuvers of the Great Game, making colonial India feel at once intimate, crowded, and strategically mapped. Kim is most alive when he shifts registers between sahib and street boy, disciple and courier, affection and performance. That doubleness gives the novel its special energy: it is a tale of empire seen from within its routes, codes, and opportunities, yet it keeps noticing the seduction and instability of a self made from crossing worlds.`
  ],
  'mother-india': [
    `Katherine Mayo writes Mother India as an indictment pretending to be diagnosis, piling up material on caste, sanitation, child marriage, and sexual custom in order to argue that Indian society is too degraded for self-rule. Its force in political history lies less in literary quality than in how expertly selective fact-gathering can be turned into imperial paternalism. Reform language is made to serve domination: every social wound becomes evidence that foreign control should continue. Its afterlife is most revealing in the nationalist outrage, counterargument, and debate over representation that exposed how a supposedly investigative text could function as colonial propaganda.`
  ],
  'thus-spoke-zarathustra': [
    `Zarathustra descends from the mountain not to found a calm doctrine but to provoke, mock, and unsettle readers who still want morality delivered as obedience. Nietzsche gives him sermons, parables, songs, and riddles about the overman, the spirit's metamorphoses, herd values, and the demand to become equal to recurrence itself. Nietzsche keeps borrowing the tones of scripture only to hollow out Christian consolation from the inside. Its power comes from the way self-overcoming is presented not as self-help uplift but as a dangerous artistic and spiritual task requiring the destruction of resentful habits of valuation.`
  ],
  'the-futurist-manifesto': [
    `Marinetti begins by wrecking decorum on purpose, praising automobiles, impact, aggression, youth, and mechanical speed as though modern art can justify itself only by insulting age and rest. Museums, libraries, and reverence for the past are treated as dead weight to be burned away. The scandal of the manifesto is not merely its style but the political temptation built into that style: violence becomes purification, war becomes beauty, and destruction becomes a proof of vitality. Reading it now means watching aesthetic excitement slide almost seamlessly toward authoritarian intoxication.`
  ],
  'the-communist-manifesto': [
    `Marx and Engels give the bourgeoisie no faint praise at the start: capitalism tears up feudal bonds, revolutionizes production, globalizes exchange, and melts inherited structures into movement. That admiration sharpens the argument rather than softening it, because the same system that transforms the world also concentrates wealth, disciplines labor, and creates the proletarian force capable of overturning it. The pamphlet's compression is part of its historical force; slogans, class history, and political demands arrive with extraordinary momentum. Even where its predictions misfire, its account of modern society as ceaselessly dynamic and conflict-ridden remains hard to shake.`
  ],
  'the-changing-world-order': [
    `Dalio organizes history through debt cycles, reserve currencies, internal cohesion, and external rivalry, treating the Dutch, British, and American orders as recurring patterns rather than singular miracles. Charts and historical comparisons do much of the persuasion in The Changing World Order, because the thesis depends on making long-wave decline look measurable. China and the United States become the contemporary test case for a model that links fiscal strain, education, inequality, military power, and political fragmentation. The appeal of Dalio's model is the promise that geopolitics can be read like a balance sheet, even if that simplification is also where the argument invites resistance.`
  ],
  'the-decline-of-the-west': [
    `Spengler refuses the comfortable idea that civilizations all participate in one upward human progress. Instead he treats cultures as organisms with seasons, symbols, arts, politics, and terminal phases, which lets him cast the West as a specifically Faustian civilization moving from creative vitality toward exhausted civilization and Caesarism. The argument is sweeping, analogical, and often overconfident, but that is also why it still fascinates. It converts history into morphology, asking readers to see cathedrals, mathematics, money, empire, and democracy as symptoms of a culture's life cycle rather than achievements on a universal ladder.`
  ],
  'the-waste-land': [
    `Eliot opens with April breeding unease instead of hope and then keeps breaking the poem into voices, quotations, overheard talk, ritual fragments, and cultural debris that never settle into one governing speaker. London crowds move like the living dead, desire appears drained rather than fertile, and Tiresias becomes a strange center of witness inside the collage. Myth and scripture do not restore order so much as measure the depth of modern disconnection against older patterns of meaning. The poem stays powerful because its broken form is not decorative difficulty; it is the medium through which spiritual exhaustion is made audible.`
  ],
  'snow-crash': [
    `Stephenson builds Snow Crash out of velocity, satire, and outrageous compression: Hiro Protagonist sword-fights through a franchised America while the Metaverse turns code, status, and spectacle into one arena. The novel's wildest move is to link Sumerian myth, neurolinguistics, and a designer drug-virus into the same theory of mind-hacking, which makes information itself feel dangerously physical. Y.T.'s kinetic presence, the Mafia's pizza logic, and the franchulate landscape keep the novel funny even when it is sketching political collapse. Cyberpunk's neon paranoia becomes much larger here, expanding from hackers and corporations into language, religion, and contagion.`
  ],
  'animal-farm': [
    `The animals begin with a revolution against human exploitation, but Orwell's real interest lies in how quickly slogans, fear, and administrative control harden into a new hierarchy. Napoleon does not seize power through brilliance so much as through patient manipulation, dogs, propaganda, and the slow rewriting of memory by Squealer. Boxer gives the fable its heartbreak, because his strength and loyalty are precisely what make him usable and disposable to the regime. By the time pigs and men become indistinguishable, the novella has shown that betrayal of a revolution often arrives not with open reversal but with bureaucratic alteration, euphemism, and ceremony.`
  ],
  'the-catcher-in-the-rye': [
    `Holden Caulfield talks in riffs, evasions, insults, and jokes, but the running monologue keeps leaking grief faster than he can plug it. His wandering through hotels, bars, museums, cabs, and apartments gives New York the feeling of a city crossed by someone who cannot settle anywhere because childhood loss has made every adult arrangement look fraudulent. Allie's death is the buried engine of that disgust, while Phoebe briefly offers the love and clarity Holden cannot manufacture for himself. The image of children reaching for the gold ring on the carousel lands because he finally glimpses a form of care that is not control.`
  ],
  macbeth: [
    `Macbeth begins as a victorious fighter, but Shakespeare shows how quickly imagination can turn external prophecy into inward corrosion. The witches plant possibility, Lady Macbeth weaponizes resolve, and Duncan's murder pulls the play into a world where blood never stays in the past. Banquo's ghost, the moving grove of Birnam, and the equivocations around Macduff all matter because Macbeth keeps trusting language only when it flatters his desire. The tragedy tightens around a man who tries to secure himself through more killing and discovers that power seized without legitimacy produces only terror, isolation, and hallucinated certainty.`
  ],
  'alice-in-wonderland': [
    `Alice keeps changing size, losing stable proportion, and colliding with creatures who treat logic like a game rigged in advance. Carroll's nonsense has real bite because the Caterpillar, Duchess, Hatter, and Queen all speak in forms of authority that are grammatically intact yet rationally absurd. Identity becomes slippery whenever Alice tries to answer simple questions about who she is or how rules work in this place. The dream world feels playful, but it is also a satire of classrooms, courts, manners, and adult solemnity, all exposed by a child who keeps discovering that official language need not make sense to be enforced.`
  ],
  'pride-and-prejudice': [
    `Austen designs Pride and Prejudice around misreading: Elizabeth mistakes wit for discernment, Darcy mistakes reserve for dignity, and both have to learn how vanity and prejudice distort judgment. Dances, letters, proposals, and visits become the machinery through which class anxiety and private feeling are tested in public. Lydia's recklessness and Wickham's charm show how quickly reputation can become material danger for a family with limited money and many daughters. The lasting pleasure of the novel lies in its precision, since courtship is never just romance here but an exacting education in character.`
  ],
  'don-quixote': [
    `Don Quixote rides out determined to make the world answer to the chivalric romances that have rewritten his mind, and Cervantes gets both comedy and pathos from every collision between romance and roadside fact. Windmills, inns, chain gangs, puppets, and beatings keep puncturing the knight's fantasies, yet Sancho's earthy skepticism never wholly destroys the strange dignity of the quest. Part of the novel's brilliance is that authorship itself becomes a theme, with stories, manuscripts, performances, and self-awareness woven into the adventure. Delusion is mocked everywhere, but so is the flat realism that thinks ridicule has exhausted idealism.`
  ],
  'les-miserables': [
    `Valjean's transformation after the bishop's mercy is the central miracle of Les Misérables, not because it erases the past, but because it proves the past need not dictate the soul forever. Hugo surrounds that change with Parisian poverty, convents, sewers, barricades, police pursuit, and long historical digressions, giving private redemption a huge social backdrop. Javert is indispensable because law, in his person, becomes so rigid that grace feels to him like an attack on reality itself. Fantine's misery, Cosette's rescue, Marius's youth, and Carton-like sacrifice all feed the novel's conviction that human beings are ruined most thoroughly when institutions refuse to see them as more than their record.`
  ],
  'madame-bovary': [
    `Emma Bovary has consumed enough romantic language to turn ordinary life into an insult, and Flaubert never stops showing the cost of that aesthetic mismatch. Marriage to Charles feels intolerably dull, lovers like Rodolphe and Léon fail to become the grand exits she imagines, and debt tightens around her through the banal machinery of credit, goods, and vanity. The novel is devastating because Flaubert writes illusion so beautifully that the reader feels its seduction even while seeing how tawdry its objects are. Provincial boredom, erotic fantasy, consumer appetite, and self-destruction all get fused into one precise anatomy of bad desire.`
  ],
  'the-brothers-karamazov': [
    `Dostoevsky crowds The Brothers Karamazov with courtroom drama, spiritual counsel, drunken appetite, metaphysical argument, and murder, then somehow makes the parts intensify one another. Dmitri burns hot, Ivan intellectualizes rebellion against God's world, Alyosha carries a counterforce of compassion, and Smerdyakov turns resentment into action under the cover of other people's ideas. The Grand Inquisitor chapter gives the novel's religious and political stakes unforgettable form, but the family itself is where those stakes become flesh. Patricide is not just a plot event here; it is the point where questions about freedom, suffering, and responsibility stop being abstract.`
  ],
  'a-tale-of-two-cities': [
    `Dickens threads London and Paris together through imprisonment, inheritance, memory, and public vengeance until private love stories begin moving inside revolutionary machinery. Doctor Manette's long Bastille trauma shadows the entire plot, while Madame Defarge carries grievance with such cold persistence that history itself seems to be knitting through her hands. Darnay cannot escape the crimes of his class by simply renouncing them, and Sydney Carton's wasted life becomes the unlikely site of the novel's final greatness. The repeated language of resurrection is crucial, because nearly every major figure is being recalled from some kind of living burial.`
  ],
  'the-scarlet-letter': [
    `Hester Prynne stands on the scaffold with the embroidered A already transforming punishment into something more complex than the magistrates intended. Hawthorne's Puritan Boston tries to make shame visible and stable, but Pearl keeps disrupting every attempt at neat moral accounting, while Dimmesdale's hidden guilt eats through him in private and Chillingworth converts injury into parasitic vengeance. The scarlet letter changes meaning as the novel goes on, becoming sign, stigma, craft, and identity all at once. That instability is crucial, because the deepest drama is not public sin but the failure of a punitive community to master inward reality.`
  ],
  'the-count-of-monte-cristo': [
    `Dantès is buried alive in bureaucratic malice before he is reborn through Abbé Faria's education, the prison escape, and the treasure that makes the Count possible. From there the novel becomes an extraordinary machine of aliases, staged revelations, financial pressure, social theater, and delayed revenge directed at men who once seemed untouchable. Dumas never lets vengeance remain clean, though; innocent bystanders, poisoned households, and moral exhaustion begin to accumulate around the avenger's design. The late arrival of mercy is what gives the story depth, since Dantès eventually has to ask whether becoming Providence has damaged him as much as prison did.`
  ],
  hamlet: [
    `Hamlet is saturated with delay, but the delay is never mere indecision; it is the consequence of a mind that cannot meet murder, kingship, grief, and theater without turning each into a problem of truth. The ghost's accusation gives the plot its demand for revenge, yet Claudius's guilt must be tested, language must be doubted, and performance must become an instrument of knowledge through the mousetrap play. Ophelia's collapse, Polonius's death, Yorick's skull, and the graveyard all keep death physically present while the prince keeps thinking around it. Shakespeare's great move is to make reflection itself dramatic, so that hesitation becomes the very medium through which corruption is exposed.`
  ],
  dracula: [
    `Dracula assembles diaries, phonograph cylinders, letters, ship logs, and memoranda into a case file against a predator who belongs to a far older order than the people hunting him. Jonathan Harker's imprisonment in the castle gives the novel its first jolt, Lucy's transformation turns English society into a scene of contamination, and Mina becomes both threatened victim and indispensable intelligence center. Stoker keeps pitching modern coordination against ancient appetite, so typewriters, rail timetables, blood transfusions, and legal property records all become weapons in a supernatural conflict. The invasion terror lands because it is sexual, medical, territorial, and spiritual at the same time.`
  ],
  othello: [
    `Iago almost never needs proof because Othello's imagination, once poisoned, will supply the rest. Shakespeare builds the tragedy out of insinuation, timing, and the terrible portability of the handkerchief, showing how jealousy can turn scraps of circumstance into total conviction. Othello's military greatness offers no defense against the racial insecurity and erotic vulnerability that Iago knows how to press, while Desdemona's innocence becomes fatally unreadable inside a masculine culture obsessed with possession and honor. The catastrophe is horrifying precisely because language does the killing long before the final act does.`
  ],
  'fathers-and-sons': [
    `Bazarov arrives in Fathers and Sons like a challenge thrown at everyone around him: landed gentility, liberal gradualism, sentiment, art, and inherited piety all get dismissed in the name of nihilist clarity. Turgenev is too subtle to leave him as a mere spokesman, though, and Odintsova's cool resistance, Arkady's maturation, and Bazarov's own parents gradually expose the hunger and vulnerability inside the pose. Reform-era Russia matters here not as backdrop but as generational weather, with old forms losing authority before new ones have become livable. The novel's sadness comes from watching intelligence discover that contempt alone is not enough to build a life.`
  ],
  middlemarch: [
    `Middlemarch works by making a town feel like a nervous system in which money, marriage, gossip, ambition, piety, and reform transmit consequences from one life into many others. Dorothea's disastrous marriage to Casaubon and Lydgate's entanglement with Rosamond are different stories, but Eliot lets them rhyme through frustrated idealism, bad judgment, and the pressure of provincial expectation. No character is treated as a mere lesson; even vanity and mediocrity are given social causes and inward texture. That generous exactness is the novel's greatness, since moral life emerges not through melodramatic extremes but through countless linked decisions in ordinary time.`
  ],
  'romance-of-the-three-kingdoms': [
    `The collapse of the Han in Romance of the Three Kingdoms releases an enormous field of oath-bound loyalty, opportunism, propaganda, and strategic brilliance. Liu Bei, Guan Yu, Zhang Fei, Cao Cao, and Zhuge Liang are remembered not only as characters but as political styles: righteousness, ferocity, cunning, calculation, and legitimacy all take personified form. Campaigns like Red Cliffs matter because the novel loves strategy as theater, with deception, terrain, timing, and counsel shaping empire as much as brute force does. Its scale is what remains astonishing, since the work keeps turning dynastic fragmentation into a vast meditation on rule, loyalty, and the cost of ambition.`
  ],
  'the-tale-of-the-heike': [
    `The Tale of the Heike begins with temple bells already announcing impermanence, so the rise and fall of the Taira never appears as an isolated political accident. Court splendor, warrior valor, betrayal, exile, and annihilation are all seen through a Buddhist sense that glory decays as soon as it appears secure. Episodes like Atsumori's death strike so hard because beauty and pathos are never separated from violence for long. The result is an epic where martial renown is real and moving, yet every triumph sounds as though it is already echoing into loss.`
  ],
  'samguk-sagi': [
    `Samguk Sagi is a court history before it is a heroic romance, and its annalistic shape is part of its meaning. Kings, campaigns, alliances, omens, and administrative turns are recorded so that the rivalries of Goguryeo, Baekje, and Silla can be read as the gradual formation of ordered legitimacy on the peninsula. Because the work is compiled from a later vantage, Silla's ascendancy is not simply narrated but quietly justified by selection and framing. Its value lies in exactly that mixture of record and political memory, where state formation is preserved through disciplined chronicle rather than myth alone.`
  ],
  'secret-history-of-the-mongols': [
    `The Secret History of the Mongols feels unusually close to the raw contingencies of power: kidnappings, broken alliances, hunger, marriage politics, oath-brotherhood, and vengeance all press directly on Temujin's rise. Börte, Jamukha, mothers, sons, and rival clans matter as much as battlefield triumph because steppe empire is shown growing out of kinship pressure as well as military force. The text preserves harshness without sanding off charisma, so Genghis Khan emerges as both organizer and terror. That rough immediacy is what sets it apart from cleaner imperial retrospectives.`
  ],
  mahabharata: [
    `The Mahabharata refuses to let the war for a kingdom stay simple, because every victory is purchased through kinship rupture, oath, humiliation, and moral compromise. The dice game and Draupadi's public shaming wound the story long before Kurukshetra begins, and Krishna's intervention turns action itself into a philosophical crisis rather than a straightforward duty. Heroes win through stratagem as often as through virtue, elders fall, vows twist into traps, and the aftermath is filled with grief rather than triumph. Its immensity comes from the way family feud, political legitimacy, dharma, and cosmic order are all argued inside one shattering conflict.`
  ],
  baburnama: [
    `Babur writes as conqueror, exile, observer, and disappointed claimant all at once, which is why the Baburnama feels more intimate than many imperial memoirs. He records failed bids for Samarkand, shifting fortunes in Central Asia, the securing of Kabul, and the foundation of Mughal power in India without surrendering the texture of weather, gardens, fruit, topography, and personal feeling. Battles matter, but so do landscape and mood, because Babur notices the world with a poet's appetite even while pursuing sovereignty with ruthless persistence. The memoir's candor is its distinction: ambition never quite erases the individual voice behind it.`
  ],
  'the-gallic-war': [
    `Caesar's third-person style in The Gallic War is one of the greatest acts of political self-fashioning in ancient prose. Campaigns against the Helvetii, Ariovistus, and Vercingetorix are narrated as if cool necessity and military genius naturally coincided, while engineering feats, forced marches, and siege operations build the image of a commander whose actions were always justified by circumstance. Yet the text keeps revealing itself as argument as much as report, especially when Roman aggression is dressed as preemption or order. Reading it means watching conquest become literature in real time.`
  ],
  shahnameh: [
    `Ferdowsi's Shahnameh preserves Persian kingship and legend on a scale vast enough to hold creation myths, dynastic turns, and intensely personal tragedies inside one poetic memory. Rostam is its most unforgettable hero not because he is flawless, but because his strength is shadowed by blindness, especially in the catastrophe with Sohrab. Across the poem, rightful rule depends on justice and wisdom as much as bloodline, while Iran's conflicts with Turan repeatedly test loyalty, pride, and fate. The epic endures because national memory is carried through scenes whose emotional force never disappears into abstraction.`
  ],
  'mein-kampf': [
    `Mein Kampf matters historically as a document of grievance sharpened into program: defeat in war, antisemitic fantasy, racial hierarchy, mass persuasion, and expansionist nationalism are all fused into one poisonous ideological narrative. Hitler keeps presenting hatred as explanation, turning conspiracy into method and resentment into the emotional fuel of politics. The prose is bloated and repetitive, yet the text cannot be dismissed as mere rant because it reveals, in ugly form, how propaganda simplifies the world into enemies, destiny, and obedience. Its enduring significance lies in how openly it advertises the violence that later regimes would enact.`
  ],
  'the-arabs-and-the-holocaust': [
    `Gilbert Achcar traces how Arab intellectuals, regimes, and movements have remembered, denied, reframed, or strategically instrumentalized the Holocaust across changing political circumstances. The crucial tension is not just factual acknowledgment versus denial, but the collision between Holocaust memory and Nakba memory inside the wider Arab-Israeli conflict. By recovering leftist, liberal, nationalist, Islamist, and state positions rather than pretending there was one Arab response, Achcar's study refuses lazy caricature. Its value is historical and political at once, because memory here is never neutral; it is bound to legitimacy, accusation, and unresolved catastrophe.`
  ],
  'nazis-islamists-and-the-making-of-the-modern-middle-east': [
    `Barry Rubin and Wolfgang Schwanitz argue that fascist propaganda, wartime alliances, and figures such as Haj Amin al-Husseini left a deeper imprint on Middle Eastern politics than is often admitted. Radio broadcasts, anti-British mobilization, anti-Zionist agitation, and ideological borrowing are assembled into a story about how European totalitarian currents intersected with local movements and resentments. The study is most provocative when it tracks postwar continuities rather than wartime symbolism alone. Whether one accepts every emphasis or not, it presses on the uncomfortable fact that anti-colonial politics and authoritarian fantasies were not always cleanly separable.`
  ],
  'sombres-bourreaux': [
    `Sombres Bourreaux forces attention onto forms of Black collaboration that sit uneasily inside familiar moral maps of occupation and racism. By looking across colonial settings, Vichy entanglements, and wartime structures that could grant limited advantage within openly hierarchical regimes, the work shows how survival, opportunism, coercion, and status anxiety can mix under extreme pressure. Its subject is difficult precisely because it unsettles comforting binaries of victim and perpetrator. The historical interest lies in how empire complicates wartime allegiance without absolving anyone of agency.`
  ],
  'the-quran': [
    `The Qur'an moves through warning, promise, law, remembrance, and eschatological urgency with a rhetorical force that is inseparable from recitation. Meccan passages strike with prophetic compression against arrogance and forgetfulness, while Medinan material shapes communal discipline, law, and political life after revelation has gathered a society around it. Stories of earlier prophets do not merely retell the past; they place Muhammad's message inside a continuing argument about obedience, mercy, disbelief, and judgment. The text's power lies in how insistently it returns language, memory, and accountability to the listener's present moment.`
  ],
  torah: [
    `The Torah begins with creation and family origin stories, but it is equally concerned with the making of a covenant people through law, wilderness trial, ritual order, and repeated failure. Genesis and Exodus give the patriarchs, Joseph, Moses, liberation, and Sinai their foundational place, while Leviticus, Numbers, and Deuteronomy turn holiness and communal discipline into daily demands rather than abstract ideals. Narrative and command are never really separate here; disobedience, renewal, sacrifice, and remembrance keep crossing each other. The result is a foundational text in which identity is formed through story, law, and the burden of being chosen.`
  ],
  tanakh: [
    `The Tanakh widens the Torah's covenant history into a many-voiced corpus where conquest, monarchy, division, exile, lament, praise, wisdom, and prophetic rebuke all speak to one another. Samuel and Kings track power as a test repeatedly failed, the prophets attack injustice and idolatry with terrifying intensity, and Psalms and Job carry devotion and suffering into forms no historical chronicle could contain. Exile gives the collection one of its deepest pressures, because memory itself has to become portable when land and throne are broken. What emerges is not tidy consistency but a durable sacred argument about God, peoplehood, catastrophe, and return.`
  ],
  talmud: [
    `The Talmud does not move by linear exposition; it thinks through layers of dispute, precedent, objection, anecdote, and interpretation that keep legal and ethical questions alive through argument. Mishnah and Gemara together create a culture in which disagreement is not a flaw in the system but part of how truth is pursued and preserved. Daily life receives extraordinary attention, since damages, Sabbath practice, marriage, ritual purity, commerce, and speech all become sites of reasoning. The aggadic passages prevent the work from becoming mere technicality, carrying imagination, paradox, humor, and moral texture alongside jurisprudence.`
  ],
  'tao-te-ching': [
    `Across its brief chapters, the Tao Te Ching insists that the deepest order cannot be seized directly, named exhaustively, or mastered by force. Paradox turns into instruction: water defeats hardness, emptiness makes use possible, softness outlasts rigid strength, and rulers do their best work when they stop performing domination. Wu wei is not passivity but an art of non-coercive alignment, acting without the ego's clumsy insistence. The text's endurance comes from how radically it opposes prideful management of self, world, and state.`
  ],
  kojiki: [
    `Kojiki gathers Japanese myth, genealogy, and sacred ancestry into a narrative that links cosmic beginnings to rulership on earth. Izanagi and Izanami shape the islands, Amaterasu and Susanoo turn divine conflict into drama, and the heavenly descent grounds imperial lineage in the action of the kami themselves. Ritual pollution, purification, and sacred geography matter because myth here authorizes both order and place. The text remains central not simply as folklore, but as a way of binding narrative, cult, and political legitimacy together.`
  ],
  dhammapada: [
    `The Dhammapada compresses Buddhist discipline into short, memorable verses that keep returning to the mind as the source of bondage and release. Craving, anger, negligence, and ego-driven grasping are treated not as theological abstractions but as habits that immediately shape suffering. Against them stand watchfulness, restraint, compassion, and the patient work of training perception and conduct. Its directness is why the text travels so well: it offers spiritual psychology in aphoristic form without losing the horizon of liberation.`
  ],
  'bhagavad-gita': [
    `Arjuna's refusal before battle gives the Bhagavad Gita its intensity, because moral horror appears not after war but just before action begins. Krishna answers that crisis by unfolding karma yoga, jnana yoga, bhakti, the immortality of the self, and the demand to act without attachment to results. The revelation of the cosmic form prevents the dialogue from shrinking into private ethics alone; duty is being argued inside a universe already sustained and destroyed by the divine. Its grip on readers comes from that combination of battlefield pressure and metaphysical instruction.`
  ],
  'the-mabinogion': [
    `The Mabinogion is filled with shape-shifting, enchanted animals, wronged brides, magical cauldrons, and journeys into Annwn, yet the tales never lose their grounding in kinship, honor, and political damage. Pwyll's exchange of places, Branwen's disastrous marriage, Manawydan's dispossession, and Blodeuwedd's transformation all show a world where marvel and consequence are inseparable. Welsh heroic tradition here feels intimate rather than monumental; strange events arrive with the matter-of-factness of old story long lived with. That combination of wonder and severity gives the collection its distinctive tone.`
  ],
  opportunity: [
    `Opportunity is built on a harsh entrepreneurial correction: stop fantasizing about products in isolation and start with painful demand that already exists in the market. It keeps dragging attention back to positioning, urgent problems, offer design, and willingness to be responsible for sales rather than hiding inside “building.” Its usefulness comes from refusing romantic founder mythology in favor of plain questions about who wants what, why they buy, and whether the offer solves something expensive enough to matter. That makes it less inspirational than clarifying, which is precisely the point.`
  ],
  'the-power-of-now': [
    `Eckhart Tolle writes as if the main prison is temporal identification itself: the mind trapped in replay, anticipation, and the ego's endless narration. The Power of Now returns repeatedly to watching thought instead of fusing with it, noticing the pain-body when it starts feeding on conflict, and relaxing resistance to the present moment. Readers either find that voice liberating or exasperating, but its central operation is clear enough: spiritual change begins when inner commentary loses its monopoly on identity. Its appeal lies in making awakening sound immediate rather than scholastic.`
  ],
  'the-buying-brain': [
    `A. K. Pradeep treats neuromarketing as a way of asking what attention, reward, novelty, memory, and emotion are doing before consumers can explain themselves in surveys. Packaging, branding, advertising, and purchase behavior get linked to salience and decision shortcuts, giving marketers a more biological vocabulary for persuasion. The interesting tension in The Buying Brain is that it promises precision while also acknowledging how noisy and limited brain-based evidence can be in practice. That leaves the study balancing excitement about neural insight against the risk of turning neuroscience into decorated common sense.`
  ],
  'advanced-interviewing-techniques': [
    `The core discipline in Advanced Interviewing Techniques is control without visible force. Rapport has to be established before resistance hardens, questions have to be sequenced so the subject keeps walking deeper into disclosure, and behavioral baselines have to be noticed before “tells” mean anything. What this manual understands well is that an interview is not a neutral information exchange but a managed social environment in which pace, framing, silence, and perceived safety alter what can be obtained. Its practical value comes from making conversational structure feel tactical.`
  ],
  'mining-capital': [
    `Mining Capital treats a mine not as a hole in the ground but as a financing problem that changes form across discovery, feasibility, construction, and production. Equity dilution, debt, royalties, streams, jurisdictional risk, metallurgy, and commodity cycles all have to be understood together because capital providers are pricing geology through structure. It is strongest when it shows how technical reports, timelines, and project quality become legible to money rather than to engineers alone. In that sense it is a translation manual between rock and capital markets.`
  ],
  'the-phoenix-project': [
    `Bill Palmer inherits a failing IT operation and gradually discovers that outages, delays, heroics, and blame all point back to flow rather than individual effort. Brent's overloading is the novel's master stroke, because one indispensable person becomes the visible symptom of invisible queues and unmanaged work in progress. By wrapping DevOps lessons inside scenes of panic, escalation, and organizational embarrassment, The Phoenix Project makes bottlenecks feel concrete instead of theoretical. Its argument is that operational sanity comes from seeing the system, not from demanding more sacrifice from already overloaded people.`
  ],
  'thinking-fast-and-slow': [
    `Kahneman's great achievement is to make human error feel systematic without pretending that deliberation can replace intuition altogether. System 1 and System 2 become a durable shorthand for speed versus effort, but Kahneman's real power here lies in the experiments and examples showing substitution, loss aversion, base-rate neglect, framing effects, and the remembering self's distortions. Prospect theory changed economics because it described people as they decide, not as rational models wished they would. The result is a map of judgment that is both humbling and immensely reusable.`
  ],
  'thinking-in-bets': [
    `Annie Duke's poker background lets her attack one of the most common cognitive mistakes: judging a decision solely by how it turned out. Thinking in Bets keeps separating process quality from outcome luck, asking readers to assign probabilities, update beliefs, and build groups that reward truth-seeking over ego defense. That sounds abstract until Duke ties it to money, competition, and the emotional sting of being wrong in public. The argument is most valuable when it treats uncertainty not as a temporary inconvenience but as the permanent condition under which good judgment has to operate.`
  ],
  'good-strategy-bad-strategy': [
    `Rumelt keeps stripping away the language of mission statements and ambition until only three hard parts remain: diagnosis, guiding policy, and coherent action. Good Strategy/Bad Strategy is memorable because it names the fluff so many organizations hide behind, where goals, buzzwords, and morale language substitute for actually identifying the obstacle. The strong sections show strategy as concentration of force against a bottleneck or leverage point, not as a long wish list. It is a bracing book precisely because it makes vagueness look irresponsible rather than inspiring.`
  ],
  'the-infinite-game': [
    `Sinek contrasts scoreboard thinking with institution-building, arguing that companies and leaders fail when they treat an enduring mission as if it were a quarter-to-quarter tournament. A just cause, trusting teams, worthy rivals, and existential flexibility are his tools for stretching attention beyond immediate wins. The appeal of The Infinite Game is moral as much as managerial, since it frames culture, loyalty, and resilience as strategic assets rather than soft extras. Its central challenge is simple: build in a way that deserves to outlast the current leadership cycle.`
  ],
  'the-art-of-thinking-clearly': [
    `Rolf Dobelli's method is accumulation: one bias, one trap, one compact caution after another until mental sloppiness starts to look like an everyday hygiene problem. Survivorship bias, authority pressure, confirmation bias, sunk costs, and social proof are all presented in brief, memorable slices that favor recognition over deep theory. That format is exactly why Dobelli's approach works for many readers; it turns cognitive error into something you can notice mid-decision. The tradeoff is simplification, but the simplification is deliberate and often useful.`
  ],
  'predictably-irrational': [
    `Dan Ariely's experiments keep showing that irrationality is not wild chaos but patterned vulnerability. Anchors distort value, “free” overwhelms calculation, arousal changes the person making the choice, and social norms can collapse the moment market norms enter the room. Predictably Irrational is funnier than much behavioral economics, yet the humor never hides the point that self-understanding is weaker than people think. We do not merely make mistakes; we make them in repeatable ways that markets and environments can exploit.`
  ],
  farsighted: [
    `Steven Johnson focuses on decisions too complex for intuition and too uncertain for clean prediction, which means Farsighted spends its time on scenario-mapping, reversibility, collective judgment, and second-order effects. Johnson's strength here is that he rejects both fatalism and false precision. Instead of promising certainty, he teaches ways of structuring thought when multiple futures remain plausible and the cost of short-term thinking keeps being underestimated. Its tone is practical, but the underlying argument is philosophical: long-term consequences deserve representation even when they are hard to feel.`
  ],
  'skin-in-the-game': [
    `Taleb's moral obsession is asymmetry: the bureaucrat, expert, banker, or policymaker who imposes downside on others while staying protected from the consequences. Skin in the Game keeps returning to old merchant ethics, local knowledge, minority rule, and the dignity of exposure to reality over ornamental expertise. The style is combative by design, because Taleb wants abstraction to feel suspect whenever it travels without risk. Whether one agrees with every provocation or not, the argument lands whenever it shows that accountability is not a decorative virtue but a structural necessity.`
  ],
  'the-innovators-dilemma': [
    `Christensen's central paradox is that competent management often causes failure when new technologies enter markets from below. Incumbents listen to their best customers, improve sustaining products, protect margins, and still lose because disruptive entrants begin in spaces the leaders are structurally trained to underrate. The Innovator's Dilemma became influential because it shifted the explanation from executive stupidity to organizational logic. Its most durable lesson is architectural rather than motivational: sometimes the only way to pursue the future is to house it somewhere the current business model cannot smother.`
  ],
  'the-ellipsis-manual': [
    `The Ellipsis Manual packages influence as an operational craft made from baselining, elicitation, status control, and verbal framing. Chase Hughes wants the reader to notice clusters rather than single gestures, to treat conversation as a contest over who defines the emotional and social frame, and to read incongruence under pressure before it becomes explicit disclosure. The appeal is obvious for readers drawn to interrogation, persuasion, and command presence. Its distinctive tone comes from presenting interpersonal perception as a trainable field skill rather than a vague intuition.`
  ],
  'social-engineering-the-art-of-human-hacking': [
    `Christopher Hadnagy shifts security attention away from firewalls and toward the human reflexes attackers actually exploit: trust, urgency, deference, curiosity, and the wish to be helpful. Pretexts, rapport, reconnaissance, and authority signals matter because the technical perimeter often fails only after a person has been manipulated into opening a gate. Hadnagy's manual is effective when it makes persuasion feel procedural rather than magical. Its real warning is that people are not the “weak link” by accident; they are the interface where social life and security collide.`
  ],
  'never-split-the-difference': [
    `Drawing on hostage negotiation, Chris Voss translates field habits into business language without pretending that bargaining is mainly about clever arguments. Mirroring, labeling emotions, calibrated questions, and hunting for black swans all serve one goal: get the other side talking in ways that reveal the real terrain of the deal. Its edge comes from respecting fear, ego, and perceived loss as forces stronger than rational offers on paper. Negotiation here is less about compromise than about reshaping the conversation until hidden leverage becomes visible.`
  ],
  'greek-architecture': [
    `Greek Architecture turns temples and theaters back into solved building problems rather than leaving them as marble icons admired from a distance. Lawrence shows how the Doric, Ionic, and Corinthian orders emerge through material practice, inherited timber forms, optical refinements, and the demands of cult and civic life. The subtle swelling of columns, the tuning of proportion, and the arrangement of sanctuaries all become intelligible once one sees the buildings as deliberate visual systems. That technical readability is what gives the subject its lasting fascination.`
  ],
  'the-classical-language-of-architecture': [
    `Summerson writes classicism as grammar. Columns, capitals, bases, entablatures, pediments, and moldings are treated less like decorative relics than like a language whose syntax can be learned, varied, and misused. The Classical Language of Architecture is so enduring because it teaches readers to parse facades actively instead of admiring them vaguely. Once that vocabulary locks in, entire cities start to look composed rather than merely ornamented.`
  ],
  'chinese-architecture-a-history': [
    `Nancy Steinhardt refuses the stone-monument bias that often distorts architectural history by putting timber-frame construction, bracket systems, roofs, and axial planning at the center of the Chinese story. Palaces, temples, tombs, capitals, and domestic compounds reveal an architecture organized around ritual hierarchy, political order, and durable building logics rather than the Western canon's favorite categories. Continuity across dynasties matters, but so do regional change and adaptation. Steinhardt's achievement is to make an immense tradition structurally legible on its own terms.`
  ],
  'hanok-the-korean-house': [
    `Hanok: The Korean House focuses on domestic form at the scale where climate, daily habit, and aesthetics actually meet. Ondol heating, maru floor spaces, courtyards, timber modules, and careful orientation are presented not as picturesque details but as an integrated response to season, family life, and site. The house emerges as a lived instrument tuned to air, temperature, movement, and social order. That concreteness is what gives the hanok its intimate and architecturally intelligent character.`
  ],
  'a-world-history-of-architecture': [
    `Rather than flattening every civilization into a single parade of “great buildings,” A World History of Architecture compares temples, mosques, cathedrals, palaces, civic monuments, and modern structures through material, climate, ritual, political power, and structural invention, which keeps difference visible rather than decorative. The survey's scale is ambitious, but its real value lies in teaching comparison without immediate hierarchy. Buildings become answers to local conditions and beliefs, not just entries in a global style timeline.`
  ],
  'the-guns-of-august': [
    `Tuchman captures August 1914 as a month of momentum, vanity, timetable logic, and command misjudgment in which political crisis hardens into mass slaughter almost before anyone has grasped the scale of it. The Schlieffen Plan, Belgium's violation, French offensive doctrine, British entry, and the Marne are rendered with enough narrative urgency that mobilization itself starts to feel like a trap once set in motion. Personalities matter, but not because they are romantic heroes; they matter because prestige, fear, and rigidity keep magnifying error. Tuchman's narrative remains unmatched as a portrait of catastrophe accelerated by confidence.`
  ],
  postwar: [
    `Tony Judt's Postwar gives Europe back its full post-1945 complexity: rubble, welfare states, memory politics, American protection, Soviet domination, decolonization, prosperity, terrorism, 1968, neoliberal turns, 1989, and the Balkan wars all have to coexist in one argument. What holds the vast narrative together is Judt's insistence that ideas, institutions, and memory are inseparable from material reconstruction. The Holocaust becomes increasingly central to European self-understanding, while the Cold War both freezes and stabilizes the continent in different ways. Ultimately, Europe looks less like a finished peace than like a fragile settlement continuously renegotiated with its own past.`
  ],
  'the-sleepwalkers': [
    `Christopher Clark rejects the comforting hunt for one villain and reconstructs 1914 as a crisis produced by interacting statesmen, volatile alliances, Balkan violence, and escalating miscalculation. Serbia, Austria-Hungary, Russia, Germany, France, and Britain all appear as agents moving with partial information and dangerous assumptions rather than as puppets of inevitability. The title is exact because sleepwalking here does not mean innocence; it means purposeful movement without full comprehension of the abyss ahead. That frame restores contingency to the road to war without dissolving responsibility.`
  ],
  'the-rise-and-fall-of-the-third-reich': [
    `Shirer writes Nazi Germany with the weight of an immense documentary archive, turning internal records, speeches, diplomatic maneuvers, military campaigns, and ideological programs against the regime that produced them. The narrative gains force from continuity: Weimar weakness, party consolidation, legal dictatorship, expansion, war, genocide, and collapse are shown as linked rather than as separate chapters of madness. Hitler remains central, but institutions, enablers, and opportunists never vanish behind his shadow. The result is a panoramic history of how a modern state organized criminal ambition at continental scale.`
  ],
  spqr: [
    `Mary Beard's SPQR is less interested in marble grandeur than in argument: who counted as Roman, who got heard, how citizenship expanded, and why stories about Roman beginnings kept getting rewritten to authorize later power. Beard keeps recovering the political strain between elite domination and popular participation, showing how republic and empire alike depended on contested inclusion. Myths are neither swallowed whole nor discarded; they are treated as evidence for how Romans imagined themselves. That keeps Rome humanly argumentative instead of turning it into a dead museum of greatness.`
  ],
  'the-histories': [
    `Herodotus calls his work an inquiry, and that word is the key to its shape. Campaign narrative around the Persian Wars keeps opening into stories about Croesus, Egyptian custom, Scythian habits, marvels, geography, dreams, and reversals of fortune, as if explanation itself requires wandering. Hubris remains the great moral pattern, but Herodotus is too curious to reduce peoples into stock villains or heroes. History here begins not as pure chronology but as a restless attempt to understand why human affairs turn and how differently other societies can live.`
  ],
  'the-peloponnesian-war': [
    `Thucydides strips war of epic comfort and watches fear, ambition, pride, and necessity work through speeches, strategy, plague, faction, and exhaustion. The Funeral Oration, the plague narrative, the Mytilenean debate, the Melian Dialogue, and the Sicilian disaster each show a different way political intelligence can harden into blindness. Athens and Sparta are not just rival states; they are systems of pressure that reveal what prolonged conflict does to language and judgment. The severe prose suits the subject, because this is history written by someone determined to record how civilizations talk themselves into ruin.`
  ],
  'genghis-khan-and-the-making-of-the-modern-world': [
    `Weatherford pushes back against the image of the Mongols as mere destroyers by tracing how Temujin's rise produced merit-based command, legal order, relay systems, commercial protection, and exchanges that reshaped Eurasia. He does not erase the violence, but he asks readers to see that conquest also reorganized circulation of goods, techniques, and ideas across extraordinary distances. Weatherford's revisionist force lies in refusing the civilizer-versus-barbarian binary. Empire remains brutal, yet it is also shown as an engine of connectivity and institutional innovation.`
  ],
  'the-crusades': [
    `Thomas Asbridge keeps the Crusades grounded in both piety and power, so Urban II's call, the First Crusade's brutality, the fragile Latin states, and the long Muslim response all appear as movements of belief entangled with logistics, ambition, and opportunism. Saladin's rise is important not because he supplies a romantic counterhero, but because it reveals how fractured politics can still consolidate against a persistent threat. The campaigns are violent enough without simplification, and Asbridge is careful about memory as well as event. Crusading survives in the modern imagination precisely because religion, war, and myth fused so tightly in its history.`
  ],
  'the-silk-roads': [
    `Frankopan recenters world history on the connective corridors running through Central Asia, Persia, and the eastern Mediterranean rather than treating Europe as the natural stage of everything important. Trade, pilgrimage, empire, invasion, faith, and eventually oil all move along these routes, making the “roads” a way of seeing power through exchange instead of isolated civilizations. The argument works best when it shows how often supposed centers depended on regions later written as peripheries. Its provocation is historiographical as much as factual: change the map, and the old story of the world stops looking inevitable.`
  ],
  mastery: [
    `Robert Greene's Mastery argues that excellence is not an event of inspiration but a long apprenticeship made of imitation, frustration, disciplined practice, and gradual independence. Mentors matter, but so do rivalries, humiliations, and the years in which visible success has not yet arrived. Greene is good at describing how craft sinks into the body and perception until originality becomes possible without forced novelty. Its attraction is that it treats patience as a competitive advantage in a culture addicted to premature arrival.`
  ],
  'think-and-grow-rich': [
    `Napoleon Hill turns success into a kind of secularized metaphysics in which desire, faith, autosuggestion, planning, persistence, and alliance-building are supposed to convert thought into wealth. The strange power of Think and Grow Rich lies in how thoroughly it fuses practical hustle with incantatory belief, making confidence itself feel like productive capital. Many of its claims are flimsy, yet the text became a template for later success literature. It teaches readers to experience ambition not just as effort, but as a quasi-spiritual discipline of self-conditioning.`
  ],
  'david-and-goliath': [
    `Gladwell keeps asking whether the obvious advantage is really an advantage at all. David's sling against a heavily armored giant becomes the governing metaphor for how weakness can force creativity, how elite institutions can become cumbersome, and how hardship can sometimes generate adaptive strength. Gladwell builds the argument from reversals, case by case, rather than one tight theory, and that mosaic is part of its charm. What stays with the reader is the suspicion that many contests are misdescribed from the start.`
  ],
  blink: [
    `Blink is fascinated by moments when the mind arrives somewhere before the reasoner can narrate the route. Art experts sensing a forgery, police officers making fatal mistakes, daters reading faces, and voters falling for the Warren Harding effect all serve the same question: when does thin-slicing deserve trust, and when is it merely prejudice moving quickly? Gladwell's answer is conditional rather than mystical. Fast judgment can be brilliant, but only under environments and training that have earned it.`
  ],
  'what-the-dog-saw': [
    `What the Dog Saw gathers Gladwell's magazine curiosity at full spread, moving from inventors and criminal profiling to condiments, dogs, hair dye, and intelligence failures without losing the appetite for hidden mechanisms. The essays work when a familiar thing is suddenly reframed through one obsessive specialist or one surprising variable. Instead of building one grand thesis, the collection thrives on angles of entry that make normality look engineered, contingent, or strange. Its energy comes from the pleasure of seeing systems through somebody else's eccentric lens.`
  ],
  outliers: [
    `Outliers attacks the flattering myth of solitary genius by tracing success back to timing, cultural inheritance, opportunity structures, institutional accidents, and immense amounts of practice. The famous 10,000-hour idea is only one piece of a larger argument that talent is always being scaffolded by circumstances people prefer not to notice. Birth cohorts, access, family background, and historical timing all keep reappearing as hidden architecture under exceptional performance. Gladwell's simplifications are real, but so is the corrective he makes to hero stories.`
  ],
  freakonomics: [
    `Levitt and Dubner use economics less as moral philosophy than as a contrarian flashlight for incentives, hidden information, and measurable weirdness. Teachers cheating on tests, drug dealers living with their mothers, names tracking status anxiety, and crime statistics yielding taboo hypotheses all show the authors' taste for questions polite conversation avoids. The method can feel glib, yet its appeal is undeniable because it teaches readers to ask what people are actually rewarded for rather than what they claim to value. Everyday life becomes legible once incentives stop hiding in plain sight.`
  ],
  'startup-nation': [
    `Startup Nation explains Israel's density of young companies through a specific cluster of pressures and advantages: military networks, immigrant talent, informality, venture finance, state policy, and the discipline of operating in a small insecure market. The case studies are meant to show that national character here is institutionalized rather than mystical. Risk tolerance grows where failure is survivable, hierarchy is flatter, and improvisation is rewarded early. The argument is strongest when it treats entrepreneurial culture as an ecosystem instead of a personality trait.`
  ],
  'zero-the-biography-of-a-dangerous-idea': [
    `Seife gives zero a surprisingly dramatic career, moving from Indian mathematics through Greek suspicion, theological unease, medieval transmission, and modern physics to show how “nothing” kept threatening established ways of thinking. Zero is dangerous in this account because it destabilizes old intuitions about number, emptiness, infinity, and the structure of reality itself. The charm of Seife's narrative lies in taking an apparently obvious symbol and recovering the intellectual resistance it once provoked. Mathematics looks historical again once one remembers that even nothing had to be invented.`
  ],
  'journey-through-genius': [
    `Journey Through Genius makes proof the main character. Euclid, Euler, Cantor, and others appear through landmark theorems that changed what mathematics could say, so readers experience discovery as a sequence of exact arguments rather than as biography alone. The great pleasure of the survey is that elegance becomes visible: necessity, surprise, and structure all register inside the proof itself. Mathematics is presented not as accumulated formulas, but as a history of astonishingly disciplined ideas.`
  ],
  'the-strangest-man': [
    `Paul Dirac appears in Farmelo's biography as a nearly impossible human being and a nearly unmatched theoretical physicist, which is exactly the tension that gives The Strangest Man its shape. Quantum mechanics, relativity, the electron, and antimatter are not treated as detached breakthroughs; they are folded into a life marked by silence, abstraction, and social difficulty. Dirac's equation supplies the narrative's great intellectual peak, because beauty in mathematics becomes predictive power in nature. The portrait that emerges is austere, brilliant, and faintly alien, much like Dirac himself.`
  ],
  'the-alchemist': [
    `Santiago's recurring dream sends him outward in search of treasure, but Coelho's real subject is the way a person learns to read omens, accept delay, and keep desire from shrinking into comfort. The crystal merchant, the Englishman, the alchemist, and the desert itself all function as tests of whether the Personal Legend is still being chosen or merely admired from a distance. The prose aims for parable, not psychological density, which is why the lessons arrive with such directness. Its continuing popularity comes from that simplicity: vocation is presented as something the world keeps answering if one will keep walking.`
  ],
  'smugglers-cove': [
    `Smuggler's Cove rescues tiki from kitsch by showing how much classification, prep, balance, and historical memory sit behind drinks many people misremember as pure sugar theater. Martin Cate takes rum seriously enough to sort it by production style and flavor family, then ties syrups, juices, spice, garnish, and glassware into a complete hospitality aesthetic. Donn Beach and Trader Vic matter here not as mascots but as innovators whose techniques can still be studied precisely. Cate's manual works because it joins bar craft, historical recovery, and exuberant showmanship without treating precision and spectacle as opposites.`
  ],
  'the-age-of-gold': [
    `Brands presents the California Gold Rush as a social detonation: migrants, speculators, merchants, violence, disease, lawmaking, and sudden ruin all flood west once gold is found at Sutter's Mill. Fortune-seeking quickly becomes state-building, because camps, ports, newspapers, transport routes, and political institutions have to be improvised in the wake of extractive frenzy. The myth of democratic opportunity survives in the story, but only alongside dispossession, racial hostility, and manic instability. Gold here is not just treasure; it is the force that scrambles an entire region into modernity.`
  ],
  'death-valley-and-the-amargosa': [
    `Death Valley and the Amargosa follows miners and dreamers into country so dry and unforgiving that geology, water, and transport become more decisive than enthusiasm. Lost strikes, borax operations, camp booms, abandoned settlements, and stubborn prospecting myths give the region its rhythm of hope and collapse. Lingenfelter is good at making the desert feel logistical rather than romantic, where distance and heat punish every mistake. The frontier legend remains, but it is constantly corrected by thirst, cost, and failure.`
  ],
  klondike: [
    `The Klondike rush turns aspiration into ordeal almost immediately, because the journey north through Chilkoot and White Pass demands labor, money, and endurance before a single pan touches the Yukon. Pierre Berton keeps Dawson City vivid as a place of mud, shortages, scams, improvisation, and feverish social invention while winter and remoteness grind down stampeders' illusions. The drama lies in the gap between gold-rush fantasy and northern logistics. By the time many arrivals are ready to mine, the easy fortunes already belong mostly to someone else.`
  ],
  'the-civilization-of-the-renaissance-in-italy': [
    `Burckhardt's classic interprets Renaissance Italy through city-states, courts, humanism, revived antiquity, ceremony, and the rise of a more self-conscious individual. Even where later scholarship has revised his sharp contrasts, the study still matters as a grand vision of culture becoming aware of itself in new ways. Politics is treated almost aesthetically, as states and rulers shape public life through display and calculation. That fusion of historical observation and civilizational thesis is what made the work so influential.`
  ],
  'versailles-a-biography-of-a-palace': [
    `Versailles becomes intelligible in Spawforth's account not as a giant pretty house but as an instrument for organizing access, hierarchy, ritual, and absolutist spectacle. Louis XIV's court life, apartments, ceremonial routes, and gardens all work together to keep nobles visible, dependent, and politically managed. Architecture here is operational: rooms and routines discipline people as effectively as decrees do. The palace's later afterlife in French memory only reinforces how successfully it turned stone, etiquette, and power into a single symbol.`
  ],
  'the-story-of-art': [
    `Gombrich's great gift is pedagogical humility. He does not begin by telling readers which masterpieces to revere, but by teaching them how artists in different eras solved visual problems under different patrons, beliefs, and constraints. That approach keeps style from becoming a dead list of labels, because each shift in art history feels motivated by looking, making, and competing rather than by arbitrary chronology. The Story of Art remains beloved because it trains attention before it demands expertise.`
  ],
  'music-in-the-baroque': [
    `In Heller's account, Baroque music is tied to the institutions that paid for it: churches, courts, opera houses, and patronage systems hungry for ceremony, affect, and display. Basso continuo, opera, sacred drama, and rhetorical expressiveness become intelligible once style is placed back inside hierarchy and performance practice. Its real strength is that it never lets musical form float free of social function. Baroque sound emerges as a politics of magnificence as much as an artistic vocabulary.`
  ],
  'food-in-history': [
    `Reay Tannahill uses food as a way of reading civilization from the ground up. Agriculture, famine, sugar, spice, preservation, class dining, ritual feasting, and global trade all reveal how appetite is shaped by power, technology, scarcity, and status. The effect is to make meals historical evidence rather than background. Once food is treated this way, empires, religions, inequalities, and daily life become visible through what people could grow, store, buy, forbid, or celebrate.`
  ],
  'storm-of-steel': [
    `Jünger's Storm of Steel records trench warfare with an unnervingly cool eye that refuses the consolations of patriotic uplift and often sidesteps overt moral denunciation as well. Shelling, raids, patrols, wounds, and repeated survival are rendered with such sensory lucidity that industrial war becomes immediate rather than abstract. Part of the memoir's difficulty is exactly that composure, since intensity, danger, and comradeship can seem almost aesthetically charged within the devastation. It remains one of the starkest firsthand accounts of what mechanized battle felt like from inside.`
  ],
  'one-green-beret': [
    `One Green Beret tracks the profession of Special Forces through deployments, partner-force work, training cycles, and the peculiar mixture of improvisation and discipline demanded by modern unconventional warfare. Bosnia, Kosovo, Iraq, and adjacent theaters matter less as headline backdrops than as environments in which small teams have to operate with cultural awareness, endurance, and tactical flexibility. The memoir's interest lies in the ground-level view of competence: long preparation, bureaucratic friction, loyalty, and the wear of repeated missions. It treats elite soldiering not as glamour but as a sustained professional identity under pressure.`
  ]
};

const bespokeKeyPoints = {
  'art-of-war': [
    `Winning before battle begins`,
    `Deception, feints, and information control`,
    `Generalship, discipline, and command`,
    `Terrain, timing, and positional advantage`,
    `Knowing the enemy and knowing yourself`
  ],
  'kite-runner': [
    `Childhood betrayal of Hassan`,
    `Baba, Amir, and damaged fatherhood`,
    `Pashtun-Hazara class and ethnic tension`,
    `Taliban brutality and return to Kabul`,
    `Atonement through Sohrab`
  ],
  'the-sun-also-rises': [
    `Jake Barnes and the war wound`,
    `Brett Ashley as unattainable desire`,
    `Pamplona bullfighting and male performance`,
    `Expat drift through Paris and Spain`,
    `Romero as discipline against decay`
  ],
  'heart-of-darkness': [
    `Marlow moving upriver toward Kurtz`,
    `Ivory extraction and imperial hypocrisy`,
    `Civilization losing its moral mask`,
    `Kurtz as charisma without restraint`,
    `Darkness as psychological and colonial exposure`
  ],
  'a-passage-to-india': [
    `Aziz and Fielding under empire`,
    `Marabar Caves and collapsing certainty`,
    `Adela Quested and the accusation crisis`,
    `British officialdom and racial hierarchy`,
    `Hindu, Muslim, and English worlds misfitting`
  ],
  'catch-22': [
    `Yossarian trying not to die`,
    `Catch-22 as a bureaucratic trap`,
    `Milo Minderbinder and profit without conscience`,
    `Circular orders, missions, and military insanity`,
    `Comedy curdling into moral horror`
  ],
  'moby-dick': [
    `Ahab hunting the white whale`,
    `Ishmael, Queequeg, and the world of the Pequod`,
    `Whaling labor and encyclopedic obsession`,
    `Nature as mystery beyond mastery`,
    `Monomania driving crew and voyage`
  ],
  '1984': [
    `Rewriting history through Winston Smith`,
    `Private rebellion through Julia`,
    `Newspeak and the shrinking of thought`,
    `Torture under O’Brien and ideological conquest`,
    `Forced love for Big Brother`
  ],
  'ulysses': [
    `One Dublin day through Leopold Bloom`,
    `Stephen Dedalus and artistic restlessness`,
    `Domestic estrangement around Molly Bloom`,
    `Ordinary errands treated like epic episodes`,
    `Stream-of-consciousness form remaking the novel`
  ],
  'the-great-gatsby': [
    `Gatsby reinventing himself for Daisy`,
    `Old money contempt in the Buchanans`,
    `Nick Carraway watching glamour rot`,
    `The green light and the unrecoverable past`,
    `Carelessness protected by class privilege`
  ],
  'lord-of-the-flies': [
    `Island order collapsing into ritual violence`,
    `Ralph and Jack fighting over leadership`,
    `Piggy’s reason against tribal hysteria`,
    `The beast as fear turned political`,
    `Childhood innocence ending in murder`
  ],
  'one-hundred-years-of-solitude': [
    `The Buendía family repeating its mistakes`,
    `Macondo between wonder, solitude, and ruin`,
    `Civil war and banana-company violence`,
    `Prophecy, incest, and cyclical time`,
    `Magical events treated as ordinary life`
  ],
  'the-divine-comedy': [
    `Inferno punishing particular sins`,
    `Purgatorio as painful moral repair`,
    `Paradiso as ascent into ordered joy`,
    `Virgil and Beatrice guiding the pilgrim`,
    `The soul learning to love rightly`
  ],
  'great-expectations': [
    `Pip climbing toward gentility through shame`,
    `Magwitch returning as the true benefactor`,
    `Miss Havisham and Estella shaping desire`,
    `Joe’s loyalty against Pip’s vanity`,
    `Class fantasy collapsing into moral education`
  ],
  'the-iliad': [
    `Achilles withdrawing and returning in rage`,
    `Honor culture around spoils and reputation`,
    `Hector defending Troy under doomed fate`,
    `Gods intervening in human slaughter`,
    `Glory purchased at the price of mortality`
  ],
  'odyssey': [
    `Homecoming delayed by gods and monsters`,
    `Cunning escapes engineered by Odysseus`,
    `Penelope holding Ithaca together through delay`,
    `Telemachus growing into public action`,
    `Hospitality tested by suitors and strangers`
  ],
  'the-holy-bible': [
    `Genesis creation, fall, and covenant beginnings`,
    `Exodus, Sinai law, kingship, and prophetic warning`,
    `Wisdom books on suffering, praise, and righteousness`,
    `The Gospels on Jesus’s teaching, death, and resurrection`,
    `Epistles and Revelation on church, judgment, and restoration`
  ],
  'frankenstein': [
    `Victor creating life and fleeing responsibility`,
    `The Creature learning through rejection`,
    `Scientific ambition without moral foresight`,
    `Isolation feeding violence and revenge`,
    `Monstrosity shifting from body to behavior`
  ],
  'gone-with-the-wind': [
    `Scarlett O’Hara surviving Southern collapse`,
    `War and Reconstruction wrecking plantation society`,
    `Ashley obsession against Rhett Butler’s realism`,
    `Female resilience tangled with selfishness`,
    `Old-order nostalgia facing material survival`
  ],
  'oliver-twist': [
    `Workhouse cruelty and parish hypocrisy`,
    `Fagin’s underworld of exploited children`,
    `Nancy and Bill Sikes inside urban brutality`,
    `Oliver’s innocence moving through filth and crime`,
    `Respectability versus the systems that breed misery`
  ],
  'the-works-of-hp-lovecraft': [
    `Forbidden texts and sanity-breaking knowledge`,
    `Cosmic beings dwarfing human importance`,
    `Decaying towns, bloodlines, and hidden corruption`,
    `Narrators unraveling under revelation`,
    `Fear generated by scale, age, and the unknown`
  ],
  'five-weeks-in-a-balloon': [
    `Balloon travel across colonial-era Africa`,
    `Scientific ingenuity meeting logistical danger`,
    `Aerial exploration as spectacle and experiment`,
    `Companions balancing curiosity and survival`,
    `Distance, weather, and improvisation in motion`
  ],
  'the-adventures-of-huckleberry-finn': [
    `River travel with Jim as moral education`,
    `Slaveholding society judged by a boy’s conscience`,
    `Huck resisting “civilized” hypocrisy`,
    `Fraud, violence, and performance along the journey`,
    `Friendship forcing a choice against social rules`
  ],
  'the-last-of-the-mohicans': [
    `Frontier warfare in the French and Indian War`,
    `Hawkeye between British forces and Native allies`,
    `Magua turning grievance into vengeance`,
    `Capture, rescue, and pursuit through the wilderness`,
    `A vanishing world of tribes and old loyalties`
  ],
  'robinson-crusoe': [
    `Shipwreck survival turned into island mastery`,
    `Labor, inventory, and practical self-rule`,
    `Providence and repentance in isolation`,
    `Friday inside hierarchy and companionship`,
    `Civilization rebuilt through tools, property, and habit`
  ],
  'the-jungle-books': [
    `Mowgli between wolf pack and village life`,
    `The Law of the Jungle as moral code`,
    `Baloo, Bagheera, and Shere Khan as rival models`,
    `Animal stories about belonging and hierarchy`,
    `Growing up between wilderness and human society`
  ],
  'kim-rudyard-kipling': [
    `Kimball O’Hara between Irish and Indian worlds`,
    `The lama’s spiritual quest beside the Great Game`,
    `Espionage, travel, and apprenticeship across India`,
    `Disguise, languages, and performed identity`,
    `Empire as both system and adventure map`
  ],
  'mother-india': [
    `Sanitation, caste, and social-reform indictment`,
    `Attacks on child marriage and women’s conditions`,
    `Imperial paternalism disguised as investigation`,
    `Nationalist backlash against Katherine Mayo`,
    `The book as a weapon in anti-independence politics`
  ],
  'thus-spoke-zarathustra': [
    `Prophetic speeches from Zarathustra`,
    `The overman against herd morality`,
    `Self-overcoming through continual re-creation`,
    `Eternal recurrence as a test of affirmation`,
    `Christian pity and resentment under attack`
  ],
  'the-futurist-manifesto': [
    `Speed, machines, and urban violence as ideals`,
    `Contempt for museums, libraries, and the past`,
    `War treated as cleansing energy`,
    `Art as shock, rupture, and provocation`,
    `Modernity celebrated through destruction`
  ],
  'the-communist-manifesto': [
    `Bourgeoisie and proletariat as antagonists`,
    `Capitalism revolutionizing everything it touches`,
    `Class struggle as the motor of history`,
    `Private property and communist demands`,
    `International revolution against the existing order`
  ],
  'the-changing-world-order': [
    `Debt cycles and reserve-currency power`,
    `Great powers rising and declining in patterns`,
    `Domestic cohesion versus internal breakdown`,
    `War, finance, and geopolitical succession`,
    `China and the United States inside a larger cycle`
  ],
  'the-decline-of-the-west': [
    `Cultures treated as living organisms`,
    `Faustian civilization and Western exhaustion`,
    `History read morphologically rather than progressively`,
    `Democracy, money, and Caesarism as late symptoms`,
    `Civilizational pessimism about renewal`
  ],
  'the-waste-land': [
    `Tiresias binding the poem’s shifting voices`,
    `The Unreal City of deadened modern life`,
    `Sex without intimacy in The Fire Sermon`,
    `Fragments of myth and scripture against collapse`,
    `Rain, thunder, and the possibility of renewal`
  ],
  'snow-crash': [
    `Hiro Protagonist hacking through franchise America`,
    `The Metaverse as status world and battlefield`,
    `Snow Crash as virus, language, and mind-control code`,
    `Sumerian myth repurposed as information warfare`,
    `Mafia pizza delivery and privatized state collapse`
  ],
  'animal-farm': [
    `Old Major’s revolt turning into Napoleon’s regime`,
    `Snowball, exile, and the seizure of the revolution`,
    `Boxer’s loyalty being exploited to the end`,
    `Commandments rewritten by Squealer’s propaganda`,
    `Pigs becoming indistinguishable from human masters`
  ],
  'the-catcher-in-the-rye': [
    `Holden Caulfield wandering New York after expulsion`,
    `Allie’s death sitting beneath the sarcasm`,
    `Phoniness as Holden’s attack on adult performance`,
    `Phoebe and the fantasy of protecting innocence`,
    `Collapse, exhaustion, and refusal to grow up cleanly`
  ],
  'to-kill-a-mockingbird': [
    `Atticus Finch defending Tom Robinson`,
    `Scout and Jem learning Maycomb’s racial code`,
    `Boo Radley shifting from fear to human reality`,
    `Courtroom injustice exposing respectable cruelty`,
    `Empathy taught against social prejudice`
  ],
  'macbeth': [
    `The witches triggering Macbeth’s fatal imagination`,
    `Lady Macbeth driving Duncan’s murder and then breaking`,
    `Banquo’s ghost and guilt made visible`,
    `Prophecy twisting confidence into delusion`,
    `Tyranny ending at Birnam Wood and Dunsinane`
  ],
  'alice-in-wonderland': [
    `The rabbit hole and constant shifts of scale`,
    `Tea parties, riddles, and logic gone crooked`,
    `The Caterpillar and Alice’s unstable identity`,
    `The Queen’s authority as pure absurd performance`,
    `Dream structure turning nonsense into satire`
  ],
  'lord-of-the-rings': [
    `Frodo carrying the Ring toward Mordor`,
    `Aragorn growing into kingship and responsibility`,
    `Gollum as corruption, pity, and final necessity`,
    `The Fellowship breaking apart and still holding purpose`,
    `Power renounced instead of seized`
  ],
  'pride-and-prejudice': [
    `Elizabeth Bennet and Darcy correcting their first impressions`,
    `Bingley, Jane, and quieter forms of affection`,
    `Lydia and Wickham exposing the family’s vulnerability`,
    `Lady Catherine and the pressure of rank`,
    `Marriage as character test rather than mere romance`
  ],
  'jane-eyre': [
    `Lowood hardship forging Jane’s moral backbone`,
    `Thornfield attraction and secrecy around Rochester`,
    `Bertha Mason as the hidden cost of the household`,
    `Refusal to become a dependent mistress`,
    `Return to Rochester on terms of equality`
  ],
  'wuthering-heights': [
    `Catherine and Heathcliff bound by destructive obsession`,
    `Heathcliff weaponizing humiliation into revenge`,
    `Wuthering Heights and Thrushcross Grange as rival worlds`,
    `Class exclusion warping love into cruelty`,
    `The younger generation partially escaping the curse`
  ],
  'crime-and-punishment': [
    `Raskolnikov’s murder theory and the actual killing`,
    `Porfiry tightening pressure through psychological pursuit`,
    `Sonia as suffering, pity, and moral counterweight`,
    `Pride isolating Raskolnikov from ordinary humanity`,
    `Confession and the possibility of spiritual rebirth`
  ],
  'war-and-peace': [
    `Pierre Bezukhov stumbling toward moral seriousness`,
    `Prince Andrei’s disillusionment with glory and greatness`,
    `Natasha Rostova as vitality, error, and growth`,
    `The 1812 invasion and Russia’s social world at war`,
    `Tolstoy attacking great-man theories of history`
  ],
  'anna-karenina': [
    `Anna and Vronsky destroying themselves through passion`,
    `Levin and Kitty as the counterpoint of earned domestic meaning`,
    `Society punishing female scandal more than male selfishness`,
    `Stiva’s easy moral shallowness inside the same world`,
    `Jealousy, isolation, and Anna’s slide toward despair`
  ],
  'don-quixote': [
    `Don Quixote imposing romance onto the real world`,
    `Sancho Panza grounding fantasy with appetite and wit`,
    `Windmills, inns, and beatings exposing delusion`,
    `Books creating identity as much as madness`,
    `Idealism surviving ridicule without fully collapsing`
  ],
  'les-miserables': [
    `Jean Valjean remade by the bishop’s mercy`,
    `Javert’s law colliding with grace`,
    `Fantine and Cosette inside structural misery`,
    `Marius and the barricades of revolutionary Paris`,
    `Redemption pursued through sacrifice rather than innocence`
  ],
  'madame-bovary': [
    `Emma Bovary treating life like a bad romance novel`,
    `Provincial boredom feeding erotic and social fantasy`,
    `Rodolphe and Léon as failed escape routes`,
    `Debt and Lheureux tightening the trap`,
    `Self-destruction born from illusion and appetite`
  ],
  'the-brothers-karamazov': [
    `Fyodor Karamazov’s corruption setting the murder plot`,
    `Ivan’s rebellion and the Grand Inquisitor argument`,
    `Alyosha as spiritual charity in a degraded family`,
    `Dmitri’s appetite, honor, and wrongful implication`,
    `Smerdyakov turning ideas into crime`
  ],
  'a-tale-of-two-cities': [
    `Doctor Manette’s imprisonment echoing through generations`,
    `Madame Defarge turning grievance into relentless vengeance`,
    `Charles Darnay trapped by inherited aristocratic guilt`,
    `Sydney Carton finding redemption through substitution`,
    `Resurrection imagery binding private love to public terror`
  ],
  'the-scarlet-letter': [
    `Hester Prynne wearing the scarlet letter in public`,
    `Dimmesdale’s hidden guilt eating through his authority`,
    `Chillingworth turning injury into parasitic revenge`,
    `Pearl as living consequence and disruptive truth`,
    `Puritan judgment failing to control inner reality`
  ],
  'the-count-of-monte-cristo': [
    `Edmond Dantès transformed by prison and Abbé Faria`,
    `The Château d’If turning despair into education`,
    `Layered revenge against Danglars, Fernand, and Villefort`,
    `Wealth, disguise, and theatrical self-invention`,
    `Mercy emerging only after vengeance goes too far`
  ],
  'hamlet': [
    `The ghost accusing Claudius and demanding revenge`,
    `Hamlet’s delay between thought and action`,
    `The play within the play exposing hidden guilt`,
    `Ophelia and Polonius as collateral damage of court corruption`,
    `Death, rot, and the collapse of Denmark’s order`
  ],
  'dracula': [
    `Jonathan Harker trapped inside Dracula’s castle`,
    `Lucy Westenra’s transformation and repeated staking`,
    `Mina Harker as both victim and strategic mind`,
    `Modern tools fighting an ancient supernatural threat`,
    `Invasion, blood, and sexual panic fused together`
  ],
  'othello': [
    `Iago engineering suspicion through insinuation`,
    `The handkerchief becoming false proof`,
    `Othello’s outsider status in Venice and Cyprus`,
    `Desdemona’s innocence trapped inside male manipulation`,
    `Jealousy turning honor into murder`
  ],
  'fathers-and-sons': [
    `Bazarov’s nihilism confronting older liberal ideals`,
    `Arkady pulled between imitation and maturity`,
    `Odintsova exposing Bazarov’s emotional limits`,
    `Serf-reform Russia shifting beneath family life`,
    `Parents and children loving each other across ideological contempt`
  ],
  'middlemarch': [
    `Dorothea Brooke’s idealism colliding with Casaubon`,
    `Lydgate’s ambition being suffocated by debt and marriage`,
    `Rosamond’s vanity reshaping other lives`,
    `Provincial gossip and reputation governing possibility`,
    `Moral consequence spreading through an entire town`
  ],
  'romance-of-the-three-kingdoms': [
    `The fall of the Han and the scramble for legitimacy`,
    `Liu Bei, Guan Yu, and Zhang Fei bound by sworn loyalty`,
    `Cao Cao mixing brilliance, ambition, and ruthlessness`,
    `Zhuge Liang making strategy itself legendary`,
    `Red Cliffs and other campaigns deciding the shape of empire`
  ],
  'the-tale-of-the-heike': [
    `The Taira clan rising into fatal arrogance`,
    `The Minamoto war turning court conflict into annihilation`,
    `The Gion Shōja bells announcing impermanence`,
    `Warrior glory shadowed by Buddhist transience`,
    `Atsumori, Yoshitsune, and beauty inside loss`
  ],
  'samguk-sagi': [
    `Goguryeo, Baekje, and Silla locked in rivalry`,
    `Annals of kingship used to define legitimacy`,
    `Campaigns and alliances shaping peninsular power`,
    `State formation recorded through court-centered history`,
    `Silla’s eventual ascendancy framed as historical order`
  ],
  'secret-history-of-the-mongols': [
    `Temujin’s rise from exile and vulnerability`,
    `Jamukha, anda loyalty, and steppe betrayal`,
    `Börte, family bonds, and political survival`,
    `Tribal unification through charisma and terror`,
    `Mongol law, discipline, and conquest-making power`
  ],
  'mahabharata': [
    `The Pandava-Kaurava feud growing from family rivalry`,
    `The dice game and Draupadi’s humiliation`,
    `Krishna guiding Arjuna before battle`,
    `Kurukshetra as a war of duty and devastation`,
    `Aftermath showing victory without innocence`
  ],
  'baburnama': [
    `Losing and retaking kingdoms from Ferghana to Kabul`,
    `Samarkand ambition and repeated reversals`,
    `Landscape, gardens, and cities observed with unusual candor`,
    `Campaign leadership amid fragile legitimacy`,
    `Founding Mughal rule without losing the memoir’s personal voice`
  ],
  'the-gallic-war': [
    `Helvetii, Ariovistus, and the expansion of Roman intervention`,
    `Vercingetorix and the siege of Alesia`,
    `Engineering, logistics, and speed as instruments of conquest`,
    `Third-person narration as Caesar’s self-justification`,
    `Gaul subdued through force and political theater`
  ],
  'shahnameh': [
    `Rostam carrying heroic greatness and catastrophic blindness`,
    `Iran-Turan wars defining loyalty and enmity`,
    `Kingship judged by justice rather than blood alone`,
    `Tragedies like Rostam and Sohrab deepening the epic`,
    `Persian memory preserved through legend and verse`
  ],
  'mein-kampf': [
    `Hitler turning defeat into the stab-in-the-back myth`,
    `Race war and antisemitism made into a total worldview`,
    `Propaganda treated as a weapon of mass persuasion`,
    `Leader principle and contempt for parliamentary politics`,
    `Lebensraum and expansionist nationalism`
  ],
  'the-arabs-and-the-holocaust': [
    `Arab responses to the Holocaust across the twentieth century`,
    `Nakba memory colliding with Holocaust memory`,
    `Acknowledgment, denial, and political instrumentalization`,
    `European antisemitism refracted through Arab debates`,
    `Historical responsibility argued amid the Arab-Israeli conflict`
  ],
  'nazis-islamists-and-the-making-of-the-modern-middle-east': [
    `Haj Amin al-Husseini and wartime alliance politics`,
    `Nazi broadcasting and propaganda in the Arab world`,
    `Islamist movements borrowing from fascist-style mobilization`,
    `Anti-British and anti-Zionist struggle entangled with larger ideologies`,
    `Postwar legacies carried into regional politics`
  ],
  'sombres-bourreaux': [
    `Black collaboration examined across colonies and diasporas`,
    `Vichy, occupation, and imperial status complicating allegiance`,
    `Race operating inside regimes built on racial hierarchy`,
    `Opportunism, survival, and moral compromise under war pressure`,
    `Memory politics around uncomfortable collaboration histories`
  ],
  'the-quran': [
    `Revelation to Muhammad in Meccan and Medinan settings`,
    `Stories of earlier prophets as warning and continuity`,
    `Judgment, mercy, and accountability before God`,
    `Prayer, law, and communal discipline`,
    `Arabic recitation as part of the scripture’s force`
  ],
  'torah': [
    `Genesis origins and the patriarchal family line`,
    `Exodus from Egypt under Moses`,
    `Sinai covenant and the giving of the law`,
    `Holiness, sacrifice, and communal order in Leviticus`,
    `Wilderness testing and Deuteronomic renewal`
  ],
  'tanakh': [
    `From conquest and judges to monarchy and collapse`,
    `Prophets confronting kings, idolatry, and injustice`,
    `Psalms, Job, and wisdom literature on suffering and praise`,
    `Exile and return reshaping national identity`,
    `Covenant memory carried through narrative, poetry, and law`
  ],
  'talmud': [
    `Mishnah and Gemara building layered argument`,
    `Rabbinic dispute as the method rather than a defect`,
    `Halakhic reasoning applied to ordinary life`,
    `Aggadic stories carrying ethics and imagination`,
    `Tradition preserved through debate, commentary, and precedent`
  ],
  'tao-te-ching': [
    `The Tao as the nameless source and pattern of things`,
    `Wu wei as action without strain or forcing`,
    `Water, softness, and reversal defeating hardness`,
    `Small-state rulership and suspicion of prideful power`,
    `Simplicity, emptiness, and the uncarved life`
  ],
  'kojiki': [
    `Izanagi and Izanami in the creation of the islands`,
    `Amaterasu, Susanoo, and the drama of the kami`,
    `The heavenly descent and imperial ancestry`,
    `Purification, pollution, and ritual order`,
    `Myth tied to sacred geography and rulership`
  ],
  'dhammapada': [
    `Mind as the forerunner of conduct`,
    `Craving, anger, and self-made suffering`,
    `Heedfulness versus negligence`,
    `The disciplined person on the path to liberation`,
    `Detachment, compassion, and nirvana`
  ],
  'bhagavad-gita': [
    `Arjuna’s crisis before killing his own kin`,
    `Dharma and disciplined action under moral strain`,
    `Action without attachment to the fruits`,
    `Bhakti, knowledge, and the paths of yoga`,
    `Krishna’s cosmic form and the deathless self`
  ],
  'the-mabinogion': [
    `Pwyll, Rhiannon, and traffic with Annwn`,
    `Branwen and the catastrophe of kinship politics`,
    `Manawydan, dispossession, and enchantment`,
    `Math, Blodeuwedd, and transformation as punishment`,
    `Heroic honor mixed with older Celtic wonder`
  ],
  'arvisura': [
    `Scythian, Hun, and Magyar origin lineages`,
    `Táltos spirituality and sacred ancestry`,
    `Legendary migrations and tribal memory`,
    `Heroic rulers turned into national myth`,
    `Myth used to fortify Hungarian identity`
  ],
  'opportunity': [
    `Finding urgent problems people already want solved`,
    `Positioning and market selection before product-building`,
    `Designing offers around demand instead of ego`,
    `Creating value that is easy to explain and buy`,
    `Execution and responsibility over entrepreneurial wishful thinking`
  ],
  'the-power-of-now': [
    `Watching thought instead of being ruled by it`,
    `The pain-body and emotional reactivity`,
    `Ego built from past and future identification`,
    `Presence through surrender to what already is`,
    `Inner stillness as the opening to awakening`
  ],
  '7-habits-of-highly-effective-people': [
    `Habit 1: Be Proactive — take responsibility for your responses, choices, and conduct instead of blaming circumstances or other people.`,
    `Habit 2: Begin with the End in Mind — define your principles, long-term goals, and desired direction before deciding what to do day to day.`,
    `Habit 3: Put First Things First — organize time around what matters most so values and priorities control the schedule rather than urgency alone.`,
    `Habit 4: Think Win-Win — aim for solutions that create mutual benefit instead of treating relationships as zero-sum contests.`,
    `Habit 5: Seek First to Understand, Then to Be Understood — listen deeply and accurately before trying to persuade, defend, or correct.`,
    `Habit 6: Synergize — use difference, trust, and cooperation to create better outcomes than any one person could produce alone.`,
    `Habit 7: Sharpen the Saw — renew yourself physically, mentally, emotionally, and spiritually so effectiveness can be sustained over time.`
  ],
  'the-buying-brain': [
    `Attention, novelty, and neural salience in marketing`,
    `Emotion and reward as drivers of purchase decisions`,
    `Memory, branding, and decision shortcuts`,
    `Measuring responses to ads, packaging, and products`,
    `What brain-based marketing can and cannot really prove`
  ],
  'advanced-interviewing-techniques': [
    `Rapport before resistance hardens`,
    `Question sequencing and interview structure`,
    `Behavioral cues, baselines, and leakage`,
    `Elicitation that feels conversational instead of blunt`,
    `Maintaining control without blowing the subject up`
  ],
  'mining-capital': [
    `The funding ladder from explorer to producer`,
    `Equity, debt, royalties, and streaming finance`,
    `Technical, jurisdictional, and commodity-price risk`,
    `Due diligence and bankable feasibility work`,
    `Capital strategy across the mine life cycle`
  ],
  'the-phoenix-project': [
    `Bill Palmer inheriting a collapsing IT operation`,
    `Brent as the bottleneck that reveals the system`,
    `The Three Ways and DevOps-style flow`,
    `Work-in-progress limits and visible queues`,
    `Operational recovery through cross-team discipline`
  ],
  'thinking-fast-and-slow': [
    `System 1 versus System 2 thinking`,
    `Heuristics, substitution, and overconfidence`,
    `Prospect theory and loss aversion`,
    `Base-rate neglect and probability errors`,
    `The remembering self versus the experiencing self`
  ],
  'thinking-in-bets': [
    `Treating decisions as bets under uncertainty`,
    `Separating process quality from lucky or unlucky outcomes`,
    `Calibrating belief in percentages instead of certainty`,
    `Truth-seeking groups that expose bad reasoning`,
    `Emotional discipline after wins, losses, and feedback`
  ],
  'good-strategy-bad-strategy': [
    `Diagnosis of the actual bottleneck or challenge`,
    `Guiding policy that narrows what to do`,
    `Coherent action instead of scattered initiatives`,
    `Tradeoffs, concentration, and leverage`,
    `Fluff, goals, and buzzwords masquerading as strategy`
  ],
  'the-infinite-game': [
    `Finite contests versus an enduring mission`,
    `A just cause that outlasts metrics`,
    `Trusting teams and candid cultures`,
    `Worthy rivals instead of paranoid enemies`,
    `Existential flexibility when survival requires change`
  ],
  'the-art-of-thinking-clearly': [
    `Survivorship bias, confirmation bias, and selection traps`,
    `Social proof, authority, and crowd distortion`,
    `Overconfidence and the illusion of understanding`,
    `Sunk costs and other everyday decision traps`,
    `Mental hygiene for making fewer stupid calls`
  ],
  'predictably-irrational': [
    `Anchoring and the relativity of price`,
    `Why “free” short-circuits judgment`,
    `Social norms versus market norms`,
    `Arousal, temptation, and self-control failure`,
    `Dishonesty and incentives that invite cheating`
  ],
  'farsighted': [
    `Short-term instincts versus long-term planning`,
    `Scenario-building for branching futures`,
    `Second-order effects and reversibility`,
    `Collective decision-making under deep uncertainty`,
    `Why people underinvest in distant outcomes`
  ],
  'skin-in-the-game': [
    `Risk-takers versus people insulated from consequences`,
    `Moral symmetry and accountability`,
    `Experts, interventionists, and hidden asymmetry`,
    `How minorities can reshape whole systems`,
    `Local knowledge against abstract managerial arrogance`
  ],
  'the-innovators-dilemma': [
    `Sustaining innovation versus disruption`,
    `Why existing customers can mislead incumbents`,
    `Low-end and new-market entry`,
    `Why competent management still produces failure`,
    `Spinning out new structures to chase disruption`
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
  'the-ellipsis-manual': [
    `Behavioral baselining and pattern clusters`,
    `Elicitation without looking like interrogation`,
    `Status, framing, and command presence`,
    `Verbal suggestion and persuasion routines`,
    `Reading incongruence under pressure`
  ],
  'social-engineering-the-art-of-human-hacking': [
    `Pretexting, rapport, and elicitation`,
    `Authority, urgency, and other compliance triggers`,
    `Reconnaissance before the human approach`,
    `Manipulating trust instead of breaking code`,
    `Security awareness as the human countermeasure`
  ],
  'never-split-the-difference': [
    `Mirroring and tactical empathy`,
    `Labeling emotions to lower resistance`,
    `Calibrated “how” and “what” questions`,
    `Black swans that change the whole negotiation`,
    `The Ackerman model and deliberate bargaining structure`
  ],
  'greek-architecture': [
    `Doric, Ionic, and Corinthian orders as formal systems`,
    `Temple planning, proportion, and optical refinement`,
    `Sanctuaries, theaters, and civic architecture`,
    `Stone construction and the legacy of timber form`,
    `How Greek building set the terms for later classicism`
  ],
  'the-classical-language-of-architecture': [
    `The classical orders as architectural vocabulary`,
    `Columns, capitals, bases, and entablatures`,
    `Proportion, symmetry, and facade composition`,
    `Pediments, moldings, and ornamental grammar`,
    `Reading buildings as sentences in a classical language`
  ],
  'chinese-architecture-a-history': [
    `Timber-frame construction as the core system`,
    `Dougong brackets, roofs, and structural expression`,
    `Axial planning in palaces, temples, and capitals`,
    `Architecture as ritual and political order`,
    `Change and continuity from early empires to late dynasties`
  ],
  'hanok-the-korean-house': [
    `Ondol heating and maru floor space`,
    `Timber construction and modular domestic layout`,
    `Courtyards, orientation, and site placement`,
    `House form shaped by climate and daily use`,
    `Korean domestic aesthetics and landscape relations`
  ],
  'a-world-history-of-architecture': [
    `Sacred and civic building across civilizations`,
    `Materials and structural solutions in different regions`,
    `Climate, technology, and building form`,
    `Architecture as religion, rule, and public memory`,
    `Comparing traditions without flattening them into one style story`
  ],
  'the-guns-of-august': [
    `The Schlieffen Plan and the violation of Belgium`,
    `French Plan XVII and the cult of the offensive`,
    `British entry and the BEF in the opening battles`,
    `Joffre, Moltke, and command failure in the first month`,
    `The Marne shattering hopes for a quick war`
  ],
  'postwar': [
    `Reconstruction from rubble after 1945`,
    `Cold War division between East and West`,
    `Prosperity, welfare states, and social transformation`,
    `Holocaust memory and Europe’s argument with its past`,
    `The collapse of communism and the post-1989 settlement`
  ],
  'the-sleepwalkers': [
    `The Balkans as the unstable fuse-box of Europe`,
    `Serbia, Austria-Hungary, and assassination politics`,
    `Alliance commitments and diplomatic entanglement`,
    `The July Crisis as a step-by-step escalation`,
    `Shared responsibility rather than one simple culprit`
  ],
  'the-rise-and-fall-of-the-third-reich': [
    `Weimar weakness and Hitler’s political ascent`,
    `The Nazi dictatorship and destruction of opposition`,
    `War-making, expansion, and strategic overreach`,
    `Ideology, propaganda, and the machinery of persecution`,
    `Collapse, defeat, and the wreckage left behind`
  ],
  'spqr': [
    `Rome’s early myths versus recoverable history`,
    `Citizenship, inclusion, and who counted as Roman`,
    `Conflict between elite domination and popular politics`,
    `Expansion, empire, and the strain of conquest`,
    `How Romans narrated themselves across republic and empire`
  ],
  'the-histories': [
    `Croesus, Persia, and the long lead-in to war`,
    `Greco-Persian conflict as the central narrative spine`,
    `Ethnographic digressions on peoples and customs`,
    `Hubris, reversal, and the volatility of fortune`,
    `History as inquiry rather than bare chronicle`
  ],
  'the-peloponnesian-war': [
    `Athens, Sparta, and the growth of mutual fear`,
    `Strategy, attrition, and the logic of prolonged war`,
    `Plague, faction, and moral breakdown`,
    `Speeches such as the Melian Dialogue as political X-rays`,
    `The Sicilian disaster and the cost of bad judgment`
  ],
  'genghis-khan-and-the-making-of-the-modern-world': [
    `Temujin’s rise and the unification of steppe tribes`,
    `Mongol military organization and mobility`,
    `Merit, law, and imperial administration`,
    `Trade routes, relays, and exchange across Eurasia`,
    `The Mongol legacy beyond simple barbarian stereotypes`
  ],
  'the-crusades': [
    `Urban II and the launch of the First Crusade`,
    `Holy war, pilgrimage, and penitential violence`,
    `Latin states in the Levant and their fragility`,
    `Muslim responses, including the age of Saladin`,
    `Memory, myth, and the long afterlife of crusading`
  ],
  'the-silk-roads': [
    `Central Asia and Persia as historical crossroads`,
    `Trade routes moving goods, ideas, and religions`,
    `Empires competing for corridor control`,
    `From ancient exchange to modern oil and geopolitics`,
    `A challenge to Europe-centered historical narratives`
  ],
  'mastery': [
    `Apprenticeship as the unavoidable first stage`,
    `Deliberate practice beyond mere repetition`,
    `Mentors, rivals, and social intelligence`,
    `Patience through years of obscurity and frustration`,
    `Creative independence after deep craft absorption`
  ],
  'think-and-grow-rich': [
    `Burning desire as the starting engine`,
    `Faith, autosuggestion, and self-conditioning`,
    `The “master mind” alliance`,
    `Organized planning and persistence`,
    `Imagination converting ambition into enterprise`
  ],
  'david-and-goliath': [
    `The real tactical mismatch in David versus Goliath`,
    `Desirable difficulty and the uses of hardship`,
    `When elite institutions become a burden`,
    `Authority that generates resistance instead of compliance`,
    `Underdogs pushed into more adaptive strategies`
  ],
  'blink': [
    `Thin-slicing and rapid pattern recognition`,
    `When expert intuition outruns deliberate analysis`,
    `The Warren Harding effect and surface bias`,
    `Stress, overload, and bad quick decisions`,
    `The narrow conditions under which instinct deserves trust`
  ],
  'what-the-dog-saw': [
    `Eccentric experts and obsessive practitioners`,
    `Ordinary products and systems seen through odd details`,
    `Misread risk, failure, and unintended consequence`,
    `Profile essays that make the familiar strange`,
    `Hidden mechanisms behind everyday behavior and work`
  ],
  'outliers': [
    `Opportunity structures behind exceptional success`,
    `Practice and the famous 10,000-hour frame`,
    `Birth-date and cohort effects`,
    `Cultural inheritance shaping behavior`,
    `Why talent stories leave out the scaffolding`
  ],
  'freakonomics': [
    `Incentives as the hidden engine of behavior`,
    `Cheating by teachers, athletes, and experts`,
    `Data used to test taboo or surprising claims`,
    `Crime, parenting, and markets viewed sideways`,
    `Economics as pattern-hunting rather than moral sermon`
  ],
  'startup-nation': [
    `Military service as a leadership and network engine`,
    `Immigration and talent concentration`,
    `Risk tolerance in a small, pressured country`,
    `Venture capital, policy, and the Yozma effect`,
    `Informality, speed, and entrepreneurial culture`
  ],
  'zero-the-biography-of-a-dangerous-idea': [
    `The emergence of zero in Indian mathematics`,
    `Greek and religious discomfort with nothingness`,
    `Zero, infinity, and metaphysical unease`,
    `Positional notation and the growth of calculation`,
    `Why an empty symbol transformed science`
  ],
  'journey-through-genius': [
    `Classic proofs as windows into mathematical history`,
    `How elegance and rigor work together`,
    `Breakthrough ideas from Euclid onward`,
    `Theorems that changed what mathematics could do`,
    `Discovery experienced through proof rather than biography`
  ],
  'the-strangest-man': [
    `Dirac’s role in quantum theory`,
    `The equation that predicted antimatter`,
    `Scientific genius joined to extreme reserve`,
    `Life among the early quantum pioneers`,
    `Modern physics seen through one difficult personality`
  ],
  'the-alchemist': [
    `Santiago’s dream and the call to his Personal Legend`,
    `Omens, signs, and trust in the journey`,
    `The desert as a testing ground`,
    `Alchemy as inner as well as literal transformation`,
    `Treasure found by returning home changed`
  ],
  'meditations': [
    `Self-scrutiny and Stoic discipline`,
    `Imperial duty carried without self-pity`,
    `Mortality as a correction to vanity`,
    `Reason ruling emotion and impulse`,
    `Inner freedom amid external disorder`
  ],
  'the-picture-of-dorian-gray': [
    `Lord Henry’s seductive corruption of Dorian`,
    `The portrait as the record of hidden decay`,
    `Basil Hallward and the worship of beauty`,
    `Pleasure, secrecy, and moral decomposition`,
    `A conscience that can be hidden but not escaped`
  ],
  'smugglers-cove': [
    `Rum families, flavor profiles, and blending`,
    `Classic tiki technique beyond sugary gimmicks`,
    `Donn Beach, Trader Vic, and tiki’s history`,
    `Syrups, juices, and disciplined drink construction`,
    `Hospitality as theater, spectacle, and craft`
  ],
  'the-age-of-gold': [
    `The 1848 discovery and the rush west`,
    `Boomtown disorder and sudden social upheaval`,
    `Speculation, capital, and extractive ambition`,
    `California statehood and the remaking of the West`,
    `The gold rush as a brutal version of the American dream`
  ],
  'death-valley-and-the-amargosa': [
    `Prospectors chasing strikes through extreme desert country`,
    `Mining camps, failures, and short-lived booms`,
    `Water, heat, and survival in the Amargosa region`,
    `Local legend, lost mines, and frontier mythology`,
    `Settlement patterns shaped by extraction and collapse`
  ],
  'klondike': [
    `The stampede north after the Yukon discovery`,
    `Chilkoot, White Pass, and the cost of getting in`,
    `Dawson City and frontier improvisation`,
    `Cold, scarcity, and survival under pressure`,
    `The Klondike myth versus the lived reality of the rush`
  ],
  'the-civilization-of-the-renaissance-in-italy': [
    `The state as a work of political art`,
    `Humanism and the recovery of antiquity`,
    `Art, patronage, and civic display`,
    `Courtly life, ceremony, and power`,
    `The rise of individual self-consciousness`
  ],
  'versailles-a-biography-of-a-palace': [
    `Louis XIV and the making of Versailles`,
    `Court etiquette as a technology of control`,
    `Gardens, apartments, and ceremonial routes`,
    `Architecture staging absolutist power`,
    `The palace’s afterlife in French memory`
  ],
  'the-story-of-art': [
    `Learning to look before reciting labels`,
    `Tradition and innovation in art history`,
    `Artists solving visual and technical problems`,
    `Patrons, religion, and social setting`,
    `From ancient art to modern experimentation`
  ],
  'music-in-the-baroque': [
    `Baroque style, basso continuo, and expressive form`,
    `Opera, court ceremony, and church music`,
    `Patronage systems shaping composition`,
    `Performance practice and musical rhetoric`,
    `Innovation in a world of hierarchy and spectacle`
  ],
  'food-in-history': [
    `Agriculture and the long foundations of diet`,
    `Trade goods, sugar, spices, and global exchange`,
    `Class distinction at the table`,
    `Scarcity, famine, and the politics of food`,
    `Cuisine as ritual, technology, and identity`
  ],
  'the-old-man-and-the-sea': [
    `Santiago’s long unlucky streak and return to sea`,
    `The marlin as a worthy opponent and measure of craft`,
    `Isolation, age, and endurance under strain`,
    `Sharks stripping away the visible victory`,
    `Dignity preserved even when the prize is lost`
  ],
  'green-hills-of-africa': [
    `Safari hunting in East Africa`,
    `Camp rivalry, boasting, and masculine competition`,
    `Landscape observed with a writer’s eye`,
    `Kudu hunting as pursuit and self-testing`,
    `Writing, style, and turning experience into literature`
  ],
  'storm-of-steel': [
    `Bombardment, trench raids, and assault actions`,
    `Repeated wounding and survival at the front`,
    `Comradeship inside mechanized slaughter`,
    `Cool observation instead of moralizing lament`,
    `Industrial war experienced as shock, endurance, and intensity`
  ],
  'one-green-beret': [
    `Special Forces deployments in Bosnia and Kosovo`,
    `Unconventional warfare and work with local partners`,
    `Iraq-era missions and the realities of modern SOF`,
    `Discipline, endurance, and professional identity`,
    `War remembered from the operator’s ground level`
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
  'art-of-war': [
    `The Art of War says the best strategist does not confuse aggression with intelligence. If you do not understand conditions, timing, information, morale, and the opponent in front of you, then strength just becomes an expensive way of making dumb mistakes faster.`
  ],
  'kite-runner': [
    `The Kite Runner turns one boy's betrayal into a lifelong reckoning with class, fatherhood, exile, and Taliban brutality. Hosseini's real point is that redemption arrives only in painful fragments, never as a clean wipe of the past.`
  ],
  'the-sun-also-rises': [
    `The Sun Also Rises strips expatriate glamour until only damage, jealousy, boredom, and performance remain. Jake can still recognize grace in Romero and the bullring, but Hemingway makes clear that style is a poor substitute for wholeness.`
  ],
  'heart-of-darkness': [
    `Heart of Darkness is a voyage into imperial greed masquerading as civilization. Marlow goes looking for Kurtz and instead finds a system so rotten that Kurtz feels less like an exception than its purest expression.`
  ],
  'a-passage-to-india': [
    `A Passage to India shows how empire poisons even sincere friendship before it can fully form. The Marabar Caves do not solve a mystery so much as explode everyone's illusions about race, truth, and what the British order is really built on.`
  ],
  'catch-22': [
    `Catch-22 is funniest exactly where it is most murderous: mission counts rise, paperwork multiplies, and every rule exists to keep the machine fed with bodies. Yossarian looks crazy only because he is one of the few people still reacting sanely to war.`
  ],
  'moby-dick': [
    `Moby-Dick begins as a whaling voyage and mutates into a fight between encyclopedic curiosity and monomaniac vengeance. Ishmael keeps expanding the world while Ahab keeps shrinking it to one white target, and that mismatch sinks the whole ship.`
  ],
  '1984': [
    `1984 makes totalitarianism terrifying by showing that power is not satisfied with outward obedience. Orwell's nightmare is a regime that rewrites memory, narrows language, breaks love, and finally gets inside the victim's sense of reality itself.`
  ],
  'ulysses': [
    `Ulysses turns one ordinary Dublin day into an epic of thought, appetite, memory, embarrassment, and wandering attention. Its genius is that Bloom's errands and Stephen's restlessness matter as much as any legendary quest once consciousness itself becomes the adventure.`
  ],
  'the-great-gatsby': [
    `Bluntly, The Great Gatsby says almost everybody here is full of shit: old money, new money, and the hustlers hanging around the edges, all of them dressing up insecurity with houses, cars, parties, and polished manners. Gatsby can build the mansion, invent the persona, and throw the perfect show, but he still cannot turn Daisy into the dream in his head, and after all that sad striving he ends up dead while the careless people keep moving.`
  ],
  'lord-of-the-flies': [
    `Lord of the Flies is not about civilization disappearing; it is about boys building a new order out of fear, masks, ritual, and violence. Golding keeps showing how quickly rules become theater once belonging to the stronger side feels better than telling the truth.`
  ],
  'one-hundred-years-of-solitude': [
    `One Hundred Years of Solitude makes the Buendías feel trapped inside history, desire, and prophecy all at once. Macondo keeps filling with marvels, wars, lovers, and massacres, yet the deepest pattern is repetition: solitude renewing itself generation after generation.`
  ],
  'the-divine-comedy': [
    `The Divine Comedy imagines the universe as morally structured all the way down and all the way up. Dante's afterlife is unforgettable because every punishment, purification, and vision turns love itself into the standard by which a soul is warped or fulfilled.`
  ],
  'great-expectations': [
    `Great Expectations is Pip learning that class fantasy is a terrible teacher. Dickens lets him chase gentility through shame and illusion until Magwitch, Joe, and his own bad snobbery force him to see that moral worth and social polish are not the same thing.`
  ],
  'the-iliad': [
    `The Iliad is not a patriotic victory lap. It is a brutal poem about rage, status, grief, and the fact that glory in war is always wrapped around dead bodies. Achilles is magnificent, but Homer never lets you forget that magnificence becomes terrifying once honor turns into revenge.`
  ],
  'odyssey': [
    `The Odyssey is less about wandering than about return under pressure: disguise, restraint, testing, and recognition all matter as much as brute survival. Odysseus has to earn homecoming, while Penelope and Telemachus keep Ithaca from dissolving before he gets there.`
  ],
  'the-holy-bible': [
    `The Holy Bible is not one neat slogan but a huge running drama about creation, covenant, rebellion, judgment, mercy, suffering, and redemption. It keeps returning to the same hard point: human beings wreck things constantly, and the real question is whether they can be judged, forgiven, reshaped, or saved.`
  ],
  'frankenstein': [
    `Frankenstein is the horror story that begins after the experiment works. Shelley's real accusation is not against knowledge alone but against creation without responsibility, since Victor's greatest sin is abandoning the life he was arrogant enough to make.`
  ],
  'gone-with-the-wind': [
    `Gone With the Wind survives on Scarlett O'Hara's willpower, not on the plantation nostalgia surrounding her. The novel's energy comes from watching a selfish, magnetic survivor claw through war and Reconstruction while an old social order dies ugly.`
  ],
  'oliver-twist': [
    `Oliver Twist drags innocence through a city built to prey on the weak. Workhouse charity, Fagin's gang, Nancy's divided loyalties, and Bill Sikes's violence all make Dickens's point that respectable society and criminal exploitation are closer than they pretend.`
  ],
  'the-works-of-hp-lovecraft': [
    `The Works of H.P. Lovecraft keep widening the scale until human importance collapses. Forbidden books, ruined bloodlines, sea gods, and ancient cities matter because they make knowledge itself feel like a trap door under sanity.`
  ],
  'five-weeks-in-a-balloon': [
    `Five Weeks in a Balloon turns exploration into engineering spectacle: Verne keeps asking how far ingenuity, nerve, and improvisation can carry three men above an unpredictable continent. The balloon is both vehicle and thesis, making science the engine of adventure.`
  ],
  'the-adventures-of-huckleberry-finn': [
    `The Adventures of Huckleberry Finn uses the river to strip hypocrisy out of American respectability. Huck's moral breakthrough is simple and enormous: friendship with Jim matters more than the slaveholding code he was taught to call civilization.`
  ],
  'the-last-of-the-mohicans': [
    `The Last of the Mohicans is frontier pursuit with an elegiac undertone. Cooper turns rescue, ambush, and wilderness tracking into a story about a violent border world where empires fight, loyalties fracture, and whole ways of life are disappearing.`
  ],
  'robinson-crusoe': [
    `Robinson Crusoe is survival told as inventory, labor, property, and control. Defoe makes isolation into a fantasy of mastery, which is why the novel is as much about empire and hierarchy as it is about one man's resourcefulness.`
  ],
  'the-jungle-books': [
    `The Jungle Books treat discipline and belonging as the real law of the wild. Mowgli's story works because he is never simply animal or human; Kipling keeps making him cross between systems of order that each demand loyalty on different terms.`
  ],
  'kim-rudyard-kipling': [
    `Kim makes colonial India feel like a moving web of roads, languages, disguises, and rival loyalties. The fun of the adventure never cancels the deeper split in Kim himself, who is being formed at once by espionage, affection, and spiritual apprenticeship.`
  ],
  'mother-india': [
    `Imperial paternalism drives Mother India from first page to last. Katherine Mayo piles up sanitation, caste, and sexual-reform claims to argue that Indian society is unfit for self-rule, which is why the work became a political provocation rather than a neutral social study.`
  ],
  'thus-spoke-zarathustra': [
    `Thus Spoke Zarathustra is Nietzsche turning philosophy into prophecy, parody, and challenge. Zarathustra keeps attacking comfort, herd morality, and borrowed piety in order to demand self-overcoming from readers who would rather be told they are already virtuous.`
  ],
  'the-futurist-manifesto': [
    `The Futurist Manifesto reads like an arson attack on cultural memory. Marinetti glorifies speed, machines, youth, aggression, and rupture because he wants modern art to stop preserving civilization and start smashing it.`
  ],
  'the-communist-manifesto': [
    `The Communist Manifesto is still powerful because it praises capitalism's world-remaking force even while declaring war on it. Marx and Engels make class struggle feel historical, structural, and international rather than a local complaint about wages.`
  ],
  'the-changing-world-order': [
    `The Changing World Order argues that empires do not rise and fall randomly; debt, internal cohesion, reserve-currency privilege, and geopolitical pressure move in recurring cycles. Dalio's big wager is that current U.S.-China tension makes more sense when read as pattern rather than exception.`
  ],
  'the-decline-of-the-west': [
    `The Decline of the West replaces progress talk with civilizational lifecycle talk. Spengler treats the West not as the summit of history but as a culture entering its late, money-dominated, Caesar-seeking phase.`
  ],
  'the-waste-land': [
    `The Waste Land sounds like a civilization trying to speak through broken circuitry. Eliot's fragments, quotations, deadened desire, and ritual debris make cultural exhaustion audible long before any promise of rain arrives.`
  ],
  'snow-crash': [
    `Snow Crash hurls swordfights, corporate enclaves, Sumerian myth, and computer networks into one manic information war. Stephenson's joke is that the future is absurdly commercial, but the threat underneath it is real: language itself can become malware.`
  ],
  'animal-farm': [
    `Animal Farm works because the allegory never stays cute. Slogans, staged confessions, and rewritten commandments show how a revolution can keep its symbols while hollowing out everything it promised.`
  ],
  'the-catcher-in-the-rye': [
    `The Catcher in the Rye is a grief novel hiding inside teenage disgust. Holden keeps mocking phonies, hotels, dates, schools, and adults because sarcasm is easier than admitting how shattered he feels by loss and growing up.`
  ],
  'to-kill-a-mockingbird': [
    `Bluntly, To Kill a Mockingbird is about a town that thinks of itself as decent while running on racial lies and routine cowardice. Atticus gives the novel its moral spine, but the trial of Tom Robinson makes the harder point: one good man's integrity does not by itself defeat a whole community's willingness to see injustice and call it normal.`
  ],
  'macbeth': [
    `Macbeth is what happens when ambition finds prophecy, permission, and fear in the same room. Shakespeare makes the murder of Duncan feel like the beginning of a logic that can only end in paranoia, tyranny, and blood.`
  ],
  'alice-in-wonderland': [
    `Alice in Wonderland turns childhood curiosity loose inside a dream world where language, authority, and scale keep slipping. Carroll's nonsense is sharp because every absurd creature exposes how arbitrary grown-up rules already are.`
  ],
  'lord-of-the-rings': [
    `Bluntly, The Lord of the Rings says power is most dangerous exactly when decent people imagine they could use it for good ends. The real heroes are not the ones who grab domination best, but the ones who carry burden, refuse corruption, and keep faith with each other long enough to destroy what nobody should possess.`
  ],
  'pride-and-prejudice': [
    `Pride and Prejudice is a comedy of misreading before it becomes a love story. Austen keeps letting pride, vanity, family chaos, and class anxiety distort first impressions until Elizabeth and Darcy earn a clearer way of seeing each other.`
  ],
  'jane-eyre': [
    `Jane Eyre is a romance that never forgets dignity. Jane can love Rochester intensely and still refuse to belong to him on false or humiliating terms, which is why the novel feels so modern in its defense of female conscience.`
  ],
  'wuthering-heights': [
    `Wuthering Heights turns love, humiliation, and class injury into a weather system. Heathcliff and Catherine are so bound up in possession and vengeance that the novel feels less like courtship than like haunting carried across generations.`
  ],
  'crime-and-punishment': [
    `Crime and Punishment is not a whodunit but a breakdown study. Raskolnikov tries to live inside a theory that places him above ordinary morality, and Dostoevsky shows that the mind itself becomes the crime scene.`
  ],
  'war-and-peace': [
    `War and Peace keeps refusing the lie that history is made only by great men. Tolstoy makes salons, marriages, mistakes, battlefield confusion, and spiritual searching just as decisive as Napoleon's plans or anyone else's legend.`
  ],
  'anna-karenina': [
    `Anna Karenina gives desire its glamour and then follows the bill. Tolstoy pairs Anna's destructive love affair with Levin's slower search for honest work, marriage, and faith so that tragedy and hard-won meaning keep answering each other.`
  ],
  'don-quixote': [
    `Don Quixote is ridiculous and noble at the same time. Cervantes keeps crashing chivalric fantasy into ordinary Spain until you realize the novel is not just mocking delusion, but asking what becomes of idealism in a stubbornly unromantic world.`
  ],
  'les-miserables': [
    `Les Miserables turns mercy into the force that keeps breaking open rigid systems of law, class, and punishment. Valjean keeps trying to outrun his past, while Hugo keeps insisting that grace and social misery are never separate questions.`
  ],
  'madame-bovary': [
    `Madame Bovary is a novel about what happens when romantic fantasy colonizes ordinary life. Emma wants passion, luxury, and transcendence, but Flaubert keeps translating those cravings back into boredom, debt, adultery, and self-destruction.`
  ],
  'the-brothers-karamazov': [
    `The Brothers Karamazov turns family filth into a stage for arguments about God, freedom, guilt, and responsibility. Patricide matters here not just as crime, but as the moment philosophy stops being abstract and starts drawing blood.`
  ],
  'a-tale-of-two-cities': [
    `Revolution in A Tale of Two Cities never stays abstract for long. Dickens turns inherited guilt, political vengeance, and sacrificial love into a story about what happens when history stops judging a class and starts consuming people one by one.`
  ],
  'the-scarlet-letter': [
    `Public shame powers The Scarlet Letter at every level. Hester bears punishment in the open, while Dimmesdale and Chillingworth reveal how concealed guilt and private vengeance can rot a life far more completely than any scaffold sentence.`
  ],
  'the-count-of-monte-cristo': [
    `The Count of Monte Cristo is revenge engineered with patience, money, education, and theatrical timing. Dumas gives vengeance enormous narrative satisfaction, then keeps asking how long it can masquerade as justice before it deforms the avenger too.`
  ],
  'hamlet': [
    `Hamlet is a revenge play clogged on purpose with grief, thought, disgust, theater, and delay. Shakespeare keeps widening the prince's task until killing one guilty king can no longer solve the rot underneath the whole court.`
  ],
  'dracula': [
    `Dracula makes modern tools feel thrillingly useful and still potentially too late. Diaries, railways, blood transfusions, and coordinated investigation only matter because Stoker is pitting bureaucratic modernity against something ancient, invasive, and patient.`
  ],
  'othello': [
    `In Othello, suggestion does more damage than proof ever could. Iago barely needs facts once he learns how to work on Othello's trust, outsider insecurity, and love, which is why the collapse feels so sickeningly plausible.`
  ],
  'fathers-and-sons': [
    `Fathers and Sons stages generational conflict without pretending the young automatically inherit truth. Bazarov's nihilism feels powerful until love, mortality, and family attachment expose how much life resists being reduced to doctrine.`
  ],
  'middlemarch': [
    `Middlemarch is what happens when a whole town becomes the scale of a novel. Eliot makes marriage, debt, ambition, gossip, reform, and disappointment interlock so tightly that no supposedly private choice stays private for long.`
  ],
  'romance-of-the-three-kingdoms': [
    `Romance of the Three Kingdoms turns dynastic collapse into a marathon of strategy, loyalty, and legitimacy. Its great pleasure is that brilliant plans and sworn brotherhoods matter just as much as battlefield violence in deciding who can claim empire.`
  ],
  'the-tale-of-the-heike': [
    `Temple bells frame The Tale of the Heike with impermanence from the start. Battles, clan rivalries, and famous deaths all keep returning to the same Buddhist note: pride rises brilliantly and then vanishes.`
  ],
  'samguk-sagi': [
    `Samguk Sagi builds Korean historical memory through kings, campaigns, alliances, and court record. Its emphasis is less on colorful anecdote than on how legitimacy and unification were narrated through state-centered history.`
  ],
  'secret-history-of-the-mongols': [
    `Temujin's rise in The Secret History of the Mongols feels harsher and more intimate than an imperial chronicle. Hunger, betrayal, kinship politics, and violence shape Chinggis Khan as survival sharpened into power rather than legend polished after the fact.`
  ],
  'mahabharata': [
    `The Mahabharata begins as a family dispute and ends as civilizational devastation. Dice, exile, Krishna's counsel, and the slaughter at Kurukshetra make the epic feel obsessed with one truth: duty can remain binding even when every available action is stained.`
  ],
  'baburnama': [
    `Baburnama stands out because Babur writes like a conqueror who actually notices terrain, gardens, cities, reversals, and his own moods. The memoir mixes campaign narrative with self-portrait, so empire-building never fully crowds out personality.`
  ],
  'the-gallic-war': [
    `The Gallic War is conquest narrated as if it were calm necessity. Caesar's great trick is third-person distance: he makes sieges, logistics, and annihilation sound like disciplined public service while campaigning for his own glory.`
  ],
  'shahnameh': [
    `Shahnameh preserves Persian kingship and heroism in a register where grandeur and grief are inseparable. Ferdowsi keeps turning legendary power into tragedy, especially when great champions destroy what they love without seeing clearly in time.`
  ],
  'mein-kampf': [
    `Mein Kampf matters less as literature than as an unfiltered map of paranoid hatred given political form. Hitler turns grievance, race myth, propaganda theory, and expansionism into a program that later history would carry out at industrial scale.`
  ],
  'the-arabs-and-the-holocaust': [
    `The Arabs and the Holocaust tracks how Holocaust memory and Nakba memory collide, overlap, deny, and instrumentalize each other in Arab political life. Achcar's value is that he refuses a single Arab response and instead follows argument, sympathy, polemic, and evasion across decades.`
  ],
  'nazis-islamists-and-the-making-of-the-modern-middle-east': [
    `Nazis, Islamists and the Making of the Modern Middle East argues that wartime Nazi outreach and later Islamist politics are more entangled than comfortable narratives admit. Its edge comes from tracing propaganda, alliances, and ideological afterlives rather than treating them as isolated episodes.`
  ],
  'sombres-bourreaux': [
    `Sombres Bourreaux examines collaboration where ordinary moral categories already feel strained by empire, occupation, race, and coercion. Its unsettling point is that fascist systems could recruit people whom those same systems also degraded.`
  ],
  'the-quran': [
    `The Qur’an comes as revelation, warning, command, and judgment: one God, earlier prophets, accountability, communal order, and the constant reminder that human beings answer for what they do.`
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
  'tao-te-ching': [
    `Bluntly, the Tao Te Ching argues that forcing, boasting, and overreaching usually backfire. It favors softness, restraint, emptiness, and unforced action over the noisy urge to control everything.`
  ],
  'kojiki': [
    `From creation myth to imperial ancestry, Kojiki fuses sacred story with political order. These myths are not floating folklore; they ground rulership itself in divine descent, sacred geography, and ritual legitimacy.`
  ],
  'dhammapada': [
    `The Dhammapada is brutally simple about the source of suffering: your mind is building your life whether you notice it or not. Craving, anger, negligence, and ego manufacture suffering; discipline, clarity, compassion, and detachment are the way out.`
  ],
  'bhagavad-gita': [
    `The Bhagavad Gita begins with Arjuna wanting out and Krishna refusing the easy escape. It turns battlefield panic into a hard argument about duty, detached action, devotion, knowledge, and what it means to act without being owned by fear or outcome.`
  ],
  'the-mabinogion': [
    `The Mabinogion feels like courtly politics constantly opening onto enchantment. Welsh kings, shape-shifting women, otherworld bargains, and kinship disasters sit together easily, which gives the collection its distinct mix of heroic dignity and mythic strangeness.`
  ],
  'arvisura': [
    `Arvisura treats mythic ancestry as a living claim about national identity rather than as harmless folklore. Its force comes from turning sacred memory, heroic descent, and spiritual lineage into an argument about what a people must remember in order to remain itself.`
  ],
  'opportunity': [
    `Opportunity is blunt market discipline for would-be founders. Eben Pagan keeps dragging the reader away from entrepreneurial fantasy and back to one uncomfortable question: where is the urgent demand people already feel strongly enough to pay to solve?`
  ],
  'the-power-of-now': [
    `The Power of Now says most suffering is manufactured by compulsive identification with thought. Tolle keeps trying to move the reader out of mental time, ego drama, and reactivity into a present awareness that does not keep feeding itself with past and future.`
  ],
  '7-habits-of-highly-effective-people': [
    `Covey's seven habits form a character-first system for running a life: take responsibility, define ends, order priorities, listen well, cooperate honestly, and keep renewing yourself. His real target is not efficiency hacks but integrity made habitual.`
  ],
  'the-buying-brain': [
    `The Buying Brain argues that purchasing starts in attention, emotion, memory, and reward long before the buyer invents a neat rational explanation. Its attraction is simple: marketing works better when you stop pretending consumers are little logic machines.`
  ],
  'advanced-interviewing-techniques': [
    `Advanced Interviewing Techniques treats the interview as a managed social environment, not a checklist. Rapport, sequencing, baselines, and elicitation matter because people reveal more when pressure is controlled rather than announced.`
  ],
  'mining-capital': [
    `Geology only becomes a mining business once financiers can price the risk. Exploration uncertainty, feasibility work, commodity cycles, and jurisdictional danger determine whether a project can actually raise capital instead of merely selling a story.`
  ],
  'the-phoenix-project': [
    `The Phoenix Project translates DevOps into an operations story about bottlenecks, invisible queues, multitasking chaos, and the cost of unmanaged work. Brent becomes memorable because he reveals the deeper point: systems fail when everything important depends on one overburdened hero.`
  ],
  'thinking-fast-and-slow': [
    `Kahneman turns human judgment into a catalogue of recurring mistakes rather than a showcase of natural rationality. Fast intuition is useful, but the real force lies in showing how predictably bias, loss aversion, and statistical blindness keep hijacking it.`
  ],
  'thinking-in-bets': [
    `Thinking in Bets teaches one hard habit: stop confusing a good decision with a lucky outcome. Annie Duke uses poker to make uncertainty, probability, and feedback feel livable instead of something to be erased by hindsight.`
  ],
  'good-strategy-bad-strategy': [
    `Good Strategy/Bad Strategy keeps cutting through executive fluff until only the essentials remain: identify the real problem, choose a guiding policy, and back it with coherent action. Rumelt's favorite enemy is the fake strategy document that is really just ambition wearing jargon.`
  ],
  'the-infinite-game': [
    `The Infinite Game tells leaders to stop managing every contest like the scoreboard is the whole point. Sinek's argument is that institutions survive longer when they are built around trust, mission, and adaptability rather than short-term wins alone.`
  ],
  'the-art-of-thinking-clearly': [
    `The Art of Thinking Clearly is a catalog of the stupid mistakes smart people repeat with confidence. Dobelli's appeal is not depth so much as usefulness: he keeps naming the biases that make ordinary judgment drift into needless self-sabotage.`
  ],
  'predictably-irrational': [
    `Predictably Irrational argues that our bad decisions are patterned, not random. Ariely's experiments on anchors, cheating, arousal, and the seduction of free stuff make irrationality feel less like personal failure than like a built-in design flaw.`
  ],
  'farsighted': [
    `Farsighted is a manual for making better long-range decisions when the future refuses to stay simple. Johnson pushes scenario thinking, second-order effects, reversibility, and group judgment so that planning becomes more adaptive than predictive.`
  ],
  'skin-in-the-game': [
    `Skin in the Game says ethics begins where exposure begins. Taleb keeps attacking experts, managers, and intellectuals who can impose risk on other people while remaining personally insulated from the downside.`
  ],
  'the-innovators-dilemma': [
    `The Innovator's Dilemma is brutal because it says competent management can still produce collapse. Christensen's point is that listening to current customers and optimizing existing products often blinds incumbents to the smaller, cheaper disruptions that eventually replace them.`
  ],
  'how-spies-think': [
    `David Omand's book turns intelligence tradecraft into a broader guide for thinking under uncertainty. Its lessons matter because they insist on humility, bias-checking, probabilistic judgment, and alertness to deception when certainty is impossible.`
  ],
  'the-ellipsis-manual': [
    `Chase Hughes frames influence and behavioral reading as repeatable routines rather than mystical intuition. Baselining, elicitation, framing, and incongruence detection become forms of trained conversational leverage.`
  ],
  'social-engineering-the-art-of-human-hacking': [
    `Social Engineering: The Art of Human Hacking reminds security people that trust is often the weakest perimeter. Attackers win here through pretext, rapport, authority, urgency, and curiosity, not by cracking the hardest technical layer first.`
  ],
  'never-split-the-difference': [
    `Never Split the Difference imports hostage-negotiation habits into ordinary bargaining. Voss makes empathy tactical, questions calibrated, and compromise suspicious, because the real advantage comes from shaping the other side's perception rather than just meeting in the middle.`
  ],
  'greek-architecture': [
    `Greek Architecture shows that classical form is not mysterious perfection but a set of worked-out solutions in stone. Temples, theaters, and orders become clearer once Lawrence ties proportion and refinement back to ritual, construction, and civic use.`
  ],
  'the-classical-language-of-architecture': [
    `The Classical Language of Architecture teaches readers to parse a facade the way a grammarian parses a sentence. Summerson makes columns, entablatures, pediments, and proportion feel like an intelligible design system rather than a blur of elegant old parts.`
  ],
  'chinese-architecture-a-history': [
    `Chinese Architecture: A History shifts attention from stone monument clichés to timber frames, bracket systems, axial planning, and ritual hierarchy. Steinhardt's point is that continuity in Chinese building comes from structural and political order, not from Western-looking monumentality.`
  ],
  'hanok-the-korean-house': [
    `Hanok: The Korean House shows domestic architecture as climate craft. Ondol heating, maru floors, timber layout, and careful siting make the hanok feel less like a style label than like a practical way of living with season, family, and landscape.`
  ],
  'a-world-history-of-architecture': [
    `Across temples, palaces, houses, and civic monuments, A World History of Architecture makes comparison concrete. Instead of flattening everything into one timeline, it keeps asking how each building tradition solved structure, climate, ritual, and power in its own terms.`
  ],
  'the-guns-of-august': [
    `Bluntly, The Guns of August shows how Europe blundered into industrial slaughter because prestige, mobilization timetables, political vanity, and bad assumptions beat common sense. Its power comes from making the opening of World War I feel less like destiny and more like a chain reaction of elite stupidity with catastrophic consequences.`
  ],
  'postwar': [
    `Postwar is Europe's second twentieth-century life story: rubble, reconstruction, Cold War division, prosperity, memory, and post-1989 instability all in one sweep. Judt's achievement is scale with judgment, especially in showing how Holocaust memory and political exhaustion reshape the continent.`
  ],
  'the-sleepwalkers': [
    `The Sleepwalkers rejects the comforting hunt for one master villain of 1914. Clark's argument is that Europe moved into catastrophe through cumulative fear, Balkan volatility, alliance habits, and serial misjudgment rather than a single clean act of intention.`
  ],
  'the-rise-and-fall-of-the-third-reich': [
    `The Rise and Fall of the Third Reich has its authority because it reads the regime against its own documents. Shirer turns dictatorship, conquest, propaganda, genocide, and collapse into a paper trail of how modern barbarism organized itself.`
  ],
  'spqr': [
    `SPQR makes Rome feel argumentative instead of marble-stiff. Mary Beard keeps returning to citizenship, class conflict, political legitimacy, and self-mythmaking so that Roman history becomes a struggle over who counted and why.`
  ],
  'the-histories': [
    `The Histories is part war narrative, part travel writing, part gossip, part anthropology, and that sprawl is exactly the point. Herodotus keeps asking how custom, hubris, luck, and imperial ambition interact once Greeks and Persians collide.`
  ],
  'the-peloponnesian-war': [
    `The Peloponnesian War is war written as political diagnosis. Thucydides uses speeches, plague, faction, and strategic failure to show how fear and ambition can hollow out a city long before defeat is official.`
  ],
  'genghis-khan-and-the-making-of-the-modern-world': [
    `Genghis Khan and the Making of the Modern World tries to recover the Mongol empire from the simple barbarian stereotype. Weatherford stresses law, merit, mobility, trade, and imperial connectivity without pretending conquest came gently.`
  ],
  'the-crusades': [
    `The Crusades follows holy war as both devotion and opportunism. Asbridge makes the movement intelligible not by romanticizing it, but by showing how piety, power, logistics, and long memory kept the conflict renewing itself.`
  ],
  'the-silk-roads': [
    `The Silk Roads recenters world history on the corridors through Central Asia and Persia where trade, conquest, religion, and later energy politics keep converging. Frankopan's big move is to make Europe's usual stage look provincial by comparison.`
  ],
  'mastery': [
    `Mastery is Robert Greene's long game against impatience. Apprenticeship, humiliation, practice, mentors, rivals, and eventually creative independence matter here because excellence is treated as something earned slowly, not announced early.`
  ],
  'think-and-grow-rich': [
    `Think and Grow Rich turns ambition into a quasi-spiritual program of desire, autosuggestion, planning, and persistence. Its appeal has always been that it treats wealth as something first engineered in belief and will before it appears in business.`
  ],
  'david-and-goliath': [
    `David and Goliath argues that apparent weakness often forces better strategy than comfortable power does. Gladwell keeps flipping the script so that hardship, outsider status, and constraint become sources of tactical creativity rather than automatic defeat.`
  ],
  'blink': [
    `Blink asks when snap judgment deserves trust and when it is just bias moving fast. Gladwell's best examples work because they keep showing thin-slicing as a real skill under narrow conditions, not a magical excuse to stop thinking.`
  ],
  'what-the-dog-saw': [
    `What the Dog Saw is Gladwell at essay length, poking into odd experts, product failures, hidden systems, and eccentric jobs until familiar things stop looking obvious. The pleasure is in the sideways angle more than any one grand thesis.`
  ],
  'outliers': [
    `Outliers is an attack on the flattering myth of solitary genius. Gladwell keeps dragging success stories back toward timing, practice, culture, cohort, and institutional opportunity, where talent suddenly looks less self-made.`
  ],
  'freakonomics': [
    `Freakonomics turns economics into a way of hunting hidden incentives in places respectable people pretend not to look. Its charm comes from the sideways questions: cheating teachers, drug gangs, baby names, crime, and the difference between moral panic and measurable behavior.`
  ],
  'startup-nation': [
    `Israel's startup density emerges here from pressure, improvisation, military networks, immigrant talent, and venture capital. The central claim is that insecurity and small size can make a country faster, flatter, and more risk-tolerant than larger rivals.`
  ],
  'zero-the-biography-of-a-dangerous-idea': [
    `Zero: The Biography of a Dangerous Idea shows how a symbol for nothing rewired mathematics, metaphysics, and science. Seife makes zero fascinating because every era seems to need it intellectually while also finding it philosophically unnerving.`
  ],
  'journey-through-genius': [
    `Journey Through Genius makes math history feel like a sequence of beautifully structured surprises. Dunham uses landmark proofs to show that elegance is not a decorative extra in mathematics, but often the clearest sign of deep understanding.`
  ],
  'the-strangest-man': [
    `The Strangest Man is a biography of Paul Dirac written around the odd fit between emotional reserve and theoretical brilliance. Farmelo makes early quantum physics vivid partly by showing how much of it ran through one extraordinarily difficult, abstract mind.`
  ],
  'the-alchemist': [
    `Coelho turns treasure-hunting into a fable about vocation. Santiago follows omens across the desert only to learn that the journey changes the seeker into someone capable of recognizing what he was after all along.`
  ],
  'meditations': [
    `Meditations is basically an emperor telling himself, over and over, not to be vain, reactive, soft, petty, or distracted. Its power comes from how unglamorous that struggle is: Marcus is trying to keep his own mind in order because he knows external power is useless if the inside of the soul is a mess.`
  ],
  'the-picture-of-dorian-gray': [
    `Wilde gives vanity a supernatural loophole in The Picture of Dorian Gray. Dorian's face stays flawless while the portrait records the damage, making the point brutal: corruption hidden from society is not corruption escaped.`
  ],
  'smugglers-cove': [
    `Smuggler's Cove refuses to treat tiki drinks as sugary gimmickry. Martin Cate turns rum classification, syrups, juices, garnish theater, and disciplined technique into a serious craft system with a playful surface.`
  ],
  'the-age-of-gold': [
    `The Age of Gold treats the California Gold Rush as a national fever dream of migration, speculation, violence, and reinvention. Brands keeps the energy high while showing how quickly fortune-seeking remade the West into something harsher and more organized.`
  ],
  'death-valley-and-the-amargosa': [
    `Borax camps, false strikes, and brutal desert travel define Death Valley and the Amargosa. The region's history comes alive because survival logistics matter as much as dreams of sudden wealth.`
  ],
  'klondike': [
    `Klondike is the gold-rush myth marched through cold, scarcity, bad trails, and logistical misery. Berton keeps Dawson City and the northern stampede vivid by never letting stampeders' fantasies outrun the brutal arithmetic of getting there and surviving.`
  ],
  'the-civilization-of-the-renaissance-in-italy': [
    `The Civilization of the Renaissance in Italy is Burckhardt's grand claim that Renaissance Italy made the modern individual more self-conscious. Politics, ceremony, antiquity, art, and civic display all become evidence in that sweeping interpretation.`
  ],
  'versailles-a-biography-of-a-palace': [
    `Versailles: A Biography of a Palace treats architecture as court machinery. Louis XIV's residence matters not only for splendor, but because every route, room, garden, and ritual helped turn access into power and nobles into spectators of monarchy.`
  ],
  'the-story-of-art': [
    `The Story of Art remains useful because Gombrich teaches looking before labeling. Art history here is not a parade of masterpieces; it is a record of artists solving visual problems under different patrons, beliefs, and traditions.`
  ],
  'music-in-the-baroque': [
    `Music in the Baroque keeps style tied to institutions: courts, churches, opera houses, patronage, and performance practice. Heller makes the period feel alive by showing that baroque sound was inseparable from the world paying for it.`
  ],
  'food-in-history': [
    `Food in History uses diet to expose class, trade, famine, ritual, technology, and empire. Tannahill's best move is to treat eating not as background but as one of the clearest ways power becomes everyday life.`
  ],
  'the-old-man-and-the-sea': [
    `Santiago's battle with the marlin turns The Old Man and the Sea into a stripped-down test of craft, pride, suffering, and dignity. Hemingway makes the victory real and then lets the world take the visible reward away.`
  ],
  'green-hills-of-africa': [
    `Safari becomes Hemingway's laboratory in Green Hills of Africa. He cares about the hunt, but he cares just as much about skill, rivalry, landscape, and whether lived experience can be turned into hard, truthful prose.`
  ],
  'storm-of-steel': [
    `Bluntly, Storm of Steel is not a clean sermon about patriotism or peace. It is trench warfare from the inside: mud, shellfire, waiting, wounds, adrenaline, survival, and the strange emotional hardening that modern combat can produce. That is why it feels so different from a polished history of the war.`
  ],
  'one-green-beret': [
    `One Green Beret pulls Special Forces down from movie myth into the routines that actually sustain unconventional war: training, partner work, endurance, adaptability, and the cumulative strain of repeated deployments. Its value is the operator's-eye view of professionalism under pressure.`
  ],
  'bloodlines': [
    `Bluntly, Bloodlines is a hive-city detective story about what Imperial class society really looks like once you stop admiring the gothic skyline. Rich families buy discretion, poor bodies get consumed, enforcers are compromised from the start, and Zidarov's case works because the missing heir leads straight into the machinery that makes elite comfort possible in the first place.`
  ]
};

function getCleanItems(items) {
  return Array.isArray(items)
    ? items.map(item => (item || '').trim()).filter(Boolean)
    : [];
}

function getDisplayKeyPoints(entry) {
  return getCleanItems(bespokeKeyPoints[entry.slug]);
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
