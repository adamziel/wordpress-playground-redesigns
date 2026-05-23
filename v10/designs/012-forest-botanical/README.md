# 012 — Forest Botanical

A field-guide reinterpretation of the v7 #010 Quiet Rail. Same interaction model — left rail of 5 docks, one swap-content pane, slim top capsule, corner site widget, modal library overlay, mobile bottom-bar mirror — drawn with the patience of a botanist's notebook.

## Locked vs explored

**Locked (the v10 model):** one quiet rail at left, one secondary pane that swaps when you change rails, slim 38px top capsule over the iframe, frosted corner widget at the bottom of the iframe area, z3 modal library reachable from the Sites pane and the command palette, mobile mirror with the rail rotated to a bottom tab bar.

**Explored (the Forest Botanical idiom):**

- Deep emerald (#1F3A2E) ink on cream (#F4EEDC) paper, ochre (#C58E3A) as the single warm accent.
- Newsreader serif for headings (with the occasional italic), Inter for body text and small labels.
- 1px ochre hairlines as the only border vocabulary. Section dividers terminate in tiny hand-drawn leaf-cap ornaments rendered as inline SVG.
- The top capsule is rendered as an olivewood slab — a horizontal grain texture in two warm browns.
- The corner site widget is a botanical sticker — a small irregular paper card with a pressed-leaf illustration.
- The library overlay is laid out like a field-guide: a left index of 10 categories, a slow grid of 16+ specimen cards with botanical illustrations as decorative chips.
- The pane arrangement is the simplest of the 12 locked designs: five separate dock icons, each opening a distinct pane (Sites · Settings · Files · Blueprint · Database · Logs).

## Trade-offs

- **Calm but slow:** the serif headings and decorative ornaments make the chrome feel considered rather than urgent. Good for long working sessions; less suited to high-frequency switching.
- **Single-purpose docks:** every tool gets a dedicated pane, which trades context (you cannot see Files and Database side-by-side) for clarity (each pane is exactly one job).
- **Decorative SVG:** the leaf-caps and botanical stickers are inline SVG, kept under ~1kb each. They are decorative, not load-bearing — they degrade gracefully into 1px hairlines on narrow viewports.
- **The iframe is still the loudest object** because the cream chrome is intentionally low-contrast against the emerald and ochre accents. The eye lands on the WordPress preview first; the rail and pane recede into paper.
