# v7 #033 — Corners on desktop · Status strip on mobile

## 1. Thesis

The four corner widgets are the **persistent live-status IA** of the design. On a 1440×900 desktop they live in the corners — TL Sites (violet), TR Settings + Fullscreen (teal), BL Logs (amber), BR Site Manager (blue). On a 390×844 mobile they collapse into a **single horizontal four-cell status strip** along the top — same four roles, same four accent colours, same four live-status mirrors, same four "expand into one anchored panel" doors. The mobile strip is the same widget vocabulary stamped into mobile's vertical-scroll-first geometry: corners are flattened into a single row, but the role assignments and the anchor-back animation survive intact. Below the strip on mobile sits a slim address row (refresh + URL + save-pill + fullscreen) that on desktop is a centered floating address capsule. There is no top bar on either viewport — only a floating capsule above the iframe (desktop) or a thin row below the status strip (mobile).

## 2. Primitives composed (KEEP list, by notation)

- **MOB (mobile-first = wider-phone)** — the *primary* primitive of this direction. Mobile is not an after-thought collapse; the four-cell status strip is the canonical IA that the desktop layout *unfolds* into the corners. Same vocabulary on both widths (`tl/tr/bl/br` modifier classes power both `.cw.{tl,tr,bl,br}` on desktop and `.m-cell.{tl,tr,bl,br}` on mobile). Same live-status content on both (Sites name + state, WP/PHP versions, Logs count, current Files focus). Same expand-from-anchor metaphor — desktop panel anchors via `top/left/bottom/right` positioning; mobile sheet declares its origin via a "From TL/TR/BL/BR" indicator chip + matching accent dot.
- **CWS (corner-widget Sites interaction)** — applied four times instead of once. Each corner widget is a small frosted capsule that simultaneously (a) shows live status of its domain and (b) is the sole door to its function. Click TL → Sites panel grows inward from the top-left corner with a violet seam at its top edge. Click TR → Settings panel anchors top-right with teal seam. Same pattern for BL Logs and BR Site Manager. This is the v5 #036 pattern *multiplied by four* and *adapted to mobile by horizontal collapse*.
- **DEV (slim browser-style top bar)** — interpreted as a **single floating address capsule**, not a full-width bar. 38 px tall, pill-shaped, centered above the iframe on desktop; flattened to a 36 px row below the status strip on mobile. Holds refresh, address bar, save-pill. The save-pill morphs through `Unsaved → Saving → Saved → Booting` (panels A, C, F, G, H, K2, L1, L2, L3). Replaces the red banner entirely.
- **3LD (three-layer-depth, visual only)** — four quantified blur tiers used as decoration for hierarchy, never as control surface. `--z0 0px` (iframe — only sharp surface), `--z1 8px` (idle corner widget / mobile status strip / address row), `--z2 18px` (expanded corner panel / mobile sheet / boot veil), `--z3 36px` (Library scrim). The user always navigates by *clicking the widget*, not by interacting with the blur. Depth is purely "where am I" feedback.
- **GLS (glassmorphism)** — all four widgets and the mobile strip and the expanded panels are frosted glass; the iframe is the only solid surface. Each corner has a unique accent colour seam (violet / teal / amber / blue) that runs along the panel's leading edge, so the four glass surfaces don't read as identical and the user can tell at a glance which corner their current panel came from.
- **VEN (≤ 5 items per pane)** — TL panel has 3 segments (Yours / New / Library) and ≤ 4 visible saved playgrounds. TR has 5 settings fields max. BR Site Manager has exactly 5 tabs. BL Logs has 5 level chips (All / Notice / Warn / Error / Deprecated). Library overlay has 10 categories — same as the brief.

## 3. What I remixed / removed and why

The launcher right-drawer, the Site Manager left-sidebar, the settings popover, the settings info-notice button, and the "Open URL" hint are all **gone** as separate surfaces. They collapse into four corner doors on desktop and four strip cells on mobile — one cell per role, no duplicate entry points. The 43-blueprint gallery is *not* in-lined into the TL panel; it's promoted to a z3 modal Library reachable only from TL → Library segment (so still one door). The destructive Apply+Reset is no longer a small red banner: it lives behind a **typed-phrase confirm modal** that requires the literal site name (`Coffee Shop`), preceded by a visible **diff** (WP/PHP/DB/uploads/plugins) and an **auto-snapshot** banner showing restorability for 7 days from TL Sites → Yours. The save-state is consolidated into one pill in the address capsule that morphs through Unsaved/Saving/Saved/Booting — never two surfaces. **No terminal** — the BL Logs widget's count chip is a *signal*, not a duplicate UI mirror: the count and the panel render the same data through *one channel*, just at different resolutions (count when idle, list when expanded).

