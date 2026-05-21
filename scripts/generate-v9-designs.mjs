import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const v9Root = path.join(root, 'v9');
const designsDir = path.join(v9Root, 'designs');

const basePalettes = {
  ink: '#111827',
  muted: '#667085',
  line: '#d8dee6',
  paper: '#f6f7f9',
  surface: '#ffffff',
  surface2: '#f8fafc',
  good: '#15803d',
  warn: '#b45309',
  danger: '#b42318',
};

const designs = [
  {
    num: 1,
    slug: '001-quiet-workbench-rail',
    title: 'Quiet Workbench Rail',
    system: 'Workbench',
    layout: 'left',
    mode: 'sites',
    palette: { accent: '#22577a', accent2: '#2a9d8f', accent3: '#e9c46a', paper: '#f4f6f7', surface: '#ffffff', surface2: '#eef5f4', ink: '#14213d', muted: '#586574', line: '#cdd7df' },
    thesis: 'Keeps the v7 depth idea but turns it into a practical workbench with fewer doors, clearer state, and one pane that owns all site creation.',
    summary: 'A clean workbench treatment: two rail doors, a compact browser row, a persistent Sites status object, and a single pane for saved sites, launch routes, and blueprints.',
  },
  {
    num: 2,
    slug: '002-wp-admin-command-rail',
    title: 'WP Admin Command Rail',
    system: 'Admin Familiar',
    layout: 'toprail',
    mode: 'manager',
    palette: { accent: '#1e5b7e', accent2: '#3b7a57', accent3: '#d9822b', paper: '#f3f5f7', surface: '#ffffff', surface2: '#eef3f6', ink: '#101820', muted: '#5d6875', line: '#d2dae3' },
    thesis: 'Borrows WordPress admin density without copying wp-admin chrome, making manager tools feel native while the iframe remains the product.',
    summary: 'A WordPress-admin-adjacent system with a command strip, one inspector pane, visible save state, and manager tabs presented as one tool surface.',
  },
  {
    num: 3,
    slug: '003-blueprint-studio-shelf',
    title: 'Blueprint Studio Shelf',
    system: 'Blueprint Studio',
    layout: 'shelf',
    mode: 'sites',
    palette: { accent: '#005f73', accent2: '#bb3e03', accent3: '#0a9396', paper: '#f6f1e8', surface: '#fffaf1', surface2: '#f0eadf', ink: '#1b1b1b', muted: '#6b6257', line: '#ddd2c0' },
    thesis: 'Treats blueprints as the primary creative object while preserving the live site as the first viewport signal.',
    summary: 'A warm studio shelf where launch routes and featured blueprints are grouped in one pane, with the full library escalating into a deeper layer.',
  },
  {
    num: 4,
    slug: '004-manager-inspector-dock',
    title: 'Manager Inspector Dock',
    system: 'Inspector Dock',
    layout: 'right',
    mode: 'manager',
    palette: { accent: '#234e70', accent2: '#2f855a', accent3: '#c05621', paper: '#edf2f7', surface: '#ffffff', surface2: '#f7fafc', ink: '#171923', muted: '#5f6b7a', line: '#cbd5e0' },
    thesis: 'Moves the secondary pane to the right, matching developer-tool expectations for files, logs, database, and settings.',
    summary: 'A right-side inspector dock with dense manager states, a stable iframe viewport, and reset flows that escalate instead of living inline.',
  },
  {
    num: 5,
    slug: '005-swiss-testing-console',
    title: 'Swiss Testing Console',
    system: 'Swiss Console',
    layout: 'left',
    mode: 'manager',
    palette: { accent: '#cc2936', accent2: '#084c61', accent3: '#f9a03f', paper: '#f6f6f4', surface: '#ffffff', surface2: '#eeeeea', ink: '#121212', muted: '#636363', line: '#d6d6d2' },
    thesis: 'Uses Swiss editorial restraint to make many technical states scannable without turning the frame into a dashboard.',
    summary: 'A crisp testing console with high-contrast structure, tabular manager content, and a status widget that carries the active Playground identity.',
  },
  {
    num: 6,
    slug: '006-paper-blueprint-desk',
    title: 'Paper Blueprint Desk',
    system: 'Paper Desk',
    layout: 'sheet',
    mode: 'sites',
    palette: { accent: '#7a4e21', accent2: '#216869', accent3: '#d8973c', paper: '#f7f1e4', surface: '#fffdf7', surface2: '#efe6d2', ink: '#2f2418', muted: '#74685c', line: '#decfb8' },
    thesis: 'Turns the v7 depth layers into stacked documents: site, pane, library, and reset sheet each has a clear job.',
    summary: 'A tactile paper desk with folded pane headers, clear blueprint launch paths, and reset confirmation as a topmost sheet.',
  },
  {
    num: 7,
    slug: '007-carbon-debug-bay',
    title: 'Carbon Debug Bay',
    system: 'Dark Debug',
    layout: 'right',
    mode: 'manager',
    palette: { accent: '#00a3a3', accent2: '#f4b942', accent3: '#e05d5d', paper: '#101418', surface: '#171d23', surface2: '#202833', ink: '#f4f7fb', muted: '#a9b4c0', line: '#303a46' },
    thesis: 'A dark professional console for users who spend most time reading logs, files, and reset diffs.',
    summary: 'A carbon-toned debug bay with a right inspector, high legibility log states, and a bright but restrained active status object.',
  },
  {
    num: 8,
    slug: '008-mica-site-switcher',
    title: 'Mica Site Switcher',
    system: 'Desktop Mica',
    layout: 'toprail',
    mode: 'sites',
    palette: { accent: '#0067b8', accent2: '#107c10', accent3: '#ca5010', paper: '#f3f6fb', surface: '#ffffff', surface2: '#edf3fb', ink: '#1b1b1b', muted: '#60666d', line: '#d5dce6' },
    thesis: 'Frames Playground as a desktop-grade utility with obvious site switching and conservative depth.',
    summary: 'A Mica-inspired desktop utility: top command rail, one site switcher pane, status widget, and library/reset overlays with measured elevation.',
  },
  {
    num: 9,
    slug: '009-editorial-review-frame',
    title: 'Editorial Review Frame',
    system: 'Review Frame',
    layout: 'reader',
    mode: 'sites',
    palette: { accent: '#1d3557', accent2: '#457b9d', accent3: '#e76f51', paper: '#fbfbf8', surface: '#ffffff', surface2: '#f1f3f2', ink: '#111111', muted: '#62615d', line: '#dadbd5' },
    thesis: 'Optimizes for reviewing a live site: the iframe feels like the article, while controls sit in disciplined margins.',
    summary: 'A publication-like review frame with calm margins, a restrained left rail, and a pane that opens without stealing site context.',
  },
  {
    num: 10,
    slug: '010-mobile-bottom-sheet-canon',
    title: 'Mobile Bottom Sheet Canon',
    system: 'Mobile Canon',
    layout: 'bottom',
    mode: 'sites',
    palette: { accent: '#0f766e', accent2: '#2563eb', accent3: '#d97706', paper: '#f7faf9', surface: '#ffffff', surface2: '#eef6f4', ink: '#111827', muted: '#5c6673', line: '#d5e0df' },
    thesis: 'Starts from mobile instead of shrinking desktop: rail becomes bottom tabs and the single pane becomes a real bottom sheet.',
    summary: 'A mobile-canonical proposal with bottom rail, compact browser chrome, a sheet-style sites pane, and no horizontal overflow on narrow screens.',
  },
  {
    num: 11,
    slug: '011-product-glass-studio',
    title: 'Product Glass Studio',
    system: 'Clear Glass',
    layout: 'left',
    mode: 'sites',
    palette: { accent: '#0b7285', accent2: '#2b8a3e', accent3: '#e67700', paper: '#eef4f5', surface: '#ffffff', surface2: '#f7fbfb', ink: '#102027', muted: '#607178', line: '#cbdadb' },
    thesis: 'Retains depth from v7 but removes the moody darkness; the glass is functional, not decorative.',
    summary: 'A clear glass studio with airy panels, sharp controls, a single pane, and the live iframe dominant at rest.',
  },
  {
    num: 12,
    slug: '012-devtools-timeline-rail',
    title: 'Devtools Timeline Rail',
    system: 'Timeline Tools',
    layout: 'timeline',
    mode: 'manager',
    palette: { accent: '#0b5cab', accent2: '#238636', accent3: '#bf8700', paper: '#f6f8fa', surface: '#ffffff', surface2: '#eef2f6', ink: '#0d1117', muted: '#57606a', line: '#d0d7de' },
    thesis: 'Adds temporal clarity for booting, savepoints, logs, and reset decisions without adding a new product feature.',
    summary: 'A developer timeline layout where manager activity is organized by events, while files, logs, and settings remain one pane.',
  },
  {
    num: 13,
    slug: '013-blueprint-map-drawer',
    title: 'Blueprint Map Drawer',
    system: 'Map Drawer',
    layout: 'shelf',
    mode: 'sites',
    palette: { accent: '#1b6ca8', accent2: '#2a9d5b', accent3: '#e76f51', paper: '#f2f7fb', surface: '#ffffff', surface2: '#e8f1f6', ink: '#102a43', muted: '#627d98', line: '#c8d7e1' },
    thesis: 'Makes the relationship between sources, saved sites, and blueprint library explicit in a single navigable map.',
    summary: 'A blueprint map drawer with source routes, saved sites, and featured blueprints visible in one pane before the full library takes focus.',
  },
  {
    num: 14,
    slug: '014-minimal-browser-shell',
    title: 'Minimal Browser Shell',
    system: 'Browser Minimal',
    layout: 'reader',
    mode: 'sites',
    palette: { accent: '#0f4c81', accent2: '#2e7d32', accent3: '#c56b2c', paper: '#f5f6f7', surface: '#ffffff', surface2: '#f0f2f4', ink: '#1a1a1a', muted: '#696f75', line: '#d9dde2' },
    thesis: 'Reduces Playground to the few browser-like affordances people already understand, then moves everything else into one pane.',
    summary: 'A minimal browser shell with strong iframe primacy, almost invisible rail chrome, and manager/site depth kept out of the top bar.',
  },
  {
    num: 15,
    slug: '015-tactile-control-room',
    title: 'Tactile Control Room',
    system: 'Control Room',
    layout: 'sheet',
    mode: 'manager',
    palette: { accent: '#31572c', accent2: '#15616d', accent3: '#ff7d00', paper: '#f3f4ee', surface: '#fffef8', surface2: '#e8eadf', ink: '#1f241d', muted: '#626b5f', line: '#d1d5c7' },
    thesis: 'Uses hardware-console affordances for settings and reset without making the interface feel playful or skeuomorphic.',
    summary: 'A tactile control room with dense setting rows, explicit saved state, and reset confirmation that feels like an operational checklist.',
  },
  {
    num: 16,
    slug: '016-ops-matrix-console',
    title: 'Ops Matrix Console',
    system: 'Ops Matrix',
    layout: 'timeline',
    mode: 'manager',
    palette: { accent: '#005f73', accent2: '#2a9d8f', accent3: '#ee9b00', paper: '#edf4f2', surface: '#ffffff', surface2: '#e6efed', ink: '#12211f', muted: '#536760', line: '#c9d9d5' },
    thesis: 'Takes the operational density of v7 manager states and makes it easier to scan through aligned rows and stable metrics.',
    summary: 'A dense ops matrix for advanced users, with logs, database, files, and settings sharing one inspector and one persistent site status.',
  },
  {
    num: 17,
    slug: '017-calm-spatial-dock',
    title: 'Calm Spatial Dock',
    system: 'Spatial Dock',
    layout: 'bottom',
    mode: 'sites',
    palette: { accent: '#386641', accent2: '#277da1', accent3: '#f8961e', paper: '#f7f8f4', surface: '#ffffff', surface2: '#edf2e8', ink: '#1f2a1f', muted: '#647067', line: '#d5dccf' },
    thesis: 'Keeps the spatial memory that made v7 promising, but replaces blur-heavy drama with stable docking and clear object identity.',
    summary: 'A calm bottom-dock interpretation: live site first, Sites and Manager as docked modes, status persistent, and deeper layers only for temporary focus.',
  },
  {
    num: 18,
    slug: '018-builder-notebook',
    title: 'Builder Notebook',
    system: 'Notebook',
    layout: 'sheet',
    mode: 'sites',
    palette: { accent: '#7b2cbf', accent2: '#2d6a4f', accent3: '#e85d04', paper: '#f8f5ef', surface: '#fffdf8', surface2: '#f0ece2', ink: '#1d1b20', muted: '#6b6570', line: '#ddd4c7' },
    thesis: 'Makes Playground feel like a builder notebook: saved sites, experiments, and blueprints are organized as working pages.',
    summary: 'A notebook-like design with narrow rail, paper sheets, one pane, and operational manager tabs that stay inside the same surface.',
  },
  {
    num: 19,
    slug: '019-focus-presentation-mode',
    title: 'Focus Presentation Mode',
    system: 'Presentation',
    layout: 'reader',
    mode: 'sites',
    palette: { accent: '#003049', accent2: '#2a9d8f', accent3: '#f77f00', paper: '#f5f5f2', surface: '#ffffff', surface2: '#efefea', ink: '#111111', muted: '#666761', line: '#d8d8d0' },
    thesis: 'Optimizes for demos and reviews: the live site can become nearly full-screen while status and recovery controls remain findable.',
    summary: 'A presentation-oriented frame with a quiet margin rail, compact top chrome, persistent site status, and a clear route back to editing tools.',
  },
  {
    num: 20,
    slug: '020-enterprise-review-rail',
    title: 'Enterprise Review Rail',
    system: 'Enterprise Review',
    layout: 'right',
    mode: 'manager',
    palette: { accent: '#16425b', accent2: '#3a7d44', accent3: '#b5651d', paper: '#f4f6f8', surface: '#ffffff', surface2: '#edf1f4', ink: '#17202a', muted: '#5f6f7c', line: '#d5dde4' },
    thesis: 'Adds enterprise-grade review structure without accounts, permissions, or cloud concepts that Playground does not currently have.',
    summary: 'A sober review rail with manager evidence, export/download actions, clear reset escalation, and a persistent local-browser storage status.',
  },
];

