# 002 — IDE-like

## Thesis
Playground is, fundamentally, a developer's sandbox: code lives next to a running site, you tweak a blueprint and re-launch, you read PHP logs to debug. So this design owns that and dresses Playground as a first-class IDE — specifically a VS Code-flavored one. There is an Activity Bar of vertical icons on the left (Explorer, Blueprint, Database, Logs, Search, Extensions-as-Blueprints, Source Control-as-Export), an Editor area in the middle with proper tabs (the WordPress iframe is just another tab next to `blueprint.json`, `wp-config.php`, etc.), a status bar pinned to the bottom (PHP version pill, WP version pill, language, save-status, log counter, multisite toggle), and a `Cmd+K` command palette that exposes every action. Settings, blueprint browser, "your playgrounds", and "start new" are all panels that dock into this same shell — no more drawer-vs-sidebar-vs-popover schism.

## What I remixed / merged / removed
- **Merged** the three settings entry points into one Settings panel (still reachable from status-bar version pills, the activity bar gear, and the palette — but visually one surface).
- **Merged** the File Browser tab and the Blueprint tab — both now live in the Explorer pane, where `blueprint.json` is just another file you can open in a tab. Multi-file blueprint bundles fall out naturally.
- **Remixed** the Saved Playgrounds drawer into an Explorer section ("YOUR PLAYGROUNDS") plus a full-page "Welcome / Start" tab that hosts the 43-blueprint gallery, the "New from PR / GitHub / URL / .zip" buttons, and "Your Playgrounds" — modeled on VS Code's Get Started tab.
- **Remixed** the additional-actions menu into a Source Control–style panel where Export-to-GitHub-PR and Download-as-zip are first-class actions next to "Import .zip".
- **Removed** the address bar from the global toolbar (it's now contextual: it appears as a slim path bar above the iframe tab, like a breadcrumb).
- **Removed** the "Unsaved Playground" text label as a separate thing — the title appears in the tab and in the status bar with a yellow dot when unsaved (mirroring VS Code's modified-file indicator).

## Trade-offs
This design assumes the user is technical or technically curious. Non-developers will see an unfamiliar dark IDE shell and may be intimidated — though every action is still one click away and the launcher tab is the default landing surface, so a beginner can pick a blueprint without ever touching a code panel. The dark, dense IDE aesthetic also collides slightly with WordPress's friendly brand. On mobile, the activity bar collapses to a bottom tab bar and panels become full-screen sheets — workable but loses the IDE feel. Finally, IDE conventions only help users who already know IDE conventions; for everyone else, the command palette is more discovery friction than relief.
