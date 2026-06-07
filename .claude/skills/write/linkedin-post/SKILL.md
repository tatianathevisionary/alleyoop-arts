---
name: linkedin-post
description: >
  Draft LinkedIn posts in Tatiana's voice — observational opening, bridge, source chain with honest deferral admission, one bolded thesis, work-to-life bridge, productive-question close. Use when sharing a course, project, structural pattern, or moment of recognition with her network. Four post types — observation, course, project, reflection. Three-identity stack (work-Tatiana, Visionary, Virtual, with Human-Tatiana underneath) determines voice register. ALWAYS saves draft to data/drafts/; NEVER auto-publishes.
argument-hint: '[observation|course|project|reflection] [topic or trigger]'
allowed-tools: Read, Write, Grep, Glob
---

# linkedin-post

Draft LinkedIn posts in Tatiana's voice. Cascade-pattern, structural-reading, work-to-life-bridge style. Drafts only; never publishes.

## Quick start

- "I'm seeing a lot of posts about X today" → `observation`
- "I want to share a course or framework" → `course`
- "I shipped X — let's tell the structural story" → `project`
- "I've been thinking about a pattern" → `reflection`

All four modes share the same template skeleton (`assets/template.md`) — components swap, shape stays.

## When to use

- The network is all posting about deferred tax decisions and Tatiana wants to surface the cascade pattern underneath
- A 27-minute course (Dave Crenshaw's "How to Ask Productive Questions") finally clicked after months of deferral
- The HD39 Pulse vision / Proactive Shop Agent landed and she wants the structural lesson (not the humble brag) on the public feed
- A pattern she's noticed at work mirrors a pattern she's noticed at home

## Safety rail

**Save draft to `data/drafts/YYYY-MM-DD-linkedin-post-<type>-<slug>.md`. Present for Tatiana review. NEVER publish directly to LinkedIn. NEVER post the link to any other platform without explicit go-ahead.**

The next move is always Tatiana's. Don't post the day the draft is written — 12-hour delay catches over-claiming.

## Steps

1. **Identify which identity is leading** (see `assets/template.md` frontmatter check). If ambiguous, ask Tatiana before drafting.
2. **Read context.** `identity/soul.md` for voice. Recent `data/drafts/linkedin-post-*` files to avoid voice drift. `context/findings-summary.md` if the post draws on SRR / ES Triage work. If the post references a course or tool, read the actual course description first — pull the real thesis, don't paraphrase.
3. **Verify any named people** via `/agent-vault user get` before tagging.
4. **Draft using `assets/template.md`** — observational opening, bridge, source chain, optional deferral admission, one bolded thesis, work-to-life bridge, real-question line, productive-question close, optional source-chain courtesy close.
5. **Word count check.** 200-300 words. 305 max if the closing line is doing real work.
6. **Save** to `data/drafts/` and output to chat with markdown intact (so Tatiana can copy directly to LinkedIn).
7. **Offer 1-2 variant lines** Tatiana can swap in (alternate thesis framings, alternate closing questions).
8. **Note posting tips** relevant to the moment (timing, expected engagement, anything to watch in comments).
9. **Wait for go-ahead.** Don't push to LinkedIn. Don't share to other channels.

## Identity stack (the most important context the skill needs)

| Identity | Where it lives | When it leads on LinkedIn |
|---|---|---|
| **Work-Tatiana** | Slack / Vault / internal proposals | Projects shipped at Shopify, team shoutouts, structural observations from the day job |
| **Tatiana the Visionary** | tatianathevisionary.com / newsletter | Creative work, broader life observations |
| **Virtual Tatiana** | Hack Days arc / Proactive Shop Agent prototype | Agentic commerce, AI products she's prototyped |
| **Human-Tatiana** *(layer underneath)* | All three | Genuinely personal — tax day, family, the moments where structural rigor is applied to her own life |

Valid hybrids: work-led/virtual-flavored, virtual-led/human-flavored, visionary-led/work-anchored, human-led/work-anchored.

Anti-pattern: work-led/human-flavored. Reads as oversharing unless the topic is genuinely shared.

## Voice rules (strictly enforced)

- **200-300 words max.** Hard ceiling.
- **One bolded thesis line per post.** Multiple bolds dilute the share-able sentence.
- **End with a real question, not rhetorical.** Answerable, not vague.
- **Em-dashes for thinking pivots.**
- **Lowercase first words OK in casual moments** (especially reflection posts).
- **No emoji** (or one strategic closing emoji on a celebration moment).

Forbidden: `#grateful`, "agree?", "thoughts?", "keep reading", "thread incoming", "Drop a comment if...", listicles, humble brag openings ("I'm so honored to share...").

### Day-job phrasing (the hard rule)

What Tatiana gets paid for: **Enterprise Technical Support Expert at Shopify Enterprise Support.** Not "Senior Support Specialist." Not "TPM." Not "Support Engineer."

The lens she brings: cascade pattern thinking, structural reading, system-design instincts.

These are NOT the same thing. Conflating them over-claims.

- ❌ "I'm someone who builds systems for a living"
- ❌ "As a TPM at Shopify..."
- ❌ "I write product proposals all year"
- ✓ "For a living, I'm an Enterprise Technical Support Expert at Shopify Enterprise Support. I solve high-stakes problems for our largest merchants every day."
- ✓ "The pattern I keep noticing in this work: ..."

### Source-chain rules

- If a course / tool / concept came from someone else, name them with @-mention
- If you deferred clicking for weeks/months, say so. The honest deferral admission is the post's most relatable move.
- If the deferred click is itself an example of the post's thesis, name THAT in the closing parenthetical.
- Never name a source for credibility-by-association. Peer attribution works; name-dropping is gross.

## Gotchas

- **The three-identity stack is non-optional.** Work-led post in the visionary register reads off; human-led post in the work register reads cold. If unsure, ask.
- **"Enterprise Technical Support Expert" is the exact title.** Not "Senior Support Specialist," not "TPM."
- **One bolded line per post, max.**
- **The closing question must be answerable.** "What's the question you've been avoiding asking?" lands. "Thoughts?" doesn't.
- **No emoji, period — except a single strategic closing emoji on a celebration moment.**
- **Don't post the day you wrote it.** Let it sit overnight. The 12-hour sit catches over-claiming.
- **Word count matters.** 200-300 is the band that lands. Over 350 gets scroll-skipped.
- **Co-builders named first in `project` posts.** Attribution non-optional.

## Examples

### Example 1 — `project` post for HD39 Pulse vision

See `references/example-pulse-post.md` for the full worked draft. 274 words. Virtual-led, work-anchored. Co-builders @Moujtaba and HD39 build team named. Honest deferral admission. One bolded thesis ("What if Shop Agent knew what you wanted before you asked?"). Work-to-life bridge: support-desk signals + kid-and-dinner signals. Productive-question close.

### Example 2 — `course` post for Dave Crenshaw's productive-questions course

Input: `/linkedin-post course "How to Ask Productive Questions by Dave Crenshaw"`

Steps:
1. Identity: human-led, work-anchored credibility
2. Read the LinkedIn Learning description for the actual thesis (no paraphrasing from memory)
3. Source chain: @Sheldon Trees attribution
4. Honest deferral admission: "I saw it months ago. I didn't click. Today I finally did."
5. Bolded thesis: **"The questions you don't ask are the deferred decisions in your life."**
6. Work-to-life bridge: 3 examples from frontline support, 3 from personal life
7. Closing question: "What's the question you've been avoiding asking?"
8. Source-chain close to Sheldon

Result: Draft saved to `data/drafts/YYYY-MM-DD-linkedin-post-course-productive-questions.md`.

### Example 3 — `observation` post on a network pattern

Input: `/linkedin-post observation "Today's feed is all about layoffs and second-act careers"`

Steps:
1. Identity: work-led with human-flavored close
2. Concrete opening naming the pattern
3. Bridge: "Same shape."
4. Structural reading: cascade of deferred career questions
5. Work-to-life bridge: ES Triage 65-hour delays / personal deferred career decisions
6. Closing question that meta-honors the lesson

Result: Draft saved to `data/drafts/YYYY-MM-DD-linkedin-post-observation-second-acts.md`.

## Anti-patterns (what NOT to write)

- ❌ "Today I want to share something incredible..." — over-claiming
- ❌ "5 lessons I learned from..." — listicle
- ❌ "Drop a comment if you agree" — engagement bait
- ❌ "#grateful #blessed #leadership" — hashtag spam
- ❌ "As a [identity] in [field], I feel..." — identity-first opening
- ❌ "Just shipped X! Couldn't have done it without [list of 12 names]" — humble brag

## Posting tips (operational)

- **Best time:** Tue-Thu morning 7-9am ET, or Fri lunch ET. Avoid high-noise days.
- **Don't post the day you wrote it.** 12-hour sit catches over-claiming.
- **If someone asks "what's YOUR question?"** in comments, don't answer specifically. Reply: "I'm sitting with it. That's part of the practice."
- **If the post gets quoted with a different framing,** don't correct. "That's a generous read — thank you."
- **If a recruiter DMs after a strong post,** save the DM. Don't reply same day. Reply with curiosity, not pitch.

## Troubleshooting

### Symptom: Draft sounds preachy or lecture-y

Cause: Skipped the deferral admission or the human-Tatiana layer.
Solution: Add an honest "I saw it. I didn't click. Today I finally did." The vulnerability makes it land.

### Symptom: Over-claiming the day job

Cause: Wrote "I build systems for a living" or "As a TPM at Shopify."
Solution: Revert to "For a living, I'm an Enterprise Technical Support Expert at Shopify Enterprise Support." Accurate, defensible.

### Symptom: Multiple bolded lines

Cause: Diluting the share-able sentence.
Solution: Pick the single quotable line. Un-bold the rest.

## Pairs with

- `/vault-post` — internal counterpart for Shopify-only visibility
- `/slack-post` — Shopify-internal surface of the same announcement
- `/weekly-impact` — source of metrics that might anchor a project post
- `/agent-vault` — verify spellings before tagging colleagues
