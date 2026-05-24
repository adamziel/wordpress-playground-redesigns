# 004 — Postcard Rack

## Thesis

A wire postcard rack outside a seaside bookshop at 9pm. The walls of the shop are dark; the rack is the warm cream object that catches the eye. Saved sites are *postcards* — tilted slightly, each with a stamp in the upper right, a postmark below the title, and a typed sender line at the foot. DM Serif Display sets the titles (high-contrast, romantic, generous); Lora handles all italic body prose; faded ocean teal is the only accent and it lives on the active card's outline, the stamp on the active card, and the save pill.

## List pattern

**Postcard rack.** Each saved site is a tilted (−2°…+2.5°) cream-coloured card with three painted elements: a stamp in the corner, a typeset italic title, and a circular postmark with a numeric date in the centre and a small franking line below. The "from →" line at the bottom right is a hand-typed sender note, not a meta-row of figures — it reads as language ("→ playground.test · WP 6.7 · PHP 8.2"). The active card gets a teal outline and a teal-coloured stamp. The Library overlay extends the rack into a full wall — 16 + cards in a 4-column grid, each tilted slightly, category as a small italic tag at the bottom-left. There is **no row of `[icon] title / meta-line`** anywhere in the design — the metaphor literally cannot accommodate that shape.

## Focus-test answer

> Where does the eye land?

On the active postcard — because the teal outline is the only chromatic stroke in the pane, and the card itself is the lightest cream surface against the entire dark page. The iframe is the next-loudest object, then the rack as a whole.

## Trade-offs

- **Tilted cards eat vertical room.** Six visible postcards in the pane take more height than six flat rows would. We accept this because the metaphor depends on the rack feeling *casual*, like a real rack of cards, not a list of database rows.
- **The postmark + "from →" line carries the meta.** It risks looking like a two-row card pattern at first glance — but the date is *inside the circular franking arc*, not in a metadata line, and the "from →" is typeset as a sender note (italic Lora) not a key-value column. Read together they speak the postcard language. If a designer simplifies them into "WP 6.7 · PHP 8.2 · 14.2 MB" the whole thing collapses to the forbidden v11 pattern.
- **Hand-drawn rail glyphs require maintenance.** Lighthouse · key · folded letter · cabinet · ledger — five SVG line drawings. Adding a sixth dock would break the line family.
- **The cream cards are bright.** They are the brightest objects on the page after the iframe. This is deliberate: the rack is what you came to look at. But it does mean the chrome should hold absolute discipline elsewhere — adding any other warm tone makes the rack feel like a chip.
- **No data row.** Some users will want a `Sort by size` toggle; the design doesn't provide one in this static frame. The trade-off is metaphor coherence — a postcard rack doesn't sort.
