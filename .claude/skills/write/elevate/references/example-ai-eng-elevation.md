# Example — elevating the ES Triage agent stack

A worked elevation pass on the tpm-agent repo itself (the agent running
the ES Triage, Priority and Escalation Alignment project). Run during the
May 11 audit and consolidation work — same week we cut 96 skills down to
86 via 10 merges.

## Scored maturity (May 11, 2026)

| Layer | Filled | Total | % |
|---|---|---|---|
| 1 — Foundations | 6 | 6 | 100 |
| 2 — Skill hygiene | 4 | 5 | 80 |
| 3 — Workflow integration | 5 | 6 | 83 |
| 4 — Multi-agent | 4 | 5 | 80 |
| 5 — Quality and integrity | 6 | 6 | 100 |
| 6 — Self-improvement | 3 | 5 | 60 |
| **Total** | 28 | **33** | 85 |

**Band:** Quality (26–30). On track to Self-improving (31–33) with three
unlocks.

## Layer-by-layer evidence

### Layer 1 — Foundations (6/6)

- CLAUDE.md exists at repo root, 412 lines, current
- AGENTS.md drafted from writing-agents-md template, last reviewed 2026-05-09
- Boundaries section names destructive-action gates (no auto-Slack, no
  auto-push, drafts-only)
- Project conventions in `identity/playbook.md`
- Skills inventory in CLAUDE.md (86 skills listed)
- Agent has read access to context/, data/drafts/, srr-analysis/

### Layer 2 — Skill hygiene (4/5)

- Skills follow progressive disclosure — converted 16 skills to multi-file
  in the May 11 batch
- Validator runs clean (exit 0 or 2) on every skill
- find-skills surfaces local and registry skills
- Voice integrity checks embedded in templates
- **Gap:** Quarterly skill consolidation review not yet scheduled — was
  ad-hoc on May 11

### Layer 3 — Workflow integration (5/6)

- Daily inbox flow: `/capture` → `/process-inbox` → `/todo` active
- Session bookends: `/consume` and `/leave` used at every session
- Drafts always written to `data/drafts/` first
- Slack messages always drafted, never auto-sent
- Indexed search via qmd available
- **Gap:** Haystack adoption is partial — Tatiana still reaches for `Read`
  on 6 MB CSVs out of habit. Cue: surface the size check in /capture.

### Layer 4 — Multi-agent (4/5)

- Sub-agents: `tpm-researcher` and `tpm-reviewer` available in `.claude/agents/`
- Delphi orchestration template in place
- Peer review across solution agents
- Synthesis step required
- **Gap:** Agent budget not tracked. Need a counter that increments per
  sub-agent spawn.

### Layer 5 — Quality and integrity (6/6)

- `tpm-reviewer` runs before any external publish
- Real merchant integrity: Omaze 206 tickets / $535.8M GMV, Harry's 4,000
  orders, Colgate Palmolive staging flag, Estrid Studios bulk redaction —
  all named and exact in every relevant draft
- Banned words list active (leverage, synergy, best-in-class,
  "stakeholders said")
- No emojis in any agent output
- Canonical metrics cited verbatim (93% / 37% / 40% / 65hr / 17.7%)
- Counter-evidence required in synthesis (see synthesize-skill template)

### Layer 6 — Self-improvement (3/5)

- Self-improve cycle exists but ran once (May 11 consolidation)
- Calibration not yet measured
- Gap analysis fed the May 11 consolidation
- **Gap:** No quarterly reassessment cadence
- **Gap:** No adoption metrics on which skills actually get invoked

## Top three unlocks (next 30 days)

1. **Track agent budget per investigation.** Add a counter to delphi runs
   so we know if a 9-agent run produces 9-agent-worth of insight. Owner:
   Tatiana. Deadline: 2026-05-31.

2. **Calibrate agent confidence vs. hit rate.** Sample 20 recent agent
   recommendations, score actual outcomes, compare to the agent's stated
   confidence. Will reveal whether the 0–5 scoring is honest. Owner:
   Claire Shiminsky. Deadline: 2026-06-07.

3. **Schedule quarterly skill consolidation.** May 11 worked. Next review
   August 11 — block on calendar now. Owner: Tatiana. Deadline:
   2026-05-15 (calendar block).

## What this example demonstrates

- Real numbers in the evidence column — "412 lines," "86 skills," "May 11
  batch" — not "we have some skills."
- Top three unlocks named with owner and deadline. Not "improve
  documentation."
- The 28/33 score is honest. Layer 6 is the weak link, and the unlocks
  are scoped to fix it.
- Gaps are named at the outcome level (outcome 11, 16, 22, 30, 32, 33) so
  a future review can verify the unlock actually closed the gap.
- The reviewer-agent integrity check (Layer 5) is what catches a draft
  that would otherwise ship with "stakeholders said" in it. Layer 5 at
  6/6 is non-negotiable for this project.
