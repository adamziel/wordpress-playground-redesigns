import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const designsDir = path.join(root, 'designs');
const indexPath = path.join(root, 'index.html');
const registryPath = path.join(root, 'designs.json');

function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

async function exists(filePath) { try { await fs.access(filePath); return true; } catch { return false; } }
async function readJson(filePath) { return JSON.parse(await fs.readFile(filePath, 'utf8')); }

async function collectDesigns() {
  await fs.mkdir(designsDir, { recursive: true });
  const entries = await fs.readdir(designsDir, { withFileTypes: true });
  const designs = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || !/^\d{3}-[a-z0-9-]+$/.test(entry.name)) continue;
    const dir = path.join(designsDir, entry.name);
    const metaPath = path.join(dir, 'meta.json');
    const htmlPath = path.join(dir, 'index.html');
    if (!(await exists(metaPath)) || !(await exists(htmlPath))) continue;
    const meta = await readJson(metaPath);
    designs.push({
      num: Number(meta.num ?? entry.name.slice(0, 3)),
      slug: entry.name,
      title: meta.title || entry.name,
      summary: meta.summary || '',
      darkAccent: meta.darkAccent || '',
      typeface: meta.typeface || '',
      railTreatment: meta.railTreatment || '',
      paneArrangement: meta.paneArrangement || '',
      listPattern: meta.listPattern || '',
    });
  }
  designs.sort((a, b) => a.num - b.num);
  return designs;
}

function renderCards(designs) {
  if (designs.length === 0) return '<div class="empty">No designs registered yet.</div>';
  return designs.map((design) => {
    const n = String(design.num).padStart(3, '0');
    const href = `designs/${esc(design.slug)}/`;
    return `<article class="design-card" id="design-${n}">
      <header>
        <div>
          <span class="number">${n}</span>
          <h2>${esc(design.title)}</h2>
        </div>
        <nav aria-label="Design ${n} links">
          <a href="${href}">Open</a>
          <a href="${href}README.md">Notes</a>
        </nav>
      </header>
      <p>${esc(design.summary)}</p>
      <dl>
        <div><dt>List pattern</dt><dd>${esc(design.listPattern)}</dd></div>
        <div><dt>Accent</dt><dd>${esc(design.darkAccent)}</dd></div>
        <div><dt>Type</dt><dd>${esc(design.typeface)}</dd></div>
        <div><dt>Rail</dt><dd>${esc(design.railTreatment)}</dd></div>
      </dl>
      <div class="frame-wrap">
        <iframe src="${href}" title="Design ${n}: ${esc(design.title)}" loading="lazy"></iframe>
      </div>
    </article>`;
  }).join('\n');
}

