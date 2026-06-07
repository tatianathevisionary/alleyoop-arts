# Alleyoop Arts — Products

The launch collection, packaged for commerce. 30 limited-edition prints with
SKUs, titles, descriptions, editions, and pricing.

## What's here

- **30 images** named by product handle (`aa-001-alley-runner.png` …) — SKU order
- **`products.csv`** — Shopify product import file, ready to upload as-is
  (Shopify Admin → Products → Import). Image URLs point at this repo's live
  Pages site, so Shopify fetches them automatically on import.

## The collection at a glance

| | |
|---|---|
| Products | 30 |
| Series | The Labyrinth (7) · Street (8) · Portraits (6) · The Court (4) · Celebration (3) · Portals (2) |
| Editions | 25–60 per work · **1,425 total units** |
| Pricing | $190–$280 CAD (single size, 24 × 36 in) |
| Sell-out value | **$315,650 CAD** |
| SKUs | AA-001 … AA-030 |

## Copy rules (already applied)

Descriptions follow `../brand/VOICE.md` product rules: the story in two sentences
max, then facts — edition, medium, size. No "exclusive", no "stunning", no
exclamation points. Standard spec line:

> Edition of N, numbered by hand. Archival pigment print on cotton rag,
> 24 × 36 in (2:3). Ships rolled, with the Alleyoop Arts seal.

## Before selling physical prints (open items)

1. **Upscale** — masters are 1024×1536; run `collections/basketball-posters/poster_upscaler.py` on these 30 before sending anything to a printer (24×36 needs ~7200×10800 for 300dpi)
2. **Confirm pricing** — current prices are the design-phase placeholders; check print + ship costs first
3. **Add sizes (optional)** — duplicate variant rows in the CSV with Option1 Value "18 × 27 in" at a lower price
4. **Printer + fulfillment** — choose archival print partner; "ships rolled" assumes tube fulfillment
