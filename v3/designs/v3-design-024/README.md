# V3 Design 024 - Route Settings Live

## Thesis
This direction keeps the legibility of Ventura Settings but treats the live WordPress iframe as the default workspace, not as a small preview card. The left rail is searchable and grouped, while the right inspector is deliberately compact. Common actions stay in the top bar, and a full-size Playground mode keeps Save, URL navigation, WP Admin, Homepage, and Exit visible when the user wants to work in WordPress without management chrome.

## Remix, Merge, Remove
I reduced the category sprawl from the earlier macOS Settings direction into six homes: Live Preview, Start & Resume, WordPress & Runtime, Files, Blueprint, Database & Logs, and Export & Shortcuts. The toolbar settings button routes to the same WordPress & Runtime pane instead of opening a separate settings form. The Saved Playgrounds launcher remains a large panel because the current product requires it, but its starter entries are rigorous input states: WordPress PR, Gutenberg PR/branch, GitHub import, Blueprint URL, and a real ZIP file input. Database and Logs are merged under a named Data home rather than buried in More.

## Trade-offs
The design favors calm legibility over simultaneous power-user density. Files, Blueprint, Database, and Logs are one-pane tools next to the iframe rather than multiple visible docks, so users who want code, logs, and the site all visible at once would need a more IDE-like layout. The launcher duplicates some Start & Resume content because the top-bar Saved Playgrounds trigger has to open a big current-product launcher, while the sidebar still needs a searchable category destination. The reset confirmation is intentionally heavier than current Playground: it adds friction, but it directly addresses the risk of wiping browser-only work.

## Self-critique and revision note
After checking the V3 insights, I revised the concept away from a pure Settings app. The first version was too close to a management console, so the final keeps the iframe large, adds full-size mode, makes save state louder, and renders concrete route forms instead of route tiles. The remaining risk is category switching on mobile: the bottom nav exposes Site, Start, Settings, Files, and Data, while Blueprint and Export remain secondary panes instead of every item becoming a persistent tab.
