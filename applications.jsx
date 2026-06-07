// applications.jsx — 06 Applications + 07 Voice + 08 Quick reference / footer.

// Real catalog artwork (imported from the Alleyoop Arts repo).
const ART = [
  { src: "art/01-alley-runner.png", t: "Alley Runner", ed: "Ed. 12 / 50", p: "$240" },
  { src: "art/02-hoop.png", t: "Close-Up Hoop", ed: "Ed. 04 / 40", p: "$200" },
  { src: "art/03-the-call.png", t: "The Call", ed: "Ed. 09 / 45", p: "$220" },
  { src: "art/04-burst.png", t: "Burst", ed: "Ed. 02 / 30", p: "$260" },
  { src: "art/05-court.png", t: "Bird's-Eye Court", ed: "Ed. 18 / 60", p: "$200" },
  { src: "art/06-clinic.png", t: "Clinic Day", ed: "Ed. 22 / 60", p: "$190" },
  { src: "art/07-stoic.png", t: "The Guard", ed: "Ed. 06 / 40", p: "$230" },
  { src: "art/08-perfect-pass.png", t: "Perfect Pass", ed: "Ed. 03 / 35", p: "$250" },
  { src: "art/09-high-jump.png", t: "High Jump", ed: "Ed. 14 / 50", p: "$220" },
  { src: "art/10-vibrant.png", t: "Street Game", ed: "Ed. 27 / 60", p: "$200" },
];

