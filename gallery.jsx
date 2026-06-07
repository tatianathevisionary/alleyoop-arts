// gallery.jsx — Alleyoop Arts digital gallery (The Collection)

const GART = [
  { src: "art/01-alley-runner.png", title: "Alley Runner", series: "The Labyrinth", year: 2026, ed: "12 / 50", price: 240, blurb: "One player, one lane, one shot — the maze becomes the court." },
  { src: "art/13-creative.png", title: "The Architect", series: "The Labyrinth", year: 2026, ed: "05 / 40", price: 250, blurb: "A player stands at the centre of a structure he seems to have drawn himself." },
  { src: "art/04-burst.png", title: "Burst", series: "Celebration", year: 2026, ed: "02 / 30", price: 280, blurb: "A basketball breaks into hundreds of colourful shards — the game as pure celebration." },
  { src: "art/02-hoop.png", title: "Close-Up Hoop", series: "The Court", year: 2026, ed: "04 / 40", price: 200, blurb: "Pure basketball signal. The rim and net as product-poster simplicity." },
  { src: "art/17-sentinel.png", title: "The Sentinel", series: "Portals", year: 2026, ed: "07 / 45", price: 230, blurb: "A stoic guardian holds the line at a mystical hoop." },
  { src: "art/09-high-jump.png", title: "High Jump", series: "Street", year: 2026, ed: "14 / 50", price: 220, blurb: "A daring jump shot, launched from the blacktop into open air." },
  { src: "art/03-the-call.png", title: "The Call", series: "The Labyrinth", year: 2026, ed: "09 / 45", price: 220, blurb: "Rules, rhythm and pressure — the whistle moment at a maze intersection." },
  { src: "art/11-glitter.png", title: "Champion's Light", series: "Celebration", year: 2026, ed: "01 / 25", price: 280, blurb: "An inspiring, glittering scene — the trophy glow of an earned season." },
  { src: "art/05-court.png", title: "Bird's-Eye Court", series: "The Court", year: 2026, ed: "18 / 60", price: 200, blurb: "The court reads like a map; the paint and the shadows do the storytelling." },
  { src: "art/15-slam.png", title: "Slam", series: "Street", year: 2026, ed: "11 / 50", price: 230, blurb: "Basketballs slam-dunked in sequence — kinetic, loud, alive." },
  { src: "art/12-closeup.png", title: "Eye to Eye", series: "Portraits", year: 2026, ed: "06 / 40", price: 240, blurb: "A close-up; two players, one held breath before the play." },
  { src: "art/08-perfect-pass.png", title: "Perfect Pass", series: "The Labyrinth", year: 2026, ed: "03 / 35", price: 250, blurb: "The pass is a ribbon; the maze is the defender it threads." },
  { src: "art/16-camp.png", title: "California Camp", series: "Street", year: 2026, ed: "22 / 60", price: 190, blurb: "A sun-drenched basketball camp — the sport as mentorship and growth." },
  { src: "art/07-stoic.png", title: "The Guardian", series: "Portals", year: 2026, ed: "08 / 45", price: 230, blurb: "Another keeper of the mystical hoop, framed in clean geometry." },
  { src: "art/10-vibrant.png", title: "Block Party", series: "Celebration", year: 2026, ed: "27 / 60", price: 200, blurb: "Streetball joy; the crowd and the players become blocks of team colour." },
  { src: "art/14-court2.png", title: "Court Lines", series: "The Court", year: 2026, ed: "16 / 60", price: 200, blurb: "Court markings as graphic design — an overhead diagram, painterly." },
  { src: "art/18-rise.png", title: "Rise", series: "Street", year: 2026, ed: "19 / 50", price: 220, blurb: "Launching into a high jump shot — pure ascent off the dribble." },
  { src: "art/06-clinic.png", title: "Clinic Day", series: "Street", year: 2026, ed: "24 / 60", price: 190, blurb: "Bright, hopeful, instructional — coaches guiding the next lane-finders." },
  { src: "art/19-timeout.png", title: "Timeout", series: "Portraits", year: 2026, ed: "07 / 40", price: 230, blurb: "A poignant pause — the player takes a breath at the edge of the play." },
  { src: "art/20-underdog.png", title: "The Underdog", series: "Street", year: 2026, ed: "10 / 50", price: 220, blurb: "The journey of an underdog, drawn as the longest way around the maze." },
  { src: "art/21-contested.png", title: "Contested", series: "The Labyrinth", year: 2026, ed: "13 / 50", price: 240, blurb: "A jump shot answered — the maze closes as the ball leaves the hand." },
  { src: "art/22-stance.png", title: "Stance", series: "Portraits", year: 2026, ed: "06 / 40", price: 240, blurb: "A creative study of posture — the calm before the first step." },
  { src: "art/23-stance2.png", title: "Hold", series: "Portraits", year: 2026, ed: "09 / 40", price: 230, blurb: "Weight on the back foot, eyes up — reading the floor before the break." },
  { src: "art/24-court3.png", title: "Half Court", series: "The Court", year: 2026, ed: "21 / 60", price: 200, blurb: "The court setup as still life — clean markings, long light." },
  { src: "art/25-clinic2.png", title: "Drills", series: "Street", year: 2026, ed: "26 / 60", price: 190, blurb: "The clinic in motion — repetition as the quiet art of the game." },
  { src: "art/26-camp2.png", title: "Camp", series: "Street", year: 2026, ed: "28 / 60", price: 190, blurb: "A California camp under high sun — where lanes are first found." },
  { src: "art/27-daring.png", title: "Daring", series: "The Labyrinth", year: 2026, ed: "15 / 50", price: 240, blurb: "A daring shot threaded through the maze's tightest corridor." },
  { src: "art/28-daring2.png", title: "Release", series: "The Labyrinth", year: 2026, ed: "16 / 50", price: 240, blurb: "The follow-through — the maze briefly opens into a single clean line." },
  { src: "art/29-featured.png", title: "The Feature", series: "Portraits", year: 2026, ed: "08 / 40", price: 250, blurb: "A creative hero portrait — the player as the centre of the composition." },
  { src: "art/30-stance3.png", title: "Square Up", series: "Portraits", year: 2026, ed: "11 / 40", price: 230, blurb: "Squared to the rim — the geometry of intention before the shot." },
];

