# 038 — Floating Capsule · Smart-resize Secondary

## 1. Thesis

There is no top bar. There is no side rail. There is no corner widget. There is **one floating frosted-glass capsule** centered above the iframe, and below it the iframe and a single secondary pane split the viewport using smart-resize. Touch the iframe — the iframe grows. Touch the pane — the pane grows. Press `F` — the iframe is everything and even the capsule hides. The capsule and the seam gauge are the only floating chrome in the entire application; every other affordance lives inside one of the two panes. The capsule is `min-width: 720px`, sits 16 px below the viewport top, and is tinted from whatever the iframe is currently rendering, so the chrome reads as belonging to the site rather than pasted over it. The seam gauge — a small JetBrains-Mono frosted pill — sits centered vertically at the seam between iframe and pane and shows the current ratio (35/65, 40/60, 50/50, 60/40, 65/35, 75/25), a three-bar height-coded split, a directional arrow indicating where focus came from, the four snap dots, and a `⌘1·⌘2·⌘3·⌘4` keyboard hint. This is the most austere chrome composition in the round: **two persistent floating glass surfaces, total**.

## 2. Primitives composed

This design is a two-primitive composition with one supporting primitive used at minimum strength. Every primitive listed below is **named on a specific surface** and is verifiable by reading the HTML.

