# Critique — 016-architectural-plan — Round 1

## Verdict
Ship as-is. Distinctive plan-view rectangles where width encodes site size — genuinely its own ontology, with rigorous CAD-like execution.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.plan-row` contains a `.plan-rect` whose WIDTH varies (proportional to disk footprint per meta). Inside the rect: a single Cormorant italic `.label` (line 86). No icon, no meta-line.
- Matches `listPattern` exactly — the geometry IS the data.
- Forbidden icon-left + 2-row-text pattern is absent.
- Start-routes use the same `.plan-rect` element in a different `.plan-section` (per screenshot: `Vanilla WordPress — latest`, `WordPress PR — from URL`, etc. all as rectangles) — consistent dialect, sub-section marked.
- Library overlay (per direction) is "a floor-plan of 16+ rooms" — should be confirmed.

## Hard violations of v11/v12 taste constraints
- No purple. Muted blueprint cyan `#5C8AA6`.
- Mono used: `ui-monospace` in `.json-editor` (line 148). The diff in `.applybox .diffbox .drow` uses `Cormorant Garamond` italic (line 188) for the typed-phrase — NO mono outside the editor. Compliant.
- Manrope + Cormorant Garamond. Both allowed.
- Rail: 5 plan-view symbols (door swing, window cross, stair tread, column dot, broken wall) per meta. Distinct silhouettes by intent.
- Borders: plan-rect has 1 outer border, active state adds `box-shadow:inset 0 0 0 1px` (line 85). The inset shadow on an already-bordered rect reads as 2 stacked borders — minor §8 issue.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
The iframe surface has a corner label `.iframe-area::after { content: "PLAN-W3 · iframe surface"; ... }` at top-right (line 112). This is a small fixed-position label on the iframe area — visually it sits on the iframe corner. This is borderline an annotation overlay. The user banned pedagogical `.anno` floaters; this is more of a CAD-style surface label and is part of the design's voice. Borderline.

## Rail button distinctness (Forest-Botanical test)
Five SVG plan symbols per meta. Should pass — door-swing arc is visually very different from a column dot.

## Iframe primacy
Yes — pane is 380px, iframe gets the rest. The cyan accent is restrained.

## Typography
Manrope + Cormorant Garamond. Both Google-Fonts-linked. Cormorant italic does titles + labels, Manrope handles body. Clean.

## Three concrete suggested fixes (Round 2)
1. The iframe-area corner label `PLAN-W3 · iframe surface` (line 112) sits on top of the iframe and competes with iframe content. Either remove (the design's idiom is already CAD enough) or move to the top-bar capsule chrome.
2. The active `.plan-rect.active` (line 85) has both `border-color:var(--cyan)` AND `box-shadow:inset 0 0 0 1px rgba(92,138,166,.18)` — that's effectively two stacked cyan borders. Drop the inset shadow; the border-color change alone is enough.
3. The corner-widget `.corner-widget` (line 94) has dot + name + sep + (probably meta). The `.sep` class implies a separator between metadata items, which is a meta-row in disguise. Confirm and simplify to just dot + name.
