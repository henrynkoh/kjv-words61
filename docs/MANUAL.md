# KJV Words — User Manual

Guide to using and understanding the KJV Words project.

---

## 1. What is KJV Words?

**KJV Words** is a web app that organizes King James Version (KJV) Bible verses by **24 topics**, each with a **theme** and **Korean or English summary**. It is for:

- Discussing and spreading words of truth
- Choosing verses by **audience**, **situation**, and **level of Bible knowledge**
- Personal study, teaching, and evangelism

The app follows the style of [kjv-faith-ai](https://github.com/henrynkoh/kjv-faith-ai) and centers on *rightly dividing the word of truth* (2 Timothy 2:15 KJV).

---

## 2. Topics (24 categories)

| Topic | What it covers |
|-------|----------------|
| **How do we know the Bible is inspired?** | Prophecy, Daniel, Revelation, 2 Peter 1:21, unity of Scripture |
| **Attributes of God** | Sovereign, grace, love, infinite, omnipresent, omniscient, Col 1:15 |
| **Why did God create us?** | Eternal purpose, manifold wisdom, objects of His love |
| **Is an unbeliever an enemy of God?** | Carnal mind, enmity, cannot please God, Romans 8 |
| **What is faith?** | Taking God at His Word; just shall live by faith; propitiation |
| **Who is the Lord Jesus Christ?** | Word was God, image of invisible God, I AM, Col 1 |
| **Why did Adam and Eve eat the forbidden fruit?** | Eve deceived, Adam not deceived; one man sin entered |
| **Why did Christ give Himself to die for us?** | Free gift, justification, old man crucified, Romans 5–6 |
| **Only way to be saved (age of grace)** | Believe the gospel: died, buried, rose; 1 Cor 15:1–4 |
| **How were people saved in OT times?** | Abraham by faith; Abel, Noah; faith + sacrifice |
| **Attributes of Satan** | Angel of light, god of this world, liar, 2 Cor 11, Eph 6 |
| **Three temptations** | Lust of flesh, lust of eyes, pride of life; 1 John 2, Heb 4 |
| **Two kinds of death** | Physical; spiritual (second death); Eph 2, Rom 5 |
| **Where do we go when we die?** | Believers with Lord; unbelievers hell → lake of fire |
| **Will unsaved be judged by works?** | Great White Throne; books; Revelation 20 |
| **Will saved be judged by works?** | Bema seat; rewards; gold, silver, precious stones |
| **When did God lose the human race?** | Adam; redemption; slave market |
| **One reason God sends to Hell** | Unbelief; gospel hid; 2 Cor 4 |
| **God of love & Lake of Fire** | He did everything; they refused to believe |
| **Atheists and non-believers** | Believe in God vs believe God; Psalm 14, Romans 1 |
| **Eternal heaven and earth** | New Jerusalem, no more death or pain, Revelation 21–22 |
| **How should we pray?** | Thanksgiving, requests, peace; in Jesus’ name; Phil 4, Eph 5 |
| **How can I know I’m really saved?** | Led by Spirit; love Word and saints; 1 Cor 15 gospel |
| **Key to understanding the Bible** | Rightly divide; to whom written; Israel vs Church |

---

## 3. Using the app

### Home page (`/`)

- Title and 2 Timothy 2:15 quote
- List of **24 topic cards**: title, short description, verse count
- Click a card to open that topic

### Topic page (`/topic/[id]`)

- Topic title and description
- List of verses. Each card shows:
  - **Theme** (short title)
  - **Korean** (or English) summary
  - **Reference** (e.g. Daniel 9:24, Romans 8:7)
  - **KJV text** in quotes

Use these cards to pick verses for different audiences and situations.

### Navigation

- **Sidebar**: “KJV Words” links to home; sections for About, Topics, Features, Verse sample, Footer
- **Topic page**: “All topics” link returns to home
- **Footer**: Tagline and 2 Timothy 2:15

---

## 4. Running the project (developer)

### Commands

| Command | Purpose |
|--------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Run ESLint |

### Project layout

- `src/app/` — Next.js App Router (layout, pages)
- `src/components/` — React components (LandingPage, VerseCard)
- `src/lib/verses.ts` — Types and helpers; re-exports `topics` from topics-data
- `src/lib/topics-data.ts` — All 24 topic categories and verse data
- `docs/` — Manual, tutorial, quick start, ads

### Changing verses or topics

Edit **`src/lib/topics-data.ts`**:

- `topicsData` — array of `TopicCategory` (id, title, description, audienceSuggestions, situationSuggestions, knowledgeLevel, verses)
- Helper `v(id, theme, ref, text, korean?)` builds each verse
- Each verse: `id`, `theme`, `korean` (defaults to theme), `ref`, `text`

Save; the dev server will reload.

---

## 5. Technical stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Geist** font, **lucide-react** icons

No database or API keys required; all content is in `topics-data.ts`.

---

## 6. License

MIT. See repository for details.

---

For a short setup guide, see [QUICKSTART.md](QUICKSTART.md).  
For a walkthrough from zero, see [TUTORIAL.md](TUTORIAL.md).