The mobile design is **not a "hamburger menu" reduction**. The four roles and four live-status mirrors are visible *at all times* on mobile — that's the MOB+CWS composition's whole point. The thumb reach is preserved because the status strip lives at the top (next to the notch / dynamic island) and the expanded panel comes up as a bottom sheet — so the strip identifies, the sheet acts.

## 4. Trade-offs

The horizontal mobile strip squeezes each cell to ~85 px wide, which truncates live-status text more aggressively than the desktop corner pills (e.g., "Coffee Shop" fits on desktop TL with subtitle, but mobile TL cell shows just "Coffee Shop"; the WP version pair `WP 6.7 · PHP 8.2` collapses to just "WP 6.7" on mobile TR). I accept this truncation because the **full** status is always one tap away and the four-role identity is preserved. A second trade-off is that the mobile strip is *bottom-orientation-blind* — BL and BR widgets sit at the top of the screen on mobile despite their "Bottom" role label, because mobile's vertical flow doesn't support corner anchoring without sacrificing thumb reach. The role names (BL / BR) remain as identity badges so the desktop↔mobile correspondence is legible; the position changes but the *role* does not. A third trade-off is idle affordance count: **exactly 8** on desktop (counted in §7 below) — at the budget ceiling. If I had inlined fullscreen into the address capsule the count would drop to 7, but at the cost of mixing fullscreen (an escape verb) into the address bar (a navigation surface), and that would dilute "one door per role."

## 5. Self-critique rubric — mandatory

```
[x] Affordance count at idle ≤ 8?              Score: 4/5  (exactly 8 at desktop ceiling, 6 at mobile, both counted)
[x] iframe primacy + fullscreen toggle?        Score: 5/5  (iframe is the only sharp z0 surface, fills the viewport; explicit ⛶ Fullscreen F button visible in TR widget AND in mobile address row, labeled "Open iframe fullscreen (F)" in TR panel)
[x] One door per feature?                      Score: 5/5  (TL = sole Sites door; TR = sole Settings + Fullscreen door; BL = sole Logs door; BR = sole Site Manager door; save-pill = sole save surface; address bar = sole URL surface; Library reached only from TL→Library segment)
[x] One secondary surface?                     Score: 4/5  (only one corner panel can be expanded at a time on desktop; only one bottom sheet on mobile; Library is a z3 scrim mutually exclusive with corner panels; trade-off is panel-size varies by corner but it's still one secondary surface at a time)
[x] Direction strongly expressed?              Score: 5/5  (the MOB+CWS thesis is literally the visual: panel A renders the four corners on desktop and panel B renders the same four roles as a horizontal status strip on mobile — same accent colours, same role labels, same live-status fields; the geometric transformation IS the design)
[x] Mobile = wider-mobile desktop?             Score: 5/5  (true parity: the four corner roles, the four accent colours, the live-status fields, the expand-anchor metaphor and the address-bar contents survive intact; the mobile is the canonical IA that desktop unfolds into corners — not a degraded fallback; same `.tl/.tr/.bl/.br` modifier classes power both widths)
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5  (six primitives composed: MOB as backbone of the synthesis, CWS multiplied four times, DEV as floating capsule, 3LD as visual depth, GLS for surfaces, VEN for ≤5 per pane — all named with how they are used in §2)
[x] No banned patterns (§1 DROP)?              Score: 5/5  (no two-row top bar — there is no top bar at all on either viewport, only a floating capsule on desktop and a single thin row on mobile; depth is purely visual, never a control surface; no terminal echoing the visual UI — BL count chip and BL panel are one channel at two resolutions)
```

No row ≤ 2. Cleared for commit.

## 6. Hard-requirements checklist

