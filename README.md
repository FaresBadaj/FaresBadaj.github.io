# faresbadaj.github.io

Personal portfolio of **Fares Badaj** — red team operator and penetration tester.

Static, dependency-free site (HTML + CSS + a little vanilla JS). No build step, no trackers.

## Structure

```
index.html          single-page site
assets/styles.css   design system, light + dark themes, aurora background
assets/main.js      theme toggle, scroll reveals
assets/fares-badaj.jpg  hero portrait
assets/favicon.svg  monogram favicon
```

## Local preview

Open `index.html` directly, or serve the folder:

```powershell
python -m http.server 8080
```

Then visit http://localhost:8080

## Editing

- **Content** lives in `index.html` (sections: hero, work, recognition, certifications, writing, about, contact).
- **Colors and type** live in the `:root` and `[data-theme="dark"]` blocks of `assets/styles.css`.
- Update the FlagYard numbers in the “recognition” section when they change.

## Deploy

Hosted with GitHub Pages from the `main` branch (root). Push to `main` and the site updates automatically.
