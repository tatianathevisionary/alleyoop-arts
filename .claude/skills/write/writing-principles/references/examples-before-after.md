# Before / after examples

Real ES drafts, transformed. Use as reference when rewriting. Every example pulls from the checklist in the parent [SKILL.md](../SKILL.md).

## Example 1 — Escalation opener

### Before (52 words, passive, bureaucratic)

> It has come to my attention that there has been an ongoing issue regarding a merchant at Shopify, wherein their checkout has been experiencing intermittent errors that have not been resolved by the initial response from the specialist. This situation has been escalating and I wanted to circle back to provide context.

### After (25 words, active, named, concrete ask)

> Vuori's checkout has been failing intermittently since Tuesday. Three tickets open; assigned specialist has exhausted standard triage. Need engineering eyes by EOD.

**What changed:**
- "At Shopify" cut (ideal count: 0)
- Named the merchant (Vuori) — abstract → concrete
- Active voice throughout
- "Circle back" removed — just state the ask
- Specific time window ("Tuesday," "EOD") instead of "ongoing"

## Example 2 — Dashboard headline

### Before (34 words, hedged, passive)

> Analysis shows that there may potentially be a possible increase in partner-requested interactions that are ending up in the Plus Specialist queue, which could be indicative of a routing issue that was not intended.

### After (21 words, specific, linked)

> Partner interactions in Plus Specialist queue jumped 3.2× in January 2026. [Root cause: PR #4587 metadata fix.](https://github.com/shop/issues-cx-rnd/pull/4587)

**What changed:**
- "May potentially be a possible" → just the number (3.2×)
- Named the inflection point (January 2026)
- Linked the root cause (PR #4587)
- Cut "analysis shows that" — the data is the analysis

## Example 3 — CSAT callout in a brief

### Before (weak — no comparison)

> CSAT for the team this week was 82%.

### After (strong — comparison + target framing)

> CSAT 82% this week — down 3 points WoW, trending back toward our 79% Q4 baseline.

**What changed:**
- Added directional trajectory (trending toward goal)
- Added baseline (79% Q4) to show the delta is improvement

## Example 4 — Coaching feedback

### Before (generic, delivered as verdict)

> Your responses on Plus tickets could be more empathetic. You need to work on tone.

### After (specific, as observation, invites conversation)

> Hey Dana, on ticket #64442076 — merchant opened with frustration about a checkout bug, and the first reply was technical before acknowledging the impact on their sale. What I'd try: one sentence acknowledging the urgency, then the fix. Want to talk through the full thread?

**What changed:**
- Specific ticket referenced
- Observed → interpretation → suggestion structure
- "What I'd try" instead of "you need to"
- Ends with invitation to talk

## Example 5 — Up-chain message

### Before (250 words, buried ask)

> Hi <director>, wanted to provide an update on the partner routing situation. As you may recall, we've been seeing a lot of partner-requested chats ending up in our Plus and Enterprise Specialist queues. We did some investigation and found that there was a PR that shipped in January that changed how metadata is handled. We think this might be causing it. We've been looking into various options but haven't decided on a path forward yet. I'm hoping we can schedule some time to discuss.

### After (78 words, lead with ask, structured)

> **Partner routing in Plus/Enterprise — need your call on remediation path**
>
> **Impact:** Partner chats grew from ~249/mo to ~2,061/mo peak in Plus Specialist queue since Jan 19, 2026.
> **Root cause:** [PR #4587](https://github.com/...) metadata fix (CONFIRMED — Beacon team attestation).
> **Status:** Active workstream in #1-optimize-partner-support-workstream. Three options on the table (revert / adjust Plinko / accept + train).
> **Need from you:** 20 min this week to agree on path forward.

**What changed:**
- Headline in first line (the ask)
- Structured blocks (Impact / Cause / Status / Need)
- Numbers with baselines
- Linked PR, linked Slack workstream
- Named confidence (CONFIRMED)
- Specific ask with time box (20 min)

## Example 6 — Weekly brief intro

### Before (2 paragraphs, no headline)

> This week was pretty busy. We had some volume increases in the Enterprise queue, mostly driven by a combination of factors. CSAT was mostly flat. There were a couple of escalations but nothing major. The team handled everything pretty well overall. Looking ahead to next week, we have a few things in flight including some training sessions and the usual 1:1s.

### After (headline + scannable)

> **Headline:** Volume +15% WoW in Enterprise, CSAT steady at 82% (down 2pts WoW), two escalations cleanly resolved, training session on new routing rules Thursday.
>
> **By the numbers** → see table below.

**What changed:**
- One-sentence headline with the most important 4 signals
- Every number has a direction (+15%, 3pts below target)
- Cut filler ("pretty busy," "mostly," "handled everything pretty well")
- Ended with a pointer to the next scannable section

## The common pattern

Every "before" → "after" in this doc does the same 3 things:

1. **Cut 30–50% of the words** — filler, hedging, passive voice.
2. **Name specific nouns** — merchants, PRs, tickets, numbers, dates.
3. **Lead with the point** — headline first, methodology last.

Apply those three operations to any draft before saving. See the parent [SKILL.md](../SKILL.md) for the full checklist.
