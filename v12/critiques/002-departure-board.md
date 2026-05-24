# Critique — 002-departure-board — Round 1

## Verdict
Ship with minor revisions. Strong, distinctive answer to §11; the stencil idiom + split-flap rows reads as a 1970s rail terminal at a glance.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites list: stencil-caps title on the left, single status word (LIVE / READY / IDLE / STALE / BOOT / NEW) on the right, hairline between rows, no second text line, no per-row icon. Markup at `.flap` lines 90–96 — clean split-flap row.
- Matches `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is absent.
- Start-routes (`Vanilla WordPress`, `WordPress PR · TRUNK`, `Gutenberg PR · #62004` etc.) render with the same `.flap` element and the same status-word column — same dialect, no substitution.
- Library overlay uses a `lib-board-grid` 4-column row (`plat / dest / cat / stat`) — also stencil-cap, also status-right — consistent dialect.

## Hard violations of v11/v12 taste constraints
- No purple. Accent is amber `#E08A2C`. Status colors (ok green, warn) are used in addition; per §7 status colors are the allowed exception.
- Mono: none outside the code editor. `Saira Stencil One` and `Public Sans` only.
- No forbidden fonts.
- Rail: identity mast + 5 docks (`SI · SM · BP · DB · LG`). No extras.
- Borders: `.flap` has a bottom hairline only — no nesting. Good.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None. The "PLATE I — WORKING SESSION" caption above the frame is between-panel chrome, not a floater on the device.

## Rail button distinctness (Forest-Botanical test)
Five stencil two-letter codes at slightly varied font-sizes (16–18px) and letter-spacings (.04–.10em). The variation is real but subtle — they READ as a uniform stencil column. This is the weakest part of the design. The two-letter monogram pairs are exactly what BRIEF §5 cautions against ("no row of identical monogram pairs"). The variation in cut weight doesn't fully rescue them.

## Iframe primacy
Yes — iframe holds the right two-thirds, pane 440px, rail 72px. The pane's amber accents are dim enough they don't fight the iframe.

## Typography
Saira Stencil One + Public Sans loaded via Google Fonts CSS2 (line 9). Stencil is heavily used everywhere — titles, status, address-bar pgname, save pill, even widget metadata. This is on-theme but may be overused (see fix 1).

## Three concrete suggested fixes (Round 2)
1. Rail dock differentiation is the weakest beat. The `SI/SM/BP/DB/LG` row reads as five identical monogram tiles. Either (a) replace 2-3 of them with a single Saira letter at varied weights, or (b) use 5 different 2-letter combinations with deliberately distinct silhouettes (e.g. `SI · MG · BP · DB · LG` — `MG` reads very differently from `SM`). Lines 71–75.
2. Saira Stencil One creeps into widget metadata (`.widget .ed`, line 109), pane-foot, and clock displays — places where Public Sans would breathe. Constrain stencil to titles + status words; let body text be Public Sans. Reduces the "skinned with one font" feeling.
3. The `.flap.active` background `rgba(224,138,44,.07)` (line 92) is so subtle it disappears against the dim pane background. Either bump to `.12` or add a 2px amber left bar (matching the rail's active indicator pattern) — currently the active state is only the amber title color.
