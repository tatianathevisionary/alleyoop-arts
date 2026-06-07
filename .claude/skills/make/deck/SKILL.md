---
name: deck
description: >
  Create a presentation deck as a standalone HTML file — slide navigation, narration footer,
  DeepMind+Tatiana visual design system, zero external dependencies. Use when the user says
  "make a deck for [meeting]", "build slides on X", "turn the PDD into a deck", or wants a
  shareable single-file artifact (no PowerPoint, no Google account needed to view). Outputs a
  .html saved to data/drafts/ that works offline and screenshots cleanly. Pairs with
  narrative-arc for arc structure and distill for the 1-page version.
argument-hint: "[deck topic, audience, key points]"
allowed-tools: Read, Write, Grep, Glob, Bash
---

# Create Presentation Deck

**Context:** $ARGUMENTS

## Quick start

- **Leadership review or pitch** → 8-12 slides, title + data + ask
- **GSD phase transition** → 10-16 slides, current state + decisions + roadmap
- **Convert a PDD or 1-pager to slides** → mirror the doc's section structure

## When to use

- Vikki Grant + senior leadership review on the escalation redesign needs a 10-slide proposal
- Adam Thomson ops review needs a 6-slide triage metrics + next steps
- Cross-team alignment session for the Tier + Threshold + Issue Type framework — roadmap walkthrough deck
- A shareable hero artifact that works without Google login, screenshots clean for Slack

## Prerequisites

Read in order:
1. `frameworks/visual-design-system.md` — color tokens, typography, spacing, component patterns
2. `identity/soul.md` — voice for the narration footer
3. `context/findings-summary.md` — data to populate slides
4. `context/stakeholder-map.md` — audience tone calibration

## Step 1 — Plan the slide count and arc

Typical decks run 8-16 slides. Outline before opening the HTML. Load `assets/template-slides.md` for the full skeleton with placeholders + voice anchors.

High-level arc:
1. Title — name + audience + date
2. Setup — the world today, the gap (frontline first)
3. Evidence — data, case studies, voice of customer
4. Proposed change — framework, design, components
5. Roadmap / phases — what ships when, with owners
6. Risks — likelihood × impact
7. Ask — closing CTA, named owner, decision needed

Every deck has setup → evidence → ask. If yours is missing one, redesign the outline before writing HTML.

## Step 2 — Pick slide types

| Type | When to use |
|------|-------------|
| `title` | Opening and closing — big centered text on dark background |
| `data-comparison` | Before/after metrics — two columns with delta highlights |
| `process-flow` | Mermaid-rendered workflow or decision tree (inline SVG) |
| `stakeholder-map` | RACI or influence grid with role cards |
| `timeline` / `roadmap` | Phased plan with milestones |
| `stats` | Metric cards — big numbers with labels and trend indicators |
| `summary-cards` | Grid of cards summarizing key points |
| `risk-matrix` | Likelihood × impact grid, color-coded |
| `empathy-map` | Persona card with thinks/feels/says/does |
| `persona-card` | Single role profile — name, pains, goals, quote |
| `team` | Photo grid or role grid with names |
| `question` | One powerful statement or question, centered — for transitions |

## Step 3 — Build the HTML

Single self-contained file. Structure:
- **Body** — dark background, `overflow: hidden`
- **Slides** — absolutely positioned `<div class="slide">`, toggled with `.active`
- **Each slide** has two parts:
  1. `.slide-screen` — content area, rounded corners, inset from edges
  2. `.slide-footer` — narration text + slide counter + prev/next buttons

### Design system rules

- Pull all color tokens, typography, and spacing from `frameworks/visual-design-system.md`
- Primary accent for highlights, not background flood
- Dark slides use the system's dark surface color, not pure black
- Typography follows the system's font stack and scale
- Narration footer — light text on dark background, italic, `<em>` for emphasis
- Cards, badges, metric components follow system patterns

### Navigation

- Arrow keys and spacebar advance and retreat
- Click on slide content advances to next slide (excluding buttons and interactive elements)
- Prev button disabled on first slide; next button disabled on last
- Slide counter shows `N / TOTAL` on every slide

## Step 4 — Populate with real data

- Pull numbers from `context/findings-summary.md` (93%, 37%, 40%, 65hr, 17.7%)
- Pull merchant names from case studies — Omaze, Harry's, Colgate Palmolive, Estrid Studios, SMM
- Every data slide cites a source — "SRR Analysis, Q4 2025," "BigQuery `support_tickets_summary`," or the specific Vault GSD

## Step 5 — Write narration

