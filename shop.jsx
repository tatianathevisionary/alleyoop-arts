// shop.jsx — Alleyoop Shop prototype.
// Catalog mirrors products/products.csv (SKUs AA-001…AA-030). Cart persists in
// localStorage. Checkout is honestly a prototype — no payments are wired.

const PRODUCTS = [
  { sku: "AA-001", h: "aa-001-alley-runner", t: "Alley Runner", s: "The Labyrinth", ed: 50, p: 240, story: "One player, one lane, one shot — the maze becomes the court. The first piece of the collection, and still its thesis." },
  { sku: "AA-002", h: "aa-002-the-architect", t: "The Architect", s: "The Labyrinth", ed: 40, p: 250, story: "A player stands at the centre of a structure he seems to have drawn himself. Every route in it is his." },
  { sku: "AA-003", h: "aa-003-burst", t: "Burst", s: "Celebration", ed: 30, p: 280, story: "A basketball breaks into hundreds of colourful shards. The game as pure celebration." },
  { sku: "AA-004", h: "aa-004-close-up-hoop", t: "Close-Up Hoop", s: "The Court", ed: 40, p: 200, story: "Pure basketball signal — the rim and net in product-poster simplicity. The quietest piece in the collection." },
  { sku: "AA-005", h: "aa-005-the-sentinel", t: "The Sentinel", s: "Portals", ed: 45, p: 230, story: "A stoic guardian holds the line at a mystical hoop. Defence as devotion." },
  { sku: "AA-006", h: "aa-006-high-jump", t: "High Jump", s: "Street", ed: 50, p: 220, story: "A daring jump shot, launched from the blacktop into open air. No ceiling anywhere in frame." },
  { sku: "AA-007", h: "aa-007-the-call", t: "The Call", s: "The Labyrinth", ed: 45, p: 220, story: "Rules, rhythm and pressure — the whistle moment at a maze intersection. Somebody has to make the call." },
  { sku: "AA-008", h: "aa-008-champion-s-light", t: "Champion's Light", s: "Celebration", ed: 25, p: 280, story: "The trophy glow of an earned season. The smallest edition in the collection." },
  { sku: "AA-009", h: "aa-009-bird-s-eye-court", t: "Bird's-Eye Court", s: "The Court", ed: 60, p: 200, story: "The court reads like a map; the paint and the shadows do the storytelling." },
  { sku: "AA-010", h: "aa-010-slam", t: "Slam", s: "Street", ed: 50, p: 230, story: "Basketballs slam-dunked in sequence — kinetic, loud, alive." },
  { sku: "AA-011", h: "aa-011-eye-to-eye", t: "Eye to Eye", s: "Portraits", ed: 40, p: 240, story: "Two players, one held breath before the play. The whole game lives in that pause." },
  { sku: "AA-012", h: "aa-012-perfect-pass", t: "Perfect Pass", s: "The Labyrinth", ed: 35, p: 250, story: "The pass is a ribbon; the maze is the defender it threads. The collection's namesake play." },
  { sku: "AA-013", h: "aa-013-california-camp", t: "California Camp", s: "Street", ed: 60, p: 190, story: "A sun-drenched basketball camp — the sport as mentorship and growth." },
  { sku: "AA-014", h: "aa-014-the-guardian", t: "The Guardian", s: "Portals", ed: 45, p: 230, story: "Another keeper of the mystical hoop, framed in clean geometry." },
  { sku: "AA-015", h: "aa-015-block-party", t: "Block Party", s: "Celebration", ed: 60, p: 200, story: "Streetball joy — the crowd and the players become blocks of team colour." },
  { sku: "AA-016", h: "aa-016-court-lines", t: "Court Lines", s: "The Court", ed: 60, p: 200, story: "Court markings as graphic design. An overhead diagram, painterly." },
  { sku: "AA-017", h: "aa-017-rise", t: "Rise", s: "Street", ed: 50, p: 220, story: "Launching into a high jump shot — pure ascent off the dribble." },
  { sku: "AA-018", h: "aa-018-clinic-day", t: "Clinic Day", s: "Street", ed: 60, p: 190, story: "Bright, hopeful, instructional — coaches guiding the next lane-finders." },
  { sku: "AA-019", h: "aa-019-timeout", t: "Timeout", s: "Portraits", ed: 40, p: 230, story: "A poignant pause — the player takes a breath at the edge of the play. Rest is part of the game." },
  { sku: "AA-020", h: "aa-020-the-underdog", t: "The Underdog", s: "Street", ed: 50, p: 220, story: "The journey of an underdog, drawn as the longest way around the maze. The long route builds the player." },
  { sku: "AA-021", h: "aa-021-contested", t: "Contested", s: "The Labyrinth", ed: 50, p: 240, story: "A jump shot answered — the maze closes as the ball leaves the hand." },
  { sku: "AA-022", h: "aa-022-stance", t: "Stance", s: "Portraits", ed: 40, p: 240, story: "A study of posture — the calm before the first step." },
  { sku: "AA-023", h: "aa-023-hold", t: "Hold", s: "Portraits", ed: 40, p: 230, story: "Weight on the back foot, eyes up — reading the floor before the break." },
  { sku: "AA-024", h: "aa-024-half-court", t: "Half Court", s: "The Court", ed: 60, p: 200, story: "The court setup as still life. Clean markings, long light." },
  { sku: "AA-025", h: "aa-025-drills", t: "Drills", s: "Street", ed: 60, p: 190, story: "The clinic in motion — repetition as the quiet art of the game." },
  { sku: "AA-026", h: "aa-026-camp", t: "Camp", s: "Street", ed: 60, p: 190, story: "A California camp under high sun — where lanes are first found." },
  { sku: "AA-027", h: "aa-027-daring", t: "Daring", s: "The Labyrinth", ed: 50, p: 240, story: "A daring shot threaded through the maze's tightest corridor." },
  { sku: "AA-028", h: "aa-028-release", t: "Release", s: "The Labyrinth", ed: 50, p: 240, story: "The follow-through — the maze briefly opens into a single clean line." },
  { sku: "AA-029", h: "aa-029-the-feature", t: "The Feature", s: "Portraits", ed: 40, p: 250, story: "A hero portrait — the player as the centre of the composition." },
  { sku: "AA-030", h: "aa-030-square-up", t: "Square Up", s: "Portraits", ed: 40, p: 230, story: "Squared to the rim — the geometry of intention before the shot." },
];

