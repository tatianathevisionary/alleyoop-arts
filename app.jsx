// app.jsx — Alleyoop Arts brand document: chrome, palette/mode wiring, tweaks.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream",
  "mode": "cream",
  "grotesque": "Hanken Grotesk",
  "script": "Sacramento",
  "lobArc": true,
  "twoPart": false,
  "overlapOO": false,
  "ballOO": false
}/*EDITMODE-END*/;

const GROTESQUES = {
  "Hanken Grotesk": "'Hanken Grotesk', system-ui, sans-serif",
  "Archivo": "'Archivo', system-ui, sans-serif",
  "Manrope": "'Manrope', system-ui, sans-serif",
};
const SCRIPTS = {
  "Sacramento": "'Sacramento', cursive",
  "Caveat": "'Caveat', cursive",
  "Mr Dafoe": "'Mr Dafoe', cursive",
  "Permanent Marker": "'Permanent Marker', cursive",
};

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".rise");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in")); return;
    }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  const pal = (window.PALETTES || []).find((p) => p.id === t.palette) || (window.PALETTES || [])[0];
  const tok = pal ? pal.tokens : { ink: "#0E0E0E", cream: "#F2E9C7", orange: "#EE9933", teal: "#223333" };

  const rootStyle = {
    "--ink": tok.ink, "--cream": tok.cream, "--orange": tok.orange, "--teal": tok.teal,
    "--grotesque": GROTESQUES[t.grotesque] || GROTESQUES["Hanken Grotesk"],
    "--script": SCRIPTS[t.script] || SCRIPTS["Caveat"],
  };

  const arc = t.lobArc, twopart = t.twoPart;

  return (
    <div className={"doc" + (t.overlapOO ? " overlap-oo" : "")} data-mode={t.mode} style={rootStyle}>
      <TopBar mode={t.mode} setMode={(m) => setTweak("mode", m)} />
      <Hero arc={arc} twopart={twopart} ballOO={t.ballOO} />
      <FoundationsSection />
      <ColorSection palette={t.palette} onApply={(id) => setTweak("palette", id)} />
      <TypeSection />
      <LogoSection />
      <ApplicationsSection />
      <VoiceSection />
      <QuickRef />
      <SiteFooter />
      <Panel t={t} setTweak={setTweak} />
    </div>
  );
}

function TopBar({ mode, setMode }) {
  return (
    <div className="topbar">
      <div className="row center" style={{ gap: 16 }}>
        <Wordmark size={24} arc={false} />
        <span className="mono-label" style={{ marginLeft: 4 }}>Brand Guidelines</span>
      </div>
      <nav className="nav">
        <a href="#story">Foundations</a>
        <a href="#color">Colour</a>
        <a href="#type">Type</a>
        <a href="#logo">Mark</a>
        <a href="#apps">Applications</a>
      </nav>
      <div className="modeswitch" role="group" aria-label="Color mode">
        <button data-on={mode === "cream" ? "1" : "0"} onClick={() => setMode("cream")}>Cream</button>
        <button data-on={mode === "ink" ? "1" : "0"} onClick={() => setMode("ink")}>Ink</button>
      </div>
    </div>
  );
}

function Hero({ arc, twopart, ballOO }) {
  return (
    <header className="section" style={{ borderTop: 0, paddingTop: 92, paddingBottom: 92 }}>
      <div className="wrap">
        <div className="eyebrow"><span className="num">01</span> The gallery for the game</div>
        <div style={{ marginTop: 48, marginBottom: 40 }}>
          <Wordmark size={"clamp(52px, 13vw, 168px)"} arc={arc} twopart={twopart} ballRim={ballOO} net={ballOO} netBehind={ballOO} style={{ maxWidth: "100%" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 28, alignItems: "flex-end" }}>
          <p style={{ fontSize: "clamp(20px,2vw,28px)", color: "var(--fg)", maxWidth: "20ch", fontWeight: 600, letterSpacing: "-.01em", lineHeight: 1.12, margin: 0 }}>
            A basketball art &amp; culture brand. <span style={{ color: "var(--fg-dim)" }}>The pass is the play.</span>
          </p>
          <div className="mono-label" style={{ textAlign: "right", lineHeight: 1.8 }}>
            Brand Identity · v1<br />Est. 2026 · Canada
          </div>
        </div>
      </div>
    </header>
  );
}

function Panel({ t, setTweak }) {
  const palOpts = (window.PALETTES || []).map((p) => ({ value: p.id, label: p.name }));
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Colour direction" />
      <TweakSelect label="Palette" value={t.palette} options={palOpts} onChange={(v) => setTweak("palette", v)} />
      <TweakRadio label="Surface" value={t.mode} options={["cream", "ink"]} onChange={(v) => setTweak("mode", v)} />
      <TweakSection label="The mark" />
      <TweakToggle label="Orange lob arc" value={t.lobArc} onChange={(v) => setTweak("lobArc", v)} />
      <TweakToggle label="Two-part rims" value={t.twoPart} onChange={(v) => setTweak("twoPart", v)} />
      <TweakToggle label="Overlapping OO" value={t.overlapOO} onChange={(v) => setTweak("overlapOO", v)} />
      <TweakToggle label="Ball + net (the play)" value={t.ballOO} onChange={(v) => setTweak("ballOO", v)} />
      <TweakSection label="Type" />
      <TweakRadio label="Grotesque" value={t.grotesque} options={["Hanken Grotesk", "Archivo", "Manrope"]} onChange={(v) => setTweak("grotesque", v)} />
      <TweakSelect label="Script" value={t.script} options={["Sacramento", "Caveat", "Mr Dafoe", "Permanent Marker"]} onChange={(v) => setTweak("script", v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
