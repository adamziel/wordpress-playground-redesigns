import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const designsDir = path.join(root, 'designs');
const indexPath = path.join(root, 'index.html');
const registryPath = path.join(root, 'designs.json');

function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

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
      model: meta.model || 'locked',
      visualIdiom: meta.visualIdiom || '',
      paneArrangement: meta.paneArrangement || '',
      flow: meta.flow || '',
    });
  }

  designs.sort((a, b) => a.num - b.num);
  return designs;
}

function renderCards(designs) {
  if (designs.length === 0) {
    return '<div class="empty">No designs registered yet.</div>';
  }

  return designs.map((design) => {
    const n = String(design.num).padStart(3, '0');
    const href = `designs/${esc(design.slug)}/`;
    const modelLabel = design.model === 'structural' ? 'Structural' : 'Locked model';
    return `<article class="design-card" id="design-${n}" data-model="${esc(design.model)}">
      <header>
        <div>
          <span class="number">${n}</span>
          <span class="model-pill model-${esc(design.model)}">${esc(modelLabel)}</span>
          <h2>${esc(design.title)}</h2>
        </div>
        <nav aria-label="Design ${n} links">
          <a href="${href}">Open</a>
          <a href="${href}README.md">Notes</a>
        </nav>
      </header>
      <p>${esc(design.summary)}</p>
      <dl>
        <div><dt>Visual idiom</dt><dd>${esc(design.visualIdiom)}</dd></div>
        <div><dt>Pane arrangement</dt><dd>${esc(design.paneArrangement)}</dd></div>
        <div><dt>Flow</dt><dd>${esc(design.flow)}</dd></div>
      </dl>
      <div class="frame-wrap">
        <iframe src="${href}" title="Design ${n}: ${esc(design.title)}" loading="lazy"></iframe>
      </div>
    </article>`;
  }).join('\n');
}

