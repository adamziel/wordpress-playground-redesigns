# Critique — 015-marquee-letterboard — Round 1

## Verdict
Ship with minor revisions. Strong typography-led answer to §11 — the slot-rows with title + tagline read as cinema marquee plastic letters.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.slot` has `marquee-title` (Anton large caps) + `dash` + `tagline` (Anton smaller caps in bulb-yellow). Lines 106–118. The tagline is a slogan-style state word (`NOW SHOWING`, `IDLE`, `PREMIERE`, etc.), not a meta-line.
- Matches `listPattern`. The tagline is short, typographically integrated, and serves the marquee idiom — it's not "title + WP 6.7 / PHP 8.2".
- Forbidden icon-left + 2-row-text pattern is absent — the title and tagline sit on one baseline (`align-items:baseline`, line 106) which means it reads as one horizontal line.
- Start-routes use `.slot` (likely with `.slot.small`, lines 117–118) — same dialect.
- Library overlay (per direction) is a full marquee wall — should be confirmed at Round 2.

## Hard violations of v11/v12 taste constraints
- No purple. Bulb-yellow `#FFD068`.
- Mono used: `ui-monospace` in `.editor-pane`, `.code-block`, `.blueprint-json` — all code surfaces.
- Anton + Public Sans. Both allowed.
- Rail: 5 Anton uppercase letters S M B D L at 32px (line 87). Distinct silhouettes by Anton's idiosyncratic letterforms (M and B are visually wide; S, L, D are narrower). PASSES.
- Borders: slot has top + bottom hairlines (lines 106, 109) — these are part of the marquee groove. The combined effect produces "stacked rules between rows" which is appropriate for the idiom.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None floating on the device.

## Rail button distinctness (Forest-Botanical test)
Five Anton capitals at 32px. Anton's letterforms have distinct silhouettes (M wide, S narrow, B tall, D rounded, L narrow). The active-state glow is the differentiator. Strong.

## Iframe primacy
Yes — pane is 390px. The Anton titles are large but contained inside the slot rows. Iframe wins by area.

## Typography
Anton + Public Sans, both Google-Fonts-linked. Anton dominates — used for nearly every visible UI label (settings labels, db labels, file dir names, save pill, even the typed-phrase input at line 165). Strong identity, but Anton is doing too much.

## Three concrete suggested fixes (Round 2)
1. The typed-phrase input `.typed-row input` (line 165) uses `Anton` 16px uppercase with letter-spacing — typing the confirmation phrase in this typeface makes it feel like a marquee label, not a user input. Acceptable as design choice but consider Public Sans for the actual input (Anton for the label only, line 164).
2. The corner widget `.cws` (line 125) has Anton title + `.ms` in Public Sans 11px (line 127) — two text elements with two different typefaces on one row. The Public Sans `ms` breaks the marquee voice. Drop it or use Anton at small size.
3. Many `text-shadow` glows: rail dock active (line 89), slot.current marquee-title (line 115), rail mark (line 85), settings (line 152). The aggregate "lit bulb" effect risks reading as neon-y. Cut the text-shadows on at least the settings toggle (line 152) and the mark (line 85), keep only the active marquee-title shadow.
