# Critique — 016-architectural-plan — Round 2

## Round 1 items addressed
1. Remove iframe-area corner label — ✓ done. No `iframe-area::after` rule in CSS, no `PLAN-W3 · iframe surface` text in the screenshot. The pedagogical CAD label is gone.
2. Drop double-border on active plan-rect — ✓ done. `.plan-rect.active` now has only `border-color:var(--cyan); background:rgba(92,138,166,.10)`. The inset shadow that produced stacked borders is removed.
3. Corner widget simplify — ✓ done. Markup at line 432 renders only `.dot` + `.name`. The `.sep` style remains in CSS but unused. Single typographic compound.

## New issues introduced
None. The plan-view rectangle pane reads decisively as a floor plan now that the active state isn't double-stroked.

## Still unaddressed
Nothing.

## Final verdict
SHIP
