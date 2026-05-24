# 002 — Departure Board

## Thesis

A 1970s rail terminal at 22:14 — dim incandescent amber, stencil-cut platform codes, the soft clack of a split-flap board. Saved sites are *destinations*; status words are the only thing the board offers as meta. The whole UI is wrapped in railway typography — Saira Stencil One for everything that names something, Public Sans for prose. Single amber accent reserved for the active flap row and the saving pill's underline.

## List pattern

**Split-flap rows.** Each saved site and each start route is a two-column flap: title left (stencil all-caps), single one-word status right (`LIVE`, `READY`, `IDLE`, `BOOT`, `STALE`, `NEW`). Hairline rule between rows; no second text row; no per-row icon. The status word is the only meta — there is no "WP 6.7 · PHP 8.2 · 14.2 MB" line because a departure board does not care about the train's dimensions, only whether it is leaving. The active row gets a faint amber wash and the title shifts to the amber-bright tone. The Library overlay extends this metaphor into a full departures grid: platform number + destination + category + status.

## Focus-test answer

> Where does the eye land?

On the amber-tinted active flap row in the Sites pane. Because the rest of the board is monochrome ink with a single amber accent, the LIVE status word and the active title are the only chromatic events on the entire dark page. The iframe is the loudest object after that.

## Trade-offs

- **Stencil typography is loud.** Saira Stencil One is a strong choice and risks fatigue if used everywhere. Restricted to: titles, dock codes, status words, section bands. Body and field meta remain in Public Sans.
- **Status words are a small vocabulary.** Six words cover all states. If product needs more (e.g. "snapshotting", "exporting"), they collapse to existing buckets (`BOOT`, `READY`) rather than expanding the lexicon. That's a deliberate constraint of the metaphor.
- **No long site names.** A flap row breaks if the title exceeds ~26 characters at this width. We accept truncation because preserving the typographic register matters more.
- **Two-letter dock codes require initial learning.** `SI · SM · BP · DB · LG` is opaque on first encounter. The trade-off pays back as soon as the user reads them once — they become silhouettes thereafter. Hover would expand them; the static render holds the discipline.
- **Amber on dark is fragile.** If anyone adds a second accent the magic collapses. The design depends on amber being the *only* warm tone in the grid.
