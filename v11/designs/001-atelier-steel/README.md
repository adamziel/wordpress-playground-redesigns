# 001 · Atelier Steel

## Thesis

A quiet architect's night studio. Three tones of charcoal — rail `#0E1013`, pane `#14171B`, iframe area `#080A0D` — separated by tone alone, never by a border. One typeface (Geist) at two weights, used everywhere from the rail monograms to the file-tree to the database row labels. A single bone-warm foil (`#D7CDB6`) is reserved for two things and two things only: the 2 px left bar of the active dock, and the saving-pill indicator. Nothing else in the chrome is coloured.

This is the disciplined edge of the v11 set. It is the locked v7 #010 interaction model (quiet rail · single pane · slim capsule · corner widget · library overlay · mobile mirror) rendered with all decoration removed. No icon proliferation, no chromatic accents, no nested cards.

## Why is the iframe the loudest object on the screen?

Because the chrome around it is monochrome charcoal with a single warm foil — when colour appears on the screen, it can only be coming from the iframe.

## What is locked vs. what is explored

**Locked** (do not reshape): five rail docks (Sites · Site Manager · Blueprint · Database · Logs), one identity mark, slim top capsule with refresh + address + WP Admin + Homepage + name + save pill + More + Fullscreen, corner site widget, modal library overlay, mobile bottom-bar mirror, 5-dock pane arrangement.

**Explored**: removing all chromatic accent, removing all icon sets in favour of typeset monograms, removing all card borders in favour of tone-on-tone separation, reducing the More menu to four entries with keyboard shortcuts, and putting the path in the capsule address bar in proportional Geist (not monospace).

## Round-2 revisions

Three concrete fixes applied after critique:

1. **Rail silhouettes are now distinct.** The five monograms alternate register: `Si` roman · `SM` *italic* · `Bp` roman · `Db` *italic* · `Lg` roman. At rendered size the silhouettes diverge — Geist's italic has a different slant, baseline and aperture that break the "five-of-the-same-shape" pattern flagged by the critic. No new ink, no new shapes, no icons — solved entirely in the typeface that was already loaded (Solution B in the lead's rail-fix rubric).
2. **Identity `P` reads as a header, not a sixth dock.** It is now larger (19 px vs 14 px) and set in Geist italic 600 in bone-warm, so the eye reads "logo · five marks" rather than "six near-identical letters".
3. **Active dock gains a second redundant cue.** In addition to the 2 px left bar, the active mark now has a 1 px bone underline at the baseline. Both cues are bone-foil — no new accent introduced.

I also removed the explainer overlay chips (`panel-label` / `panel-note`) from inside the desktop frame — they now sit *above* each desktop as a single thin caption row, so nothing overlays the topstrip or rail. Two pane-foots that were carrying README copy (`Five tools on the rail · settings is one of them`, `Adminer and phpMyAdmin open in the iframe`) were replaced with true status. The `⌘K · switch dock` shortcut floater is gone. A small dedicated panel (Ks) now renders all four save-pill states side-by-side so the tonal vocabulary is provable at a glance.

## Trade-offs

The cost of this discipline is recognition speed for first-time visitors. A user accustomed to icon railbars may need one beat longer to learn `Si SM Bp Db Lg` than to scan for a "database" icon. The bet is that the monograms — with italic/roman alternation — are easier to *return* to: they read like a paper directory rather than a toolbar, and the silence of the chrome lets the iframe win every attention contest. The other trade-off: the save-state cycle (`Unsaved → Saving → Saved → Stale`) has to carry a single indicator-dot tint shift; we accept that subtlety as the price of single-accent rigour, and Panel Ks now lays the cycle out so it can be inspected.
