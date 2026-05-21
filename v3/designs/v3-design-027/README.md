# V3 Design 027 - Tabs Route Workbench

## Thesis
This concept treats tabs as the only navigation primitive, but it avoids making every feature feel equally loud. The Site tab is the default usable workspace, with the live WordPress surface occupying nearly all available space and a Focus mode that removes management chrome while preserving Save, URL/path submit, Refresh, WP Admin, Homepage, and Exit. Everything else opens as a sibling tab, so users never have to reason about sidebars, drawers, popovers, and modal panels competing for ownership.

## Remix, Merge, Remove
I remixed the earlier tabs-only direction by making route input rigor the main differentiator. The Launcher tab does not show generic launch tiles: WordPress PR, Gutenberg PR/branch, GitHub import, Blueprint URL, and ZIP import each expose the exact fields needed to boot. The Saved Playgrounds drawer becomes the Launcher tab, the full blueprint browser becomes the Blueprints tab, and Site Manager becomes direct tabs for Settings, Files, Blueprint, Database, Logs, and Actions. The separate quick settings popover is removed; the top-bar gear simply activates the Settings tab, giving destructive Apply & Reset one canonical confirmation path.

## Trade-offs
The core trade-off is serial focus. Tabs are clear and predictable, but Files plus Site, Blueprint plus Logs, or Database plus Site cannot be viewed side by side. This is intentional for the assigned direction: the design chooses a single visible task over a dense cockpit. Tab overflow is handled by horizontal scrolling with an explicit hint, but long sessions can still feel crowded. The compensation is that the live site can always regain full size through Focus mode, and the most complex route decisions happen inside compact workflow panels instead of scattered menus.

## Self-Critique and Revision Note
After checking `v3/INSIGHTS.md`, I revised the first pass against the repeated V3 failures: the unsaved state is a prominent warning with browser-storage copy, destructive reset has a confirm/cancel/save-first state, ZIP import uses a real file input, and the full-size Site mode keeps the required controls. The remaining risk is that a pure tab model still makes power-user multitasking slower than an inspector or split-view design. For this variation, I accepted that cost to keep tabs as the single mental model and made the route forms and focus state do the extra work.
