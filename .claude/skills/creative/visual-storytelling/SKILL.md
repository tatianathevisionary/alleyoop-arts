---
name: visual-storytelling
description: Tatiana's signature visual storytelling patterns — the metaphors and structural compositions she uses to make complex work legible. Iceberg/Titanic cascade · stair-step depth · bilateral risk · heartbeat audio · color-coded stakeholder gradients · 4-level cohort hierarchy · scenario picker · timeline reconstruction. Use when designing a visual artifact that needs to land a complex finding in one beat.
---

# Visual Storytelling · Her Signature Metaphor Patterns

> *Names compound the work. So do visual metaphors. The iceberg made the Cabi cascade legible to 10 owner teams at once. The heartbeat made Shop Pulse feel like a thing, not a feature. Each pattern is a structural compositional move that lands a complex finding in one beat.*
>
> Extracted from her shipped artifacts. Use when designing a new visual artifact that needs to make a complex finding immediately legible.

---

## When to use

- Designing a visual artifact (HTML, slide, deck) that needs to land a complex finding
- A retro or class-of-problem analysis that needs a hero diagram
- A multi-stakeholder portrait that needs a structural anchor
- An identity / archetype site that needs adaptive content
- A timeline reconstruction (cascade, incident timeline, career arc)

## When NOT to use

- For simple status updates or thin content (a metaphor without depth is a gimmick)
- For technical specs or operational docs (use plain structure, not metaphor)
- When the visual metaphor risks misrepresenting the content (e.g., Titanic framing for a non-catastrophic event)

---

## The 7 Signature Patterns

### 1. 🧊 Iceberg / Titanic Cascade

**The headline visualization for class-of-problem work.**

**The metaphor:** the visible tip is the headline incident · the underwater mass is the cascade of contributing events · bottom-up = chronological-up (foundation event at apex) · bilateral risk panel below names what was at stake for both sides.

**When to use:**
- A single-incident retro that's revealing a multi-event cascade
- Class-of-problem framings where the visible event is the smallest part
- Cross-stakeholder briefings where "what was at stake" matters for both sides

**The 4 concept variants** (from the Cabi iceberg work):

| Variant | Best for |
|---------|----------|
| **Stairs-as-iceberg + bilateral risk** (LEAD) | Hero of stakeholder one-pager · headline diagram in senior-leadership briefing |
| **Side-view collision** (Titanic frame) | Cover slide of senior-leadership deck · hero image of Quick site |
| **Cohort iceberg** (each step holds another merchant) | Stakeholder discussions where the cohort scope is the lever |
| **Time-depth iceberg** (steps shaped by time intervals) | When "this has been building for N months" is the headline |

**Implementation:** Single SVG inside an HTML page. Stair-step polygon outline. Underwater stair labels for each cascade event. Tip overlay (often red) with the headline event. Bilateral risk panel below (2 cards · merchant side · platform side).

**Canonical example:** `~/Desktop/es-retro-agent/topics/flash-sales/iceberg-titanic-concepts.html` (Cabi cascade with 11 stair-steps · 13 events · bilateral risk panel)

### 2. 🪜 Stair-Step Depth Hierarchy

**For multi-level cohort visualizations.**

**The metaphor:** each step represents a deeper level of nesting · the visitor's eye climbs from broadest to most-specific (or vice versa).

**When to use:**
- 4-level cohort hierarchy (Company → Discipline → Subdiscipline → Team)
- Career progression timelines (Role 1 → Role 2 → Role 3 → Role 4 → Current)
- Decision trees with sequential depth
- Any "zoom in, zoom out" framing

**Implementation:**

```
Company (N total)                              → rank X · Top Y%
 └── Discipline (N people)                     → rank X · Top Y%
      └── Subdiscipline (N people)             → rank X · Top Y%
           └── Team (N people · same role)     → rank X · multiplier vs cohort
```

ASCII or SVG. Each step is visually offset (indent or true stair-shape). The deepest level is usually the most important finding (the immediate-team rank).

**Canonical example:** `portfolio/about-tatiana/c6-dashboard-receipts.md` 4-level cohort picture (Shopify → Support → Merchant Support → Enterprise Technical Support Experts).

### 3. ⚖ Bilateral Risk Panel

**For asymmetric-stakes framings.**

**The metaphor:** both sides of a collision / decision / engagement have skin in the game · making both sides legible is honest framing.

**When to use:**
- Retros where both sides (merchant + platform) carry risk
- Strategic decisions where one stakeholder's risk is invisible to another
- Cross-functional briefings where alignment depends on shared cost view

**Implementation:** Two-card side-by-side panel:

