# v3-design-001 - First-Touch Sheet Shell

## Thesis
This redesign treats the first screen as a calm, usable WordPress Playground: the live site is central, the URL is editable, the unsaved state is explicit, and the only prominent choices are Save and Start. Everything deeper arrives through named sheets with thumb-friendly bottom navigation. The shell keeps the mobile-first strengths of the prior round but gives Settings, Data/Logs, Files/Blueprint, and Launcher their own clear homes instead of hiding them in a generic overflow area.

## Remix, Merge, Remove
I remixed the mobile-first bottom navigation, iPad-style sheets, and inspector feedback into five persistent homes: Launch, Files, Site, Data, and Settings. The Launcher merges saved playgrounds, all six start routes, featured blueprints, and the full searchable gallery, with inline inputs for WordPress PR, Gutenberg PR, GitHub, Blueprint URL, and ZIP import. Files owns the file browser, blueprint editor, WP Admin/Homepage shortcuts, Export to GitHub PR, and Download .zip. Data owns Database and Logs. Settings is the only runtime settings surface, with the unsaved notice and a typed destructive reset confirmation. Nothing from the current feature surface is removed.

## Trade-offs
The design favors progressive disclosure over simultaneous power-user panes. Desktop users can still open wide sheets, but they do not get Files, Logs, and Blueprint visible at the same time. This is intentional for the assigned "first-touch calm" direction: the running iframe keeps priority, and full-size site mode removes the chrome entirely when interacting with WordPress. The sheet model also means long blueprint and file editing sessions are less IDE-like than inspector-first concepts, but it is easier to understand on a phone and less intimidating for new users.

## Self-Critique and Revision Note
After checking the design against `v3/INSIGHTS.md`, I revised the concept to avoid the two main mobile-first failures from prior work: route tiles now reveal real paste/upload inputs, and destructive Apply & Reset has an explicit typed confirmation instead of a single danger button. I also kept a dedicated Data home so Database and Logs do not disappear into "More", and added full-size site mode so sheets never trap the live WordPress surface in a small card.
