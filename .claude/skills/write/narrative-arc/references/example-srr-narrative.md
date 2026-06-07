# Example — 105-thread SRR analysis as a narrative arc

Worked example transforming the 105-thread SRR analysis (`srr-analysis/`) into a `stakeholder`-mode narrative arc memo for Adam Thomson (Plus Operations).

Voice anchors verified against `_raw-material.md` Sections 1 and 9. Numbers verified against `context/findings-summary.md`.

---

## Input

`/narrative-arc "SRR escalation dead zone — 105 thread analysis" --mode stakeholder`

## Audience

Adam Thomson (Plus Operations). He's the knowledge keeper on the operational side. Already aligned on the existence of the problem from the Mar 5 sync. The memo gives him the version he can share up to Vikki and across to RI.

## Draft output (~410 words)

```
# The SRR dead zone — what the 105 threads said

Adam — quick memo on what Claire and I found in the 105-thread SRR analysis,
shaped for your read. Background ahead of the Mar 17 sync with Vikki.

## Setup

A specialist works an SRR thread on a Tier 1 merchant. The thread carries
the contract-level urgency: uptime SLA in play, GMV scale visible, real
revenue waiting on a routing decision. The specialist requests escalation.
The thread sits in SRR for 65+ hours before anyone picks it up. By the
time it's owned, the merchant has filed a second ticket. By the third,
they've escalated to their TAM. This is not the exception. It is the
modal experience of a Tier 1 SRR escalation request.

## Tension

The 105 threads showed the structural shape. 93% of threads request
escalation. 37% receive it. 40% sit in the dead zone — unowned, not
declined, not routed. The remaining 23% are routed but with handoff
gaps that surface as second tickets. The thread is asking for help
in a system that hasn't decided who owns the answer.

## Stakes

At 65+ hour median delay, the dead zone is not an inconvenience —
it compounds. Omaze ($535.8M GMV) filed 206 tickets in 90 days about
customer data erasure, the 1-3 day cadence telling us each cycle of
silence breaks the trust the next ticket has to rebuild. 17.7% of
escalations involve Tier 1 merchants — the merchants whose contracts
contain the language we're failing to honor. The cost is revenue we
don't see (TAMs absorbing the friction), specialist time we measure
the wrong way, and merchant trust that doesn't show up in a quarterly
dashboard but does show up in renewal conversations.

## Resolution

The Tier + Threshold + Issue Type framework — already shared with you
and Claire — reduces judgment calls from ~70% to 17-27%. Tier 1-3 P1
escalations route as P0. The cross-support refresh decision from the
Mar 10 framing sync gives us the operational ownership question
answered.

## Call to Action

Adam — would you have time Tuesday before the Vikki sync to walk
through the routing diagram with me and Claire? I want to make sure
the operational ownership lines up with what Plus Ops actually sees.
30 minutes, your office hours window.

— Tatiana
(Enterprise Technical Support Expert, ES — co-lead with Claire Shiminsky
on the ES Triage Priority & Escalation Alignment project)
```

---

## Voice anchors verified

- Frontline first ("a specialist works an SRR thread") before the data
- Frontline observation is concrete — Tier 1 merchant, 65+ hour delay, second ticket, third, TAM escalation
- Tension beat reads the structural shape, not the symptom — 93% / 37% / 40%
- Stakes quantified: Omaze ticket pattern, 1-3 day cadence, 17.7% Tier 1
- Stakes name what doesn't show up in dashboards (TAM friction, renewal conversations) — that's the human moment
- Resolution names the fix specifically: Tier+Threshold+IssueType, 70% → 17-27%
- CTA names an owner (Adam), a date (Tuesday), a duration (30 minutes), a meeting type (office hours)
- Tatiana title correct: Enterprise Technical Support Expert
- Claire Shiminsky named as co-lead
- No "leverage," "synergy," "stakeholders said"
- No emojis
- Word count: ~410 (within stakeholder mode band of ~400)

## What this example proves

- The five-beat arc compresses 105 threads of analysis into a memo a busy operations lead can finish in 90 seconds
- Frontline-first ordering reverses the "data first" trap — the specialist's experience leads, the structural data sizes it, the merchant's ticket pattern names the stakes
- A direct, named ask at the end gets a yes/no instead of a vague "let me know your thoughts"

## Saved to

`data/drafts/2026-05-12-narrative-srr-dead-zone-stakeholder-adam.md`

Tatiana reviews, edits, decides whether to share with Adam.
