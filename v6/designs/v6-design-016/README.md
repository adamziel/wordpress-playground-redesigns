# V6 Design 016 - Rail Ratio Playground

## Thesis
Rail Ratio Playground solves the identity/context problem without a persistent two-row top bar. Identity lives in a compact Sites widget on the rail plus a single command capsule over the live WordPress iframe; context lives in one secondary workspace on the right. The resize seam is the teaching layer: `72/28`, `60/40`, `44/56`, and `90/10` are visible states, so users can see how the iframe and workspace trade space before they need to learn a hidden gesture.

## TypeUI Skill Used
I used the assigned TypeUI **Spacious** skill from `v6/style-skills/typeui-spacious.md`. It is applied beyond colors: Montserrat handles the larger product headings, Open Sans carries the body/UI text, IBM Plex Mono handles paths, labels, logs, code, and the ratio gauge, spacing follows an 8pt rhythm, radii stay at 4px/8px, the palette uses the prescribed blue/violet/success/warning/danger tokens, and the surface model is breathable white panels with restrained depth rather than dense dark chrome.

## Remix / Merge / Remove
From `018-quiet-rail-to-loud`, I kept the quiet rail and one-secondary-surface discipline, but changed the skin to a spacious light product system. From `023-smart-resize`, I kept focus ratios, detents, and full-size preview, but made the ratio gauge explicit and labeled. From `036-corner-widget-control-center`, I kept the Sites widget interaction as the canonical saved-site/launch door, without copying four corner widgets. From `035-three-layer-depth`, I borrowed elevation and blur only as polish. I explicitly avoided `030-two-row-top-bar`: the command capsule is one row, and contextual actions sit inside the rail/workspace system.

## Feature Coverage
The command capsule covers refresh, path input, playground name, Save, saved launcher access, Site Manager/settings access, and full-size preview. The Sites workspace covers Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, route-specific inputs, featured blueprints, the full 43-item gallery with search/category filters, and saved playground resume. The Manager workspace covers Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, and Download `.zip`. The design also renders loading/booting, save/resume toast, destructive Apply & Reset confirmation, and mobile parity.

## Trade-Offs
The right workspace is visible by default, so the iframe reaches pure 100% only through the full-size preview or the `90/10` peek ratio. That is the intended trade: Playground remains a tool wrapped around a live WordPress document, while the iframe still stays central and credible. The command capsule and rail both expose routes into Sites/Manager, but they resolve to the same canonical workspace instead of creating duplicate drawers or popovers. Mobile rotates the same model into site, seam, workspace, rail rather than inventing a separate hamburger fallback.

## Self-Critique / Revision Note
After checking `v6/INSIGHTS.md` and `v6/STYLE_VARIATION_SYSTEM.md`, I revised toward stricter one-door ownership: Blueprints discovery stays inside Sites, while active `blueprint.json` editing stays inside Manager. I also made the resize state visible in the first viewport with labeled ratio controls, because the assigned emphasis asks for interaction clarity visible in the design itself. The remaining risk is that the spacious style makes long developer surfaces like logs and the 43-card gallery scroll more, but the layout keeps the live site, launch flow, and tool surface understandable at both `1440x900` and `390x844`.
