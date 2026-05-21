# 017 — Linear / Vercel / minimal

## Thesis
Playground deserves the same restraint that Linear and Vercel give to engineering tools: one accent color, hairline borders, sharp Inter+JetBrains Mono typography, and a command palette that is the actual primary navigation. Everything that is currently a button or a dropdown menu lives in `⌘K` first; the visible chrome is only the toolbar, the iframe, and a context strip. The Site Manager and Saved Playgrounds drawer collapse into the same right-hand inspector — one panel, three tabs (Settings / Files / Logs) plus an `Inspect` sub-pane for Blueprint and Database. There is no marketing decoration, no rounded card with a gradient, no "hero" tile.

## What I remixed / merged / removed
- **Merged** the Saved Playgrounds drawer + the Site Manager + the Edit-Settings popover into one right-side **Inspector** with tabs. The launcher itself is the command palette (`⌘K`), so there is no separate drawer.
- **Merged** "Refresh", "Address bar", "Save", "Saved Playgrounds", "Open Site Manager", "Edit settings" into a single toolbar row, each affordance an icon button with a visible keyboard hint.
- **Promoted** the blueprint gallery into a `⌘K` mode (`>blueprint` filter), with the full 43 entries inline and category chips at the top. Featured tiles still surface, but as the first 5 rows.
- **Removed** all gradients, all multi-stop shadows, all hero illustrations. There is exactly one accent color (`#5E6AD2`-style indigo) and it is reserved for the **Apply Settings & Reset** primary action because it is destructive — the only place a user needs a visual nudge.
- **Replaced** the unsaved-state "small text button" with a persistent yellow dot on the playground label and a `⌘S` hint that animates once on first interaction.
- **Renamed** the "Additional actions" menu items to one-line verbs: `Export → GitHub PR`, `Download .zip`. They live under the kebab in the inspector header.

## Trade-offs
A keyboard-first UI is great for power users and brutal for first-timers — so the toolbar still shows everything as clickable icons, and the command palette is announced by a visible `⌘K` pill in the toolbar. Monochrome means no thumbnail-based recognition for blueprints; I compensated with a tight monospace tag system and category chips. Folding the Blueprint editor into the Inspector's Files tab "Inspect" pane saves real estate at the cost of an extra click compared to the current dedicated tab. Mobile collapses the inspector behind a bottom-sheet, and the address bar becomes a tappable label that opens `⌘K` in URL mode — a worthwhile sacrifice for a calmer default.
