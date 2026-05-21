import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const v3Root = path.join(root, 'v3');
const designsDir = path.join(v3Root, 'designs');
const dataDir = path.join(v3Root, 'data');
const indexPath = path.join(v3Root, 'index.html');

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
    if (!entry.isDirectory() || !/^v3-design-\d{3}$/.test(entry.name)) continue;
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
    return '<div class="empty">The V3 design swarm is preparing the first redesigns. This gallery updates as designs integrate.</div>';
  }

  return `<div class="gallery">
${designs
  .map((design) => {
    const n = String(design.num).padStart(3, '0');
    const href = `designs/${esc(design.slug)}/`;
    return `        <article class="design-card" id="v3-${n}">
          <header>
            <div>
              <div class="number">V3 Design ${n}</div>
              <h2>${esc(design.title)}</h2>
            </div>
            <div class="links">
              <a href="${href}">Open</a>
              <a href="${href}README.md">Notes</a>
            </div>
          </header>
          <div class="frame-wrap">
            <iframe src="${href}" title="V3 Design ${n} - ${esc(design.title)}" loading="lazy"></iframe>
          </div>
          <p>${esc(design.summary)}</p>
        </article>`;
  })
  .join('\n')}
      </div>`;
}

function renderIndex(designs) {
  const count = designs.length;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WordPress Playground Redesigns V3</title>
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
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--fg);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
      margin: 0;
      font-size: clamp(28px, 4vw, 46px);
      line-height: 1.05;
      letter-spacing: 0;
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
      font-weight: 650;
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
      font-weight: 750;
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
      .toolbar { flex-direction: column; align-items: flex-start; padding: 0 10px; }
      .design-card > header { min-height: 0; flex-direction: column; }
      .frame-wrap { height: 244px; }
    }
  </style>
</head>
<body>
  <header class="page">
    <div class="wrap hero">
      <h1>WordPress Playground Redesigns V3</h1>
      <p class="lede">Fifty additional redesigns guided by feedback on mobile-first, calmer Figma-like, Epic-style launcher, macOS and Windows settings, glass, tabs, iPad multitasking, and inspector-first concepts. Each preview spans the page and renders with a desktop-width iframe viewport so layouts are not forced into mobile mode.</p>
      <div class="meta">
        <span class="pill">${count} / 50 V3 designs</span>
        <span class="pill">Feedback-led design families</span>
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
          <a href="INSIGHTS.md">V3 insights</a>
          <a href="data/designs.json">V3 registry</a>
        </nav>
      </div>
      ${renderCards(designs)}
    </div>
  </main>
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
  </script>
</body>
</html>
`;
}

const designs = await collectDesigns();
await fs.mkdir(dataDir, { recursive: true });
await fs.writeFile(path.join(dataDir, 'designs.json'), `${JSON.stringify(designs, null, 2)}\n`);
await fs.writeFile(indexPath, renderIndex(designs));
console.log(`V3 gallery built with ${designs.length} designs.`);
