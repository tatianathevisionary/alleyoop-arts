# Alleyoop Arts

**The gallery for the game.** A Canadian basketball art + culture brand —
limited-edition prints, a site-first magazine, a digital motion-art gallery, and
experiences celebrating the athletes, artists, and voices who make basketball beautiful.

*The pass is the play.*

Founded by [Damion Rashford](brand/FOUNDING-STORY.md).

---

## The Motion Gallery

120 living 3D artworks. Every ball is a basketball — real seam geometry, pebbled
leather, true ballistic shot arcs, dribble physics. Every loop is seamless by
construction. Every piece previews in 16:9 (YouTube), 9:16 (Reels), and 1:1.

```bash
# run the whole gallery locally — no build step, no dependencies
python3 -m http.server 4488
# then open:
#   http://localhost:4488/3d/             ← the 20 flagship pieces
#   http://localhost:4488/3d/hundred.html ← THE HUNDRED (pieces 023–122)
#   http://localhost:4488/3d/exhibit.html ← the exhibit landing page
```

| Path | What it holds |
|------|---------------|
| `3d/*.html` | 20 flagship pieces — brand intro ident, Maze Run, Basketball Galaxy, Neon Court, Jungle Gym, the 3D Gallery space, Skyline Bounce, and more |
| `3d/engine.js` + `3d/pieces.js` | The generative engine + manifest behind THE HUNDRED — 17 motion families × 6 style-guide palettes, seeded and deterministic |
| `3d/basketball.js` | The shared ball: seams, pebble grain, bank-shot + dribble physics |
| `3d/viewframe.js` | The 16:9 / 9:16 / 1:1 aspect toggle + dual-aspect camera framing |
| `3d/renders/` | Rendered videos of every piece — mp4 + webm (+ GIFs); `renders/hundred/` holds all 100 engine pieces |
| `3d/BRAND-INTRO.md` | The 12s brand ident: storyboard, audio cues, 20s/12s/5s/2s cutdowns |
| `3d/record-renders.js` · `3d/record-hundred.js` | Headless recording pipeline (Playwright + ffmpeg) |

## Repository map

| Path | What it holds |
|------|---------------|
| `brand/` | The brand system — start here |
| `brand/FOUNDING-STORY.md` | Canonical founder narrative + verified source table |
| `brand/IDENTITY.md` · `brand/VOICE.md` | Final v1 brand copy + how everything sounds |
| `brand/BRAND.md` | Values, palette, logotype, content pillars |
| `brand/BUSINESS-PLAN.md` · `brand/EXEC-SUMMARY.md` · `brand/SPONSORSHIP-DECK.md` | The plan |
| `index.html` · `about.html` · `gallery.html` · `shop.html` | The public site (root) |
| `shop.html` + `shop.jsx` | The Shop storefront design — filterable print grid (The Collection / Street / Portraits / The Court / Celebration), edition copy, cart |
| `products/` + `products/products.csv` | 30 launch prints, Shopify-ready: titled PNGs (`aa-001`…`aa-030`) + import CSV |
| `studio/` | Internal review tools — brand guidelines, launch plan, content studio |
| `blog/` | Alleyoop magazine launch posts (drafts — quote-verified, see post 05) |
| `campaign/` | Launch campaign draft — TV scripts, captions, ad copy, store copy |
| `collections/basketball-posters/` | The original 156-poster catalog + style guide + upscaler |
| `collections/jungle-gym/` | THE JUNGLE GYM — 20 new works, dawn to streetlights |
| `art/` | The curated 30 |
| `logo/` | Standalone SVG exports — wordmark, monogram, favicon |
| `scripts/` · `outputs/` | FLUX.2 generation pipelines + reproducible batches |

## Brand quick reference

```
Palette:   #0E0E0E ink black · #F2E9C7 court cream · #EE9933 alleyoop orange
Ball/rim:  ALWAYS #EE9933 — the rule across all 156 originals and every 3D piece
Logo:      Type-only ALLEYOOP wordmark, double-O = two rims; oo monogram
Imagery:   B&W photos; full color reserved for the art
Never:     Navy, gold, crests, basketball clip-art, silhouettes, gradients
```

## Generation pipelines

```bash
# Launch 12 (painterly + cartoon lanes), 2:3 poster ratio
python scripts/generate_alleyoop_launch12.py --dry-run
python scripts/generate_alleyoop_launch12.py --lane painterly --model flux-2-pro

# Hyperreal city collection
python scripts/generate_alleyoop_hyperreal_city.py --model flux-2-max --limit 2

# Re-record the motion pieces (server must be running on :4488)
PW=$(find ~/.npm/_npx -path "*node_modules/playwright" -maxdepth 6 -type d | head -1)
node 3d/record-renders.js "$PW"     # the 20 flagships, 16:9 + 9:16
node 3d/record-hundred.js "$PW"     # all 100 engine pieces (resumable)
```

Visual rules for the art live in
`collections/basketball-posters/ALLEYOOP_ARTS_STYLE_GUIDE.md` — the brand wrapper
(this repo's `brand/BRAND.md`) and the art palettes are deliberately separate systems:
the wrapper is the gallery, the art is the show.

**Note:** GitHub Pages auto-deploy is intentionally off. This repo is the archive;
the gallery runs locally.
