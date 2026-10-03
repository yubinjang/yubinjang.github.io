# yubinjang.github.io

Personal academic website for **Yubin Jang**, Ph.D. candidate in Education and Social Policy at
the University of Delaware.

Live at **[yubinjang.github.io](https://yubinjang.github.io)**

## Built with

Plain HTML, CSS, and vanilla JavaScript. No build step, no dependencies, no framework. Served
directly by GitHub Pages from `main`.

Type is [Roboto](https://fonts.google.com/specimen/Roboto).

## Structure

```
├── index.html          about: who, education, research directions, selected awards
├── publications/       articles, chapters, reports, and presentations, by type and status
├── teaching/           courses taught, guest lectures, and mentoring
├── resources/          a tabbed list of links for other researchers
├── assets/
│   ├── css/style.css   design tokens are the custom properties at the top
│   ├── js/main.js      mobile menu, "show all" on long lists, tabs
│   └── img/
├── cv/                 CV and resume as PDF
└── .nojekyll           serve files as-is, no Jekyll processing
```

## Running it locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

Colors, spacing, and the type scale are CSS custom properties at the top of `assets/css/style.css`.
Every page works without JavaScript, and the text clears WCAG AA contrast.
