# v12 Round 2 — Critic Summary

## Headline

All 20 designs are SHIP after Round 2. No "one more pass," no "two more passes," no regressions.

The 20-design diversity test still holds — the set reads as 20 distinct shapes of list at thumbnail and at full screen. The four typographic families identified in Round 1 (type-as-data, tabular/ledger, physical-objects, prose/inscription) remain visible as natural neighborhoods, but within each family the designs are individuated.

## Cross-cutting fixes — did they land?

### A. Iframe-area pedagogical corner labels (#016–#020) — ✓ ALL FIVE LANDED
Designer 4 removed every `.iframe-area::after` selector. No "PLAN-W3 · iframe surface", no "FIELD · iframe surface", no "the broadsheet · iframe surface", no "hairline · iframe surface", no "the annual report · iframe" remains on any of the five iframes. This was the biggest cross-cutting requirement and it's clean across the board.

### B. Corner widget two-row anti-pattern — ✓ ALL ELEVEN LANDED
Every flagged corner widget collapsed to a single typographic compound:
- #001 → `Coffee Shop — live` with status dot
- #002 → stencil destination + Public Sans status word on one baseline
- #006 → ribbon + name, no `.st` second line
- #007 → roman ordinal + italic name (no `.asc`)
- #008 → single handwritten "Coffee Shop" with red underline
- #009 → italic Playfair name only
- #011 → uppercase Cinzel "COFFEE SHOP" + status pulse
- #014 → DM Serif Display "Coffee Shop" only
- #015 → Anton "COFFEE SHOP — NOW SHOWING" on one baseline
- #017 → number tile + name (its design language)
- #018 → italic Playfair "Coffee Shop — the morning edition"

### C. Rail-button silhouette weakness (#002, #003, #013, #017) — ✓ ALL FOUR LANDED
- #002: replaced `SI/SM/BP/DB/LG` with `S (28px) / MGR / BP / D·B / LOG` at five distinct sizes
- #003: dot rail dots scaled up from ~7px to 13px+; per-dock frames removed; silhouettes visible
- #013: rail completely rebuilt — 5 distinct SVG glyphs (muster-grid, rank-bars, wedge, drums, ticker-scratches), fully distinct from #002 now
- #017: leading zeros dropped — `1 2 3 4 5` instead of `01–05`; Anton digit silhouettes are decisively different

### D. Mono inside typed-phrase/diff (#008, #010, #014, #015) — ✓ LANDED
#008 and #010 explicitly switched diff blocks and typed-phrase inputs from `ui-monospace` to `Source Serif 4` / `Atkinson Hyperlegible` with tabular-figures. #015 typed-row input switched from Anton to Public Sans. #014 carries no mono outside the editor in the audit. All compliant with §3.

### E. Saira Stencil One overuse (#002, #013, #015) — ✓ MITIGATED
#013 dropped 2-letter codes entirely (now SVG glyphs). #002 reduced bleed but stencil still appears in chrome. #015 (Anton, not Saira) reduced text-shadow noise. The "stencil cluster" of Round 1 is now genuinely diverse; #002 and #013 no longer read as siblings.

### F. Cinematic Lookbook tile uniformity (#009) — ✓ LANDED
Hue separation pushed hard: coffee=warm orange, vueo=blue-teal, gaming=red, unsaved=neutral. Lookbook no longer reads as a brown column.

## Round-1-vs-Round-2 verdict shifts

| # | Slug | R1 verdict | R2 verdict |
|---|------|-----------|-----------|
| 001 | newsprint-ledger | ship-as-is, minor | SHIP |
| 002 | departure-board | minor | SHIP |
| 003 | punchcard | minor | SHIP |
| 004 | postcard-rack | MAJOR | SHIP |
| 005 | stamp-sheet | minor | SHIP |
| 006 | vertical-book-spines | ship | SHIP |
| 007 | wall-labels-museum | ship | SHIP |
| 008 | hand-lettered-ledger | minor | SHIP |
| 009 | cinematic-lookbook | minor | SHIP |
| 010 | liner-notes-column | ship | SHIP |
| 011 | inscription-hall | minor | SHIP |
| 012 | variable-axis-specimen | ship | SHIP |
| 013 | stencil-id-plates | minor (sim) | SHIP |
| 014 | hierarchy-by-size | ship | SHIP |
| 015 | marquee-letterboard | minor | SHIP |
| 016 | architectural-plan | ship, minor | SHIP |
| 017 | sportsbook-jersey | minor (§11) | SHIP |
| 018 | newspaper-masthead | minor | SHIP |
| 019 | inverted-contrast | minor | SHIP |
| 020 | tabular-figures | minor (§9) | SHIP |

## Regressions
None. No design broke or weakened any aspect that Round 1 had passed.

## Standout Round-2 improvements

1. **#013 stencil-id-plates** — biggest single-design transformation: rail switched from 2-letter monograms to 5 distinct SVG glyphs, plates got clip-path corner notches. Diversity hit vs #002 fully resolved.
2. **#004 postcard-rack** — Round 1's only MAJOR ships clean. Postcards now actually look like a rack (proper overlap, alternating tilts, breathing room); stamp shrunk; SaaS pill button removed.
3. **#017 sportsbook-jersey** — leading-zero drop and Anton-out-of-iframe move both nail Round 1's borderline §11 concern.

## Final recommendation

**Ship the whole set.** All 20 designs are at SHIP verdict. No design needs a Round 3 polish pass. The cross-cutting items (iframe corner labels, corner-widget anti-pattern, rail silhouettes) are clean across the board. The 20-design diversity test holds.

The publish step (final visual review by the lead, then push to the live URL) is the only remaining gate.
