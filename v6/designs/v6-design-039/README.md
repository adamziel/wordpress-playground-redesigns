# V6 Design 039 - Consequence Surface

## Thesis
This direction treats Playground as a calm professional work surface: the WordPress iframe is the default object, while a single precise pane appears only when the user asks for Sites or Manager. The visual model borrows three-layer depth as polish: a black rail, a translucent command layer, and a raised paper pane, but interaction stays conventional. Sites owns saved playgrounds, all six launch routes, ZIP import, featured blueprints, and the full 43-blueprint gallery. Manager owns settings, files, blueprint editing, database, logs, WP Admin, Homepage, export to GitHub PR, and Download .zip.

## Refined TypeUI Use
I used the assigned `refined` TypeUI skill from `v6/style-skills/typeui-refined.md`. It is applied beyond color: Playfair Display drives the product voice and headings, JetBrains Mono handles labels, paths, code, logs, and ratio states, radii stay at 4-8px, spacing follows the 4/8/12/16/24/32 rhythm, the palette uses restrained blue/violet actions with amber/red consequence states, and the surface model is thin-rule, high-polish, and layered rather than card-heavy.

## Remix / Merge / Remove
From `018-quiet-rail-to-loud`, I kept the quiet-to-loud reveal and one secondary pane, but removed the extra Blueprints door and avoided its dark monochrome skin. From `023-smart-resize`, I kept detents, ratio feedback, and full preview, but made the pane closed by default to answer the V6 audit's first-glance loudness warning. From `035-three-layer-depth`, I borrowed elevation, blur, tint, and hierarchy, but not depth-as-navigation. From `036-corner-widget-control-center`, I kept the Sites status widget behavior as the canonical saved/launch door, without copying four corner widgets. From `030-two-row-top-bar`, I kept identity/context clarity but did not use a persistent two-row bar.

## Trade-offs
The quiet default means feature reviewers need to open Sites or Manager to inspect the full inventory, but that is the point: the first viewport behaves like a usable Playground app screen rather than a catalog of controls. The rail includes a Settings deep-link, but it opens Manager -> Settings and does not create a separate settings surface. Save appears in the toolbar and as notices inside Sites/Manager; all three trigger the same saved identity state, so the consequence is duplicated only as confirmation copy, not as separate product homes. The iframe is a real `iframe` using `srcdoc`, which keeps the static GitHub Pages file self-contained while still preserving iframe primacy.

## Consequence Flow
The required replacement flow is fully finished: Manager -> Settings -> Apply Settings and Reset opens a warning dialog, shows before/after identity, offers Cancel, requires typing `RESET`, disables Confirm until the phrase matches, shows progress, then ends in a final result state. The active identity changes to `Fresh WP 7.0 Reset`, the path moves to `/`, and a toast confirms the fresh playground is active.

## Critical Pass And Revision Note
Against `v6/INSIGHTS.md`, I revised the default state to be quiet rather than launcher-open, kept persistent destinations to Sites, Manager, and Focus, and made ZIP import a visible upload/drop state. Against `v6/STYLE_VARIATION_SYSTEM.md`, I pushed Refined at the component level with serif-led hierarchy, thin rules, small radii, restrained density, and consequence-specific state language instead of only changing accent colors. Mobile uses the same rail/pane logic with the rail at the bottom and the pane as one sheet over a still-visible iframe.

## Self-Critique
Idle affordances: rail logo, Sites, Manager, Settings deep-link, Focus, refresh/path, Sites status widget, Save, top Manager, top Settings, top Focus. This is above the strict V5 count, but V6's required top-bar inventory is visible and the canonical destinations remain two plus focus. The main risk is that the Settings deep-link and top Settings icon could be read as extra doors; the UI mitigates this by always opening Manager Settings. I would tighten that further in a production pass by making one of them responsive-only.

Responsive check targets: desktop `1440x900` and mobile `390x844`. The CSS avoids horizontal overflow with a one-column mobile toolbar, bottom rail, and a fixed bottom pane sheet.
