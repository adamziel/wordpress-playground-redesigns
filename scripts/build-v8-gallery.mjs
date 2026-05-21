import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const v8Root = path.join(root, 'v8');
const designsDir = path.join(v8Root, 'designs');
const indexPath = path.join(v8Root, 'index.html');
const registryPath = path.join(v8Root, 'designs.json');

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

function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
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
      title: meta.title || entry.name,
      summary: meta.summary || '',
      slug: entry.name,
      system: meta.system || '',
    });
  }

  designs.sort((a, b) => a.num - b.num);
  return designs;
}

function renderBrowser(designs) {
  if (designs.length === 0) {
    return `<aside class="browser"><strong>V8 Browser</strong><p>Designs will appear here.</p></aside>`;
  }

  return `<aside class="browser" aria-label="V8 design browser">
    <div class="browser-title">
      <a href="../">Playground Redesigns</a>
      <span>V8</span>
    </div>
    <input id="designSearch" type="search" autocomplete="off" placeholder="Filter by number, title, system">
    <nav>
${designs.map((design) => {
  const n = String(design.num).padStart(3, '0');
  return `      <a href="#v8-${n}" data-design-link data-filter-text="${esc(`${n} ${design.title} ${design.system} ${design.summary}`)}">
        <span>${n}</span>
        <b>${esc(design.title)}</b>
      </a>`;
}).join('\n')}
    </nav>
  </aside>`;
}

function renderCards(designs) {
  if (designs.length === 0) {
    return `<section class="empty">V8 variations are being produced.</section>`;
  }

  return `<section class="gallery">
${designs.map((design) => {
  const n = String(design.num).padStart(3, '0');
  const href = `designs/${esc(design.slug)}/`;
  return `    <article class="design" id="v8-${n}">
      <header>
        <div>
          <div class="num">V8 Design ${n}${design.system ? ` · ${esc(design.system)}` : ''}</div>
          <h2>${esc(design.title)}</h2>
        </div>
        <div class="links">
          <a href="${href}">Open</a>
          <a href="${href}README.md">Notes</a>
        </div>
      </header>
      <div class="frame-wrap"><iframe src="${href}" title="V8 Design ${n} - ${esc(design.title)}" loading="lazy"></iframe></div>
      <p>${esc(design.summary)}</p>
    </article>`;
}).join('\n')}
  </section>`;
}

function renderIndex(designs) {
  const count = designs.length;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WordPress Playground Redesigns V8</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f5f6f8;
      --fg: #11151a;
      --muted: #626a73;
      --line: #d9dee6;
      --panel: #fff;
      --accent: #3858e9;
      --accent-dark: #203fb7;
      --browser: 300px;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      overflow-x: hidden;
      background: var(--bg);
      color: var(--fg);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    a { color: var(--accent-dark); text-decoration: none; font-weight: 650; }
    .browser {
      position: fixed;
      inset: 0 auto 0 0;
      z-index: 20;
      width: var(--browser);
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 16px 14px;
      border-right: 1px solid var(--line);
      background: rgba(255,255,255,.94);
      box-shadow: 10px 0 32px rgba(17,21,26,.06);
      backdrop-filter: blur(18px);
    }
    .browser-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--line);
      padding-bottom: 10px;
      color: var(--muted);
      font-size: 12px;
      font-weight: 760;
      text-transform: uppercase;
    }
    .browser-title a {
      color: var(--fg);
      text-transform: none;
      font-size: 13px;
    }
    .browser input {
      min-height: 38px;
      width: 100%;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 8px 10px;
      font: inherit;
      outline: none;
    }
    .browser input:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(56,88,233,.14);
    }
    .browser nav {
      display: grid;
      gap: 5px;
      overflow: auto;
      padding-right: 4px;
    }
    .browser nav a {
      display: grid;
      grid-template-columns: 40px 1fr;
      gap: 8px;
      align-items: center;
      min-height: 40px;
      border: 1px solid transparent;
      border-radius: 8px;
      color: #26303a;
      padding: 7px 8px;
      font-size: 13px;
    }
    .browser nav a span {
      color: var(--muted);
      font-variant-numeric: tabular-nums;
      font-weight: 780;
    }
    .browser nav a b {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 650;
    }
    .browser nav a:hover,
    .browser nav a.active {
      background: rgba(56,88,233,.1);
      border-color: rgba(56,88,233,.28);
      color: var(--accent-dark);
    }
    .shell {
      width: calc(100vw - var(--browser));
      margin-left: var(--browser);
      min-width: 0;
      overflow-x: hidden;
    }
    .hero {
      padding: 28px 18px 22px;
      background: rgba(255,255,255,.88);
      border-bottom: 1px solid var(--line);
      position: sticky;
      top: 0;
      z-index: 10;
      backdrop-filter: blur(18px);
    }
    h1 {
      max-width: 1180px;
      margin: 0;
      font-size: clamp(30px, 4vw, 52px);
      line-height: 1.02;
      letter-spacing: 0;
      text-wrap: balance;
      overflow-wrap: break-word;
    }
    .lede {
      max-width: 1120px;
      margin: 12px 0 0;
      color: var(--muted);
      line-height: 1.55;
      font-size: 16px;
      overflow-wrap: break-word;
    }
    .pills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 18px;
    }
    .pill {
      border: 1px solid var(--line);
      background: #fff;
      border-radius: 999px;
      padding: 7px 10px;
      color: #26303a;
      font-size: 13px;
      max-width: 100%;
    }
    main { padding: 20px 0 52px; }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 0 18px 18px;
    }
    .toolbar nav {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      max-width: 100%;
    }
    .gallery {
      display: grid;
      gap: 32px;
      width: 100%;
    }
    .design {
      background: var(--panel);
      border: 1px solid var(--line);
      border-left: 0;
      border-right: 0;
      overflow: hidden;
    }
    .design > header {
      min-height: 84px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 18px;
      padding: 15px 18px;
      border-bottom: 1px solid var(--line);
    }
    .num {
      color: var(--accent-dark);
      font-size: 13px;
      font-weight: 780;
    }
    h2 {
      margin: 4px 0 0;
      font-size: 19px;
      line-height: 1.22;
    }
    .links {
      display: flex;
      gap: 8px;
    }
    .links a {
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 7px 10px;
      font-size: 13px;
      background: #fff;
    }
    .frame-wrap {
      width: 100%;
      height: clamp(560px, 62.5vw, 900px);
      overflow: hidden;
      background: #edf1f5;
      border-bottom: 1px solid var(--line);
    }
    iframe {
      width: 1440px;
      height: 900px;
      max-width: none;
      display: block;
      border: 0;
      background: #fff;
      transform-origin: 0 0;
    }
    .design p,
    .empty {
      margin: 0;
      padding: 14px 18px 17px;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.45;
    }
    @media (max-width: 980px) {
      .browser {
        position: sticky;
        top: 0;
        width: 100%;
        height: auto;
        max-height: 150px;
        padding: 10px;
        border-right: 0;
        border-bottom: 1px solid var(--line);
        overflow: hidden;
      }
      .browser-title { border-bottom: 0; padding-bottom: 0; }
      .browser input { display: none; }
      .browser nav {
        display: flex;
        gap: 6px;
        overflow-x: auto;
        max-width: 100%;
        padding-bottom: 3px;
      }
      .browser nav a {
        display: grid;
        grid-template-columns: auto;
        justify-items: center;
        min-width: 74px;
      }
      .browser nav a b { display: none; }
      .shell {
        width: 100%;
        margin-left: 0;
      }
      .hero { position: static; padding: 24px 10px 18px; }
      h1 { font-size: 29px; }
      .lede { max-width: calc(100vw - 20px); }
      .pills { max-width: 100%; }
      .pill { white-space: normal; }
      .toolbar { align-items: flex-start; flex-direction: column; padding: 0 10px 16px; }
      .toolbar nav { overflow-x: auto; flex-wrap: nowrap; width: 100%; padding-bottom: 3px; }
      .toolbar nav a { flex: 0 0 auto; }
      .design > header { min-height: 0; flex-direction: column; padding: 14px 10px; }
      .frame-wrap { height: 244px; }
    }
  </style>
