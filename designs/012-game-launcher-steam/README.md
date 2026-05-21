# 012 — Game launcher (Steam)

## Thesis
WordPress Playground reimagined as a Steam-style game launcher. Blueprints are "games" in your library; saved playgrounds are titles you "own". The viewport is dominated by a cinematic hero showing the currently selected blueprint with a single, decisive green PLAY button. A persistent left-rail library lets you browse, search, and filter the entire catalog. Once you "launch", the iframe becomes the running game and a translucent in-game overlay (Site Manager equivalent) is one key away. Settings, files, blueprint JSON, database and logs all live as overlay tabs over the running session, the way Steam's overlay sits on top of a running game.

## What I remixed / merged / removed
- **The "Saved Playgrounds" launcher + blueprint gallery + new-playground actions** are merged into one persistent Library view (Steam's home screen). Categories become library filters. "New playground sources" (Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip) live in the "+ ADD A PLAYGROUND" menu — Steam's "Add a non-Steam game" pattern.
- **The Site Manager (tabbed sidebar)** is merged into a Steam-style in-game overlay, opened with Shift+Tab or the controller pill. Settings / Files / Blueprint / Database / Logs become overlay panels, eliminating the duplicate settings popover (they all point at the same overlay tab).
- **Address bar + Refresh** become a HUD strip at the top of the running session — like a game's URL bar in an overlay.
- **Save** is a green prompt on the hero ("Save to Library") that mirrors Steam's "Install" verb, plus a save action inside the overlay.
- **Additional actions** (Export PR, Download .zip) live in the hero's three-dot kebab — same place Steam puts "Manage > Browse local files".
- The 5 featured blueprints get the Steam "Recommended for you" carousel. "Your Playgrounds" gets the "Recently Played" rail.

## Trade-offs
The Steam metaphor sells the catalog and the cinematic launch moment beautifully, but it pushes Site Manager features behind an overlay gesture — power users who live in Logs or the File browser need to learn Shift+Tab (or the visible toolbar pill). The hero art is heavy: 43 blueprints need 43 unique illustrations to feel right; here they're generated from theme-derived gradients and SVG marks, which works at gallery scale but is less editorial than hand-picked screenshots. Mobile collapses the library to a sheet and the overlay to a full-screen tab bar, which loses Steam's signature dual-column ambience but keeps every feature reachable.
