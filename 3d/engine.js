// ALLEYOOP generative motion engine — composes a piece from building blocks:
//   palette (style guide) × environment × motion family × camera × extras
// One engine, one manifest (pieces.js), one shell (piece.html?id=N).
// Every ball is a basketball. Every loop is seamless by construction.

import * as THREE from 'three';
import { mountViewframe, fitFov } from './viewframe.js';
import { makeBasketball, makeNet, bankShotPoints, dribbleY, BALL_ORANGE } from './basketball.js';
import { PIECES } from './pieces.js';

const TAU = Math.PI * 2;

// deterministic rng per piece — same id, same art, every load
function mulberry32(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---- palettes (ALLEYOOP_ARTS_STYLE_GUIDE.md, hex-first) -----------------------
const PALETTES = {
  core:     { bg: 0x88BBCC, floor: 0x40815D, a: 0x2B5D4B, b: 0xF2E9C7, c: 0x88BBCC, light: 'day' },
  brand:    { bg: 0xF2E9C7, floor: null,     a: 0x0E0E0E, b: 0x9A937B, c: 0xEE9933, light: 'studio' },
  neon:     { bg: 0x0B0B14, floor: 0x12102A, a: 0x3A6DB0, b: 0xE2726D, c: 0xF2E9C7, light: 'night' },
  graffiti: { bg: 0xF2E9C7, floor: 0x413C44, a: 0xFF4FA3, b: 0x0A85BB, c: 0xF49B48, light: 'day' },
  autumn:   { bg: 0x64714D, floor: 0x333D38, a: 0xE09432, b: 0xF2E9C7, c: 0x88BBCC, light: 'golden' },
  cosmic:   { bg: 0x0B0B14, floor: null,     a: 0x9B5DE5, b: 0x4CC9F0, c: 0xF15BB5, light: 'space' },
};

// ---- tiny builders -------------------------------------------------------------
function glowSpriteTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.4, 'rgba(255,255,255,0.5)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function buildHoop(ctx, pos, side = 1) {
  const { scene, P } = ctx;
  const ink = new THREE.MeshStandardMaterial({ color: 0x223333, roughness: 0.6 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, pos.y + 0.9, 10), ink);
  pole.position.set(pos.x + side * 0.62, (pos.y + 0.9) / 2, pos.z);
  pole.castShadow = true; scene.add(pole);
  const board = new THREE.Mesh(new THREE.BoxGeometry(0.07, 1.0, 1.45),
    new THREE.MeshStandardMaterial({ color: 0xFAF3D7, roughness: 0.85 }));
  board.position.set(pos.x + side * 0.56, pos.y + 0.4, pos.z);
  board.castShadow = true; scene.add(board);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.045, 16, 64),
    new THREE.MeshStandardMaterial({ color: BALL_ORANGE, roughness: 0.45 }));
  rim.rotation.x = Math.PI / 2; rim.position.copy(pos); rim.castShadow = true; scene.add(rim);
  const net = makeNet(0.43, { color: P.light === 'night' || P.light === 'space' ? 0xF2E9C7 : 0x9A937B });
  net.position.copy(pos); scene.add(net);
  const glass = new THREE.Vector3(pos.x + side * 0.5, pos.y + 0.42, pos.z);
  return { rim, glass };
}

