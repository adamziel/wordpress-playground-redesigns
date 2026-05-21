# V8 #002 — Warm Paper Studio

## Thesis

Warm Paper Studio treats Playground chrome like a working desk: the live WordPress iframe is the sheet on the table, the rail is a narrow row of labeled tabs, the secondary pane is a manila folder opened beside the site, and Library/reset overlays are stacked ledger sheets. Depth is communicated with paper edges, offsets, shadows, and ink density rather than glass or blur.

## V7 Reference Analysis Applied

The V7 reference worked because it established a clear contract: z0 iframe, quiet rail, one secondary pane, and z3 escalation. This version keeps that structure but fixes the review issues. The Sites widget persists while Sites, Manager, Library, and reset states are open. The current site name appears only in that widget, so the top chrome does not duplicate identity. The idle affordance count is honest: Refresh, Address, Save, More, Sites rail tab, Manager rail tab, Focus rail tab, and the Sites widget equals 8.

## Design System

The look is tactile and low-glare: cotton paper, ink blue, ledger green, folder ochre, oxide red, and graphite rules. Controls have small radii, visible focus rings, pressed paper shadows, and no frosted glass. The Manager pane uses ruled forms and tabs; Files and Blueprint share a split ledger/editor layout; Logs use narrow mono lines; the reset flow uses a signed ledger with a typed confirmation and final receipt.

## Flow Coverage

The prototype includes idle browsing with a real iframe, Sites open, Manager open, full Library with search and category filters, save/resume toasts, booting/progress state, WP Admin/Homepage navigation, all six start routes, featured blueprints, saved playgrounds, Settings/Files/Blueprint/Database/Logs tabs, Export to GitHub PR, Download `.zip`, Import `.zip`, destructive Apply & Reset confirm, and reset final state. Mobile uses the same IA with a bottom rail and bottom sheet at 390px without horizontal overflow.

## What Was Remixed

The old launcher drawer and Site Manager sidebar are merged into one paper pane selected by the rail. Settings is not a separate top-level surface; it is the first Manager tab. Database and Logs are not idle rail docks, which reduces visible controls while preserving direct access inside Manager. The Library is a z3 overlay, not another sidebar, and reset confirmation shares that same deep layer.

## Trade-Offs

The three-item rail is less direct for users who visit Logs constantly, but it keeps the idle surface within the V8 limit and makes Manager the single home for inspection tools. The warm paper direction has more visible texture than a neutral product shell, so the CSS uses subtle grain and restrained shadows to avoid making the chrome compete with the iframe.

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
