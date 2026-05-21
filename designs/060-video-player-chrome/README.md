# 060 — Video player chrome

## Thesis
What if WordPress Playground felt like a media player? The iframe becomes the "video", and every interaction is staged around a transport bar at the bottom of the screen. A central **timeline scrubber** isn't time — it's the chronology of *playground states*: boot, blueprint applied, files edited, settings changed, saves. Drag the scrubber and you're scrubbing through the life of this session. Play means "site is running", Pause means "freeze the current state", Stop means "reset". The launcher is a **playlist**. Blueprints are **chapters**. Saved playgrounds are **shows in your library**. It reframes every existing affordance through a metaphor users already know intimately from YouTube, Spotify, and Netflix.

## What I remixed / merged / removed
- **Top toolbar** flattened into a single floating "Now Playing" pill (playground name + refresh + URL bar). Title + refresh become the "now playing" line; the URL bar is a compact "Go to" input.
- **Saved Playgrounds launcher** = a sliding **Library** panel on the right, with three "shelves": *New playback* (Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip — all framed as "sources"), *Playlists* (the full 43-blueprint gallery with search + categories), and *Your library* (saved playgrounds presented as "shows" with episode-style metadata).
- **Site Manager** = the **Equalizer / Track Info** drawer that slides up from the transport bar. Its 5 tabs (Settings, Files, Blueprint, DB, Logs) are reframed as audio-style tabs (Quality, Sources, Cue Sheet, Channels, Captions in spirit, but labelled honestly).
- **Settings popover** = a compact "Quality" menu on the transport bar (WP version, PHP, language, network, multisite, Apply+Reset).
- **Additional actions** = the **share menu** (Export to GitHub PR, Download .zip).
- **Save button** = a **bookmark/record** button on the transport bar that pulses when there are unsaved changes.
- **Toasts** = subtitle-style flyovers above the transport bar.
- **The scrubber itself** is the headline feature — it gives the user a literal visualisation of "where am I in this playground's history" which the current UI completely lacks.

## Trade-offs
The metaphor is delightful but you have to commit. Some controls land where they don't naturally belong (Database browser inside a "Channels" tab took some justification). The scrubber-of-states is technically only as good as the underlying snapshot system; in this mock it's a conceptual artefact rather than a true rewind (matching the brief: don't invent new features, this just *visualises* the existing save points and applied blueprints). The transport bar adds vertical chrome (72px) that competes with the iframe — acceptable on desktop, condensed to a mini-player on mobile. Finally, calling a permalink-structure setting "Quality" would mislead users, so the audio metaphor stops at the door of each panel; inside each panel labels are honest.
