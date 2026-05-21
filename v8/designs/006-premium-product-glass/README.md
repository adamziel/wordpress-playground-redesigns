# V8 #006 - Premium Product Glass

## Thesis

Premium Product Glass keeps the V8 quiet-rail contract but makes the chrome feel like a high-end SaaS product: restrained glass, small precise controls, and a persistent jewel-like Sites widget that owns live site identity. The iframe stays the only sharp `z0` surface; the rail is `z1`, the single pane is `z2`, and Library/reset confirmations are the only `z3` interruptions. The fullscreen route is always visible in the slim top chrome.

## V7 Reference Analysis Applied

The V7 reference worked because its layers had separate jobs, but the review called out too many idle affordances, a disappearing Sites widget, and duplicate site identity. This design reduces the rail to two docks only: Sites and Manager. Settings, Files, Blueprint, Database, and Logs live as tabs inside the Manager pane rather than as idle rail targets. The top chrome does not repeat "Coffee Shop"; the Sites widget carries the name and remains visible when panes and overlays are open.

## Design System / Look And Feel

The system uses light mineral glass instead of the darker V7 skin: translucent white panels, green/blue/amber status color, tight 8px radii, thin borders, and quiet shadows. The Sites widget is the one expressive object, using a small jewel mark and live dot so state feels valuable without turning the whole interface into decoration. Depth is communicated through blur and elevation only; users click named controls, not depth tiers.

## Flow Coverage

The prototype covers idle active session, Sites open, Manager open, full Library with search and the 10 required category filters, save/resume/toast, booting from start routes, settings change with Apply & Reset confirmation, reset final state, WP Admin/Homepage navigation, Export to GitHub PR, Download `.zip`, Import `.zip`, File browser, Blueprint editor, Database, Logs, and mobile parity at 390px with bottom rail and bottom sheet. The live WordPress area is a real `<iframe>`.

## What Was Remixed / Merged / Removed

The old Saved Playgrounds drawer becomes the Sites pane with Yours/New/Featured segments. The settings popover is removed as a separate surface because Manager already has Settings. Database and Logs are not separate rail doors; they are Manager tabs. Export and Download live in Manager actions. Library and reset remain z3 overlays because they are temporary focus states, not persistent secondary panes.

## Trade-Offs

The Sites feature has two ergonomic anchors: the rail Sites dock and the persistent Sites widget. Both open the same Sites pane, so this is a repeated handle for one destination rather than a second feature surface. The top chrome is intentionally sparse, which makes Export and Download one click deeper in Manager, but it keeps the idle state focused on the iframe and live status.

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

Idle count: Refresh, address, Save, Fullscreen, Sites rail dock, Manager rail dock, Sites widget = 7. The WordPress mark and z1 label are identity/status, not task affordances.
