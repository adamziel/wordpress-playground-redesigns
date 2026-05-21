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
      skill: meta.skill || '',
      skillSource: meta.skillSource || '',
      flow: meta.flow || '',
    });
  }

  designs.sort((a, b) => a.num - b.num);
  return designs;
}

function skillLabel(skill) {
  if (skill === 'awesome-design-md') return 'Awesome DESIGN.md';
  if (skill === 'taste-skill') return 'Taste Skill';
  if (skill === 'ui-ux-pro-max-skill') return 'UI/UX Pro Max';
  return skill || 'Unknown';
}

function renderCards(designs) {
  if (designs.length === 0) {
    return '<div class="empty">The supervised skill sessions have not produced designs yet.</div>';
  }

  return designs.map((design) => {
    const n = String(design.num).padStart(3, '0');
    const href = `designs/${esc(design.slug)}/`;
    return `<article class="design-card" id="design-${n}" data-skill="${esc(design.skill)}">
      <header>
        <div>
          <span class="number">${n}</span>
          <span class="skill-pill">${esc(skillLabel(design.skill))}</span>
          <h2>${esc(design.title)}</h2>
        </div>
        <nav aria-label="Design ${n} links">
          <a href="${href}">Open</a>
          <a href="${href}README.md">Notes</a>
        </nav>
      </header>
      <p>${esc(design.summary)}</p>
      <dl>
        <div><dt>Skill source</dt><dd>${esc(design.skillSource)}</dd></div>
        <div><dt>Flow</dt><dd>${esc(design.flow)}</dd></div>
      </dl>
      <div class="frame-wrap">
        <iframe src="${href}" title="Design ${n}: ${esc(design.title)}" loading="lazy"></iframe>
      </div>
    </article>`;
  }).join('\n');
}

