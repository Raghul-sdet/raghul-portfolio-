# Raghul L — Portfolio

A static one-page portfolio site. No build step — just HTML, CSS, and a tiny
bit of JS.

## Files

- `index.html` — all content
- `style.css` — all styling
- `script.js` — scroll-reveal animation only
- `Raghul_L_Resume.pdf` — downloadable resume (linked from the "Download
  Resume" button and the footer)

## Host it free on GitHub Pages

1. Create a new GitHub repo (e.g. `raghul-portfolio`).
2. Upload these files to the root of that repo — drag-and-drop works fine
   on github.com, or:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/Raghul-sdet/raghul-portfolio.git
   git push -u origin main
   ```
   Make sure `Raghul_L_Resume.pdf` is uploaded too (not just the code files)
   — the "Download Resume" button won't work without it.
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

## Resume download

The "Download résumé" link in the header points to `resume.pdf`. Add your
resume PDF to the repo root with that exact filename for the link to work.

## Theme

Light / Dark / Auto (system) — the choice is remembered per-visitor via
localStorage. All colors live as CSS variables at the top of `style.css`
under `:root` (light) and `html[data-theme="dark"]` (dark).
