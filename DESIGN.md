# DESIGN.md

> This file documents design intent and conventions. For actual token values, see `app/globals.css`. Component APIs live in `/components/`.

## 1. Identity

Editorial, warm-paper, restrained. A single ochre accent on warm off-white (light) or warm near-black (dark). Fraunces with its WONK axis on gives the serif voice; Inter handles UI and body; JetBrains Mono carries eyebrows, labels, and numerics. No decorative chrome, no glow, no scanlines, no sky-period theming. The personality lives in type and one accent, not in effects.

## 2. Color tokens

Defined in `app/globals.css` and exposed to Tailwind via `@theme inline`. Light is `:root`; dark is the `.dark` class on `<html>`.

| Token            | Tailwind class root | Light    | Dark     | Use                                       |
|------------------|---------------------|----------|----------|-------------------------------------------|
| `--c-bg`         | `bg-bg`             | `#FAF6EC`| `#1A1813`| Page ground. NEVER pure white / pure black.|
| `--c-card`       | `bg-card`           | `#FFFCF3`| `#221F18`| Raised surfaces.                          |
| `--c-ink`        | `text-ink`          | `#221E16`| `#F2EDE0`| Headlines, primary buttons.                |
| `--c-ink-soft`   | `text-ink-soft`     | `#3A352B`| `#C9C2B0`| Body prose.                                |
| `--c-muted`      | `text-muted`        | `#7A7159`| `#8A8473`| Eyebrows, captions, metadata.              |
| `--c-rule`       | `border-rule`       | `#E8E0CC`| `#34301F`| Borders, dividers, hairlines.              |
| `--c-accent`     | `text-accent`       | `#A8823F`| `#C49558`| The single accent. Ochre.                  |

### Color usage — non-negotiable
- **One accent only.** Ochre. Never introduce a second hue.
- **No pure black on pure white.** Warm tones are the design.
- **No gradients, glassmorphism, blur, or glow effects.**
- **No second accent for emphasis.** If something needs to pop more, it should be ochre or it shouldn't pop.

### Legacy token aliases
The pixel/CRT era left several token names referenced across existing pages (`text-accent-cyan`, `text-text-secondary`, `bg-bg-primary`, etc.). Those are aliased in `globals.css` to the new palette so legacy pages still render. **Do not use them in new code** — use the canonical `bg`, `card`, `ink`, `ink-soft`, `muted`, `rule`, `accent` names instead. Aliases will be deleted as the last legacy component is replaced.

## 3. Typography

### Families

| Family           | CSS var               | Use                                       |
|------------------|-----------------------|-------------------------------------------|
| Fraunces         | `--font-fraunces`     | Display + serif body. Apply via `data-ff="serif"`, `data-ff="display"`, `.font-serif`, or `.font-display`. |
| Inter            | `--font-inter`        | Body, UI. Default `<body>` font.          |
| JetBrains Mono   | `--font-mono`         | Eyebrows, labels, numerics, captions.     |

Variation settings (applied automatically by the `.font-serif` / `.font-display` rules):

- **Body-size serif** — `'opsz' 48, 'SOFT' 80, 'WONK' 1`
- **Display (>40px)** — `'opsz' 144, 'SOFT' 80, 'WONK' 1`

The WONK axis on `1` gives Fraunces its swooping `f`, `J`, and `g`. This is intentional; do not turn it off.

### Italic accent rule
Italic Fraunces is reserved for:
1. One or two key words inside an H1 ("designer", "shipping").
2. Display-size pull-arrows (`→`) used as separators.
3. Marginalia pull-quotes.

Never italic for full sentences of body copy.

### Scale — desktop (1280)

| Role                  | Size  | Line-height | Letter-spacing | Weight |
|-----------------------|-------|-------------|----------------|--------|
| Hero H1 (display)     | 124   | 0.94        | -0.04em        | 380    |
| Page H1 (display)     | 72–96 | 1.0         | -0.025em       | 380    |
| Section H2 (serif)    | 30–36 | 1.15        | -0.015em       | 440    |
| Card title (serif)    | 24    | 1.2         | -0.01em        | 450    |
| Lede (Inter)          | 19    | 1.55        | 0              | 400    |
| Body (Inter)          | 15.5  | 1.6         | 0              | 400    |
| Caption/eyebrow (mono)| 11–12 | 1.4         | 0.10em         | 500    |
| Stat number (serif)   | 28–48 | 1.0         | -0.01em        | 440    |

### Scale — mobile (390)

| Role            | Size  | Notes                |
|-----------------|-------|----------------------|
| Hero H1         | 46    | letter-spacing -0.03em |
| Page H1         | 36    |                      |
| Section H2      | 22–24 |                      |
| Card title      | 19    |                      |
| Lede            | 15.5  |                      |
| Body            | 15    |                      |
| Caption/eyebrow | 10.5–11 |                    |

## 4. Layout

- Page container: `max-w-6xl` with `px-4 sm:px-6` (via `PageContainer`).
- Mobile section padding: `36px 22px 40px`. Desktop: `24–72px 56px`.
- Section spacing: 36px mobile, 48–72px desktop.
- Card-to-card gap: 12–22px.
- Radii: compact cards `12–14`, medium `16–18`, large `18–22`, pills `999`.

## 5. Motion

- The H1 underscore cursor blink (`.cursor-blink`, 1.1s steps(2)) is the only system animation.
- Hover: a 1–2px translate or hairline shadow shift. Never a glow.
- Theme toggle: instant, no transition.
- All motion respects `prefers-reduced-motion`.

## 6. Do's and Don'ts

### Do
- Use semantic token classes (`bg-bg`, `text-ink`, `border-rule`, `text-accent`). Never raw hex.
- Apply Fraunces via `data-ff` attributes or the `.font-serif` / `.font-display` classes — never inline `font-family` strings.
- Verify every screen in both light and dark before shipping.
- Maintain WCAG AA contrast on all text.

### Don't
- Add a second accent color.
- Use neon glows, CRT scanlines, scroll-jacking, parallax, carousels, custom cursors, or heavy load animations.
- Use pure black on pure white.
- Hard-code hex values in components.
- Stack effects to make something "pop." If it doesn't read, fix the typography or hierarchy.
- Disable Fraunces's WONK axis.
