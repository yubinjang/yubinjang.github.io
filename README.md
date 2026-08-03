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
3. ~~Replace the CV PDF.~~ Done 2026-08-03. `cv/Jang_Yubin_CV.pdf` is now the 2026-08-03 export
   from `Jang_CV.docx` and says EDUC 816. To refresh it again, export from the docx and
   overwrite this file. The two links on the page pick it up with no edit to the HTML.

## Deploying to GitHub Pages

The Drive folder cannot be the git repo. Drive's sync client and `git` both want to manage the
same files, and they corrupt each other's state. The shipping copy is a plain local clone at
`~/Documents/yubinjang-site`, already initialized, committed, and pointed at the remote.

Remaining steps, in this order:

1. Create an **empty** repo at [github.com/new](https://github.com/new) named exactly
   `yubinjang.github.io`. The name must match the account name or GitHub serves it as a project
   repo at a subpath instead of at the root. Set it **Public**, and leave README, `.gitignore`,
   and license unchecked so nothing collides with the local history.
2. Push:
   ```bash
   git -C ~/Documents/yubinjang-site push -u origin main
   ```
   Username `yubinjang`, password is a personal access token with write access to contents. The
   system git config already enables the macOS keychain helper, so it is only asked once.
3. Settings → Pages → Source "Deploy from a branch" → `main`, folder `/ (root)` → Save.

Live at **https://yubinjang.github.io** a minute or two later.

To publish later edits, copy them from Drive into the clone with the `rsync` line at the bottom
of this file, then commit and push.

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
