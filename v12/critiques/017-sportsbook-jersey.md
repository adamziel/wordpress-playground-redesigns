# Critique — 017-sportsbook-jersey — Round 1

## Verdict
Ship with minor revisions. Bold typographic answer to §11 — the giant Anton numeral + single title line reads as a sports jersey, distinctly different from every other v12.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.jersey-tile` (line 78) is 100px tall, 336px wide; left 120px is a 74px Anton numeral, right two-thirds is a single Public Sans `.name` line (lines 79–81). No icon (numeral IS the visual). No second row.
- Matches `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is ARGUABLY ABSENT — the numeral is not "an icon" in the badge sense but a giant numeric identifier. The body has only one line of text. PASSES the spirit of §11. But: this is the borderline case — a critic could argue "huge number on left, name on right" is structurally close to "icon on left, title on right". The defense is that the numeral is so large it's a typographic device, not a label.
- Start-routes use `.jersey-tile` (per screenshot showing `01`, `02`, `03`... tiles below "Start a new Playground") — consistent dialect.
- Library overlay (per direction) is "a jersey wall of 16+ blueprint numerals" — should be confirmed.

## Hard violations of v11/v12 taste constraints
- No purple. Red-clay `#B14A39`.
- Mono used: `ui-monospace` only in `.json-editor` (line 140). Compliant.
- Anton + Public Sans. Both allowed.
- Rail: 5 jersey numerals 01 02 03 04 05 set Anton 28px tabular. Distinct only by digit shape — `01` vs `02` vs `03` vs `04` vs `05`. With tabular figures + leading zero, silhouettes are similar (all start with `0`). Borderline.
- Borders: jersey-tile has 1 outer border; numeral has 1 right border. No nesting.
- No secondary text under rail buttons.
- The `.jersey-tile .badge` at top-right (line 86) could be a secondary text — confirm it shows status like `ACTIVE 01` rather than data.

## Annotation overlays / explainer chrome
The iframe-area corner label `FIELD · iframe surface` (line 108) appears on the iframe. Same critique as #016 — borderline annotation.

## Rail button distinctness (Forest-Botanical test)
Five tabular numerals `01–05` all leading with `0`. The digit shape variation is minimal at small size. Acceptable per the design's idiom (a jersey roster IS a column of numbers) but the user's Forest-Botanical test prefers visually distinct silhouettes. Borderline pass.

## Iframe primacy
Yes — pane is 380px. The iframe wins by area, but the giant `74px` Anton numerals at the left of every jersey-tile pull a lot of visual weight inside the pane. Worth verifying that the iframe's hero headline beats them.

## Typography
Anton + Public Sans. Both Google-Fonts-linked. Anton does heavy duty — used for top-bar pgname (line 60), save pill (line 61), settings labels (line 112), file dir names (line 130), even the iframe's MOCK wp-eyebrow and h1.post (lines 103–104). The iframe mock using Anton means the design isn't even displaying realistic WordPress content — it's Anton everywhere.

## Three concrete suggested fixes (Round 2)
1. The iframe mock uses Anton for `wp-eyebrow` and the post `h1` (lines 103–104). This is a WordPress preview — it should use a realistic theme font (Public Sans is fine, or a typical WP theme face), NOT the playground's chrome typeface. Currently the iframe doesn't look like a WordPress site at all; it looks like the chrome. Replace with Public Sans or a serif.
2. The iframe-area corner label `FIELD · iframe surface` (line 108) is a CAD-style annotation on the iframe — remove. The pane already names the surface.
3. The rail jersey numerals `01–05` all start with `0` (line 27 — need to verify the markup). Drop the leading zero — `1, 2, 3, 4, 5` would have much more distinct silhouettes (1 narrow, 2 round-top, 3 double-curl, 4 angular, 5 mixed).
