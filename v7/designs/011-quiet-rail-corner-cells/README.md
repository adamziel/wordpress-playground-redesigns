# 011 — Quiet rail of corner cells (QR + CWS)

## 1. Thesis

The 56-pixel monochrome rail from v5 #018 ("Quiet-rail-to-loud") and the corner-widget Sites pattern from v5 #036 are the same idea seen from two angles. Both want one quiet permanent surface that's simultaneously a status display and the only door into its concern. v7 #011 collapses them: the rail *is* a vertical stack of four corner-widget cells. Each cell shows live data — saved-site count, PHP version, blueprint count, warning count — without spending an extra affordance, because the cell-as-icon and the cell-as-status are the same square. Click a cell and a single 360px loud pane opens between rail and iframe; the cell goes from monochrome to saturated, its pip stays as live status. The rail grows from 56 → 72 px to carry the micro-status legibly; that is the cost of the composition, and it's disclosed honestly. Eight idle affordances total, enumerated under panel A.

## 2. Primitives composed (named per v7 brief §1 KEEP)

- **QR (quiet-rail-to-loud, v5 #018)** — The whole IA is one rail summoning one pane. The rail is a 72px vertical column on the left. Until you touch it, every cell is mono-tone with a small coloured pip. Click any cell and a 360px pane slides open between rail and iframe, the iframe shrinks to the right. Pane is fixed-width, always-same-position; only its content swaps. The same rail-and-pane semantics ship at all widths; on mobile the rail rotates to a bottom tab bar and the pane becomes a 62%-height bottom sheet at one detent (panel I).
- **CWS (corner-widget Sites interaction, v5 #036)** — Each of the 4 rail cells *is* a corner widget. It shows a one-word label, a tiny stat (`3 saved`, `PHP 8.3`, `43`, `2 warn`), and a coloured pip in the upper-right that flips green/blue/purple/amber/red as the underlying state changes. The cell is the live status display AND the canonical door — exactly the CWS property. Booting flips the Sites pip from green → blue and the stat from `3 saved` → `Booting…` (panel C); a fatal error flips the Logs pip from amber → red. The widget IS the indicator.
- **DEV (DevTools slim top bar, v5 #064)** — A 36px frosted URL pill at the top centre carries refresh, address, save-state name pill, and the fullscreen button. No persistent horizontal bar; the pill *is* the chrome above the iframe. Status-pill replaces a red banner (per the §1 KEEP DEV note).
- **3LD (three-layer depth, v5 #035)** — *Visual only, never interactive.* The modal scrim (panel F) and the unfocused iframe (under sheets in panel I) get quantified blur, but no blur layer is ever a control. This composition obeys the v7 §1 DROP rule on depth-as-control.

The KEEP primitives I deliberately did *not* compose into this design: SR (would force a resize gauge that contradicts the fixed-pane QR thesis), GLS (the rail is solid by design — glass without ambient purpose was forbidden in v5 #018's lesson), EPC (no cinematic hero — the iframe IS the hero, and a launcher hero would compete for first-touch), iPAD pull-tab (the pane *is* the secondary surface — adding a pull-tab would duplicate doors), VEN (Ventura icons-with-labels are present but the layout isn't a 5-row Ventura sidebar; pane head + sub-segmented control covers it), TAB (the 5-way Manage segmented control is tab-flavored but the rail is the primary nav, not tabs), W11 mica (the dark surface treatment is closer to v5 #018 than to Win11), SPT (no spatial canvas — restraint), MOB (the rail-to-bottom-bar gesture is the only mobile concession; the design isn't *built* mobile-first, it's built rail-first and tested mobile).

## 3. What I remixed / removed and why

The three settings entry points (popover · sidebar tab · info notice) collapse into the **Manage** cell's Settings tab. The "Saved Playgrounds" launcher trifurcates correctly into one Sites pane with sub-segments **Your sites · Start new · Library** — panel H shows Your sites with the Unsaved → Save state transition front-and-centre, panel C shows Start new with all 6 sources tiled, panel B shows Library with 18 blueprints visible and the 10-chip category filter. The "Additional actions" kebab dissolves into a single dropdown panel inside Sites → Your sites (panel H bottom) where Export to GitHub PR and Download .zip sit side-by-side, no kebab navigation tax. Apply+Reset escalates to a full typed-phrase + diff + auto-snapshot modal (panel F) — the three guards together, not "a small red banner." The pane's left edge carries a saturated colored stripe (`pane-edge`) — that's where the "loud" of "quiet-rail-to-loud" lives at minimum cost. The iframe URL pill is the only address bar in the design, the save-state name pill is the only Save door, and Save+name share that pill — applying the v5 review #003 lesson ("pick one embodiment of Save").

## 4. Trade-offs

A 56px rail can't legibly carry per-cell stat text; that's why the rail is 72px here. -1 to "wider-mobile desktop" purism if a critic counts the 16px tax. The rail can host only four cells comfortably — Sites / Manage / Library / Logs — which means the brief's listed *features* must compose inside those four panes. Library is its own cell rather than a Sites sub-segment to honor the CWS direction's call to make each widget a live status (the Library cell has the purple pip showing "library fresh"); a stricter QR-only reading would have made Library a third sub-tab of Sites and only had three rail cells. I accept the trade because four cells map cleanly to the four core concerns and CWS wants live status per cell, not per sub-tab. The cell-stat text is small (9-10px) — readable on a 1440 display, possibly tight on a 2x retina at 1.0 scale; I'd ship at 10.5px and let the rail grow to 76px in production. Glass is used only for the URL pill, modal scrim and mobile chrome — never for the rail or pane — because solid rail-and-pane is what the v5 #018 "quiet vs loud" contrast demands. Mobile collapses to a single sheet detent at 62%; not three. A purist scoring strictly mobile may dock for the missing detents, but the QR thesis is single-pane-single-position; mirroring it on mobile means the sheet isn't draggable beyond open/closed.

## 5. Lessons applied from earlier rounds

- **v5 #018 review** — "don't ship three drawers stacked in one pane": Sites uses a proper 3-way sub-segmented control (Your / New / Library) not a stacked drawer.
- **v5 #036 review** — "pick one embodiment of Save, don't ship pill + slider + key": Save is *only* the save-state name pill (also reachable via ⌘S as the same door).
- **v5 #036 review** — "show overflow menu open": panel H shows Additional actions opened with both Export to GitHub PR and Download .zip rendered.
- **v7 §1 DROP** — Three banned patterns observed: (a) no two-row top bar — the URL pill is a single 36px capsule; (b) no depth-as-control — blur appears only as scrim and out-of-focus iframe decoration; (c) no dual-channel terminal echo — the boot panel C shows log lines because boot is genuinely a log-shaped operation, but there is no parallel visual UI for those logs, the Logs cell is a separate destination.

## 6. Self-critique rubric scores

```
[x] Affordance count at idle ≤ 8?              Score: 5/5
    Exactly 8, enumerated in panel A's count strip:
    4 rail cells + refresh + URL/address + save-state name pill + fullscreen.
    Help and avatar are decorative (rail-foot), not affordances.

[x] iframe primacy + fullscreen toggle?        Score: 5/5
    Idle iframe is 1368 of 1440 px wide (rail 72px only); pane open is
    optional and recedes. Explicit Fullscreen button + "F" key + Esc-exit
    pill rendered in panel G.

[x] One door per feature?                      Score: 5/5
    Settings → Manage cell → Settings tab only. Save → name pill only.
    Export → kebab inside Sites > Your sites only. Each rail cell is the
    sole door to its concern, by composition.

[x] One secondary surface?                     Score: 5/5
    Literally one 360px pane that always opens between rail and iframe.
    Content swaps via sub-segmented controls inside it. No second
    sidebar, no second drawer.

[x] Direction strongly expressed?              Score: 5/5
    The cell IS both icon and status, the rail IS a vertical stack of
    widget cells. The composition reads at first glance: each cell has
    label + stat + pip + ico. QR's "quiet vs loud" survives because
    cells stay mono until clicked; the active cell glows and pane's
    left edge is saturated.

[x] Mobile = wider-mobile desktop?             Score: 4/5
    Same 4 cells, same one-pane-per-cell IA, rotated 90° to a bottom
    tab bar with a bottom sheet. -1 for one-detent-only sheet (no
    multi-detent gesture), disclosed in trade-offs.

[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
    QR + CWS are the named direction-011 primitives; both deeply
    integrated, not decorative. DEV and 3LD touch the design as
    minor accents disclosed in §2.

[x] No banned patterns (§1 DROP)?              Score: 5/5
    No two-row top bar (single 36px URL pill only).
    No depth-as-interactive-control (blur is decoration only;
    rail/pane are solid).
    No dual-channel duplication (boot logs are not echoed by a
    visual UI; the Logs cell is the only logs destination).
```

No row ≤ 2; ready to commit.
