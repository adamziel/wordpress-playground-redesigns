# V6 Design 019 - Material Sites Widget

## Thesis
This design uses the Sites widget as the canonical door into Playground. The first viewport is still a usable live WordPress session: one compact toolbar carries refresh, path, saved identity, Save, tools, settings, and full preview, while the Material Sites widget expands into the only secondary surface. That sheet owns saved playgrounds, all start routes, blueprint discovery, and Site Manager tools, with a visible ratio gauge that teaches how the live iframe and sheet trade space.

## TypeUI Skill Used
I used `material` from `v6/style-skills/typeui-material.md`. It is applied beyond color: Roboto drives display headings, Inter drives body and controls, Fira Code labels paths/code/logs/confirm phrases, spacing follows the 4/8/12/16/24/32 rhythm, radii stay at 4px and 8px, and surfaces use Material-style elevation, tonal purple, state color, focus rings, side sheets, toasts, modal confirmation, and explicit loading feedback.

## Remix / Merge / Remove
From `036-corner-widget-control-center`, I kept the useful compact status widget but reduced it to one Sites widget instead of four corners. From `018-quiet-rail-to-loud`, I kept the quiet-to-loud reveal and one secondary surface, but changed the skin to light Material surfaces. From `023-smart-resize`, I kept the ratio/gauge idea and made the detents visible as sheet/site focus buttons. From `035-three-layer-depth`, I borrowed elevation and blur only as hierarchy polish. I avoided `030-two-row-top-bar`; there is one toolbar, not persistent identity plus context rows.

## Trade-Offs
The toolbar still exposes Tools and Settings because the current Playground inventory requires top-level access, but both are deep links into the same Sites sheet rather than separate panels. Save appears in the toolbar and in the required unsaved notices; those buttons perform the same local-save transition and update the same widget state. The sheet can take meaningful width in tool focus, so the iframe yields space during Files, Logs, and Blueprint editing; the ratio gauge and full preview button make that trade reversible.

## Self-Critique / Revision Note
After checking `v6/INSIGHTS.md`, I revised the IA toward stricter ownership: blueprint discovery moved entirely under the Sites widget, while active `blueprint.json` authoring stays in Site Manager tools. After checking `v6/STYLE_VARIATION_SYSTEM.md`, I tightened the Material treatment through typography, radius, density, elevation, state language, and motion cues instead of only changing colors. Remaining risk: the top toolbar has several required controls, so the design relies on the Sites widget and single sheet to keep the actual destinations disciplined.

## Feature Coverage
- Top bar: refresh, address/path input, playground name/status, Save, saved playgrounds launcher, tools access, settings deep link, and full-size preview.
- Launcher: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, featured blueprints, full 43-blueprint gallery with search/category filters, and Your Playgrounds.
- Site Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, and Download `.zip`.
- States: active session, sheet/launcher open, booting/loading, save/resume toast, destructive Apply & Reset confirmation/cancel/final state, route-specific inputs, notification, and fullscreen focus mode.
