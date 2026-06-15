# CharTaker — pending screenshots & demo GIF

The writeup in `content/projects/chartaker.mdx` is built around assets that still
need capturing. Save each file to `public/images/chartaker/` with the exact name
below, then paste the matching block into the MDX at the noted spot. (MDX chokes on
multi-line `{/* */}` comments, so these snippets live here instead of inline.)

## 1. Demo GIF  →  end of the "Overview" section
File: `public/images/chartaker/chartaker-demo.gif`
A short screen recording. A live combat round ending on a critical hit reads best.

```mdx
![A live combat round in CharTaker, ending on a critical hit.](/images/chartaker/chartaker-demo.gif)
```

## 2. Creation / level-up wizard  →  "Build a character" section
File: `public/images/chartaker/creation-wizard.png`
Replace the single character-sheet `<Figure>` with this pair:

```mdx
<Row>
  <Figure inline src="/images/chartaker/creation-wizard.png" alt="The guided character creation wizard, surfacing only the choices that apply." portraitMax="215" />
  <Figure inline src="/images/chartaker/character-sheet.png" alt="The finished character sheet: stats, skills, class features, and equipment in one view." portraitMax="215" />
</Row>
```

## 3. Starship + drone  →  "The Starfinder parts other tools forget" section
Files: `public/images/chartaker/ship.png`, `public/images/chartaker/drone.png`

```mdx
<Row>
  <Figure inline src="/images/chartaker/ship.png" alt="The starship view, with its own vitality and combat stats." portraitMax="215" />
  <Figure inline src="/images/chartaker/drone.png" alt="The mechanic's drone, managed as a first-class companion." portraitMax="215" />
</Row>
```

## 4. Live session / GM view  →  "Campaigns and shared sessions" section
File: `public/images/chartaker/session.png`

```mdx
<Figure
  src="/images/chartaker/session.png"
  alt="A live session: the GM's table state synced to every player's phone in real time."
  portraitMax="230"
/>
```

## 5. Spell or shop browser  →  "Built to ship" section
File: `public/images/chartaker/spell-browser.png`

```mdx
<Figure
  src="/images/chartaker/spell-browser.png"
  alt="The virtualized spell browser scrolling through the full SRD spell list."
  portraitMax="230"
/>
```

Image dimensions are read automatically at build time, so no manifest update is
needed. Portrait phone screenshots use `portraitMax` to stay tidy on desktop.
