---
name: style-prompts
description: Tatiana's library of paste-into-use aesthetic prompts for Codex/Cursor when building visual artifacts. Each prompt encodes one of her named aesthetic registers (Cinematic-Editorial · Brand-Warm · Analytical-Editorial · Generous-Emoji Quick Site · Identity-Aware Interactive) so the agent produces output in HER style on first generation. Use when starting a new visual artifact and you want to skip the back-and-forth.
---

# Style Prompts · Paste-Into-Use Aesthetic Prompts

> *Her aesthetic isn't accidental. It's a system. These prompts let any agent generate output IN her style on the first generation — no back-and-forth, no "make it less generic AI" iteration.*
>
> Built from ~90 shipped Quick sites and 60+ HTML dashboards. Each prompt is paste-ready into a Codex / Cursor chat to spawn an artifact in the named register.

---

## When to use

- Starting a new HTML / Quick site / dashboard / landing page from scratch
- Asking an agent to draft a visual artifact in her style
- Calibrating Cursor's frontend-design output to match her aesthetic
- When a generic "make a website" prompt would produce generic AI output

## When NOT to use

- For artifacts that need a non-Tatiana aesthetic (client work, third-party brand alignment)
- For pure code generation without visual surface
- For internal Slack quick-messages

---

## The 5 Canonical Style Prompts

Each prompt corresponds to one of the named aesthetic registers in [`design/ui-aesthetic/SKILL.md`](../../design/ui-aesthetic/SKILL.md).

### 1. 🎬 Cinematic-Editorial Prompt

For: portfolio sites · identity blueprints · senior-leadership briefings · long-form externals.

```
Build this as a Cinematic-Editorial HTML artifact in Tatiana's aesthetic register:

VOICE:
- Single statement hero with visual signature
- Editorial long-form sections divided by quiet rules
- Receipts-anchored prose · every quantitative claim cites source
- Polished but personal · founder-warm not corporate

TYPOGRAPHY:
- DM Serif Display for h1/h2 (400 weight)
- DM Sans for body (400/500/600)
- IBM Plex Mono for numbers, labels, code
- Load via Google Fonts with preconnect

COLOR (dark cinematic):
--bg: #0a0a0c
--surface: #16161a
--ink: #ffffff
--muted: rgba(255,255,255,0.7)
--violet: #7B61FF
--magenta: #FF4F9C
--glow-violet: rgba(123,97,255,0.15)
--glow-magenta: rgba(255,79,156,0.12)

LAYOUT:
- Full-viewport hero with radial gradient atmosphere
- Subtle SVG turbulence noise overlay (opacity ~0.04)
- Generous negative space
- Max content width ~880px
- Single-column on desktop, mobile-first responsive

MOTION:
- Hero glow pulse: radial gradient breathing 10s loop
- Fade-in on scroll for sections (IntersectionObserver + animation: fadeIn .5s)
- Hover lift for interactive elements (translateY(-2px), 200ms)
- NO bouncy/spring animations · NO parallax · NO scroll-jacking

CONSTRAINTS:
- Single HTML file with embedded CSS (no external CSS files)
- Minimal JS · vanilla only · no React/Vue
- No emoji in body copy (cinematic register is emoji-free)
- No generic AI aesthetics: no Inter font, no purple-pink gradient cliches, no Space Grotesk
- Avoid stock photography references

PRODUCE:
A single HTML file ready to deploy on Quick or any static host. Working code, no placeholders.
```

### 2. 💼 Brand-Warm Prompt

For: tatianathevisionary.com surfaces · landing pages · newsletter intros · personal-brand work.

