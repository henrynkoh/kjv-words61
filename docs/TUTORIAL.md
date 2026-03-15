# KJV Words — Tutorial

Step-by-step guide from zero to a running app and your first topic.

---

## Part 1: Get the project and run it

### Step 1.1 — Open the project folder

Open a terminal and go to the project:

```bash
cd path/to/kjv-words
```

(Replace `path/to/kjv-words` with your actual folder path.)

### Step 1.2 — Install dependencies

```bash
npm install
```

Wait until it finishes. You only need to do this once (or after pulling new changes).

### Step 1.3 — Start the dev server

```bash
npm run dev
```

You should see something like:

```
▲ Next.js 15.x.x
- Local: http://localhost:3000
```

### Step 1.4 — Open in the browser

1. Open a browser.
2. Go to **http://localhost:3000**.
3. You should see the home page: “Rightly Dividing the Word of Truth” and a list of **24 topics**.

---

## Part 2: Use the app

### Step 2.1 — Browse topics

On the home page you’ll see **24 topic cards**, for example:

- How do we know the Bible is really the inspired word of God?
- What are the attributes of God?
- What is faith?
- What is the only way to be saved during this present age of grace?
- … and 20 more

Each card shows a short description and how many verses it has.

### Step 2.2 — Open a topic

1. Click **“How do we know the Bible is really the inspired word of God?”** (or any topic).
2. The URL will change to something like `/topic/bible-inspired-word-of-god`.
3. You’ll see the topic title, description, and a list of verse cards.

### Step 2.3 — Read a verse card

Each card has:

- **Theme** — e.g. “Seventy weeks determined upon thy people and Jerusalem”
- **Korean** (or English) — summary of the verse
- **Reference** — e.g. “Daniel 9:24”
- **KJV text** — full verse in quotes

Use these to choose verses for different people and situations.

### Step 2.4 — Go back to all topics

Click **“All topics”** at the top of the topic page to return to the home page.

---

## Part 3: Try another topic (optional)

1. From the home page, click **“How should we pray?”**.
2. You’ll see verses about thanksgiving, requests, peace of God, and praying in Jesus’ name.
3. Click **“All topics”** again to return.

---

## Part 4: Build for production (optional)

When you’re ready to deploy or run a production build:

```bash
npm run build
npm start
```

Then open **http://localhost:3000** again. The app will run in production mode.

---

## What you’ve learned

- You installed dependencies and started the dev server.
- You opened the app and saw the **24-topic** list.
- You opened a topic and read verses (theme, Korean/English, reference, KJV).
- You navigated back to the topic list.
- Optionally, you ran a production build.

---

## Next steps

- **Manual** — [MANUAL.md](MANUAL.md): full description of all 24 topics, pages, and project structure.
- **Quick start** — [QUICKSTART.md](QUICKSTART.md): minimal steps to run the app.
- **Promo copy** — [ADS.md](ADS.md): ready-made text for Facebook, Instagram, Threads, blogs, newsletter, and email.
