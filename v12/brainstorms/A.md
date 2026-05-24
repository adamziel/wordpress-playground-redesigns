# v12 Brainstorm — Session A

The v11 round collapsed into a uniform "icon + title + meta-row" card pattern across every design. v12 must break out: each direction below picks a **distinct way of rendering a list of saved sites and a list of start-routes**, with no per-row icon and no second-line metadata under a title. Meta either lives in columns, surfaces on hover, or is encoded into the visual treatment itself. All directions keep the locked v7 #010 model and the v11 taste guards (dark `#06–#1A`, no purple, no monospace outside code editor, no Inter / Roboto / Helvetica / Arial / JetBrains Mono, five visually distinct rail buttons, no nested borders, no per-button helper text).

---

### 1 — Departure Board
- **Visual idiom**: a split-flap board in a quiet European train hall after the last train.
- **Palette**: rail `#0A0C0F` / pane `#11151A` / iframe `#06080B` · accent `#E4B048` (lamp-amber) · ink `#EDE6D4` / secondary `#7B7E84`.
- **Typefaces**: **Bricolage Grotesque** (700, headline & flap rows) + **Public Sans** (400/500, body).
- **Rail buttons**: five split-flap two-digit destinations (`01`, `02`, `03`, `04`, `05`) set in Bricolage 700, each digit pair on its own visual hinge-line. Active flap flips to a lit amber state.
- **Saved-sites card pattern**: **departure-board rows**. Each row is a single typeset line: site name set left in Bricolage, a center column showing a four-letter state codeword (`LIVE`, `IDLE`, `STAL`, `BOOT`), and a right column showing departure-style time (`14:30`). No icons. No second line. Rows are separated by a 1 px split-flap hairline that visually "clicks" on hover.
- **Start-routes card pattern**: same board format, top section labeled `DEPARTURES — NEW SERVICE`. Each of the 6 routes is a flap-line with a route code (`VAN`, `PRR`, `GUT`, `GH`, `BPU`, `ZIP`), the route name as the destination, and an `ON TIME` / `BOARDING` style status column.
- **Why genuinely different**: v11 had no list of any kind organized by column. This one reads horizontally; the entire pane shares one column rhythm; metadata is *encoded into 4-letter codewords*, not narrated.

---

### 2 — Card Catalogue Drawer
- **Visual idiom**: a library card-catalogue drawer pulled open at night under one warm desk lamp.
- **Palette**: rail `#0F0D0A` / pane `#16130D` / iframe `#0A0805` · accent `#9C7A4A` (oak-stain) · ink `#E5DBC2` / secondary `#7A6E55`.
- **Typefaces**: **Newsreader** (italic 400, all cards) + **Atkinson Hyperlegible** (400/500, capsule + forms).
- **Rail buttons**: five Dewey-Decimal style numerals — `100`, `200`, `300`, `400`, `500` — set tight in Newsreader italic. Active gets a soft oak underline.
- **Saved-sites card pattern**: **catalogue cards** stacked vertically. Each row is a single 3.5"×0.6" letterpress card with the site title typeset in Newsreader italic 22 px and a tiny punched corner hole at the leading edge — no icon, no second row. Cards overlap by 2 px so the eye sees the stack as a drawer. Hover slides the card forward 4 px and a faint pencil annotation appears (`opened tue · 14 MB`).
- **Start-routes card pattern**: a parallel "NEW ACCESSIONS" drawer — six fresh blank cards, each with just the route name in Newsreader italic and a hand-stamped catalogue number at the top-right (`Acc. 001`–`006`). No supplementary text.
- **Why genuinely different**: no v11 design had the *card-stack* metaphor with overlap; meta surfaces on hover instead of being persistent.

---

