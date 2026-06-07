// about.jsx — Alleyoop Arts "About" page

function Photo({ src, ratio = "4/5", label, dark = true, style }) {
  if (src) {
    return (
      <div className="imground" style={{ aspectRatio: ratio, ...style }}>
        <img src={src} alt={label || ""} loading="lazy" />
      </div>
    );
  }
  const base = dark ? "#191919" : "#CFC8B4", hi = dark ? "#2c2c2c" : "#E4DCC6";
  const ink = dark ? "rgba(242,233,199,.5)" : "rgba(14,14,14,.5)";
  return (
    <div className="imground" style={{ aspectRatio: ratio, position: "relative", background: `radial-gradient(120% 90% at 32% 22%, ${hi}, ${base} 68%)`, ...style }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.06)"} 1px, transparent 1.4px)`, backgroundSize: "7px 7px" }} />
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, color: ink }}>
          <span style={{ width: 34, height: 34, borderRadius: "50%", border: `1.5px solid ${ink}` }} />
          <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase" }}>{label || "B&W Photography"}</span>
        </div>
      </div>
    </div>
  );
}

function Reveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".rise");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function About() {
  const [mode, setMode] = React.useState("cream");
  Reveal();

  const values = [
    ["The pass is the play", "Credit and elevate others. The assist is the art."],
    ["Find a lane", "Celebrate the navigation, not just the arrival."],
    ["Bet on yourself", "Back the unproven. The detour counts."],
    ["Know when to hand it over", "Honor every version of a basketball life."],
    ["Build, don't borrow", "Author the culture. Own the platform."],
  ];
  const makes = [
    ["The Magazine", "Alleyoop", "A digital magazine — site-first, with an annual print edition — celebrating Canadian athletes, artists and voices.", null, "B&W Editorial"],
    ["The Shop", "Alleyoop Shop", "Limited-edition prints from a catalog of 156 original basketball artworks, signed and numbered, plus select merch.", "art/02-hoop.png", null],
    ["The Programs", "Events & Experiences", "Exhibitions, panels and community programs — from the block to the gallery, and back to the block.", "art/06-clinic.png", null],
  ];

  return (
    <div className="doc" data-mode={mode}>
      <header className="ghead">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="index.html" style={{ textDecoration: "none" }}><Wordmark size={22} arc overlap ballPass /></a>
          <span className="mono-label" style={{ marginLeft: 2 }}>About</span>
        </div>
        <nav>
          <a href="index.html">Home</a>
          <a href="gallery.html">Gallery</a>
          <a href="shop.html">Shop</a>
          <a href="blog.html">Blog</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </nav>
        <div className="modeswitch" role="group" aria-label="Mode">
          <button data-on={mode === "cream" ? "1" : "0"} onClick={() => setMode("cream")}>Cream</button>
          <button data-on={mode === "ink" ? "1" : "0"} onClick={() => setMode("ink")}>Ink</button>
        </div>
      </header>

      {/* hero */}
      <section className="section" style={{ borderTop: 0, paddingBottom: "clamp(40px,5vw,64px)" }}>
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">·</span> About Alleyoop Arts · Est. 2026</div>
          <h1 className="rise" style={{ fontWeight: 800, letterSpacing: "-.03em", lineHeight: .95, fontSize: "clamp(44px,8.5vw,116px)", margin: "22px 0 0" }}>
            The gallery<br />for the game.
          </h1>
          <p className="lead rise" style={{ marginTop: 28 }}>
            Alleyoop Arts is a Canadian basketball art &amp; culture brand and non-profit. We collect, print and hang the culture of the game — treating a poster, a magazine and a name on a gallery label with the same weight. The pass is the play.
          </p>
        </div>
        <div className="wrap rise" style={{ marginTop: "clamp(32px,5vw,56px)" }}>
          <Photo src="art/01-alley-runner.png" ratio="16/9" />
        </div>
      </section>

      {/* thesis */}
      <section className="section" id="story">
        <div className="wrap">
          <div className="twocol">
            <div className="rise">
              <div className="eyebrow"><span className="num">01</span> Two parts, one play</div>
              <h2 className="h2">An alley-oop is the one play you cannot run alone.</h2>
              <p className="lead" style={{ marginTop: 20 }}>
                One person throws the lob; another finishes. The name is the thesis. And the art runs on a second idea — basketball as a labyrinth: finding a lane, reading the floor, improvising under pressure. The maze motif threads through all 156 originals.
              </p>
              <p style={{ fontFamily: "var(--script)", fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1, marginTop: 26 }}>From the block to the gallery.</p>
            </div>
            <div className="rise"><Photo src="art/08-perfect-pass.png" ratio="4/5" /></div>
          </div>
        </div>
      </section>

      {/* founder */}
      <section className="section">
        <div className="wrap">
          <div className="twocol">
            <div className="rise" style={{ order: 1 }}><Photo label="Damion Rashford · Founder" ratio="4/5" /></div>
            <div className="rise" style={{ order: 2 }}>
              <div className="eyebrow"><span className="num">02</span> The founder</div>
              <h2 className="h2" style={{ fontSize: "clamp(28px,3.4vw,46px)" }}>Damion Rashford</h2>
              <p className="lead" style={{ marginTop: 20 }}>
                He grew up in Pickering, Ontario. At seventeen he moved alone to Phoenix to chase a Division I lane — and earned it: team captain, All-Arizona, then Loyola Maryland. What followed wasn't a highlight reel. It was a maze.
              </p>
              <p className="lead" style={{ marginTop: 16 }}>
                A redshirt year. A bench season. A bet-on-himself detour through a Nebraska JUCO. A final stop in Detroit — and then the hardest play in basketball: knowing when to pass. He handed the ball to his next self, built a career in technology, and returned to the game as an author — founding Alleyoop Arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">03</span> What we believe</div>
          <div className="rise" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 0, borderTop: "1px solid var(--hair)", marginTop: 32 }}>
            {values.map(([t, d], i) => (
              <div key={i} className="value-cell" style={{ padding: "26px 22px 0 0", borderRight: i < 4 ? "1px solid var(--hair)" : "none", paddingLeft: i ? 22 : 0 }}>
                <div className="mono-label" style={{ color: "var(--orange)" }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontWeight: 700, fontSize: 16.5, marginTop: 14, letterSpacing: "-.01em" }}>{t}</div>
                <div style={{ fontSize: 13.5, marginTop: 8, lineHeight: 1.5, color: "var(--fg-dim)" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what we make */}
      <section className="section" id="make">
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">04</span> What we make</div>
          <h2 className="h2 rise">Three ways into the culture.</h2>
          <div className="cards3 rise" style={{ marginTop: 44 }}>
            {makes.map(([t, sub, body, img, ph]) => (
              <div key={t} style={{ border: "1px solid var(--hair)", borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <Photo src={img} label={ph} ratio="3/2" style={{ borderRadius: 0 }} />
                <div style={{ padding: "22px 24px 26px" }}>
                  <div className="mono-label" style={{ color: "var(--orange)" }}>{sub}</div>
                  <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-.01em", marginTop: 8 }}>{t}</div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--fg-dim)", marginTop: 10 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* numbers */}
      <section className="section">
        <div className="wrap">
          <div className="rise" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, textAlign: "left" }}>
            {[["156", "Original artworks"], ["1", "Maze, one idea"], ["2:3", "The canonical ratio"], ["2026", "Founded in Canada"]].map(([n, l]) => (
              <div key={l} style={{ borderTop: "2px solid var(--orange)", paddingTop: 16 }}>
                <div style={{ fontWeight: 800, fontSize: "clamp(34px,5vw,64px)", letterSpacing: "-.03em", lineHeight: 1 }}>{n}</div>
                <div className="mono-label" style={{ marginTop: 10 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* art strip */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow rise" style={{ marginBottom: 24 }}><span className="num">05</span> The work</div>
          <div className="strip rise">
            {["art/13-creative.png", "art/04-burst.png", "art/05-court.png", "art/11-glitter.png", "art/17-sentinel.png", "art/15-slam.png"].map((s) => (
              <div className="imground" key={s} style={{ aspectRatio: "2/3" }}><img src={s} alt="" loading="lazy" /></div>
            ))}
          </div>
          <div className="rise" style={{ marginTop: 28 }}>
            <a className="acquire" href="gallery.html">Explore the full collection <span style={{ color: "var(--orange)" }}>→</span></a>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer data-mode="ink" style={{ background: "var(--bg)", color: "var(--fg)", borderTop: "1px solid var(--hair)", padding: "72px 0 60px", textAlign: "center" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <Lockup size={"clamp(36px,7vw,64px)"} arc full artsColor="var(--orange)" />
          <p style={{ fontSize: 14, color: "var(--fg-dim)", maxWidth: "44ch", lineHeight: 1.6, marginTop: 10 }}>
            A Canadian basketball art &amp; culture brand and non-profit. The gallery for the game.
          </p>
          <div style={{ display: "flex", gap: 22, opacity: .5, marginTop: 6 }}>
            {["NORTH CO.", "BASELINE", "THE SIX", "RUNWAY"].map((s) => (
              <span key={s} style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".06em" }}>{s}</span>
            ))}
          </div>
          <div className="mono-label" style={{ marginTop: 16 }}>The pass is the play · Est. 2026</div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<About />);
