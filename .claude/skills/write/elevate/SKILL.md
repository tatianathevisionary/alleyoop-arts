---
name: elevate
description: >
  Assess and level up a team's AI-assisted engineering maturity using the OpenAI Harness Engineering framework
  (humans steer, agents execute). Use when users say "how good is our agent workflow", "are we leveraging Codex
  /Cursor effectively", "we want to level up our AI engineering practices", "what should our team adopt next",
  "evaluate our coding agent setup", "where are the gaps in our harness", or building a roadmap for AI-native
  engineering culture. Maps where a team sits on the 6-layer maturity ladder (33 outcomes) and recommends the next
  concrete unlock. Pairs with /ai-engineering (design side) and /self-improve (agent improvement side).
argument-hint: "[scope — repo path, team name, or 'this repo']"
allowed-tools: Read, Glob, Grep, Bash
---

# Elevate — AI Engineering Maturity Model

**Context:** $ARGUMENTS

Maximise leverage from coding agents. Lower layers are high-impact / low-controversy — everyone should do them. Higher layers require progressively more cultural shift and trust in agent autonomy.

**Source:** OpenAI Harness Engineering (Feb 2026).

## Philosophy

> Humans steer. Agents execute.

The bottleneck in AI-assisted engineering is rarely the agent's capability — it's the **environment**. Each outcome below removes a constraint that limits agent effectiveness.

## Quick start

- **Run a maturity assessment** → `/elevate this repo` — spawns a background exploration agent, scores all 33 outcomes.
- **Recommend the next unlock** → after scoring, present scorecard and propose one bottom-up action.
- **Plan a specific outcome** → "Your biggest gap is in Layer 2 — shall I plan dependency-direction linting?" → `EnterPlanMode`.
- **Implement** → after Tatiana approves the plan, generate artefacts (AGENTS.md updates, lint configs, CI checks, scripts).

## When to use

- Quarterly AI-engineering retro for a team.
- Onboarding a new repo and want to size the harness gap.
- Adam Thomson or Joe Strolz asks "how do we level up our agent setup."
- Pre-launching a new AI-native initiative — confirm Layer 1 and Layer 2 are solid first.

**Don't use for:** evaluating a single PR (`/code-review`), or improving the agent itself (`/self-improve`).

## Process

### Step 1 — Assess (background exploration)

Analysis is context-heavy — reading AGENTS.md, CI configs, lint rules, doc structures, test patterns, workflow files.

**Run as a background subagent** with `subagent_type=Explore`. The exploration agent should:
- Read top-level AGENTS.md / AGENTS.md; evaluate size and structure.
- Check for `docs/` directory; assess organisation.
- Look for custom linters, structural tests, CI config.
- Check for worktree scripts, browser automation, observability tooling.
- Look for background/scheduled agent tasks or cleanup automation.
- Assess merge gate config (branch protection, required reviewers, CI checks).
- Check for evidence of agent-to-agent review or autonomous merge.

While the exploration runs, briefly explain the maturity model so Tatiana has context for results.

### Step 2 — Score

Score each of the 33 outcomes:
- **Done** — fully implemented and working
- **Partial** — some evidence but incomplete
- **Not started** — no evidence found

Present grouped by layer. Highlight the lowest layer with gaps — that's where to focus.

### Step 3 — Recommend and plan

For each gap, recommend concrete next steps. **Always offer to pair with planning mode:**

> "Your biggest gap is in Layer 2 — you have no custom linters enforcing architecture. Shall I make a plan for adding dependency-direction linting?"

Use `EnterPlanMode` when Tatiana accepts. Plan should be specific, actionable, scoped to one outcome at a time. **Work bottom-up — never plan a Layer 4 outcome while Layer 1 has gaps.**

### Step 4 — Implement

After Tatiana approves a plan, generate the artefacts: AGENTS.md updates, linter configs, doc structures, CI checks, scripts.

## The six layers — 33 outcomes

