# V6 Design 004 — Spacious Depth Map

## Thesis
Spacious Depth Map keeps the Playground iframe as the working surface and gives every surrounding control one clear home. A compact access rail owns only two doors: **Sites** for saved identity, starting routes, imports, and blueprint discovery; **Site Manager** for settings, files, blueprint authoring, database, logs, WP Admin/Homepage, and exports. The visual language uses the assigned TypeUI **Spacious** skill: Open Sans body text, Montserrat headings, IBM Plex Mono labels, an 8px spacing rhythm, restrained blue/purple accents, white surfaces, 8px radius, and generous padding. Depth is limited to polish: E1 chrome, E2 pane, and E3 modal each have measured shadow/blur/tint, but users navigate by rail, tabs, and resize state rather than a z-stack.

## Remix / Merge / Remove
From `018-quiet-rail-to-loud`, I kept the quiet-to-loud reveal and one secondary surface but removed the separate Blueprints rail door. From `023-smart-resize`, I kept the self-teaching ratio gauge and focus-shift idea, with clear detent labels instead of an implicit hidden gesture. From `035-three-layer-depth`, I borrowed elevation, blur, and content-aware tint only as visual hierarchy. From `036-corner-widget-control-center`, I kept the Sites widget idea in spirit: saved sessions, launch routes, import, and blueprints all live behind one compact Sites door. I deliberately avoided `030-two-row-top-bar`; identity and context are split between a single top capsule and the rail, not two persistent rows.

## One-Door Map
Sites: saved playgrounds, resume, six new launch routes, route-specific inputs, Import `.zip`, featured/full blueprint gallery, search, and category filters. Site Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, and Download `.zip`. Settings exists only as the Site Manager Settings tab; exports exist only in the Site Manager additional-actions menu; saved identity exists only in the top Save/name control plus Sites resume list. The settings notice explains the save consequence without adding a second save button.

## Trade-Offs
The secondary pane takes meaningful width when Site Manager is open, especially for Files and Blueprint work. I accepted that because the design makes the iframe focus escape explicit through the Focus button and because the resize gauge explains the cost before users commit. Mobile uses the same doors and pane, but the pane becomes a bottom sheet; that is less spacious than desktop, though it preserves the same product logic. The full 43-card gallery is rendered in a compact two-column pane rather than a wide editorial browser to protect iframe primacy.

## Self-Critique / Revision Note
After checking `v6/INSIGHTS.md` and `v6/STYLE_VARIATION_SYSTEM.md`, I revised the initial concept to remove a separate settings shortcut and a separate blueprint shortcut. Those were convenient but violated the assigned information-architecture emphasis. The final design names and applies TypeUI Spacious beyond color: typography, spacing, radius, surface model, icon/button shape, and state language all follow it.

```
[x] iframe primary + full-size focus mode?      5/5
[x] one secondary surface?                      5/5
[x] one-door map for Sites/Manager/exports?     5/5
[x] smart resize is self-teaching?              4/5
[x] depth is polish, not navigation?            5/5
[x] TypeUI Spacious applied beyond colors?      5/5
[x] mobile parity at 390px?                     4/5
```