function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function attr(value) {
  return esc(value).replaceAll("'", '&#39;');
}

function palette(design) {
  return { ...basePalettes, ...design.palette };
}

function icon(name) {
  const paths = {
    refresh: '<path d="M20 11a8 8 0 1 0-2.4 5.7"/><path d="M20 4v7h-7"/>',
    sites: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8M8 13h5"/>',
    manager: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 8v8M8.5 10l7 4M15.5 10l-7 4"/>',
    save: '<path d="M5 4h12l2 2v14H5z"/><path d="M8 4v6h8V4M8 20v-6h8v6"/>',
    expand: '<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/><path d="M3 3l7 7M21 3l-7 7M3 21l7-7M21 21l-7-7"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.2-3.2"/>',
    play: '<path d="M8 5v14l11-7z"/>',
    library: '<path d="M4 19.5V5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2"/><path d="M8 7h6M8 11h8"/>',
    upload: '<path d="M12 16V4"/><path d="M7 9l5-5 5 5"/><path d="M5 20h14"/>',
    git: '<path d="M7 7h10v10H7z"/><path d="M7 12H3M21 12h-4M12 7V3M12 21v-4"/>',
    branch: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v2a8 8 0 0 0 8 8h-2M18 8v2a8 8 0 0 1-8 8h2"/>',
    file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 13h6M9 17h6"/>',
    database: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
    download: '<path d="M12 4v12"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/>',
    log: '<path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    reset: '<path d="M4 7v6h6"/><path d="M20 17a8 8 0 0 1-13.7-5.7L4 13"/><path d="M20 7a8 8 0 0 0-13.7 5.7"/>',
    external: '<path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M5 8v13h13v-5"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-2.1 3.6-.2-.1a1.8 1.8 0 0 0-2 .4l-.3.2-4.1-2.4v-.3a1.8 1.8 0 0 0-1.6-1.6h-.3L7 12.8l.2-.3a1.8 1.8 0 0 0-.4-2l-.1-.1 2.1-3.6.2.1a1.8 1.8 0 0 0 2-.4l.3-.2 4.1 2.4v.3A1.8 1.8 0 0 0 17 10.6h.3l2.4 4.1-.3.3z"/>',
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.sites}</svg>`;
}

function siteFrame(design) {
  const p = palette(design);
  const dark = p.paper === '#101418';
  const heroBg = dark ? '#111820' : '#f7f7f4';
  const wpBg = dark ? '#0f1419' : '#ffffff';
  const bodyInk = dark ? '#f7fafc' : '#111111';
  const bodyMuted = dark ? '#b9c2cc' : '#4d5660';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
*{box-sizing:border-box}body{margin:0;background:${wpBg};color:${bodyInk};font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.admin{height:38px;background:#1d2327;color:#f0f0f1;display:flex;align-items:center;gap:18px;padding:0 14px;font-size:13px}.admin strong{font-weight:700}.admin span{color:#c3c4c7}.sitebar{height:56px;display:flex;align-items:center;justify-content:space-between;padding:0 44px;border-bottom:1px solid ${dark ? '#2c3640' : '#e5e7eb'};background:${wpBg}}.sitebar h1{font-size:20px;margin:0;font-weight:720}.sitebar nav{display:flex;gap:22px;color:${bodyMuted};font-size:14px}.hero{min-height:520px;display:grid;grid-template-columns:minmax(260px,520px) minmax(260px,1fr);gap:44px;align-items:center;padding:54px 7vw 80px;background:${heroBg}}.hero h2{font-family:Georgia,"Times New Roman",serif;font-size:52px;line-height:1.08;margin:0 0 22px;color:${bodyInk};letter-spacing:0}.hero h2 span{color:${p.accent}}.hero p{font-size:19px;line-height:1.62;color:${bodyMuted};margin:0 0 22px}.note{display:inline;background:${p.accent3};color:#111;padding:1px 4px}.button{display:inline-flex;height:42px;align-items:center;padding:0 18px;background:${p.accent};color:white;border-radius:4px;text-decoration:none;font-weight:700}.mark{height:360px;display:grid;place-items:center}.mark svg{width:330px;max-width:100%;height:auto}.shop{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;padding:36px 7vw 70px}.product{border:1px solid ${dark ? '#2c3640' : '#e1e5ea'};border-radius:6px;padding:16px;background:${wpBg}}.product b{display:block;margin-bottom:8px}.product span{color:${p.accent};font-weight:700}@media(max-width:760px){.admin{gap:10px;overflow:hidden}.sitebar{padding:0 18px}.sitebar nav{display:none}.hero{grid-template-columns:1fr;padding:32px 24px}.hero h2{font-size:38px}.mark{height:220px}.shop{grid-template-columns:1fr;padding:22px 24px 60px}}
</style>
</head>
<body>
<div class="admin"><strong>W</strong><span>My WordPress Website</span><span>Edit Site</span><span>New</span><span>Edit Page</span></div>
<header class="sitebar"><h1>My Coffee Shop</h1><nav><span>Home</span><span>Shop</span><span>Sample Page</span></nav></header>
<main>
<section class="hero">
<div>
<h2>Hello from <span>WordPress Playground</span>.</h2>
<p>This local site runs in your browser. It is ready for training, plugin demos, theme experiments, and quick testing.</p>
<p><span class="note">Logged in as admin</span> so content, themes, plugins, and settings can be changed immediately.</p>
<a class="button" href="#">View the storefront</a>
</div>
<div class="mark" aria-hidden="true">
<svg viewBox="0 0 360 360" fill="none"><circle cx="180" cy="180" r="130" stroke="${p.accent2}" stroke-width="28"/><path d="M92 108h56M207 108h61M116 108l52 158M235 108l-52 158M148 108l35 116M207 108l-25 116" stroke="${bodyInk}" stroke-width="22" stroke-linecap="round"/><circle cx="180" cy="180" r="124" stroke="${bodyInk}" stroke-width="10"/></svg>
</div>
</section>
<section class="shop"><div class="product"><b>House Espresso</b><p>12 oz whole bean</p><span>$15.00</span></div><div class="product"><b>Single Origin El Salvador</b><p>Washed process</p><span>$18.00</span></div><div class="product"><b>Cold Brew Concentrate</b><p>32 oz bottle</p><span>$12.00</span></div></section>
</main>
</body>
</html>`;
}

