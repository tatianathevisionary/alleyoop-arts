# Slide deck template — DeepMind+Tatiana visual style

Use this as the structural skeleton for any deck. The HTML build is downstream; this file is the slide-by-slide outline with placeholders + voice anchors.

Output goes to `data/drafts/YYYY-MM-DD-deck-<topic>.html` as a self-contained HTML file.

---

## Deck-level metadata

- Title: `<topic — short, specific, no marketing language>`
- Audience: `<who is in the room — named where possible>`
- Date: `<meeting date>`
- Length: `<8-16 slides typical>`
- Decision needed: `<one-line ask the deck closes on>`

---

## Slide spine (typical arc)

### Slide 1 — Title

- Big centered text on dark background
- `<deck title>`
- `<audience + date>`

Narration footer: `<one sentence — what this 15 minutes is for>`

### Slide 2 — The world today

- Type: `summary-cards` or `question`
- Frontline first: name the observation a specialist sees
- One supporting number (anchored to `context/findings-summary.md`)

Narration: `<one sentence — what's broken on the frontline, in plain words>`

### Slide 3 — Evidence (frontline pattern)

- Type: `stats` (3-4 metric cards)
- Hero number 3x size of supporting metrics
- Source cited inline: "SRR Analysis, Q4 2025" or "BigQuery `support_tickets_summary`"
- Anchor numbers:
  - 93% request escalation
  - 37% receive escalation
  - 40% dead zone
  - 65+ hours delay
  - 17.7% Tier 1

Narration: `<one sentence framing the pattern in the data>`

### Slide 4 — Case study (named merchant)

- Type: `persona-card` or `empathy-map`
- Real merchant: Omaze ($535.8M GMV, 206 tickets, 90 days, CDE), Harry's (4000 orders, Stripe auth), Colgate Palmolive (staging flag, waiting since Feb 26), Estrid Studios (1000+ redactions, 12+ hours, 10 team members)
- One direct quote or reconstructed sentence from `context/case-studies-digest.md`

Narration: `<one sentence connecting the case to the structural pattern>`

### Slide 5 — The structural problem

- Type: `process-flow` (mermaid diagram inline SVG)
- Tier+Threshold+IssueType, Commerce Loop, Page-vs-Ping, or Single-vs-Platform — whichever framework applies
- For agentic-commerce circle pitches: use `block-beta` topology — the circle is the architecture, do not flatten it

Narration: `<one sentence naming the system gap>`

### Slide 6 — Proposed change

- Type: `data-comparison`
- Before column (current state) / After column (proposed)
- Delta highlights — color-coded, hero number on the After side

Narration: `<one sentence on what shifts>`

### Slide 7 — Roadmap / phases

- Type: `timeline` or `roadmap`
- Named owners per phase
- Real dates or trigger conditions, not "TBD"

Narration: `<one sentence on the sequencing logic>`

### Slide 8 — Risks

- Type: `risk-matrix` (likelihood × impact)
- Top 3-5 risks named with owners
- Pull from `data/risks.md` if it exists

Narration: `<one sentence calling out the most live risk>`

### Slide 9 — The ask (CTA)

- Type: `question` or `summary-cards`
- One decision needed
- Named owner
- Specific date or trigger

Narration: `<one sentence — the words a presenter would say to close>`

### Slide 10 — Close / appendix

- Type: `title` (mirror open) or `team`
- Contributors named (binary rule: all or none)
- Co-lead Claire Shiminsky named on SRR / ES Triage work

Narration: `<one sentence — thank you, here's the next step>`

---

## Design system rules (from `frameworks/visual-design-system.md`)

- Pull all color tokens, typography, spacing from the design system
- Primary accent for highlights — not background flood
- Dark slides use the system's dark surface color, not pure black
- Typography follows system font stack and scale
- Narration footer — light text on dark, italic, `<em>` for emphasis
- Cards, badges, metric components follow system patterns

## Navigation rules

- Arrow keys + spacebar advance/retreat
- Click on slide content advances (excluding buttons + interactive elements)
- Prev disabled on first slide; Next disabled on last
- Slide counter `N / TOTAL` on every slide
- Entrance animations reset on revisit (don't go static after first view)

## Self-containment rule

- Single HTML file
- All CSS and JS inline
- No external image URLs that could 404
- Google Fonts CDN allowed (design system requires it)
- Must open offline
- Must screenshot cleanly

---

## Voice anchors (narration footers)

- Frontline first — every slide opens on the observation, then the number
- Plain words — no "leverage," "synergy," "going forward," "stakeholders said"
- One sentence per slide, max
- If the narration repeats the slide title verbatim, rewrite it
- Tatiana's title: Enterprise Technical Support Expert
- Co-lead: Claire Shiminsky on SRR / ES Triage work

---

## Save

`data/drafts/YYYY-MM-DD-deck-<topic>.html`

Present to Tatiana. Self-contained means she can preview by opening the file locally — no harness needed.

---

## Voice + build checklist

- [ ] 8-16 slides
- [ ] Title + setup + evidence + case + framework + change + roadmap + risks + ask + close arc covered
- [ ] Hero metric on stats slides is 3x size of supporting metrics
- [ ] Every data slide cites a source
- [ ] Real merchant named in at least one slide
- [ ] Real number anchored to `context/findings-summary.md` in at least three slides
- [ ] Closing slide names the decision, owner, and date
- [ ] No "leverage" / "synergy" / banned phrases in any slide or narration
- [ ] No emojis on slides
- [ ] Tatiana title correct
- [ ] Claire Shiminsky named as co-lead on SRR work
- [ ] Self-contained HTML — works offline, screenshots clean
- [ ] Navigation wired (arrows, spacebar, click, slide counter, prev/next disabling)
