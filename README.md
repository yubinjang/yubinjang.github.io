# yubinjang.github.io

Personal academic website for **Yubin Jang**, Ph.D. candidate in Education and Social Policy at
the University of Delaware.

Live at **[yubinjang.github.io](https://yubinjang.github.io)**

## Built with

Plain HTML, CSS, and vanilla JavaScript. No build step, no dependencies, no framework. Served
directly by GitHub Pages from `main`.

Type is [Spectral](https://fonts.google.com/specimen/Spectral) and
[IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans).

## Structure

```
├── index.html          all content
├── assets/
│   ├── css/style.css   design tokens are the custom properties at the top
│   ├── js/main.js      nav, scroll spy, reveal, publication tabs
│   └── img/
├── cv/                 CV as PDF
└── .nojekyll           serve files as-is, no Jekyll processing
```

## Running it locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

Colors, spacing, and the type scale are CSS custom properties at the top of `assets/css/style.css`,
so the whole palette changes from one block. The page is responsive, works without JavaScript,
and its text clears WCAG AA contrast.
