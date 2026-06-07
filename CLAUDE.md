# Alleyoop Arts — Claude Code Entry

Canadian basketball art + culture brand. *The pass is the play.*

## Read first

1. `brand/IDENTITY.md` — FINAL v1 brand copy: story, mission, vision, values, the line system. Canonical — paste from it, don't rewrite.
2. `brand/VOICE.md` — how everything sounds; approved lines; the three-question test
3. `brand/BRAND.md` — palette, logotype, two-layer system (brand wrapper vs. art palettes)
4. `brand/FOUNDING-STORY.md` — full founder narrative + verified source table

## Hard rules

- **Palette is locked:** Ink Black `#0E0E0E` · Court Cream `#F2E9C7` · Alleyoop Orange `#EE9933`. Never navy, gold, gradients, or crests.
- **Logo is type-only:** ALLEYOOP wordmark, double-O as two rims (see `logo.jsx`). No basketball clip-art, no silhouettes.
- **Founder stays light on public surfaces** — one mention, pointing back at the work. Full story is for press deep-dives and the deck only.
- **Never fabricate** — founder facts come from the source table in `FOUNDING-STORY.md`; "never claim" list applies. No invented metrics, no audience numbers that don't exist.
- **Voice test before shipping copy:** could a hype account write it? (strip heat) · could a bank? (add court) · would Damion say it to a teammate? (if no, rewrite)
- **One line per surface** — never stack slogans.

## The site

**Auto-deploy is OFF** — the GitHub Pages workflow was removed 2026-06-07 (Damion's call:
no publishing to Pages). Pushes update the repo only. The previously-deployed site may
still be live until Pages is disabled in repo settings. Local preview:
`python3 -m http.server 4488` from repo root. `3d/renders/` is gitignored
(290MB of video masters, local only).

Layout: public pages at root (`index/about/gallery.html` + `landing/about/gallery/logo.jsx`
+ `site.css`, images in `art/`); internal review tools in `studio/` (brand, launch-plan,
studio, review + their jsx — they reference `../logo.jsx`); motion pieces in `3d/`
(20 flagships + generative engine `engine.js`/`pieces.js` = THE HUNDRED at
`3d/hundred.html`, all served via `python3 -m http.server 4488` from repo root).

## The art

- `collections/basketball-posters/` — 156 originals + style guide (`ALLEYOOP_ARTS_STYLE_GUIDE.md` governs art palettes — separate system from the brand wrapper)
- `scripts/` — FLUX.2 generation pipelines; `outputs/` — generated batches with prompts.json
- Print prep: `collections/basketball-posters/poster_upscaler.py`

## Skills

`.claude/skills/` — design (design-system, ui-aesthetic), creative (style-prompts,
visual-storytelling), make (landing-page, sites, shopify-store, frontend-design, deck,
prototype), write (distill, elevate, narrative-arc, writing-principles, linkedin-post).
