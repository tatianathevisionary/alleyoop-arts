// content.jsx — Alleyoop Arts Content Studio: IG feed, portrait quotes, 100 tweets, LinkedIn.

const ARTS = [
  "art/01-alley-runner.png","art/13-creative.png","art/04-burst.png","art/05-court.png","art/17-sentinel.png",
  "art/09-high-jump.png","art/11-glitter.png","art/02-hoop.png","art/15-slam.png","art/08-perfect-pass.png",
  "art/12-closeup.png","art/16-camp.png","art/07-stoic.png","art/10-vibrant.png","art/24-court3.png",
  "art/18-rise.png","art/27-daring.png","art/22-stance.png","art/29-featured.png","art/21-contested.png",
];

// Verified-ten only (source-traced).
const QUOTES = [
  { q: "Passing makes two people happy. Scoring only makes one person happy.", who: "Nikola Jokić", note: "quoting Magic Johnson · 2017" },
  { q: "You can never look at it as an individual sport. You rely on so many other people.", who: "Clyde Drexler", note: "VICE Sports · 2016" },
  { q: "Board man gets paid.", who: "Kawhi Leonard", note: "Toronto · 2019" },
  { q: "I've failed over and over and over again. And that is why I succeed.", who: "Michael Jordan", note: "Nike · 1997" },
  { q: "In every lesson there's a blessing.", who: "Alonzo Mourning", note: "Bleacher Report · 2009" },
  { q: "My mental side is my strongest side. My best muscle and my best shot.", who: "Jamal Murray", note: "Canada · 2016" },
];

const WORDS = [
  { big: "We're\nlaunching.", sub: "the gallery for the game", bg: "ink", pillar: "The Assist", type: "Announce" },
  { big: "The pass\nis the play.", sub: "@alleyooparts", bg: "orange", pillar: "The Assist", type: "Brand line" },
  { big: "Find\na lane.", sub: "bet on yourself", bg: "teal", script: true, pillar: "The Maze", type: "Value" },
  { big: "156\noriginals.", sub: "one maze", bg: "ink", pillar: "Visual Culture", type: "Collection" },
  { big: "From the block\nto the gallery.", sub: "est. 2026", bg: "ink", script: true, pillar: "Community & Streetball", type: "Brand line" },
  { big: "This is what\nCanadian basketball\nlooks like\nright now.", sub: "the north game", bg: "ink", pillar: "Athlete Voices", type: "Statement" },
  { big: "Receipts\nonly.", sub: "the assist files", bg: "orange", pillar: "The Assist", type: "Assist Files" },
  { big: "Know when\nto hand\nit over.", sub: "every version counts", bg: "teal", pillar: "The Maze", type: "Value" },
];

const PILLARS = [
  { name: "The Assist", color: "#EE9933", blurb: "Credit and lineage — every quote traced to its source. The pass, even in language.", types: "Quote cards · Assist Files threads · founder notes" },
  { name: "Community & Streetball", color: "#2E5E8C", blurb: "Courts as the galleries of the game — Rucker to Scarborough, Montréal to Pickering.", types: "Court Stories · community · launch events" },
  { name: "Visual Culture", color: "#9E4A33", blurb: "Hoops × hip-hop, sneakers, the tunnel walk. The game as a style canon.", types: "Collection drops · the look · the canon" },
  { name: "The Maze", color: "#2B5D4B", blurb: "Finding a lane. The redshirt, the JUCO, the handover — every route counts.", types: "Art drops · the founder arc · values" },
  { name: "Athlete Voices", color: "#5B6B4A", blurb: "The undercovered — the women's game, Canadian routes, life after the buzzer.", types: "Profiles · statements · Her Court" },
];
const PILLAR_COLOR = Object.fromEntries(PILLARS.map((p) => [p.name, p.color]));
const ARTPILLARS = ["The Maze", "Visual Culture", "Community & Streetball", "Athlete Voices"];

const BG = { ink: ["#0E0E0E", "#F2E9C7"], orange: ["#EE9933", "#0E0E0E"], teal: ["#223333", "#F2E9C7"], cream: ["#F2E9C7", "#0E0E0E"] };

function Reveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".rise");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.05 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

