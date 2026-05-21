import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slug = process.argv[2];

if (!slug || !/^\d{3}-[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: node scripts/validate-v8-design.mjs 001-example-slug');
  process.exit(1);
}

const dir = path.join(root, 'v8', 'designs', slug);
const requiredFiles = ['index.html', 'README.md', 'meta.json'];

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

for (const file of requiredFiles) {
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
if (!meta.title || String(meta.title).trim().length < 4) fail('meta.title is too short');
if (!meta.summary || String(meta.summary).trim().length < 40) fail('meta.summary is too short');

const html = await read('index.html');
const readme = await read('README.md');
const combined = `${html}\n${readme}`;

if (!/<iframe\b/i.test(html)) fail('index.html must contain a real iframe element');

const requiredPatterns = [
  ['quiet rail', /quiet[- ]rail|rail/i],
  ['depth tiers', /depth|z0|z1|z2|z3|elevation|blur/i],
  ['Sites widget', /sites widget|site widget|sites capsule|sites status/i],
  ['Site Manager tabs', /Settings[\s\S]*Files[\s\S]*Blueprint[\s\S]*Database[\s\S]*Logs|Files[\s\S]*Blueprint[\s\S]*Database[\s\S]*Logs/i],
  ['launcher routes', /Vanilla WordPress/i],
  ['WordPress PR route', /WordPress PR/i],
  ['Gutenberg route', /Gutenberg/i],
  ['GitHub route', /From GitHub|GitHub repo/i],
  ['Blueprint URL route', /Blueprint URL/i],
  ['ZIP import/export', /Import \.zip|zip upload|Download \.zip/i],
  ['Library search/filter', /search/i],
  ['Reset flow', /Reset|Apply/i],
  ['Fullscreen route', /Fullscreen|full preview|Focus/i],
  ['mobile parity', /mobile|390|bottom rail|bottom sheet/i],
];

for (const [label, pattern] of requiredPatterns) {
  if (!pattern.test(combined)) fail(`missing coverage marker: ${label}`);
}

console.log(`${slug} validated.`);
