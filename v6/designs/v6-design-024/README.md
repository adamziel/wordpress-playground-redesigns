# V6 Design 024 - Context Capsule Playground

## Thesis

Context Capsule Playground solves the two-row-top-bar problem with one stable command capsule, two rail doors, and one smart-resize secondary surface. The capsule carries the identity/control layer in a single row: refresh, path, unsaved name, save, environment/settings access, and full-size preview. The rail only has Sites, Workbench, and Focus. Sites owns saved playgrounds, every launch route, import, and the blueprint gallery; Workbench owns the Site Manager tools. The live WordPress site stays in an actual iframe and remains the largest surface, with a one-click full-size preview and Esc exit.

## Remix / Merge / Remove

From `018-quiet-rail-to-loud`, I kept the quiet-to-loud reveal and one secondary surface, but reduced the primary IA to two true doors instead of separate Sites/Site Manager/Blueprints doors. From `023-smart-resize`, I kept the visible ratio idea and focus shift: the pane can collapse, the site has a focus route, and the seam labels the site/pane ratio. From `036-corner-widget-control-center`, I borrowed the idea that saved identity and launch belong together, but made it a compact Sites door instead of four corner widgets. From `035-three-layer-depth`, I borrowed elevation, blur, and tint as polish only. I explicitly did not use `030-two-row-top-bar`; identity and context are handled through the capsule plus the resizing pane rather than two persistent horizontal rows.

## TypeUI Contemporary

The assigned TypeUI skill is `contemporary`. I applied it through Jost as the primary/display font, Overpass Mono for labels and ratio/status text, high-contrast magenta and rose accents (`#C800DF`, `#E60076`), compact 4px/8px radii, comfortable 8px/16px spacing, bento-like route cards, bold active states, and a modern minimal surface model with one dark rail and one bright blurred work surface.

## Trade-offs

The settings shortcut in the capsule deep-links to Workbench Settings, so a strict one-door interpretation depends on understanding that Workbench is still the single settings home. I accepted that because the current product requires top-bar settings access and V6 feedback asks for discoverable context without another persistent row. The Sites pane starts open in the delivered state to make the required launch route input states immediately visible; closing it shows the quiet state. The iframe is a realistic `srcdoc` WordPress surface rather than a remote Playground instance, which keeps the GitHub Pages file reliable while preserving the iframe as the central live-site frame.

## Self-Critique / Revision Note

After checking `v6/INSIGHTS.md`, I revised toward two primary rail doors and moved blueprints fully inside Sites to avoid a third launcher door. After checking `v6/STYLE_VARIATION_SYSTEM.md`, I pushed the TypeUI Contemporary treatment beyond color: Jost/Overpass Mono, magenta/rose action grammar, 4px/8px geometry, and bento route forms are built into the component system. The riskiest spot is mobile density in the open pane, so the design keeps the rail as a bottom bar, the pane as one bottom sheet, and the iframe visible above it instead of wrapping the capsule into a persistent two-row toolbar.

## Feature Coverage Notes

- Top controls: refresh, address path, playground name, Save, Sites launcher, Workbench/tools, settings shortcut, and full-size preview.
- Sites: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, featured blueprints, 43-card gallery with search/category filters, and Your Playgrounds.
- Workbench: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export/Download actions represented in the Workbench header/actions and tool surfaces.
- States: loading/booting overlay, active session, launcher/gallery open, save/resume toast, destructive Apply & Reset with cancel/disabled/final states, route-specific inputs, and focus preview.
