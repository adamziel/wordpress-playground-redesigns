# V6 Design 021 - Paper Resize Rail

## Thesis
Paper Resize Rail combines the quiet rail IA with smart resize in a tactile document-desk style. The rail has two canonical doors: **Sites** for saved identity, launch routes, imports, saved Playgrounds, featured blueprints, and the full gallery; **Manager** for settings, files, active blueprint authoring, database, logs, WP Admin, Homepage, and exports. The live WordPress site is an actual iframe and remains the central surface, with visible resize detents plus a full-size focus mode that exits with Esc.

## TypeUI Skill Used
I used the assigned TypeUI **paper** skill from `v6/style-skills/typeui-paper.md`. It is applied beyond color: Montserrat shapes the product titles and card hierarchy, Roboto carries dense UI text, PT Mono is used for labels, path fields, logs, code, and ratio copy, radii stay at 4px/8px, spacing follows the 4/8/12/16/24/32 rhythm, surfaces use paper grain, ink borders, low shadows, and print-like dividers, and violet is reserved for selected or running states rather than becoming a generic blue dashboard skin.

## Remix / Merge / Remove
From `018-quiet-rail-to-loud`, I kept the restrained rail and one secondary surface, but changed the visual language and removed any separate Blueprints or Settings rail door. From `023-smart-resize`, I kept ratio detents, focus shift, and fullscreen escape, making the teaching layer visible through the seam and labeled detent chips. From `036-corner-widget-control-center`, I kept the Sites widget lesson as a canonical saved-site and launch door, without copying four corner widgets. From `035-three-layer-depth`, I borrowed only depth polish through shadows, texture, and modal elevation. I avoided `030-two-row-top-bar`; there is one compact command capsule, not persistent identity and context rows.

## Trade-Offs
The top command capsule still exposes required current toolbar actions, including a settings gear, but settings deep-links into the single Manager settings tab instead of opening another popover. That is the main compromise between current Playground feature coverage and strict one-door IA. The paper sheet can become dense during launch or file work, so the seam offers site-heavy, balanced, and work-heavy states, while full focus hides all chrome. Mobile keeps the same product model by rotating the rail to the bottom and turning the one sheet into a bottom pane with the iframe still visible.

## Self-Critique / Revision Note
After checking `v6/INSIGHTS.md`, I revised toward two primary rail doors only, made ZIP import a real dropzone, kept route-specific inputs for WordPress PR, Gutenberg PR/branch, GitHub import, Blueprint URL, and ZIP import, and used an actual iframe rather than a styled site mock. After checking `v6/STYLE_VARIATION_SYSTEM.md`, I pushed the paper style at the component level with tactile surfaces, ink rules, mono labels, compact radii, and print-like density. Remaining weakness: the command capsule's settings shortcut may still read as a second entry, so the UI routes it into Manager and the README names that trade.

## Coverage Notes
- Top controls: refresh, path input, playground name/status, Save, saved Playgrounds launcher, Manager/tools access, settings deep link, focus/fullscreen.
- Sites: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, featured blueprints, full 43-blueprint gallery with search and categories, Your Playgrounds.
- Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download `.zip`.
- States: active iframe session, launcher/gallery open, loading/booting overlay, save/resume toast, destructive reset confirmation with disabled final action, route input forms, and responsive mobile parity.