// ── feed tiles ──
function TileArt({ src }) {
  return <div style={{ position: "relative", aspectRatio: "1", overflow: "hidden", background: "#1C3A3A" }}>
    <img src={src} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /></div>;
}
function TileQuote({ q, who }) {
  return (
    <div data-mode="ink" style={{ aspectRatio: "1", background: "var(--bg)", color: "var(--fg)", padding: "min(3.2vw,18px)", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>
      <span className="mono-label" style={{ fontSize: 9 }}>The Assist Files</span>
      <div style={{ fontWeight: 800, fontSize: "clamp(11px,1.5vw,17px)", letterSpacing: "-.01em", lineHeight: 1.12 }}><span style={{ color: "var(--orange)" }}>“</span>{q}<span style={{ color: "var(--orange)" }}>”</span></div>
      <div style={{ fontWeight: 700, fontSize: "clamp(9px,1.1vw,12px)" }}>{who}</div>
    </div>
  );
}
function TileWord({ big, sub, bg, script }) {
  const [b, f] = BG[bg];
  return (
    <div data-mode={bg === "cream" ? "cream" : "ink"} style={{ aspectRatio: "1", background: b, color: f, padding: "min(3.2vw,18px)", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>
      <Wordmark size={"clamp(11px,1.5vw,15px)"} arc />
      <div style={{ fontFamily: script ? "var(--script)" : "var(--grotesque)", fontWeight: script ? 400 : 800, fontSize: script ? "clamp(20px,3.2vw,34px)" : "clamp(13px,2vw,22px)", letterSpacing: script ? 0 : "-.02em", lineHeight: script ? .8 : 1, whiteSpace: "pre-line" }}>{big}</div>
      <span style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", opacity: .6 }}>{sub}</span>
    </div>
  );
}

function buildFeed() {
  const order = ["a", "q", "a", "w", "a", "a", "q", "a", "w", "a"];
  const feed = []; let ai = 0, qi = 0, wi = 0;
  for (let r = 0; r < 4; r++) for (const t of order) {
    if (t === "a") { feed.push({ t: "a", src: ARTS[ai % ARTS.length], pillar: ARTPILLARS[ai % ARTPILLARS.length], type: "Art drop" }); ai++; }
    else if (t === "q") { feed.push({ t: "q", ...QUOTES[qi++ % QUOTES.length], pillar: "The Assist", type: "Quote · Assist Files" }); }
    else { feed.push({ t: "w", ...WORDS[wi++ % WORDS.length] }); }
  }
  return feed.slice(0, 40);
}

function LabelledTile({ tile }) {
  const inner = tile.t === "a" ? <TileArt src={tile.src} /> : tile.t === "q" ? <TileQuote {...tile} /> : <TileWord {...tile} />;
  return (
    <div>
      {inner}
      <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: PILLAR_COLOR[tile.pillar], flexShrink: 0 }} />
        <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "-.01em" }}>{tile.pillar}</span>
      </div>
      <div className="mono-label" style={{ marginTop: 3, fontSize: 9.5 }}>{tile.type}</div>
    </div>
  );
}

