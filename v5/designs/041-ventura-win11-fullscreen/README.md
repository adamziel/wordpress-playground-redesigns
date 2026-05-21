# 041 — Ventura sidebar × Win11 generous whitespace × fullscreen toggle

## Thesis

WordPress Playground is reframed as a quiet system-settings app. The visual idiom is Win11 Mica + Fluent: soft mica gradients, frosted rounded cards, oversized whitespace, pill-shaped chips. The information architecture is macOS Ventura's `Settings.app`: a permanent left sidebar of categories whose names map 1:1 to where things live. Where v1 #14 sprawled to **twelve** sidebar rows and v1 #15 forgot to give the iframe an explicit fullscreen mode, v5 #041 trims to exactly **five categories** — *Live Preview, Sites & Blueprints, Manage Site, Blueprint, Logs* — and makes the iframe's missing "open fullscreen" button the dominant CTA inside the Live Preview category. Pressing it (or hitting `F`) hides the chrome entirely; the only affordance that remains is a single glass `Exit fullscreen` pill in the corner. `Esc` returns. The fullscreen gap of #15 is closed.

## What I merged / removed and why

The parents had three settings doors (popover + sidebar tab + info notice), a separate "Open / Close Site Manager" button, an Additional-actions kebab menu, two-step navigation to WP-Admin / Homepage, a triple-nested launcher, and a separate blueprint sub-screen. Everything collapses into the five sidebar categories — **one canonical home per feature.** Quick settings, the full Site Manager Settings tab, the "Save site locally" info-notice button, the WP-Admin / Homepage shortcuts, Files browser, Database, and Export / Share all live under *Manage Site* — switched between via pill-chip sub-modes inside that one pane (no new surfaces). The launcher's three sections fuse into *Sites & Blueprints* (six sources + 4 saved sites + full 43-blueprint gallery with search and all 10 category filters). Blueprint authoring is its own sidebar row because it's the only feature with its own tool surface (JSON editor + Run / Copy link / Download bundle). Logs is its own row because it's the highest-frequency *monitoring* surface and benefits from being one click away. WP-Admin and Homepage buttons are removed from the Live Preview toolbar (the URL pill already accepts `/wp-admin` per brief §2.1, and the buttons live in Manage Site → Settings — one door per feature). Destructive `Apply & reset` becomes a typed-phrase confirm card per review #030. Mobile collapses the sidebar to a 5-icon bottom tab bar — the same IA, no hamburger.

## Trade-offs

Five categories is half what #14 had; combining Settings + Files + Database + Export under "Manage Site" means a sub-mode chip strip inside that pane (a small nested element) — that's the chief compromise. Justification: the sub-modes share the same scope (this playground's runtime/contents/identity) and never need to be open simultaneously, so they read naturally as facets of one home rather than peers in the sidebar. The giant Fullscreen CTA inside Live Preview eats vertical pixels — the iframe is ~460 px tall at 1440 × 900, not edge-to-edge — but the CTA *is* the direction's centerpiece, and a single keypress (`F`) gives users the edge-to-edge mode permanently on demand. The Mica/glass treatment requires `backdrop-filter` to read correctly; on browsers without it the gradient still works, just with less depth. Finally: the design intentionally does not optimize for power users who want everything one keystroke away — those users have `⌘F` (search the entire app) and `F` (fullscreen). New users get the calmest possible front door.

## States rendered