// ── B&W photography placeholder (monochrome wrapper; colour is for the art) ──
function PhotoPlaceholder({ label = "B&W Photography", dark = true, style, children }) {
  const base = dark ? "#191919" : "#CFC8B4";
  const hi = dark ? "#2c2c2c" : "#E4DCC6";
  const ink = dark ? "rgba(242,233,199,.5)" : "rgba(14,14,14,.5)";
  return (
    <div style={{ position: "relative", overflow: "hidden", background: `radial-gradient(120% 90% at 32% 22%, ${hi}, ${base} 68%)`, ...style }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.06)"} 1px, transparent 1.4px)`, backgroundSize: "7px 7px" }} />
      {!children && (
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, color: ink }}>
            <span style={{ width: 34, height: 34, borderRadius: "50%", border: `1.5px solid ${ink}` }} />
            <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase" }}>{label}</span>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

function MockLabel({ children }) {
  return <div className="mono-label rise" style={{ marginTop: 64, marginBottom: 20 }}>{children}</div>;
}

// ─────────────────────────────────────────────────────────────
// A — Shopify store homepage
// ─────────────────────────────────────────────────────────────
function StoreMock() {
  const products = ART.slice(1, 5);
  return (
    <div className="frame" style={{ background: "#F2E9C7", color: "#0E0E0E", overflow: "hidden", borderRadius: 6 }}>
      {/* browser chrome */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 16px", background: "#0E0E0E" }}>
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#3a3a3a" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#3a3a3a" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#3a3a3a" }} />
        <span style={{ marginLeft: 12, fontSize: 11, color: "rgba(242,233,199,.55)", fontWeight: 500 }}>shop.alleyooparts.ca</span>
      </div>
      {/* nav */}
      <div data-mode="ink" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 28px", background: "#0E0E0E", color: "#F2E9C7", borderTop: "1px solid rgba(242,233,199,.1)" }}>
        <Wordmark size={20} arc />
        <div style={{ display: "flex", gap: 24, fontSize: 12.5, fontWeight: 600, color: "rgba(242,233,199,.72)" }}>
          <span>Shop</span><span>Collections</span><span>Magazine</span><span>About</span>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 12.5, fontWeight: 600 }}><span>Search</span><span>Cart (0)</span></div>
      </div>
      {/* hero */}
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 0, alignItems: "stretch" }}>
        <div style={{ padding: "54px 40px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="mono-label" style={{ color: "rgba(14,14,14,.5)" }}>Limited-edition prints · 156 originals</div>
          <h3 style={{ fontWeight: 800, fontSize: "clamp(30px,4vw,52px)", letterSpacing: "-.025em", lineHeight: .98, margin: "18px 0 0" }}>
            The gallery<br />for the game.
          </h3>
          <p style={{ fontSize: 15.5, color: "rgba(14,14,14,.62)", lineHeight: 1.55, margin: "18px 0 0", maxWidth: "34ch" }}>
            Original basketball artwork from Canadian artists. Printed on archival cotton rag, 2:3, signed and numbered.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
            <span style={{ background: "#0E0E0E", color: "#F2E9C7", fontSize: 13, fontWeight: 600, padding: "13px 24px", borderRadius: 999 }}>Shop the catalog</span>
            <span style={{ border: "1px solid rgba(14,14,14,.25)", fontSize: 13, fontWeight: 600, padding: "13px 24px", borderRadius: 999 }}>The story</span>
          </div>
        </div>
        <div style={{ position: "relative", minHeight: 340 }}>
          <Poster src={ART[0].src} style={{ position: "absolute", inset: 0, aspectRatio: "auto", height: "100%", borderRadius: 0 }} />
        </div>
      </div>
      {/* product grid */}
      <div style={{ padding: "40px 28px 44px", borderTop: "1px solid rgba(14,14,14,.12)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-.01em" }}>New this week</span>
          <span className="mono-label" style={{ color: "rgba(14,14,14,.5)" }}>View all 156 →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {products.map((pr) => (
            <div key={pr.t}>
              <Poster src={pr.src} style={{ borderRadius: 3 }} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13.5 }}>{pr.t}</div>
                  <div style={{ fontSize: 11.5, color: "rgba(14,14,14,.5)", marginTop: 3 }}>{pr.ed}</div>
                </div>
                <div style={{ fontWeight: 700, fontSize: 13.5 }}>{pr.p}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* footer + sponsor row */}
      <div data-mode="ink" style={{ background: "#223333", color: "#F2E9C7", padding: "34px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <Wordmark size={18} />
          <div style={{ display: "flex", alignItems: "center", gap: 22, opacity: .55 }}>
            <span className="mono-label" style={{ color: "rgba(242,233,199,.6)" }}>In partnership with</span>
            {["NORTH CO.", "BASELINE", "THE SIX", "RUNWAY"].map((s) => (
              <span key={s} style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".06em" }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// B — Magazine covers (the showpiece)
// ─────────────────────────────────────────────────────────────
function CoverInk() {
  return (
    <div data-mode="ink" style={{ position: "relative", aspectRatio: "2/3", background: "#0E0E0E", color: "#F2E9C7", overflow: "hidden", borderRadius: 3 }}>
      <PhotoPlaceholder dark label="Cover · B&W portrait" style={{ position: "absolute", inset: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,14,14,.86) 0%, rgba(14,14,14,.15) 34%, rgba(14,14,14,.1) 60%, rgba(14,14,14,.9) 100%)" }} />
      {/* masthead */}
      <div style={{ position: "absolute", top: "5%", left: "7%", right: "7%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: "clamp(7px,1.4vw,11px)", fontWeight: 600, letterSpacing: ".22em", color: "rgba(242,233,199,.7)" }}>NO. 01 · WINTER 2026</span>
          <span style={{ fontSize: "clamp(7px,1.4vw,11px)", fontWeight: 600, letterSpacing: ".22em", color: "var(--orange)" }}>THE PASS IS THE PLAY</span>
        </div>
        <div style={{ marginTop: "5%" }}><Wordmark size={"clamp(30px,7.5vw,62px)"} arc style={{ width: "100%", justifyContent: "space-between" }} /></div>
      </div>
      {/* cover lines */}
      <div style={{ position: "absolute", bottom: "7%", left: "7%", right: "7%" }}>
        <div style={{ fontFamily: "var(--script)", fontSize: "clamp(20px,5vw,40px)", color: "var(--orange)", lineHeight: .8 }}>the maze issue</div>
        <h3 style={{ fontWeight: 800, fontSize: "clamp(20px,5vw,40px)", letterSpacing: "-.02em", lineHeight: .98, margin: "10px 0 0" }}>
          Finding a lane:<br />the long way<br />to the league.
        </h3>
        <div style={{ display: "flex", gap: 16, marginTop: "5%", fontSize: "clamp(8px,1.6vw,12px)", color: "rgba(242,233,199,.66)", fontWeight: 500 }}>
          <span>Damion Rashford</span><span>·</span><span>156 Originals</span><span>·</span><span>The North Game</span>
        </div>
      </div>
    </div>
  );
}

function CoverCream() {
  return (
    <div style={{ position: "relative", aspectRatio: "2/3", background: "#F2E9C7", color: "#0E0E0E", overflow: "hidden", borderRadius: 3 }}>
      {/* masthead bleeds large at top */}
      <div style={{ position: "absolute", top: "4.5%", left: "6%", right: "6%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "3%" }}>
          <span style={{ fontSize: "clamp(7px,1.4vw,11px)", fontWeight: 600, letterSpacing: ".2em", color: "rgba(14,14,14,.55)" }}>NO. 02 · SPRING 2026</span>
          <span style={{ fontSize: "clamp(7px,1.4vw,11px)", fontWeight: 700, letterSpacing: ".2em" }}>$24 CAD</span>
        </div>
        <Wordmark size={"clamp(32px,8vw,66px)"} arc style={{ width: "100%", justifyContent: "space-between" }} />
      </div>
      {/* portrait window */}
      <div style={{ position: "absolute", top: "26%", left: "6%", right: "6%", bottom: "20%" }}>
        <PhotoPlaceholder dark={false} label="B&W portrait" style={{ position: "absolute", inset: 0, borderRadius: 2 }} />
        <div style={{ position: "absolute", left: 12, bottom: 12, right: 12 }}>
          <h3 style={{ fontWeight: 800, fontSize: "clamp(18px,4.4vw,36px)", letterSpacing: "-.02em", lineHeight: .96, color: "#F2E9C7", margin: 0 }}>
            The art of<br />the assist.
          </h3>
        </div>
      </div>
      {/* footer lines */}
      <div style={{ position: "absolute", bottom: "5%", left: "6%", right: "6%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontFamily: "var(--script)", fontSize: "clamp(18px,4.4vw,34px)", color: "#0E0E0E", lineHeight: .8 }}>from the<br />block</div>
        <div style={{ textAlign: "right", fontSize: "clamp(8px,1.5vw,11.5px)", fontWeight: 600, color: "rgba(14,14,14,.62)", lineHeight: 1.7 }}>
          Inside the catalog<br />156 originals, one maze<br /><span style={{ color: "var(--orange)" }}>The North Game →</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// C — Magazine article / masthead spread
// ─────────────────────────────────────────────────────────────
function ArticleMock() {
  return (
    <div className="frame" style={{ background: "#F2E9C7", color: "#0E0E0E", overflow: "hidden", borderRadius: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 34px", borderBottom: "1px solid rgba(14,14,14,.16)" }}>
        <Wordmark size={17} />
        <span className="mono-label" style={{ color: "rgba(14,14,14,.5)" }}>Issue 01 — The Maze</span>
        <span className="mono-label" style={{ color: "rgba(14,14,14,.5)" }}>Feature · p.034</span>
      </div>
      <div style={{ padding: "46px 34px 8px" }}>
        <div className="mono-label" style={{ color: "var(--orange)" }}>The North Game</div>
        <h3 style={{ fontWeight: 800, fontSize: "clamp(28px,4.4vw,52px)", letterSpacing: "-.025em", lineHeight: 1, margin: "14px 0 0", maxWidth: "18ch" }}>
          Knowing when to pass.
        </h3>
        <div style={{ fontSize: 13.5, color: "rgba(14,14,14,.55)", marginTop: 16, fontWeight: 500 }}>Words by the Editors · Photographs in black &amp; white</div>
      </div>
      <PhotoPlaceholder dark={false} label="B&W feature photograph" style={{ height: 220, margin: "26px 34px 0", borderRadius: 3 }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 34, padding: "30px 34px 44px" }}>
        <div style={{ fontSize: 13.5, lineHeight: 1.72, color: "rgba(14,14,14,.82)" }}>
          <p style={{ margin: 0 }}><span style={{ float: "left", fontWeight: 800, fontSize: 50, lineHeight: .78, paddingRight: 10, marginTop: 4 }}>A</span>t seventeen, the lane out of Pickering ran through Phoenix — alone, on a bet that the floor would open if he kept reading it. It did, and then it didn't, and then it did again somewhere outside Omaha.</p>
          <p style={{ marginTop: 14 }}>The maze is the point. Every version of a basketball life — the redshirt, the bench, the JUCO detour — is a route, not a wrong turn.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontFamily: "var(--script)", fontSize: "clamp(24px,3.4vw,40px)", color: "#0E0E0E", lineHeight: 1.02, borderLeft: "2px solid var(--orange)", paddingLeft: 20 }}>
            “The assist is the art. The pass is the play.”
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// D — Social templates (black mode)
// ─────────────────────────────────────────────────────────────
function SocialMock() {
  return (
    <div className="social-grid" style={{ display: "grid", gridTemplateColumns: "0.7fr 1fr 0.7fr", gap: 20, alignItems: "start" }}>
      {/* avatar */}
      <div>
        <div data-mode="ink" style={{ aspectRatio: "1", borderRadius: "50%", background: "#0E0E0E", display: "grid", placeItems: "center", overflow: "hidden", border: "1px solid var(--hair)" }}>
          <Monogram size={58} tone="solid" on="ink" accent />
        </div>
        <div className="mono-label" style={{ marginTop: 12, textAlign: "center" }}>Avatar · monogram</div>
      </div>
      {/* post 1:1 */}
      <div>
        <div data-mode="ink" style={{ position: "relative", aspectRatio: "1", background: "#0E0E0E", color: "#F2E9C7", overflow: "hidden", borderRadius: 4, padding: "34px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Wordmark size={"clamp(16px,3.4vw,24px)"} />
            <span className="mono-label" style={{ color: "rgba(242,233,199,.5)" }}>NO. 01</span>
          </div>
          <div>
            <div style={{ fontFamily: "var(--script)", fontSize: "clamp(22px,5vw,40px)", color: "var(--orange)", lineHeight: .8 }}>this is</div>
            <h4 style={{ fontWeight: 800, fontSize: "clamp(24px,5.5vw,46px)", letterSpacing: "-.02em", lineHeight: .98, margin: "8px 0 0" }}>
              what Canadian<br />basketball looks<br />like right now.
            </h4>
          </div>
          <div className="mono-label" style={{ color: "rgba(242,233,199,.5)" }}>@alleyooparts · The pass is the play</div>
        </div>
        <div className="mono-label" style={{ marginTop: 12, textAlign: "center" }}>Post · 1080 × 1080</div>
      </div>
      {/* story 9:16 */}
      <div>
        <div data-mode="ink" style={{ position: "relative", aspectRatio: "9/16", background: "#223333", color: "#F2E9C7", overflow: "hidden", borderRadius: 8, padding: "26px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Wordmark size={"clamp(13px,2.6vw,18px)"} arc />
          <PhotoPlaceholder dark label="B&W" style={{ position: "absolute", left: 0, right: 0, top: "26%", bottom: "30%", opacity: .5 }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontWeight: 800, fontSize: "clamp(16px,3.4vw,26px)", letterSpacing: "-.01em", lineHeight: 1 }}>Find a lane.</div>
            <div style={{ marginTop: 14, display: "inline-flex", background: "var(--orange)", color: "#0E0E0E", fontSize: 11, fontWeight: 700, padding: "9px 16px", borderRadius: 999 }}>Swipe up · Shop</div>
          </div>
        </div>
        <div className="mono-label" style={{ marginTop: 12, textAlign: "center" }}>Story · 1080 × 1920</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// E — Framed poster + gallery label
// ─────────────────────────────────────────────────────────────
function GalleryMock() {
  return (
    <div className="frame" style={{ background: "var(--surface)", borderRadius: 6, padding: "clamp(30px,6vw,72px)", display: "flex", gap: "clamp(28px,5vw,64px)", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
      {/* framed print */}
      <div style={{ background: "#0E0E0E", padding: "min(3vw,18px)", borderRadius: 2, boxShadow: "0 30px 60px rgba(0,0,0,.28)" }}>
        <div style={{ background: "#F2E9C7", padding: "clamp(18px,3vw,34px)" }}>
          <div style={{ width: "min(46vw,260px)" }}>
            <Poster src={ART[0].src} />
          </div>
        </div>
      </div>
      {/* gallery label */}
      <div style={{ minWidth: 220, maxWidth: 280 }}>
        <Seal size={48} />
        <div style={{ marginTop: 22, fontWeight: 800, fontSize: 22, letterSpacing: "-.01em" }}>Alley Runner</div>
        <div style={{ fontFamily: "var(--script)", fontSize: 24, color: "var(--fg)", lineHeight: .9, marginTop: 2 }}>the maze series</div>
        <hr className="hair" style={{ margin: "18px 0" }} />
        {[["Artist", "Alleyoop Arts"], ["Medium", "Archival pigment on cotton rag"], ["Format", "2:3 · 24 × 36 in"], ["Edition", "No. 12 of 50"]].map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "5px 0" }}>
            <span className="dim">{k}</span><span style={{ fontWeight: 600 }}>{v}</span>
          </div>
        ))}
        <div className="mono-label" style={{ marginTop: 16 }}>Alleyoop Arts · Est. 2026</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// F — Launch flyers (city series) + Instagram launch grid
// ─────────────────────────────────────────────────────────────
function Flyer({ city, date, venue, time, art }) {
  return (
    <div data-mode="ink" style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", borderRadius: 4, background: "#0E0E0E", color: "#F2E9C7" }}>
      <img src={art} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,14,14,.74) 0%, rgba(14,14,14,.06) 26%, rgba(14,14,14,.12) 46%, rgba(14,14,14,.93) 100%)" }} />
      <div style={{ position: "absolute", top: "6%", left: "7%", right: "7%", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Wordmark size={"clamp(14px,2.9vw,20px)"} arc />
        <span className="mono-label" style={{ color: "rgba(242,233,199,.72)" }}>Est. 2026</span>
      </div>
      <div style={{ position: "absolute", bottom: "6.5%", left: "7%", right: "7%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "clamp(8px,1.6vw,11.5px)", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--orange)" }}>
          <span style={{ width: 22, height: 2, background: "var(--orange)" }} />Launch Party
        </div>
        <div style={{ fontWeight: 800, fontSize: "clamp(38px,10vw,80px)", letterSpacing: "-.03em", lineHeight: .9, margin: "10px 0 0" }}>{city}</div>
        <div style={{ fontFamily: "var(--script)", fontSize: "clamp(17px,3.6vw,28px)", lineHeight: .9, marginTop: 4 }}>the gallery for the game</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 16px", marginTop: "6%", fontSize: "clamp(9px,1.7vw,12.5px)", fontWeight: 600, color: "rgba(242,233,199,.86)" }}>
          <span>{date}</span><span style={{ opacity: .4 }}>/</span><span>{venue}</span><span style={{ opacity: .4 }}>/</span><span>{time}</span>
        </div>
        <div className="mono-label" style={{ marginTop: 10, color: "rgba(242,233,199,.55)" }}>RSVP · alleyooparts.ca/launch</div>
      </div>
    </div>
  );
}

function FlyerSeries() {
  const cities = [
    { city: "Toronto", date: "Fri Jun 20", venue: "The Drake", time: "8PM", art: "art/01-alley-runner.png" },
    { city: "Montréal", date: "Sat Jul 05", venue: "Never Apart", time: "9PM", art: "art/10-vibrant.png" },
    { city: "Vancouver", date: "Fri Jul 18", venue: "Hue Gallery", time: "8PM", art: "art/04-burst.png" },
  ];
  return (
    <div className="flyer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
      {cities.map((c) => <Flyer key={c.city} {...c} />)}
    </div>
  );
}

function IGTile({ children, mode = "ink", bg, style }) {
  return (
    <div data-mode={mode} style={{ position: "relative", aspectRatio: "1", overflow: "hidden", background: bg || "var(--bg)", color: "var(--fg)", padding: "clamp(13px,2.2vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", ...style }}>
      {children}
    </div>
  );
}

function IGGrid() {
  const cap = (t) => <span className="mono-label" style={{ color: "var(--fg-faint)" }}>{t}</span>;
  return (
    <div className="ig-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, maxWidth: 760 }}>
      {/* 1 announce */}
      <IGTile>
        <div style={{ display: "flex", justifyContent: "space-between" }}><Wordmark size={"clamp(13px,2.6vw,18px)"} arc />{cap("01")}</div>
        <div><div style={{ fontWeight: 800, fontSize: "clamp(22px,4.6vw,34px)", letterSpacing: "-.02em", lineHeight: .96 }}>We're<br />launching.</div></div>
        {cap("the gallery for the game")}
      </IGTile>
      {/* 2 art */}
      <IGTile style={{ padding: 0 }}><img src="art/04-burst.png" alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /></IGTile>
      {/* 3 quote */}
      <IGTile bg="var(--orange)" style={{ color: "#0E0E0E" }}>
        {cap("No. 01")}
        <div style={{ fontWeight: 800, fontSize: "clamp(20px,4.2vw,32px)", letterSpacing: "-.02em", lineHeight: 1 }}>The pass<br />is the play.</div>
        <span className="mono-label" style={{ color: "rgba(14,14,14,.55)" }}>@alleyooparts</span>
      </IGTile>
      {/* 4 countdown */}
      <IGTile>
        {cap("Countdown")}
        <div style={{ fontWeight: 800, fontSize: "clamp(46px,11vw,86px)", letterSpacing: "-.04em", lineHeight: .8 }}>03<span style={{ color: "var(--orange)" }}>.</span></div>
        <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: ".04em" }}>days to launch</span>
      </IGTile>
      {/* 5 feature B&W */}
      <IGTile style={{ padding: 0 }}>
        <PhotoPlaceholder dark label="" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "absolute", left: 16, bottom: 14, right: 16 }}>
          <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-.01em" }}>Damion Rashford</div>
          <span className="mono-label" style={{ color: "rgba(242,233,199,.6)" }}>Founder · in conversation</span>
        </div>
      </IGTile>
      {/* 6 city/date */}
      <IGTile bg="var(--teal)">
        {cap("Stop 01")}
        <div><div style={{ fontWeight: 800, fontSize: "clamp(26px,5.6vw,42px)", letterSpacing: "-.02em", lineHeight: .9 }}>Toronto</div>
          <div style={{ fontSize: 13, fontWeight: 600, marginTop: 6, color: "var(--orange)" }}>06 / 20 · The Drake</div></div>
        {cap("Launch party")}
      </IGTile>
      {/* 7 drop */}
      <IGTile style={{ padding: 0 }}>
        <img src="art/02-hoop.png" alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "26px 14px 12px", background: "linear-gradient(180deg,transparent,rgba(14,14,14,.85))", color: "#F2E9C7" }}>
          <div style={{ fontWeight: 700, fontSize: 13 }}>New drop · Close-Up Hoop</div>
          <span className="mono-label" style={{ color: "rgba(242,233,199,.6)" }}>Ed. 04 / 40 · $200</span>
        </div>
      </IGTile>
      {/* 8 value */}
      <IGTile>
        {cap("Find a lane")}
        <div style={{ fontFamily: "var(--script)", fontSize: "clamp(28px,6vw,46px)", lineHeight: .82, color: "var(--fg)" }}>find<br />a lane</div>
        <span className="mono-label" style={{ color: "var(--fg-faint)" }}>Bet on yourself</span>
      </IGTile>
      {/* 9 monogram close */}
      <IGTile style={{ alignItems: "center", justifyContent: "center", gap: 14 }}>
        <Monogram size={64} tone="solid" on="ink" accent />
        <span className="mono-label">@alleyooparts</span>
      </IGTile>
    </div>
  );
}

// ── Stickers (round die-cut merch) ──
function Sticker({ size = 158, rot = 0, bg = "#0E0E0E", color = "#F2E9C7", children }) {
  return (
    <div data-mode={bg === "#F2E9C7" ? "cream" : "ink"} style={{ width: size, height: size, borderRadius: "50%", background: bg, color, display: "grid", placeItems: "center", textAlign: "center", transform: `rotate(${rot}deg)`, boxShadow: "0 12px 26px rgba(0,0,0,.20)", border: "7px solid #F4EFE2", overflow: "hidden", flexShrink: 0 }}>
      {children}
    </div>
  );
}

function StickerSheet() {
  return (
    <div className="frame" style={{ background: "var(--surface)", borderRadius: 6, padding: "clamp(28px,5vw,56px)", display: "flex", flexWrap: "wrap", gap: "clamp(18px,3vw,40px)", justifyContent: "center", alignItems: "center" }}>
      <Sticker bg="#0E0E0E" color="#F2E9C7" rot={-6}><Stamp size={122} /></Sticker>
      <Sticker bg="#EE9933" color="#0E0E0E" rot={5}>
        <div style={{ display: "grid", placeItems: "center", gap: 9 }}>
          <Ball size={56} variant="line" />
          <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: ".03em", lineHeight: 1 }}>ALLEYOOP<br />ARTS</div>
        </div>
      </Sticker>
      <Sticker bg="#0E0E0E" color="#F2E9C7" rot={-3}>
        <div style={{ display: "grid", placeItems: "center", gap: 12 }}>
          <Monogram size={50} tone="solid" on="ink" accent />
          <div className="mono-label" style={{ color: "rgba(242,233,199,.7)" }}>Alleyoop Arts</div>
        </div>
      </Sticker>
      <Sticker bg="#EE9933" color="#0E0E0E" rot={4}>
        <div style={{ display: "grid", placeItems: "center", gap: 8 }}>
          <Ball size={26} seam="#0E0E0E" />
          <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-.01em", lineHeight: .92 }}>THE<br />PASS IS<br />THE PLAY</div>
        </div>
      </Sticker>
      <Sticker bg="#223333" color="#F2E9C7" rot={-5}>
        <div style={{ display: "grid", placeItems: "center", gap: 11 }}>
          <MazeBall size={56} />
          <div className="mono-label" style={{ color: "rgba(242,233,199,.72)" }}>Alleyoop Arts</div>
        </div>
      </Sticker>
      <Sticker bg="#F2E9C7" color="#0E0E0E" rot={6}>
        <div style={{ display: "grid", placeItems: "center", gap: 2 }}>
          <Wordmark size={17} arc />
          <span style={{ fontFamily: "var(--script)", fontSize: 22, lineHeight: .8 }}>arts</span>
          <div className="mono-label" style={{ marginTop: 4, color: "rgba(14,14,14,.5)" }}>Est. 2026</div>
        </div>
      </Sticker>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// G — Pinterest pins, portrait posts, stories
// ─────────────────────────────────────────────────────────────
function Pin({ art, title, sub }) {
  return (
    <div data-mode="ink" style={{ position: "relative", aspectRatio: "2/3", borderRadius: 10, overflow: "hidden", background: "#0E0E0E", color: "#F2E9C7", boxShadow: "0 14px 34px rgba(0,0,0,.16)" }}>
      <img src={art} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,14,14,.55) 0%, transparent 20%, transparent 52%, rgba(14,14,14,.92))" }} />
      <div style={{ position: "absolute", top: "5%", left: "7%", right: "7%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Wordmark size={"clamp(12px,2.2vw,17px)"} arc />
        <span style={{ background: "var(--orange)", color: "#0E0E0E", fontSize: 11, fontWeight: 700, padding: "6px 13px", borderRadius: 999 }}>Save</span>
      </div>
      <div style={{ position: "absolute", bottom: "6%", left: "7%", right: "7%" }}>
        <div style={{ fontWeight: 800, fontSize: "clamp(18px,2.4vw,26px)", letterSpacing: "-.02em", lineHeight: 1.02 }}>{title}</div>
        <div className="mono-label" style={{ marginTop: 9, color: "rgba(242,233,199,.6)" }}>{sub}</div>
      </div>
    </div>
  );
}

function PinRow() {
  const pins = [
    ["art/13-creative.png", "How a maze became a basketball brand", "alleyooparts.ca/story"],
    ["art/05-court.png", "156 originals, one idea", "The Collection →"],
    ["art/11-glitter.png", "The art of the assist", "Read the magazine"],
    ["art/17-sentinel.png", "Hoops as portals: the maze series", "Shop prints"],
  ];
  return (
    <div className="pin-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
      {pins.map((p) => <Pin key={p[0]} art={p[0]} title={p[1]} sub={p[2]} />)}
    </div>
  );
}

function PortraitPosts() {
  return (
    <div className="apps-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, maxWidth: 720, margin: "0 auto" }}>
      <div data-mode="ink" style={{ position: "relative", aspectRatio: "4/5", borderRadius: 6, overflow: "hidden", background: "#0E0E0E", color: "#F2E9C7" }}>
        <img src="art/01-alley-runner.png" alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,14,14,.5) 0%, transparent 30%, rgba(14,14,14,.9))" }} />
        <div style={{ position: "absolute", top: "6%", left: "7%", right: "7%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Wordmark size={"clamp(13px,2.6vw,19px)"} arc />
          <span className="mono-label" style={{ color: "rgba(242,233,199,.6)" }}>No. 01</span>
        </div>
        <div style={{ position: "absolute", bottom: "6%", left: "7%", right: "7%" }}>
          <div style={{ fontFamily: "var(--script)", fontSize: "clamp(22px,4vw,34px)", color: "var(--orange)", lineHeight: .8 }}>find</div>
          <div style={{ fontWeight: 800, fontSize: "clamp(24px,4.4vw,38px)", letterSpacing: "-.02em", lineHeight: .98 }}>a lane.</div>
        </div>
      </div>
      <div data-mode="ink" style={{ aspectRatio: "4/5", borderRadius: 6, overflow: "hidden", background: "#0E0E0E", color: "#F2E9C7", padding: "clamp(22px,3vw,34px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Wordmark size={"clamp(14px,2.8vw,20px)"} arc />
          <Ball size={26} />
        </div>
        <h4 style={{ fontWeight: 800, fontSize: "clamp(24px,4.6vw,40px)", letterSpacing: "-.02em", lineHeight: 1, margin: 0 }}>
          This is what Canadian basketball looks like <span style={{ color: "var(--orange)" }}>right now.</span>
        </h4>
        <span className="mono-label" style={{ color: "rgba(242,233,199,.55)" }}>@alleyooparts · The pass is the play</span>
      </div>
    </div>
  );
}

function StorySet() {
  return (
    <div className="story-set" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, maxWidth: 660, margin: "0 auto" }}>
      {/* announce — art led */}
      <div data-mode="ink" style={{ position: "relative", aspectRatio: "9/16", borderRadius: 10, overflow: "hidden", background: "#0E0E0E", color: "#F2E9C7" }}>
        <img src="art/04-burst.png" alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,14,14,.65) 0%, transparent 28%, transparent 52%, rgba(14,14,14,.92))" }} />
        <div style={{ position: "absolute", top: "5%", left: "8%", right: "8%" }}><Wordmark size={"clamp(13px,2.6vw,17px)"} arc /></div>
        <div style={{ position: "absolute", bottom: "6%", left: "8%", right: "8%" }}>
          <div style={{ fontWeight: 800, fontSize: "clamp(20px,3vw,26px)", letterSpacing: "-.02em", lineHeight: 1 }}>The Collection<br />is live.</div>
          <span className="mono-label" style={{ marginTop: 8, display: "block", color: "rgba(242,233,199,.6)" }}>156 originals</span>
        </div>
      </div>
      {/* quote — teal */}
      <div data-mode="ink" style={{ position: "relative", aspectRatio: "9/16", borderRadius: 10, overflow: "hidden", background: "#223333", color: "#F2E9C7", padding: "26px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Wordmark size={"clamp(13px,2.6vw,17px)"} arc />
        <div style={{ fontFamily: "var(--script)", fontSize: "clamp(30px,5.2vw,46px)", lineHeight: .82, color: "var(--orange)" }}>the pass<br />is the<br />play</div>
        <span className="mono-label" style={{ color: "rgba(242,233,199,.55)" }}>@alleyooparts</span>
      </div>
      {/* product — swipe up */}
      <div data-mode="ink" style={{ position: "relative", aspectRatio: "9/16", borderRadius: 10, overflow: "hidden", background: "#0E0E0E", color: "#F2E9C7" }}>
        <img src="art/02-hoop.png" alt="" loading="lazy" style={{ position: "absolute", left: 0, right: 0, top: 0, height: "62%", width: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, top: "54%", background: "linear-gradient(180deg, transparent, #0E0E0E 30%)" }} />
        <div style={{ position: "absolute", left: "8%", right: "8%", bottom: "7%" }}>
          <div style={{ fontWeight: 800, fontSize: "clamp(17px,2.6vw,22px)", letterSpacing: "-.01em" }}>Close-Up Hoop</div>
          <span className="mono-label" style={{ color: "rgba(242,233,199,.6)" }}>Ed. 04 / 40 · $200</span>
          <div style={{ marginTop: 14, display: "inline-flex", background: "var(--orange)", color: "#0E0E0E", fontSize: 12, fontWeight: 700, padding: "10px 18px", borderRadius: 999 }}>Swipe up · Shop ↑</div>
        </div>
      </div>
    </div>
  );
}

// ── Etsy / gallery wall banner ──
function FramedPrint({ src }) {
  return (
    <div style={{ height: "100%", background: "#0E0E0E", padding: "min(1.1vw,9px)", borderRadius: 2, boxShadow: "0 16px 30px rgba(0,0,0,.42)", display: "flex" }}>
      <div style={{ background: "#F2E9C7", padding: "min(2.3vw,17px)", display: "flex" }}>
        <div style={{ height: "100%", aspectRatio: "2/3", overflow: "hidden", borderRadius: 1, background: "#1C3A3A" }}>
          <img src={src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </div>
    </div>
  );
}

function GalleryBanner({ mode = "ink", works = ["art/01-alley-runner.png", "art/05-court.png", "art/11-glitter.png"] }) {
  return (
    <div data-mode={mode} style={{ position: "relative", aspectRatio: "1200/360", background: mode === "ink" ? "#161616" : "#EFE7CC", color: "var(--fg)", borderRadius: 6, overflow: "hidden", display: "flex", alignItems: "center", gap: "clamp(16px,3vw,48px)", padding: "clamp(18px,3.4vw,46px)" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(130% 110% at 72% -10%, rgba(255,255,255,.07), transparent 58%)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "13%", background: mode === "ink" ? "rgba(0,0,0,.28)" : "rgba(0,0,0,.06)", borderTop: "1px solid var(--hair)" }} />
      <div style={{ position: "relative", flex: "0 0 auto", maxWidth: "32%" }}>
        <Wordmark size={"clamp(16px,2.5vw,32px)"} arc />
        <div style={{ fontFamily: "var(--script)", fontSize: "clamp(22px,2.9vw,40px)", color: "var(--orange)", lineHeight: .7, marginTop: 6 }}>arts</div>
        <div className="mono-label" style={{ marginTop: 16 }}>The gallery for the game</div>
        <div style={{ fontSize: "clamp(10px,1.2vw,13.5px)", color: "var(--fg-dim)", marginTop: 8, lineHeight: 1.5 }}>156 originals · limited-edition prints</div>
      </div>
      <div style={{ position: "relative", display: "flex", gap: "clamp(12px,2.2vw,30px)", alignItems: "center", height: "76%", marginLeft: "auto" }}>
        {works.map((s) => <FramedPrint key={s} src={s} />)}
      </div>
    </div>
  );
}

function ApplicationsSection() {
  return (
    <section className="section" id="apps">
      <div className="wrap">
        <div className="eyebrow rise"><span className="num">06</span> Applications</div>
        <h2 className="sec-title rise">Drop a loud poster into any layout.<br />The wrapper holds.</h2>
        <p className="sec-lead rise">156 originals in the catalog — the colour lives in the art, never the wrapper. These are real pieces, dropped into a neutral system.</p>
        <div className="poster-wall rise" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12, marginTop: 34 }}>
          {ART.slice(0, 5).map((a) => (
            <div key={a.src}>
              <Poster src={a.src} style={{ borderRadius: 3 }} />
              <div className="mono-label" style={{ marginTop: 10 }}>{a.t}</div>
            </div>
          ))}
        </div>
        <div className="rise" style={{ marginTop: 22 }}>
          <a href="gallery.html" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", background: "var(--fg)", color: "var(--bg)", fontWeight: 600, fontSize: 14, letterSpacing: ".01em", padding: "13px 24px", borderRadius: 999 }}>
            Open the digital gallery — 18 works <span style={{ color: "var(--orange)" }}>→</span>
          </a>
        </div>

        <MockLabel>Shopify store · homepage</MockLabel>
        <div className="rise"><StoreMock /></div>

        <MockLabel>Magazine cover · two directions</MockLabel>
        <div className="apps-2 rise" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 760, margin: "0 auto" }}>
          <CoverInk />
          <CoverCream />
        </div>

        <MockLabel>Magazine · masthead &amp; article template</MockLabel>
        <div className="rise"><ArticleMock /></div>

        <MockLabel>Social · avatar, post, story (black mode)</MockLabel>
        <div className="rise"><SocialMock /></div>

        <MockLabel>Launch · event flyer series (city tour)</MockLabel>
        <div className="rise"><FlyerSeries /></div>

        <MockLabel>Instagram · launch campaign grid (9-post feed)</MockLabel>
        <div className="rise" style={{ display: "flex", justifyContent: "center" }}><IGGrid /></div>

        <MockLabel>Instagram · portrait posts (4:5)</MockLabel>
        <div className="rise"><PortraitPosts /></div>

        <MockLabel>Instagram · stories (9:16)</MockLabel>
        <div className="rise"><StorySet /></div>

        <MockLabel>Pinterest · pins (2:3)</MockLabel>
        <div className="rise"><PinRow /></div>

        <MockLabel>Merch · round die-cut stickers</MockLabel>
        <div className="rise"><StickerSheet /></div>

        <MockLabel>Etsy · gallery-wall shop banner (3 works)</MockLabel>
        <div className="rise" style={{ display: "grid", gap: 18 }}>
          <GalleryBanner mode="ink" />
          <GalleryBanner mode="cream" works={["art/13-creative.png", "art/17-sentinel.png", "art/04-burst.png"]} />
        </div>

        <MockLabel>Print · framed poster with gallery label</MockLabel>
        <div className="rise"><GalleryMock /></div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 07 — VOICE
// ─────────────────────────────────────────────────────────────
function VoiceSection() {
  const yes = ["This is what Canadian basketball looks like right now.", "From the block to the gallery.", "The pass is the play."];
  const no = ["“Ball is life.”", "Grind / hustle clichés.", "Hype launch-speak.", "Luxury-brand pretension."];
  return (
    <section className="section" id="voice">
      <div className="wrap">
        <div className="eyebrow rise"><span className="num">07</span> Voice</div>
        <h2 className="sec-title rise">Confident but welcoming.<br />Street-smart but thoughtful.</h2>
        <p className="sec-lead rise">Proudly Canadian without being cheesy. Third person for the founder, “we” for the organization.</p>
        <div className="voice-grid rise" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 48 }}>
          <div className="frame" style={{ background: "transparent", padding: "30px 32px" }}>
            <div className="mono-label" style={{ color: "var(--orange)" }}>We say</div>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              {yes.map((q) => <div key={q} style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 600, letterSpacing: "-.01em", lineHeight: 1.25 }}>{q}</div>)}
            </div>
          </div>
          <div className="frame" style={{ background: "transparent", padding: "30px 32px" }}>
            <div className="mono-label">We never say</div>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 14 }}>
              {no.map((q) => <div key={q} className="dim" style={{ fontSize: 16.5, textDecoration: "line-through", textDecorationColor: "var(--fg-faint)" }}>{q}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 08 — QUICK REFERENCE + FOOTER
// ─────────────────────────────────────────────────────────────
function QuickRef() {
  const rows = [
    ["Brand", "Alleyoop Arts (parent) · Alleyoop (magazine) · Alleyoop Shop (store)"],
    ["Tagline", "The pass is the play."],
    ["Palette", "Ink #0E0E0E · Cream #F2E9C7 · Orange #EE9933 · Teal #223333"],
    ["Logo", "Type-only ALLEYOOP wordmark, double-O rims · overlapping oo monogram"],
    ["Type", "One bold grotesque + one accent script"],
    ["Imagery", "B&W photography; full colour reserved for the art"],
    ["Never", "Navy, gold, crests, basketball clip-art, silhouettes, gradients"],
  ];
  return (
    <section className="section" id="ref">
      <div className="wrap">
        <div className="eyebrow rise"><span className="num">08</span> Quick reference</div>
        <div className="rise" style={{ marginTop: 36, borderTop: "1px solid var(--hair)" }}>
          {rows.map(([k, v]) => (
            <div key={k} style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 24, padding: "16px 0", borderBottom: "1px solid var(--hair)", alignItems: "baseline" }}>
              <span className="mono-label">{k}</span>
              <span style={{ fontSize: 15.5, fontWeight: k === "Never" ? 600 : 500, color: k === "Never" ? "var(--orange)" : "var(--fg)" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer data-mode="ink" style={{ background: "var(--bg)", color: "var(--fg)", padding: "72px 0 60px", borderTop: "1px solid var(--hair)" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center" }}>
        <Lockup size={"clamp(36px,7vw,68px)"} arc full />
        <p className="dim" style={{ fontSize: 14, maxWidth: "44ch", lineHeight: 1.6, marginTop: 10 }}>
          A Canadian basketball art &amp; culture brand and non-profit. The gallery for the game.
        </p>
        <div style={{ display: "flex", gap: 22, opacity: .5, marginTop: 8 }}>
          {["NORTH CO.", "BASELINE", "THE SIX", "RUNWAY"].map((s) => (
            <span key={s} style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".06em" }}>{s}</span>
          ))}
        </div>
        <div className="mono-label" style={{ marginTop: 18 }}>Est. 2026 · The pass is the play</div>
      </div>
    </footer>
  );
}

Object.assign(window, { PhotoPlaceholder, StoreMock, CoverInk, CoverCream, ArticleMock, SocialMock, GalleryMock, ApplicationsSection, VoiceSection, QuickRef, SiteFooter });