function renderIndex(designs) {
  const locked = designs.filter((d) => d.model === 'locked').length;
  const structural = designs.filter((d) => d.model === 'structural').length;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WordPress Playground v10 — Twenty Skins of the Quiet Rail</title>
  <meta name="description" content="20 WordPress Playground redesigns: 12 visual interpretations of the v7 #010 Quiet Rail model and 8 structural explorations.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      color-scheme: light;
      --bg: #F4EFE6;
      --paper: #FFFDF7;
      --ink: #0E0E0F;
      --ink-2: #2D2E33;
      --muted: #686B70;
      --line: #DCDAD2;
      --line-2: #C4C1B5;
      --wp: #2271B1;
      --locked: #0F766E;
      --structural: #B45309;
      --shadow: 0 24px 70px rgba(20, 20, 16, 0.10);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: var(--bg);
      color: var(--ink);
      font-feature-settings: "cv11", "ss01";
    }
    a { color: inherit; }
    .skip {
      position: absolute; left: 1rem; top: .5rem;
      transform: translateY(-160%);
      background: #111; color: #fff;
      padding: .7rem .9rem; border-radius: .4rem; z-index: 10;
    }
    .skip:focus { transform: translateY(0); }
    .shell { width: min(1720px, calc(100% - 32px)); margin: 0 auto; }
    .hero {
      padding: clamp(3rem, 7vw, 6rem) 0 2.5rem;
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(360px, .85fr);
      gap: clamp(2rem, 5vw, 5rem);
      align-items: end;
    }
    .kicker {
      display: inline-flex; align-items: center; gap: .6rem;
      font-family: 'JetBrains Mono', ui-monospace, monospace;
      font-size: .7rem; letter-spacing: .14em; text-transform: uppercase;
      color: var(--muted);
      border: 1px solid var(--line-2);
      background: var(--paper);
      padding: .42rem .62rem; border-radius: 999px;
    }
    .kicker::before {
      content: ""; width: .5rem; height: .5rem; border-radius: 50%;
      background: var(--wp); box-shadow: 0 0 0 4px rgba(34,113,177,.16);
    }
    h1 {
      margin: 1.2rem 0 1rem;
      font-size: clamp(2.8rem, 7vw, 7.6rem);
      line-height: .94;
      letter-spacing: -.025em;
      max-width: 12ch;
      font-weight: 700;
    }
    .lede {
      margin: 0; max-width: 64ch;
      font-size: clamp(1rem, 1.32vw, 1.22rem);
      line-height: 1.6; color: #36383D;
    }
    .hero-meta {
      margin-top: 1.6rem; display: flex; flex-wrap: wrap; gap: .55rem;
    }
    .tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: .72rem; letter-spacing: .04em;
      border: 1px solid var(--line-2);
      background: var(--paper);
      border-radius: 6px;
      padding: .4rem .58rem; color: #3C3E42;
    }
    .hero-panel {
      align-self: stretch; min-height: 480px;
      border: 1px solid var(--line-2);
      border-radius: 14px;
      background: var(--paper);
      box-shadow: var(--shadow);
      padding: 1.1rem;
      display: grid; grid-template-rows: auto 1fr; gap: 1rem;
    }
    .metric-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: .65rem; }
    .metric {
      border: 1px solid var(--line);
      border-radius: 9px; padding: .9rem;
      background: #FAF7EE; min-width: 0;
    }
    .metric b { display: block; font-size: 1.65rem; line-height: 1; font-weight: 700; letter-spacing: -.02em; }
    .metric span { display: block; margin-top: .4rem; color: var(--muted); font-size: .76rem; }
    .mini-browser {
      border-radius: 11px; background: #0E121C; color: #f5f5f3;
      overflow: hidden; display: grid; grid-template-rows: auto 1fr;
      border: 1px solid #1a1f2c;
    }
    .mini-bar {
      height: 38px; display: flex; align-items: center; gap: .55rem;
      padding: 0 .8rem; border-bottom: 1px solid rgba(255,255,255,.08);
    }
    .mini-dot { width: .6rem; height: .6rem; border-radius: 50%; background: #3FB950; box-shadow: 0 0 0 3px rgba(63,185,80,.18); }
    .mini-url {
      flex: 1; border: 1px solid rgba(255,255,255,.10);
      border-radius: 5px; height: 24px; display: flex; align-items: center;
      padding: 0 .6rem; color: #c1c8d8; font-size: .74rem;
      font-family: 'JetBrains Mono', monospace; min-width: 0;
    }
    .mini-pill {
      font-size: .65rem; letter-spacing: .08em; text-transform: uppercase;
      padding: .22rem .5rem; border-radius: 999px;
      background: rgba(63,185,80,.18); color: #B7F5C2; border: 1px solid rgba(63,185,80,.4);
    }
    .mini-content { display: grid; grid-template-columns: 60px 1fr 220px; min-height: 0; }
    .mini-rail {
      background: #0a0d14; border-right: 1px solid rgba(255,255,255,.06);
      padding: .8rem .4rem; display: flex; flex-direction: column; gap: .4rem; align-items: center;
    }
    .mini-rail .ico {
      width: 32px; height: 32px; border-radius: 7px;
      background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.06);
    }
    .mini-rail .ico.on { background: rgba(124,92,255,.22); border-color: rgba(167,139,250,.4); }
    .wp-preview { padding: 1.2rem; background: linear-gradient(135deg, #f6f7f7, #e8eef7); color: #1e293b; }
    .wp-preview strong { font-size: 1.35rem; }
    .wp-preview p { max-width: 30ch; color: #475569; font-size: .92rem; margin-top: .4rem; }
    .wp-preview .blocks { margin-top: 1.4rem; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .55rem; }
    .wp-preview .block { min-height: 56px; background: #fff; border: 1px solid #dbe0e6; border-radius: 5px; }
    .mini-side {
      border-left: 1px solid rgba(255,255,255,.08); padding: .8rem;
      display: grid; gap: .45rem; align-content: start; background: #131722;
    }
    .mini-side span {
      min-height: 28px; border: 1px solid rgba(255,255,255,.08);
      border-radius: 5px; padding: .42rem .55rem; color: #b6becd; font-size: .7rem; line-height: 1.2;
    }
    .mini-side .accent { background: rgba(124,92,255,.10); border-color: rgba(167,139,250,.30); color: #d9d0ff; }

    .toolbar {
      position: sticky; top: 0; z-index: 4;
      background: rgba(244, 239, 230, .92);
      backdrop-filter: blur(14px);
      border-block: 1px solid var(--line);
    }
    .toolbar-inner {
      width: min(1720px, calc(100% - 32px)); margin: 0 auto;
      min-height: 64px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
      padding: .8rem 0;
    }
    .filters { display: flex; flex-wrap: wrap; gap: .5rem; }
    .filters a, .toolbar .repo {
      text-decoration: none; border: 1px solid var(--line-2);
      background: var(--paper); border-radius: 6px;
      padding: .5rem .68rem; color: #34373c; font-size: .86rem;
    }
    .filters a:hover, .toolbar .repo:hover { border-color: var(--ink-2); }

    .content { padding: 2.5rem 0 5rem; }
    .group-head {
      margin: 2rem 0 1.4rem; display: flex; align-items: end; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
    }
    .group-head h2 { margin: 0; font-size: clamp(1.5rem, 2.8vw, 2.6rem); letter-spacing: -.02em; }
    .group-head p { margin: 0; color: var(--muted); max-width: 60ch; }

    .grid { display: grid; gap: 1.4rem; }
    .design-card {
      border: 1px solid var(--line-2); border-radius: 12px;
      background: var(--paper);
      box-shadow: 0 18px 50px rgba(15, 23, 42, .05);
      padding: clamp(1rem, 2vw, 1.5rem);
    }
    .design-card header {
      display: flex; justify-content: space-between; gap: 1rem; align-items: start;
      margin-bottom: .85rem;
    }
    .number {
      font-family: 'JetBrains Mono', monospace; color: var(--muted);
      margin-right: .55rem; font-size: .85rem;
    }
    .model-pill {
      display: inline-flex; border: 1px solid var(--line-2);
      border-radius: 999px; padding: .22rem .55rem;
      font-size: .72rem; letter-spacing: .04em; font-weight: 500;
      background: #f6f7f7; color: #2f3437;
    }
    .model-locked { color: var(--locked); border-color: #99D1CB; background: #ECF7F4; }
    .model-structural { color: var(--structural); border-color: #F2C792; background: #FDF1E1; }
    .design-card h2 {
      margin: .65rem 0 0;
      font-size: clamp(1.4rem, 2vw, 2.2rem);
      letter-spacing: -.015em; line-height: 1.05; font-weight: 700;
    }
    .design-card nav { display: flex; gap: .45rem; flex-wrap: wrap; justify-content: flex-end; }
    .design-card nav a {
      text-decoration: none; border: 1px solid var(--line-2);
      border-radius: 6px; padding: .5rem .65rem;
      background: var(--paper); color: #24262b; font-size: .84rem;
    }
    .design-card nav a:hover { border-color: var(--ink-2); }
    .design-card > p { max-width: 84ch; color: #4b4f55; line-height: 1.55; margin: 0; }
    dl {
      display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: .7rem; margin: 1.1rem 0;
    }
    dl div { border-top: 1px solid var(--line); padding-top: .6rem; }
    dt {
      font-size: .68rem; letter-spacing: .1em; text-transform: uppercase;
      color: var(--muted); margin-bottom: .3rem; font-weight: 500;
    }
    dd { margin: 0; color: #30343a; line-height: 1.45; font-size: .92rem; }
    .frame-wrap {
      height: min(80vh, 920px); min-height: 580px;
      border: 1px solid #cfd2d5; border-radius: 10px;
      overflow: hidden; background: #fff;
    }
    .frame-wrap iframe { width: 100%; height: 100%; border: 0; display: block; background: #fff; }
    .empty {
      border: 1px dashed var(--line-2); border-radius: 10px;
      padding: 2rem; color: var(--muted);
    }
    @media (max-width: 980px) {
      .hero { grid-template-columns: 1fr; align-items: start; }
      .hero-panel { min-height: 440px; }
      .mini-content { grid-template-columns: 50px 1fr; }
      .mini-side { display: none; }
      dl { grid-template-columns: 1fr; }
      .design-card header { flex-direction: column; }
      .design-card nav { justify-content: flex-start; }
      .frame-wrap { min-height: 620px; height: 72vh; }
    }
    @media (max-width: 520px) {
      h1 { font-size: clamp(2.2rem, 13vw, 3.6rem); max-width: 100%; }
      .metric-row { grid-template-columns: 1fr; }
      .hero-panel { padding: .8rem; }
      .wp-preview .blocks { grid-template-columns: 1fr; }
      .frame-wrap { min-height: 680px; }
    }
  </style>
</head>
<body>
  <a class="skip" href="#designs">Skip to designs</a>
  <main>
    <section class="shell hero">
      <div>
        <span class="kicker">v10 · Twenty skins of the Quiet Rail</span>
        <h1>One interaction model. Twenty ways to wear it.</h1>
        <p class="lede">v7 #010 was right about the chrome: a quiet 64px rail, one swap-content pane, a slim top capsule, a corner site widget, a modal Library overlay. v10 takes that locked interaction model and explores twenty visual interpretations of it — twelve that keep the model exactly and only change the look and pane arrangement, eight that reshape the rail itself while preserving iframe-primacy and the single secondary surface.</p>
        <div class="hero-meta">
          <span class="tag">${designs.length} designs</span>
          <span class="tag">${locked} locked model</span>
          <span class="tag">${structural} structural</span>
          <span class="tag">1440 × 900 · 390 × 844</span>
        </div>
      </div>
      <aside class="hero-panel" aria-label="Round status">
        <div class="metric-row">
          <div class="metric"><b>${designs.length}</b><span>designs in this round</span></div>
          <div class="metric"><b>${locked}</b><span>same model, new skin</span></div>
          <div class="metric"><b>${structural}</b><span>reshaped IA primitive</span></div>
        </div>
        <div class="mini-browser" aria-hidden="true">
          <div class="mini-bar">
            <span class="mini-dot"></span>
            <span class="mini-url">playground.wordpress.net/?site-slug=coffee-shop</span>
            <span class="mini-pill">Saved</span>
          </div>
          <div class="mini-content">
            <div class="mini-rail">
              <span class="ico"></span>
              <span class="ico on"></span>
              <span class="ico"></span>
              <span class="ico"></span>
              <span class="ico"></span>
            </div>
            <div class="wp-preview">
              <strong>Live WordPress site</strong>
              <p>The iframe is the loudest object. The rail and pane recede until you reach for them.</p>
              <div class="blocks"><span class="block"></span><span class="block"></span><span class="block"></span><span class="block"></span></div>
            </div>
            <div class="mini-side">
              <span class="accent">Sites · Manage · Blueprint · DB · Logs</span>
              <span>Start: Vanilla · WP PR · Gutenberg PR · GitHub · Blueprint URL · .zip</span>
              <span>Settings: PHP · WP · Language · Network · Multisite</span>
              <span>Apply + Reset with typed-phrase confirm</span>
              <span>Export to GitHub PR · Download .zip</span>
            </div>
          </div>
        </div>
      </aside>
    </section>
    <nav class="toolbar" aria-label="Filter">
      <div class="toolbar-inner">
        <div class="filters">
          <a href="#designs">All twenty</a>
          <a href="#group-locked">Locked model (12)</a>
          <a href="#group-structural">Structural explorations (8)</a>
          <a href="BRIEF.md">Brief</a>
          <a href="DIRECTIONS.md">Directions</a>
        </div>
        <a class="repo" href="https://github.com/adamziel/wordpress-playground-redesigns">GitHub repo</a>
      </div>
    </nav>
    <section class="shell content" id="designs">
      <div class="group-head" id="group-locked">
        <div>
          <h2>Locked model · twelve skins</h2>
          <p>Same IA as v7 #010 — left rail, single swap pane, slim top capsule, corner site widget, modal library, mobile bottom-bar mirror. Visual idiom + pane content arrangement are the only variables.</p>
        </div>
      </div>
      <div class="grid">
${renderCards(designs.filter(d => d.model === 'locked'))}
      </div>
      <div class="group-head" id="group-structural" style="margin-top:4rem;">
        <div>
          <h2>Structural explorations · eight reshapes</h2>
          <p>The rail primitive itself is reshaped: rotated to the top, mirrored right, unpinned as a floating dock, replaced by corner-anchored chips, dropped under the iframe as a DevTools dock, collapsed into a command palette, doubled as a split-rail, or merged into a persistent bottom sheet. iframe-primacy + one secondary surface still hold.</p>
        </div>
      </div>
      <div class="grid">
${renderCards(designs.filter(d => d.model === 'structural'))}
      </div>
    </section>
  </main>
</body>
</html>`;
}

const designs = await collectDesigns();
await fs.writeFile(registryPath, `${JSON.stringify(designs, null, 2)}\n`);
await fs.writeFile(indexPath, renderIndex(designs));
console.log(`Built v10 gallery with ${designs.length} designs (${designs.filter(d=>d.model==='locked').length} locked, ${designs.filter(d=>d.model==='structural').length} structural)`);
