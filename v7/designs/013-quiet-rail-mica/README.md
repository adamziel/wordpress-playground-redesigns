# v7 #013 — Quiet Rail · Mica

## 1. Thesis

The same quiet-rail-to-loud IA from v5 #018, redressed in **Windows 11 Mica**. Mica is a desaturated, translucent material that samples the wallpaper underneath and tints itself with the system accent. Here the iframe IS the wallpaper, and every chrome surface is Mica drawn over it: the slim top capsule, the 56-px vertical Fluent nav rail, the secondary card with breadcrumbs, and the Library overlay. The rail stays silent until you touch it — labels collapsed, no badges except a single live counter on Logs. Click a dock and one Mica card slides open beside the rail with a breadcrumb trail ("Site Manager / Logs"). Generous whitespace, Segoe-flavored type (Inter substitute), Fluent accent bar on the active dock, depth conveyed by light/shadow not by a 36-px blur — this is W11 restraint, not glass theater.

## 2. Primitives composed (KEEP list, by notation)

- **QR (quiet-rail-to-loud IA)** — the persistent chrome is a **56-px Fluent vertical nav** on the left edge with 5 docks: Sites, Site Manager, Blueprint, Database, Logs. At idle the rail is silent (no labels, single 2-px accent bar on the active item, Fluent's signature *reveal effect* on hover only). Click a dock → a single secondary Mica card slides out between rail and iframe (panels B, D, E, F, G). Same v5 #018 IA; the *visual* is Mica + Fluent, not the v5 monochrome.
- **W11 (Win11 Mica restraint)** — every chrome surface is a Mica layer: `rgba(243,243,243,.78)` on top of a 24-px wallpaper-sampled blur, with a subtle 1-px Fluent border (`rgba(0,0,0,.06)` outside, `rgba(255,255,255,.6)` inside) and an 8-px soft shadow. Mica is **never solid**; it always shows wallpaper tint. Cards have rounded `8px` corners (Fluent token), generous `24px` padding, breadcrumbs at the top in 12.5-px semibold. Big visible **"Open fullscreen ⛶ F"** button — the explicit affordance v1 #15 lacked.
- **VEN (Ventura — ≤ 5 items per pane)** — the rail has exactly **5 docks**; each pane's nav has **≤ 5 sections**. Site Manager card uses a 5-item segmented strip (Settings · Files · Blueprint · Database · Logs). Sites card uses a 3-item segment (Your Playgrounds · New · Library). Library overlay groups 10 categories into a Ventura-style left column.
- **CWS (corner-widget Sites)** — a small **frosted Mica capsule** in the bottom-left corner of the iframe shows live status: `Coffee Shop · WP 6.7 · PHP 8.2 · 11.4 MB`. Click it → it expands into the Sites Mica card anchored to that corner (same destination as the Sites rail dock). One door, two ergonomic anchors.
- **DEV (slim DevTools top capsule)** — a single 36-px Mica capsule above the iframe holds Refresh, Address bar (with `/wp-admin` autosuggest), Playground name + **save-state pill** (Unsaved → Saving → Saved morph — replaces the v1 red banner), **More menu** (Export PR + Download .zip), and the explicit **Fullscreen** button. One row. No two-row chrome.
- **MOB (mobile = wider-mobile-desktop)** — same QR IA at 390×844. The rail rotates 90° to a **bottom Fluent tab bar** (same 5 docks). The card becomes a Mica bottom sheet at three detents (peek / mid / full). The CWS capsule sits above the bottom bar. The library overlay is a full-screen Mica sheet. Idle affordance count identical.

## 3. What I remixed / removed and why

The launcher drawer, the Site Manager sidebar, the settings popover, and the settings info-notice button collapse into **one Mica card** swapped by the rail's 5 docks. The 43-blueprint browser is promoted to a modal Library overlay (panel C) rather than a sub-screen inside the card — that keeps the card's job singular (one pane, one breadcrumb depth). Apply+Reset is no longer a small red banner; it's a **typed-phrase confirm sheet** (panel D) that requires typing the playground name exactly, accompanied by a visible diff (PHP 8.2 → 8.3, WP 6.7 → 6.8-RC1, "Reset SQLite") and an auto-snapshot taken pre-flight ("`coffee-shop-2026-05-21T14-18.snap` created"). Save-state is one pill in the top capsule that morphs through Unsaved → Saving → Saved. No terminal. No two-row chrome. No depth-as-control — depth here is *only* the Mica blur + shadow tier, never an interactive surface.

## 4. Trade-offs

Mica's defining property is that it *desaturates* the wallpaper — which means the chrome is harder to read on a low-contrast iframe background. I compensate by raising the Mica opacity to `.78` (Win11 default is `.72`) and by giving each card a 1-px Fluent border that re-establishes the edge. The cost is that the design looks slightly less ethereal than Win11 Settings on a hero wallpaper — but the brief explicitly asks for *restraint* and *visible affordances*, and a too-ghostly Mica fails the affordance test. Second trade-off: my idle affordance count is 7 (top capsule = 4 buttons + 1 address bar + 1 save-pill; rail = 1 surface; CWS = 1 widget; total 7 or 8 depending on whether the save-pill counts) — within budget, but I am declining to also surface a permanent "Run blueprint" button or a permanent "Open admin" tile, because those have natural homes inside the Site Manager card. Third trade-off: I am not using 3LD (depth-as-blur-tiers) because W11 Mica already encodes depth via tinted translucency and Fluent shadow; stacking 3LD on top would double-tax the GPU and over-style a design whose thesis is restraint.

## 5. Self-critique rubric — mandatory

```
[x] Affordance count at idle ≤ 8?              Score: 5/5  (counted = 7; documented in panel A)
[x] iframe primacy + fullscreen toggle?        Score: 5/5  (iframe is the unblurred wallpaper; explicit ⛶ Fullscreen F button in the top capsule, plus an "Open in fullscreen" action on the Settings card)
[x] One door per feature?                      Score: 4/5  (Settings → Site Manager Settings tab only; URL → address bar only; Save → save-pill only; Library → modal overlay only; one intentional duplicate: Sites rail dock + CWS widget reach the same Sites card)
[x] One secondary surface?                     Score: 5/5  (exactly one Mica card; content swapped by 5-tab strip for Site Manager and 3-segment strip for Sites; Library overlay is a modal, not a second persistent surface)
[x] Direction strongly expressed?              Score: 5/5  (Mica is everywhere: top capsule, rail, card, CWS, overlay. Fluent reveal effect, accent bar, breadcrumbs, Segoe-flavored type — the design reads as Win11 at first glance)
[x] Mobile = wider-mobile desktop?             Score: 5/5  (same QR IA; rail → bottom Fluent tab bar; card → bottom Mica sheet with three detents; CWS persists above bar; same idle count)
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5  (six primitives composed: QR + W11 + VEN + CWS + DEV + MOB — each named with how)
[x] No banned patterns (§1 DROP)?              Score: 5/5  (single-row top capsule only; Mica depth never an interactive control; no terminal echo of visual UI)
```

No row ≤ 2. Cleared for commit.

## 6. Hard-requirements checklist

- [x] Five Site-Manager tabs reachable with content: Settings (D), Files (G), Blueprint (E), Database (G inset), Logs (F).
- [x] All six "Start a new Playground" sources visible (panel B): Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip.
- [x] Full 43-blueprint browser with search + 10 category filters; ≥ 16 cards visible (panel C: 20 cards rendered).
- [x] Additional actions surfaces both Export-to-GitHub-PR and Download-.zip (top capsule More menu + Site Manager card subhead).
- [x] Unsaved → save state transition visible: panel A `Unsaved`, panel D `Saving`, panel F `Saved`.
- [x] Three demonstrated states: working session (A), booting (H), launcher open (B + C).
- [x] Mock data realistic: 4 saved playgrounds (Coffee Shop, Vueo theme dev, Gaming News, Unsaved Playground); real blueprint JSON in panel E; realistic PHP log lines in panel F.
- [x] Both 1440×900 desktop (panels A–H) and 390×844 mobile (panel I) rendered.
- [x] Destructive Apply+Reset escalated via typed-phrase confirm + diff + auto-snapshot (panel D).
- [x] Single self-contained `index.html`. Google Fonts via CDN.

## 7. Affordance count at idle (panel A, counted)

1. Refresh button (top capsule)
2. Address bar input (top capsule)
3. More ⋮ menu (top capsule)
4. Fullscreen ⛶ button (top capsule)
5. Save-state pill (top capsule — single morphing affordance, click-to-save when unsaved)
6. Rail (read as one surface containing 5 docks — Dock-equivalent)
7. CWS Sites widget (bottom-left of iframe)

Total = **7** affordances. The logo and the playground-name label are identity, not affordances.
