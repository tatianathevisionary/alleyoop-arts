// logo.jsx — Alleyoop Arts logo engine
// Exports: Wordmark, Monogram, Lockup, LobArc (to window)

// ─────────────────────────────────────────────────────────────
// Wordmark: ALLEYOOP where the two O's are basketball-rim outlines.
//  - size:    any CSS font-size (em-scaled internals lock at all sizes)
//  - arc:     show the orange lob arc over the OO
//  - twopart: right rim (the "finish") drawn in orange
//  - color:   override letter color (defaults to currentColor via --fg)
// ─────────────────────────────────────────────────────────────
function Wordmark({
  size = 96, arc = false, twopart = false, color, style, className = "",
  letters = "ALLEY", tail = "P",
  weight = 800, tracking = -0.045, rimRatio = 0.78, rimStroke = 0.118, net = false, overlap = false,
  ballFinish = false, ballPass = false, ballVariant = "solid", netBehind = false, ballRim = false,
}) {
  const cls = ["wm", twopart ? "twopart" : "", overlap ? "oo-overlap" : "", className].filter(Boolean).join(" ");
  return (
    <span
      className={cls}
      style={{
        fontSize: typeof size === "number" ? size + "px" : size, color,
        fontWeight: weight, letterSpacing: tracking + "em", ...style,
      }}
    >
      {letters.split("").map((c, i) => (
        <span className="ch" key={i}>{c}</span>
      ))}
      <span className="oo">
        {ballPass ? (
          <span className="rim pass oo-ball" style={{ width: rimRatio + "em", height: rimRatio + "em" }} aria-hidden="true">
            <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: "block", overflow: "visible" }}>
              <BallGlyph cx={50} cy={50} r={46}
                fill={ballVariant === "line" ? "none" : "var(--orange)"}
                seam={ballVariant === "line" ? "var(--orange)" : "#0E0E0E"}
                sw={ballVariant === "line" ? 6.5 : 5.5}
                outline={ballVariant === "line"} />
            </svg>
          </span>
        ) : (
          <span className="rim pass" style={{ width: rimRatio + "em", height: rimRatio + "em", borderWidth: rimStroke + "em" }}>
            {net && <Net behind={netBehind} />}
          </span>
        )}
        {ballFinish ? (
          <span className="rim finish oo-ball" style={{ width: rimRatio + "em", height: rimRatio + "em" }} aria-hidden="true">
            <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: "block", overflow: "visible" }}>
              <BallGlyph cx={50} cy={50} r={46}
                fill={ballVariant === "line" ? "none" : "var(--orange)"}
                seam={ballVariant === "line" ? "var(--orange)" : "#0E0E0E"}
                sw={ballVariant === "line" ? 6.5 : 5.5}
                outline={ballVariant === "line"} />
            </svg>
          </span>
        ) : (
          <span className="rim finish" style={{ width: rimRatio + "em", height: rimRatio + "em", borderWidth: rimStroke + "em" }}>
            {net && <Net behind={netBehind} />}
            {ballRim && (
              <span style={{ position: "absolute", width: "90%", height: "90%", left: "5%", top: "-15%", zIndex: 3, pointerEvents: "none" }} aria-hidden="true">
                <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: "block", overflow: "visible" }}>
                  <BallGlyph cx={50} cy={50} r={46} fill="var(--orange)" seam="#0E0E0E" sw={5.5} />
                </svg>
              </span>
            )}
          </span>
        )}
        {arc && <LobArc />}
      </span>
      <span className="ch">{tail}</span>
    </span>
  );
}

