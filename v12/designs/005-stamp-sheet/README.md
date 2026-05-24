# 005 — Stamp Sheet

## Thesis

A collected philatelic sheet — perforated, single-color, scholarly. Cormorant Garamond italic titles centred on cream stamps; Atkinson Hyperlegible for prose and dock labels. A single cinnabar accent on the active stamp's inner border, the save pill, and the booting plate. The dark page is the cabinet; the cream stamps are the page where the collector's eye lands.

## List pattern

**Perforated stamp grid.** Each saved site is a 100% × 160px `<div class="stamp">` whose perforated edge is produced by a CSS `mask: radial-gradient(circle at 5px 5px, transparent 3px, #000 3.5px) 0 0/10px 10px` — real perforation, not faked with dots. Inside the perforation, three centred items: an italic country line at the top (`Republic of Playground`), the title in italic Cormorant Garamond, and a *single* denomination at the bottom-right corner (`2d`, `7d`). The denomination is the only data — there is no second prose row of meta. The Library overlay extends this into a 5-column album of 18+ stamps; categories appear as the "country" line on each stamp.

## Focus-test answer

> Where does the eye land?

On the active stamp's inner cinnabar border in the saved-sites grid — it is the only chromatic 2px stroke on the entire page. Then the eye drifts to the typeset italic titles, which are the brightest text on the cream backgrounds. The iframe is the loudest object after the stamp grid.

## Trade-offs

- **CSS mask perforation is fragile.** It works in modern browsers but the radial-gradient mask costs paint cycles. We accept the cost because faking perforation with dots looks cheap; real masking is the point.
- **The "denomination" stands in for the data row.** `2d`, `7d` are stamp values that *also* happen to encode something the user can read as recency or weight. This is the metaphor doing double duty — but it cannot carry the full data load of a real settings row. We accept that as deliberate restraint; the manager pane carries the full settings.
- **Five line-drawing dock glyphs require silhouette discipline.** Compass rose · key · folded paper · anchor stone · fountain pen — each must remain visually distinguishable at 30px and not turn into a uniform line family.
- **Cream stamps on dark are loud.** They dominate visually, which is the point — collectors look at stamps, not at the album binding. But this means the rest of the chrome must hold absolute monochrome discipline; adding a second warm tint would make the stamps feel like generic chips.
- **No data row.** Some users will want sortable columns or version sub-labels; we don't provide them in the static frame because doing so would force the design into the forbidden v11 card pattern. The settings pane covers what the rack does not.
