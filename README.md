# Jungmin Shin Academic Homepage

GitHub Pages source for **https://c16267.github.io**.

## Deploy

1. Create a public GitHub repository named exactly `c16267.github.io`.
2. Upload the contents of this folder to the repository root.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/(root)`.
6. The site will appear at `https://c16267.github.io` after GitHub Pages finishes building.

### Command line

```bash
cd c16267.github.io
git init
git add .
git commit -m "Build academic homepage"
git branch -M main
git remote add origin https://github.com/c16267/c16267.github.io.git
git push -u origin main
```

## Main files

- `index.md` — home page
- `research.md` — research and complete publication record from the CV
- `talks.md` — invited talks, contributed talks, and posters
- `teaching.md` — teaching history and course offerings
- `cv.md` — CV summary and PDF download
- `files/CV_Jungmin_Shin.pdf` — compiled CV
- `images/profile.jpg` — profile photo
- `_config.yml` — site settings
- `assets/css/main.css` — visual styling

To update the photo, replace `images/profile.jpg`. To update CV content, edit the corresponding Markdown page and replace `files/CV_Jungmin_Shin.pdf` with the new PDF.
