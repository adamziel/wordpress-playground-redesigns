# 016 — Museum frame

## Thesis

The WordPress site is an artwork; the chrome is the frame on the gallery wall. A 5px gilded border surrounds the iframe; a thin brass strip across the top carries the URL, name, and save state like an engraved title bar; a museum placard below the frame reads "WORDPRESS PLAYGROUND · EST. 2022" in real micro-typography. Click the placard and it swings open — that single nameplate is the only door to Settings, Files, Blueprint, Database, Logs, and the Launcher. The metaphor is dignified, restrained, and committed: the artwork is everything; the frame whispers.

## What I merged, removed, and why

I collapsed every secondary surface into the placard. There is one drawer, not five — Settings, Files, Blueprint, Database, Logs, and the Launcher are tabs inside the placard's sheet. I moved WP Admin and Homepage into the Settings tab as primary buttons (the critic's lesson from #002), so the Site Manager header actions don't become a hidden duplicate door. The three settings entry-points (popover, sidebar tab, info-notice) collapse to one Settings tab; the info-notice text becomes the Save-state pill that lives in the top brass strip. "Apply Settings & Reset" becomes "Recast this work" — a typed-phrase confirm sheet matching the destructive-action requirement. The "Saved Playgrounds" launcher merges with the Sites dock into one tab in the placard. Spatial memory and other clever ideas from sibling directions were rejected — the museum frame is the direction, and importing extras would dilute it.

## Trade-offs

The placard is closed at idle. Discoverability of "click the plate" rests on a single hover affordance (the brass micro-typography glows, the plate animates a 2px lift) and a one-line hint that fades after first interaction. We accept this in exchange for the cleanest idle state in the round. The aesthetic is unapologetically formal — Cormorant Garamond + brass gradients + ivory wall — which won't be everyone's taste, but it answers the brief: glass and ambient color must "earn their keep," and here the gilt is the entire visual identity, not decoration. At mobile (390×844) the frame becomes a phone-sized portrait orientation of the same artwork — the brass strip is the same component, the placard is the same component, just narrower. The single divergence is that mobile uses a full-height drawer rather than a 45% sheet because phone heights don't tolerate a smaller placard.

## Affordance count at idle (counted)

1. Playground name engraving (top brass strip, click to rename)
2. Address bar engraving (top brass strip, type to navigate)
3. Refresh (left of brass strip)
4. Save state pill (right of brass strip — "Unsaved" / "Saving" / "Saved")
5. Fullscreen toggle ("View artwork only" — top-right corner)
6. Overflow menu (single dot, top-right)
7. Placard plate (the brass nameplate at the bottom — single door to Settings, Files, Blueprint, DB, Logs, Launcher)
8. Sites dock indicator (small numeric badge on the placard — "Sites · 4")

= 8 affordances. The micro-typography ("WORDPRESS PLAYGROUND · EST. 2022") is engraved decoration, not interactive.

## Self-critique rubric (1–5)

```
[x] Affordance count at idle ≤ 8?           Score: 5/5   — exactly 8, counted above
[x] iframe primary + fullscreen toggle?     Score: 5/5   — frame is 5px; fullscreen pill + F/Esc shortcut
[x] One door per feature (no duplicates)?   Score: 4/5   — placard is the only door; WP Admin/Homepage live in Settings (not in menu)
[x] One secondary surface (not many)?       Score: 5/5   — literally the placard; six tabs swap inside it
[x] Direction expressed strongly?           Score: 5/5   — gilt frame, micro-engraving, placard nameplate, museum typography
[x] Mobile feels like wider-mobile desktop? Score: 4/5   — same components, narrower; placard goes full-height vs 45%
[x] Critique pass on glass/ambient use?     Score: 4/5   — glass only inside placard sheet (depth = "behind the frame"); brass is gradient + bevel, not blur
```

Total: 32/35. Honest — most rows 4–5, none ≤ 2.
