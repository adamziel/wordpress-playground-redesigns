# V6 Design 008 - Bento One-Door Playground

## Thesis

This design solves the two-row-top-bar problem with a stable session capsule plus a two-door rail. The capsule owns only the live session mechanics: refresh, path, current identity, save, and full-size preview. The rail owns the product map: **Sites** is the only door for saved playgrounds, resume, all six new-start routes, import `.zip`, featured blueprints, and the full gallery; **Manager** is the only door for settings, files, blueprint authoring, database, logs, WP Admin, Homepage, and exports. Opening either door reveals the same single Bento pane beside the actual WordPress iframe, with a labeled ratio seam that makes smart resize self-teaching.

## TypeUI Skill

I used the assigned TypeUI **Bento** skill from `v6/style-skills/typeui-bento.md`. It is applied beyond color: the layout uses modular bento blocks instead of a dashboard sprawl, Inter/JetBrains-style type hierarchy, the 4/8/12/16/24/32 spacing rhythm, compact 4px/8px radii, soft card grouping, and peach/blue state contrast from the skill. I kept the cream surface from the Bento token but anchored it in a charcoal app frame so the result does not collapse into a beige-only palette.

## Remix / Merge / Remove

I kept the useful V5 ideas but changed their ownership. From `018-quiet-rail-to-loud`, I kept the quiet-to-loud reveal and one secondary surface, but reduced the rail to two real doors instead of making Blueprints a third primary destination. From `023-smart-resize`, I kept focus-as-layout and the seam gauge, but made the layout explicit: the pane opens at known detents and full-size preview hides all chrome. From `036-corner-widget-control-center`, I borrowed the Sites-as-status-and-launcher idea without copying four corner widgets. From `035-three-layer-depth`, I borrowed elevation, tint, and blur as polish only. I removed the `030-two-row-top-bar` split entirely; identity stays stable in one capsule, and context lives in the resizing pane.

## Trade-Offs

The top capsule does not expose a separate settings gear. That is intentional: settings is the first Manager tab, so there is not a second settings door competing with the Site Manager. Export is shown as a Manager destination rather than a separate global launcher; it is still the current product's GitHub PR and `.zip` export, just surfaced inside the one Manager surface. The Bento cards make route forms and gallery browsing highly scannable, but dense file/log work still benefits from using the full-size preview or keeping the Manager pane open. On mobile, the same rail/pane logic rotates into a bottom rail and vertical split with the iframe kept visible above the active pane.

## Feature Coverage

- Top/session controls: refresh, address path, playground name, save, saved identity state, full-size preview.
- Canonical doors: Sites for saved playgrounds/new starts/import/blueprints; Manager for settings/files/blueprint/database/logs/admin/export.
- Launcher routes: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, each with route-specific input or upload UI.
- Blueprints: featured entries are first five in the complete 43-item gallery, with search and required category filters.
- Site Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download `.zip`.
- States: active session, boot/loading overlay, launcher/gallery open, save/resume toast, destructive reset confirm with disabled final action, route forms, and full-size preview with Esc exit.

## Self-Critique / Revision Note

After checking `v6/INSIGHTS.md` and the audit guidance, I revised the structure toward two rail doors only. Earlier drafts had a separate Blueprints door and a top settings shortcut, which would have repeated known V6 weaknesses. The final map is stricter: Sites owns all launch/discovery, Manager owns all tools/settings/export, and the top capsule is session-only. The remaining weakness is that Manager has an Export destination beside the five current Site Manager tabs; I kept it because exports are part of the Site Manager header today and the assigned emphasis asks the design to prove where exports live.

```
[x] Real iframe surface, not a styled div mock.        Score: 5/5
[x] No persistent two-row top bar.                     Score: 5/5
[x] One secondary surface.                             Score: 5/5
[x] One-door map for Sites/Manager/Blueprints/export.  Score: 4/5
[x] Full-size/focus preview is obvious.                Score: 5/5
[x] Bento skill affects system, not only palette.      Score: 5/5
[x] Mobile keeps same product logic.                   Score: 4/5
```
