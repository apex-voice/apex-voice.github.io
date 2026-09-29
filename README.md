# APEX-Voice project website

A static, dependency-free project page for **APEX-Voice: Can Voice Agents Complete Professional Workflows Through Full-Duplex Interaction?**

## Contents

- `index.html` — main project page
- `blog.html` — accessible research blog / explainer subpage
- `css/styles.css` — all styling
- `js/main.js` — mobile navigation + BibTeX copy button
- `assets/figures/` — optimized figures used by the website
- `assets/favicon.svg` — site icon
- `CITATION.bib` — starter BibTeX entry

## Preview locally

From this directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

You can also double-click `index.html`, but a local HTTP server is recommended because it matches GitHub Pages behavior more closely.

## Publish on GitHub Pages

If this directory is the root of your `apex-voice.github.io` repository, commit and push the files to the branch used by GitHub Pages (normally `main`). No build step is required.

## Links to update before launch

The hero currently shows **Paper / Code / Dataset** as “coming soon,” because URLs were not supplied. In `index.html`, replace those disabled spans with normal anchors when the links are ready, e.g.:

```html
<a class="button" href="YOUR_PAPER_URL">📄 Paper</a>
<a class="button" href="YOUR_CODE_URL">💻 Code</a>
<a class="button" href="YOUR_DATASET_URL">🤗 Dataset</a>
```

Also update `CITATION.bib` and the BibTeX block in `index.html` once the arXiv / publication metadata is available.

## Notes

- The site uses only vanilla HTML, CSS, and JavaScript.
- It is responsive and works on GitHub Pages without a framework.
- Figures are compressed WebP exports of the supplied paper figures.
- The page copy and reported metrics are grounded in the supplied ICLR 2027 manuscript source.
