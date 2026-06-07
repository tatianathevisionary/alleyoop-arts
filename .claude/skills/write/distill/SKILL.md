---
name: distill
description: >
  Universal compression — collapse a long body of work (research, findings, analysis, vault content, project state) into a doc a busy person can act on. Use when users say "1-pager this", "give me a TLDR", "make me an executive summary", "decision brief on X", or hand over a long doc and need a shorter version. Five modes — executive (1-page punch), tldr (3-5 bullets), key-findings (structured report), decision-brief (options + ask), one-pager (classic), elevator-pitch (visual HTML hero artifact). Always numbers per bullet, always the ask, always saved to drafts for review.
argument-hint: "[mode] [topic] — e.g. one-pager priority-alignment, tldr legacy-customer-accounts"
allowed-tools: Read, Write, Grep, Glob, Shell
---

# distill

**Context:** $ARGUMENTS

Compress a long body of work into a doc a busy person can act on. Drafts only.

## Quick start

- "1-pager this" → `one-pager` (see `assets/template-one-pager.md`)
- VP wants 1 page of pure punch → `executive`
- Slack-skim summary → `tldr` (see `assets/template-tldr.md`)
- Decider needs to choose between options → `decision-brief` (see `assets/template-decision-brief.md`)
- Application or hero artifact → `elevator-pitch` (HTML)

## Principle

**100 files into 1 page.** Compression is not summarization — it's selection under pressure. A reader who sees the 1-pager and never opens the source must still be able to act. Every word in a distilled doc earned its place by displacing two others. Numbers are the load-bearing structure; quotes carry voice; receipts make the doc trustworthy.

## When to use

- A 50+ page document, a Quick Site, a multi-file analysis, or a Vault folder needs to reach an executive
- A merchant brief, incident retro, or project state needs a 1-pager for stakeholder handoff
- Slack readers will only see the first 3 bullets — the rest is wasted
- A decision is needed in one meeting and the deciders haven't read the source
- A long technical analysis needs a non-technical framing
- The 7-point priority alignment breakdown needs to land in front of Vikki / Adam in one meeting

## Steps

1. **Pick the mode.**

| Mode | Length | Audience | Template |
|------|--------|----------|----------|
| `executive` | 1 printed page | VPs, senior leaders | inline below |
| `tldr` | 3-5 bullets | Slack, doc openings | `assets/template-tldr.md` |
| `key-findings` | No fixed length, ranked | Audiences who need receipts | inline below |
| `decision-brief` | 1-2 pages | Deciders choosing options | `assets/template-decision-brief.md` |
| `one-pager` | 1 page | Project pitches, handoffs | `assets/template-one-pager.md` |
| `elevator-pitch` | 1-page HTML | Applications, hero artifacts | inline below |

If unsure: default to `one-pager`. Switch when audience or surface demands.

2. **Identify the source material.** List every file, doc, transcript, channel, dashboard. Read all of them. If unreadable in one session (100+ files), use `Grep` or `/qmd` to find load-bearing claims first.

3. **Extract every claim with a number.** Build an internal table: claim, number, source, date. A claim without a number gets dropped or moved to "context."

4. **Attach a "so what" to every number.** Pattern: `Number → Implication`.
   - `40% dead zone → product gap, not training gap`
   - `887 tickets in 4 weeks → ~74-82/day sustained → structural mismatch, not launch spike`
   - `90+ definitions of P1 → 96x SLO variance → alignment is the root cause, not staffing`

5. **Rank by impact and cut.** Priority order:
   1. Quantified merchant impact — GMV, ticket volume, time-to-resolution, CSAT
   2. Quantified operator impact — workload, escalations, judgment-call rate
   3. Quantified system gap — dead zone %, conflicting docs count, SLO variance
   4. Named precedent — Vault GSDs, RFCs, prior retros
   5. Named owner of the ask
   
   Anything outside top 4-5 gets cut or moves to an Evidence Package.

6. **Apply the matching template.** Templates are in `assets/`. Mode-specific overrides for inline modes:
   - `executive` — Situation · Key Findings · Impact · Recommendation (one printed page)
   - `key-findings` — numbered findings, each with What we found / Evidence / What it means / What to do
   - `elevator-pitch` — HTML with thesis quote + evidence grid + named precedent + CTA, in DeepMind+Tatiana visual style

7. **Save** to `data/drafts/YYYY-MM-DD-distill-<mode>-<topic>.md` (or `.html` for elevator-pitch). Always include the "Drafted for review" footer.

## Gotchas