function buildEnv(ctx) {
  const { scene, P, cfg, rng } = ctx;
  scene.background = new THREE.Color(P.bg);
  if (P.light !== 'space' && P.light !== 'studio') scene.fog = new THREE.Fog(P.bg, 22, 60);

  // lights
  const sunCol = { day: 0xFFF4DC, golden: 0xFFD9A0, night: 0x9FB8E8, studio: 0xFFFFFF, space: 0xFFFFFF }[P.light];
  const key = new THREE.DirectionalLight(sunCol, P.light === 'night' ? 1.7 : 2.6);
  key.position.set(-6, 10, 6);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.left = key.shadow.camera.bottom = -14;
  key.shadow.camera.right = key.shadow.camera.top = 14;
  key.shadow.radius = 6;
  scene.add(key);
  scene.add(new THREE.HemisphereLight(P.bg, P.b, P.light === 'night' || P.light === 'space' ? 0.55 : 1.0));
  if (P.light === 'night' || P.light === 'space') {
    const g1 = new THREE.PointLight(P.a, 30, 50); g1.position.set(-8, 5, 4); scene.add(g1);
    const g2 = new THREE.PointLight(P.b, 30, 50); g2.position.set(8, 5, -6); scene.add(g2);
  }

  // floor
  if (P.floor === null) {
    const f = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), new THREE.ShadowMaterial({ opacity: 0.15 }));
    f.rotation.x = -Math.PI / 2; f.receiveShadow = true; scene.add(f);
  } else {
    const f = new THREE.Mesh(new THREE.PlaneGeometry(90, 90),
      new THREE.MeshStandardMaterial({ color: P.floor, roughness: 0.85, metalness: P.light === 'night' ? 0.35 : 0 }));
    f.rotation.x = -Math.PI / 2; f.receiveShadow = true; scene.add(f);
  }

  // environment dressing
  if (cfg.env === 'space') {
    const n = 1200, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 60 + rng() * 40, th = rng() * TAU, ph = Math.acos(2 * rng() - 1);
      pos.set([r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th), r * Math.cos(ph)], i * 3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(geo, new THREE.PointsMaterial({
      color: P.b, size: 0.4, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })));
  }
  if (cfg.env === 'city') {
    const c = document.createElement('canvas'); c.width = 128; c.height = 256;
    const g = c.getContext('2d');
    g.fillStyle = '#151226'; g.fillRect(0, 0, 128, 256);
    for (let y = 8; y < 248; y += 14) for (let x = 8; x < 120; x += 16)
      if (rng() < 0.4) { g.fillStyle = rng() < 0.8 ? 'rgba(242,233,199,0.92)' : 'rgba(226,114,109,0.92)'; g.fillRect(x, y, 8, 7); }
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    for (let i = 0; i < 18; i++) {
      const w = 4 + rng() * 5, h = 10 + rng() * 20;
      const tw = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), new THREE.MeshBasicMaterial({ map: tex }));
      const a = (i / 18) * TAU;
      const d = 24 + rng() * 18;
      tw.position.set(Math.cos(a) * d, h / 2 - 4, Math.sin(a) * d - 8);
      scene.add(tw);
    }
  }
  if (cfg.env === 'maze') {
    const m1 = new THREE.MeshStandardMaterial({ color: P.a, roughness: 0.9 });
    const m2 = new THREE.MeshStandardMaterial({ color: P.c, roughness: 0.9 });
    for (let i = 0; i < 7; i++) {
      const horiz = rng() < 0.5;
      const len = 3.5 + rng() * 5;
      const w = new THREE.Mesh(new THREE.BoxGeometry(horiz ? len : 0.32, 1.6, horiz ? 0.32 : len), rng() < 0.6 ? m1 : m2);
      w.position.set((rng() - 0.5) * 18, 0.8, -4 - rng() * 12);
      w.castShadow = w.receiveShadow = true;
      scene.add(w);
    }
  }
  if (cfg.env === 'court') {
    const mat = new THREE.LineBasicMaterial({ color: P.b, transparent: true, opacity: 0.8 });
    const circ = [];
    for (let i = 0; i <= 64; i++) circ.push(new THREE.Vector3(Math.cos(i / 64 * TAU) * 1.8, 0.02, Math.sin(i / 64 * TAU) * 1.8));
    scene.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(circ), mat));
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(
      [new THREE.Vector3(-12, 0.02, 0), new THREE.Vector3(12, 0.02, 0)]), mat));
  }
}

// ---- shared FX -------------------------------------------------------------------
function squashBall(b, y, rest) {
  const s = 1 - 0.18 * Math.exp(-Math.pow((y - rest) / 0.1, 2));
  b.scale.set(2 - s, s, 2 - s).multiplyScalar(0.5 + 0.5 * s);
}
function makeTrail(parent, n, color) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  parent.add(new THREE.Line(geo, new THREE.LineBasicMaterial({
    vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })));
  return { geo, color: new THREE.Color(color), n };
}
function paintTrail(trail, sampler, t, span = 0.08) {
  const { geo, color, n } = trail;
  const p = new THREE.Vector3();
  for (let k = 0; k < n; k++) {
    sampler(((t - (k / n) * span) % 1 + 1) % 1, p);
    geo.attributes.position.setXYZ(k, p.x, p.y, p.z);
    const f = Math.pow(1 - k / n, 2) * 0.85;
    geo.attributes.color.setXYZ(k, color.r * f, color.g * f, color.b * f);
  }
  geo.attributes.position.needsUpdate = geo.attributes.color.needsUpdate = true;
}