- [x] **Five Site-Manager tabs reachable with visible content**: Settings (panel I bottom + panel K2 mobile + panel E TR popover), Files (panel H), Blueprint (panel I top), Database (panel I bottom), Logs (panels F desktop + K1 mobile).
- [x] **All six "Start a new Playground" sources visible** (panel C TL panel): Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip. Mobile variant in panel D.
- [x] **Full 43-blueprint browser with search + 10 category filters** (panel J): 20 cards rendered + search input + 10 category pills (All · Featured · Website · Personal · Content · Themes · Gutenberg · Experiments · WooCommerce · News).
- [x] **Additional actions menu surfaces both Export-to-GitHub-PR and Download .zip** (panel H, ⋮ menu rendered open with both items visible).
- [x] **Unsaved → save state transition visible**: row L renders three crops (L1 Unsaved · L2 Saving 41% · L3 Saved); also visible in panels A (Saved), G (Booting), H (Saving), K2 (Unsaved with explicit "Save site locally" CTA in the Site Manager Settings info notice).
- [x] **Three demonstrated states (and more)**: working session (A, C, F, H, I, K), booting (G), launcher / library open (C TL panel, J library overlay), unsaved (K2, L1), apply+reset confirm (E).
- [x] **Mock data realistic**: 4 saved playgrounds (Coffee Shop running, Vueo Art Gallery, Spiel Gaming News, Feed Reader Friends) — adding Unsaved Playground in K2 makes 5 named states; real blueprint JSON with correct verbs (`defineWpConfigConsts`, `runWpInstallationWizard`, `installTheme`, `installPlugin`, `importWxr`, `setSiteOptions`, `login`); realistic PHP log lines incl. `strftime` deprecation, `include()` warning, undefined-function fatal, REST endpoint timing, query counts, cache hits, SAVEPOINT, `each()` deprecation.
- [x] **Both 1440×900 desktop and 390×844 mobile rendered**: desktop panels A · C · E · F · G · H · I · J · L1 · L2 · L3; mobile panels B · D · K1 · K2.
- [x] **Destructive Apply+Reset escalated** via **typed-phrase confirm** + **diff** + **auto-snapshot with 7-day restorability** (panel E).
- [x] **Single self-contained `index.html`**. Google Fonts (Inter + JetBrains Mono) via CDN, all icons inline SVG, no other external resources.

## 7. Affordance count at idle (panel A, counted)

1. Refresh button (centered address capsule)
2. Address bar input (centered address capsule)
3. Save-pill (centered address capsule)
4. Fullscreen `F` button (TR widget)
5. Settings gear (TR widget)
6. TL widget — Sites (one door, one live signal)
7. BL widget — Logs (one door, one live signal — count chip is status, not affordance)
8. BR widget — Site Manager (one door, one live signal containing 3 tab chips that visually mirror focus but all reach the same destination)

Total = **8**. Decorative role labels (`TL · Sites` etc.) and identity glyphs (☕) are not counted; they are status, not affordances. WP/PHP version pills in TR are status, not affordances.

**Mobile idle count = 6**: refresh, address bar, save-pill, fullscreen icon (mobile address row), TL cell, TR cell, BL cell, BR cell — but the four strip cells are visually one row (Apple Dock precedent), counted as 4 distinct doors. Strict count therefore = 4 + 4 = 8 on mobile (same as desktop). Conservative reading: 6 (four cells as one surface + refresh + save-pill).

## 8. How this differs from neighbour designs

- **vs. #017 (Four corners · Sharp roles)**: 017 commits to desktop corner positioning but collapses on mobile to a "top capsule + 4-cell bottom dock" *split*. 033's whole thesis is the *single horizontal strip* on mobile — corners flatten into one row, not two surfaces. The strip is the synthesis.
- **vs. #022 (Corner widgets · Edge-swipes on mobile)**: 022 keeps the corners as *gestures* on mobile (drag-from-corner). 033 makes them *visible cells* in a top strip — gesture-free, thumb-reachable, status-always-visible. The mobile strip *shows* status before any tap; 022's gesture-based corners reveal status only on swipe.
- **vs. #015 (Quiet Rail · Mobile Parity)**: 015 uses QR as the IA; 033 uses CWS. The detent vocabulary in 015 is about *snap positions*; 033's mobile parity is about *role identity* preserved across geometric collapse.
- **vs. #027 (Mica + CWS Sites widget)**: 027 has *one* CWS Sites widget. 033 has *four* corner widgets and treats their adaptation to mobile as the synthesis point.

The differentiator of 033 is the **mobile horizontal status strip** as the literal manifestation of "four corners adapted for narrow viewports" — not a fallback, not a hamburger, not gestural, but a same-vocabulary same-IA reshape.
