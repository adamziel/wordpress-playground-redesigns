# WordPress Playground — Redesign Brief (v7)

> You are one of 10 designers producing one entry in a 40-design **synthesis** round (v7). The user has now seen v1 (100 designs) and v5 (50 refinements). v7 is the round that *composes the winning primitives* into sharper integrations.

Read the v1 brief at [`../DESIGN_BRIEF.md`](../DESIGN_BRIEF.md) for the full feature inventory. v5 constraints at [`../v5/DESIGN_BRIEF.md`](../v5/DESIGN_BRIEF.md) still apply. This document adds v7-specific constraints, naming what to keep, what to drop, and which primitives to compose.

---

## 1. What the user has now told us, explicitly

### KEEP — these primitives are validated by the user

| Source | What | What to keep |
|---|---|---|
| v1 #06 Mobile-first | "Desktop = wider phone" | One design works at all widths; bottom sheets are good. |
| v1 #10 Figma-canvas | Spatial memory | Sites have *position*, not just list order — but show ≤ 6 affordances at idle. |
| v1 #13 Epic launcher | Cinematic hero, one decisive verb | Big hero for first-touch; one verb (LAUNCH/Save) not five timid ones. |
| v1 #14 Ventura Settings | Category sidebar with search | Clean nav rail, but **fewer items per pane** (5 max). |
| v1 #15 Win11 Settings | Mica restraint, generous whitespace | But **must** add a visible "fullscreen iframe" affordance. |
| v1 #38 Glassmorphism | Iframe IS the wallpaper | Ambient color sampled from content. |
| v1 #53 Tabs-only | One nav primitive | Tabs are clean. |
| v1 #55 iPad multitasking | Pull-tab swaps secondary content | One secondary surface. |
| v1 #64 DevTools | Slim browser-style top bar | ≤48px, status-pill instead of red banner for unsaved. |
| **v5 #018 Quiet-rail-to-loud** | **IA + interactions** (NOT design) | 56px rail → expand into one pane swappable by content. **Reuse this IA pattern with a different visual style.** |
| **v5 #023 Smart resize** | **Full package** | Two panes; whichever you interact with grows; snap to 35/65, 50/50, 60/40, 75/25; visible momentum gauge; no drag handle. **This entire primitive is gold — reuse it.** |
| **v5 #035 Three-layer depth** | **Visual style only** (NOT interactions) | Quantified blur as hierarchy (0px → 8px → 18px → 36px). Use as decoration for depth, never as an interactive control. |
| **v5 #036 Corner-widget Sites** | **Sites widget interaction** | A small frosted widget in a corner that simultaneously shows live status (current site name + state) AND is the canonical door to its function. Click → expands inward as a panel anchored to that corner. |

### DROP — explicitly not wanted

| Source | What | Why not |
|---|---|---|
| v5 #030 Two-row top bar | Two horizontal rows of chrome | User explicitly disliked. Don't split chrome across two persistent rows. |
| v5 #035 Three-layer depth | The interactions (depth-as-control) | Use depth for visual hierarchy only, never as the interaction surface. |
| v1 #29 Console + visual hybrid | Dual-channel (visual UI + command echo) | Duplication unjustified — pick one channel. |

## 2. The principles (apply ALL)

Inherited from v5, sharpened:

1. **iframe primacy + explicit fullscreen toggle** — visible, one-click/one-key.
2. **≤ 8 always-visible affordances at idle.** Count them in your README.
3. **One door per feature.** No triple-entry-points.
4. **One secondary surface that swaps content.** Not multiple sidebars.
5. **High visual fidelity.** Real typography, real spacing, real icons.

New for v7:

6. **Compose, don't invent.** Your README must name AT LEAST ONE primitive from §1 KEEP and explain how your design uses it. Composition (two or three primitives integrated coherently) is the v7 thesis.
7. **No two-row top bars.** Chrome must be a single slim bar, or no bar at all.
8. **Depth (blur layers) is visual hierarchy only.** Never make a blur-layer the interactive control surface.
9. **No dual-channel duplication.** Don't add a terminal that echoes what the visual UI does.
10. **Visible smart-resize gauges or focus indicators are encouraged** if you use that primitive — make the IA legible.
11. **A "Sites widget" treatment is encouraged.** A small persistent live-status widget that doubles as a door (see v5 #036) is a strong pattern.

## 3. Hard requirements (a critic will check)

- The five Site-Manager tabs (Settings, Files, Blueprint, Database, Logs) all reachable with visible content.
- All six "Start a new Playground" sources visible: Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip.
- Full 43-blueprint browser with search + 10 category filters (≥ 16 cards visible).
- Additional actions menu surfaces *both* "Export to GitHub PR" and "Download .zip".
- "Unsaved Playground" → save state transition is visible.
- Three demonstrated states minimum: working session, booting, launcher/library open.
- Realistic mock data: ≥ 3 saved playgrounds, real blueprint JSON, realistic PHP log lines.
- Both 1440×900 desktop and 390×844 mobile rendered.
- Destructive Apply+Reset uses typed-phrase confirm OR diff sheet OR auto-snapshot (not a small red banner).
- Single self-contained `index.html`. Google Fonts + icons via CDN are fine.

## 4. Self-critique rubric — MANDATORY

Score yourself 1-5 honestly. Save the scores in your README.

```
[ ] Affordance count at idle ≤ 8?              Score: __/5
[ ] iframe primacy + fullscreen toggle?        Score: __/5
[ ] One door per feature?                      Score: __/5
[ ] One secondary surface?                     Score: __/5
[ ] Direction strongly expressed?              Score: __/5
[ ] Mobile = wider-mobile desktop?             Score: __/5
[ ] Primitive(s) from §1 KEEP named & used?    Score: __/5
[ ] No banned patterns (§1 DROP)?              Score: __/5
```

If any row ≤ 2, revise before commit.

## 5. Output

Folder `v7/designs/NNN-{slug}/` with `index.html`, `README.md`, `meta.json`. README must include:
1. **Thesis** (one paragraph).
2. **Primitives composed** — name each §1 KEEP item you used and *how*.
3. **What you remixed / removed and why** (one paragraph).
4. **Trade-offs** (one paragraph).
5. **Self-critique rubric scores** (block above).

Then `bash v7/scripts/commit_and_push.sh "Design v7 #NNN — Title" v7/designs/NNN-{slug}`.
