# V3 Design 010 - Calm Site With Event Trail

## Thesis
This direction treats WordPress Playground as a calm browser-like workbench first and a technical tool second. The first viewport shows the running WordPress iframe, the URL path, the unsaved state, Save, and one obvious Launch entry, with the Site Manager and event history held back until asked for. The quiet console idea becomes a collapsed event trail: every important action records what changed and why it matters, but the visual UI remains the primary way to save, reset, import, export, inspect files, run blueprints, browse the database, and read logs.

## Remix, Merge, Remove
I remixed the console-hybrid and inspector feedback into a softer model: Launch handles new Playground sources, featured blueprints, the full gallery, Import .zip, and saved Playgrounds; Tools handles the Site Manager tabs with Settings, Files, Blueprint, Database, and Logs. Route tiles expose their required inputs directly for WordPress PR, Gutenberg PR/branch, GitHub repo, Blueprint URL, and ZIP import. The WordPress iframe is never demoted to a small card, and Focus site mode restores a full-size preview when panels are distracting. I did not add new product capabilities; export to GitHub PR, Download .zip, WP Admin, Homepage, Save, Apply & Reset, and notifications are all existing Playground surfaces reshaped into calmer chrome.

## Trade-offs
The main trade-off is that power tools take one click to reveal, which is intentional for first-touch calm but slower than an always-open developer console. The event trail is deliberately not a command line, so it will not satisfy users who want a fully scriptable terminal, but it avoids intimidating users who only came to inspect the running WordPress site. The launcher overlay contains a lot of capability, so on mobile it becomes a bottom sheet with progressive disclosure rather than trying to keep desktop-style sidebars.

## Self-critique and Revision Note
The first pass risked hiding too much behind the Launch button, so I kept Tools and Settings in the top bar while making them visually quieter than Save and Launch. I also added a concrete destructive confirmation and a booting overlay because prior reviews repeatedly flagged designs that only warned in copy. The remaining weakness is that the static prototype shows only twelve gallery cards while stating all 43 exist; this matches the brief floor but a production pass should virtualize and render the full list.