```
Build this as a Brand-Warm HTML artifact in Tatiana's personal-brand aesthetic:

VOICE:
- Founder-warm, conversational
- Title case headlines, sentence case body
- Personal asides okay (when authentic)
- Receipts-heavy but with narrative
- One signature emoji per section header MAX (🦄 💜 ✨ 🛍️ 🧬 🪞 are her vocabulary)
- Anti-patterns: never "5 ways to...", never "thought leader", never "limited time"

TYPOGRAPHY:
- DM Serif Display for h1/h2
- DM Sans for body
- IBM Plex Mono for numbers and callouts

COLOR (warm cream):
--bg: #fafaf8
--surface: #ffffff
--surface-2: #f5f4f0
--border: #e2e0da
--ink: #1a1a1a
--muted: #6b6b6b
--violet: #7B61FF (primary CTA)
--magenta: #FF4F9C (signature accent for personal-brand surfaces)
--amber: #b45309 (highlight)

LAYOUT:
- Single-column max-width ~880px
- Generous whitespace
- 3-pillar grid for value props (3 cards in a row on desktop, stacked mobile)
- Clear CTA repeated 3x: hero, mid-page, before footer
- Quiet footer with contact + privacy

CTA:
- One specific action per page (subscribe · buy · book · apply)
- CTA wording is plain-spoken: "Subscribe to the newsletter — free, weekly" NOT "Sign up now!"
- Same wording on all 3 CTAs

MOTION:
- Subtle hover effects on cards (2px lift)
- Fade-in on scroll for sections
- No autoplay video, no popups within 30s

CONSTRAINTS:
- Single HTML file with embedded CSS
- Vanilla JS only (form handling, smooth scroll)
- Mobile-first responsive (most visitors are mobile)
- No external dependencies that could fail at load
- No generic AI aesthetics

VOICE CHECK before shipping:
- Does this sound like Tatiana writing, or generic AI?
- Are receipts specific (named numbers, named outcomes)?
- Is the CTA frictionless?

PRODUCE:
A single HTML file ready to deploy. Working code.
```

### 3. 📊 Analytical-Editorial Prompt

For: cohort analyses · risk model dashboards · KPI receipts docs · data-heavy artifacts.

```
Build this as an Analytical-Editorial HTML artifact in Tatiana's data-receipts aesthetic:

VOICE:
- Frank · receipts-anchored · methodology-explicit
- Every number has a source citation (table + window + filter)
- Methodology disclosure at top when applicable
- No marketing fluff · this is for analysts and senior leadership

TYPOGRAPHY:
- DM Serif Display for h1
- DM Sans for h2/body
- IBM Plex Mono for ALL numbers, labels, and code snippets
- Mono fonts in tables for column headers + numeric cells

COLOR (data-aware):
--bg: #fafaf8
--surface: #ffffff
--ink: #1a1a1a
--muted: #6b6b6b
--low: #15803d (green — fine)
--moderate: #b45309 (amber — watch)
--high: #ea580c (orange — attention)
--critical: #b91c1c (red — act)
--purple: #7c3aed (accent)
--teal: #0e7490 (water/cool tones)

LAYOUT:
- Section-divided structure (TLDR · Headline · Receipts · Methodology · Sources)
- Dense data tables with mono fonts for numbers
- Risk-band color coding (low/moderate/high/critical)
- 4-level cohort hierarchy diagrams when applicable
- Receipt footer linking back to source queries (SQL appended)

DATA VIZ:
- Chart.js for any charts (loaded from CDN with integrity check)
- Tables for cohort comparisons (mono numbers, sortable if helpful)
- Inline metric cards (large mono number + small descriptive label)
- Risk bands as visual chips (color-coded background + uppercase label)

MOTION:
- Minimal · this is a serious document, not a marketing page
- Optionally: bar fill animation on first viewport entry (0.4s ease)
- No fancy scroll triggers

CONSTRAINTS:
- Single HTML file with embedded CSS
- Chart.js inline or via CDN (one external dependency OK)
- Print-friendly CSS (people will print this for board meetings)
- All claims sourced to specific tables / queries / dates

PRODUCE:
A single HTML file ready to share with senior stakeholders. Working code. All numbers re-derivable to sources.
```

### 4. ✨ Generous-Emoji Quick Site Prompt

For: internal Quick sites · Hack Days demos · brainstorming surfaces · interactive prototypes.

