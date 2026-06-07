---
name: narrative-arc
description: >
  Storytelling engine for TPM and ES narratives — transforms findings, metrics, and case studies
  into a coherent arc (Setup, Tension, Stakes, Resolution, Call to Action). Three modes —
  executive (1-paragraph punch), stakeholder (1-page memo with their role), full-case (2-3 page
  case study with merchant voice + system metrics). Use when the user says "tell the story of
  this data", "the numbers are true but the story is flat", "draft a narrative for the
  leadership pitch", or "frame this as a case study". Reach for the Pulse pitch arc
  (detect, surface, resolve) when narrating Shop Pulse / Proactive Shop Agent vision.
argument-hint: "[topic] [--mode executive|stakeholder|full-case]"
allowed-tools: Read, Write, Grep, Glob
---

# Narrative Arc

**Context:** $ARGUMENTS

## Quick start

- **VP needs a 1-paragraph hook** → `--mode executive`
- **Ops lead needs a 1-page memo** → `--mode stakeholder` (default if omitted)
- **Case study for an all-hands or PDD** → `--mode full-case`

## When to use

- The 40% dead zone finding is true but landing flat in leadership reads — narrative-arc reframes the number as merchant impact
- Pitching Pulse (Proactive Shop Agent) to the agentic commerce circle — the "detect, surface, resolve" arc compresses the vision into the meeting window
- Building a case study from INV-20466 (SMM popup) for the cross-functional retro
- Translating raw research synthesis into something a busy reader will actually finish

## Prerequisites

Read these in order before drafting:
1. `identity/soul.md` — frontline-first voice, plain verbs, no jargon
2. `context/findings-summary.md` — quantitative baselines (93%, 37%, 40%, 65hr, 17.7%)
3. `context/case-studies-digest.md` — 6 escalation breakdowns with named merchants
4. Any `data/drafts/` empathy map output relevant to the persona

## Step 1 — Pick the mode

| Mode | Length | When |
|------|--------|------|
| `executive` | ~100 words, 1 paragraph | VP needs a hook in a Slack DM or doc opening |
| `stakeholder` | ~400 words, 1 page | Ops lead, peer team lead, named partner |
| `full-case` | 800-1200 words | Case study for PDD, deck, or all-hands |

## Step 2 — Build the five beats

Every narrative uses the same arc regardless of mode. Load `assets/template.md` for the skeleton with placeholders and voice anchors.

| Beat | Purpose | Must include |
|------|---------|--------------|
| **Setup** | Establish the world and who is in it | A specific person or role in a real situation |
| **Tension** | Show what is broken or at risk | A data point that creates urgency |
| **Stakes** | Quantify what happens if we don't act | Revenue, time, trust, or merchant count — with numbers |
| **Resolution** | Propose the specific path forward | Concrete actions, not vague "we should improve" |
| **Call to Action** | Ask the audience to do one thing | Named owner or team, deadline or next step |

## Step 3 — Write to the mode

Mode-specific length and structure rules are in `assets/template.md`. Summary:

- `executive` — 1 paragraph, ~100 words, all five beats compressed
- `stakeholder` — 1 page, ~400 words, each beat 1-2 sentences with one human moment
- `full-case` — 2-3 pages, 800-1200 words, each beat is a section with quotes and phased resolution

## Step 4 — Save and route

Save to `data/drafts/YYYY-MM-DD-narrative-[topic]-[mode].md`. Cross-reference `/stakeholder-brief` if the audience is a named person. Apply `/multi-lens` framing if the topic spans org and technical concerns.

## Gotchas