// ---- the motion families -----------------------------------------------------------
const FAMILIES = {

  // dribble a closed figure painted on the floor
  path(ctx) {
    const { scene, P, cfg, rng } = ctx;
    const R = 0.34, x = cfg.x || {};
    const S = x.size || 2.4, hops = x.hops || 10;
    const shapes = {
      circle: p => [Math.cos(p * TAU) * S, Math.sin(p * TAU) * S],
      lemniscate: p => [S * Math.sin(p * TAU), S * 0.58 * Math.sin(2 * p * TAU)],
      flower: p => { const r = S * (0.72 + 0.28 * Math.sin(3 * p * TAU)); return [Math.cos(p * TAU) * r, Math.sin(p * TAU) * r]; },
      diamond: p => { const a = p * TAU; const c = Math.cos(a), s = Math.sin(a); const k = 1 / (Math.abs(c) + Math.abs(s)); return [c * k * S * 1.3, s * k * S * 1.3]; },
      ellipse: p => [Math.cos(p * TAU) * S * 1.4, Math.sin(p * TAU) * S * 0.7],
    };
    const fn = shapes[x.shape || 'circle'];
    const pts = [];
    for (let i = 0; i <= 160; i++) { const [px, pz] = fn(i / 160); pts.push(new THREE.Vector3(px, 0.02, pz)); }
    scene.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: BALL_ORANGE, transparent: true, opacity: 0.85 })));
    const ball = makeBasketball(R, { castShadow: true, seamWidth: 0.06 });
    scene.add(ball);
    ctx.camera.position.set(0, x.top ? 8.5 : 5.2, x.top ? 2.5 : 7.2);
    ctx.look.set(0, 0.4, 0);
    return t => {
      const [px, pz] = fn(t);
      const prevX = ball.position.x, prevZ = ball.position.z;
      ball.position.set(px, dribbleY(t, hops, x.height || 0.95, R), pz);
      squashBall(ball, ball.position.y, R);
      ball.rotation.y = Math.atan2(px - prevX, pz - prevZ);
      ball.rotation.x += 0.05;
    };
  },

  // approach dribble → bank shot → through the net → bounce home
  bank(ctx) {
    const { scene, cfg, rng } = ctx;
    const R = 0.34, x = cfg.x || {};
    const HOOP = new THREE.Vector3(x.hx ?? 2.2, x.hy ?? 2.45, 0);
    const { rim, glass } = buildHoop(ctx, HOOP, 1);
    const START = new THREE.Vector3(x.sx ?? -3.6, R, x.sz ?? (rng() - 0.5) * 2);
    const LAUNCH = new THREE.Vector3(x.lx ?? -0.3, R, 0);
    const ARC = [LAUNCH.clone(), ...bankShotPoints(LAUNCH, HOOP, glass, x.angle || 60, 9)];
    const SEG = { d: 0.42, s: 0.62, p: 0.72 };
    const ball = makeBasketball(R, { castShadow: true, seamWidth: 0.06 });
    scene.add(ball);
    ctx.camera.position.set(x.camx ?? 0, 1.9, 8.4);
    ctx.look.set(0, 1.6, 0);
    const pos = new THREE.Vector3();
    return t => {
      if (t < SEG.d) { const p = t / SEG.d; pos.lerpVectors(START, LAUNCH, p); pos.y = dribbleY(p, x.dribbles || 2, 1.1, R); }
      else if (t < SEG.s) { const p = (t - SEG.d) / (SEG.s - SEG.d); const f = p * (ARC.length - 1), i = Math.min(ARC.length - 2, Math.floor(f)); pos.copy(ARC[i]).lerp(ARC[i + 1], f - i); }
      else if (t < SEG.p) { const p = (t - SEG.s) / (SEG.p - SEG.s); pos.set(HOOP.x, HOOP.y - (HOOP.y - R) * p * p, HOOP.z); }
      else { const p = (t - SEG.p) / (1 - SEG.p); pos.lerpVectors(new THREE.Vector3(HOOP.x, R, HOOP.z), START, p); pos.y = dribbleY(p, 2, 0.9 * (1 - p * 0.4), R); }
      ball.position.copy(pos);
      ball.rotation.z -= 0.07;
      squashBall(ball, pos.y, R);
      rim.scale.setScalar(1 + 0.1 * Math.exp(-Math.pow(pos.distanceTo(HOOP) / 0.5, 2)));
    };
  },

  // a field of balls dribbling in a phase pattern
  grid(ctx) {
    const { scene, cfg, rng } = ctx;
    const R = 0.3, x = cfg.x || {};
    const rows = x.rows || 5, cols = x.cols || 7, gap = x.gap || 1.5;
    const balls = [];
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const b = makeBasketball(R, { castShadow: true, seamWidth: 0.07 });
      const px = (i - (cols - 1) / 2) * gap, pz = (j - (rows - 1) / 2) * gap;
      b.position.set(px, R, pz);
      scene.add(b);
      const phase = {
        ripple: (i + j) * 0.1,
        radial: Math.hypot(i - (cols - 1) / 2, j - (rows - 1) / 2) * 0.14,
        checker: ((i + j) % 2) * 0.5,
        random: rng(),
      }[x.pattern || 'ripple'];
      balls.push({ b, px, pz, phase });
    }
    ctx.camera.position.set(0, x.top ? 10 : 5.2, x.top ? 1 : 11);
    ctx.look.set(0, 0.6, 0);
    return t => {
      for (const { b, px, pz, phase } of balls) {
        const y = dribbleY((t + phase) % 1, x.hops || 2, x.height || 1.0, R);
        b.position.set(px, y, pz);
        squashBall(b, y, R);
      }
    };
  },

  // balls climbing a helix and wrapping
  helix(ctx) {
    const { scene, P, cfg } = ctx;
    const x = cfg.x || {};
    const N = x.n || 22, H = x.height || 8, twists = x.twists || 3;
    const balls = [], trails = [];
    for (let i = 0; i < N; i++) {
      const b = makeBasketball(x.size || 0.3, { seamWidth: 0.07 });
      scene.add(b);
      balls.push(b);
      trails.push(makeTrail(scene, 12, i % 2 ? P.a : P.b));
    }
    const state = (i, t, out) => {
      const u = ((i / N + t) % 1 + 1) % 1;
      const r = (x.funnel ? 3.6 - u * 2.2 : 2.6);
      const a = u * TAU * twists + t * TAU;
      out.set(Math.cos(a) * r, 0.34 + u * H, Math.sin(a) * r);
    };
    ctx.camera.position.set(0, H * 0.52, 12);
    ctx.look.set(0, H * 0.46, 0);
    const p = new THREE.Vector3();
    return t => {
      balls.forEach((b, i) => {
        state(i, t, p);
        b.position.copy(p);
        b.rotation.y += 0.04; b.rotation.x += 0.02;
        paintTrail(trails[i], (tt, out) => state(i, tt, out), t, 0.05);
      });
    };
  },

  // a basketball solar system (no bloom — light comes from the materials)
  orbits(ctx) {
    const { scene, P, cfg } = ctx;
    const x = cfg.x || {};
    const sun = makeBasketball(x.sun || 1.2, { emissiveIntensity: 0.5, seamWidth: 0.05 });
    scene.add(sun);
    const specs = [
      { r: 2.5, s: 0.22, o: 3, tilt: 0.2, ph: 0 },
      { r: 3.8, s: 0.3, o: 2, tilt: -0.14, ph: 0.35 },
      { r: 5.0, s: 0.17, o: 1, tilt: 0.3, ph: 0.65 },
    ].slice(0, x.moons || 3);
    const moons = specs.map(s => {
      const pv = new THREE.Group(); pv.rotation.x = s.tilt; scene.add(pv);
      const m = makeBasketball(s.s, { emissiveIntensity: 0.2, seamWidth: 0.07 });
      pv.add(m);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(s.r, 0.012, 8, 180),
        new THREE.MeshBasicMaterial({ color: P.a, transparent: true, opacity: 0.8 }));
      ring.rotation.x = Math.PI / 2; pv.add(ring);
      return { ...s, pv, m, trail: makeTrail(pv, 40, P.b) };
    });
    ctx.camera.position.set(0, 2.4, 9.2);
    ctx.look.set(0, 0, 0);
    return t => {
      sun.rotation.y = t * TAU;
      for (const mo of moons) {
        const a = (t * mo.o + mo.ph) * TAU;
        mo.m.position.set(Math.cos(a) * mo.r, 0, Math.sin(a) * mo.r);
        mo.m.rotation.y = a * 2;
        paintTrail(mo.trail, (tt, out) => {
          const aa = (tt * mo.o + mo.ph) * TAU;
          out.set(Math.cos(aa) * mo.r, 0, Math.sin(aa) * mo.r);
        }, t, 0.07);
      }
    };
  },

  // fly through an endless tunnel of glowing rims
  tunnel(ctx) {
    const { scene, P, cfg } = ctx;
    const x = cfg.x || {};
    const SP = 3.2, N = 12;
    const rings = [];
    for (let i = 0; i < N; i++) {
      const g = new THREE.Group();
      const col = i % 2 ? P.a : P.b;
      const rim = new THREE.Mesh(new THREE.TorusGeometry(x.r || 1.5, 0.06, 16, 80),
        new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 1.1, roughness: 0.5 }));
      g.add(rim);
      if (x.nets !== false) {
        const net = makeNet((x.r || 1.5) * 0.96, { color: 0xF2E9C7, emissiveIntensity: 0.25, tiers: 3, strands: 10, depth: 1.0 });
        net.rotation.x = -Math.PI / 2;
        g.add(net);
      }
      scene.add(g);
      rings.push(g);
    }
    const ball = makeBasketball(0.42, { seamWidth: 0.06, emissiveIntensity: 0.15 });
    scene.add(ball);
    scene.fog = new THREE.Fog(P.bg, 8, 30);
    ctx.camera.position.set(0, 0, 6);
    ctx.look.set(0, 0, -8);
    ctx.lockY = true;
    return t => {
      const scroll = t * SP * 2;
      rings.forEach((g, i) => {
        let z = ((-i * SP + scroll) % (N * SP) + N * SP) % (N * SP);
        g.position.z = z - N * SP + SP * 0.4;
        g.position.x = Math.sin(i * 0.8 + t * TAU) * 0.12;
        g.position.y = Math.cos(i * 1.3 + t * TAU) * 0.12;
      });
      ball.position.set(0, -0.1, -2.2);
      ball.rotation.z -= 0.12;
    };
  },

  // endless stoop descent
  stairs(ctx) {
    const { scene, P, cfg } = ctx;
    const x = cfg.x || {};
    const R = 0.34, SH = 0.42, SD = 0.95, NS = 16, B = x.bounces || 4;
    const sm = new THREE.MeshStandardMaterial({ color: P.a, roughness: 0.9 });
    const wm = new THREE.MeshStandardMaterial({ color: P.floor ?? 0x333D38, roughness: 0.9 });
    const steps = [];
    for (let i = 0; i < NS; i++) {
      const g = new THREE.Group();
      const tread = new THREE.Mesh(new THREE.BoxGeometry(3.2, SH, SD), sm);
      tread.castShadow = tread.receiveShadow = true; g.add(tread);
      const wall = new THREE.Mesh(new THREE.BoxGeometry(0.3, SH + 1.6, SD), wm);
      wall.position.set(-1.75, 0.8, 0); wall.castShadow = true; g.add(wall);
      scene.add(g); steps.push(g);
    }
    const ball = makeBasketball(R, { castShadow: true, seamWidth: 0.06 });
    scene.add(ball);
    ctx.camera.position.set(5.6, 2.2, 7.5);
    ctx.look.set(0, 0.8, 0);
    return t => {
      const shift = t * B;
      steps.forEach((g, i) => {
        const u = ((i - shift) % NS + NS) % NS;
        g.position.set(0, (NS / 2 - u) * SH - 2.5, (u - NS / 2) * SD);
      });
      const ph = (t * B) % 1;
      const hop = Math.pow(Math.abs(Math.sin(Math.PI * ph)), 0.85);
      ball.position.set(0.4, 0.95 + SH / 2 + R + hop * 1.25, 0.2);
      ball.rotation.x -= 0.04;
      squashBall(ball, R + hop, R);
    };
  },

  // hop across a planet-sized basketball
  planet(ctx) {
    const { scene, cfg } = ctx;
    const x = cfg.x || {};
    const PR = x.pr || 4.2, R = 0.36, HOPS = x.hops || 12;
    const planet = makeBasketball(PR, { seamWidth: 0.04 });
    planet.position.y = -PR + 1.4;
    scene.add(planet);
    const ball = makeBasketball(R, { seamWidth: 0.07 });
    scene.add(ball);
    ctx.camera.position.set(0, 1.8, 13);
    ctx.look.set(0, 0.6, 0);
    return t => {
      const a = Math.PI / 2 + Math.sin(t * TAU) * 0.95;
      const hop = Math.pow(Math.abs(Math.sin(Math.PI * HOPS * t)), 0.85) * 1.5;
      const rr = PR + R + hop;
      ball.position.set(planet.position.x + Math.cos(a) * rr, planet.position.y + Math.sin(a) * rr, 0);
      ball.rotation.z = a;
      ball.rotation.y += 0.03;
      planet.rotation.y = Math.sin(t * TAU) * 0.12;
    };
  },

  // the rim roller — the shot that never decides
  roller(ctx) {
    const { scene, cfg } = ctx;
    const x = cfg.x || {};
    const HOOP = new THREE.Vector3(0, 3.05, 0);
    const { rim } = buildHoop(ctx, HOOP, 1);
    const R = 0.3;
    const ball = makeBasketball(R, { castShadow: true, seamWidth: 0.07 });
    scene.add(ball);
    ctx.camera.position.set(2.6, 4.2, 4.6);
    ctx.look.set(0, 3.0, 0);
    return t => {
      const a = t * TAU * (x.laps || 2);
      const orbitR = 0.34 + Math.sin(t * TAU) * 0.03;
      ball.position.set(Math.cos(a) * orbitR, HOOP.y + 0.16 + Math.sin(t * TAU * 2) * 0.045, Math.sin(a) * orbitR);
      ball.rotation.y = -a * 2.2;
      ball.rotation.x = 0.35;
      rim.scale.setScalar(1 + Math.sin(t * TAU * 4) * 0.012);
    };
  },

  // pendulum cradle
  cradle(ctx) {
    const { scene, cfg } = ctx;
    const x = cfg.x || {};
    const N = x.n || 5, R = 0.34, CABLE = 2.4, PY = 4.2;
    const ink = new THREE.MeshStandardMaterial({ color: 0x223333, roughness: 0.7 });
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, N * R * 2 + 1.2, 12), ink);
    bar.rotation.z = Math.PI / 2; bar.position.y = PY; bar.castShadow = true; scene.add(bar);
    const pends = [];
    for (let i = 0; i < N; i++) {
      const g = new THREE.Group();
      g.position.set((i - (N - 1) / 2) * (R * 2 + 0.02), PY, 0);
      const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, CABLE, 8), ink);
      cable.position.y = -CABLE / 2; g.add(cable);
      const b = makeBasketball(R, { castShadow: true, seamWidth: 0.06 });
      b.position.y = -CABLE; g.add(b);
      scene.add(g); pends.push(g);
    }
    ctx.camera.position.set(0, 2.2, 8.6);
    ctx.look.set(0, 2.0, 0);
    const A = 0.62;
    return t => {
      const u = Math.sin(t * TAU * 2);
      pends[0].rotation.z = A * Math.max(0, u);
      pends[N - 1].rotation.z = -A * Math.max(0, -u);
      const impact = Math.exp(-Math.pow(Math.abs(u) / 0.08, 2)) * 0.02;
      for (let i = 1; i < N - 1; i++) pends[i].rotation.z = Math.sin(t * TAU * 8 + i) * impact;
    };
  },

  // a fountain of basketballs — droplets that are also makes
  fountain(ctx) {
    const { scene, P, cfg, rng } = ctx;
    const x = cfg.x || {};
    const N = x.n || 14, R = 0.26;
    const tex = glowSpriteTexture();
    const balls = [];
    for (let i = 0; i < N; i++) {
      const b = makeBasketball(R, { castShadow: true, seamWidth: 0.07 });
      scene.add(b);
      const dir = (i / N) * TAU + rng() * 0.2;
      const dist = 2.2 + rng() * 2.4;
      const peak = 2.6 + rng() * 1.8;
      balls.push({ b, dir, dist, peak, ph: i / N });
    }
    // the spring it leaps from
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 0.5, 24),
      new THREE.MeshStandardMaterial({ color: P.a, roughness: 0.8 }));
    ped.position.y = 0.25; ped.castShadow = true; scene.add(ped);
    ctx.camera.position.set(0, 3.6, 10);
    ctx.look.set(0, 1.4, 0);
    return t => {
      for (const o of balls) {
        const p = ((t * (x.cycles || 2) + o.ph) % 1 + 1) % 1;
        const arcY = 0.6 + Math.sin(Math.PI * p) * o.peak;
        const r = p * o.dist;
        o.b.position.set(Math.cos(o.dir) * r, arcY, Math.sin(o.dir) * r);
        // droplets: grow on launch, sink on landing — the fountain breathes
        const s = Math.min(1, Math.min(p, 1 - p) * 8);
        o.b.scale.setScalar(Math.max(0.001, s));
        o.b.rotation.x += 0.05;
      }
    };
  },

  // juggling cascade — N balls weaving between two invisible hands
  juggle(ctx) {
    const { scene, P, cfg } = ctx;
    const x = cfg.x || {};
    const N = x.n || 3, R = 0.3;
    const L = new THREE.Vector3(-1.3, 1.1, 0), Rt = new THREE.Vector3(1.3, 1.1, 0);
    const balls = [], trails = [];
    for (let i = 0; i < N; i++) {
      const b = makeBasketball(R, { castShadow: true, seamWidth: 0.07 });
      scene.add(b);
      balls.push(b);
      trails.push(makeTrail(scene, 14, i % 2 ? P.a : P.b));
    }
    const H = x.height || 3.4;
    const state = (i, t, out) => {
      // each ball flies L→R then R→L, half-loop each, staggered
      const p = ((t + i / N) % 1 + 1) % 1;
      const leg = p < 0.5 ? p * 2 : (p - 0.5) * 2;
      const from = p < 0.5 ? L : Rt, to = p < 0.5 ? Rt : L;
      out.lerpVectors(from, to, leg);
      out.y = from.y + Math.sin(Math.PI * leg) * H;
    };
    ctx.camera.position.set(0, 2.6, 8.2);
    ctx.look.set(0, 2.2, 0);
    const p = new THREE.Vector3();
    return t => {
      balls.forEach((b, i) => {
        state(i, t, p);
        b.position.copy(p);
        b.rotation.z -= 0.08;
        paintTrail(trails[i], (tt, out) => state(i, tt, out), t, 0.06);
      });
    };
  },

  // rainfall of basketballs — fall, bounce twice, sink, return
  rain(ctx) {
    const { scene, cfg, rng } = ctx;
    const x = cfg.x || {};
    const N = x.n || 16, R = 0.28;
    const drops = [];
    for (let i = 0; i < N; i++) {
      const b = makeBasketball(R, { castShadow: true, seamWidth: 0.07 });
      scene.add(b);
      drops.push({ b, px: (rng() - 0.5) * 10, pz: (rng() - 0.5) * 7 - 1, ph: rng() });
    }
    ctx.camera.position.set(0, 3.4, 11);
    ctx.look.set(0, 1.6, 0);
    const fall = p => {
      if (p < 0.34) { const q = p / 0.34; return 6.5 - (6.5 - R) * q * q; }
      if (p < 0.58) { const q = (p - 0.34) / 0.24; return R + 1.6 * 4 * q * (1 - q); }
      if (p < 0.74) { const q = (p - 0.58) / 0.16; return R + 0.5 * 4 * q * (1 - q); }
      if (p < 0.9) return R;
      return R - (p - 0.9) / 0.1 * (R * 2.2);   // sink away
    };
    return t => {
      for (const d of drops) {
        const p = ((t + d.ph) % 1 + 1) % 1;
        const y = fall(p);
        d.b.position.set(d.px, y, d.pz);
        d.b.visible = y > -R;
        squashBall(d.b, Math.max(y, R), R);
      }
    };
  },

  // a comet basketball flying a closed 3D lissajous, ribboned in light
  ribbon(ctx) {
    const { scene, P, cfg } = ctx;
    const x = cfg.x || {};
    const [fa, fb, fc] = x.freq || [2, 3, 1];
    const A = 3.0, B = 1.4, C = 1.8;
    const state = (t, out) => out.set(
      Math.sin(t * TAU * fa) * A,
      2.2 + Math.sin(t * TAU * fb + 1.2) * B,
      Math.sin(t * TAU * fc + 0.5) * C
    );
    const ball = makeBasketball(0.34, { castShadow: true, seamWidth: 0.06, emissiveIntensity: 0.12 });
    scene.add(ball);
    const trail = makeTrail(scene, 60, P.a);
    const trail2 = makeTrail(scene, 60, P.b);
    ctx.camera.position.set(0, 2.6, 9);
    ctx.look.set(0, 2.0, 0);
    return t => {
      state(t, ball.position);
      ball.rotation.x += 0.06; ball.rotation.y += 0.03;
      paintTrail(trail, state, t, 0.10);
      paintTrail(trail2, state, ((t + 0.004) % 1), 0.10);
    };
  },

  // a crown of balls hopping in sequence around a circle
  ring(ctx) {
    const { scene, cfg } = ctx;
    const x = cfg.x || {};
    const N = x.n || 12, R = 0.3, CR = x.radius || 3.2;
    const balls = [];
    for (let i = 0; i < N; i++) {
      const b = makeBasketball(R, { castShadow: true, seamWidth: 0.07 });
      scene.add(b);
      balls.push(b);
    }
    ctx.camera.position.set(0, x.top ? 9.5 : 4.6, x.top ? 1.5 : 9);
    ctx.look.set(0, 0.5, 0);
    return t => {
      balls.forEach((b, i) => {
        const a = (i / N) * TAU + t * TAU / N;      // crown turns one slot per loop
        const ph = ((t * (x.pulses || 2) - i / N) % 1 + 1) % 1;
        const hop = ph < 0.3 ? Math.sin((ph / 0.3) * Math.PI) : 0;
        const y = R + Math.pow(hop, 0.9) * (x.height || 1.3);
        b.position.set(Math.cos(a) * CR, y, Math.sin(a) * CR);
        squashBall(b, y, R);
      });
    };
  },

  // a column of balls bouncing in counter-phase — the kinetic totem
  totem(ctx) {
    const { scene, cfg } = ctx;
    const x = cfg.x || {};
    const N = x.n || 5;
    const balls = [];
    for (let i = 0; i < N; i++) {
      const r = 0.42 - i * 0.05;
      const b = makeBasketball(Math.max(0.16, r), { castShadow: true, seamWidth: 0.07 });
      scene.add(b);
      balls.push({ b, r: Math.max(0.16, r) });
    }
    ctx.camera.position.set(0, 2.4, 7.4);
    ctx.look.set(0, 2.0, 0);
    return t => {
      let y = 0;
      balls.forEach(({ b, r }, i) => {
        const breathe = Math.sin(t * TAU * 2 + i * 0.9) * 0.16;
        y += r;
        b.position.set(Math.sin(t * TAU + i) * 0.06, y + breathe + i * 0.12, 0);
        b.rotation.y = t * TAU * (i % 2 ? 1 : -1);
        y += r + 0.1;
      });
    };
  },

  // metronome — the ball ticks between two walls
  metronome(ctx) {
    const { scene, P, cfg } = ctx;
    const x = cfg.x || {};
    const R = 0.34, REACH = 2.2, PY = 4.6;
    const ink = new THREE.MeshStandardMaterial({ color: 0x223333, roughness: 0.7 });
    const pivotG = new THREE.Group();
    pivotG.position.y = PY;
    scene.add(pivotG);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, PY - 1.0, 8), ink);
    arm.position.y = -(PY - 1.0) / 2;
    pivotG.add(arm);
    const ball = makeBasketball(R, { castShadow: true, seamWidth: 0.06 });
    ball.position.y = -(PY - 1.0);
    pivotG.add(ball);
    for (const s of [-1, 1]) {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.4, 1.6),
        new THREE.MeshStandardMaterial({ color: s < 0 ? P.a : P.b, roughness: 0.85 }));
      wall.rotation.z = -s * 0.5;
      wall.position.set(s * 2.45, 1.7, 0);
      wall.castShadow = true;
      scene.add(wall);
    }
    ctx.camera.position.set(0, 2.4, 8.0);
    ctx.look.set(0, 2.2, 0);
    return t => {
      const a = Math.sin(t * TAU * (x.ticks || 2)) * 0.52;
      pivotG.rotation.z = a;
      const hit = Math.exp(-Math.pow((Math.abs(a) - 0.52) / 0.05, 2));
      ball.scale.setScalar(1 - hit * 0.12);
    };
  },
};