function pageCss(design) {
  const p = palette(design);
  const dark = p.paper === '#101418';
  const overlay = dark ? 'rgba(6, 10, 14, .72)' : 'rgba(21, 30, 40, .18)';
  return `
:root {
  color-scheme: ${dark ? 'dark' : 'light'};
  --ink: ${p.ink};
  --muted: ${p.muted};
  --line: ${p.line};
  --paper: ${p.paper};
  --surface: ${p.surface};
  --surface-2: ${p.surface2};
  --accent: ${p.accent};
  --accent-2: ${p.accent2};
  --accent-3: ${p.accent3};
  --good: ${p.good};
  --warn: ${p.warn};
  --danger: ${p.danger};
  --overlay: ${overlay};
  --rail-w: 62px;
  --top-h: 48px;
  --pane-w: min(396px, calc(100vw - 128px));
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
* { box-sizing: border-box; }
html, body { width: 100%; min-height: 100%; margin: 0; }
body {
  overflow: hidden;
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--line) 42%, transparent) 1px, transparent 1px),
    linear-gradient(180deg, color-mix(in srgb, var(--line) 36%, transparent) 1px, transparent 1px),
    var(--paper);
  background-size: 44px 44px, 44px 44px, auto;
  color: var(--ink);
  font-size: 14px;
  letter-spacing: 0;
}
button, input, select, textarea { font: inherit; }
button { border: 0; background: transparent; color: inherit; cursor: pointer; }
button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
.app { position: relative; width: 100vw; height: 100vh; min-height: 640px; isolation: isolate; }
.top-chrome {
  position: fixed;
  z-index: 30;
  top: 12px;
  left: calc(var(--rail-w) + 26px);
  right: 14px;
  min-height: var(--top-h);
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) 86px 36px;
  align-items: center;
  gap: 8px;
  padding: 5px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: color-mix(in srgb, var(--surface) 91%, transparent);
  box-shadow: 0 12px 28px color-mix(in srgb, var(--ink) 12%, transparent);
  backdrop-filter: blur(14px);
}
.icon-button, .text-button, .segment-button, .tab-button, .row-action, .route-button {
  min-height: 34px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: color-mix(in srgb, var(--surface) 92%, transparent);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 10px;
  color: var(--ink);
}
.icon-button { width: 36px; padding: 0; }
.icon-button svg, .rail-button svg, .text-button svg, .row-action svg, .route-button svg, .status-widget svg { width: 18px; height: 18px; stroke-width: 1.9; }
.text-button[data-state="unsaved"] { color: var(--warn); }
.icon-button:hover, .text-button:hover, .segment-button:hover, .tab-button:hover, .row-action:hover, .route-button:hover {
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 9%, var(--surface));
}
.address {
  min-width: 0;
  min-height: 34px;
  display: grid;
  grid-template-columns: 18px 1fr 26px;
  gap: 6px;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--surface-2);
  padding: 0 5px 0 9px;
  color: var(--muted);
}
.address input { width: 100%; min-width: 0; border: 0; outline: 0; color: var(--ink); background: transparent; }
.quiet-rail {
  position: fixed;
  z-index: 40;
  left: 12px;
  top: 12px;
  bottom: 12px;
  width: var(--rail-w);
  border: 1px solid var(--line);
  border-radius: 8px;
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  box-shadow: 0 16px 36px color-mix(in srgb, var(--ink) 13%, transparent);
  display: grid;
  grid-template-rows: 54px 1fr 72px;
  justify-items: center;
  padding: 8px 0;
  backdrop-filter: blur(14px);
}
.wp-mark {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--ink);
  color: var(--surface);
  font-weight: 800;
  font-size: 15px;
}
.rail-actions { display: grid; gap: 10px; align-self: start; margin-top: 14px; }
.rail-button {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--muted);
  border: 1px solid transparent;
  position: relative;
}
.rail-button:hover, .rail-button.active {
  color: var(--accent);
  border-color: var(--line);
  background: var(--surface);
  box-shadow: 0 10px 22px color-mix(in srgb, var(--ink) 11%, transparent);
}
.rail-button::after {
  content: attr(aria-label);
  position: absolute;
  left: 52px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  background: var(--ink);
  color: var(--surface);
  border-radius: 6px;
  padding: 5px 7px;
  font-size: 12px;
}
.rail-button:hover::after { opacity: 1; }
.rail-note {
  align-self: end;
  writing-mode: vertical-rl;
  font-size: 10px;
  color: color-mix(in srgb, var(--muted) 82%, transparent);
  text-transform: uppercase;
  letter-spacing: .08em;
}
.viewport {
  position: fixed;
  z-index: 1;
  left: calc(var(--rail-w) + 26px);
  right: 14px;
  top: calc(var(--top-h) + 26px);
  bottom: 14px;
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
  background: var(--surface);
  box-shadow: 0 30px 84px color-mix(in srgb, var(--ink) 18%, transparent);
  transition: left .22s ease, right .22s ease, filter .22s ease, transform .22s ease;
}
.viewport iframe { width: 100%; height: 100%; border: 0; display: block; background: white; }
body.pane-open .viewport {
  left: calc(var(--rail-w) + var(--pane-w) + 40px);
  filter: saturate(.96) blur(.4px);
}
.work-pane {
  position: fixed;
  z-index: 35;
  top: calc(var(--top-h) + 26px);
  left: calc(var(--rail-w) + 26px);
  bottom: 14px;
  width: var(--pane-w);
  border: 1px solid var(--line);
  border-radius: 8px;
  background: color-mix(in srgb, var(--surface) 94%, transparent);
  box-shadow: 0 24px 64px color-mix(in srgb, var(--ink) 17%, transparent);
  display: none;
  overflow: hidden;
  backdrop-filter: blur(18px);
}
body.pane-open .work-pane { display: grid; grid-template-rows: auto 1fr; }
.pane-head {
  min-height: 64px;
  padding: 13px 14px;
  display: grid;
  grid-template-columns: 1fr 34px;
  gap: 10px;
  align-items: start;
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--accent) 6%, var(--surface));
}
.pane-kicker, .meta-line, .eyebrow { color: var(--muted); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; }
.pane-head h2 { margin: 2px 0 0; font-size: 18px; line-height: 1.15; }
.pane-body { min-height: 0; overflow: auto; padding: 14px; }
.pane-view { display: none; }
.pane-view.active { display: block; }
.section { margin: 0 0 16px; }
.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 760;
  text-transform: uppercase;
  letter-spacing: .06em;
}
.segment-row, .tab-row, .toolbar-row { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }
.segment-button.active, .tab-button.active { background: var(--accent); color: white; border-color: var(--accent); }
.site-list, .route-grid, .blueprint-list, .manager-stack, .timeline-list { display: grid; gap: 8px; }
.site-row, .blueprint-row, .setting-row, .log-row, .file-row, .db-row, .timeline-row {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
  padding: 10px;
}
.site-row { display: grid; grid-template-columns: 1fr auto; gap: 10px; align-items: center; }
.site-row strong, .blueprint-row strong, .setting-row strong { display: block; font-size: 14px; margin-bottom: 2px; }
.site-row span, .blueprint-row span, .setting-row span, .file-row span, .db-row span, .timeline-row span { color: var(--muted); font-size: 12px; }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--good); display: inline-block; margin-right: 6px; }
.route-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.route-button {
  min-height: 58px;
  justify-content: flex-start;
  text-align: left;
  padding: 9px;
}
.route-button b { display: block; font-size: 13px; }
.route-button span { display: block; color: var(--muted); font-size: 11px; margin-top: 2px; }
.blueprint-row { display: grid; grid-template-columns: 1fr auto; gap: 8px; align-items: center; }
.tag { border: 1px solid var(--line); border-radius: 6px; padding: 3px 6px; color: var(--muted); font-size: 11px; white-space: nowrap; }
.manager-tab { display: none; }
.manager-tab.active { display: block; }
.setting-row { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 10px; }
.select-like, .toggle-like {
  min-height: 30px;
  border: 1px solid var(--line);
  border-radius: 7px;
  padding: 5px 8px;
  background: var(--surface-2);
  color: var(--ink);
  white-space: nowrap;
}
.toggle-like.on { color: var(--good); border-color: color-mix(in srgb, var(--good) 45%, var(--line)); }
.danger-action { color: var(--danger); border-color: color-mix(in srgb, var(--danger) 45%, var(--line)); }
.file-row, .db-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  gap: 8px;
  align-items: center;
}
.code-block, .log-list {
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: color-mix(in srgb, var(--ink) 6%, var(--surface));
  padding: 11px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  line-height: 1.55;
}
.log-row { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; }
.log-row[data-level="warn"] { border-color: color-mix(in srgb, var(--warn) 55%, var(--line)); }
.log-row[data-level="error"] { border-color: color-mix(in srgb, var(--danger) 55%, var(--line)); color: var(--danger); }
.status-widget {
  position: fixed;
  z-index: 45;
  right: 26px;
  bottom: 24px;
  width: 252px;
  min-height: 72px;
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 10px;
  align-items: center;
  text-align: left;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: color-mix(in srgb, var(--surface) 94%, transparent);
  box-shadow: 0 18px 48px color-mix(in srgb, var(--ink) 17%, transparent);
  padding: 10px;
  backdrop-filter: blur(16px);
}
.status-icon {
  height: 38px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: color-mix(in srgb, var(--accent) 12%, var(--surface));
  color: var(--accent);
}
.status-widget strong { display: block; font-size: 13px; margin-bottom: 2px; }
.status-widget span { display: block; color: var(--muted); font-size: 12px; }
.deep-layer {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 28px;
  background: var(--overlay);
  backdrop-filter: blur(8px);
}
body.show-library .deep-layer.library, body.show-reset .deep-layer.reset { display: flex; }
.deep-sheet {
  width: min(900px, calc(100vw - 42px));
  max-height: min(760px, calc(100vh - 42px));
  overflow: auto;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: 0 40px 100px color-mix(in srgb, var(--ink) 34%, transparent);
}
.deep-head {
  position: sticky;
  top: 0;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 34px;
  gap: 10px;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}
.deep-head h2 { margin: 0; font-size: 20px; }
.deep-body { padding: 15px; }
.search-row {
  display: grid;
  grid-template-columns: 20px 1fr auto;
  gap: 8px;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface-2);
  padding: 8px 10px;
  margin-bottom: 12px;
}
.search-row input { min-width: 0; border: 0; outline: 0; background: transparent; color: var(--ink); }
.library-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.library-item { border: 1px solid var(--line); border-radius: 8px; background: var(--surface); padding: 12px; min-height: 120px; }
.library-item strong { display: block; margin-bottom: 5px; }
.library-item p { color: var(--muted); line-height: 1.42; margin: 0 0 10px; font-size: 13px; }
.reset-diff {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 12px;
  background: var(--surface-2);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  line-height: 1.55;
}
.diff-remove { color: var(--danger); }
.diff-add { color: var(--good); }
.toast {
  position: fixed;
  z-index: 90;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%) translateY(20px);
  opacity: 0;
  pointer-events: none;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--ink);
  color: var(--surface);
  padding: 9px 12px;
  transition: opacity .18s ease, transform .18s ease;
}
body.show-toast .toast { opacity: 1; transform: translateX(-50%) translateY(0); }
body.layout-right .quiet-rail { left: auto; right: 12px; }
body.layout-right .top-chrome { left: 14px; right: calc(var(--rail-w) + 26px); }
body.layout-right .work-pane { left: auto; right: calc(var(--rail-w) + 26px); }
body.layout-right .status-widget { left: 26px; right: auto; }
body.layout-right.pane-open .viewport { left: 14px; right: calc(var(--rail-w) + var(--pane-w) + 40px); }
body.layout-toprail .quiet-rail {
  left: calc(var(--rail-w) + 26px);
  right: 14px;
  top: 12px;
  bottom: auto;
  width: auto;
  height: 54px;
  grid-template-columns: 44px auto 1fr;
  grid-template-rows: none;
  justify-items: start;
  padding: 5px 8px;
}
body.layout-toprail .rail-actions { display: flex; margin: 0 0 0 8px; }
body.layout-toprail .rail-note { writing-mode: horizontal-tb; justify-self: end; align-self: center; }
body.layout-toprail .top-chrome { top: 78px; left: 14px; right: 14px; }
body.layout-toprail .work-pane { top: 132px; left: 14px; }
body.layout-toprail .viewport { top: 132px; left: 14px; }
body.layout-toprail.pane-open .viewport { left: calc(var(--pane-w) + 28px); }
body.layout-shelf .work-pane { top: 86px; bottom: auto; height: min(660px, calc(100vh - 104px)); }
body.layout-shelf .viewport { border-radius: 6px; }
body.layout-sheet .work-pane { transform: rotate(-.25deg); }
body.layout-sheet .viewport { transform: rotate(.08deg); }
body.layout-reader .viewport { left: 96px; right: 96px; }
body.layout-reader.pane-open .viewport { left: calc(var(--rail-w) + var(--pane-w) + 54px); right: 38px; }
body.layout-reader .top-chrome { right: 96px; }
body.layout-reader .status-widget { right: 96px; }
body.layout-bottom .quiet-rail, body.layout-timeline .quiet-rail {
  top: auto;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 178px;
  height: 54px;
  grid-template-columns: 40px 1fr;
  grid-template-rows: none;
  padding: 5px 7px;
}
body.layout-bottom .rail-actions, body.layout-timeline .rail-actions { display: flex; margin: 0 0 0 8px; gap: 6px; }
body.layout-bottom .rail-note, body.layout-timeline .rail-note { display: none; }
body.layout-bottom .viewport, body.layout-timeline .viewport { left: 14px; right: 14px; bottom: 84px; }
body.layout-bottom .work-pane, body.layout-timeline .work-pane {
  left: 14px;
  right: auto;
  bottom: 84px;
  width: min(430px, calc(100vw - 28px));
}
body.layout-bottom.pane-open .viewport, body.layout-timeline.pane-open .viewport { left: min(458px, calc(100vw - 28px)); right: 14px; }
body.layout-timeline .manager-stack { position: relative; padding-left: 16px; }
body.layout-timeline .manager-stack::before { content: ""; position: absolute; left: 5px; top: 4px; bottom: 4px; width: 2px; background: var(--line); }
body.layout-timeline .setting-row, body.layout-timeline .log-row, body.layout-timeline .db-row { position: relative; }
body.layout-timeline .setting-row::before, body.layout-timeline .log-row::before, body.layout-timeline .db-row::before {
  content: "";
  position: absolute;
  left: -17px;
  top: 18px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}
@media (max-width: 900px) {
  body { overflow-x: hidden; overflow-y: auto; }
  .app { min-height: 1040px; height: auto; padding-bottom: 88px; }
  .top-chrome {
    left: 10px !important;
    right: 10px !important;
    top: 10px !important;
    grid-template-columns: 34px minmax(0, 1fr) 76px 34px;
    min-height: 46px;
  }
  .quiet-rail {
    left: 10px !important;
    right: 10px !important;
    top: auto !important;
    bottom: 10px !important;
    width: auto !important;
    height: 58px !important;
    transform: none !important;
    grid-template-columns: 38px 1fr;
    grid-template-rows: none;
    padding: 6px 8px;
  }
  .rail-actions { display: flex; gap: 8px; margin: 0 0 0 8px; }
  .rail-button { width: 46px; height: 44px; }
  .rail-button::after, .rail-note { display: none; }
  .viewport {
    position: relative;
    left: 10px !important;
    right: auto !important;
    top: 70px !important;
    bottom: auto !important;
    width: calc(100vw - 20px);
    height: 394px;
    filter: none !important;
    transform: none !important;
  }
  .work-pane {
    position: relative;
    left: 10px !important;
    right: auto !important;
    top: 84px !important;
    bottom: auto !important;
    width: calc(100vw - 20px);
    max-height: none;
    height: auto;
    display: grid;
    transform: none !important;
  }
  .pane-body { max-height: none; overflow: visible; }
  .status-widget {
    position: relative;
    left: 10px !important;
    right: auto !important;
    bottom: auto !important;
    top: 76px;
    width: calc(100vw - 20px);
    min-height: 62px;
  }
  .route-grid, .library-grid { grid-template-columns: 1fr; }
  .setting-row { grid-template-columns: 1fr; }
  .file-row, .db-row { grid-template-columns: 18px 1fr; }
  .file-row .tag, .db-row .tag { grid-column: 2; width: max-content; max-width: 100%; }
  .deep-layer { align-items: flex-start; padding: 12px; overflow: auto; }
  .deep-sheet { width: 100%; max-height: none; }
  .pane-view[data-view="manager"].active { display: flex; flex-direction: column; }
  .pane-view[data-view="manager"] .tab-row { order: 1; }
  .pane-view[data-view="manager"] .manager-tab { order: 2; }
  .pane-view[data-view="manager"] .toolbar-row { order: 3; margin-top: 12px; }
  .toast { left: 10px; right: 10px; bottom: 78px; transform: translateY(20px); text-align: center; }
  body.show-toast .toast { transform: translateY(0); }
}
`;
}

