# 025 — Cartograph · Atlas beside the iframe

> Direction 25 · `SPT + SR` · with `DEV` quietly carrying the slim top bar.

## 1. Thesis

Your saved playgrounds live on a **map**, not a list. Each site occupies a stable 2D position on a pannable atlas — Coffee Shop is *here*, Gaming News is *there* — and that atlas is **the persistent secondary pane of a smart-resize layout**. Whichever pane you touch grows; the other recedes. The atlas never disappears (except in true fullscreen): the periphery of your other sites stays visible while you work, like a sidebar that happens to be a map. There is no Site Manager sidebar, no "Saved Playgrounds" drawer, no left rail — there is **one secondary surface** that is *simultaneously* your launcher, your blueprint library, and (when you double-click a tile) your per-site Files / Blueprint / Database / Logs / Settings. Picking *which* site happens spatially. Picking *what* about that site happens on five tabs. Weighting which pane grows happens via interaction, with snap-to ratios (25/75 · 35/65 · 50/50 · 65/35 · 100/0) and a visible momentum gauge etched into the seam. The top bar is a single 40-pixel DEV line; everything else is the iframe or the atlas.

## 2. Primitives composed (KEEP list, named)

| Code | Primitive | How it's used here — load-bearing |
|---|---|---|
| **SPT** (v1 #10 Figma canvas) | Spatial memory | **The atlas IS a canvas with stable 2D positions.** Coffee Shop sits at x −410 / y +128; Gaming News, WP Beta, the 5 featured blueprints, the 9 themes/content blueprints, and the 4 experiments are each anchored to grid coordinates. Pan/zoom is the navigation (zoom controls in atlas head; position readout bottom-right; compass; legend). Tiles are grouped into dashed-boundary **regions** ("Your sites", "Featured", "Experiments", "Themes & content") rather than in a flat scroll list. The mini-atlas in the SM-head and the fullscreen-mode minimap both preserve the *same* coordinates so spatial memory survives mode switches. |
| **SR** (v5 #023 Smart resize) | Two panes; whichever you touch grows | The whole body is a CSS grid driven by `--iframe` and `--atlas` custom properties. Ratios are `r-25-75 / r-35-65 / r-50-50 / r-65-35 / r-100-0` (five snaps + fullscreen). The seam carries an etched gauge: ratio numerals + 5 snap dots + a directional arrow (◀ ▶ ━) + a ⌘keybinding hint. Different `iframe-focus` / `atlas-focus` body classes apply a subtle scrim to the *receding* pane (visual depth only — not a click target). Each of Panels A–J demonstrates a different ratio. No drag handle; touch grows. |
| **DEV** (v1 #64 DevTools top bar) | Slim 40px chrome, status pill | A single 40-pixel row: back/fwd/refresh, URL pill (lock + scheme + path), name+state pill (saved · unsaved · booting variants), conditional Save button (visible only when unsaved), Fullscreen icon, kebab. No two-row chrome. The pill is **status-only**; the Save **button** is the action — separation respected. |

The synthesis point is that **SPT and SR share the same DOM element**: the `.pane-atlas` div is *both* the spatial canvas (`.canvas` with positioned `.tile` children) *and* the right pane of the SR grid (its width is `var(--atlas)`). Move the seam, the spatial canvas resizes with it. Click into the atlas, the seam snaps in the atlas's favor. Two primitives, one element.

CWS is **deliberately excluded** — the atlas already IS the live-status, canonical Sites surface. Adding a separate corner widget would be dual-channel duplication for the same primitive (which is exactly what the brief's DROP list warns against). The minimap appears *only* in Panel J's fullscreen state, where the atlas pane is collapsed to 0% — it's a replacement door, not a coexisting one. 3LD is used as a faint scrim on the receding pane, decorative only, never interactive (brief permits this).

## 3. What I remixed / removed and why

The three settings entry points (popover + sidebar tab + info notice) collapse to the single **Settings** sub-tab of a site's atlas-mode-as-site-manager (Panel G), with one inline notice in Panel F's atlas. The "Saved Playgrounds dropdown" + "Site Manager open/close" + "Edit settings popover" all fuse into the *atlas pane* — there are no buttons to toggle; the atlas is always there. **WP Admin** and **Homepage** become pane-head chips inside the SM mode (Panels C/D/E), not global chrome — they only make sense in the context of a focused site. The destructive **Apply & Reset** uses three escalations (typed-phrase `coffee-shop` + diff sheet showing - WP 6.7 → + WP 6.8 RC1 + auto-snapshot `coffee-shop / pre-reset-2026-05-21-1422`) — never a small red banner. The "Console + visual hybrid" DROP pattern is respected: the Logs tab is read-only PHP output; the boot panel shows blueprint **steps** (structured progress checklist with timings) not raw stdout. The Save button is **conditional** (top bar only when name pill reads "Unsaved", absent on saved states) — separation of status and action that earlier v7 reviews flagged as the right pattern.

## 4. Trade-offs

The biggest risk is **discoverability of the atlas-as-launcher**: a first-time visitor sees a small atlas at 35% on the right and may read it as "thumbnails of my other sites" rather than realizing it's also where you start 43 blueprints and import zips. I mitigate three ways: (1) the atlas head literally says "3 saved · 43 blueprints · 6 sources" as a status crumb, so the scope is named; (2) clicking into the atlas grows it to 75% with the search box, 10 category chips, and 6-source dock all in view (Panel B) — the launcher is one click away; (3) ⌘K focuses the search box from anywhere. Second trade-off: **the SPT canvas needs *real* coordinates to feel spatial**, and I've laid out tiles in genuine x/y positions across all desktop panels, but a deployed version would need persistence — saved sites need stable positions across sessions (probably IndexedDB-stored alongside OPFS data). Third: **the atlas mode and site-manager mode share one surface** (the atlas pane swaps between "spatial overview" and "5-tab SM for *this* site" on double-click). This is "one secondary surface" taken seriously, but it means returning to atlas requires explicit clicks (the **Atlas** back button + map icon in the SM head) — I document the back-affordance and add a small mini-atlas readout at the right of the SM head so users always see *where* their focused site sits. Fourth: on **mobile**, SR rotates to vertical and the atlas becomes a bottom sheet at two detents. The mini-canvas inside the expanded sheet preserves coordinates, which is the strongest signal that SPT survives the device boundary — but the swipe-up gesture replaces the "click the atlas to grow it" desktop gesture. Different gesture, same primitive.

## 5. Idle affordances at the most-common idle (Panel A: saved running site, iframe focus 65/35)

1. **Refresh** (top bar)
2. **Back / Forward** (top bar — one cluster)
3. **URL bar** (top bar)
4. **Name + state pill** (top bar — status only)
5. **Fullscreen** icon (top bar)
6. **Kebab / Additional actions** (top bar)
7. **Atlas pane** (one cluster — zoom controls + tiles + compass + position readout + legend; all live on the same surface)
8. **Seam gauge** (etched into the seam — passive informational, but visible)

**Idle count: 8 exactly.** The Save button is hidden when the site is saved (it only appears in Panel F's unsaved state). The compass, legend, and position readout are atlas-internal indicators, counted as one cluster per the convention earlier reviews established for "the rail is one surface even when it has 5 docks." The 8-count is documented in an on-canvas count-strip below Panel A so a critic can grep for it.

## 6. Demonstrated states (10)

- **A** — Working session · iframe focus 65/35 · Coffee Shop saved + running · atlas shows 3 saved + featured + experiments regions
- **B** — Atlas focus 25/75 · launcher mode · 18 tiles visible (3 saved + 5 featured + 8 themes/content + 4 experiments) · search · 10 category chips with counts · 6-source dock
- **C** — Site Manager · Files tab · 50/50 · code editor with realistic `style.css` · file tree · mini-atlas in SM head
- **D** — Site Manager · Blueprint tab · 35/65 · real 9-step blueprint JSON · Run Blueprint + Copy link + Download bundle · Additional actions menu open showing both Export to GitHub PR + Download .zip
- **E** — Site Manager · Logs tab · 35/65 · dark log surface · 4 level filters · 12 realistic PHP log lines (deprecation, cURL timeout, cron, SQLite cache, WooCommerce boot)
- **F** — Unsaved Playground · 50/50 · amber name pill · Save button visible · save timeline (Unsaved → Saving → Saved) · inline notice · toast confirming OPFS write
- **G** — Settings tab + destructive Apply & Reset modal (typed-phrase + diff + auto-snapshot · NOT a red banner)
- **H** — Database tab · early-access amber notice · wp_posts preview with 8 rows · 5 tables + overflow
- **I** — Booting · 50/50 · iframe shows spinner, atlas shows the 9 blueprint steps as a checklist with timings (NOT a console echo)
- **J** — Fullscreen 100/0 · atlas collapsed · minimap appears bottom-left as the only chrome, preserving spatial coordinates · Esc/F exit pill
- **K** — Mobile (390×844, two phones): working session with bottom tab-bar sheet; atlas expanded with mini-canvas preserving tile coordinates

## 7. Feature coverage check (every v1 §2 feature reachable)

- **Refresh** ✓ top bar
- **Address bar** ✓ top bar (includes `/wp-admin`, `/?p=14`, `/wp-content/themes/...` examples)
- **Playground name** ✓ name+state pill (saved · unsaved · booting variants demonstrated)
- **Save** ✓ top-bar conditional button (Panel F) + inline notice in atlas (Panel F)
- **Saved Playgrounds dropdown** ✓ replaced by the always-visible atlas pane; launcher mode = Panel B
- **Open / Close Site Manager** ✓ atlas pane is the secondary surface; double-click a saved tile → SM mode for that site; **Atlas** back button returns to spatial overview
- **Edit Playground settings** ✓ Settings tab (Panel G)
- **6 sources** ✓ Vanilla / WP PR / GB PR / GitHub / Blueprint URL / .zip — Panel B dock
- **5 featured** ✓ Panel B "Featured" region with Art Gallery, Coffee Shop, Feed Reader, Gaming News, Non-profit
- **43-card gallery** ✓ Panel B canvas + categorized regions (18 visible above the fold, pan/zoom for the rest); search box; 10 category filter chips with live counts (All 46, Featured 5, Website 10, Personal 7, Content 6, Themes 6, Gutenberg 4, Experiments 3, WooCommerce 4, News 2)
- **Your Playgrounds** ✓ "Your sites" region of the atlas in Panel A/B/F · 3 saved (Coffee Shop, Gaming News, WP Beta) + 1 unsaved (Panel F)
- **5 Site-Manager tabs** ✓ Settings (Panel G) / Files (Panel C) / Blueprint (Panel D) / Database (Panel H) / Logs (Panel E)
- **Editable playground title** ✓ click name pill in top bar to rename + Rename in kebab menu (Panel D)
- **WP Admin / Homepage** ✓ pane-head chips in SM mode (Panels C/D/E)
- **Additional actions** ✓ Panel D menu — Rename, Pin to atlas region, Export to GitHub PR, Download .zip, Auto-snapshot, Delete
- **Apply & Reset destructive** ✓ Panel G modal — typed-phrase + diff + auto-snapshot
- **File browser + editor + New File/Folder** ✓ Panel C (full `/wordpress/` tree with wp-admin/wp-content/wp-includes/wp-config.php; real `style.css` editor; New file / New folder buttons in tree)
- **Blueprint JSON editor + toolbar** ✓ Panel D — file tree (blueprint.json + products.csv + theme.zip + steps/setup.php), Run Blueprint + Copy link + Download bundle buttons, 9-step JSON
- **Database SQLite early-access** ✓ Panel H — required notice text included verbatim
- **Logs search + level filters** ✓ Panel E — search box + Notice/Warn/Error/Fatal filters
- **Save site locally inline notice** ✓ Panel F atlas
- **Toast region** ✓ Panel F bottom-left
- **Booting state** ✓ Panel I
- **Mobile 390×844** ✓ Panel K (two states)
- **Desktop 1440×900** ✓ Panels A–J

## 8. Self-critique rubric (mandatory)

```
[x] Affordance count at idle ≤ 8?              Score: 5/5   (exactly 8, counted on-canvas in Panel A's count-strip; Save hidden when saved)
[x] iframe primacy + fullscreen toggle?        Score: 5/5   (F key + Esc + visible Fullscreen button; Panel J = 100/0 with iframe owning the entire canvas; iframe is the largest pane in every non-mobile panel except the explicit launcher 25/75 state)
[x] One door per feature?                      Score: 5/5   (Settings = Settings tab only; Files = Files tab; Sites = atlas pane; export = kebab only; WP Admin/Home = SM-head chips; Save = conditional top-bar button; minimap appears ONLY when atlas is collapsed, never alongside)
[x] One secondary surface?                     Score: 5/5   (single atlas pane; it swaps between "spatial overview" and "5-tab SM for one site"; never two panes; the minimap is a replacement door for the atlas when atlas is at 0%, not a third surface)
[x] Direction strongly expressed?              Score: 5/5   (the atlas literally IS the right pane of an SR grid; tiles have stable x/y coordinates; pan/zoom controls in atlas head; 5 demonstrated ratios + fullscreen; mini-atlas preserves coordinates across mode switches; regions group tiles spatially)
[x] Mobile = wider-mobile desktop?             Score: 4/5   (Panel K shows two states with the SR axis rotated 90°; atlas becomes a bottom sheet at two detents; the mini-canvas inside the expanded sheet preserves tile coordinates — the spatial primitive survives. The bottom-tab-bar gesture replaces the click-to-grow desktop gesture; different gesture, same primitive name. Honestly a 4 because the mobile sheet doesn't show all 18 tiles like desktop B does, but the IA and 5 categories + 6 sources do appear.)
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5   (SPT + SR + DEV named in §2 with code-level evidence — `var(--iframe)`/`var(--atlas)` driving the grid, `.tile` positions in pixel coordinates, the slim 40px topbar matching v1 #64. CWS is explicitly declined with a reason. 3LD is used only as a faint scrim on the receding pane.)
[x] No banned patterns (§1 DROP)?              Score: 5/5   (single 40px chrome row — no two-row top bar; depth used only as decorative scrim on the receding pane, never as a click target; Logs is read-only PHP output with level filters, booting panel shows structured blueprint steps not stdout — no dual-channel duplication)
```

All rows ≥ 4. No revision needed.

## 9. Composition discipline — what I declined

- **CWS** — declined. The atlas already IS the live-status, canonical Sites surface. A separate corner widget would duplicate the door. Panel J's minimap is the *only* place a CWS-like widget appears, and only because the atlas pane is collapsed to 0% — it's a replacement door, not a coexisting one.
- **3LD as interaction** — declined. Depth (the scrim on the receding pane) is decorative only. The brief permits this; the DROP list bans 3LD-as-control.
- **EPC cinematic hero** — declined. The launcher state (Panel B) is dense and spatial, not cinematic. SPT does the spatial work; adding a hero would compete.
- **QR rail** — declined. The whole point of SPT + SR is that the secondary surface is the spatial canvas itself, not a rail picking which content the secondary shows. Adding a rail would mean three layers of "what content"; we want one.
- **TAB on the seam** — declined. The tabs (5 sub-tabs of SM mode) live *inside* the atlas pane head, not on the seam. The seam carries only the gauge.
