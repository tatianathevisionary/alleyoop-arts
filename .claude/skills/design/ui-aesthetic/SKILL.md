---
name: ui-aesthetic
description: Tatiana's canonical UI aesthetic system. Covers the named aesthetic registers (Cinematic-Editorial, Brand-Warm, Minimal-Considered, Generous-Emoji, Identity-Aware) and when to use which. Includes typography palette, color systems, motion vocabulary, and layout patterns extracted from ~90 shipped Quick sites + portfolio HTMLs. Load this before drafting any user-facing visual artifact.
---

# UI Aesthetic · Tatiana's Visual Language

> *Her visual style isn't an after-the-fact polish — it's a thinking surface. The aesthetic IS the substrate.*
>
> Extracted from ~90 shipped Quick sites, 60+ HTML dashboards, and portfolio artifacts (tatiana-blueprint, t-shape-archetype, through-their-eyes, c6-dashboard-receipts, the Cabi iceberg, Pulse sites, etc.). Use this skill before drafting any user-facing visual artifact.

---

## When to use

- Drafting any HTML / Quick site / portfolio artifact
- Building a slide deck or dashboard
- Designing a landing page section
- Deciding which aesthetic register fits the audience
- Auditing voice + visual consistency across surfaces

## When NOT to use

- For purely technical artifacts (code review docs, technical specs)
- For internal-Slack-quick-message work (no visual surface)
- When the user has already specified a custom aesthetic direction

---

## The 5 Named Aesthetic Registers

She operates across 5 distinct visual registers. Each one has a clear use case and a calibrated style.

### 1. 🎬 Cinematic-Editorial

**Use for:** Portfolio sites · identity blueprints · founding-PM-style proposals · senior-leadership briefings · the most-shared external artifacts.

**Examples in her portfolio:**
- `portfolio/about-tatiana/tatiana-blueprint.html`
- `portfolio/about-tatiana/t-shape-archetype.html`
- `portfolio/about-tatiana/through-their-eyes.html`
- `portfolio/shop-pulse/tatianas-shop-pulse.html` (with heartbeat audio)

**Signature moves:**
- Full-viewport hero with single statement + visual signature
- DM Serif Display headers · DM Sans body · IBM Plex Mono for monospace
- Dark or warm-cream background with radial gradient atmosphere
- Subtle noise texture overlay (SVG turbulence filter)
- Generous negative space
- Scroll-triggered fade-in animations
- Color-coded sections (typed gradients per concept/stakeholder)
- Long-form sections with editorial dividers
- Quiet footer that lets the work breathe

**Palette:**
```css
--bg: #fafaf8 (or dark variant #0a0a0c);
--surface: #ffffff;
--surface-2: #f5f4f0;
--violet: #7B61FF;
--magenta: #FF4F9C;
--ink: #1a1a1a;
--muted: #6b6b6b;
--border: #e2e0da;
```

### 2. 💼 Brand-Warm

**Use for:** tatianathevisionary.com surfaces · newsletter intros · personal-brand landing pages · founder-warm marketing copy · digital product detail pages.

**Examples in her portfolio:**
- `tatianathevisionary/` brand surfaces
- Future newsletter site templates
- Product landing pages for the digital product line

**Signature moves:**
- Title case for H1/H2, sentence case body
- Warm cream + violet accent palette
- Conversational paragraphs
- One signature emoji per section header maximum (🦄 💜 ✨ 🛍️ 🧬 🪞)
- Founder-warm copy register
- Receipt callouts (numbered + sourced)
- "What's inside" lists for products
- Clear CTAs ("Subscribe to the newsletter — free, weekly")
- Anti-clickbait — never "5 ways to..." or "Top 10..." or "Game-changer"

**Anti-patterns for this register:**
- AI-generated content posted without a final voice pass
- Em-dash overuse from GPT-style drafting
- "Limited time only" pressure tactics
- Calling herself a "thought leader"
- Performative humility

### 3. 📊 Analytical-Editorial

**Use for:** Cohort analyses · risk model dashboards · KPI receipts · multi-level data visualizations · the c6-dashboard-receipts-style artifacts.