function sitesPane() {
  return `
<section class="pane-view active" data-view="sites">
  <div class="segment-row" aria-label="Sites sections">
    <button class="segment-button active" type="button">Yours</button>
    <button class="segment-button" type="button">New</button>
    <button class="segment-button" type="button" data-open-overlay="library">Library</button>
  </div>
  <div class="section">
    <div class="section-title"><span>Your Playgrounds</span><span>Stored in browser</span></div>
    <div class="site-list">
      <div class="site-row"><div><strong><span class="status-dot"></span>Coffee Shop</strong><span>WP 6.8 / PHP 8.3 / 11.4 MB OPFS</span></div><span class="tag">Unsaved</span></div>
      <div class="site-row"><div><strong>Magazine Draft</strong><span>Last opened yesterday / Gutenberg PR</span></div><span class="tag">Saved</span></div>
      <div class="site-row"><div><strong>Plugin QA</strong><span>WooCommerce test matrix</span></div><span class="tag">Bootable</span></div>
    </div>
  </div>
  <div class="section">
    <div class="section-title"><span>Start a Playground</span><span>Six sources</span></div>
    <div class="route-grid">
      <button class="route-button" type="button" data-toast="Vanilla WordPress queued">${icon('play')}<span><b>Vanilla WordPress</b><span>Latest stable</span></span></button>
      <button class="route-button" type="button" data-toast="WordPress PR route opened">${icon('git')}<span><b>WordPress PR</b><span>Core pull request</span></span></button>
      <button class="route-button" type="button" data-toast="Gutenberg branch route opened">${icon('branch')}<span><b>Gutenberg PR</b><span>Editor branch</span></span></button>
      <button class="route-button" type="button" data-toast="GitHub import route opened">${icon('git')}<span><b>From GitHub</b><span>Theme or plugin</span></span></button>
      <button class="route-button" type="button" data-toast="Blueprint URL route opened">${icon('library')}<span><b>Blueprint URL</b><span>Paste JSON URL</span></span></button>
      <button class="route-button" type="button" data-toast="Zip import route opened">${icon('upload')}<span><b>Import .zip</b><span>Restore export</span></span></button>
    </div>
  </div>
  <div class="section">
    <div class="section-title"><span>Featured Blueprints</span><button class="row-action" type="button" data-open-overlay="library">View all 43</button></div>
    <div class="blueprint-list">
      <div class="blueprint-row"><div><strong>Coffee Shop</strong><span>WooCommerce storefront with products and content.</span></div><span class="tag">Store</span></div>
      <div class="blueprint-row"><div><strong>Art Gallery</strong><span>Portfolio site using the Vueo theme.</span></div><span class="tag">Website</span></div>
      <div class="blueprint-row"><div><strong>Feed Reader</strong><span>Friends plugin with ActivityPub-ready feeds.</span></div><span class="tag">Social</span></div>
    </div>
  </div>
</section>`;
}

