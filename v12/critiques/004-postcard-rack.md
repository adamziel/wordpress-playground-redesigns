# Critique — 004-postcard-rack — Round 1

## Verdict
Major revisions. The list-pattern is conceptually distinct, but the execution undermines it: postcards are too small and tilt-stacked vertically, producing an illegible accordion of cream rectangles. The pane width forces the cards to stack as horizontal strips, losing the "rack" idiom entirely.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites is genuinely distinct from any other v12 — tilted cream cards with stamp, postmark, sender line.
- Matches the `listPattern` ("postcard rack — tilted cream card with corner stamp and circular postmark") but the execution does not communicate "rack" — the cards stack in a column without breathing room and the postmark seal is so large it eats the card.
- Forbidden icon-left + 2-row-text pattern is absent — the postcards do NOT use the icon+2-row anti-pattern.
- Start-routes also render as `.postcard` elements — same dialect, good.
- Library uses a 4-column `.wall` of postcards — consistent.

## Hard violations of v11/v12 taste constraints
- No purple. Teal `#3E8A78`.
- Mono: `.file-editor` uses `'Courier New', ui-monospace, monospace` (line 206) — allowed inside file editor per BRIEF §3.
- No forbidden fonts in chrome — DM Serif Display + Lora.
- Rail: 5 stamp glyphs (lighthouse/key/letter/cabinet/ledger) + identity. Distinct silhouettes by intent.
- Borders: postcards have one outline (active state outline-offset is OK). Stamps have dashed borders. The `border: 1px solid` on `.postcard` plus the `.stamp`'s own `border: 1px dashed` is acceptable since the stamp is a discrete object on the card surface, not nested chrome.
- No secondary text under rail buttons.
- Widget at iframe bottom-left uses `border-radius:18px` (line 104) — an inconsistent rounded shape against an otherwise hard-edged design language. Minor.

## Annotation overlays / explainer chrome
None floating on the device.

## Rail button distinctness (Forest-Botanical test)
Five hand-drawn SVG glyphs claimed; need to spot-check the actual `<svg>` markup. From the screenshot they read as small line drawings — likely passing, but the rail is so thin and the glyphs so small they're hard to read. Acceptable.

## Iframe primacy
Yes — iframe occupies right two-thirds, pane is fixed to the left. The cream postcards in the pane are visually loud (high contrast against dark wall), but the iframe still wins by area.

## Typography
DM Serif Display + Lora, both Google-Fonts-linked. The italic Lora makes a lot of UI prose look diary-ish — fits the idiom. The "Lora italic" used heavily everywhere reduces hierarchy.

## Three concrete suggested fixes (Round 2)
1. The postcards in the pane are too small relative to their `.postmark` seal (84×84px on a ~200px-wide card) — the postmark dominates and crowds the title. Either shrink `.postmark` to ~50px, OR widen the pane to 520px and let each postcard breathe (line 96).
2. Switch the pane saved-sites layout from a vertical column to a vertical staircase that emphasises the rotation (e.g. `display:grid;grid-template-columns:1fr;gap:-12px;` so they actually overlap like rack cards). Currently each card is its own block with a full margin underneath, which destroys the "rack" pretense.
3. The `border-radius:18px` on widget (line 104) and `border-radius:99px` on the Apply button (line 196) break the otherwise pre-digital, hard-edged paper aesthetic. Make them square. The teal pill-shaped Apply button looks like a 2018 SaaS app intruding on a 1962 postcard.
