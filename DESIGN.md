# DESIGN.md

> This file documents design intent and conventions. For actual token values, see `app/globals.css`.
> For component APIs, see the TypeScript interfaces in `/components/ui/`.

## 1. Design Identity

Retro cyberpunk terminal aesthetic with time-of-day sky theming. Dark-mode only, neon accents on deep backgrounds. Pixel art headings create contrast with clean, modern body text (Space Grotesk). The overall feel is a developer's personal CRT monitor brought to life, with subtle scanlines, star particles, and neon glows as decorative atmosphere.

## 2. Color Roles & Sky Theming

### Accent color assignments

- **Cyan** -- Primary accent. Default for headings, CTAs, case study content, and navigation highlights.
- **Green** -- Projects, code-related content, GitHub links, and technical/side-project sections.
- **Magenta** -- Secondary accent. Used for secondary headings (h2 in section pairs), secondary CTAs, resume sections, and "live demo" links.
- **Amber** -- Tertiary accent. Leadership, impact stats, certifications, and emphasis moments.

When adding a new page or section, match the accent to the content domain above. When in doubt, default to cyan.

### Sky theming rules

The site has 4 sky periods (night, dawn, day, dusk) that swap the entire color palette via CSS custom properties on `[data-sky]`. Night is the default/SSR state and has the highest contrast and most vibrant neon glows. Day is intentionally muted.

- Always use semantic Tailwind token classes (`text-accent-cyan`, `bg-bg-card`, etc.). Never use raw hex values.
- When adding new components, verify they look acceptable in all 4 sky periods using the SkyToggle.
- Do not add effects that only work in one sky period.
- Token values live in `app/globals.css`. Do not duplicate them elsewhere.

## 3. Component & Layout Patterns

### Component usage guide

| Component | When to use |
|---|---|
| `PixelHeading` | All styled headings (h1, h2, h3). Always use this. Never apply the pixel font class inline. |
| `RetroCard` | Any content container that needs the pixel-border treatment (cards, panels, stat blocks). |
| `RetroButton` | All CTAs and navigation actions. Border-only style with accent color variant. |
| `GlowText` | Inline emphasis within body text. Use sparingly for key terms or stats. |
| `Tag` | Labels for technologies, categories, or metadata. |
| `PixelDivider` | Section separator. Place between major content sections to create rhythm. |
| `ImageLightbox` | Any content image that benefits from click-to-zoom. |
| `CaseStudyCard` | Case study listing cards (on /work and homepage). |
| `ProjectCard` | Project listing cards (on /projects and homepage). |

### Page rhythm

Pages follow a consistent section flow:

```
<section>  (content block with py-12)
<PixelDivider />
<section>  (next content block)
<PixelDivider />
...
```

Each top-level section uses `py-12` or `py-16` for vertical spacing. Cards use `p-6` internally. Grid gaps are `gap-6` or `gap-8`.

### Layout

- Page container: `max-w-6xl` with `px-4 sm:px-6` (via `PageContainer` component)
- Card grids: `grid-cols-1 md:grid-cols-2` for pairs, `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` for collections
- All pages wrapped in `<PageContainer>` for consistent max-width and padding

## 4. Do's and Don'ts

### Do

- Use `PixelHeading` for every styled heading. It handles font, sizing, and glow consistently.
- Use semantic color token classes for all color references.
- Keep CRT scanlines, star particles, and neon glows purely decorative. They must not block interaction or reduce readability.
- Use `pixel-border` class (via `RetroCard` or directly) for bordered containers. It provides the signature inset shadow + glow-on-hover effect.
- Respect `prefers-reduced-motion` for all animations.
- Maintain WCAG AA contrast on all text, across all sky periods.

### Don't

- Apply the pixel font inline via `font-[family-name:var(--font-pixel)]`. Use `PixelHeading` instead.
- Use border radius larger than `rounded-sm`. The aesthetic is sharp/pixelated, not rounded.
- Use filled/solid background buttons. All buttons are border-only with translucent hover fill (`hover:bg-accent-*/10`).
- Use traditional drop shadows (`shadow-md`, `shadow-lg`). Only use inset pixel-border shadows and `neon-glow-*` text-shadows.
- Hard-code hex color values in components. Always use the Tailwind token classes.
- Stack more than 2 different neon glow colors in a single viewport section. It becomes visually noisy.
- Use the pixel font (Press Start 2P) for body text, descriptions, or any readable paragraph content.
