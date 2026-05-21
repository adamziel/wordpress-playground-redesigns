# 006 — Pull-down for chrome

## Thesis

The WordPress site **is** the screen. Every other affordance lives behind a single Safari-style gesture: drag the handle at the top to pull chrome down. There are three detents — peek (a 48 px DevTools-style toolbar), half (the full launcher: 6 start-new sources, 43-blueprint browser, your playgrounds), and the bottom sheet (Site Manager: Settings/Files/Blueprint/Database/Logs). Release at any detent to pin; press Esc to retract everything and enter true fullscreen. The pull-down is the only top-level chrome gesture — the same on desktop and mobile.

## What was merged, removed, why

The triple-entry settings (popover, sidebar tab, info-notice) collapse into **one** door: the Settings tab inside the single bottom sheet. The "Save site locally" info-notice is replaced by the saved-state pill in the top-left and the colored dot inside the name pill — both are status, not duplicated actions. Site Manager and its five tabs lose their dedicated sidebar — they become the swappable content of the one bottom sheet. The launcher's three nested sections (Start a new, Blueprints, Your playgrounds) move into one pane reached via the pull-down's half detent, with a left rail that swaps content (not a separate drawer per section). Apply & Reset escalates from a tiny red banner to a typed-phrase confirm sheet whose required phrase is the playground name (so muscle memory can't dismiss it) plus an auto-downloaded pre-reset .zip snapshot. The fullscreen iframe gap from v1 #15 is closed with an explicit pill in the top-right and the F / Esc shortcuts; the iframe never reflows under chrome — pull-down always *overlays*.

## Trade-offs

The pull-handle is invisible to first-time users until they're told it exists, so we lean on the small "Pull for chrome" chevron hint and a status pill the user is likely to touch. Power desktop users used to a permanent top bar lose at-a-glance URL editing — but the peek detent is one click on the handle and stays pinned until they dismiss it, which is the standard trade we already accept on tablets. Glass is used aggressively (top chrome + bottom sheet) but earns its keep: the iframe site stays partially visible behind both surfaces, so users can see what's happening to the WordPress site while they tweak settings, which is exactly the v1 #15 complaint we're fixing. The launcher's left rail is dense at half-detent (≈ 18 items including six start-new sources, 43-blueprint shortcut and three saved playgrounds) — but it's one swappable rail, not three.

## Self-critique

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  (3 affordances at idle: handle, saved pill, fullscreen pill)
[x] iframe primary + fullscreen toggle?     Score: 5/5  (iframe is the entire screen; chrome overlays only; explicit FS pill + F/Esc)
[x] One door per feature (no duplicates)?   Score: 4/5  (Settings collapsed to one tab; Sites collapsed to one rail; Save is one button. -1 because the saved-state appears both in top-left pill AND name-pill dot — status, not duplicated *action*, but a sharp critic may flag it.)
[x] One secondary surface (not many)?       Score: 5/5  (Site Manager is one bottom sheet with 5 swappable tabs; launcher is one pane with a swap-rail; no other side panels exist.)
[x] Direction expressed strongly?           Score: 5/5  (Pull-down is the *entire* IA — three detents map to the entire feature surface. Nothing else acts as primary chrome.)
[x] Mobile feels like wider-mobile desktop? Score: 4/5  (Same gesture, same chrome, same sheet at both widths; mobile sheet uses scrolling tabs rather than full-row tabs — minor.)
[x] Critique pass on glass/ambient use?     Score: 4/5  (Two glass surfaces, both earn their keep: pull-down overlay lets users see the iframe behind; bottom sheet keeps the iframe partly visible above. No decorative blur.)
```

Honest read: the design's biggest risk is discoverability of the pull-handle for newcomers. The chevron hint and tap-pill mitigate it; a one-time onboarding animation (out of scope here) would close the gap. No row scores ≤ 2, so committing.
