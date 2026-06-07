---
name: shopify-store
description: Build, customize, and operate Shopify stores. Covers Online Store 2.0 (Liquid, sections, blocks, dynamic sources), Hydrogen/Oxygen headless, Checkout Extensibility, Admin/POS Extensions, Shopify Functions, B2B, Markets, the Customer Account API, and theme app extensions. Use when building or operating a Shopify storefront (whether for the user's own business at tatianathevisionary.com or for a merchant they're advising).
---

# Shopify Store · Building + Customizing + Operating

> *Build the store. Customize it through the platform's native primitives first, custom code second. Operate it with an agent.*
>
> Tatiana runs [tatianathevisionary.com](https://tatianathevisionary.com) using the Store Manager Agent she built in a weekend (composite Shopify + Klaviyo · 27 slash commands · thin-orchestration). This skill captures the playbook for building, customizing, and operating Shopify stores well.

---

## When to use

- Building a new Shopify store (her own, or advising a merchant)
- Customizing an existing Shopify theme
- Deciding between Liquid vs Hydrogen vs Hybrid architecture
- Adding Checkout / Admin / POS extensions
- Configuring B2B, Markets, or multi-currency
- Setting up Shopify Functions (Flow → Functions migration)
- Wiring an agent (like the Store Manager Agent) to operate the store

## When NOT to use

- For Shop Pulse / Quick site work (use `make/sites`)
- For the personal-brand voice / copy (use `tatianathevisionary/brand-voice.md`)
- For purely backend Shopify Admin API work without storefront implications (use `shopify-admin-api/` skills)

---

## The Default Architecture Decision

Default to **Liquid + Online Store 2.0** for 90%+ of merchants — including most Large Accounts. Only go headless when there's an explicit reason.

### When Liquid + Online Store 2.0 is right (the default)

- Most merchants
- B2B + B2C unified that don't have specific frontend customization needs
- Merchants without dedicated frontend engineering capacity
- Multi-region / multi-currency that benefit from native Markets
- Merchants whose competitive differentiation is NOT the storefront experience

**Why:** Sections + Blocks + Dynamic Sources + App Blocks give composable customization without leaving the merchant-managed experience. Performance is good by default (CDN, edge caching). The app ecosystem is the moat. Lower maintenance burden. Checkout Extensibility is theme-aware.

### When Headless (Hydrogen + Oxygen, or BYO frontend) is right

1. **Storefront UX is the brand differentiator** — Allbirds, Glossier, Cymbiotika-class brands
2. **Multi-frontend strategy** — same backend powers web + app + kiosk + smart mirror
3. **Performance at extreme scale** with custom optimization (sub-second loads with predictive prefetch)
4. **Dedicated frontend engineering capacity** — minimum 2-3 engineers committed long-term
5. **Custom interactivity beyond sections/blocks** — high-touch configurators, AR previews

### The honest framing for a merchant in a discovery call

> *"Headless is more expensive than it looks for the first 12 months and more rigid than it looks for the next 24. The right question isn't whether you can afford to go headless — it's whether the storefront experience you can't build in Liquid + Online Store 2.0 + a strong theme partner is worth a $300K-$500K/year engineering commitment for the next three years."*

---

## Building a Store · The 6-Phase Method

### Phase 1 · Store strategy + IA

Before touching anything:

- **What's the merchant's primary commerce motion?** (B2C · B2B · D2C subscription · marketplace · physical retail + online)
- **What's the catalog shape?** (10 SKUs vs 10,000 vs 1M)
- **What's the discovery model?** (search-driven · category-browsing · agent/recommendation-driven · drop-based)
- **What's the brand voice + visual language?** (premium · accessible · founder-led · enterprise-corporate)
- **What's the team capacity?** (solo founder · small team · dedicated dev/design)

Output: **A 1-page Store Strategy doc** capturing the answers above + the recommended theme architecture (which theme as starting point, OS 2.0 sections needed, third-party apps required).

### Phase 2 · Theme selection + customization

**Theme selection criteria:**

1. **Sections-everywhere support** (OS 2.0 native)
2. **App block compatibility** (extension-friendly)
3. **Performance scores** (Lighthouse 90+ on a representative product page)
4. **Brand-alignment headroom** (theme can be customized to the brand without fighting it)
5. **Maintenance status** (actively maintained in the last 6 months)

**Recommended starting themes** (varies by merchant pattern):
- **Dawn** — Shopify's flagship · maximum flexibility · OS 2.0 native (default for most merchants)
- **Sense** — content-heavy · founder-warm · good for personal-brand commerce
- **Trade** — minimal · industrial · good for B2B + technical product
- **Studio** — editorial · cinematic · good for design-led brands
- **Custom theme partner** — if budget allows · for brand-defining merchants

**Customization order:**
1. Theme settings (colors, fonts, spacing, header/footer)
2. Section + block configuration on key pages (home, product, collection, cart, account)
3. Theme app extensions (only what's necessary)
4. Custom sections (only when native ones don't fit)
5. Custom Liquid (only when sections don't fit)

### Phase 3 · Product + collection structure

**Catalog architecture:**
- Product types + tags + collections — designed before products are added
- Metafield strategy — for any merchant-specific structured data
- Variant strategy — color/size/etc · or single-variant products
- Inventory locations — single store · multi-location · multi-warehouse

**SEO + structured data:**
- Product schema.org markup (automatic in OS 2.0)
- Collection metadata for category pages
- Sitemap + robots.txt configured
- Markets language/region setup if applicable

### Phase 4 · Checkout + payment

**Checkout customization (via Checkout Extensibility):**
- Custom UI extensions (post-purchase, delivery options, shipping methods)
- Custom shipping rules (Shopify Functions, not Carrier Service API)
- Custom discount logic (Shopify Functions)
- Custom payment customizations (Shopify Functions)

**Payment configuration:**
- Shopify Payments (default for supported regions) + supplementary gateways
- Currency strategy (Markets · multi-currency · regional pricing)
- Tax strategy (Shopify Tax · Avalara · TaxJar — pick one source of truth)
- Buy Now Pay Later integrations (Affirm · Klarna · Afterpay)

### Phase 5 · Apps + integrations

**Default app stack (varies by merchant pattern):**

| Need | Default app | Alternative |
|------|-------------|--------------|
| Email + marketing automation | Klaviyo | Mailchimp · Omnisend |
| Reviews + UGC | Yotpo · Loox | Judge.me |
| Subscriptions | ReCharge · Bold | Skio · Stay AI |
| Returns | Loop Returns | Aftership Returns |
| Customer service | Gorgias · Zendesk | Re:amaze · Help Scout |
| Analytics | Triple Whale · Lifetimely | Northbeam |
| Loyalty | Smile.io · Yotpo Loyalty | LoyaltyLion |
| Bundle / cross-sell | Shopify Bundles (native) | Bold Bundles |

**Integration discipline:**
- Audit before adding (most stores have 30%+ app sprawl that could be pruned)
- Prefer apps that use Shopify's native primitives (Functions, app blocks)
- Avoid apps that require custom Liquid edits if a native alternative exists
- Document each app's purpose + ownership + cost

### Phase 6 · Operations + agent

**Day-to-day operations:**
- Inventory sync (real-time vs scheduled batch)
- Order fulfillment routing (single warehouse · multi-warehouse · 3PL)
- Customer service routing (helpdesk integration)
- Marketing cadence (Klaviyo flows · campaign calendar)
- Content management (theme customizer · blog · static pages)

**Agent-operated operations (her signature move):**

The **Store Manager Agent** she built in a weekend:
- Composite Shopify + Klaviyo agent
- 27 slash commands (`/inventory`, `/order`, `/campaign`, `/segment`, `/discount`, etc.)
- Thin-orchestration architecture (master agent owns NO domain code · each sub-agent fully self-contained)
- OAuth 2.0 Client Credentials for both APIs
- Runs `tatianathevisionary.com` end-to-end

**The pattern:** instead of operating the store through 5 different admin UIs, build a Codex agent that lets you operate it from a single chat surface. The agent calls the Shopify Admin API + Klaviyo API as needed, with structured outputs and confirmation steps for destructive actions.

---

## ERP Integration (the senior-SE-level work)

For Large Accounts merchants integrating Shopify Plus with ERP (NetSuite · SAP · Oracle · Microsoft Dynamics · Acumatica · Cin7 · Brightpearl):

**Defer to the full ERP integration playbook in** `applications/shopify-senior-se-large-accounts-unified.md` (Q7 bonus answer · ~1,290 words on inventory sync architecture · order management flow · financial reconciliation · integration platform decision · common failure modes).

**Key decisions:**
1. Source of truth per data domain (Inventory in ERP · Customer in CRM · Orders in Shopify origin · Pricing in ERP/PIM)
2. Sync architecture (scheduled batch · event-driven · hybrid with reservation layer)
3. Integration platform (native connector · iPaaS · custom · hybrid)
4. Observability + DLQ + reconciliation runs

---

## B2B-specific moves

Shopify Plus B2B has matured significantly. Native features now include:

- PO terms tracking (Net 15/30/60/90)
- Custom catalogs (per-customer pricing + product visibility)
- Customer-specific pricing
- Draft order workflows for sales reps
- Quote-to-order conversion
- Tax-exempt customer handling
- B2B-only checkout flows

**The pattern:** Use native B2B for most needs · layer Shopify Functions for custom pricing logic · only build a custom B2B layer when the merchant has genuinely unique workflows.

---

## Markets-specific moves

For multi-region merchants:

- Define markets early (country/region groupings)
- Pick a primary market (defaults inherit from this)
- Configure pricing rules per market (currency + rounding)
- Set up language localization (theme + checkout)
- Define inventory pools per market (which locations serve which market)
- Configure tax rules per market

**Common failure mode:** trying to set up Markets after launching globally. Set it up before launch · migrating after is significant work.

---

## Performance + Observability

**Default performance targets:**

| Metric | Target | Tooling |
|--------|--------|---------|
| Lighthouse Performance (mobile) | 90+ | Lighthouse CI in GitHub Actions |
| Lighthouse Accessibility | 95+ | Same |
| LCP (Largest Contentful Paint) | <2.5s | Web Vitals · Shopify Speed Score |
| INP (Interaction to Next Paint) | <200ms | Same |
| CLS (Cumulative Layout Shift) | <0.1 | Same |

**Common performance wins:**
- Audit app sprawl (each app adds JS bloat)
- Lazy-load below-the-fold images
- Use `loading="lazy"` and `fetchpriority="high"` strategically
- Self-host critical fonts (avoid render-blocking Google Fonts)
- Use Online Store 2.0 sections (better caching than custom Liquid)
- Avoid render-blocking third-party scripts (Yotpo, etc · use async loading)

**Observability:**
- Shopify Web Pixels for custom analytics events
- Privacy API for consent management
- Server-side conversion tracking for paid ads (CAPI)

---

## When this skill defers to other skills

| Task | Skill |
|------|-------|
| Building a Quick site (not a store) | `make/sites` |
| Frontend design philosophy | `make/frontend-design` |
| Visual aesthetic register | `design/ui-aesthetic` |
| Landing page (one-off, not a full store) | `make/landing-page` |
| ERP integration deep-dive | `applications/shopify-senior-se-large-accounts-unified.md` Q7 |
| Shopify Admin API specifically | `~/.cursor/skills/shopify-admin-api/` |
| Shopify App Extensions + Webhooks | `~/.cursor/skills/shopify-app-extensions-webhooks/` |
| Custom App Setup | `~/.cursor/skills/shopify-custom-app-setup/` |
| Brand voice for store copy | `tatianathevisionary/brand-voice.md` |

---

## Cross-References

- [`make/sites/SKILL.md`](../sites/SKILL.md) — Quick site directory manager
- [`design/ui-aesthetic/SKILL.md`](../../design/ui-aesthetic/SKILL.md) — visual aesthetic register
- [`make/landing-page/SKILL.md`](../landing-page/SKILL.md) — landing page conventions
- [`tatianathevisionary/`](../../../../tatianathevisionary/) — her actual store + brand
- [`projects/05-merchant-advocacy/case-flash-sales-cascade-and-risk-models.md`](../../../../projects/05-merchant-advocacy/case-flash-sales-cascade-and-risk-models.md) — the risk-modeling work that informs Large Accounts SE store-architecture decisions

---

> *"Default to Liquid. Move to headless only when there's an explicit reason. The merchants who get this right launch in weeks; the ones who don't migrate back in 18 months."*
