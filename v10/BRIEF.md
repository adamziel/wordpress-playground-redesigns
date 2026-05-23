# WordPress Playground v10 — Quiet Rail · Twenty Skins

This round produces twenty self-contained prototypes that all express **the v7 #010 “Quiet Rail · Depth Tiers” interaction model**, but each one shipped with a different visual language, different pane arrangement, and (for the last 8) different IA primitive.

The user has signed off on the v7 #010 interaction model. The complaint about v7 #010 is purely about visual styling (colors, look & feel, borders). v10 is the visual exploration of that confirmed model.

Live target URL: `https://adamziel.github.io/wordpress-playground-redesigns/v10/`

## The model we are preserving (read this twice)

The chrome around the WordPress iframe must offer:

1. **One iframe-primary surface.** The WordPress iframe is the only sharp, fully visible surface. Every other panel recedes (blur / opacity / desaturation / type weight — the *technique* is up to the visual style, but the iframe is always the loudest object).
2. **One quiet rail.** A narrow persistent primitive that holds the 5 IA destinations (Sites, Site Manager, Blueprint, Database, Logs). It is calm at rest — icons or initials, no labels, no badges except 1 error count on Site Manager. Clicking a rail item opens the *one* secondary pane.
3. **One swap-content pane.** Exactly one secondary surface. Content swaps when you change rail items. It never shows two tools side-by-side; it stacks tabs or segments inside.
4. **A slim top capsule.** A single 36–40px row floating over the iframe. Holds: refresh, address bar (path), Playground name + save-state pill (`Unsaved → Saving → Saved → Stale`), More menu (Export to GitHub PR, Download .zip), Fullscreen toggle. **Never two rows of chrome.**
5. **A corner site widget.** A small frosted capsule in the iframe’s bottom-left (or bottom-right, depending on visual) showing: site name + state ("Running · WP 6.7 · 14.2 MB"). Clicking it opens the Sites pane.
6. **A modal Library overlay.** The 43-blueprint browser is a z3 modal (or modal-equivalent in the chosen visual idiom), not nested inside the pane. 10 category filters. Reachable from the Sites pane "Library" segment AND from `⌘K`.
7. **A mobile mirror.** Same IA reflected: rail rotates to bottom tab bar, pane becomes a bottom sheet, library remains a full-screen modal, corner widget shrinks to a thin capsule above the rail.

## What varies between designs

Locked-model designs (12): same IA, different look & feel + different pane content choices.

| Variation | Options |
| --- | --- |
| Visual idiom | editorial newsprint, brutalist mono, soft pastel, brand-marigold, carbon industrial, glass aurora, terminal phosphor, forest botanical, mondrian primary, sunset coral, slate corporate, vellum sage |
| Border vocabulary | hairline, double-stroke, dotted, none, drop-shadow only, ridge groove, asymmetric, paper-edge, etc. |
| Pane content arrangement | (a) 5 separate dock icons → 5 distinct pane modes; (b) 2 dock icons (Sites, Manage) → Sites pane has 3 segments, Manage pane has 5 tabs (closer to v7); (c) 3 dock icons (Launch, Inspect, Inspect+) where Inspect groups Files+DB+Blueprint+Logs as tabs; (d) Hybrid: Settings + Inspect (Files/Blueprint) + Runtime (DB/Logs) |
| Top capsule shape | pill, slab, framed, floating diamond, two-segment, etc. |
| Corner widget shape | rounded card, badge tab, ticker, sticker, stamp, etc. |
| Library overlay shape | sheet, dialog, full-screen, drawer, sidebar+grid, mosaic |

Structural-exploratory designs (8): same iframe-primacy + same one-secondary-surface rule, but shift the rail primitive:

- right rail (mirror of left)
- top tab strip across the iframe (rail rotated 90°, dock above)
- floating macOS-style dock (rail unpinned, hovering)
- corner-pinned floating tools (no rail; each tool is its own floating chip on the iframe — still feeds the same one secondary pane)
- bottom inspector dock (pane is below the iframe, full-width, resizable)
- command palette first (rail collapsed to 2 buttons + persistent `⌘K`)
- bottom-sheet IA on desktop (sheet replaces the side pane)
- split-rail (very thin always-on left rail of 2 icons + a wide pane that the icons swap)

