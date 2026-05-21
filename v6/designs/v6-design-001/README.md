# V6 Design 001 - Quiet Rail, Warm Command Surface

## Thesis
This design keeps the V5 quiet-rail interaction model but changes the skin into a warmer, structured product UI. The live WordPress site stays central; the black edge rail is quiet until the user asks for one of two canonical doors: Sites or Site Manager. Sites owns saved identity, saved playgrounds, new starts, imports, and the full blueprint gallery. Site Manager owns settings, files, blueprint editor, database, logs, WP Admin, Homepage, and exports. The single reveal pane is the only secondary surface, and the ratio seam teaches the user how to move between 68/32, wider preview, pane-heavy work, and full-size site focus.

## TypeUI Skill Used
I used `professional` from `v6/style-skills/typeui-professional.md`. It is applied beyond colors: Poppins drives the compact product type hierarchy, IBM Plex Mono is used for labels, addresses, code, logs, and the ratio gauge, the palette uses the required yellow primary with black/white professional contrast plus status colors, radii stay crisp at 4px/8px, and spacing follows the 4/8/12/16/24/32 rhythm. Buttons use dense icon-plus-label controls, surfaces are bordered and grouped rather than glassy or decorative, and state language is explicit through active rail bars, typed reset confirmation, toasts, loading, and saved-state dots.

## Remix / Merge / Remove
From `018-quiet-rail-to-loud`, I kept the quiet edge strip, loud reveal pane, and one-surface discipline, but removed the monochrome dark visual system. From `023-smart-resize`, I borrowed ratio teaching and detents, but made them explicit through a clickable seam rather than a hidden focus-only behavior. From `036-corner-widget-control-center`, I kept the Sites widget idea as a compact saved-identity door, but did not copy four corner widgets. From `035-three-layer-depth`, I borrowed light elevation, blur, and surface depth as polish only, not as navigation. I avoided `030-two-row-top-bar`: there is one compact command strip, not a persistent identity row plus context row.

## One-Door Map
- Sites: rail status / Sites door only. Contains Your Playgrounds, Start new, Blueprint gallery, and Import .zip.
- Blueprints: only inside Sites -> Blueprints. No separate blueprint launcher door.
- Saved identity: Sites -> Your Playgrounds plus the passive name/status in the command strip.
- Site Manager: rail Manager door only. Contains Settings, Files, Blueprint, Database, and Logs.
- Settings: Site Manager -> Settings. The top command gear opens the same Manager settings route instead of a separate popover.
- Exports: Site Manager header -> Export menu. Contains GitHub PR export and Download .zip.
- WP Admin and Homepage: Site Manager header only, as current-site navigation actions.

## Trade-Offs
The command strip still exposes quick icons for saved sites and settings because the current Playground feature inventory expects those top-level affordances. To keep one-door discipline, those icons route to the exact same Sites and Manager settings destinations rather than opening duplicate popovers. The reveal pane is intentionally narrow at rest; wide code and logs require the ratio seam or internal scrolling. On mobile, the same rail becomes a bottom strip and the reveal pane becomes a bottom sheet, preserving the same product map even though the geometry changes.

## Self-Critique / Revision Note
After checking `v6/INSIGHTS.md`, I revised the initial structure to remove a separate Blueprints rail button so the Sites door truly owns saved sites, launch, import, and discovery. The design preserves iframe primacy with a visible full-size focus mode, avoids a two-row top bar, uses one reveal pane for all secondary work, includes route-specific forms, shows loading/toast/save/reset states, and keeps mobile parity. The weakest seam is the top command settings shortcut, but it resolves to the canonical Manager settings view and does not create a second settings UI.
