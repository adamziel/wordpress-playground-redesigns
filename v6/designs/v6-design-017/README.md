# V6 Design 017 - Corporate Quiet Rail Registry

## Thesis
Corporate Quiet Rail Registry keeps the useful V5 quiet-rail interaction but gives it a warmer enterprise product skin. The live WordPress iframe remains the center of the app, with a single left rail and one swappable secondary pane. The pane opens as either **Sites Registry** or **Site Manager**; the visible ratio gauge teaches that the site and pane are sharing space, and the full preview control hides all chrome for iframe-only work.

## TypeUI Skill Used
I used `corporate` from `v6/style-skills/typeui-corporate.md`. It is applied beyond colors: Poppins drives product headings, Open Sans handles body/UI copy, IBM Plex Mono labels paths/code/logs/ratio state, spacing follows an 8pt rhythm, radii stay at 4px and 8px, surfaces are white structured enterprise panels with crisp borders, and semantic blue/violet/success/warning/danger states carry action meaning. The tone is warmer through restrained amber save-risk surfaces and soft depth, but the component model remains corporate and product-ready.

## Remix / Merge / Remove
From `018-quiet-rail-to-loud`, I kept the quiet edge rail, one reveal surface, and quiet-to-loud transition, but removed the dark monochrome skin. From `023-smart-resize`, I borrowed the ratio/gauge and focus-shift idea, making it static and self-teaching instead of relying on hidden focus behavior. From `036-corner-widget-control-center`, I kept the Sites widget lesson by making one Sites Registry own saved sites, new starts, import, and blueprint discovery. From `035-three-layer-depth`, I borrowed shadow, blur, and elevation only as styling. I explicitly avoided `030-two-row-top-bar`; identity and context are handled by one command bar plus the rail, not two persistent horizontal rows.

## One-Door Map
Sites Registry owns Your Playgrounds, Save consequence, Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, featured blueprints, the full 43-blueprint gallery, search, and category filters. Site Manager owns Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, and Download `.zip`. The top command bar buttons deep-link to those canonical rail destinations rather than opening duplicate surfaces. Settings is only the Site Manager Settings tab, and exports are only the additional-actions menu.

## Trade-Offs
The Sites Registry is open by default so the required route-specific launch forms are immediately visible, but that means the idle iframe is not at its widest until the user chooses Site focus or Full preview. I accepted that because this assignment emphasizes real input states for PR/GitHub/Blueprint URL/ZIP routes, and the ratio gauge makes the space trade visible. On mobile, the rail becomes a bottom strip and the same secondary pane becomes a bottom sheet; the IA is the same, but long galleries and logs naturally require scrolling.

## Self-Critique / Revision Note
After checking `v6/INSIGHTS.md`, I revised the IA around two destinations only: Sites Registry and Site Manager. A separate Blueprints rail button was not added; blueprint discovery lives inside Sites, while active `blueprint.json` authoring lives inside Manager. After checking `v6/STYLE_VARIATION_SYSTEM.md`, I tightened the corporate application across typography, palette, radius, spacing, button shape, surface treatment, and state language rather than using it as a color skin.

```
[x] TypeUI Corporate named and applied beyond colors? 5/5
[x] iframe primary + full preview mode?              5/5
[x] quiet rail + one secondary surface?              5/5
[x] no persistent two-row top bar?                   5/5
[x] real launch input states shown?                  5/5
[x] feature preservation from current Playground?    5/5
[x] mobile parity at 390x844?                        4/5
```
