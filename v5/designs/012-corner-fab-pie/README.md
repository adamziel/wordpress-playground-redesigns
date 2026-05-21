# 012 — Corner FAB pie

## Thesis

The chrome is one dot. Click it and an eight-slice pie radiates from the bottom-right corner — every Playground feature reachable in one fingertip arc. Two concentric rings (instant actions inside; pane openers outside) map exactly to the v1 feature inventory: Refresh / Save / Fullscreen / More on the inner ring, URL / Sites / Site Manager / Settings on the outer. Number keys 1–8 trigger each slice; `Cmd-K` toggles the pie; `F` jumps straight to true fullscreen; `Esc` cancels everything. The saved-state lives *inside the dot itself* — its core glows green when saved, amber when unsaved, blue when booting — so the save indicator costs zero extra affordances. Beyond an instant action, every slice opens the same right-side **Inspector** which swaps content (Launcher with three tabs; Site Manager with five tabs; URL omni-input; More menu). One dot, one pie, one secondary surface. There is no third thing.

## What was merged / removed and why

The v1 triple-entry-point sin (Settings popover + Site Manager Settings tab + "Unsaved Playground" info-notice) collapses into a single Inspector default tab — three former doors, one slice opener (slice 6 is "Settings (quick)" which is just slice 4 → Settings tab; same room, two doormen). The "Saved Playgrounds" trigger is unified with the launcher: slice 3 (Sites) opens an Inspector whose three top tabs are *Start new* (6 sources), *Blueprints* (43 cards · 10 filters · search), and *Your saved* (4 sites). The launcher's three sections become one swap-rail rather than three drawers. The top toolbar disappears entirely — its 7 features become 4 outer pie slices and 4 inner pie slices. The "Additional actions" menu (Export PR / Download .zip) lives behind slice 8 (More), keeping both required exports together rather than buried. Apply & Reset escalates from a tiny red banner to a typed-phrase confirm where the required phrase is the playground name — muscle memory can't dismiss it. The v1 #15 fullscreen gap is closed by slice 7 plus the `F` / `Esc` shortcuts; the iframe is *always* 100% of the viewport at idle (overlays only; no reflow).

## Trade-offs

Discoverability is the design's biggest risk: a brand-new user sees only a dot, no labels, no top bar. The mitigations are the floating hint bubble for first sessions ("Click the dot · eight actions radiate · F fullscreen · ⌘K pie"), the soft-glow conic halo around the dot that draws the eye, and the hovering "Unsaved Playground · ⌘K" pill which appears whenever the cursor is within ~180px of the dot. After the first interaction the hint dismisses permanently. The pie itself is rendered as a near-opaque (#0d1220, 94%) dark surface rather than glass — legibility of slice labels on hover trumps the v1 #38 glass aesthetic on this specific surface; the Inspector behind it *does* use glass to let the iframe color bleed through, satisfying the principle without over-applying it. On mobile the Inspector goes full-bleed (rather than a 560px split) because at 390px every split would shrink both panes below readable. The biggest IA bet is that slice 4 (Site Manager) and slice 6 (Settings) lead to the same destination with a different default tab — this is honestly counted as a "soft duplicate" in the rubric (-1 on the one-door score). I judged it worth keeping because users searching for "settings" expect a one-tap path that doesn't require knowing about a containing "Manager" concept.

## Self-critique

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  (1 affordance: the dot. Saved-state is the dot's core color.)
[x] iframe primary + fullscreen toggle?     Score: 5/5  (iframe is 100% of viewport at idle; F/Esc + slice 7.)
[x] One door per feature (no duplicates)?   Score: 4/5  (Slices 4 & 6 open the same Inspector with a different default tab — same room, two doormen. -1 for that.)
[x] One secondary surface (not many)?       Score: 5/5  (One Inspector. Launcher, Site Manager, URL omnibox, More menu all overlay from the same FAB.)
[x] Direction expressed strongly?           Score: 5/5  (The entire IA is one dot + one pie. Nothing else competes for primary chrome.)
[x] Mobile feels like wider-mobile desktop? Score: 4/5  (Same dot, same pie, same Inspector. The Inspector is full-bleed on mobile rather than split — minor divergence forced by viewport.)
[x] Critique pass on glass/ambient use?     Score: 4/5  (Inspector is glass so the iframe's color bleeds through; the pie is near-opaque because slice-label legibility matters more than transparency. No decorative blur.)
```

No row scores ≤ 2, so committing. The honest weakness — soft duplication between slices 4 and 6 — is documented and justified in the trade-offs above.
