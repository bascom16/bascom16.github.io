/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

`output: 'export'` makes `next build` produce a static `out/` directory instead of a Node server. `images.unoptimized: true` is required because GitHub Pages can't run the Next.js image optimization server.

## 4. Project Structure

Match TRLarsen's layout:
```
bascom16.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── content/            # Markdown files for site content
│   ├── bio.md
│   ├── news.md
│   └── research.md
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── public/             # Static assets (images, resume PDF, etc.)
├── CLAUDE.md
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
