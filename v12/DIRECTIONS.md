# v12 Directions — Twenty Distinct Dark Pages

Read `BRIEF.md` first. All 20 designs preserve the locked v7 #010 interaction model and respect the v11 taste constraints (dark, no purple, no mono outside the code editor, no typical fonts, no icon/color proliferation, no nested borders, no secondary text under buttons). The **new v12 rule (§11)** is the round's defining test: each design renders saved-sites and start-routes in a **distinct list-rendering ontology**, never the icon-left + 2-row-text v10/v11 card.

Synthesized from three independent brainstorms (typography-led, metaphor-led, pattern-led). Each direction below names its list pattern explicitly. The list pattern is non-substitutable — that's how we get 20 visually different pages.

---

### 001 — Newsprint Ledger
- **Idiom**: A serious financial newspaper from 1962, dark-mode edition. Editorial discipline, no decoration.
- **Palette**: rail `#0E0F11` · pane `#15171A` · iframe area `#08090B`. Accent: ink-rust `#B14A39` (saving pill + active dock left bar only).
- **Typefaces**: Spectral Italic Display 500 (headlines) + Public Sans 400 (body + tabular figures with `font-feature-settings: 'tnum'`).
- **Rail buttons**: italic Spectral words set in a vertical column (Sites · Manager · Blueprint · Database · Logs), each word a distinct silhouette by virtue of length.
- **List pattern (saved sites + start routes)**: **Ledger table with column headers**. `Name | WP | PHP | Size | Updated`, hairline separators between rows, no per-row icon, header row at the top with small-cap labels.
- **Library overlay**: a four-column blueprint index with the same tabular logic.

### 002 — Departure Board
- **Idiom**: a 1970s rail terminal split-flap board, dark hall, dim incandescent.
- **Palette**: rail `#0A0A0B` · pane `#101113` · iframe area `#060607`. Accent: amber `#E08A2C` (saving pill + active flap row only).
- **Typefaces**: Saira Stencil One (rail + flap caps) + Public Sans (body). Tabular figures.
- **Rail buttons**: 5 stencil-cut 2-letter "platform codes" (`SI` `SM` `BP` `DB` `LG`), each in a slightly different stencil-cut weight.
- **List pattern**: **Split-flap rows**. Title left in stencil all-caps, single-word status right (`READY`, `LIVE`, `IDLE`, `BOOT`, `STALE`). No second row, no icon. Hairline between rows.
- **Library overlay**: full-board departures grid — destination (blueprint name) + platform (category) + status.

### 003 — Punchcard
- **Idiom**: a 1965 IBM machine room — graphite, gridded, mechanical.
- **Palette**: rail `#0C0E10` · pane `#121519` · iframe area `#070A0C`. Accent: signal yellow `#E2C44A` (saving pill + active dock notch only).
- **Typefaces**: Cutive (rail + titles) + DM Sans (body). Cutive is typewriter-like but not monospace.
- **Rail buttons**: 5 perforated tab-edges, each with a unique punch-pattern (1, 2 stacked, 3 stacked, 1+2-gap, scattered).
- **List pattern**: **Punchcard rows**. Per saved site: title + a row of small circular holes/dots that graphically encode meta (one row per attribute — WP, PHP, size). No icon, no second text row — the dots ARE the meta.
- **Library overlay**: a stack of punchcards, each labeled with a single blueprint title.

### 004 — Postcard Rack
- **Idiom**: a wire postcard rack outside a seaside bookshop at 9pm.
- **Palette**: rail `#101315` · pane `#171B1F` · iframe area `#0A0D10`. Accent: faded ocean teal `#3E8A78` (saving pill + active card outline only).
- **Typefaces**: DM Serif Display (postcard titles) + Lora (body).
- **Rail buttons**: 5 vintage stamp glyphs (lighthouse · key · folded letter · cabinet · ledger), each a hand-drawn SVG line drawing.
- **List pattern**: **Postcard rack**. Each saved site is a tilted card (-3° to +3°) with a stamp corner, a typeset title, a postmark date arc. No data row. Hover would flip the card; in static state, just the front face.
- **Library overlay**: a wider postcard wall.

### 005 — Stamp Sheet
- **Idiom**: a collected philatelic sheet — perforated, single-color, scholarly.
- **Palette**: rail `#0A0B0C` · pane `#13141A` · iframe area `#070809`. Accent: cinnabar `#C24A2C` (saving pill + active stamp border only).
- **Typefaces**: Cormorant Garamond (titles) + Atkinson Hyperlegible (body).
- **Rail buttons**: 5 hand-drawn philatelic motifs (compass rose, key, folded paper, anchor stone, fountain pen), each a distinct silhouette.
- **List pattern**: **Stamp grid**. Each saved site is a 110×140px stamp with perforated edges (CSS `mask`), a title centered, a small denomination-style metadata at the bottom right (e.g. `2d` or `WP 6.7`), but NO meta-line.
- **Library overlay**: a stamp album page.

