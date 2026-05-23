import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slug = process.argv[2];

if (!slug || !/^\d{3}-[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: node v10/scripts/validate-design.mjs 001-example');
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
if (!['locked', 'structural'].includes(meta.model)) {
  fail("meta.model must be 'locked' or 'structural'");
}
if (!meta.title || String(meta.title).trim().length < 4) fail('meta.title is too short');
if (!meta.summary || String(meta.summary).trim().length < 40) fail('meta.summary is too short');
if (!meta.visualIdiom || String(meta.visualIdiom).trim().length < 3) fail('meta.visualIdiom required');
if (!meta.paneArrangement || String(meta.paneArrangement).trim().length < 3) fail('meta.paneArrangement required');
if (!meta.flow || String(meta.flow).trim().length < 8) fail('meta.flow required');

const html = await read('index.html');
const readme = await read('README.md');
const combined = `${html}\n${readme}\n${JSON.stringify(meta)}`;

if (!/<html[\s>]/i.test(html)) fail('index.html must be a full HTML document');
if (!/<meta[^>]+viewport/i.test(html)) fail('index.html must include viewport meta');
if (!/<iframe\b/i.test(html)) fail('index.html must contain a real iframe');
if (html.length < 14000) fail(`index.html is too small (${html.length} bytes)`);
if (readme.length < 700) fail('README.md is too short');

const required = [
  ['refresh', /refresh/i],
  ['address or URL', /address|url|path/i],
  ['WP Admin', /wp[ -]?admin/i],
  ['Homepage', /homepage|home page/i],
  ['fullscreen', /fullscreen|focus mode|full preview/i],
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

if (missing.length > 0) {
  fail(`missing coverage markers: ${missing.join(', ')}`);
}

console.log(`${slug} validated`);
