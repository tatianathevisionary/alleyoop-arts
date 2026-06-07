---
name: landing-page
description: Build a landing page that converts (newsletter signup · digital product · coaching offer · personal-brand site · application gate). Different from Quick sites (which are thinking surfaces) and from full Shopify stores (which are catalog-driven). A landing page does ONE thing well — get the visitor to take ONE action. Use for tatianathevisionary.com surfaces, newsletter signup pages, course/product landing, application landing, or any single-action surface.
---

# Landing Page · One Action, Executed Well

> *A landing page is not a full website. It has one goal. Everything else is in service of it.*
>
> She runs landing pages for [tatianathevisionary.com](https://tatianathevisionary.com). This skill captures the playbook.

---

## When to use

- Newsletter signup page
- Digital product (Visionary Operating System · Cursor Skill Pack · LinkedIn-Growth Playbook)
- Coaching offer / consulting service
- Course / cohort program
- Application gate (interest form for a future offering)
- Speaker / podcast bio page
- One-off campaign landing for paid traffic

## When NOT to use

- For full Shopify stores (use `make/shopify-store`)
- For thinking surfaces / Quick sites (use `make/sites`)
- For portfolio pieces (use `design/ui-aesthetic` Cinematic-Editorial register)
- For application forms inside an existing site (use a section, not a new landing)

---

## The 1-Goal Rule

Every landing page has **one goal**. Identify it before building:

| Goal | Example | The ONE action |
|------|---------|-----------------|
| Newsletter signup | tatianathevisionary.com/newsletter | Enter email → subscribe |
| Digital product purchase | Visionary Operating System | Click "Buy now" → checkout |
| Lead generation | Coaching interest form | Submit form → schedule call |
| Cohort signup | Course beta | Apply → enter waitlist |
| Application gate | Speaker bio | Contact for booking |

Everything on the page serves this goal. If a section doesn't move the visitor toward the one action, cut it.

---

## The Canonical Structure (her landing pages)

### Above the fold (the first viewport)

```
┌──────────────────────────────────────┐
│ HERO                                  │
│ - 1 sentence promise                  │
│ - 1 sentence proof / receipt          │
│ - 1 clear CTA                         │
│ - 1 visual signature (image / motion) │
└──────────────────────────────────────┘
```

**The hero formula:**

```
[Promise — what will be true for the visitor]
[Proof — one specific receipt or named outcome]
[Action — clear and specific CTA]
```

**Example (newsletter):**
> *"Become an AI Author, Not an AI User."*
> *Tatiana's newsletter — weekly playbook, prompts, and systems for ambitious builders. Free.*
> *[Subscribe →]*

**Anti-pattern:** the hero is too vague to commit ("Tatiana writes about AI") or too clever to land ("Where AI meets soul").

### Below the fold (the proof + framing)

```
┌──────────────────────────────────────┐
│ THE ONE-LINE FRAME                    │
│ - What this is (what's inside)        │
├──────────────────────────────────────┤
│ THE PROOF / RECEIPTS                  │
│ - 3-5 specific outcomes               │
│ - Named numbers + sources             │
├──────────────────────────────────────┤
│ THE PILLARS / TOPICS                  │
│ - 3-7 things the visitor will get     │
├──────────────────────────────────────┤
│ FROM THE AUTHOR (a personal moment)   │
│ - 1 paragraph in her voice            │
│ - Founder-warm                        │
├──────────────────────────────────────┤
│ THE CTA (repeated)                    │
│ - Same action as the hero             │
├──────────────────────────────────────┤
│ QUIET FOOTER                          │
│ - Contact + privacy + minimal links   │
└──────────────────────────────────────┘
```

### The CTA (repeated)

CTAs appear at:
1. Hero (above the fold)
2. After the proof section (mid-page)
3. After the from-the-author section (just before footer)

Same wording each time. Same destination. Consistency > novelty.

---

## Voice Register

The landing page voice is `Brand-Warm` per [`design/ui-aesthetic/SKILL.md`](../../design/ui-aesthetic/SKILL.md):

- Title case for headlines, sentence case for body
- One emoji per section header maximum
- Conversational paragraphs (3-5 sentences)
- Personal asides when authentic
- Receipt-heavy, but with narrative
- Clear CTAs ("Subscribe to the newsletter — free, weekly" not "Sign up now!")

Anti-patterns (never):
- ❌ "5 ways to..." or "Top 10..." headlines
- ❌ Productivity-bro tone
- ❌ Generic AI-bio prose
- ❌ "Game-changer" / "groundbreaking" / "leverage"
- ❌ Calling herself a "thought leader"
- ❌ "Limited time only" pressure tactics
- ❌ Performative humility

---

## Visual Direction

Default: **Brand-Warm aesthetic register** from `design/ui-aesthetic`.

**Color palette:**
- Warm cream surface (`#fafaf8`)
- Violet accent (`#7B61FF`) for primary CTA
- Magenta accent (`#FF4F9C`) for personal-brand surfaces (signature 🦄💜 pairing)
- Dark ink (`#1a1a1a`) for text
- Muted (`#6b6b6b`) for secondary copy

**Typography:**
- Display: DM Serif Display (headlines)
- Body: DM Sans (everything)
- Mono: IBM Plex Mono (numbers, callouts, code)

**Spacing:**
- Generous negative space
- Single-column layouts (max width ~880px on desktop)
- Mobile-first responsive

**Motion (sparingly):**
- Hero glow pulse (subtle radial gradient breathing 10s loop)
- Fade-in on scroll for sections
- Hover lift for CTAs (2px translateY)
- No bouncy animations
- No parallax overuse
- No scroll-jacking

---

## The 5 Landing-Page Patterns She Uses

### 1. The Newsletter Signup

**Goal:** email subscribe
**Length:** short (1-2 viewports)
**Key sections:** Hero · Why subscribe (3 pillars) · Recent posts preview · CTA · Footer
**Conversion target:** ~3-8% of organic traffic

### 2. The Digital Product Page

**Goal:** purchase
**Length:** medium (3-5 viewports)
**Key sections:** Hero · Problem framing · What's inside · For whom (and not) · Outcome receipts · FAQ · Pricing · CTA · Footer
**Conversion target:** ~1-3% of warm traffic · 0.3-1% of cold traffic

### 3. The Coaching / Consulting Offer

**Goal:** book a discovery call
**Length:** medium (3-5 viewports)
**Key sections:** Hero · Who this is for · The method · Receipts (case studies if available) · Process (what to expect) · Pricing transparency · Apply form · Footer
**Conversion target:** ~5-15% of warm traffic to apply form

### 4. The Cohort / Course Application

**Goal:** application to waitlist
**Length:** medium (3-5 viewports)
**Key sections:** Hero · The transformation promised · Curriculum · Past cohort outcomes (if available) · Schedule + format · Investment + ROI · Application form · Footer
**Conversion target:** ~10-25% of warm traffic to apply

### 5. The Personal-Brand Landing (catch-all home)

**Goal:** route to one of the above
**Length:** short (1-2 viewports + nav)
**Key sections:** Hero · About me (60-second version) · What I'm working on · Where to subscribe / shop / book · Connect (LinkedIn, email)
**Conversion target:** route 30%+ of visitors to a primary surface

---

## Technical Stack Defaults

**For tatianathevisionary.com surfaces:**
- Shopify Online Store 2.0 + custom theme (anchor at the store level)
- Custom Liquid section for the hero
- Klaviyo embedded form for email capture
- Klaviyo flows for nurture sequence
- Custom theme app extension for any merchant-side analytics

**For standalone landings (when needed):**
- Single HTML + embedded CSS (minimal JS)
- Hosted on Quick (`*.quick.shopify.io`) for internal · Cloudflare Pages / Vercel for external
- Form submissions to Klaviyo via Klaviyo's hosted form endpoint
- Plausible / Fathom for privacy-conscious analytics

---

## Conversion Optimization

**The 3 levers (in priority order):**

1. **The Promise** — does the hero promise something the visitor genuinely wants?
2. **The Proof** — does the visitor believe Tatiana can deliver on the promise?
3. **The Action** — is the CTA frictionless? (Single field signup beats multi-step.)

**The 3 anti-patterns to watch for:**

1. **Vague promise** — "Tatiana writes about AI" doesn't commit to anything
2. **Unsourced proof** — "Trusted by thousands" without specific names/numbers
3. **Multi-step action** — make the visitor do 3 things instead of 1

**Test cycle:**
- Don't A/B test the hero copy before you have 1,000+ visitors
- Don't optimize before you have a baseline conversion rate
- The first version is the proof-of-concept · iterate after launch

---

## Audit Checklist (before launching)

- [ ] **One goal** identified and visible above the fold
- [ ] **Promise** clear in 1 sentence
- [ ] **Proof** specific (named numbers, named outcomes)
- [ ] **Action** clear and specific (not "Sign up now")
- [ ] **CTA** appears 3+ times on the page with identical wording
- [ ] **Mobile responsive** (most visitors are mobile)
- [ ] **Voice** matches `tatianathevisionary/brand-voice.md`
- [ ] **No anti-patterns** ("game-changer", "thought leader", "limited time only", etc.)
- [ ] **Privacy / contact** in footer
- [ ] **Analytics + form tracking** confirmed working
- [ ] **No external dependencies** that could fail at load
- [ ] **Page loads in <2s** on mid-tier mobile

---

## Cross-References

- [`design/ui-aesthetic/SKILL.md`](../../design/ui-aesthetic/SKILL.md) — visual aesthetic register (Brand-Warm)
- [`make/shopify-store/SKILL.md`](../shopify-store/SKILL.md) — full store work
- [`make/frontend-design/SKILL.md`](../frontend-design/SKILL.md) — frontend design philosophy
- [`tatianathevisionary/brand-voice.md`](../../../../tatianathevisionary/brand-voice.md) — public-brand voice
- [`tatianathevisionary/landing-page-copy.md`](../../../../tatianathevisionary/landing-page-copy.md) — actual landing copy examples
- [`tatianathevisionary/product-roadmap.md`](../../../../tatianathevisionary/product-roadmap.md) — which products to build landing pages for

---

> *"A landing page is not a brochure. It's a hinge. Either the visitor takes the action — or you haven't done the page's job."*
