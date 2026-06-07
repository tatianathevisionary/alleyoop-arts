# Example — TLDR distillation of the ES Triage Priority & Escalation Alignment PDD

Worked example for `tldr` mode applied to the in-progress PDD on the ES Triage / SRR / escalation alignment project. Compresses the discovery-phase findings into 5 bullets a busy reader can act on.

Source material:
- `srr-analysis/` — 105-thread analysis
- `context/findings-summary.md` — quantitative baselines
- `context/case-studies-digest.md` — 6 escalation case studies
- `context/decision-framework.md` — Tier+Threshold+IssueType framework

---

## Input

`/distill tldr "ES Triage Priority & Escalation Alignment — discovery phase findings"`

## Draft output

```
**ES Triage Priority & Escalation Alignment — discovery complete. The dead zone is structural, not staffing.**

- 93% of SRR threads request escalation, 37% receive it. The escalation system is asking, not answering.
- 40% of threads sit unowned in the dead zone — not declined, not routed, invisible.
- 65+ hour median delay before triage. By hour 65, the merchant has filed ticket two; Omaze ($535.8M GMV) filed 206 tickets in 90 days on this exact pattern.
- 17.7% of escalations involve Tier 1 merchants. The merchants whose contracts contain the language we're failing to honor.
- Tier+Threshold+IssueType framework reduces judgment calls 70% → 17-27%. The fix is a framework, not a hiring plan.

Decision needed Tuesday from Vikki: Tier 1-3 P1 routes as P0 — unblocks the cross-support refresh. Tatiana + Claire walk through with Adam first.

— Tatiana · 2026-05-12
```

---

## Why this works as a TLDR

- **Title carries the finding.** Not "PDD discovery summary" — "the dead zone is structural, not staffing." The reader who only reads the title gets the headline.
- **Every bullet has a number.** 93%, 37%, 40%, 65+ hours, 206 tickets, $535.8M, 17.7%, 70% → 17-27%. No filler.
- **Every bullet has a "so what" clause.** The number is data; the trailing clause is the finding. "37% receive it. The escalation system is asking, not answering." That's the cadence.
- **Frontline observation lands first.** "The system is asking, not answering" is the support-desk read, not the dashboard read.
- **Real merchant grounds the stakes.** Omaze, $535.8M GMV, 206 tickets, 90 days, 1-3 day cadence — verifiable in `context/case-studies-digest.md`.
- **The recommendation is named.** Tier+Threshold+IssueType is the fix. Not "we should align."
- **The ask is binary.** Decision Tuesday from Vikki. Named owner, named date.
- **Status footer.** Date + author + draft posture.

## What the example proves

The TLDR mode compresses ~50 pages of discovery work into 145 words. A Slack reader who only sees the first 3 bullets still has the structural finding (dead zone is real, system isn't answering, Omaze is paying the cost). A reader who reads all 5 bullets has the recommended fix and the ask.

## Voice anchors verified

- No emojis
- No "leverage," "synergy," "stakeholders said"
- Tatiana title not explicitly stated (acceptable in TLDR mode — author line carries it)
- Claire Shiminsky named in the closing ask
- Real merchant (Omaze) with verified numbers
- Numbers exact, not rounded — 37%, not "about 40%"
- Tatiana cadence in the closing: short clauses, named owner, named date

## Saved to

`data/drafts/2026-05-12-distill-tldr-es-triage-discovery.md`

Tatiana reviews, edits, decides where to drop this — `#es-experts-and-tams`, in a Slack DM to Vikki, or as the opening paragraph of the PDD itself.
