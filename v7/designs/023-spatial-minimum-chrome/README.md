# v7 / 023 — Spatial · Minimum Chrome

## 1. Thesis

Saved playgrounds live as cards positioned in a two-dimensional canvas, not in a list and not in a sidebar. Pan and zoom is the *only* navigation. At idle, the chrome is reduced to **five** affordances scattered at the canvas edges — a spotlight, a zoom slider, a launcher button, a fullscreen toggle, and a settings cog. The canvas is the IA. When you zoom into a tile, the chrome **materializes**: a slim 44 px DevTools-style top bar appears, a corner "you are here" widget shows your position on the canvas (and is the door back), and one secondary surface — a single pane with five tabs — handles Settings, Files, Blueprint, Database and Logs. Zoom out (Esc / chevron / canvas pan) and the chrome dissolves. The spatial canvas is the home; the per-site chrome is a *transient* skin that only exists when you are looking *at* a site.

## 2. Primitives composed (v7 KEEP, named)

- **SPT** (Figma spatial canvas, v1 #10) — the *backbone*. Twelve saved playgrounds are positioned in 2D space (Panel A: storefronts cluster top-left, editorial sites center, personal blogs right, photography/feed lower-middle, drafts and unsaved at the outer ring). Each tile is a real *iframe thumbnail* with a status pip + name + version line. The minimap (bottom-right) shows the canvas viewport rectangle and 12 site dots. Pan/zoom is the navigation: there is no list, no sidebar — the canvas itself is the launcher. (Direction prompt: "Saved playgrounds positioned in 2D space. Pan/zoom is the only navigation.")
- **3LD** (three-layer depth, v5 #035) — *visual decoration only*, never an interactive control (per v7 brief §2.8). Quantified blur tiers `--z0:0 / --z1:3 / --z2:9 / --z3:18 / --z4:32` applied via `.tile.d0..d4` classes. Depth = distance from cursor focus. In Panel B (zoom 2.4×) the focused Coffee Shop is sharp (z0) and peripheral tiles tier down through z2/z3/z4 with reduced saturation + opacity. You never *click* a blur — you click a tile.
- **DEV** (slim top bar, v1 #64) — appears only when zoomed-in. Single 44 px row, never two-row (DROP). Status pill (saved/saving/unsaved/booting) instead of red banner. Refresh, URL bar, name pill, optional Save button, Fullscreen, More — six items max. Panel B shows it transitioning in at 55 % opacity as the zoom completes.
- **CWS** (corner widget Sites, v5 #036) — appears only when zoomed-in. Bottom-left, frosted glass capsule. Shows the **current site's swatch + name + canvas position** as live status, *and* is the canonical door back to the overview ("Zoom out · Esc"). Includes a 64 px mini-canvas-map inside the widget itself: you can see *where on the canvas* you are zoomed into. This is the v7 thesis of CWS — corner widget = live status + canonical door, fused into a single object.
- **MOB** (mobile-first, v1 #06) — same primitive set at 390×844. The canvas pans/pinch-zooms; spotlight + FAB persist as bottom-anchored controls; when you zoom in, the slim top bar appears and the CWS becomes a bottom capsule. The secondary surface becomes a bottom sheet at detents (Panel O). Same IA, narrower geometry.
- **TAB** (tabs-only, v1 #53) — the secondary surface uses five tabs (Settings · Files · Blueprint · Database · Logs) — exactly the five Site-Manager tabs from the brief, no Sites tab because the canvas *is* the Sites browser. This respects VEN's ≤ 5 items per pane.

## 3. What I remixed / removed and why

I deleted the canonical Playground left sidebar entirely. The "Sites" / saved-playgrounds list and the "Site Manager" left sidebar collapse into a single new geometry — the canvas — that is simultaneously *all* of your saved sites and *none* of the per-site chrome. The chrome only exists when you have zoomed into a specific site, which means at the cold-start moment (someone opens playground.wordpress.net) the visual weight is on **your work**, not on the buttons that operate on your work. The three settings entry points in v1 fold into one: a single Settings tab inside the pane (and the Apply+Reset moves to a Danger Zone block inside it). The "Save site locally" info notice that used to dangle in the Site Manager header now lives *inside the Settings tab* (Panel D), next to a primary Save button. The launcher's six new-Playground sources, the 43-blueprint browser, and the search were unified into one **Library overlay** (Panel I) reachable from the spotlight, the FAB, or `⌘K`. Exports (GitHub PR + .zip) live both as buttons on the Blueprint tab toolbar (the contextual location: a blueprint thing) *and* in the DEV bar's More kebab (the session-wide location). I chose two anchors over one because the brief says "the menu surfaces both" — but they go to the same dialog. The destructive Apply+Reset uses *all three* escalation guards mentioned by the brief (typed phrase + diff + auto-snapshot, Panel K) — never a small red banner.

## 4. Trade-offs

The biggest risk is the same one Figma faced: **pan/zoom discoverability**. New users may not realize the canvas is interactive. I mitigate three ways: (1) a visible zoom slider on the left edge with `+/−` glyphs and a percent readout; (2) a hover-tag in Panel A demonstrating the click → zoom affordance ("click to zoom · ⌥+click to open in pane"); (3) a minimap at bottom-right that doubles as orientation and a click-to-pan target. The second risk is **idle scarcity**: five affordances is aggressively small, and a user looking to e.g. open Files for their current playground sees no door at idle. The answer is that you don't *have* an "open Files" affordance until you have focused a specific site — the chrome materializes when the context exists. This is the trade I'm taking: visual quiet at idle in exchange for an extra zoom step before per-site operations. The third trade-off is that **the canvas grows infinite** for users with many sites; I assume a saved-site cap (the OPFS quota is finite anyway) and use the minimap as the bird's-eye view. On mobile, the canvas pinch-zoom gesture replaces the desktop scroll-wheel + slider; identical IA, native phone gesture. The minimap shrinks to the corner.

## 5. Demonstrated states (15 panels)

- **A** Spatial canvas idle (1440×900) — 12 tiles at 3LD depth tiers, 5 affordances, minimap
- **B** Zoom 2.4× transitioning — Coffee Shop focused (z0), peripherals fade through z1–z4, DEV bar materializing at 55% opacity
- **C** Zoomed-in fully — iframe is primary surface, DEV bar + CWS materialized
- **D** Site Manager pane → Settings tab — unsaved-playground notice + Save button + Apply+Reset Danger Zone
- **E** Files tab — file tree + functions.php in editor (real PHP)
- **F** Blueprint tab — real blueprint JSON + Export PR / Download .zip / Import .zip / Run buttons
- **G** Database tab — early-access notice + 13 SQLite tables + wp_posts data preview
- **H** Logs tab — search + level filter + 18 realistic PHP log lines
- **I** Library overlay — 6 sources at top + search + 10 category filter chips + 20 blueprint cards (43 available)
- **J** Booting — Coffee Shop boot ring + 8-step progress with 4 done / 1 active / 3 future + Cancel boot
- **K** Apply+Reset — typed-phrase + diff + auto-snapshot banner (destructive escalation)
- **L** Save transition — Unsaved → Saving → Saved timeline + morphing name pill + toast
- **M** Fullscreen 100/0 — iframe takes everything, single Esc/F pill
- **N** Mobile pair (390×844) — canvas idle (4 affordances) + zoomed-in (slim bar + CWS)
- **O** Mobile pair (390×844) — Site Manager sheet at detent + full Library overlay

## 6. Mock data inventory

- **12 saved playgrounds** positioned on the canvas: Coffee Shop (running 142 MB · 7m), Art Gallery — Vueo (running 78 MB · 22m), Feed Reader — Friends (running 56 MB · 3h), Stylish Press, Skincare Blog, Photo Portfolio, Personal Blog, Personal Resume, University Site, Gaming News, Non-profit — Koinonia, WP Beta Sandbox, Books CPT test, WPGraphQL IDE — plus one *unsaved* playground tile demonstrated in Panel A and Panel L. (Brief minimum: ≥ 3 saved.)
- **20 blueprint cards** visible above the fold in the Library overlay (Panel I), of 43 total: Art Gallery, Coffee Shop, Feed Reader · Friends, Gaming News, Non-profit Org, Personal Blog, Personal Resume, Photo Portfolio, Skincare Blog, University, Custom Post Type: Books, Twenty Twenty-Five, Latest Gutenberg, Minimal WooCommerce, wp-cli add posts, WordPress Beta, Fancy Dashboard Widget, WPGraphQL, Grid Variations Experiments, Stylish Press. (Brief minimum: ≥ 16.)
- **10 category chips** with real counts: All 43, Featured 5, Website 10, Personal 7, Content 6, Themes 6, Gutenberg 4, Experiments 3, WooCommerce 4, News 2.
- **6 new-Playground sources** visible at top of Library: Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip.
- **Real blueprint JSON** (Panel F): `$schema`, `landingPage`, `preferredVersions`, `phpExtensionBundles: ["kitchen-sink"]`, `siteOptions { blogname, permalink_structure }`, `steps[]` with `runWpInstallationWizard`, `installTheme` (vfs resource), `installPlugin` (wordpress.org/plugins, woocommerce + woocommerce-services), `setSiteOptions` (woocommerce_default_country, woocommerce_store_address), `importWxr`, `runPHP`, `updateUserMeta` (admin_color → modern).
- **Realistic PHP log lines** (Panel H): `strftime() deprecated`, `Undefined array key "_wcml_custom_prices"`, `cURL error 35: SSL handshake failed` (OpenWeatherMap), `Allowed memory size of 134217728 bytes exhausted` (recovered via WSOD), `SAVEPOINT pg_snap_*` (pre-reset), `REST: 401 Unauthorized`, request timings (212ms · 41 queries · 18 MB peak), gd-jpeg recoverable, cron ticks.
- **Real wp_posts table** preview (Panel G) with mixed types (post, page, product, WooCommerce orders) and statuses (publish, draft, trash).
- **Real functions.php** (Panel E): theme setup, register_nav_menus, wp_enqueue_style with filemtime, WooCommerce class_exists guard.
- **Apply+Reset diff** (Panel K): PHP 8.2 → 8.3, WP 6.7 → 6.8-RC1, WPLANG en_US → ja, with `pg_snap_20250521_1518` auto-snapshot banner and typed-phrase `reset coffee-shop`.

## 7. Idle affordance count: 5

At rest (Panel A), the user sees:
1. **Spotlight** (top, ⌘K) — search sites · blueprints · settings
2. **Zoom slider** (left) — manual zoom with +/− and visible level readout
3. **Launcher FAB** (bottom center, N) — "+ New playground" → Library overlay
4. **Fullscreen** (bottom-left, F) — explicit toggle
5. **Settings cog** (top-right)

The **minimap** is informational (viewport indicator, like a scrollbar — not a target, no separate door; you pan/zoom via the canvas). The **hover-tag** is hover-state only, not idle. The **per-tile click** is the canvas-as-IA primary gesture; it counts as the canvas affordance, not five separate buttons. The DEV top bar, the CWS widget, and the pane tabs all live in zoomed-in mode — they do not exist at idle. Even by a strict count that includes the minimap, the total is 6, still under the ≤ 8 budget.

## 8. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5
    — 5 affordances enumerated above. Minimap is passive viewport info.
      Per-site chrome (top bar, CWS, pane) only exists in zoomed-in mode.

[x] iframe primacy + fullscreen toggle?        Score: 5/5
    — At idle, sites ARE the canvas (iframes are the tiles). Zoomed-in,
      iframe is the largest surface. Explicit Fullscreen button bottom-left
      (idle) + in DEV bar (zoomed) + F hotkey + Esc exit. Panel M shows
      100 % iframe with single exit pill.

[x] One door per feature?                       Score: 4/5
    — Settings: one (pane tab). Save: one (DEV bar pill + conditional
      primary button when unsaved). Library/Launcher: one (the FAB +
      spotlight ⌘K both land in the same Library overlay). −1 because
      Export PR / Download .zip appear in BOTH the Blueprint tab toolbar
      AND the DEV bar's More kebab — contextually justified (per-blueprint
      vs session-wide) but a strict reading flags it.

[x] One secondary surface?                      Score: 5/5
    — A single right-anchored pane with five tabs (Settings · Files ·
      Blueprint · Database · Logs). Library is an overlay, not a sidebar.
      CWS is a 230 px corner widget, not a secondary surface — it shows
      one piece of live status + acts as a door, nothing else.

[x] Direction strongly expressed?               Score: 5/5
    — SPT is the unmistakable backbone. Idle = canvas, 5 affordances at
      edges, no central chrome. Zoom into a tile = chrome materializes.
      The direction's verbatim phrases ("≤ 5 affordances at idle", "pan/
      zoom is the only navigation", "zoom in on a tile → that site fills
      screen with chrome materializing") are all literally realised across
      Panels A → B → C → M.

[x] Mobile = wider-mobile desktop?              Score: 4/5
    — Panels N and O run the same primitive set at 390×844: spatial canvas
      with pinch-zoom, spotlight at top, FAB at bottom, slim DEV bar
      materializes when zoomed-in, CWS as bottom capsule, secondary pane
      as bottom sheet with five tabs. −1 because the desktop's zoom slider
      becomes a small vertical stack (still present) and the minimap is
      dropped on mobile for space.

[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
    — Six primitives named in §2 (SPT, 3LD, DEV, CWS, MOB, TAB) and
      visibly composed. SPT and 3LD are the headline composition — depth
      tiers are the *visual rendering* of spatial distance from cursor
      focus. CWS persists in every zoomed-in panel as live status + door.

[x] No banned patterns (§1 DROP)?               Score: 5/5
    — Single 44 px DEV bar (NEVER two-row). 3LD used as visual decoration
      only (tiles cluster by depth; you click the tile content, not the
      blur). No terminal channel echoing visual UI — Logs is a one-way
      reader; the boot panel shows steps as labelled progress, not stdout
      mirrored from the chrome.
```

All rows ≥ 4. No revision needed.

## 9. Notes on composition (the v7 thesis)

The integration point between SPT and CWS is the **mini-canvas-map inside the corner widget**. When you have zoomed into a single playground, the CWS widget at bottom-left shows you the *same* canvas, miniaturized, with your current tile highlighted in accent blue. The widget is therefore *simultaneously* live status ("Coffee Shop · running · 142 MB · canvas pos x:−240 y:+88") *and* the canonical door back to the spatial overview ("Zoom out · Esc"). Two primitives, one object. The depth-tiered tiles in Panel A and B make 3LD the *rendering language* of SPT — distance from cursor = blur tier — without ever turning blur into a click target. The slim DEV bar is the third member of the composition: it appears only in zoomed-in mode, dissolves when you zoom out, and never competes with the canvas for visual real estate.
