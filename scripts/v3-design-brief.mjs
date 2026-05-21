const number = Number(process.argv[2] || 0);
if (!Number.isInteger(number) || number < 1 || number > 50) {
  console.error('Usage: node scripts/v3-design-brief.mjs <1-50>');
  process.exit(2);
}

const families = [
  {
    name: 'Mobile sheet shell',
    instruction:
      'Start from the mobile-first success: thumb-friendly bottom navigation, sheets, and progressive disclosure. Avoid a kitchen-sink More tab by giving Settings, Data/Logs, and Launcher clear homes.',
  },
  {
    name: 'Calm Figma canvas',
    instruction:
      'Use the spirit of Figma-like spatial frames, layers/assets, and selected-object inspector, but remove button clutter. One focused frame, sparse toolbar, contextual inspector, minimap/fit controls, and strong destructive confirmations.',
  },
  {
    name: 'Epic launcher to play mode',
    instruction:
      'Use the Epic-style launcher/library strength for blueprint discovery, saved Playgrounds, and a decisive launch surface, then transition into an uncluttered full-size Playground play mode.',
  },
  {
    name: 'macOS Settings refined',
    instruction:
      'Use Ventura Settings clarity: searchable categories, native rows, grouped panes, and a Live Preview default. Reduce category sprawl and include a clear full-size Playground mode.',
  },
  {
    name: 'Windows 11 Settings refined',
    instruction:
      'Use Windows 11 Settings calmness: whitespace, breadcrumbs, cards, and legible categories. Solve the full-size site interaction problem with a focus route or split-mode toggle.',
  },
  {
    name: 'Glass control center',
    instruction:
      'Use glassmorphism because it worked: the site is the backdrop, controls are frosted layers. Build contrast safeguards, solid-mode treatment, and careful progressive disclosure.',
  },
  {
    name: 'Tabs-only focus',
    instruction:
      'Use tabs as the single navigation primitive. Handle overflow and preserve a full-size Site tab/focus mode so the live Playground is not hidden behind management tabs.',
  },
  {
    name: 'iPad multitasking workspace',
    instruction:
      'Use iPad multitasking: primary live site, secondary swappable pane, Slide Over launcher, dock/shelf of saved Playgrounds, and explicit pane-switch affordance.',
  },
  {
    name: 'Inspector-first top bar',
    instruction:
      'Use the best inspector/devtools ideas: strong browser-like top bar, yellow unsaved warning, dockable/collapsible inspector, DevTools tabs for existing Files/Blueprint/DB/Logs.',
  },
  {
    name: 'Visual UI plus quiet console',
    instruction:
      'Use console + visual hybrid only as supporting history. Visual UI stays primary; command/event history helps users understand Save, reset, import, export, logs, and blueprint consequences.',
  },
];

const variations = [
  {
    name: 'First-touch calm',
    emphasis: 'first viewport should be calm and approachable, with only the current site, save state, URL, and one clear path into launch/tools visible',
    visual: 'quiet light UI with restrained WordPress blue, clear cards, and generous whitespace',
  },
  {
    name: 'Full-size site mode',
    emphasis: 'prioritize the mode switch that makes the Playground iframe full-size while keeping Save, URL, WP Admin/Homepage, and exit controls reachable',
    visual: 'immersive site-first chrome with translucent or edge-docked controls',
  },
  {
    name: 'Route input rigor',
    emphasis: 'show real input states for WordPress PR, Gutenberg PR/branch, GitHub import, Blueprint URL, and ZIP import instead of generic launch tiles',
    visual: 'compact workflow panels with precise labels, validation, and progress',
  },
  {
    name: 'Destructive-state rigor',
    emphasis: 'finish one destructive or replacement flow with warning, cancel, confirm, progress, result, and changed active state',
    visual: 'native-feeling confirmation sheets and unmissable amber/red state treatments',
  },
  {
    name: 'Saved identity rigor',
    emphasis: 'finish save/resume management: unsaved warning, save progress, saved row, active identity, rename/delete, and reset/reload consequence',
    visual: 'object rows and badges that stay legible without becoming a dense dashboard',
  },
];

const family = families[(number - 1) % families.length];
const round = Math.floor((number - 1) / families.length);
const variation = variations[round];

console.log(
  JSON.stringify(
    {
      number,
      family: family.name,
      direction: family.instruction,
      variation: variation.name,
      requiredEmphasis: variation.emphasis,
      visualLanguage: variation.visual,
      instruction:
        'Create a high-fidelity static HTML redesign under the assigned V3 folder. Preserve the current feature surface from DESIGN_BRIEF.md and do not add features.',
    },
    null,
    2
  )
);
