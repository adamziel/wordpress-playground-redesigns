# v3-design-044 - Saved Identity Settings

## Thesis
This design keeps the legibility of Ventura Settings while making the live WordPress iframe the default workspace. The category rail is reduced to a few clear homes, and the right-side context pane is dedicated to the highest-risk current problem: the identity and persistence state of the running Playground. Unsaved, saving, saved, renamed, deleted, reloaded, reset, and resumed states are visible in rows and badges rather than hidden behind a small toolbar label.

## Remix / Merge / Remove
I merged the Settings popover and Site Manager settings tab into one WordPress & Runtime pane, then routed Apply & Reset through a single confirmation sheet. The Saved Playgrounds launcher remains a large current-product surface, but every start route has its own visible input state: WordPress PR, Gutenberg PR/branch, GitHub repo/ref, Blueprint URL, and a real ZIP file input. Files, Blueprint, Database, Logs, and Export remain separate named categories so Database and Logs are not buried in a generic More bucket. WP Admin, Homepage, Save, Refresh, path entry, launcher, tools, settings, additional actions, and full-size Playground mode stay near the live site.

## Trade-offs
The right identity pane consumes desktop width, so the design uses an explicit full-size Playground mode for deep WordPress interaction. On mobile, the category rail becomes a five-item bottom nav and the identity pane collapses away, which means rename/delete management is less immediate than on desktop. The design favors native rows and badges over a dense dashboard, so power users who want Files, Logs, Database, Blueprint, and the iframe visible at the same time would still prefer an inspector or IDE-style shell.

## Self-critique / Revision Note
After checking `v3/INSIGHTS.md`, I revised the concept away from a pure settings control panel. The first pass risked making Live Preview one category among many, so the final starts on a large real iframe, adds a full-size mode, keeps WP Admin/Homepage in the preview toolbar, and makes the launcher a modal over the workspace rather than the main product. I also added concrete final-state feedback for save, resume, delete saved copy, reload, blueprint run, and reset so the design is not just labels for current features.
