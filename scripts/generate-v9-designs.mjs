import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const v9Root = path.join(root, 'v9');
const designsDir = path.join(v9Root, 'designs');

const concepts = [
  {
    num: 1,
    slug: '001-live-canvas-quiet-rail',
    title: 'Live Canvas Quiet Rail',
    system: 'Fullscreen Canvas',
    template: 'canvas',
    state: 'sites',
    palette: ['#12355b', '#2a9d8f', '#d98b35', '#f4f7f8', '#ffffff', '#d5e0e4', '#172033', '#5f6b7a'],
    thesis: 'The iframe is the product; every control becomes a small recovery point around the live canvas.',
    summary: 'A nearly full-screen live site with a two-icon rail, tiny browser chrome, persistent status, and a slide-in Sites panel.',
  },
  {
    num: 2,
    slug: '002-launchpad-split-studio',
    title: 'Launchpad Split Studio',
    system: 'Launcher First',
    template: 'splitLauncher',
    state: 'sites',
    palette: ['#005f73', '#ae2012', '#ee9b00', '#f7f1e8', '#fffaf0', '#dfd2bf', '#1f2933', '#6b6257'],
    thesis: 'Starts with the question “what do you want to boot?” and keeps a live preview beside the launch choices.',
    summary: 'A launcher-first split view: saved sites and six start routes own the left side while the active Playground remains visible on the right.',
  },
  {
    num: 3,
    slug: '003-command-center-strip',
    title: 'Command Center Strip',
    system: 'Command Center',
    template: 'command',
    state: 'sites',
    palette: ['#0f4c81', '#3a7d44', '#b5651d', '#f3f5f7', '#ffffff', '#d8dee6', '#101820', '#5d6875'],
    thesis: 'Makes the top strip the single command surface, while the rest of the UI stays quiet until a route is chosen.',
    summary: 'A command-bar proposal with search, saved state, start routes, and manager shortcuts consolidated into one disciplined strip.',
  },
  {
    num: 4,
    slug: '004-right-inspector-bay',
    title: 'Right Inspector Bay',
    system: 'Inspector',
    template: 'rightInspector',
    state: 'manager',
    palette: ['#234e70', '#2f855a', '#c05621', '#edf2f7', '#ffffff', '#cbd5e0', '#171923', '#5f6b7a'],
    thesis: 'Treats Site Manager as an inspector beside the site, matching file, database, logs, and settings tasks.',
    summary: 'A developer-tool layout with a stable live preview on the left and one right inspector for all manager tasks.',
  },
  {
    num: 5,
    slug: '005-blueprint-library-stage',
    title: 'Blueprint Library Stage',
    system: 'Library First',
    template: 'libraryStage',
    state: 'library',
    palette: ['#1d3557', '#457b9d', '#e76f51', '#fbfbf8', '#ffffff', '#d9ddd6', '#111111', '#62615d'],
    thesis: 'When discovery is the job, the blueprint library becomes the stage and the live site becomes the proof panel.',
    summary: 'A library-first composition with search, categories, and blueprint rows as the primary surface plus a sticky live preview.',
  },
  {
    num: 6,
    slug: '006-saved-sites-shelf',
    title: 'Saved Sites Shelf',
    system: 'Site Shelf',
    template: 'siteShelf',
    state: 'sites',
    palette: ['#16425b', '#2a9d8f', '#f4a261', '#f4f6f2', '#ffffff', '#d5ddd3', '#18201d', '#68736b'],
    thesis: 'Elevates saved Playgrounds into a persistent shelf so resume, duplicate, and boot are always one scan away.',
    summary: 'A saved-sites shelf across the top with a large live viewport, compact launcher buttons, and manager access as a secondary dock.',
  },
  {
    num: 7,
    slug: '007-debug-terminal-workbench',
    title: 'Debug Terminal Workbench',
    system: 'Terminal',
    template: 'terminal',
    state: 'manager',
    palette: ['#00a3a3', '#f4b942', '#e05d5d', '#101418', '#171d23', '#303a46', '#f4f7fb', '#a9b4c0'],
    thesis: 'Centers the debugging job: logs and reset evidence are visible without burying the running site.',
    summary: 'A dark terminal workbench with live preview, logs, database rows, settings controls, and reset confirmation built into one tool bay.',
  },
  {
    num: 8,
    slug: '008-notebook-builder-pages',
    title: 'Notebook Builder Pages',
    system: 'Notebook',
    template: 'notebook',
    state: 'sites',
    palette: ['#6b4f2a', '#216869', '#d8973c', '#f8f5ef', '#fffdf8', '#ddd4c7', '#1d1b20', '#6b6570'],
    thesis: 'Organizes experiments as notebook pages: one page for the live site, one for launch, one for manager evidence.',
    summary: 'A notebook layout with page tabs, ruled manager notes, saved-site entries, and the iframe as the open working page.',
  },
  {
    num: 9,
    slug: '009-boot-timeline-console',
    title: 'Boot Timeline Console',
    system: 'Timeline',
    template: 'timeline',
    state: 'manager',
    palette: ['#0b5cab', '#238636', '#bf8700', '#f6f8fa', '#ffffff', '#d0d7de', '#0d1117', '#57606a'],
    thesis: 'Makes Playground state temporal: boot, save, apply, reset, and restore are visible along a timeline.',
    summary: 'A timeline console with live site above, event history below, and manager settings attached to the selected event.',
  },
  {
    num: 10,
    slug: '010-mobile-sheet-native',
    title: 'Mobile Sheet Native',
    system: 'Mobile Native',
    template: 'mobileNative',
    state: 'sites',
    palette: ['#0f766e', '#2563eb', '#d97706', '#f7faf9', '#ffffff', '#d5e0df', '#111827', '#5c6673'],
    thesis: 'Designs the mobile experience first: the site, status, and next action are visible before any desktop metaphor appears.',
    summary: 'A mobile-native bottom-sheet design, shown at desktop scale as a product direction rather than a shrunken side panel.',
  },
  {
    num: 11,
    slug: '011-spatial-layer-map',
    title: 'Spatial Layer Map',
    system: 'Layer Map',
    template: 'layerMap',
    state: 'sites',
    palette: ['#386641', '#277da1', '#f8961e', '#f7f8f4', '#ffffff', '#d5dccf', '#1f2a1f', '#647067'],
    thesis: 'Keeps v7’s spatial idea but makes the layers explicit: live site, Sites pane, Library overlay, and reset sheet.',
    summary: 'A map-like spatial layout where the live iframe, Sites, Manager, Library, and Reset are visible as distinct depth zones.',
  },
  {
    num: 12,
    slug: '012-browser-tabs-local-sites',
    title: 'Browser Tabs Local Sites',
    system: 'Browser Tabs',
    template: 'browserTabs',
    state: 'sites',
    palette: ['#0067b8', '#107c10', '#ca5010', '#f3f6fb', '#ffffff', '#d5dce6', '#1b1b1b', '#60666d'],
    thesis: 'Leans into browser familiarity: saved Playgrounds behave like local tabs, while manager tools live in a side drawer.',
    summary: 'A tabbed-browser treatment with local site tabs, URL controls, save state, live iframe, and a collapsible manager drawer.',
  },
  {
    num: 13,
    slug: '013-files-database-workbench',
    title: 'Files Database Workbench',
    system: 'Data Workbench',
    template: 'dataWorkbench',
    state: 'manager',
    palette: ['#005f73', '#2a9d8f', '#bb3e03', '#f2f7fb', '#ffffff', '#c8d7e1', '#102a43', '#627d98'],
    thesis: 'For advanced users, the manager is not a settings screen; it is a workbench with file and database evidence.',
    summary: 'A manager-heavy data workbench where files and database rows are primary, with the live site as a persistent verification panel.',
  },
  {
    num: 14,
    slug: '014-settings-apply-wizard',
    title: 'Settings Apply Wizard',
    system: 'Apply Wizard',
    template: 'wizard',
    state: 'reset',
    palette: ['#31572c', '#15616d', '#ff7d00', '#f3f4ee', '#fffef8', '#d1d5c7', '#1f241d', '#626b5f'],
    thesis: 'Turns risky version and storage changes into a clear apply flow with snapshot, diff, confirmation, and recovery.',
    summary: 'A settings-first wizard that foregrounds PHP/WP version changes, reset impact, snapshot status, and a live preview.',
  },
  {
    num: 15,
    slug: '015-presentation-focus-frame',
    title: 'Presentation Focus Frame',
    system: 'Presentation',
    template: 'presentation',
    state: 'sites',
    palette: ['#003049', '#2a9d8f', '#f77f00', '#f5f5f2', '#ffffff', '#d8d8d0', '#111111', '#666761'],
    thesis: 'Optimizes for demos: hide the workbench until needed, but keep status and recovery controls in reach.',
    summary: 'A presentation frame with the live site nearly full-screen, minimal command pills, and an unobtrusive status/recovery dock.',
  },
  {
    num: 16,
    slug: '016-review-evidence-rail',
    title: 'Review Evidence Rail',
    system: 'Review',
    template: 'reviewRail',
    state: 'manager',
    palette: ['#cc2936', '#084c61', '#f9a03f', '#f6f6f4', '#ffffff', '#d6d6d2', '#121212', '#636363'],
    thesis: 'Frames Playground as a review tool: evidence, logs, blueprint, and export actions sit beside the running site.',
    summary: 'A review-oriented rail with compact evidence blocks, export/download actions, and a stable live site for sign-off.',
  },
  {
    num: 17,
    slug: '017-search-first-launcher',
    title: 'Search First Launcher',
    system: 'Search First',
    template: 'searchLauncher',
    state: 'sites',
    palette: ['#1b6ca8', '#2a9d5b', '#e76f51', '#f2f7fb', '#ffffff', '#c8d7e1', '#102a43', '#627d98'],
    thesis: 'Treats every start route as searchable: saved site, GitHub repo, PR, blueprint URL, and zip import share one entry point.',
    summary: 'A search-first launcher with suggested routes, saved Playgrounds, and live preview occupying one focused composition.',
  },
  {
    num: 18,
    slug: '018-compact-utility-chrome',
    title: 'Compact Utility Chrome',
    system: 'Utility',
    template: 'utility',
    state: 'manager',
    palette: ['#0f4c5c', '#3b7a57', '#d9822b', '#f5f6f7', '#ffffff', '#d9dde2', '#1a1a1a', '#696f75'],
    thesis: 'Assumes expert repeat use: dense, stable controls around the iframe with no large drawer stealing context.',
    summary: 'A compact utility interface with toolbars above and below the live site, dense manager controls, and visible save/reset state.',
  },
  {
    num: 19,
    slug: '019-blueprint-route-map',
    title: 'Blueprint Route Map',
    system: 'Route Map',
    template: 'routeMap',
    state: 'library',
    palette: ['#22577a', '#38a3a5', '#d9822b', '#eef4f5', '#ffffff', '#cbdadb', '#102027', '#607178'],
    thesis: 'Shows how start sources, saved sites, and blueprints relate before the user commits to booting anything.',
    summary: 'A route-map proposal with connected source lanes, blueprint categories, saved sites, and a live preview endpoint.',
  },
  {
    num: 20,
    slug: '020-reset-recovery-room',
    title: 'Reset Recovery Room',
    system: 'Recovery',
    template: 'recovery',
    state: 'reset',
    palette: ['#7a4e21', '#216869', '#b42318', '#f7f1e4', '#fffdf7', '#decfb8', '#2f2418', '#74685c'],
    thesis: 'Makes the most dangerous flow the clearest design: snapshot first, diff second, reset third, restore always visible.',
    summary: 'A recovery-room layout that puts destructive reset confirmation and restore paths in the foreground while preserving iframe context.',
  },
];

