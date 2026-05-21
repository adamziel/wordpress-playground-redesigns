# V6 Design 036 - Consequence Lens Playground

## Thesis
Consequence Lens keeps the active WordPress iframe quiet at first touch, then lets one secondary surface get loud only when the user asks for Sites or Manager. Depth is visual polish rather than navigation: the rail, pane, toolbar capsule, reset modal, boot overlay, and toast each have measured elevation, tint, blur, and shadow, but the information architecture stays grounded in two doors. The assigned TypeUI skill is **Contemporary**; I applied it through Jost and Overpass Mono typography, magenta-to-pink accents, 4px/8px radius discipline, comfortable 8px/16px spacing, bento launch groups, and bold but minimal state color.

## Remix / Merge / Remove
From `018-quiet-rail-to-loud`, I kept the restrained reveal and one secondary workspace, but reduced the persistent model to a Sites widget plus Manager rail door instead of separate Sites/Blueprints/Settings entries. From `023-smart-resize`, I kept visible ratio detents and a focus preview escape, but made the detents simple labeled states rather than the whole navigation model. From `035-three-layer-depth`, I borrowed blur, elevation, and content-aware tint while avoiding z-stack navigation. From `036-corner-widget-control-center`, I kept the compact Sites status widget that expands into saved sites, new starts, ZIP import, and blueprint discovery, without copying four corner widgets. I avoided the persistent two-row top bar from `030`.

## Trade-offs
The default is intentionally quieter than a feature-review screenshot, so some inventory is one click away inside Sites or Manager. That is the main trade: the user gets a calmer live WordPress surface, while reviewers must open the panes to inspect route forms, the full gallery, files, blueprint JSON, database, and logs. The Settings shortcut opens the Manager Settings tab as a deep link; Manager remains the canonical home. The ZIP route is represented as an upload/dropzone, while the static demo cannot perform real file mounting. Database buttons mirror current early-access affordances without adding new database features.

## Consequence Flow
The assigned variation is consequences and final states, so the reset path is finished end to end: Settings shows the unsaved warning, `Review reset consequences` opens a destructive modal, Cancel produces a no-change toast, the final action is disabled until the user types `RESET`, Confirm shows progress, and the final state changes the active identity to `Reset Playground` with WordPress/PHP version copy, clean iframe content, and a completion toast. Save and resume also show visible state changes in the Sites widget.

## Critical Pass And Revision Note
After reviewing `v6/INSIGHTS.md` and `v6/STYLE_VARIATION_SYSTEM.md`, I revised the structure toward a quieter first viewport and kept primary persistent destinations to Sites, Manager, Settings deep-link, and Focus. I also made the reset result visible in the active Settings pane so the destructive flow has a final state, not only a modal. The mobile CSS keeps one top capsule and a bottom rail, with the secondary pane as a bottom sheet to avoid recreating a persistent two-row top bar.

## Self-Critique
Idle affordances are 7: Sites status widget, Refresh, address path, Save, Manager, Settings deep-link, Focus. The iframe is central and has explicit full preview with Esc. One secondary surface swaps Sites and Manager content. The weakest point is density inside the secondary pane on mobile: all product coverage is present, but the full 43-card blueprint gallery is necessarily a long sheet. The design should still hold at 390px because controls scroll within the sheet rather than overflowing horizontally.
