# Alleyoop Arts

**The gallery for the game.** A Canadian basketball art + culture brand —
limited-edition prints, a site-first magazine, and experiences celebrating the
athletes, artists, and voices who make basketball beautiful.

*The pass is the play.*

Founded by [Damion Rashford](brand/FOUNDING-STORY.md).

---

## Repository map

| Path | What it holds |
|------|---------------|
| `brand/` | The brand system — start here |
| `brand/FOUNDING-STORY.md` | Canonical founder narrative + verified source table |
| `brand/BRAND.md` | Values, palette, logotype, voice, content pillars |
| `brand/BUSINESS-PLAN.md` | Full plan (non-profit + Shopify hybrid, Canada-first) |
| `brand/EXEC-SUMMARY.md` | One-page summary |
| `brand/SPONSORSHIP-DECK.md` | 10-slide deck outline |
| `brand/DESIGN-BRIEF.md` | Self-contained handoff for designers / design AIs |
| `collections/basketball-posters/` | The original 156-poster catalog + style guide + upscaler |
| `scripts/` | FLUX.2 generation pipelines (Launch 12 lanes, hyperreal city collection) |
| `outputs/` | Generated batches with their `prompts.json` for reproducibility |

## Brand quick reference

```
Palette:   #0E0E0E ink black · #F2E9C7 court cream · #EE9933 alleyoop orange
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
```

Visual rules for the art live in
`collections/basketball-posters/ALLEYOOP_ARTS_STYLE_GUIDE.md` — the brand wrapper
(this repo's `brand/BRAND.md`) and the art palettes are deliberately separate systems:
the wrapper is the gallery, the art is the show.
