import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slug = process.argv[2];

if (!slug || !/^\d{3}-[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: node v10-with-skills/scripts/validate-design.mjs 001-example');
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
if (!['awesome-design-md', 'taste-skill', 'ui-ux-pro-max-skill'].includes(meta.skill)) {
  fail('meta.skill must name one of the requested skills');
}
if (!meta.title || String(meta.title).trim().length < 4) fail('meta.title is too short');
if (!meta.summary || String(meta.summary).trim().length < 40) fail('meta.summary is too short');
if (!meta.skillSource || String(meta.skillSource).trim().length < 10) fail('meta.skillSource is required');
if (!meta.flow || String(meta.flow).trim().length < 10) fail('meta.flow is required');

const html = await read('index.html');
const readme = await read('README.md');
const combined = `${html}\n${readme}\n${JSON.stringify(meta)}`;

if (!/<html[\s>]/i.test(html)) fail('index.html must be a full HTML document');
if (!/<meta[^>]+viewport/i.test(html)) fail('index.html must include viewport meta');
if (!/<iframe\b/i.test(html)) fail('index.html must contain a real iframe');
if (html.length < 14000) fail('index.html is too small for a high-fidelity prototype');
if (readme.length < 700) fail('README.md is too short');

const required = [
  ['refresh', /refresh/i],
  ['address or URL', /address|url|path/i],
  ['WP Admin', /wp admin/i],
  ['Homepage', /homepage/i],
  ['fullscreen or focus', /fullscreen|focus mode|full preview/i],
  ['save state', /unsaved|saving|saved|stale/i],
  ['saved playgrounds', /saved playground/i],
  ['Vanilla WordPress', /vanilla wordpress/i],
  ['WordPress PR', /wordpress pr/i],
  ['Gutenberg', /gutenberg/i],
  ['GitHub route', /from github|github repo/i],
  ['Blueprint URL', /blueprint url/i],
  ['Import zip', /import \.zip|zip upload|import zip/i],
  ['Blueprint gallery', /blueprint gallery|blueprint library|blueprints/i],
  ['search', /search/i],
  ['category filters', /category|filter/i],
  ['Settings tab', /settings/i],
  ['Files tab', /files?/i],
  ['Blueprint tab', /blueprint/i],
  ['Database tab', /database|sqlite|db/i],
  ['Logs tab', /logs?/i],
  ['PHP setting', /php/i],
  ['language setting', /language/i],
  ['network setting', /network/i],
  ['multisite setting', /multisite/i],
  ['Export to GitHub PR', /export to github pr/i],
  ['Download zip', /download \.zip|download zip/i],
  ['Apply and Reset', /apply\s*\+?\s*reset|reset/i],
  ['confirmation', /confirm|typed phrase|snapshot|undo|diff/i],
  ['booting state', /booting|starting|loading/i],
  ['mobile state', /mobile|390|bottom sheet|compact/i],
  ['skill annotation', /awesome-design-md|taste-skill|ui-ux-pro-max/i],
];

for (const [label, pattern] of required) {
  if (!pattern.test(combined)) fail(`missing coverage marker: ${label}`);
}

console.log(`${slug} validated`);

