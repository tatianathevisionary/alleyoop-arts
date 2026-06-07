// logo-section.jsx — 05 The Mark: explorations, monogram, anatomy, clear space, misuse.

function ExplorationCard({ n, name, caption, mode, children }) {
  return (
    <div className="frame" style={{ background: "transparent", overflow: "hidden" }}>
      <div className="row between center" style={{ padding: "16px 20px" }}>
        <div className="row center" style={{ gap: 12 }}>
          <span style={{ color: "var(--orange)", fontWeight: 700, fontVariantNumeric: "tabular-nums", fontSize: 13 }}>{n}</span>
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-.01em" }}>{name}</span>
        </div>
        <span className="mono-label">{caption}</span>
      </div>
      <div data-mode={mode} style={{ background: "var(--bg)", color: "var(--fg)", padding: "52px 32px", display: "grid", placeItems: "center", minHeight: 200, borderTop: "1px solid var(--hair)" }}>
        {children}
      </div>
    </div>
  );
}

function MisuseTile({ caption, children }) {
  return (
    <div style={{ position: "relative" }}>
      <div className="frame" style={{ background: "var(--surface)", display: "grid", placeItems: "center", height: 130, overflow: "hidden", position: "relative" }}>
        {children}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          <line x1="6" y1="94" x2="94" y2="6" stroke="var(--fg)" strokeWidth="1" opacity="0.32" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className="dim" style={{ fontSize: 12.5, marginTop: 10, lineHeight: 1.4 }}>
        <span style={{ fontWeight: 700, color: "var(--fg)" }}>Don't.</span> {caption}
      </div>
    </div>
  );
}

// ── Ball-derived brand concepts (all use currentColor so they adapt to surface) ──
function BallArc({ size = 90 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" role="img" aria-label="Alley-oop icon">
      <path d="M14 50 Q50 6 86 50" stroke="var(--orange)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="14" cy="50" r="4.2" fill="var(--orange)" />
      <BallGlyph cx={50} cy={64} r={30} sw={3.4} seam="currentColor" />
    </svg>
  );
}
function BallRim({ size = 90 }) {
  return (
    <svg width={size} height={size * 1.08} viewBox="0 0 100 108" fill="none" role="img" aria-label="The finish">
      <BallGlyph cx={50} cy={38} r={27} sw={3.2} seam="currentColor" />
      <ellipse cx="50" cy="62" rx="36" ry="10" stroke="var(--orange)" strokeWidth="5" fill="none" />
      <g stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" fill="none" opacity="0.78">
        <path d="M18 64 L30 98 M34 68 L40 100 M50 69 L50 102 M66 68 L60 100 M82 64 L70 98" />
        <path d="M26 80 H74" opacity="0.55" /><path d="M32 92 H68" opacity="0.4" />
      </g>
    </svg>
  );
}
function SpinBall({ size = 90 }) {
  return (
    <svg width={size * 1.1} height={size} viewBox="0 0 110 100" fill="none" role="img" aria-label="Spin">
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.65">
        <path d="M6 36 H24" /><path d="M2 50 H22" /><path d="M6 64 H24" />
      </g>
      <BallGlyph cx={64} cy={50} r={34} sw={3.6} seam="currentColor" />
    </svg>
  );
}
function MazeBall({ size = 90 }) {
  const MF = window.MazeField;
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: "var(--orange)", position: "relative", overflow: "hidden", boxShadow: "inset 0 0 0 " + (size * 0.045) + "px currentColor" }}>
      {MF && <MF stroke="currentColor" cols={4} rows={4} strokeW={11} />}
    </div>
  );
}
function Stamp({ size = 132, label = "ALLEYOOP ARTS · EST. 2026 · THE PASS IS THE PLAY · " }) {
  const uid = React.useId().replace(/[:.]/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" role="img" aria-label="Alleyoop Arts seal">
      <defs><path id={"sp" + uid} d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" /></defs>
      <circle cx="100" cy="100" r="93" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.38" />
      <text fontFamily="var(--grotesque)" fontSize="13" fontWeight="700" letterSpacing="2.5" fill="currentColor">
        <textPath href={"#sp" + uid} startOffset="0">{label}</textPath>
      </text>
      <g transform="translate(70,70)"><BallGlyph cx={30} cy={30} r={27} seam="currentColor" sw={3} /></g>
    </svg>
  );
}

