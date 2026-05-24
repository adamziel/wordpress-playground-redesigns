# Critique — 010-liner-notes-column — Round 1

## Verdict
Ship as-is. This is the cleanest typographic answer in the set — numbered tracks with leader-dots and tabular runtimes is genuinely its own ontology and reads as 1965 jazz liner notes at first glance.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.track` is `num` + italic Newsreader `title` + leader dots + tabular runtime. No icon. No second row. Lines 89–102.
- Matches `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is absent.
- Start-routes (per screenshot, "Vanilla WordPress / WordPress PR / Gutenberg PR / From GitHub / Blueprint URL / Import .zip") render as the same `.track` element — consistent dialect.
- Library overlay uses a multi-section liner-notes layout (lines 170 onwards), same track dialect.

## Hard violations of v11/v12 taste constraints
- No purple. Cool steel-blue `#7AA0B3`.
- Mono used: `ui-monospace` in `.file-editor code`, `.blueprint-json`, `.code-editor.log-stream`, `.code-block.diff` (line 183). The diff modal mono use is borderline — it's inline UI prose, but in a confirmation dialog that mimics a code patch it reads acceptably.
- Newsreader + Atkinson Hyperlegible. Both allowed.
- Rail: 5 typographic A-side/B-side marks (▶ ▣ ▤ ▥ ▦). Risk: these are unicode glyphs that may render differently across systems.
- Borders: track has bottom hairline only. Good.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None floating on the device.

## Rail button distinctness (Forest-Botanical test)
Five unicode geometric shapes — triangle ▶, filled square ▣, two-bar ▤, three-bar ▥, four-cell-grid ▦. These ARE distinct silhouettes by shape and stroke count. Strong. BUT: relying on unicode glyphs is fragile — font-fallback may render some at different x-heights or as missing-glyph boxes. Worth verifying in the actual rendered screenshot.

## Iframe primacy
Yes — pane is ~400px (need to verify exact width), iframe wins. The steel-blue accent is restrained to active marks and tabs.

## Typography
Newsreader italic + Atkinson Hyperlegible. Both Google-Fonts-linked. The italic Newsreader display titles + tabular Atkinson runtimes is a strong duo that supports the liner-notes idiom.

## Three concrete suggested fixes (Round 2)
1. The leader-dot row uses `content:"...............................................................................................";` (line 95) — a hardcoded string of 95 dots. At narrower pane widths this overflows or wraps awkwardly. Replace with a CSS-only repeating gradient or `border-bottom: dotted` on a flex spacer for resilience.
2. The active track uses `▶` rendered as a `text-shadow: 0 0 8px rgba(122,160,179,.7)` glow at left:-22px (line 101). The glow + the offset position make it look like an indicator OUTSIDE the track row, which is good — but verify it doesn't clip when the pane scrolls.
3. The corner widget `.cws` (line 150) shows `num` + `nm` + `rt` on one baseline — three items but on one line, which is acceptable. But the `.rt` runtime column is in steel-blue, which uses the accent for ordinary state info (not active or save). Recolor to ink-dim so the accent stays a single-state signal.
