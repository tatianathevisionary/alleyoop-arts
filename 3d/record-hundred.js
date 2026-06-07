// Records all 100 generative pieces (piece.html?id=1..100) to renders/hundred/
// in 16:9, then converts to mp4. Run with the local server up:
//   node record-hundred.js "$PLAYWRIGHT_MODULE_PATH"

const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const pw = require(process.argv[2] || 'playwright');
const { PIECES_META } = (() => {
  // loop lengths only — parsed from pieces.js without an ESM loader
  const src = fs.readFileSync(path.join(__dirname, 'pieces.js'), 'utf8');
  const loops = [...src.matchAll(/loop:\s*(\d+)/g)].map(m => parseInt(m[1], 10));
  const titles = [...src.matchAll(/title:\s*'([^']+)'/g)].map(m => m[1]);
  return { PIECES_META: loops.map((loop, i) => ({ loop, title: titles[i] })) };
})();

const BASE = 'http://localhost:4488/3d';
const OUT = path.join(__dirname, 'renders', 'hundred');
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await pw.chromium.launch();
  for (let id = 1; id <= PIECES_META.length; id++) {
    const { loop, title } = PIECES_META[id - 1];
    const slug = String(id + 22).padStart(3, '0') + '-' + title.toLowerCase()
      .replace(/&apos;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const dest = path.join(OUT, `${slug}.webm`);
    if (fs.existsSync(dest)) { console.log('skip', slug); continue; }
    const ctx = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      recordVideo: { dir: OUT, size: { width: 1280, height: 720 } },
    });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/piece.html?id=${id}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200 + (loop + 0.5) * 1000);
    const video = page.video();
    await ctx.close();
    fs.renameSync(await video.path(), dest);
    console.log('recorded', slug);
  }
  await browser.close();

  for (const f of fs.readdirSync(OUT).filter(f => f.endsWith('.webm'))) {
    const mp4 = path.join(OUT, f.replace('.webm', '.mp4'));
    if (fs.existsSync(mp4)) continue;
    execSync(`ffmpeg -y -ss 1.2 -i "${path.join(OUT, f)}" -c:v libx264 -pix_fmt yuv420p -crf 21 -an "${mp4}"`, { stdio: 'ignore' });
    console.log('mp4', path.basename(mp4));
  }
  console.log('DONE — 100 pieces rendered');
})().catch(e => { console.error(e); process.exit(1); });