// ---- boot ---------------------------------------------------------------------------
export function boot() {
  const params = new URLSearchParams(location.search);
  const id = Math.max(1, parseInt(params.get('id') || '1', 10));
  const cfg = PIECES[(id - 1) % PIECES.length];
  const P = PALETTES[cfg.pal];
  const rng = mulberry32(id * 7919);

  document.title = `ALLEYOOP — ${cfg.title}`;
  const tag = document.querySelector('.tag');
  tag.innerHTML = `<b>ALLEYOOP</b> · ${cfg.title.toLowerCase()} · ${cfg.loop}s loop · piece ${String(id + 22).padStart(3, '0')}`;

  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene'), antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(cfg.fov || 40, 1, 0.1, 200);
  const ctx = { scene, camera, P, cfg, rng, look: new THREE.Vector3(0, 1, 0) };

  buildEnv(ctx);
  const update = FAMILIES[cfg.fam](ctx);
  const basePos = camera.position.clone();

  const frameEl = document.getElementById('frame');
  function resize() {
    const w = frameEl.clientWidth || innerWidth, h = frameEl.clientHeight || innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    fitFov(camera, cfg.fov || 40, cfg.minH || 52);
  }
  addEventListener('frame-resize', resize);
  mountViewframe();
  resize();

  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const t = (clock.getElapsedTime() % cfg.loop) / cfg.loop;
    update(t);
    // camera motion: orbit / sway / static — all return at the seam
    if (cfg.cam === 'orbit') {
      const a = t * TAU;
      const r = Math.hypot(basePos.x, basePos.z);
      camera.position.set(Math.sin(a) * r, basePos.y, Math.cos(a) * r);
    } else if (cfg.cam === 'sway') {
      camera.position.set(basePos.x + Math.sin(t * TAU) * 0.8, basePos.y + Math.sin(t * TAU * 2) * 0.15, basePos.z);
    } else {
      camera.position.copy(basePos);
    }
    camera.lookAt(ctx.look);
    renderer.render(scene, camera);
  });
}
