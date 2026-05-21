# v3-design-017 - Full-Size Site Tabs

## Thesis
This direction treats tabs as the only navigation primitive, but refuses to make the live WordPress iframe feel like just another settings page. The default screen is a usable Site tab with browser-like chrome, and the primary action is Focus Site: a full-size mode that hides management tabs while pinning Save, URL, WP Admin, Homepage, Refresh, and Exit controls over the iframe. The goal is to keep the calm legibility of the prior tabs-only design while solving its main weakness: the running Playground can always become the whole product again.

## Remix / Merge / Remove Choices
The current Saved Playgrounds drawer becomes a Launch tab, and the full blueprint browser becomes a sibling Blueprints tab with search and category filters. The Site Manager tabs are promoted to top-level tabs: Settings, Files, Blueprint, Database, and Logs. The Site Manager header actions are not hidden behind a menu; WP Admin and Homepage stay beside the Site preview, while Export to GitHub PR and Download .zip live in a focused Site Actions tab. The quick settings popover is removed as a separate surface: the gear selects the Settings tab. Launcher route cards for WordPress PR, Gutenberg PR/branch, GitHub, Blueprint URL, and ZIP import all expose their inputs directly.

## Trade-Offs
This is intentionally stricter than a sidebar or inspector design: only one management tab is visible at a time, so users cannot watch logs while editing files without switching tabs. The compensation is focus, clear overflow behavior, and a full-size Site mode that restores the iframe-first interaction. The tab strip can still get crowded, so it is horizontally scrollable on desktop and mobile, with short labels and badges rather than nested "More" navigation.

## Self-Critique And Revision Note
The first pass risked becoming a skin of design 053, so the revision concentrated on V3 feedback: louder unsaved state in the top rail, route-specific launch forms, an always-rendered destructive reset confirmation, and a Site focus mode that keeps critical controls reachable. The remaining weakness is that export actions as a separate tab are less native than a small header menu, but this keeps the tabs-only rule honest and makes the actions easier to discover.