```
Build this as a Generous-Emoji Quick Site in Tatiana's playful-but-rigorous aesthetic:

VOICE:
- Editorial with personality · TLDR-first
- Section headers each have 1 emoji (sometimes 2 for emphasis)
- Direct, sometimes blunt, founder-warm
- Receipts-heavy but with narrative

EMOJI VOCABULARY (Tatiana's signature set):
- 🦄 Visionary Unicorn (personal mark)
- 💜 Shop Pulse anchor / personal identity
- ✨ "I shipped a thing"
- 🧬 Methodology · framework · system pattern
- 🪞 Self-portrait · reflective work
- 🛍️ Commerce-anchored content
- 🦋 Flagship designation
- 🔍 Investigation · research mode
- 📋 Copy-as-Markdown clipboard button
- 📊 Receipts · data · verified numbers
- ⚡ Speed / velocity
- 🎯 Goal / target
- 🪜 Hierarchy / ladder
- 🧊 Iceberg / hidden complexity

NEVER use (her anti-vocabulary):
- 🔥 (generic builder-bro)
- 💪 (bro)
- 🎉 (default party tone)
- 💯 (overused on internet)
- 🤔 (in serious comms — use prose instead)
- 🙏 (use "thank you!" in text instead)

TYPOGRAPHY:
- DM Serif Display for h1/h2
- DM Sans for body
- IBM Plex Mono for numbers, code, labels

COLOR (brighter, more confident):
--bg: #fafaf8 (or dark variant for nighttime sites)
--violet: #7B61FF
--magenta: #FF4F9C
--teal: #0e7490
--amber: #b45309
--green: #15803d

LAYOUT:
- Faster, scrappier execution than portfolio HTMLs
- TLDR-first structure (the headline finding lands in the first 200px)
- Scenario picker / persona switcher when applicable (Identity-Aware)
- Interactive elements where they help understanding

MOTION:
- More playful than Cinematic-Editorial · subtle bounces OK
- Scroll observers for section reveal
- Optional: heartbeat audio for Pulse-class sites (track scroll velocity)

CONSTRAINTS:
- Single HTML file with embedded CSS
- Vanilla JS or minimal React (inline)
- Deploy to *.quick.shopify.io
- No external CSS dependencies

PRODUCE:
A single HTML file ready to deploy on Quick. Editorial copy with personality. Working code.
```

### 5. 🤖 Identity-Aware Interactive Prompt

For: personalized buyer agents · auto-ethnography sites · scenario-picker interactions · multi-persona sites.

```
Build this as an Identity-Aware Interactive HTML artifact in Tatiana's adaptive-content aesthetic:

THE CORE PATTERN:
- The page changes based on visitor selection (persona / scenario / archetype picker)
- Each persona has its own color theme, voice, and content
- Selection is preserved (URL hash or sessionStorage)
- Default persona shown if no selection made

VOICE:
- Identity-aware copy (the page literally addresses the visitor in their archetype's voice)
- Each persona has a distinct voice register
- Receipts grounded in actual data when possible

PERSONA TYPICAL SHAPE:
For each persona/scenario, define:
- name + tagline
- 1-line quote (in their voice)
- 3-5 receipt pills (specific outcomes)
- color theme (CSS variable swap)
- optional: body copy variant

TYPOGRAPHY:
- DM Serif Display for h1
- DM Sans for body
- IBM Plex Mono for receipts

COLOR (theme-swapping):
Define a default palette and 4-5 persona-specific accent colors:
--persona-1-accent: #7B61FF (violet)
--persona-2-accent: #FF4F9C (magenta)
--persona-3-accent: #b45309 (amber)
--persona-4-accent: #15803d (green)

LAYOUT:
- Hero with persona picker (4-6 toggle buttons)
- Adaptive card below that swaps content based on selection
- 3-5 receipt pills per persona
- Quiet footer

MOTION:
- Card-to-card crossfade when switching personas (200ms)
- Hover lift on persona buttons
- Optional: heartbeat audio that adapts pitch to selected persona

INTERACTIVE LOGIC:
- Vanilla JS state machine (no framework needed for this scope)
- URL hash updates with selection (#?persona=visionary)
- sessionStorage saves selection for return visits
- Persona button has aria-pressed for accessibility

CONSTRAINTS:
- Single HTML file with embedded CSS + JS
- Self-contained (no external CSS dependencies, optional minimal JS libs)
- Mobile responsive (persona picker may stack vertically on small screens)
- Methodology disclosure at top if auto-ethnographic (explicitly note "this is real data from real interactions" when applicable)

PRODUCE:
A single HTML file ready to deploy. Working interactive code with all personas defined.
```