// ── tweet / linkedin ──
function Avatar({ size = 40 }) {
  return <div data-mode="ink" style={{ width: size, height: size, borderRadius: "50%", background: "#0E0E0E", display: "grid", placeItems: "center", flexShrink: 0 }}><Monogram size={size * 0.5} tone="solid" on="ink" accent /></div>;
}
function Tweet({ text }) {
  return (
    <div style={{ breakInside: "avoid", marginBottom: 16, background: "var(--surface)", border: "1px solid var(--hair)", borderRadius: 12, padding: "15px 17px" }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Avatar size={36} />
        <div><div style={{ fontWeight: 700, fontSize: 13.5 }}>Alleyoop Arts <span style={{ color: "var(--orange)" }}>✦</span></div><div style={{ fontSize: 12, color: "var(--fg-faint)" }}>@alleyooparts</div></div>
      </div>
      <div style={{ fontSize: 14.5, lineHeight: 1.5, marginTop: 11 }}>{text}</div>
      <div style={{ display: "flex", gap: 22, marginTop: 11, fontSize: 12.5, color: "var(--fg-faint)" }}><span>♡</span><span>↻</span><span>↗</span></div>
    </div>
  );
}
function LinkedIn({ title, body }) {
  return (
    <div style={{ breakInside: "avoid", marginBottom: 16, background: "var(--surface)", border: "1px solid var(--hair)", borderRadius: 12, padding: "20px 22px" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
        <Avatar size={46} />
        <div><div style={{ fontWeight: 700, fontSize: 14.5 }}>Alleyoop Arts</div><div style={{ fontSize: 12, color: "var(--fg-faint)" }}>Basketball art &amp; culture · Canada · Est. 2026</div></div>
      </div>
      <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-.01em", marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-dim)", whiteSpace: "pre-line" }}>{body}</div>
      <div style={{ marginTop: 12, fontSize: 13, color: "var(--orange)", fontWeight: 600 }}>#TheePassIsThePlay #CanadianBasketball #ArtOfTheGame</div>
    </div>
  );
}

const TWEETS = [
  // brand / maze
  "Basketball is a labyrinth. You find a lane, read the floor, improvise under pressure. We made a brand out of that.",
  "An alley-oop is the one play you can't run alone. One throws the lob, one finishes. Two parts, one play.",
  "We didn't name it after a dunk. We named it after the assist that makes the dunk possible.",
  "The maze runs through all 156 of our originals. The corridor IS the court.",
  "Every redshirt year, every bench season, every JUCO detour is a route — not a wrong turn.",
  "From Pickering to Phoenix to a gym outside Omaha to Detroit. The long way is still the way.",
  "The hardest play in basketball isn't the shot. It's knowing when to pass.",
  "We're not a stats site. We're the gallery for the game.",
  "Premium culture brand energy, streetball warmth. Both. Always.",
  "The wrapper stays neutral so the art can be loud. The gallery is quiet; the work is not.",
  // the pass / assist
  "The pass is the play. Credit the people who got you the ball.",
  "Scoring makes one person happy. Passing makes two. We build for the second number.",
  "The assist is the art. Always has been.",
  "You are only as good as the people you elevate.",
  "Build, don't borrow. Author the culture, own the platform.",
  "Bet on yourself. Back the unproven. The detour counts.",
  "Find a lane. Celebrate the navigation, not just the arrival.",
  "Know when to hand it over. Honor every version of a basketball life.",
  "The lob is faith. You throw it before anyone's there to catch it.",
  "Greatness is a group project. Print that.",
  // posters / collection
  "156 original artworks. One idea. Limited editions, signed and numbered.",
  "2:3 portrait, archival pigment on cotton rag. Built to live on a wall.",
  "New drop: 'Alley Runner' — one player, one lane, one shot. The maze becomes the court.",
  "The colour lives in the art. The brand stays black, cream and one orange.",
  "Every print ships with its gallery label. Title, series, edition, the seal.",
  "Hoops as portals. Courts as maps. The ball as the only warm thing in the frame.",
  "'Burst' — a basketball breaking into a hundred colours. The game as celebration.",
  "'The Call' — the whistle moment at a maze intersection. Rules, rhythm, pressure.",
  "'Sky Hook', 'Perfect Pass', 'Night Game' — the maze series, chapter one.",
  "Drop the loudest poster you've got into a neutral room. That's the whole thesis.",
  "Collectible prints, same buyer psychology as sneakers. The art object as flex.",
  "Each edition is capped. When it's gone, it's gone. The way limited should mean limited.",
  "Frame it in black, mat it in cream. The work does the rest.",
  "We paint the courts nobody's painted yet. Yours might be next.",
  "Golden hour, empty court, no players. Sometimes the lane is the subject.",
  // verified quotes / assist files
  "The Assist Files, ep.01: we fact-checked basketball's most famous assist quote.",
  "Turns out 'passing makes two people happy' was Jokić — quoting Magic. The quote was itself an assist.",
  "Two in three quotes online couldn't be traced to a primary source. If we can't source it, we don't print it.",
  "Receipts only. Interview, presser, book or broadcast — or it doesn't go on a wall.",
  "'Board man gets paid.' — Kawhi Leonard. Verified. Toronto knows.",
  "'You rely on so many other people.' — Clyde Drexler on why hoops is never solo.",
  "'In every lesson there's a blessing.' — Alonzo Mourning.",
  "'I've failed over and over. That is why I succeed.' — the Jordan ad that raised us.",
  "We trace quotes like we trace passes. Back to the source, every time.",
  "Verification as storytelling. The lineage is the launch.",
  // community / courts / canada
  "Naismith was Canadian. We the North. The home turf was always here.",
  "2016 to 2024: Canada went from potential to a national passion. We're the art of that decade.",
  "Rucker Park is a gallery. So is the outdoor court in Scarborough. So is the gym in Pickering.",
  "Courts are sacred public space. We paint them like cathedrals.",
  "The women's game is the most undercovered story in the sport. That's our lane.",
  "Hip-hop and hoops grew up together — and in Toronto, they grew up together twice.",
  "The tunnel walk is a runway. The pre-game fit is part of the canon.",
  "Streetball taught the league style before the league admitted it.",
  "We're Canada-first, not Canada-only. The block is everywhere.",
  "Snow on the rim. Gym light through frost. Northern hoops have their own beauty.",
  // launch / shop / events
  "The shop is open. 156 originals, limited-edition prints. Link in bio.",
  "Launch party — Toronto. The Drake. Stickers, framed prints, the seal. Pull up.",
  "City tour: Toronto → Montréal → Vancouver. Three nights, one collection.",
  "Pinterest, prints, posters, stickers. The whole gallery, anywhere you scroll.",
  "Etsy shop live. The gallery wall, shipped to yours.",
  "Free B&W zine with every first-edition order. While they last.",
  "RSVP: alleyooparts.ca/launch. The pass is the play; the party is the proof.",
  "First 100 days, one arc: the tease, the drop, the courts, the north.",
  "The magazine comes later. Right now, it's the art.",
  "Restocks Friday. Set a reminder. Editions don't wait.",
  // values / voice / misc
  "This is what Canadian basketball looks like right now.",
  "Confident, welcoming, street-smart, thoughtful. Proudly Canadian, never cheesy.",
  "We don't do 'ball is life.' We do 'the pass is the play.'",
  "No hype-speak. No luxury pretension. Just the work and the receipts.",
  "Black and white photos. Full colour saved for the art. The contrast is the signature.",
  "One bold grotesque, one human script, one orange. Restraint is the flex.",
  "The double-O is two rims. One is the pass, one is the finish.",
  "Our logo is type-only. The letterforms ARE the brand.",
  "We elevate others on purpose. That's not strategy, that's the whole point.",
  "The gallery for the game. Say it with your chest.",
  "Art that survives a thumbnail and holds up as a wall. That's the bar.",
  "If it doesn't make two people happy, we're not interested.",
  "Every poster is a pass to whoever hangs it. Finish it.",
  "Limited means limited. Culture means owned. Canadian means home.",
  "We build slow art for a fast game.",
  "The maze isn't a metaphor we chose. It's the one we lived.",
  "You don't run an alley-oop alone. You don't build a culture alone either.",
  "Tag the court that raised you. We're collecting galleries.",
  "Some brands chase the dunk. We frame the pass.",
  "The North has a look now. We gave it one.",
  // extra to reach 100
  "Sneaker culture turned shoes into art objects. We're doing it for the game itself.",
  "A poster on the wall, a magazine on the table, a name on a gallery label: this is ours.",
  "We fact-check our heroes because we respect them enough to get it right.",
  "The handover is the bravest pass. Episode one of our story is exactly that.",
  "Buy the print. Hang the maze. Find your lane.",
  "Cream leads. Black flips. Orange is scarce. That's the system, forever.",
  "We're a non-profit with a gallery's taste and a streetball heart.",
  "Edition No. 12 of 50 just found a wall in Toronto. One of one in spirit.",
  "Read the floor. We did. Then we painted it.",
  "The assist economy: everybody eats when you pass. Welcome to it.",
  "Two parts. One play. The pass is the play.",
  "Hang the maze where you can see it every morning. Read the floor before the day starts.",
  "The orange is the ball. The rims are the O's. The whole game is in the name.",
  "We made Canadian basketball collectible. Took long enough.",
  "Pass it on. That's the entire brand in three words.",
];

const LINKEDINS = [
  { title: "Why we built Alleyoop Arts", body: "Damion Rashford grew up in Pickering, moved alone to Phoenix at seventeen to chase a Division I lane, and earned it — captain, All-Arizona, Loyola Maryland. What followed wasn't a highlight reel. It was a maze: a redshirt year, a bench season, a JUCO detour, a final stop in Detroit, and then the hardest play in basketball — knowing when to pass.\n\nHe handed the ball to his next self, built a career in technology, and came back to the game as an author. Alleyoop Arts is what that arc looks like as a brand: the gallery for the game." },
  { title: "The pass is the play", body: "Scoring makes one person happy. Passing makes two. We built a culture brand around the second number.\n\nAn alley-oop is the one play you cannot run alone — one person throws the lob, another finishes. Two parts, one play. It's our name, our thesis, and our operating principle: credit and elevate the people who got you the ball." },
  { title: "We fact-check our quotes — and it became the brand story", body: "We ran a verification pass on basketball's most-circulated quotes. Roughly two in three couldn't be traced to a primary source.\n\nThe most famous 'assist' quote — passing makes two people happy — turned out to be Nikola Jokić quoting Magic Johnson. A quote about passing that was itself passed down. The lineage IS the story. If we can't source it to an interview, a presser, a book or a broadcast, it doesn't go on a wall. Receipts only." },
  { title: "Basketball as a labyrinth", body: "Our entire art catalog runs on one idea: the game as a maze. Finding a lane, reading the floor, improvising under pressure. 156 originals, each a corridor, a portal, a route.\n\nIt isn't a metaphor we chose for aesthetics. It's the one the founder lived — and the one every player who took the long way will recognize." },
  { title: "Why Canada, why now", body: "Naismith was Canadian. The Raptors won it all in 2019. Between 2016 and 2024 the country went from a sport with potential to a national passion.\n\nThere's a generation of Canadian basketball culture that has never been treated like culture — printed, framed, hung. We're the brand that does that. Canada-first, not Canada-only." },
  { title: "The art object as the flex", body: "Sneaker culture proved that the objects around the game can be as collectible as the game itself. We're applying the same logic to original art: limited editions, signed and numbered, archival, built to live on a wall.\n\nThe colour lives in the work. The brand stays neutral — a gallery wrapper so every loud poster pops." },
  { title: "Build, don't borrow", body: "We could license, aggregate, and resell other people's culture. Instead we author our own: original artwork, original voice, an owned platform.\n\nIt's slower. It's also the only way to build something that's actually yours — and the only way to credit the community the work comes from." },
  { title: "Courts are galleries", body: "Rucker Park. The Hole. The outdoor courts in Scarborough and Montréal. The gym in Pickering where our founder's arc started.\n\nThese are sacred public spaces, and we paint them like cathedrals — empty, golden-hour, the lane as the subject. Our Sacred Courts series carries no player likenesses; just the rooms the game is played in." },
  { title: "The lane we're not afraid to take", body: "The women's game is the most undercovered story in basketball. That's not a gap to lament — it's a lane to take.\n\nUndercovered, to us, means differentiated. Athlete Voices is a permanent pillar, not a campaign." },
  { title: "The first 100 days", body: "We're launching the collection and the shop — 156 originals, limited-edition prints, and a social engine built on the receipt.\n\nFour phases: the tease, the drop, Sacred Courts, the Northern Game. The magazine and the print edition come later. Right now, the work is the art. The pass is the play." },
];

function Content() {
  const [mode, setMode] = React.useState("cream");
  Reveal();
  const feed = buildFeed();
  return (
    <div className="doc" data-mode={mode}>
      <header className="ghead">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="index.html" style={{ textDecoration: "none" }}><Wordmark size={22} arc /></a>
          <span className="mono-label" style={{ marginLeft: 2 }}>Content Studio</span>
        </div>
        <nav>
          <a href="#feed">IG Feed</a>
          <a href="#portrait">Portrait</a>
          <a href="#tweets">Tweets</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="launch-plan.html">100 Days</a>
        </nav>
        <div className="modeswitch" role="group" aria-label="Mode">
          <button data-on={mode === "cream" ? "1" : "0"} onClick={() => setMode("cream")}>Cream</button>
          <button data-on={mode === "ink" ? "1" : "0"} onClick={() => setMode("ink")}>Ink</button>
        </div>
      </header>

      <section className="section" style={{ borderTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">·</span> Social content package</div>
          <h1 className="rise" style={{ fontWeight: 800, letterSpacing: "-.03em", lineHeight: .95, fontSize: "clamp(38px,7.5vw,96px)", margin: "20px 0 0" }}>The story,<br />on a schedule.</h1>
          <p className="lead rise" style={{ marginTop: 24 }}>A ready-to-post library — the Instagram feed, portrait quote posts, 100 tweets, and long-form LinkedIn — all in one voice. Verified quotes only on anything print-facing.</p>
        </div>
      </section>

      {/* IG profile + feed */}
      <section className="section" id="feed">
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">01</span> Instagram · the feed (40 posts)</div>
          <div className="rise" style={{ display: "flex", gap: "clamp(20px,4vw,52px)", alignItems: "center", margin: "32px 0 36px", flexWrap: "wrap" }}>
            <div data-mode="ink" style={{ width: 92, height: 92, borderRadius: "50%", background: "#0E0E0E", display: "grid", placeItems: "center", flexShrink: 0 }}><Monogram size={46} tone="solid" on="ink" accent /></div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <span style={{ fontWeight: 700, fontSize: 20 }}>alleyooparts</span>
                <span style={{ background: "var(--orange)", color: "#0E0E0E", fontSize: 12, fontWeight: 700, padding: "7px 16px", borderRadius: 8 }}>Follow</span>
              </div>
              <div style={{ display: "flex", gap: 22, marginTop: 12, fontSize: 14 }}>
                <span><b>40</b> posts</span><span><b>12.4k</b> followers</span><span><b>156</b> originals</span>
              </div>
              <div style={{ marginTop: 12, fontSize: 14, lineHeight: 1.5, maxWidth: "46ch" }}>
                <b>Alleyoop Arts</b> · The gallery for the game 🏀<br />Canadian basketball art &amp; culture · limited-edition prints<br /><span style={{ color: "var(--orange)" }}>alleyooparts.ca</span>
              </div>
            </div>
          </div>
          <div className="feed rise">
            {feed.map((x, i) => x.t === "a" ? <TileArt key={i} src={x.src} /> : x.t === "q" ? <TileQuote key={i} {...x} /> : <TileWord key={i} {...x} />)}
          </div>
        </div>
      </section>

      {/* portrait quotes */}
      <section className="section" id="portrait">
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">02</span> Portrait quote posts (4:5)</div>
          <div className="portraits rise" style={{ marginTop: 32 }}>
            {QUOTES.map((q, i) => (
              <div key={i} data-mode={i % 2 ? "cream" : "ink"} style={{ aspectRatio: "4/5", background: "var(--bg)", color: "var(--fg)", border: "1px solid var(--hair)", borderRadius: 4, padding: "clamp(18px,2.4vw,28px)", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><Wordmark size={"clamp(13px,1.8vw,17px)"} arc /><Monogram size={20} tone="solid" on={i % 2 ? "cream" : "ink"} /></div>
                <div style={{ fontWeight: 800, fontSize: "clamp(17px,2.1vw,26px)", letterSpacing: "-.02em", lineHeight: 1.1 }}><span style={{ color: "var(--orange)" }}>“</span>{q.q}<span style={{ color: "var(--orange)" }}>”</span></div>
                <div><div style={{ fontWeight: 700, fontSize: 14 }}>{q.who}</div><span className="mono-label" style={{ marginTop: 4, display: "block" }}>{q.note}</span></div>
              </div>
            ))}
            {[{ big: "Find a lane.", s: "bet on yourself" }, { big: "The pass\nis the play.", s: "the assist files" }].map((w, i) => (
              <div key={"w" + i} data-mode="ink" style={{ aspectRatio: "4/5", background: "var(--teal)", color: "#F2E9C7", borderRadius: 4, padding: "clamp(18px,2.4vw,28px)", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>
                <Wordmark size={"clamp(13px,1.8vw,17px)"} arc />
                <div style={{ fontFamily: "var(--script)", fontSize: "clamp(30px,4vw,52px)", color: "var(--orange)", lineHeight: .82, whiteSpace: "pre-line" }}>{w.big}</div>
                <span className="mono-label">{w.s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tweets */}
      <section className="section" id="tweets">
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">03</span> X / Twitter · 100 posts</div>
          <h2 className="h2 rise">One hundred tweets, one voice.</h2>
          <p className="lead rise" style={{ margin: "14px 0 32px" }}>The brand story, the posters, the verified quotes, the courts, the launch — ready to schedule.</p>
          <div className="tweets rise">
            {TWEETS.map((t, i) => <Tweet key={i} text={t} />)}
          </div>
          <div className="mono-label rise" style={{ marginTop: 20 }}>{TWEETS.length} tweets · verified quotes only on anything attributed</div>
        </div>
      </section>

      {/* linkedin */}
      <section className="section" id="linkedin">
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">04</span> LinkedIn · long-form (10 posts)</div>
          <h2 className="h2 rise">The story, for the boardroom and the sponsor row.</h2>
          <div className="limasonry rise" style={{ marginTop: 32 }}>
            {LINKEDINS.map((p, i) => <LinkedIn key={i} {...p} />)}
          </div>
        </div>
      </section>

      <footer data-mode="ink" style={{ background: "var(--bg)", color: "var(--fg)", borderTop: "1px solid var(--hair)", padding: "60px 0 52px", textAlign: "center" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <Wordmark size={"clamp(32px,6vw,56px)"} arc />
          <div className="mono-label">The pass is the play · Est. 2026</div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Content />);