// A short basketball net hanging beneath a rim.
function Net({ behind }) {
  return (
    <svg className={behind ? "net behind" : "net"} viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden="true">
      <path d="M8 4 L24 58 M30 4 L37 60 M50 4 L50 62 M70 4 L63 60 M92 4 L76 58"
            fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
      <path d="M8 22 H92 M14 40 H86 M22 56 H78" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

// The lob — a thin parabola arcing over the two rims, with a dot at the
// release (left) and an open finish (right). Sits inside the .oo wrapper.
function LobArc() {
  return (
    <svg className="arc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
      <path d="M 6 36 Q 50 -16 94 36" vectorEffect="non-scaling-stroke" strokeWidth="2.4" />
      <circle cx="6" cy="36" r="3.4" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Monogram: two overlapping lowercase o's (two rims, one play).
//  - size:     px diameter of one ring
//  - tone:     'tonal'  → rings sit tone-on-tone on the surface
//              'solid'  → rings in --fg
//              'accent' → finish ring picks up orange
//  - on:       'cream' | 'ink' controls the tonal pairing
// ─────────────────────────────────────────────────────────────
function Monogram({ size = 80, tone = "solid", on = "ink", accent = false, stroke }) {
  const w = size * 1.62;
  const sw = stroke || size * 0.12;
  const r = (size - sw) / 2;
  const cy = size / 2;
  const cx1 = r + sw / 2;
  const cx2 = w - r - sw / 2;

  // tone-on-tone pairings
  const tonalStroke = on === "ink"
    ? { pass: "rgba(242,233,199,.20)", finish: "rgba(242,233,199,.46)" }
    : { pass: "rgba(14,14,14,.20)", finish: "rgba(14,14,14,.42)" };

  let passColor, finishColor;
  if (tone === "tonal") {
    passColor = tonalStroke.pass; finishColor = tonalStroke.finish;
  } else {
    passColor = "var(--rim)"; finishColor = "var(--rim)";
  }
  if (accent) finishColor = "var(--orange)";

  return (
    <span className="mgram" aria-label="Alleyoop Arts monogram" role="img">
      <svg width={w} height={size} viewBox={`0 0 ${w} ${size}`} fill="none">
        <circle cx={cx1} cy={cy} r={r} stroke={passColor} strokeWidth={sw} />
        <circle cx={cx2} cy={cy} r={r} stroke={finishColor} strokeWidth={sw} />
      </svg>
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// Lockup: ALLEYOOP hero + "arts" script + EST. 2026 flanking rules.
//  - size:   wordmark font-size
//  - full:   include EST. 2026 flanking details
//  - arc:    pass through to wordmark
// ─────────────────────────────────────────────────────────────
function Lockup({ size = 92, full = true, arc = false, twopart = false, overlap = false, ballFinish = false, artsColor = "var(--fg)" }) {
  const fs = typeof size === "number" ? size + "px" : size;
  return (
    <div style={{ fontSize: fs, display: "inline-flex", flexDirection: "column", alignItems: "center" }}>
      {full && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.16em", width: "100%", marginBottom: "0.12em" }}>
          <span style={{ flex: 1, height: 1, background: "var(--hair)" }} />
          <span style={{ fontSize: "0.125em", fontWeight: 600, color: "var(--fg-faint)", whiteSpace: "nowrap", letterSpacing: ".2em", textTransform: "uppercase" }}>
            Est. 2026 · The pass is the play
          </span>
          <span style={{ flex: 1, height: 1, background: "var(--hair)" }} />
        </div>
      )}
      <Wordmark size={"1em"} arc={arc} twopart={twopart} overlap={overlap} ballFinish={ballFinish} />
      <div style={{ fontFamily: "var(--script)", fontSize: "0.52em", lineHeight: 0.8, color: artsColor, marginTop: "-0.13em", alignSelf: "flex-end", marginRight: "0.14em" }}>
        arts
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Ball — the basketball as a flat, geometric brand graphic.
// BallGlyph is the reusable <g> (circle + authentic seams) so every
// ball-derived concept shares one source of truth.
// ─────────────────────────────────────────────────────────────
function BallGlyph({ cx = 50, cy = 50, r = 47, fill = "var(--orange)", seam = "#0E0E0E", sw = 4, outline = false }) {
  const k = 0.6; // seam bow
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill === "none" ? "none" : fill}
        stroke={outline ? seam : "none"} strokeWidth={outline ? sw : 0} />
      <g stroke={seam} strokeWidth={sw} strokeLinecap="round" fill="none">
        <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} />
        <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} />
        <path d={`M${cx} ${cy - r} C ${cx - k * r} ${cy - 0.5 * r}, ${cx - k * r} ${cy + 0.5 * r}, ${cx} ${cy + r}`} />
        <path d={`M${cx} ${cy - r} C ${cx + k * r} ${cy - 0.5 * r}, ${cx + k * r} ${cy + 0.5 * r}, ${cx} ${cy + r}`} />
      </g>
    </g>
  );
}

function Ball({ size = 80, variant = "solid", fill = "var(--orange)", seam = "#0E0E0E", style, className = "" }) {
  const line = variant === "line" ? "currentColor" : seam;
  const ballFill = variant === "line" ? "none" : fill;
  const sw = variant === "line" ? 4.6 : 4;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}
      style={style} role="img" aria-label="Basketball">
      <BallGlyph cx={50} cy={50} r={47} fill={ballFill} seam={line} sw={sw} outline={variant === "line"} />
    </svg>
  );
}
