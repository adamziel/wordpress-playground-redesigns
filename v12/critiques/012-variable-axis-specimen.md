# Critique — 012-variable-axis-specimen — Round 1

## Verdict
Ship as-is. This is the most ambitious answer to §11 in the set — using Recursive's MONO/CASL/slnt/wght axes to encode metadata literally INTO the title is unprecedented. The title IS the row.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.specimen` is JUST a title set in Recursive at unique axis settings (weight 880 + CASL 1 + slnt -6 for the active "Coffee Shop", weight 280 + MONO 0.5 for the oldest "Unsaved Playground"). Lines 110–113. No icon, no second row, no `axis-tick` data display required.
- Matches `listPattern` exactly — the title IS the data, no row, no icon, no meta line.
- Forbidden icon-left + 2-row-text pattern is absent.
- Start-routes also encode their personality via axis settings (lines 116–121) — same dialect, axes mean different things.
- Library overlay (per direction) is a Recursive specimen sheet of 16+ blueprints — consistent.

## Hard violations of v11/v12 taste constraints
- No purple. Signal lime `#B6D34A`.
- Mono used: `ui-monospace` in `.editor-pane`, `.blueprint-json`, `.code-block` — all inside code surfaces, allowed. Also `Recursive` with `MONO` axis is used for the typed-phrase input (line 171) — borderline, since the field is showing UI text not code. Acceptable as an inline data treatment.
- Recursive Sans — allowed per BRIEF §4.
- Rail: 5 single letters S, M, B, D, L at uniquely varied MONO/CASL/slnt/wght points (lines 85–89). Distinct silhouettes by axis variation. Strong.
- Borders: specimen has no nested borders. Good.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None floating on the device.

## Rail button distinctness (Forest-Botanical test)
Five letters at five distinct axis points. S is heavy + slanted casual; M is mono regular; B is mid-casual; D is slanted heavy; L is light + mono. Each has a unique optical signature even at single-letter scale. This is the best rail in the v12 set so far.

## Iframe primacy
Yes — pane is 380px, iframe wins. The lime accent is restrained to active states and small ticks. The Recursive axis treatment in the pane is striking but contained.

## Typography
Recursive Sans single family throughout, axes flexed. Loaded via Google Fonts (assumed at line ~9). The mono use of Recursive (MONO axis = 1) for the typed-phrase input is creative — it's still Recursive, just in mono mode.

## Three concrete suggested fixes (Round 2)
1. The `.specimen .axis-tick` (line 107) is a per-row small label that risks becoming a second text element. Need to verify the markup doesn't include this for every saved site — if it appears next to every title, it's effectively a meta-line. Strip `.axis-tick` from the visible markup OR keep only as a tiny optional badge for hover.
2. The corner widget `.cws` (line 131) at `left:478px` uses pulse + nm + `ms` — three items. The `.ms` is `Recursive` at `wght 400` (line 133), which appears as a second text line at the chrome edge. Drop the `ms`.
3. The active-state styling for `.sp-coffee` (line 110) uses `wght 880` + `CASL 1` + slnt -6 + font-size 34px — this is HUGE relative to the rest of the column. Lovely for the data encoding but the active title visually dominates and overwhelms the iframe corner near the pane edge. Consider capping active size at 26px so iframe remains primary.