```
┌────────────────────────────┐  ┌────────────────────────────┐
│ Merchant existential risk  │  │ Platform existential risk  │
│ — what they stood to lose  │  │ — what we stood to lose    │
│                            │  │                            │
│ • $185M revenue at risk    │  │ • $26.8M direct GMV/merch  │
│ • Multi-consultant POS dep │  │ • 39 chronic cohort orgs   │
│ • 9mo escalation cycle     │  │ • 6mo eng capacity consumed│
│ • Brand exposure (1-star)  │  │ • Reputational exposure    │
└────────────────────────────┘  └────────────────────────────┘
```

Each card lists 3-5 specific stakes. The card on the right doesn't symmetrize the left — it surfaces a DIFFERENT class of risk that the visitor might not have considered.

**Canonical example:** The Cabi iceberg + bilateral risk panel (Concept 1 from the iceberg-titanic-concepts work).

### 4. 💓 Heartbeat Audio + Motion

**For identity-aware interactive sites where the visitor's experience IS the data.**

**The metaphor:** the page literally has a pulse · the audio plays back at a rate proportional to the visitor's scroll velocity · the page feels alive, not static.

**When to use:**
- Shop Pulse-class sites where "Pulse" is the named product
- Auto-ethnography sites where the visitor's behavior IS the research
- Identity-aware interactive surfaces (persona picker that adapts everything)

**Implementation:**

```javascript
// Heartbeat audio that tracks scroll velocity
const audio = new Audio('heartbeat.mp3');
audio.loop = true;
let scrollVelocity = 0;
let lastScrollY = window.scrollY;
let lastTime = Date.now();

window.addEventListener('scroll', () => {
  const now = Date.now();
  const deltaY = Math.abs(window.scrollY - lastScrollY);
  const deltaTime = now - lastTime;
  scrollVelocity = deltaY / deltaTime;
  lastScrollY = window.scrollY;
  lastTime = now;

  // Map scroll velocity to playback rate (0.5x to 2x)
  audio.playbackRate = Math.max(0.5, Math.min(2.0, 0.5 + scrollVelocity * 0.5));
});

// Start audio on first user interaction (browser autoplay policy)
document.addEventListener('click', () => audio.play(), { once: true });
```

**Canonical example:** `tatianas-shop-pulse.html` (the Pulse demo with heartbeat audio that responds to scroll).

**Ethics:** Always provide a mute toggle. Some visitors will find audio intrusive.

### 5. 🎨 Color-Coded Stakeholder Gradients

**For multi-perspective portrait artifacts.**

**The metaphor:** each stakeholder archetype has its own color signature · the visitor can scan-read which voice belongs to which archetype by color alone.

**When to use:**
- Multi-perspective portrait sites (the canonical use)
- Multi-stakeholder retros where each voice should remain distinct
- Constructed-testimonial artifacts (must include methodology disclosure)

**Implementation:**

```css
/* Each stakeholder archetype gets a gradient + accent color */
.t-card.colleague-manager   { --accent: #7B61FF; --gradient: linear-gradient(135deg, #7B61FF, #A78BFA); }
.t-card.colleague-peer      { --accent: #FF4F9C; --gradient: linear-gradient(135deg, #FF4F9C, #FF8FBE); }
.t-card.colleague-cross     { --accent: #b45309; --gradient: linear-gradient(135deg, #b45309, #d97706); }
.t-card.colleague-junior    { --accent: #15803d; --gradient: linear-gradient(135deg, #15803d, #22c55e); }
.t-card.merchant-small      { --accent: #0e7490; --gradient: linear-gradient(135deg, #0e7490, #06b6d4); }
.t-card.merchant-large      { --accent: #7c3aed; --gradient: linear-gradient(135deg, #7c3aed, #a855f7); }
```

Each card uses its gradient for the header strip + identity card. The voice content uses italic blockquote styling (signaling "constructed quote, not transcript").

**Canonical example:** `portfolio/about-tatiana/through-their-eyes.html` (8 colleague + 9 merchant testimonials with color-coded gradients).

### 6. 🔄 Scenario / Persona Picker

**For identity-aware interactive surfaces where the same data tells different stories to different visitors.**

**The metaphor:** the page asks "who are you?" and adapts everything from there. The same underlying data is presented through the visitor's chosen lens.

**When to use:**
- Identity blueprint sites (Visionary / Operator / Founder / Builder lenses)
- Product demos (Curator / Hype Chaser / Discoverer / Optimizer scenarios)
- Multi-audience landing pages (recruiter / hiring manager / peer)
- Buyer-archetype demos

**Implementation:**

```javascript
const personas = {
  visionary: {
    word: 'visionary unicorn',
    quote: '"..."',
    body: '...',
    receipts: [['$1.6B', 'team-sized opp'], ...]
  },
  operator: { ... },
  founder: { ... },
  builder: { ... }
};

function switchPersona(name) {
  const p = personas[name];
  document.querySelector('.persona-quote').innerHTML = p.quote;
  document.querySelector('.persona-body').innerHTML = p.body;
  // ... swap receipts, color theme, etc.
  document.documentElement.style.setProperty('--accent', p.accent);
  history.replaceState(null, '', `#persona=${name}`);
  sessionStorage.setItem('persona', name);
}