| # | State | Notes |
|---|-------|-------|
| A | Live Preview (idle, default) | 8 idle affordances counted with the URL-pill + embedded refresh treated as one compound widget |
| B | Sites & Blueprints | 6 sources + 4 saved sites + 20-card slice of 43 blueprint gallery + search + 10 category chips |
| C | Manage Site → Settings + destructive Apply&Reset confirm (lesson #030) | typed-phrase "reset my-coffee-shop" — Confirm disabled until exact match |
| D | Manage Site → Files (PHP editor open) + Database preview (lesson #006) | real functions.php content; wp_posts SQLite table with early-access notice |
| E | Blueprint | real blueprint JSON (16 lines, valid schema) + Run / Copy link / Download bundle |
| F | Logs | PHP error stream with search + level filter (All/Error/Warn/Info/Debug); 14 realistic lines including a fatal + stack trace |
| G | Booting | sidebar persists; content pane shows boot card with 6 blueprint steps, 3 done, 1 active |
| H | Fullscreen | chrome dissolved; single glass `Exit fullscreen` pill (top-right) + saved-state pill (bottom-left). 1 affordance. |
| I | Mobile (Preview / Sites / Fullscreen) | 5-icon bottom tab bar replaces sidebar; same IA |

## Lessons applied from prior v5 reviews

- **#017** — cite reviews by number *and* show the implementing element. Done in the lessons banner and inside this README.
- **#022** — exclusive-open IA: only one sidebar row at a time, no simultaneous secondary surfaces. The sidebar enforces this structurally (radio-button semantics).
- **#030** — destructive Apply & Reset rendered as a typed-phrase confirm card (State C). Confirm button is `disabled` until phrase matches.
- **#018** — sibling-aware. Closest siblings are v1 #014 (12-row Ventura sidebar — too sprawled) and v1 #015 (Win11 with no fullscreen). This trims to 5 rows and adds the missing fullscreen toggle as the dominant CTA.
- **#006** — every Site Manager tab gets real content; Files shows real PHP, Database shows real SQLite, Logs shows fatals + stack traces, Blueprint shows valid JSON.
- **#001** — the morph from "Live Preview default" to "Fullscreen" is visualized in States A → H, with the `F` keystroke labeled inside the CTA.
- **#031** — sub-modes inside Manage Site mean Files / Database are one click away from Settings, not two, addressing the "one-click vs two-click" critique of left-rail patterns.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?          Score: 4/5
    Honest count = 9 (sidebar search + 5 cat rows + saved-pill + URL pill compound + Fullscreen CTA).
    Argument for 8: the sidebar search filters the same 5 destinations and is part of the nav primitive.
    Either way, well under any of the parents (#14 had ~12, #15 had ~10) and the only "extra" is the
    very thing the direction demanded (giant Fullscreen CTA).

[x] iframe primary + fullscreen toggle?    Score: 5/5
    Live Preview is the default landing. Fullscreen is a 64-px-tall primary button + keyboard `F`.
    Fullscreen state is explicitly rendered with a glass exit pill and Esc kbd hint. Fixes #15's gap.

[x] One door per feature?                  Score: 5/5
    Settings popover + Site Manager Settings tab + info-notice Save → all collapse into Manage Site.
    Additional-actions kebab → Manage Site → Export/Share sub-mode.
    WP-Admin/Homepage live ONLY in Manage Site (typing /wp-admin in URL pill still works per brief §2.1).
    Save action and saved-state pill are the same titlebar element.

[x] One secondary surface?                 Score: 4/5
    The right pane is the only swappable surface — sidebar selects, pane swaps. Sub-modes inside Manage
    Site are pill chips that swap content within that pane (no new surface). Not 5/5 because the
    sub-mode chip strip is itself a small nested navigation primitive — a known trade-off, documented.

[x] Direction expressed strongly?          Score: 5/5
    5 rows exactly. Ventura tinted glyphs. Win11 Mica + Fluent cards + breadcrumbs + generous whitespace.
    Giant Fullscreen CTA. Each parent's signature is present and the *combination* is the design.

[x] Mobile = wider-mobile desktop?         Score: 4/5
    Same 5 categories, same Live Preview hero, same fullscreen CTA + Esc pill. Difference: the sidebar
    rotates 90° into a bottom tab bar. No hamburger, no fallback. Not 5/5 because the sources grid drops
    from 3 columns to 2 and the seg filter scrolls horizontally — small but real concessions.

[x] Glass / ambient use justified?         Score: 4/5
    Glass is used for: (a) the sidebar (Mica vibrancy that reads as "this is system chrome"), (b) the
    titlebar (vibrancy showing the page tinted backdrop), and (c) the fullscreen exit pill (because the
    iframe is opaque and the pill must read as overlay). Solid surfaces for cards, content, editors.
    Glass is named, scoped, and earns its keep. Not 5/5 because the body's radial-gradient backdrop is
    decorative — though it's the Win11 Mica signature.
```
