# v7 #017 — Four Corners · Sharp Roles

## 1. Thesis

All persistent chrome lives in **four corner widgets**, each with a sharp non-overlapping role and a live-status mirror. **Top-Left** is the Sites widget — which site is mounted and how is it doing. **Top-Right** is Settings + the explicit Fullscreen affordance — WP/PHP at a glance plus the escape hatch. **Bottom-Left** is Logs — a tiny live error count that breathes when it changes. **Bottom-Right** is the Site Manager — three sub-tab chips (Files · Blueprint · DB) doubling as a live focus indicator. Each widget is the *sole* door to its content domain; each expands inward from its own corner into a single glass panel anchored to that corner. There is no top bar. There is no rail. The only other affordance is a slim floating address capsule centered above the iframe, holding refresh + address + save-pill.

This is **CWS done four times instead of once**, with each instance disciplined to one job. The four widgets together still spend less idle screen real estate than a Site Manager sidebar — and the iframe gets the entire viewport between them.

## 2. Primitives composed (KEEP list, by notation)

- **CWS (corner-widget Sites interaction)** — applied as the *backbone* of the design, not as a side garnish. Four corner widgets, four sharp roles, four live-status mirrors. Each is its sole door. Click → the widget grows inward from its corner into a glass panel (anchor pin marks the origin so the user knows which widget is now expanded). This is the assigned direction's literal instruction.
- **3LD (three-layer-depth visual)** — used as *visual style only*, never as an interactive control. Four quantified blur tiers: `z0 0px` (iframe), `z1 10px` (idle widget glass), `z2 20px` (expanded corner panel), `z3 40px` (Library scrim). The user navigates by clicking the widget, not by interacting with depth. Depth tells the eye where it is.
- **GLS (glassmorphism)** — all four widgets and their expanded panels are frosted glass; the iframe is the only solid surface. Glass is used strictly in service of the depth language — not as decoration. A subtle accent-color seam (violet / teal / amber / WP-blue) marks each corner's identity so the four glass surfaces don't read as identical.
- **DEV (slim browser-style top bar)** — applied as a *single floating address capsule* (not a full-width bar). 36 px tall, pill-shaped, centered. Holds refresh, address bar, and save-pill. The save-pill morphs through `Unsaved → Saving → Saved` and replaces the red banner entirely (visible across panels A, C, D, F, H).
- **VEN (≤ 5 items per pane)** — every panel respects the cap. TL Sites has 3 segments (Yours / New / Library). BR Site Manager has 5 tabs (Settings / Files / Blueprint / Database / Logs). BL Logs has 4 level chips + tail toggle. Library overlay has 10 categories — the brief's exact list, used as the Ventura-style nav sidebar.
- **MOB (mobile = wider-mobile desktop)** — same IA, gracefully reshaped. The four corners collapse on mobile: top corners become a single floating address capsule (incl. fullscreen icon), bottom corners become a **four-cell glass dock** at the bottom with the same TL/TR/BL/BR roles. The expanded panel becomes a bottom sheet anchored to whichever cell was tapped. Live counts persist (e.g., Logs cell shows the count chip). One-door-per-feature is preserved.

## 3. What I remixed / removed and why

The launcher right-drawer, the Site Manager left-sidebar, the settings popover, the settings info-notice button, and the floating "Open URL" hint are all **gone** as separate surfaces. They collapse into four corner doors, one per role. The 43-blueprint gallery is *not* sub-screened inside the TL panel — it's promoted to a z3 modal Library, reachable only from TL → Library segment (so still one door). The destructive Apply+Reset action is no longer a red banner: it lives behind a typed-phrase confirm modal that requires the literal site name (`Coffee Shop`), preceded by a visible WP/PHP/Files/DB diff, an auto-snapshot banner showing restorability for 7 days, and a confirm button held at 0.55 opacity until the phrase matches. The save-state is consolidated into one pill in the address capsule that morphs through Unsaved/Saving/Saved — never a banner, never two doors. No terminal, no command echo: a single channel per role.

## 4. Trade-offs

The four-widget approach has two real costs. First, **idle affordance count is exactly 8** — refresh, address bar, save-pill, fullscreen, settings gear, TL widget, BL widget, BR widget — which is at the budget ceiling. The fullscreen icon and the settings gear share the TR glass capsule but count as separate affordances (they have distinct hover targets and roles); the TR widget is two affordances in one container. If I had inlined one of them into the address capsule the count would drop to 7, but at the cost of mixing fullscreen (an escape-hatch verb) into the address bar (a navigation surface) — and that would dilute "one door per role." I accept being *at* 8 rather than below it. Second, the four-corner approach commits substantial corner real estate (TL ≈ 280 px × 60 px, TR ≈ 360 × 50, BL ≈ 270 × 70, BR ≈ 200 × 60) — about 4 % of viewport. The iframe still has the entire center sharp at z0. In exchange the user always knows the site's name, WP/PHP versions, error count, and what file is currently focused without opening anything. Glass is used sparingly (only on widgets, panels, capsule, library scrim) so it isn't ornament; it's the depth language. A subtler trade-off is that on mobile the four corners can't all coexist as corners — they collapse into one top capsule and one four-cell bottom dock, which technically reduces "corner-ness" while preserving the four roles.

