# Project: bascom16.github.io

Personal portfolio/academic website for Brian Bascom.

## Tech Stack
- **Framework:** Next.js (App Router) with static export
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Content:** Markdown files in `/content/`, parsed with `gray-matter` + `remark`
- **Deployment:** GitHub Actions → GitHub Pages (static `out/` directory)

## Commands
- `npm run dev` — local dev server (http://localhost:3000)
- `npm run build` — production build (outputs to `out/`)
- `npm run lint` — run ESLint

## Structure
- `src/app/` — Next.js App Router pages and layouts
- `content/` — Markdown content files with YAML frontmatter
- `public/` — Static assets (images, documents)
- `out/` — Build output (gitignored)

## Conventions
- Use Tailwind utility classes for all styling; no separate CSS files beyond globals.css
- All content is markdown-driven: site sections pull from `/content/*.md`
- Static export only (`output: 'export'` in next.config.mjs) — no server-side features
- No `next/image` optimization (images are unoptimized for static hosting)

## Content Format
Markdown files use YAML frontmatter:
```yaml
---
title: "Page Title"
date: "2026-03-15"
description: "Brief description"
---

Content body here...
```