## Hard requirements per design

Every `designs/NNN-slug/index.html` is a single self-contained HTML file that must visibly show:

- Real `<iframe>` element (the WP surface — its content can be a `srcdoc` mock).
- Refresh, address/path input, WP Admin button, Homepage button, Fullscreen/Focus toggle.
- Save state pill in at least one panel: `Unsaved`, `Saving`, `Saved`, `Stale`.
- Saved Playgrounds list with at least 4 realistic entries.
- All six start routes: Vanilla WordPress, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip.
- Blueprint gallery with search field, 10 category filters (All, Featured, Website, Personal, Content, Themes, Gutenberg, Experiments, WooCommerce, News), and at least 16 visible cards.
- Site Manager surfaces: Settings, Files, Blueprint, Database, Logs — arranged per the variation table above.
- Settings fields: WordPress version, "Include older versions", PHP version, Language, Allow network access, Create a multisite network.
- Additional actions: Export to GitHub PR + Download .zip.
- Destructive Apply+Reset with a real confirmation mechanic (typed phrase OR diff sheet OR auto-snapshot OR explicit undo — make it visible).
- Three states in one document via in-page toggles or scroll panels: running session, booting/starting, launcher or library or manager open.
- Mobile panel (390×844) rendered alongside or via responsive resize.
- Realistic mock data: 4 saved sites with names + dates, 16+ blueprint titles+descriptions, 6+ realistic PHP log lines, a blueprint JSON sample, a file tree, SQLite table names + path + size.

## Quality bar

- Looks like a shipping product, not a wireframe. Real typography choices, real spacing, real shadow / border discipline.
- Visual style is *unmistakable* — a stranger looking at the screenshot should be able to label the idiom without reading the design name.
- The interaction model is *obvious* from the first viewport: the user can point at the rail, the pane, the capsule, and the widget.

## Required files per design

```
v10/designs/NNN-slug/
  index.html      (≥ 14 000 bytes, all CSS/JS inline, viewport meta required)
  README.md       (≥ 700 chars: thesis, what's locked vs explored, trade-offs)
  meta.json       (see schema below)
```

`meta.json`:

```json
{
  "num": 1,
  "slug": "001-editorial-newsprint",
  "title": "Editorial Newsprint",
  "summary": "≤ 180 chars — name the visual idiom and the pane variation.",
  "model": "locked" | "structural",
  "visualIdiom": "short label, e.g. 'editorial newsprint' / 'mondrian primary'",
  "paneArrangement": "5-dock | 2-dock-segmented | 3-dock-grouped | tabbed-inspect | structural-other",
  "flow": "≤ 180 chars — name the IA primitive variant if structural."
}
```

## v7 #010 affordances inventory (for reference — do not re-invent)

- Rail at left (64px), 5 docks + identity avatar at top, settings/help at bottom.
- Pane at left+64px to ~444px, 380px wide. Top edge accented (the "loud cue"). Title + 5-tab segmented (Settings/Files/Blueprint/Database/Logs) for Site Manager, or 3-tab segmented (Yours/New/Library) for Sites.
- Top capsule at top:14px left:80px right:18px — 36px tall. Order: refresh · address · pgtitle · save-pill · more · fullscreen.
- Corner Sites widget bottom-left of the iframe area (not over the rail), shows site name + dot status, click to open Sites pane.
- Library overlay full-canvas frosted with category sidebar (10 categories) + search + grid of 16–20 cards.
- Mobile: rail rotates to a 78px bottom tab bar; pane becomes a 65%-tall bottom sheet at z2; corner widget becomes a horizontal capsule above the bottom rail; library is a full-screen sheet at z3.

That is the model. v10 ships 20 visual interpretations of that model.