function renderIndex(designs) {
  const counts = designs.reduce((map, design) => {
    map[design.skill] = (map[design.skill] || 0) + 1;
    return map;
  }, {});

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WordPress Playground v10 With Skills</title>
  <meta name="description" content="15 WordPress Playground redesigns produced with three external design skills, annotated by source skill.">
  <style>
    :root {
      color-scheme: light;
      --bg: #f7f7f4;
      --ink: #171717;
      --muted: #686b70;
      --line: #dcddd7;
      --panel: #ffffff;
      --wp: #3858e9;
      --awesome: #0f766e;
      --taste: #9f1239;
      --pro: #1d4ed8;
      --shadow: 0 24px 70px rgba(24, 24, 18, 0.10);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background:
        linear-gradient(90deg, rgba(0,0,0,.035) 1px, transparent 1px) 0 0 / 52px 52px,
        linear-gradient(180deg, #fff 0, var(--bg) 44rem);
      color: var(--ink);
    }
    a { color: inherit; }
    .skip {
      position: absolute;
      left: 1rem;
      top: .5rem;
      transform: translateY(-160%);
      background: #111;
      color: #fff;
      padding: .7rem .9rem;
      border-radius: .4rem;
      z-index: 10;
    }
    .skip:focus { transform: translateY(0); }
    .shell { width: min(1720px, calc(100% - 32px)); margin: 0 auto; }
    .hero {
      min-height: 74dvh;
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(360px, .95fr);
      gap: clamp(2rem, 5vw, 5rem);
      align-items: end;
      padding: clamp(3rem, 8vw, 7rem) 0 3rem;
      overflow: hidden;
    }
    .kicker {
      display: inline-flex;
      align-items: center;
      gap: .6rem;
      font-size: .78rem;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: var(--muted);
      border: 1px solid var(--line);
      background: rgba(255,255,255,.72);
      padding: .48rem .62rem;
      border-radius: .45rem;
    }
    .kicker::before {
      content: "";
      width: .55rem;
      height: .55rem;
      border-radius: 50%;
      background: var(--wp);
      box-shadow: 0 0 0 4px rgba(56,88,233,.12);
    }
    h1 {
      margin: 1.2rem 0 1rem;
      font-size: clamp(3rem, 7.2vw, 8.8rem);
      line-height: .91;
      letter-spacing: 0;
      max-width: 10ch;
      text-wrap: balance;
      overflow-wrap: anywhere;
    }
    .lede {
      margin: 0;
      max-width: 68ch;
      font-size: clamp(1rem, 1.4vw, 1.28rem);
      line-height: 1.62;
      color: #45484d;
      overflow-wrap: anywhere;
    }
    .hero-panel {
      align-self: stretch;
      min-height: 520px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(255,255,255,.76);
      box-shadow: var(--shadow);
      padding: 1rem;
      display: grid;
      grid-template-rows: auto 1fr;
      gap: 1rem;
    }
    .metric-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: .65rem;
    }
    .metric {
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: .85rem;
      background: #fbfbfa;
      min-width: 0;
    }
    .metric b { display: block; font-size: 1.35rem; line-height: 1; }
    .metric span { display: block; margin-top: .4rem; color: var(--muted); font-size: .78rem; }
    .mini-browser {
      border: 1px solid #cfd0ca;
      border-radius: 8px;
      background: #111318;
      color: #f7f7f4;
      overflow: hidden;
      display: grid;
      grid-template-rows: auto 1fr;
    }
    .mini-bar {
      height: 44px;
      display: flex;
      align-items: center;
      gap: .65rem;
      padding: 0 .8rem;
      border-bottom: 1px solid rgba(255,255,255,.1);
    }
    .mini-dot { width: .65rem; height: .65rem; border-radius: 50%; background: #60a5fa; }
    .mini-url {
      flex: 1;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 5px;
      height: 26px;
      display: flex;
      align-items: center;
      padding: 0 .7rem;
      color: #bac2cf;
      font-size: .78rem;
      min-width: 0;
    }
    .mini-content {
      display: grid;
      grid-template-columns: 1fr 220px;
      min-height: 0;
    }
    .wp-preview {
      padding: 1.2rem;
      background: linear-gradient(135deg, #f6f7f7, #e8eef7);
      color: #1e293b;
    }
    .wp-preview strong { font-size: 1.5rem; }
    .wp-preview p { max-width: 34ch; color: #475569; }
    .wp-preview .blocks {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: .7rem;
    }
    .wp-preview .block {
      min-height: 84px;
      background: #fff;
      border: 1px solid #dbe0e6;
      border-radius: 5px;
    }
    .mini-side {
      border-left: 1px solid rgba(255,255,255,.1);
      padding: .8rem;
      display: grid;
      gap: .55rem;
      align-content: start;
      background: #171b22;
    }
    .mini-side span {
      min-height: 36px;
      border: 1px solid rgba(255,255,255,.1);
      border-radius: 5px;
      padding: .6rem;
      color: #cbd5e1;
      font-size: .76rem;
    }
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 4;
      background: rgba(247,247,244,.88);
      backdrop-filter: blur(16px);
      border-block: 1px solid var(--line);
    }
    .toolbar-inner {
      width: min(1720px, calc(100% - 32px));
      margin: 0 auto;
      min-height: 66px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
    }
    .filters a,
    .toolbar .repo {
      text-decoration: none;
      border: 1px solid var(--line);
      background: #fff;
      border-radius: 5px;
      padding: .54rem .68rem;
      color: #34373c;
      font-size: .88rem;
    }
    .filters a:hover,
    .filters a:focus,
    .toolbar .repo:hover,
    .toolbar .repo:focus {
      border-color: #a6a9af;
      outline: none;
    }
    .content { padding: 2rem 0 5rem; }
    .skill-group {
      margin: 0 0 2rem;
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 1rem;
    }
    .skill-group h2 {
      margin: 0;
      font-size: clamp(1.5rem, 3vw, 3rem);
      letter-spacing: 0;
    }
    .skill-group p {
      margin: 0;
      color: var(--muted);
    }
    .grid {
      display: grid;
      gap: 1.25rem;
    }
    .design-card {
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(255,255,255,.84);
      box-shadow: 0 18px 50px rgba(15, 23, 42, .06);
      padding: clamp(1rem, 2vw, 1.5rem);
    }
    .design-card + .design-card { margin-top: 1.25rem; }
    .design-card header {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: start;
      margin-bottom: .8rem;
    }
    .number {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      color: var(--muted);
      margin-right: .55rem;
    }
    .skill-pill {
      display: inline-flex;
      border: 1px solid var(--line);
      border-radius: 999px;
      padding: .25rem .5rem;
      font-size: .75rem;
      color: #2f3437;
      background: #f6f7f7;
    }
    [data-skill="awesome-design-md"] .skill-pill { color: var(--awesome); }
    [data-skill="taste-skill"] .skill-pill { color: var(--taste); }
    [data-skill="ui-ux-pro-max-skill"] .skill-pill { color: var(--pro); }
    .design-card h2 {
      margin: .7rem 0 0;
      font-size: clamp(1.4rem, 2.2vw, 2.6rem);
      letter-spacing: 0;
      line-height: 1;
    }
    .design-card nav {
      display: flex;
      gap: .45rem;
      flex-wrap: wrap;
      justify-content: flex-end;
    }
    .design-card nav a {
      text-decoration: none;
      border: 1px solid var(--line);
      border-radius: 5px;
      padding: .48rem .62rem;
      background: #fff;
      color: #24262b;
      font-size: .86rem;
    }
    .design-card > p {
      max-width: 82ch;
      color: #4b4f55;
      line-height: 1.55;
    }
    dl {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: .7rem;
      margin: 1rem 0;
    }
    dl div {
      border-top: 1px solid var(--line);
      padding-top: .7rem;
    }
    dt {
      font-size: .72rem;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: .3rem;
    }
    dd { margin: 0; color: #30343a; line-height: 1.45; }
    .frame-wrap {
      height: min(78vh, 860px);
      min-height: 560px;
      border: 1px solid #cfd2d5;
      border-radius: 8px;
      overflow: hidden;
      background: #fff;
    }
    .frame-wrap iframe {
      width: 100%;
      height: 100%;
      border: 0;
      display: block;
      background: #fff;
    }
    .empty {
      border: 1px dashed var(--line);
      border-radius: 8px;
      padding: 2rem;
      color: var(--muted);
    }
    @media (max-width: 900px) {
      .hero { grid-template-columns: 1fr; min-height: auto; align-items: start; }
      .hero-panel { min-height: 470px; }
      .mini-content { grid-template-columns: 1fr; }
      .mini-side { display: none; }
      .toolbar-inner { align-items: start; flex-direction: column; padding: .8rem 0; }
      dl { grid-template-columns: 1fr; }
      .design-card header { flex-direction: column; }
      .design-card nav { justify-content: flex-start; }
      .frame-wrap { min-height: 620px; height: 72vh; }
    }
    @media (max-width: 520px) {
      .shell,
      .toolbar-inner { width: min(100% - 20px, 1720px); }
      h1 { font-size: clamp(2.2rem, 15vw, 3.6rem); max-width: 100%; }
      .metric-row { grid-template-columns: 1fr; }
      .hero-panel { padding: .65rem; }
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
        <span class="kicker">v10 with external design skills</span>
        <h1>WordPress Playground, pushed through three skill lenses.</h1>
        <p class="lede">This round supervises three separate Codex skill sessions and collects five prototypes from each. Every design is annotated by the skill source that shaped it and still preserves the full Playground feature surface.</p>
      </div>
      <aside class="hero-panel" aria-label="Round status">
        <div class="metric-row">
          <div class="metric"><b>${designs.length}</b><span>designs integrated</span></div>
          <div class="metric"><b>${counts['awesome-design-md'] || 0}</b><span>Awesome DESIGN.md</span></div>
          <div class="metric"><b>${(counts['taste-skill'] || 0) + (counts['ui-ux-pro-max-skill'] || 0)}</b><span>Taste + Pro Max</span></div>
        </div>
        <div class="mini-browser" aria-hidden="true">
          <div class="mini-bar">
            <span class="mini-dot"></span>
            <span class="mini-url">playground.wordpress.net/?blueprint=plugin-review</span>
            <span>Saved</span>
          </div>
          <div class="mini-content">
            <div class="wp-preview">
              <strong>Live WordPress site</strong>
              <p>The iframe remains the main object. Tools recede until the user asks for launch, manager, logs, or export.</p>
              <div class="blocks"><span class="block"></span><span class="block"></span><span class="block"></span><span class="block"></span></div>
            </div>
            <div class="mini-side">
              <span>Launch from PR, GitHub, Blueprint URL, or .zip</span>
              <span>Site Manager: Settings, Files, Blueprint, DB, Logs</span>
              <span>Apply+Reset confirmation with snapshot</span>
              <span>Export to GitHub PR or Download .zip</span>
            </div>
          </div>
        </div>
      </aside>
    </section>
    <nav class="toolbar" aria-label="Skill filters">
      <div class="toolbar-inner">
        <div class="filters">
          <a href="#designs">All</a>
          <a href="#awesome-design-md">Awesome DESIGN.md</a>
          <a href="#taste-skill">Taste Skill</a>
          <a href="#ui-ux-pro-max-skill">UI/UX Pro Max</a>
        </div>
        <a class="repo" href="https://github.com/adamziel/wordpress-playground-redesigns">GitHub repo</a>
      </div>
    </nav>
    <section class="shell content" id="designs">
      <div class="skill-group">
        <div>
          <h2>Annotated prototypes</h2>
          <p>Each card embeds the prototype and names the skill source and interaction model.</p>
        </div>
      </div>
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
console.log(`Built v10-with-skills gallery with ${designs.length} designs`);