- **One printed page is real.** Doesn't fit? Cut.
- **Every bullet contains a number.** "Improve consistency" is filler. "Reduce judgment calls from 70% to 17-27%" is a finding.
- **The ask is ranked by leverage.** 1, 2, 3 in explicit priority order with effort and leverage attached.
- **Receipts make the doc trustworthy.** Every 1-pager links to source channels, dashboards, Slack threads, Vault GSDs.
- **Quotes carry more weight than restated claims.** Real voices beat paraphrase. (Sarah Morgan, SMM: "I'm the dedicated CSM for this store and have no info on this event from Shopify.")
- **No filler phrases.** Strip "it's worth noting," "interestingly," "as you can see," "moving forward," "key," "important to note."
- **Lead with the pattern, not the context.** Open with "what happened" or "what it is," not "background."
- **The mode matches the audience.** A VP gets `executive`. A Slack channel gets `tldr`. A product team choosing between options gets `decision-brief`. Picking wrong is the most common compression failure.
- **Visual 1-pagers are still 1-pagers.** Animation doesn't replace compression.
- **Numbers without sources lose credibility on second read.** Move the audit trail to the receipts.
- **Status + Date + Owner on every distilled doc.** Prevents premature sharing.
- **The "so what" is the load-bearing word.** Data without implication is summarization, not distillation.
- **For the 7-point priority alignment breakdown** — list all 7 first, then collapse to the top 3 by leverage. Don't bury the ordering inside narrative paragraphs.

## Examples

### Example 1 — TLDR distillation of the ES Triage discovery phase

See `references/example-pdd-tldr.md` for the full 145-word TLDR — title carrying the finding ("dead zone is structural, not staffing"), 5 bullets each with a number and a "so what," real Omaze stakes, named recommendation (Tier+Threshold+IssueType), binary ask (Tuesday from Vikki).

### Example 2 — The Circle 1-pager (Apr 2026)

Trigger: Tatiana and Damion needed a 1-page vision draft for The Circle — cross-functional AI-native leadership space — before any formal proposal.
Mode: `one-pager` (see `assets/template-one-pager.md`)
File: `data/drafts/2026-04-09-the-circle-1pager.md`
Why it works: Function then people then ethos. Closing quote ("Every star looks isolated until you draw the lines between them") gives memorability.

### Example 3 — SMM NYC popup 1-pager (May 2026)

Trigger: INV-20466 resolved live; systemic gap (Shopify-organized events bypassing CSM coordination) still open.
Mode: `one-pager`. What happened + Why it matters (5-row table) + The gap, named (blockquote) + What's been done + The ask (3 items ranked) + Receipts.
File: `data/drafts/friday-may-1-context/13-smm-1-pager.md`
Why it works: Reader can act without opening source. Status emoji per ask makes resolution-state visible at a glance.

### Example 4 — Sidekick discovery 1-pager (Apr 2026)

Trigger: 6 months of analysis (BigQuery install funnel, Scout, Vault GSDs) needed compression for product team handoff.
Mode: `one-pager`. TL;DR + 3-layer problem breakdown + historical tripwire (GSD #35559) + 4-tier mitigation + mermaid diagrams + Data Appendix with SQL.
File: `data/drafts/2026-04-09-sidekick-discovery-1pager.md`
Why it works: TL;DR-as-standalone — first 100 words contain the full argument; rest is receipts.

### Example 5 — 7-point priority alignment decision brief

Trigger: ES leadership asked for a single page covering the 7 priority alignment issues surfaced in SRR analysis.
Mode: `decision-brief` (see `assets/template-decision-brief.md`). List all 7, collapse to top 3 by leverage (Tier+Threshold+IssueType, RI ownership matrix, P1 definition alignment), recommend one path, name the risk if not actioned.

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| Doesn't fit on 1 page | Too many findings, or findings carry no numbers | Cut to top 4-5 by Step 5 priority |
| Reader asks "what's the ask?" | Recommendation weak or missing owners | Re-rank by leverage (1, 2, 3). Each item gets a specific owner and timing. |
| Reader skips past the lead | Opened with context instead of finding | Lead with "what happened" or "what it is" — not "background" |
| Bullets feel restated | Filler phrases survived | Strip filler. Every word displaces two others or it gets cut. |
| Reader doubts the numbers | No receipts, or numbers without sources | Add receipts section with file paths, queries, channel links |
| TL;DR doesn't stand alone | TL;DR is a teaser, not a compressed argument | Rewrite to contain the entire argument in 100 words |
| Audience reads but doesn't act | "So what" missing from bullets | Rerun Step 4. Every number gets an implication. |
| Visual 1-pager looks great but says little | Compression skipped in favor of animation | Reapply Step 5. Visual mode does not replace compression. |

## Voice and tone

- Frontline first, numbers second
- Name people, projects, merchants — Omaze, Harry's, Colgate Palmolive, Estrid Studios, SMM
- Plain words. No "leverage," "synergy," "best-in-class," "going forward."
- Team-first — co-lead Claire Shiminsky for SRR / ES Triage work
- No emojis unless explicitly requested
- Status footer prevents premature sharing
- Tatiana title: Enterprise Technical Support Expert

## Pairs with

- `/narrative-arc` — when the distilled doc needs an arc before compression
- `/deck` — when the 1-pager needs a slide version
- `/stakeholder-brief` — when the audience is a named person and the framing must match
- `/weekly-impact` — for the recurring weekly recap version
- `/visualize` — when the elevator-pitch mode needs hero visuals