### 3 — Numbered Setlist
- **Visual idiom**: a hand-written band setlist taped to a stage monitor.
- **Palette**: rail `#0B0B0C` / pane `#131313` / iframe `#080808` · accent `#C24A2C` (sharpie red) · ink `#EFECE4` / secondary `#7C7972`.
- **Typefaces**: **Caveat** (600, setlist) — used only for the list items themselves — paired with **Sora** (400/500, rail, capsule, forms). (Caveat is distinctive and *not* an icon font; it is the visual treatment of the list.)
- **Rail buttons**: five hand-cut tally marks — `I`, `II`, `III`, `IIII`, `IIII̶` — drawn in Sora medium. Each silhouette is genuinely distinct because tally counts differ.
- **Saved-sites card pattern**: **setlist column**. Each saved site is a single hand-scrawled line preceded by a track number (`01. Coffee Shop`, `02. Vueo theme dev`) in Caveat 28 px. No icon, no second row. A site's status is encoded by an inline punctuation mark — a `★` for current session, a `~` for stale, a strikethrough for archived.
- **Start-routes card pattern**: a parallel **"ENCORE"** column at the top of the pane, six fresh hand-scrawled lines for the new routes (`E1. Vanilla WordPress`, `E2. PR …`). Same treatment.
- **Why genuinely different**: no v11 design used a handwritten face for the list; the entire chrome around it is sober Sora, which makes the handwriting *the* event.

---

### 4 — Architectural Plan
- **Visual idiom**: a plan-view architectural drawing in dark mode — every site is a room in a floor plan.
- **Palette**: rail `#0B0E10` / pane `#10141A` / iframe `#070A0E` · accent `#5C8AA6` (drafting-blue) · ink `#E4E5E7` / secondary `#6E747C`.
- **Typefaces**: **DM Sans** (500, headline) + **Public Sans** (400, body).
- **Rail buttons**: five drafting symbols — a north arrow, a scale bar, a section cut, an elevation marker, a door swing — each genuinely unique SVG silhouette, all in ink-secondary, active rotates to ink-primary.
- **Saved-sites card pattern**: **floor-plan rectangles**. Each saved site is a rectangle of varying width (width encodes site size in MB), laid out in a grid that suggests rooms in a plan. Inside the rectangle: only the site name in DM Sans 500, set left-bottom like a room label. A leader line in drafting-blue points to a corner number (`A.01`). No icons, no second row.
- **Start-routes card pattern**: a separate "PROPOSED ADDITIONS" floor-plan zone — six dashed-outline rooms, each labeled with the route name and a leader-line number (`B.01–B.06`). Dashed border distinguishes proposed from built.
- **Why genuinely different**: spatial encoding of size is novel for the project; rooms vary visibly in width.

---

### 5 — Vertical Spine Shelf
- **Visual idiom**: a bookshelf seen from the front — site titles set on vertical spines.
- **Palette**: rail `#0E0B08` / pane `#15110B` / iframe `#0A0805` · accent `#B3893D` (gilt) · ink `#E6DCC2` / secondary `#7C7058`.
- **Typefaces**: **Cormorant Garamond** (500, spines) + **Plus Jakarta Sans** (400/500, capsule + forms).
- **Rail buttons**: five illuminated capitals — `S`, `M`, `B`, `D`, `L` — each with a different swash flourish drawn inline.
- **Saved-sites card pattern**: **book spines**. Each saved site is a thin vertical strip (28 px wide, 200 px tall) standing side by side along the pane. Title is typeset bottom-up along the spine in Cormorant 16 px. Spine width varies by 2 px per size bucket. Hover pulls a spine out and reveals a horizontal flyout card with meta. No icons. No second row visible.
- **Start-routes card pattern**: a "NEW VOLUMES" shelf section to the right — six taller blank spines with route names and an embossed gilt cap-band at top encoding the route family (vanilla/PR/import).
- **Why genuinely different**: no v11 design used vertical text; the whole pane reads like a horizontal scan of a shelf rather than a vertical scan of rows.

---

