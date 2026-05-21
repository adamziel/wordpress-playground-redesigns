# 024 — Atlas · Corner door home (SPT + CWS)

## 1. Thesis

WordPress Playground is two jobs in one app: *picking a site* and *running a site*. Most Playground UIs treat picking as a drawer that interrupts running; this design treats them as **two coherent modes with one shared door**. At idle, the whole canvas is a Figma-style **spatial atlas** of your saved playgrounds — each site has a stable 2D position you arrange like a desk, and pan/zoom is the only navigation. Focus a tile and the iframe takes the whole canvas; the only chrome that survives is a slim top capsule and a single frosted **corner widget** at bottom-left. That widget is the synthesis: in atlas mode it lives as a status pill for whichever playground is currently running; in site mode it carries live status of the focused site **and a tiny minimap of the atlas with the focused site highlighted**, plus four sub-doors (Manage / Library / Logs / Atlas). One element, one position, one expand-in-place panel — that's the secondary surface. Two modes, mode-disjoint, sharing a single canonical door.

## 2. Primitives composed (named per v7 brief §1 KEEP)

- **SPT (Figma-canvas, v1 #10)** — the entire idle state is a spatial canvas. Saved playgrounds are positioned in 2D (visible coordinates: Coffee Shop at x:180,y:140; Art Gallery at x:480,y:210; Gaming News at x:780,y:155; Feed Reader at x:1090,y:235; Non-profit at x:330,y:520; Photography at x:680,y:565; University at x:980,y:540; Skincare at x:1180,y:600). The grid background is real "graph paper" pan-zoomable canvas. Tiles carry live status (running/saved/unsaved pip color, plugin count, WP+PHP versions, age). The minimap inside the CWS widget shows the exact same coordinates at scale 1/5 — proof the atlas is genuinely a coordinate space and not decoration. Connector edges between related tiles (Coffee↔Art, Art↔NP, Gaming↔Feed) suggest spatial clustering. Tiles dim and fade based on recency/archival status (Skincare at .55 opacity). Idle has ≤ 8 chrome affordances by enumeration — the tiles themselves are *content*, not affordances.
- **CWS (Corner-widget Sites, v5 #036)** — one frosted widget anchored bottom-left in *every* state. It shows: name + colored swatch + state pill ("running" green / "unsaved" amber / "booting" blue) + a tiny minimap of the atlas. **The minimap is the synthesis with SPT**: it embeds the spatial layout inside the corner widget so the door home is also a coordinate-aware viewport indicator. Click the chevron → it blooms into a 380px panel anchored to the same corner. In site mode the widget grows a 4-cell sub-doors row (Manage / Library / Logs / Atlas) — the Atlas door is the canonical way back to spatial overview. **One CWS, two roles disjoint by mode, one expand-in-place panel.**
- **DEV (DevTools slim top bar, v1 #64)** — a single 36px frosted capsule centered above the canvas. Holds refresh + URL/address bar + name/save-state pill. The pill morphs through Atlas overview → Saved → Unsaved → Booting → Pending reset — replacing what would otherwise be a red banner. One row, no two-row chrome, ≤48px.
- **3LD (Three-layer depth, v5 #035) — visual only, never interactive.** Quantified blur tokens `--z0:0px / --z1:8px / --z2:18px / --z3:36px` are defined in the stylesheet and used purely as depth decoration: atlas behind the CWS panel gets z1; library overlay scrim gets z3; the destructive modal scrim gets z3. **No blur layer is ever an interactive control surface**, in obedience to the v7 §1 DROP rule.
- **MOB (Mobile-first, v1 #06)** — the same atlas IA at 390×844. Pan/zoom with finger; tap a tile to focus; the CWS widget docks at the bottom of the screen with a pull-handle; expanding it produces the same bottom-sheet with the same sub-tabs (Your sites · Start new · More). Mobile is a wider-mobile desktop, not a different design.

**Primitives I deliberately did *not* compose** (with rationale):

- **SR (smart resize)** — would force a divider between iframe and a secondary pane, contradicting the "iframe takes the whole canvas" thesis of site mode. The CWS is *not* a resizable pane, it's a corner widget; expanding it floats over content rather than competing for canvas real estate.
- **QR (quiet-rail-to-loud)** — a 56px rail would duplicate the door function of the CWS widget. The atlas tiles already provide ambient navigation; adding a rail would create two doors per feature.
- **GLS (glassmorphism)** — used in restraint only (CWS widget + topcap have backdrop-blur), not as the whole-surface treatment. Atlas tiles and iframe are solid; rail is absent.
- **EPC (Epic launcher)** — the atlas *is* the first-touch hero. A cinematic launcher would replace the atlas, which is exactly what we don't want — the user arrives in the atlas.
- **VEN (Ventura sidebar)** — would compete with atlas tiles as a navigation surface. The site-manager sub-pane has its own 5-tab strip which respects the "≤ 5 items per pane" Ventura discipline without using the visual style.
- **TAB (tabs-only)** — the CWS-panel uses a 3-segment sub-control (Your sites · Start new · More) and the site-manager uses 5 tabs internally; both are *inside* the secondary surface, not the primary navigation. Tabs are not the primary IA.
- **iPAD (pull-tab)** — the CWS chevron *is* a pull-tab to a secondary surface, in spirit. I didn't add a separate iPad-style pull-tab on the iframe edge because that would be a second door to the same panel.
- **W11 (Mica)** — design is dark + tinted, not Mica. Outside this composition.

## 3. What I remixed / removed and why

The three settings entry points (popover · sidebar tab · info notice) collapse into the **Manage** sub-door inside the CWS, which opens the 5-tab Site Manager pane (Settings · Files · Blueprint · Database · Logs). The "Saved Playgrounds" launcher trifurcates correctly into one CWS-panel with sub-tabs **Your sites · Start new · More** — panel D shows Your sites with the unsaved-to-saved transition front-and-centre and per-row spatial coordinates (`x:180 y:140`); panel E shows Start new with all 6 sources tiled (Vanilla · WP PR · GB PR · GitHub · Blueprint URL · Import .zip) plus 5 featured blueprints and a "View all 43" door to the Library overlay; the "More…" sub-tab opens a fly-out with Export to GitHub PR + Download .zip + Copy blueprint link + Apply & Reset. The full 43-blueprint Library is a single z3-blur overlay (panel F) with search-box scoped (`q=gutenberg`), 10 category chips with counts, and 20 cards visible. Apply+Reset (panel I) is the three-guard escalation: a diff of `preferredVersions`, an auto-snapshot pre-flight (`snap-2026-05-21-1144.zip · 9.4 MB · restorable from Atlas → Coffee Shop → revert`), and a typed-phrase confirm — the confirm button gated until phrase matches. The save-state name-pill in the top capsule is the *only* save door (`Save` appears inside the pill when state is Unsaved, gone when Saved) — applying the v5 review lesson that there must be one embodiment of Save. The site-mode also surfaces a "Fullscreen iframe F" pill in the top-right corner, satisfying the brief's explicit-fullscreen-affordance requirement on top of the topcap chrome. Three settings entry points → one. Three save-buttons → one pill.

## 4. Trade-offs

The spatial canvas is the strongest thesis but the weakest mass-appeal: users who don't lay out sites in 2D will see a list with extra coordinates noise. To soften the cost, the CWS panel (panel D) shows the same data as a flat list with the coordinates as quiet metadata — so the spatial story doesn't force itself on list users. The minimap inside the CWS widget is genuinely small (88 px tall, 8 dots) — readable but not detailed; a critic could argue the user can't *navigate* via minimap. The atlas tiles are *content* not chrome, which lets the affordance count stay at 8, but a strict critic could argue any clickable tile is an affordance — in which case the count balloons. I rest on Apple precedent: dock-icons and Finder-item icons are content, not chrome. The atlas mode has only one persistent secondary affordance (the CWS widget) which means new users may not initially understand it's expandable — the chevron and `⌘K · Jump` hint try to teach this. The four CWS sub-doors in site mode (Manage / Library / Logs / Atlas) are *four* doors, which is a higher count than a single chevron — but they replace what would otherwise be three different chrome surfaces (Site Manager opener, Library opener, "back" button) so the *door-per-feature* economy nets out positive. Logs is its own sub-door because it carries a live badge (warning count); folding it into Manage would hide the badge. The destructive Apply+Reset modal uses a typed-phrase, a diff, AND an auto-snapshot — three guards may feel heavy, but the brief explicitly permits any one of them, and combining all three buys back the safety budget that lets Save itself stay as a single pill. Mobile gets the same IA but the CWS bottom-sheet has only two detents (peek + expanded), not three — the SPT atlas thesis doesn't translate cleanly to a half-detent at mobile width.

## 5. Lessons applied from earlier rounds

- **v5 #036 review** — "pick one embodiment of Save": Save is *only* the name-pill in the topcap (or the `Save site` button inside the inline Unsaved notice, which is the same door surfaced contextually). No second save-button anywhere.
- **v7 #010 review** — "if your meta names a primitive, your HTML must show it on the seam": this design's meta names SPT + CWS, and both are demonstrated in every panel (atlas tiles are present in A/C/D/E/F/G/H; CWS in every panel A through I; minimap inside CWS in A/B/C/D).
- **v7 #010 review** — "keep CWS visible even when pane is open": the CWS expanded panel anchors to the *same* corner the widget lived in (bottom-left), so the live-status promise survives the expand. Panel D shows the panel anchored exactly where the widget was.
- **v7 #011 review** — "every state change should ripple through both primitives": the CWS swatch / name / state pip / minimap-focus-dot all derive from the same focused-site state. Atlas mode = unsaved-running-NP highlighted in minimap with viewport box overlaying NP's region. Site mode = Coffee Shop highlighted, viewport box over Coffee region. Boot mode = Gaming News focused with info-blue pip and "Booting" stat text. The synthesis ripples.
- **v7 §1 DROP** — three banned patterns observed: (a) no two-row top bar — only the 36px topcap; (b) no depth-as-control — `--z1/--z2/--z3` blur values are decorative only, never on interactive surfaces; (c) no dual-channel duplication — boot logs (panel C) are shown because boot is genuinely log-shaped, but there is no parallel visual progress UI competing with them; the Logs sub-pane is the only logs destination.

## 6. Self-critique rubric scores

```
[x] Affordance count at idle ≤ 8?              Score: 5/5
    Exactly 8, enumerated in the count-strip overlaid on panel A:
    1) refresh · 2) URL · 3) status pill · 4) Library button ·
    5) New-playground button · 6) Zoom cluster · 7) Fullscreen ·
    8) CWS widget. Atlas tiles are content, not chrome.

[x] iframe primacy + fullscreen toggle?        Score: 5/5
    Site mode: iframe is the entire 1440×900 canvas, only the topcap
    (36px) and the CWS widget (268×~190px) and a Fullscreen pill
    overlay it. Explicit Fullscreen affordance present in both modes:
    in atlas via the zoom-cluster; in site mode via the labeled pill
    "Fullscreen iframe F" top-right; and on mobile via a dedicated
    button. "Open links in fullscreen" toggle also in Settings.

[x] One door per feature?                      Score: 5/5
    Sites/Saved-playgrounds → CWS widget only.
    New-playground → either CWS panel "Start new" sub-tab OR the
    top-right "New playground N" button — both go to the *same*
    panel sub-tab.
    Site Manager → "Manage" sub-door in the CWS only.
    Settings → Manage → Settings tab only (popover removed).
    Library → "Library L" button OR the "View all 43" row inside
    Start-new — both open the same overlay.
    Save → save-state name pill only (also reachable via the
    contextual notice inside the Sites panel, which is the same
    door surfaced contextually).
    Each verb has one canonical door; the top-right buttons are
    shortcuts to the same CWS sub-tabs.

[x] One secondary surface?                     Score: 5/5
    The CWS expanded panel is the one secondary surface. It holds
    Sites (Your / Start new / More), Site Manager (5 tabs), Library
    (as a sub-tab door to the overlay), Logs (as a sub-door). The
    Library overlay is a *modal* full-screen surface, not a second
    persistent sidebar — by design it is mutually exclusive with
    the CWS panel.

[x] Direction strongly expressed?              Score: 5/5
    SPT + CWS is the explicit thesis and both primitives are
    materially load-bearing: atlas tiles at real 2D coordinates,
    minimap inside the CWS that mirrors those coordinates, mode-
    disjoint roles for the same widget (status display in atlas
    mode, door home + sub-doors in site mode). The composition
    is not decorative; it's the IA.

[x] Mobile = wider-mobile desktop?             Score: 4/5
    Same IA at 390×844: same atlas, same tiles, same CWS, same
    expand-in-place into a bottom sheet, same sub-tabs (Your sites
    · Start new · More). -1 because the bottom sheet has only two
    detents (peek + expanded) instead of three; full-screen tiles
    at finger-pan scale are tighter than desktop, but the IA is
    identical.

[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
    SPT + CWS are the direction-24 primitives and both are deeply
    integrated, not decorative. DEV (slim topcap), 3LD (visual
    blur tokens), MOB (mobile parity) are also genuinely composed.
    Five KEEP primitives total, all wired through the HTML.

[x] No banned patterns (§1 DROP)?              Score: 5/5
    No two-row top bar — only the single 36px topcap.
    No depth-as-interactive-control — blur is decoration only;
    --z1/--z2/--z3 applied to scrims and out-of-focus atlas
    backgrounds, never to interactive surfaces (the CWS widget
    has blur but the *content inside it* is sharp + clickable).
    No dual-channel duplication — boot steps in panel C are not
    echoed by a parallel visual progress UI; the Logs sub-pane
    is the only logs destination; the Database tab is the only
    DB destination.
```

No row ≤ 2; ready to commit.