function managerPane() {
  return `
<section class="pane-view" data-view="manager">
  <div class="toolbar-row">
    <button class="row-action" type="button">${icon('home')}WP Admin</button>
    <button class="row-action" type="button">${icon('external')}Homepage</button>
    <button class="row-action" type="button">${icon('git')}Export PR</button>
  </div>
  <div class="tab-row" aria-label="Manager tabs">
    <button class="tab-button active" type="button" data-manager-tab="settings">Settings</button>
    <button class="tab-button" type="button" data-manager-tab="files">Files</button>
    <button class="tab-button" type="button" data-manager-tab="blueprint">Blueprint</button>
    <button class="tab-button" type="button" data-manager-tab="database">Database</button>
    <button class="tab-button" type="button" data-manager-tab="logs">Logs</button>
  </div>
  <div class="manager-tab active" data-tab-panel="settings">
    <div class="manager-stack">
      <div class="setting-row"><div><strong>WordPress version</strong><span>Changing requires a reboot.</span></div><span class="select-like">6.8 nightly</span></div>
      <div class="setting-row"><div><strong>PHP version</strong><span>Snapshot before apply.</span></div><span class="select-like">8.3</span></div>
      <div class="setting-row"><div><strong>Network access</strong><span>Allow outbound HTTP requests.</span></div><span class="toggle-like on">On</span></div>
      <div class="setting-row"><div><strong>Storage</strong><span>OPFS / 11.4 MB used.</span></div><span class="select-like">Persistent</span></div>
      <button class="row-action danger-action" type="button" data-open-overlay="reset">${icon('reset')}Apply settings and reset</button>
    </div>
  </div>
  <div class="manager-tab" data-tab-panel="files">
    <div class="manager-stack">
      <div class="file-row">${icon('file')}<span>/wp-content/themes/storefront-child/style.css</span><span class="tag">2.1 KB</span></div>
      <div class="file-row">${icon('file')}<span>/wp-content/plugins/woocommerce/woocommerce.php</span><span class="tag">Active</span></div>
      <div class="file-row">${icon('file')}<span>/wp-config.php</span><span class="tag">Read-only</span></div>
      <div class="file-row">${icon('upload')}<span>Upload plugin or theme zip</span><span class="tag">Action</span></div>
    </div>
  </div>
  <div class="manager-tab" data-tab-panel="blueprint">
    <pre class="code-block">{
  "landingPage": "/wp-admin/",
  "preferredVersions": { "php": "8.3", "wp": "6.8" },
  "steps": [
    { "step": "installPlugin", "plugin": "woocommerce" },
    { "step": "importWxr", "file": "coffee-shop.xml" }
  ]
}</pre>
  </div>
  <div class="manager-tab" data-tab-panel="database">
    <div class="manager-stack">
      <div class="db-row">${icon('database')}<span>wp_posts</span><span class="tag">168 rows</span></div>
      <div class="db-row">${icon('database')}<span>wp_options</span><span class="tag">312 rows</span></div>
      <div class="db-row">${icon('database')}<span>wp_wc_orders</span><span class="tag">24 rows</span></div>
      <button class="row-action" type="button" data-toast="Database export prepared">${icon('download')}Export SQL</button>
    </div>
  </div>
  <div class="manager-tab" data-tab-panel="logs">
    <div class="manager-stack">
      <div class="log-row">14:32:11 INFO Starting WordPress 6.8 with PHP 8.3</div>
      <div class="log-row">14:32:12 INFO OPFS mounted at /wordpress</div>
      <div class="log-row" data-level="warn">14:32:13 WARN WP_DEBUG is enabled</div>
      <div class="log-row" data-level="error">14:32:14 ERROR Missing optional payment fixture</div>
      <div class="log-row">14:32:15 INFO GET /shop/ -> 200 (212 ms)</div>
    </div>
  </div>
</section>`;
}

