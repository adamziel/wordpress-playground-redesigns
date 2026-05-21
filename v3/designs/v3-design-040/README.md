# v3-design-040 - Reset Runbook

## Thesis

Reset Runbook keeps WordPress itself as the main product surface. The default view is a browser-like Playground with a real live-site iframe, path input, Save, launcher, tools access, settings access, WP Admin/Homepage jumps, and a focus mode. The console-hybrid part is intentionally quiet: a read-only event history rail records Save, launch, import, export, blueprint, log, and reset consequences without asking the visual UI to become a terminal.

## Remix, Merge, Remove

I remixed the strong inspector and iPad ideas into a simpler model: the live site stays large, while Site Manager tools dock only when needed. The launcher keeps all current starts, but each route exposes its own form before booting: WordPress PR, Gutenberg PR/branch, GitHub repo, Blueprint URL, and a real ZIP file input. Settings has one destructive path: the toolbar gear and Site Manager Settings tab both lead to the same Apply Settings & Reset confirmation. I did not add new product features; export to GitHub PR, Download .zip, files, blueprint editor, database, logs, saved sites, gallery search/categories, and notifications are all preserved as current Playground capabilities.

## Trade-offs

The event history rail uses pixels that could otherwise belong to WordPress, so it disappears on narrower screens and the visual controls remain primary. The Site Manager is a dock rather than a persistent sidebar, which keeps first glance calm but means power users open it before editing files or inspecting logs. The destructive flow is deliberately slower than a single red button: warning, cancel, Save first, confirm, progress, result, and a changed active state are all shown because replacement flows are where Playground most needs rigor.

## Self-Critique And Revision Note

After checking the V3 insights, I tightened the design around three risks: route tiles now reveal real inputs, ZIP import is an actual file input, and reset has a complete final state rather than just a warning. I also kept Database and Logs as named Site Manager tabs on mobile instead of burying them in a generic More area. The remaining weakness is that the event history is useful mostly for technical users; in a production pass I would tune how much of it is visible by default after observing first-time users.
