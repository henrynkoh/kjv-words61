/**
 * KJV verses by topic — from the 24 categories for discussing and spreading words of truth.
 * Format and purpose aligned with https://github.com/henrynkoh/kjv-faith-ai
 * No redundancy: each verse appears once per topic; no omissions.
 */

import type { VerseEntry, TopicCategory } from "./verses";

function v(
  id: string,
  theme: string,
  ref: string,
  text: string,
  korean?: string
): VerseEntry {
  return { id, theme, korean: korean ?? theme, ref, text };
}

export const topicsData: TopicCategory[] = [
  {
    id: "bible-inspired-word-of-god",
    title: "How do we know the Bible is really the inspired word of God?",
    description:
      "Prophecy fulfilled, Israel in God's plan, Scripture written by men moved by the Holy Ghost; Daniel, Revelation, and the supernatural unity of the Word.",
    audienceSuggestions: ["seekers", "mixed", "mature"],
    situationSuggestions: ["evangelism", "teaching"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "daniel-9-24",
        "Seventy weeks determined upon thy people and Jerusalem",
        "Daniel 9:24",
        "Seventy weeks are determined upon thy people and upon thy holy city, to finish the transgression, and to make an end of sins, and to make reconciliation for iniquity, and to bring in everlasting righteousness, and to seal up the vision and prophecy, and to anoint the most Holy."
      ),
      v(
        "matthew-24-15",
        "Abomination of desolation spoken of by Daniel",
        "Matthew 24:15",
        "When ye therefore shall see the abomination of desolation, spoken of by Daniel the prophet, stand in the holy place, (whoso readeth, let him understand)."
      ),
      v(
        "daniel-9-25-26",
        "From commandment to Messiah the Prince; Messiah cut off",
        "Daniel 9:25,26",
        "Know therefore and understand, that from the going forth of the commandment to restore and to build Jerusalem unto Messiah the Prince shall be seven weeks, and threescore and two weeks; the street shall be built again, and the wall, even in troublous times: And after threescore and two weeks shall Messiah be cut off, but not for himself: and the people of the prince that shall come shall destroy the city and the sanctuary; and the end thereof shall be with a flood, and unto the end of the war desolations are determined."
      ),
      v(
        "daniel-12-1-2",
        "Michael shall stand up; time of trouble; resurrection",
        "Daniel 12:1,2",
        "And at that time shall Michael stand up, the great prince which standeth for the children of thy people: and there shall be a time of trouble, such as never was since there was a nation even to that same time: and at that time thy people shall be delivered, every one that shall be found written in the book. And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt."
      ),
      v(
        "daniel-12-8-9",
        "Words closed up and sealed till the time of the end",
        "Daniel 12:8,9",
        "And I heard, but I understood not: then said I, O my Lord, what shall be the end of these things? And he said, Go thy way, Daniel, for the words are closed up and sealed till the time of the end."
      ),
      v(
        "2-peter-1-21",
        "Prophecy came not by will of man but by the Holy Ghost",
        "2 Peter 1:21",
        "For the prophecy came not in old time by the will of man, but holy men of God spake as they were moved by the Holy Ghost."
      ),
      v(
        "daniel-8-1",
        "Vision in third year of Belshazzar",
        "Daniel 8:1",
        "In the third year of the reign of king Belshazzar a vision appeared unto me, even unto me Daniel, after that which appeared unto me at the first."
      ),
      v(
        "daniel-8-3-4",
        "Ram with two horns; Medes and Persia",
        "Daniel 8:3,4",
        "Then I lifted up mine eyes, and saw, and, behold, there stood before the river a ram which had two horns: and the two horns were high; but one was higher than the other, and the higher came up last. I saw the ram pushing westward, and northward, and southward; so that no beasts might stand before him, neither was there any that could deliver out of his hand; but he did according to his will, and became great."
      ),
      v(
        "daniel-8-5-6",
        "He goat from the west; Alexander and Grecia",
        "Daniel 8:5,6",
        "And as I was considering, behold, an he goat came from the west on the face of the whole earth, and touched not the ground: and the goat had a notable horn between his eyes. And he came to the ram that had two horns, which I had seen standing before the river, and ran unto him in the fury of his power."
      ),
      v(
        "daniel-8-20-22",
        "Ram = Media and Persia; goat = Grecia; four kingdoms",
        "Daniel 8:20-22",
        "The ram which thou sawest having two horns are the kings of Media and Persia. And the rough goat is the king of Grecia: and the great horn that is between his eyes is the first king. Now that being broken, whereas four stood up for it, four kingdoms shall stand up out of the nation, but not in his power."
      ),
      v(
        "daniel-8-23-25",
        "King of fierce countenance; broken without hand",
        "Daniel 8:23-25",
        "And in the latter time of their kingdom, when the transgressors are come to the full, a king of fierce countenance, and understanding dark sentences, shall stand up. And his power shall be mighty, but not by his own power: and he shall destroy wonderfully, and he shall prosper, and practise, and shall destroy the mighty and the holy people. And through his policy also he shall cause craft to prosper in his hand; and he shall magnify himself in his heart, and by peace shall destroy many: he shall also stand up against the Prince of princes; but he shall be broken without hand."
      ),
      v(
        "matthew-28-18",
        "All power given unto me in heaven and in earth",
        "Matthew 28:18",
        "And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth."
      ),
      v(
        "genesis-14-18",
        "Melchizedek brought bread and wine",
        "Genesis 14:18",
        "And Melchizedek king of Salem brought forth bread and wine: and he was the priest of the most high God."
      ),
      v(
        "matthew-26-26-27",
        "Take, eat; this is my body; drink ye all of it",
        "Matthew 26:26,27",
        "And as they were eating, Jesus took bread, and blessed it, and brake it, and gave it to the disciples, and said, Take, eat; this is my body. And he took the cup, and gave thanks, and gave it to them, saying, Drink ye all of it;"
      ),
      v(
        "1-corinthians-11-23-26",
        "Lord's Supper in remembrance of me till he come",
        "1 Corinthians 11:23-26",
        "For I have received of the Lord that which also I delivered unto you, That the Lord Jesus, the same night in which he was betrayed, took bread: And when he had given thanks, he brake it, and said, Take, eat; this is my body, which is broken for you: this do in remembrance of me. After the same manner also he took the cup, when he had supped, saying, This cup is the new testament in my blood: this do ye, as oft as ye drink it, in remembrance of me. For as often as ye eat this bread, and drink this cup, ye do shew the Lord's death till he come."
      ),
    ],
  },
  {
    id: "attributes-of-god",
    title: "What are the attributes of God?",
    description:
      "Sovereign, grace and love, infinite, omnipresent, omniscient, self-existent; the Triune God; Christ the image of the invisible God.",
    audienceSuggestions: ["seekers", "new believers", "mixed"],
    situationSuggestions: ["teaching", "devotion"],
    knowledgeLevel: "any",
    verses: [
      v(
        "genesis-1-1",
        "In the beginning God created",
        "Genesis 1:1",
        "In the beginning God created the heaven and the earth."
      ),
      v(
        "psalm-8-4",
        "What is man that thou art mindful of him",
        "Psalm 8:4",
        "What is man, that thou art mindful of him? and the son of man, that thou visitest him?"
      ),
      v(
        "romans-9-19-21",
        "Sovereign choice and creation",
        "Romans 9:19-21",
        "Thou wilt say then unto me, Why doth he yet find fault? For who hath resisted his will? Nay but, O man, who art thou that repliest against God? Shall the thing formed say to him that formed it, Why hast thou made me thus? Hath not the potter power over the clay, of the same lump to make one vessel unto honour, and another unto dishonour?"
      ),
      v(
        "romans-5-8",
        "God commendeth his love toward us",
        "Romans 5:8",
        "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us."
      ),
      v(
        "romans-5-20-21",
        "Grace did much more abound",
        "Romans 5:20,21",
        "Moreover the law entered, that the offence might abound. But where sin abounded, grace did much more abound: That as sin hath reigned unto death, even so might grace reign through righteousness unto eternal life by Jesus Christ our Lord."
      ),
      v(
        "psalm-139-7-17",
        "If I make my bed in hell, behold, thou art there",
        "Psalm 139:7-17",
        "Whither shall I go from thy spirit? or whither shall I flee from thy presence? If I ascend up into heaven, thou art there: if I make my bed in hell, behold, thou art there."
      ),
      v(
        "colossians-1-15",
        "Image of the invisible God",
        "Colossians 1:15",
        "Who is the image of the invisible God, the firstborn of every creature:"
      ),
    ],
  },
  {
    id: "why-did-god-create-us",
    title: "Why did God create us?",
    description:
      "To know the manifold wisdom of God; objects of His love; eternal purpose in Christ; saved and called according to His purpose and grace before the world began.",
    audienceSuggestions: ["seekers", "new believers", "mature"],
    situationSuggestions: ["teaching", "evangelism"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "ephesians-3-10-11",
        "Manifold wisdom of God known by the church",
        "Ephesians 3:10,11",
        "To the intent that now unto the principalities and powers in heavenly places might be known by the church the manifold wisdom of God, According to the eternal purpose which he purposed in Christ Jesus our Lord:"
      ),
      v(
        "1-corinthians-2-9",
        "Things which God hath prepared for them that love him",
        "1 Corinthians 2:9",
        "But as it is written, Eye hath not seen, nor ear heard, neither have entered into the heart of man, the things which God hath prepared for them that love him."
      ),
      v(
        "2-timothy-1-7-9",
        "Spirit of power and love; saved according to his purpose",
        "2 Timothy 1:7-9",
        "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind. Be not thou therefore ashamed of the testimony of our Lord, nor of me his prisoner: but be thou partaker of the afflictions of the gospel according to the power of God; Who hath saved us, and called us with an holy calling, not according to our works, but according to his own purpose and grace, which was given us in Christ Jesus before the world began,"
      ),
      v(
        "romans-5-2",
        "Access by faith into this grace",
        "Romans 5:2",
        "By whom also we have access by faith into this grace wherein we stand, and rejoice in hope of the glory of God."
      ),
    ],
  },
  {
    id: "unbeliever-enemy-of-god",
    title: "Is an unbeliever an enemy of God?",
    description:
      "Carnal mind is enmity against God; not subject to the law of God; they that are in the flesh cannot please God; without faith it is impossible to please him.",
    audienceSuggestions: ["believers", "mature", "mixed"],
    situationSuggestions: ["teaching", "correction", "evangelism"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "romans-8-6",
        "Carnally minded is death; spiritually minded is life",
        "Romans 8:6",
        "For to be carnally minded is death; but to be spiritually minded is life and peace."
      ),
      v(
        "romans-8-7",
        "Carnal mind is enmity against God",
        "Romans 8:7",
        "Because the carnal mind is enmity against God: for it is not subject to the law of God, neither indeed can be."
      ),
      v(
        "romans-8-8",
        "They that are in the flesh cannot please God",
        "Romans 8:8",
        "So then they that are in the flesh cannot please God."
      ),
      v(
        "romans-3-10-12",
        "None righteous; none that seeketh after God",
        "Romans 3:10-12",
        "As it is written, There is none righteous, no, not one: There is none that understandeth, there is none that seeketh after God. They are all gone out of the way, they are together become unprofitable; there is none that doeth good, no, not one."
      ),
      v(
        "romans-3-13-18",
        "Throat open sepulchre; no fear of God",
        "Romans 3:13-18",
        "Their throat is an open sepulchre; with their tongues they have used deceit; the poison of asps is under their lips: Whose mouth is full of cursing and bitterness: Their feet are swift to shed blood: Destruction and misery are in their ways: And the way of peace have they not known: There is no fear of God before their eyes."
      ),
      v(
        "hebrews-11-6",
        "Without faith it is impossible to please him",
        "Hebrews 11:6",
        "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him."
      ),
      v(
        "romans-8-13",
        "If ye live after the flesh ye shall die",
        "Romans 8:13",
        "For if ye live after the flesh, ye shall die: but if ye through the Spirit do mortify the deeds of the body, ye shall live."
      ),
    ],
  },
  {
    id: "what-is-faith",
    title: "What is faith?",
    description:
      "Taking God at His Word; the just shall live by faith; faith is the substance of things hoped for; propitiation through faith in his blood.",
    audienceSuggestions: ["seekers", "new believers", "mature"],
    situationSuggestions: ["teaching", "evangelism", "devotion"],
    knowledgeLevel: "any",
    verses: [
      v(
        "romans-1-16",
        "Gospel is the power of God unto salvation to every one that believeth",
        "Romans 1:16",
        "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek."
      ),
      v(
        "hebrews-11-6-faith",
        "Without faith it is impossible to please him",
        "Hebrews 11:6",
        "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him."
      ),
      v(
        "romans-1-17",
        "The just shall live by faith",
        "Romans 1:17",
        "For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith."
      ),
      v(
        "hebrews-11-1-3",
        "Faith is the substance of things hoped for",
        "Hebrews 11:1-3",
        "Now faith is the substance of things hoped for, the evidence of things not seen. For by it the elders obtained a good report. Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear."
      ),
      v(
        "romans-3-23-26",
        "Justified by grace through faith in his blood",
        "Romans 3:23-26",
        "For all have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus: Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness for the remission of sins that are past, through the forbearance of God; To declare, I say, at this time his righteousness: that he might be just, and the justifier of him which believeth in Jesus."
      ),
      v(
        "1-corinthians-13-5-8a",
        "Love believeth all things; love never faileth",
        "1 Corinthians 13:5-8a",
        "Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; Rejoiceth not in iniquity, but rejoiceth in the truth; Beareth all things, believeth all things, hopeth all things, endureth all things. Love never faileth:"
      ),
    ],
  },
  {
    id: "who-is-the-lord-jesus-christ",
    title: "Who is the Lord Jesus Christ?",
    description:
      "The Word was God; all things made by him; the Word was made flesh; image of the invisible God; I AM; Before Abraham was, I am.",
    audienceSuggestions: ["seekers", "new believers", "mixed"],
    situationSuggestions: ["evangelism", "teaching", "worship"],
    knowledgeLevel: "any",
    verses: [
      v(
        "john-1-1-3",
        "In the beginning was the Word; all things made by him",
        "John 1:1-3",
        "In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made."
      ),
      v(
        "john-1-14",
        "The Word was made flesh, and dwelt among us",
        "John 1:14",
        "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth."
      ),
      v(
        "colossians-1-15-16",
        "Image of the invisible God; all things created by him",
        "Colossians 1:15,16",
        "Who is the image of the invisible God, the firstborn of every creature: For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him."
      ),
      v(
        "genesis-2-4",
        "LORD GOD made the earth and the heavens",
        "Genesis 2:4",
        "These are the generations of the heavens and of the earth when they were created, in the day that the LORD GOD made the earth and the heavens."
      ),
      v(
        "exodus-3-14",
        "I AM THAT I AM",
        "Exodus 3:14",
        "And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you."
      ),
      v(
        "john-8-58",
        "Before Abraham was, I am",
        "John 8:58",
        "Jesus said unto them, Verily, verily, I say unto you, Before Abraham was, I am."
      ),
      v(
        "exodus-6-2-3",
        "I am the LORD; by my name JEHOVAH was I not known to them",
        "Exodus 6:2,3",
        "And God spake unto Moses, and said unto him, I am the LORD: And I appeared unto Abraham, unto Isaac, and unto Jacob, by the name of God Almighty, but by my name JEHOVAH was I not known to them."
      ),
    ],
  },
  {
    id: "why-adam-eve-ate-forbidden-fruit",
    title: "Why did Adam and Eve eat the forbidden fruit?",
    description:
      "Eve deceived; Adam not deceived but chose to eat; by one man sin entered; death passed upon all; eyes opened, nakedness, fig leaves.",
    audienceSuggestions: ["new believers", "mature", "mixed"],
    situationSuggestions: ["teaching"],
    knowledgeLevel: "beginner",
    verses: [
      v(
        "1-timothy-2-13-14",
        "Adam was not deceived; the woman being deceived",
        "1 Timothy 2:13,14",
        "For Adam was first formed, then Eve. And Adam was not deceived, but the woman being deceived was in the transgression."
      ),
      v(
        "genesis-3-6",
        "She took of the fruit thereof, and did eat; he did eat",
        "Genesis 3:6",
        "And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat."
      ),
      v(
        "romans-5-12",
        "By one man sin entered into the world, and death by sin",
        "Romans 5:12",
        "Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned:"
      ),
      v(
        "genesis-3-7",
        "Eyes opened; knew they were naked; made aprons",
        "Genesis 3:7",
        "And the eyes of them both were opened, and they knew that they were naked; and they sewed fig leaves together, and made themselves aprons."
      ),
      v(
        "genesis-2-25",
        "They were both naked and were not ashamed",
        "Genesis 2:25",
        "And they were both naked, the man and his wife, and were not ashamed."
      ),
    ],
  },
  {
    id: "why-christ-gave-himself-to-die",
    title: "Why did the Lord Jesus Christ give Himself to die for us?",
    description:
      "God spared not his Son; free gift by grace; much more they which receive abundance of grace shall reign in life; old man crucified; he that is dead is freed from sin.",
    audienceSuggestions: ["seekers", "new believers", "mature"],
    situationSuggestions: ["evangelism", "teaching", "worship"],
    knowledgeLevel: "any",
    verses: [
      v(
        "romans-5-15-17",
        "Free gift by grace; reign in life by one, Jesus Christ",
        "Romans 5:15-17",
        "But not as the offence, so also is the free gift. For if through the offence of one many be dead, much more the grace of God, and the gift by grace, which is by one man, Jesus Christ, hath abounded unto many. For if by one man's offence death reigned by one; much more they which receive abundance of grace and of the gift of righteousness shall reign in life by one, Jesus Christ."
      ),
      v(
        "romans-5-18",
        "Free gift came upon all men unto justification of life",
        "Romans 5:18",
        "Therefore as by the offence of one judgment came upon all men to condemnation; even so by the righteousness of one the free gift came upon all men unto justification of life."
      ),
      v(
        "genesis-2-16-17",
        "Of the tree of the knowledge of good and evil thou shalt not eat",
        "Genesis 2:16,17",
        "And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat: But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die."
      ),
      v(
        "ezekiel-18-4",
        "The soul that sinneth, it shall die",
        "Ezekiel 18:4",
        "Behold, all souls are mine; as the soul of the father, so also the soul of the son is mine: the soul that sinneth, it shall die."
      ),
      v(
        "romans-6-6-8",
        "Our old man crucified; freed from sin; live with him",
        "Romans 6:6-8",
        "Knowing this, that our old man is crucified with him, that the body of sin might be destroyed, that henceforth we should not serve sin. For he that is dead is freed from sin. Now if we be dead with Christ, we believe that we shall also live with him:"
      ),
      v(
        "1-corinthians-13-6-8a",
        "Love and the work of the Cross",
        "1 Corinthians 13:6-8a",
        "Rejoiceth not in iniquity, but rejoiceth in the truth; Beareth all things, believeth all things, hopeth all things, endureth all things. Love never faileth:"
      ),
    ],
  },
  {
    id: "only-way-saved-age-of-grace",
    title: "What is the only way to be saved during this present age of grace?",
    description:
      "Believe the gospel: Christ died for our sins, buried, rose again; power of God unto salvation to every one that believeth; not by works, repentance, or baptism for salvation.",
    audienceSuggestions: ["seekers", "new believers", "mixed"],
    situationSuggestions: ["evangelism", "teaching"],
    knowledgeLevel: "any",
    verses: [
      v(
        "1-corinthians-15-1-4",
        "Gospel by which ye are saved; Christ died, buried, rose",
        "1 Corinthians 15:1-4",
        "Moreover, brethren, I declare unto you the gospel which I preached unto you, which also ye have received, and wherein ye stand; By which also ye are saved, if ye keep in memory what I preached unto you, unless ye have believed in vain. For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures:"
      ),
      v(
        "romans-1-16-saved",
        "Power of God unto salvation to every one that believeth",
        "Romans 1:16",
        "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek."
      ),
      v(
        "hebrews-11-6-saved",
        "Without faith it is impossible to please him",
        "Hebrews 11:6",
        "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him."
      ),
      v(
        "1-corinthians-15-5-6",
        "Seen of Cephas, then of the twelve; five hundred brethren",
        "1 Corinthians 15:5,6",
        "And that he was seen of Cephas, then of the twelve: After that, he was seen of above five hundred brethren at once;"
      ),
    ],
  },
  {
    id: "saved-in-old-testament-times",
    title: "How were people saved in Old Testament times?",
    description:
      "Abraham justified by faith + nothing; they which are of faith are the children of Abraham; Abel offered; Noah prepared an ark; faith plus sacrifice under Law.",
    audienceSuggestions: ["mature", "mixed"],
    situationSuggestions: ["teaching"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "galatians-3-7",
        "They which are of faith, the same are the children of Abraham",
        "Galatians 3:7",
        "Know ye therefore that they which are of faith, the same are the children of Abraham."
      ),
      v(
        "genesis-13-16",
        "I will make thy seed as the dust of the earth",
        "Genesis 13:16",
        "And I will make thy seed as the dust of the earth: so that if a man can number the dust of the earth, then shall thy seed also be numbered."
      ),
      v(
        "genesis-15-5",
        "So shall thy seed be (as the stars)",
        "Genesis 15:5",
        "And he brought him forth abroad, and said, Look now toward heaven, and tell the stars, if thou be able to number them: and he said unto him, So shall thy seed be."
      ),
      v(
        "hebrews-11-4",
        "By faith Abel offered a more excellent sacrifice",
        "Hebrews 11:4",
        "By faith Abel offered unto God a more excellent sacrifice than Cain, by which he obtained witness that he was righteous, God testifying of his gifts: and by it he being dead yet speaketh."
      ),
      v(
        "hebrews-11-7",
        "By faith Noah prepared an ark",
        "Hebrews 11:7",
        "By faith Noah, being warned of God of things not seen as yet, moved with fear, prepared an ark to the saving of his house; by the which he condemned the world, and became heir of the righteousness which is by faith."
      ),
    ],
  },
  {
    id: "attributes-of-satan",
    title: "What are the attributes of Satan?",
    description:
      "Transforms into angel of light; god of this world; master counterfeiter; a liar and father of it; his ministers as ministers of righteousness; principalities and powers.",
    audienceSuggestions: ["believers", "mature"],
    situationSuggestions: ["teaching", "correction"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "2-corinthians-11-14",
        "Satan transformed into an angel of light",
        "2 Corinthians 11:14",
        "And no marvel; for Satan himself is transformed into an angel of light."
      ),
      v(
        "2-corinthians-11-15",
        "His ministers transformed as ministers of righteousness",
        "2 Corinthians 11:15",
        "Therefore it is no great thing if his ministers also be transformed as the ministers of righteousness; whose end shall be according to their works."
      ),
      v(
        "genesis-1-28",
        "Have dominion (Adam lost it; Satan picked it up)",
        "Genesis 1:28",
        "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth."
      ),
      v(
        "matthew-4-8-9",
        "All these things will I give thee, if thou wilt fall down and worship me",
        "Matthew 4:8,9",
        "Again, the devil taketh him up into an exceeding high mountain, and sheweth him all the kingdoms of the world, and the glory of them; And saith unto him, All these things will I give thee, if thou wilt fall down and worship me."
      ),
      v(
        "john-8-44",
        "He is a liar, and the father of it",
        "John 8:44",
        "Ye are of your father the devil, and the lusts of your father ye will do. He was a murderer from the beginning, and abode not in the truth, because there is no truth in him. When he speaketh a lie, he speaketh of his own: for he is a liar, and the father of it."
      ),
      v(
        "genesis-3-4-5",
        "Ye shall not surely die; ye shall be as gods",
        "Genesis 3:4,5",
        "And the serpent said unto the woman, Ye shall not surely die: For God doth know that in the day ye eat thereof, then your eyes shall be opened, and ye shall be as gods, knowing good and evil."
      ),
      v(
        "2-corinthians-4-3-4",
        "God of this world hath blinded the minds of them which believe not",
        "2 Corinthians 4:3,4",
        "But if our gospel be hid, it is hid to them that are lost: In whom the god of this world hath blinded the minds of them which believe not, lest the light of the glorious gospel of Christ, who is the image of God, should shine unto them."
      ),
      v(
        "exodus-7-10-12",
        "Magicians did in like manner; Aaron's rod swallowed up their rods",
        "Exodus 7:10-12",
        "And Moses and Aaron went in unto Pharaoh, and they did so as the LORD had commanded: and Aaron cast down his rod before Pharaoh, and before his servants, and it became a serpent. Then Pharaoh also called the wise men and the sorcerers: and they also did in like manner with their enchantments. For they cast down every man his rod, and they became serpents: but Aaron's rod swallowed up their rods."
      ),
      v(
        "ephesians-6-11-12",
        "Put on the whole armour of God; wrestle against principalities",
        "Ephesians 6:11,12",
        "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil. For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places."
      ),
      v(
        "1-john-4-1-3",
        "Try the spirits; spirit of antichrist",
        "1 John 4:1,3",
        "Beloved, believe not every spirit, but try the spirits whether they are of God: because many false prophets are gone out into the world. And every spirit that confesseth not that Jesus Christ is come in the flesh is not of God: and this is that spirit of antichrist, whereof ye have heard that it should come; and even now already is it in the world."
      ),
    ],
  },
  {
    id: "three-temptations",
    title: "What are the three temptations?",
    description:
      "Lust of the flesh, lust of the eyes, pride of life; Christ tempted in all points like as we are; God will make a way to escape.",
    audienceSuggestions: ["new believers", "mature", "mixed"],
    situationSuggestions: ["teaching", "counsel"],
    knowledgeLevel: "beginner",
    verses: [
      v(
        "1-corinthians-15-45-47",
        "First man Adam; last Adam quickening spirit",
        "1 Corinthians 15:45-47",
        "And so it is written, The first man Adam was made a living soul; the last Adam was made a quickening spirit. Howbeit that was not first which is spiritual, but that which is natural; and afterward that which is spiritual. The first man is of the earth, earthy: the second man is the Lord from heaven."
      ),
      v(
        "1-john-2-15-16",
        "Lust of the flesh, lust of the eyes, pride of life",
        "1 John 2:15,16",
        "Love not the world, neither the things that are in the world. If any man love the world, the love of the Father is not in him. For all that is in the world, the lust of the flesh, and the lust of the eyes, and the pride of life, is not of the Father, but is of the world."
      ),
      v(
        "hebrews-4-14-15",
        "High priest touched with the feeling of our infirmities; tempted like as we are",
        "Hebrews 4:14,15",
        "Seeing then that we have a great high priest, that is passed into the heavens, Jesus the Son of God, let us hold fast our profession. For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin."
      ),
      v(
        "1-corinthians-10-13",
        "God will with the temptation make a way to escape",
        "1 Corinthians 10:13",
        "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it."
      ),
    ],
  },
  {
    id: "two-kinds-of-death",
    title: "What are the two kinds of death mentioned in the Bible?",
    description:
      "Physical death: separation of soul and spirit from body. Spiritual death: separation from God for eternity (second death). Death reigned from Adam; we were dead in sins, made alive in Christ.",
    audienceSuggestions: ["new believers", "mature", "mixed"],
    situationSuggestions: ["teaching", "evangelism"],
    knowledgeLevel: "beginner",
    verses: [
      v(
        "romans-5-14",
        "Death reigned from Adam to Moses",
        "Romans 5:14",
        "Nevertheless death reigned from Adam to Moses, even over them that had not sinned after the similitude of Adam's transgression, who is the figure of him that was to come."
      ),
      v(
        "ephesians-2-1-5",
        "Dead in sins; quickened together with Christ",
        "Ephesians 2:1-5",
        "And you hath he quickened, who were dead in trespasses and sins; Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved;)"
      ),
      v(
        "genesis-3-7-fig",
        "Fig leaves; hid from presence of God",
        "Genesis 3:7,8",
        "And the eyes of them both were opened, and they knew that they were naked; and they sewed fig leaves together, and made themselves aprons. And they heard the voice of the LORD God walking in the garden in the cool of the day: and Adam and his wife hid themselves from the presence of the LORD God amongst the trees of the garden."
      ),
      v(
        "proverbs-14-12",
        "A way which seemeth right unto a man; end thereof are the ways of death",
        "Proverbs 14:12",
        "There is a way which seemeth right unto a man, but the end thereof are the ways of death."
      ),
      v(
        "john-3-19-20",
        "Men loved darkness; every one that doeth evil hateth the light",
        "John 3:19,20",
        "And this is the condemnation, that light is come into the world, and men loved darkness rather than light, because their deeds were evil. For every one that doeth evil hateth the light, neither cometh to the light, lest his deeds should be reproved."
      ),
    ],
  },
  {
    id: "where-do-we-go-when-we-die",
    title: "Where do we go when we die?",
    description:
      "Believers: absent from body, present with the Lord. Unbelievers: hell (torment), then Great White Throne, then lake of fire (second death). Paradise was in heart of earth; now in heaven.",
    audienceSuggestions: ["seekers", "new believers", "mature"],
    situationSuggestions: ["evangelism", "teaching", "comfort"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "revelation-20-13-14",
        "Death and hell delivered up the dead; cast into lake of fire",
        "Revelation 20:13,14",
        "And the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them: and they were judged every man according to their works. And death and hell were cast into the lake of fire. This is the second death."
      ),
      v(
        "matthew-12-40",
        "Son of man three days and three nights in the heart of the earth",
        "Matthew 12:40",
        "For as Jonas was three days and three nights in the whale's belly; so shall the Son of man be three days and three nights in the heart of the earth."
      ),
      v(
        "luke-16-22-26",
        "Lazarus in Abraham's bosom; rich man in torment; great gulf fixed",
        "Luke 16:22-26",
        "And it came to pass, that the beggar died, and was carried by the angels into Abraham's bosom: the rich man also died, and was buried; And in hell he lift up his eyes, being in torments, and seeth Abraham afar off, and Lazarus in his bosom. And he cried and said, Father Abraham, have mercy on me, and send Lazarus, that he may dip the tip of his finger in water, and cool my tongue; for I am tormented in this flame. But Abraham said, Son, remember that thou in thy lifetime receivedst thy good things, and likewise Lazarus evil things: but now he is comforted, and thou art tormented. And beside all this, between us and you there is a great gulf fixed: so that they which would pass from hence to you cannot; neither can they pass to us, that would come from thence."
      ),
      v(
        "ephesians-4-8-10",
        "He ascended; he also descended first into the lower parts of the earth",
        "Ephesians 4:8-10",
        "Wherefore he saith, When he ascended up on high, he led captivity captive, and gave gifts unto men. (Now that he ascended, what is it but that he also descended first into the lower parts of the earth? He that descended is the same also that ascended up far above all heavens, that he might fill all things.)"
      ),
      v(
        "2-corinthians-5-8",
        "Absent from the body, present with the Lord",
        "2 Corinthians 5:8",
        "We are confident, I say, and willing rather to be absent from the body, and to be present with the Lord."
      ),
      v(
        "revelation-20-14-15",
        "Lake of fire; second death; book of life",
        "Revelation 20:14,15",
        "And death and hell were cast into the lake of fire. This is the second death. And whosoever was not found written in the book of life was cast into the lake of fire."
      ),
      v(
        "matthew-11-23-24",
        "More tolerable for Sodom in the day of judgment",
        "Matthew 11:23,24",
        "And thou, Capernaum, which art exalted unto heaven, shalt be brought down to hell: for if the mighty works, which have been done in thee, had been done in Sodom, it would have remained until this day. But I say unto you, That it shall be more tolerable for the land of Sodom in the day of judgment, than for thee."
      ),
    ],
  },
  {
    id: "unsaved-judged-by-works",
    title: "Will people that are not saved be judged according to their works?",
    description:
      "Yes. Great White Throne: dead judged out of the things written in the books, according to their works; book of life; then lake of fire.",
    audienceSuggestions: ["believers", "mature", "mixed"],
    situationSuggestions: ["teaching", "evangelism"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "revelation-19-11-12",
        "Faithful and True; eyes as a flame of fire",
        "Revelation 19:11,12",
        "And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True, and in righteousness he doth judge and make war. His eyes were as a flame of fire, and on his head were many crowns; and he had a name written, that no man knew, but he himself."
      ),
      v(
        "revelation-20-12",
        "Books opened; dead judged according to their works",
        "Revelation 20:12",
        "And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works."
      ),
      v(
        "revelation-20-13",
        "Death and hell delivered up the dead; judged every man according to works",
        "Revelation 20:13",
        "And the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them: and they were judged every man according to their works."
      ),
      v(
        "romans-1-18-20",
        "Without excuse",
        "Romans 1:18-20",
        "For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who hold the truth in unrighteousness; Because that which may be known of God is manifest in them; for God hath shewed it unto them. For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse:"
      ),
    ],
  },
  {
    id: "saved-judged-by-works",
    title: "Will people that are saved be judged according to their works?",
    description:
      "Bema seat: for rewards, not heaven or hell. Gold, silver, precious stones vs wood, hay, stubble; he shall receive a reward; if work burned, he shall suffer loss but himself saved.",
    audienceSuggestions: ["believers", "mature"],
    situationSuggestions: ["teaching", "devotion"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "2-corinthians-5-10",
        "We must all appear before the judgment seat of Christ",
        "2 Corinthians 5:10",
        "For we must all appear before the judgment seat of Christ; that every one may receive the things done in his body, according to that he hath done, whether it be good or bad."
      ),
      v(
        "1-corinthians-3-9-15",
        "God's building; gold, silver, precious stones; wood, hay, stubble; reward or loss",
        "1 Corinthians 3:9-15",
        "For we are labourers together with God: ye are God's husbandry, ye are God's building. According to the grace of God which is given to me, as a wise masterbuilder, I have laid the foundation, and another buildeth thereon. But let every man take heed how he buildeth thereupon. For other foundation can no man lay than that is laid, which is Jesus Christ. Now if any man build upon this foundation gold, silver, precious stones, wood, hay, stubble; Every man's work shall be made manifest: for the day shall declare it, because it shall be revealed by fire; and the fire shall try every man's work of what sort it is. If any man's work abide which he hath built thereupon, he shall receive a reward. If any man's work shall be burned, he shall suffer loss: but he himself shall be saved; yet so as by fire."
      ),
      v(
        "1-corinthians-9-24-26",
        "So run, that ye may obtain; incorruptible crown",
        "1 Corinthians 9:24-26",
        "Know ye not that they which run in a race run all, but one receiveth the prize? So run, that ye may obtain. And every man that striveth for the mastery is temperate in all things. Now they do it to obtain a corruptible crown; but we an incorruptible. I therefore so run, not as uncertainly; so fight I, not as one that beateth the air:"
      ),
    ],
  },
  {
    id: "when-did-god-lose-the-human-race",
    title: "When did God lose the human race?",
    description:
      "When Adam sinned. Redemption: buy back; exagorazo—take out of slave market; God bought us, cleansed us, and expects our willing service as bond-slaves.",
    audienceSuggestions: ["mature", "mixed"],
    situationSuggestions: ["teaching"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "romans-3-24",
        "Justified freely by his grace through the redemption",
        "Romans 3:24",
        "Being justified freely by his grace through the redemption that is in Christ Jesus:"
      ),
      v(
        "romans-5-12-lost",
        "By one man sin entered; death passed upon all",
        "Romans 5:12",
        "Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned:"
      ),
    ],
  },
  {
    id: "one-reason-god-sends-to-hell",
    title: "What is the one reason God sends someone to Hell?",
    description:
      "Unbelief. Gospel hid to them that believe not; god of this world hath blinded their minds. Salvation offered to all; they refuse to believe; they go to lake of fire for unbelief.",
    audienceSuggestions: ["seekers", "believers", "mature"],
    situationSuggestions: ["evangelism", "teaching"],
    knowledgeLevel: "any",
    verses: [
      v(
        "2-corinthians-4-3-4",
        "Gospel hid; god of this world blinded minds of them that believe not",
        "2 Corinthians 4:3,4",
        "But if our gospel be hid, it is hid to them that are lost: In whom the god of this world hath blinded the minds of them which believe not, lest the light of the glorious gospel of Christ, who is the image of God, should shine unto them."
      ),
      v(
        "1-corinthians-15-1-4-gospel",
        "Gospel by which ye are saved",
        "1 Corinthians 15:1-4",
        "Moreover, brethren, I declare unto you the gospel which I preached unto you, which also ye have received, and wherein ye stand; By which also ye are saved, if ye keep in memory what I preached unto you, unless ye have believed in vain. For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures;"
      ),
    ],
  },
  {
    id: "god-love-consign-to-lake-of-fire",
    title: "How can God Who is love and mercy consign people to the Lake of Fire?",
    description:
      "He has done everything to keep them from it: the Word, the gospel, believe. They refuse to believe; He is just. God's love at the Cross leaves no room for removing the eternal doom of the lost.",
    audienceSuggestions: ["seekers", "mature", "mixed"],
    situationSuggestions: ["evangelism", "teaching"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "isaiah-61-10",
        "He hath clothed me with the garments of salvation",
        "Isaiah 61:10",
        "I will greatly rejoice in the LORD, my soul shall be joyful in my God; for he hath clothed me with the garments of salvation, he hath covered me with the robe of righteousness,"
      ),
      v(
        "romans-1-16-love",
        "Gospel is the power of God unto salvation to every one that believeth",
        "Romans 1:16",
        "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek."
      ),
      v(
        "1-corinthians-15-1-4-love",
        "Christ died for our sins, buried, rose again",
        "1 Corinthians 15:1-4",
        "Moreover, brethren, I declare unto you the gospel which I preached unto you, which also ye have received, and wherein ye stand; By which also ye are saved, if ye keep in memory what I preached unto you, unless ye have believed in vain. For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures;"
      ),
      v(
        "romans-10-9-10",
        "Confess with thy mouth; believe in thine heart",
        "Romans 10:9,10",
        "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation."
      ),
      v(
        "1-thessalonians-4-14",
        "If we believe that Jesus died and rose again",
        "1 Thessalonians 4:14",
        "For if we believe that Jesus died and rose again, even so them also which sleep in Jesus will God bring with him."
      ),
      v(
        "revelation-20-14-15-love",
        "Death and hell cast into lake of fire; book of life",
        "Revelation 20:14,15",
        "And death and hell were cast into the lake of fire. This is the second death. And whosoever was not found written in the book of life was cast into the lake of fire."
      ),
    ],
  },
  {
    id: "atheists-and-non-believers",
    title: "What else does the Bible say about atheists and non-believers?",
    description:
      "Believe in God vs believe God; when they knew God they glorified him not; fool hath said in his heart no God (says no to God); destitute of faith.",
    audienceSuggestions: ["seekers", "mature", "mixed"],
    situationSuggestions: ["evangelism", "teaching"],
    knowledgeLevel: "any",
    verses: [
      v(
        "romans-1-21",
        "When they knew God, they glorified him not",
        "Romans 1:21",
        "Because that, when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened."
      ),
      v(
        "titus-2-11",
        "Grace of God that bringeth salvation hath appeared to all men",
        "Titus 2:11",
        "For the grace of God that bringeth salvation hath appeared to all men,"
      ),
      v(
        "psalm-14-1",
        "The fool hath said in his heart, No, God",
        "Psalm 14:1",
        "The fool hath said in his heart, There is no God. They are corrupt, they have done abominable works, there is none that doeth good."
      ),
      v(
        "ephesians-5-15",
        "Not as fools, but as wise",
        "Ephesians 5:15",
        "See then that ye walk circumspectly, not as fools, but as wise,"
      ),
    ],
  },
  {
    id: "eternal-heaven-and-earth",
    title: "How does the Bible describe the eternal heaven and earth?",
    description:
      "New heaven and new earth; first passed away; no more sea; new Jerusalem; no more death, sorrow, crying, pain; nations; gates of pearl; street of gold; no temple; Lord God and the Lamb are the temple.",
    audienceSuggestions: ["believers", "mature", "mixed"],
    situationSuggestions: ["teaching", "comfort", "devotion"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "revelation-21-1",
        "New heaven and new earth; first passed away; no more sea",
        "Revelation 21:1",
        "And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea."
      ),
      v(
        "2-peter-3-10-11",
        "Heavens shall pass away; elements shall melt; earth burned up",
        "2 Peter 3:10,11",
        "But the day of the Lord will come as a thief in the night; in the which the heavens shall pass away with a great noise, and the elements shall melt with fervent heat, the earth also and the works that are therein shall be burned up. Seeing then that all these things shall be dissolved, what manner of persons ought ye to be in all holy conversation and godliness,"
      ),
      v(
        "revelation-21-2-4",
        "New Jerusalem; God shall wipe away all tears",
        "Revelation 21:2-4",
        "And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband. And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God. And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away."
      ),
      v(
        "john-14-2",
        "In my Father's house are many mansions",
        "John 14:2",
        "In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you."
      ),
      v(
        "revelation-21-7-8",
        "He that overcometh shall inherit; fearful and unbelieving in lake of fire",
        "Revelation 21:7,8",
        "He that overcometh shall inherit all things; and I will be his God, and he shall be my son. But the fearful, and unbelieving, and the abominable, and murderers, and whoremongers, and sorcerers, and idolaters, and all liars, shall have their part in the lake which burneth with fire and brimstone: which is the second death."
      ),
      v(
        "revelation-21-12-16",
        "Twelve gates; twelve tribes; twelve foundations; apostles; city foursquare",
        "Revelation 21:12-16",
        "And had a wall great and high, and had twelve gates, and at the gates twelve angels, and names written thereon, which are the names of the twelve tribes of the children of Israel: On the east three gates; on the north three gates; on the south three gates; and on the west three gates. And the wall of the city had twelve foundations, and in them the names of the twelve apostles of the Lamb. And he that talked with me had a golden reed to measure the city, and the gates thereof, and the wall thereof. And the city lieth foursquare, and the length is as large as the breadth: and he measured the city with the reed, twelve thousand furlongs. The length and the breadth and the height of it are equal."
      ),
      v(
        "revelation-21-19-21",
        "Foundations garnished with precious stones; gates of pearl; street of gold",
        "Revelation 21:19-21",
        "And the foundations of the wall of the city were garnished with all manner of precious stones. The first foundation was jasper; the second, sapphire; the third, a chalcedony; the fourth, an emerald; The fifth, sardonyx; the sixth, sardius; the seventh, chrysolite; the eighth, beryl; the ninth, a topaz; the tenth, a chrysoprasus; the eleventh, a jacinth; the twelfth, an amethyst. And the twelve gates were twelve pearls; every several gate was of one pearl: and the street of the city was pure gold, as it were transparent glass."
      ),
      v(
        "revelation-21-22-24",
        "No temple; Lord God Almighty and the Lamb are the temple; nations",
        "Revelation 21:22-24",
        "And I saw no temple therein: for the Lord God Almighty and the Lamb are the temple of it. And the city had no need of the sun, neither of the moon, to shine in it: for the glory of God did lighten it, and the Lamb is the light thereof. And the nations of them which are saved shall walk in the light of it: and the kings of the earth do bring their glory and honour into it."
      ),
      v(
        "revelation-21-25-27",
        "Gates not shut; no night; they which are written in the Lamb's book of life",
        "Revelation 21:25-27",
        "And the gates of it shall not be shut at all by day: for there shall be no night there. And they shall bring the glory and honour of the nations into it. And there shall in no wise enter into it any thing that defileth, neither whatsoever worketh abomination, or maketh a lie: but they which are written in the Lamb's book of life."
      ),
    ],
  },
  {
    id: "how-should-we-pray",
    title: "How should we pray?",
    description:
      "Prayer and supplication with thanksgiving; let your requests be made known; peace of God shall keep your hearts; to the Father in the name of the Lord Jesus; commit thy way unto the LORD.",
    audienceSuggestions: ["new believers", "believers", "mature"],
    situationSuggestions: ["devotion", "teaching", "comfort"],
    knowledgeLevel: "any",
    verses: [
      v(
        "philippians-4-6-7",
        "Be careful for nothing; prayer with thanksgiving; peace of God",
        "Philippians 4:6,7",
        "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus."
      ),
      v(
        "psalm-37-5",
        "Commit thy way unto the LORD; he shall bring it to pass",
        "Psalm 37:5",
        "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass."
      ),
      v(
        "psalm-37-7",
        "Rest in the LORD; wait patiently for him",
        "Psalm 37:7",
        "Rest in the LORD, and wait patiently for him: fret not thyself because of him who prospereth in his way, because of the man who bringeth wicked devices to pass."
      ),
      v(
        "ephesians-5-20",
        "Giving thanks always in the name of our Lord Jesus Christ",
        "Ephesians 5:20",
        "Giving thanks always for all things unto God and the Father in the name of our Lord Jesus Christ;"
      ),
      v(
        "colossians-3-17",
        "Do all in the name of the Lord Jesus, giving thanks to God",
        "Colossians 3:17",
        "And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him."
      ),
      v(
        "1-timothy-2-1-5",
        "Supplications, prayers, intercessions, thanks for all men; one mediator",
        "1 Timothy 2:1-5",
        "I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men; For kings, and for all that are in authority; that we may lead a quiet and peaceable life in all godliness and honesty. For this is good and acceptable in the sight of God our Saviour; Who will have all men to be saved, and to come unto the knowledge of the truth. For there is one God, and one mediator between God and men, the man Christ Jesus;"
      ),
      v(
        "romans-8-26",
        "Spirit helpeth our infirmities; maketh intercession for us",
        "Romans 8:26",
        "Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered."
      ),
      v(
        "colossians-3-13",
        "Forbearing and forgiving one another as Christ forgave you",
        "Colossians 3:13",
        "Forbearing one another, and forgiving one another, if any man have a quarrel against any: even as Christ forgave you, so also do ye."
      ),
    ],
  },
  {
    id: "how-know-really-saved",
    title: "How can I know that I'm really saved?",
    description:
      "Led by the Spirit of God; Spirit of adoption, Abba Father; witness of the Spirit; love for the Word and for God's people; believe the gospel of 1 Corinthians 15:1-4.",
    audienceSuggestions: ["new believers", "believers", "mixed"],
    situationSuggestions: ["counsel", "teaching", "comfort"],
    knowledgeLevel: "any",
    verses: [
      v(
        "romans-8-14-15",
        "Led by the Spirit; Spirit of adoption; Abba, Father",
        "Romans 8:14,15",
        "For as many as are led by the Spirit of God, they are the sons of God. For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father."
      ),
      v(
        "colossians-1-4",
        "Faith in Christ Jesus and love to all the saints",
        "Colossians 1:4",
        "Since we heard of your faith in Christ Jesus, and of the love which ye have to all the saints,"
      ),
      v(
        "1-corinthians-15-1-4-assurance",
        "Gospel wherein ye stand; by which ye are saved",
        "1 Corinthians 15:1-4",
        "Moreover, brethren, I declare unto you the gospel which I preached unto you, which also ye have received, and wherein ye stand; By which also ye are saved, if ye keep in memory what I preached unto you, unless ye have believed in vain. For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures:"
      ),
    ],
  },
  {
    id: "key-to-understanding-bible",
    title: "What is the key to understanding the Bible?",
    description:
      "Pay attention to whom a particular Scripture is written; do not confuse Israel with the Church. For Church-age believers, God speaks through Paul's writings (Romans through Philemon). Rightly divide the word of truth.",
    audienceSuggestions: ["new believers", "mature", "mixed"],
    situationSuggestions: ["teaching", "devotion"],
    knowledgeLevel: "moderate",
    verses: [
      v(
        "2-timothy-2-15",
        "Rightly dividing the word of truth",
        "2 Timothy 2:15",
        "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."
      ),
      v(
        "galatians-5-8",
        "This persuasion cometh not of him that calleth you",
        "Galatians 5:8",
        "This persuasion cometh not of him that calleth you."
      ),
    ],
  },
];
