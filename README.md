# Raghul L — Portfolio

A static one-page portfolio site. No build step — just HTML, CSS, and a tiny
bit of JS.

## Files

- `index.html` — all content
- `style.css` — all styling
- `script.js` — scroll-reveal animation only

## Host it free on GitHub Pages

1. Create a new GitHub repo (e.g. `raghul-portfolio`).
2. Upload these 3 files (`index.html`, `style.css`, `script.js`) to the root
   of that repo — drag-and-drop works fine on github.com, or:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/Raghul-sdet/raghul-portfolio.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings** → **Pages** (left sidebar).
4. Under **Build and deployment**, set **Source** to **Deploy from a
   branch**, branch = `main`, folder = `/ (root)`. Click **Save**.
5. Wait 1–2 minutes. Your site will be live at:
   ```
   https://Raghul-sdet.github.io/raghul-portfolio/
   ```

## Editing content

Everything is in `index.html` — experience, projects, skills, and education
are plain HTML you can edit directly. Update the "Experience" section
whenever your job details change, and add new entries to "Projects" the same
way the existing one is structured.
