# 003 · Observatory Readout

## Thesis

An astronomical control desk at 2 a.m. — flat dark surfaces (rail `#0B0E12`, pane `#10141A`, iframe area `#070A0E`), faint horizon rules between sections, and one warm amber star (`#E5A24A`) reserved for state-of-attention. Fraunces (low-contrast soft cut at variable optical-size) carries the antique-instrument voice on pane titles, saved-site names, and section topics; Public Sans drives the body, forms, and tables. The rail holds five celestial marks built as inline SVG, each a genuinely distinct silhouette:

- **Sites** — a ringed dot (planet glyph).
- **Site Manager** — an italic Fraunces `SM` ligature (the only literal letterform in the rail).
- **Blueprint** — a transit-line dash with a small tick (instrument scale).
- **Database** — three full-width stacked horizon bars (data tiers).
- **Logs** — a stacked log-stack: three lines of *unequal length* at top/middle/bottom with a trailing dot on the last row — vertically biased so its silhouette never collides with Database's full-width horizontals.

No two could be confused at speed.

## Why is the iframe the loudest object on the screen?

Because the chrome is flat charcoal blue with a single muted amber filament — when the iframe paints content, it is the only place colour saturation actually lives.

## What is locked vs. what is explored

**Locked**: five rail docks, one identity mark, slim top capsule with refresh + address + WP Admin + Homepage + name + save pill + More + Fullscreen, corner widget, modal library overlay, mobile bottom-bar mirror, 5-dock pane arrangement.

**Explored**: the celestial-mark vocabulary (5 distinct silhouettes instead of one icon family), Fraunces italic used as a "section topic" marker (e.g. *Settings*, *Database*, *Logs* in the pane heading), the blueprint library cards as "magnitude bars" with `m N` survey-number identifiers, and the orbit-spinner for the booting state.

## Round-2 revisions

Five concrete fixes applied after critique:

1. **Annotation chips removed from inside the chrome.** The `panel-label` and `panel-note` chips were sitting at `top:14px` inside the `.desktop` frame, overlapping the topstrip and the WP-Admin / Homepage / save-pill cluster. They now live *above* each panel as a single thin caption row, never covering chrome. The 22 explainer chips that the critic counted are gone.
2. **Logs mark is now silhouette-distinct from Database.** The previous Morse triplet (two horizontals + dot) read as "horizon bars minus one" from the corner of the eye, too close to Database's three full-width horizontals. The new Logs mark is a log-stack: three lines of *unequal length* at vertically-offset positions (top short, middle full, bottom shorter with a trailing dot) — vertically biased and clearly different from the full-width horizontal stack of Database.
3. **Identity mark replaced.** The Unicode `★` was the only glyph in the system that wasn't drawn in the SVG vocabulary or set in Fraunces — it read as a stray decoration. It's now a Fraunces italic `P` in amber, consistent with the brief's tiny-`P` convention used by other designs (001 / 004 / 009) and matching the system's typography.
4. **Removed explainer pane-foots.** `Five dials on the rail · settings is one of them`, `Adminer and phpMyAdmin open in the iframe`, and `Tail mode · auto-scroll` were designer commentary leaking onto the chrome. They're gone. The borderline `Esc to close · ⌘K to switch dock` was shortened to just `Esc to close` (the keyboard shortcut chip is the floater the brief forbids).
5. **Removed the `F` keycap chip** next to Fullscreen — the button is its own affordance, and the brief caps affordances at 8.

## Trade-offs

The cost of giving each rail dock its own silhouette is rendering-engine reliance (the celestial marks are inline SVG, not an icon font, so they scale and recolour with CSS but add bytes). The bet is that the marks are far easier to *remember* than a row of identical squares — once you have associated *ringed dot* with Sites, the recall is instant. The other trade-off: Fraunces italic and Public Sans is a two-face system, so the chrome carries two voices instead of one. We accept this because the labour split (display vs. forms) is honest and each face does what it does best — the italic Fraunces tells you what you're looking at; the Public Sans tells you what to type.