### 6 — Wall Labels (Museum Cartouche)
- **Visual idiom**: museum wall labels with cartouche framing — distinct from v11's Onyx Museum which still listed cards.
- **Palette**: rail `#0C0C0D` / pane `#121214` / iframe `#08080A` · accent `#D9CFAA` (bone-cream) · ink `#E8E5DC` / secondary `#787268`.
- **Typefaces**: **Fraunces** (500, cartouche title) + **Public Sans** (400, ascription line).
- **Rail buttons**: five wall numerals in Roman style with serifs — `I`, `II`, `III`, `IV`, `V` — but each at a *different point size* (14 / 16 / 18 / 20 / 22 px) so silhouettes differ markedly. Active dock fills bone-cream.
- **Saved-sites card pattern**: **wall-label cartouches**. Each site is a 2-line wall label: title in Fraunces 28 px on line 1, and a *single italic ascription line* in Public Sans 11 px on line 2 — but rendered like a museum tombstone: `Coffee Shop, opened 14:30, current.` reads as a sentence, not as a meta row. This is genuinely one composed line, not "second metadata row under a button". Borderless; separated by 32 px of breathing room.
- **Start-routes card pattern**: six "ACQUISITION CARDS" — same cartouche treatment but with the route name on line 1 and a single italic provenance sentence on line 2 (`Imported from the WordPress core archive.`).
- **Why genuinely different**: ascription is a *sentence*, not a metadata triplet. Reads like prose, not data. Onyx Museum in v11 had cards with bullets — this has prose tombstones.

---

### 7 — Punchcard Stack
- **Visual idiom**: a stack of 80-column IBM punchcards on a console operator's desk.
- **Palette**: rail `#0D0F10` / pane `#13171B` / iframe `#080A0C` · accent `#E08A2C` (operator-amber) · ink `#E4E1D7` / secondary `#737880`.
- **Typefaces**: **Space Grotesk** (500 headline) + **Atkinson Hyperlegible** (400 body).
- **Rail buttons**: five hand-cut perforation glyphs — single hole, double hole, triple-vertical, triple-horizontal, x-pattern — each obviously different.
- **Saved-sites card pattern**: **punchcard rows**. Each site row is a 1×80 strip of small circles where ~25 of the circles are "punched" (filled). The pattern of punches encodes the site's WP/PHP/size/state combination — like a real punchcard. The site name is typeset along the top edge in Space Grotesk small caps 11 px. There is *no other text*. Hover reveals the decoded meta as a tooltip.
- **Start-routes card pattern**: six unpunched (blank) cards stacked at the top of the pane labelled `NEW JOB —`. Each card has its route name typeset along the top edge and a single column of punches showing the route family.
- **Why genuinely different**: meta is *graphical* (which holes are filled), not textual. Nothing similar in v11.

---

