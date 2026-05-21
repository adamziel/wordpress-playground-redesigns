# v3-design-041 - Saved Sheet Shell

## Thesis
This direction treats WordPress Playground as a live browser surface with a saved local identity attached to it. The first viewport is the usable running site: refresh, path entry, Save, launcher, tools, settings, WP Admin, Homepage, export, download, and focus mode are all close without turning the screen into a dashboard. On mobile, the interface uses named bottom homes - Start, Tools, Data, and Settings - so Database and Logs do not disappear into a vague More tab.

## Remix / Merge / Remove Choices
I started from the mobile-first success but split the old More bucket into clear sheets: Start owns launcher routes, blueprint gallery, and Your Playgrounds; Tools owns Files and Blueprint editing plus WP Admin/Homepage/export/download; Data owns Database and Logs; Settings owns runtime changes and the single destructive reset path. The Saved Playgrounds drawer becomes a Start sheet with concrete route inputs for WordPress PR, Gutenberg PR/branch, GitHub repo, Blueprint URL, and a real ZIP file input. The live WordPress surface remains a real iframe with a focus mode that preserves Save, path, WP Admin, Homepage, refresh, and Exit.

## Trade-offs
The sheet model is deliberately serial: on small screens users cannot see Files, Logs, and the live site all at the same time. Desktop partially compensates by docking the active sheet to the right while leaving the iframe large. The saved identity work costs visible space in Start, but that is the point of this variation: unsaved warning, save progress, active saved row, resume, rename, delete, reload consequence, and reset consequence are all shown as product states instead of tiny labels.

## Self-Critique / Revision Note
After checking `v3/INSIGHTS.md`, I revised the design toward artifact fidelity and restraint: the WordPress site is a real iframe, Import .zip is a real upload control, route tiles expand into forms, Database and Logs have a named Data home, settings share one confirm/cancel/reset flow, and the first opened sheet avoids showing all tools at once. The remaining risk is that the Start sheet is long because it carries routes, featured blueprints, full gallery, and saved identity; that is mitigated with progressive route expansion and clear sectioning.
