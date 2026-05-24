# v12 #019 — Inverted Contrast (Bodoni Hairlines)

## Thesis
A fashion-magazine title page rendered in dark mode. Bodoni Moda variable, exploited across two extreme optical-size points: opsz 96 for the loud titles (the hairlines fragile, the thicks anchoring), and opsz 14 for the small italic UI labels. Everything that isn't a title is Manrope, which behaves like a quiet stagehand. The thesis is the typeface itself: when you set Bodoni at 36px on a near-black background, the contrast between hairline and thick-stem becomes the *entire visual identity* of the list. You don't need an icon, you don't need a meta-row, you don't need a chip. You need to give the letterform enough room.

## List pattern
Inverted-contrast titles. Each saved playground is a single Bodoni Moda opsz 72 line at 36px in bone-warm ink against jet black (#020203). The titles sit in a quiet column, separated by hairline rules. To the far right of each line, a single 11px Manrope figure in muted ink-faint with `font-feature-settings: 'tnum', 'lnum'` carries the size and version data — visually it's a whisper compared to the title, which is the point. The active entry takes Bodoni *italic* (variable axis flexed) and shifts colour to bone-warm. Start routes use the same column primitive — `Vanilla WordPress / latest stable`, `WordPress PR / from URL`. The library overlay is the same column at 32px in a 2-column grid.

## Focus-test answer
**Q: Which playground am I on right now?** A: It's the italicized one — Bodoni's italic axis is so distinct it reads instantly as "current," and the colour shifts to the bone accent in the same gesture.

## Trade-offs
The Bodoni hairlines at 36px on near-black are *fragile* — sub-pixel rendering can lose them on poorly calibrated displays or very-cold ambient light. We mitigate by sitting the type on a true near-black (#020203, not pure black) so the hairline anti-aliasing has a tonal floor. The single-accent rule is preserved: bone-warm #E8DEC2 appears only in the saving pill, the active title, the active rail letter, and the identity mark — never as a fill, never as a chip background. The cost of this restraint is that the design reads as a magazine column rather than as a software UI; the "iframe is the loudest object" rule needs careful protection — we keep the iframe area background near-black so the WP mock's larger Bodoni inside the iframe wins on hierarchy. No nested borders: each entry has only a single hairline rule below it.