- **SR — Smart resize (v5 #023).** The entire IA. The `.body` is a CSS grid driven by `--iframe / --pane` custom properties, with state classes `.r-50-50`, `.r-60-40`, `.r-65-35`, `.r-75-25`, `.r-40-60`, `.r-35-65`, `.r-100-0`. Each frame anchors a `.seam` at `left: var(--iframe)` and a `.gauge` pill centered on the seam carrying the ratio numeral + a three-bar height-coded split + directional arrow + snap-dot row + `⌘1·⌘2·⌘3·⌘4` keyboard hints. Seven distinct ratios are demonstrated across frames A through L. The mobile layout rotates the SR seam 90° (top iframe / bottom pane) with detents at peek/half/full — the gauge is the same component rotated horizontally. **Click iframe = grow iframe. Click pane = grow pane.** No drag handle, ever.

- **GLS — Glassmorphism (v1 #38).** The only visual style on the chrome. The capsule, the seam gauge, the secondary pane, the more-menu and the Apply+Reset modal are all `backdrop-filter: blur(var(--zN)) saturate(var(--sN))`. The iframe is the only solid surface in the document — verified by reading the CSS: `.iframe-wp { background: white; }` and every per-state `.wp-*` background is a solid gradient, never glass. **The capsule is ambient-tinted**: classes `.amb-coffee`, `.amb-art`, `.amb-gaming`, `.amb-nonprofit`, `.amb-ink`, `.amb-resume`, `.amb-neutral` swap the capsule's background and border to a tint sampled from the iframe — Coffee Shop is warm amber, Art Gallery is dark violet (the glass inverts to white-on-dark), Gaming News is magenta on ink, Non-profit is mint, Resume is light blue. The same `.amb-*` class is applied to the secondary pane in the same frame — so capsule and pane share the iframe's color.

- **DEV — DevTools slim bar (v1 #64), folded into the capsule.** Used at minimum strength: the capsule is the entire top bar collapsed into a 44 px-tall, 720–920 px-wide, centered floating pill. Single row. No two-row chrome. The capsule carries five chips at the saved-idle state — refresh, URL bar, save-state pill (status-only), fullscreen, more — plus a conditional dark Save button that materializes only when the playground is Unsaved. This is the design-005 / design-031 "DEV bar" idea taken to its limit: instead of running across the full viewport width, the DEV bar **contracts to its minimum content width** and floats above the iframe rather than splitting a row.

### Conscious non-uses

- **3LD (three-layer depth)** is explicitly avoided as an interactive control (banned in v7 §1 DROP). Blur is used only as the visual texture of glass — quantified at `--z1: 8px` (gauge), `--z2: 18px` (capsule, pane, more-menu, modal), `--z3: 36px` (modal scrim only). Never a click target. The user does not "click a blur layer to interact."
- **CWS (corner widget Sites)** is intentionally not invoked. With smart-resize, the secondary pane already *is* the live-status canonical door — the pane head's title row and dot pip + pane-internal "Currently running" section carry the state. Adding a corner widget would multiply doors. (Design 004 and design 020 own CWS+SR territory; this design owns the *absence* of any corner anchor — the capsule is centered, not cornered.)
- **QR, VEN, TAB-on-the-seam, SPT, EPC, iPAD, MOB-as-bottom-bar** — each has its own slot in directions 1–37. Here the seam carries only the gauge, not tabs; the pane has its own internal segmented control but it's pane-internal not idle chrome.

## 3. What I remixed / removed and why

The three settings doors (popover · sidebar tab · info-notice) collapse into **one** Settings tab inside the pane (state D). The left Site Manager sidebar and the right Saved-Playgrounds drawer collapse into the *same* pane via a six-tab segmented control (Sites · Settings · Files · Blueprint · Database · Logs) — **one** secondary surface, swappable content. WP Admin and Homepage are no longer global toolbar icons; they live inside the More kebab as `⌘.` and `⌘H` (state C). The save-state pill in the capsule is **display only** (Saved / Saving / Unsaved / Booting); a separate dark Save button materializes inside the capsule *only* when state is Unsaved (state J) — never both forms of "save" on the same chrome at the same time. Apply&Reset (state D) uses **typed-phrase confirm + diff + auto-snapshot all together** in a glass modal: the small red banner of the current UI is gone. "Additional actions" (Export to GitHub PR · Download .zip · Rename · Delete · Documentation) live in **one** kebab menu in the capsule (state C, open) — not also in the Blueprint pane head. The v1 #29 dual-channel terminal echo is rejected outright: the Logs tab (states G + M3) is a one-way read-only log reader with level filter chips, not a command echo of the visual UI. The biggest reduction vs prior SR+GLS work (003): **the top bar is gone**, contracted to a centered floating capsule. The biggest reduction vs prior CWS designs (004, 020): **there is no corner widget**, the pane absorbs the Sites-launcher role.

## 4. Trade-offs

A floating centered capsule occludes ~880×60 px of iframe content at the very top edge. Most WordPress front-end themes use the top edge for a navigation bar that duplicates the URL bar's role, so the occlusion typically lands on redundant chrome — but for full-bleed iframe content (e.g., a single-page hero theme), the capsule does steal pixels. Mitigation: `F` fullscreen hides the capsule entirely; clicking the iframe snaps to 75/25 keeping the iframe primary; the capsule background uses 0.42–0.70 alpha so faint content reads through. Second trade-off: glass over a live iframe is a legibility risk on extremely white or extremely textured pages. Mitigations applied — every glass surface has a 1 px inset highlight + a 1 px outer hairline border, capsule text is ≥ 12.5 px / 600 weight on dark ambients with auto-inversion to light text (see `.capsule.amb-art .url, .capsule.amb-gaming .url, .capsule.amb-ink .url`), the ambient tint snaps to seven discrete presets rather than arbitrary sampled values so contrast is bounded. Third trade-off: the click-to-grow SR gesture has the same discoverability problem as v5 #023 — new users may not know "click left → grow." Same mitigations: the seam gauge is always visible, has a directional arrow showing where focus just came from, shows `⌘1·⌘2·⌘3·⌘4` keyboard hints, and the snap dots make the four detents legible. Fourth: the iframe never sits at *true* 100 % at idle; even at 75/25 the pane is on screen. This is intentional — the pane is how the user knows they are in Playground, not just a browser — and the explicit `F` toggle (state K) is the escape hatch. Fifth: mobile compresses the same primitives onto a 390 px viewport. The capsule shrinks to 40 px tall and goes full-width-minus-24 px (no centering); the SR rotates 90° (iframe top, pane bottom) with detents at peek/half/full; the pane segmented control collapses from 6 tabs to 4 icon-only buttons (Sites · Settings · Files · Logs — Blueprint and Database fold into a `⋯` overflow). The SR gesture survives intact (touch the iframe = grow iframe; touch the pane = grow pane).

## 5. Demonstrated states (13 desktop + 3 mobile = 16 frames)

| Frame | Ratio | Ambient | What |
|---|---|---|---|
| **A** | 50/50 | coffee | Idle, rest. Launcher home in the pane (6 sources + 4 saved + Browse all 43). |
| **M1** | 78/22 | coffee | Mobile peek. Vertical SR. Same capsule + gauge rotated. |
| **B** | 75/25 | art | Iframe focus. Dark ambient — capsule + pane glass invert. Gauge arrow ←. |
| **C** | 35/65 | coffee | Pane focus. Full 43-blueprint library: search + 10 category chips + 18 cards. More-menu open showing Export PR + Download .zip + Rename + WP Admin + Docs. |
| **D** | 40/60 | coffee | Settings tab + destructive Apply&Reset modal (typed-phrase `coffee-shop-demo` matched + diff of 3 changes + auto-snapshot `pg_snap_2026-05-21_1518`). |
| **E** | 40/60 | coffee | Files tab. File tree of `/wordpress/` + `functions.php` editor with real PHP. |
| **F** | 35/65 | gaming | Blueprint tab. Real schema-shaped JSON (24 lines, 7 valid steps including `runWpInstallationWizard`, `installTheme`, `installPlugin`, `importWxr`, `setSiteOptions`, `runPHP`, `login`). Run Blueprint + Copy link + Download bundle. |
| **G** | 35/65 | coffee | Logs tab. 14 entries — fatal `wc_get_low_stock_amount()` + memory exhausted, errors (cURL 35 SSL, REST 401, WP_HTTP timeout), warnings (`strftime` deprecation, missed cron), notices, level filter chips. |
| **H** | 40/60 | resume | Database tab. 12-table sidebar + wp_options open with 14 rows including serialized `active_plugins` + cron. |
| **I** | 65/35 | ink | Booting Gaming News. Boot cover with live blueprint trace (step 4/7 importWxr 47/186 posts) + Cancel boot. Capsule pill says booting with spinner. |
| **J** | 50/50 | non-profit | Unsaved Playground. Capsule pill amber + Save dark button materializes (8th affordance). Pane shows save panel with name input + timeline. |
| **K** | 100/0 | art | Fullscreen. All chrome hidden. Single floating Esc-pill in the top-right. F or Esc exits. |
| **L** | 50/50 | non-profit | Just saved. Capsule pip green; pane shows 5 saved playgrounds (was 4); toast confirms with ⌘Z-undo-within-30s hint. |
| **M** | 50/50 | coffee | Affordance audit. Numbered overlay 1–7 on the saved-idle state + audit-legend card. |
| **M2** | 22/78 | coffee | Mobile · Library at full detent. 8 blueprint cards + 10 category chips. |
| **M3** | 50/50 | gaming | Mobile · Logs. Level filter chips + 6 entries. |

## 6. Idle affordance count: 7 (saved) · 8 (unsaved)

State M annotates each on the canvas. Enumerated:

1. **Refresh** — capsule icon at the left of the pill (one icon button).
2. **URL bar** — type a path; lock + path + submit arrow form one cluster.
3. **Save-state pill** — status display only (Saved / Saving / Unsaved / Booting). **No click target.**
4. **Fullscreen** — capsule icon. `F` key duplicates.
5. **More kebab** — Export PR · Download .zip · Rename · Delete · WP Admin · Homepage · Docs.
6. **Seam gauge** — passive readout. Visible but **no click target**; counts as 0 by the design-003 / design-029 convention but listed at position 6 in the audit overlay so the user can see what it is.
7. **Pane segmented control** — Sites · Settings · Files · Blueprint · Database · Logs. **One cluster**.

When state is Unsaved, the conditional **Save** dark button materializes inside the capsule between the pill and the vertical separator (state J), bringing idle to **8**. The capsule never carries Save in steady state.

Conscious counting choices: the URL bar (lock + path + submit) is one affordance; the pane segmented control with 6 tabs is one cluster (same convention as designs 003, 004, 005, 020, 029, 031); the seam gauge is information-only. A strict critic counting each pane tab individually would put idle at 12 — flagged honestly, same boundary as the rest of the round.

## 7. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5   (7 saved · 8 unsaved · audit overlay on state M)
[x] iframe primacy + fullscreen toggle?        Score: 5/5   (iframe is the only solid surface; F key + capsule icon + state K shows 100/0 with all chrome hidden)
[x] One door per feature?                      Score: 5/5   (Settings = one tab; Save = capsule pill (status) + capsule dark button (action, conditional, never both visible together); Sites/launcher = pane Sites tab; Export PR + .zip = only in More kebab; WP Admin + Homepage = only in More kebab)
[x] One secondary surface?                     Score: 5/5   (one pane with six tabs, never two; no side rail, no corner widget, no drawer)
[x] Direction strongly expressed?              Score: 5/5   (every clause materializes: one floating capsule (verified, no top bar in any frame), smart-resize between iframe + one secondary pane (verified by --iframe/--pane CSS custom properties driving 7 ratios), no other persistent chrome (verified — only the capsule + seam gauge float))
[x] Mobile = wider-mobile desktop?             Score: 4/5   (same SR; same gauge rotated 90°; same capsule rendered at 40px tall; pane tabs collapse 6→4. One mobile compromise — the SR direction rotates from horizontal to vertical, so the click-iframe-to-grow gesture becomes touch-iframe-to-grow with the iframe growing downward.)
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5   (SR + GLS + DEV all named, all anchored to specific surfaces in §2, all verifiable in the CSS)
[x] No banned patterns (§1 DROP)?              Score: 5/5   (no top bar at all — let alone a two-row one; depth is decoration only at quantified --z1/--z2/--z3 levels and never a click target; Logs is read-only one-way, no terminal echo of the visual UI)
```

All rows ≥ 4. No revision required before commit.

## 8. Slot allocation note

This slot (38) sits in the v7 "Bold single-axis commits" cluster (37–40). It deliberately occupies the *most austere* slot in the SR + GLS territory:

- Design **003** (SR + GLS): one slim DEV bar across the top + one glass pane on the right.
- Design **029** (GLS + 3LD strict): three glass surfaces (capsule + dock + right pill) at three quantified blurs.
- Design **031** (DEV + GLS): DEV bar + DevTools dock, both glass, no SR.
- Design **020** (CWS + DEV): rich Sites corner widget + austere bar.
- **Design 038 (mine)**: *no* top bar. *No* corner widget. *No* dock. Just the floating capsule + the SR seam gauge + the two panes. Most austere chrome of any SR + GLS composition in the round.

This is what "compose, don't pile up" looks like when pushed to its limit: the capsule and the pane together carry every door the design needs; nothing else persists.