function ConceptTile({ label, mode = "ink", children }) {
  return (
    <div>
      <div data-mode={mode} className="frame" style={{ background: "var(--bg)", color: "var(--fg)", display: "grid", placeItems: "center", aspectRatio: "1", overflow: "hidden" }}>
        {children}
      </div>
      <div className="mono-label" style={{ marginTop: 10 }}>{label}</div>
    </div>
  );
}

// "A" + ball — an icon-only mark for avatars (the A of Alleyoop + the ball)
function AMark({ size = 112 }) {
  return (
    <div style={{ position: "relative", width: size, height: size, display: "grid", placeItems: "center" }}>
      <span style={{ fontFamily: "var(--grotesque)", fontWeight: 900, fontSize: size * 0.98, lineHeight: 1, letterSpacing: "-.04em", color: "var(--fg)" }}>A</span>
      <span style={{ position: "absolute", top: "57%", left: "50%", transform: "translate(-50%,-50%)" }}><Ball size={size * 0.37} /></span>
    </div>
  );
}

function Avatar({ bg, color, label, children }) {
  return (
    <div>
      <div data-mode={bg === "var(--cream)" || bg === "#F2E9C7" ? "cream" : "ink"} style={{ aspectRatio: "1", borderRadius: "50%", background: bg, color, display: "grid", placeItems: "center", overflow: "hidden", border: "1px solid var(--hair)" }}>
        {children}
      </div>
      <div className="mono-label" style={{ marginTop: 10, textAlign: "center" }}>{label}</div>
    </div>
  );
}