---

## How to use these prompts

### Step 1 · Pick the right register

Use the decision tree in [`design/ui-aesthetic/SKILL.md`](../../design/ui-aesthetic/SKILL.md) to identify which of the 5 registers fits your artifact.

### Step 2 · Paste the matching prompt into Codex/Cursor

The prompt block above is paste-ready. Add ONE sentence at the top describing the specific artifact:

> *"Build a portfolio site for my data-science certifications using the Cinematic-Editorial prompt below."*

### Step 3 · Iterate on substance, not style

The prompt encodes the style. Your iterations should be on content, not aesthetic. If the first generation looks generic, the agent didn't honor the prompt — repeat the prompt, don't argue with the output.

### Step 4 · Voice-pass before shipping

Even with the right prompt, do a final voice-pass per [`VOICE.md`](../../../../VOICE.md) and `tatianathevisionary/brand-voice.md`. The prompt produces structure; the voice-pass ensures it sounds like her.

---

## Composite prompts (when registers blend)

Some artifacts blend two registers. Common combinations:

| Composite | Recipe |
|-----------|--------|
| **Brand-Warm + Analytical-Editorial** (founder reporting on data work) | Start with Brand-Warm structure · add Analytical-Editorial data tables in the middle |
| **Cinematic-Editorial + Identity-Aware Interactive** (identity blueprint with persona picker) | Cinematic-Editorial hero + structure · add Identity-Aware persona picker section |
| **Generous-Emoji + Analytical-Editorial** (internal Hack Days data demo) | Generous-Emoji headers + Analytical-Editorial data tables |
| **Brand-Warm + Identity-Aware** (digital product landing with persona personalization) | Brand-Warm structure · adaptive copy based on visitor segment (recruiter vs hiring manager vs peer) |

When composing, declare both registers in the prompt explicitly:

> *"Use the Cinematic-Editorial register from style-prompts.md AND add an Identity-Aware persona picker section in the middle. Pick the colors from Cinematic-Editorial but allow per-persona accent swap."*

---

## The Style-Pass Audit

After any artifact is generated, run this audit:

- [ ] **Font check** — uses DM Serif Display / DM Sans / IBM Plex Mono (NOT Inter / Roboto / Arial / Space Grotesk)
- [ ] **Color check** — uses palette from the named register (not generic AI gradients)
- [ ] **Voice check** — sounds like her (per VOICE.md), not like generic AI
- [ ] **Receipt check** — every quantitative claim sourced
- [ ] **Emoji check** — uses HER vocabulary, in HER register, at HER intensity
- [ ] **Motion check** — restrained, no bouncy/spring/parallax overuse
- [ ] **Mobile check** — works on a 375px-wide viewport
- [ ] **Anti-pattern check** — none of the visual or voice anti-patterns present

If any item fails, iterate before shipping.

---

## Cross-References

- [`design/ui-aesthetic/SKILL.md`](../../design/ui-aesthetic/SKILL.md) — full aesthetic system with palettes + typography + motion vocabulary
- [`make/frontend-design/SKILL.md`](../../make/frontend-design/SKILL.md) — generic frontend design philosophy (general principles)
- [`creative/visual-storytelling/SKILL.md`](../visual-storytelling/SKILL.md) — her signature visual metaphor patterns (iceberg / cascade / staircase / heartbeat / bilateral)
- [`tatianathevisionary/brand-voice.md`](../../../../tatianathevisionary/brand-voice.md) — public-brand voice register
- [`VOICE.md`](../../../../VOICE.md) — unified voice guide

---

> *"The aesthetic IS the substrate. These prompts encode the substrate so any agent can produce in her style on the first generation."*
