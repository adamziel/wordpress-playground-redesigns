# Critique — 003-punchcard — Round 1

## Verdict
Ship with minor revisions. The punchcard idea is one of the most graphically distinct list patterns in the set — dots-as-data is novel and unmistakable.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each row is `title` + three horizontal dot-axes for WP / PHP / SIZE. The dots ARE the meta. No icon, no second text row — confirmed at `.card-row` markup, lines 91–103.
- Matches claimed pattern exactly.
- The icon-left + 2-row-text pattern is absent. The "WP / PHP / SIZE" labels look like row-labels at first glance, but they are typographic axis labels left of the dot row, not a second text line.
- Start-routes use the same `.card-row` structure with the same dot encoding — consistent dialect.
- Library overlay (`.deck .card`, lines 144–150) uses small dot rows at the bottom of each card — same dialect carried through.

## Hard violations of v11/v12 taste constraints
- No purple. Accent `#E2C44A` signal yellow.
- One real concern: `.file-editor` uses `'Courier New', ui-monospace, monospace` (line 195). Per BRIEF §3, "The code editor body … may be monospace" — this is allowed. Cutive elsewhere is proportional. Good.
- No forbidden fonts in chrome — Cutive + DM Sans only.
- Rail: identity mast + 5 docks. Clean.
- Borders: cards have bottom rule only, dots are inset shadows not borders. Passes.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None on the device. The thin caption strip above the frame is between-panel chrome.

## Rail button distinctness (Forest-Botanical test)
Five tab squares with unique dot-counts (1, 2, 3, 4-with-gap, 4-grid) — lines 71–77. The silhouette differences are real but require close inspection because all five sit in identical 48×48 framed tiles. At a glance, the column reads more uniform than ideal. The dot patterns are too small relative to the frame.

## Iframe primacy
Yes — iframe right two-thirds; pane is 440px wide and uses muted graphite tones. The signal yellow accents are restrained.

## Typography
Cutive (typewriter-like, proportional, per spec) + DM Sans. Both loaded via Google Fonts (line 9). Cutive does heavy duty on titles, rail mast, save pill, captions — works. The screenshot shows it as a strong identity signal.

## Three concrete suggested fixes (Round 2)
1. Rail dots are too small inside their 48×48 frames — the silhouettes collapse to "five identical squares with tiny dots." Either remove the per-dock frame so the dot-pattern itself becomes the silhouette, or scale dots up (12–14px). Lines 63–77.
2. The dot-axes in saved-sites currently have an inline "scale" label (`.dots .scale`) per BRIEF §3 prohibition concerns — verify it's not appearing as text after the dots; if so, drop the scale label and let the dots speak alone. Line 103.
3. The signal yellow `#E2C44A` at near-saturation on dots with `box-shadow` glow (line 100) is borderline neon. Drop the glow intensity from `rgba(226,196,74,.4)` to `.2` so the dots don't compete with the iframe's warmth.
