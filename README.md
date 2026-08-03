---
title: "Personal Academic Website"
updated: 2026-08-03
source_of_truth: "this folder (index.html + assets/). CV PDF is a copy, see below."
model: https://akhurana.com
---

# Personal academic website

Single-page scrolling site modeled on [akhurana.com](https://akhurana.com), built from
`Jang_Yubin_CV.pdf` (2026-07-22). Plain HTML, CSS, and vanilla JavaScript. No build step, no
dependencies, no framework.

```
website/
├── index.html                  # all content lives here
├── assets/
│   ├── css/style.css
│   ├── js/main.js              # nav, scroll spy, reveal, publication tabs
│   └── img/
│       ├── headshot.jpg        # ⚠️ YOU ADD THIS
│       └── placeholder.svg     # shown automatically until headshot.jpg exists
├── cv/Jang_Yubin_CV.pdf        # copy of ~/Downloads/Jang_Yubin_CV.pdf
├── .nojekyll                   # tells GitHub Pages to serve files as-is
└── README.md
```

## Sections

Hero → 01 About me → 02 Research agenda → 03 Publications (tabbed) → 04 Teaching and research
training → 05 Awards and fellowships → 06 Service and professional leadership → Let's connect.

## Before it goes live

1. ~~Add your headshot.~~ Done. `assets/img/headshot.jpg` is a 4:5 crop of
   `YubinJang, profile.jpeg` from OneDrive `Yubin Jang/personal info/`, exported at 800 × 1000
   and 75 KB. To swap it, overwrite that file with the same shape. `placeholder.svg` still
   stands in automatically if the file ever goes missing.
2. **Fill in the LinkedIn URL.** `index.html` currently has a bare `https://www.linkedin.com/`
   in the contact list. Replace it or delete that `<li>`.
3. **Replace the CV PDF.** `cv/Jang_Yubin_CV.pdf` is the 2026-07-22 export and it still says
   EDUC 867. Export a fresh PDF from `Jang_CV.docx` (see below), save it over
   `cv/Jang_Yubin_CV.pdf`, and the two links on the page pick it up with no edit to the HTML.

## Deploying to GitHub Pages

The site is already Pages-ready. The one wrinkle is that this folder sits inside Google Drive,
and Drive's sync client and `git` both want to manage the same files. Cloning into a normal
local folder avoids the fight.

```bash
mkdir -p ~/Documents/yubinjang-site && cp -R "/Users/ybjang/Library/CloudStorage/GoogleDrive-ybjang@udel.edu/My Drive/LLM-EduWiki/website/." ~/Documents/yubinjang-site/
```

Then, in `~/Documents/yubinjang-site`:

```bash
git init -b main && git add -A && git commit -m "Personal academic website"
```

Create an empty repo on GitHub named `ybjang.github.io` (the name matters, it gives you
`https://ybjang.github.io` with no subpath), then:

```bash
git remote add origin https://github.com/ybjang/ybjang.github.io.git && git push -u origin main
```

In the repo on GitHub, go to Settings → Pages, set Source to "Deploy from a branch", branch
`main`, folder `/ (root)`. The site is live in a minute or two.

To use a custom domain such as `yubinjang.com`, buy the domain, add a file named `CNAME`
containing just the domain, and point the DNS A records at GitHub's Pages IPs per their docs.

Treat the Drive copy as the drafting copy and the git clone as what ships, or work only in the
clone and stop syncing the Drive one. Keeping both live invites divergence.

## CV versions, as of 2026-08-03

Three copies are in play and only one is current.

| File | Date | EDUC number |
| --- | --- | --- |
| `Jang_CV.docx` (OneDrive, `Yubin Jang/personal info/`) | 2026-07-30 | **816**, correct. Source of truth. |
| `Jang_CV.pdf` (same folder) | 2026-07-29 | 867. Exported the day before the fix. Stale. |
| `cv/Jang_Yubin_CV.pdf` (this site) | 2026-07-22 | 867. Stale. |

The docx is already right. What is missing is a fresh PDF export from it, which then replaces
both PDFs. Until that happens the site links a CV that contradicts the site.

The site also says **co-developer and instructor** for EDUC 816. The CV splits the same fact
across a "Guest Lecturer" line and a separate "Course Co-Developer" line under Course
Development, which matches the decision recorded in
[job-market/materials/README.md](../job-market/materials/README.md). The site does not repeat the
CV's "Rejected" grants block, which is a CV convention that reads oddly on a public page.

## Editing

Everything is in `index.html`, in the order it appears on the page. Adding a publication means
copying one `<li class="pub">` block and changing the text. Colors, spacing, and type scale are
CSS custom properties at the top of `assets/css/style.css`.

Local preview:

```bash
python3 -m http.server 8000 --directory "/Users/ybjang/Library/CloudStorage/GoogleDrive-ybjang@udel.edu/My Drive/LLM-EduWiki/website"
```

Then open `http://localhost:8000`.
