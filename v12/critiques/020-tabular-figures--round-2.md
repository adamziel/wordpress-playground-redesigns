# Critique — 020-tabular-figures — Round 2

## Round 1 items addressed
1. Remove iframe-area corner label — ✓ done. No `iframe-area::after` rule. The "the annual report · iframe" label is gone.
2. Drop St/Mg/Bp/Db/Lg secondary-text rail labels (§9 fix) — ✓ done. Dock markup now contains only `<span class="n">1..5</span>`. No two-character abbreviation. Per-dock weight variation (300 / 400 italic / 500 italic 30px / 600 / 700 32px) handles silhouette differentiation alone.
3. Tighten pane width for iframe primacy — ✓ done. `.pane` width dropped from 480px to 420px. Iframe gets back ~60px of horizontal real estate. Aligns with the rest of the set's pane widths (380–440px).

## New issues introduced
None. The pane narrowing actually helps the right-aligned numeral columns feel tighter and more report-like.

## Still unaddressed
Nothing. Corner widget is now a single-line compound (`Coffee Shop  14.2`).

## Final verdict
SHIP