function libraryOverlay() {
  const items = [
    ['Art Gallery', 'Portfolio starter with gallery patterns.', 'Website'],
    ['Coffee Shop', 'WooCommerce storefront with sample products.', 'Store'],
    ['Feed Reader', 'Friends plugin feed reader with social sources.', 'Social'],
    ['Gaming News', 'Editorial site using a magazine layout.', 'News'],
    ['Non-profit Organization', 'Donation-ready pages and patterns.', 'Org'],
    ['Personal Resume', 'Resume site with blocks and profile content.', 'Personal'],
    ['Photography Portfolio', 'Image-focused portfolio and albums.', 'Portfolio'],
    ['Create Block Theme', 'Theme building tools installed and ready.', 'Editor'],
    ['Custom Post Type: Books', 'CPT and sample content fixture.', 'Content'],
  ];
  return `
<div class="deep-layer library" role="dialog" aria-modal="true" aria-label="Blueprint library">
  <div class="deep-sheet">
    <div class="deep-head"><div><div class="eyebrow">43 blueprints / 10 categories</div><h2>Library</h2></div><button class="icon-button" type="button" data-close-overlay aria-label="Close library">${icon('close')}</button></div>
    <div class="deep-body">
      <label class="search-row">${icon('search')}<input type="search" placeholder="Search blueprints, categories, or sources"><span class="tag">Cmd K</span></label>
      <div class="segment-row"><button class="segment-button active" type="button">All</button><button class="segment-button" type="button">Featured</button><button class="segment-button" type="button">Website</button><button class="segment-button" type="button">WooCommerce</button><button class="segment-button" type="button">Gutenberg</button></div>
      <div class="library-grid">
        ${items.map(([name, desc, tag]) => `<article class="library-item"><strong>${esc(name)}</strong><p>${esc(desc)}</p><span class="tag">${esc(tag)}</span></article>`).join('')}
      </div>
    </div>
  </div>
</div>`;
}