```
┌─────────────────────────────────────────────┐
│  6. FULL AGENT AUTONOMY              29-33  │  ← Spiciest
│     Agents merge their own work             │
├─────────────────────────────────────────────┤
│  5. HIGH-THROUGHPUT MERGE PHILOSOPHY 24-28  │
│     Speed over gatekeeping                  │
├─────────────────────────────────────────────┤
│  4. CONTINUOUS ENTROPY MANAGEMENT    18-23  │
│     Background agents fight drift           │
├─────────────────────────────────────────────┤
│  3. AGENT-LEGIBLE ENVIRONMENT        12-17  │
│     Agents can see, drive, and observe      │
├─────────────────────────────────────────────┤
│  2. MECHANICAL GUARDRAILS             6-11  │
│     Architecture enforced by machines       │
├─────────────────────────────────────────────┤
│  1. REPOSITORY AS THE AGENT'S BRAIN   1-5   │  ← Start here
│     Give agents a map, not a manual         │
└─────────────────────────────────────────────┘
```

Each layer's full breakdown lives in `references/` (if present in your install). Below is the numbered list.

### Layer 1 — Repository as the agent's brain (high-impact, low-effort, low-controversy)

Single highest-leverage thing. Treat the repository's knowledge base as the system of record.

| # | Outcome | What good looks like |
|---|---|---|
| 1 | Agent instructions as table of contents | AGENTS.md/AGENTS.md ~100 lines pointing to deeper sources |
| 2 | Structured knowledge base exists | `docs/` directory with indexed design docs, product specs |
| 3 | Progressive disclosure designed | Agents start small and learn where to look next |
| 4 | Tribal knowledge captured | Slack discussions, design decisions, product context in the repo |
| 5 | Plans as first-class artefacts | Execution plans versioned with progress logs |

### Layer 2 — Mechanical guardrails (high-impact, medium-effort, low-controversy)

| # | Outcome | What good looks like |
|---|---|---|
| 6 | Architectural layers defined | Documented layering model with dependency direction rules |
| 7 | Custom linters enforce architecture | Lint rules catch boundary violations; error messages as remediation instructions |
| 8 | Structural tests validate boundaries | Tests verify package boundaries, dependency direction, API contracts |
| 9 | Taste invariants machine-enforced | Naming, structured logging, file size limits as lint rules |
| 10 | Knowledge base CI validation | CI checks docs are fresh, cross-links resolve, architecture matches dependency graph |
| 11 | Boring technology bias | Composable, stable, well-represented deps; reimplement rather than fight opaque upstream |

### Layer 3 — Agent-legible environment (high-impact, medium-high effort, low-controversy)

| # | Outcome | What good looks like |
|---|---|---|
| 12 | App bootable per worktree | Isolated instances; multiple agents parallel without interference |
| 13 | Agents inspect/drive UI | Browser automation via CDP or Playwright; DOM snapshots, screenshots, navigation |
| 14 | Structured logs queryable | LogQL, structured grep, or equivalent |
| 15 | Metrics/traces exposed | Performance/reliability requirements become verifiable assertions |
| 16 | Ephemeral environments per task | Everything torn down after each task; clean baselines |
| 17 | Agents reproduce and validate | Reproduce bugs, validate fixes, reason about UI against running system |

### Layer 4 — Continuous entropy management (medium-high impact, medium effort, medium controversy)

| # | Outcome | What good looks like |
|---|---|---|
| 18 | Golden principles documented | Opinionated mechanical rules in the repo |
| 19 | Quality grades tracked per domain | Automated scoring, versioned, visible to agents |
| 20 | Background cleanup agents | Scheduled agents scan for deviations, open small refactor PRs |
| 21 | Doc-gardening automated | Recurring agent scans stale docs, opens fix-up PRs |
| 22 | Human taste feedback loop | Review comments and bug patterns → golden principles or lint rules |
| 23 | Continuous tech debt paydown | Small incremental, not big-bang rewrites |

### Layer 5 — High-throughput merge philosophy (medium impact, low effort, high controversy)

| # | Outcome | What good looks like |
|---|---|---|
| 24 | Merge gates audited and trimmed | Only gates that catch real bugs remain blocking |
| 25 | Short-lived small PRs | One concern per PR; hours not days |
| 26 | Agent-to-agent review loops | Agents review, iterate, satisfy each other; replaces required human review |
| 27 | Flakes are follow-ups | Test flakes addressed with follow-up runs, not blocking merges |
| 28 | Human review optional | Reserved for judgment calls and spot-checks |

### Layer 6 — Full agent autonomy (transformative, high effort, very high controversy)

| # | Outcome | What good looks like |
|---|---|---|
| 29 | End-to-end prompt to merge | Agent reproduces, fixes, validates, PRs, merges — single prompt in |
| 30 | Evidence artefacts | Video recordings of bug repro and fix validation |
| 31 | Self-remediates failures | Responds to review feedback and build failures autonomously |
| 32 | Escalation only for judgment | Humans consulted only for genuinely ambiguous decisions |
| 33 | Zero human-written code | Humans steer at intent layer; all code agent-generated |

