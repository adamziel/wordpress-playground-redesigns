import fs from 'node:fs/promises';
import path from 'node:path';

const [designId] = process.argv.slice(2);
if (!/^v6-design-\d{3}$/.test(designId || '')) {
  console.error('Usage: node scripts/validate-v6-design.mjs v6-design-###');
  process.exit(2);
}

const root = process.cwd();
const num = Number(designId.slice(-3));
const dir = path.join(root, 'v6', 'designs', designId);
const htmlPath = path.join(dir, 'index.html');
const metaPath = path.join(dir, 'meta.json');
const readmePath = path.join(dir, 'README.md');

async function read(filePath) {
  return fs.readFile(filePath, 'utf8');
}

function assert(condition, message) {
  if (!condition) {
    console.error(message);
    process.exit(1);
  }
}

const html = await read(htmlPath).catch(() => '');
const meta = JSON.parse(await read(metaPath).catch(() => '{}'));
const readme = await read(readmePath).catch(() => '');
const source = `${html}\n${JSON.stringify(meta)}\n${readme}`;

assert(meta.num === num, `${designId}: meta.num must match folder number.`);
assert(typeof meta.title === 'string' && meta.title.length >= 6, `${designId}: meta.title is required.`);
assert(typeof meta.summary === 'string' && meta.summary.length >= 40, `${designId}: meta.summary is required.`);
assert(html.length > 9000, `${designId}: index.html is missing or too small for a high-fidelity design.`);
assert(/<html[\s>]/i.test(html), `${designId}: index.html must be a complete HTML document.`);
assert(/viewport/i.test(html), `${designId}: index.html must include responsive viewport metadata.`);
assert(readme.length > 400, `${designId}: README.md must document thesis, remix, and trade-offs.`);

const requiredSignals = [
  /iframe|live preview|wordpress site/i,
  /refresh/i,
  /address|url|path/i,
  /save/i,
  /saved playground/i,
  /vanilla wordpress/i,
  /wordpress pr/i,
  /gutenberg/i,
  /github/i,
  /blueprint url|blueprint/i,
  /zip/i,
  /settings/i,
  /php/i,
  /language/i,
  /network/i,
  /multisite/i,
  /file/i,
  /database|sqlite|db/i,
  /logs?/i,
  /export/i,
  /wp admin/i,
  /homepage/i,
  /confirm|cancel|warning|destructive|reset/i,
];

for (const signal of requiredSignals) {
  assert(signal.test(source), `${designId}: source is missing required UI signal ${signal}.`);
}

const v6Signals = [
  /full[- ]?size|focus mode|immersive|playing|preview/i,
  /quiet[- ]?rail|rail|smart resize|resize|ratio|gauge|sites widget|corner widget|three[- ]?layer|depth/i,
  /typeui|style skill|professional|clean|refined|spacious|corporate|editorial|material|bento|paper|mono|premium|contemporary/i,
];
for (const signal of v6Signals) {
  assert(signal.test(source), `${designId}: source is missing V6 feedback signal ${signal}.`);
}

console.log(`${designId} validated.`);
