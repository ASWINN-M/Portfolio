# Aswin — Portfolio

Personal portfolio site for **Aswin** — AI Agent Developer / AI Engineer.

**Live site:** [https://ASWINN-M.github.io/Portfolio/](https://ASWINN-M.github.io/Portfolio/)

## What's on the site

- Hero intro with AI-focused branding
- About section (focus areas, location, tech stack)
- Selected projects with links to GitHub
- Project details section (problem → approach → outcome)
- Experience timeline (AI Engineering, ML Engineering, AI Agent Developer)
- Contact form (EmailJS) + resume download in the navbar

## Featured projects

| Project | Repo |
| --- | --- |
| The Hybrid Agent *(in progress)* | Private |
| Multilingual OCR & Translation | [OCR](https://github.com/ASWINN-M/OCR) |
| RAG Document Intelligence | [RAG-2](https://github.com/ASWINN-M/RAG-2) |
| Emotion Detection from Text | [EmotionsBasedOnTexts](https://github.com/ASWINN-M/EmotionsBasedOnTexts) |
| Healthcare AI Agent | [Healthcare-Agent](https://github.com/ASWINN-M/Healthcare-Agent) |

## Tech stack

- React 19 + Vite 7
- Tailwind CSS v4
- Motion (animations)
- React Three Fiber / Drei (3D astronaut)
- EmailJS (contact form)

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints. With GitHub Pages base path configured, that is usually:

`http://127.0.0.1:5173/Portfolio/`

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

Pushes to `main` run [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

1. Repo **Settings → Pages → Source** = **GitHub Actions**
2. Wait for the workflow to finish
3. Visit https://ASWINN-M.github.io/Portfolio/

`vite.config.js` sets `base: '/Portfolio/'` for project-page hosting.

## Resume

The navbar **Resume** button downloads [`public/Aswin_Resume.pdf`](public/Aswin_Resume.pdf).

## Contact

Configure EmailJS in `src/components/components/Contact.jsx` (service / template / public key).
