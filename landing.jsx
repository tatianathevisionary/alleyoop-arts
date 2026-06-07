// landing.jsx — Alleyoop Arts landing page

const FEATURED = [
  { src: "art/01-alley-runner.png", title: "Alley Runner", series: "The Labyrinth" },
  { src: "art/08-perfect-pass.png", title: "Perfect Pass", series: "The Labyrinth" },
  { src: "art/02-hoop.png", title: "Close-Up Hoop", series: "The Court" },
  { src: "art/29-featured.png", title: "The Feature", series: "Portraits" },
];

function useRise() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".rise");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((ents) => ents.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function Landing() {
  const [mode, setMode] = React.useState("cream");
  useRise();

  const makes = [
    ["01", "The Shop", "Limited-edition prints from a catalog of 156 original basketball artworks — signed, numbered, archival.", "gallery.html", "Browse the collection"],
    ["02", "The Magazine", "Alleyoop — a site-first magazine celebrating Canadian athletes, artists and voices, with an annual print edition.", "about.html#make", "Coming soon"],
    ["03", "The Programs", "Exhibitions, panels and community runs. From the block to the gallery, and back to the block.", "about.html#make", "Coming soon"],
  ];

  return (
    <div className="doc" data-mode={mode}>
      {/* header */}
      <header className="ghead">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="index.html" style={{ textDecoration: "none" }}><Wordmark size={22} arc /></a>
        </div>
        <nav>
          <a href="gallery.html">The Collection</a>
          <a href="shop.html">Shop</a>
          <a href="about.html">About</a>
          <a href="3d/gallery-space.html">The Gallery — Live</a>
        </nav>
        <div className="modeswitch" role="group" aria-label="Mode">
          <button data-on={mode === "cream" ? "1" : "0"} onClick={() => setMode("cream")}>Cream</button>
          <button data-on={mode === "ink" ? "1" : "0"} onClick={() => setMode("ink")}>Ink</button>
        </div>
      </header>

      {/* hero */}
      <section style={{ padding: "clamp(56px,9vw,120px) 0 clamp(36px,5vw,64px)" }}>
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">·</span> Canadian basketball art &amp; culture · Est. 2026</div>
          <h1 className="rise" style={{ fontWeight: 800, letterSpacing: "-.03em", lineHeight: .93, fontSize: "clamp(52px,10.5vw,148px)", margin: "22px 0 0", textWrap: "balance" }}>
            The gallery<br />for the game.
          </h1>
          <div className="rise" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 28, marginTop: 30 }}>
            <p className="lead" style={{ margin: 0 }}>
              Limited-edition art, stories and experiences that treat basketball as what it
              always was — culture, identity and art. The name is the belief: an alley-oop
              is the one play you can't run alone.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-accent" href="gallery.html">Explore the collection →</a>
              <a className="btn btn-ghost" href="about.html">Our story</a>
            </div>
          </div>
        </div>
        <div className="wrap rise" style={{ marginTop: "clamp(36px,5vw,60px)" }}>
          <div className="imground" style={{ aspectRatio: "21/9" }}>
            <img src="art/15-slam.png" alt="Slam — from the Alleyoop Arts collection" style={{ objectPosition: "center 30%" }} />
          </div>
        </div>
      </section>

      {/* featured works */}
      <section className="section">
        <div className="wrap">
          <div className="rise" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 18, flexWrap: "wrap" }}>
            <div>
              <div className="eyebrow"><span className="num">01</span> Featured works</div>
              <h2 className="h2">Thirty works. One maze.</h2>
            </div>
            <a href="gallery.html" style={{ fontSize: 14, fontWeight: 600, color: "var(--fg)", whiteSpace: "nowrap" }}>View all →</a>
          </div>
          <div className="grid4 rise" style={{ marginTop: 36 }}>
            {FEATURED.map((w) => (
              <a key={w.src} href="gallery.html" style={{ textDecoration: "none", color: "var(--fg)" }}>
                <div className="imground" style={{ aspectRatio: "2/3" }}>
                  <img src={w.src} alt={w.title} loading="lazy" />
                </div>
                <div style={{ padding: "12px 2px 0" }}>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{w.title}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-dim)", marginTop: 3 }}>{w.series}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* thesis */}
      <section className="section">
        <div className="wrap">
          <div className="grid2">
            <div className="rise">
              <div className="eyebrow"><span className="num">02</span> Two parts, one play</div>
              <h2 className="h2">An alley-oop is the one play you cannot run alone.</h2>
              <p className="lead" style={{ marginTop: 20 }}>
                Someone reads the floor. Someone trusts the lob. Someone finishes. Everything
                we make is that pass — thrown to the athletes the highlight reels missed,
                the artists the galleries haven't found yet, and the communities the courts
                hold together.
              </p>
              <p style={{ fontFamily: "var(--script)", fontSize: "clamp(30px,3.6vw,48px)", lineHeight: 1, marginTop: 28, color: "var(--orange)" }}>
                The pass is the play.
              </p>
            </div>
            <div className="rise">
              <div className="imground" style={{ aspectRatio: "4/5" }}>
                <img src="art/08-perfect-pass.png" alt="Perfect Pass" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what we make */}
      <section className="section">
        <div className="wrap">
          <div className="rise">
            <div className="eyebrow"><span className="num">03</span> What we make</div>
            <h2 className="h2">Art you can hang. Stories you can keep.</h2>
          </div>
          <div className="grid3 rise" style={{ marginTop: 36 }}>
            {makes.map(([num, t, d, href, cta]) => (
              <div className="card" key={t} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span className="mono-label" style={{ color: "var(--orange)" }}>{num}</span>
                <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-.01em" }}>{t}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--fg-dim)", margin: 0, flex: 1 }}>{d}</p>
                <a href={href} style={{ fontSize: 13.5, fontWeight: 700, color: "var(--fg)" }}>{cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <footer data-mode="ink" style={{ background: "var(--bg)", color: "var(--fg)", borderTop: "1px solid var(--hair)", padding: "72px 0 60px", textAlign: "center" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <Wordmark size={"clamp(38px,8vw,72px)"} arc />
          <span style={{ fontFamily: "var(--script)", fontSize: 32, color: "var(--orange)", lineHeight: .8, marginTop: -6 }}>arts</span>
          <p style={{ fontSize: 14, color: "var(--fg-dim)", maxWidth: "44ch", lineHeight: 1.6 }}>
            Alleyoop Arts is a Canadian basketball art and culture brand. Founded by Damion
            Rashford, a former college player who came back to the game through art.
          </p>
          <nav style={{ display: "flex", gap: 22, marginTop: 6 }}>
            <a href="gallery.html" style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-dim)", textDecoration: "none" }}>The Collection</a>
            <a href="about.html" style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-dim)", textDecoration: "none" }}>About</a>
            <a href="brand.html" style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-dim)", textDecoration: "none" }}>Brand</a>
          </nav>
          <div className="mono-label" style={{ marginTop: 10 }}>The pass is the play · Est. 2026</div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Landing />);
