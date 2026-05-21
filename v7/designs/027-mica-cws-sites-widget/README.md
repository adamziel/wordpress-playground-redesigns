# v7 #027 — Mica · Sites Widget

**Direction:** W11 Mica + CWS Sites widget. Win11 Settings.app generous-whitespace category sidebar (5 categories only). One canonical Sites widget in a corner. Big visible "Open fullscreen" button on the Live Preview category. Fixes v1 #15's missing affordance.

## 1. Thesis

Windows 11 Settings.app applied to WordPress Playground. A five-row Mica category sidebar on the left (the only navigation surface), a separate canonical Sites widget pinned to the top-left corner (the sole door to launcher/library/saved), and a *big visible* "Open fullscreen" button on the Live Preview category — the literal materialization of the v1 #15 critique that "Win11 restraint must add a visible fullscreen iframe affordance." Mica is applied uniformly as a CSS token system to every chrome surface: `--mica-base` on the top capsule, `--mica-sidebar` on the category rail, `--mica-card` on the CWS widget, panel, library overlay, mobile sheet, and mobile bottom nav. The iframe really is the wallpaper sampled through the glass — three wallpaper variants (warm, fresh, violet) demonstrate the sampling across panels.

## 2. Primitives composed (the v7 §1 KEEP list)

| Code | KEEP item | How this design uses it |
|---|---|---|
| **W11** | Win11 Mica restraint, generous whitespace, must add visible "fullscreen iframe" affordance | **Headline.** Mica material (`backdrop-filter: blur(40px) saturate(180%)`) applied as a CSS token system to *every* chrome surface — sidebar, top capsule, CWS, panel, library overlay, mobile sheet, mobile bottom nav. The five-row Settings.app category sidebar is the IA frame. The **big "Open fullscreen" hero button** on the Live Preview category (panel A) is the v1 #15 fix — a category-page CTA, not a tiny icon hiding in the toolbar. A second Fullscreen button persists in the top capsule for one-click access. |
| **CWS** | Corner-widget Sites — small frosted widget showing live status, sole door to its function, expands inward as a panel anchored to its corner | **Co-headline.** A separate Mica capsule pinned to the **top-left corner** of the viewport (above the sidebar), persistent across **every panel** (A · B · D · E · F · G · H · M). It shows live status (name + green/amber dot + WP/PHP/memory line) and is the **sole door** to Sites/saved/new/library. Clicking expands DOWN from the corner into a 460×740 Mica panel with a blue corner-anchor pin marking its origin. Three tabs (Your sites · Start new · Featured) cover saved + 6 sources + featured + "View all 43" door. |
| **VEN** | Ventura sidebar — clean nav rail, ≤ 5 items per pane | **Restraint.** Sidebar has **exactly 5 rows** (Live Preview, Site Manager, Blueprint Library, Your Playgrounds, Settings). Site Manager has 5 tabs (Settings, Files, Blueprint, Database, Logs). CWS panel has 3 segments. Library overlay has 10 category chips. The ≤5 rule is respected on every secondary surface. |
| **DEV** | Slim browser-style top bar (≤ 48 px), status-pill for unsaved | **Slim bar.** Top capsule is a single **40 px row** holding refresh, address, save-state pill (Unsaved / Saving / Saved with morphing color), Fullscreen button with `F` kbd hint, More kebab. Never a second row. Lives between the sidebar and the right edge of the viewport. |
| **MOB** | Mobile-first, "Desktop = wider phone" | **Parity.** Same IA on mobile: the 5-row sidebar **rotates 90° to a 5-cell Mica bottom nav** with the same gradient icon squares. CWS becomes a top capsule still pinned to the top (same role: identity + door). Sites expand as a top sheet; Site Manager opens as a bottom sheet at multiple detents. Three mobile screens render Live Preview, Sites expanded, and Site Manager → Logs. |

