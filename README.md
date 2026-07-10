# Reema Sharma — Portfolio

A personal portfolio built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a new project (do this every time you have new work to add)

All project data lives in **one file**: `src/data/projects.ts`. You never need to touch any layout, component, or page code to add, edit, or reorder a project — the cards, badges, tags, and buttons are all generated automatically from this array.

1. Open `src/data/projects.ts`.
2. Copy one of the existing objects in the `projects` array.
3. Paste it as a new entry and fill in the fields:

```ts
{
  id: "unique-slug-for-this-project",       // any unique string, used as the React key
  type: "case-study" | "teardown",          // controls the badge color/label
  title: "Project title",
  subtitle: "Short subtitle shown under the title",
  description: "1-3 sentence summary of the project.",
  keyInsight: "The single most important takeaway — shown as a pull-quote.",
  tags: ["Tag One", "Tag Two", "Tag Three"],
  link: "https://link-to-the-project-or-pdf",
  linkLabel: "Button text, e.g. 'View Case Study'",
}
```

4. Save the file, commit, and push. Vercel will redeploy automatically (see below).

To remove a project, delete its object from the array. To reorder projects, reorder the objects — they render top to bottom, left to right.

## Project structure

```
src/
  app/
    layout.tsx      # global <html>/<body>, fonts, metadata
    page.tsx         # assembles Hero, WorkSection, Contact, Footer
    globals.css       # theme tokens, base styles
  components/
    Hero.tsx          # top section: name, role, bio, CTAs
    WorkSection.tsx    # "Selected Work" heading + renders ProjectCard per project
    ProjectCard.tsx    # single project card (badge, tags, key insight, button)
    Contact.tsx         # "Let's connect" section
    Footer.tsx           # copyright line
    Button.tsx            # shared pill-shaped button (solid/outline variants)
    FadeIn.tsx             # scroll-triggered fade/rise animation wrapper
  data/
    projects.ts             # <-- all project content lives here
```

## Deploying to Vercel (free)

1. Push this project to a new GitHub repository (see commands below).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, select your repo, and click **Deploy**. No configuration is needed — Vercel auto-detects Next.js.
4. Every future `git push` to your main branch automatically redeploys the live site.

### Push to GitHub

```bash
git add -A
git commit -m "Build portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Deploy on Vercel via CLI (alternative to the dashboard)

```bash
npm i -g vercel
vercel login
vercel --prod
```

After the first deploy, just run `vercel --prod` again (or push to GitHub) whenever you want to publish updates.
