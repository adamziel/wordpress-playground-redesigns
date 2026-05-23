import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slug = process.argv[2];

if (!slug || !/^\d{3}-[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: node v11/scripts/validate-design.mjs 001-example');
  process.exit(1);
}

const dir = path.join(root, 'designs', slug);

function fail(message) {
  console.error(`${slug}: ${message}`);
  process.exit(1);
}

async function read(file) {
  try {
    return await fs.readFile(path.join(dir, file), 'utf8');
  } catch {
    fail(`missing ${file}`);
  }
}

for (const file of ['index.html', 'README.md', 'meta.json']) {
  try {
    const stat = await fs.stat(path.join(dir, file));
    if (!stat.isFile()) fail(`${file} is not a file`);
  } catch {
    fail(`missing ${file}`);
  }
}

let meta;
try {
  meta = JSON.parse(await read('meta.json'));
} catch (error) {
  fail(`invalid meta.json: ${error.message}`);
}

const num = Number(slug.slice(0, 3));
if (meta.num !== num) fail(`meta.num must be ${num}`);
if (meta.slug !== slug) fail(`meta.slug must be ${slug}`);
if (meta.model !== 'locked') fail("meta.model must be 'locked'");
if (!meta.title || String(meta.title).trim().length < 4) fail('meta.title is too short');
if (!meta.summary || String(meta.summary).trim().length < 40) fail('meta.summary is too short');
if (!meta.darkAccent || String(meta.darkAccent).trim().length < 5) fail('meta.darkAccent required');
if (!meta.typeface || String(meta.typeface).trim().length < 4) fail('meta.typeface required');
if (!meta.railTreatment || String(meta.railTreatment).trim().length < 8) fail('meta.railTreatment required');
if (!meta.paneArrangement || String(meta.paneArrangement).trim().length < 3) fail('meta.paneArrangement required');

const html = await read('index.html');
const readme = await read('README.md');
const combined = `${html}\n${readme}\n${JSON.stringify(meta)}`;

if (!/<html[\s>]/i.test(html)) fail('index.html must be a full HTML document');
if (!/<meta[^>]+viewport/i.test(html)) fail('index.html must include viewport meta');
if (!/<iframe\b/i.test(html)) fail('index.html must contain a real iframe');
if (html.length < 18000) fail(`index.html is too small (${html.length} bytes; need ≥ 18 000)`);
if (readme.length < 700) fail('README.md is too short');

// ---- v11 TASTE CONSTRAINTS ----

// 1. Forbidden typefaces in chrome.
const forbiddenFonts = [
  /font-family\s*:[^;]*\bInter\b/i,
  /font-family\s*:[^;]*\bRoboto(?!\s+Flex|\s+Serif|\s+Mono)\b/i,
  /font-family\s*:[^;]*\bHelvetica\b/i,
  /font-family\s*:[^;]*\bArial\b/i,
  /font-family\s*:[^;]*ui-sans-serif/i,
  /fonts\.googleapis\.com\/css2\?family=Inter\b/i,
  /fonts\.googleapis\.com\/css2\?family=Roboto(&|:|$)/i,
  /fonts\.googleapis\.com\/css2\?family=JetBrains\+Mono/i,
];
for (const re of forbiddenFonts) {
  if (re.test(html)) fail(`forbidden typeface referenced: ${re}`);
}

// 2. Forbidden purple/plum/violet/magenta hexes.
// Sample heuristic: hex colors with red+blue dominant and green low. We scan
// declared CSS hex values and flag any with H in [260°, 340°] and S>30 and L in [20-80].
function hexToHsl(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  if (hex.length !== 6) return null;
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return [h, s * 100, l * 100];
}

const hexMatches = html.matchAll(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g);
const purpleHits = new Set();
for (const m of hexMatches) {
  const hex = m[0];
  const hsl = hexToHsl(hex);
  if (!hsl) continue;
  const [h, s, l] = hsl;
  if (h >= 250 && h <= 340 && s > 22 && l > 18 && l < 82) {
    purpleHits.add(hex.toLowerCase());
  }
}
if (purpleHits.size > 0) {
  fail(`purple/plum/violet/magenta-leaning hex(es) detected: ${[...purpleHits].join(', ')}`);
}

// 3. Monospace fonts outside .code-editor / pre.code blocks.
// We strip out elements clearly marked as code editors (class contains "code-editor"
// or "editor-body" or "blueprint-json" or wrapping <pre class*="code">), then look for
// monospace declarations in the remaining HTML.
const editorStripped = html
  .replace(/<(pre|code|div|span)([^>]*class\s*=\s*["'][^"']*(?:code-editor|editor-body|editor-pane|blueprint-json|json-editor|file-editor|code-block|mono-editor)[^"']*["'])[^>]*>[\s\S]*?<\/\1>/gi, '')
  .replace(/\.(code-editor|editor-body|editor-pane|blueprint-json|json-editor|file-editor|code-block|mono-editor)\b[^{]*\{[^}]*\}/gi, '');

const monoOutsideEditor = [
  /font-family\s*:[^;]*\bJetBrains\s+Mono\b/i,
  /font-family\s*:[^;]*\bSpace\s+Mono\b/i,
  /font-family\s*:[^;]*\bIBM\s+Plex\s+Mono\b/i,
  /font-family\s*:[^;]*\bFira\s+Mono\b/i,
  /font-family\s*:[^;]*\bRoboto\s+Mono\b/i,
  /font-family\s*:[^;]*\bui-monospace\b/i,
  /font-family\s*:[^;]*\bConsolas\b/i,
  /font-family\s*:[^;]*\bMenlo\b/i,
  /font-family\s*:[^;]*\bmonospace\b/i,
];
for (const re of monoOutsideEditor) {
  if (re.test(editorStripped)) {
    fail(`monospace font referenced outside a code-editor block: ${re}`);
  }
}

// 4. The page background must be dark — find body { background... } and parse hex.
const bodyBgMatch = html.match(/body\s*\{[^}]*background(?:-color)?\s*:\s*([^;}]+)/i);
if (bodyBgMatch) {
  const hex = bodyBgMatch[1].match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/);
  if (hex) {
    const hsl = hexToHsl(hex[0]);
    if (hsl && hsl[2] > 30) {
      fail(`body background is too light (L=${hsl[2].toFixed(0)}%, hex ${hex[0]}); must be dark (L < 30)`);
    }
  }
}

// ---- FEATURE COVERAGE ----
const required = [
  ['refresh', /refresh/i],
  ['address or URL', /address|url|path/i],
  ['WP Admin', /wp[ -]?admin/i],
  ['Homepage', /homepage|home page/i],
  ['fullscreen', /fullscreen|focus mode/i],
  ['save state', /unsaved|saving|saved|stale/i],
  ['saved playgrounds', /saved playground|your playgrounds/i],
  ['Vanilla WordPress', /vanilla wordpress|vanilla wp/i],
  ['WordPress PR', /wordpress pr|wp pr/i],
  ['Gutenberg', /gutenberg/i],
  ['GitHub route', /from github|github repo/i],
  ['Blueprint URL', /blueprint url/i],
  ['Import zip', /import \.zip|import zip|zip upload/i],
  ['Blueprint gallery', /blueprint gallery|blueprint library|blueprints/i],
  ['search', /search/i],
  ['Featured filter', /featured/i],
  ['Website filter', /website/i],
  ['Personal filter', /personal/i],
  ['Themes filter', /themes/i],
  ['WooCommerce filter', /woocommerce|woo commerce/i],
  ['News filter', /news/i],
  ['Settings tab', /settings/i],
  ['Files tab', /files?/i],
  ['Database tab', /database|sqlite|db/i],
  ['Logs tab', /logs?/i],
  ['PHP setting', /php\s*\d|php version/i],
  ['language setting', /language/i],
  ['network setting', /network/i],
  ['multisite setting', /multisite/i],
  ['Export to GitHub PR', /export to github pr|export.*github|github.*pr/i],
  ['Download zip', /download \.zip|download zip|\.zip/i],
  ['Apply Reset', /apply[ -]*\+?[ -]*reset|reset playground|apply settings/i],
  ['confirmation', /confirm|typed phrase|snapshot|undo|diff|type the/i],
  ['booting state', /booting|starting|loading/i],
  ['mobile', /mobile|390|bottom sheet|bottom bar/i],
];

const missing = [];
for (const [label, pattern] of required) {
  if (!pattern.test(combined)) missing.push(label);
}
if (missing.length > 0) fail(`missing coverage markers: ${missing.join(', ')}`);

console.log(`${slug} validated`);