### 006 — Vertical Book Spines
- **Idiom**: a bookshelf in a small Mayfair antiquarian shop after hours.
- **Palette**: rail `#0E0C0A` · pane `#16130E` · iframe area `#0A0805`. Accent: gilt `#B3893D` (saving pill + active spine ribbon only).
- **Typefaces**: Cormorant Garamond italic (spines) + Atkinson Hyperlegible (body).
- **Rail buttons**: 5 ribbon bookmarks of varying thickness/height — each ribbon a distinct silhouette.
- **List pattern**: **Vertical book spines**. Each saved site is a vertical-rl spine (titles set `writing-mode: vertical-rl`) of varying width — width encodes site size. No per-spine icon, no metadata under title.
- **Library overlay**: a wide shelf of spines grouped by category.

### 007 — Wall Labels (Museum)
- **Idiom**: a small natural-history gallery, dark walls, single picture light on each object.
- **Palette**: rail `#0C0C0D` · pane `#121214` · iframe area `#08080A`. Accent: bone-cream `#D9CFAA` (saving pill + active label highlight only).
- **Typefaces**: Spectral (label headlines) + Plus Jakarta Sans (body).
- **Rail buttons**: 5 Roman numeral wall labels (I, II, III, IV, V), each set in Spectral italic at 22px.
- **List pattern**: **Wall labels (cartouche)**. Each saved site is a small typeset wall-label paragraph — title in italic, then a single prose ascription sentence (e.g. "Coffee Shop · WooCommerce storefront, fourteen products, twelve days in residence."). Reads as language, not data.
- **Library overlay**: a wall of 16 cartouches grouped by gallery.

### 008 — Hand-Lettered Ledger
- **Idiom**: a private journal entry written at 11pm with a fountain pen — but disciplined.
- **Palette**: rail `#0F0D0A` · pane `#15130E` · iframe area `#09070A`. Accent: india ink red `#A14538` (saving pill + active underline only).
- **Typefaces**: Caveat Brush (hand-lettered headlines + rail labels) + Source Serif 4 (body).
- **Rail buttons**: 5 hand-drawn flourishes — a single stroke, a swept curl, a dotted line, a question-mark loop, a fountain-pen squiggle. Each a unique gesture in SVG.
- **List pattern**: **Hand-lettered ledger**. Each saved site is a single Caveat Brush line on a ruled vellum stripe (1px hairline rule underneath). No metadata visible — meta surfaces on hover only.
- **Library overlay**: a hand-written index page with category dividers.

