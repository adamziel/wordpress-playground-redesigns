## Thesis

WordPress Playground reimagined as a **kanban board**: every blueprint is a sticky-note card, every category is a column, and the right-most lane — **"Launch"** — is the live playground itself. Booting a new site is literally dragging a card across the board into Launch; saved playgrounds queue up behind it as completed-but-resumable cards. The metaphor merges discovery (the gallery), routing (the launcher), and execution (the iframe) into a single horizontal flow you read left-to-right. Settings, Files, Blueprint JSON, Database and Logs become **swimlane drawers** that pop out from the Launch card without ever leaving the board.

## Remixed / merged / removed

- **Merged**: the Saved Playgrounds panel + full Blueprint gallery + the launcher's "Start a new" tiles all collapse into one board. "Start a new" (Vanilla, WP PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip) becomes a dedicated **"Sources"** column at the far left. "Your Playgrounds" is a column too. The Site Manager's five tabs (Settings/Files/Blueprint/DB/Logs) become **slide-out drawers** anchored to the Launch lane, so the tab-vs-popover-vs-info-notice triplicate collapses to one surface.
- **Remixed**: the "Apply Settings & Reset" destructive action is staged as a **"Move card back to backlog"** confirmation — destruction is now an explicit card-move with a preview, removing the small-red-banner footgun. Category filters become column visibility toggles, since columns *are* the categories. The address bar lives on the Launch card itself, like a browser-window chrome.
- **Removed**: nothing functional. The three redundant settings entry points are unified. Featured-blueprints-section is gone as a separate stack — featured cards are simply tagged with a star ribbon in their normal column.

## Trade-offs

A kanban with 10+ columns is wide; on desktop this is great (the board scrolls horizontally like Trello) but on mobile the columns collapse into a vertical accordion which loses the "drag to launch" choreography — mobile users tap a "Launch" button instead. Drag-and-drop is also less discoverable than a button for first-touch anonymous visitors, so the Launch lane shows a persistent "or click any card" hint and every card has a play-icon affordance. The horizontal-scroll layout also makes the iframe slightly narrower (it lives in one lane rather than full-bleed), which is the real price of the metaphor — but in exchange the user always sees their context (which blueprint they came from, what's next, what they saved) in peripheral vision.
