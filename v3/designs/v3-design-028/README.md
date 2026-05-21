# V3 Design 028 - Pane Rig Playground

## Thesis

Pane Rig treats WordPress Playground as an iPad multitasking workspace where the running WordPress site is the primary app and every management surface is a secondary pane. The first viewport is a usable live site with path entry, refresh, save, launcher access, tools access, settings, WP Admin, Homepage, and full-size focus. The Site Manager appears as a swappable Split View pane with an explicit "Tap to swap secondary pane" control so the iPad metaphor does real usability work instead of relying on hidden gestures.

## Remix, Merge, Remove Choices

I remixed the earlier iPad direction by keeping Split View, Slide Over, and a saved-site shelf, then corrected the repeated V3 weakness around generic launch tiles. The Launchpad shows real route input states for WordPress PR, Gutenberg PR or branch, GitHub repository import, Blueprint URL, and Import .zip with an actual file input. The Site Manager tabs become the secondary pane: Settings, Files, Blueprint, Database, and Logs. WP Admin, Homepage, Export to GitHub PR, and Download .zip stay in the pane header and live-site strip. The toolbar settings trigger remains because it is a current Playground feature, but Apply Settings & Reset routes into the same typed confirmation as the Settings pane.

## Trade-offs

The design favors a large live site over always-visible developer depth, so users open the secondary pane when they need Files, Blueprint, Database, or Logs. That keeps first-touch calm but costs one gesture for power users. On mobile, Split View becomes a bottom sheet while Launchpad remains a Slide Over style sheet, which preserves named homes instead of dumping Settings, Database, and Logs into "More." The saved shelf is compact and works for a few local Playground instances; a production version would need stronger overflow management once browser storage contains many saved sites.

## Self-Critique And Revision Note

Against `v3/INSIGHTS.md`, the first-pass risk was that an iPad shell could become another broad dashboard. I revised the composition to keep the live WordPress iframe central, label the pane-switch affordance directly, add a true focus mode, make the unsaved state louder than a dot, show route forms inline, use a typed destructive confirmation, and avoid extra database actions that are not in the brief. The remaining weakness is that quick settings and the Settings pane still expose the same runtime fields, but they share one destructive flow and the detailed pane remains the canonical surface.
