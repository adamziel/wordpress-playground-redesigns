# V6 Design 002 - Ratio Map Playground

## Thesis
Ratio Map Playground uses **Smart Resize, teachable focus** as the core interaction: the live WordPress iframe and a single secondary surface are always present, and the focused side earns more space. The seam between them is not a drag handle; it is a labeled gauge with a one-shot pulse and explicit snap states (`Site focus 78/22`, `Balanced 64/36`, `Pane focus 42/58`). This keeps the iframe central while making the layout behavior self-teaching.

## TypeUI Skill
I used the assigned **TypeUI Clean** skill from `v6/style-skills/typeui-clean.md`. It is applied beyond color through Poppins headings, Roboto body text, Inconsolata labels/code, an 8px spacing rhythm, 4px/8px radius rules, crisp white surfaces, thin neutral borders, semantic blue/violet/success/warning/danger states, compact icon buttons, and flat product grouping instead of decorative dashboard cards.

## Remix / Merge / Remove
From `023-smart-resize`, I kept focus-weighted panes, snap ratios, fullscreen escape, and a visible gauge, but added a stronger teaching layer. From `018-quiet-rail-to-loud`, I kept one secondary surface and one-door discipline, but replaced the dark rail skin with a clean structured product shell. From `036-corner-widget-control-center`, I kept the Sites widget idea as the canonical saved identity / launcher door, but did not copy four corner widgets. From `035-three-layer-depth`, I borrowed measured elevation and subtle blur for hierarchy only. I explicitly avoided `030-two-row-top-bar`: there is one compact top bar, and identity/context separation is solved through the Sites/Manager doorbar plus the secondary pane.

## One-door Map
Sites owns saved identity, resume, all six start routes, import `.zip`, featured blueprints, and the full 43-blueprint gallery with search and category filters. Site Manager owns Settings, Files, active Blueprint editor, Database, Logs, WP Admin, Homepage, and Additional Actions. Settings in the top bar routes directly to `Manager -> Settings`; it is not a duplicate popover. Exports live only in Actions and expose both GitHub PR export and Download `.zip`. The iframe owns refresh, path entry, and focus/fullscreen preview.

## Trade-offs
The secondary pane is always present on desktop, so the iframe only reaches 100% through focus preview/fullscreen. That is intentional for this direction: Playground should still feel like a tool around a live WordPress document, not a normal browser tab. The top bar has more visible controls than a pure quiet-rail design because the V6 brief requires refresh, address, save, saved identity, Site Manager, settings, and focus access. Mobile keeps the same model by rotating the seam into a horizontal divider and using the same pane sections, but tab labels compress to preserve width.

## Self-critique / Revision Note
After checking `v6/INSIGHTS.md` and `v6/STYLE_VARIATION_SYSTEM.md`, I revised toward stricter information ownership: Blueprints discovery lives inside Sites, while the active `blueprint.json` editor lives inside Manager as a different task. I also added the visible Door Map panel so the IA proof is in the design, not only in this README. Remaining risk: the top-bar Settings shortcut could still be read as a second door unless reviewers notice it routes to the same Manager tab; the Door Map calls this out directly.

## Feature Coverage
- Top bar: refresh, address/path input, playground name/state, Save, Sites launcher, Site Manager access, Settings route, focus/fullscreen.
- Launcher: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, featured blueprints, full 43 gallery, saved playgrounds.
- Site Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download `.zip`.
- States/flows: active session, launcher/gallery open, loading/booting overlay, save/resume toast, destructive reset confirmation, route-specific inputs, notification region, mobile parity.
