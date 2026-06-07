---
name: writing-principles
description: >
  Shopify's Writing Principles applied to every draft this agent produces —
  briefs, findings, dashboards, Slack messages, and meeting notes. Based on
  Shopify's Writing Principles (Vault 2599), Product Principles (Vault 1446),
  and Values (Vault 740).
  Use when drafting any written output, or when the user asks to polish, rewrite, or edit a draft.

when_to_use: >
  Automatically when drafting any written output (briefs, findings, comms,
  dashboard copy). Also use when the user says: "polish this", "rewrite this",
  "review my writing", "improve this draft", "make this shorter", "edit this
  memo", "follow Shopify style".
---

# Writing Principles

**Context:** $ARGUMENTS

## Source of truth

- [**Writing Principles** — Vault 2599](https://vault.shopify.io/docs/get-to-know-shopify/190-Shopify-s-Culture/2599-Writing-Principles) — the canonical guide
- [**Product Principles** — Vault 1446](https://vault.shopify.io/docs/get-to-know-shopify/190-Shopify-s-Culture/1446-Product-Principles) — "Polish" applies to writing too
- [**Values** — Vault 740](https://vault.shopify.io/docs/get-to-know-shopify/190-Shopify-s-Culture/740-Values) — simplicity, merchant obsession

> *"Everyone at Shopify is a writer, just like everyone at Shopify works on product."*

## When this skill runs

This skill loads automatically when any other skill is producing a draft (briefs, findings, dashboard copy, meeting notes, merchant comms). It can also be invoked directly to polish an existing piece.

## The checklist

Apply in order. Stop when the piece passes.

### 1. Follow Shopify style

Default to [Polaris product content guidelines](https://polaris.shopify.com/content/product-content). Common fixes:

| Wrong | Right |
|---|---|
| e-commerce, E-commerce, eCommerce | **ecommerce** |
| Internet | **internet** |
| Title Case Like This | **Sentence case like this** |
| "realise" | **"realize"** (American English) |
| "one,  two,  three." | **"one, two, three."** (single space after period) |
| "lions, tigers and bears" | **"lions, tigers, and bears"** (Oxford comma) |

### 2. Write simple

- **Remove idioms.** "Kick the bucket" means nothing to a non-native speaker.
- **Curb acronyms.** Spell out on first reference: "Gross Merchandise Volume (GMV)." Check [allow-listed acronyms](https://vault.shopify.io/docs/shopifolk-essentials/196-Policies---Guidelines/Guidelines/1456-Rest-in-Peace-Acronyms) before abbreviating.
- **Avoid lingo.** The evil bastard child of idioms and acronyms. Exclusionary by definition.
- **Use links heavily.** Shopify is high-context. Link instead of re-explaining. Links are the killer feature of the web — use them.
- **Avoid "at Shopify".** Ideal count in a memo is **0**. 1 at most, only if it really helps. Never more than 1.

### 3. Vary sentence length

Short sentences drive home clarity. Long sentences build context and escalate. Mix them.

Gary Provost's passage (from *100 Ways to Improve Your Writing*) is the reference:

> *"This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous. Listen to what is happening. The writing is getting boring. The sound of it drones. It's like a stuck record. The ear demands some variety.*
>
> *Now listen. I vary the sentence length, and I create music. Music. The writing sings. It has a pleasant rhythm, a lilt, a harmony. I use short sentences. And I use sentences of medium length. And sometimes, when I am certain the reader is rested, I will engage [them] with a sentence of considerable length, a sentence that burns with energy and builds with all the impetus of a crescendo, the roll of the drums, the crash of the cymbals—sounds that say listen to this, it is important."*

Also:
- **Line spaces between paragraphs.** Breathing room, not indentation.
- **Bold / italics sparingly.** Emphasis that's everywhere is emphasis that's nowhere.

### 4. Active voice, positive framing

- **Active, not passive.** Subject first, then action.
  - ❌ "It was decided that the idea should be presented at Town Hall."
  - ✅ "They decided to present their idea at Town Hall."
- **Positive framing, not negative.** Say what happened, not what didn't.
  - ❌ "The writer didn't do a good job."
  - ✅ "The writer did a poor job."
- Passive voice is a tool, not a default. Use it only when the object of the sentence matters more than the subject (e.g., defining what an Investment Plan is, not who wrote it).

### 5. Polish

> *Polish is one of [Shopify's Product Principles](https://vault.shopify.io/docs/get-to-know-shopify/190-Shopify-s-Culture/1446-Product-Principles), and is also a requirement of good writing.*

**Broken window theory:** one typo makes a reader question the whole piece. Proofread.

**Effort proportionate to impact.** Use this matrix:

| Audience size | Internal | External |
|---|---|---|
| Small | Minimal editing | Moderate editing |
| Medium | Moderate editing | Maximum editing |
| Large | Moderate editing | Maximum editing |

Keep memos short regardless of audience size. Formality: follow your gut, never be too formal. Exceptions are SEC filings and legal briefs — they have their own language.

### 6. Two fixes that almost always work

From [Writing Principles](https://vault.shopify.io/docs/get-to-know-shopify/190-Shopify-s-Culture/2599-Writing-Principles):

1. **Move the second-to-last paragraph to the top.** Cut everything no longer needed. Almost always works — try it before any other revision.
2. **The bar test.** Ask yourself: *"Would I have explained this to a friend in a bar the same way if they asked me what problem I'm trying to solve?"* If no, replace the memo with that explanation. It will be better.

## Application to ES leadership output

Every brief this agent generates should pass these principles. Specific callouts:

- `/brief leadership-weekly` — headline is one sentence and earns the read in 10 seconds; every metric has a comparison point; vary sentence length in the narrative.
- `/brief merchant-escalation` — active voice; name the ask; no filler; bar test the up-chain draft before saving.
- `/brief investigation` — lead with the call, not the methodology; links over re-explanations; apply the "move the second-to-last paragraph up" trick before saving.
- `/team-pulse` — short sentences for the headline; cut "at Shopify" entirely.
- Merchant-facing drafts (AE comms, CSM notes) — direct, positive, concrete next step + update cadence. Never send; save to drafts.

## Anti-patterns (from real ES drafts)

- Five bullets where three carry the point. Cut the bottom two.
- "I hope this finds you well" / "circling back" / "touching base." Delete on sight.
- "As mentioned above" — if the reader got it, the sentence is redundant. If they didn't, re-summarizing won't help.
- Data dumps with no interpretation. A chart with no headline is data focused, not data informed.
- Acronyms in the first paragraph of an exec brief. Spell out or cut.
- "The team handled 500 tickets." Which team? Name them. Which 500? Cite the query.
- Em dashes every sentence — they become tics. Use sparingly.

## Quick review workflow

When polishing a draft:

1. **Top fix first**: does the opening sentence earn the read? If not, move the second-to-last paragraph up.
2. **Cut 20%**: delete every phrase that doesn't add information.
3. **Active voice sweep**: find every "it was," "being done," "will be" — rewrite as subject + verb.
4. **Style sweep**: ecommerce, sentence case, Oxford commas, single spaces.
5. **Acronym sweep**: spell out or cut.
6. **Link sweep**: any concept referenced twice should be a link.
7. **Bar test**: read the opening aloud. Would I say this in a bar? If not, rewrite.
8. **Typo sweep**: one last pass for broken windows.

## Examples

### Before → After (escalation brief opener)

**Before:**
> It has come to my attention that there has been an ongoing issue regarding a merchant at Shopify, wherein their checkout has been experiencing intermittent errors that have not been resolved by the initial response from the specialist. This situation has been escalating and I wanted to circle back to provide context.

**After:**
> Vuori's checkout has been failing intermittently since Tuesday. Three tickets open; assigned specialist has exhausted standard triage. Need engineering eyes by EOD.

Cut: 52 words → 25 words. Active voice. Named merchant. Ask is explicit. No "circling back," no "at Shopify."

### Before → After (dashboard callout)

**Before:**
> Analysis shows that there may potentially be a possible increase in partner-requested interactions that are ending up in the Plus Specialist queue, which could be indicative of a routing issue that was not intended.

**After:**
> Partner interactions in Plus Specialist queue jumped 3.2x in January 2026. [Root cause: PR #4587 metadata fix.](https://github.com/shop/issues-cx-rnd/pull/4587)

Cut: 34 → 21 words. Specific number. Named cause with link. Active voice.

## Resources

- [Communicating at Shopify](https://vault.shopify.io/docs/craft/2694-Communications/195-Communicating-at-Shopify) — emails, docs, content for internal/external teams
- [Polaris Style Guide: Product content](https://polaris.shopify.com/content/product-content) — spelling, capitalization, formatting
- [Writing concisely guide](https://docs.google.com/document/d/1WSyXEhCU4weYuuQVKPwU_MjNYUrM6W-sAQyplWXMOkY/edit) — why and how to write concisely
- [Google technical writing course](https://developers.google.com/tech-writing/overview) — ~10 hours, free
- *The Elements of Style* — Strunk & White, available in [Shopify's Book Bar](https://vault.shopify.io/docs/where-we-work/13304-Digital-Experience/10470-Level-Up-Your-Context/758-Book-Bar)
