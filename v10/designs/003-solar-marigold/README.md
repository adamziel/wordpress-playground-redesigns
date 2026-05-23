# 003 — Solar Marigold

## Thesis

Solar Marigold takes the v7 #010 "Quiet Rail" interaction model and re-skins it as a 1970s product manual taken seriously. Marigold (`#FFC847`) and warm brown ink (`#3A2C12`) sit on bone paper (`#FAF7EE`). Headlines are set in Bricolage Grotesque, a friendly slab-flavored grotesque; body copy is Inter. The result is warm, brand-forward, and unmistakably WordPress-Playground — playful but professional, like a Braun catalogue that just learned to ship WebAssembly.

The iframe is the loudest object on the page. Every chrome surface around it is a calmer recession of the same warm palette: bone surfaces with chunky 2px brown outer borders, slight inner shadows, and 14px rounded corners. The active rail item is marked by a marigold tab the same shape as a manual's section-tab cut. The pane's top edge gets a 6px marigold rule — the single "loud" cue that says you are now inside the secondary surface.

## What's locked (preserved verbatim from v7 #010)

- **Left rail (64px), five separate docks.** Sites, Site Manager, Blueprint, Database, Logs — each owns one pane.
- **One swap-content pane.** Exactly one secondary surface; content swaps when the active rail item changes. Never two panes side-by-side.
- **Slim top capsule (36px).** Refresh · address bar · Playground name · save-state pill (Unsaved → Saving → Saved → Stale) · More menu (Export to GitHub PR, Download .zip) · Fullscreen toggle.
- **Corner site widget** at the iframe's bottom-left, rendered here as a marigold sun-badge with site name + Running state.
- **Modal Library overlay (z3)** with 10 category filters and 16+ blueprint cards. Reachable from Sites pane "Library" segment AND `⌘K`.
- **Mobile mirror.** Rail rotates to a bottom tab bar, pane becomes a bottom sheet, library stays a full-screen sheet.

## What's reshaped

- **Visual idiom.** Brand-forward marigold-on-bone replaces v7 #010's dark-indigo + purple + cyan. Type system swaps to Bricolage Grotesque headlines + Inter body + JetBrains Mono for paths/logs/JSON.
- **Border vocabulary.** Chunky 2px brown borders, 14px corner radius, 0 0 0 1px inner highlights and a 6px marigold "active edge" instead of the v7 glow.
- **Pane content arrangement.** 5-dock — Files, Database, Blueprint, Logs each own a dedicated pane (rather than living as 5 tabs inside one Manage pane). The Site Manager pane focuses purely on Settings + the 5-tab Site Manager segment for quick cross-jumping; clicking a tab swaps the whole pane.
- **Corner widget shape.** A circular sun-badge (marigold disc) instead of a translucent capsule, holding the site name + WP/PHP/size strip.
- **Library overlay shape.** Poster-style cards with bold marigold category chips; category sidebar uses tab-cuts like a binder index.
- **Apply Settings & Reset confirmation.** Typed-phrase ("reset Coffee Shop") + a diff list of fields that will change + an auto-snapshot promise. All three confirmation mechanics layered so the action is impossible to do absent-mindedly.

## Trade-offs

- Five dedicated panes means more rail clicks for cross-tool workflows (e.g. Files → Logs) than the 5-tab variant; the trade is that each pane gets its full vertical budget for content, with no segmented tabs eating real estate.
- The warm marigold palette risks competing with the iframe; we contain it to the active rail item, the pane top edge, the save-pill, the sun-badge widget, and category chips — everywhere else is desaturated bone.
- The 1970s manual aesthetic is opinionated; teams that want a neutral platform feel may prefer 005-carbon-lab or 002-linear-onyx.