const SERIES = ["All", "The Labyrinth", "The Court", "Street", "Portals", "Celebration", "Portraits"];

function Seal({ size = 46 }) {
  return (
    <span className="seal" style={{ width: size, height: size }}>
      <Monogram size={size * 0.32} tone="solid" stroke={size * 0.32 * 0.16} />
    </span>
  );
}

function Gallery() {
  const [mode, setMode] = React.useState("cream");
  const [filter, setFilter] = React.useState("All");
  const [open, setOpen] = React.useState(null); // index into filtered

  const works = filter === "All" ? GART : GART.filter((w) => w.series === filter);

  const close = () => setOpen(null);
  const step = (d) => setOpen((i) => (i == null ? i : (i + d + works.length) % works.length));

  React.useEffect(() => {
    if (open == null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, works.length]);

  // keep open index valid when filter changes
  React.useEffect(() => { setOpen(null); }, [filter]);

  const w = open == null ? null : works[open];

  return (
    <div className="doc" data-mode={mode}>
      {/* header */}
      <header className="ghead">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="index.html" style={{ textDecoration: "none" }}><Wordmark size={22} arc overlap ballPass /></a>
          <span className="mono-label" style={{ marginLeft: 2 }}>The Collection</span>
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
      <section className="ghero">
        <div className="wrap">
          <div className="mono-label"><span style={{ color: "var(--orange)" }}>Digital gallery</span> · 156 originals, one maze</div>
          <h1>The Collection</h1>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 20, marginTop: 26 }}>
            <p style={{ fontSize: "clamp(16px,1.6vw,19px)", lineHeight: 1.55, color: "var(--fg-dim)", maxWidth: "52ch", margin: 0 }}>
              Original basketball artwork built on a single idea — the game as a labyrinth. Every piece is portrait 2:3, archival, signed and numbered. The colour lives in the art; the gallery stays neutral.
            </p>
            <div className="mono-label" style={{ whiteSpace: "nowrap" }}>{works.length} works shown · Est. 2026</div>
          </div>
        </div>
      </section>

      {/* filter chips */}
      <div className="wrap" id="grid">
        <div className="chips">
          {SERIES.map((s) => (
            <button key={s} className="chip" data-on={filter === s ? "1" : "0"} onClick={() => setFilter(s)}>{s}</button>
          ))}
        </div>

        {/* grid */}
        <div className="ggrid">
          {works.map((work, i) => (
            <div className="gcard" key={work.src} onClick={() => setOpen(i)}>
              <div className="frameimg">
                <img src={work.src} alt={work.title} loading="lazy" />
                <div className="ov"><span>View</span></div>
              </div>
              <div className="gcap">
                <div>
                  <div className="t">{work.title}</div>
                  <div className="s">{work.series} · Ed. {work.ed}</div>
                </div>
                <div className="p">${work.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <footer data-mode="ink" style={{ background: "var(--bg)", color: "var(--fg)", borderTop: "1px solid var(--hair)", padding: "64px 0 56px", textAlign: "center" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <Wordmark size={"clamp(34px,7vw,62px)"} arc overlap ballPass />
          <span style={{ fontFamily: "var(--script)", fontSize: 30, color: "var(--orange)", lineHeight: .8, marginTop: -6 }}>arts</span>
          <p style={{ fontSize: 14, color: "var(--fg-dim)", maxWidth: "40ch", lineHeight: 1.6 }}>The gallery for the game. Limited-edition prints from a catalog of 156 originals.</p>
          <div className="mono-label" style={{ marginTop: 8 }}>The pass is the play · Est. 2026</div>
        </div>
      </footer>

      {/* lightbox */}
      {w && (
        <div className="lb" onClick={close}>
          <button className="lb-close" onClick={close} aria-label="Close">✕</button>
          <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous">‹</button>
          <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next">›</button>
          <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
            <div className="lb-img"><img src={w.src} alt={w.title} /></div>
            <div className="lb-meta">
              <Seal size={48} />
              <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,3.4vw,40px)", letterSpacing: "-.02em", margin: "20px 0 0" }}>{w.title}</h2>
              <div style={{ fontFamily: "var(--script)", fontSize: 28, color: "var(--orange)", lineHeight: .9, marginTop: 2 }}>{w.series.toLowerCase()}</div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(242,233,199,.8)", margin: "18px 0 22px" }}>{w.blurb}</p>
              <div className="lb-field"><span>Artist</span><span>Alleyoop Arts</span></div>
              <div className="lb-field"><span>Medium</span><span>Archival pigment on cotton rag</span></div>
              <div className="lb-field"><span>Format</span><span>2:3 · 24 × 36 in</span></div>
              <div className="lb-field"><span>Edition</span><span>No. {w.ed}</span></div>
              <div className="lb-field"><span>Year</span><span>{w.year}</span></div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 18 }}>
                <div style={{ fontWeight: 800, fontSize: 26 }}>${w.price}<span style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,233,199,.5)", marginLeft: 6 }}>CAD</span></div>
                <a className="acquire" style={{ textDecoration: "none" }} onClick={(e) => e.stopPropagation()}
                  href={"shop.html#" + w.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}>Acquire print →</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Gallery />);
