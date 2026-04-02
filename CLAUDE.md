# CLAUDE.md - Project Principles

## Technical Rules
- **Framework**: Next.js (App Router) with TypeScript strict mode
- **Styling**: Tailwind CSS
- **Content**: MDX files in `/content/`
- **Components**: React components in `/components/`
- **Fonts**: `next/font/google` — no external font loading
- **Images**: `next/image` for optimized loading

## Design System
- See `DESIGN.md` for color roles, component usage guide, and do's/don'ts

## Design Constraints
- **Dark mode only** — no light theme toggle
- **Pixel font** (Press Start 2P) for headings only, never body text
- **Body font**: Space Grotesk for all readable text
- **Mono font**: JetBrains Mono for code blocks and metadata
- **WCAG AA contrast** minimum on all text
- **CRT effects** are decorative only — must not interfere with readability or interaction
- **Mobile-first** responsive design

## Content Rules
- **No em-dashes** (`—`) in user-facing copy. Use periods, commas, or rewrite instead.
- Case studies follow **Challenge > Approach > Impact** structure
- All images require descriptive alt text
- Content lives in `/content/case-studies/` and `/content/projects/`

## Hosting
- Code on GitHub
- Deployed via Vercel (free tier)
- No secrets in repo
- Custom domain added later via Vercel dashboard
