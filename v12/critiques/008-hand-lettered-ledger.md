# Critique — 008-hand-lettered-ledger — Round 1

## Verdict
Ship with minor revisions. Genuinely distinct list pattern — single handwritten lines on a vellum-ruled stripe is unmistakably its own ontology.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.ledger-line` is a 42px ruled stripe with a single Caveat Brush hand-lettered title; meta is hidden until hover. No icon. No second row. The vellum's repeating linear-gradient (line 75) gives ruled paper.
- Matches `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is absent.
- Start-routes also render as `.ledger-line` per screenshot (Vanilla WordPress, WordPress PR, etc. all show as handwritten lines below a section divider). Consistent dialect.
- Library overlay uses `.lib-handwritten` with same Caveat Brush titles plus prose category labels — same dialect.

## Hard violations of v11/v12 taste constraints
- No purple. India-ink red `#A14538`.
- Mono used: `ui-monospace` in `.file-editor code` (line 125), `.blueprint-json` (line 129), `.code-editor.log-stream` (line 141), AND `.code-block.diff` in the danger modal (line 188), AND `.typed input.code-block` (line 192), AND `.ph.code-block` (line 197). The diff and typed-phrase input use of mono is borderline — those are inline UI prose, not the code editor. Per BRIEF §3 monospace should only be inside the code editor.
- Caveat Brush + Source Serif 4 — both allowed.
- Rail: 5 hand-drawn SVG flourishes + identity. Distinct gestures per meta.
- Borders: ledger-line has bottom hairline only.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None floating on the device.

## Rail button distinctness (Forest-Botanical test)
Five hand-drawn flourishes (single sweep, broken curl, four dots, descending tail, multi-stroke wave) — should be visually distinct. From the screenshot they read as five different SVG line gestures. Passes.

## Iframe primacy
Yes — pane is 386px, iframe wins by area. The ruled vellum pattern in the pane is distinctive but tonal, not loud.

## Typography
Caveat Brush + Source Serif 4. Both Google-Fonts-linked. Caveat Brush carries hand lettering on titles, tabs, and corner widget; Source Serif 4 italic does the metadata. Strong duo.

## Three concrete suggested fixes (Round 2)
1. Move the typed-phrase input `.typed input.code-block` (line 192) and `.code-block.diff` in the danger modal (line 188) away from `ui-monospace`. The phrase "reset coffee shop" is body prose; render it in Source Serif 4 to stay inside §3. The diff can use Source Serif 4 with tabular figures.
2. The corner widget `.cws` (line 152) has `.nm` + `.meta` stacked — two text rows. Trim to the underlined handwritten name only, drop the italic meta.
3. The handwritten section divider uses `clip-path:polygon` + `opacity:.5` (line 104). The clipped polygon makes a tapered rule that reads as a fancy underline rather than a hand-drawn sweep. Either replace with a hand-drawn SVG path (matches the rail's flourish vocabulary) or simplify to a 1px hairline. Currently feels half-committed.
