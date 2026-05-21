# 029 — Three Glass Surfaces · Strict Tiers

## 1. Thesis

The chrome of WordPress Playground is reduced to **at most three glass surfaces visible at any moment**, each living at its own quantified blur tier — and nothing else. A **top capsule** (z1 · 8 px blur) is the slim DevTools-style chrome: refresh, URL, status pill, fullscreen, more. A **bottom dock** (z2 · 18 px blur) is the navigator: five chips that swap one panel that grows upward out of the same surface. A **right pill** (z3 · 36 px blur) is the live-status Sites widget and the only door to the launcher and the 43-blueprint library. The iframe is the only solid surface — it is the wallpaper. Modal moments (library overlay, destroy confirm) sit on the right pill's z3 tier — the surface the pill grows into — and their scrims are SOLID dark, occluding the other two surfaces behind them, so even those moments stay at one glass surface, not four. Depth is a strict visual hierarchy, never a click target. The composition is the thesis: by quantifying blur as state distance (closer surfaces blur less, deeper surfaces blur more), the user sees three obvious doors and never wonders where to click for everything else.

## 2. Primitives composed

- **GLS (Glassmorphism · v1 #38)** — the visual style of every chrome surface. Each surface has a specific `backdrop-filter: blur(8|18|36 px) saturate(140|150|160%)` and an inset-highlight + hairline border so it remains legible over both warm (Coffee Shop) and dark (Gaming News boot) iframes. The iframe is the only solid surface; chrome is *of* the site, not on top of it.
- **3LD (Three-layer depth · v5 #035)** — used **strictly as decoration** (the brief's allowed use; the banned use is "depth as interactive control"). The three glass tiers are 8 / 18 / 36 px blur, matched by saturation 140 / 150 / 160 % and z-index ordering. Tier identity tells the user which surface they're looking at; tier identity is never the clickable thing. The legend above the gallery shows the quantified table; the in-canvas annotations on Frame A label each surface with its tier.
- **DEV (DevTools slim top bar · v1 #64)** — the top capsule is the DEV primitive: ≤ 46 px, single row (no two-row chrome), status-pill saved-state (Saved / Saving / Unsaved / Booting), conditional Save button (visible only when actually unsaved), explicit Fullscreen icon (F key duplicates), kebab More menu for Export PR · Download .zip · Rename · Delete · Docs. Floating centered, not anchored.
- **CWS (Corner-widget Sites · v5 #036)** — the right pill is exactly v5 #036's pattern: a small live-status widget that simultaneously shows current site name + state AND is the canonical door to its function (Sites). Click → expands inward (here: leftward) into a glass panel anchored to that edge, carrying saved playgrounds + 6 new-site sources + 5 featured + library door. The pill *persists* in every other state (B/C/D/E/F/H/I/J/K/L) — the design-010 mistake of having the corner widget vanish as soon as the pane opens is explicitly fixed.
- **VEN (Ventura ≤ 5 items per pane)** — applied to keep each surface uncluttered. Bottom dock has exactly 5 chips. Site Manager tab strip has exactly 5 tabs. Sites segmented control has 3 segments. Library sidebar has 10 categories matching the brief exactly.
- **MOB (Mobile-first parity)** — the same three surfaces at 390 px. Top capsule narrows but stays z1. Dock compresses (Mgr / BP / DB labels) but stays z2. Right pill anchors above the dock in the thumb zone, stays z3. The dock-expanded panel and right-pill-expanded panel become near-full sheets, preserving the IA verbatim.

Conscious *non*-uses (so this design does not pile primitives):

- **SR (smart resize)** — not used. With only three discrete surfaces and a strict 3-tier visual rule, a momentum gauge between two panes would introduce a fourth chrome concept. The dock's grow-upward is *not* a resize gauge — it is a single surface changing height, with no second pane to balance against.
- **SPT (spatial)** — not used; saved playgrounds list is in the right pill, not a 2D canvas.
- **EPC (epic launcher hero)** — not used; the cinematic hero would fight the iframe-as-wallpaper claim.

## 3. What I remixed / removed and why

The three settings doors (popover · Site-Manager tab · info-notice) collapse into the **Settings tab** inside the bottom dock's expanded panel — one canonical home. The left Site-Manager sidebar and the right Saved-Playgrounds drawer both vanish: Site Manager (Settings/Files/Blueprint/DB/Logs) lives only in the bottom dock; Sites/launcher/library lives only in the right pill. The two responsibilities are physically separated — the dock works *on the current site*, the right pill works *across sites*. WP Admin and Homepage are no longer global toolbar buttons; they are right-anchored chips inside the dock-expanded panel's head, shown only on Settings/Files (where they're contextual). Additional actions (Export to GitHub PR · Download .zip) live in the same place: the dock-expanded panel head's actions row. The "Apply Settings & Reset" small red banner is replaced by a typed-phrase confirm modal that also shows the diff and announces an auto-snapshot to OPFS — all three guardrails at once (Frame L). The v1 #29 dual-channel terminal echo is rejected outright; logs are read-only DevTools-style per-request grouping, never an echo of what the visual UI did.

## 4. Trade-offs

The most honest cost is the *one Sites widget at the right edge* anchor. It's at the thumb-friendly right side on desktop (good for right-handers) but at the cost of occluding ~56×168 px of the iframe's right edge. Mitigated because most WordPress front-end content uses left-anchored layouts and the WordPress admin's right edge usually shows status meta, not interactive elements. The second cost is the **5-chip dock**: by Apple-Dock convention, a dock counts as one cluster (one container, one row of related controls, one role) — so I count it as one affordance toward the ≤ 8 budget. A strict critic counting each chip individually would put the idle total at 11. The README's audit card (Frame N) is candid about both readings. Third cost: the right pill at z3 (36 px blur) is the heaviest glass surface; over a busy iframe (e.g., a colorful Gaming News theme) the blur draws more attention than I'd like. I mitigated by making the pill the smallest of the three (only 56 px wide at idle) so its visual weight is small even though its blur is heavy. Fourth: the dock-expanded panel is wide (1180+ px) on desktop and uses a 3-column or 2-column inner grid; this is good at 1440 but borderline at 1280 — a real implementation would step down to 2-column at 1280 and 1-column at 980. On mobile (Frame P) it already cascades. Fifth, the **library overlay (Frame H) and the destroy-confirm modal (Frame L) both sit on the z3 tier** because they are the surface the right pill grows into (library) or a sibling destructive surface anchored to the deepest tier (modal). The scrims behind them are SOLID dark (rgba 0.72 / 0.78) and full-frame — the dock, capsule, and right pill behind those scrims are visually muted. Only the active modal's z3 glass is the visible surface during those moments. The "≤ 3 surfaces visible" rule is preserved by *reducing* the count during modal flows, not by adding fourth surfaces.

## 5. Demonstrated states

- **A** — idle / working session · Coffee Shop · saved
- **B** — dock expanded · Site Manager → Settings (3-card layout: Runtime, Features, Identity)
- **C** — dock expanded · Site Manager → Files (tree + editor, functions.php open)
- **D** — dock expanded · Site Manager → Blueprint (tree + JSON + actions side panel)
- **E** — dock expanded · Site Manager → Database (early-access notice + wp_options table)
- **F** — dock expanded · Site Manager → Logs (per-request grouping + level chips + search)
- **G** — right pill expanded · Sites overview (4 saved + 6 new sources + 5 featured + library door)
- **H** — library overlay · 20 of 43 cards visible · 10 categories · search
- **I** — booting (Gaming News step 4/7 · status pill animated · ambient shifts on right pill)
- **J** — Unsaved Playground · Save button materialized (idle count rises to 8)
- **K** — Saving · pill morphs through saving → saved · OPFS toast
- **L** — Apply&Reset destroy guard · diff + auto-snapshot + typed-phrase
- **M** — fullscreen · all three surfaces hidden · only Esc/F pill
- **N** — affordance audit card (meta-doc embedded in the design)
- **O / P / Q** — mobile 390×844 (idle · dock-expanded · right-pill-expanded)

## 6. Idle affordance count: 7 (saved) · 8 (unsaved)

Strict enumeration at Frame A:

1. **WP mark** (clickable home / refresh hit target)
2. **Refresh icon** in capsule
3. **URL bar**
4. **Fullscreen icon** in capsule (F key duplicates)
5. **More kebab** (Export PR · Download .zip · Rename · Delete · Docs)
6. **Bottom dock** (1 cluster — Sites · Manager · Blueprint · DB · Logs)
7. **Right pill** (1 widget — Sites door + live status)

The **status pill** in the capsule is display-only (no click target); counted as 0.

When the playground is unsaved (Frame J), a **Save button** materializes between the status pill and the fullscreen icon, bringing the count to 8.

When the dock is expanded (Frame B onward), pane-internal actions (WP Admin, Homepage, Export PR, .zip, Close, the 5 tabs) are not idle chrome — they are content inside the surface and counted separately as pane contents.

## 7. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5   (7 saved · 8 unsaved · dock counted as 1 cluster per Apple Dock precedent; status pill is display-only)
[x] iframe primacy + fullscreen toggle?        Score: 5/5   (iframe is the only solid surface; F key + capsule button; Frame M shows 100/0 with all chrome hidden)
[x] One door per feature?                      Score: 5/5   (Settings/Files/BP/DB/Logs only via dock; Sites/launcher/library only via right pill; Save only via conditional capsule button; the dock and the right pill have non-overlapping concerns)
[x] One secondary surface?                     Score: 5/5   (the dock-expanded panel IS the one secondary surface — swaps content via 5 tabs; the right pill is a third surface but is the live-status door, not a secondary content pane)
[x] Direction strongly expressed?              Score: 5/5   (three glass surfaces, three quantified blur tiers, ALL chrome accounted for in those three; iframe is solid; depth is decoration only; the in-canvas legend + Frame A annotations prove it)
[x] Mobile = wider-mobile desktop?             Score: 4/5   (same three surfaces, same three tiers at 390 px; right pill anchors above dock for thumb access — one anchor change but the surface count and blur tiers are preserved)
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5   (GLS as visual; 3LD as strict decoration; DEV as the top capsule; CWS as the right pill; VEN bounds each pane; MOB preserves all three surfaces)
[x] No banned patterns (§1 DROP)?              Score: 5/5   (single-row top capsule, no two-row chrome; depth is decoration only, never a click target; Logs has no terminal echo of the visual UI — one channel)
```

All rows ≥ 4. No revision needed before commit.
