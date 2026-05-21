# V6 Design 034 - Reset Ledger Resize

## Thesis
Reset Ledger Resize uses the assigned **TypeUI Mono** skill as an instrument panel for WordPress Playground rather than as a terminal skin. The live WordPress site remains a real iframe and the main working surface; beside it is one mono ledger pane that can be Sites or Site Manager. The smart-resize gauge is the teaching layer: Site, Even, and Work snaps visibly change the iframe/pane ratio, while a one-shot pulse and pane/site focus clicks show that attention drives the layout.

## Remix / Merge / Remove
From `018-quiet-rail-to-loud`, I kept the quiet-to-loud ownership model and one secondary surface, but removed the dark rail skin and avoided a separate Blueprint door. From `023-smart-resize`, I made focus-as-layout the core interaction with labeled detents and a full preview state. From `036-corner-widget-control-center`, I kept the Sites idea as the canonical home for saved playgrounds, all six launch routes, ZIP import, featured blueprints, the 43-item gallery, and resume. From `035-three-layer-depth`, I borrowed only polish: restrained elevation, tint, and modal layering. I did not use `030-two-row-top-bar`; identity and actions live in one compact command row, and everything else swaps inside the single ledger pane.

## TypeUI Mono
The design names and uses `v6/style-skills/typeui-mono.md`. It applies Mono beyond color: Space Mono drives the app shell, JetBrains Mono handles labels, code, logs, route inputs, state metrics, and ratio controls; radii stay at 4px/8px; spacing is compact; the palette uses stone neutrals with high-signal green, cyan, amber, and red; surfaces use crisp borders and grid texture; state language is ledger-like with before/after identity, runtime metrics, typed confirmation, and final reset status.

## Trade-Offs
The pane is always present because the assigned direction asks for iframe and secondary surface together. The iframe still has a strong Site snap and a true full preview mode with Esc exit, but users who want pure browsing need one click. The Sites view is information-heavy because it shows concrete route forms instead of generic launch tiles, including PR URL, Gutenberg branch, GitHub repo/path, Blueprint URL, and a real ZIP drop area. On mobile the same smart-resize idea rotates vertically: iframe first, seam gauge, then the ledger pane.

## Self-Critique / Revision Note
Critical pass against `v6/INSIGHTS.md`: primary destinations are Sites and Site Manager, blueprints stay inside Sites, settings/files/blueprint/database/logs/export stay inside Manager, there is a real iframe, ZIP import is an upload/drop state, full preview is visible, and the reset flow includes warning, cancel, gated confirm, progress, result, and changed active identity. Critical pass against `v6/STYLE_VARIATION_SYSTEM.md`: Mono affects typography, palette, radius, density, surface model, controls, and state language. Revision after this pass: I strengthened the reset modal into a before/after ledger and made the final state update the top identity, runtime/storage metrics, toast, and iframe state label.

## Feature Coverage Notes
- Top controls: refresh, path input, Playground name, Save, Sites launcher, Site Manager access, settings deep link, full preview.
- Sites: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, featured blueprints, full 43-card gallery with search/category filters, and Your Playgrounds.
- Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download `.zip`.
- States: active session, loading/booting, launcher/gallery open, save/resume, destructive Apply & Reset with cancel/confirm/progress/result, route inputs, toast, and mobile parity.