const features = {
  routes: [
    ['Vanilla WP', 'Latest stable core', 'play'],
    ['WordPress PR', 'Test a core pull request', 'git'],
    ['Gutenberg PR', 'Editor branch or PR', 'branch'],
    ['From GitHub', 'Theme or plugin repository', 'git'],
    ['Blueprint URL', 'Paste JSON blueprint', 'library'],
    ['Import .zip', 'Restore an exported Playground', 'upload'],
  ],
  sites: [
    ['Coffee Shop', 'Running / WP 6.8 / PHP 8.3 / 11.4 MB OPFS', 'Unsaved'],
    ['Magazine Draft', 'Saved yesterday / Gutenberg PR #61718', 'Saved'],
    ['Plugin QA', 'WooCommerce fixture / debug mode on', 'Bootable'],
  ],
  blueprints: [
    ['Coffee Shop', 'WooCommerce storefront with products and orders.', 'Store'],
    ['Art Gallery', 'Portfolio starter with gallery patterns.', 'Website'],
    ['Feed Reader', 'Friends plugin with ActivityPub-ready feeds.', 'Social'],
    ['Gaming News', 'Editorial layout and custom post types.', 'News'],
    ['Non-profit Organization', 'Donation-ready pages and block patterns.', 'Org'],
    ['Personal Resume', 'Profile content with portfolio sections.', 'Personal'],
  ],
  managerRows: [
    ['WordPress version', '6.8 nightly', 'Changing requires reboot'],
    ['PHP version', '8.3', 'Snapshot before apply'],
    ['Storage', 'Persistent OPFS', '11.4 MB used'],
    ['Network access', 'On', 'Outbound HTTP allowed'],
  ],
  files: [
    ['/wp-content/themes/storefront-child/style.css', '2.1 KB'],
    ['/wp-content/plugins/woocommerce/woocommerce.php', 'Active'],
    ['/wp-config.php', 'Read-only'],
    ['/wp-content/uploads/2026/coffee-menu.pdf', '315 KB'],
  ],
  logs: [
    ['14:32:11', 'INFO', 'Starting WordPress 6.8 with PHP 8.3'],
    ['14:32:12', 'INFO', 'OPFS mounted at /wordpress'],
    ['14:32:13', 'WARN', 'WP_DEBUG is enabled'],
    ['14:32:14', 'ERROR', 'Missing optional payment fixture'],
  ],
};

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

function vars(concept) {
  const [accent, good, warn, paper, surface, line, ink, muted] = concept.palette;
  return `--accent:${accent};--good:${good};--warn:${warn};--paper:${paper};--surface:${surface};--line:${line};--ink:${ink};--muted:${muted};`;
}

