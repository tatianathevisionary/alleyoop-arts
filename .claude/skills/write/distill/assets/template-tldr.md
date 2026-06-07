# TLDR template — 3-5 bullets, every bullet a number

Use for Slack channels, doc openings, skim readers. The reader who only sees the first 3 bullets gets the entire argument.

Rule: every bullet contains a number AND its implication ("so what"). No filler.

---

## Template

```
**<topic + the finding in one line — the topic alone is filler>**

- <number> <claim>. <one-line "so what" — what the number means structurally>.
- <number> <claim>. <one-line "so what">.
- <number> <claim>. <one-line "so what">.
- <number> <claim>. <one-line "so what">.   (optional 4th)
- <number> <claim>. <one-line "so what">.   (optional 5th)

<one-line ask with named owner + date or trigger>

— <author> · <date>
```

---

## Worked TLDR — SRR 105-thread analysis

```
**SRR escalation dead zone — 105 threads analyzed. The problem is structural, not staffing.**

- 93% of SRR threads request escalation, 37% receive it. The system is asking, not answering.
- 40% sit unowned in the dead zone. Not declined, not routed — invisible.
- 65+ hours median delay before triage. By hour 65, the merchant has filed ticket two.
- 17.7% of escalations involve Tier 1 merchants. The merchants whose contracts contain the language we're failing to honor.

Decision needed Tuesday from Vikki: Tier 1-3 P1=P0 routing — unblocks the cross-support refresh. Tatiana + Claire walk through with Adam first.

— Tatiana · 2026-05-12
```

---

## Voice anchors

- One line title that carries the finding, not just the topic
- Every bullet has a number
- Every bullet has a "so what" clause
- No filler phrases ("it's worth noting," "interestingly," "as you can see")
- Frontline first when relevant ("the system is asking, not answering")
- Real numbers from `context/findings-summary.md`
- Real merchants when relevant (Omaze, Harry's, Colgate Palmolive, Estrid Studios)
- Co-lead named on SRR / ES Triage work
- Closing ask names owner + date
- Status footer (author + date) prevents premature sharing
- No emojis
- No "leverage" / "synergy" / "stakeholders said"

---

## Save

`data/drafts/YYYY-MM-DD-distill-tldr-<topic>.md`

For Slack-paste use cases, format the file with the body inline so Tatiana can copy directly into a Slack message.
