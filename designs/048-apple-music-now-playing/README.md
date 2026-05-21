# Design #048 — Apple Music Now Playing

## Thesis
WordPress Playground reimagined as Apple Music. Every blueprint is a *song*, your active site is the *Now Playing* track, and the WordPress iframe is the *album art* that swells to fill the canvas. Your saved playgrounds are *Your Library*, the 43 blueprints become *Browse* (genres = categories), recently visited blueprints are *Up Next*, and the address bar acts as the *scrubber* you drag (well, type) to a new location in the track. The whole language of the app — "Listen Now", "Browse", "Radio", "Library", playlists, queue — maps with almost zero friction onto the playground's mental model of *pick a thing → run it → resume it later*.

## What I remixed / merged / removed
**Merged:** Apple Music has exactly one place to start playback (the player bar) and one place to manage what plays next (the queue/library sidebar). I collapsed Playground's three settings entry points (popover, sidebar tab, info-notice button) into a single **`...` More menu** on the Now Playing bar — exactly like Apple Music's track ellipsis. The Site Manager's five tabs become a *Lyrics-style detail drawer* that slides up over the player: Settings, Files, Blueprint, Database, Logs are pills inside it, mirroring Apple Music's Lyrics/Credits/Up Next pivot. The launcher's "Start a new Playground" entries (Vanilla, WP PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip) become **Stations** in a Radio-style row — each is a "tune-in" tile. Featured blueprints are a horizontal album-shelf carousel. Save = the **heart icon** (add to Library). Refresh = the *circular replay* button. URL bar = the *scrubber input* on the transport.

**Remixed:** Album-art treatment — every blueprint gets a procedurally generated gradient "cover" derived from a hash of its title, so the 43-blueprint browse grid actually looks like a music library. Up Next is the genuine "recently used blueprints" queue.

**Removed:** No real removals; rather, redundancy was unified. Booting/loading and the launcher are panels in the same view, toggled via tab pills, so there is no separate "blueprint browser screen".

## Trade-offs
Aestheticising the iframe as album art means at small viewports the iframe shrinks to a stylized thumbnail and the WordPress site is no longer the *literal* hero — that's a real loss for first-touch anonymous users who want to immediately see WordPress. I mitigated this with a "Full Screen" toggle on the album cover. The music metaphor also strains where it has no analog: the Database tab is honestly just a tab inside the drawer, not a clever musical pun. Finally, the heart-as-save is delightful but slightly opaque for users who don't grok the metaphor — a tooltip on first hover handles this.
