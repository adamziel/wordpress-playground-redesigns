# Mica OS Depth

## Thesis

Mica OS Depth treats WordPress Playground like a calm operating-system surface around a running app. The iframe stays sharp at `z0`; a compact quiet rail at `z1` exposes only Sites and Manager; a translucent settings-style pane at `z2` owns all secondary work; Library and reset confirmations escalate to `z3`. The wallpaper-sampled tint, soft borders, restrained Windows blue accent, Segoe-like typography, and 8px control radii are meant to feel closer to a system Settings app than to a marketing dashboard.

## V7 Reference Applied

The V7 reference proved that the rail/pane/overlay contract works, but its strict idle count and duplicated site identity were weak. This version cuts the rail from five docks to two doors: Sites and Manager. Settings, Files, Blueprint, Database, and Logs all live inside the same Manager pane as tabs, so rail shortcuts no longer inflate the idle surface. The current site name appears in the persistent Sites widget only; the top chrome carries browser controls, path, save status, export menu, and fullscreen.

## Design System

The Mica Operating System direction is expressed through translucent quiet surfaces, wallpaper-sampled tint, compact density, plain system typography, segmented settings tabs, calm rounded controls, and soft depth rather than heavy glass effects. The z tiers are visual hierarchy only: `z0` iframe, `z1` rail/top chrome/Sites widget, `z2` pane, and `z3` Library/reset overlays. Users click normal buttons, tabs, menus, and list rows; blur and elevation never become controls.

## Flow Coverage

The prototype includes idle browsing, Sites open, Manager open, full Library with search/category filters, save and resume states with toast feedback, booting from a source or blueprint, settings changes, typed destructive Apply & Reset confirmation, reset final state, WP Admin/Homepage path actions, export-to-GitHub-PR and Download `.zip`, import `.zip`, file browser/editor, blueprint editor, database notice/table, and logs search. The same structure collapses at 390px into a bottom rail and bottom sheet without horizontal overflow.

## Remix / Merge / Remove

The old launcher drawer becomes the Sites pane. The settings popover disappears because Manager Settings is the single settings home. Blueprint, Database, and Logs are not separate rail docks; they are Manager tabs. The Library remains a z3 overlay so discovery can be expansive without creating a second persistent sidebar. The Sites widget is persistent and opens the same Sites pane as the rail, but it also serves as the only active-site identity and live status readout.

## Trade-offs

The idle affordance count is exactly eight by strict count: Refresh, address field, Save, More, Fullscreen, Sites rail button, Manager rail button, and the Sites widget. Counting the static WP mark as an affordance would push the number higher, so it is intentionally non-clickable identity. The top chrome omits the site name to avoid duplication, which means the Sites widget carries more responsibility. The Mica effect is subtle by design; it relies on tint, blur, border, and spacing rather than dramatic contrast.

## Self-Critique Rubric

```text
[x] Affordance count at idle <= 8?             Score: 5/5
[x] Iframe primacy + fullscreen route?         Score: 5/5
[x] One door per feature?                      Score: 4/5
[x] One secondary surface?                     Score: 5/5
[x] Depth is visual hierarchy only?            Score: 5/5
[x] Sites widget persistence/status?           Score: 5/5
[x] Mobile parity without overflow?            Score: 5/5
[x] Distinct design system beyond color?       Score: 5/5
[x] Product feature coverage?                  Score: 5/5
```
