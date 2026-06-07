# Alleyoop Arts — Logo Files

Standalone SVG exports of the brand marks. The living, parametric source is
`../logo.jsx` (React components used by the site); these files are the portable
versions for print, social, partners, and anywhere React isn't.

All wordmark letterforms are **converted to vector outlines** (Hanken Grotesk
ExtraBold, outlined via opentype.js) — no font needed, print-ready at any scale.

## Files

| File | What it is | Use on |
|------|-----------|--------|
| `wordmark-ink.svg` | ALLEYOOP, rims plain | Cream/light grounds |
| `wordmark-cream.svg` | same, cream letters | Ink/dark grounds |
| `wordmark-ink-arc.svg` | + orange lob arc over the OO | Hero placements, light |
| `wordmark-cream-arc.svg` | same, dark grounds | Hero placements, dark |
| `wordmark-ink-twopart.svg` | finish rim in orange | Light grounds |
| `wordmark-cream-twopart.svg` | same, dark grounds | Dark grounds |
| `monogram-ink.svg` / `-cream.svg` | two overlapping rims | Avatars, stamps, seals |
| `monogram-accent-ink.svg` | finish rim orange | Light grounds |
| `monogram-tonal-ink.svg` | tone-on-tone on ink (g&g-style) | Packaging, quiet surfaces |
| `ball-solid.svg` | flat orange basketball, true seams | Accents, stickers |
| `ball-line-ink.svg` | line-only ball | Watermarks, pattern |
| `favicon.svg` | orange ball mark | Browser tab (already inlined in site pages) |

## Geometry (locked — matches logo.jsx)

- Rim diameter `.78em` · rim stroke `.118em` · tracking `-.045em` · weight 800
- The two O's are perfect circles, not letterforms: left = the pass, right = the finish
- Lob arc: orange, release dot on the pass rim, finishing over the second rim
- Colors: Ink `#0E0E0E` · Cream `#F2E9C7` · Orange `#EE9933` — never anything else

## Regenerating the wordmark

The generator script is `gen.js` in this folder (`npm i opentype.js`, drop in the font as `hk800.ttf`, `node gen.js`). It downloads
Hanken Grotesk 800 (fontsource TTF), outlines ALLEY + P with opentype.js, and places
the rim circles + arc with the locked geometry. Adjust constants at the top
(`RIM_D`, `RIM_SW`, `TRACK`) to iterate.
