# 030 — Two-row top bar

## Thesis
The chrome is split into two horizontal rows at the very top of the window, and nothing else. **Row 1 (40 px) is identity** — brand, URL+refresh, the editable site name, the saved-state pill, the More menu, the fullscreen toggle. It never changes. **Row 2 (36 px) is context** — three mode tabs on the left (Site · Manage · Library, keyboard 1·2·3) and a row of verbs on the right that *swap content based on the active mode*. When a verb needs sustained workspace (Logs, Files, Blueprint JSON, Database browser, the full launcher), one secondary surface — a DevTools-style dock — opens *under row 2 and above the iframe*. Same dock geometry, every time. Only the content swaps. The iframe is the document underneath.

## What I merged / removed and why
The triple-entry-point Settings sin (popover + Site Manager tab + info notice) collapses to **one door**: Manage → Settings. The Site Manager's "Additional actions" menu is removed; its two items (Export to GitHub PR, Download .zip) move to the row-1 More menu because they're identity-level actions, not panel-level verbs. The "Saved Playgrounds" launcher, the six "Start new" sources, and the 43-blueprint gallery merge into a single Library mode whose verbs are search + 10 category chips and whose dock holds all three sections side-by-side. The Site Manager header (title · WP Admin · Homepage · Additional actions) is dismantled: the editable name lives in row 1's URL pill (one door); WP Admin and Homepage become row-2 verbs only in Site mode; the additional-actions menu moves to More. Save is exactly one primary verb (the only blue chip in row 2 / Site mode), and Apply & Reset is gated by a typed-phrase confirm sheet rather than a thin red banner — the destructive flow is now visibly irreversible-without-confirmation. Across all eleven panels rendered, the dock opens in *exactly the same place at exactly the same width* — only its content swaps.

## Trade-offs
Two rows costs 76 px of vertical chrome (40 + 36) versus a single 48 px bar — that's 28 px more than the slimmest direction in the round. I accept that because (a) the iframe still gets ~90% of vertical space at idle (724 of 800 px in the demo), (b) row 1 is *truly* stable (read-only identity = no context switch), and (c) row 2 lets the design fold the v1 brief's 19 distinct affordances into a single 26-px-tall band that re-uses the same primitive (a chip) at three different scales. Fullscreen mode (F · Esc) hides both rows when the user wants pure iframe. The dock geometry doesn't resize — power users editing wide log lines scroll horizontally inside the dock, which is the cost of "one secondary surface, no exceptions." Mobile keeps the exact same row1 + row2 metaphor (no responsive collapse to a hamburger), and the dock becomes a bottom sheet that observes a hard 40% iframe-minimum rule.

## Lessons applied from earlier v5 reviews
- **Review 001 lesson** ("show the expansion gesture as a first-class state") — State B explicitly captures the moment row 2 has swapped: the active mode pill is rendered with a different background, the dock is open in its canonical place, and the row 2 verbs in B (5 tabs) vs A (4 site verbs) vs C (search + chips) are renderd as separate states for the critic to inspect. The morph isn't hidden in animation.
- **Review 005 lesson** ("don't nest a second tab strip inside a sheet") — The Library mode dock does *not* have inner sub-tabs. The three sections (Start new, Your Playgrounds, Blueprints) live side-by-side on one canvas; the categorization happens via row 2's chips, not via a second-level tab strip inside the dock.
- **Review 009 lesson** ("decide what the kebab is for; don't make it a junk drawer") — The More menu is sorted into two purposes only: (1) Export this playground (PR + zip), (2) App-level help. No grab-bag of orphan toggles. Each item has a keyboard shortcut.
- **Review 013 lesson** ("expose the fullscreen toggle visibly; keyboard-only F doesn't satisfy iframe-primacy") — Fullscreen has a visible icon in row 1 *and* the F shortcut. The exit pill in State J names both the gesture and the key.
- **Review 018 lesson** ("cite prior v5 reviews by number") — this section.

## How affordance counting works here (8 exact)
1. URL + refresh (combined pill; refresh is the inner button)
2. More menu (kebab)
3. Fullscreen toggle
4. Site mode tab (row 2 left)
5. Manage mode tab (row 2 left)
6. Library mode tab (row 2 left)
7. Settings verb (row 2 right, Site mode)
8. Save site locally — the single primary verb

The brand mark, the keyboard hints (1·2·3), the saved-state pill, the "Homepage" and "WP Admin" verbs, and the editable name inside the URL pill are: respectively a decorative anchor, a hint, a status, alternative paths to the URL bar, and a sub-element of the URL pill. They are not separate affordances under the strict count.

## Self-critique

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  (exactly 8; counted and rendered as a labeled diagram below State A)
[x] iframe primary + fullscreen toggle?     Score: 4/5  (iframe gets ~90% vertical at idle; State J shows true fullscreen + Esc-to-exit pill + F shortcut; visible icon in row 1)
[x] One door per feature (no duplicates)?   Score: 5/5  (Settings only in Manage; Save only as primary verb; exports only in More; the launcher's 3 sections are one door via Library mode; editable name only in URL pill)
[x] One secondary surface (not many)?       Score: 5/5  (literally one dock that opens between row 2 and the iframe; Logs, Files, Blueprint, Database, Settings, Launcher all use the same geometry — only content swaps)
[x] Direction expressed strongly?           Score: 5/5  (the two-row split is the IA; row 2 is shown swapping content across 6 rendered states A/B/C/E/G/H/I; mode-context coupling is annotated in the anatomy panel)
[x] Mobile feels like wider-mobile desktop? Score: 4/5  (same two rows, same three modes, same dock concept — dock becomes a bottom sheet with a hard 40% iframe floor; three mobile states K1/K2/K3 demonstrated)
[x] Critique pass on glass/ambient use?     Score: 5/5  (almost no glass; only the fullscreen exit pill uses a backdrop blur, and it's justified because it sits over unpredictable iframe content; row 1 and row 2 are solid surfaces with one thin divider)
```