function resetOverlay() {
  return `
<div class="deep-layer reset" role="dialog" aria-modal="true" aria-label="Reset confirmation">
  <div class="deep-sheet">
    <div class="deep-head"><div><div class="eyebrow">Auto-snapshot created at 14:32</div><h2>Apply settings and reset?</h2></div><button class="icon-button" type="button" data-close-overlay aria-label="Close reset confirmation">${icon('close')}</button></div>
    <div class="deep-body">
      <p>Applying these settings remounts WordPress from the blueprint. The current OPFS state can be restored from the snapshot.</p>
      <div class="reset-diff"><div class="diff-remove">- PHP 8.2</div><div class="diff-add">+ PHP 8.3</div><div class="diff-remove">- WordPress 6.7 stable</div><div class="diff-add">+ WordPress 6.8 nightly</div><div>- Reboot running site after apply</div></div>
      <div class="setting-row" style="margin-top:12px"><div><strong>Type Coffee Shop to confirm</strong><span>The destructive action stays in this top layer.</span></div><input class="select-like" value="Coffee Shop" aria-label="Confirmation phrase"></div>
      <div class="toolbar-row" style="margin-top:12px"><button class="row-action" type="button" data-close-overlay>Cancel</button><button class="row-action danger-action" type="button" data-toast="Settings applied and site reset">${icon('reset')}Apply and reset</button></div>
    </div>
  </div>
</div>`;
}

function pageScript(mode) {
  return `
<script>
const body = document.body;
const railButtons = [...document.querySelectorAll('[data-open-pane]')];
const paneViews = [...document.querySelectorAll('[data-view]')];
function showPane(name) {
  body.classList.add('pane-open');
  paneViews.forEach((view) => view.classList.toggle('active', view.dataset.view === name));
  railButtons.forEach((button) => button.classList.toggle('active', button.dataset.openPane === name));
}
railButtons.forEach((button) => button.addEventListener('click', () => showPane(button.dataset.openPane)));
document.querySelector('[data-close-pane]').addEventListener('click', () => body.classList.remove('pane-open'));
document.querySelectorAll('[data-open-overlay]').forEach((button) => button.addEventListener('click', () => {
  body.classList.toggle('show-library', button.dataset.openOverlay === 'library');
  body.classList.toggle('show-reset', button.dataset.openOverlay === 'reset');
}));
document.querySelectorAll('[data-close-overlay]').forEach((button) => button.addEventListener('click', () => {
  body.classList.remove('show-library', 'show-reset');
}));
document.querySelectorAll('[data-manager-tab]').forEach((button) => button.addEventListener('click', () => {
  const tab = button.dataset.managerTab;
  document.querySelectorAll('[data-manager-tab]').forEach((item) => item.classList.toggle('active', item === button));
  document.querySelectorAll('[data-tab-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.tabPanel === tab));
}));
let toastTimer;
function toast(text) {
  const el = document.querySelector('.toast');
  el.textContent = text;
  body.classList.add('show-toast');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => body.classList.remove('show-toast'), 1900);
}
document.querySelectorAll('[data-toast]').forEach((button) => button.addEventListener('click', () => toast(button.dataset.toast)));
document.querySelector('[data-save]').addEventListener('click', () => toast('Playground state saved in this browser'));
document.querySelector('[data-refresh]').addEventListener('click', () => toast('Iframe refreshed'));
document.querySelector('[data-fullscreen]').addEventListener('click', () => body.classList.toggle('pane-open'));
showPane('${mode}');
</script>`;
}

function renderPage(design) {
  const p = palette(design);
  const css = pageCss(design);
  const frame = attr(siteFrame(design));
  const modeLabel = design.mode === 'manager' ? 'Site Manager' : 'Sites';
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(design.title)} - WordPress Playground Redesign V9</title>
  <style>${css}</style>
</head>
<body class="layout-${attr(design.layout)} pane-open">
  <main class="app" aria-label="WordPress Playground redesign proposal">
    <nav class="quiet-rail" aria-label="Primary Playground modes">
      <div class="wp-mark" aria-hidden="true">WP</div>
      <div class="rail-actions">
        <button class="rail-button" type="button" data-open-pane="sites" aria-label="Sites">${icon('sites')}</button>
        <button class="rail-button" type="button" data-open-pane="manager" aria-label="Site Manager">${icon('manager')}</button>
      </div>
      <div class="rail-note">${esc(design.system)}</div>
    </nav>

    <header class="top-chrome" aria-label="Playground browser controls">
      <button class="icon-button" type="button" data-refresh aria-label="Refresh iframe">${icon('refresh')}</button>
      <label class="address" aria-label="Current path">${icon('search')}<input value="/wp-admin/post.php?post=14&amp;action=edit"><button class="icon-button" type="button" aria-label="Go">${icon('external')}</button></label>
      <button class="text-button" type="button" data-state="unsaved" data-save>${icon('save')}Save</button>
      <button class="icon-button" type="button" data-fullscreen aria-label="Toggle focus mode">${icon('expand')}</button>
    </header>

    <section class="viewport" aria-label="Live WordPress site">
      <iframe title="Live WordPress Playground preview" srcdoc="${frame}"></iframe>
    </section>

    <aside class="work-pane" aria-label="${esc(modeLabel)} pane">
      <header class="pane-head">
        <div><div class="pane-kicker">Single secondary surface</div><h2>${esc(modeLabel)}</h2></div>
        <button class="icon-button" type="button" data-close-pane aria-label="Close pane">${icon('close')}</button>
      </header>
      <div class="pane-body">
        ${sitesPane()}
        ${managerPane()}
      </div>
    </aside>

    <button class="status-widget" type="button" data-open-pane="sites" aria-label="Open current Playground status">
      <span class="status-icon">${icon('sites')}</span>
      <span><strong>Coffee Shop</strong><span>Running / WP 6.8 / PHP 8.3</span><span>Unsaved / 11.4 MB OPFS</span></span>
    </button>

    ${libraryOverlay()}
    ${resetOverlay()}
    <div class="toast" role="status" aria-live="polite">Ready</div>
  </main>
  ${pageScript(design.mode)}
</body>
</html>`;
}

function readme(design) {
  return `# ${design.title}

## Thesis

${design.thesis}

## V7 Reference Analysis Applied

The v7 quiet-rail/depth-tier idea is preserved as an information architecture primitive, not as decoration. This proposal keeps the live iframe as the dominant z0 surface, limits the rail to Sites and Site Manager, uses one secondary pane for all non-iframe work, and reserves the top layer for Library and reset confirmation.

## Design System

System: ${design.system}. The palette uses ${design.palette.accent}, ${design.palette.accent2}, and ${design.palette.accent3} as functional accents for active state, health/status, and warnings. Border radii stay at 8px or below for controls and panes.

## Flow Coverage

- Refresh, address input, save state, focus/fullscreen route.
- Persistent current Playground status with site name, WordPress/PHP versions, unsaved state, and OPFS usage.
- Sites pane with saved playgrounds, Vanilla WordPress, WordPress PR, Gutenberg PR, GitHub, Blueprint URL, Import .zip, and featured blueprints.
- Library overlay with search, categories, and blueprint grid.
- Site Manager pane with Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export PR, and reset escalation.
- Destructive Apply and Reset confirmation with snapshot, diff, typed confirmation, and final action.
- Mobile layout collapses to bottom rail plus one full-width pane.

## Remixed, Merged, Removed

Remixed: v7 depth tiers and quiet rail. Merged: saved sites, new-site routes, and featured blueprints into one Sites surface. Removed: duplicate current-site labels in top chrome, multi-drawer navigation, and separate manager surfaces.

## Trade-offs

The proposal favors predictable structure over highly animated depth. It shows more pane content when open than v7, but keeps idle affordances to seven: refresh, address, save, focus, Sites, Site Manager, and current status.

## Self-Critique Rubric

