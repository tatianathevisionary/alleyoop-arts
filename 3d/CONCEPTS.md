# Alleyoop Arts — 3D Loop Concepts

Short seamless animation loops. Cinema 4D + Redshift. Passion-project scale: one ball,
one idea, one perfect cycle.

Brand rules apply (see `../brand/BRAND.md`): brand-layer loops use Ink Black `#0E0E0E` /
Court Cream `#F2E9C7` / Alleyoop Orange `#EE9933` only, orange scarce. Collection-layer
loops use that collection's palette. No crests, no clip-art, no player silhouettes at the
brand layer.

Social delivery target: 1080×1350 (4:5) or 1080×1080, 30fps, 3–6s loops (90–180 frames).

---

## The shortlist (6 concepts, ranked by brand-fit × feasibility)

### 1 · THE LOB — the logo, animated ⭐ start here

**Layer:** brand · **Loop:** 4s / 120f · **Difficulty:** low-medium

The double-O rims from the wordmark, made physical: two clean torus rims floating in
Court Cream space, and one orange ball arcing between them in a perpetual figure-eight.
The ball drops through rim A, emerges from rim B, lobs back. The pass never ends —
which is the whole brand in one GIF.

- **C4D build:** ball on a closed spline path (Align to Spline, 0→100% over 120f).
  Figure-eight spline through both torus centers. Slight ball rotation via XPresso or
  keyframed Rotation tied to position. Rims static — stillness sells the ball's motion.
- **Loop mechanic:** closed spline + linear position percentage = mathematically perfect
  loop. Add eased squash (Jiggle deformer, low strength) timed to rim pass-throughs.
- **Redshift look:** Court Cream seamless cyc (single large area light overhead + one
  bounce card), Ink Black rims in matte rubber (low spec, high roughness), ball in
  Alleyoop Orange with subtle leather bump (Maxon Noise → Bump, scale small). One
  material per object. Shallow DOF, locked camera.
- **Why first:** it's the logo motion-identity — usable as site header, IG profile loop,
  email signature, loading animation. Highest reuse per render-hour.

### 2 · NET SWISH, INVERTED — the oddly-satisfying one

**Layer:** brand · **Loop:** 3s / 90f · **Difficulty:** medium (cloth sim)

Macro shot, locked camera, black void. A cream net hangs center frame. The orange ball
drops through — *swish*, the net ripples — and the same ball falls in again from the top
of frame. One bounceless, endless make.

- **C4D build:** net modeled as cylinder cage (or downloaded net mesh) → Cloth tag,
  belted at the rim loop. Ball as collider, keyframed straight drop. Sim the swish, cache
  it, then trim to the cycle where the net returns to rest.
- **Loop mechanic:** the hard part is net rest-state matching at first/last frame. Trick:
  run the sim long, find two near-identical rest frames, cut there, and cross-blend 4–5
  frames in post (frame blending hides the seam). Ball loop is trivial — same drop,
  re-entering at top.
- **Redshift look:** the net is the star — cream cloth with fine weave bump, strong
  rim-light from behind (one RS Area light, narrow spread) so the ripple reads in
  silhouette against Ink Black. Ball mostly shadow with one orange highlight. Heavy DOF.
- **Sound note (if posted with audio):** one swish sample, looped to the cycle. Nothing else.

### 3 · MAZE RUN — the flagship collection, in motion

**Layer:** collection (maze — lime greens, sky blues, sunny yellow ball) · **Loop:** 6s / 180f · **Difficulty:** medium-high

Camera glides at ball-height through an endless maze corridor — the exact world of the
156-poster collection. The sunny-yellow ball rolls ahead of camera, banking around one
corner per loop. Walls in lime/sky-blue, hard sun, long shadows.

- **C4D build:** modular corridor kit (3–4 wall segments, one corner). Corridor assembled
  so segment layout at frame 0 and frame 180 is identical — camera travels exactly one
  module-repeat length. Ball rolls via Roll-It style XPresso (rotation = distance ÷
  radius) so contact never slips.
- **Loop mechanic:** treadmill principle — camera and ball move forward exactly one
  repeat-unit; world geometry is periodic. Linear camera velocity (no ease — constant
  glide reads hypnotic and loops invisibly).
- **Redshift look:** RS Sun + sky for hard shadows, walls in flat matte color (the poster
  look — almost no roughness variation), ball with a faint yellow emissive kick. Optional
  volumetric atmosphere at 2% for depth haze down the corridor.
- **Use:** the Maze collection's product-page hero, drop-announcement teaser.

### 4 · BALLISTIC STILL LIFE — the gallery piece

**Layer:** brand · **Loop:** 5s / 150f · **Difficulty:** low

A Newton's cradle, but the spheres are basketballs. Five balls hang from thin black
cables in cream space; the end balls swap energy in a perfect pendulum cycle. Four balls
Ink Black matte — one Alleyoop Orange. Orange is scarce; it's the one doing the work.

