# CLAUDE.md - Project Principles

## Technical Rules
- **Framework**: Next.js (App Router) with TypeScript strict mode
- **Styling**: Tailwind CSS v4 (`@theme inline` tokens in `app/globals.css`)
- **Content**: MDX files in `/content/`
- **Components**: React components in `/components/`
- **Fonts**: `next/font/google` — no external font loading
- **Images**: `next/image` for optimized loading

## Design System
- See `DESIGN.md` for color roles, typography rules, and do's/don'ts
- Source of truth for token values: `app/globals.css`
- Source of truth for the broader brief: `/handoff/` (gitignored, reference only)

## Design Direction (editorial / warm-paper)
- **Both light + dark modes.** Defaults to `prefers-color-scheme`, persisted via `localStorage` (`theme` key). Toggle lives in the header.
- **Single accent: ochre.** Light `#A8823F`, dark `#C49558`. Never introduce a second accent hue.
- **No pure black on pure white.** Warm-paper bg in both modes (`#FAF6EC` light, `#1A1813` dark).
- **No CRT, glassmorphism, gradients, blur, neon glows, scanlines, or sky-period theming.** Those belonged to the prior pixel direction and were removed.

## Typography
- **Fraunces** — display + serif body. WONK axis is intentionally on (`'opsz' 48, 'SOFT' 80, 'WONK' 1` body; `'opsz' 144` display). Apply via `data-ff="serif"` or `data-ff="display"`, or the `.font-serif` / `.font-display` classes.
- **Inter** — body sans, weights 400/500/600. Default body font.
- **JetBrains Mono** — eyebrows, labels, numerics, captions.
- **Italic Fraunces** is reserved for: (1) one or two key words in an H1, (2) display-size pull-arrows (`→`), (3) marginalia pull-quotes. Never for full sentences of body copy.
- **WCAG AA contrast** minimum on all text, in both modes.

## Motion
- The H1 underscore cursor blink (`.cursor-blink`) is the only system animation.
- Subtle fade-ins on scroll at most. No parallax, scroll-jacking, custom cursors, carousels, or heavy load animations.
- Hover states stay subtle: a hairline shift, never a glow.
- Respect `prefers-reduced-motion` everywhere.

## Content Rules
- **No em-dashes** (`—`) in user-facing copy. Use periods, commas, or rewrite instead.
- Case studies follow **Challenge > Approach > Impact** structure.
- All images require descriptive alt text.
- Content lives in `/content/case-studies/` and `/content/projects/`.

## Voice — non-negotiable
- Bio language (use this or a near-paraphrase wherever a bio appears):
  > Currently at Microsoft, where I've led design across Azure CXS, Resiliency, and Customer Health. Before that, scaled an enterprise platform past 20M devices as the founding designer. AI-native, drawn to mission work, still shipping the software myself.
- **Never narrate the IC/manager transition on the site.** Don't say "former manager," "previously managed," "stepped back from management." Don't water down leadership verbs in past-tense content.
- Avoid: "passionate," "thought leader," "leveraged," "synergy," "ecosystem."

## Hosting
- Code on GitHub
- Deployed via Vercel (free tier)
- No secrets in repo
- Custom domain added later via Vercel dashboard
