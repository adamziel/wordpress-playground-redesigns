# V3 Design 022 - Calm Canvas Route Inspector

## Thesis

This design keeps the useful parts of a Figma-like workspace without making Playground feel like a design tool first. The running WordPress site is a single selected frame in the center of the canvas, with a sparse top bar, a small layers/assets rail, a contextual inspector, a minimap, and a full-size site mode. The intent is calm focus: the iframe remains credible and central, while power surfaces such as Files, Blueprint, Database, Logs, and Settings appear as inspection context rather than permanent clutter.

## Remix, Merge, Remove

I remixed the prior Figma canvas direction with the stronger inspector and top-bar lessons from the DevTools design, plus the mobile sheet and bottom navigation lessons from the mobile-first direction. The launcher is not generic cards anymore: WordPress PR, Gutenberg PR/branch, GitHub import, Blueprint URL, and ZIP import each reveal a real input state with validation or upload affordances. Settings are reached from the top bar and inspector, but the destructive path is merged into one confirmation pattern instead of being a small inline warning. I removed decorative multi-frame sprawl, excessive canvas buttons, and generic route tiles that hide the actual next step.

## Trade-Offs

The canvas metaphor adds spatial clarity for saved Playgrounds and blueprint assets, but it can be unfamiliar to users who only want to browse WordPress. The full-size site button is therefore prominent in the selected frame, and focus mode removes the rails and inspector entirely. The inspector can still feel technical because it contains Files, Blueprint JSON, Database, and Logs; on mobile those surfaces become bottom sheets so the site remains the first screen. The launcher uses more form detail than the current product, which costs vertical space, but it solves the repeated V3 critique that routes need explicit inputs before boot.

## Self-Critique And Revision Note

Critical pass against `v3/INSIGHTS.md`: the first draft risked becoming another button-heavy Figma clone, so I kept only one focused frame, one compact canvas toolbar, and one minimap. I also made the unsaved state louder than a dot by putting it in an amber top-bar pill, added a typed destructive reset confirmation, and kept a bottom mobile nav with separate Launch, Tools, and Layers entries instead of dumping everything into More. The main remaining risk is that the left layers rail duplicates some launcher concepts, but it is scoped to saved frames and assets while the launcher handles starting and importing.
