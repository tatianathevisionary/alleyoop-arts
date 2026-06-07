# Example — 12-slide deck outline for the HD39 Pulse vision

Worked example of the `deck` skill applied to the HD39 Pulse vision + Proactive Shop Agent pitch. This is the outline that gets compiled into a self-contained HTML deck saved to `data/drafts/`.

Audience: Agentic commerce circle review (internal Shopify cross-team).

---

## Deck metadata

- Title: Pulse — Proactive Shop Agent
- Audience: Agentic commerce circle
- Date: `<TBD>`
- Length: 12 slides
- Decision needed: Move Pulse from prototype to funded build by end of Q2

---

## Slide-by-slide outline

### Slide 1 — Title

- Layout: title
- Content: "Pulse" / "Proactive Shop Agent" / `<date>` / "Agentic commerce circle review"
- Narration: *"15 minutes — the build, the vision, and the ask."*

### Slide 2 — The world today (frontline first)

- Layout: question
- Content: One large centered line: "Shop Agent waits to be asked. Buyers don't follow up — they assume the system did."
- Narration: *"The default Shop Agent posture is reactive. The signal is already in the platform — and we're not reading it."*

### Slide 3 — Evidence at platform scale

- Layout: stats (3 metric cards)
- Hero: $1.6B GMV motion (across the Shop Agent surface)
- Supporting: 70M buyers reachable / `<un-converted intent at platform scale, forward-looking estimate labeled as such>`
- Source: Shop Agent runtime telemetry, Q4 2025
- Narration: *"This is the surface today. The signal is already there. The agent waits."*

### Slide 4 — One buyer scene

- Layout: persona-card
- Content: A buyer mid-collection — abandoned cart at item 3 of 8. Returns the next day. Searches for the same product. The signals are all present. The agent does not act.
- Narration: *"This is the moment Pulse exists for."*

### Slide 5 — The structural reading

- Layout: process-flow (block-beta mermaid for agentic circle topology)
- Content: Circle topology — signal → intent → action → outcome. The circle is the architecture.
- Narration: *"The circle is the architecture. Linear flow misses the loop."*

### Slide 6 — What we built (HD39, 3 days)

- Layout: summary-cards
- Cards:
  1. Intent detection layer (reads recent buyer signals)
  2. Action generation against the live Shop Agent runtime
  3. Demo loop: signal → intent → action → outcome, in production code
- Narration: *"Three days. Not slides. Real code that ran."*

### Slide 7 — Before / after

- Layout: data-comparison
- Before column: "Buyer asks → agent responds → maybe converts"
- After column: "Signal detected → agent acts → buyer arrives at the resolved moment"
- Hero delta on the After side
- Narration: *"Same surface, different posture."*

### Slide 8 — Team

- Layout: team
- Names: Moujtaba, `<other build crew — verified via /agent-vault>`, Claire Shiminsky (co-shaped the pitch and demo narrative), Tatiana (vision framing + Shop runtime integration)
- Narration: *"Built by these humans. Verify every spelling before we publish."*

### Slide 9 — Sized opportunity (labeled forward-looking)

- Layout: stats
- Hero: `<forward-looking sized intent capture>`
- Label: "Forward-looking estimate. Prototype only."
- Source: HD39 demo data + Shop Agent runtime baseline
- Narration: *"If rolled out to the full $1.6B motion, the unlock is the difference between a search box and an agent."*

### Slide 10 — Roadmap

- Layout: roadmap
- Phase 1 (Q2): Move from prototype to alpha. Owner: `<TBD>`. Trigger: this decision.
- Phase 2 (Q3): Limited rollout to N% of Shop Agent surface. Owner: `<TBD>`.
- Phase 3 (Q4): Full motion. Owner: `<TBD>`.
- Narration: *"Three phases. The decision today unblocks Phase 1."*

### Slide 11 — Risks

- Layout: risk-matrix
- Top 3 risks named with owners:
  1. Signal noise / false intent — `<owner>`
  2. Buyer surprise / opt-out posture — `<owner>`
  3. Agentic-commerce policy alignment — `<owner>`
- Narration: *"Three named risks. None are unknowns — all are managed."*

### Slide 12 — The ask

- Layout: question
- Content: "Move Pulse from prototype to funded Q2 build."
- Owner: `<decision owner — TBD>`
- Date: End of Q2
- Narration: *"That's not a feature. That's a shift in how commerce works. Decision needed by end of Q2."*

---

## Voice anchors verified

- Frontline first on slide 2 ("Shop Agent waits to be asked")
- Hero metric is 3x size on slides 3 and 9
- Real number sources cited inline (Shop Agent runtime telemetry, Q4 2025)
- Forward-looking estimates labeled as such on slide 9
- Real merchant scene on slide 4 (composite, but specific)
- Co-builders named with binary rule (all or none) on slide 8
- Claire Shiminsky named as co-lead
- Closing slide names the decision, owner, and date
- No "leverage" / "synergy" / "stakeholders said"
- No emojis on slides
- Block-beta mermaid topology used for the agentic circle (not flattened to linear)

## Self-containment

- All CSS and JS inline
- Mermaid pre-rendered as inline SVG for slide 5
- Google Fonts CDN allowed (design system requires it)
- Opens offline
- Screenshots clean

## Saved to

`data/drafts/YYYY-MM-DD-deck-pulse-vision.html`

Tatiana reviews, presents in the circle meeting, decides what to keep and what to cut.
