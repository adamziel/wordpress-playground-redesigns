# v12 #017 — Sportsbook Jersey

## Thesis
A stadium jersey wall after the players have gone home. Bold display numerals in Anton, jersey-clay (#B14A39) accent, single team color. The interface treats your saved playgrounds as a roster — each is a numbered jersey on the wall, and the number is the dominant visual. There is no row of icons, there is no row of meta text. There is a tile, and on the tile there is a number, and beside the number there is one line of Public Sans that says what the playground is called. That's it.

## List pattern
Jersey tiles. A 336-wide × 100-tall tile composed of two parts: a 120px wide left "panel" holding a 74px Anton numeral (01, 02, 03, 04…) on a vertical-gradient charcoal field, and a right "body" containing exactly one Public Sans 16px medium line: the title. A six-pixel clay stripe runs along the left edge; on the active tile, the stripe becomes saturated clay and the numeral changes from charcoal to clay. There is no second text row. There is no per-tile icon. Start-route tiles use the same primitive with a two-character "play call" numeral (V1, W2, G3, H4, B5, Z6) to keep the dialect consistent. Library cards are the same tile shrunk to a 4-column grid.

## Focus-test answer
**Q: Which playground is "live"?** A: It has the clay numeral and clay stripe. Everything else is charcoal. The active state is read from the number's color, not from a chip in a second row.

## Trade-offs
Anton at 74px is loud — it is intentionally the loudest typographic object outside the iframe. The risk is that it competes with the iframe; we mitigate by clipping the numeral inside a tile (not bleeding to edge) and giving the tile a charcoal field that recedes against the pane's #13141A background. The single accent rule is respected: clay is used for the saving pill, the active jersey numeral, the active stripe, the identity mark, and nowhere else. The "icon-left + two-rows" pattern is replaced by "numeral-left + one-row"; the numeral is *the* visual, not a decoration of the visual. Start routes also do not get a meta-second-row. Library cards do not get a meta-second-row. There is no badge on the tile that itself contains two lines.