### 009 — Cinematic Lookbook
- **Idiom**: a luxury fashion lookbook, image-led, single typeface, generous gutters.
- **Palette**: rail `#0A0A0B` · pane `#13141A` · iframe area `#070808`. Accent: gold `#C9A24B` (saving pill + active tile border only).
- **Typefaces**: Playfair Display (overlay titles) + Mona Sans (body).
- **Rail buttons**: 5 tiny abstract poster swatches (mini-thumbnail rectangles with distinct color blocks).
- **List pattern**: **Lookbook tiles**. Each saved site is a square tile with a mock screenshot fill (CSS gradient that suggests a site's theme color), title overlay at bottom in Playfair, NO meta line on tile. Hover reveals meta.
- **Library overlay**: a 5×4 lookbook of poster tiles.

### 010 — Liner Notes Column
- **Idiom**: a 1965 jazz LP gatefold liner-notes column, single column, single ink.
- **Palette**: rail `#0A0A0B` · pane `#101114` · iframe area `#060607`. Accent: cool steel-blue `#7AA0B3` (saving pill + active row mark only).
- **Typefaces**: Newsreader (italic for titles) + Atkinson Hyperlegible (body).
- **Rail buttons**: 5 typographic A-side/B-side marks (▶ ▣ ▤ ▥ ▦) — chosen for distinct silhouettes, no glyph-fontiness.
- **List pattern**: **Track-listing column**. `01. Coffee Shop ........... 14:32` `02. Vueo theme dev ........ 11:08` — numbered, title-leader-runtime layout. No icon, no second row. Runtime is creatively used for "minutes since opened".
- **Library overlay**: an LP catalogue arranged by category.

### 011 — Inscription Hall
- **Idiom**: a memorial hall with stone tablets — chiseled capitals, no decoration.
- **Palette**: rail `#0B0B0C` · pane `#101012` · iframe area `#06060A`. Accent: warm bronze `#9F7A3C` (saving pill + active inscription cross-bar only).
- **Typefaces**: Cinzel (rail + inscriptions) + Atkinson Hyperlegible (body).
- **Rail buttons**: 5 Roman numerals inscribed (I, II, III, IV, V) — Cinzel 18px each.
- **List pattern**: **Inscription**. Each saved site is a chiseled-capital line — `COFFEE SHOP · MMXXVI` — Roman numeral date, centred, with a 1px bronze rule beneath. No icon, no meta line.
- **Library overlay**: a vertical inscription wall of 16+ titles by category.

### 012 — Variable-Axis Specimen
- **Idiom**: a font-specimen book where the variable axes ENCODE the data (weight = recency, slant = current-state, monospace-ness = save-state).
- **Palette**: rail `#0E1013` · pane `#14171B` · iframe area `#080A0D`. Accent: signal lime `#B6D34A` (saving pill only).
- **Typefaces**: Recursive Sans (variable, single family, axes flexed per-title) + Recursive Sans (body).
- **Rail buttons**: 5 single uppercase Recursive letters (S, M, B, D, L), each rendered at a different point in Recursive's MONO/CASL/wght space (so each silhouette is distinct).
- **List pattern**: **Variable-axis specimen**. Each saved site is its title set in Recursive at a unique weight/casual/mono point: weight encodes size, casual encodes current-state, slant encodes activity. The title IS the data. No row, no icon, no meta line.
- **Library overlay**: a Recursive specimen sheet of 16+ blueprints with axis-encoded metadata.

### 013 — Stencil ID Plates
- **Idiom**: a military shipping yard at night — stencil-cut crates, oil-stained tarmac.
- **Palette**: rail `#0E1010` · pane `#141618` · iframe area `#08090A`. Accent: signal orange `#E07A2C` (saving pill + active plate notch only).
- **Typefaces**: Saira Stencil One (rail + titles) + Public Sans (body).
- **Rail buttons**: 5 stenciled abbreviations (`SI` `SM` `BP` `DB` `LG`), each in a different stencil weight/cut.
- **List pattern**: **Stencil ID plates**. Each saved site is a single stencil-cut title on a dark plate — `COFFEE SHOP` — no meta on the plate face. A small stencil "stock number" at the corner (e.g. `WP67/PHP82/14M`) does the meta as one terse compound, NOT a separate row.
- **Library overlay**: a yard of crates each labeled with a blueprint title.

### 014 — Hierarchy by Size
- **Idiom**: a typographic experiment where size IS the data — biggest title is most recently used, smallest is oldest. Nothing else.
- **Palette**: rail `#0E0F11` · pane `#14171B` · iframe area `#08090B`. Accent: bone `#E2DDC8` (saving pill only).
- **Typefaces**: DM Serif Display (titles) + DM Sans (body).
- **Rail buttons**: 5 single DM Serif Display capitals (S, M, B, D, L) at varying sizes (12px, 16px, 22px, 28px, 16px) — each silhouette distinct by virtue of size.
- **List pattern**: **Hierarchy by size only**. Saved sites stacked vertically; each is just a title at a size proportional to recency. `Coffee Shop` at 56px (newest), `Vueo theme dev` at 36px, `Gaming News` at 24px, `Unsaved Playground` at 18px. No icon, no meta line.
- **Library overlay**: a typographic mountain where blueprint titles vary in size by popularity.

### 015 — Marquee Letterboard
- **Idiom**: an indie cinema marquee at 10pm — plastic letters slotted into a black grooved board.
- **Palette**: rail `#0B0B0B` · pane `#14141A` · iframe area `#08080A`. Accent: bulb-yellow `#FFD068` (saving pill + active marquee-letter glow only).
- **Typefaces**: Anton (marquee letters) + Public Sans (body).
- **Rail buttons**: 5 single Anton uppercase letters (S, M, B, D, L) set 32px in plastic-letter style.
- **List pattern**: **Marquee letterboard**. Each saved site is a single line of slotted plastic letters in Anton — `COFFEE SHOP — NOW SHOWING` — title + a slogan-style state word (NOW SHOWING / IDLE / PREMIERE). No icon, no second row.
- **Library overlay**: a full marquee wall listing 16+ blueprints as features.

### 016 — Architectural Plan
- **Idiom**: an architect's plan view at night, drafting black, blueprint cyan accent muted.
- **Palette**: rail `#0E0F11` · pane `#15171A` · iframe area `#080A0C`. Accent: muted blueprint cyan `#5C8AA6` (saving pill + active rectangle stroke only).
- **Typefaces**: Manrope (body + plan labels) + Cormorant Garamond (titles).
- **Rail buttons**: 5 plan-view symbols (a door swing, a window cross, a stair tread, a column dot, a wall break), each a single SVG stroke.
- **List pattern**: **Plan-view rectangles**. Each saved site is a thin horizontal rectangle (width = relative site size); inside the rectangle, just the title in Cormorant italic. No meta line. The rectangle width IS the size data.
- **Library overlay**: a floor-plan of 16+ rooms (rectangles), each labeled with a blueprint title.

### 017 — Sportsbook Jersey
- **Idiom**: a stadium jersey wall — bold numerals, oversize titles, single team color.
- **Palette**: rail `#0A0A0B` · pane `#13141A` · iframe area `#070808`. Accent: red-clay `#B14A39` (saving pill + active jersey number only).
- **Typefaces**: Anton (oversize numerals) + Public Sans (titles + body).
- **Rail buttons**: 5 jersey numerals (`01` `02` `03` `04` `05`) set Anton 28px tabular.
- **List pattern**: **Jersey tiles**. Each saved site is a 280×100 tile with a giant Anton numeral (its slot in your saved list — 01, 02, 03, 04) and the title set Public Sans medium beneath, on a single line, no meta-row. The numeral IS the visual.
- **Library overlay**: a jersey wall of 16+ blueprint numerals.

### 018 — Newspaper Masthead
- **Idiom**: each entry is its own broadsheet masthead — single column, ruled, dated.
- **Palette**: rail `#0F1012` · pane `#16181B` · iframe area `#08090B`. Accent: ink-rust `#A14538` (saving pill + active dateline only).
- **Typefaces**: Playfair Display (mastheads) + Source Serif 4 (body).
- **Rail buttons**: 5 broadsheet-style typeset words (Sites · Manager · Blueprint · Database · Logs) set Playfair Display 14px, each silhouette distinct by length.
- **List pattern**: **Mini-mastheads**. Each saved site is rendered as a 2-line masthead: a top double-rule, the title centered in Playfair 24px, a small italic dateline below (`Vol. III · No. 22 · 22 May 2026`). No icon. No data row — the "dateline" is the only data, and it's typographically inseparable from the masthead.
- **Library overlay**: 16+ mini-mastheads in a 4-column grid.

### 019 — Inverted Contrast (Bodoni Hairlines)
- **Idiom**: a fashion-magazine title page — Bodoni Moda hairlines glowing on jet black. Fragile elegance.
- **Palette**: rail `#050507` · pane `#0A0B0E` · iframe area `#020203`. Accent: bone-warm `#E8DEC2` (saving pill only — a tonal lift, not a chromatic accent).
- **Typefaces**: Bodoni Moda (opsz 96 for big titles, opsz 14 for small) + Manrope (body).
- **Rail buttons**: 5 single Bodoni hairline capitals (S, M, B, D, L) at 24px opsz 14.
- **List pattern**: **Inverted contrast titles**. Each saved site is a single line in Bodoni Moda opsz 72 at 36px on near-black — the hairline-thick-thin contrast is the entire visual. No meta line. A small tabular figure suffix (1px-faint) for size.
- **Library overlay**: 16+ blueprint titles set as a column of Bodoni inversions.

### 020 — Tabular Figures Column
- **Idiom**: a treasurer's annual report rendered in dark mode — single column, tabular numerals, no chrome.
- **Palette**: rail `#0E0F11` · pane `#15171A` · iframe area `#08090B`. Accent: drafting-blue `#5C8AA6` (saving pill + active row underline only).
- **Typefaces**: Source Serif 4 (titles, with `font-feature-settings: 'tnum', 'lnum'`) + Source Sans 3 (body, also `tnum`).
- **Rail buttons**: 5 numeric tags (1, 2, 3, 4, 5) set Source Serif 4 at varying weights (300, 400, 500, 600, 700) — each distinct in stroke-weight.
- **List pattern**: **Tabular figures column**. Each saved site is a single line: title left, then right-aligned columns of tabular figures (`6.7` `8.2` `14.2 MB` `22 May`). The numbers align by tabular figures. No header row, no icon, no meta-second-row — the figures speak for themselves.
- **Library overlay**: a multi-page treasury index with tabular numerals.

---

## Diversity test

If you place the 20 desktop screenshots side-by-side, you should see 20 different list shapes. Not 20 colors of the same row. **This is the round's pass/fail.**

## Things every designer must remember

- Rail width 64–80 px. No exceptions.
- Each rail button is one mark. No tooltips needed at idle; hover/active does the labeling.
- The iframe is the loudest object — if any chrome bigger or louder than the iframe content, you have failed.
- Save pill ONE source of truth — no red banner duplicating it.
- Library overlay z3 with backdrop blur or scrim.
- Mobile mirror mandatory.
