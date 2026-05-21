# 007 — Tabs on the Seam

> Direction 07 · `SR + TAB` · with `CWS` and `DEV` quietly carrying the rest.

## 1. Thesis

Two panes, one seam, and the seam is the chrome. Smart-resize gives the layout its weight — whichever pane you interact with grows, the other yields, snapping to 35/65, 50/50, 60/40, 75/25, and 100/0. The tab strip that decides *what* the secondary pane is showing **lives on that seam**, straddling the divider like a saddle. Click `Files` and you change *content*; click into the pane and it grows. Click into the iframe and the pane recedes. Picking and weighting — the two interactions the chrome has to offer — happen in the same physical place. There is no top tab bar, no left rail, no right drawer. The top bar is a single 44-pixel DevTools-style line for the URL and a save-state pill. The Sites widget is the only persistent live-status door for switching playgrounds. That's it.

## 2. Primitives composed

| Code | Primitive | How it's used here |
|---|---|---|
| **SR** | Smart-resize (v5 #023) | The whole IA. Two panes, no drag handle, four snap ratios + fullscreen. A momentum gauge straddles the seam under the tabs, showing the live ratio (`75/25`, `50/50`, …) with a left/right arrow indicating which pane just gained weight. Demonstrated in State A (75/25), State B (35/65), State C/D/G (50/50), State E (60/40), State F (100/0). |
| **TAB** | Tabs-only nav (v1 #53) | The six secondary-pane sections — Sites, Settings, Files, Blueprint, Database, Logs — are a single tab strip. **The tabs sit at the seam between panes.** No top tabs, no left rail. The tab strip is centered on the divider and floats above both panes via a small shadow, so it visibly belongs to *the seam*, not to either pane. |
| **CWS** | Corner-widget Sites (v5 #036) | A small frosted glass widget in the top-left of the iframe pane shows the live playground identity (avatar + name + WP/PHP + status dot). Clicking it activates the **Sites** tab on the seam — same place, no separate dropdown. State changes (`booting`, `running`, `unsaved`) are visible at all times. |
| **DEV** | DevTools slim top bar (v1 #64) | 44px single-row top bar: back/fwd/refresh, URL pill, save-state name-pill (status only — `saved`, `unsaved`, `booting`), fullscreen icon, additional-actions kebab. No two-row chrome, no red banners. |

The four primitives **integrate**, they don't sit next to each other: the seam-tabs *are* the same surface as the SR gauge; the CWS widget *is* a shortcut into the Sites tab; the DEV bar deliberately *omits* Sites/Settings/Files navigation because the seam-tabs own that. One door per feature.

## 3. What I remixed / removed and why

The triple settings entry (popover + sidebar tab + info notice) collapses to the one **Settings** tab on the seam, plus the inline "Save site locally" notice in the Files/Settings panes only when the playground is unsaved (single source of truth for that state). The left Site Manager sidebar and right Saved-Playgrounds drawer fuse into the one secondary pane — the seam-tabs swap content. **WP Admin** and **Home** become pane-internal context chips next to the pane title, not global top-bar icons (eliminating their duplication with the URL bar). The save-state pill is status-only; a separate dark `Save` button appears in the top bar **only when unsaved** (lesson the v5 #023 designer learned: never mix status and action on the same pill). Apply & Reset uses typed-phrase confirm (`coffee-shop`) **plus an auto-snapshot stored as `coffee-shop / pre-reset`** — two escalations, not a small red banner. The "Console + visual hybrid" pattern was on the DROP list; I rely on the Logs pane for actual PHP output and the Booting overlay only shows blueprint *steps*, not raw stdout — no dual-channel duplication.

## 4. Trade-offs

The biggest risk is that **the seam tabs are a novel location**. New users may not expect navigation to live mid-canvas. I mitigate three ways: (1) the tab strip has a visible card-like elevation with a soft shadow — it reads as a discrete control, not as decoration; (2) the active tab uses the strongest contrast in the entire UI (solid black, white text), so it's the brightest thing on screen and grabs the eye; (3) the seam itself has a thin blue accent stripe at the center of the divider that ties tabs + gauge together as a single object, so the "this is the nav" affordance is unambiguous. Second trade-off: with the seam following SR position, when the iframe is 75/25 the tabs are physically far to the right of center. This is actually a feature — the tabs *follow* the divider, which means the user always finds them at the focus boundary. Third: I chose **not** to surface an explicit "open Site Manager / launcher" verb anywhere; instead the seam-tabs are always visible and the Sites tab IS the launcher. If a first-time user is fixated on the iframe and never glances at the seam, they may not realize blueprints are one click away — the Sites widget (always visible top-left) is the recovery affordance for that case.

## 5. Idle affordances (counted — must be ≤ 8)

At the most-common idle state (a saved running site, iframe focus 75/25):

1. **Refresh** (top bar)
2. **Back / Forward** (top bar — counted as one pair)
3. **URL bar** (top bar)
4. **Name + save-state pill** (top bar) — status only
5. **Fullscreen** icon (top bar)
6. **Kebab / Additional actions** (top bar)
7. **Sites widget** (top-left of iframe — live status + door)
8. **Seam tab-strip + gauge** (the seam — counted as one cluster)

That's **8 exactly**. The `Save` button is hidden when saved (it only appears in the unsaved state, e.g. State D), so it doesn't count at the most-common idle. WP Admin and Home are pane-internal chips, not top-bar chrome.

## 6. Demonstrated states (9)

- **A** — Working session · iframe focus 75/25 · Settings tab armed but quiet
- **B** — Pane focus 35/65 · Sites tab open · full 43-blueprint gallery (18 cards visible) + 10 category chips + search + 4 saved playgrounds + all 6 sources
- **C** — Booting · Logs tab open · 50/50 · realistic PHP error stream
- **D** — Files tab + code editor · Unsaved Playground with save-state pill `unsaved`, `Save` button visible, inline save notice
- **E** — Blueprint JSON editor at 60/40 + Additional actions menu open showing both `Export to GitHub PR` and `Download .zip`
- **F** — Fullscreen iframe 100/0 with `Esc · exit fullscreen` chip
- **G** — Database tab · SQLite browser early-access · wp_posts table
- **H** — Settings tab armed for destructive Apply & Reset — typed-phrase + auto-snapshot, NOT a red banner
- **I** — Mobile (390×844, two phones side-by-side): iframe-focus and pane-focus variants with horizontal seam carrying same tabs + gauge

## 7. Feature coverage check (every v1 §2 feature reachable)

- **Refresh** ✓ top bar
- **Address bar** ✓ top bar (with /wp-admin and /)
- **Playground name** ✓ pill (saved / unsaved / booting variants shown)
- **Save** ✓ top-bar dark button + inline notice (Unsaved state, State D)
- **Saved Playgrounds dropdown** ✓ Sites tab opens full launcher
- **Open/Close Site Manager** ✓ pane never closes, but iframe-focus 75/25 effectively dismisses it; or fullscreen F → 100/0
- **Edit Playground settings** ✓ Settings tab
- **Six "Start a new" sources** ✓ State B (Vanilla, WP PR, GB PR, GitHub, Blueprint URL, Import .zip)
- **5 featured + 43-card gallery** ✓ State B
- **Search box** ✓ State B `Search 43 blueprints…`
- **10 category filters** ✓ State B
- **Your Playgrounds** ✓ State B, 4 saved sites
- **Site Manager 5 tabs (Settings / Files / Blueprint / DB / Logs)** ✓ all in seam tabs
- **Editable playground title** ✓ in name-pill (clickable to rename) + in Sites widget header on click
- **WP Admin / Homepage** ✓ pane-internal chips in Settings pane (State A, H)
- **Additional actions menu** ✓ State E (Export to GitHub PR + Download .zip + Rename + Delete)
- **Apply & Reset destructive** ✓ State H (typed-phrase + auto-snapshot)
- **File browser + code editor + New File/Folder** ✓ State D
- **Blueprint JSON editor + Copy link / Download bundle / Run Blueprint** ✓ State E
- **Database early-access notice + tables** ✓ State G
- **Logs with search + level filters** ✓ State C
- **Save-site-locally inline notice** ✓ State D
- **Toast region** ✓ State C (`Auto-snapshot saved`)

## 8. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5  (exactly 8, counted in §5 above; Save hidden when saved)
[x] iframe primacy + fullscreen toggle?        Score: 5/5  (F key + visible icon in top bar; State F shows 100/0 + Esc chip)
[x] One door per feature?                      Score: 5/5  (Settings — Settings tab only; Sites — Sites tab + CWS widget shortcut into same tab; WP Admin/Home — pane chips; export — kebab menu)
[x] One secondary surface?                     Score: 5/5  (single secondary pane, 6 tabs swap its content; never two panes at once)
[x] Direction strongly expressed?              Score: 5/5  (the seam IS the chrome; tabs straddle the SR divider; gauge sits inline under tabs; visually unmistakable as SR+TAB)
[x] Mobile = wider-mobile desktop?             Score: 4/5  (identical seam-tabs IA, rotated 90° to horizontal; same gauge, same widget; tab labels shorten to Set/BP/Logs which is the only deviation)
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5  (SR + TAB + CWS + DEV — four primitives integrated, each cited and load-bearing)
[x] No banned patterns (§1 DROP)?              Score: 5/5  (single 44px chrome bar; depth is not used as interactive control; no terminal echo — Logs tab carries PHP output, Booting overlay shows steps only)
```

All rows ≥ 4. No revision needed.