I am **deliberately not** composing 3LD (depth-as-control), SR (smart resize), or GLS (glassmorphism) — the direction names W11 + CWS, and Mica is already the visual material. Composing additional primitives would dilute the thesis. (Lesson from review #013: "compose, don't pile up.")

Panels rendered: **A** Live Preview (saved idle), **B** CWS expanded (launcher), **C** Blueprint Library overlay, **D** Site Manager · Settings + Apply+Reset, **E** Site Manager · Blueprint, **F** Site Manager · Logs, **G** Site Manager · Database (different wallpaper), **H** Booting (Gaming News), **J** Unsaved Playground (save transition), **I** Fullscreen, **K** Affordance / door / banned-pattern audit, **M** Mobile (3 scenes).

## 3. What I remixed / removed and why

I remixed the **v5 #018 quiet-rail-to-loud IA** into a **Settings.app category sidebar** rather than a 56-px icon rail. The expansion is not into a single content pane next to the rail — it's into the full pane area to the *right* of the sidebar, with the sidebar staying as the persistent nav. This is closer to Windows 11 Settings.app (or macOS Ventura System Settings) than to the v5 #018 quiet rail. I removed all three settings entry points except the Site Manager → Settings tab (the sidebar's `Settings` row is a deep-link into the same Mica pane with the same tab pre-selected). I removed the right-side launcher drawer entirely — the CWS widget owns launcher/saved/new/featured, and the Library overlay sheet owns the 43-blueprint browser. The Apply+Reset escalation is **all three protections at once** (typed-phrase + JSON diff + auto-snapshot) instead of just a red banner — fixing the v1 §4 "destructive only marked with a small red banner" pain point.

## 4. Trade-offs

The five-row sidebar consumes a fixed 264 px of horizontal space (about 18% of viewport at 1440 wide) on every panel except Fullscreen. That's more chrome than the QR-rail designs (10/013) which use 56 px. The defense: the sidebar's rows carry **labels + descriptions** (Settings.app convention), making the IA self-documenting — new users don't have to hover icons to learn what each room contains. The Sites widget at top-left occludes about 264×48 px of iframe content; for `wp-admin` views this overlaps with the admin bar (acceptable), but for full-bleed front-end views it costs some hero content. The compromise is the Fullscreen button: one click and the entire viewport is the iframe. A second trade-off is the duplicate door for Library (sidebar row + CWS "View all 43"). Both anchors open the same overlay sheet, framed as "two anchors, one destination" — a strict critic could call this dual-channel; I judged that one of the v1 brief pain points is "users miss that Saved Playgrounds is also where you browse 43 blueprints," so a second visible door is a discoverability fix not a duplication.

## 5. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5
    8 at idle (panel A audit, panel K enumeration). Sidebar's 5 rows count as 1 nav surface per Settings.app convention.

[x] iframe primacy + fullscreen toggle?        Score: 5/5
    Iframe is the Mica wallpaper. TWO fullscreen affordances visible: (a) Fullscreen button in slim top bar with F key, (b) big "Open fullscreen" hero button on Live Preview category. Panel I shows the fullscreen state with chrome hidden + a tiny restore pill.

[x] One door per feature?                      Score: 4/5
    Save: 1 door. Each Site Manager tab: 1 door. Sites/launcher/saved/new/featured: 1 door (CWS). Library: 2 anchors (CWS "View all 43" + sidebar "Blueprint Library" row), framed as discoverability fix. Settings: 2 depths (sidebar row + Site Manager tab) — documented. Fullscreen: 2 anchors (top bar + hero), same verb.

[x] One secondary surface?                     Score: 5/5
    The "pane" to the right of the sidebar is the single secondary surface — its content swaps based on the selected sidebar row. CWS panel and Library overlay are modal escalations, mutually exclusive.

[x] Direction strongly expressed?              Score: 5/5
    Every clause of the direction materializes: Win11 Settings.app generous-whitespace sidebar (yes, 5 rows with icon-and-label pills), exactly 5 categories (yes), one canonical Sites widget in a corner (yes, top-left), big visible "Open fullscreen" button on Live Preview (yes, the hero CTA in panel A). Fixes v1 #15 — explicit and visible.

[x] Mobile = wider-mobile desktop?             Score: 5/5
    Same IA: sidebar rotates 90° to bottom nav with the same icon-and-label cells. CWS becomes a top capsule (same role). Sites expand as a top sheet, Site Manager as a bottom sheet with detents. Same Mica material across all surfaces.

[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
    Five named: W11 (headline), CWS (co-headline), VEN (≤5), DEV (slim bar), MOB (mobile parity). Each is materialized in CSS tokens or DOM structure, not just rhetoric.

[x] No banned patterns (§1 DROP)?              Score: 5/5
    No two-row top bar (single 40px capsule). No depth-as-interactive-control (Mica blur is uniform hierarchy, never the click target). No dual-channel duplication (no terminal, no command echo; the Logs tab is a one-way reader with file:line refs).
```

Affordance count is exactly 8 at the budget ceiling — same accounting convention as design #013. No row falls below 4. No revisions needed before commit.
