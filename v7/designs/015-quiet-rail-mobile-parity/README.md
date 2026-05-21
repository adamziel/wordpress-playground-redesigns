# v7 #015 — Quiet Rail · Mobile Parity

## 1. Thesis

The same quiet-rail-to-loud IA from v5 #018, designed so the mobile layout is the canonical version and the desktop is literally a "wider phone." Five docks live on the bottom on phones (tab bar) and rotate 90° to the left edge on desktops — same icons, same shortcuts, same active highlight, same single secondary surface. That secondary surface is a *sheet* with three detents (peek 35 % · mid 65 % · full 85 %), vertical on mobile and horizontal on desktop. A visible detent gauge sits on the seam on desktop and a dot-row sits under the grab handle on mobile, so the IA is legible without dragging. The design is light, warm, paper-tinted — chosen specifically to differentiate from the dark glass-and-rail siblings in the same family (#009 / #010 / #011 / #012 / #013), so a reviewer comparing the QR cohort can see the parity thesis at a glance rather than mistake it for another visual variation.

## 2. Primitives composed (KEEP list, by notation)

- **QR (quiet-rail-to-loud IA)** — the only persistent IA primitive. A 64-px monochrome rail on the left edge with **5 docks**: Sites, Site Manager, Blueprint, Database, Logs. At idle the rail is silent (icon-only, no labels, badge on Logs only when errors > 0). Hover reveals a tooltip with the dock name + its ⌘ shortcut. Click any dock → a single secondary pane (the "loud" surface) slides in between rail and iframe. Same v5 #018 IA verbatim — content swapped by dock, never two panes.
- **MOB (mobile-first wider-phone)** — the central composition partner. The exact same IA renders on mobile: the rail rotates 90° to a **bottom tab bar** with the same 5 docks, same icons, same active-highlight (top-edge bar vs left-edge bar — same role). The secondary pane becomes a **bottom sheet with three detents** matching the desktop seam gauge: PEEK 35 % · MID 65 % · FULL 85 %. The detent gauge itself is preserved as a 3-dot indicator under the grab handle. The CWS Sites widget persists above the bottom rail. Idle affordance count is identical to desktop (7).
- **CWS (corner-widget Sites)** — used in a small, persistent form. A frosted widget anchored to the **bottom-right** corner of the iframe on desktop (lower-corner instead of the obvious upper-left, to share the gaze with the CTA without competing with the article's reading flow) shows live status: *"☕ Coffee Shop · WP 6.7 · PHP 8.2 · 11.4 MB"* and is wired as a door to the Sites pane (same destination as rail dock #1). On mobile it sits above the bottom rail in the same position relative to the iframe. The pulse turns amber when errors exceed zero, matching the rail badge — one source of truth, two display surfaces. **The widget persists when the pane is open** (visible in panels A, B and H) — it only hides at full detent where the pane geometrically eats its corner.
- **DEV (slim DevTools-style top capsule)** — a single 38-px capsule above the iframe holds Refresh, address bar (with `https://...` and a `◉` SSL lock), playground title, **save-state pill** that morphs Unsaved → Saving → Saved (replaces the v1 red banner), a ⋮ More menu (with **Export to GitHub PR** + **Download .zip** both surfaced, plus an escalated "Apply &amp; reset" entry), and an **explicit "⛶ Fullscreen F"** button (the affordance v1 #15 / W11 lacked). One row. No two-row chrome anywhere.
- **VEN (Ventura · ≤ 5 items per pane)** — the rail has exactly **5 docks** (max). Site Manager pane uses a 5-tab segmented strip (Settings · Files · Blueprint · Database · Logs). Sites pane uses a 3-segment strip (Yours · New · Library). Library overlay groups the **10 brief-specified categories** as a Ventura-style left column with item counts.

Three-detent gauge is a distinct expression of QR — not a borrowed SR primitive. The detents are *snaps*, not a smart-resize momentum gauge. There is no auto-grow-on-interaction, no 35/65/50/50/60/40/75/25 menagerie. Three detents only.

## 3. What I remixed / removed and why

The launcher drawer, the Site Manager sidebar, the settings popover, the settings info-notice "Save" button, and the dedicated "Open Site Manager" toolbar button collapse into **one secondary pane** swapped by the rail's 5 docks (with a 3-segment sub-control for the Sites pane: Yours / New / Library). The 43-blueprint browser is promoted to a **modal Library overlay**, not a sub-screen inside the pane — that keeps the pane's job singular (one breadcrumb depth, one tab strip, one content shape per dock). The Files tab and the Blueprint tab share a single file tree (Files is the tree alone, Blueprint adds a JSON editor on the right) — the brief explicitly flags this duplication and I'm collapsing it without dropping either function. Apply+Reset is escalated three ways: visible diff (PHP 8.2 → 8.3, WP 6.7 → 6.8-RC1), pre-flight auto-snapshot (`coffee-shop-2026-05-21T14-18.snap`), and a typed-phrase confirm requiring the user to type the playground name exactly. The save-state lives in one pill in the top capsule that morphs through Unsaved → Saving → Saved; the inline "Save" button on the Unsaved row in the Yours list is the second door, but lands on the same action. No terminal, no command echo, no dual-channel duplication, no two-row top bar.

## 4. Trade-offs

I'm intentionally not running smart-resize (SR) here even though SR is the user's "this primitive is gold" winner — because the brief permits primitive selection and my direction is explicitly QR+MOB. Composing SR on top would dilute the parity thesis: a smart-resize gauge encodes *momentum* and *interaction history*, while my 3-detent gauge encodes *one of three discrete positions* and that maps cleanly onto a bottom sheet's natural detent vocabulary. The cost is that desktop users lose the snap-by-interaction feel of SR; they get instead a snap-by-click feel that survives the desktop→mobile translation intact. The second trade-off: my idle affordance count is **7** by my honest count (rail = 1 surface · address bar · refresh · save-pill · ⋮ · ⛶ Fullscreen · CWS widget). A strict critic who counts the 5 rail docks as 5 separate affordances would read **11**. I argue the rail is one surface the way the macOS Dock is one surface; the lesson from #010 is "don't bury this in subtext" — I'm being explicit. The third trade-off: the light/warm palette is unconventional in this round (most of the cohort is dark) and may read as less premium, but it differentiates this design's IA from its visually-similar siblings (#009-glass, #010-depth, #011-corner-cells, #012-Ventura, #013-Mica) — the reader sees that this one is about *parity*, not about *finish*.

## 5. Self-critique rubric — mandatory

```
[x] Affordance count at idle ≤ 8?              Score: 4/5  (counted = 7 with rail as one surface; documented and shown in panel A footer; would be 11 if every dock counts separately)
[x] iframe primacy + fullscreen toggle?        Score: 5/5  (iframe is the sharp wallpaper at z0 in panels A/B; explicit ⛶ Fullscreen F button in the top capsule on every panel; F shortcut shown as chip)
[x] One door per feature?                      Score: 4/5  (Settings → only Site Manager Settings tab; URL → only address bar; Save → only the save-pill (inline Save on Unsaved row is the same action); Library → only z-layer modal; one intentional duplicate: Sites = rail dock #1 + CWS widget, same destination)
[x] One secondary surface?                     Score: 5/5  (exactly one pane / sheet; content swapped by 5-tab segment for Site Manager and 3-segment for Sites; Library is a modal overlay, not a second persistent surface; same shape on mobile)
[x] Direction strongly expressed?              Score: 5/5  (the design IS the parity — desktop and mobile share docks 1:1, sheets share detents 1:1; the detent gauge appears at both widths; the "parity" arrow column between desktop and mobile in panels A/B/C/E makes the thesis literal)
[x] Mobile = wider-mobile desktop?             Score: 5/5  (three mobile states in panel I covering full sheet · library overlay · mid sheet with Blueprint editor; identical 5-dock rail; identical detent vocabulary; same content trees at every width)
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5  (five primitives composed: QR + MOB + CWS + DEV + VEN — each named in §2 with how it appears)
[x] No banned patterns (§1 DROP)?              Score: 5/5  (single-row top capsule only; no depth-as-control (no blur tiers used as interactive surface); no terminal or command echo — there is one PHP log viewer in the Logs tab, and nothing else echoes what the visual UI does)
```

No row ≤ 2. Cleared for commit.

## 6. Hard-requirements checklist (cross-check)

- [x] Five Site-Manager tabs reachable with visible content: Settings (panel C), Files (panel D shared tree), Blueprint (panel D + mobile I-3), Database (panel F), Logs (panel F + mobile I-1).
- [x] All six "Start a new Playground" sources visible (panel B): Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip.
- [x] Full 43-blueprint browser with search + 10 category filters (panel G: 20 cards rendered; categories All / Featured / Website / Personal / Content / Themes / Gutenberg / Experiments / WooCommerce / News).
- [x] Additional actions surfaces both Export-to-GitHub-PR and Download-.zip (panel H ⋮ menu open; also referenced in Site Manager pane head).
- [x] Unsaved → Save state transition visible: panel A `Saved`, panel C `Saving`, panel E `Booting`, panel G `Unsaved`, panel H `Saved`. Save-pill in top capsule morphs through all states.
- [x] Three demonstrated states minimum: working session (A), booting (E), launcher/library open (B + G).
- [x] Mock data: ≥ 3 saved playgrounds (panel E shows 5 — Coffee Shop / Vueo theme dev / Gaming News booting / Skincare Blog / Unsaved Playground); real blueprint JSON (panel D); realistic PHP log lines (panel F: strftime deprecation, include() failed, SAVEPOINT, undefined function fatal, heartbeat 200 timing, cache:HIT, REST endpoint warning).
- [x] Both 1440×900 desktop (panels A–H render 8 desktops) and 390×844 mobile (panels A/B/C/E render 4 mobiles + panel I renders 3 mobile states = 7 mobile frames).
- [x] Destructive Apply+Reset escalated via typed-phrase + diff + auto-snapshot (panel C).
- [x] Single self-contained `index.html`. Google Fonts (Inter + JetBrains Mono) via CDN. No external JS.

## 7. Affordance count at idle (panel A, counted)

1. **Refresh** button (top capsule)
2. **Address bar** input (top capsule)
3. **Save-state pill** (top capsule — single morphing affordance)
4. **⋮ More** menu (top capsule)
5. **⛶ Fullscreen F** button (top capsule)
6. **Rail** (read as one surface containing 5 docks + identity logo + avatar; Dock-equivalent)
7. **CWS Sites widget** (bottom-right of iframe)

Total = **7** affordances. The WP logo and AZ avatar are identity, not affordances. The playground-title chip in the top capsule is a passive label, not a control (the rename action lives on the Site Manager pane head). The doors-map strip below panel A enumerates which dock + which alternative door reaches each feature.

## 8. Why this is different from #009-#013 (same family)

| design | distinguishing claim |
|---|---|
| 009 | QR + GLS — frosted glass surfaces, content-aware tint |
| 010 | QR + 3LD — quantified blur tiers (0/8/18/36 px) |
| 011 | QR + CWS — rail composed of 4 corner-widget cells |
| 012 | QR + VEN — icon-and-label Ventura pills |
| 013 | QR + W11 — Mica restraint, Fluent reveal effect |
| **015 (this)** | **QR + MOB — parity is the thesis; the mobile is the source of truth; detent vocabulary unifies desktop and mobile** |

#015 is the only one in the QR cohort that rotates its rail at 90° and *deliberately* shares the detent vocabulary between widths, with the gauge as a visible artifact at both sizes. The palette is also light/warm — every other QR sibling is dark — so a reviewer scanning the gallery thumbnail strip can pick this one out immediately.
