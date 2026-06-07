// launch.jsx — Alleyoop Arts: The First 100 Days (launch content package)

// Verified-ten only (print-safe). Source-traced, 2026-06-06.
const QUOTES = [
  { q: "Passing makes two people happy. Scoring only makes one person happy.", who: "Nikola Jokić", note: "quoting Magic Johnson · 2017" },
  { q: "You can never look at it as an individual sport. You rely on so many other people.", who: "Clyde Drexler", note: "VICE Sports · 2016" },
  { q: "Board man gets paid.", who: "Kawhi Leonard", note: "Toronto · 2019" },
  { q: "I've failed over and over and over again in my life. And that is why I succeed.", who: "Michael Jordan", note: "Nike · 1997" },
  { q: "In every lesson there's a blessing.", who: "Alonzo Mourning", note: "Bleacher Report · 2009" },
  { q: "My mental side is my strongest side. It's my best muscle and my best shot.", who: "Jamal Murray", note: "Canada · 2016" },
];

const PILLARS = [
  ["The Assist", "Credit and lineage. Every quote traced to its source — the pass, even in language."],
  ["Community & Streetball", "Courts as the galleries of the game — Rucker to Scarborough, Montréal to Pickering."],
  ["Visual Culture", "Hoops × hip-hop, sneakers, the tunnel walk. The game as a style canon."],
  ["The Maze", "Finding a lane. The redshirt, the JUCO, the handover — every route counts."],
  ["Athlete Voices", "The undercovered — the women's game, Canadian routes, life after the buzzer."],
];

const PHASES = [
  { tag: "Phase 0 · Days 1–14", title: "The tease", color: "var(--fg)", beats: [
    "Monogram-only avatar goes live. Maze teasers, no logo reveal yet.",
    "“We fact-checked basketball's most famous assist quote” — the receipt teaser.",
    "Founder note: the Pickering → Phoenix → Detroit maze, drip-fed.",
  ] },
  { tag: "Phase 1 · Days 15–30", title: "The Collection drops", color: "var(--orange)", beats: [
    "The digital gallery + shop go live — 156 originals, limited-edition prints.",
    "The Assist Series prints launch (verified-ten only).",
    "Launch party: Toronto. Stickers, framed prints, the seal.",
    "The Assist Files ep.01 — the Magic → Jokić lineage, as a social thread.",
  ] },
  { tag: "Phase 2 · Days 31–60", title: "Sacred Courts", color: "var(--fg)", beats: [
    "Sacred Courts collection (no player likenesses — cleanest to ship).",
    "Court Stories: Rucker Park → Canadian courts, one per week.",
    "The Crossover: hoops × Toronto music, social-first.",
    "Launch parties: Montréal, Vancouver.",
  ] },
  { tag: "Phase 3 · Days 61–100", title: "The Northern Game", color: "var(--fg)", beats: [
    "Northern Game collection — winter hoops, snow on the rim, Naismith heritage.",
    "Her Court: the women's game in Canada — the undercovered lane.",
    "The Lob collection — the moment between the pass and the finish.",
    "Print edition + magazine: announced for later. Not this window.",
  ] },
];

function Reveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".rise");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function QuotePoster({ q, who, note, idx, mode }) {
  return (
    <div data-mode={mode} style={{ position: "relative", aspectRatio: "2/3", background: "var(--bg)", color: "var(--fg)", padding: "clamp(18px,2.6vw,30px)", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", borderRadius: 3, border: "1px solid var(--hair)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="mono-label">The Assist Series</span>
        <Monogram size={24} tone="solid" on={mode} />
      </div>
      <div style={{ fontWeight: 800, fontSize: "clamp(17px,2.1vw,27px)", letterSpacing: "-.02em", lineHeight: 1.08, textWrap: "balance" }}>
        <span style={{ color: "var(--orange)" }}>“</span>{q}<span style={{ color: "var(--orange)" }}>”</span>
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: "clamp(13px,1.5vw,16px)" }}>{who}</div>
        <div className="mono-label" style={{ marginTop: 5 }}>{note}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--hair)" }}>
          <Wordmark size={13} arc />
          <span className="mono-label">No. {String(idx).padStart(2, "0")} / 50</span>
        </div>
      </div>
    </div>
  );
}