</head>
<body>
  ${renderBrowser(designs)}
  <div class="shell">
    <header class="hero">
      <h1>WordPress Playground Redesigns V8</h1>
      <p class="lede">Ten look-and-feel variations on V7's Quiet rail · depth tiers structure: live iframe first, quiet rail, one loud pane, persistent Sites widget, and depth as visual hierarchy only.</p>
      <div class="pills">
        <span class="pill">${count} / 10 V8 designs</span>
        <span class="pill">Quiet rail structure</span>
        <span class="pill">Depth tiers as style</span>
        <span class="pill">Design-system exploration</span>
      </div>
    </header>
    <main>
      <div class="toolbar">
        <strong>V8 Preview Gallery</strong>
        <nav>
          <a href="../v7/designs/010-quiet-rail-depth-tiers/">V7 reference</a>
          <a href="ANALYSIS.md">Analysis</a>
          <a href="DESIGN_BRIEF.md">Brief</a>
          <a href="designs.json">Registry</a>
        </nav>
      </div>
      ${renderCards(designs)}
    </main>
  </div>
  <script>
    const previewWidth = 1440;
    const previewHeight = 900;

    function fitPreview(wrap) {
      const iframe = wrap.querySelector('iframe');
      if (!iframe) return;
      const scale = Math.max(0.18, wrap.clientWidth / previewWidth);
      wrap.style.height = Math.round(previewHeight * scale) + 'px';
      iframe.style.width = previewWidth + 'px';
      iframe.style.height = previewHeight + 'px';
      iframe.style.transform = 'scale(' + scale + ')';
    }

    function fitAllPreviews() {
      document.querySelectorAll('.frame-wrap').forEach(fitPreview);
    }

    window.addEventListener('resize', fitAllPreviews, { passive: true });
    window.addEventListener('load', fitAllPreviews);
    fitAllPreviews();

    const designLinks = Array.from(document.querySelectorAll('[data-design-link]'));
    const designSearch = document.getElementById('designSearch');
    const designSections = designLinks.map((link) => document.getElementById(link.getAttribute('href').slice(1))).filter(Boolean);

    function setActiveDesign(id) {
      designLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === '#' + id));
    }

    if (designSections.length > 0) {
      setActiveDesign(designSections[0].id);
      const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveDesign(visible.target.id);
      }, { rootMargin: '-20% 0px -55% 0px', threshold: [0.08, 0.2, 0.4, 0.6] });
      designSections.forEach((section) => observer.observe(section));
    }

    if (designSearch) {
      designSearch.addEventListener('input', () => {
        const query = designSearch.value.trim().toLowerCase();
        designLinks.forEach((link) => {
          link.hidden = query.length > 0 && !link.dataset.filterText.toLowerCase().includes(query);
        });
      });
    }
  </script>
</body>
</html>
`;
}

const designs = await collectDesigns();
await fs.writeFile(registryPath, `${JSON.stringify(designs, null, 2)}\n`);
await fs.writeFile(indexPath, renderIndex(designs));
console.log(`V8 gallery built with ${designs.length} designs.`);
