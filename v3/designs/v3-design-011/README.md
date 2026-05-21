# v3-design-011 - Pocket Focus Shell

## Thesis
Pocket Focus Shell starts from the strongest mobile-first lesson: the live WordPress iframe should feel like the app, while controls arrive as named bottom sheets that can be opened and dismissed with one thumb. The main screen is an immersive site canvas with a translucent address/save rail and an explicit full-size mode. In full-size mode the chrome disappears, but Save, URL navigation, WP Admin, Homepage, and Exit remain reachable in a compact floating rail.

## Remix, Merge, Remove
I remixed the mobile-first bottom navigation, iPad sheet behavior, glass contrast safeguards, and inspector feedback into four clear homes: Launcher, Files, Data, and Settings. Launcher contains all six start routes and expands WordPress PR, Gutenberg PR/branch, GitHub, Blueprint URL, and Import .zip tiles into visible input states. It also includes featured blueprints, the full searchable/category-filtered 43-item gallery, and Your Playgrounds. Files owns the Site Manager header actions, file browser, blueprint editor, WP Admin, Homepage, Export to GitHub PR, and Download .zip. Data owns Database and Logs so they are not buried in a generic More tab. Settings is the single destructive runtime surface, with Save locally and typed reset confirmation.

## Trade-offs
The design favors progressive disclosure over a permanent desktop sidebar. That keeps the iframe large and makes mobile honest, but power users cannot see Files, Blueprint, Database, and Logs simultaneously. The sheet can still become wide on desktop, and full-size mode gives the site all available pixels when the user is browsing WordPress itself. The glass rail is deliberately dark and bounded because the default WordPress page is mostly white; this avoids the low-contrast weakness of lighter glass concepts.

## Self-Critique and Revision Note
After a critical pass against `v3/INSIGHTS.md`, I revised the concept around four reviewer failures from prior work: route tiles now reveal real paste/upload forms, the unsaved state is an amber toolbar warning instead of a tiny dot, Apply & Reset requires an explicit confirmation, and Database/Logs have their own Data home rather than falling into More. I also made the assigned full-size mode a first-class control, not just a hidden responsive state.
