# Narrative arc template — Setup → Tension → Stakes → Resolution → Call to Action

Use this skeleton for any narrative arc deliverable. Components stay; depth shifts by mode (executive ~100 words, stakeholder ~400 words, full-case 800-1200 words). Drafts to `data/drafts/`.

---

## Setup — establish the world and who is in it (1-3 sentences)

Frontline first. Tatiana sees the pattern at the support desk before the data names it. The Setup beat puts the reader on the support desk, in a merchant ticket, in a specialist's chair — somewhere a real person is doing real work.

Real anchor people to use:
- A specialist working an SRR thread that nobody owns
- A merchant filing the same ticket pattern for the third time this quarter
- An ES Triage co-lead (Tatiana or Claire Shiminsky) reading 105 SRR threads in a sitting

Real anchor merchants:
- Omaze ($535.8M GMV, Tier 1, 206 tickets in 90 days, customer data erasure)
- Harry's (4000 orders, Stripe auth)
- Colgate Palmolive (staging flag, waiting since Feb 26, ~1 month)
- Estrid Studios (1000+ redactions, 12+ hours, 10 team members, bulk erasure)
- Alo Yoga (12 escalations over the quarter)

Anti-pattern openings:
- "This document describes..." (no)
- "Earlier this quarter..." (filler)
- "The data shows..." (numbers before frontline = reverses the order)

Hooks that work:
- "Buyers don't follow up; they assume the system did." (Pulse pitch opener)
- "We have skills and observes but we're not fast enough." (Tatiana, six words, the entire detection-latency problem)
- "It is not zero. It compounds." (Tatiana, Code Ember pitch opener)

---

## Tension — show what is broken or at risk (1-3 sentences)

Name the structural gap. Anchor to one data point that creates urgency.

Anchor numbers from `context/findings-summary.md`:
- 93% of SRR threads request escalation
- 37% receive escalation
- 40% sit in the dead zone (unowned)
- 65+ hour delay before triage
- 17.7% of escalations involve Tier 1 merchants

The tension beat is where the data lands — but only AFTER the frontline observation in Setup. Order matters.

---

## Stakes — quantify what happens if we don't act (1-3 sentences)

Stakes must be quantified. Dollars, hours, percentages, merchant count, specialist trust.

"Merchant trust at risk" without a number is a feeling, not a stake. Don't ship vague stakes.

Examples that work:
- "$535.8M GMV merchant has filed 206 tickets in 90 days. Each ticket is 65+ hours of waiting. The pattern compounds — three repeat contacts and the merchant stops opening tickets and starts complaining to their TAM."
- "40% of escalations sit unowned. At 65+ hour median delay, that's roughly N specialist-hours per quarter of un-routed work."

Source rule: every number must be findable in `context/findings-summary.md` or `context/case-studies-digest.md`. If not, label it as forward-looking estimate.

---

## Resolution — propose the specific path forward (2-5 sentences, or sections for full-case)

Name the fix, not just the problem. "Better escalation" is filler. "Tier + Threshold + Issue Type framework reduces judgment calls from 70% to 17-27%" is specific.

Real fixes on file:
- Tier + Threshold + Issue Type framework (`#framework-tier-threshold-issuetype`)
- Commerce Loop model (`#framework-commerce-loop`)
- Page vs Ping routing decision (`#framework-page-vs-ping`)
- Single vs Platform model (`#framework-single-vs-platform`)
- Code Ember resourcing model (`#framework-code-ember`)

For full-case mode, Resolution is a phased approach with named owners.

---

## Call to Action — ask the audience to do one thing (1-2 sentences)

Named owner. Deadline or next step.

Examples that work:
- "Adam Thomson reviews the criteria draft by Friday — I'll send the link by Wednesday."
- "Vikki's sign-off on Tier 1-3 P1=P0 is the unblocker. The decision sync is Tuesday."

Examples that don't work:
- "Let me know your thoughts." (no)
- "Stay tuned for next steps." (no)
- "We'll align on a path forward." (no)

---

## Voice anchors (apply across every beat)

- Frontline first, numbers second
- Name people, projects, merchants — real ones, not "a merchant"
- Plain words — no "leverage," "synergy," "stakeholders said," "best-in-class," "going forward"
- "We," not "I" on the SRR / ES Triage work. Claire Shiminsky is co-lead.
- Tatiana's title: Enterprise Technical Support Expert
- No emojis unless explicitly requested
- Numbers exact, not rounded — 37% not "about 40%"

---

## Mode add-ons

### `executive` — ~100 words, one paragraph

All five beats compressed. Opening sentence is the hook. End with the ask. No headers, no bullets. Pure prose. Cut every sentence that doesn't advance the arc.

### `stakeholder` — ~400 words, one page

Each beat 1-2 sentences. One data callout and one human moment. Headers sparingly. Reads like a memo. End with "what we need from you."

### `full-case` — 800-1200 words

Each beat is a section. At least one direct quote or reconstructed dialogue from `context/case-studies-digest.md`. Data tables permitted in Stakes. Resolution is phased with owners.

---

## Save

`data/drafts/YYYY-MM-DD-narrative-<topic>-<mode>.md`

Present to Tatiana for review.

---

## Voice checklist

- [ ] Opens with a hook, not a description
- [ ] Frontline observation before the data
- [ ] Stakes quantified (not "trust at risk")
- [ ] Resolution names the fix, not just the problem
- [ ] CTA names an owner and a date
- [ ] At least one human moment
- [ ] Every number sourced
- [ ] No corporate language
- [ ] No emojis
- [ ] Tatiana title correct
- [ ] Claire Shiminsky named as co-lead on SRR/ES Triage work