### 8 — Sportsbook Jersey Tiles
- **Visual idiom**: jersey numbers hanging in a locker room — sports-graphic boldness, no decoration.
- **Palette**: rail `#0A0E0C` / pane `#101614` / iframe `#070B09` · accent `#3E8A78` (kit-teal) · ink `#EAEDE5` / secondary `#6A7872`.
- **Typefaces**: **Anton** (400, jersey numerals and headlines) + **Manrope** (400/500, body).
- **Rail buttons**: five jersey numbers — `7`, `10`, `14`, `21`, `33` — in Anton 28 px. Active number gains a kit-teal underline bar.
- **Saved-sites card pattern**: **jersey tiles**. Each saved site is a 90 px square tile with a giant Anton numeral (the site's chronological position in the list) at the top and the site name in Manrope 14 px at the bottom — no icons, no second meta row. Hover pulls a thin meta strip out from the right.
- **Start-routes card pattern**: a six-tile "ROSTER" row at the top with each route as a tile labeled with its route name and a numbered jersey (`N1`–`N6`).
- **Why genuinely different**: bold display numerals as primary visual; v11 was uniformly delicate.

---

### 9 — Liner Notes Column
- **Visual idiom**: the back-cover liner-notes of a vinyl LP — typeset track listing.
- **Palette**: rail `#0B0C0E` / pane `#121319` / iframe `#08090C` · accent `#C24A2C` (label-vermilion) · ink `#E9E4D9` / secondary `#7B7468`.
- **Typefaces**: **Lora** (500 italic, track titles) + **Public Sans** (400, side-A / side-B labels and forms).
- **Rail buttons**: five **track-position dots** of varying size — a small dot, a medium dot, a large dot, a dot with a ring, a dot with two rings — clearly distinct silhouettes.
- **Saved-sites card pattern**: **liner-notes column**. Sites are typeset as a track listing under a heading **Side A — Saved**. Each track line: `A1. Coffee Shop … 14:30` with leader dots between title and a single right-side time. One line per site. No icons. The time stands in for "opened at" — meta encoded into the format, not into a second row.
- **Start-routes card pattern**: a parallel **Side B — New** column with six tracks (`B1.` through `B6.`), each named for its route, all with running times that hint at "fresh / empty" (`B1. Vanilla WordPress …… 0:00`).
- **Why genuinely different**: structures lists as A-side / B-side, which gives saved vs new a *single* visual relationship. v11 always had them in two unrelated stacks.

---

### 10 — Postcard Rack
- **Visual idiom**: a wire postcard rack at a station kiosk; each card a destination.
- **Palette**: rail `#0C0E13` / pane `#13171E` / iframe `#080A0F` · accent `#E5A24A` (vintage-postcard sunlight) · ink `#E8E2D2` / secondary `#7A8290`.
- **Typefaces**: **Fraunces** (700 display, postcard titles) + **DM Sans** (400/500, capsule).
- **Rail buttons**: five postal cancellation marks — circular date stamp, wavy lines, hand crossbar, square parcel, arrow stamp — each unique.
- **Saved-sites card pattern**: **postcard slots**. Each site is a 160×100 postcard tilted at 1–3° within a wire slot. The face of the postcard shows only a destination title in Fraunces 700 (`COFFEE SHOP`) and a faint postal-cancellation oval bottom-right. No icons. No second row. Slight overlap suggests a rack.
- **Start-routes card pattern**: six **blank postcards** in their own slot row at the top, each with just the route name as the destination caption (`VANILLA WORDPRESS`) and an unstamped (empty) cancellation oval.
- **Why genuinely different**: 2D physicality (tilt + overlap) — no v11 design used out-of-grid placement.

---

### 11 — Stamp Sheet
- **Visual idiom**: an uncut sheet of postage stamps — perforated grid, each stamp a site.
- **Palette**: rail `#10100E` / pane `#16161A` / iframe `#0A0A0C` · accent `#B14A39` (philatelic red-ochre) · ink `#EDEAE2` / secondary `#7E7B72`.
- **Typefaces**: **Spectral** (600 display, stamp denominations and titles) + **Public Sans** (400, forms).
- **Rail buttons**: five denomination glyphs — `1c`, `5c`, `10c`, `25c`, `1F` — each in Spectral with a different currency mark.
- **Saved-sites card pattern**: **stamp grid**. Each site is a 110×80 stamp with serrated perforated edges (rendered with radial gradients on the rim). Centre: the site name as the stamp's "country" caption in Spectral 14 px small caps, with a single denomination numeral in the top-right corner standing in for size in MB (`14`, `8`, `22`). Borderless inside, perforated outside. No second meta row.
- **Start-routes card pattern**: a fresh sheet of six unprinted stamps at the top, perforation visible, each with just the route name as the country line and a small `★` instead of a denomination.
- **Why genuinely different**: the grid itself is the visual; perforated edges are unique to v12.

---

### 12 — Marquee Letterboard
- **Visual idiom**: a cinema marquee with pegged letter tiles — one-up signage in a dim foyer.
- **Palette**: rail `#0A0C0B` / pane `#11151A` / iframe `#070A0B` · accent `#E4B048` (marquee bulb) · ink `#F0EBDD` / secondary `#7A7E80`.
- **Typefaces**: **Big Shoulders Display** (700, marquee titles) + **Manrope** (400/500, body).
- **Rail buttons**: five marquee bulb counts — one bulb, two bulbs, three bulbs in a triangle, four bulbs in a square, five bulbs in a star — each unique.
- **Saved-sites card pattern**: **marquee board rows**. Each saved site is a single horizontal black board with white plastic letters spelling the site title in Big Shoulders 700 32 px. No second line. Status surfaces as the count of small lit bulbs along the bottom edge of the row (0, 1, 2, 3 — encoding stale, idle, current, error). No icons in the row body.
- **Start-routes card pattern**: a parallel "NOW SHOWING — NEW" marquee at the top with six boards, one per route, route name in plastic letters and an unlit bulb row.
- **Why genuinely different**: text scale is dramatically different from v11 (huge titles); bulbs encode state graphically.

---

### 13 — Cinematic Lookbook
- **Visual idiom**: an A2 fashion lookbook in a darkroom — image-led tiles with single ascription.
- **Palette**: rail `#0B0B0D` / pane `#131319` / iframe `#080809` · accent `#D9CFAA` (paper-bone) · ink `#EFEDE6` / secondary `#7A7872`.
- **Typefaces**: **Outfit** (500/700, headline + ascription) + **Atkinson Hyperlegible** (400, forms).
- **Rail buttons**: five hand-cut crops — a circle, a vertical slot, a horizontal slot, a square, an oval — each obviously different.
- **Saved-sites card pattern**: **lookbook posters**. Each saved site is a 220×280 square card. Top 80% is a stylized abstract gradient/composition unique to the site (procedurally seeded from site name). Bottom 20% is a single ascription line: just the site name in Outfit 500 18 px. No second row. No icons. The image *is* the meta.
- **Start-routes card pattern**: six smaller lookbook tiles (180×220) at the top of the pane, each with a procedural composition keyed to the route family and a single-line caption (`Vanilla WordPress`).
- **Why genuinely different**: v11 was zero-image; this is image-forward but disciplined to a single ascription.

---

### 14 — Ledger Columns
- **Visual idiom**: an accountant's double-entry ledger, dark mode — every site is one line in the book.
- **Palette**: rail `#0E0E0E` / pane `#15151A` / iframe `#0A0A0C` · accent `#5C8AA6` (ink-blue) · ink `#E6E4DC` / secondary `#737880`.
- **Typefaces**: **Crimson Pro** (500 italic, headers) + **Public Sans** (400, ledger lines — proportional, NOT mono).
- **Rail buttons**: five ledger-mark symbols — a single tick, a double tick, a check-X, an underline, a circled dot — all visually distinct.
- **Saved-sites card pattern**: **ledger lines**. Sites listed as ledger rows under columnar heads: `Account` (name) · `Opened` · `Size` · `WP` · `PHP` · `State`. Each row is a single hairline-separated line with no icon; values align to columns with tabular figures. The eye reads down a column. Hover ledger-lines light up the row in ink-blue.
- **Start-routes card pattern**: a separate ledger block at the top under header `New Accounts — Open` with the same six columns and one row per route — each row's `Account` cell holds the route name, other cells holding template defaults.
- **Why genuinely different**: this is the *true* table-with-headers pattern from the brief; v11 never had column heads.

---

## Elimination Round

I have 14 candidates. Ranking by (a) how far each escapes the v11 "icon + two-row text" trap, (b) how distinct it is from the others in this list, and (c) whether the pattern survives a 6-route start area and a 4-site saved area without collapse:

1. **14 — Ledger Columns** — cleanest break, true table with headers, eminently shippable
2. **1 — Departure Board** — strong codeword-as-meta idea, column rhythm
3. **7 — Punchcard Stack** — meta encoded *graphically*, no other direction does this
4. **5 — Vertical Spine Shelf** — radical orientation change; unique
5. **11 — Stamp Sheet** — grid + perforation gives a fresh silhouette
6. **2 — Card Catalogue Drawer** — overlap + hover-meta is structurally different
7. **9 — Liner Notes Column** — track-listing structure ties saved + new together elegantly
8. **6 — Wall Labels** — prose ascription is unique; restraint is its strength

The 8 above I would ship. Below the cut:

- **3 — Numbered Setlist** — risk that Caveat reads as gimmick at scale; keep as fallback
- **4 — Architectural Plan** — variable-width rectangles risk crowding the pane at 4 entries
- **8 — Sportsbook Jersey** — bold but the numeral could feel hollow when divorced from a real ranking
- **12 — Marquee Letterboard** — bulb-state encoding is clever but the type scale conflicts with capsule density
- **10 — Postcard Rack** — physicality is delightful but tilted geometry conflicts with rail rigor
- **13 — Cinematic Lookbook** — image-forward could violate "iframe is the loudest object" focus test
