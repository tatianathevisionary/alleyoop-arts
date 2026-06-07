// The ball. One module, every piece — so it always looks like a basketball.
//
// Geometry: real seam layout, bold and precise —
//   1 equator + 1 meridian (great circles) + 2 side channels
//   (small circles parallel to the meridian, offset ±0.56r)
// Color: ALWAYS Sunset Orange #EE9933 — the ball/rim color of all 156 originals
// (ALLEYOOP_ARTS_STYLE_GUIDE.md). Seams in Charcoal Teal #223333.

import * as THREE from 'three';

export const BALL_ORANGE = 0xEE9933;
export const SEAM_CHARCOAL = 0x223333;

// pebbled leather grain — generated once, shared by every ball
let _pebbleTex = null;
function pebbleTexture() {
  if (_pebbleTex) return _pebbleTex;
  const size = 1024, c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.fillStyle = '#808080';
  g.fillRect(0, 0, size, size);
  for (let i = 0; i < 14000; i++) {
    const x = Math.random() * size, y = Math.random() * size;
    const r = 1.6 + Math.random() * 2.6;
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, 'rgba(255,255,255,0.5)');
    grad.addColorStop(0.7, 'rgba(255,255,255,0.1)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  _pebbleTex = new THREE.CanvasTexture(c);
  _pebbleTex.wrapS = _pebbleTex.wrapT = THREE.RepeatWrapping;
  _pebbleTex.repeat.set(6, 3);
  return _pebbleTex;
}

export function makeBasketball(r, opts = {}) {
  const {
    seamWidth = 0.055,        // bold — relative to radius
    roughness = 0.55,
    emissiveIntensity = 0,    // give it a kick on dark scenes (bloom picks it up)
    castShadow = false,
  } = opts;

  const g = new THREE.Group();

  const bodyMat = new THREE.MeshStandardMaterial({
    color: BALL_ORANGE, roughness, metalness: 0,
    emissive: BALL_ORANGE, emissiveIntensity,
    bumpMap: pebbleTexture(), bumpScale: r * 0.045,   // pebbled leather grain
  });
  const body = new THREE.Mesh(new THREE.SphereGeometry(r, 64, 64), bodyMat);
  body.castShadow = castShadow;
  g.add(body);

  const seamMat = new THREE.MeshStandardMaterial({ color: SEAM_CHARCOAL, roughness: 0.85 });
  const tube = r * seamWidth;
  const lift = tube * 0.25;   // seams sit just proud of the surface — precise, no z-fight

  // equator (XZ plane)
  const eq = new THREE.Mesh(new THREE.TorusGeometry(r + lift, tube, 10, 96), seamMat);
  eq.rotation.x = Math.PI / 2;
  g.add(eq);

  // meridian (XY plane)
  g.add(new THREE.Mesh(new THREE.TorusGeometry(r + lift, tube, 10, 96), seamMat));

  // two side channels — parallel to the meridian, offset along z
  const d = 0.56 * r;
  const sr = Math.sqrt(r * r - d * d);
  for (const s of [-1, 1]) {
    const c = new THREE.Mesh(new THREE.TorusGeometry(sr + lift, tube, 10, 96), seamMat);
    c.position.z = s * d;
    g.add(c);
  }

  g.userData.bodyMat = bodyMat;
  g.userData.seamMat = seamMat;
  return g;
}

// The net — diamond-lattice strands hanging from the rim. Attach at the rim's
// world position; it hangs in -y. Slight taper, like the real thing.
export function makeNet(rimR = 0.45, opts = {}) {
  const { color = 0xF2E9C7, tiers = 3, strands = 8, depth = 0.5, emissiveIntensity = 0 } = opts;
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color, roughness: 0.9, emissive: color, emissiveIntensity,
  });
  const radii = [], ys = [];
  for (let i = 0; i <= tiers; i++) {
    const f = i / tiers;
    radii.push(rimR * (1 - 0.42 * f));
    ys.push(-depth * f * (0.55 + 0.45 * f));
  }
  const strand = (a, b) => {
    const dir = new THREE.Vector3().subVectors(b, a), len = dir.length();
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, len, 6), mat);
    m.position.copy(a).addScaledVector(dir, 0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    g.add(m);
  };
  for (let i = 0; i < tiers; i++) {
    for (let s = 0; s < strands; s++) {
      const a0 = ((s + (i % 2) * 0.5) / strands) * Math.PI * 2;
      const a1 = ((s + ((i + 1) % 2) * 0.5) / strands) * Math.PI * 2;
      const a2 = ((s + 1 + ((i + 1) % 2) * 0.5) / strands) * Math.PI * 2;
      const p0 = new THREE.Vector3(Math.cos(a0) * radii[i], ys[i], Math.sin(a0) * radii[i]);
      strand(p0, new THREE.Vector3(Math.cos(a1) * radii[i + 1], ys[i + 1], Math.sin(a1) * radii[i + 1]));
      strand(p0, new THREE.Vector3(Math.cos(a2) * radii[i + 1], ys[i + 1], Math.sin(a2) * radii[i + 1]));
    }
  }
  return g;
}

// Dribble height — the ball BOUNCES, it never floats (no travelling).
// p: 0..1 progress along a dribble stretch · hops: integer bounce count
// Returns y with sharp contacts and floaty apexes; y = restY at p = 0 and 1.
export function dribbleY(p, hops, height = 1.0, restY = 0.34) {
  const s = Math.abs(Math.sin(Math.PI * hops * p));
  return restY + height * Math.pow(s, 0.8);
}

// Real shot physics — sampled points along a true projectile arc from a launch
// point to the rim, for splicing into flight paths. Solve initial velocity from
// launch angle + planar distance + height offset (classic ballistic solution,
// adapted from JosephNewYork's three.js/ammo.js answer on Stack Overflow).
export function shotArcPoints(from, rim, angleDeg = 55, n = 6, g = 9.81) {
  const angle = (angleDeg * Math.PI) / 180;
  const dx = rim.x - from.x, dz = rim.z - from.z;
  const dist = Math.hypot(dx, dz);
  const yOffset = from.y - rim.y;
  const v0 = (1 / Math.cos(angle)) *
    Math.sqrt((0.5 * g * dist * dist) / (dist * Math.tan(angle) + yOffset));
  const vy = v0 * Math.sin(angle), vh = v0 * Math.cos(angle);
  const T = dist / vh;
  const ux = dx / dist, uz = dz / dist;
  const pts = [];
  for (let i = 1; i <= n; i++) {
    const t = T * (i / n);
    pts.push(new THREE.Vector3(
      from.x + ux * vh * t,
      from.y + vy * t - 0.5 * g * t * t,
      from.z + uz * vh * t,
    ));
  }
  return pts;   // last point lands exactly on the rim
}

// Bank shot — the ball flies OVER the net, kisses the board, drops into the ring.
// boardPt: the glass contact point (above the rim, on the board face).
export function bankShotPoints(from, rim, boardPt, angleDeg = 60, n = 8) {
  const pts = shotArcPoints(from, boardPt, angleDeg, n);
  // off the glass: down and in — to the ring's heart, then it's the net's problem
  pts.push(new THREE.Vector3(
    boardPt.x + (rim.x - boardPt.x) * 0.55,
    rim.y + 0.16,
    boardPt.z + (rim.z - boardPt.z) * 0.55,
  ));
  pts.push(rim.clone());
  return pts;
}
