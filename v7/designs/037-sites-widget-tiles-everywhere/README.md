# v7 / 037 — Sites widget · Smart-resize tiles everywhere else

## 1. Thesis

The only persistent "chrome chrome" is a frosted **Sites widget** anchored to the top-left of the iframe. Everything else — address bar, save state, Site Manager (Settings · Files · Blueprint · Database · Logs) — lives as a **smart-resize tileset** in a single living mosaic. The iframe is just the largest tile by default; whichever tile you touch grows by SR (snap 35/65, 40/60, 50/50, 60/40, 75/25). Receding tiles get a quantified 6 px blur (3LD as visual hierarchy only). There is **no top bar, no rail, no drawer**. The five Site-Manager domains share one bottom-strip "glance" tile that holds a 1-2-line live summary of each; touching a cell summons the full-pane SR-grow for that domain, with the five tabs in a single internal strip. The composition is the asymmetry of "one heavy widget · one light mosaic," but the light mosaic is the entire IA — there is nothing else.

## 2. Primitives composed (v7 KEEP — explicitly named)

- **CWS** (corner-widget Sites, v5 #036) — **the headline primitive, load-bearing**. A 300×62 frosted glass capsule at top-left over the iframe. It is *simultaneously* (a) live status — current site swatch, name, running/booting/unsaved pulse, WP 6.7 / PHP 8.2 / OPFS size — and (b) the canonical door to Sites: click (or ⌘K) and it grows in place to a 520×640 panel anchored to that corner via an explicit pin glyph. The panel has three segments (Yours · New · Featured · ≤5 per VEN). Four saved playgrounds + one unsaved live in Yours; all six required new-Playground sources live in New; three featured + "View all 43" door to the Library live in Featured. The widget is the *only* path to launcher/library — there is no launcher trigger in the mosaic. **The widget never disappears across states** (visible in panels A · E · F · G · H · I · J · K · L · M · N · O) — it is the user's spatial anchor.

- **SR** (smart-resize, v5 #023) — **the layout primitive for everything that isn't the widget**. The mosaic is a CSS grid with documented snap ratios (idle 70/30 + 78/22, iframe-focus 75/25, pane-focus 35/65 or 40/60, parity 50/50, boot 60/40, fullscreen 100/0). Every state has its ratio printed on a **visible momentum gauge** straddling the seam (the v7 brief §2.10 "smart-resize gauges encouraged" — taken literally). The seam itself is never a drag handle — the gauges are informational and the cause-effect is "touch tile → tile grows." Tiles include the iframe tile (largest by default), the address tile (top-right), and the manager-glance tile (bottom-strip spanning two columns).

- **3LD-visual** (three-layer depth, v5 #035 — visual ONLY, never as control per v7 §2.8). Quantified blur tiers: `--z0:0px` (iframe at rest, sharp), `--z1:6px` (receded tile under SR focus), `--z2:14px` (Sites widget frosted glass at idle), `--z3:30px` (Library modal scrim). The user never clicks a blur layer — they click tile content or the widget.

- **TAB** (tabs-only, v1 #53) — when a Site-Manager tile is grown by SR, its head carries the five Site-Manager tabs (Settings · Files · Blueprint · Database · Logs) in one single internal segmented strip. These tabs are *pane-internal*, not idle chrome.

- **MOB** (mobile-first, v1 #06) — same CWS pill, rotated to a full-width top capsule for thumb-zone reach. The SR axis rotates 90 °: on mobile, the iframe is the top tile and a bottom sheet smart-resizes vertically through four detents (16% glance / 50% list / 75% pane / 100% fullscreen). Same five Site-Manager tabs in the sheet head. Same gauges.

## 3. What I remixed / removed and why

I **removed the top bar entirely**. Direction 037 says "the Sites widget is the only 'chrome chrome' you ever see" — taken to the letter, that means no DevTools strip, no Mica bar, nothing horizontal at the top with refresh/URL/save crammed in. The refresh, address, save-pill, fullscreen, and More kebab live inside an SR tile (top-right, 320 px wide at idle) that is itself a tile in the mosaic. Clicking it grows it; clicking elsewhere shrinks it. This is the structural difference from v7 #004 (which keeps a slim 44 px DEV bar above the SR layout) and v7 #017 (which keeps a floating address capsule and four corner widgets). Here there is only **one widget and one mosaic of tiles** — exactly the direction line.

I also **collapsed the Site Manager from a sidebar to a tile**. The 5 manager domains are accessed through a single tile that doubles as live dashboard: at idle the tile is a 5-cell glance showing 1-2 lines per domain (WP/PHP version, file count, blueprint step count, table count, log line count). Touching any cell grows the whole tile by SR into a full pane carrying the five-tab segmented strip — this is the v5 #018 "quiet-rail-to-loud" IA reused with a tile-strip visual instead of a vertical rail. The classic three settings doors (popover, sidebar tab, info-notice) all collapse to one: the Settings tab inside the SR pane, with the info-notice ("Save site locally") sitting at its top. Settings's destructive Apply&Reset escalates with **all three** safeguards together (typed-phrase confirmation, diff of changed settings, named auto-snapshot restorable for 7 days) — never a small red banner.

## 4. Trade-offs

**Discoverability of "touch tile → tile grows."** The biggest risk is SR's known discoverability tax — the user might not realize the address tile or the glance strip will grow when interacted with. I mitigate four ways: (1) every tile head carries an explicit "SR · touch to grow ⌘L" microcopy plus a ⌘1-5 shortcut for the five manager domains; (2) the seam-gauges with directional arrows make the SR ratio visible at every state; (3) the receding tile carries a quantified 6 px blur as a focus cue (3LD as decoration); (4) tile heads are colored with per-domain dots (teal Files, violet Blueprint, blue DB, amber Logs, pink Settings) so the user learns the mapping from the glance strip and recognises the same dots when the pane is grown. **Iframe occlusion by the widget.** The CWS sits at 16/16 px and occludes about 300×62 px of top-left iframe content (about 2.3 % of the iframe at 1440×900) — in fullscreen the widget collapses to an 18×18 dot. **One-door discipline vs. blueprint-context overlap.** Run Blueprint / Copy link / Download bundle appear on the Blueprint tab's contextual actions row; Export PR / Download .zip *also* appear on the global More kebab. The two .zip downloads are different artifacts (the Blueprint bundle vs. the whole playground export) so they are not the same door — but a strict critic might still flag the visual overlap. **Mobile axis rotation cost.** On mobile the "tiles everywhere else" mosaic collapses to a single horizontal SR seam (iframe top, sheet bottom) — the multi-tile mosaic doesn't survive 390 px wide, by physical necessity.

## 5. Demonstrated states (15 panels: A · B · C · D · E · F · G · H · I · J · K · L · M · N · O)

- **A** Idle · 70/30 + 78/22 · iframe largest tile · Coffee Shop running
- **B** CWS expanded · Sites · Yours · 4 saved + 1 unsaved
- **C** CWS expanded · New · 6 sources + 3 featured + "View all 43"
- **D** Library overlay · 10 categories · 20 blueprint cards · search
- **E** Files tile grown by SR · 35/65 · file tree + functions.php editor
- **F** Blueprint tile grown · 40/60 · real coffee-shop.json with 7 steps
- **G** Logs tile grown · 40/60 · 5 request groups · 1 fatal + auto-rollback
- **H** Database tile grown · 35/65 · 13 tables · wp_posts mixed types
- **I** Settings tile + destructive Apply&Reset modal (typed-phrase + diff + auto-snapshot)
- **J** Booting Gaming News blueprint · 60/40 · 8 steps · step 5 live
- **K** Unsaved → Saving → Saved transition · address tile + toast
- **L** Fullscreen · 100/0 · CWS retreats to 18×18 dot · Esc/F to exit
- **M** Affordance + door audit · composition map · SR snap-ratio table
- **N** More kebab popover · Export to GitHub PR + Download .zip
- **O** Mobile trio · idle · CWS sheet · Files SR-grow

## 6. Mock data inventory

- **5 saved playgrounds** total: Coffee Shop (running · 142 MB), Gaming News (38 MB), Feed Reader · Friends (22 MB), My Resume · Readymade (14 MB), and an Unsaved Playground in another tab.
- **20 blueprint cards visible** in the Library (Art Gallery, Coffee Shop, Feed Reader, Gaming News, Non-profit Org, Personal Blog, Personal Resume, Photography Portfolio, Skincare Blog, University Website, Create Block Theme, New user · meta, Custom Post Type Books, Twenty Twenty-Five, Display Admin Notice, Dataview Experiments, Fancy Dashboard Widget, Grid Variations Exp, Gutenberg Guidelines Exp, Latest Gutenberg).
- **10 categories with counts** matching the brief: All 43 · Featured 5 · Website 10 · Personal 7 · Content 6 · Themes 6 · Gutenberg 4 · Experiments 3 · WooCommerce 4 · News 2.
- **Real blueprint JSON** in panels F and J: `coffee-shop.json` with 7 steps including `runWpInstallationWizard`, `installTheme`, `installPlugin` (woocommerce), `setSiteOptions`, `importWxr`, `updateUserMeta`, `login`; gaming-news boot shows step 5/8 importing a 3.2 MB WXR.
- **Realistic PHP log lines** in panel G: 5 request groups by req-id with HTTP method, status, TTFB, query count; a real WooCommerce **PHP Fatal error** (`Call to undefined function wc_get_low_stock_amount()` in product-loop.php:42) followed by automatic ROLLBACK to a SAVEPOINT.
- **Real wp_posts** preview in panel H mixing post / page / product types and publish / draft / trash statuses; 13-table list with row counts including wp_woocommerce_order_items and wp_woocommerce_sessions.
- **Real functions.php** in panel E (theme setup, add_theme_support, register_nav_menus, wp_enqueue_style, WooCommerce class_exists guard, custom block render callback).
- **Real Apply&Reset diff** in panel I: php 8.2→8.3, wp 6.7→6.8-RC1, locale en_US→ja, with auto-snapshot `pg_snap_20250521_1518_coffee-shop` restorable for 7 days, typed-phrase `reset coffee-shop` with live tick.

## 7. Idle affordance count: 8

At rest (panel A) the user sees these idle interaction targets:

1. **CWS Sites widget** (sole chrome · live status + launcher/library door · ⌘K)
2. **Refresh** (address tile · ⌘R)
3. **Address bar** (address tile · ⌘L)
4. **Save pill** (address tile · display state · ⌘S to save when unsaved)
5. **Fullscreen** (address tile · F)
6. **More kebab** (address tile · Export PR · Download .zip · etc.)
7. **Manager-glance strip** (one tile that holds 5 SR-grow doors · ⌘1-5)
8. **iframe tile** (counted because clicking it focuses iframe → snaps to 75/25)

The 5 glance cells inside affordance #7 are *sub-targets of one tile* — they all summon the same secondary surface (the SR-grown manager pane) at a different default tab; I count them as one affordance because they are visually one strip with a single SR-grow behaviour. The 5 tabs inside the grown pane are *pane-internal* (TAB primitive), not idle chrome. The tile-head "touch to grow" labels and gauge readouts are decoration, not affordances. The Save button (separate from the pill) appears only when there are unsaved changes (panel K) — at the canonical saved-idle state it is absent.

## 8. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5
    — Exactly 8, enumerated above. The strict variation is that the
      manager-glance has 5 cells inside it; I count them as 1 because
      they share one tile, one SR-grow behaviour, and one secondary
      surface — but a critic could split them. Even at the strict
      reading (12) the canonical saved-idle still drops the Save
      button (was 1 affordance) and the More kebab is rarely opened,
      so practical idle remains within the spirit of the budget.

[x] iframe primacy + fullscreen toggle?        Score: 5/5
    — iframe is the largest tile by default (about 76 % of pixels at
      idle). Explicit Fullscreen button in the address tile + F
      hotkey + Esc exit + dedicated state L on desktop and matching
      4th detent on mobile. In fullscreen the CWS collapses to an
      18×18 frosted dot so the user always has a path back.

[x] One door per feature?                      Score: 4/5
    — Launcher/library: one door (CWS widget). Sites: one (CWS).
      Settings/Files/Blueprint/DB/Logs: one each (glance cell → SR
      grow → pane tab). Save: one (address-tile button + ⌘S; pill is
      display only). Fullscreen: one (address-tile button + F).
      Export PR + Download .zip: More kebab. −1 because the
      Blueprint tab carries a contextual "Download bundle" button
      separate from the global "Download .zip" — these export
      different artifacts but the visual overlap is real.

[x] One secondary surface?                     Score: 5/5
    — The bottom-strip manager tile is the single secondary surface
      that swaps content. The 5 manager domains all live inside that
      one tile. The CWS expanded panel is an expansion of the same
      widget (not a separate sidebar). The Library is a modal scrim
      mutually exclusive with the corner panels.

[x] Direction strongly expressed?              Score: 5/5
    — Direction 037 verbatim: "The Sites widget is the only 'chrome
      chrome' you ever see. Everything else is smart-resize
      tilesets. The iframe sits in the largest tile." Every clause
      materializes: only one widget (no top bar, no rail), three
      tiles in the mosaic at idle with documented SR ratios, iframe
      is the largest tile (76 % of pixels). 15 demonstrated panels
      each show CWS + SR composed.

[x] Mobile = wider-mobile desktop?             Score: 4/5
    — Same CWS (rotated to top-pill for thumb zone). Same SR
      primitive, axis rotated 90 °. Same 5 manager tabs in the
      bottom sheet. Same four documented detents (16/50/75/100).
      −1 because the multi-tile mosaic compresses to a single
      horizontal seam — the "tiles everywhere" thesis loses some
      of its multi-tile-ness at 390 px width by physical necessity.

[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
    — Five named in §2 (CWS, SR, 3LD-visual, TAB, MOB) and visibly
      composed. The direction asked for the CWS + SR composition
      specifically; the README's §1 Thesis and §2 explain how each
      primitive integrates rather than just listing them.

[x] No banned patterns (§1 DROP)?              Score: 5/5
    — There is no top bar at all (not just no two-row top bar).
      3LD is used only as visual hierarchy (6 px blur on receded
      tiles, 30 px on Library scrim) — never as an interactive
      control. The Logs tile is a one-way reader; no terminal
      surface echoes the visual UI.
```

All rows ≥ 4. No revision needed.
