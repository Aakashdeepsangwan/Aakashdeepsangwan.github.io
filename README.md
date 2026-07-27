# Portfolio Website

A personal portfolio site built with React, Vite, and Tailwind CSS. Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) + [react-icons](https://react-icons.github.io/react-icons/) for icons

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Customizing Content

All site content (name, bio, skills, projects, social links) lives in one place:

```
src/data/content.js
```

Edit that file to update the site — no need to touch component code for text changes.

To add a downloadable resume, drop a PDF into `public/` (e.g. `public/resume.pdf`) and set `resumeUrl: '/resume.pdf'` in `content.js`.

## Building for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages whenever you push to `main`.

One-time setup after pushing this repo to GitHub:

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or re-run the workflow) — the site will be live at `https://<username>.github.io/` (if the repo is named `<username>.github.io`) or `https://<username>.github.io/<repo-name>/` otherwise.

If deploying to a project page (not `<username>.github.io`), update the `base` field in `vite.config.js` to `/<repo-name>/`.
