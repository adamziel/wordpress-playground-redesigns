# V8 #010 - Spatial Calm Depth

## Thesis

Spatial Calm Depth keeps the V8 quiet-rail contract and makes depth feel like focus distance instead of a draggable map. The live WordPress iframe is the only `z0` surface. The rail sits at `z1`, one secondary pane sits at `z2`, and Library/reset confirmations are the only `z3` surfaces. Subtle perspective offsets, blur, shadow, and the persistent Sites status capsule create spatial memory around the same rail/pane structure without introducing spatial canvas navigation.

## V7 Reference Analysis Applied

The V7 reference worked because each layer had a clear job, but the review called out disappearing site status, duplicate site identity, too many idle controls, and mobile overflow. This version reduces the rail to two docks: Sites and Manager. Settings, Files, Blueprint, Database, and Logs live as tabs inside the Manager pane. The top chrome does not repeat the site name; the Sites widget is the persistent identity and status object and remains visible when panes and overlays open.

## Design System / Look And Feel

The visual system is warm spatial minimalism: quiet paper-toned canvas, fine grid lines for orientation, translucent surfaces with 8px radii, and depth tokens expressed through `translateZ`, blur, and restrained shadow. It avoids dark glass and dashboard cards. Controls are compact, accessible, and browser-like, while the Sites widget uses a small orbital status mark to carry live site memory without becoming a second navigation model.

## Flow Coverage

The prototype covers idle active session, Sites open, Manager open, full Library with search and the 10 required category filters, save/resume/toast, booting from all start routes, settings change with Apply Settings & Reset confirmation, reset final state, WP Admin/Homepage navigation, Export to GitHub PR, Download `.zip`, Import `.zip`, File browser, Blueprint editor, Database, Logs, and mobile parity at 390px with a bottom rail and bottom sheet. The live WordPress area is a real `<iframe>`.

## What Was Remixed / Merged / Removed

The old Saved Playgrounds drawer is merged into the Sites pane with Yours/New/Featured segments. The settings popover is removed as a separate surface because Manager already has Settings. Database and Logs are not rail docks; they are Manager tabs, which keeps idle affordances under control. Library and reset stay as z3 overlays because they are temporary focus states, not persistent secondary panes.

## Trade-Offs

Sites has two ergonomic anchors: the rail dock and the persistent Sites widget. Both open the same Sites pane, so they are repeated handles for one destination rather than competing feature surfaces. Export and Download move one click deeper into Manager actions, which is less immediate than a top menu but keeps the idle chrome focused on browsing, saving, and entering fullscreen.

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

Idle count: Refresh, address bar, Save, Fullscreen, Sites rail dock, Manager rail dock, Sites widget = 7. The WordPress mark and z1 tier label are identity/status, not task affordances.