One sentence per slide in the footer. Use `<em>` for emphasis. Voice from `identity/soul.md` — frontline first, plain words, no jargon. The narration is the spoken track for someone walking through the deck silently.

## Step 6 — Save

Save to `data/drafts/YYYY-MM-DD-deck-[topic].html`. Self-contained — all CSS and JS inline, no external dependencies beyond Google Fonts CDN if the design system requires it.

## Gotchas

- Self-contained means self-contained. No CDN scripts beyond Google Fonts. No image URLs that disappear. The deck must open offline and screenshot cleanly.
- Slide counter must match. Total count, prev/next button disabling, all wired up — broken navigation reads as "this is a draft" even when the content is final.
- Entrance animations reset on revisit. If a slide animates in once and stays static when revisited, the deck reads as broken during a live walkthrough.
- Design tokens only. Do not hardcode colors outside the system — the deck loses visual coherence the moment one slide drifts. Pull every color from `frameworks/visual-design-system.md`.
- Hero metric must be visually dominant. On a stats slide, the hero number is at least 3x the size of supporting metrics. Otherwise the eye does not land.
- Every data slide cites the source. "SRR Analysis, Q4 2025" or the BigQuery table name — inline, footnoted, or in the narration. Without sourcing, the deck loses load-bearing trust.
- Narration is the spoken track. Treat it as the words a presenter would say. If the narration repeats the slide title verbatim, rewrite it.
- For Pulse decks or agentic commerce circle pitches — use the `block-beta` mermaid topology for the circle, not a linear flow. The circle is the architecture; do not flatten it.
- A deck without a clear ask in the closing slide is wallpaper. Every deck has a final slide naming the decision, the owner, and the date.

## Examples

### Example 1 — 12-slide HD39 Pulse vision deck

See `references/example-pulse-deck-outline.md` for the full slide-by-slide outline. Title → frontline observation ("Shop Agent waits to be asked") → 3-card evidence with hero $1.6B GMV → one buyer scene → block-beta mermaid circle → 3-card build summary → before/after → team (binary rule on names) → forward-looking sizing labeled as such → 3-phase roadmap → 3 named risks → ask: move from prototype to funded Q2 build.

### Example 2 — 10-slide proposal deck for escalation redesign

Input: `/deck "10-slide proposal for escalation redesign, audience: Vikki Grant and senior leadership"`.

Steps: 1) Outline — title, world today, dead zone evidence, Omaze case study, Tier+Threshold+IssueType framework, before/after, roadmap, risks, ask, close. 2) Build HTML with `stats` and `data-comparison` slides as the spine. 3) Narration: frontline pattern first, then numbers, then ask. 4) Save to `data/drafts/YYYY-MM-DD-deck-escalation-redesign.html`.

Result: A 10-slide standalone HTML deck Tatiana can drop into the meeting tab and walk Vikki through in 15 minutes.

### Example 3 — 6-slide ops review for Adam Thomson

Input: `/deck "6-slide ops review for Adam Thomson — triage metrics and next steps"`.

Steps: 1) Outline — title, current metrics (93% / 37% / 40%), anomalies, named recommendation, owner table, close. 2) `stats` slide type for metric cards. 3) Narration sharp and short — Adam reads fast.

Result: A 6-slide deck that doubles as the meeting agenda and the leave-behind artifact.

## Troubleshooting

### Slide content looks misaligned or cropped

**Cause:** Pure-black background or unbounded content overflow.
**Solution:** Use the system's dark surface color (not pure black), and constrain `.slide-screen` content with padding. Test at 1280x800 and 1920x1080.

### Mermaid diagram does not render

**Cause:** Mermaid not inlined, or syntax error in node labels.
**Solution:** Pre-render the mermaid as inline SVG, or include the mermaid script in the HTML. Quote labels with colons/slashes/parens in `["..."]`.

### Narration text overflows the footer

**Cause:** Too long for the footer band.
**Solution:** One sentence per slide, max. If the narration needs two sentences, cut to one — the second was filler.

## Voice and tone

- Frontline first — every slide opens on the observation, then the number.
- Plain words. No "leverage," "synergy," "going forward."
- Team-first — when naming the project team, name Claire Shiminsky as co-lead on SRR work.
- No emojis on slides or in narration unless the user explicitly requests them.
- Tatiana's title is Enterprise Technical Support Expert.

## Pairs with

- `/narrative-arc` — when the deck needs an arc structure before slides.
- `/distill` — when the deck content needs a 1-pager companion handout.
- `/visualize` — when one slide needs a system diagram, infographic, or empathy visual rendered separately.
