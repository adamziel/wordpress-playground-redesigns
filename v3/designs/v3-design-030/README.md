# V3 Design 030 - Route Ledger Workbench

## Thesis
Route Ledger Workbench treats WordPress Playground as a browser-local site first and a workflow recorder second. The live WordPress iframe remains the largest, most credible surface, with Save, path navigation, WP Admin, Homepage, and focus mode available before the user opens any deeper tooling. The console idea is reduced to a quiet event trail: it records the equivalent command shape and consequence for Save, reset, import, export, logs, and blueprint actions, but the primary path is always visual controls.

## Remix, Merge, Remove
I merged the launcher, saved playgrounds, and full blueprint gallery into a form-first Launch pane so route tiles are not generic buttons: WordPress PR, Gutenberg PR/branch, GitHub import, Blueprint URL, and ZIP import all show concrete input states. The Site Manager remains a single canonical Tools pane with Settings, Files, Blueprint, Database, and Logs tabs, plus the required WP Admin, Homepage, Export to GitHub PR, and Download .zip actions in the header. Quick settings do not create a second destructive path; they route into the same Settings tab and the same RESET confirmation. I removed the dominant terminal from the console-hybrid direction and kept only a supporting read-only history strip.

## Trade-offs
The right pane carries a lot of responsibility once opened, so the design depends on a strong focus mode and mobile bottom-sheet behavior to keep the live site from feeling trapped. The event trail is intentionally small; power users who want a full terminal would find it limited, but that keeps first-touch users in a calm visual product. The blueprint gallery is compact and generated from mock data rather than real screenshots, so it proves the browsing/filtering structure more than final art direction.

## Self-Critique And Revision Note
After checking the V3 insights, I revised the concept away from a bottom terminal and toward a side Launch pane plus a small event rail. That better matches the feedback that command history should support the visual UI, not dominate it. I also made the ZIP route a real file input, added typed RESET confirmation, kept Database and Logs out of a vague More bucket, and ensured focus mode preserves Save, URL/path entry, WP Admin, Homepage, and Exit.
