// Aspect-ratio viewframe — shared by every loop page.
// FILL · 16:9 (YouTube) · 9:16 (Reels/Shorts) · 1:1 (feed)
//
// Usage: wrap the canvas in <div id="frame">, call mountViewframe(),
// size the renderer to frame.clientWidth/Height, listen for 'frame-resize'.

const MODES = [
  ['FILL', null],
  ['16:9', 16 / 9],
  ['9:16', 9 / 16],
  ['1:1', 1],
];

// Dual-aspect framing: guarantee a minimum HORIZONTAL field of view so key
// content never crops in 9:16, while landscape keeps its composed vertical fov.
// Call from each page's resize() after camera.aspect is set.
export function fitFov(camera, baseVfov, minHfov) {
  const a = camera.aspect;
  const v = (baseVfov * Math.PI) / 180;
  const hMin = (minHfov * Math.PI) / 180;
  const h = 2 * Math.atan(Math.tan(v / 2) * a);
  camera.fov = h < hMin
    ? (2 * Math.atan(Math.tan(hMin / 2) / a) * 180) / Math.PI
    : baseVfov;
  camera.updateProjectionMatrix();
}

export function mountViewframe() {
  const frame = document.getElementById('frame');
  let aspect = null;

  const style = document.createElement('style');
  style.textContent = `
    body { display: grid; place-items: center; }
    #frame { position: relative; overflow: hidden; outline: 1px solid rgba(128,128,128,.35); }
    #frame canvas { width: 100%; height: 100%; display: block; }
    .viewbar { position: fixed; top: 16px; right: 16px; display: flex; gap: 6px; z-index: 10; }
    .viewbar button {
      font: 600 11px/1 ui-monospace, "SF Mono", Menlo, monospace; letter-spacing: .08em;
      padding: 7px 10px; cursor: pointer;
      background: transparent; color: inherit;
      border: 1.5px solid currentColor; border-radius: 2px; opacity: .5;
    }
    .viewbar button.on, .viewbar button:hover { opacity: 1; }
  `;
  document.head.appendChild(style);

  const bar = document.createElement('div');
  bar.className = 'viewbar';
  MODES.forEach(([label, ratio], i) => {
    const b = document.createElement('button');
    b.textContent = label;
    if (i === 0) b.classList.add('on');
    b.onclick = () => {
      aspect = ratio;
      bar.querySelectorAll('button').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      layout();
    };
    bar.appendChild(b);
  });
  document.body.appendChild(bar);

  function layout() {
    const W = innerWidth, H = innerHeight;
    let w = W, h = H;
    if (aspect) {
      w = W; h = w / aspect;
      if (h > H) { h = H; w = h * aspect; }
      // leave breathing room for the bar in letterboxed modes
      w *= 0.94; h *= 0.94;
    }
    frame.style.width = Math.round(w) + 'px';
    frame.style.height = Math.round(h) + 'px';
    window.dispatchEvent(new Event('frame-resize'));
  }
  addEventListener('resize', layout);
  layout();
}
