# V3 Design 026 - Glass Route Control Center

## Thesis
This design treats the running WordPress site as the room and the Playground chrome as a frosted control center layered above it. The live iframe fills the viewport by default, while Save, path navigation, unsaved state, Launch, Tools, Settings, WP Admin, Homepage, and Focus mode remain reachable without making WordPress feel trapped in a card. Glass is not only a style treatment: it lets controls feel temporary and dismissible, while a solid-controls mode, stronger tint, borders, and shadows keep contrast readable over the default white WordPress page.

## Remix, Merge, Remove Choices
The Saved Playgrounds launcher becomes the main control center with three clear homes: Start, Blueprints, and Your Playgrounds, plus a Status pane that shows booting and save consequences. The Start section renders real route states for Vanilla WordPress, WordPress PR, Gutenberg PR or branch, GitHub import, Blueprint URL, and Import .zip with an actual file input. The Site Manager is a separate but collapsible frosted tools pane with the existing Settings, Files, Blueprint, Database, and Logs tabs; its header keeps WP Admin, Homepage, Export to GitHub PR, and Download .zip. Quick settings remain as a top-bar entry point because they exist today, but destructive Apply & Reset routes to the same typed `RESET` confirmation used by the full Settings tab.

## Trade-offs
The glass direction is visually strong but sensitive to whatever the WordPress iframe renders, so the dense editor and table surfaces use more solid backing than the launcher cards. Power users need to open Tools before editing files, reading logs, or browsing the database, which favors first-touch calm over always-visible developer panels. The launcher briefly covers part of the site to make route inputs and the 43-blueprint gallery legible; Focus mode restores the full-size site with Save, URL, WP Admin, Homepage, and Exit controls close at hand.

## Self-Critique And Revision Note
After checking the design against `v3/INSIGHTS.md`, I revised the first pass to make ZIP import a real upload state, promote route-specific forms instead of launch tiles, add typed destructive confirmation, include a concrete booting/status state, and keep mobile navigation as named homes rather than a generic "More" bucket. The remaining weakness is that glass still adds visual complexity over arbitrary WordPress themes, so the solid-controls toggle is part of the proposed product treatment rather than a decorative fallback.
