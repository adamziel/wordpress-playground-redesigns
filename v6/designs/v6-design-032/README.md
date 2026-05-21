# V6 Design 032 - Capsule Bento Playground

## Thesis
Capsule Bento Playground solves the two-row-top-bar problem with one command capsule and one secondary bento tray. The capsule keeps stable identity and contextual actions in a single row: refresh, path, playground name, Save, Sites, Manager, Settings deep-link, and full-size preview. The iframe remains the central surface at idle and has a true full preview mode; the tray can be quiet, near-full preview, balanced, or work-focused through a visible ratio seam.

## TypeUI Skill Used
I used the assigned **TypeUI Bento** skill from `v6/style-skills/typeui-bento.md`. It is applied beyond colors through Inter typography, JetBrains Mono labels/code/logs, the 12/14/16/20/24/32 type scale, 4/8/12/16/24/32 spacing, 4px/8px radii, modular bento blocks, warm `#FFF5E6` surfaces, peach primary, blue secondary, semantic warning/danger/success states, and compact card-like route/tool groupings.

## Remix / Merge / Remove
From `018-quiet-rail-to-loud`, I kept the quiet-to-loud reveal and one secondary surface, but replaced the rail with a single capsule plus a compact Sites widget button. From `023-smart-resize`, I kept ratio detents, focus shift, and fullscreen escape, making the seam labeled so it teaches itself. From `036-corner-widget-control-center`, I kept the Sites widget interaction as the canonical saved/launch/blueprint door, without copying four corner widgets. From `035-three-layer-depth`, I borrowed measured elevation, blur, and tint as styling only. I explicitly avoided `030-two-row-top-bar`: there is no persistent identity row plus context row.

## Trade-Offs
The Settings icon in the capsule deep-links to Manager -> Settings, so top-bar settings access remains discoverable without opening a separate settings popover. That is a deliberate one-door compromise: Manager is still the single settings home. The Sites tray is information-heavy because it shows all six launch routes with real inputs, saved sites, featured blueprints, and the 43-card gallery; the ratio seam lets users shrink it back to a near-full iframe instead of leaving a broad dashboard open. On mobile, the same model rotates into a vertical split with the capsule staying one row and the tray becoming a bottom work surface, preserving product parity rather than a fallback.

## Self-Critique / Revision Note
Critical pass against `v6/INSIGHTS.md`: primary destinations are Sites and Manager, blueprint discovery is inside Sites, blueprint authoring is inside Manager, Settings is a Manager deep-link, exports stay in Manager actions, destructive reset shows consequence/cancel/final boot state, and the iframe has near-full and fullscreen routes. Critical pass against `v6/STYLE_VARIATION_SYSTEM.md`: Bento drives the component system rather than just the palette. I revised the mobile CSS so the capsule remains one row at 390px, labels collapse before wrapping, and the iframe keeps a usable floor above the tray. Remaining risk: the capsule has several controls, but it avoids the disliked persistent two-row structure and keeps the visible product model stable.

## Feature Coverage
Top controls: refresh, address/path input, playground name, Save, Saved Playgrounds/Sites launcher, Site Manager/tools access, Settings access, and full-size preview. Sites: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, featured blueprints, full gallery search/category filters, saved playgrounds, and resume. Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, and Download `.zip`. States: loading/booting, active session, launcher/gallery open, save/resume toast, destructive Apply & Reset confirmation, route-specific inputs, and fullscreen iframe.
