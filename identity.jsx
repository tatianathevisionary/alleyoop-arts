// identity.jsx — Foundations, Colour explorations, Type + shared art helpers.

// ─────────────────────────────────────────────────────────────
// MazeField — the labyrinth motif that runs through the art catalog.
// ─────────────────────────────────────────────────────────────
function MazeField({ stroke, cols = 7, rows = 11, seed = 1, strokeW = 6, opacity = 1, cap = true }) {
  let s = (seed * 9301 + 49297) % 233280 + 7;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const tiles = ["v", "h", "br", "bl", "tr", "tl", "br", "tl", "v", "h"];
  const C = 100, W = cols * C, H = rows * C;
  const paths = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const t = tiles[Math.floor(rnd() * tiles.length)];
      const cx = x * C + C / 2, cy = y * C + C / 2;
      const l = x * C, r = (x + 1) * C, tp = y * C, bt = (y + 1) * C;
      let d = "";
      if (t === "v") d = `M${cx} ${tp} L${cx} ${bt}`;
      else if (t === "h") d = `M${l} ${cy} L${r} ${cy}`;
      else if (t === "br") d = `M${cx} ${bt} L${cx} ${cy} L${r} ${cy}`;
      else if (t === "bl") d = `M${cx} ${bt} L${cx} ${cy} L${l} ${cy}`;
      else if (t === "tr") d = `M${cx} ${tp} L${cx} ${cy} L${r} ${cy}`;
      else if (t === "tl") d = `M${cx} ${tp} L${cx} ${cy} L${l} ${cy}`;
      paths.push(d);
    }
  }
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, opacity }} aria-hidden="true">
      {paths.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={stroke} strokeWidth={strokeW}
          strokeLinecap={cap ? "round" : "butt"} strokeLinejoin="round" />
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Poster — neutral 2:3 placeholder standing in for a catalog artwork.
// ─────────────────────────────────────────────────────────────
const COLLECTIONS = {
  maze:   { name: "The Labyrinth", bg: "#1C3A3A", line: "#345F5A", ball: "#EE9933", ink: "#F2E9C7" },
  sunset: { name: "Sunset Break",  bg: "#DE6E27", line: "#F2A83E", ball: "#14223A", ink: "#2A1405" },
  sky:    { name: "Sky Hook",      bg: "#2E5E8C", line: "#5E97C8", ball: "#EE9933", ink: "#F2E9C7" },
  cream:  { name: "Paper Court",   bg: "#EFE4BD", line: "#CCBF90", ball: "#EE9933", ink: "#0E0E0E" },
  ink:    { name: "Night Game",    bg: "#141414", line: "#2C2C2C", ball: "#EE9933", ink: "#F2E9C7" },
};

function Poster({ collection = "maze", seed = 3, ballPos = "tr", style, ballScale = 1, rim = false, src, alt }) {
  if (src) {
    return (
      <div className="poster" style={{ background: "#1C3A3A", ...style }}>
        <img src={src} alt={alt || ""} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    );
  }
  const c = COLLECTIONS[collection] || COLLECTIONS.maze;
  const pos = {
    tr: { top: "16%", left: "58%" }, tl: { top: "18%", left: "16%" },
    br: { top: "58%", left: "58%" }, bl: { top: "56%", left: "14%" }, c: { top: "40%", left: "40%" },
  }[ballPos];
  return (
    <div className="poster" style={{ background: c.bg, ...style }}>
      <MazeField stroke={c.line} seed={seed} strokeW={7} opacity={0.9} />
      <div style={{
        position: "absolute", width: "26%", aspectRatio: "1", borderRadius: "50%",
        ...pos, transform: `scale(${ballScale})`,
        background: rim ? "transparent" : c.ball,
        border: rim ? `min(2.4vw,13px) solid ${c.ball}` : "none",
        boxShadow: rim ? "none" : "0 6px 30px rgba(0,0,0,.28)",
      }} />
    </div>
  );
}

// gallery seal — the oo monogram inside a hairline circle
function Seal({ size = 44, color = "currentColor" }) {
  return (
    <span style={{ display: "inline-grid", placeItems: "center", width: size, height: size,
      borderRadius: "50%", border: `1px solid ${color}`, opacity: .9 }}>
      <Monogram size={size * 0.32} tone="solid" stroke={size * 0.32 * 0.16} />
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// PALETTES — four directions. tokens drive the whole document.
// ─────────────────────────────────────────────────────────────
const PALETTES = [
  {
    id: "cream", name: "Court Cream", essence: "Paper, plaster, streetball sun.", recommended: true,
    tokens: { ink: "#0E0E0E", cream: "#F2E9C7", orange: "#EE9933", teal: "#223333" },
    swatches: [["Ink Black", "#0E0E0E"], ["Court Cream", "#F2E9C7"], ["Alleyoop Orange", "#EE9933"], ["Charcoal Teal", "#223333"]],
    meaning: "The canonical system from the brief. Court Cream is paper and gallery plaster — the warm, lived-in wall a poster hangs on. Ink Black is a soft, photographic black, never a hard #000. Orange is the ball and the rim, lifted straight from all 156 artworks.",
    feeling: "Warm, editorial, credible. Print culture with a pickup-game pulse.",
  },
  {
    id: "hardwood", name: "Hardwood", essence: "Maple floor, leather ball, broken-in.",
    tokens: { ink: "#1A130C", cream: "#E8D5A2", orange: "#D5722A", teal: "#46503B" },
    swatches: [["Bourbon Ink", "#1A130C"], ["Maple", "#E8D5A2"], ["Leather Orange", "#D5722A"], ["Sage Line", "#46503B"]],
    meaning: "Pulls the cream browner toward varnished maple and the orange toward worn leather. The secondary is a gym-curtain sage. It trades gallery-white for the floor you grew up on — heritage, nostalgia, the squeak of sneakers.",
    feeling: "Nostalgic, tactile, heritage. The smell of a freshly-lacquered court.",
  },
  {
    id: "night", name: "Night Game", essence: "Floodlights, blacktop, gallery after dark.",
    tokens: { ink: "#0B0C0E", cream: "#ECEAE1", orange: "#F4A23E", teal: "#3A4046" },
    swatches: [["Blacktop", "#0B0C0E"], ["Chalk", "#ECEAE1"], ["Floodlight", "#F4A23E"], ["Concrete", "#3A4046"]],
    meaning: "Dark-led. A cooler chalk replaces the warm cream, the black goes blue-cold like asphalt, and the orange brightens into a light over a city court. Designed for social, merch and the after-hours gallery — the game under the lights.",
    feeling: "Nocturnal, urban, premium. The city court at eleven p.m.",
  },
  {
    id: "baseline", name: "Baseline", essence: "Newsstand contrast, clay, the masthead.",
    tokens: { ink: "#121212", cream: "#F4EFE2", orange: "#EE9933", teal: "#9E4A33" },
    swatches: [["True Ink", "#121212"], ["Bone", "#F4EFE2"], ["Alleyoop Orange", "#EE9933"], ["Clay", "#9E4A33"]],
    meaning: "The most magazine-forward direction. A lighter, less-yellow bone paper raises contrast for the newsstand, and a brick-clay tertiary gives pull-quotes and section tabs a second editorial voice without touching the locked orange. Built for the masthead.",
    feeling: "Contemporary, confident, Victory-Journal cool. Made to be a cover.",
  },
];

// ─────────────────────────────────────────────────────────────
// 02 — FOUNDATIONS (mission · vision · story · values)
// ─────────────────────────────────────────────────────────────
function FoundationsSection() {
  const values = [
    ["The pass is the play", "Credit and elevate others. The assist is the art."],
    ["Find a lane", "Celebrate the navigation, not just the arrival."],
    ["Bet on yourself", "Back the unproven. The detour counts."],
    ["Know when to hand it over", "Honor every version of a basketball life."],
    ["Build, don't borrow", "Author the culture. Own the platform."],
  ];
  return (
    <section className="section" id="story">
      <div className="wrap">
        <div className="eyebrow rise"><span className="num">02</span> Foundations</div>

        {/* Mission / Vision */}
        <div className="rise" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 56, marginTop: 44 }}>
          <div>
            <div className="mono-label" style={{ color: "var(--orange)" }}>Mission</div>
            <p className="sec-title" style={{ fontSize: "clamp(26px,3vw,40px)", marginTop: 16 }}>
              Build the gallery for the game — a home where Canadian basketball's athletes, artists and voices are collected, printed, and hung with the weight they deserve.
            </p>
          </div>
          <div>
            <div className="mono-label" style={{ color: "var(--orange)" }}>Vision</div>
            <p className="sec-title" style={{ fontSize: "clamp(26px,3vw,40px)", marginTop: 16 }}>
              A country that authors its own basketball culture — where a poster on the wall, a magazine on the table, and a name on a gallery label all read: this is ours, and we built it.
            </p>
          </div>
        </div>

        <div className="rise" style={{ display: "flex", flexWrap: "wrap", gap: "12px 14px", marginTop: 40 }}>
          {[["Positioning", "The gallery for the game — a premium culture brand, not a stats site."], ["Promise", "A monochrome wrapper so every colourful poster pops."], ["Tagline", "The pass is the play."]].map(([k, v]) => (
            <div key={k} style={{ flex: "1 1 280px", border: "1px solid var(--hair)", borderRadius: 4, padding: "18px 20px" }}>
              <div className="mono-label">{k}</div>
              <div style={{ fontSize: 16, marginTop: 8, lineHeight: 1.45, fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Founder story */}
        <div className="story-grid rise" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.05fr) minmax(0,1fr)", gap: 64, marginTop: 84, alignItems: "start" }}>
          <div>
            <div className="mono-label">The soul of the brand</div>
            <h2 className="sec-title" style={{ fontSize: "clamp(28px,3.4vw,46px)", marginTop: 16 }}>
              Basketball as a labyrinth. Finding a lane, reading the floor, improvising under pressure.
            </h2>
            <p style={{ marginTop: 26, fontFamily: "var(--script)", fontSize: "clamp(28px,3vw,42px)", lineHeight: 1, color: "var(--fg)" }}>
              An alley-oop is the one play you cannot run alone.
            </p>
          </div>
          <div>
            <p className="sec-lead" style={{ marginTop: 6 }}>
              Damion Rashford grew up in Pickering, Ontario. At seventeen he moved alone to Phoenix to chase a Division I lane — and earned it: team captain, All-Arizona, then Loyola Maryland. What followed wasn't a highlight reel. It was a maze.
            </p>
            <p className="sec-lead" style={{ marginTop: 18 }}>
              A redshirt year. A bench season. A bet-on-himself detour through a Nebraska JUCO. A final stop in Detroit — and then the hardest play in basketball: knowing when to pass. He handed the ball to his next self, built a career in technology, and returned to the game as an author — founding Alleyoop Arts.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="values rise" style={{ marginTop: 76 }}>
          <div className="mono-label" style={{ marginBottom: 22 }}>Brand values</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 0, borderTop: "1px solid var(--hair)" }}>
            {values.map(([t, d], i) => (
              <div key={i} style={{ padding: "26px 22px 0 0", borderRight: i < 4 ? "1px solid var(--hair)" : "none", paddingLeft: i ? 22 : 0 }}>
                <div className="mono-label" style={{ color: "var(--orange)" }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontWeight: 700, fontSize: 16.5, marginTop: 14, letterSpacing: "-.01em" }}>{t}</div>
                <div className="dim" style={{ fontSize: 13.5, marginTop: 8, lineHeight: 1.5 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 03 — COLOUR (recommended system + four explorations + rules)
// ─────────────────────────────────────────────────────────────
function PaletteCard({ p, active, onApply }) {
  const vars = { "--ink": p.tokens.ink, "--cream": p.tokens.cream, "--orange": p.tokens.orange, "--teal": p.tokens.teal };
  return (
    <div className="frame" style={{ background: "transparent", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, padding: "22px 24px 18px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h3 style={{ fontWeight: 800, fontSize: 23, letterSpacing: "-.01em", margin: 0 }}>{p.name}</h3>
            {p.recommended && <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)", border: "1px solid var(--orange)", borderRadius: 999, padding: "3px 9px" }}>Recommended</span>}
          </div>
          <div className="dim" style={{ fontSize: 14, marginTop: 6, fontStyle: "italic" }}>{p.essence}</div>
        </div>
        <button className="apply-btn" data-on={active ? "1" : "0"} onClick={() => onApply(p.id)}>
          {active ? "● Live" : "Apply"}
        </button>
      </div>

      {/* live demo — both surfaces in this palette */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, ...vars }}>
        <div data-mode="cream" style={{ ...vars, background: "var(--bg)", color: "var(--fg)", padding: "30px 26px", minHeight: 150, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 14 }}>
          <Wordmark size={34} arc />
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Monogram size={34} tone="solid" />
            <span style={{ fontFamily: "var(--script)", fontSize: 30, color: "var(--fg)", lineHeight: .8 }}>arts</span>
          </div>
        </div>
        <div data-mode="ink" style={{ ...vars, background: "var(--bg)", color: "var(--fg)", padding: "30px 26px", minHeight: 150, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 14 }}>
          <Wordmark size={34} arc twopart />
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Monogram size={34} tone="tonal" on="ink" />
            <Monogram size={34} tone="solid" on="ink" accent />
          </div>
        </div>
      </div>

      {/* swatches */}
      <div style={{ display: "flex" }}>
        {p.swatches.map(([n, hex]) => (
          <div key={n} style={{ flex: 1, background: hex, height: 64, position: "relative" }} title={`${n} ${hex}`}>
            <span style={{ position: "absolute", left: 8, bottom: 6, fontSize: 9.5, fontWeight: 600, letterSpacing: ".04em", color: __readable(hex), opacity: .9, fontVariantNumeric: "tabular-nums" }}>{hex}</span>
          </div>
        ))}
      </div>

      {/* rationale */}
      <div style={{ padding: "20px 24px 24px" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{p.meaning}</p>
        <div style={{ display: "flex", gap: 10, marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--hair)" }}>
          <span className="mono-label" style={{ flexShrink: 0, paddingTop: 2 }}>Feeling</span>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{p.feeling}</span>
        </div>
      </div>
    </div>
  );
}

function __readable(hex) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.replace(/./g, (c) => c + c) : h, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 140 ? "rgba(0,0,0,.7)" : "rgba(255,255,255,.85)";
}

function ColorSection({ palette, onApply }) {
  const rules = [
    "Cream leads — Court Cream surface + Ink Black type is the editorial default.",
    "Black flips for dark mode, social and merch. Orange stays orange in both.",
    "Orange is scarce: one accent per composition, never more than twice per screen.",
    "Photography is black & white. Full colour is reserved for the artwork itself.",
  ];
  return (
    <section className="section" id="color">
      <div className="wrap">
        <div className="eyebrow rise"><span className="num">03</span> Colour · four directions</div>
        <h2 className="sec-title rise">The wrapper is the gallery.<br />The art is the show.</h2>
        <p className="sec-lead rise">
          The brief locks one system — but here are four ways to wear it. Each keeps the orange ball, a soft black, and a warm light surface; they differ in temperature and mood. Tap <b style={{ color: "var(--orange)" }}>Apply</b> on any to flow it through the whole document.
        </p>

        <div className="palette-grid rise" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 20, marginTop: 48 }}>
          {PALETTES.map((p) => <PaletteCard key={p.id} p={p} active={palette === p.id} onApply={onApply} />)}
        </div>

        <div className="rise" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "10px 48px", marginTop: 52 }}>
          {rules.map((r, i) => (
            <div key={i} style={{ display: "flex", gap: 14, padding: "14px 0", borderTop: "1px solid var(--hair)" }}>
              <span style={{ color: "var(--orange)", fontWeight: 700, fontVariantNumeric: "tabular-nums", fontSize: 13 }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontSize: 15, lineHeight: 1.5 }}>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 04 — TYPE
// ─────────────────────────────────────────────────────────────
function TypeSection() {
  return (
    <section className="section" id="type">
      <div className="wrap">
        <div className="eyebrow rise"><span className="num">04</span> Typography</div>
        <h2 className="sec-title rise">One bold grotesque.<br />One human script.</h2>

        <div className="type-grid rise" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: 48, marginTop: 52, alignItems: "stretch" }}>
          <div className="frame" style={{ padding: "38px 40px", background: "transparent" }}>
            <div className="row between center" style={{ marginBottom: 8 }}>
              <span className="mono-label">Display / Text · Grotesque</span>
              <span className="mono-label" style={{ color: "var(--orange)" }}>One face only</span>
            </div>
            <div style={{ fontWeight: 800, fontSize: "clamp(80px,15vw,180px)", lineHeight: .86, letterSpacing: "-.03em" }}>Aa</div>
            <div style={{ fontSize: 26, letterSpacing: "-.01em", marginTop: 18, lineHeight: 1.15 }}>
              This is what Canadian basketball looks like right now.
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 22px", marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--hair)" }}>
              {[["400", "Regular"], ["500", "Medium"], ["600", "Semibold"], ["700", "Bold"], ["800", "Extrabold"], ["900", "Black"]].map(([w, n]) => (
                <span key={w} style={{ fontWeight: Number(w), fontSize: 17 }}>{n}<span className="faint" style={{ fontWeight: 400, fontSize: 12, marginLeft: 6 }}>{w}</span></span>
              ))}
            </div>
            <div className="dim" style={{ fontSize: 13.5, marginTop: 22, lineHeight: 1.6 }}>
              Set tight, all-caps for the wordmark and headlines. Regular weight with generous leading for editorial body. Söhne / Neue Haas DNA — neutral, confident, credible next to a sponsor row.
            </div>
          </div>

          <div className="frame" style={{ padding: "38px 40px", background: "transparent", display: "flex", flexDirection: "column" }}>
            <span className="mono-label" style={{ marginBottom: 8 }}>Accent script · sparingly</span>
            <div style={{ fontFamily: "var(--script)", fontSize: "clamp(64px,11vw,120px)", lineHeight: .8, color: "var(--fg)" }}>arts</div>
            <div style={{ fontFamily: "var(--script)", fontSize: 38, lineHeight: 1.05, marginTop: 18 }}>From the block<br />to the gallery.</div>
            <div className="dim" style={{ fontSize: 13.5, marginTop: "auto", paddingTop: 24, lineHeight: 1.6 }}>
              Used <em>only</em> for the “arts” line and the occasional artist-signature moment. Never body text. Two typefaces total — no more.
            </div>
          </div>
        </div>

        <div className="rise" style={{ marginTop: 40, borderTop: "1px solid var(--hair)" }}>
          {[["Display", 64, 800, "-.03em", "Two parts, one play."], ["Headline", 34, 700, "-.02em", "The gallery for the game."], ["Subhead", 22, 600, "-.01em", "Limited-edition art prints from a catalog of 156 originals."], ["Body", 17, 400, "0", "Confident but welcoming. Street-smart but thoughtful. Proudly Canadian without being cheesy — third person for the founder, “we” for the organization."], ["Label", 12, 600, ".2em", "EST. 2026 · THE PASS IS THE PLAY"]].map(([role, sz, w, ls, txt]) => (
            <div key={role} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 24, padding: "20px 0", borderBottom: "1px solid var(--hair)", alignItems: "baseline" }}>
              <span className="mono-label">{role} · {sz}</span>
              <span style={{ fontWeight: w, fontSize: Math.min(sz, 40), letterSpacing: ls, textTransform: role === "Label" ? "uppercase" : "none", lineHeight: 1.2 }}>{txt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { MazeField, Poster, Seal, COLLECTIONS, PALETTES, FoundationsSection, ColorSection, TypeSection });