**Examples in her portfolio:**
- `portfolio/about-tatiana/c6-dashboard-receipts.md`
- `portfolio/es-research-portfolio/04-churn-risk-formula.html`
- The Cabi iceberg visualization variants
- The chronic-merchant watchlist analyses

**Signature moves:**
- Dense data tables with mono fonts for numbers
- Receipt footers linking back to source queries
- Color-coded risk bands (low 🟢 / moderate 🟡 / high 🟠 / critical 🔴)
- IBM Plex Mono for all numbers + labels
- Section dividers between substantive sections
- 4-level cohort hierarchy diagrams when relevant
- Methodology disclosure at top (mandatory for ethnographic work)

**Palette (per-band):**
```css
--low: #15803d (green);
--moderate: #b45309 (amber);
--high: #ea580c (orange);
--critical: #b91c1c (red);
--purple: #7c3aed (accent);
--teal: #0e7490 (water/cool tones);
```

### 4. ✨ Generous-Emoji Quick Site

**Use for:** Internal Quick sites · Hack Days demos · brainstorming surfaces · interactive prototypes · the editorial-but-playful work.

**Examples in her portfolio:**
- `data-parser.quick.shopify.io`
- `enterprise-bfcm-dashboard.quick.shopify.io`
- `bfcm-cosmic-symphony.quick.shopify.io`
- ~80+ other Quick sites

**Signature moves:**
- Emoji as functional UI elements (🦄 💜 ✨ 🛍️ 🧬 🪞 🔍 📊 🦋)
- Each section header has 1 emoji (sometimes 2 for emphasis)
- Brighter, more confident color choices
- Faster, scrappier execution (Quick site, not portfolio)
- Editorial copy with personality
- TLDR-first, scenario-picker UI when applicable

**Quick site emoji vocabulary** (from her real Slack history):
- 🦄 Visionary Unicorn (signature personal mark)
- 💜 Shop Pulse anchor color · personal identity
- ✨ "I shipped a thing"
- 🧬 Methodology · framework · system pattern
- 🪞 Self-portrait · reflective work
- 🛍️ Commerce-anchored content
- 🦋 Flagship designation
- 🔍 Investigation · research mode
- 📋 Copy-as-Markdown clipboard signature button
- 📊 Receipts · data · verified numbers

### 5. 🤖 Identity-Aware Interactive

**Use for:** Personalized buyer agents · auto-ethnography sites · scenario-picker interactions · audience-adaptive copy.

**Examples in her portfolio:**
- `tatianas-shop-pulse.html` (4-scenario picker: Curator / Hype Chaser / Discoverer / Optimizer)
- `tatianas-agentic-profile.html` (long-form 6-chapter ethnography)
- The Persona Picker on `tatiana-blueprint.html` (Visionary / Operator / Founder / Builder lenses)

**Signature moves:**
- The page changes based on what the visitor selects (persona picker, scenario picker, identity picker)
- Identity-aware copy ("94% of buyers your age said it made them feel like they'd 'arrived'")
- Heartbeat audio that tracks scroll velocity (for Pulse-class sites)
- Color theme changes per persona/scenario
- Saved state for return visits
- Interactive calculators with live update (BEI × CM, risk score, etc)

**Tech stack typical:** Single HTML + embedded CSS + minimal JS (Vue.js inline / React inline / vanilla state machine)

---

## The Decision Tree (which register to use)

```
What is the surface type?
│
├── External-facing portfolio / identity / brand?
│   ├── For senior-leadership / external-CEO audience?
│   │   → Cinematic-Editorial (#1)
│   ├── For tatianathevisionary.com / newsletter / personal brand?
│   │   → Brand-Warm (#2)
│   └── For data-heavy analyses?
│       → Analytical-Editorial (#3)
│
├── Internal Quick site / Hack Days / demo / sandbox?
│   ├── Has interactive scenario picker / persona switcher?
│   │   → Identity-Aware Interactive (#5)
│   └── Just an HTML thinking surface?
│       → Generous-Emoji Quick Site (#4)
│
└── Formal resume / cover letter / executive brief?
    → DO NOT use emoji. Zero-emoji editorial register.
       (See `frame/operational-truth/` and `write/stakeholder-brief/`)
```

