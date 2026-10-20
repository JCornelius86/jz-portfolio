# Portfolio to-do

Open work for the site, collected from the October 2026 review (a recruiter
skim, an AI-voice copy audit, and a design hiring manager pass). Items are
roughly in order of how much they would move a recruiter or hiring manager.

Rough notes or a voice memo are enough for anything marked **JC writes**.
Claude can shape them into site copy.

_Last updated: 2026-10-20_

---

## 1. Leadership evidence (JC writes, then we pick a format)

Manager roles screen for this, and right now the site claims leadership
("How I lead", the Azure Advisor "Leading the team" section) without showing
it. The worry is that it reads stilted.

**Prompts to answer first.** Short answers are fine:

- [ ] Who on your team grew the most while you managed them, and what did you
      do that helped?
- [ ] One ritual or habit you started that the team kept (a crit format, a
      planning cadence, a review practice).
- [ ] The hardest call you made as a manager that people above you disagreed
      with at first.

**Format options, lightest to heaviest:**

1. **A decision inside each case study.** For example, "two designers
   disagreed about X, here's how we settled it, here's what shipped." The
   OvrC Pro-hardware story already works this way.
2. **A short "Working with me" section on About.** Plain sentences about what
   a week looks like, what you ask of designers, and what you protect them
   from. Specific habits, not principles.
3. **One essay**, about 600 words, built on one or two real moments. This
   would also restart the deferred `/notes` section.

---

## 2. Azure Advisor depth (JC writes)

The flagship case study. Numbers can't be shared, so the evidence has to come
from decisions and behavior.

- [ ] For each of the two decisions in "The two decisions I drove" (cap at
      five, minimum information per recommendation): what was the
      alternative, who disagreed, and why did your call win?
- [ ] Which of the AI-behavior details in "Showing the work" were your calls?
      These are the visible activity steps, the prioritization reason column,
      summarize-then-export, and the AI label and feedback. Right now the page
      describes them without claiming them.
- [ ] Expand "I pushed hard on this tension internally" into a short account
      of how you moved the roadmap toward organization-level context
      (Service Groups).
- [ ] Optional: a "what I'd do differently" paragraph.

---

## 3. Endings only JC can write

Each of these currently ends on a neutral line. One real detail would replace it.

- [ ] **Sealed Bid, "How it went":** one moment from draft night. Who took
      slot 1, the best line read aloud, or what the group chat said the next
      morning.
- [ ] **Sealed Bid, King's Bluff section:** what happened the first time your
      kids played it. Who won, who bluffed.
- [ ] **CharTaker, "A free usability lab":** the specific feature a friend
      asked for that you built and regret, and what it cost you.

---

## 4. Bigger pieces for later (JC to think on)

- [ ] **A "Selected Microsoft work" page.** Two or three short summaries that
      are safe to share (problem, role, decision, outcome, about 150 words
      each), using abstract diagrams like the existing SVG components. The
      Azure field-platforms results (175% MAU growth, $25M+ projected
      revenue, $3M annual savings) only appear on the resume today. Confirm
      they're OK to repeat on the site.
- [ ] **"How I build with AI."** The bio says "AI-native," but nothing on the
      site shows the workflow behind CharTaker, MealMapper, and Sealed Bid.
      A short essay or a section on About.
- [ ] **CharTaker screenshots and demo GIF.** Still pending. See
      `docs/chartaker-shots.md`.
      Once they exist, give CharTaker a `rail:` in its frontmatter (like
      MealMapper's) so its side screenshot swaps by section. Only use screens
      the article doesn't already show inline. Without a rail the hero
      doesn't stick.

---

## 4b. Making it stand out (from the jessa.art discussion)

The test for any of these: does it say something true about JC that a
recruiter should remember? A gimmick works when it is the thesis, not
decoration.

- [x] **Motion that explains.** The Azure Advisor poster now plays once when it
      scrolls into view: the wall builds, lines gather into the ask, five cards
      land. It resolves to the static diagram and is skipped for reduced motion.
- [ ] **"Show my notes" margin layer.** A toggle that reveals short italic
      Fraunces asides in the margins of case studies ("this is the screen I
      argued for"). It's where JC's dry, specific voice lives. The component
      is medium effort; the real work is JC writing the notes.
- [ ] **This site as a case study.** A short "How this site was built" page:
      editorial direction, tokens and motion rules, the AI-voice audit and
      what got cut, analytics, and how JC builds with AI. It also closes "How
      I build with AI" in section 4.
- [ ] **Character sheet view of the resume.** An opt-in "View as character
      sheet" link on `/resume`: Senior Product Designer, Level 15,
      multiclass Design Manager, with skills as feats and career as
      background. Printable. A fun side build, not the main experience.
- [ ] **One or two real photos.** For example the Starfinder table or the
      draft-night TV. Check with the people in them first.
- [ ] **Smaller motion options.** A drag slider on MealMapper's before and
      after comparisons, and a short loop of the Sealed Bid card-flip reveal.

Skip: custom cursors, a canvas or OS-desktop metaphor (it would read as
borrowed from jessa.art), and anything that hides content behind an
interaction.

---

## 5. Small decisions

- [ ] The home status pill ("Always up for an interesting problem"): make it
      say whether you're looking, or remove it.
- [ ] The cursor visible in `advisor-02` and `advisor-04`. Swap for a frame a
      second earlier or later if it bothers you. That means re-downloading
      BRK228, around 37:56 and 40:50.

---

## 6. Housekeeping (Claude can do anytime)

- [ ] Delete the unused images left over from the OvrC Connect merge (11
      files in `public/images/ovrc-home/`, none referenced anymore).
- [ ] Decide whether to delete NinjaCop's archived page and the
      `public/play/ninjacop` build, or keep them reachable by direct link.
- [ ] Fix the existing lint errors in `components/layout/ThemeToggle.tsx` and
      `components/ui/Reveal.tsx` (setState inside an effect).
- [ ] Optional: `brew uninstall yt-dlp ffmpeg` if you don't need them again.

---

## Already done (October 2026)

- Archived NinjaCop, cut Inspec, folded King's Bluff into Sealed Bid, and
  merged OvrC Connect into OvrC. Old URLs redirect.
- New headline ("Building in the AI age"), with a role eyebrow and a matching
  page title and social preview image.
- Bio corrected to "founding designer on a platform now past 20M devices";
  "Azure CXS" dropped.
- Azure Advisor restructured into Challenge > Approach > Impact, with clean
  frames from the BRK228 demo.
- Copy pass to remove AI-sounding lines. MealMapper halved, Sealed Bid and
  CharTaker trimmed.
- "How I lead" principles now link to their evidence.
- Resume PDF rebuilt. Links are clickable, the layout fits, and projects
  match the site.
- Vercel Analytics added. Visit `?notrack` to stop counting your own visits.
