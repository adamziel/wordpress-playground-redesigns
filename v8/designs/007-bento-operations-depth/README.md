# V8 #007 - Bento Operations Depth

## Thesis

Bento Operations Depth keeps the V8 quiet rail structure, but the secondary pane is organized as a set of compact bento work panels: resume/start panels in Sites, and focused operational panels for Settings, Files, Blueprint, Database, and Logs in Manager. The home screen remains the live WordPress iframe, not a dashboard; the bento system appears only after the user asks for operational context. Depth is visual hierarchy only: iframe `z0`, quiet rail/top chrome/Sites widget `z1`, one pane `z2`, Library and reset confirmations `z3`.

## V7 Reference Analysis Applied

V7 #010 proved the rail/pane/depth contract, but its review called out too many idle affordances, a disappearing Sites widget, duplicate site identity, and mobile overflow. This design uses only two idle rail doors, Sites and Manager, while Manager tabs hold Settings, Files, Blueprint, Database, and Logs. The Sites widget persists across idle, pane-open, Library, and reset states and is the only place where the current playground name is shown. The top chrome stays slim and task-oriented: refresh, address/path, save state, and fullscreen.

## Design System / Look And Feel

The Bento Operations system uses crisp off-white panels, graphite text, restrained teal/blue/amber status accents, tight 8px radii, and dense panel headers. Bento modules are not decorative cards on the iframe; they are operational groupings inside the one secondary pane, with consistent labels, counters, compact forms, and table-like rows. Depth is expressed through shadow, border contrast, and mild blur instead of a dark glass skin.

## Flow Coverage

The prototype covers idle active session, persistent Sites status, Sites open, Manager open, full Library search with the 10 required category filters and all 43 blueprint records, save/resume/toast transitions, booting from start routes, settings change with Apply & Reset confirmation, reset final state, WP Admin/Homepage navigation, Export to GitHub PR, Download `.zip`, Import `.zip`, File browser, Blueprint editor, Database, Logs, and mobile parity at 390px with a bottom rail and bottom sheet. The live WordPress surface is a real `<iframe>`.

## What Was Remixed / Merged / Removed

The Saved Playgrounds drawer becomes the Sites pane, grouped into Your Playgrounds, Start, Featured Blueprints, and Import bento panels. The separate settings popover is removed because Manager already contains Settings. Database and Logs are not separate rail affordances; they are Manager tabs that swap content inside the same pane. Library and reset are z3 overlays because they require temporary focus and should not compete with the one secondary pane.

## Trade-Offs

Sites has two handles: the quiet rail dock and the persistent Sites widget. Both open the same pane, so this is one destination with two ergonomic anchors rather than duplicate product surfaces. The bento pane is denser than a plain drawer, which improves feature coverage and scanning but requires careful mobile stacking. Export and Download are one click deeper in Manager to keep the idle surface within the affordance budget.

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

Idle count: Refresh, address input, Save, Fullscreen, Sites rail dock, Manager rail dock, Sites widget = 7. The WordPress mark, depth chip, and running status text are passive identity/status, not additional task affordances.
