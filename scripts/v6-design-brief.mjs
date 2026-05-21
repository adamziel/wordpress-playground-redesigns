const number = Number(process.argv[2] || 0);
if (!Number.isInteger(number) || number < 1 || number > 40) {
  console.error('Usage: node scripts/v6-design-brief.mjs <1-40>');
  process.exit(2);
}

const families = [
  {
    name: 'Quiet Rail, warmer product skin',
    instruction:
      'Use quiet-rail-to-loud for information architecture and interaction: a restrained always-available rail or edge strip, one reveal surface, strong quiet-to-loud transition, and one-door discipline. Do not copy its monochrome dark visual design.',
  },
  {
    name: 'Smart Resize, teachable focus',
    instruction:
      'Use smart resize as the core interaction: iframe and one secondary surface are both present, and focus changes the ratio. Make the teaching layer obvious with a gauge, snap labels, a one-shot pulse, or clear pane edge states.',
  },
  {
    name: 'Sites Widget Interaction',
    instruction:
      'Use the Sites widget from Corner-widget Control Center as an interaction model: a compact status widget that is also the canonical door into saved sites, start routes, and blueprint discovery. Prefer one Sites widget rather than four corner widgets.',
  },
  {
    name: 'Depth as visual polish, not navigation',
    instruction:
      'Use the visual style of three-layer depth: measured elevation, blur, shadow, and content-aware tint. Do not use depth as the primary interaction; keep IA grounded in rail, resize, widget, or pane behavior.',
  },
  {
    name: 'Rail plus smart resize hybrid',
    instruction:
      'Combine quiet rail IA with smart resize: the rail chooses the secondary surface, while focus or task state changes the iframe/pane ratio. Keep one secondary surface and preserve fullscreen escape.',
  },
  {
    name: 'Sites widget plus resize',
    instruction:
      'Combine the Sites widget with smart resize: saved identity and launch live in a compact widget, and choosing a site or tool changes the work ratio rather than opening unrelated drawers.',
  },
  {
    name: 'Professional depth surface',
    instruction:
      'Make a polished professional product surface using three-layer visual depth, but keep interactions conventional and legible: one rail, one pane, one launcher, one destructive confirm. No abstract z-stack navigation.',
  },
  {
    name: 'No two-row top bar alternative',
    instruction:
      'Explicitly solve the problem two-row top bar tried to solve without using two persistent rows. Keep identity stable and contextual actions discoverable through a rail, widget, single capsule, or resizing pane.',
  },
];

const variations = [
  {
    name: 'Information architecture rigor',
    emphasis: 'prove the one-door map for Sites, Site Manager, Blueprints, settings, exports, and saved identity; avoid duplicate doors even if the visual skin changes',
    visual: 'structured product UI with crisp grouping, clear section ownership, and no dashboard sprawl',
  },
  {
    name: 'Interaction clarity',
    emphasis: 'make the core interaction teach itself: rail expansion, resize ratio, sites widget expansion, or depth reveal must be visible as a state, not hidden in README prose',
    visual: 'high-fidelity interaction states with labels, ratios, focused edges, and transitions represented statically',
  },
  {
    name: 'Style variation',
    emphasis: 'show real input states for WordPress PR, Gutenberg PR/branch, GitHub import, Blueprint URL, and ZIP import instead of generic launch tiles',
    visual: 'use the assigned TypeUI style skill seriously: typography, palette, radius, density, and surface treatment must differ from neighboring V6 designs while staying product-ready',
  },
  {
    name: 'Full-size iframe and mobile parity',
    emphasis: 'include a credible fullscreen or near-fullscreen iframe route and make the mobile layout feel like the same product rather than a fallback',
    visual: 'responsive app chrome that keeps the iframe large and avoids persistent two-row top bars',
  },
  {
    name: 'Consequences and final states',
    emphasis: 'finish one destructive or replacement flow with warning, cancel, confirm, progress, result, and changed active state',
    visual: 'precise save/reset/import/export consequences, typed confirmation, and visible before/after identity state',
  },
];

const styleSkills = [
  'professional',
  'clean',
  'refined',
  'spacious',
  'corporate',
  'editorial',
  'material',
  'bento',
  'paper',
  'mono',
  'premium',
  'contemporary',
];

const family = families[(number - 1) % families.length];
const round = Math.floor((number - 1) / families.length);
const variation = variations[round];
const styleSkill = styleSkills[(number - 1) % styleSkills.length];

console.log(
  JSON.stringify(
    {
      number,
      family: family.name,
      direction: family.instruction,
      variation: variation.name,
      requiredEmphasis: variation.emphasis,
      visualLanguage: variation.visual,
      styleSkill,
      styleSkillFile: `v6/style-skills/typeui-${styleSkill}.md`,
      instruction:
        'Create a high-fidelity static HTML redesign under the assigned V6 folder. Preserve the current feature surface from DESIGN_BRIEF.md and do not add features.',
    },
    null,
    2
  )
);
