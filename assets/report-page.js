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
  'torah': [
    `The Torah opens at the widest possible scale, beginning with creation, human rebellion, flood, dispersion, and the patriarchal line before narrowing toward the formation of Israel. That opening matters because the Torah does not present law as an isolated rulebook dropped into history. It builds a world first: God creates, human beings fail, covenants are made, promises are given, and a particular family line is set apart as the carrier of blessing, memory, and obligation. Abraham, Isaac, Jacob, and Joseph are therefore not just ancestral names; they establish the covenantal background without which Exodus and Sinai would make far less sense.`,
    `Exodus then gives the Torah one of its defining movements: liberation from Egypt joined to covenant under God rather than mere political escape. Moses, Pharaoh, the plagues, the Red Sea, and the wilderness are central not simply because they are dramatic episodes, but because they define what kind of people Israel is supposed to become. The story keeps insisting that deliverance and obligation belong together. Freedom in the Torah is never framed as autonomy without limit. It is freedom ordered toward worship, memory, obedience, and communal distinction under divine law.`,
    `Leviticus, Numbers, and Deuteronomy deepen that claim by showing that holiness is not vague spirituality. Sacrifice, purity, festivals, priesthood, food, justice, inheritance, rebellion, census, camp order, and public memory all matter because the Torah is trying to structure an entire covenantal life. Many modern readers only see lists of rules here, but the larger point is that Israel is being formed as a people whose worship, ethics, time, and social relations are all meant to answer to the same sacred order. The law is not filler between stories. It is one of the main ways the Torah defines identity.`,
    `The wilderness material is especially important because it shows how unstable covenant life can be even after revelation. Murmuring, idolatry, fear, faction, and repeated disobedience expose a people who have seen deliverance and still keep wanting to return to older forms of security. That tension gives the Torah much of its seriousness. It does not imagine the chosen people as naturally noble. Again and again, the text shows memory failing, appetite overruling trust, and judgment arriving inside the very community that has received promise and law.`,
    `By the end, the Torah stands as both origin story and enduring framework. It explains where Israel came from, who its God is, how covenant differs from empire, and why land, law, worship, and memory cannot be separated. Its force lies in refusing to reduce religion to inner feeling. The Torah is narrative, command, ritual, genealogy, warning, and blessing fused together into a vision of a people whose existence is meant to be ordered in public and private by covenantal obligation.`
  ],
  'tanakh': [
    `The Tanakh takes the Torah's covenantal foundation and shows what happens when an actual people tries, fails, resists, remembers, and reinterprets that foundation across centuries of political life. Its scope is much wider than a simple sequence of Bible stories. The Former Prophets move through conquest, judges, monarchy, schism, and collapse; the Latter Prophets interpret that history through divine accusation and warning; and the Writings expand the picture through poetry, wisdom, festival texts, lament, and post-exilic memory. The result is a civilizational archive rather than a single-genre book.`,
    `One of the Tanakh's deepest patterns is the tension between covenant ideal and historical practice. Kingship promises order yet repeatedly drifts into pride, compromise, violence, or idolatry. Prophets arise not as decorative mystics but as prosecutors of national and royal failure, forcing Israel and Judah to hear judgment in the middle of ordinary politics. That is why figures such as Samuel, Elijah, Isaiah, Jeremiah, and Ezekiel matter so much. They keep history from being read as mere statecraft by insisting that military success, wealth, alliances, and temple ritual mean very little if covenantal fidelity and justice are absent.`,
    `The poetic and wisdom books give the Tanakh another dimension entirely. Psalms turns praise, lament, kingship, repentance, and trust into the language of worshiping life. Job refuses shallow moral arithmetic by asking how suffering can be borne when innocence and catastrophe collide. Proverbs, Ecclesiastes, Song of Songs, and the Five Scrolls widen the canon further, showing that wisdom, desire, grief, finitude, and communal remembrance all belong inside the scriptural world. These books matter because they prevent the Tanakh from collapsing into bare historical chronicle or legal memory. They make the life of the soul part of the same covenantal story.`,
    `Exile and return are central to the Tanakh's later force. The destruction of the kingdoms and the Babylonian exile do not simply function as tragic endings; they become tests of whether covenant memory can survive national catastrophe. Books shaped by exile and restoration ask what remains when land, monarchy, and security are shaken. In that sense the Tanakh becomes one of the great works of cultural persistence. It preserves identity not by pretending judgment never came, but by making judgment itself part of remembered truth.`,
    `Taken as a whole, the Tanakh is robust because it refuses simplification. It contains triumph and shame, lyric praise and prophetic anger, wisdom and bewilderment, public history and intimate prayer. Its enduring power lies in how it lets narrative, law, poetry, and prophecy judge one another. The Tanakh is not just the record of a people with God; it is also a record of how memory, worship, critique, and hope keep a people from disappearing even after failure, defeat, and exile.`
  ],
  'talmud': [
    `The Talmud begins from the recognition that revelation and law do not remain alive by being left untouched. It takes the Mishnah as a compact legal core and then surrounds it with Gemara—layers of argument, comparison, challenge, anecdote, interpretation, and refinement. That structure matters because the Talmud is not trying to sound simple. Its very form teaches that serious legal and moral thought requires patience, memory, disagreement, and the ability to hold multiple lines of reasoning in motion at once.`,
    `What makes the Talmud distinctive is that dispute is not treated as a defect in the tradition but as one of the ways the tradition thinks. Rabbis test cases, raise objections, distinguish one situation from another, recover earlier authorities, and ask what principle is really at stake underneath a practical question. This means the book is never only about isolated rulings. It is about method: how to reason from text, precedent, communal practice, and lived complexity without pretending that human life is tidier than it is.`,
    `The legal discussions matter precisely because they descend into ordinary life. Damages, contracts, marriage, festivals, prayer, property, food, testimony, impurity, injury, Sabbath, and civil obligation all appear because the Talmud is trying to shape a whole way of living. It assumes that holiness and discipline are not confined to rare spiritual moments. They show up in commerce, speech, timing, domestic responsibility, ritual exactness, and the countless situations where a community has to decide what justice, fidelity, or obedience actually require.`,
    `At the same time, the Talmud is not only a machine for rules. Aggadic passages, stories, moral reflections, scriptural interpretations, and imaginative detours give the work intellectual and spiritual texture. Those sections remind the reader that rabbinic tradition is not reducible to technical jurisprudence. Law exists alongside character, memory, humility, reverence, wit, and the recognition that argument itself can become a form of devotion when pursued in the service of truth and faithful living.`,
    `That is why the Talmud has to be respected on its own terms rather than judged by the standards of a modern handbook. It is a civilization thinking out loud across generations. Its endurance comes from the way it turns commentary into continuity: every debate preserves inheritance while also proving that inheritance must be worked through again in each age. The Talmud remains one of the most serious monuments of legal, ethical, and interpretive reasoning because it treats study not as academic ornament, but as a disciplined form of communal life.`
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
    `Strategy as the art of shaping conditions before force is needed`,
    `Information, deception, timing, and position matter more than brute aggression`,
    `Leadership begins with discipline, clarity, and accurate self-knowledge`
  ],
  'kite-runner': [
    `Guilt and betrayal become forces that can govern an entire adult life`,
    `Friendship and fatherhood are distorted by class, shame, and the need for approval`,
    `Atonement matters here because remorse is not enough unless it turns into action`
  ],
  'the-sun-also-rises': [
    `Postwar disillusionment leaves desire, travel, and pleasure feeling both necessary and empty`,
    `Love keeps appearing as performance, timing, and damage rather than stable fulfillment`,
    `Style, ritual, and discipline offer a fragile answer to emotional drift`
  ],
  'heart-of-darkness': [
    `Empire is exposed as organized greed wearing the language of civilization`,
    `Power without restraint turns charisma, ambition, and intelligence into horror`,
    `Darkness names both colonial violence and the unsettling depths within the self`
  ],
  'a-passage-to-india': [
    `Empire makes genuine friendship unstable even when individuals mean well`,
    `Misunderstanding is not just personal failure but a structural feature of colonial rule`,
    `India resists neat explanation, which is exactly what unsettles the novel's English mindsets`
  ],
  'catch-22': [
    `Bureaucracy becomes terrifying when absurdity is treated as official logic`,
    `War turns self-preservation into something institutions can label selfish or insane`,
    `The comedy lands because it keeps revealing organized cruelty underneath the jokes`
  ],
  'moby-dick': [
    `Obsession can turn leadership into a form of collective ruin`,
    `Nature appears as meaningful, overwhelming, and finally beyond human mastery`,
    `Labor, myth, and metaphysical speculation are fused into one vast sea-bound world`
  ],
  '1984': [
    `Political power becomes absolute when it controls truth instead of merely enforcing obedience`,
    `Language and memory are the novel's real battlegrounds because they shape what can be thought`,
    `Total domination is complete only when inward freedom itself is broken`
  ],
  'ulysses': [
    `Ordinary consciousness is given epic scale without ceasing to be ordinary`,
    `Home, exile, appetite, embarrassment, and intimacy become the real substance of modern life`,
    `The form matters because wandering thought is treated as experience, not just as style`
  ],
  'the-great-gatsby': [
    `Self-invention collides with class boundaries that money alone cannot erase`,
    `Wealth appears glamorous at a distance and morally vacant up close`,
    `The dream of recovering the past becomes inseparable from illusion and loss`
  ],
  'lord-of-the-flies': [
    `Fear becomes politically powerful once it can be turned into shared mythology`,
    `Civilized restraint proves thin when status, belonging, and violence start feeding each other`,
    `Golding treats savagery as something organized rather than merely unleashed`
  ],
  'one-hundred-years-of-solitude': [
    `Family history feels trapped inside repetition, desire, and inherited blindness`,
    `Solitude works as both an emotional condition and a generational curse`,
    `Wonder, political violence, and everyday life occupy the same reality without contradiction`
  ],
  'the-divine-comedy': [
    `The universe is imagined as morally structured from damnation to beatitude`,
    `Sin, purification, and joy are all defined by how rightly or wrongly love is ordered`,
    `The journey is spiritual education as much as visionary spectacle`
  ],
  'great-expectations': [
    `Class aspiration becomes a machine for shame, pretension, and self-betrayal`,
    `Dickens keeps testing whether gratitude and affection can survive ambition`,
    `Gentility is stripped of prestige once moral worth and social polish come apart`
  ],
  'the-iliad': [
    `Honor culture gives rage public consequences far beyond private feeling`,
    `Heroic glory matters because mortality makes it urgent and tragic at once`,
    `War is shown as magnificent in language and devastating in human cost`
  ],
  'odyssey': [
    `Homecoming becomes a long test of identity, endurance, and belonging`,
    `Cunning is treated as a heroic intelligence rather than a lesser form of strength`,
    `Hospitality, marriage, and household order become the measures of civilization`
  ],
  'the-holy-bible': [
    `Creation, covenant, exile, and redemption give the Bible its large narrative arc`,
    `Law, prophecy, wisdom, gospel, and apocalypse offer different ways of ordering life before God`,
    `Human failure is answered again and again by judgment, mercy, and the demand for faithfulness`
  ],
  'frankenstein': [
    `Creation becomes monstrous when responsibility ends at the moment of invention`,
    `Alienation and rejection make monstrosity feel social as well as personal`,
    `Scientific ambition is condemned less for curiosity than for moral evasiveness`
  ],
  'gone-with-the-wind': [
    `Survival is treated as both admirable toughness and moral hardening`,
    `The collapse of the old South exposes how nostalgia can hide violence and illusion`,
    `Scarlett's force works because resilience is never separated from appetite or selfishness`
  ],
  'oliver-twist': [
    `Innocence moves through a social order built to neglect and exploit the vulnerable`,
    `Crime and poverty are shown as products of environment as much as of character`,
    `Respectability looks suspect once the institutions beneath it are examined`
  ],
  'the-works-of-hp-lovecraft': [
    `Cosmic horror begins by shrinking human importance to almost nothing`,
    `Knowledge feels dangerous because revelation destabilizes sanity instead of enlarging it`,
    `Decay, lineage, and ancient depth make the world feel hostile before anything even appears`
  ],
  'five-weeks-in-a-balloon': [
    `Exploration is imagined as a mix of ingenuity, spectacle, and improvisation under pressure`,
    `Technology matters because it changes how distance and danger are perceived`,
    `Adventure and scientific curiosity are inseparable from the book's colonial-era gaze`
  ],
  'the-adventures-of-huckleberry-finn': [
    `Conscience becomes meaningful only when it breaks with the morality of the surrounding society`,
    `Friendship exposes the cruelty that respectability works hard to normalize`,
    `Freedom on the river stays fragile because performance, fraud, and violence never disappear for long`
  ],
  'the-last-of-the-mohicans': [
    `The frontier is imagined as a zone of cultural collision rather than simple wilderness`,
    `War turns loyalty, vengeance, and alliance into unstable categories`,
    `The novel is haunted by the idea of a vanishing native world under empire`
  ],
  'robinson-crusoe': [
    `Survival is narrated through labor, inventory, and the desire to turn chaos into order`,
    `Isolation becomes a fantasy of control rather than pure loneliness`,
    `Empire, hierarchy, and property return even on an apparently empty island`
  ],
  'the-jungle-books': [
    `Belonging is negotiated through law, instinct, and competing forms of authority`,
    `Growing up means moving between worlds without fully belonging to either one`,
    `The animal stories work as meditations on hierarchy, loyalty, and freedom`
  ],
  'kim-rudyard-kipling': [
    `Identity is treated as fluid, strategic, and deeply performative`,
    `Empire appears both as an intelligence network and as a vast travel map`,
    `The novel balances spiritual searching against political maneuvering without fully reconciling them`
  ],
  'mother-india': [
    `Social criticism is inseparable from the imperial assumptions guiding the indictment`,
    `Gender, caste, and hygiene are turned into arguments about civilizational fitness`,
    `The book matters historically because it functioned as a political weapon, not just a critique`
  ],
  'thus-spoke-zarathustra': [
    `Self-overcoming replaces obedience as the central moral demand`,
    `Nietzsche attacks herd morality for rewarding comfort, resentment, and conformity`,
    `Affirmation matters because the strongest life is the one that can say yes even to repetition`
  ],
  'the-futurist-manifesto': [
    `Modernity is praised as speed, rupture, aggression, and deliberate disrespect for inheritance`,
    `Art is asked to stop preserving culture and start attacking it`,
    `The manifesto shows how aesthetic rebellion can slide toward political brutality`
  ],
  'the-communist-manifesto': [
    `Class struggle is presented as the hidden engine of historical change`,
    `Capitalism is treated as both radically productive and deeply corrosive`,
    `Communism appears as a collective answer to exploitation, property, and class domination`
  ],
  'the-changing-world-order': [
    `Great powers rise and decline through recurring cycles of debt, conflict, and financial credibility`,
    `Domestic cohesion matters as much as military or economic scale`,
    `The United States and China are framed as one episode inside a larger historical pattern`
  ],
  'the-decline-of-the-west': [
    `Civilizations are treated as living forms with growth, maturity, and decline`,
    `Spengler rejects progress talk in favor of a morphological view of history`,
    `Late-stage politics is defined by money, exhaustion, and the hunger for stronger rule`
  ],
  'the-waste-land': [
    `Fragmentation becomes the formal expression of cultural and spiritual exhaustion`,
    `Myth, scripture, and quotation survive as broken inheritances rather than stable answers`,
    `The poem holds out renewal only as something difficult, partial, and uncertain`
  ],
  'snow-crash': [
    `Information systems become the new terrain on which myth, language, and control collide`,
    `Privatized modernity turns society into a branded and unstable patchwork`,
    `Stephenson treats media, code, and belief as different forms of power over attention`
  ],
  'animal-farm': [
    `Revolutionary language can survive long after revolutionary purpose has been emptied out`,
    `Propaganda matters because it rewrites memory faster than force alone ever could`,
    `Power ends up imitating the very order it once promised to destroy`
  ],
  'the-catcher-in-the-rye': [
    `Contempt for phoniness hides grief, fear, and emotional fragility`,
    `Innocence matters less as purity than as something Holden cannot bear to see broken`,
    `Adolescence is shown as a defensive performance against loss and adult compromise`
  ],
  'to-kill-a-mockingbird': [
    `Moral education happens inside a community structured by racial injustice`,
    `Empathy is presented as necessary but not sufficient against entrenched prejudice`,
    `The novel measures law and adulthood by whether they protect the vulnerable or fail them`
  ],
  'macbeth': [
    `Ambition becomes catastrophic once suggestion, permission, and fear begin reinforcing each other`,
    `Guilt does not restrain violence here so much as deepen paranoia and instability`,
    `Power detached from legitimacy quickly turns into tyranny defended by blood`
  ],
  'alice-in-wonderland': [
    `Identity feels unstable when language, scale, and rules keep shifting underneath it`,
    `Nonsense works as satire because authority in Wonderland is mostly ritual without reason`,
    `Childlike curiosity becomes a way of exposing adult systems as arbitrary performances`
  ],
  'lord-of-the-rings': [
    `Power is most dangerous when it presents domination as necessity`,
    `Hope survives through fellowship, endurance, pity, and ordinary acts of loyalty`,
    `Tolkien makes true greatness look like stewardship and renunciation rather than conquest`
  ],
  'pride-and-prejudice': [
    `Pride and prejudice distort judgment long before either character realizes it`,
    `Marriage is treated as a moral, social, and economic institution rather than just a romantic outcome`,
    `Self-knowledge is what allows affection to become worthy of trust`
  ],
  'jane-eyre': [
    `Conscience matters more than passion when love demands self-erasure`,
    `Jane's dignity comes from refusing dependence disguised as romance`,
    `The novel insists that intimacy is only humane when it rests on moral equality`
  ],
  'wuthering-heights': [
    `Love becomes destructive when it is fused with possession, injury, and pride`,
    `Humiliation hardens into revenge that outlives the original wound`,
    `The novel asks whether one generation can inherit violence without repeating it`
  ],
  'crime-and-punishment': [
    `Ideas of superiority collapse once they are tested against lived moral reality`,
    `Guilt becomes an inward punishment that no theory can fully suppress`,
    `Redemption begins only when pride gives way to confession and human connection`
  ],
  'war-and-peace': [
    `History is made by countless lives and pressures, not by heroic legend alone`,
    `War and domestic life are inseparable because public catastrophe reshapes private meaning`,
    `Tolstoy keeps returning to humility as an answer to vanity, ambition, and abstraction`
  ],
  'anna-karenina': [
    `Desire becomes ruinous when it cannot coexist with social reality or inner steadiness`,
    `Tolstoy exposes how unequally society judges male and female transgression`,
    `Levin's search for meaning gives the novel a counterweight rooted in ordinary life`
  ],
  'don-quixote': [
    `Imagination can deform reality and still preserve a kind of dignity`,
    `Books matter because they shape identity as powerfully as experience does`,
    `The comedy keeps asking what a disenchanted world loses when idealism is mocked out of it`
  ],
  'les-miserables': [
    `Mercy is shown as more transformative than punishment could ever be`,
    `Law becomes cruel when it cannot recognize suffering, change, or grace`,
    `Private redemption and public misery remain tightly bound throughout the novel's world`
  ],
  'madame-bovary': [
    `Borrowed fantasies make ordinary life feel intolerable and permanently insufficient`,
    `Desire is modern here because it is tied to image, consumption, and dissatisfaction`,
    `Self-destruction grows from vanity and boredom long before it reaches catastrophe`
  ],
  'the-brothers-karamazov': [
    `Faith, doubt, freedom, and responsibility are argued through the structure of a family crisis`,
    `Ideas matter because Dostoevsky keeps showing how they become lived moral forces`,
    `Spiritual disorder is never abstract here; it enters appetite, guilt, violence, and love`
  ],
  'a-tale-of-two-cities': [
    `Revolution is shown as both morally intelligible and terrifying in its appetite for vengeance`,
    `Inheritance matters because private lives stay caught inside older systems of injury`,
    `Sacrifice becomes the novel's strongest answer to political and personal ruin`
  ],
  'the-scarlet-letter': [
    `Public shame and private guilt damage people in radically different ways`,
    `A moral community can become cruel when it mistakes surveillance for righteousness`,
    `Identity is shaped by judgment here but never fully contained by it`
  ],
  'the-count-of-monte-cristo': [
    `Injustice produces a self reinvented entirely around revenge`,
    `Power becomes theatrical once wealth, secrecy, and performance can be weaponized together`,
    `Mercy returns only after vengeance reveals how morally unstable it really is`
  ],
  'hamlet': [
    `Thought becomes paralyzing when the world itself seems morally rotten`,
    `Court life is saturated with performance, surveillance, and bad faith`,
    `Revenge cannot restore order once corruption has entered the whole political body`
  ],
  'dracula': [
    `Modern rational systems are tested against a threat older than their confidence`,
    `Invasion, contamination, and sexual anxiety give the horror its cultural charge`,
    `Community matters because the novel imagines knowledge-sharing as a defense against darkness`
  ],
  'othello': [
    `Jealousy becomes lethal once identity and trust can be manipulated from within`,
    `Suggestion matters more than proof because suspicion remakes reality for the victim`,
    `Honor culture leaves love vulnerable to pride, insecurity, and public shame`
  ],
  'fathers-and-sons': [
    `Generational conflict turns ideas into emotional and social struggle`,
    `Nihilism looks powerful until it is tested against attachment, love, and mortality`,
    `Modernization unsettles inherited authority without making the new worldview complete`
  ],
  'middlemarch': [
    `Apparently private choices keep radiating outward through a whole social web`,
    `Idealism is limited as much by money and vanity as by outright malice`,
    `Eliot finds moral seriousness in unheroic, everyday forms of life`
  ],
  'romance-of-the-three-kingdoms': [
    `Political legitimacy is always contested and always central to power`,
    `Loyalty, ambition, and strategy keep colliding rather than aligning cleanly`,
    `History is narrated as moral theater without losing its appetite for cunning`
  ],
  'the-tale-of-the-heike': [
    `Impermanence gives every triumph a shadow before it fully arrives`,
    `Warrior glory and Buddhist sorrow coexist instead of canceling each other out`,
    `The poem remembers power most vividly at the moment it begins to vanish`
  ],
  'samguk-sagi': [
    `Historical memory is organized around kingship, legitimacy, and unification`,
    `The chronicle treats state formation as the main frame through which the past becomes intelligible`,
    `Record-keeping itself becomes part of how political order is justified`
  ],
  'secret-history-of-the-mongols': [
    `State-building grows out of kinship, betrayal, survival, and personal charisma`,
    `Steppe politics value loyalty intensely while rewarding ruthlessness when loyalty breaks`,
    `Conquest is tied not just to violence but to discipline, order, and political imagination`
  ],
  'mahabharata': [
    `Duty remains morally difficult even when action cannot be avoided`,
    `Family conflict expands until it becomes a civilizational catastrophe`,
    `Victory offers no clean innocence once the ethical cost has fully appeared`
  ],
  'baburnama': [
    `Rulership appears as precarious, mobile, and intensely personal`,
    `Observation of cities, gardens, weather, and people matters as much as conquest`,
    `Empire is recorded here with unusual candor about failure, desire, and contingency`
  ],
  'the-gallic-war': [
    `Conquest is narrated as rational necessity by the very man conducting it`,
    `Military efficiency depends on logistics, speed, engineering, and disciplined force`,
    `The text is as much self-justification and political theater as battlefield record`
  ],
  'shahnameh': [
    `Heroism matters most where greatness and blindness exist in the same figure`,
    `Kingship is judged by justice, wisdom, and moral fitness rather than lineage alone`,
    `Epic memory preserves a civilizational identity through tragedy as much as triumph`
  ],
  'mein-kampf': [
    `Personal grievance is enlarged into a total political myth of national betrayal`,
    `Racism and antisemitism are presented as the organizing logic of history and politics`,
    `Propaganda, authoritarian leadership, and expansionism are fused into one program`
  ],
  'the-arabs-and-the-holocaust': [
    `Memory becomes politically contested when different histories of trauma are forced into the same field`,
    `Acknowledgment, denial, and appropriation all take shape within Arab-Israeli conflict`,
    `The book shows how historical responsibility is argued through identity and geopolitics`
  ],
  'nazis-islamists-and-the-making-of-the-modern-middle-east': [
    `European totalitarian movements and Middle Eastern politics intersect through strategy, propaganda, and shared enemies`,
    `Anti-colonial, anti-British, and anti-Zionist currents become entangled with fascist influence`,
    `Wartime ideological alliances matter because their afterlives persist beyond the war itself`
  ],
  'sombres-bourreaux': [
    `Collaboration under empire resists simple moral sorting`,
    `Race complicates allegiance because hierarchical regimes still depend on compromised intermediaries`,
    `The hardest question is how societies remember histories that do not fit heroic self-images`
  ],
  'the-quran': [
    `Revelation appears as warning, mercy, command, and reminder all at once`,
    `Human beings are judged within a world ordered by divine unity and accountability`,
    `Recitation, law, and remembrance make scripture part of communal life rather than a distant text`
  ],
  'torah': [
    `Covenant and law shape a people through story as much as through command`,
    `Origins, exodus, and wilderness testing define identity through memory and obligation`,
    `Holiness here is communal, practical, and inseparable from obedience`
  ],
  'tanakh': [
    `History, poetry, prophecy, and wisdom all interpret what covenant faithfulness means`,
    `Exile and return become the deepest political and spiritual pattern in the collection`,
    `Praise, lament, warning, and hope keep national memory tied to divine judgment`
  ],
  'talmud': [
    `Argument is treated as a mode of preservation rather than a sign of disorder`,
    `Law becomes durable by being translated into lived, everyday reasoning`,
    `Commentary builds continuity by keeping tradition open to disciplined debate`
  ],
  'tao-te-ching': [
    `The deepest order works best when it is not turned into display, force, or ego`,
    `Softness, emptiness, and restraint are treated as sources of strength rather than weakness`,
    `Self-rule and political rule both improve when control stops becoming obsession`
  ],
  'kojiki': [
    `Sacred story and political legitimacy are fused so tightly that myth becomes a foundation of rule`,
    `Purity, pollution, and ritual order matter because the world is imagined as spiritually charged`,
    `Genealogy, place, and divine ancestry are used to preserve a durable cultural identity`
  ],
  'dhammapada': [
    `Suffering is traced back to the trained or untrained mind rather than to fate alone`,
    `Ethical discipline matters because thought, speech, and action keep shaping each other`,
    `Liberation begins with repeated practices of clarity, detachment, and compassion`
  ],
  'bhagavad-gita': [
    `Action remains necessary even when moral clarity is painful or incomplete`,
    `Discipline comes from doing one's duty without surrendering the self to fear or outcome`,
    `Devotion, knowledge, and self-mastery are treated as converging paths rather than rival ones`
  ],
  'the-mabinogion': [
    `Heroic politics and otherworldly enchantment occupy the same imaginative universe`,
    `Honor, kinship, and injury keep turning private conflict into public catastrophe`,
    `Transformation and magic are used to test identity rather than merely decorate the tales`
  ],
  'arvisura': [
    `Mythic ancestry is turned into a claim about collective identity rather than harmless folklore`,
    `Spiritual lineage matters because national continuity is imagined as sacred as well as historical`,
    `The text shows how legend can be mobilized to stabilize belonging in the present`
  ],
  'opportunity': [
    `Entrepreneurship begins with demand rather than with self-expression alone`,
    `Positioning matters because the right market can matter more than a clever product`,
    `Execution beats fantasy when value is urgent, legible, and easy to buy`
  ],
  'the-power-of-now': [
    `Most suffering is intensified by compulsive identification with thought and time`,
    `Presence is treated as a practical discipline rather than a vague spiritual mood`,
    `Freedom begins when reaction stops governing attention`
  ],
  '7-habits-of-highly-effective-people': [
    `Character matters more than technique because habits scale the kind of person using them`,
    `Effective living begins with self-governance before it reaches leadership or collaboration`,
    `Renewal is part of effectiveness itself, not a reward that comes after it`
  ],
  'the-buying-brain': [
    `Consumer choice is driven by attention, emotion, and memory long before tidy rational explanation`,
    `Marketing works better when it studies real behavior instead of idealized decision-making`,
    `Brain science is most useful when it clarifies influence without pretending to eliminate complexity`
  ],
  'advanced-interviewing-techniques': [
    `Good interviewing is about managing a social environment, not just asking questions`,
    `Rapport and sequencing matter because disclosure depends on timing as much as pressure`,
    `Control works best when it feels calm, structured, and non-theatrical`
  ],
  'mining-capital': [
    `Resource projects live or die by how risk is priced, not just by what is underground`,
    `Financing structures shape strategic options across the full mine life cycle`,
    `Credibility matters because mining stories must survive technical, political, and market scrutiny`
  ],
  'the-phoenix-project': [
    `Operational failure usually reflects system design more than individual effort`,
    `Bottlenecks and invisible work determine performance more than heroic multitasking`,
    `Reliability improves when flow, feedback, and shared responsibility replace firefighting`
  ],
  'thinking-fast-and-slow': [
    `Human judgment is fast, useful, and predictably error-prone at the same time`,
    `Bias thrives when confidence outruns numeracy, patience, and statistical sense`,
    `Rationality matters less as a permanent state than as a corrective discipline`
  ],
  'thinking-in-bets': [
    `Decision quality should be judged by process under uncertainty rather than by outcome alone`,
    `Probabilistic thinking is a habit of humility rather than a trick for sounding smart`,
    `Better judgment depends on feedback cultures that reward updating over ego defense`
  ],
  'good-strategy-bad-strategy': [
    `Strategy begins with diagnosing the real obstacle instead of announcing ambition`,
    `Focus creates power because coherent action beats scattered effort`,
    `Clear tradeoffs are what separate strategy from motivational language`
  ],
  'the-infinite-game': [
    `Institutions last longer when they serve an enduring mission rather than a scoreboard alone`,
    `Trust and adaptability matter because finite wins can still produce long-term fragility`,
    `Leadership weakens when rivals are treated only as enemies instead of sources of learning`
  ],
  'the-art-of-thinking-clearly': [
    `Cognitive error is ordinary, repeatable, and often socially reinforced`,
    `Better judgment comes from subtraction as much as addition`,
    `Practical skepticism is treated as mental hygiene rather than as cynicism`
  ],
  'predictably-irrational': [
    `Irrationality follows patterns, which makes it measurable as well as familiar`,
    `Context, framing, and temptation distort choice more than people like to admit`,
    `Human behavior becomes clearer once rational self-image is treated with suspicion`
  ],
  'farsighted': [
    `Long-term judgment requires thinking in branches rather than single forecasts`,
    `Good decisions depend on reversibility, second-order effects, and scenario awareness`,
    `Collective foresight fails when short-term emotion hijacks strategic patience`
  ],
  'skin-in-the-game': [
    `Ethics become credible only when decision-makers share in the downside`,
    `Local exposure often sees reality more clearly than insulated expertise does`,
    `Small committed minorities can reshape systems more than official consensus suggests`
  ],
  'the-innovators-dilemma': [
    `Success with existing customers can blind firms to the future`,
    `Disruption matters because new markets rarely look important at first`,
    `Structure, not intelligence alone, determines whether incumbents can adapt`
  ],
  'how-spies-think': [
    `Intelligence is the disciplined management of uncertainty rather than the elimination of it`,
    `Analysis fails most often through bias, narrative fixation, and deceptive evidence`,
    `Sound judgment depends on probabilities, strategic notice, and understanding the other side`
  ],
  'the-ellipsis-manual': [
    `Influence works through framing, status, and baseline disruption more than through explicit force`,
    `Behavioral reading improves when patterns matter more than isolated tells`,
    `Conversation becomes leverage when attention, emotion, and authority are deliberately managed`
  ],
  'social-engineering-the-art-of-human-hacking': [
    `Human trust is often easier to exploit than technical infrastructure`,
    `Attackers win by manipulating emotion, status, and context rather than by brute force`,
    `Security improves when persuasion is understood as a system rather than as a list of scams`
  ],
  'never-split-the-difference': [
    `Negotiation turns on emotion and perception before it turns on arithmetic`,
    `Tactical empathy can create leverage without surrendering position`,
    `The strongest move is often to reshape the frame instead of splitting the difference`
  ],
  'greek-architecture': [
    `Classical architecture is a system of proportion, refinement, and civic meaning`,
    `Form matters because ritual, public life, and construction technique are inseparable`,
    `Greek building endures as a grammar of order rather than as decoration alone`
  ],
  'the-classical-language-of-architecture': [
    `Classical design works like a readable visual language rather than a random style kit`,
    `Proportion and hierarchy give buildings coherence before ornament does`,
    `Learning the vocabulary turns seeing from passive admiration into interpretation`
  ],
  'chinese-architecture-a-history': [
    `Continuity in Chinese architecture comes from timber systems, planning, and ritual order`,
    `Buildings express political hierarchy as much as shelter or beauty`,
    `Architectural change happens within durable civilizational frameworks rather than through constant rupture`
  ],
  'hanok-the-korean-house': [
    `Domestic architecture is shaped by climate, habit, and social pattern rather than style alone`,
    `The hanok treats house and landscape as a negotiated relationship`,
    `Everyday comfort depends here on proportion, material intelligence, and seasonal adaptation`
  ],
  'a-world-history-of-architecture': [
    `Architecture records religion, power, climate, and technique at once`,
    `Comparison is useful only when traditions are allowed to solve different problems differently`,
    `The built world becomes legible when function and worldview are read together`
  ],
  'the-guns-of-august': [
    `World War I begins here as a catastrophe of pride, planning rigidity, and elite misjudgment`,
    `Modern war punishes political theater once mobilized systems outrun common sense`,
    `Tuchman makes contingency visible where later hindsight prefers inevitability`
  ],
  'postwar': [
    `Postwar Europe is defined by reconstruction, memory, and ideological division`,
    `Prosperity and stability emerge from institutions built under the pressure of earlier collapse`,
    `Europe's later identity remains haunted by war, genocide, and the afterlife of communism`
  ],
  'the-sleepwalkers': [
    `Catastrophe can emerge from cumulative misjudgment rather than one master intention`,
    `Alliances and crises become dangerous when actors keep mistaking escalation for control`,
    `Clark treats 1914 as a failure of political imagination as much as diplomacy`
  ],
  'the-rise-and-fall-of-the-third-reich': [
    `Totalitarian power grows by coordinating ideology, bureaucracy, and mass compliance`,
    `Expansionism and racial persecution were central to the regime rather than side effects`,
    `Collapse does not erase how much modern normality can be bent toward organized barbarism`
  ],
  'spqr': [
    `Roman history is a long argument about citizenship, legitimacy, and power`,
    `Expansion enlarges the state while intensifying internal inequality and conflict`,
    `Rome's self-mythmaking matters because political identity is built narratively as well as institutionally`
  ],
  'the-histories': [
    `Inquiry matters because Herodotus treats culture, rumor, war, and travel as connected evidence`,
    `Empire becomes fragile when success hardens into overconfidence`,
    `The book keeps history open to contingency, curiosity, and competing explanations`
  ],
  'the-peloponnesian-war': [
    `Prolonged war corrodes language, judgment, and civic morality from within`,
    `Fear and interest are shown as more durable drivers than public idealism`,
    `Thucydides treats political intelligence as something that can sharpen and fail at the same time`
  ],
  'genghis-khan-and-the-making-of-the-modern-world': [
    `The Mongol empire is presented as organizational innovation as much as conquest`,
    `Merit, mobility, and connectivity help explain imperial scale without sanitizing violence`,
    `Historical memory changes once empires are read beyond their enemies' stereotypes`
  ],
  'the-crusades': [
    `Holy war fused belief, ambition, logistics, and memory into one durable conflict`,
    `Crusading politics never stay simple because devotion and opportunism reinforce each other`,
    `The afterlife of the Crusades matters because later eras keep reusing them symbolically`
  ],
  'the-silk-roads': [
    `History looks different when exchange corridors rather than nation-states become the map`,
    `Trade routes move religion, power, disease, and empire along with goods`,
    `Europe's centrality weakens once Eurasian interdependence becomes the main frame`
  ],
  'mastery': [
    `Excellence is built through long apprenticeship rather than early self-expression`,
    `Frustration, obscurity, and repetition are part of deep skill formation`,
    `Creative independence comes after discipline has been internalized, not before`
  ],
  'think-and-grow-rich': [
    `Wealth is framed as a product of focused desire organized into belief and persistence`,
    `Self-conditioning matters because mindset is treated as economic infrastructure`,
    `The book's appeal lies in making ambition feel systematic rather than accidental`
  ],
  'david-and-goliath': [
    `Apparent weakness can force smarter adaptation than comfortable strength does`,
    `Hardship is not automatically good, but it can create unusual leverage`,
    `Power is often misread when status is mistaken for real advantage`
  ],
  'blink': [
    `Intuition works best under narrow conditions shaped by real expertise`,
    `Fast judgment becomes dangerous when bias disguises itself as instinct`,
    `The book is strongest when it asks when to trust speed rather than when to worship it`
  ],
  'what-the-dog-saw': [
    `Ordinary systems become interesting once hidden mechanisms are made visible`,
    `Expertise often looks eccentric from the outside because it notices different details`,
    `Gladwell's method is interpretive curiosity more than one big unified theory`
  ],
  'outliers': [
    `Success is scaffolded by timing, culture, and opportunity as much as by talent`,
    `Social context does not erase individual effort but helps explain it`,
    `Merit stories flatter us most when they omit the systems underneath them`
  ],
  'freakonomics': [
    `Incentives reveal motives that moral language often hides`,
    `Data becomes most illuminating when it is applied to supposedly off-limits questions`,
    `The book's style depends on reframing familiar issues rather than solving them exhaustively`
  ],
  'startup-nation': [
    `Innovation ecosystems are shaped by culture, networks, pressure, and capital together`,
    `National insecurity can produce agility as well as fear`,
    `Entrepreneurial success emerges from institutions that reward speed, informality, and iteration`
  ],
  'zero-the-biography-of-a-dangerous-idea': [
    `Nothing becomes revolutionary here once notation changes what thought can do`,
    `Abstract symbols reshape science because they alter both calculation and imagination`,
    `Resistance to zero shows that mathematics can disturb metaphysics as much as solve problems`
  ],
  'journey-through-genius': [
    `Great proofs matter because they change what mathematical thinking can look like`,
    `Elegance and rigor reinforce each other rather than pulling in opposite directions`,
    `Mathematical history becomes vivid when discovery is followed through proof instead of anecdote`
  ],
  'the-strangest-man': [
    `Theoretical genius can be world-changing while remaining personally inaccessible`,
    `Modern physics advances here through abstractions that outrun ordinary intuition`,
    `Scientific revolutions depend on difficult minds as much as on beautiful ideas`
  ],
  'the-alchemist': [
    `Purpose matters here because outward travel mirrors inward formation`,
    `Intuition and faith are treated as forms of orientation rather than irrationality`,
    `Transformation becomes more important than possession once the seeker learns how to see`
  ],
  'meditations': [
    `Self-command is treated as the foundation of ethical and political life`,
    `Mortality shrinks vanity and clarifies what deserves attention`,
    `Stoicism appears here as a daily discipline of perception rather than emotional numbness`
  ],
  'the-picture-of-dorian-gray': [
    `Aestheticism becomes dangerous when beauty is separated from conscience`,
    `Hidden corruption deepens precisely when appearances remain intact`,
    `Influence matters because self-creation is never as autonomous as it pretends to be`
  ],
  'smugglers-cove': [
    `Craft becomes serious here when playfulness is supported by disciplined technique`,
    `Taste depends on structure, ingredients, and classification rather than branding alone`,
    `Hospitality works as performance without ceasing to be precision work`
  ],
  'the-age-of-gold': [
    `Gold rushes turn ambition into mass upheaval rather than simple individual opportunity`,
    `Boom economies reward reinvention while normalizing exploitation and disorder`,
    `Frontier mythology survives by simplifying a much harsher reality`
  ],
  'death-valley-and-the-amargosa': [
    `Extraction economies are shaped as much by environment and logistics as by mineral desire`,
    `Frontier history is built from failure, rumor, and endurance as much as success`,
    `Harsh landscapes expose how thin the dream of sudden fortune really is`
  ],
  'klondike': [
    `Gold-rush mythology depends on forgetting the logistical brutality underneath it`,
    `Extreme environments turn ambition into a test of endurance and improvisation`,
    `Resource booms create communities quickly and strip them just as quickly`
  ],
  'the-civilization-of-the-renaissance-in-italy': [
    `The Renaissance is read here as a shift toward heightened individual self-consciousness`,
    `Politics, art, and ceremony are treated as mutually reinforcing forms of cultural power`,
    `Modernity emerges through display, ambition, and revived antiquity rather than through one single invention`
  ],
  'versailles-a-biography-of-a-palace': [
    `Architecture can operate as a system for organizing hierarchy and access`,
    `Spectacle becomes political when ceremony trains people to inhabit power`,
    `Versailles endures as proof that aesthetics and control can share the same design`
  ],
  'the-story-of-art': [
    `Looking matters before labeling if art is going to become intelligible`,
    `Artistic change is driven by problems, patrons, and traditions rather than isolated genius`,
    `Art history becomes clearer when style is read as a sequence of choices under pressure`
  ],
  'music-in-the-baroque': [
    `Style is inseparable from the institutions that finance and stage it`,
    `Baroque music seeks emotional force through structure rather than spontaneity alone`,
    `Innovation thrives even within worlds organized by hierarchy, ritual, and patronage`
  ],
  'food-in-history': [
    `Food reveals power because class, trade, and scarcity are embodied at the table`,
    `Eating habits preserve religion, identity, and technology as much as taste`,
    `Diet becomes historical evidence once the everyday is taken seriously`
  ],
  'the-old-man-and-the-sea': [
    `Dignity can survive visible defeat when work has been done with full seriousness`,
    `Endurance matters because worth is not measured only by what can be kept`,
    `Hemingway turns craft and suffering into a test of inward nobility`
  ],
  'green-hills-of-africa': [
    `Experience becomes meaningful only when it can survive being made into truthful prose`,
    `Competition, skill, and self-display shape masculine identity throughout the memoir`,
    `Landscape matters as more than backdrop because perception is part of the hunt`
  ],
  'storm-of-steel': [
    `Modern combat can become aesthetically vivid without becoming morally simple`,
    `Survival in industrial war depends on adaptation, nerve, and emotional hardening`,
    `The memoir unsettles because it records experience more readily than it interprets it`
  ],
  'one-green-beret': [
    `Elite soldiering is built on routine professionalism more than on cinematic heroics`,
    `Small-unit warfare depends on adaptability, trust, and preparation across long stretches of uncertainty`,
    `Modern military identity is shaped as much by repetition and strain as by action`
  ],
  'bloodlines': [
    `The novel uses detective fiction to expose class violence hidden inside imperial normality`,
    `Institutions of order appear compromised because power and corruption share the same machinery`,
    `The setting feels most disturbing where exploitation is shown as routine rather than exceptional`
  ]
};

