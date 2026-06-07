# Decision brief template — 1-2 pages, options + ask

Use when a decider must choose between options and has not read the source. Every option has a quantified cost and a quantified benefit. The recommendation is named, not implied.

---

## Template

```markdown
# <topic — what decision is needed, in one line>

*<date> · <author + co-author if applicable> · For: <named decider> · Status: For review*

---

## Context (2-3 sentences)

<What changed or what is forcing the decision. Anchored to a date, a merchant, or a named system. No background dump.>

## The decision

**<One-line statement of what is being decided. Not "what should we do" — "should we do X by Y date.">**

## Options

### Option A — <name>

- **What:** <one line>
- **Cost:** <quantified — effort, dollars, time, risk>
- **Benefit:** <quantified>
- **Risk if we do this:** <one line>

### Option B — <name>

- **What:** <one line>
- **Cost:** <quantified>
- **Benefit:** <quantified>
- **Risk if we do this:** <one line>

### Option C — <name>  (optional)

- **What:** <one line>
- **Cost:** <quantified>
- **Benefit:** <quantified>
- **Risk if we do this:** <one line>

## Recommendation

**<Option A | B | C>**

Rationale (3-5 sentences):
- <load-bearing reason 1, quantified>
- <load-bearing reason 2, quantified>
- <load-bearing reason 3>

## Risk if we don't decide

<One line. What compounds if this drags. Use the Tatiana cadence: "It is not zero. It compounds.">

## What we need from you

<Named decider> — <specific action, by specific date>.

## Receipts

- <Channel link>
- <Vault GSD or page>
- <Slack thread permalink>
- <BigQuery filter or methodology>

---

*Drafted <datetime> for <author>'s review before any sharing.*
```

---

## Voice anchors

- Open with context, not background — 2-3 sentences max
- The decision statement is binary or trinary, not open-ended
- Every option has quantified cost + benefit + risk
- Recommendation is named — not "leaning toward" or "probably"
- Risk-if-we-don't-decide quantifies the compounding cost
- The ask names a decider and a date
- Receipts make the brief trustworthy
- No "leverage," "synergy," "going forward," "stakeholders said"
- No emojis
- Tatiana title: Enterprise Technical Support Expert
- Claire Shiminsky named as co-lead on SRR / ES Triage work
- Real merchants: Omaze, Harry's, Colgate Palmolive, Estrid Studios

---

## When to use this mode (vs. one-pager or TLDR)

| Mode | Use when |
|---|---|
| `tldr` | The reader will only see the first 3 bullets — Slack channel skim |
| `executive` | VP needs 1 printed page of pure punch — situation, findings, impact, recommendation |
| `one-pager` | Project pitch or handoff — what it is + why now + what it does + the ask |
| `decision-brief` | A decider is choosing between 2-3 options and needs the trade-offs surfaced |

If unsure, ask Tatiana — picking the wrong mode is the most common compression failure.

---

## Save

`data/drafts/YYYY-MM-DD-distill-decision-brief-<topic>.md`
