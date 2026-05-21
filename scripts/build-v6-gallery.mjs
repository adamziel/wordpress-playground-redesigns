import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const v6Root = path.join(root, 'v6');
const designsDir = path.join(v6Root, 'designs');
const dataDir = path.join(v6Root, 'data');
const indexPath = path.join(v6Root, 'index.html');

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
    if (!entry.isDirectory() || !/^v6-design-\d{3}$/.test(entry.name)) continue;
    const dir = path.join(designsDir, entry.name);
    const metaPath = path.join(dir, 'meta.json');
    const htmlPath = path.join(dir, 'index.html');
    if (!(await exists(metaPath)) || !(await exists(htmlPath))) continue;
    const meta = await readJson(metaPath);
    designs.push({
      num: Number(entry.name.slice(-3)),
      title: meta.title || entry.name,
      summary: meta.summary || '',
      slug: entry.name,
      reviewed: Boolean(meta.reviewed),
      focus: meta.focus || [],
    });
  }

  designs.sort((a, b) => a.num - b.num);
  return designs;
}

function renderCards(designs) {
  if (designs.length === 0) {
    return '<div class="empty">The V6 design swarm is preparing the first redesigns. This gallery updates as designs integrate.</div>';
  }

  return `<div class="gallery">
${designs
  .map((design) => {
    const n = String(design.num).padStart(3, '0');
    const href = `designs/${esc(design.slug)}/`;
    return `        <article class="design-card" id="v6-${n}">
          <header>
            <div>
              <div class="number">V6 Design ${n}</div>
              <h2>${esc(design.title)}</h2>
            </div>
            <div class="links">
              <a href="${href}">Open</a>
              <a href="${href}README.md">Notes</a>
            </div>
          </header>
          <div class="frame-wrap">
            <iframe src="${href}" title="V6 Design ${n} - ${esc(design.title)}" loading="lazy"></iframe>
          </div>
          <p>${esc(design.summary)}</p>
        </article>`;
  })
  .join('\n')}
      </div>`;
}

function renderSidebar(designs) {
  if (designs.length === 0) {
    return `<aside class="browser-sidebar" aria-label="Design browser">
      <div class="browser-head">
        <a class="browser-brand" href="../">Playground Redesigns</a>
        <span>V6</span>
      </div>
      <div class="browser-empty">Designs will appear here as they integrate.</div>
    </aside>`;
  }

  return `<aside class="browser-sidebar" aria-label="Design browser">
    <div class="browser-head">
      <a class="browser-brand" href="../">Playground Redesigns</a>
      <span>V6</span>
    </div>
    <label class="browser-search">
      <span>Filter designs</span>
      <input id="designSearch" type="search" autocomplete="off" placeholder="Search title or number">
    </label>
    <nav class="browser-list" aria-label="Jump to design">
${designs
  .map((design) => {
    const n = String(design.num).padStart(3, '0');
    return `      <a class="browser-link" href="#v6-${n}" data-design-link data-filter-text="${esc(`${n} ${design.title} ${design.summary}`)}">
        <span class="browser-num">${n}</span>
        <span class="browser-title">${esc(design.title)}</span>
      </a>`;
  })
  .join('\n')}
    </nav>
  </aside>`;
}