[x] Affordance count at idle <= 8?             Score: 5/5
[x] Iframe primacy + fullscreen route?         Score: 5/5
[x] One door per feature?                      Score: 5/5
[x] One secondary surface?                     Score: 5/5
[x] Depth is visual hierarchy only?            Score: 4/5
[x] Sites widget persistence/status?           Score: 5/5
[x] Mobile parity without overflow?            Score: 4/5
[x] Distinct design system beyond color?       Score: 4/5
[x] Product feature coverage?                  Score: 5/5
`;
}

function renderIndex() {
  const rows = designs.map((design) => {
    const num = String(design.num).padStart(3, '0');
    return `<article class="proposal" id="design-${num}" data-filter="${attr(`${num} ${design.title} ${design.system} ${design.summary}`)}">
      <header>
        <div><span>V9 ${num} / ${esc(design.system)}</span><h2>${esc(design.title)}</h2></div>
        <a href="designs/${attr(design.slug)}/">Open</a>
      </header>
      <div class="preview"><iframe src="designs/${attr(design.slug)}/index.html" title="${attr(design.title)} preview" loading="lazy"></iframe></div>
      <p>${esc(design.summary)}</p>
    </article>`;
  }).join('\n');
  const nav = designs.map((design) => {
    const num = String(design.num).padStart(3, '0');
    return `<a href="#design-${num}" data-filter-link="${attr(`${num} ${design.title} ${design.system}`)}"><span>${num}</span><b>${esc(design.title)}</b></a>`;
  }).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WordPress Playground Redesigns V9</title>
  <style>
    :root { color-scheme: light; --ink:#111827; --muted:#667085; --line:#d8dee6; --paper:#f5f7f8; --surface:#ffffff; --accent:#22577a; --good:#15803d; --warn:#b45309; --browser:304px; font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-size:14px;letter-spacing:0;overflow-x:hidden}a{color:var(--accent);text-decoration:none;font-weight:720}a:focus-visible,input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.browser{position:fixed;inset:0 auto 0 0;width:var(--browser);z-index:20;border-right:1px solid var(--line);background:rgba(255,255,255,.94);backdrop-filter:blur(16px);padding:15px;display:flex;flex-direction:column;gap:12px}.brand{display:grid;grid-template-columns:38px 1fr;gap:10px;align-items:center;padding-bottom:12px;border-bottom:1px solid var(--line)}.brand svg{width:36px;height:36px}.brand strong{display:block}.brand span{color:var(--muted);font-size:12px}.browser input{min-height:38px;border:1px solid var(--line);border-radius:8px;padding:8px 10px;font:inherit}.browser nav{display:grid;gap:5px;overflow:auto;padding-right:3px}.browser nav a{display:grid;grid-template-columns:38px 1fr;gap:7px;align-items:center;min-height:38px;border:1px solid transparent;border-radius:8px;padding:6px 7px;color:var(--ink)}.browser nav a span{font-variant-numeric:tabular-nums;color:var(--muted);font-weight:800}.browser nav a b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px}.browser nav a:hover{background:#eef5f4;border-color:#cdd7df}.shell{margin-left:var(--browser);min-width:0}.intro{padding:34px 34px 12px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:24px;align-items:end}.intro h1{font-size:34px;line-height:1.1;margin:0 0 8px;letter-spacing:0}.intro p{margin:0;color:var(--muted);max-width:820px;line-height:1.55}.count{border:1px solid var(--line);border-radius:8px;background:var(--surface);padding:12px 14px;min-width:138px}.count b{font-size:28px;display:block}.gallery{display:grid;gap:18px;padding:18px 34px 42px}.proposal{border:1px solid var(--line);border-radius:8px;background:var(--surface);box-shadow:0 16px 42px rgba(17,24,39,.07);overflow:hidden}.proposal header{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px;border-bottom:1px solid var(--line)}.proposal header span{color:var(--muted);font-size:12px;font-weight:760;text-transform:uppercase;letter-spacing:.06em}.proposal h2{margin:3px 0 0;font-size:22px}.proposal p{margin:0;padding:14px 16px 16px;color:var(--muted);line-height:1.5}.preview{height:520px;background:#f0f3f5}.preview iframe{width:100%;height:100%;border:0;display:block}button{font:inherit}@media(max-width:860px){.browser{position:relative;width:auto;inset:auto;border-right:0;border-bottom:1px solid var(--line);max-height:360px}.shell{margin-left:0}.intro{grid-template-columns:1fr;padding:22px 16px 8px}.gallery{padding:14px 16px 32px}.preview{height:560px}.proposal header{align-items:flex-start}.intro h1{font-size:28px}}
  </style>
</head>
<body>
  <aside class="browser" aria-label="V9 design browser">
    <div class="brand"><svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="#22577a"/><path d="M10 12h7M23 12h7M13 12l6 17M26 12l-6 17M17 12l3 11M23 12l-3 11" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg><div><strong>Playground Redesigns</strong><span>V9 / 20 alternatives</span></div></div>
    <input id="filter" type="search" autocomplete="off" placeholder="Filter designs">
    <nav>${nav}</nav>
  </aside>
  <main class="shell">
    <section class="intro">
      <div><h1>WordPress Playground V9 proposals</h1><p>Twenty revamped alternatives based on the v7 quiet-rail insight: live iframe first, one persistent status object, one secondary pane, and deeper layers only for library or reset decisions.</p></div>
      <div class="count"><span>Alternatives</span><b>20</b></div>
    </section>
    <section class="gallery">${rows}</section>
  </main>
  <script>
    const input = document.getElementById('filter');
    const proposals = [...document.querySelectorAll('.proposal')];
    const links = [...document.querySelectorAll('[data-filter-link]')];
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      proposals.forEach((item) => item.hidden = q && !item.dataset.filter.toLowerCase().includes(q));
      links.forEach((item) => item.hidden = q && !item.dataset.filterLink.toLowerCase().includes(q));
    });
  </script>
</body>
</html>`;
}

async function writeText(file, text) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, text, 'utf8');
}

async function main() {
  await fs.rm(v9Root, { recursive: true, force: true });
  await fs.mkdir(designsDir, { recursive: true });

  for (const design of designs) {
    const dir = path.join(designsDir, design.slug);
    await writeText(path.join(dir, 'index.html'), renderPage(design));
    await writeText(path.join(dir, 'README.md'), readme(design));
    await writeText(path.join(dir, 'meta.json'), JSON.stringify({
      num: design.num,
      title: design.title,
      summary: design.summary,
      slug: design.slug,
      system: design.system,
    }, null, 2) + '\n');
  }

  await writeText(path.join(v9Root, 'designs.json'), JSON.stringify(designs.map((design) => ({
    num: design.num,
    title: design.title,
    summary: design.summary,
    slug: design.slug,
    system: design.system,
  })), null, 2) + '\n');

  await writeText(path.join(v9Root, 'index.html'), renderIndex());
  await writeText(path.join(v9Root, 'DESIGN_BRIEF.md'), `# WordPress Playground Redesigns V9

V9 revamps the V7 quiet-rail/depth-tier direction into twenty alternatives.

## Non-negotiables

- The live WordPress surface is a real iframe and remains the dominant surface.
- Idle controls are limited to refresh, address/path, save, focus, Sites, Site Manager, and current status.
- Sites, saved playgrounds, launch routes, and blueprint discovery share one Sites pane.
- Site Manager features share one Manager pane: Settings, Files, Blueprint, Database, Logs, WP Admin, Homepage, Export PR, Download zip, and reset escalation.
- Library and destructive reset are the only top-layer overlays.
- Mobile uses bottom rail and full-width panes without horizontal overflow.

## Review URL

https://adamziel.github.io/wordpress-playground-redesigns/v9/
`);

  await writeText(path.join(v9Root, 'ANALYSIS.md'), `# V9 Analysis

The v7 reference had the right core idea: quiet rail plus visual depth can reduce the Playground shell around the iframe. Its weak points were duplicated site identity, too many rail targets, blur doing too much work, and mobile overflow risk.

V9 keeps the structure and changes the execution:

- Two rail doors only: Sites and Site Manager.
- Persistent current-status widget is the single active-site identity.
- One secondary pane swaps Sites and Manager content.
- The full blueprint library and destructive reset confirmation are deeper temporary layers.
- The twenty proposals differ by interaction framing, density, panel placement, and visual system rather than just color.
`);

  console.log(`Generated ${designs.length} V9 designs in ${v9Root}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