const SERIES = ["All", "The Labyrinth", "Street", "Portraits", "The Court", "Celebration", "Portals"];
const img = (p) => `products/${p.h}.png`;
const CART_KEY = "alleyoop-cart";

function loadCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; } }

function Shop() {
  const [mode, setMode] = React.useState("cream");
  const [filter, setFilter] = React.useState("All");
  const [openH, setOpenH] = React.useState(() => (location.hash || "").replace("#", "") || null);
  const [cart, setCart] = React.useState(loadCart);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [checkout, setCheckout] = React.useState(false);

  React.useEffect(() => { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }, [cart]);
  React.useEffect(() => {
    const onHash = () => setOpenH((location.hash || "").replace("#", "") || null);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const works = filter === "All" ? PRODUCTS : PRODUCTS.filter((w) => w.s === filter);
  // accept full handle (aa-012-perfect-pass) or bare slug (perfect-pass) from gallery links
  const open = openH ? (PRODUCTS.find((w) => w.h === openH) || PRODUCTS.find((w) => w.h.endsWith("-" + openH) || w.h.slice(7) === openH)) : null;
  const count = cart.reduce((n, l) => n + l.qty, 0);
  const subtotal = cart.reduce((n, l) => { const p = PRODUCTS.find((x) => x.h === l.h); return n + (p ? p.p * l.qty : 0); }, 0);

  const add = (h) => {
    setCart((c) => {
      const i = c.findIndex((l) => l.h === h);
      if (i >= 0) { const c2 = [...c]; c2[i] = { ...c2[i], qty: Math.min(c2[i].qty + 1, 5) }; return c2; }
      return [...c, { h, qty: 1 }];
    });
    setCartOpen(true);
  };
  const remove = (h) => setCart((c) => c.filter((l) => l.h !== h));
  const closeDetail = () => { history.replaceState(null, "", "shop.html"); setOpenH(null); };

  const orderSummary = () =>
    cart.map((l) => { const p = PRODUCTS.find((x) => x.h === l.h); return `${p.sku}  ${p.t} — ${l.qty} × $${p.p} CAD`; }).join("\n") +
    `\n\nSubtotal: $${subtotal} CAD\n(Alleyoop Shop prototype order)`;

  return (
    <div className="doc" data-mode={mode}>
      {/* header */}
      <header className="ghead">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="index.html" style={{ textDecoration: "none" }}><Wordmark size={22} arc /></a>
          <span className="mono-label" style={{ marginLeft: 2 }}>Shop</span>
        </div>
        <nav>
          <a href="index.html">Home</a>
          <a href="gallery.html">Gallery</a>
          <a href="shop.html">Shop</a>
          <a href="blog.html">Blog</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="modeswitch" role="group" aria-label="Mode">
            <button data-on={mode === "cream" ? "1" : "0"} onClick={() => setMode("cream")}>Cream</button>
            <button data-on={mode === "ink" ? "1" : "0"} onClick={() => setMode("ink")}>Ink</button>
          </div>
          <button className="cartbtn" onClick={() => setCartOpen(true)} aria-label="Open cart">
            Cart{count > 0 && <span className="cartn">{count}</span>}
          </button>
        </div>
      </header>

      {/* hero */}
      <section className="ghero">
        <div className="wrap">
          <div className="mono-label"><span style={{ color: "var(--orange)" }}>Limited possessions</span> · 30 works · editions of 25–60</div>
          <h1>The Shop</h1>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 20, marginTop: 26 }}>
            <p style={{ fontSize: "clamp(16px,1.6vw,19px)", lineHeight: 1.55, color: "var(--fg-dim)", maxWidth: "52ch", margin: 0 }}>
              Every print is numbered by hand and gone when the edition sells through.
              Archival pigment on cotton rag, 24 × 36 in. The colour lives in the art;
              the shop stays neutral.
            </p>
            <div className="mono-label" style={{ whiteSpace: "nowrap" }}>{works.length} works shown · prices in CAD</div>
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

        {/* product grid */}
        <div className="pgrid">
          {works.map((w) => (
            <div className="pcard" key={w.h}>
              <a href={"#" + w.h} style={{ textDecoration: "none", color: "inherit" }} onClick={() => setOpenH(w.h)}>
                <div className="frameimg"><img src={img(w)} alt={w.t} loading="lazy" /><div className="ov"><span>View</span></div></div>
              </a>
              <div className="pcap">
                <div>
                  <div className="t">{w.t}</div>
                  <div className="s">{w.s} · Edition of {w.ed}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="p">${w.p}</div>
                  <button className="addmini" onClick={() => add(w.h)}>Add +</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <footer data-mode="ink" style={{ background: "var(--bg)", color: "var(--fg)", borderTop: "1px solid var(--hair)", padding: "64px 0 56px", textAlign: "center" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <Wordmark size={"clamp(34px,7vw,62px)"} arc />
          <span style={{ fontFamily: "var(--script)", fontSize: 30, color: "var(--orange)", lineHeight: .8, marginTop: -6 }}>arts</span>
          <p style={{ fontSize: 14, color: "var(--fg-dim)", maxWidth: "40ch", lineHeight: 1.6 }}>Get posterized.</p>
          <div className="mono-label" style={{ marginTop: 8 }}>The pass is the play · Est. 2026</div>
        </div>
      </footer>

      {/* product detail */}
      {open && (
        <div className="lb" onClick={closeDetail}>
          <button className="lb-close" onClick={closeDetail} aria-label="Close">✕</button>
          <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
            <div className="lb-img"><img src={img(open)} alt={open.t} /></div>
            <div className="lb-meta">
              <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,3.4vw,40px)", letterSpacing: "-.02em", margin: 0 }}>{open.t}</h2>
              <div style={{ fontFamily: "var(--script)", fontSize: 28, color: "var(--orange)", lineHeight: .9, marginTop: 2 }}>{open.s.toLowerCase()}</div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(242,233,199,.8)", margin: "18px 0 22px" }}>{open.story}</p>
              <div className="lb-field"><span>Edition</span><span>{open.ed}, numbered by hand</span></div>
              <div className="lb-field"><span>Medium</span><span>Archival pigment on cotton rag</span></div>
              <div className="lb-field"><span>Size</span><span>24 × 36 in (2:3)</span></div>
              <div className="lb-field"><span>Ships</span><span>Rolled, with the Alleyoop Arts seal</span></div>
              <div className="lb-field"><span>SKU</span><span>{open.sku}</span></div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 18 }}>
                <div style={{ fontWeight: 800, fontSize: 26 }}>${open.p}<span style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,233,199,.5)", marginLeft: 6 }}>CAD</span></div>
                <button className="acquire" onClick={() => { add(open.h); closeDetail(); }}>Add to cart →</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* cart drawer */}
      {cartOpen && (
        <div className="cart-scrim" onClick={() => { setCartOpen(false); setCheckout(false); }}>
          <aside className="cart" onClick={(e) => e.stopPropagation()}>
            <div className="cart-head">
              <span style={{ fontWeight: 800, fontSize: 18 }}>Cart</span>
              <button className="lb-close" style={{ position: "static", width: 34, height: 34, fontSize: 15 }} onClick={() => { setCartOpen(false); setCheckout(false); }}>✕</button>
            </div>

            {!checkout ? (
              <>
                {cart.length === 0 ? (
                  <p style={{ color: "var(--fg-dim)", fontSize: 14.5, lineHeight: 1.6, padding: "26px 0" }}>
                    Empty. Every piece is a limited possession — when an edition sells through, it's gone.
                  </p>
                ) : (
                  <div className="cart-lines">
                    {cart.map((l) => {
                      const p = PRODUCTS.find((x) => x.h === l.h);
                      return (
                        <div className="cart-line" key={l.h}>
                          <img src={img(p)} alt={p.t} />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 700, fontSize: 14.5 }}>{p.t}</div>
                            <div style={{ fontSize: 12, color: "var(--fg-dim)" }}>{p.sku} · Edition of {p.ed}</div>
                            <div style={{ fontSize: 13, marginTop: 4 }}>{l.qty} × ${p.p}</div>
                          </div>
                          <button className="rmv" onClick={() => remove(l.h)} aria-label={`Remove ${p.t}`}>Remove</button>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="cart-foot">
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: 17 }}>
                    <span>Subtotal</span><span>${subtotal} CAD</span>
                  </div>
                  <button className="acquire" style={{ width: "100%", justifyContent: "center", marginTop: 14 }} disabled={cart.length === 0}
                    onClick={() => setCheckout(true)}>Checkout →</button>
                </div>
              </>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 10 }}>
                <div className="mono-label" style={{ color: "var(--orange)" }}>Prototype checkout</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--fg-dim)", margin: 0 }}>
                  Payments aren't wired yet — the full checkout launches on Shopify.
                  Your order summary is below; copy it and we'll take it from there.
                </p>
                <pre style={{ background: "var(--surface)", border: "1px solid var(--hair)", borderRadius: 8, padding: 14, fontSize: 12.5, lineHeight: 1.6, whiteSpace: "pre-wrap", margin: 0 }}>{orderSummary()}</pre>
                <button className="acquire" style={{ justifyContent: "center" }}
                  onClick={() => navigator.clipboard.writeText(orderSummary())}>Copy order summary</button>
                <button className="chip" onClick={() => setCheckout(false)}>← Back to cart</button>
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Shop />);