function renderIndex(designs) {
  const count = designs.length;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WordPress Playground Redesigns V6</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f5f6f8;
      --fg: #11151a;
      --muted: #626a73;
      --line: #d9dee6;
      --panel: #fff;
      --accent: #3858e9;
      --accent-dark: #1f3fb8;
      --sidebar: 292px;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--fg);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      overflow-x: hidden;
    }
    .browser-sidebar {
      position: fixed;
      inset: 0 auto 0 0;
      z-index: 30;
      width: var(--sidebar);
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 16px 14px;
      background: rgba(255, 255, 255, 0.94);
      border-right: 1px solid var(--line);
      box-shadow: 10px 0 30px rgba(17, 21, 26, 0.06);
      backdrop-filter: blur(18px);
    }
    .browser-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 2px 2px 8px;
      border-bottom: 1px solid var(--line);
      color: var(--muted);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0;
      text-transform: uppercase;
    }
    .browser-brand {
      color: var(--fg);
      font-size: 13px;
      font-weight: 760;
      text-transform: none;
    }
    .browser-search {
      display: grid;
      gap: 7px;
      color: var(--muted);
      font-size: 12px;
      font-weight: 720;
    }
    .browser-search input {
      width: 100%;
      min-height: 38px;
      border: 1px solid var(--line);
      border-radius: 7px;
      background: #fff;
      color: var(--fg);
      padding: 8px 10px;
      font: inherit;
      font-size: 14px;
      outline: none;
    }
    .browser-search input:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(56, 88, 233, 0.14);
    }
    .browser-list {
      min-width: 0;
      max-width: 100%;
      display: grid;
      gap: 4px;
      overflow: auto;
      padding-right: 4px;
    }
    .browser-link {
      display: grid;
      grid-template-columns: 40px 1fr;
      align-items: center;
      gap: 8px;
      min-height: 38px;
      border: 1px solid transparent;
      border-radius: 7px;
      padding: 6px 8px;
      color: #2b333c;
      font-size: 13px;
      font-weight: 620;
    }
    .browser-link:hover {
      background: #f2f5f9;
      color: var(--accent-dark);
    }
    .browser-link.active {
      border-color: rgba(56, 88, 233, 0.28);
      background: rgba(56, 88, 233, 0.1);
      color: var(--accent-dark);
    }
    .browser-num {
      color: var(--muted);
      font-variant-numeric: tabular-nums;
      font-weight: 760;
    }
    .browser-link.active .browser-num {
      color: var(--accent-dark);
    }
    .browser-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .browser-empty {
      color: var(--muted);
      font-size: 14px;
      line-height: 1.45;
    }
    .page-shell {
      width: calc(100vw - var(--sidebar));
      min-width: 0;
      margin-left: var(--sidebar);
      overflow-x: hidden;
    }
    header.page {
      background: rgba(255, 255, 255, 0.92);
      border-bottom: 1px solid var(--line);
      position: sticky;
      top: 0;
      z-index: 10;
      backdrop-filter: blur(18px);
    }
    .wrap {
      width: 100%;
      margin: 0 auto;
      padding: 0 16px;
    }
    .preview-wrap {
      padding: 0;
    }
    .hero {
      padding: 28px 0 22px;
    }
    h1 {
      max-width: 100%;
      margin: 0;
      font-size: clamp(28px, 4vw, 46px);
      line-height: 1.05;
      letter-spacing: 0;
      overflow-wrap: break-word;
      text-wrap: balance;
    }
    .lede {
      max-width: 1040px;
      margin: 12px 0 0;
      color: var(--muted);
      line-height: 1.55;
      font-size: 16px;
    }
    .meta {
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
    }
    main {
      padding: 22px 0 48px;
    }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      margin-bottom: 18px;
      padding: 0 16px;
    }
    .toolbar nav {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
    }
    a {
      color: var(--accent-dark);
      text-decoration: none;
      font-weight: 640;
    }
    .gallery {
      display: grid;
      gap: 30px;
      width: 100%;
    }
    .design-card {
      background: var(--panel);
      border: 1px solid var(--line);
      border-left: 0;
      border-right: 0;
      border-radius: 0;
      overflow: hidden;
    }
    .design-card > header {
      min-height: 84px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      padding: 14px 16px;
      border-bottom: 1px solid var(--line);
    }
    .design-card h2 {
      margin: 4px 0 0;
      font-size: 18px;
      line-height: 1.25;
      letter-spacing: 0;
    }
    .number {
      color: var(--accent-dark);
      font-size: 13px;
      font-weight: 740;
    }
    .links {
      display: flex;
      gap: 8px;
    }
    .links a {
      border: 1px solid var(--line);
      border-radius: 7px;
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
      position: relative;
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
    .design-card p {
      margin: 0;
      padding: 14px 16px 16px;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.45;
    }
    .empty {
      border: 1px dashed var(--line);
      border-radius: 10px;
      background: #fff;
      color: var(--muted);
      padding: 28px;
    }
    @media (max-width: 760px) {
      .wrap { padding: 0 10px; }
      .preview-wrap { padding: 0; }
      .hero { padding: 24px 0 18px; }
      h1 { font-size: 29px; }
      .toolbar { flex-direction: column; align-items: flex-start; padding: 0 10px; }
      .design-card > header { min-height: 0; flex-direction: column; }
      .frame-wrap { height: 244px; }
    }
    @media (max-width: 980px) {
      .browser-sidebar {
        position: sticky;
        top: 0;
        width: 100%;
        height: auto;
        max-height: 158px;
        padding: 10px;
        border-right: 0;
        border-bottom: 1px solid var(--line);
        box-shadow: 0 8px 22px rgba(17, 21, 26, 0.08);
        overflow: hidden;
      }
      .browser-head {
        padding: 0;
        border-bottom: 0;
      }
      .browser-search {
        display: none;
      }
      .browser-list {
        width: 100%;
        min-width: 0;
        max-width: 100%;
        display: flex;
        gap: 6px;
        overflow-x: auto;
        padding: 0 0 3px;
      }
      .browser-link {
        grid-template-columns: auto;
        min-width: 74px;
        min-height: 36px;
        justify-items: center;
        padding: 6px 8px;
      }
      .browser-title {
        display: none;
      }
      .page-shell {
        width: 100%;
        margin-left: 0;
      }
      header.page {
        position: static;
      }
    }
  </style>
</head>
<body>
  ${renderSidebar(designs)}
  <div class="page-shell">
    <header class="page">
      <div class="wrap hero">
        <h1>WordPress Playground Redesigns V6</h1>
        <p class="lede">Forty additional redesigns guided by the V5 feedback: quiet-rail IA without the old skin, smart-resize interaction, Sites-widget expansion, and professional visual variety from TypeUI style skills. Each preview spans the page and renders with a desktop-width iframe viewport so layouts are not forced into mobile mode.</p>
        <div class="meta">
          <span class="pill">${count} / 40 V6 designs</span>
          <span class="pill">V5 feedback-led design families</span>
          <span class="pill">TypeUI-informed visual variety</span>
          <span class="pill">Static HTML/CSS/JS</span>
        </div>
      </div>
    </header>
    <main>
      <div class="wrap preview-wrap">
        <div class="toolbar">
          <strong>Full-Width Iframe Preview Gallery</strong>
          <nav>
            <a href="../">Original gallery</a>
            <a href="INSIGHTS.md">V6 insights</a>
            <a href="data/designs.json">V6 registry</a>
          </nav>
        </div>
        ${renderCards(designs)}
      </div>
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
    const designSections = designLinks
      .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
      .filter(Boolean);

    function setActiveDesign(id) {
      designLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }

    if (designSections.length > 0) {
      setActiveDesign(designSections[0].id);
      const observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
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
await fs.mkdir(dataDir, { recursive: true });
await fs.writeFile(path.join(dataDir, 'designs.json'), `${JSON.stringify(designs, null, 2)}\n`);
await fs.writeFile(indexPath, renderIndex(designs));
console.log(`V6 gallery built with ${designs.length} designs.`);
