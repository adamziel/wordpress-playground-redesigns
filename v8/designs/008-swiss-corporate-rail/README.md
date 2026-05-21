# Swiss Corporate Rail

## Thesis

Swiss Corporate Rail treats WordPress Playground like an enterprise operations console: the iframe remains the dominant z0 work surface, while a restrained two-item quiet rail provides only the two durable doors, Sites and Manager. The interface uses strong labels, table layouts, compact forms, clear state badges, and conservative blue/red/green semantics so the current site, storage status, and destructive choices are legible without decoration.

## V7 Reference Analysis Applied

The V7 reference proved the value of one rail, one pane, and z3 escalation, but its review called out too many idle affordances, a Sites widget that disappeared, duplicate site identity, and mobile cropping. This version keeps the same structural pattern but reduces the rail to Sites and Manager, keeps the Sites widget visible across idle, pane, Library, and reset states, removes the site name from the top chrome, and uses a bottom rail plus bottom sheet at 390 px without horizontal overflow.

## Design System And Look

The design system is Swiss corporate: Arial/system typography, strict grid rhythm, 1 px rules, square 6 px radii, high-contrast labels, dense but readable tables, and form controls that look built for repeated administrative work. Depth tiers are visual hierarchy only: z0 is the real iframe, z1 is the slim rail and top chrome, z2 is the single secondary pane, and z3 is the Library/reset overlay. Color is intentionally conservative: navy for primary navigation, neutral gray for structure, green for saved/running, amber for unsaved, and red for reset.

## Flow Coverage

The prototype covers idle browsing, Sites open, Manager open, full Library open with search and category filters, saving locally, resuming saved playgrounds, booting from start routes or blueprints, toast notifications, path navigation, refresh, WordPress Admin/Homepage jumps, Settings with WP/PHP/language/network/multisite controls, destructive Apply Settings & Reset confirmation and final state, File browser with New File/New Folder, Blueprint editor with copy/download/run actions and file tree, Database early-access browser, Logs search, Export to GitHub PR, Download `.zip`, and mobile parity with bottom rail and bottom sheet.

## Remix / Merge / Removal

Saved Playgrounds becomes the Sites pane, with Yours, Start, and Featured sections plus a z3 Library overlay for the full blueprint browser. The separate quick settings popover is merged into Manager Settings so settings have one owner. Files, Blueprint, Database, and Logs are Manager tabs rather than rail docks, which keeps the idle rail quiet while preserving all tools. Additional actions live in the Manager header instead of a separate top menu.

## Trade-Offs

The rail is less instantly expressive than V7 because advanced tabs are one click deeper in Manager. That is deliberate: Swiss corporate clarity favors a small persistent IA and dense labeled panes over many visible icons. The Sites widget duplicates the Sites rail door, but it is a persistent live status object first and the same destination second; it avoids duplicate site identity by being the only place that names the current playground at rest.

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

Idle affordance count: Refresh, address/path input, Save, Fullscreen, Sites rail button, Manager rail button, persistent Sites widget = 7. The WordPress mark, z-tier labels, status badges, and passive table rows are not counted as idle controls.