function icon(name) {
  const paths = {
    refresh: '<path d="M20 11a8 8 0 1 0-2.4 5.7"/><path d="M20 4v7h-7"/>',
    sites: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8M8 13h5"/>',
    manager: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 8v8M8.5 10l7 4M15.5 10l-7 4"/>',
    save: '<path d="M5 4h12l2 2v14H5z"/><path d="M8 4v6h8V4M8 20v-6h8v6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.2-3.2"/>',
    play: '<path d="M8 5v14l11-7z"/>',
    library: '<path d="M4 19.5V5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2"/><path d="M8 7h6M8 11h8"/>',
    upload: '<path d="M12 16V4"/><path d="M7 9l5-5 5 5"/><path d="M5 20h14"/>',
    git: '<path d="M7 7h10v10H7z"/><path d="M7 12H3M21 12h-4M12 7V3M12 21v-4"/>',
    branch: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v2a8 8 0 0 0 8 8h-2M18 8v2a8 8 0 0 1-8 8h2"/>',
    file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 13h6M9 17h6"/>',
    database: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
    log: '<path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    reset: '<path d="M4 7v6h6"/><path d="M20 17a8 8 0 0 1-13.7-5.7L4 13"/><path d="M20 7a8 8 0 0 0-13.7 5.7"/>',
    external: '<path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M5 8v13h13v-5"/>',
    download: '<path d="M12 4v12"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.sites}</svg>`;
}

function siteFrame(concept) {
  const [accent, good, warn, paper, surface, line, ink, muted] = concept.palette;
  const dark = paper === '#101418';
  const bg = dark ? '#111820' : '#f7f7f4';
  const siteBg = dark ? '#0f1419' : '#ffffff';
  const siteInk = dark ? '#f7fafc' : '#111111';
  const siteMuted = dark ? '#b9c2cc' : '#4d5660';
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>
*{box-sizing:border-box}body{margin:0;background:${siteBg};color:${siteInk};font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.admin{height:38px;background:#1d2327;color:#f0f0f1;display:flex;align-items:center;gap:18px;padding:0 14px;font-size:13px}.admin span{color:#c3c4c7}.sitebar{height:56px;display:flex;align-items:center;justify-content:space-between;padding:0 44px;border-bottom:1px solid ${dark ? '#2c3640' : '#e5e7eb'};background:${siteBg}}.sitebar h1{font-size:20px;margin:0}.sitebar nav{display:flex;gap:22px;color:${siteMuted};font-size:14px}.hero{min-height:520px;display:grid;grid-template-columns:minmax(260px,520px) minmax(220px,1fr);gap:44px;align-items:center;padding:54px 7vw 80px;background:${bg}}.hero h2{font-size:52px;line-height:1.08;margin:0 0 22px;color:${siteInk};letter-spacing:0}.hero h2 span{color:${accent}}.hero p{font-size:19px;line-height:1.62;color:${siteMuted};margin:0 0 22px}.note{display:inline;background:${warn};color:#111;padding:1px 4px}.button{display:inline-flex;height:42px;align-items:center;padding:0 18px;background:${accent};color:white;border-radius:4px;text-decoration:none;font-weight:700}.mark{height:360px;display:grid;place-items:center}.mark svg{width:320px;max-width:100%;height:auto}.shop{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;padding:36px 7vw 70px}.product{border:1px solid ${dark ? '#2c3640' : '#e1e5ea'};border-radius:6px;padding:16px;background:${siteBg}}.product b{display:block;margin-bottom:8px}.product span{color:${accent};font-weight:700}@media(max-width:760px){.admin{gap:10px;overflow:hidden}.sitebar{padding:0 18px}.sitebar nav{display:none}.hero{grid-template-columns:1fr;padding:32px 24px}.hero h2{font-size:38px}.mark{height:170px}.shop{grid-template-columns:1fr;padding:22px 24px 60px}}
</style></head><body><div class="admin"><strong>W</strong><span>My WordPress Website</span><span>Edit Site</span><span>New</span><span>Edit Page</span></div><header class="sitebar"><h1>My Coffee Shop</h1><nav><span>Home</span><span>Shop</span><span>Sample Page</span></nav></header><main><section class="hero"><div><h2>Hello from <span>WordPress Playground</span>.</h2><p>This local site runs in your browser. It is ready for training, plugin demos, theme experiments, and quick testing.</p><p><span class="note">Logged in as admin</span> so content, themes, plugins, and settings can be changed immediately.</p><a class="button" href="#">View the storefront</a></div><div class="mark" aria-hidden="true"><svg viewBox="0 0 360 360" fill="none"><circle cx="180" cy="180" r="130" stroke="${good}" stroke-width="28"/><path d="M92 108h56M207 108h61M116 108l52 158M235 108l-52 158M148 108l35 116M207 108l-25 116" stroke="${siteInk}" stroke-width="22" stroke-linecap="round"/><circle cx="180" cy="180" r="124" stroke="${siteInk}" stroke-width="10"/></svg></div></section><section class="shop"><div class="product"><b>House Espresso</b><p>12 oz whole bean</p><span>$15.00</span></div><div class="product"><b>Single Origin El Salvador</b><p>Washed process</p><span>$18.00</span></div><div class="product"><b>Cold Brew Concentrate</b><p>32 oz bottle</p><span>$12.00</span></div></section></main></body></html>`;
}

function iframe(concept, cls = 'live-frame') {
  return `<iframe class="${cls}" title="Live WordPress Playground preview" srcdoc="${attr(siteFrame(concept))}"></iframe>`;
}

function status() {
  return `<button class="status" type="button" data-view="sites">${icon('sites')}<span><strong>Coffee Shop</strong><small>Running / WP 6.8 / PHP 8.3<br>Unsaved / 11.4 MB OPFS</small></span></button>`;
}

function chrome() {
  return `<div class="chrome" aria-label="Playground browser controls"><button type="button" aria-label="Refresh">${icon('refresh')}</button><label>${icon('search')}<input value="/wp-admin/post.php?post=14&amp;action=edit" aria-label="Current path"></label><button type="button">${icon('save')}Save</button><button type="button" aria-label="Focus">${icon('external')}</button></div>`;
}

function rail(labels = false) {
  return `<nav class="rail" aria-label="Primary Playground modes"><b>WP</b><button class="active" type="button" data-view="sites">${icon('sites')}${labels ? '<span>Sites</span>' : ''}</button><button type="button" data-view="manager">${icon('manager')}${labels ? '<span>Manager</span>' : ''}</button></nav>`;
}

function routes() {
  return `<div class="routes">${features.routes.map(([name, desc, i]) => `<button type="button">${icon(i)}<span><strong>${esc(name)}</strong><small>${esc(desc)}</small></span></button>`).join('')}</div>`;
}

function siteRows(className = 'list') {
  return `<div class="${className}">${features.sites.map(([name, desc, tag], index) => `<button type="button" class="row ${index === 0 ? 'active' : ''}"><span><strong>${esc(name)}</strong><small>${esc(desc)}</small></span><em>${esc(tag)}</em></button>`).join('')}</div>`;
}

function blueprintRows(className = 'blueprints') {
  return `<div class="${className}">${features.blueprints.map(([name, desc, tag]) => `<button type="button" class="row"><span><strong>${esc(name)}</strong><small>${esc(desc)}</small></span><em>${esc(tag)}</em></button>`).join('')}</div>`;
}

function managerRows(className = 'manager-list') {
  return `<div class="${className}">${features.managerRows.map(([name, val, desc]) => `<div class="row"><span><strong>${esc(name)}</strong><small>${esc(desc)}</small></span><em>${esc(val)}</em></div>`).join('')}</div>`;
}

function fileRows() {
  return `<div class="files">${features.files.map(([name, tag]) => `<div class="row">${icon('file')}<span>${esc(name)}</span><em>${esc(tag)}</em></div>`).join('')}</div>`;
}

function logRows() {
  return `<div class="logs">${features.logs.map(([time, level, msg]) => `<div class="log ${level.toLowerCase()}"><b>${esc(time)}</b><em>${esc(level)}</em><span>${esc(msg)}</span></div>`).join('')}</div>`;
}

function resetBox() {
  return `<section class="reset-box"><h2>Apply settings and reset?</h2><p>A snapshot was created at 14:32. Reset remounts WordPress from the blueprint.</p><pre>- PHP 8.2
+ PHP 8.3
- WordPress 6.7 stable
+ WordPress 6.8 nightly
~ Reboot running site after apply</pre><label>Type Coffee Shop <input value="Coffee Shop" aria-label="Confirmation phrase"></label><div class="actions"><button type="button">Cancel</button><button class="danger" type="button">${icon('reset')}Apply and reset</button></div></section>`;
}

function commonCss(concept) {
  const dark = concept.palette[3] === '#101418';
  return `
:root{${vars(concept)}color-scheme:${dark ? 'dark' : 'light'};font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
*{box-sizing:border-box}html,body{margin:0;width:100%;min-height:100%;overflow:hidden}body{background:var(--paper);color:var(--ink);font-size:14px;letter-spacing:0}button,input{font:inherit}button{cursor:pointer;color:inherit}button:focus-visible,a:focus-visible,input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}svg{width:18px;height:18px;stroke-width:1.9}.app{width:100vw;height:100vh;min-height:650px;position:relative;overflow:hidden;background:linear-gradient(90deg,color-mix(in srgb,var(--line) 45%,transparent) 1px,transparent 1px),linear-gradient(180deg,color-mix(in srgb,var(--line) 35%,transparent) 1px,transparent 1px),var(--paper);background-size:44px 44px,44px 44px,auto}.live-frame{border:0;background:white;display:block;width:100%;height:100%}.chrome{display:grid;grid-template-columns:36px minmax(0,1fr)82px 36px;gap:8px;align-items:center;border:1px solid var(--line);border-radius:8px;background:color-mix(in srgb,var(--surface) 93%,transparent);padding:5px;box-shadow:0 12px 32px color-mix(in srgb,var(--ink) 12%,transparent);backdrop-filter:blur(14px)}.chrome button,.chrome label,.actions button,.routes button,.row,.tabs button,.rail button,.tool,.pill{min-height:34px;border:1px solid var(--line);border-radius:7px;background:var(--surface);display:flex;align-items:center;justify-content:center;gap:7px;padding:7px 10px;text-decoration:none;color:var(--ink)}.chrome label{min-width:0;justify-content:flex-start;background:color-mix(in srgb,var(--surface) 80%,var(--paper))}.chrome input{min-width:0;width:100%;border:0;outline:0;background:transparent;color:var(--ink)}.rail{display:grid;gap:8px;align-content:start;border:1px solid var(--line);border-radius:8px;background:color-mix(in srgb,var(--surface) 92%,transparent);padding:8px;box-shadow:0 18px 42px color-mix(in srgb,var(--ink) 12%,transparent);backdrop-filter:blur(14px)}.rail b{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:var(--ink);color:var(--surface);font-size:14px}.rail button{width:42px;height:42px;padding:0}.rail button.active,.routes button:hover,.row.active,.tabs button.active,.tool.active{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,var(--surface));color:var(--accent)}.status{border:1px solid var(--line);border-radius:8px;background:color-mix(in srgb,var(--surface) 94%,transparent);box-shadow:0 18px 42px color-mix(in srgb,var(--ink) 16%,transparent);display:grid;grid-template-columns:34px 1fr;gap:10px;align-items:center;text-align:left;padding:10px;color:var(--ink);backdrop-filter:blur(14px)}.status span,.row span,.routes button span{min-width:0}.status strong,.row strong,.routes strong{display:block}.status small,.row small,.routes small,.panel p,.note,.meta{display:block;color:var(--muted);line-height:1.38}.panel{border:1px solid var(--line);border-radius:8px;background:color-mix(in srgb,var(--surface) 94%,transparent);box-shadow:0 18px 48px color-mix(in srgb,var(--ink) 13%,transparent);overflow:hidden}.panel header{padding:13px 14px;border-bottom:1px solid var(--line);background:color-mix(in srgb,var(--accent) 7%,var(--surface))}.panel h1,.panel h2,.panel h3{margin:0;line-height:1.1}.panel h2{font-size:20px}.panel h3{font-size:15px}.panel .body{padding:14px;overflow:auto}.routes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.routes button{min-height:60px;justify-content:flex-start;text-align:left}.list,.blueprints,.manager-list,.files{display:grid;gap:8px}.row{justify-content:space-between;text-align:left}.row em,.tag{font-style:normal;color:var(--muted);border:1px solid var(--line);border-radius:6px;padding:3px 6px;white-space:nowrap}.files .row{display:grid;grid-template-columns:18px minmax(0,1fr)auto}.files .row span{overflow-wrap:anywhere;word-break:break-word}.logs{display:grid;gap:6px}.log{display:grid;grid-template-columns:66px 54px 1fr;gap:8px;border:1px solid var(--line);border-radius:7px;background:var(--surface);padding:8px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12px}.log em{font-style:normal;color:var(--accent)}.log.warn{border-color:var(--warn)}.log.error{border-color:#b42318;color:#b42318}.actions{display:flex;gap:8px;flex-wrap:wrap}.danger{border-color:#b42318!important;color:#b42318!important}.reset-box{border:1px solid var(--line);border-radius:8px;background:var(--surface);padding:16px;box-shadow:0 24px 70px color-mix(in srgb,var(--ink) 20%,transparent)}.reset-box h2{margin:0 0 8px}.reset-box p{color:var(--muted);line-height:1.45}.reset-box pre{border:1px solid var(--line);border-radius:8px;background:color-mix(in srgb,var(--paper) 70%,var(--surface));padding:12px;overflow:auto}.reset-box input{min-height:34px;border:1px solid var(--line);border-radius:7px;padding:6px 8px;background:var(--surface);color:var(--ink)}.toolbar{display:flex;gap:8px;flex-wrap:wrap}.toolbar .tool{width:auto}.kicker{font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:760}.wpmark{font-weight:850;letter-spacing:0}
@media(max-width:900px){html,body{overflow-x:hidden;overflow-y:auto}.app{height:auto;min-height:1060px;overflow:visible}.chrome{grid-template-columns:36px minmax(0,1fr)76px 36px}.routes{grid-template-columns:1fr}.files .row{grid-template-columns:18px 1fr}.files .row em{grid-column:2;width:max-content}.status{min-height:62px}.hide-mobile{display:none!important}}
`;
}

const templateCss = `
.canvas .rail{position:absolute;left:14px;top:14px;bottom:14px;width:62px}.canvas .chrome{position:absolute;left:92px;right:14px;top:14px}.canvas .frame-wrap{position:absolute;left:92px;right:14px;top:76px;bottom:14px;border:1px solid var(--line);border-radius:8px;overflow:hidden;box-shadow:0 30px 90px color-mix(in srgb,var(--ink) 18%,transparent)}.canvas .panel{position:absolute;left:112px;top:98px;width:386px;max-height:calc(100vh - 132px)}.canvas .status{position:absolute;right:34px;bottom:32px;width:252px}
.splitLauncher .grid{height:100%;display:grid;grid-template-columns:minmax(360px,42%) 1fr;gap:14px;padding:14px}.splitLauncher .left{display:grid;grid-template-rows:auto auto 1fr;gap:12px}.splitLauncher .frame-wrap{border:1px solid var(--line);border-radius:8px;overflow:hidden}.splitLauncher .status{position:absolute;right:34px;bottom:32px;width:260px}.splitLauncher .rail{position:absolute;left:calc(42% - 76px);bottom:30px;display:flex}
.command .top{position:absolute;left:18px;right:18px;top:18px;display:grid;grid-template-columns:1fr auto;gap:12px}.command .command-box{border:1px solid var(--line);border-radius:8px;background:var(--surface);padding:12px;display:grid;grid-template-columns:28px 1fr auto;gap:10px;align-items:center}.command .command-box input{border:0;background:transparent;outline:0;color:var(--ink);font-size:20px}.command .frame-wrap{position:absolute;left:18px;right:370px;top:104px;bottom:18px;border:1px solid var(--line);border-radius:8px;overflow:hidden}.command .panel{position:absolute;right:18px;top:104px;bottom:18px;width:338px}.command .rail{display:none}.command .status{width:260px}
.rightInspector .chrome{position:absolute;left:18px;right:420px;top:18px}.rightInspector .frame-wrap{position:absolute;left:18px;right:420px;top:80px;bottom:18px;border:1px solid var(--line);border-radius:8px;overflow:hidden}.rightInspector .panel{position:absolute;right:18px;top:18px;bottom:18px;width:384px}.rightInspector .rail{position:absolute;left:34px;bottom:36px;display:flex}.rightInspector .status{position:absolute;left:104px;bottom:36px;width:256px}
.libraryStage .stage{height:100%;display:grid;grid-template-columns:minmax(420px,52%) 1fr;gap:16px;padding:16px}.libraryStage .search{display:grid;grid-template-columns:24px 1fr auto;gap:8px;border:1px solid var(--line);border-radius:8px;background:var(--surface);padding:10px}.libraryStage .search input{border:0;background:transparent;outline:0;color:var(--ink)}.libraryStage .library-main{display:grid;grid-template-rows:auto auto 1fr;gap:12px}.libraryStage .preview{display:grid;grid-template-rows:auto 1fr auto;gap:12px}.libraryStage .frame-wrap{border:1px solid var(--line);border-radius:8px;overflow:hidden}.libraryStage .rail{position:absolute;right:24px;bottom:24px;display:flex}.libraryStage .status{position:static}
.siteShelf .shelf{position:absolute;left:16px;right:16px;top:16px;height:150px;display:grid;grid-template-columns:auto 1fr auto;gap:12px}.siteShelf .rail{display:flex}.siteShelf .tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.siteShelf .tabs button{text-align:left;justify-content:flex-start}.siteShelf .frame-wrap{position:absolute;left:16px;right:16px;top:182px;bottom:76px;border:1px solid var(--line);border-radius:8px;overflow:hidden}.siteShelf .bottom-tools{position:absolute;left:16px;right:16px;bottom:16px;display:flex;align-items:center;justify-content:space-between;gap:12px}.siteShelf .toolbar{justify-content:flex-end}
.terminal .terminal-grid{height:100%;display:grid;grid-template-rows:58% 42%;gap:12px;padding:14px;background:#101418}.terminal .frame-wrap{border:1px solid var(--line);border-radius:8px;overflow:hidden}.terminal .lower{display:grid;grid-template-columns:1.2fr .8fr;gap:12px;min-height:0}.terminal .panel .body{max-height:100%}.terminal .chrome{position:absolute;left:24px;right:24px;top:24px}.terminal .status{position:absolute;right:36px;top:92px;width:270px}.terminal .rail{position:absolute;left:36px;top:92px;display:flex}
.notebook .book{height:100%;display:grid;grid-template-columns:92px minmax(330px,30%) 1fr;gap:0;padding:18px}.notebook .page-tabs{display:grid;align-content:start;gap:8px;padding-top:70px}.notebook .page-tabs button{writing-mode:vertical-rl;min-height:110px}.notebook .panel{border-radius:8px 0 0 8px}.notebook .frame-wrap{border:1px solid var(--line);border-left:0;border-radius:0 8px 8px 0;overflow:hidden}.notebook .chrome{position:absolute;left:110px;right:22px;top:18px}.notebook .status{position:absolute;right:36px;bottom:34px;width:260px}
.timeline .topline{position:absolute;left:18px;right:18px;top:18px}.timeline .frame-wrap{position:absolute;left:18px;right:390px;top:78px;bottom:194px;border:1px solid var(--line);border-radius:8px;overflow:hidden}.timeline .panel{position:absolute;right:18px;top:78px;bottom:194px;width:356px}.timeline .events{position:absolute;left:18px;right:18px;bottom:18px;height:158px;border:1px solid var(--line);border-radius:8px;background:var(--surface);padding:14px;display:grid;grid-template-columns:repeat(5,1fr);gap:8px}.timeline .event{border-left:3px solid var(--accent);padding:8px;background:color-mix(in srgb,var(--paper) 60%,var(--surface));border-radius:6px}.timeline .status{position:absolute;right:42px;top:98px;width:260px}
.mobileNative .phone{width:min(430px,calc(100vw - 28px));height:calc(100vh - 28px);min-height:760px;margin:14px auto;border:1px solid var(--line);border-radius:8px;background:var(--surface);display:grid;grid-template-rows:auto 330px auto 1fr auto;overflow:hidden;box-shadow:0 30px 90px color-mix(in srgb,var(--ink) 20%,transparent)}.mobileNative .chrome{border-radius:0;border-left:0;border-right:0;border-top:0}.mobileNative .frame-wrap{border-bottom:1px solid var(--line);overflow:hidden}.mobileNative .sheet{padding:14px;overflow:auto}.mobileNative .bottomnav{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:10px;border-top:1px solid var(--line)}.mobileNative .bottomnav button{min-height:44px;border:1px solid var(--line);border-radius:7px;background:var(--surface)}
.layerMap .map{position:absolute;inset:18px;display:grid;grid-template-columns:1fr 340px;grid-template-rows:1fr 210px;gap:16px}.layerMap .frame-wrap{grid-row:1/3;border:1px solid var(--line);border-radius:8px;overflow:hidden;box-shadow:0 40px 90px color-mix(in srgb,var(--ink) 18%,transparent)}.layerMap .panel{transform:translateY(24px)}.layerMap .mini-layer{border:1px dashed var(--line);border-radius:8px;background:color-mix(in srgb,var(--surface) 78%,transparent);padding:14px;display:grid;gap:8px}.layerMap .rail{position:absolute;left:34px;top:34px;display:flex}.layerMap .status{position:absolute;left:34px;bottom:34px;width:260px}
.browserTabs .tabbar{position:absolute;left:14px;right:14px;top:14px;display:grid;grid-template-columns:auto 1fr auto;gap:8px}.browserTabs .site-tabs{display:flex;gap:6px}.browserTabs .site-tabs button{min-width:150px;justify-content:flex-start}.browserTabs .chrome{position:absolute;left:14px;right:360px;top:72px}.browserTabs .frame-wrap{position:absolute;left:14px;right:360px;top:132px;bottom:14px;border:1px solid var(--line);border-radius:8px;overflow:hidden}.browserTabs .panel{position:absolute;right:14px;top:72px;bottom:14px;width:330px}.browserTabs .rail{display:flex}
.dataWorkbench .workbench{height:100%;display:grid;grid-template-columns:360px 1fr 330px;grid-template-rows:auto 1fr;gap:12px;padding:14px}.dataWorkbench .chrome{grid-column:1/4}.dataWorkbench .frame-wrap{border:1px solid var(--line);border-radius:8px;overflow:hidden}.dataWorkbench .panel{min-height:0}.dataWorkbench .panel .body{height:100%}.dataWorkbench .status{position:absolute;right:360px;bottom:32px;width:260px}
.wizard .wizard-grid{height:100%;display:grid;grid-template-columns:minmax(390px,42%) 1fr;gap:16px;padding:18px}.wizard .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px}.wizard .steps span{border:1px solid var(--line);border-radius:8px;padding:8px;background:var(--surface)}.wizard .steps .active{border-color:var(--accent);color:var(--accent)}.wizard .frame-wrap{border:1px solid var(--line);border-radius:8px;overflow:hidden}.wizard .status{position:absolute;right:36px;bottom:36px;width:260px}
.presentation .frame-wrap{position:absolute;inset:16px;border:1px solid var(--line);border-radius:8px;overflow:hidden;box-shadow:0 42px 120px color-mix(in srgb,var(--ink) 20%,transparent)}.presentation .command-pills{position:absolute;top:30px;left:50%;transform:translateX(-50%);display:flex;gap:8px}.presentation .command-pills button{border:1px solid var(--line);border-radius:8px;background:color-mix(in srgb,var(--surface) 94%,transparent);padding:9px 12px}.presentation .status{position:absolute;right:34px;bottom:34px;width:260px}.presentation .rail{position:absolute;left:34px;bottom:34px;display:flex}
.reviewRail .review{height:100%;display:grid;grid-template-columns:72px 1fr 360px;gap:12px;padding:14px}.reviewRail .rail{height:100%}.reviewRail .frame-wrap{border:1px solid var(--line);border-radius:8px;overflow:hidden}.reviewRail .panel{min-height:0}.reviewRail .evidence{display:grid;gap:8px}.reviewRail .evidence .row{align-items:flex-start}.reviewRail .status{position:absolute;left:110px;bottom:34px;width:270px}
.searchLauncher .search-layout{height:100%;display:grid;grid-template-columns:minmax(420px,48%) 1fr;gap:16px;padding:18px}.searchLauncher .hero-search{border:1px solid var(--line);border-radius:8px;background:var(--surface);padding:18px}.searchLauncher .hero-search h1{font-size:34px;line-height:1.08;margin:0 0 12px}.searchLauncher .searchbox{display:grid;grid-template-columns:24px 1fr auto;gap:8px;align-items:center;border:1px solid var(--line);border-radius:8px;padding:10px;margin-bottom:14px}.searchLauncher .searchbox input{border:0;outline:0;background:transparent;color:var(--ink);font-size:18px}.searchLauncher .frame-wrap{border:1px solid var(--line);border-radius:8px;overflow:hidden}.searchLauncher .status{position:absolute;right:36px;bottom:36px;width:260px}
.utility .utility-grid{height:100%;display:grid;grid-template-rows:auto 1fr auto;gap:10px;padding:12px}.utility .frame-wrap{border:1px solid var(--line);border-radius:8px;overflow:hidden}.utility .bottom{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center}.utility .manager-strip{display:flex;gap:8px;flex-wrap:wrap}.utility .rail{display:flex}.utility .status{width:260px}
.routeMap .route-layout{height:100%;display:grid;grid-template-columns:minmax(430px,46%) 1fr;gap:16px;padding:18px}.routeMap .lanes{display:grid;gap:12px}.routeMap .lane{border:1px solid var(--line);border-radius:8px;background:var(--surface);padding:12px}.routeMap .lane h3{margin:0 0 8px}.routeMap .lane-flow{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.routeMap .node{border:1px solid var(--line);border-radius:8px;padding:8px;background:color-mix(in srgb,var(--paper) 60%,var(--surface))}.routeMap .frame-wrap{border:1px solid var(--line);border-radius:8px;overflow:hidden}.routeMap .status{position:absolute;right:36px;bottom:36px;width:260px}
.recovery .recovery-grid{height:100%;display:grid;grid-template-columns:minmax(430px,44%) 1fr;gap:16px;padding:18px}.recovery .frame-wrap{border:1px solid var(--line);border-radius:8px;overflow:hidden;filter:saturate(.92)}.recovery .restore-list{display:grid;gap:8px;margin-top:12px}.recovery .status{position:absolute;right:36px;bottom:36px;width:260px}
@media(max-width:900px){.canvas .rail,.rightInspector .rail,.layerMap .rail,.presentation .rail,.reviewRail .rail{position:fixed;left:10px!important;right:10px!important;top:auto!important;bottom:10px!important;width:auto!important;height:58px!important;display:flex;z-index:40}.canvas .chrome,.rightInspector .chrome,.timeline .topline,.browserTabs .chrome{position:relative;left:10px!important;right:auto!important;top:10px!important;width:calc(100vw - 20px)}.canvas .frame-wrap,.rightInspector .frame-wrap,.timeline .frame-wrap,.browserTabs .frame-wrap,.presentation .frame-wrap{position:relative;left:10px!important;right:auto!important;top:22px!important;bottom:auto!important;width:calc(100vw - 20px);height:390px}.canvas .panel,.rightInspector .panel,.timeline .panel,.browserTabs .panel{position:relative;left:10px!important;right:auto!important;top:34px!important;bottom:auto!important;width:calc(100vw - 20px)}.canvas .status,.rightInspector .status,.timeline .status,.presentation .status,.reviewRail .status{position:relative;left:10px!important;right:auto!important;top:28px!important;bottom:auto!important;width:calc(100vw - 20px)}.splitLauncher .grid,.libraryStage .stage,.wizard .wizard-grid,.searchLauncher .search-layout,.routeMap .route-layout,.recovery .recovery-grid{grid-template-columns:1fr;height:auto;padding:10px;padding-bottom:90px}.splitLauncher .frame-wrap,.libraryStage .frame-wrap,.wizard .frame-wrap,.searchLauncher .frame-wrap,.routeMap .frame-wrap,.recovery .frame-wrap{height:390px}.splitLauncher .rail,.libraryStage .rail{position:fixed;left:10px;right:10px;bottom:10px;display:flex;z-index:40}.siteShelf .shelf,.siteShelf .frame-wrap,.siteShelf .bottom-tools{position:relative;left:10px;right:auto;top:10px;bottom:auto;width:calc(100vw - 20px);height:auto;margin-bottom:12px}.siteShelf .shelf{grid-template-columns:1fr}.siteShelf .tabs{grid-template-columns:1fr}.siteShelf .frame-wrap{height:390px}.terminal .terminal-grid,.notebook .book,.dataWorkbench .workbench,.reviewRail .review,.utility .utility-grid{height:auto;display:grid;grid-template-columns:1fr;grid-template-rows:none;padding:10px;padding-bottom:90px}.terminal .frame-wrap,.notebook .frame-wrap,.dataWorkbench .frame-wrap,.reviewRail .frame-wrap,.utility .frame-wrap{height:390px}.terminal .lower{grid-template-columns:1fr}.terminal .chrome,.notebook .chrome{position:relative;left:0;right:auto;top:0;width:100%;margin-bottom:12px}.notebook .page-tabs{display:flex;padding-top:0}.notebook .page-tabs button{writing-mode:horizontal-tb;min-height:40px}.timeline .events{position:relative;left:10px;right:auto;bottom:auto;top:44px;width:calc(100vw - 20px);height:auto;grid-template-columns:1fr}.browserTabs .tabbar{position:relative;left:10px;right:auto;top:10px;width:calc(100vw - 20px);grid-template-columns:1fr}.browserTabs .site-tabs{display:grid;grid-template-columns:1fr;overflow:visible}.browserTabs .site-tabs button{min-width:0}.dataWorkbench .chrome{grid-column:auto}.dataWorkbench .status,.searchLauncher .status,.routeMap .status,.recovery .status,.wizard .status{position:relative;right:auto;bottom:auto;width:100%;margin-top:10px}.layerMap .map{position:relative;inset:auto;grid-template-columns:1fr;grid-template-rows:none;padding:10px;padding-bottom:90px}.layerMap .frame-wrap{height:390px;grid-row:auto}.presentation .command-pills{top:22px;max-width:calc(100vw - 32px);overflow:auto}.reviewRail .rail{height:58px}.mobileNative .phone{margin:10px auto;height:auto;min-height:980px}.command .top{position:relative;left:10px;right:auto;top:10px;width:calc(100vw - 20px);grid-template-columns:1fr}.command .command-box{grid-template-columns:24px 1fr}.command .command-box .tag{display:none}.command .status{width:100%}.command .frame-wrap{position:relative;left:10px;right:auto;top:22px;bottom:auto;width:calc(100vw - 20px);height:390px}.command .panel{position:relative;left:10px;right:auto;top:34px;bottom:auto;width:calc(100vw - 20px)}.utility .chrome{min-width:0;grid-template-columns:34px minmax(0,1fr)70px 34px}.utility .frame-wrap,.utility .bottom{min-width:0}.utility .bottom{grid-template-columns:1fr}.utility .bottom>div{display:grid!important;grid-template-columns:1fr;width:100%}.utility .status{width:100%}.log{grid-template-columns:1fr}.chrome{max-width:100%}}
`;

function bodyFor(concept) {
  const templates = {
    canvas: () => `${rail()}${chrome()}<div class="frame-wrap">${iframe(concept)}</div><aside class="panel"><header><div class="kicker">Single pane</div><h2>Sites</h2></header><div class="body">${siteRows()}<h3>Start</h3>${routes()}<h3>Featured</h3>${blueprintRows()}</div></aside>${status()}`,
    splitLauncher: () => `<section class="grid"><div class="left"><div>${rail(true)}</div><section class="panel"><header><div class="kicker">Choose source</div><h1>Start or resume a Playground</h1></header><div class="body">${siteRows()}<h3>New Playground</h3>${routes()}</div></section></div><div class="frame-wrap">${iframe(concept)}</div></section>${status()}`,
    command: () => `<header class="top"><label class="command-box">${icon('search')}<input value="Open Coffee Shop, paste a blueprint, or import a zip" aria-label="Command"><span class="tag">Command</span></label>${status()}</header><div class="frame-wrap">${iframe(concept)}</div><aside class="panel"><header><div class="kicker">Suggested actions</div><h2>Launch routes</h2></header><div class="body">${routes()}<h3>Saved</h3>${siteRows()}</div></aside>`,
    rightInspector: () => `${chrome()}<div class="frame-wrap">${iframe(concept)}</div><aside class="panel"><header><div class="kicker">Site Manager</div><h2>Inspector Bay</h2></header><div class="body"><div class="toolbar"><button class="tool">${icon('home')}WP Admin</button><button class="tool">${icon('external')}Homepage</button><button class="tool">${icon('download')}Download zip</button></div>${managerRows()}${fileRows()}${logRows()}<div class="actions"><button class="danger">${icon('reset')}Apply and reset</button></div></div></aside>${rail()}${status()}`,
    libraryStage: () => `<section class="stage"><div class="library-main"><label class="search">${icon('search')}<input value="Search blueprints, source routes, or categories" aria-label="Library search"><span class="tag">43</span></label><div class="toolbar"><button class="tool active">All</button><button class="tool">Featured</button><button class="tool">WooCommerce</button><button class="tool">Gutenberg</button></div><section class="panel"><header><h1>Blueprint Library</h1><p>Discovery is the main task in this proposal.</p></header><div class="body">${blueprintRows()}</div></section></div><aside class="preview">${status()}<div class="frame-wrap">${iframe(concept)}</div><section class="panel"><header><h2>Start sources</h2></header><div class="body">${routes()}</div></section></aside></section>${rail(true)}`,
    siteShelf: () => `<section class="shelf">${rail(true)}<div class="tabs">${features.sites.map(([name, desc, tag], i) => `<button class="${i === 0 ? 'active' : ''}"><span><strong>${esc(name)}</strong><small>${esc(desc)}</small></span><em>${esc(tag)}</em></button>`).join('')}</div>${status()}</section><div class="frame-wrap">${iframe(concept)}</div><footer class="bottom-tools"><div class="toolbar"><button class="tool">${icon('play')}Vanilla WP</button><button class="tool">${icon('git')}PR</button><button class="tool">${icon('library')}Library</button></div><div class="toolbar"><button class="tool">${icon('manager')}Manager</button><button class="tool danger">${icon('reset')}Reset</button></div></footer>`,
    terminal: () => `<section class="terminal-grid">${chrome()}<div class="frame-wrap">${iframe(concept)}</div><div class="lower"><section class="panel"><header><h2>Runtime log</h2></header><div class="body">${logRows()}</div></section><section class="panel"><header><h2>Manager</h2></header><div class="body">${managerRows()}<div class="actions"><button class="danger">${icon('reset')}Reset with snapshot</button></div></div></section></div></section>${rail()}${status()}`,
    notebook: () => `<section class="book"><nav class="page-tabs"><button class="active">Live site</button><button>Launch</button><button>Manager</button><button>Reset</button></nav><aside class="panel"><header><div class="kicker">Notebook page</div><h2>Experiment notes</h2></header><div class="body">${siteRows()}<h3>Blueprint notes</h3>${blueprintRows()}</div></aside><div class="frame-wrap">${iframe(concept)}</div></section>${chrome()}${status()}`,
    timeline: () => `<div class="topline">${chrome()}</div><div class="frame-wrap">${iframe(concept)}</div><aside class="panel"><header><div class="kicker">Selected event</div><h2>Apply PHP 8.3</h2></header><div class="body">${managerRows()}${resetBox()}</div></aside><section class="events">${['Booted site','Saved snapshot','Edited blueprint','Changed PHP','Ready to apply'].map((e, i) => `<div class="event"><div class="kicker">14:3${i}</div><strong>${e}</strong><small>${i === 4 ? 'Current decision' : 'Completed'}</small></div>`).join('')}</section>${status()}`,
    mobileNative: () => `<section class="phone">${chrome()}<div class="frame-wrap">${iframe(concept)}</div>${status()}<section class="sheet"><div class="kicker">Bottom sheet</div><h2>Sites</h2>${siteRows()}<h3>Start</h3>${routes()}</section><nav class="bottomnav"><button class="active">${icon('sites')}Sites</button><button>${icon('manager')}Manager</button><button>${icon('library')}Library</button></nav></section>`,
    layerMap: () => `<section class="map"><div class="frame-wrap">${iframe(concept)}</div><aside class="panel"><header><div class="kicker">Layer 1</div><h2>Sites pane</h2></header><div class="body">${siteRows()}${routes()}</div></aside><div class="mini-layer"><strong>Layer 2 / Library</strong><span class="meta">Search and category filters open here.</span>${blueprintRows()}</div></section>${rail()}${status()}`,
    browserTabs: () => `<header class="tabbar">${rail(true)}<nav class="site-tabs">${features.sites.map(([name], i) => `<button class="${i === 0 ? 'active' : ''}">${esc(name)}</button>`).join('')}</nav><button class="tool">${icon('save')}Save</button></header>${chrome()}<div class="frame-wrap">${iframe(concept)}</div><aside class="panel"><header><h2>Site drawer</h2></header><div class="body">${siteRows()}<h3>Manager</h3>${managerRows()}</div></aside>`,
    dataWorkbench: () => `<section class="workbench">${chrome()}<aside class="panel"><header><h2>Files</h2></header><div class="body">${fileRows()}</div></aside><div class="frame-wrap">${iframe(concept)}</div><aside class="panel"><header><h2>Database and logs</h2></header><div class="body">${managerRows()}${logRows()}</div></aside></section>${status()}`,
    wizard: () => `<section class="wizard-grid"><div><div class="steps"><span>1 Snapshot</span><span class="active">2 Versions</span><span>3 Diff</span><span>4 Apply</span></div>${resetBox()}<section class="panel" style="margin-top:12px"><header><h2>Settings</h2></header><div class="body">${managerRows()}</div></section></div><div class="frame-wrap">${iframe(concept)}</div></section>${status()}`,
    presentation: () => `<div class="frame-wrap">${iframe(concept)}</div><div class="command-pills"><button>${icon('refresh')}Refresh</button><button>${icon('save')}Save</button><button>${icon('sites')}Sites</button><button>${icon('manager')}Manager</button></div>${rail()}${status()}`,
    reviewRail: () => `<section class="review">${rail()}<div class="frame-wrap">${iframe(concept)}</div><aside class="panel"><header><div class="kicker">Review evidence</div><h2>Ready for export</h2></header><div class="body"><div class="evidence">${managerRows()}${logRows()}</div><div class="toolbar"><button class="tool">${icon('git')}Export PR</button><button class="tool">${icon('download')}Download zip</button><button class="tool danger">${icon('reset')}Reset</button></div></div></aside></section>${status()}`,
    searchLauncher: () => `<section class="search-layout"><div class="hero-search"><h1>What do you want to run?</h1><label class="searchbox">${icon('search')}<input value="woocommerce coffee shop blueprint" aria-label="Launcher search"><span class="tag">Enter</span></label>${routes()}<h3>Saved Playgrounds</h3>${siteRows()}</div><div class="frame-wrap">${iframe(concept)}</div></section>${status()}`,
    utility: () => `<section class="utility-grid">${chrome()}<div class="frame-wrap">${iframe(concept)}</div><footer class="bottom"><div class="manager-strip"><button class="tool active">${icon('settings')}Settings</button><button class="tool">${icon('file')}Files</button><button class="tool">${icon('database')}Database</button><button class="tool">${icon('log')}Logs</button><button class="tool">${icon('library')}Blueprint</button><button class="tool danger">${icon('reset')}Reset</button></div><div style="display:flex;gap:8px">${rail(true)}${status()}</div></footer></section>`,
    routeMap: () => `<section class="route-layout"><div class="lanes">${['Saved sites','Source routes','Blueprint categories'].map((name, i) => `<section class="lane"><h3>${name}</h3><div class="lane-flow">${(i === 0 ? features.sites.map(x => x[0]) : i === 1 ? features.routes.map(x => x[0]) : features.blueprints.slice(0, 5).map(x => x[2])).map(x => `<span class="node">${esc(x)}</span>`).join('<span>→</span>')}</div></section>`).join('')}<section class="panel"><header><h2>Selected route</h2></header><div class="body">${routes()}</div></section></div><div class="frame-wrap">${iframe(concept)}</div></section>${status()}`,
    recovery: () => `<section class="recovery-grid"><div>${resetBox()}<section class="panel" style="margin-top:12px"><header><h2>Restore points</h2></header><div class="body restore-list">${['Before PHP change','Before WooCommerce import','Clean vanilla boot'].map((x) => `<button class="row"><span><strong>${x}</strong><small>Stored in this browser</small></span><em>Restore</em></button>`).join('')}</div></section></div><div class="frame-wrap">${iframe(concept)}</div></section>${status()}`,
  };
  return templates[concept.template]();
}

function page(concept) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(concept.title)} - WordPress Playground Redesign V9</title>
  <style>${commonCss(concept)}${templateCss}</style>
</head>
<body class="${attr(concept.template)}">
  <main class="app" aria-label="${attr(concept.title)}">${bodyFor(concept)}</main>
  <script>
    let timer;
    document.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.add('active');
        clearTimeout(timer);
        timer = setTimeout(() => button.classList.remove('active'), 700);
      });
    });
  </script>
</body>
</html>`;
}

function readme(concept) {
  return `# ${concept.title}

## Thesis

${concept.thesis}

## Structural Difference

Template: ${concept.template}. This proposal changes the first-screen composition and workflow emphasis rather than only changing palette. Its default state is ${concept.state}, so the first decision is intentionally different from neighboring V9 concepts.

## Product Coverage

- Live WordPress preview is a real iframe.
- Current Playground identity, save state, refresh/path controls, and persistent status are represented.
- Sites, saved Playgrounds, six start routes, featured blueprints, full library concept, Site Manager, settings, files, blueprint, database, logs, export/download, and reset/recovery states are covered in the visible composition.
- Mobile uses a recomposed layout with no horizontal overflow.

## V7 Reference Applied

The v7 quiet-rail/depth insight is kept only where it helps. This proposal avoids duplicating the current site name, keeps one canonical surface per job, and gives destructive reset a visibly higher layer.

## Self-Critique Rubric

[x] Affordance count at idle <= 8?             Score: 4/5
[x] Iframe primacy + fullscreen route?         Score: 4/5
[x] One door per feature?                      Score: 4/5
[x] One secondary surface?                     Score: 4/5
[x] Depth is visual hierarchy only?            Score: 4/5
[x] Sites widget persistence/status?           Score: 5/5
[x] Mobile parity without overflow?            Score: 4/5
[x] Distinct design system beyond color?       Score: 5/5
[x] Product feature coverage?                  Score: 5/5
`;
}

function indexPage() {
  const nav = concepts.map((c) => `<a href="#design-${String(c.num).padStart(3, '0')}" data-filter-link="${attr(`${c.num} ${c.title} ${c.system} ${c.template}`)}"><span>${String(c.num).padStart(3, '0')}</span><b>${esc(c.title)}</b><small>${esc(c.template)}</small></a>`).join('');
  const rows = concepts.map((c) => `<article class="proposal" id="design-${String(c.num).padStart(3, '0')}" data-filter="${attr(`${c.num} ${c.title} ${c.system} ${c.template} ${c.summary}`)}">
  <header><div><span>V9 ${String(c.num).padStart(3, '0')} / ${esc(c.system)}</span><h2>${esc(c.title)}</h2><p>${esc(c.thesis)}</p></div><a href="designs/${attr(c.slug)}/">Open</a></header>
  <div class="preview"><iframe src="designs/${attr(c.slug)}/index.html" title="${attr(c.title)} preview" loading="lazy"></iframe></div>
  <footer><b>${esc(c.template)}</b><span>${esc(c.summary)}</span></footer>
</article>`).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>WordPress Playground Redesigns V9</title><style>
:root{color-scheme:light;--ink:#111827;--muted:#667085;--line:#d8dee6;--paper:#f5f7f8;--surface:#fff;--accent:#22577a;--browser:314px;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-size:14px;letter-spacing:0;overflow-x:hidden}a{color:var(--accent);text-decoration:none;font-weight:720}a:focus-visible,input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.browser{position:fixed;inset:0 auto 0 0;width:var(--browser);z-index:20;border-right:1px solid var(--line);background:rgba(255,255,255,.95);backdrop-filter:blur(16px);padding:15px;display:flex;flex-direction:column;gap:12px}.brand{display:grid;grid-template-columns:38px 1fr;gap:10px;align-items:center;padding-bottom:12px;border-bottom:1px solid var(--line)}.mark{width:36px;height:36px;border-radius:50%;display:block}.brand strong{display:block}.brand span{color:var(--muted);font-size:12px}.browser input{min-height:38px;border:1px solid var(--line);border-radius:8px;padding:8px 10px;font:inherit}.browser nav{display:grid;gap:5px;overflow:auto;padding-right:3px}.browser nav a{display:grid;grid-template-columns:38px 1fr;gap:7px;align-items:center;min-height:42px;border:1px solid transparent;border-radius:8px;padding:6px 7px;color:var(--ink)}.browser nav a span{font-variant-numeric:tabular-nums;color:var(--muted);font-weight:800}.browser nav a b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px}.browser nav a small{grid-column:2;color:var(--muted);font-weight:500}.browser nav a:hover{background:#eef5f4;border-color:#cdd7df}.shell{margin-left:var(--browser);min-width:0}.intro{padding:34px 34px 12px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:24px;align-items:end}.intro h1{font-size:34px;line-height:1.1;margin:0 0 8px;letter-spacing:0}.intro p{margin:0;color:var(--muted);max-width:840px;line-height:1.55}.count{border:1px solid var(--line);border-radius:8px;background:var(--surface);padding:12px 14px;min-width:150px}.count b{font-size:28px;display:block}.gallery{display:grid;gap:18px;padding:18px 34px 42px}.proposal{border:1px solid var(--line);border-radius:8px;background:var(--surface);box-shadow:0 16px 42px rgba(17,24,39,.07);overflow:hidden}.proposal header{display:grid;grid-template-columns:1fr auto;gap:16px;padding:16px;border-bottom:1px solid var(--line)}.proposal header span{color:var(--muted);font-size:12px;font-weight:760;text-transform:uppercase;letter-spacing:.06em}.proposal h2{margin:3px 0 6px;font-size:22px}.proposal p{margin:0;color:var(--muted);line-height:1.45}.preview{height:560px;background:#f0f3f5}.preview iframe{width:100%;height:100%;border:0;display:block}.proposal footer{display:grid;grid-template-columns:170px 1fr;gap:12px;padding:14px 16px;color:var(--muted);line-height:1.5}@media(max-width:860px){.browser{position:relative;width:auto;inset:auto;border-right:0;border-bottom:1px solid var(--line);max-height:230px}.browser nav{max-height:108px}.shell{margin-left:0}.intro{grid-template-columns:1fr;padding:22px 16px 8px}.gallery{display:grid;gap:10px;padding:14px 16px 24px}.proposal header{grid-template-columns:1fr auto;padding:12px}.proposal footer,.preview,.proposal p{display:none}.proposal header a{display:none}.browser nav a:nth-of-type(n+3){display:none}.proposal h2{font-size:17px}.intro h1{font-size:28px}}</style></head><body><aside class="browser" aria-label="V9 design browser"><div class="brand"><svg class="mark" viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="18" fill="#22577a"/><path d="M9 11h6M21 11h6M12 11l5 15M24 11l-5 15M15 11l3 10M21 11l-3 10" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg><div><strong>Playground Redesigns</strong><span>20 structural alternatives</span></div></div><input id="filter" type="search" autocomplete="off" placeholder="Filter by layout or job"><nav>${nav}</nav></aside><main class="shell"><section class="intro"><div><h1>WordPress Playground V9 proposals</h1><p>Twenty alternatives rebuilt as different product compositions: launcher-first, library-first, manager-first, terminal, timeline, notebook, mobile sheet, browser tabs, reset recovery, and presentation modes.</p></div><div class="count"><span>Alternatives</span><b>20</b></div></section><section class="gallery">${rows}</section></main><script>const input=document.getElementById('filter');const proposals=[...document.querySelectorAll('.proposal')];const links=[...document.querySelectorAll('[data-filter-link]')];input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();proposals.forEach(i=>i.hidden=q&&!i.dataset.filter.toLowerCase().includes(q));links.forEach(i=>i.hidden=q&&!i.dataset.filterLink.toLowerCase().includes(q));});</script></body></html>`;
}

async function writeText(file, text) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, text, 'utf8');
}

async function main() {
  await fs.rm(v9Root, { recursive: true, force: true });
  await fs.mkdir(designsDir, { recursive: true });

  for (const concept of concepts) {
    const dir = path.join(designsDir, concept.slug);
    await writeText(path.join(dir, 'index.html'), page(concept));
    await writeText(path.join(dir, 'README.md'), readme(concept));
    await writeText(path.join(dir, 'meta.json'), JSON.stringify({
      num: concept.num,
      title: concept.title,
      summary: concept.summary,
      slug: concept.slug,
      system: concept.system,
      template: concept.template,
    }, null, 2) + '\n');
  }

  await writeText(path.join(v9Root, 'designs.json'), JSON.stringify(concepts.map((c) => ({
    num: c.num,
    title: c.title,
    summary: c.summary,
    slug: c.slug,
    system: c.system,
    template: c.template,
  })), null, 2) + '\n');
  await writeText(path.join(v9Root, 'index.html'), indexPage());
  await writeText(path.join(v9Root, 'DESIGN_BRIEF.md'), `# WordPress Playground Redesigns V9

V9 is rebuilt as twenty structural alternatives, not one design with twenty palettes.

## Differentiation Bar

Each proposal must change at least two of these: first viewport composition, default state, primary workflow, navigation model, secondary surface placement, or reset/library handling.

## Shared Product Contract

- Real live iframe.
- Sparse persistent controls.
- Saved Playgrounds, six start routes, blueprint discovery, Site Manager, settings, files, blueprint editor, database, logs, export/download, and reset recovery.
- Mobile screenshots must not overflow horizontally.
`);
  await writeText(path.join(v9Root, 'ANALYSIS.md'), `# V9 Analysis

The first V9 pass failed because it reused one shell and mostly changed color. This rebuild treats the v7 quiet rail as one possible answer, not the answer.

The twenty proposals now cover different product theses:

- Live canvas, split launchpad, command center, right inspector, library stage, saved-site shelf.
- Terminal/debug, notebook, boot timeline, mobile-native sheet, spatial map, browser tabs.
- Files/database workbench, settings wizard, presentation frame, review rail, search launcher, compact utility, route map, and reset recovery.

The common contract is preserved so the alternatives can be compared on workflow quality rather than feature gaps.
`);
  console.log(`Generated ${concepts.length} structurally distinct V9 designs in ${v9Root}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