---

## Typography Palette (her canonical fonts)

| Use | Font | Weight | When |
|-----|------|--------|------|
| **Display headers** | DM Serif Display | 400 | Cinematic-Editorial · Brand-Warm |
| **Body** | DM Sans | 400 / 500 / 600 | All registers |
| **Mono / numbers / labels** | IBM Plex Mono | 400 / 600 / 700 | All registers |
| **Alternative serifs** | Lora · Garamond · Georgia | 400 | When DM Serif feels too tech-y |
| **Alternative sans (less preferred)** | system-ui · -apple-system | 400 | Quick prototypes |

**Anti-vocabulary fonts (NEVER use):**
- ❌ Inter (overused AI-aesthetic font)
- ❌ Arial / Helvetica (default + boring)
- ❌ Roboto (Material Design default + bland)
- ❌ Space Grotesk (AI-aesthetic default)

**Loading pattern:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=IBM+Plex+Mono:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## Color Systems (her canonical palettes)

### The Tatiana Brand Palette (Cinematic-Editorial / Brand-Warm)

```css
:root {
  /* Surfaces */
  --bg: #fafaf8;           /* warm cream off-white */
  --surface: #ffffff;       /* card surfaces */
  --surface-2: #f5f4f0;     /* subtle alt surface */
  --border: #e2e0da;        /* soft border */

  /* Ink */
  --ink: #1a1a1a;           /* primary text */
  --muted: #6b6b6b;         /* secondary text */
  --dim: #9c9c9c;           /* tertiary text */

  /* Accents */
  --violet: #7B61FF;        /* primary accent */
  --violet-soft: #A78BFA;   /* lighter variant */
  --magenta: #FF4F9C;       /* secondary accent (Pulse signature) */
  --magenta-soft: #FF8FBE;  /* lighter variant */

  /* Status */
  --amber: #b45309;         /* warning / pending */
  --teal: #0e7490;          /* water / cool / system */
  --red: #b91c1c;           /* critical / error */
  --green: #15803d;         /* success */
  --purple: #7c3aed;        /* alternative accent */
}
```

### The Risk-Band Palette (Analytical-Editorial)

```css
:root {
  --low: #15803d;       /* green — fine */
  --moderate: #b45309;  /* amber — watch */
  --high: #ea580c;      /* orange — attention */
  --critical: #b91c1c;  /* red — act */
}
```

### The Dark-Cinematic Variant

When using a dark background (some portfolio HTMLs):

```css
:root {
  --bg: #0a0a0c;
  --surface: #16161a;
  --surface-2: #1f1f24;
  --border: rgba(255, 255, 255, 0.08);

  --ink: #ffffff;
  --muted: rgba(255, 255, 255, 0.7);
  --dim: rgba(255, 255, 255, 0.5);

  /* Glow effects */
  --glow-violet: rgba(123, 97, 255, 0.15);
  --glow-magenta: rgba(255, 79, 156, 0.12);
}
```

---

## Motion Vocabulary

Her motion patterns are restrained but signature. Use sparingly.

| Motion | When | Implementation |
|--------|------|----------------|
| **Hero glow pulse** | Cinematic-Editorial hero | `@keyframes heroGlow` — radial gradient scales 1 → 1.18 → 1 over 10s |
| **Fade-in on scroll** | Section reveal | IntersectionObserver + `animation: fadeIn .5s ease` |
| **Heartbeat audio** | Identity-aware-interactive only | JS state machine tracking scroll velocity → audio playback rate |
| **Persona picker transition** | Identity-aware-interactive only | Card-to-card crossfade with content swap |
| **Hover lift** | Interactive cards | `transform: translateY(-2px)` on hover · 200ms ease |
| **Smooth scroll** | Long-form artifacts | `scroll-behavior: smooth` on html element |

**Anti-patterns for motion:**
- ❌ Bounce / spring animations (too playful for editorial register)
- ❌ Infinite loops on important content (distracting)
- ❌ Auto-scrolling carousels (annoying)
- ❌ Parallax overuse (gimmicky)
- ❌ Scroll-jacking (always a sin)

