# v6 Design 014 - Sites Resize Workbench

## Thesis
Sites Resize Workbench combines the Sites widget from V5 #036 with the smart-resize model from V5 #023. The Sites widget is the canonical saved-identity and launch door: saved sites, local save consequence, all six start routes, import `.zip`, featured blueprints, and the full gallery live there. The same single secondary surface then swaps into Settings, Files, Blueprint, Database, and Logs. Choosing a site, tool, or editor changes the visible ratio (`27/73`, `38/62`, `49/51`) instead of opening another drawer, so the live WordPress iframe remains a credible central surface and can still enter full preview with Esc-to-exit.

## TypeUI Skill
I used the assigned **TypeUI Clean** skill from `v6/style-skills/typeui-clean.md`. It shapes the design beyond colors: Poppins for headings, Roboto for product text, Inconsolata for labels/code/ratio chips, an 8px spacing rhythm, 4px and 8px radii, crisp white surfaces, thin neutral borders, semantic blue/violet/success/warning/danger states, flat utility cards, compact icon buttons, and explicit state labels rather than decorative chrome.

## Remix / Merge / Remove
From `018-quiet-rail-to-loud`, I kept restraint, one secondary surface, and the quiet-to-loud reveal, but replaced the dark rail with a clean widget-and-surface shell. From `023-smart-resize`, I kept focus as layout, detents, ratio gauge, loading state, and fullscreen escape, then made the teaching layer always visible through the widget mini-splits and seam labels. From `036-corner-widget-control-center`, I kept only the Sites widget interaction and did not copy four corner widgets. From `035-three-layer-depth`, I borrowed measured elevation and blur for hierarchy only. I explicitly avoided `030-two-row-top-bar`; identity and context are handled by one top command bar plus the Sites widget and the ratio surface.

## Feature Coverage
The mock covers refresh, address/path input, playground name, Save, Saved Playgrounds launcher, Site Manager/tools access, settings access, Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, featured blueprints, the full 43-blueprint gallery with search/category filters, saved playgrounds, Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download `.zip`, loading/booting, active session, launcher/gallery open, save/resume toast, destructive Apply & Reset confirmation/cancel/final state, route inputs, notification, and fullscreen/focus preview.

## Trade-Offs
The secondary surface is always present except in full preview, so this is less minimal than a pure iframe-only shell. I accept that because the assigned direction needs the Sites widget and ratio behavior to teach itself in the actual UI. The top command bar still exposes the required current toolbar controls, but Settings is a deep link into the Manager Settings tab rather than a second settings UI. On mobile, the same model rotates into a vertical split with a horizontal ratio gauge; the blueprint gallery requires scrolling, but it does not become a separate mobile product.

## Self-Critique / Revision Note
After checking `v6/INSIGHTS.md`, I revised the concept to fold all blueprint discovery into Sites and keep active `blueprint.json` authoring inside Manager, which prevents a duplicate Blueprints door. After checking `v6/STYLE_VARIATION_SYSTEM.md`, I tightened the Clean visual system through typography, density, radius, borders, icon weight, and state language instead of only changing the palette. Remaining risk: the top-bar Site Manager and Settings buttons can feel like two doors, so the UI labels Settings as a route into the same Manager surface rather than a separate popover.