## Scorecard template

```
Layer 1: Repository as Agent's Brain        [_/5]
  1. Agent instructions as TOC               [ ]
  2. Structured knowledge base               [ ]
  3. Progressive disclosure                  [ ]
  4. Tribal knowledge captured               [ ]
  5. Plans as first-class artefacts          [ ]

Layer 2: Mechanical Guardrails               [_/6]
Layer 3: Agent-Legible Environment           [_/6]
Layer 4: Continuous Entropy Management       [_/6]
Layer 5: High-Throughput Merge               [_/5]
Layer 6: Full Agent Autonomy                 [_/5]

Overall: _/33
```

## Key metrics to track

| Metric | Why |
|---|---|
| PRs merged per engineer per day | Raw throughput |
| % of PRs with zero human code | Agent adoption depth |
| Time from prompt to merged PR | End-to-end cycle time |
| % of reviews handled agent-to-agent | Human attention freed |
| Quality grade drift over time | Entropy management effectiveness |
| Human hours on "AI slop cleanup" per week | Should trend toward zero |

## Gotchas

- **Work bottom-up.** Don't plan Layer 4 (background cleanup agents) while Layer 1 (AGENTS.md is an encyclopedia) is unsolved. The lower layers compound.
- **Custom lint rules should read as agent-remediation instructions.** "Bad dependency direction" is useless; "imports from `app/services/` to `app/controllers/` violate the dependency direction rule — move the import or refactor the controller" is actionable.
- **Layer 5 controversy is real.** Trimming merge gates and going to agent-to-agent review will spook senior engineers. Don't sell it; demonstrate it on a contained area first.
- **Tribal knowledge in the repo means real text, not links.** A AGENTS.md that says "see the Slack discussion from Feb" is useless to an agent. Either paste the decision into a doc or use the decision-log skill.
- **Plans as first-class artefacts means versioned.** A `plans/` directory with current/done/tech-debt subdirs and progress logs. Not "the plan was in a Slack thread once."
- **Run the assessment as an Explore subagent, not inline.** Reading 30+ config files and AGENTS.md inline blows the parent context. Background subagent comes back with a scorecard.
- **For the ES Triage / Priority / Escalation Alignment project specifically**, the agent harness IS this repo. Layer 1 is in great shape (AGENTS.md as TOC, INVENTORY.md, context/ directory, identity/ system). Layers 2-3 are the next frontier — there's no automated lint or background cleanup yet.
- **Don't skip "boring technology bias" (Outcome 11).** Agents replicate patterns. If a codebase uses 5 different HTTP clients, the agent will pick a random one each time. Standardize boringly.

## Examples

### Example 1 — First-time assessment on a Rails monorepo
**Input:** `/elevate this repo`
**Process:** Spawn Explore subagent → read AGENTS.md, AGENTS.md, CI configs, lint rules, docs/ structure → score 33 outcomes → 19/33 Done, 7 Partial, 7 Not started.
**Recommendation:** "Lowest gap is Layer 2 — Outcome 7 (custom linters). You have RuboCop but no architecture-layer rules. Shall I draft a dependency-direction cop?"

### Example 2 — Quarterly retro for the ES agent
**Input:** `/elevate the tpm-agent repo`
**Process:** Scorecard against this repo. Layer 1: 5/5 (AGENTS.md, context/, identity/, INVENTORY.md, data/projects.md as first-class artefacts). Layer 2: 2/6 (no custom linters, no machine-enforced taste invariants). Layer 3: 0/6 (this isn't a code repo, so most don't apply). Layers 4-6: N/A.
**Recommendation:** "Layer 2 next — add a CI check that data/decisions.md entries have all required ADR fields. Want me to draft it?"

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Assessment takes forever | Reading inline instead of subagent | Re-run with `subagent_type=Explore` |
| Scorecard skips layers | Layer doesn't apply to this repo type | Mark "N/A" with rationale; don't pad with false "Done" |
| Recommendation is Layer 4 while Layer 1 is broken | Skipped bottom-up rule | Re-plan: fix Layer 1 first |
| User pushes back on Layer 5 controversy | Selling it before showing it | Demo agent-to-agent review on one bounded area; don't roll it out at scale |
