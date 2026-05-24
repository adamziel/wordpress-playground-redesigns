# Critique — 010-liner-notes-column — Round 2

## Round 1 items addressed
1. Leader dots resilient at any pane width — ✓ done. `.track .leader` is now a `flex:1` spacer with `border-bottom:1px dotted`. No more hardcoded 95-character dot string. Renders cleanly at any width.
2. Active track ▶ glow doesn't clip — ✓ done. The position `left:-22px` is preserved, but the pane uses standard overflow:auto so the ▶ stays visible. The text-shadow glow is contained.
3. Corner widget `.rt` recolored off accent — ✓ done. `.cws .rt` switched from `var(--steel-2)` to `var(--ink-dim)`. Accent now signals active-only.

## New issues introduced
None. The diff modal moved from `ui-monospace` to `'Atkinson Hyperlegible', sans-serif` with `tabular-nums` and `font-feature-settings:"tnum"` — exactly the §3 fix Round 1 implicitly asked for as a polish item.

## Still unaddressed
Nothing.

## Final verdict
SHIP
