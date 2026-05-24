# WordPress Playground v12 — Twenty Distinct Dark Pages

The user has reviewed v11 and rejected it as too similar across designs. The specific failure mode: **every v11 design renders saved-sites and start-routes as the same card pattern — an icon at the left, two rows of text (title on top, meta-line beneath)**. Examples they cited as bad: `Coffee Shop / opened 14:30 · 14.2 MB · WP 6.7 / PHP 8.2 / running` and `Vanilla WordPress / Latest stable · WP 6.7 / PHP 8.2`. The metaphor varied; the list shape didn't.

v12 fixes this. Twenty new dark-theme designs, each with a **genuinely distinct list-rendering ontology**. The metaphor must dictate what a list-item *is*, not just how it's decorated.

Live URL: `https://adamziel.github.io/wordpress-playground-redesigns/v12/`.

---

## The locked interaction model (do not reshape — inherited from v7 #010)

1. **Iframe is the loudest object.** Always. Everything else recedes.
2. **One quiet left rail** (~64–80px). Identity mark + exactly 5 distinct dock buttons (Sites, Site Manager, Blueprint, Database, Logs). The 5 buttons must be visually distinct from each other in silhouette, not just textually different.
3. **One swap-content pane** to the right of the rail. Clicking a dock swaps the pane contents.
4. **A slim top capsule** across the top of the iframe area. Refresh, address bar, name, save-state pill, fullscreen, More menu. Under 8 affordances.
5. **A corner site widget** at the iframe's bottom-left or bottom-right.
6. **A modal Library overlay** for the 43-blueprint browser. 10 categories, search, ≥ 16 cards.
7. **A mobile mirror** at 390 × 844 — rail rotates to bottom tab bar, pane becomes bottom sheet, library full-screen.

---

## Hard taste constraints (carried from v11 — non-negotiable)

1. **Genuinely dark.** Page background `#06–#1A` range. No "dark accent on light".
2. **No purple, plum, violet, magenta-leaning hues.** Anywhere. Validator scans HSL — anything hue 250°–340° with S > 22% and L 18-82% will fail.
3. **No monospace outside the in-pane code editor.** Path inputs, labels, save pills, log lines, blueprint JSON titles — proportional. The code editor body and inline `<code>` inside the file editor may be monospace.
4. **No typical font faces.** Avoid Inter, Roboto, Helvetica, Arial, ui-sans-serif default, JetBrains Mono. Use distinctive typefaces (Geist, Mona Sans, Manrope, DM Sans, Outfit, Plus Jakarta Sans, Public Sans, Sora, Space Grotesk, Bricolage Grotesque, Recursive Sans, Atkinson Hyperlegible, Fraunces, Newsreader, Spectral, Lora, Crimson Pro, Cormorant Garamond, Cinzel, Playfair Display, Bodoni Moda, DM Serif Display, Anton, Saira Stencil One, Caveat, Caveat Brush, Special Elite, Cutive, Source Serif 4, Source Sans 3, Tinos…).
5. **Multiple distinct rail buttons, Forest-Botanical style** — each rail item visually individual in silhouette. No column of identical squares, no row of identical monogram pairs.
6. **No icon proliferation in the sidebar.** Exactly 5 dock buttons + 1 identity mark.
7. **No color proliferation.** Single accent (or zero accent). Status colors are the only exception.
8. **No borders inside borders.** If a card has a border, its inner blocks have no border (max: single bottom rule).
9. **No secondary text under buttons.** Each rail dock has one mark. Buttons in the pane have one label.
10. **Simplicity and clarity over decoration.**

---

## NEW v12 constraint (this is the round's defining rule)

11. **Forbidden card pattern: icon-left + two rows of text.** Specifically banned in the **saved-sites list** AND the **start-route list** AND the **library cards**. If your saved-sites pane looks like this:

```
[icon] Coffee Shop
       opened 14:30 · 14.2 MB · WP 6.7 / PHP 8.2
```

…you have failed this round. Every design must invent a distinct way to render these lists. Below are the patterns to draw from. Your assigned direction in `DIRECTIONS.md` names a specific pattern — use that, do not substitute.

**Acceptable list patterns:**

