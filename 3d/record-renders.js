// Records every motion piece to renders/ in YouTube (16:9), Reels (9:16), and
// square formats, then converts to mp4 + selected GIFs (requires ffmpeg).
//
// Run:  PW=$(find ~/.npm/_npx -path "*node_modules/playwright" -maxdepth 6 -type d | head -1) \
//       node record-renders.js "$PW"
// Needs the local server running at :4488 from the project root.

const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const pw = require(process.argv[2] || 'playwright');
const BASE = 'http://localhost:4488/3d';
const OUT = path.join(__dirname, 'renders');
fs.mkdirSync(OUT, { recursive: true });

// [name, file, seconds, formats]  — seconds = loop length + ~8% pad
// batch 2: the twelve new pieces (+ re-records of pieces that changed)
const JOBS = [
  ['the-shot',      'lob-loop.html',       6.6, ['16x9', '9x16']],   // now banks off the glass
  ['maze-run',      'maze-run.html',      13.0, ['16x9', '9x16']],
  ['neon-court',    'neon-court.html',    10.8, ['16x9', '9x16']],
  ['jungle-gym',    'jungle-gym.html',    10.8, ['16x9', '9x16']],
  ['galaxy',        'galaxy.html',        13.0, ['16x9', '9x16']],
  ['brand-intro',   'brand-intro.html',   13.5, ['16x9', '9x16']],
  ['vortex',        'vortex.html',         8.6, ['16x9', '9x16']],
  ['rim-tunnel',    'rim-tunnel.html',     6.4, ['16x9', '9x16', '1x1']],
  ['skyline-bounce','skyline-bounce.html', 6.4, ['16x9', '9x16']],
  ['rooftop-court', 'rooftop-court.html',  8.6, ['16x9', '9x16']],
  ['moon-bounce',   'moon-bounce.html',    9.6, ['16x9', '9x16']],
  ['jumbotron',     'jumbotron.html',      8.6, ['16x9', '1x1']],
  ['rain-of-balls', 'rain-of-balls.html',  4.4, ['16x9', '9x16']],
  ['the-wave',      'the-wave.html',       4.4, ['16x9']],
  ['newtons-cradle','newtons-cradle.html', 4.4, ['16x9', '1x1']],
  ['crossover',     'crossover.html',      6.6, ['16x9', '9x16']],
  ['stairs',        'stairs.html',         4.4, ['16x9', '9x16']],
  ['rim-roller',    'rim-roller.html',     5.5, ['16x9', '9x16']],
];
const SIZES = { '16x9': [1280, 720], '9x16': [720, 1280], '1x1': [720, 720] };

(async () => {
  const browser = await pw.chromium.launch();
  for (const [name, file, secs, formats] of JOBS) {
    for (const fmt of formats) {
      const [w, h] = SIZES[fmt];
      const ctx = await browser.newContext({
        viewport: { width: w, height: h },
        recordVideo: { dir: OUT, size: { width: w, height: h } },
      });
      const page = await ctx.newPage();
      await page.goto(`${BASE}/${file}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1500);            // warm-up: textures, first frames
      await page.waitForTimeout(secs * 1000);
      const video = page.video();
      await ctx.close();
      const tmp = await video.path();
      const dest = path.join(OUT, `${name}-${fmt}.webm`);
      fs.renameSync(tmp, dest);
      console.log('recorded', path.basename(dest));
    }
  }
  await browser.close();

  // mp4 masters (trim the warm-up), plus GIFs for the loop-native pieces
  for (const f of fs.readdirSync(OUT).filter(f => f.endsWith('.webm'))) {
    const mp4 = path.join(OUT, f.replace('.webm', '.mp4'));
    execSync(`ffmpeg -y -ss 1.5 -i "${path.join(OUT, f)}" -c:v libx264 -pix_fmt yuv420p -crf 20 -an "${mp4}"`, { stdio: 'ignore' });
    console.log('mp4', path.basename(mp4));
  }
  for (const g of ['the-shot-16x9', 'galaxy-16x9', 'seam-orbit-1x1', 'vortex-16x9', 'jumbotron-16x9', 'rim-tunnel-1x1']) {
    const src = path.join(OUT, `${g}.mp4`);
    if (fs.existsSync(src)) {
      execSync(`ffmpeg -y -i "${src}" -vf "fps=14,scale=480:-1:flags=lanczos" -loop 0 "${path.join(OUT, g + '.gif')}"`, { stdio: 'ignore' });
      console.log('gif', g + '.gif');
    }
  }
  console.log('DONE');
})().catch(e => { console.error(e); process.exit(1); });
