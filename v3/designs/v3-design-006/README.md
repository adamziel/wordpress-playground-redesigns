# V3 Design 006 - Calm Glass Control Center

## Thesis
This direction keeps WordPress itself as the first thing people see. The iframe fills the viewport and the chrome sits above it as small glass controls: refresh, URL, unsaved/save state, Playground name, and one clear control-center path into Launch, Tools, and Settings. The frosted treatment is intentionally light, but it includes a solid-controls mode and stronger tints so the UI survives the default white WordPress landing page instead of relying on blur alone.

## Remix, Merge, Remove
I merged the Saved Playgrounds launcher, full blueprint gallery, Site Manager tabs, quick settings, and additional actions into a single control center with internal tabs. The toolbar buttons still preserve the required access points, but they route into the same surface rather than creating separate drawers and duplicate settings forms. The launcher cards expose their route-specific inputs directly for WordPress PR, Gutenberg branch or PR, GitHub repository, Blueprint URL, and ZIP import. Files, Blueprint, Database, and Logs remain full tool tabs, while Settings owns the destructive Apply & Reset flow with a rendered confirmation dialog.

## Trade-offs
The design favors calm first touch over always-visible power tools, so advanced users need one click to open the control center before editing files or reading logs. Glass also has performance and contrast risk, so the panels are limited in size, use solid backing in dense editors, and provide a Solid controls toggle. On mobile, the control center becomes a bottom sheet with a compact bottom dock; this preserves reachability but means only one tool surface is visible at a time.

## Self-Critique And Revision Note
After checking the V3 insights, I revised the initial concept in three places: route tiles now show paste/upload forms instead of generic tiles, Apply & Reset uses an explicit confirm/cancel modal, and the live site has a Focus mode so settings and launcher work never trap WordPress inside a small card. The remaining weakness is that the glass aesthetic still depends on careful contrast tuning across arbitrary WordPress themes, so the solid-mode treatment is part of the concept rather than a decorative option.
