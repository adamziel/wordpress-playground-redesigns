# 084 — Shapeshifter Sidebar

## Thesis
One sidebar with six personalities. A slim 60-pixel activity bar on the far left is the *only* navigation; clicking an icon does not open a tab, it transforms the entire adjacent panel into a new application — Site, Files, Blueprint, Database, Logs, or Settings. The iframe is the unchanging stage; the sidebar is a theater that swaps sets between scenes. The launcher is just one more mode (anchored to the bottom of the activity column) that overlays the iframe because the user is starting fresh, not modifying the running site. This collapses the current Playground UI's three settings entry points and five Site Manager tabs into one consistent, low-chrome surface where each mode owns its full vertical real estate and brings its own tools (logs has level filters, blueprint has the editor + Run, DB has a tables list).

## What I remixed / merged / removed
- **Merged the three settings entry points** (popover, sidebar tab, info-notice) into two: a Site-Manager-style Settings *mode* in the sidebar (with the inline "save locally" notice on Unsaved Playgrounds) and a quick popover still anchored to the top bar for one-click WP/PHP changes. Same actions, fewer dead ends.
- **Merged the five Site Manager tabs into five sidebar modes** plus a Site mode that holds the editable name, WP-Admin / Homepage shortcuts, and the Additional Actions menu (Export to GitHub PR, Download .zip, Import .zip, copy link).
- **Promoted Logs and DB to top-level modes** with proper chrome — level filters and search on Logs, table list + sticky-header grid on DB — since "unstyled text" was a stated pain point.
- **Reframed the Launcher as a mode** rather than a drawer. Same Start-new / Blueprint gallery / Your Playgrounds three-section IA, but it overlays as a centered sheet so the user understands they're transitioning, not configuring.
- **Removed the redundant Blueprint-tab file tree column** — Files mode already shows the tree; Blueprint mode shows the editor + a "Files" pivot button to jump modes.
- **Mobile: rotate the activity column 90°** into a bottom tab bar; the sidebar becomes a bottom sheet over the wallpaper iframe.

## Trade-offs
- The single-sidebar model means you can't *simultaneously* watch logs while editing a file — you have to switch modes. The activity bar mitigates this with a red dot indicator on Logs when new errors arrive, but a true power user editing a plugin and tailing PHP errors will miss a split view. Acceptable: that's what the file-watcher pattern in VS Code's notification badge already taught users to expect.
- Pushing every Site Manager surface into a permanently-visible 340px sidebar costs horizontal iframe real estate compared to the current closable drawer. Mitigation: the activity bar alone is 60px and clicking the active icon again could collapse the sidebar (not wired in this static mock, but cheap to add).
- Discoverability of *modes* depends on the icon vocabulary being legible. I lean on Lucide's domain-familiar metaphors (folder, braces, database, scroll-text, sliders, home) plus a hover label, but new users will still need a moment with the chrome before the model clicks.
