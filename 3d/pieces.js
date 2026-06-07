// THE HUNDRED — pieces 023–122. One manifest, one engine.
// fam: motion family · pal: style-guide palette · env: dressing · cam: camera
// Every entry is a distinct, seamless, titled work.

export const PIECES = [
  // ---- THE MAKES (bank shots in fourteen rooms) --------------------------------
  { title: 'Corner Store Run',      fam: 'bank', pal: 'graffiti', env: 'city',  cam: 'static', loop: 7,  x: { angle: 58 } },
  { title: 'Last Bus Home',         fam: 'bank', pal: 'neon',     env: 'city',  cam: 'static', loop: 7,  x: { angle: 64, hy: 2.6 } },
  { title: 'Sunday Gym',            fam: 'bank', pal: 'brand',    env: 'void',  cam: 'static', loop: 6,  x: { angle: 60 } },
  { title: 'Practice, 6 AM',        fam: 'bank', pal: 'core',     env: 'court', cam: 'static', loop: 7,  x: { angle: 62, dribbles: 3 } },
  { title: 'October League',        fam: 'bank', pal: 'autumn',   env: 'court', cam: 'static', loop: 7,  x: { angle: 58 } },
  { title: 'Zero Gravity Make',     fam: 'bank', pal: 'cosmic',   env: 'space', cam: 'static', loop: 8,  x: { angle: 66, hy: 2.8 } },
  { title: 'The Quiet Make',        fam: 'bank', pal: 'brand',    env: 'void',  cam: 'sway',   loop: 8,  x: { angle: 60, dribbles: 2 } },
  { title: 'Half Past Midnight',    fam: 'bank', pal: 'neon',     env: 'court', cam: 'static', loop: 7,  x: { angle: 62 } },
  { title: 'Spray Paint Swish',     fam: 'bank', pal: 'graffiti', env: 'maze',  cam: 'static', loop: 7,  x: { angle: 58 } },
  { title: 'Harvest Hoop',          fam: 'bank', pal: 'autumn',   env: 'maze',  cam: 'static', loop: 8,  x: { angle: 60, dribbles: 3 } },
  { title: 'Window Seat',           fam: 'bank', pal: 'neon',     env: 'city',  cam: 'sway',   loop: 8,  x: { angle: 60 } },
  { title: 'Maze Exit',             fam: 'bank', pal: 'core',     env: 'maze',  cam: 'static', loop: 7,  x: { angle: 62 } },
  { title: 'Gallery Make',          fam: 'bank', pal: 'brand',    env: 'court', cam: 'static', loop: 6,  x: { angle: 64 } },
  { title: 'Stardust Bank',         fam: 'bank', pal: 'cosmic',   env: 'space', cam: 'sway',   loop: 8,  x: { angle: 62, hy: 2.7 } },

  // ---- THE HANDLES (closed-figure dribbles) -------------------------------------
  { title: 'Infinity Handle',       fam: 'path', pal: 'neon',     env: 'court', cam: 'static', loop: 6,  x: { shape: 'lemniscate', hops: 12 } },
  { title: 'Center Circle',         fam: 'path', pal: 'core',     env: 'court', cam: 'static', loop: 5,  x: { shape: 'circle', hops: 10 } },
  { title: 'The Flower Drill',      fam: 'path', pal: 'graffiti', env: 'void',  cam: 'static', loop: 7,  x: { shape: 'flower', hops: 15 } },
  { title: 'Diamond Press',         fam: 'path', pal: 'brand',    env: 'void',  cam: 'static', loop: 6,  x: { shape: 'diamond', hops: 8 } },
  { title: 'Oval Office',           fam: 'path', pal: 'autumn',   env: 'court', cam: 'static', loop: 6,  x: { shape: 'ellipse', hops: 10 } },
  { title: 'Overhead Infinity',     fam: 'path', pal: 'neon',     env: 'void',  cam: 'static', loop: 6,  x: { shape: 'lemniscate', hops: 12, top: true } },
  { title: 'Crop Circle',           fam: 'path', pal: 'core',     env: 'void',  cam: 'static', loop: 5,  x: { shape: 'circle', hops: 14, top: true, size: 3 } },
  { title: 'Night Bloom',           fam: 'path', pal: 'cosmic',   env: 'space', cam: 'static', loop: 7,  x: { shape: 'flower', hops: 12, top: true } },

  // ---- THE DRUMLINES (grids in phase) ---------------------------------------------
  { title: 'Open Tryouts',          fam: 'grid', pal: 'brand',    env: 'void',  cam: 'static', loop: 4,  x: { rows: 4, cols: 6, pattern: 'ripple' } },
  { title: 'The Drumline',          fam: 'grid', pal: 'core',     env: 'court', cam: 'static', loop: 4,  x: { rows: 3, cols: 9, pattern: 'checker' } },
  { title: 'Heat Map',              fam: 'grid', pal: 'neon',     env: 'void',  cam: 'static', loop: 5,  x: { rows: 6, cols: 6, pattern: 'radial' } },
  { title: 'Static',                fam: 'grid', pal: 'graffiti', env: 'void',  cam: 'static', loop: 4,  x: { rows: 5, cols: 7, pattern: 'random' } },
  { title: 'Roll Call',             fam: 'grid', pal: 'autumn',   env: 'court', cam: 'static', loop: 5,  x: { rows: 2, cols: 11, pattern: 'ripple', gap: 1.1 } },
  { title: 'Bird&apos;s Eye Drill', fam: 'grid', pal: 'core',     env: 'void',  cam: 'static', loop: 4,  x: { rows: 6, cols: 6, pattern: 'radial', top: true } },
  { title: 'Checkerboard Bounce',   fam: 'grid', pal: 'brand',    env: 'void',  cam: 'static', loop: 4,  x: { rows: 5, cols: 5, pattern: 'checker', top: true } },
  { title: 'Stadium Pulse',         fam: 'grid', pal: 'neon',     env: 'city',  cam: 'sway',   loop: 5,  x: { rows: 4, cols: 8, pattern: 'ripple' } },

  // ---- THE STORMS (helixes) ----------------------------------------------------------
  { title: 'Updraft',               fam: 'helix', pal: 'core',    env: 'void',  cam: 'static', loop: 8,  x: { n: 22, twists: 3, funnel: true } },
  { title: 'Neon Cyclone',          fam: 'helix', pal: 'neon',    env: 'court', cam: 'static', loop: 8,  x: { n: 26, twists: 4, funnel: true } },
  { title: 'The Drain',             fam: 'helix', pal: 'graffiti',env: 'void',  cam: 'static', loop: 7,  x: { n: 18, twists: 2, funnel: true } },
  { title: 'Smoke Column',          fam: 'helix', pal: 'autumn',  env: 'void',  cam: 'sway',   loop: 9,  x: { n: 20, twists: 3 } },
  { title: 'Space Elevator',        fam: 'helix', pal: 'cosmic',  env: 'space', cam: 'static', loop: 9,  x: { n: 24, twists: 5, height: 10 } },
  { title: 'Double Rise',           fam: 'helix', pal: 'brand',   env: 'void',  cam: 'orbit',  loop: 8,  x: { n: 16, twists: 2 } },

  // ---- THE SYSTEMS (orbits) -----------------------------------------------------------
  { title: 'Home Court Nebula',     fam: 'orbits', pal: 'cosmic', env: 'space', cam: 'static', loop: 12, x: { moons: 3 } },
  { title: 'Two Moon Game',         fam: 'orbits', pal: 'neon',   env: 'space', cam: 'static', loop: 10, x: { moons: 2 } },
  { title: 'The Family',            fam: 'orbits', pal: 'core',   env: 'void',  cam: 'static', loop: 12, x: { moons: 3 } },
  { title: 'Pocket Universe',       fam: 'orbits', pal: 'brand',  env: 'void',  cam: 'static', loop: 10, x: { moons: 2, sun: 0.9 } },
  { title: 'Graffiti Galaxy',       fam: 'orbits', pal: 'graffiti', env: 'space', cam: 'sway', loop: 12, x: { moons: 3 } },
  { title: 'Harvest Moons',         fam: 'orbits', pal: 'autumn', env: 'space', cam: 'static', loop: 12, x: { moons: 3, sun: 1.4 } },

  // ---- THE CORRIDORS (rim tunnels) -------------------------------------------------------
  { title: 'Every Hoop At Once',    fam: 'tunnel', pal: 'neon',    env: 'void', cam: 'static', loop: 3, fov: 50, x: {} },
  { title: 'Cosmic Throat',         fam: 'tunnel', pal: 'cosmic',  env: 'space', cam: 'static', loop: 4, fov: 50, x: { r: 1.7 } },
  { title: 'Paper Tunnel',          fam: 'tunnel', pal: 'graffiti', env: 'void', cam: 'static', loop: 3, fov: 50, x: { nets: false } },
  { title: 'Maze Vein',             fam: 'tunnel', pal: 'core',    env: 'void', cam: 'static', loop: 4, fov: 50, x: { r: 1.3 } },

  // ---- THE DESCENTS (stairs) ----------------------------------------------------------------
  { title: 'Brownstone Bounce',     fam: 'stairs', pal: 'autumn',  env: 'void', cam: 'static', loop: 4, x: { bounces: 4 } },
  { title: 'Subway Steps',          fam: 'stairs', pal: 'neon',    env: 'city', cam: 'static', loop: 4, x: { bounces: 4 } },
  { title: 'Museum Stairs',         fam: 'stairs', pal: 'brand',   env: 'void', cam: 'static', loop: 5, x: { bounces: 5 } },
  { title: 'Teal Terraces',         fam: 'stairs', pal: 'core',    env: 'void', cam: 'static', loop: 4, x: { bounces: 4 } },

  // ---- THE WORLDS (planet hops) ----------------------------------------------------------------
  { title: 'Small World Workout',   fam: 'planet', pal: 'cosmic',  env: 'space', cam: 'static', loop: 9,  x: { hops: 12 } },
  { title: 'Sunrise Service',       fam: 'planet', pal: 'autumn',  env: 'void',  cam: 'static', loop: 9,  x: { hops: 10, pr: 3.6 } },
  { title: 'The Big Ball Theory',   fam: 'planet', pal: 'neon',    env: 'space', cam: 'sway',   loop: 10, x: { hops: 14 } },
  { title: 'Cream Planet',          fam: 'planet', pal: 'brand',   env: 'void',  cam: 'static', loop: 8,  x: { hops: 10, pr: 3.8 } },

  // ---- THE DECISIONS (rim rollers) ----------------------------------------------------------------
  { title: 'Heartbreaker',          fam: 'roller', pal: 'core',    env: 'court', cam: 'static', loop: 5, x: { laps: 2 } },
  { title: 'Overtime',              fam: 'roller', pal: 'neon',    env: 'city',  cam: 'static', loop: 6, x: { laps: 3 } },
  { title: 'In Or Out',             fam: 'roller', pal: 'brand',   env: 'void',  cam: 'static', loop: 5, x: { laps: 2 } },
  { title: 'The Long Second',       fam: 'roller', pal: 'autumn',  env: 'court', cam: 'sway',   loop: 7, x: { laps: 2 } },

  // ---- THE TRANSFERS (cradles) ----------------------------------------------------------------
  { title: 'Energy Transfer',       fam: 'cradle', pal: 'brand',   env: 'void', cam: 'static', loop: 4, x: { n: 5 } },
  { title: 'Bench Chemistry',       fam: 'cradle', pal: 'core',    env: 'void', cam: 'static', loop: 4, x: { n: 7 } },
  { title: 'Night Physics',         fam: 'cradle', pal: 'neon',    env: 'void', cam: 'static', loop: 4, x: { n: 5 } },

  // ---- THE CLOCKS (metronomes) ----------------------------------------------------------------
  { title: 'Shot Clock',            fam: 'metronome', pal: 'graffiti', env: 'void', cam: 'static', loop: 4, x: { ticks: 2 } },
  { title: 'Tempo Work',            fam: 'metronome', pal: 'brand',    env: 'void', cam: 'static', loop: 4, x: { ticks: 2 } },
  { title: 'Four Quarters',         fam: 'metronome', pal: 'neon',     env: 'void', cam: 'static', loop: 4, x: { ticks: 4 } },

  // ---- THE SPRINGS (fountains) ----------------------------------------------------------------
  { title: 'The Well',              fam: 'fountain', pal: 'core',     env: 'void',  cam: 'static', loop: 6, x: { n: 14 } },
  { title: 'Neon Geyser',           fam: 'fountain', pal: 'neon',     env: 'city',  cam: 'static', loop: 6, x: { n: 18 } },
  { title: 'Confetti Cannon',       fam: 'fountain', pal: 'graffiti', env: 'void',  cam: 'static', loop: 5, x: { n: 16, cycles: 3 } },
  { title: 'Leaf Fall, Reversed',   fam: 'fountain', pal: 'autumn',   env: 'void',  cam: 'static', loop: 7, x: { n: 12 } },
  { title: 'Solar Flare',           fam: 'fountain', pal: 'cosmic',   env: 'space', cam: 'sway',   loop: 7, x: { n: 20 } },
  { title: 'Cream Soda',            fam: 'fountain', pal: 'brand',    env: 'void',  cam: 'static', loop: 6, x: { n: 14 } },

  // ---- THE CIRCUS (juggles) ----------------------------------------------------------------
  { title: 'Three Ball Weave',      fam: 'juggle', pal: 'brand',    env: 'void', cam: 'static', loop: 4, x: { n: 3 } },
  { title: 'Five Ball Problem',     fam: 'juggle', pal: 'neon',     env: 'void', cam: 'static', loop: 5, x: { n: 5, height: 4 } },
  { title: 'Warmup Routine',        fam: 'juggle', pal: 'core',     env: 'court', cam: 'static', loop: 4, x: { n: 3 } },
  { title: 'Street Performer',      fam: 'juggle', pal: 'graffiti', env: 'city', cam: 'static', loop: 5, x: { n: 4 } },

  // ---- THE WEATHER (rain) ----------------------------------------------------------------
  { title: 'Ball Storm',            fam: 'rain', pal: 'core',     env: 'court', cam: 'static', loop: 5, x: { n: 16 } },
  { title: 'Orange Rain',           fam: 'rain', pal: 'brand',    env: 'void',  cam: 'static', loop: 5, x: { n: 14 } },
  { title: 'Night Shower',          fam: 'rain', pal: 'neon',     env: 'city',  cam: 'static', loop: 6, x: { n: 20 } },
  { title: 'Meteor Season',         fam: 'rain', pal: 'cosmic',   env: 'space', cam: 'static', loop: 6, x: { n: 18 } },
  { title: 'September Downpour',    fam: 'rain', pal: 'autumn',   env: 'void',  cam: 'static', loop: 5, x: { n: 16 } },
  { title: 'Paint Drops',           fam: 'rain', pal: 'graffiti', env: 'void',  cam: 'static', loop: 5, x: { n: 14 } },
  { title: 'The Forecast',          fam: 'rain', pal: 'core',     env: 'maze',  cam: 'sway',   loop: 6, x: { n: 18 } },
  { title: 'Free Throws From God',  fam: 'rain', pal: 'brand',    env: 'court', cam: 'static', loop: 6, x: { n: 12 } },

  // ---- THE COMETS (ribbon flights) ----------------------------------------------------------------
  { title: 'Signature Move',        fam: 'ribbon', pal: 'neon',     env: 'void',  cam: 'static', loop: 8,  x: { freq: [2, 3, 1] } },
  { title: 'Pen Stroke',            fam: 'ribbon', pal: 'brand',    env: 'void',  cam: 'static', loop: 8,  x: { freq: [1, 2, 2] } },
  { title: 'Comet Practice',        fam: 'ribbon', pal: 'cosmic',   env: 'space', cam: 'static', loop: 10, x: { freq: [3, 4, 2] } },
  { title: 'Ribbon Ceremony',       fam: 'ribbon', pal: 'graffiti', env: 'void',  cam: 'static', loop: 8,  x: { freq: [2, 5, 3] } },
  { title: 'Autumn Wind',           fam: 'ribbon', pal: 'autumn',   env: 'void',  cam: 'sway',   loop: 9,  x: { freq: [1, 3, 2] } },
  { title: 'The Scribble',          fam: 'ribbon', pal: 'core',     env: 'court', cam: 'static', loop: 8,  x: { freq: [3, 2, 4] } },
  { title: 'Night Calligraphy',     fam: 'ribbon', pal: 'neon',     env: 'city',  cam: 'static', loop: 9,  x: { freq: [2, 4, 1] } },
  { title: 'Orbital Sketch',        fam: 'ribbon', pal: 'cosmic',   env: 'space', cam: 'orbit',  loop: 10, x: { freq: [1, 2, 3] } },

  // ---- THE CROWNS (pulse rings) ----------------------------------------------------------------
  { title: 'The Crown',             fam: 'ring', pal: 'brand',    env: 'void',  cam: 'static', loop: 6, x: { n: 12 } },
  { title: 'Round Table',           fam: 'ring', pal: 'core',     env: 'court', cam: 'static', loop: 6, x: { n: 10 } },
  { title: 'Halo Drill',            fam: 'ring', pal: 'cosmic',   env: 'space', cam: 'static', loop: 7, x: { n: 14 } },
  { title: 'Cypher',                fam: 'ring', pal: 'graffiti', env: 'void',  cam: 'static', loop: 6, x: { n: 12, pulses: 3 } },
  { title: 'Crown From Above',      fam: 'ring', pal: 'neon',     env: 'void',  cam: 'static', loop: 6, x: { n: 16, top: true } },
  { title: 'Council Of Twelve',     fam: 'ring', pal: 'autumn',   env: 'void',  cam: 'orbit',  loop: 8, x: { n: 12 } },

  // ---- THE TOTEMS (kinetic columns) ----------------------------------------------------------------
  { title: 'The Totem',             fam: 'totem', pal: 'brand',    env: 'void', cam: 'static', loop: 5, x: { n: 5 } },
  { title: 'Balance Work',          fam: 'totem', pal: 'core',     env: 'court', cam: 'static', loop: 5, x: { n: 4 } },
  { title: 'Night Stack',           fam: 'totem', pal: 'neon',     env: 'void', cam: 'orbit',  loop: 6, x: { n: 6 } },
  { title: 'Stacked Seasons',       fam: 'totem', pal: 'autumn',   env: 'void', cam: 'static', loop: 5, x: { n: 5 } },
];
