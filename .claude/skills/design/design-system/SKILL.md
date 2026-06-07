---
name: design-system
description: Tatiana's codified visual design system as reusable infrastructure — the token layer (tokens.css), Tokens Studio JSON (tokens.tokens.json), living styleguide (styleguide.html), and the markdown spec (DESIGN-SYSTEM.md), plus the code-to-Figma push workflow that writes the tokens into Figma as Variables (Identity/Light/Shop modes) and a bound styleguide frame. Load this when building any new surface that should consume the system, when syncing tokens to Figma, or when extending the system. Pairs with ui-aesthetic (the prose register guide).
---

# Design System · Tatiana's token layer + Figma sync

> The `ui-aesthetic` SKILL is the *prose* (registers, taste, anti-patterns). This SKILL is the *infrastructure* — the actual tokens, the import file, and the push-to-Figma method. Author, don't re-derive.

The system lives in `design-system/` at repo root:

| File | Role |
|------|------|
| `tokens.css` | Source of truth. `:root` cross-cutting scales + 3 theme blocks (`[data-theme="identity|light|shop"]`). 85 tokens. |
| `tokens.tokens.json` | Tokens Studio format. Import via the free Tokens Studio Figma plugin → native variables. |
| `styleguide.html` | Living reference. Consumes `tokens.css`, renders every token, switches all 3 themes live. Doubles as a portfolio artifact. |
| `DESIGN-SYSTEM.md` | When-to-use rules, register decision tree, the 4 reconciliation decisions. |

Figma file (her own Pro team, "Tatiana Design System"): `w4njkam9pjqBJU3djbBbGc` — holds the variable collections + full styleguide frame (color, type scale, components). The earlier "Untitled" file `QHUs2M8DjTO2cTfjcVvGri` was the first draft and can be deleted.

## The three themes

Only **surfaces and ink** change per theme; type/space/radius/shadow/motion and brand accents are theme-independent (`:root`).

| Theme | bg | ink | accent | Use for |
|-------|-----|-----|--------|---------|
| `identity` (default) | `#0a0610` | `#f8f5ff` | violet `#7b61ff` | Cinematic-editorial — portfolio, identity, leadership |
| `light` | `#fafaf8` | `#1a1a1a` | violet `#7b61ff` | Brand-warm — newsletter, products, marketing |
| `shop` | `#0d0d0d` | `#ffffff` | green `#008060` | **Only** Shopify / Shop Pulse surfaces |

Components written against `--accent` re-theme automatically. Never use `shop` for personal-brand work.

## Signature tokens (don't drift from these)

- **Accents:** violet `#7b61ff` (signature) + magenta `#ff4f9c` (Pulse) + lavender ink ramp `#f8f5ff → #bcb3d4 → #7a6f95 → #4d4368`. These appear in both this system AND the flagship cinematic artifacts — they are settled.
- **Fonts:** Cormorant Garamond (display) · DM Sans (body) · IBM Plex Mono (numbers/labels) · Caveat (margin notes). **No Inter** — it's the de-facto fallback in older files but not canonical.
- **8pt spacing**, radii 8/12/14/20, hover `--lift: translateY(-2px)`, easings `--ease-out` (entrances) / `--ease-in-out` (loops).

## Using the system on a new surface

```html
<link rel="stylesheet" href="design-system/tokens.css">
<html data-theme="identity">  <!-- or light / shop -->
```
Reference tokens, never raw hex: `background: var(--accent); border-radius: var(--radius-md);`

## Pushing tokens INTO Figma (code → design)

The figma-remote MCP `use_figma` tool runs JS via the Plugin API. Requires a **Full seat** + edit permission. Two steps: variables first, then a bound styleguide frame.

### Step 1 — Variables
Two collections:
- **`Tatiana / Primitives`** (1 mode "Value"): brand colors (`color/violet`…), `risk/*`, and FLOAT tokens `space/*`, `radius/*`, `text/*`. Use `/` in names to create Figma groups.
- **`Tatiana / Theme`** (3 modes: Identity/Light/Shop): `bg`, `surface*`, `ink*`, `border*`, `accent*` — set per-mode values so the collection re-themes by mode.

```js
const c = figma.variables.createVariableCollection("Tatiana / Theme");
c.renameMode(c.modes[0].modeId, "Identity");
const mLt = c.addMode("Light"), mSh = c.addMode("Shop");
const v = figma.variables.createVariable("bg", c, "COLOR");
v.setValueForMode(c.modes[0].modeId, {r:.04,g:.02,b:.06,a:1}); // rgba 0–1 floats
```

### Step 2 — Styleguide frame, fills BOUND to variables
```js
const allVars = await figma.variables.getLocalVariablesAsync();
const V = {}; allVars.forEach(x => V[x.name] = x);
function bindFill(varObj){ return figma.variables.setBoundVariableForPaint({type:"SOLID",color:{r:0,g:0,b:0}}, "color", varObj); }
rect.fills = [bindFill(V["color/violet"])];        // swatch pulls from the live variable
frame.setExplicitVariableModeForCollection(themeCol, identityModeId); // pin a theme on a frame
```

### Gotchas (learned the hard way)
- **`resize()` on an auto-layout frame flips that axis to FIXED sizing.** Set `primaryAxisSizingMode="AUTO"` / `counterAxisSizingMode="AUTO"` *after* any resize, or the frame pins to the resized height and clips all content. For wrap rows: `layoutWrap="WRAP"`, primary FIXED (set width), counter AUTO (hug height).
- `console.log` output is NOT returned — `return JSON.stringify(...)` to get values back.
- Load fonts with `figma.loadFontAsync` before setting text; wrap in try/catch with an Inter fallback (Cormorant/DM Sans/IBM Plex/Caveat are in Figma's library but guard anyway).
- 20kb response limit per call, no image assets, no custom (uploaded) fonts. Build incrementally; screenshot to verify.
- `figma.currentPage = x` unsupported → `await figma.setCurrentPageAsync(x)`.

### Verify
`get_screenshot` the frame node, `curl` the returned URL, Read the PNG. Check the frame grew (height ≠ the resize floor) and swatches show themed values.

## The other direction (Figma → code)
If she designs in Figma first: `get_variable_defs` on a node pulls variable names/values; reconcile against `tokens.css` and document divergence in `DESIGN-SYSTEM.md`.

## Cross-references
- `design/ui-aesthetic` — the register definitions, signature moves, anti-patterns (load alongside this)
- `make/frontend-design` — generic distinctive-frontend philosophy
- `portfolio/about-tatiana/tatiana-blueprint.html` — Identity-theme reference artifact
