# Portfolio Update Workflow

## Quick Commands

| Task | Command |
|------|---------|
| Start dev server | `npm start` |
| Deploy to live site | `npm run deploy` |
| Commit & push to GitHub | `git add . && git commit -m "message" && git push` |

---

## Updating Content

### 1. Edit Files

| File | What to Edit |
|------|--------------|
| `src/pages/Overview.js` | Bio, tagline, contact links |
| `src/pages/Resume.js` | Experience, education, skills |
| `src/data/projects.js` | Add or edit projects |
| `src/App.css` | Styling and layout |

### 2. Preview Locally

```bash
npm start
```

Opens at `http://localhost:3000`. Changes auto-refresh.

### 3. Deploy to Live Site

```bash
npm run deploy
```

This builds and pushes to the `gh-pages` branch. Your site updates at:
**https://NathnaelMek.github.io/nati-mekuria/**

---

## Adding a New Project

Edit `src/data/projects.js` and add an entry:

```js
{
  id: "my-project-id",
  title: "Project Title",
  category: "personal",  // or "work"
  image: null,           // or require("../images/project.jpg")
  summary: "Short description shown on the card.",
  body: "Full description shown on the project detail page.",
  images: []             // optional array of additional images
}
```

---

## Git Workflow

### Save Changes to GitHub (main branch)

```bash
git add .
git commit -m "Describe what you changed"
git push
```

> Note: Pushing to `main` saves your code but does NOT update the live site.

### Deploy to Live Site

```bash
npm run deploy
```

This is the only command that updates the live site.

---

## Full Workflow Example

```bash
# 1. Make your edits to files

# 2. Preview locally
npm start

# 3. When happy, commit to GitHub
git add .
git commit -m "Updated resume skills"
git push

# 4. Deploy to live site
npm run deploy
```

---

## File Structure

```
src/
├── App.js           # Main app with routing
├── App.css          # All styles
├── index.js         # Entry point
├── index.css        # Global styles (fonts, reset)
├── data/
│   └── projects.js  # Project data
├── pages/
│   ├── Overview.js  # Home/bio page
│   ├── Resume.js    # Resume page
│   ├── Projects.js  # Projects list page
│   └── ProjectDetail.js  # Individual project page
└── headshot_linkedin.jpg  # Profile photo
```