---

## Layout Patterns (her signature compositions)

### The Hero-Card-Receipt-Footer pattern

The canonical structure for portfolio HTMLs:

```
┌─────────────────────────────────────┐
│ HERO (full viewport)                │
│ - One statement                     │
│ - Visual signature                  │
│ - Subtle motion                     │
├─────────────────────────────────────┤
│ HEADLINE METRICS (4-6 cards in grid)│
│ - Mono numbers                      │
│ - Brief context per card            │
├─────────────────────────────────────┤
│ FLAGSHIP CASES (2-3 sections)       │
│ - Each section has its own hero     │
│ - Color-coded by case type          │
├─────────────────────────────────────┤
│ TIMELINE / DEEP CONTENT             │
│ - Editorial long-form               │
│ - Numbered or chronological         │
├─────────────────────────────────────┤
│ RECEIPTS / SOURCES                  │
│ - Where every number came from      │
├─────────────────────────────────────┤
│ QUIET FOOTER                        │
│ - Contact + close                   │
└─────────────────────────────────────┘
```

### The Stair-Step Cascade pattern

For visualizing class-of-problem / timeline cascades (the Cabi iceberg, the Society6 retro timeline):

```
       ▲ TIP (visible)
      ╱│╲
     ╱ │ ╲
    ╱  │  ╲ ─── waterline ───
   ╱   │   ╲
  ╱    │    ╲   STEP N (most recent)
 ╱     │     ╲  STEP N-1
╱      │      ╲ STEP N-2
        ...
       APEX (foundation / trigger)
```

Bottom-up = chronological order. Each step holds one event. Bilateral risk panel below names what was at stake on each side.

### The 4-Level Cohort Hierarchy pattern

For cohort comparison visualizations:

```
Company (N)                          → rank · pX%
 └── Discipline (N)                  → rank · pX%
      └── Subdiscipline (N)          → rank · pX%
           └── Team (N — same role)  → rank · multiplier
```

### The Persona Picker pattern (Identity-Aware Interactive)

```
[Persona 1 button]  [Persona 2 button]  [Persona 3 button]  [Persona 4 button]
                              ↓
              [Card swaps based on selection]
              - Persona name
              - Quote (in their voice)
              - 3-5 receipt pills
              - Color theme adapts
```

---

## Visual Anti-Patterns (her work never does these)

- ❌ Generic AI-aesthetic gradients (purple-to-pink-to-blue on white)
- ❌ Stock photography
- ❌ Multiple loading spinners / spinning logos
- ❌ Cookie-cutter card layouts (3 cards in a row, all same)
- ❌ Lorem ipsum or placeholder text in shipped work
- ❌ Emoji-stuffed headlines (more than 1 emoji per H1/H2)
- ❌ Em-dash overuse in displayed text (em-dashes for asides are fine, but not in every sentence)
- ❌ Auto-play video on landing
- ❌ Modal popups within 30 seconds of arrival
- ❌ "Subscribe to my newsletter" intent-grabbers before delivering value

---

## How to use this skill

When drafting any visual artifact:

1. **Identify the surface type** — portfolio · brand · analytical · Quick site · interactive
2. **Pick the matching aesthetic register** (#1-5 above)
3. **Apply the register's palette + typography + motion vocabulary**
4. **Choose a layout pattern** from the signatures above
5. **Verify against the anti-patterns** before declaring complete

When in doubt, lean toward the **Cinematic-Editorial register** for external work and **Generous-Emoji Quick Site** for internal work.

---

## Cross-References

- `make/frontend-design` — the generic frontend-design philosophy (use both)
- `make/sites` — Quick site registry manager
- `make/canvas` — Cursor canvas building
- `creative/style-prompts` — paste-into-Codex/Cursor aesthetic prompt library
- `creative/visual-storytelling` — her signature visual metaphor patterns (iceberg / cascade / staircase / heartbeat)
- `tatianathevisionary/brand-voice.md` — the public-brand voice register

---

> *"The aesthetic IS the substrate. The polish is in the analysis, not in a separate slide."*
