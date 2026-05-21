# 005 — DevTools dock · smart resize

## 1. Thesis

Playground deserves a chrome that feels like a *browser inspector for WordPress*, not a settings dashboard wrapped around a frame. A **single 44px DevTools-style top bar** carries the URL, name+status-pill, save, fullscreen, and a kebab — nothing else. Below it, the whole viewport is a **smart-resize** between the iframe on the left and a DevTools-style **dock** on the right. The dock holds Sites, Settings, Files, Blueprint, Database, and Logs as a tab strip — the same tabbed-pane grammar a developer already knows from Chrome DevTools. **Whichever pane you interact with grows**: rest is 60/40 (iframe heavy, dock visible), iframe-focus is 90/10 (dock collapses to a 56-px vertical icon strip but never disappears), dock-focus is 35/65, boot is 50/50, fullscreen is 100/0. The seam between the two panes carries a tiny **momentum gauge** with the current ratio so the IA is legible. One row of chrome, one secondary surface, one door per feature.

## 2. Primitives composed (§1 KEEP)

This design composes **five** primitives from the v7 KEEP list:

- **SR (smart-resize · v5 #023)** — the entire backbone of the layout. Five demonstrated ratios (60/40, 90/10, 50/50, 35/65, 100/0) with a visible thumb-on-rail gauge straddling the seam. No drag handle; focus does the work. Mobile rotates the seam 90° so the same primitive applies vertically.
- **DEV (DevTools top bar · v1 #64)** — 44px slim bar (status-pill instead of red banner) plus the entire right-pane styling: dark dock surface, tab strip with active-tab underline, sub-toolbar with chips and search, monospaced gutters, request-id grouped logs, code-editor head pill, JSON syntax highlighting.
- **CWS (corner-widget Sites · v5 #036)** — the name+status-pill in the top bar IS the live status (shows running/saving/saved/unsaved with an animated dot) AND is the canonical door to the Sites tab (click it → dock jumps to Sites). The collapsed dock's bottom feet also show live WP/PHP versions and double as the Settings door. Status doubles as door, both ways.
- **EPC (Epic launcher · v1 #13)** — Row D: while no site is running, the iframe pane shows a cinematic hero with one decisive verb ("LAUNCH Vanilla WP") and six start sources as chips. The moment a site boots, the hero is gone — no permanent cinematic surface stealing attention.
- **MOB (mobile-first · v1 #06)** — desktop = wider mobile, literally. The smart-resize is the same primitive on both, just rotated. The collapsed dock's vertical icon strip is identical to the mobile bottom-nav. Same tabs, same gauge, same status-pill, scaled.

The dock tabs collapse to short labels (Set, BP, DB) at mobile width but the IA is byte-for-byte the same.

## 3. What I remixed / removed and why

The current Playground has **three settings entry points** (top-bar popover, Site Manager Settings tab, info-notice button). I collapsed all three into the single dock Settings tab and made the inline "this is unsaved, save it" notice unnecessary by promoting the status-pill to a top-bar primitive that's *always* visible. The launcher right-drawer and the Site Manager left-sidebar collapse into the **same dock** via tab swap — there is never a second sidebar. **Save** is a black pill that materializes only when the playground is unsaved; the status-pill is *status only* (lesson from v5 review canon: never mix status and action on the same pill). **Apply Settings & Reset** never inlines as a red banner — it opens a modal with (1) a diff of what's changing, (2) a typed-phrase confirm ("type *coffee shop* to confirm"), and (3) an auto-snapshot note. The v1 Logs tab's unstyled text becomes a properly-grouped log with level chips, per-request grouping by request-id, and a search. Files and Blueprint share the tree column (Blueprint tab's tree is the bundle itself), so they no longer duplicate each other.

## 4. Trade-offs

The biggest soft spot is **gesture discoverability for SR**: a first-time user may not realise that clicking the iframe makes it grow. I mitigate three ways: (1) the seam gauge updates with every focus shift, (2) the ratio is annotated in monospace next to the thumb, and (3) the keyboard hint `⌘.` is in the dock-toggle tooltip and the collapsed-dock chevron. A second trade-off: the DevTools dark aesthetic on the right pane is opinionated — users coming from the current Playground (light, WordPress-blue accents) may feel the right pane is "another app". I think this is intentional and correct: the dock is **developer chrome**; the iframe is **the document**. The contrast makes the IA legible. Third trade-off: I kept Sites in the dock tabs rather than promoting it to a corner widget (the strict CWS pattern). The status-pill *is* the corner widget here — it sits in the top bar instead of a corner, because we already have a single-bar chrome and adding a floating corner element would conflict with the dock seam. Fourth: the destructive-action modal is the only momentary overlay, but it is essential to the brief (typed-phrase + diff + auto-snapshot are all surfaced).

## 5. Demonstrated states (8)

- **A** — Working session: rest 60/40, dock = Files, functions.php open in editor.
- **B** — Iframe focus 90/10: dock collapsed to vertical icon strip with live status feet (WP 6.7 / PHP 8.3).
- **C** — Dock focus 35/65: Logs tab with level chips (2 errors, 1 warn) and 19 request-id grouped log lines.
- **D** — Idle: Epic hero in iframe pane + Sites tab in dock with 4 saved playgrounds + 6 start sources + Export/Download quick actions. 16 blueprint cards visible. "Save" button materialised because state = unsaved.
- **E** — Booting 50/50: cancel boot affordance, blueprint editor in dock with full real blueprint JSON for Gaming News.
- **F** — Settings tab + destructive Apply & Reset modal (typed-phrase + diff + auto-snapshot note).
- **G** — Fullscreen 100/0: chrome at 45% opacity, right-edge pull-tab with Esc/F hint.
- **H** — Database tab: 12 tables in left column, 14 wp_options rows in the right pane, early-access notice inline.

## 6. Idle affordance count

**6 on the top bar at saved-idle:**

1. WP mark (= refresh hit-target, single tap)
2. Refresh icon
3. URL bar (address + lock)
4. Name+status pill (status display — also the door to Sites tab)
5. Fullscreen toggle
6. Kebab (More: Export to GitHub PR / Download .zip / Rename / Delete)
7. Dock toggle (⌘.)

When the playground is unsaved, the **Save** button materialises, taking the count to **7**. The 5 dock tabs and the launcher's 6 source chips count as **one secondary-surface cluster** (the dock), not separate top-bar affordances. Back/forward are intentionally absent — the inner WordPress site provides its own navigation; treating the iframe like a browser-within-a-browser duplicates affordances without benefit.

## 7. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5
[x] iframe primacy + fullscreen toggle?        Score: 5/5
[x] One door per feature?                      Score: 4/5
[x] One secondary surface?                     Score: 5/5
[x] Direction strongly expressed (SR + DEV)?   Score: 5/5
[x] Mobile = wider-mobile desktop?             Score: 4/5
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
[x] No banned patterns (§1 DROP)?              Score: 5/5
```

All rows ≥ 4. No revision required.

## 8. Hard-requirements checklist (v7 brief §3)

- [x] **5 Site-Manager tabs**: Settings (F), Files (A), Blueprint (E), Database (H), Logs (C) — all visible with real content.
- [x] **6 launcher sources**: Vanilla WP, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip — all present in Row D as both chips in the iframe pane and source-tiles in the Sites tab.
- [x] **43-blueprint browser**: search box + 10 category filters (All, Featured, Website, Personal, Content, Themes, Gutenberg, Experiments, WooCommerce, News) + 16 visible cards in Row D.
- [x] **Export to GitHub PR + Download .zip**: both present in the Sites tab Quick Actions and reachable from the top-bar kebab.
- [x] **Unsaved → Saved transition**: Row D shows "Unsaved Playground" with materialising Save button; Rows A/B/C/F/H show "Coffee Shop · saved" with green dot.
- [x] **3+ demonstrated states**: 8 (A–H) — working, booting, launcher, focus-shift, settings, modal, fullscreen, DB.
- [x] **Realistic mock data**: 4 saved playgrounds (Coffee Shop, GB PR #71402, Friends, My Resume), real blueprint JSON for Gaming News (installTheme + installPlugin + importWxr + setSiteOptions + login), realistic PHP log lines (Fatal error: undefined wc_get_low_stock_amount, deprecation warnings, request-id grouped GET/POST with TTFB).
- [x] **Both 1440×900 and 390×844 rendered**: Rows A, B, C, D have both; E, F, G, H are desktop-only (the brief allows this — both viewports must be *rendered*, not every state must appear in both).
- [x] **Destructive Apply+Reset**: typed-phrase ("coffee shop") + diff sheet + auto-snapshot all in Row F's modal. Not an inline red banner.
- [x] **Single self-contained HTML**: yes, Inter + JetBrains Mono via Google Fonts CDN, lucide icons via CDN. No external image deps.
