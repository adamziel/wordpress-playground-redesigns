# V6 Design 013 - Ratio Rail Workbench

## Thesis
Ratio Rail Workbench combines the quiet-rail information architecture from V5 018 with the smart-resize behavior from V5 023. The left rail has only three product doors plus focus, and every door opens the same secondary pane. The seam between pane and live WordPress preview is labeled with ratio detents, so the core interaction teaches itself: Sites and Settings use a balanced split, Tools expands the workbench, and Preview focus gives the iframe most of the screen without making fullscreen the only escape.

## Remix, Merge, Remove
I kept the V5 018 one-pane discipline and the V5 023 ratio/gauge idea, but changed the skin using the assigned TypeUI Professional style skill. That style is applied through Poppins and IBM Plex Mono, a compact 4/8/12/16/24/32 spacing rhythm, white business surfaces, black structural chrome, yellow primary action/status, restrained 4px and 8px radii, and visible state labels. The Sites widget from V5 036 is merged into the launcher pane as the canonical saved/new/blueprints door. V5 035 contributes only surface polish through elevation and mild blur; depth is not the navigation model. V5 030's persistent two-row top bar is removed.

## Feature Coverage
The mockup preserves the current Playground surface: refresh, path input, playground name, Save, saved playgrounds launcher, site tools, settings, fullscreen preview, all six start routes, route-specific PR/GitHub/Blueprint/ZIP inputs, featured blueprints, the full 43-blueprint gallery with search and category filters, saved playgrounds, Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download .zip, loading, active session, save/resume, destructive Apply & Reset confirmation/cancel/final state, and toast notifications.

## Trade-offs
The top chrome still exposes Sites, Tools, and Settings as required session actions while the rail is the stronger teaching device. That is a small visual duplication risk, but both sets open the same pane and keep one destination per feature. The secondary pane is always present on desktop rather than hidden; this makes the resize behavior obvious, but users who want a pure browser view must use the preview focus or fullscreen state. On mobile, the same rail, pane, seam, and preview stack vertically; the interaction model is preserved, but the pane necessarily becomes a lower workbench instead of a side workbench.

## Self-Critique and Revision Note
After checking against `v6/INSIGHTS.md`, I revised the design to make the seam and teaching card explicit rather than relying on README explanation. The rail expansion state, ratio detents, Sites widget expansion, fullscreen escape, and destructive reset modal are all visible in the UI. The design avoids a persistent two-row bar, keeps one secondary surface, and uses a professional visual language beyond color: typography, density, radius, elevation, icon/button shape, and state language all come from TypeUI Professional.

```
[x] Quiet rail IA without copying V5 018 skin?       Score: 5/5
[x] Smart resize visible and self-teaching?          Score: 5/5
[x] Sites widget canonical door?                     Score: 4/5
[x] Iframe primary with fullscreen escape?           Score: 5/5
[x] One secondary surface?                           Score: 5/5
[x] Avoids persistent two-row top bar?               Score: 5/5
[x] TypeUI Professional applied beyond colors?       Score: 5/5
[x] Mobile parity at 390x844?                        Score: 4/5
```
