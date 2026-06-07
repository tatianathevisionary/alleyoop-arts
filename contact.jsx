/* Alleyoop Arts — Contact
   Mirrors the site shell (about.html design system): sticky header, mode switch,
   wordmark, footer. Voice per brand/VOICE.md — earned, warm, plain words. */
const { useState, useEffect } = React;

// the channels — real routing TBD; placeholders flagged for Damion
const CHANNELS = [
  ["01", "General", "Questions, hellos, anything that doesn't fit a box below.", "hello@alleyooparts.ca"],
  ["02", "Prints & Orders", "Editions, sizing, shipping, a piece you're chasing.", "shop@alleyooparts.ca"],
  ["03", "Press & Partners", "Sponsorship, collaborations, co-created series, features.", "press@alleyooparts.ca"],
  ["04", "Artists & Athletes", "Want to be in the magazine or on a wall? Make the pass.", "submit@alleyooparts.ca"],
];

const SOCIAL = [
  ["Instagram", "@alleyooparts", "https://instagram.com/alleyooparts"],
  ["TikTok", "@alleyooparts", "https://tiktok.com/@alleyooparts"],
  ["YouTube", "Alleyoop Arts", "#"],
];

function Contact() {
  const [mode, setMode] = useState("cream");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".rise");
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="doc" data-mode={mode}>
      <header className="ghead">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="index.html" style={{ textDecoration: "none" }}><Wordmark size={22} arc overlap ballPass /></a>
          <span className="mono-label" style={{ marginLeft: 2 }}>Contact</span>
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
      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">—</span> Make the extra pass</div>
          <h1 className="h2 rise" style={{ maxWidth: "16ch" }}>Reach out. We read everything.</h1>
          <p className="lead rise" style={{ marginTop: 18 }}>
            An alley-oop is the one play you can't run alone. If you're an artist, an athlete,
            a writer, a partner, or just someone who loves the game — this is the lob. Throw it.
          </p>
        </div>
      </section>

      {/* channels */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow rise"><span className="num">01</span> Channels</div>
          <div className="cards3 rise" style={{ gridTemplateColumns: "repeat(2,1fr)", marginTop: 28 }}>
            {CHANNELS.map(([n, h, d, email]) => (
              <a key={n} href={"mailto:" + email}
                 style={{ textDecoration: "none", color: "inherit", border: "1px solid var(--hair)",
                          borderRadius: 6, padding: "26px 24px", display: "block" }}>
                <div className="mono-label" style={{ color: "var(--orange)" }}>{n}</div>
                <div style={{ fontWeight: 800, fontSize: 22, marginTop: 10 }}>{h}</div>
                <p style={{ color: "var(--fg-dim)", fontSize: 15, lineHeight: 1.55, margin: "8px 0 14px" }}>{d}</p>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{email} <span style={{ color: "var(--orange)" }}>→</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* the form */}
      <section className="section">
        <div className="wrap twocol">
          <div className="rise">
            <div className="eyebrow"><span className="num">02</span> Send a message</div>
            <h2 className="h2" style={{ fontSize: "clamp(28px,4vw,46px)" }}>Or just write here.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Tell us who you are and what you're building. We answer in the order it comes in —
              the assist counts as much as the finish.
            </p>
            <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 10 }}>
              {SOCIAL.map(([net, handle, url]) => (
                <a key={net} href={url} style={{ textDecoration: "none", color: "var(--fg-dim)", fontSize: 14, fontWeight: 600 }}>
                  <span style={{ color: "var(--fg)" }}>{net}</span> · {handle}
                </a>
              ))}
            </div>
            <p style={{ marginTop: 26, fontSize: 13, color: "var(--fg-faint)" }}>
              Alleyoop Arts · Canada · est. 2026
            </p>
          </div>

          <form className="rise" onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {sent ? (
              <div style={{ border: "1px solid var(--hair)", borderRadius: 6, padding: "40px 28px", textAlign: "center" }}>
                <div style={{ fontWeight: 800, fontSize: 22 }}>Caught it.</div>
                <p style={{ color: "var(--fg-dim)", marginTop: 8 }}>Thanks for the pass — we'll be in touch.</p>
              </div>
            ) : (
              <React.Fragment>
                <Field label="Your name" type="text" name="name" />
                <Field label="Email" type="email" name="email" />
                <Field label="What's this about?" type="text" name="subject" />
                <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <span className="mono-label">Message</span>
                  <textarea required rows={5} style={inputStyle()} />
                </label>
                <button type="submit" className="acquire" style={{ alignSelf: "flex-start", border: 0, cursor: "pointer" }}>
                  Send the pass <span style={{ color: "var(--orange)" }}>→</span>
                </button>
                <p style={{ fontSize: 12, color: "var(--fg-faint)" }}>
                  ⚠ Demo form — not yet wired to a backend. Routes to console until connected.
                </p>
              </React.Fragment>
            )}
          </form>
        </div>
      </section>

      {/* footer */}
      <footer className="section" style={{ paddingBottom: 64 }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
          <Wordmark size={20} arc overlap ballPass />
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
            <a href="gallery.html" style={navLink}>The Collection</a>
            <a href="shop.html" style={navLink}>Shop</a>
            <a href="about.html" style={navLink}>About</a>
            <a href="3d/gallery-space.html" style={navLink}>The Gallery — Live</a>
          </div>
          <div style={{ fontSize: 12, color: "var(--fg-faint)" }}>The pass is the play.</div>
        </div>
      </footer>
    </div>
  );
}

const navLink = { fontSize: 13, fontWeight: 600, color: "var(--fg-dim)", textDecoration: "none" };
function inputStyle() {
  return { font: "inherit", fontSize: 15, padding: "12px 14px", borderRadius: 6,
           border: "1px solid var(--hair)", background: "var(--surface)", color: "var(--fg)" };
}
function Field({ label, type, name }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span className="mono-label">{label}</span>
      <input required type={type} name={name} style={inputStyle()} />
    </label>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Contact />);
