# Yonggang Li — Academic website

A personal academic website based on the supplied CV, with a clean two-column profile inspired by https://xinyizhangnus.github.io/. Includes research, selected publications, teaching, education, awards, contact details, and a downloadable CV.

## Preview

Open `index.html` in a browser. No installation or build is required. Alternatively, run `python -m http.server 8000` inside this folder and visit http://localhost:8000.

## Publish on GitHub Pages

1. Sign in to GitHub. Create or open a repository named **YOUR-USERNAME.github.io**, replacing YOUR-USERNAME with your actual GitHub username. If your username is `Yongganglinus`, use `Yongganglinus.github.io`.
2. Extract the supplied ready-to-upload ZIP. Upload the **contents** of the extracted folder, including `index.html`, `assets`, `uploads`, and `.nojekyll`, to the repository's `main` branch. `index.html` must be at the top level of the repository, not inside another folder. Upload the extracted files, not the ZIP itself.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then choose **main** and **/(root)**. Click **Save**.
4. GitHub will show the published address in Settings → Pages once deployment completes. Your user-site address will be `https://YOUR-USERNAME.github.io/`.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

### If replacing the original Hugo template

This is a standalone HTML/CSS/JavaScript replacement for the starter in the original ZIP. It does not use Hugo, Node, Go, or a build workflow. Keep a backup of your existing repository first. Replace the previous website files with this folder's contents and remove the old Hugo deployment workflows in `.github/workflows/` so they cannot overwrite this site's deployment. Switch Pages to **Deploy from a branch** as described above. Do not merge this site into the Hugo `content` folder.

You can also host it in a project repository: the site uses relative asset links, so it works at `https://YOUR-USERNAME.github.io/REPOSITORY/` too.

## Edit the website

| What to change | File |
| --- | --- |
| Biography, job-search message, education, papers, teaching, contact email | `index.html` |
| Colors, font sizes, spacing, mobile layout | `assets/styles.css` |
| Theme preference and active navigation | `assets/site.js` |
| Portrait | Replace `assets/yonggang-li.jpg` |
| Downloadable CV | Replace `uploads/Yonggang-Li-CV.pdf` using the same filename |
| Browser icon | `assets/favicon.svg` |

Search for the relevant heading or paper title in `index.html` to edit it. All academic content is in HTML, so it remains readable with JavaScript disabled. There are no external fonts, trackers, or third-party scripts.

## Content notes

- Academic details come from the supplied CV. The site describes the Ph.D. as expected in November 2026 and uses a general academic-opportunities message without assuming a job-market cycle.
- The working-paper list and selected-publication list follow the CV's classifications. “Huma Trust” is corrected to “Human Trust,” consistent with the publication title elsewhere in the CV. No acceptance status, findings, paper PDFs, or profile URLs have been invented.
- Publication years follow the CV, including the 2018 date it gives for “Low-rank sparse subspace for spectral clustering.” Update the entry if you prefer the final issue year.
- The CV download is an unchanged copy of your supplied PDF, renamed for the website. It includes the phone and referee information already present in that PDF. Replace it with a public version if you want different contact details in the download.
- The portrait is resized, compressed, and stripped of source metadata. Your original files and starter ZIP remain unchanged outside this website folder.
- The teaching statement is not included in the public download because the requested website is based on the CV.
- Update the Ph.D. status and job-search text as your circumstances change. Add verified Google Scholar, ORCID, or LinkedIn URLs directly in the profile links if desired.