- **Ledger table with column headers** — `Name | WP | PHP | Size | Updated`, one row per site, hairline separators, no per-row icon, header at the top.
- **Departure board** — split-flap-style rows, title left, single status word right, no second line.
- **Punchcard** — title + a row of perforated dots that encode meta graphically; no meta-line.
- **Postcard rack** — postcards stacked at slight angles in a frame, stamp corner detail; title only, meta on flip-over (hover).
- **Stamp sheet** — perforated stamps in a grid, title centred per stamp, no meta on stamp face.
- **Vertical book spines** — titles set vertical-rl, like spines on a shelf, no second line.
- **Wall labels (museum)** — single prose ascription sentence per entry, no data row.
- **Hand-lettered ledger** — Caveat-Brush-handwritten line per entry, ruled paper.
- **Cinematic lookbook** — image-led square tile with title overlay only.
- **Liner notes column** — track-listing format (numbered, title, runtime), no icon, no meta-row.
- **Inscription** — chiseled stone capitals, single line per entry, no card chrome.
- **Variable-axis specimen** — title's font weight/slant encodes data (e.g., heavier = larger site, italic = current).
- **Stencil ID plates** — single stencil-cut title per entry, no meta visible.
- **Hierarchy by size only** — title font-size encodes recency (biggest = newest), no meta.
- **Marquee letterboard** — cinema plastic-letter signage, bulb count = state.
- **Architectural plan** — rectangles where width encodes site size; title inside the rectangle.
- **Sportsbook jersey tile** — bold display numeral + title on a single tile, no meta.
- **Newspaper masthead** — each entry as a miniature broadsheet masthead with date strip.
- **Inverted-contrast display** — Bodoni-hairline title only, no meta.
- **Tabular figures column** — single column of titles with tabular numerals for size/version aligned by figure (not monospace).

The pattern for **saved sites** and for **start routes** should be from the same family within a design (you don't need to use the same exact pattern for both, but they should clearly speak the same dialect — both as wall labels, or both as stamps, etc.).

---

## What every design must show (feature coverage)

Same as v11. Each `designs/NNN-slug/index.html`:

- Real `<iframe>` with a realistic WordPress mock (no Lorem Ipsum).
- Refresh, address bar, WP Admin, Homepage, fullscreen, save state pill (Unsaved / Saving / Saved / Stale).
- 4 saved playgrounds (name + date + size + WP/PHP versions — but **rendered in your assigned list pattern**, not as icon+2-row cards).
- All 6 start routes: Vanilla WordPress, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip — **rendered in your assigned list pattern**.
- Blueprint gallery with search + all 10 category names (All, Featured, Website, Personal, Content, Themes, Gutenberg, Experiments, WooCommerce, News) + ≥ 16 cards (rendered in a list pattern consistent with the design's voice).
- All 5 Site Manager surfaces (Settings, Files, Blueprint, Database, Logs) reachable.
- 5 settings fields (WordPress version + "Include older versions", PHP version, Language, Allow network access, Create a multisite network).
- Export to GitHub PR + Download .zip.
- Apply + Reset with typed-phrase + diff + auto-snapshot confirmation.
- 3+ states (running session, booting, library or manager open).
- Mobile mirror 390 × 844.
- Realistic mock data: ≥ 6 PHP log lines, sample blueprint JSON, file tree under `/wordpress`, SQLite path `/wordpress/wp-content/database/.ht.sqlite` with size.

---

## File layout

```
v12/designs/NNN-slug/
  index.html      (single self-contained, ≥ 20 000 bytes, all CSS+JS inline, viewport meta required)
  README.md       (≥ 700 chars: thesis, list-pattern, focus-test answer, trade-offs)
  meta.json       (schema below)
```

`meta.json`:
```json
{
  "num": 1,
  "slug": "001-newsprint-ledger",
  "title": "Newsprint Ledger",
  "summary": "≤ 180 chars — name the idiom and the list pattern.",
  "model": "locked",
  "darkAccent": "muted ink-rust #B14A39 — saving pill + active dock left bar only",
  "typeface": "Spectral Italic Display + Public Sans Body",
  "railTreatment": "five distinct silhouettes — describe each",
  "paneArrangement": "5-dock",
  "listPattern": "ledger table with column headers — Name / WP / PHP / Size / Updated, hairline separators, no per-row icon"
}
```

Validator (`scripts/validate-design.mjs`) enforces the feature coverage + the v11 taste constraints (purple ban, no-mono-outside-editor, forbidden-fonts list).

---

## Process for v12 (different from v10/v11)

- 4 designer sessions each build 5 designs in parallel (Round 1).
- A **separate dedicated critic session** reads every design + screenshot and writes a critique file per design.
- Designers iterate from critique (Round 2).
- The same critic session does a second lighter pass.
- Designers polish (Round 3).
- Final visual review by the lead, then publish.

This is two full critique rounds per designer, which the user has explicitly asked for.

---

## The 20-design diversity test

When you lay the 20 desktop screenshots side-by-side, no two should look like they share a card pattern or list ontology. The user explicitly rejected v11 because the 10 designs looked like 10 skins of one row. v12 must look like 20 different things.