function LogoSection() {
  return (
    <section className="section" id="logo">
      <div className="wrap">
        <div className="eyebrow rise"><span className="num">05</span> The mark</div>
        <h2 className="sec-title rise">Type-only. The letterforms are the logo.</h2>
        <p className="sec-lead rise">
          One bold grotesque, tracked tight, all caps. The signature move: the two O's in ALLEY<span style={{ color: "var(--orange)" }}>OO</span>P drawn as clean circle outlines — two basketball rims. One is the pass, one is the finish. Two parts, one play.
        </p>

        {/* anatomy */}
        <div className="rise" style={{ marginTop: 56, border: "1px solid var(--hair)", borderRadius: 4, padding: "60px 40px", display: "grid", placeItems: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative" }}>
            <Wordmark size={"clamp(40px,9vw,116px)"} arc />
          </div>
          <div className="anatomy-tags" style={{ display: "flex", flexWrap: "wrap", gap: "10px 28px", justifyContent: "center", marginTop: 40, paddingTop: 28, borderTop: "1px solid var(--hair)", width: "100%" }}>
            {[["The release", "Left rim — the pass"], ["The lob", "A single thin arc, the only colour in the mark"], ["The finish", "Right rim — the catch"]].map(([a, b]) => (
              <div key={a} style={{ textAlign: "center" }}>
                <div className="mono-label" style={{ color: "var(--orange)" }}>{a}</div>
                <div className="dim" style={{ fontSize: 13, marginTop: 6 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>

        {/* overlapping OO test */}
        <div className="mono-label rise" style={{ marginTop: 72, marginBottom: 22 }}>The OO · separated vs overlapping</div>
        <div className="oo-grid rise" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div data-mode="ink" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", padding: "56px 32px", display: "grid", placeItems: "center", gap: 18 }}>
            <Wordmark size={"clamp(34px,6vw,60px)"} arc />
            <span className="mono-label">Separated rims · the classic</span>
          </div>
          <div data-mode="ink" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", padding: "56px 32px", display: "grid", placeItems: "center", gap: 18 }}>
            <Wordmark size={"clamp(34px,6vw,60px)"} arc overlap twopart />
            <span className="mono-label">Overlapping rims · the monogram move</span>
          </div>
        </div>
        <p className="dim rise" style={{ fontSize: 14, marginTop: 18, maxWidth: "70ch", lineHeight: 1.6 }}>
          Overlapping fuses the two O’s into the monogram’s linked rims — the pass and the finish become one play. Toggle <b style={{ color: "var(--fg)" }}>Overlapping OO</b> in Tweaks to flow it through the whole document.
        </p>

        {/* ball as the O */}
        <div className="mono-label rise" style={{ marginTop: 56, marginBottom: 22 }}>The ball &amp; the net · the whole play in the word</div>
        <div className="trio rise" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          <div data-mode="ink" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", padding: "52px 24px", display: "grid", placeItems: "center", gap: 16 }}>
            <Wordmark size={"clamp(28px,5vw,52px)"} ballRim net netBehind />
            <span className="mono-label">Ball on the rim</span>
          </div>
          <div data-mode="ink" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", padding: "52px 24px", display: "grid", placeItems: "center", gap: 16, outline: "1px solid var(--orange)", outlineOffset: -1 }}>
            <Wordmark size={"clamp(28px,5vw,52px)"} ballRim net netBehind arc />
            <span className="mono-label" style={{ color: "var(--orange)" }}>+ the lob · recommended</span>
          </div>
          <div data-mode="ink" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", padding: "52px 24px", display: "grid", placeItems: "center", gap: 16 }}>
            <Wordmark size={"clamp(28px,5vw,52px)"} ballPass net netBehind arc />
            <span className="mono-label">Ball as the left O</span>
          </div>
        </div>
        <p className="dim rise" style={{ fontSize: 14, marginTop: 18, maxWidth: "72ch", lineHeight: 1.6 }}>
          Your call, dialled in: the left O is the ball (the release), the right O keeps its rim and gains a net (the finish) — the alley-oop reads left-to-right inside the word. My addition: keep the thin orange lob arc, so the eye traces ball → lob → net — the entire play, in five letters. Toggle <b style={{ color: "var(--fg)" }}>Ball + net</b> in Tweaks to see it on the hero.
        </p>

        {/* 6 explorations */}
        <div className="mono-label rise" style={{ marginTop: 72, marginBottom: 22 }}>Wordmark explorations · six directions</div>
        <div className="explore-grid rise" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <ExplorationCard n="01" name="The Lob" caption="Primary mark" mode="ink">
            <Wordmark size={"clamp(34px,6vw,62px)"} arc />
          </ExplorationCard>
          <ExplorationCard n="02" name="The Outline" caption="Small sizes · embroidery" mode="cream">
            <Wordmark size={"clamp(34px,6vw,62px)"} />
          </ExplorationCard>
          <ExplorationCard n="03" name="The Two-Part Play" caption="Pass + finish" mode="ink">
            <Wordmark size={"clamp(34px,6vw,62px)"} twopart />
          </ExplorationCard>
          <ExplorationCard n="04" name="The Heavyweight" caption="Merch · caps · stamps" mode="cream">
            <Wordmark size={"clamp(34px,6vw,62px)"} weight={900} tracking={-0.06} rimStroke={0.15} rimRatio={0.8} />
          </ExplorationCard>
          <ExplorationCard n="05" name="Nothing But Net" caption="The literal rim" mode="ink">
            <Wordmark size={"clamp(34px,6vw,60px)"} net arc />
          </ExplorationCard>
          <ExplorationCard n="06" name="The Full Lockup" caption="Hero · covers" mode="cream">
            <Lockup size={"clamp(30px,5vw,52px)"} arc full={false} />
          </ExplorationCard>
        </div>

        {/* full lockup */}
        <div className="mono-label rise" style={{ marginTop: 72, marginBottom: 22 }}>Full lockup · wordmark + arts + est.</div>
        <div className="rise" data-mode="ink" style={{ background: "var(--bg)", color: "var(--fg)", borderRadius: 4, padding: "76px 40px", display: "grid", placeItems: "center" }}>
          <Lockup size={"clamp(40px,8vw,92px)"} arc full />
        </div>

        {/* monogram */}
        <div className="mono-label rise" style={{ marginTop: 72, marginBottom: 22 }}>The monogram · two overlapping o's — two rims, one play</div>
        <div className="mono-grid rise" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20, alignItems: "stretch" }}>
          <div data-mode="ink" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
            <div style={{ padding: "44px 0", display: "grid", placeItems: "center", gap: 16, borderRight: "1px solid var(--hair)" }}>
              <Monogram size={86} tone="tonal" on="ink" />
              <span className="mono-label">Tonal · dark on dark</span>
            </div>
            <div style={{ padding: "44px 0", display: "grid", placeItems: "center", gap: 16 }}>
              <Monogram size={86} tone="solid" on="ink" accent />
              <span className="mono-label">Accent · the finish</span>
            </div>
          </div>
          <div data-mode="cream" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
            <div style={{ padding: "44px 0", display: "grid", placeItems: "center", gap: 16, borderRight: "1px solid var(--hair)" }}>
              <Monogram size={86} tone="tonal" on="cream" />
              <span className="mono-label">Tonal · light on light</span>
            </div>
            <div style={{ padding: "44px 0", display: "grid", placeItems: "center", gap: 16 }}>
              <Monogram size={86} tone="solid" on="cream" />
              <span className="mono-label">Solid · ink</span>
            </div>
          </div>
        </div>
        <p className="dim rise" style={{ fontSize: 14, marginTop: 18, maxWidth: "70ch", lineHeight: 1.6 }}>
          Soft, overlapping letterforms with character — rendered tone-on-tone for avatars, favicons, print stamps, embroidery and packaging seals. On merch and avatars the “arts” and EST. details drop entirely; ALLEYOOP stands alone.
        </p>

        {/* profile / avatar icon */}
        <div className="mono-label rise" style={{ marginTop: 72, marginBottom: 8 }}>Profile mark · the icon for an avatar</div>
        <p className="dim rise" style={{ fontSize: 14, marginBottom: 22, maxWidth: "70ch", lineHeight: 1.6 }}>
          Icon-only marks for an Instagram profile photo — no wordmark, legible at 40px. The ball reads instantly; the monogram is the quiet option; the “A” fuses the letter of Alleyoop with the ball.
        </p>
        <div className="avatar-grid rise" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }}>
          <Avatar bg="#0E0E0E" color="#F2E9C7" label="The ball"><Ball size={"58%"} /></Avatar>
          <Avatar bg="#EE9933" color="#0E0E0E" label="Monogram"><Monogram size={56} tone="solid" /></Avatar>
          <Avatar bg="#0E0E0E" color="#F2E9C7" label="A + ball"><AMark size={104} /></Avatar>
          <Avatar bg="#0E0E0E" color="#F2E9C7" label="Alley-oop"><BallArc size={92} /></Avatar>
          <Avatar bg="#223333" color="#F2E9C7" label="Monogram · tonal"><Monogram size={56} tone="solid" on="ink" accent /></Avatar>
        </div>

        {/* the ball + concepts */}
        <div className="mono-label rise" style={{ marginTop: 72, marginBottom: 8 }}>Brand elements · the ball (SVG) &amp; concepts</div>
        <p className="dim rise" style={{ fontSize: 14, marginBottom: 22, maxWidth: "70ch", lineHeight: 1.6 }}>
          One flat, geometric basketball — orange sphere, ink seams — spun into a family of marks. Not the logo; a supporting kit for favicons, loaders, stickers, stamps and merch, echoing the open rims in the wordmark.
        </p>
        <div className="concept-grid rise" style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 16 }}>
          <ConceptTile label="The ball"><Ball size={86} /></ConceptTile>
          <ConceptTile label="Outline"><Ball size={86} variant="line" /></ConceptTile>
          <ConceptTile label="Alley-oop"><BallArc size={92} /></ConceptTile>
          <ConceptTile label="The finish"><BallRim size={84} /></ConceptTile>
          <ConceptTile label="Maze ball"><MazeBall size={86} /></ConceptTile>
          <ConceptTile label="Spin"><SpinBall size={84} /></ConceptTile>
        </div>
        <div className="concept-grid-2 rise" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 16 }}>
          <div data-mode="ink" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", display: "grid", placeItems: "center", padding: "30px 0", overflow: "hidden" }}>
            <Stamp size={150} />
          </div>
          <div data-mode="cream" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", display: "grid", placeItems: "center", padding: "30px 0", overflow: "hidden" }}>
            <Stamp size={150} />
          </div>
          <div data-mode="ink" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", display: "flex", alignItems: "center", justifyContent: "center", gap: 18, padding: "30px 24px", overflow: "hidden", flexWrap: "wrap" }}>
            <Ball size={40} /><BallArc size={48} /><Ball size={26} variant="line" /><SpinBall size={44} />
            <span className="mono-label" style={{ width: "100%", textAlign: "center", marginTop: 8 }}>In-line · bullets &amp; loaders</span>
          </div>
        </div>

        {/* clear space + on cream/ink */}
        <div className="mono-label rise" style={{ marginTop: 72, marginBottom: 22 }}>Clear space &amp; surfaces</div>
        <div className="clear-grid rise" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 20 }}>
          <div className="frame" style={{ background: "var(--surface)", padding: 30, display: "grid", placeItems: "center", position: "relative" }}>
            <div style={{ position: "relative", padding: "var(--cs)", "--cs": "min(7vw,46px)" }}>
              <div style={{ position: "absolute", inset: 0, border: "1px dashed var(--hair)" }} />
              <Wordmark size={"clamp(28px,5vw,46px)"} arc />
            </div>
            <span className="mono-label" style={{ position: "absolute", left: 16, bottom: 14 }}>Clear space = one rim diameter</span>
          </div>
          <div data-mode="cream" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", padding: 30, display: "grid", placeItems: "center", minHeight: 150 }}>
            <Wordmark size={"clamp(26px,4.5vw,42px)"} arc />
          </div>
          <div data-mode="ink" className="frame" style={{ background: "var(--bg)", color: "var(--fg)", padding: 30, display: "grid", placeItems: "center", minHeight: 150 }}>
            <Wordmark size={"clamp(26px,4.5vw,42px)"} arc />
          </div>
        </div>

        {/* misuse */}
        <div className="mono-label rise" style={{ marginTop: 72, marginBottom: 22 }}>Misuse · protect the mark</div>
        <div className="misuse-grid rise" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 22 }}>
          <MisuseTile caption="Never stretch or condense the wordmark.">
            <div style={{ transform: "scaleX(1.5)" }}><Wordmark size={30} /></div>
          </MisuseTile>
          <MisuseTile caption="Never colour the letterforms. Orange lives in the rims.">
            <Wordmark size={30} color="var(--orange)" />
          </MisuseTile>
          <MisuseTile caption="Never use more than one accent at a time.">
            <span style={{ position: "relative" }}><Wordmark size={30} arc twopart /></span>
          </MisuseTile>
          <MisuseTile caption="No shadows, bevels, glows or effects.">
            <div style={{ filter: "drop-shadow(3px 4px 0 rgba(0,0,0,.4))" }}><Wordmark size={30} /></div>
          </MisuseTile>
          <MisuseTile caption="Never rotate or set on an angle.">
            <div style={{ transform: "rotate(-9deg)" }}><Wordmark size={30} /></div>
          </MisuseTile>
          <MisuseTile caption="Never fill the rims solid — they are open hoops.">
            <span className="wm" style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-.045em" }}>
              <span className="ch">A</span><span className="ch">L</span><span className="ch">L</span><span className="ch">E</span><span className="ch">Y</span>
              <span className="oo">
                <span style={{ width: ".78em", height: ".78em", borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
                <span style={{ width: ".78em", height: ".78em", borderRadius: "50%", background: "currentColor", display: "inline-block", marginLeft: ".012em" }} />
              </span>
              <span className="ch">P</span>
            </span>
          </MisuseTile>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { LogoSection });