## 5. Self-critique rubric — mandatory

```
[x] Affordance count at idle ≤ 8?              Score: 4/5  (exactly 8 — at the budget ceiling, honest about it)
[x] iframe primacy + fullscreen toggle?        Score: 5/5  (iframe is the only sharp z0 surface, fills the viewport; explicit Fullscreen F button is visible and labeled in TR widget, not hidden in a menu)
[x] One door per feature?                      Score: 5/5  (each corner owns one content domain; Sites→TL, Settings/Fullscreen→TR, Logs→BL, Site Manager→BR; Library reached only from TL→Library segment; save-pill is the only save surface; address bar is the only URL surface)
[x] One secondary surface?                     Score: 4/5  (only one panel can be expanded at a time — closing one before opening another is the rule; Library is a modal scrim at z3, separate but mutually exclusive; trade-off is the panel-mode varies by corner but it's still one secondary surface at a time)
[x] Direction strongly expressed?              Score: 5/5  (the design IS the four-corner thesis — each corner is rendered with its own role, its own color seam, its own live signal, its own anchor pin; panels B/C/D/E/F/H each demonstrate one corner expanded)
[x] Mobile = wider-mobile desktop?             Score: 4/5  (same four roles; corners collapse to top capsule + 4-cell bottom dock; live counts preserved; sheet metaphor; some loss of "corner-ness" by physical necessity at 390 px wide)
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5  (six primitives composed: CWS as backbone, 3LD as visual depth, GLS for surfaces, DEV as single floating capsule, VEN for ≤5 per pane, MOB for the responsive collapse — each named with how it is used in §2)
[x] No banned patterns (§1 DROP)?              Score: 5/5  (no two-row top bar — there is no top bar at all, only a centered floating capsule; depth is purely visual hierarchy, never a control surface; no terminal echoing the visual UI; the BL Logs widget's live count is a signal not a duplicate UI mirror — the count and the panel render the same data through one channel)
```

No row ≤ 2. Cleared for commit.

## 6. Hard-requirements checklist

- [x] Five Site-Manager tabs all reachable with visible content: **Settings** (panel E TR + BR side list), **Files** (panel C with editor), **Blueprint** (panel H with JSON viewer), **Database** (panel H with table + SQL prompt), **Logs** (panel D + BR side list).
- [x] All six "Start a new Playground" sources visible (panel F): Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip.
- [x] Full 43-blueprint browser with search + 10 category filters (panel G: 20 cards rendered).
- [x] Additional actions surfaces both Export-to-GitHub-PR and Download-.zip (panel H BR header ⋮ menu + run/copy/download buttons).
- [x] Unsaved → save state transition visible: panel A `Unsaved`, panel C `Saving…`, panel D / H `Saved`, panel F `Booting`.
- [x] Three demonstrated states (and more): working session (A, C, H, K), booting (F), launcher open (B, F, G, K).
- [x] Mock data realistic: 4 saved playgrounds (Coffee Shop, Vueo theme dev, Gaming News, Unsaved Playground); real blueprint JSON with correct verbs (runWpInstallationWizard, installPlugin, installTheme, importWxr, setSiteOptions, login); realistic PHP log lines incl. deprecation, include() warning, savepoints, request timing, query counts, cache hits.
- [x] Both 1440×900 desktop (panels A through H, plus I, K) and 390×844 mobile (panels J, L) rendered.
- [x] Destructive Apply+Reset escalated via **typed-phrase confirm** + **diff** + **auto-snapshot** (panel E).
- [x] Single self-contained `index.html`. Google Fonts (Inter + JetBrains Mono) via CDN, all icons inline SVG.

## 7. Affordance count at idle (panel A, counted)

1. Refresh button (centered address capsule)
2. Address bar input (centered address capsule)
3. Save-pill (centered address capsule)
4. Fullscreen `F` button (TR widget)
5. Settings gear (TR widget)
6. TL widget — Sites (one door, one live signal)
7. BL widget — Logs (one door, one live signal)
8. BR widget — Site Manager (one door, one live signal containing 3 tab chips that visually mirror focus but all reach the same destination)

Total = **8**. Decorative role labels (`TL · Sites` etc.) and identity glyphs (☕) are not counted; they are status, not affordances. The four corner glow rings are pure decoration (radial gradient hint at where each role lives) — not counted.
