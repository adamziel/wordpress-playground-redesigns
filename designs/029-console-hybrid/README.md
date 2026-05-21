# 029 — Console + visual hybrid

## Thesis
Playground is a learning surface and a power tool at the same time. This design refuses to choose. The top two-thirds are a clean, modern visual UI built around the WordPress iframe; the bottom third is a real, resizable, dock-toggleable terminal that streams the PHP error log, accepts `wp-cli`, and — crucially — *narrates every click as a copy-pasteable command*. Click "Save", the terminal prints `pg save "Coffee Shop"`. Pick a blueprint, the terminal prints `pg blueprint run coffee-shop`. Beginners get a friendly GUI; advanced users get a script of their own session they can replay, paste into docs, or hand off as a blueprint.

## What was remixed / merged / removed
- **Merged**: the three settings entry points (toolbar popover, Site Manager Settings tab, info-notice button) collapse into one settings popover plus identical `pg config set` commands in the terminal. The Site Manager's Logs tab is gone — logs *are* the terminal, always visible.
- **Merged**: the launcher's "Start new / Blueprint gallery / Your Playgrounds" three-stack is one command-palette-style sheet with three tabs, but every action also has a terminal alias shown in muted text.
- **Remixed**: the Site Manager is no longer a left sidebar with five tabs. It's three slide-over panels — Files, Blueprint, Database — invoked from the top toolbar. They share the screen with the terminal, and editing a blueprint shows the equivalent `pg blueprint edit` command.
- **Removed (visually, not functionally)**: the "Unsaved Playground" red banner becomes a persistent yellow chip in the terminal prompt (`unsaved@playground ~$`). When you save, the prompt becomes `coffee-shop@playground ~$`.
- **Kept**: every single feature in the brief — refresh, address bar, save, saved-playgrounds launcher, site manager actions, settings popover, blueprint gallery with categories + search, file browser, blueprint editor, DB browser, logs, additional-actions menu (Export GitHub PR, Download .zip), Import .zip, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL. All also have terminal equivalents.

## Trade-offs
The terminal is intimidating to a true first-time WordPress user. Mitigation: it ships collapsed-to-a-strip by default for new visitors, expandable with one click, and the command echoes are read-only history unless the user types. The dual-channel design also means more pixels to wrangle on mobile — there, the terminal becomes a bottom sheet you swipe up. Two ways to do everything is a sin in product design, but Playground's audience (devs learning WP, WP devs testing PRs, doc authors) is exactly the audience that benefits from "show me the command for what I just clicked." That justifies the duplication.