function IGQuote({ q, who, note }) {
  return (
    <div data-mode="ink" style={{ aspectRatio: "1", background: "var(--bg)", color: "var(--fg)", padding: "clamp(18px,2.6vw,30px)", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><Wordmark size={"clamp(13px,2.2vw,17px)"} arc /><span className="mono-label">The Assist Files</span></div>
      <div style={{ fontWeight: 800, fontSize: "clamp(16px,2.2vw,26px)", letterSpacing: "-.02em", lineHeight: 1.1 }}><span style={{ color: "var(--orange)" }}>“</span>{q}<span style={{ color: "var(--orange)" }}>”</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div><div style={{ fontWeight: 700, fontSize: 14 }}>{who}</div><span className="mono-label">{note}</span></div>
        <Ball size={26} />
      </div>
    </div>
  );
}

function Tweet({ text, ts, likes, rts }) {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--hair)", borderRadius: 12, padding: "18px 20px" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div data-mode="ink" style={{ width: 42, height: 42, borderRadius: "50%", background: "#0E0E0E", display: "grid", placeItems: "center", flexShrink: 0 }}><Monogram size={22} tone="solid" on="ink" accent /></div>
        <div><div style={{ fontWeight: 700, fontSize: 14.5 }}>Alleyoop Arts <span style={{ color: "var(--orange)" }}>✦</span></div><div style={{ fontSize: 13, color: "var(--fg-dim)" }}>@alleyooparts</div></div>
      </div>
      <div style={{ fontSize: 15.5, lineHeight: 1.5, marginTop: 14 }}>{text}</div>
      <div className="mono-label" style={{ marginTop: 14 }}>{ts}</div>
      <div style={{ display: "flex", gap: 26, marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--hair)", fontSize: 13.5, color: "var(--fg-dim)" }}><span>♡ {likes}</span><span>↻ {rts}</span><span>↗</span></div>
    </div>
  );
}

function Launch() {
  const [mode, setMode] = React.useState("cream");
  Reveal();
  return (
    <div className="doc" data-mode={mode}>
      <header className="ghead">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="index.html" style={{ textDecoration: "none" }}><Wordmark size={22} arc /></a>
          <span className="mono-label" style={{ marginLeft: 2 }}>First 100 Days</span>
        </div>
        <nav>
          <a href="#pillars">Pillars</a>
          <a href="#series">The Assist Series</a>
          <a href="#social">Social</a>
          <a href="#calendar">Calendar</a>
          <a href="gallery.html">The Collection</a>
        </nav>
        <div className="modeswitch" role="group" aria-label="Mode">
          <button data-on={mode === "cream" ? "1" : "0"} onClick={() => setMode("cream")}>Cream</button>
          <button data-on={mode === "ink" ? "1" : "0"} onClick={() => setMode("ink")}>Ink</button>
        </div>
      </header>

      <section className="section" style={{ borderTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">·</span> Brand launch package</div>
          <h1 className="rise" style={{ fontWeight: 800, letterSpacing: "-.03em", lineHeight: .95, fontSize: "clamp(40px,8vw,104px)", margin: "20px 0 0" }}>The first<br />100 days.</h1>
          <p className="lead rise" style={{ marginTop: 26 }}>
            The launch is the <b style={{ color: "var(--fg)" }}>collection and the shop</b> — 156 originals, limited-edition prints, and a social engine built on one idea: the receipt. Everyone aggregates quotes; we trace them. The magazine and the print edition come later — this window is the art.
          </p>
        </div>
      </section>

      {/* pillars */}
      <section className="section" id="pillars">
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">01</span> Content pillars</div>
          <div className="grid5 rise" style={{ marginTop: 36, borderTop: "1px solid var(--hair)" }}>
            {PILLARS.map(([t, d], i) => (
              <div key={t} style={{ padding: "24px 18px 0 0" }}>
                <div className="mono-label" style={{ color: "var(--orange)" }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontWeight: 800, fontSize: 17, marginTop: 12, letterSpacing: "-.01em" }}>{t}</div>
                <div style={{ fontSize: 13.5, marginTop: 8, lineHeight: 1.5, color: "var(--fg-dim)" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* the assist series posters */}
      <section className="section" id="series">
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">02</span> The Assist Series · quote prints</div>
          <h2 className="h2 rise">Verified, or it doesn't print.</h2>
          <p className="lead rise" style={{ marginTop: 16 }}>Typographic prints drawn only from source-traced quotes. Each carries its receipt — who said it, where, when.</p>
          <div className="posters rise" style={{ marginTop: 40 }}>
            {QUOTES.map((q, i) => <QuotePoster key={q.who} {...q} idx={i + 1} mode={i % 2 === 0 ? "ink" : "cream"} />)}
          </div>
        </div>
      </section>

      {/* social */}
      <section className="section" id="social">
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">03</span> Social · The Assist Files</div>
          <h2 className="h2 rise">The lineage is the launch story.</h2>
          <div className="grid2 rise" style={{ marginTop: 40, alignItems: "start", gap: 40 }}>
            <div>
              <div className="mono-label" style={{ marginBottom: 16 }}>Instagram · quote cards (1:1)</div>
              <div className="igs">
                {QUOTES.slice(0, 3).map((q) => <IGQuote key={q.who} {...q} />)}
              </div>
            </div>
            <div>
              <div className="mono-label" style={{ marginBottom: 16 }}>X / Twitter · the receipt thread</div>
              <div style={{ display: "grid", gap: 14 }}>
                <Tweet text="We fact-checked basketball's most famous assist quote. Turns out it was itself an assist — Magic → Jokić, misquoted for years, traced back to the source. The pass is the play, even in language. 🧵" ts="Day 18 · 9:02 AM" likes="2.4k" rts="610" />
                <Tweet text="Rule we print by: if we can't trace it to an interview, a presser, a book or a broadcast, it doesn't go on a wall. 2 in 3 quotes online failed that test. Receipts only." ts="Day 18 · 9:05 AM" likes="1.1k" rts="288" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* calendar */}
      <section className="section" id="calendar">
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">04</span> The 100-day calendar</div>
          <h2 className="h2 rise">Four phases, one arc.</h2>
          <div className="grid2 rise" style={{ marginTop: 40, gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {PHASES.map((p) => (
              <div key={p.title} className="card">
                <div className="mono-label" style={{ color: "var(--orange)" }}>{p.tag}</div>
                <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-.01em", margin: "8px 0 14px" }}>{p.title}</div>
                <div style={{ display: "grid", gap: 10 }}>
                  {p.beats.map((b, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: 1.45 }}>
                      <span style={{ color: "var(--orange)", fontWeight: 700 }}>→</span>
                      <span style={{ color: "var(--fg-dim)" }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="rise card" style={{ marginTop: 18, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", background: "var(--surface)" }}>
            <Ball size={40} />
            <div style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--fg-dim)", flex: 1, minWidth: 220 }}>
              <b style={{ color: "var(--fg)" }}>Weekly cadence:</b> 3 quote cards (verified) · 1 Court Story · 1 print drop or restock · 1 receipt thread on X · 1 founder/maze note. Photography stays black &amp; white; the colour is reserved for the art.
            </div>
          </div>
        </div>
      </section>

      <footer data-mode="ink" style={{ background: "var(--bg)", color: "var(--fg)", borderTop: "1px solid var(--hair)", padding: "64px 0 56px", textAlign: "center" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <Wordmark size={"clamp(34px,7vw,60px)"} arc />
          <p className="lead" style={{ maxWidth: "42ch" }}>The pass is the play. The receipt is the difference.</p>
          <div className="mono-label">Est. 2026 · Canada</div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Launch />);