- Opening sentence must hook. Never start with "This document describes" or "Earlier this quarter." The Pulse pitch opens with "Buyers don't follow up; they assume the system did." That is a hook because it carries the finding.
- Stakes must be quantified. Dollars, hours, percentages, or merchant count. "Merchant trust at risk" without a number is a feeling, not a stake.
- Resolution must be specific. Name the fix, not just the problem. "Better escalation" is filler; "Tier + Threshold + Issue Type framework reduces judgment calls from 70% to 17-27%" is specific.
- Every narrative includes at least one human moment. A specialist's experience, a merchant's frustration, a team lead's constraint. Without it, the doc reads as a metrics report.
- Data claims trace back. Every number must be findable in `context/findings-summary.md` or `context/case-studies-digest.md`. Unsourced numbers erode trust on the second read.
- Executive mode is ruthlessly compressed. Cut every sentence that does not advance the arc. If a sentence could appear in any other narrative, cut it.
- Full-case must earn its length. No padding. Every paragraph moves the story forward or names a stake.
- For Pulse — use the "detect, surface, resolve" pattern. Detect the buyer signal, surface the personalized moment, resolve into the action. That arc compresses 3 product pillars into 3 verbs.

## Voice and tone

- Frontline first, numbers second. Tatiana sees the pattern on the frontline before the data sizes it. Frame in that order — never "the data showed" before "the specialist saw."
- Name people, projects, merchants. Omaze (206 tickets, $535.8M GMV), Harry's (Stripe auth, 4000 orders), Colgate Palmolive (staging flag), Estrid Studios (bulk redaction). These are the reference points.
- Plain words. No "leverage," "synergy," "best-in-class," "going forward."
- Team-first — co-lead is Claire Shiminsky for the SRR work. Use "we," not "I."
- No emojis unless explicitly requested.

## Examples

### Example 1 — Stakeholder memo for Adam Thomson on the SRR dead zone

See `references/example-srr-narrative.md` for the full ~410-word draft. Five-beat arc: specialist on a Tier 1 thread (Setup) → 93%/37%/40% pattern (Tension) → Omaze 206-ticket cost compounds (Stakes) → Tier+Threshold+IssueType cuts judgment calls 70% → 17-27% (Resolution) → 30-min walkthrough Tuesday before the Vikki sync (CTA).

### Example 2 — Executive arc for the 40% dead zone

Input: `/narrative-arc "escalation dead zone" --mode executive`.

Steps: 1) Opening hook on a specialist whose investigation died in SRR. 2) Tension — 40% of SRR threads sit unowned. 3) Stakes — 65+ hours of merchant resolution delay per affected thread. 4) Resolution — Tier + Threshold + Issue Type framework. 5) CTA — name Adam Thomson and the next review window.

Result: A 100-word paragraph at `data/drafts/YYYY-MM-DD-narrative-dead-zone-executive.md` ready to drop into a leadership Slack DM.

### Example 3 — Full-case arc for the Pulse vision

Input: `/narrative-arc "Pulse — Proactive Shop Agent" --mode full-case`.

Steps: 1) Setup — a buyer mid-collection, drift unnoticed. 2) Tension — the Shop app already has the signal; nothing acts on it. 3) Stakes — quantify the unconverted intent at platform scale. 4) Resolution — Pulse: detect (drift signals), surface (one timely nudge), resolve (action in-app). 5) CTA — name the agentic commerce circle review with date.

Result: A 1000-word case study at `data/drafts/YYYY-MM-DD-narrative-pulse-full-case.md` that doubles as a deck source.

## Troubleshooting

### Reader finishes the doc and asks "so what?"

**Cause:** Stakes beat was qualitative or vague.
**Solution:** Rerun Stakes with a number. Revenue, hours, merchants, or trust — pick the metric the audience moves with.

### Reads as a report

**Cause:** No human moment. All beats are metrics or system descriptions.
**Solution:** Add one quote, one specialist moment, or one merchant scene from `context/case-studies-digest.md`.

### Full-case is padded

**Cause:** Every paragraph not earning its length.
**Solution:** Cut any paragraph that does not advance one of the five beats. If a sentence could go in any other narrative, cut it.

## Pairs with

- `/distill` — when the narrative needs a 1-pager version after the case is written.
- `/deck` — when the narrative becomes slides for a leadership review.
- `/stakeholder-brief` — when the audience is a named person and the framing needs to match their role.