const bespokeTldrs = {
  'art-of-war': [
    `The Art of War says the best strategist does not confuse aggression with intelligence. If you do not understand conditions, timing, information, morale, and the opponent in front of you, then strength just becomes an expensive way of making dumb mistakes faster.`
  ],
  'kite-runner': [
    `The Kite Runner hurts because Amir does not just betray Hassan once; he lets cowardice become part of his identity and then spends years trying to outrun the knowledge. Hosseini ties that private failure to class hierarchy, father-hunger, exile, and Taliban Afghanistan, so redemption matters here only as something partial, costly, and never clean.`
  ],
  'the-sun-also-rises': [
    `The Sun Also Rises is Hemingway draining the glamour out of the Lost Generation until only aimlessness, jealousy, money, sexual frustration, and performance are left. Paris and Pamplona still glitter, but Jake's wound and Brett's restlessness keep exposing a generation that can still travel, drink, and pose without quite knowing how to live.`
  ],
  'heart-of-darkness': [
    `Heart of Darkness is less a jungle adventure than an exposure of the lies empire tells about itself. Conrad makes the trip upriver feel like a movement past administrative language and into the greed, vanity, and sanctioned brutality that civilization prefers to call necessity.`
  ],
  'a-passage-to-india': [
    `Nothing in Forster's novel stays merely personal for long. A courtesy, an invitation, a misunderstanding, even a courtroom proceeding all get absorbed into the political weather of the Raj, where intimacy is constantly being translated into hierarchy. What lingers is not a solved accusation but the harder recognition that empire damages perception itself, making friendship, truth, and generosity feel fragile before anyone consciously chooses betrayal.`
  ],
  'catch-22': [
    `Catch-22 is funniest exactly where it is most murderous: mission counts rise, paperwork multiplies, and every rule exists to keep the machine fed with bodies. Yossarian looks crazy only because he is one of the few people still reacting sanely to war.`
  ],
  'moby-dick': [
    `Melville's genius is that he lets the novel keep expanding even as Ahab keeps narrowing it. Ishmael turns whaling into labor history, taxonomy, theology, comedy, and fellowship, while Ahab tries to force the whole sea into one private vendetta. The catastrophe lands because curiosity and obsession have been sharing the same ship all along.`
  ],
  '1984': [
    `Orwell's dystopia is so corrosive because it attacks the conditions of thought before it attacks the body. Once language is narrowed, memory edited, fear ritualized, and loneliness weaponized, resistance stops being heroic and starts becoming cognitively difficult. Winston's collapse lands so hard because the regime does not merely punish dissent; it rearranges reality until even the victim's inner life begins cooperating with power.`
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
    `In a nutshell, The Holy Bible is a long argument that human beings keep breaking covenant, justice, and each other, and that the real drama is whether judgment and mercy can belong in the same story. It matters because it is not one slogan but creation, law, prophecy, gospel, and apocalypse all wrestling over what redemption would actually have to cost.`
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
    `The Works of H.P. Lovecraft do not merely scare by producing monsters; they keep humiliating the human point of view. Cults, sea gods, ruined bloodlines, unreadable books, and buried civilizations all serve one pressure: the discovery that reality may be so old, alien, and indifferent that sanity was only ever a local convenience.`
  ],
  'five-weeks-in-a-balloon': [
    `Five Weeks in a Balloon turns exploration into engineering spectacle: Verne keeps asking how far ingenuity, nerve, and improvisation can carry three men above an unpredictable continent. The balloon is both vehicle and thesis, making science the engine of adventure.`
  ],
  'the-adventures-of-huckleberry-finn': [
    `Twain sends Huck and Jim onto the river, but the real current is moral rather than geographic. Every fraud, feud, sermon, and mob on shore keeps proving that “civilization” in this world is mostly a polished vocabulary for cruelty, which makes Huck's loyalty feel larger than a boy's private affection. The novel endures because its comedy never softens the central shock: decency may require rejecting the values respectable society treats as sacred.`
  ],
  'the-last-of-the-mohicans': [
    `Cooper gives the frontier chase real pressure by locating it inside imperial war, unstable alliances, and the slow disappearance of whole peoples. Hawkeye's competence, Magua's intelligence, and the elegiac force surrounding Uncas keep the novel from collapsing into simple rescue adventure. What lingers is not only pursuit but loss.`
  ],
  'robinson-crusoe': [
    `Robinson Crusoe is not just a survival adventure; it is a fantasy of turning isolation into management. Crusoe inventories, builds, domesticates, and governs until the island starts looking like a miniature empire, which is why the novel feels so bound to property, labor, hierarchy, and the strange comfort of control.`
  ],
  'the-jungle-books': [
    `What gives these stories their bite is that the jungle is governed, not free. Law, rank, training, and earned belonging shape Mowgli's world just as strongly as danger does, so the animal setting becomes a way of thinking about loyalty, punishment, and identity under pressure. Even the collection's charm carries a stern undertone, since Kipling keeps imagining life as something organized by discipline before it can ever be romanticized as instinct.`
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
    `The Futurist Manifesto is thrilling and ugly for the same reason: it wants art to prove its modernity by worshipping speed, violence, machinery, youth, and destruction. Marinetti's energy is real, but so is the way aesthetic rupture starts leaning toward political cruelty.`
  ],
  'the-communist-manifesto': [
    `The Communist Manifesto is still powerful because it praises capitalism's world-remaking force even while declaring war on it. Marx and Engels make class struggle feel historical, structural, and international rather than a local complaint about wages.`
  ],
  'the-changing-world-order': [
    `The Changing World Order argues that empires do not rise and fall randomly; debt, internal cohesion, reserve-currency privilege, and geopolitical pressure move in recurring cycles. Dalio's big wager is that current U.S.-China tension makes more sense when read as pattern rather than exception.`
  ],
  'the-decline-of-the-west': [
    `The Decline of the West is powerful because Spengler refuses to flatter modern readers with progress. He treats civilizations as finite organisms with distinctive souls, and the West as a culture moving toward late-form exhaustion, money power, and the appetite for harder rule once inner confidence has ebbed.`
  ],
  'the-waste-land': [
    `The Waste Land sounds like culture after coherence has been smashed into fragments that still remember older meanings. Eliot's voices, quotations, dead rituals, and erotic fatigue make spiritual exhaustion audible, so the poem feels less like a statement than a ruined civilization trying to think.`
  ],
  'snow-crash': [
    `Snow Crash hurls swordfights, corporate enclaves, Sumerian myth, and computer networks into one manic information war. Stephenson's joke is that the future is absurdly commercial, but the threat underneath it is real: language itself can become malware.`
  ],
  'animal-farm': [
    `Animal Farm hurts because Orwell shows how a revolution can preserve its anthem, banners, and moral vocabulary while reversing their meaning underneath. Napoleon does not merely seize power; he teaches the farm to accept lies, fear, and memory loss as normal political weather.`
  ],
  'the-catcher-in-the-rye': [
    `The Catcher in the Rye keeps its bite because Holden's contempt is not the whole story; it is camouflage. Behind the disgust with phonies and adult performance is a mind trying to hold off grief, sex, change, and the knowledge that innocence cannot be preserved by sneering at it.`
  ],
  'to-kill-a-mockingbird': [
    `Bluntly, To Kill a Mockingbird is about a town that thinks of itself as decent while running on racial lies and routine cowardice. Atticus gives the novel its moral spine, but the trial of Tom Robinson makes the harder point: one good man's integrity does not by itself defeat a whole community's willingness to see injustice and call it normal.`
  ],
  'macbeth': [
    `Macbeth is terrifying because the catastrophe feels jointly produced: prophecy tempts, Lady Macbeth licenses, Macbeth chooses, and then fear keeps manufacturing the next crime. Shakespeare turns ambition into a self-feeding system in which power can no longer distinguish security from bloodshed.`
  ],
  'alice-in-wonderland': [
    `Wonderland stays sharp because Carroll turns nonsense into a stress test for ordinary authority. Size shifts, schoolroom logic, legal ritual, and word games keep exposing how often adult rules survive on tone and enforcement rather than sense. Alice matters as the steady witness who discovers that civilization can sound perfectly grammatical while making no argument at all.`
  ],
  'lord-of-the-rings': [
    `Bluntly, The Lord of the Rings says power is most dangerous exactly when decent people imagine they could use it for good ends. The real heroes are not the ones who grab domination best, but the ones who carry burden, refuse corruption, and keep faith with each other long enough to destroy what nobody should possess.`
  ],
  'pride-and-prejudice': [
    `Pride and Prejudice stays fresh because Austen treats romance as a problem of perception before it becomes a reward. Elizabeth and Darcy are both intelligent enough to judge quickly and vain enough to judge badly, while family noise, class pressure, and social theater keep turning misreading into plot. Love works only once self-knowledge catches up.`
  ],
  'jane-eyre': [
    `What keeps Jane Eyre modern is that Bronte never lets passion outrank self-respect. Jane can love Rochester fiercely and still refuse any arrangement that makes her morally secondary, which turns the romance into an argument about dignity, conscience, and equality rather than surrender. The novel's intensity comes from that refusal to separate desire from character.`
  ],
  'wuthering-heights': [
    `Wuthering Heights is not a love story made beautiful by excess; it is a study in how injury, desire, class humiliation, and possession can fuse into a self-perpetuating climate. Heathcliff and Catherine do not stabilize one another; they radicalize one another. That is why the novel feels haunted even before any ghost appears.`
  ],
  'crime-and-punishment': [
    `Crime and Punishment locks the reader inside a mind trying to intellectualize its way past guilt. Raskolnikov wants to believe theory can lift him above ordinary morality, but Dostoevsky keeps making conscience feel bodily, social, spiritual, and impossible to out-argue.`
  ],
  'war-and-peace': [
    `War and Peace keeps widening the frame until no single hero can plausibly contain history. Battles, marriages, salons, blunders, deaths, and spiritual searching all matter, because Tolstoy wants the reader to feel how vast events are made from countless partial lives rather than one commanding will.`
  ],
  'anna-karenina': [
    `Anna Karenina is Tolstoy refusing to let desire stay romantic for long. Anna's affair burns with urgency because society, marriage, reputation, motherhood, and self-deception close around it from every side, while Levin's slower search for work, marriage, and belief offers a completely different experiment in meaning.`
  ],
  'don-quixote': [
    `Cervantes keeps making delusion hilarious without letting realism claim an easy victory. The knight's disasters expose what romance does to the mind, but they also expose how spiritually thin the world can look once every grand aspiration is dismissed as foolishness. That doubleness is why the novel still feels modern: it is mocking fantasy, mourning disenchantment, and inventing a new kind of self-aware fiction all at the same time.`
  ],
  'les-miserables': [
    `Les Miserables is Hugo insisting that mercy is more revolutionary than punishment. Valjean's life keeps colliding with police logic, poverty, convents, barricades, labor, prostitution, and parental love until the novel starts to feel like one vast argument that private goodness and public misery can never be separated.`
  ],
  'madame-bovary': [
    `Flaubert makes bad desire look intelligent enough to seduce the reader. Emma keeps mistaking intensity for depth and luxury for escape, while marriage, lovers, debt, and consumer fantasy reduce transcendence to installments, purchases, and boredom. The novel cuts deepest because it understands the glamour of illusion before it judges the wreckage.`
  ],
  'the-brothers-karamazov': [
    `The Brothers Karamazov is a philosophical novel that never lets philosophy stay clean. Faith, rebellion, sensuality, guilt, family hatred, and the desire for innocence all collide around patricide, so ideas feel dangerous precisely because they keep turning into lived consequences.`
  ],
  'a-tale-of-two-cities': [
    `Dickens does not treat revolution as a clean moral correction but as historical grievance turning indiscriminate once it acquires momentum. The novel keeps yoking public violence to private resurrection—Manette recalled from living burial, Darnay dragged back by inheritance, Carton discovering purpose at the edge of death—so that political catastrophe and personal redemption never stop reflecting each other. What remains after the melodrama is a hard truth about vengeance: once history starts devouring persons instead of systems, innocence offers little protection.`
  ],
  'the-scarlet-letter': [
    `The Scarlet Letter is sharper than a simple adultery tale because Hawthorne cares about how communities manufacture moral theater. Hester's badge becomes public spectacle, Dimmesdale turns inward guilt into spiritual decay, and Chillingworth makes injury into vocation. The novel keeps asking whether sin does more damage in the act itself or in the systems built to expose, hide, and feed on it.`
  ],
  'the-count-of-monte-cristo': [
    `The Count of Monte Cristo is revenge engineered with patience, money, education, and theatrical timing. Dumas gives vengeance enormous narrative satisfaction, then keeps asking how long it can masquerade as justice before it deforms the avenger too.`
  ],
  'hamlet': [
    `Hamlet feels inexhaustible because Shakespeare makes delay intelligent without making it admirable. The prince sees too much theater, rot, self-deception, and moral contamination for revenge to remain a simple task, so thought itself becomes both insight and paralysis.`
  ],
  'dracula': [
    `Dracula makes modern tools feel thrillingly useful and still potentially too late. Diaries, railways, blood transfusions, and coordinated investigation only matter because Stoker is pitting bureaucratic modernity against something ancient, invasive, and patient.`
  ],
  'othello': [
    `Othello is devastating because Iago barely has to fabricate facts once he learns how to weaponize insecurity. Shakespeare shows jealousy as something built conversationally, with suggestion, silence, and insinuation doing the work that open proof never could.`
  ],
  'fathers-and-sons': [
    `Fathers and Sons feels modern because Turgenev refuses to flatter either youth or tradition. Bazarov's nihilism carries real force when aimed at stale sentiment and empty posture, but love, illness, family attachment, and mortality keep showing what theory cannot absorb. The novel understands generational conflict as a struggle over reality, not just manners.`
  ],
  'middlemarch': [
    `Middlemarch becomes great by refusing the fantasy that private life stays private. Eliot makes marriage, vocation, debt, reform, gossip, and disappointed idealism circulate through a whole provincial world until moral seriousness looks less like grand heroism than like sustained attention to other people's reality.`
  ],
  'romance-of-the-three-kingdoms': [
    `Romance of the Three Kingdoms turns dynastic collapse into a marathon of strategy, loyalty, and legitimacy. Its great pleasure is that brilliant plans and sworn brotherhoods matter just as much as battlefield violence in deciding who can claim empire.`
  ],
  'the-tale-of-the-heike': [
    `From the opening bell, triumph is already sounding like an elegy. Battles, rank, court splendor, and warrior renown matter, but the deeper atmosphere is Buddhist impermanence, which keeps every ascent shadowed by decline. That is why the epic feels sorrowful even at its grandest.`
  ],
  'samguk-sagi': [
    `Samguk Sagi matters less for vivid anecdote than for how state-centered history gets built. Kings, campaigns, alliances, and court record are arranged to make legitimacy, unification, and political continuity feel like the natural frame through which the Korean past should be read.`
  ],
  'secret-history-of-the-mongols': [
    `Temujin's rise in The Secret History of the Mongols feels harsher and more intimate than an imperial chronicle. Hunger, betrayal, kinship politics, and violence shape Chinggis Khan as survival sharpened into power rather than legend polished after the fact.`
  ],
  'mahabharata': [
    `The Mahabharata begins as a family dispute and ends as civilizational devastation. Dice, exile, Krishna's counsel, and the slaughter at Kurukshetra make the epic feel obsessed with one truth: duty can remain binding even when every available action is stained.`
  ],
  'baburnama': [
    `Babur writes like a ruler who cannot help remaining a particular person on the page. Campaigns, defeats, gardens, weather, cities, drinking, longing, and strategic calculation all coexist, so empire never fully hardens into official chronicle. The memoir stays memorable because conquest is being narrated by someone whose eye for terrain and temperament is as revealing as his appetite for power.`
  ],
  'the-gallic-war': [
    `The Gallic War is gripping because Caesar narrates conquest as if it were transparent necessity. That cool third-person tone is the point: it turns extermination, engineering, logistics, and self-promotion into one polished performance of authority.`
  ],
  'shahnameh': [
    `Ferdowsi gives Persian memory its full emotional range: kingly splendor, heroic combat, dynastic struggle, and then the recurring grief that follows greatness when pride outruns wisdom. The poem's power is not just that it preserves old stories, but that it keeps showing how power becomes tragic precisely in figures large enough to inspire love. Again and again, triumph arrives already shadowed by blindness, making civilizational grandeur feel inseparable from loss.`
  ],
  'mein-kampf': [
    `Whatever its literary quality, the text matters as a blueprint for political hatred trying to make itself systematic. Grievance, racial fantasy, propaganda theory, leader worship, and territorial obsession are fused here into a worldview that later became policy, bureaucracy, and mass murder. Reading it is less an encounter with argument than with paranoia seeking state form, which is why it remains historically important and morally repellent.`
  ],
  'the-arabs-and-the-holocaust': [
    `The Arabs and the Holocaust tracks how Holocaust memory and Nakba memory collide, overlap, deny, and instrumentalize each other in Arab political life. Achcar's value is that he refuses a single Arab response and instead follows argument, sympathy, polemic, and evasion across decades.`
  ],
  'nazis-islamists-and-the-making-of-the-modern-middle-east': [
    `Nazis, Islamists and the Making of the Modern Middle East argues that wartime Nazi outreach and later Islamist politics are more entangled than comfortable narratives admit. Its edge comes from tracing propaganda, alliances, and ideological afterlives rather than treating them as isolated episodes.`
  ],
  'sombres-bourreaux': [
    `This is difficult material precisely because it refuses the comfort of simple roles. Collaboration under empire emerges through coercion, compromised ambition, racial hierarchy, and survival calculation all at once, so the familiar moral map of victim and perpetrator never stays clean for long. Its force lies in showing that fascist and colonial systems could recruit degraded intermediaries without ever treating them as equals, leaving memory itself permanently unstable afterward.`
  ],
  'the-quran': [
    `The Qur’an speaks with urgency because it is not presented as detached theology but as address: warning, consolation, command, dispute, promise, and judgment. Its force comes from the insistence that history, nature, law, and conscience all point back to one sovereign God before whom no life stays morally unaccounted for.`
  ],
  'torah': [
    `Rather than offering detached spirituality, the Torah builds a world in which story and obligation are inseparable. Creation, ancestral promise, slavery, liberation, covenant, law, ritual, and wilderness testing all work together to form a people whose identity is supposed to be practiced, not merely remembered. That is why its authority feels so foundational: it does not just tell Israel where it came from, but keeps defining what fidelity, holiness, justice, and communal life are meant to look like.`
  ],
  'tanakh': [
    `At bottom, the Tanakh is what happens when covenant moves from charter to history: kings fail, prophets prosecute, poets grieve and praise, exile shatters the nation, and memory refuses to die. If the Torah lays down the terms, the Tanakh shows how brutal and complicated it is to actually live under them.`
  ],
  'talmud': [
    `In one sentence, the Talmud is a civilization refusing to let law go flat. Its point is that faithful living requires argument, precedent, interpretation, and relentless mental discipline, so the endless debates are not clutter; they are the tradition staying alive.`
  ],
  'bhagavad-gita': [
    `In a nutshell, the Bhagavad Gita starts with Arjuna wanting to escape moral burden and ends by refusing him that comfort. Its whole point is that duty, action, devotion, and knowledge have to survive fear, grief, and attachment to outcomes or they are not real.`
  ],
  'tao-te-ching': [
    `Instead of praising force, achievement, and self-assertion, the Tao Te Ching keeps honoring what ordinary ambition underrates: emptiness, softness, restraint, receptivity, and action that does not advertise itself. Its radical calm comes from the suspicion that ego is the main source of disorder, whether in a ruler, a household, or a single mind. The result is not passivity but a disciplined refusal to confuse control with wisdom.`
  ],
  'kojiki': [
    `Kojiki is not just a pile of old myths; it is a political cosmology. Creation stories, divine births, pollution rituals, and imperial ancestry all work together to make rulership feel rooted in sacred origin, so mythology becomes a structure of legitimacy rather than loose folklore.`
  ],
  'dhammapada': [
    `Put simply, the Dhammapada says suffering is not mostly descending on you from outside; your own mind keeps helping build it. That is why the book keeps driving back to discipline, clarity, compassion, and detachment: if the mind is crooked, the life follows.`
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
    `What this manual understands well is that people rarely disclose on the merits of a question alone. Timing, baseline behavior, emotional temperature, sequencing, silence, and perceived safety all shape whether a subject talks, withholds, or starts rationalizing. That is why it feels both useful and faintly chilling: conversation is treated as a designed environment in which disclosure can be engineered rather than politely requested.`
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
    `Thinking in Bets is useful because it treats uncertainty as a permanent condition, not an error that smarter people can eliminate. Duke's poker lens keeps pressing one corrective: evaluate decisions by the quality of the reasoning and the odds, not by whether luck happened to cooperate this time.`
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
    `Taleb's real target is insulated decision-making: people who theorize, regulate, advise, or profit while exporting the downside to strangers. What gives the argument its bite is not just the economics of risk but the moral charge behind it, the claim that judgment becomes corrupt when exposure becomes optional. It is most persuasive when it insists that accountability is not a sentimental virtue but the minimum price of speaking forcefully about how others should live.`
  ],
  'the-innovators-dilemma': [
    `The Innovator's Dilemma is brutal because it says competent management can still produce collapse. Christensen's point is that listening to current customers and optimizing existing products often blinds incumbents to the smaller, cheaper disruptions that eventually replace them.`
  ],
  'how-spies-think': [
    `David Omand's book turns intelligence tradecraft into a broader guide for thinking under uncertainty. Its lessons matter because they insist on humility, bias-checking, probabilistic judgment, and alertness to deception when certainty is impossible.`
  ],
  'the-ellipsis-manual': [
    `Chase Hughes writes as if social perception could be industrialized into a repeatable method: establish baselines, watch incongruence, control status, frame the exchange, and use pressure without looking theatrical. That procedural tone is the whole appeal and the whole warning. The manual becomes interesting exactly where influence stops sounding mystical and starts sounding like an operational craft for steering attention, emotion, and disclosure.`
  ],
  'social-engineering-the-art-of-human-hacking': [
    `The unsettling point is not that people are foolish; it is that normal social virtues are exploitable. Helpfulness, urgency, trust, deference to authority, and the wish to be cooperative all become openings once an attacker knows how to stage the encounter. Hadnagy's value lies in making persuasion look systematic rather than magical, which is precisely why it reads as both a security guide and a lesson in how thin everyday defenses really are.`
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
    `The Rise and Fall of the Third Reich gets its force from accumulation. Shirer lets speeches, directives, diplomatic maneuvers, military campaigns, bureaucratic language, and genocide pile up until Nazism looks less like a sudden madness than like a modern state teaching itself to normalize barbarism.`
  ],
  'spqr': [
    `SPQR makes Rome feel alive by recovering its arguments rather than its marble. Beard keeps asking who counted as Roman, who got heard, how citizenship expanded, and how empire reshaped the republic, so Roman greatness appears inseparable from contest, improvisation, and self-invention.`
  ],
  'the-histories': [
    `The Histories feels alive because Herodotus never narrows history down to one respectable genre. War report, travelogue, rumor, ethnography, anecdote, and moral reflection all mingle, which is exactly how he turns the Persian Wars into a wider study of custom, hubris, empire, luck, and the strange things people take for normal.`
  ],
  'the-peloponnesian-war': [
    `Thucydides makes prolonged conflict feel corrosive long before it becomes decisive. Speeches, faction fights, plague, imperial overreach, and strategic calculation all show a political world in which fear and prestige slowly deform what citizens can say, justify, and believe about themselves. That is why the history keeps reading as more than campaign narrative: it is an anatomy of civic intelligence unraveling under pressure.`
  ],
  'genghis-khan-and-the-making-of-the-modern-world': [
    `Genghis Khan and the Making of the Modern World is a revisionist history that wants conquest seen alongside administration. Weatherford keeps stressing merit, law, trade networks, religious tolerance, and mobility, not to excuse Mongol violence, but to show that the empire's world-making power was larger and more organized than the barbarian stereotype allows.`
  ],
  'the-crusades': [
    `The Crusades works best when holy war stops looking like pure piety or pure opportunism and becomes an unstable mixture of both. Asbridge shows how devotion, ambition, logistics, memory, and political fragmentation kept the enterprise alive far beyond any single campaign.`
  ],
  'the-silk-roads': [
    `The Silk Roads recenters world history on the corridors through Central Asia and Persia where trade, conquest, religion, and later energy politics keep converging. Frankopan's big move is to make Europe's usual stage look provincial by comparison.`
  ],
  'mastery': [
    `Greene flatters ambition only after subjecting it to apprenticeship. Repetition, obscurity, imitation, frustration, and long stretches of unglamorous work are not obstacles to excellence here; they are the material out of which deep perception is built. Its appeal is obvious, but the discipline it recommends is harsher than motivational culture usually allows: independence comes late, and only after the ego has survived being trained.`
  ],
  'think-and-grow-rich': [
    `Think and Grow Rich turns ambition into a quasi-spiritual program of desire, autosuggestion, planning, and persistence. Its appeal has always been that it treats wealth as something first engineered in belief and will before it appears in business.`
  ],
  'david-and-goliath': [
    `David and Goliath argues that apparent weakness often forces better strategy than comfortable power does. Gladwell keeps flipping the script so that hardship, outsider status, and constraint become sources of tactical creativity rather than automatic defeat.`
  ],
  'blink': [
    `Blink is strongest when it narrows the claim instead of romanticizing instinct. Gladwell shows that thin-slicing can be real expertise under the right conditions, but also that snap judgment becomes dangerous the moment prejudice, vanity, or stress starts dressing itself up as intuition.`
  ],
  'what-the-dog-saw': [
    `What the Dog Saw is Gladwell at his best when curiosity matters more than thesis. The essays keep using odd experts, product failures, innovators, criminals, and overlooked professions to show how much of modern life depends on invisible systems and strange specializations. The pleasure is not one argument so much as the habit of looking sideways.`
  ],
  'outliers': [
    `Outliers keeps puncturing the vanity of self-made success stories. Gladwell's larger point is not that individual effort is fake, but that timing, culture, cohort, institutions, and opportunity structures quietly shape who gets to convert effort into visible achievement.`
  ],
  'freakonomics': [
    `Freakonomics turns economics into a way of hunting hidden incentives in places respectable people pretend not to look. Its charm comes from the sideways questions: cheating teachers, drug gangs, baby names, crime, and the difference between moral panic and measurable behavior.`
  ],
  'startup-nation': [
    `Israel's startup density emerges here from pressure, improvisation, military networks, immigrant talent, and venture capital. The central claim is that insecurity and small size can make a country faster, flatter, and more risk-tolerant than larger rivals.`
  ],
  'zero-the-biography-of-a-dangerous-idea': [
    `Seife turns one symbol into an intellectual troublemaker with an unusually long afterlife. Zero keeps disturbing inherited habits of thought—about number, void, infinity, God, space, and calculation—so the history becomes larger than mathematics alone. The story stays memorable because “nothing” repeatedly arrives as a cultural scandal before it settles into being an indispensable tool.`
  ],
  'journey-through-genius': [
    `Dunham's great move is to make proof feel dramatic. Instead of treating mathematics as a warehouse of results, he keeps returning to the moment an argument suddenly becomes elegant, necessary, and surprising all at once. It works because it teaches readers to admire structure itself, showing that beauty in mathematics is not decoration but the feeling of thought finding its cleanest possible form.`
  ],
  'the-strangest-man': [
    `The Strangest Man is a biography of Paul Dirac written around the odd fit between emotional reserve and theoretical brilliance. Farmelo makes early quantum physics vivid partly by showing how much of it ran through one extraordinarily difficult, abstract mind.`
  ],
  'the-alchemist': [
    `The Alchemist works best as a parable about learning how to read meaning without mistaking cliché for destiny. Santiago's journey matters less for the treasure plot than for the idea that vocation requires risk, attention, and a changed self before the world can look like an answer.`
  ],
  'meditations': [
    `Meditations is basically an emperor telling himself, over and over, not to be vain, reactive, soft, petty, or distracted. Its power comes from how unglamorous that struggle is: Marcus is trying to keep his own mind in order because he knows external power is useless if the inside of the soul is a mess.`
  ],
  'the-picture-of-dorian-gray': [
    `Wilde's novel is fascinated by the fantasy of separating appearance from consequence. Dorian gets to keep the social surface—youth, charm, desirability—while the portrait absorbs the moral truth, and that division turns beauty into a kind of spiritual embezzlement. The story lasts because its supernatural device never feels arbitrary; it simply externalizes the wish to sin aesthetically and be judged somewhere else.`
  ],
  'smugglers-cove': [
    `Smuggler's Cove makes tiki respectable by treating excess as something engineered, not improvised. Cate shows that the escapist surface—rum, garnishes, spectacle, tropical fantasy—only works when classification, balance, prep, and hospitality are handled with almost obsessive discipline.`
  ],
  'the-age-of-gold': [
    `The Age of Gold treats the California Gold Rush as a national fever dream of migration, speculation, violence, and reinvention. Brands keeps the energy high while showing how quickly fortune-seeking remade the West into something harsher and more organized.`
  ],
  'death-valley-and-the-amargosa': [
    `Here the desert is the main intelligence in the story. Prospectors, borax men, transport schemes, and rush-fed fantasies keep colliding with distance, thirst, heat, and terrain, so frontier ambition is measured less by daring than by logistics. The effect is anti-romantic in the best way: sudden fortune remains the dream, but landscape keeps reintroducing cost, failure, and human smallness.`
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
    `The Story of Art still works because Gombrich teaches vision before jargon. By treating art history as a succession of problems, patrons, traditions, and inventions, he makes looking active again instead of leaving the reader trapped in a museum of reverent labels.`
  ],
  'music-in-the-baroque': [
    `Music in the Baroque gets beyond style labels by restoring the institutions underneath the sound. Courts, churches, opera, patronage, rhetoric, and performance practice all matter, because baroque music was never just a sequence of notes floating above social hierarchy.`
  ],
  'food-in-history': [
    `Food in History becomes sharper the moment eating stops looking ordinary. Tannahill uses grain, spice, sugar, famine, ritual, and cuisine to show that appetite is never just biological; it is one of the main places where class, empire, technology, and belief become daily life.`
  ],
  'the-old-man-and-the-sea': [
    `Hemingway strips away almost everything except work, pain, pride, and endurance, which is why Santiago's ordeal feels ceremonial rather than merely athletic. Catching the marlin matters, but not as much as the standard of craft and seriousness he brings to the struggle even when the visible prize is later destroyed. The novella becomes moving by insisting that dignity is not the same thing as winning and may survive precisely where success does not.`
  ],
  'green-hills-of-africa': [
    `Safari is the surface subject, but Hemingway is really testing whether experience can be turned into prose without softening it into pose. Hunting, talk, rivalry, camp routine, landscape, and the performance of masculinity all become part of that experiment, which makes it read as both adventure narrative and workshop in self-mythmaking. Its interest lies in the tension between honest seeing and the temptation to make a style out of being the man who sees.`
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

function getTldrLead(entry, mode, seed) {
  if (mode === 'argument') {
    return pickVariant(seed, [
      `In a nutshell, ${entry.title} is trying to make its worldview feel necessary rather than debatable.`,
      `At bottom, ${entry.title} is less an open inquiry than a push toward a political conclusion.`,
      `The short version is that ${entry.title} wants to make its side look inevitable.`,
      `${entry.title}, in one sentence, is argument trying to pass itself off as settled truth.`
    ]);
  }

  if (mode === 'scripture') {
    return pickVariant(seed, [
      `In a nutshell, ${entry.title} is trying to form a way of life, not just state beliefs.`,
      `At bottom, ${entry.title} is about shaping conduct, devotion, and memory rather than offering vague uplift.`,
      `The short version is that ${entry.title} cares about what kind of person or people gets formed.`,
      `${entry.title}, in one sentence, is sacred teaching aimed at lived order rather than abstract inspiration.`
    ]);
  }

  if (mode === 'philosophy') {
    return pickVariant(seed, [
      `In a nutshell, ${entry.title} is philosophy trying to change how a person lives, not just what they can repeat.`,
      `At bottom, ${entry.title} is a discipline of thought aimed at character, perception, and self-command.`,
      `The short version is that ${entry.title} wants its ideas lived, tested, and internalized rather than admired from a distance.`,
      `${entry.title}, in one sentence, is reflection used as training for judgment, conduct, or inner steadiness.`
    ]);
  }

  if (mode === 'mythic') {
    return pickVariant(seed, [
      `In a nutshell, ${entry.title} uses mythic origins to explain how a people or sacred order understands itself.`,
      `At bottom, ${entry.title} is not just legend collecting; it is ancestry, sacred memory, and legitimacy being fused together.`,
      `The short version is that ${entry.title} treats myth as a way of grounding identity, authority, and belonging.`,
      `${entry.title}, in one sentence, is origin story doing cultural and political work at the same time.`
    ]);
  }

  if (mode === 'history') {
    return pickVariant(seed, [
      `In a nutshell, ${entry.title} is history with an argument about responsibility built into it.`,
      `At bottom, ${entry.title} is trying to show how events become consequences rather than mere chronology.`,
      `The short version is that ${entry.title} cares about decisions, costs, and aftermath more than date-stamping events.`,
      `${entry.title}, in one sentence, is a bid to turn history back into human choice and human damage.`
    ]);
  }

  if (mode === 'nonfiction') {
    return pickVariant(seed, [
      `In a nutshell, ${entry.title} is trying to turn an idea into a usable method.`,
      `At bottom, ${entry.title} only matters if its main claim survives contact with real life.`,
      `The short version is that ${entry.title} wants to be more framework than slogan.`,
      `${entry.title}, in one sentence, is advice or analysis trying to prove it is not just packaging.`
    ]);
  }

  if (mode === 'journey') {
    return pickVariant(seed, [
      `In a nutshell, ${entry.title} uses movement and ordeal to test what its people are really made of.`,
      `At bottom, ${entry.title} turns travel, quest, or war into a judgment on character and world.`,
      `The short version is that ${entry.title} cares less about scenery than about what the journey exposes.`,
      `${entry.title}, in one sentence, is a story of passage where the road itself becomes the test.`
    ]);
  }

  if (mode === 'speculative') {
    return pickVariant(seed, [
      `In a nutshell, ${entry.title} uses an invented system to show what certain kinds of power do to human beings.`,
      `At bottom, ${entry.title} is not about clever worldbuilding; it is about what a designed order does to real lives.`,
      `The short version is that ${entry.title} turns a premise into a machine for social and psychological pressure.`,
      `${entry.title}, in one sentence, is speculative fiction using its setup as a diagnosis rather than a gimmick.`
    ]);
  }

  if (mode === 'horror') {
    return pickVariant(seed, [
      `In a nutshell, ${entry.title} uses fear to expose the rot ordinary realism would soften.`,
      `At bottom, ${entry.title} is horror with an accusation hiding inside it.`,
      `The short version is that ${entry.title} cares less about jump scares than about what the terror means.`,
      `${entry.title}, in one sentence, is dread turned into moral or psychological judgment.`
    ]);
  }

  if (mode === 'drama') {
    return pickVariant(seed, [
      `In a nutshell, ${entry.title} compresses pressure into speech, performance, and collision.`,
      `At bottom, ${entry.title} is conflict sharpened by form rather than softened by it.`,
      `The short version is that ${entry.title} makes language itself do the cutting.`,
      `${entry.title}, in one sentence, is drama using voice and confrontation as the real battlefield.`
    ]);
  }

  if (mode === 'satire') {
    return pickVariant(seed, [
      `In a nutshell, ${entry.title} uses humor as a delivery system for contempt, diagnosis, or accusation.`,
      `At bottom, ${entry.title} makes you laugh just long enough to show you what is rotten.`,
      `The short version is that ${entry.title} turns absurdity into a weapon against what people call normal.`,
      `${entry.title}, in one sentence, is comedy bait wrapped around a harsher judgment.`
    ]);
  }

  return pickVariant(seed, [
    `In a nutshell, ${entry.title} is about what pressure reveals in people.`,
    `At bottom, ${entry.title} cares about human cost more than shelf-ready themes.`,
    `The short version is that ${entry.title} becomes itself when its people are cornered.`,
    `${entry.title}, in one sentence, is a story interested in judgment, consequence, and what survives them.`
  ]);
}

function getTldrMode(entry) {
  if (entry.category.includes('Manifestos & Politics')) return 'argument';
  if (entry.category.includes('Religion & Philosophy')) {
    const scriptureSlugs = new Set([
      'the-holy-bible',
      'the-quran',
      'torah',
      'tanakh',
      'talmud',
      'dhammapada',
      'bhagavad-gita'
    ]);
    const mythicSlugs = new Set([
      'kojiki',
      'the-mabinogion',
      'arvisura'
    ]);

    if (scriptureSlugs.has(entry.slug)) return 'scripture';
    if (mythicSlugs.has(entry.slug)) return 'mythic';
    return 'philosophy';
  }
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
      `${trio} are the moving parts that make the case feel total rather than partial.`,
      `${first}, ${second}, and ${third} are where the rhetoric stops floating and starts trying to close off rival interpretations.`,
      `The grip comes from ${trio}, because that is how grievance hardens into worldview.`,
      `${trio} are not side themes; they are the engine that makes the doctrine feel unavoidable.`
    ]);
  }

  if (mode === 'scripture') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are where the teaching becomes an actual rule of life instead of pious atmosphere.`,
      `Its center of gravity is ${trio}, because that is where sacred language turns concrete.`,
      `${trio} are the pressure points that show what the text thinks obedience, wisdom, or awakening should look like in practice.`,
      `If you want the real demand, stay with ${first}, ${second}, and ${third}; that is where the book stops inspiring and starts forming.`
    ]);
  }

  if (mode === 'philosophy') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are where the argument turns into a discipline of mind rather than a pile of quotable lines.`,
      `Its center of gravity is ${trio}, because that is where the thinking gets tied to practice.`,
      `${trio} are the pressure points that show what sort of character or perception the book is trying to train.`,
      `If you want the book without the classroom varnish, stay with ${first}, ${second}, and ${third}; that is where the philosophy becomes lived method.`
    ]);
  }

  if (mode === 'mythic') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are not decorative legends; they are the pattern of ancestry, authority, or sacred order.`,
      `Its center of gravity is ${trio}, because that is where myth becomes a structure for memory and legitimacy.`,
      `${trio} are the parts that tell you what kind of world and lineage the text is trying to preserve.`,
      `If you want the real work the book is doing, watch ${first}, ${second}, and ${third}; that is where story becomes civilizational memory.`
    ]);
  }

  if (mode === 'history') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are what keep the story anchored in decisions, actors, and consequences instead of vague historical weather.`,
      `The history gets its edge through ${trio}, not through empty talk about “forces.”`,
      `${first}, ${second}, and ${third} keep dragging the period back to actual choices under pressure.`,
      `${trio} are the chain that turns background context into accountable action.`
    ]);
  }

  if (mode === 'nonfiction') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are the operating logic, not just chapter headings.`,
      `The book gets usable through ${trio}; that is where it either becomes practical or stays presentation-deck fluff.`,
      `If you strip away the branding, ${first}, ${second}, and ${third} are the moving parts doing the actual work.`,
      `${trio} are where the author’s main claim has to start proving itself.`
    ]);
  }

  if (mode === 'journey') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are the trials and turns that give the journey its meaning.`,
      `The story earns its scale through ${trio}, because that is where movement turns into testing.`,
      `The real backbone is the movement through ${first}, ${second}, and ${third}, not the travel brochure surface.`,
      `${trio} are where the quest stops being scenery and starts becoming judgment.`
    ]);
  }

  if (mode === 'speculative') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are the machinery that makes the invented world actually bear down on people.`,
      `The nightmare gets specific through ${trio}, not through a generic “future bad” mood.`,
      `${first}, ${second}, and ${third} build a system you can feel operating on bodies, language, or social life.`,
      `${trio} are where the satire, tech, or dystopian setup stops being décor and becomes a mechanism.`
    ]);
  }

  if (mode === 'horror') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are the rot underneath the surface.`,
      `The dread gets real through ${trio}, because that is where fear joins guilt, obsession, or moral failure.`,
      `${first}, ${second}, and ${third} keep turning atmosphere into threat with an argument behind it.`,
      `${trio} are where the horror stops hiding and starts naming the corruption in play.`
    ]);
  }

  if (mode === 'drama') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are where speech, performance, and conflict do the real cutting.`,
      `The force sits in ${trio}, because that is where language stops sounding ornamental and starts drawing blood.`,
      `The real pressure points are ${first}, ${second}, and ${third}, because that is where the voices start wounding each other.`,
      `${trio} are where the form sharpens the conflict instead of merely carrying it.`
    ]);
  }

  if (mode === 'satire') {
    return pickVariant(seed, [
      `${first}, ${second}, and ${third} are where the joke turns into indictment.`,
      `The comedy has teeth because ${trio} keep exposing what everybody has learned to call normal.`,
      `${first}, ${second}, and ${third} make the absurdity feel administratively real instead of cartoonish.`,
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
      `${fourth} and ${fifth} reveal the actual play: this book is not merely describing a crisis, it is trying to justify a program, an enemy, or a demand for obedience.`,
      `The real tell is ${fourth} together with ${fifth}, because that is where worldview hardens into command.`,
      `By the time ${fourth} and ${fifth} arrive, the point is clear: the book wants to recruit more than enlighten.`,
      `${fourth} and ${fifth} make the verdict obvious: explanation here is serving mobilization.`
    ]);
  }

  if (mode === 'scripture') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} show the real demand: the text wants conduct, community, and accountability shaped a certain way, not just admiration.`,
      `By the time you hit ${fourth} and ${fifth}, doctrine has become practice, judgment, or hope, which is the whole point.`,
      `${fourth} and ${fifth} make clear what kind of person or people the text is trying to form.`,
      `The real demand arrives with ${fourth} and ${fifth}, because that is where sacred language becomes a lived order.`
    ]);
  }

  if (mode === 'philosophy') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} show whether the book can turn thought into self-command, endurance, or clearer vision instead of leaving it as posture.`,
      `By the time you reach ${fourth} and ${fifth}, the point is clear: the philosophy is supposed to discipline a life, not decorate a bookshelf.`,
      `${fourth} and ${fifth} are where the book proves whether it has a real practice inside it or just a respectable vocabulary.`,
      `The real test lands with ${fourth} and ${fifth}, because that is where reflection has to become conduct.`
    ]);
  }

  if (mode === 'mythic') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} show the real point: myth here is doing cultural, political, or sacred work, not just entertaining the audience.`,
      `By the time you get to ${fourth} and ${fifth}, the book is no longer just telling stories; it is grounding order, place, and belonging.`,
      `${fourth} and ${fifth} are where legend hardens into identity and public memory.`,
      `The payoff arrives with ${fourth} and ${fifth}, because that is where the myths reveal what kind of world they are trying to authorize.`
    ]);
  }

  if (mode === 'history') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} are where the judgment shows up: who chose what, who paid, and what later memory tries to do with it.`,
      `By the time you reach ${fourth} and ${fifth}, the book has moved from narration to responsibility.`,
      `${fourth} and ${fifth} are where chronology gets cashed out into warning, blame, or aftermath.`,
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
      `By the end, ${fourth} and ${fifth} are what turn travel or war into transformation rather than motion.`,
      `${fourth} and ${fifth} are where the journey reveals what kind of person, kingdom, or world is left standing.`,
      `The real payoff lands in ${fourth} and ${fifth}, because that is where the quest’s judgment becomes unmistakable.`
    ]);
  }

  if (mode === 'speculative') {
    return pickVariant(seed, [
      `${fourth} and ${fifth} show what the system is really doing to the people inside it.`,
      `By the time ${fourth} and ${fifth} arrive, the invented world has stopped being clever décor and become a social diagnosis.`,
      `${fourth} and ${fifth} are where the warning cashes out into actual control, damage, or collapse.`,
      `That is where the premise stops performing cleverness and starts exposing the trap: ${fourth} and ${fifth}.`
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
  const mode = getTldrMode(entry);
  const opener = getTldrLead(entry, mode, seed);
  const focus = getTldrFocusSentence(entry, mode, [first, second, third], seed);
  const closer = getTldrVerdictSentence(entry, mode, [fourth, fifth], seed + 1);

  return [`${opener} ${focus} ${closer}`];
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