- **C4D build:** keyframe the pendulums (don't simulate — keyframes loop perfectly,
  dynamics don't). Two keyframed arcs with eased extremes, offset timing, classic cradle
  cheat. Cables as splines with Sweep.
- **Loop mechanic:** pure keyframes mirrored — frame 0 = frame 150 by construction.
- **Redshift look:** product-photography lighting — large soft key, gradient cream
  backdrop, contact shadows. This one should look like a Vitra catalog shot.
- **Why:** the "gallery for the game" positioning as a literal image. Strong as a print
  companion / about-page loop.

### 5 · ROOFTOP BLUE HOUR — hyperreal city, in motion

**Layer:** collection (hyperreal city — matches `outputs/alleyoop-hyperreal-city-v2/`) · **Loop:** 4s / 120f · **Difficulty:** high

A ball bounces in place on an empty rooftop court at blue hour, city bokeh behind. One
bounce per second, four bounces per loop. Nobody in frame — the ball is the inhabitant.

- **C4D build:** bounce as keyframed position with proper easing (fast in/out at contact,
  hang at apex) — not dynamics, for loop purity. Squash-and-stretch via Squash deformer
  keyed to contact frames. Rooftop set: court plane, chain-link fence (railclone-style
  cloner or texture w/ opacity), HDRI city backdrop + a few emissive window cards for
  parallax.
- **Loop mechanic:** bounce cycle is periodic by nature; camera either locked or on a
  slow 360° orbit (orbit must complete exactly at loop end — 360° over 120f).
- **Redshift look:** blue-hour HDRI dome low intensity + practical court floodlight as
  the key (warm vs. cool contrast), heavy bokeh DOF on the skyline, motion blur ON
  (this concept's realism depends on it).
- **Honest note:** most render-expensive and most set-dressing work. Do it third, not first.

### 6 · SEAM ORBIT — the macro idents

**Layer:** brand · **Loop:** 3s / 90f · **Difficulty:** lowest

Extreme macro on the ball's surface — pebbled leather, the black seam channel crossing
frame like a road. The ball rotates exactly 360° per loop; the seam drifts past
hypnotically. At this distance the ball becomes landscape.

- **C4D build:** one sphere, one 360° rotation keyframe (linear), camera 5cm away.
- **Loop mechanic:** 360° = perfect loop, no tricks needed. The seam pattern must be
  rotation-symmetric in frame, or cut where seam positions repeat.
- **Redshift look:** everything is the shader — displacement (not bump) for the pebble
  grain at macro distance, RS Dome light + one hard specular streak raking across.
  Orange version for brand, collection-palette versions as a series.
- **Why:** an afternoon of work, and it's a whole family of 3s idents — one per
  collection palette. Best effort-to-output ratio on this list.

---

## Loop craft — the rules that make them seamless

1. **Keyframes beat simulation for loops.** Anything dynamic (cloth, rigid body) won't
   return to its start state — cache, trim to near-identical frames, frame-blend the seam.
   Anything keyframed can be constructed to loop exactly.
2. **Closed splines and full rotations are free loops.** 0→100% on a closed path,
   0→360° on any axis: frame N = frame 0 by definition.
3. **Linear master motion, eased secondary motion.** Constant camera/ball velocity hides
   the cut; squash, jiggle, and net ripple carry the life.
4. **Looping noise:** Maxon Noise has a loop period setting (animation speed × loop
   cycles) — set it to your frame count or textures will pop at the seam.
5. **Test the loop early at playblast quality.** Watch it cycle 5+ times before
   committing render hours. The seam you can't see once, you'll see the fourth time.

## Redshift starting points (shared)

- **Ball shader:** RS Standard Material — base color from palette, Maxon Noise (Luka/Fbm,
  small scale) into bump ~0.2 for leather; for macro work move it to displacement.
  Roughness ~0.45 so the orange reads matte-sporty, not plastic.
- **Cream cyc:** geometry sweep (floor curving to wall), Court Cream diffuse, lit — not
  an emissive backdrop (emissive flattens the ball's grounding shadow).
- **Render:** 1080×1350 @ 30fps. Unified sampling, auto; bump max samples for the DOF-heavy
  concepts (2, 5). Cryptomatte + Z-depth AOVs so grade and DOF tweaks happen in post.
- **Post:** grade in AE/Resolve; export loop as MP4 (social) + lossless ProRes master +
  GIF only when a surface demands it.

## Built beyond the original six (2026-06-07)

| Piece | File | What it is |
|-------|------|-----------|
| **Brand intro — "The Pass"** | `brand-intro.html` + `BRAND-INTRO.md` | 12s ident: drop → lob → swish → rims become the OO → lockup. Full spec + cutdowns in the MD |
| **Basketball Galaxy** | `galaxy.html` | Cosmic-poster palette in motion: sun-ball, neon orbit rings, comet-trailed moons, bloom. 3 switchable palettes (cosmic / maze / brand). 12s seamless |
| **Neon Court** | `neon-court.html` | Neon-night collection in motion: court drawn in light, glowing rim, dark ball with neon seams, additive comet trail, orbiting camera. 10s seamless |
| **Viewframe** | `viewframe.js` | Every piece previews in FILL / 16:9 (YouTube) / 9:16 (Reels) / 1:1 |

## Suggested order

1. **Seam Orbit** (#6) — one afternoon, proves the pipeline end to end
2. **The Lob** (#1) — the keeper; the brand's motion identity
3. **Net Swish** (#2) or **Maze Run** (#3) — depending on appetite for cloth sim vs. set modeling
4. **Ballistic Still Life** (#4) anytime as a palate cleanser
5. **Rooftop Blue Hour** (#5) — when the pipeline is warmed up and worth the render hours
