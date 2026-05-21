# v3-design-031 — Pocket Reset Sheets

## Thesis
This direction treats WordPress Playground as a live site first and a set of native-feeling sheets second. The first viewport is a usable browser-like Playground with a large iframe, a loud unsaved state, a path input, Save, launcher, tools, and settings entry points. On mobile, the bottom navigation gives Start, Files, Data, and Settings clear homes instead of a junk "More" tab. On desktop, the same homes open as calm docked sheets while the live site stays large enough to use.

## Remix / Merge / Remove
The launcher becomes the Start sheet, where every start route has its own visible input: WordPress PR, Gutenberg PR or branch, GitHub repo, Blueprint URL, and a real ZIP file control. Site Manager tabs are mapped to named homes: Files, Blueprint inside Files, Database and Logs inside Data, and Settings in its own home. The top Site Manager button opens the same sheet system rather than a separate sidebar, and the gear routes to the same Settings sheet so Apply & Reset has one canonical confirmation flow. WP Admin, Homepage, Export to GitHub PR, and Download .zip remain in the site/tool header.

## Trade-offs
The mobile sheet model does not show Files, Logs, and the live site simultaneously, which power users may miss. The compensation is a first-class Focus Site mode that restores a nearly full-screen iframe with Save, address, WP Admin, Homepage, and Exit still reachable. Desktop users get wider sheets and split-like tool panes, but the design deliberately avoids becoming a permanent dashboard. ZIP import and route forms are more explicit than compact, which costs vertical space in the launcher but closes the repeated V3 failure of generic route tiles.

## Self-Critique / Revision Note
After checking against `v3/INSIGHTS.md`, I revised the first pass to make Database and Logs a named Data home, keep the unsaved warning in the top chrome, add a visible upload control for Import .zip, and finish the destructive settings flow with warning, cancel, typed confirmation, progress, completion, a toast, and a changed active state.
