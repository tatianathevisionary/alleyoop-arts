# AI Engineering Maturity Assessment

**Team or repo:** `<<name>>`
**Assessed by:** Tatiana Pustovetova
**Date:** `<<YYYY-MM-DD>>`
**Framework:** Harness Engineering — 6 layers, 33 outcomes

The principle: humans steer, agents execute. A team's maturity is the
percentage of engineering work where agents execute reliably and humans
spend their time on direction, not typing.

---

## Layer 1 — Foundations (6 outcomes)

| # | Outcome | Status | Evidence |
|---|---|---|---|
| 1 | `CLAUDE.md` or `AGENTS.md` exists in every active repo | ☐ | |
| 2 | Imperative voice across agent directives | ☐ | |
| 3 | Boundaries section names destructive-action gates | ☐ | |
| 4 | Project conventions (style, tests) machine-readable | ☐ | |
| 5 | Skills inventory captured (local vs. registry) | ☐ | |
| 6 | Agent has read-access to canonical context (docs, data) | ☐ | |

## Layer 2 — Skill hygiene (5 outcomes)

| # | Outcome | Status | Evidence |
|---|---|---|---|
| 7 | Skills follow progressive disclosure (SKILL.md + assets + refs + scripts) | ☐ | |
| 8 | Each skill validates clean against skill-creator validator | ☐ | |
| 9 | Skills are discoverable — find-skills surfaces them | ☐ | |
| 10 | Voice and integrity checks embedded in every skill | ☐ | |
| 11 | Skill consolidation reviewed quarterly | ☐ | |

## Layer 3 — Workflow integration (6 outcomes)

| # | Outcome | Status | Evidence |
|---|---|---|---|
| 12 | Daily inbox flow active (capture → process-inbox → todo) | ☐ | |
| 13 | Session bookends used (consume / leave) | ☐ | |
| 14 | Drafts saved to disk before any external share | ☐ | |
| 15 | Slack messages drafted, never auto-sent | ☐ | |
| 16 | Large files handled in forked context (haystack) | ☐ | |
| 17 | Indexed search (qmd) used before grep on the repo | ☐ | |

## Layer 4 — Multi-agent capability (5 outcomes)

| # | Outcome | Status | Evidence |
|---|---|---|---|
| 18 | Sub-agents available (research, reviewer) | ☐ | |
| 19 | Multi-agent orchestration patterns documented (delphi) | ☐ | |
| 20 | Peer review across solution agents | ☐ | |
| 21 | Synthesis step compresses agent output back to a single artifact | ☐ | |
| 22 | Agent budget tracked per investigation | ☐ | |

## Layer 5 — Quality and integrity (6 outcomes)

| # | Outcome | Status | Evidence |
|---|---|---|---|
| 23 | Senior-reviewer agent runs before publish | ☐ | |
| 24 | Voice integrity check enforced (real merchants, exact numbers) | ☐ | |
| 25 | Banned-words list enforced (no leverage/synergy/best-in-class) | ☐ | |
| 26 | No emojis in agent outputs | ☐ | |
| 27 | Canonical metrics cited verbatim (93% / 37% / 40% / 65hr) | ☐ | |
| 28 | Counter-evidence section required in every synthesis | ☐ | |

## Layer 6 — Self-improvement (5 outcomes)

| # | Outcome | Status | Evidence |
|---|---|---|---|
| 29 | Self-improve cycle scheduled (monthly) | ☐ | |
| 30 | Calibration: agent's confidence vs. actual hit rate measured | ☐ | |
| 31 | Gap analysis informs next skill build | ☐ | |
| 32 | Maturity reassessed quarterly | ☐ | |
| 33 | Adoption metrics tracked (which skills get used, which die) | ☐ | |

---

## Score

| Layer | Filled | Total | % |
|---|---|---|---|
| 1 — Foundations | / | 6 | |
| 2 — Skill hygiene | / | 5 | |
| 3 — Workflow integration | / | 6 | |
| 4 — Multi-agent | / | 5 | |
| 5 — Quality and integrity | / | 6 | |
| 6 — Self-improvement | / | 5 | |
| **Total** | / | **33** | |

## Maturity band

| Total filled | Band | Next move |
|---|---|---|
| 0–8 | Pre-foundation | Stand up CLAUDE.md / AGENTS.md, install find-skills |
| 9–17 | Foundation | Fix Layer 1 + 2 gaps before adding new skills |
| 18–25 | Workflow | Add Layer 3 + 4 (daily flow, multi-agent) |
| 26–30 | Quality | Add senior-reviewer agent, banned-words gate |
| 31–33 | Self-improving | Quarterly self-improve cadence, calibration |

## Top three unlocks

After scoring, name the three outcomes that would move the team up one
band fastest. Concrete and named — not "improve documentation."

1. `<<outcome>>` — owner: `<<name>>`, deadline: `<<date>>`
2. `<<outcome>>` — owner: `<<name>>`, deadline: `<<date>>`
3. `<<outcome>>` — owner: `<<name>>`, deadline: `<<date>>`

## Voice and integrity gate

- [ ] Concrete numbers in the evidence column (no "we have some skills")
- [ ] Named owners for each unlock (no "the team")
- [ ] Banned words absent
- [ ] No emojis
- [ ] Draft only — Tatiana review before sharing with leadership
