// Generate outlined SVG wordmark for ALLEYOOP — text as paths, O's as rim circles.
// Geometry mirrors logo.jsx: rimRatio .78em, rimStroke .118em, tracking -.045em.
const opentype = require("opentype.js");
const fs = require("fs");

const buf = fs.readFileSync("hk800.ttf");
const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
const FS = 100;                  // font size (px) — 1em = 100
const TRACK = -0.045 * FS;       // letterspacing
const RIM_D = 0.78 * FS;         // rim diameter
const RIM_SW = 0.118 * FS;       // rim stroke width
const OO_GAP = 0.012 * FS;       // gap between the two rims
const OO_MARGIN = 0.006 * FS;    // margin around the oo group

const ASC = font.ascender / font.unitsPerEm * FS;   // baseline offset
const capH = font.tables.os2.sCapHeight / font.unitsPerEm * FS;
const baseline = capH + 6;        // y of baseline inside viewBox (cap-height aligned, pad 6)

function glyphAdvance(ch) {
  return font.charToGlyph(ch).advanceWidth / font.unitsPerEm * FS;
}

let x = 4, parts = [], colorParts = [];

// "ALLEY"
for (const ch of "ALLEY") {
  const p = font.getPath(ch, x, baseline, FS);
  parts.push(`<path d="${p.toPathData(2)}"/>`);
  x += glyphAdvance(ch) + TRACK;
}

// the OO — two rim circles, vertically centered on cap-height
x += OO_MARGIN;
const cy = baseline - capH / 2 + 0.012 * FS;
const r = (RIM_D - RIM_SW) / 2;
const cx1 = x + RIM_D / 2;
const rimPass = `<circle cx="${cx1.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="none" stroke-width="${RIM_SW}"/>`;
x += RIM_D + OO_GAP;
const cx2 = x + RIM_D / 2;
const rimFinishAttrs = `cx="${cx2.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="none" stroke-width="${RIM_SW}"`;
x += RIM_D + OO_MARGIN + TRACK * 0.4;

// arc geometry over the OO (mirrors LobArc: rises ~.44em above rim tops)
const arcLeft = cx1 - RIM_D * 0.34, arcRight = cx2 + RIM_D * 0.34;
const arcTopY = cy - r - 0.5 * FS;
const arcBaseY = cy - r * 0.1;

// "P"
const pPath = font.getPath("P", x, baseline, FS);
parts.push(`<path d="${pPath.toPathData(2)}"/>`);
x += glyphAdvance("P");

const W = Math.ceil(x + 4), H = Math.ceil(baseline + 8);

function svg({ ink, orange, twopart = false, arc = false }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="ALLEYOOP">
  <g fill="${ink}">${parts.join("")}</g>
  <g stroke="${ink}">${rimPass}</g>
  <g stroke="${twopart ? orange : ink}"><circle ${rimFinishAttrs}/></g>${arc ? `
  <g stroke="${orange}" fill="none"><path d="M ${arcLeft.toFixed(1)} ${arcBaseY.toFixed(1)} Q ${((arcLeft + arcRight) / 2).toFixed(1)} ${arcTopY.toFixed(1)} ${arcRight.toFixed(1)} ${arcBaseY.toFixed(1)}" stroke-width="3.2"/></g>
  <circle cx="${arcLeft.toFixed(1)}" cy="${arcBaseY.toFixed(1)}" r="4.6" fill="${orange}"/>` : ""}
</svg>`;
}

const INK = "#0E0E0E", CREAM = "#F2E9C7", ORANGE = "#EE9933";
fs.writeFileSync("wordmark-ink.svg", svg({ ink: INK, orange: ORANGE }));
fs.writeFileSync("wordmark-cream.svg", svg({ ink: CREAM, orange: ORANGE }));
fs.writeFileSync("wordmark-ink-arc.svg", svg({ ink: INK, orange: ORANGE, arc: true }));
fs.writeFileSync("wordmark-cream-arc.svg", svg({ ink: CREAM, orange: ORANGE, arc: true }));
fs.writeFileSync("wordmark-ink-twopart.svg", svg({ ink: INK, orange: ORANGE, twopart: true }));
fs.writeFileSync("wordmark-cream-twopart.svg", svg({ ink: CREAM, orange: ORANGE, twopart: true }));
console.log("done", W, "x", H);
