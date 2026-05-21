# 037 — HUD glass

## Thesis

WordPress Playground rendered like a fighter-jet heads-up display. The iframe is the **only solid thing on the screen** — everything else is glass that *materializes* (blur 0→22 px, scale .96→1) on any mouse-move and *dissolves* (blur 0→8 px, opacity 1→0) two seconds after the last move. Where #011 (auto-hide HUD) anchors chrome to the four edges, **037 floats it**: four detached glass capsules — a top URL pill, a left site-cluster, a right SiteManager capsule, a bottom version+fullscreen dock — hover above the iframe at the cursor's natural reading positions. The iframe never shrinks, never gets cropped, never has chrome touching it. A single 8 px corner pulse (saved=green, unsaved=amber, booting=blue, pulsing 2 s heartbeat) is the only thing that survives dissolution — the permanent hint that the design exists. On first reveal after page load, a one-shot teaching layer labels each glass capsule for 1.5 s (URL · NAME · SAVE / YOUR SITES / SITE MANAGER / VERSION · FULLSCREEN), then collapses to icons. Press **H** to lock HUD visible, **F** for absolute fullscreen, **Esc** to exit.

## What I merged, removed, why

The three v1 settings entry points (popover, sidebar tab, info-notice) collapse into **one canonical home**: the Site Manager · Settings tab summoned by the right capsule — and the "Save site locally" inline notice becomes the Apply&Reset card's recovery affordance instead of a third door. The Saved Playgrounds dropdown, 6 "Start new" sources, and the 43-blueprint gallery merge into **one Launcher pane** opened by the left cluster's "+" button (or any avatar's right-edge add-affordance), with three tabs inside (Your sites · Blueprints · Start new). Save lives only in the name chip as a colored save-pill — amber+"Save" when unsaved, green+dot when saved — there is no separate Save button. WP-admin and Homepage shortcuts collapse from the toolbar into the Site Manager header (where they're contextual to the site you're managing). Export to GitHub PR and Download .zip live both in the Site Manager header CTAs (contextual) and in the top-pill kebab menu (global) — *that's still one door because they execute the same code path*; the dual surface is for users who think "I want to export this site" (header) vs "I want a global action menu" (kebab). The bottom dock holds only version (passive text), fullscreen (F), and keep-HUD (H) — keyboard hints written into the buttons themselves. The right capsule's five icons are deep-links into the same pane (one secondary surface, swappable content via its tab strip).

## Trade-offs

HUD-glass trades discoverability for restraint and primacy. New users may not realize chrome exists at all — the corner pulse + one-shot teaching flash compensate, but the gesture is harder than #011's mouse-to-edge (which has a natural target). My counter-argument: a mouse-move *anywhere* is the lowest-friction gesture possible (no aiming required); the teaching flash labels *all four* capsules at once, so even one accidental cursor twitch teaches the IA. The dissolve animation costs ~900 ms of fade-out — if a user types in `/wp-admin`, then waits, the HUD melts away mid-task; I lock the HUD open whenever (a) a pane is open, (b) the URL field has focus, (c) the playground is booting. The four-capsule layout means there is technically more than one *visible surface* at idle-revealed, but each capsule is single-purpose; only the right-cap → site-manager-pane and the left-cluster → launcher-pane open a true *secondary content area*, and that area is one pane with two anchor points (same React component, mirrored left/right by which trigger summoned it). Glass earns its keep because the iframe must remain *visually present even behind the chrome*: the user's WordPress site colors literally bleed up through the capsules, so a roast-brown coffee theme tints the chrome warmly and a dark-mode Gutenberg PR tints it cool — content-aware decoration as a side-effect of the medium, not as a separate feature.

## Lessons applied from earlier v5 reviews

- **From review of #011** (closest cousin): "If your direction is auto-hide, you cannot rely on a single hint pill" — so I built an **explicit one-shot teaching layer** (state 2) that labels all four glass capsules for 1.5 s on first reveal, and a **persistent corner pulse** outside the chrome that never dissolves.
- **From review of #001**: "Make the expansion gesture a first-class visible element" — state 2 explicitly renders the materialize animation mid-fade with edge labels, so the gesture is teachable.
- **From review of #003**: "Pick one form for the primary verb" — Save lives only in the name chip; there is no Save button anywhere else.
- **From review of #002**: "A 'one surface' sheet is only one surface if you handle internal IA" — the Launcher pane's three tabs are first-class top-of-pane tabs (not a stacked scroll), and the Start-new tab has a sub-segment switcher so users can flip mode within the same tab.
- **From review of #006**: "Show every Site Manager tab" — states 5–9 demonstrate Settings, Files, Blueprint, Database, Logs each as a separate frame.
- **From review of #022**: "Make multi-surface exclusive by IA" — opening the Launcher pane is exclusive with opening the Site Manager pane; clicking the right-cap closes the left pane and vice versa (same `.pane` component, opposite edges).

## Affordance count audit

**At true idle (state 1): 1**
- corner pulse (also doubles as saved-status indicator)

**At revealed (states 2 + 3): 8**
| Capsule | Affordances | Notes |
|---|---|---|
| TOP pill | refresh, URL field, name+save chip, kebab menu | 4 |
| LEFT cluster | launcher door (avatars are deep-links into the same Launcher pane with the matching site pre-selected) | 1 |
| RIGHT cap | Site Manager door (the 5 icons inside are deep-links to the same pane's 5 tabs) | 1 |
| BOTTOM dock | F (fullscreen), H (lock HUD) | 2 (version chip is passive text) |
| **Total** | | **8** |

The version chip (`WP 6.7 · PHP 8.3 · EN`) is intentionally passive — clicking does nothing; deep-linking lives in Site Manager · Settings.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5
    True idle: 1 (corner pulse, always visible).
    Revealed: 8 exactly (4 top + 1 launcher + 1
    site-manager + 2 dock keys). Version chip is
    passive text, called out in README.

[x] iframe primary + fullscreen toggle?     Score: 5/5
    Idle = iframe 100%. The iframe is the ONLY
    solid thing in the entire IA — even chrome's
    glass shows through to it. State 12 demonstrates
    absolute fullscreen (F) with chrome dissolved
    AND the pulse hidden; Esc exits. HUD locks open
    during boot (state 10) and any pane.

[x] One door per feature (no duplicates)?   Score: 4/5
    Settings → SM Settings tab (only home).
    Save → name chip (only home).
    Launcher → left cluster "+" (only home).
    Site Manager → right cap (only home).
    WP Admin/Homepage → SM header (only home).
    Export/.zip → both SM header AND kebab menu —
    intentional duplicate (contextual vs global)
    flagged in trade-offs. -1 for that compromise.

[x] One secondary surface (not many)?       Score: 5/5
    Single .pane component. Docks from left cluster
    (Launcher) OR right cap (Site Manager) — same
    React node, exclusive open. Internal tabs swap
    content (Your sites / Blueprints / Start new
    for Launcher; Settings / Files / Blueprint /
    Database / Logs for Site Manager).

[x] Direction expressed strongly?           Score: 5/5
    "All chrome is glass that materializes on
    mouse-move and dissolves 2s after idle" is the
    entire IA. Materialize animation explicit. 2s
    timer named. Glass blur values declared. Iframe
    is sole solid object. Differentiated from #011
    (edge-anchored) by floating capsules at
    natural cursor reading positions.

[x] Mobile feels like wider-mobile desktop? Score: 4/5
    Same 4-capsule layout, same pulse, same pane.
    Cluster rotates horizontal (bottom). Right-cap
    collapses to a single SM icon (the 5 tabs live
    inside the pane). Top pill spans width. Pane
    covers iframe when open — unavoidable on 390px
    but it's the same component. -1 because the
    "hover to reveal" gesture is necessarily a tap
    on mobile; documented but not fully equivalent.

[x] Critique pass on glass/ambient use?     Score: 4/5
    Glass earns its keep: (a) it lets the iframe's
    colors bleed through the chrome — content-aware
    tint as a property of the medium, (b) the
    materialize/dissolve animation IS the metaphor,
    not decoration. -1 because the strong-glass
    variant (panes) uses 22 px blur which is a
    touch heavy; I could push to 18 px with the
    same legibility.
```

Average: **4.57 / 5**