function renderIndex(designs) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WordPress Playground v12 — Twenty Distinct Dark Pages</title>
  <meta name="description" content="Twenty dark-theme Playground prototypes, all locked-model, each rendering its lists in a distinct ontology.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,500&family=Public+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      color-scheme: dark;
      --bg: #0A0B0E; --bg-2: #121317; --bg-3: #1A1C22;
      --ink: #ECE9DF; --ink-2: #BFBDB4; --muted: #7E7E78;
      --line: #21232A; --line-2: #2D303A;
      --accent: #C9A24B;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; font-family: 'Public Sans', system-ui, sans-serif; background: var(--bg); color: var(--ink); font-feature-settings: "cv11"; }
    a { color: inherit; }
    .skip { position: absolute; left: 1rem; top: .5rem; transform: translateY(-160%); background: var(--ink); color: var(--bg); padding: .7rem .9rem; border-radius: .4rem; z-index: 10; }
    .skip:focus { transform: translateY(0); }
    .shell { width: min(1720px, calc(100% - 32px)); margin: 0 auto; }
    .hero { padding: clamp(3rem, 7vw, 6rem) 0 2.5rem; max-width: 880px; }
    .kicker { font-family: 'Newsreader', serif; font-style: italic; font-size: .92rem; color: var(--ink-2); letter-spacing: .01em; }
    h1 { font-family: 'Newsreader', serif; margin: .55rem 0 1.3rem; font-size: clamp(2.4rem, 5.4vw, 5.4rem); line-height: 1.02; letter-spacing: -.022em; font-weight: 500; }
    .lede { margin: 0; max-width: 64ch; font-size: clamp(1rem, 1.18vw, 1.16rem); line-height: 1.65; color: var(--ink-2); }
    .hero-meta { margin-top: 1.6rem; display: flex; flex-wrap: wrap; gap: .55rem; }
    .tag { font-size: .78rem; letter-spacing: .04em; border: 1px solid var(--line-2); border-radius: 4px; padding: .42rem .58rem; color: var(--ink-2); }
    .toolbar { position: sticky; top: 0; z-index: 4; background: rgba(10, 11, 14, .88); backdrop-filter: blur(14px); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-top: 1.4rem; }
    .toolbar-inner { width: min(1720px, calc(100% - 32px)); margin: 0 auto; min-height: 56px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding: .7rem 0; }
    .toolbar a { text-decoration: none; border: 1px solid var(--line-2); border-radius: 4px; padding: .42rem .62rem; color: var(--ink-2); font-size: .85rem; }
    .toolbar a:hover { border-color: var(--ink-2); color: var(--ink); }
    .links { display: flex; gap: .5rem; flex-wrap: wrap; }
    .content { padding: 2.5rem 0 5rem; }
    .grid { display: grid; gap: 2rem; }
    .design-card { border-top: 1px solid var(--line); padding: 2rem 0 .5rem; }
    .design-card header { display: flex; justify-content: space-between; gap: 1rem; align-items: start; margin-bottom: .8rem; }
    .number { font-family: 'Newsreader', serif; font-style: italic; color: var(--muted); font-size: 1rem; margin-right: .5rem; vertical-align: baseline; }
    .design-card h2 { display: inline; font-family: 'Newsreader', serif; font-size: clamp(1.4rem, 2.2vw, 2.4rem); letter-spacing: -.015em; line-height: 1.05; font-weight: 500; margin: 0; }
    .design-card nav { display: flex; gap: .45rem; flex-wrap: wrap; justify-content: flex-end; }
    .design-card nav a { text-decoration: none; border: 1px solid var(--line-2); border-radius: 4px; padding: .48rem .65rem; color: var(--ink-2); font-size: .84rem; }
    .design-card nav a:hover { border-color: var(--ink-2); color: var(--ink); }
    .design-card > p { max-width: 84ch; color: var(--ink-2); line-height: 1.6; margin: 0; font-size: 1rem; }
    dl { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: .9rem 1.4rem; margin: 1.2rem 0 1.4rem; }
    dt { font-size: .68rem; letter-spacing: .11em; text-transform: uppercase; color: var(--muted); margin-bottom: .25rem; }
    dd { margin: 0; color: var(--ink); line-height: 1.45; font-size: .92rem; }
    .frame-wrap { height: min(80vh, 920px); min-height: 580px; border: 1px solid var(--line-2); border-radius: 4px; overflow: hidden; background: var(--bg-2); }
    .frame-wrap iframe { width: 100%; height: 100%; border: 0; display: block; background: var(--bg-2); }
    .empty { border: 1px dashed var(--line-2); border-radius: 6px; padding: 2rem; color: var(--muted); }
    @media (max-width: 980px) {
      dl { grid-template-columns: 1fr 1fr; }
      .design-card header { flex-direction: column; }
      .design-card nav { justify-content: flex-start; }
      .frame-wrap { min-height: 620px; height: 72vh; }
    }
    @media (max-width: 640px) { dl { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <a class="skip" href="#designs">Skip to designs</a>
  <main>
    <section class="shell hero">
      <div class="kicker">v12 · twenty distinct dark pages</div>
      <h1>Twenty list-shapes, not twenty colors of the same row.</h1>
      <p class="lede">v11 was rejected for visual sameness — every design rendered saved sites and start routes as the same icon-left + two-rows-of-text card. v12 fixes the underlying failure: each of the twenty designs invents a distinct list-rendering ontology — ledgers, departure boards, postcards, stamps, book spines, wall labels, hand-lettered ledgers, lookbooks, liner notes, inscriptions, variable-axis specimens, stencil plates, size-as-data hierarchies, marquee letters, plan-view rectangles, jersey numerals, broadsheet mastheads, Bodoni hairlines, tabular figures. Same locked interaction model, same dark constraints. Twenty different things to look at.</p>
      <div class="hero-meta">
        <span class="tag">${designs.length} prototypes</span>
        <span class="tag">all locked model</span>
        <span class="tag">dark only</span>
        <span class="tag">${designs.length} distinct list patterns</span>
        <span class="tag">1440 × 900 + 390 × 844</span>
      </div>
    </section>
    <nav class="toolbar" aria-label="Filter">
      <div class="toolbar-inner">
        <div class="links">
          <a href="#designs">All twenty</a>
          <a href="BRIEF.md">Brief</a>
          <a href="DIRECTIONS.md">Directions</a>
          <a href="../v11/">v11</a>
        </div>
        <a class="repo" href="https://github.com/adamziel/wordpress-playground-redesigns">GitHub repo</a>
      </div>
    </nav>
    <section class="shell content" id="designs">
      <div class="grid">
${renderCards(designs)}
      </div>
    </section>
  </main>
</body>
</html>`;
}

const designs = await collectDesigns();
await fs.writeFile(registryPath, `${JSON.stringify(designs, null, 2)}\n`);
await fs.writeFile(indexPath, renderIndex(designs));
console.log(`Built v12 gallery with ${designs.length} designs`);
