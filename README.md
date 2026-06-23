# Devesh Sai Pandian G — Portfolio

A research-lab-style portfolio built with Next.js (App Router) + Tailwind CSS.
Signature feature: an interactive walkthrough of real FloodSense-VLM Flood-VQA
test examples, including a documented model limitation.

## Before you do anything else

Two placeholders need your real info — search-and-replace these in
`src/data/content.ts`:

- `email: "devesh.example@email.com"` -> your real email
- `links.github` / `links.linkedin` -> your real profile URLs

Also double check the **publication status line** in `src/data/content.ts`
(`credentials` array) and `src/components/Research.tsx` — I wrote these as
"co-authored research" rather than claiming a specific acceptance status,
because I could not verify from the PDF alone whether the paper is
submitted / under review / accepted / published, or at which venue. Update
this to the real, current status.

## Run it locally

Requires Node.js 18.18+ (or 20+).

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the homepage is the entire site (single page,
anchor-linked sections).

## Project structure

```
src/
  app/
    layout.tsx        — fonts (Fraunces/Inter/JetBrains Mono), metadata
    globals.css        — design tokens (colors, focus states, etc.)
    page.tsx           — assembles all sections
  components/
    Header.tsx         — nav + mobile menu
    Hero.tsx            — opening thesis statement
    Credentials.tsx     — publication/innovation strip
    Projects.tsx        — the 4 project "field notes" + SectionHeading helper
    Console.tsx          — FloodSense-VLM interactive demo (signature element)
    Research.tsx         — "how I work" narrative section
    Background.tsx       — internships + skills
    Contact.tsx           — closing CTA + footer
  data/
    content.ts            — ALL site copy lives here; edit this file to update
                             projects, experience, skills, bio, links
```

To add/edit/remove a project, edit the `projects` array in
`src/data/content.ts` — the layout (metrics column, stack tags, demo link)
is handled automatically by `Projects.tsx`.

## About the live demo (Console.tsx)

The FloodSense-VLM console is a **scripted walkthrough**, not a live model
endpoint — it replays the real qualitative examples reported in your paper's
evaluation section (Fig. 3–6), including the documented quantitative-
reasoning failure case (the "100 square kilometers" answer). This is
intentional: it's honest about being a demonstration, and showing a real
documented limitation alongside the wins reads as more credible to a
technical reviewer than only showing successes.

If you later deploy the actual fine-tuned model behind an API, you can
swap the scripted `scenarios` array in `Console.tsx` for a real `fetch()`
call — the UI (scene picker, streaming text, confidence bar) is already
built to support that.

## Deploying

### Option A: Vercel (recommended, easiest)

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Vercel auto-detects Next.js — no config needed. Click Deploy.
4. You'll get a live URL (e.g. `your-portfolio.vercel.app`) in ~1 minute.
5. Optional: add a custom domain in Vercel's project settings.

### Option B: Netlify

1. Push to GitHub.
2. https://app.netlify.com/start → import repo.
3. Build command: `npm run build`. Netlify's Next.js runtime plugin
   handles the rest automatically once it detects a Next.js app.

### Option C: Self-host / any Node server

```bash
npm run build
npm run start
```

Runs on port 3000 by default. Put behind a reverse proxy (nginx/Caddy) for
a custom domain + HTTPS.

## Notes on fonts

This project uses `next/font/google` to load Fraunces, Inter, and JetBrains
Mono — this requires network access to Google Fonts at build time, which is
normal for any machine with internet access (your laptop, Vercel, Netlify,
etc.). If you ever build in a network-restricted sandbox, you'll see a fetch
error — that's environment-specific, not a bug in the code.
