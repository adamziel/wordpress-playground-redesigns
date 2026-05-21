# v6 Design 031 - Material Preview Rail

## Thesis
Material Preview Rail treats the live WordPress iframe as the product center and wraps it with a quiet Material shell: one compact rail, one command capsule, and one swappable sheet. The default state is intentionally quiet and iframe-heavy, while Sites or Manage opens a single elevated pane. Full preview is a first-class route that hides chrome and leaves only an Esc exit pill.

## TypeUI Skill Used
I used `v6/style-skills/typeui-material.md`. It is applied beyond color through Roboto display headings, Inter body text, Fira Code labels and code, the 4/8/12/16/24/32 spacing rhythm, 4px and 8px control radii, Material elevation levels, tinted surfaces, clear state feedback, semantic warning/danger/success states, and icon-led buttons.

## Remix, Merge, Remove
I kept the quiet-to-loud reveal and one secondary surface from V5 `018`, but changed the visual skin to a light Material surface system. I kept V5 `023`'s smart-resize lesson as a visible preview ratio card and explicit full preview route. I borrowed V5 `035` only for depth, blur, shadow, and layered polish, not as an abstract z-stack interaction model. I used the V5 `036` Sites-widget lesson by making Sites the canonical door for saved identity, new starts, import, resume, and blueprint discovery. I avoided V5 `030` by not using a persistent two-row top bar.

## One-Door Map
Sites owns saved identity, Save consequence, Your Playgrounds, Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, featured blueprints, and the full 43-blueprint gallery with search and filters. Site Manager owns Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, and Download `.zip`. Settings in the rail and toolbar deep-link to the same Manager settings tab rather than opening a duplicate popover.

## Trade-Offs
The top command capsule still exposes refresh, address, name, Save, and settings because those are high-frequency Playground controls, so the rail is not the only chrome. The payoff is that the iframe remains nearly full-size in the quiet state and the pane never competes as a second app. Mobile keeps the same product logic: the rail becomes a bottom rail, the same sheet rises from the bottom, and preview remains the same full-screen route rather than a mobile fallback.

## Critical Pass and Revision Note
After checking `v6/INSIGHTS.md`, I reduced primary destinations to Sites and Manage, kept blueprints inside Sites, made exports a Manager action instead of a rail door, and made quiet state the default. After checking `v6/STYLE_VARIATION_SYSTEM.md`, I strengthened Material at the component level: elevation, state colors, typography, icon buttons, dense but readable spacing, and modal/sheet behavior. Remaining risk: Save appears in the toolbar and in the Sites/Settings notices, but both represent the same local-save state transition and update the same status.

## Feature Coverage
The static mock includes refresh, address/path input, playground name, Save, saved playgrounds launcher, Site Manager/tools access, settings access, all six launcher routes with route-specific inputs, featured blueprints, full 43-gallery with search/category filters, saved playgrounds, Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download `.zip`, loading/booting, active session, launcher/gallery open, save/resume, destructive reset confirmation with cancel and disabled final state, toast notifications, and full preview.