// Initialize from URL hash or sessionStorage
const initial = location.hash.replace('#persona=', '')
                || sessionStorage.getItem('persona')
                || 'visionary';
switchPersona(initial);
```

**Canonical examples:** 
- `tatiana-blueprint.html` (Persona Picker: Visionary / Operator / Founder / Builder)
- `tatianas-shop-pulse.html` (Scenario Picker: 4 buyer archetypes)

### 7. 📅 Timeline Reconstruction

**For incident retros and career-arc narratives.**

**The metaphor:** chronological reconstruction surfaces causality · the sequence of events teaches more than the summary.

**When to use:**
- Incident retros (the Cabi cascade · the Society6 timeline · the OneLive expansion)
- Career-arc bios (the role-arrow visualization)
- Multi-month project narratives (the AI Triage Workflow rollout · the IHC audit progression)

**Implementation patterns:**

**Variant A · Vertical stair (for incident retros):**
- Most recent event at top · oldest at bottom
- Each event row: date + 1-line description + impact
- Color coding for event type (trigger · warning · gap · acute)

**Variant B · Horizontal arrow (for career arcs):**
- Left to right · earliest to latest
- Each role as a stop with: dates · title · segment
- Visual emphasis on transitions

**Variant C · Underwater stairs (for cascade visualizations):**
- The iceberg pattern (#1) — vertical bottom-up
- Chronological-up = causal-up

**Canonical examples:**
- Cabi iceberg cascade (Variant C)
- Resume site career timeline (Variant B)
- Society6 retro timeline (Variant A)

---

## How to combine patterns

Most of her best artifacts use 2-3 patterns combined:

| Combination | Use case |
|-------------|----------|
| **Iceberg + Bilateral Risk** | Class-of-problem retro hero (the canonical Cabi pattern) |
| **Stair-Step Depth + Color Coding** | 4-level cohort visualization (c6-dashboard-receipts pattern) |
| **Persona Picker + Heartbeat Audio** | Identity-aware product demo (tatianas-shop-pulse pattern) |
| **Color-Coded Gradients + Stakeholder Cards** | Multi-perspective portrait (through-their-eyes pattern) |
| **Timeline Reconstruction + Cohort Iceberg** | Class-of-problem framing with named other-merchants |

When combining, pick ONE pattern as the hero (carries the headline finding) and use the others in support.

---

## The "is this visual storytelling or just a chart?" test

Visual storytelling is NOT the same as data visualization. A chart shows data. Visual storytelling **makes the audience feel** the implication of the data.

Test:
- **Chart:** *"Cabi had 13 events over 11 months."*
- **Visual storytelling:** *"The visible tip is March 11. The underwater mass is everything we couldn't see — going back to May 2025 when the changelog shipped."*

If the visual just shows numbers, it's a chart. Use Chart.js. Move on.
If the visual makes the audience feel the shape of the finding, it's storytelling. Use these patterns.

---

## Anti-patterns (never)

- ❌ Visual metaphor that doesn't match the substance (Titanic for a non-catastrophe)
- ❌ Heartbeat audio without a mute toggle
- ❌ Persona picker where personas don't actually differ in content
- ❌ Color-coded stakeholders without methodology disclosure (this is ethics)
- ❌ Timeline reconstruction where dates aren't sourced
- ❌ Iceberg/cascade pattern when there's only one event (it's just a card, not a cascade)
- ❌ Stair-step depth with fake "Tier X" labels that don't map to real cohorts
- ❌ Combining 4+ patterns in one artifact (visual chaos)

---

## Cross-References

- [`design/ui-aesthetic/SKILL.md`](../../design/ui-aesthetic/SKILL.md) — visual aesthetic system (which register to use)
- [`creative/style-prompts/SKILL.md`](../style-prompts/SKILL.md) — paste-into-use aesthetic prompts
- [`make/frontend-design/SKILL.md`](../../make/frontend-design/SKILL.md) — generic frontend design philosophy
- [`research/multi-perspective-portrait/SKILL.md`](../../research/multi-perspective-portrait/SKILL.md) — the methodology behind Pattern 5 (Color-Coded Stakeholder Gradients)
- [`projects/05-merchant-advocacy/case-flash-sales-cascade-and-risk-models.md`](../../../../projects/05-merchant-advocacy/case-flash-sales-cascade-and-risk-models.md) — full canonical example of the Iceberg + Bilateral Risk pattern

---

> *"The iceberg made the Cabi cascade legible to 10 owner teams at once. The heartbeat made Shop Pulse feel like a thing, not a feature. The visual metaphor IS the work — when it lands, no slide deck is needed."*
