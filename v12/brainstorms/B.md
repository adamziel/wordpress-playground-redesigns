# v12 Brainstorm B — Metaphor as Layout Engine

The v11 failure mode wasn't typography. It was that every "saved Playground" entry was the same row: optional ornament + name on line 1, italic meta on line 2, right-aligned size/date. Ten skins, one row. The fix is to pick a metaphor strong enough that the metaphor itself *dictates* how a list is rendered. A herbarium doesn't have rows; it has drawers with paper specimens pinned at uneven heights. A departure board doesn't have rows; it has split-flap modules that snap.

Below: 12 directions, each pushed until the metaphor is doing the layout work. End with the elimination round.

---

### 1 — Hatchards Upstairs, 23:00 (Type-Specimen Book)

- **Visual idiom**: a printer's type-specimen book left open on a reading-room desk after closing. Single brass lamp. Smell of glue.
- **Palette**: rail `#100E0A` / pane `#15120C` / iframe-area `#0A0805`. Accent paper-edge `#C9A24A`. Ink primary `#E8DFC8`, secondary `#807663`.
- **Typefaces**: **Cormorant Garamond** display (only ever at sizes 38 / 64 / 120 — never small) + **Spectral** body. No sans anywhere. Cormorant carries the showpiece glyph; Spectral carries the running text. Reasoning: a specimen book *is* its display face shown at absurd sizes against tight body — that ratio becomes the layout system.
- **Rail buttons**: five hand-set capitals shown as **type-specimen squares** — a single 56pt Cormorant character (`S`, `M`, `B`, `D`, `L`) with the point size in 7pt Spectral italic underneath (`24pt`, `36pt`, `48pt`, `60pt`, `72pt`). Active gains a brass underrule. The "secondary text under buttons" rule survives because the small text is a *type size label*, not a description.
- **Saved-sites pattern (NEW)**: each saved site is a **specimen page** — the site name is set 96pt Cormorant Garamond, *full bleed across the pane width*, one per row, and below it on the same baseline runs a single line of "letter-set evidence": `Aa Bb Cc Dd Ee Ff 1234 — opened 14:30` set 11pt Spectral italic. The size, version, etc. live inside that quotation, not as a meta-line. Four sites become four enormous specimens stacked. The list reads as a book of typefaces.
- **Start-routes pattern (NEW)**: six routes, each rendered as a **frontispiece** — vertical strip 1/6 wide, the route name set as a tall stacked monogram (V-A-N-I-L-L-A vertically up the strip), with the action ("From PR") set 9pt across the bottom edge.
- **Library overlay**: a **specimen sheet wall**. 43 blueprints arranged as a 5-column type-specimen page where each blueprint is shown by setting its name in a different size, weight, and italic combination — like a real type specimen sheet does. Categories run as thumb-tabs down the right gutter, each set as a single Cormorant ampersand or fleuron.
- **Top capsule**: a single hairline **brass rule** with the address, name, and controls hanging off it like book-tabs. No fill, no box.
- **Corner site widget**: a **bookplate** — site name in italic Cormorant 24pt, "Ex Libris" eyebrow above in 8pt small caps. No frame; the bookplate is just typeset.
- **Why genuinely different**: v11 had no design where the *display size of a list item* was the list pattern. This makes one saved-site fill 25% of the pane vertically.

---

### 2 — Hannover Hbf 04:47 (Split-Flap Departure Board)

- **Visual idiom**: a Solari split-flap board in a near-empty Hauptbahnhof at 4 a.m. Black flaps, sodium-yellow text, the mechanical *thwip* of letters cycling.
- **Palette**: rail `#0A0A0A` / pane `#0E0E0E` / iframe-area `#060606`. Accent sodium `#E8B547`. Ink primary `#F2E9D2`, secondary `#6A6660`.
- **Typefaces**: **Bricolage Grotesque** wide for the flap face (the wide cut mimics flap proportions) + **Newsreader** for headers (a printed timetable feels paper-like). Reasoning: flap displays use fixed-width letterforms inside non-fixed-width modules; Bricolage's variable axes let us widen each character into a flap cell without monospace.
- **Rail buttons**: five **single flap modules** — each a black trapezoid with a single capital `S M B D L` mid-flip (one is mid-rotation, frozen). Active is the only one that has *completed* its flip and shows a steady amber-on-black character with a 1px split line across the middle.
- **Saved-sites pattern (NEW)**: a **departures board** — full-width rows with five split-flap columns: `[PLATFORM] [DESTINATION] [VIA] [SCHEDULED] [STATUS]`. So a saved site becomes: `04 │ COFFEE SHOP │ WP 6.7 · PHP 8.2 │ 14:30 │ DEPARTING`. Each cell looks like a single physical flap. The flip animation runs once on hover. Crucially: there are no icons, no meta-lines — the *column structure* of a timetable replaces the icon+title+meta pattern. Status (Unsaved/Saving/Saved/Stale) uses the rightmost flap, cycling its letters.
- **Start-routes pattern (NEW)**: six rows at the top of the board labeled `NEW DEPARTURES`, each set with `[PLATFORM] [SERVICE] [DEPARTS]` — e.g. `01 │ VANILLA WORDPRESS │ NOW BOARDING`.
- **Library overlay**: the board *expands* — 43 blueprints become 43 timetable rows, with the 10 categories as **service lines** down the left (color-coded one accent only; categories shown as letter codes `S5 W4 G2` etc.). Search re-flips the board.
- **Top capsule**: a **single horizontal flap strip** running the width of the iframe area, with cells for address, name, state. Black with amber type.
- **Corner site widget**: one final flap cell at the iframe corner — `COFFEE SHOP · RUNNING` set as a single flap. When state changes the flap audibly flips (visual only).
- **Why genuinely different**: lists are *columns of flap cells*, not rows of cards. There's no "card" affordance anywhere.

---

### 3 — Echo Sounder, MV *Solveig*, North Sea

- **Visual idiom**: the depth-sounder readout below the wheelhouse — paper roll scrolling, ink stylus drawing the seabed as a thin black line on faintly-lit phosphor paper.
- **Palette**: rail `#0A0E10` / pane `#0E1215` / iframe-area `#06090B`. Accent muted phosphor green `#6E9A7B` (NOT the bright Cold-War teal in v11 #010 — this is washed-out, like ink under glass). Ink primary `#D8E0DA`, secondary `#5F6E66`.
- **Typefaces**: **Recursive Sans** Linear (used at narrow axis, italic) + **Spectral** for the chart legends. Reasoning: marine instrument paper rolls used a thin condensed font for stamped time-markers and a serif for the printed legend along the edge.
- **Rail buttons**: five **echo-trace silhouettes** — each a tiny 32px-tall mini-trace of a different seabed profile (Sites = flat shelf, SM = ridge, Bp = trench, Db = stacked sediment layers, Lg = jagged noise). Active gains a horizontal phosphor-green time-stamp tick at its left edge.
- **Saved-sites pattern (NEW)**: each saved site is a **chart strip** — a horizontal band 80px tall, full pane width, with: a thin sounder trace drawn left-to-right showing the site's "depth profile" (a generated waveform from its history — peaks where edits happened, valleys where it sat idle), with the site name printed *along the top edge* of the strip in 11pt Spectral, and a single time-stamp at the right tail. No meta-line. No card. The waveform IS the metadata: bigger amplitude = more activity, density of strikes = recent edits.
- **Start-routes pattern (NEW)**: six **fresh sounding strips** — empty traces, just a single starting depth tick at the left edge labeled with the route name. Click and the trace begins drawing.
- **Library overlay**: 43 blueprints rendered as a **fathom chart** — a 2D scatter where x-axis is "complexity" and y-axis is "depth into WP" (categories). Each blueprint is a tiny stylus mark with the name labeled like a sounding (`Coffee Shop · 14F`). Categories live as horizontal dashed isobaths.
- **Top capsule**: a **single phosphor-green trace line** running across the top, with the address as a labeled sounding mark mid-line, controls as further marks.
- **Corner site widget**: a **single live trace tick** in the iframe corner, the site name printed sideways along it.
- **Why genuinely different**: list items are *waveforms*, not boxes. The data shape *is* the list shape.

---

### 4 — Booth 3, Cinema Capitol (Projection Countdown)

- **Visual idiom**: the inside of a projection booth seconds before the reel hits frame — countdown leader on the gate, the *clatter* of sprockets, deep ruby safelight.
- **Palette**: rail `#0C0808` / pane `#120D0D` / iframe-area `#080505`. Accent ruby safelight `#C24A4A` (NOT crimson — washed, like a darkroom). Ink primary `#E8E0D0`, secondary `#7A6A66`.
- **Typefaces**: **Big Shoulders Display** condensed for numerals + **Spectral** for body. Reasoning: cinema countdown leader uses tall condensed numerals; the booth log book uses a typewriterish serif.
- **Rail buttons**: five **countdown leader circles** — each a large numeral inside a thin circle with crosshairs (`5 4 3 2 1`), but reassigned to `S M B D L` shown as letters in the same crosshair-circle treatment. Active is the one that has the crosshair *lit* ruby.
- **Saved-sites pattern (NEW)**: each saved site is a **film-can label** — a tall slim rectangle (not card; literally proportioned like a 35mm reel label), with: REEL NO. up top in tiny caps, the site name set huge across the diagonal of the label in condensed display type, RUN TIME printed sideways up the right edge, EDITED BY printed sideways up the left edge. The four saved sites stack as four film cans in a shelf, viewed edge-on.
- **Start-routes pattern (NEW)**: six **fresh reel labels** — blank cans with route name in chalk-style hand-lettering across the top: "Fresh print · Vanilla WordPress".
- **Library overlay**: a **film vault wall** — 43 reel cans arranged in a 6-wide grid showing only their *spines* (vertical labels). Hovering a can pulls it out. The 10 categories are shelf rows labeled with brass plaques on the wall (DRAMA, COMEDY, NEWSREEL etc., reassigned).
- **Top capsule**: a **single piece of perforated film leader** running across the top — sprocket holes left/right, address in the central frame as if hand-written on the leader, controls in adjacent frames.
- **Corner site widget**: a **gate aperture** in the iframe corner — the site name appears as if projected through the gate, with the running state as the leader number.
- **Why genuinely different**: list items are *vertically oriented can spines*, not horizontal cards. Reading the list requires the same eye-motion as reading shelved books.

---

### 5 — Caroline Schendel, Analytical Chemist, 1974

- **Visual idiom**: a left-handed chemist's lab notebook from 1974 — graph paper, pencil annotations, hand-stuck spectrogram printouts, taped at the corners.
- **Palette**: rail `#0E0F0C` / pane `#13140F` / iframe-area `#0A0B08`. Accent pencil-graphite + a single rubber-stamp red `#A8412F`. Ink primary `#E0DCC4` (faded blueprint paper), secondary `#6F7060`.
- **Typefaces**: **Caveat** for hand-annotations (only at small sizes, used as marginalia) + **Spectral** for the printed instrument output. Reasoning: a chem notebook is *printed instrument tape pasted into a handwritten book* — two registers.
- **Rail buttons**: five **lab apparatus silhouettes** drawn as pencil sketches in SVG — Erlenmeyer flask, retort stand, separating funnel, Bunsen burner, beaker. Each genuinely distinct silhouette. Active gains a small red rubber-stamp date next to it.
- **Saved-sites pattern (NEW)**: each saved site is a **pasted-in spectrogram** — a wavy chromatograph trace (generated from a hash of the site name) printed on a strip of pale paper, taped at the corners with tiny pencil tape marks, with the site name **handwritten** in Caveat in the margin beside it. Sizes/versions live as pencil annotations *between the peaks of the trace*. Each entry is tilted slightly (±1.5°) as if pasted by hand.
- **Start-routes pattern (NEW)**: six **blank lab sheets** — graph-paper rectangles with the route name pre-printed at the top and a single pencil arrow pointing to where you'd start drawing.
- **Library overlay**: a **lab notebook spread** — 43 blueprints as small pasted-in cuttings on the spread pages, each captioned in Caveat. Categories are tabbed dividers down the side of the notebook with hand-lettered labels.
- **Top capsule**: a **single ruled red margin line** runs across the top with hand-pencil controls written along it. The address looks written into the paper.
- **Corner site widget**: a **rubber stamp** in the corner — `COFFEE SHOP · 22 MAY 2026` impressed in red.
- **Why genuinely different**: list items have *physical tilt*, *handwritten captions*, and *generated waveforms taped to the page*. Nothing reads as a digital card.

---

### 6 — Side B, Blue Note 4123, dim listening room

- **Visual idiom**: a jazz LP sleeve under dim lamp light, the gloss of the cardboard catching one warm highlight. Liner notes by Leonard Feather running down a single column.
- **Palette**: rail `#0B0A09` / pane `#14110D` / iframe-area `#080706`. Accent Blue Note tobacco-gold `#C8985A`. Ink primary `#E8DFC8`, secondary `#7A6E5C`.
- **Typefaces**: **Antonio** ultra-condensed for the sleeve titles (Blue Note used Tankard Condensed; Antonio is the close Google equivalent) + **Newsreader** italic for liner notes. Reasoning: the Blue Note look IS Reid Miles' typography — vertically packed condensed sans titles next to italic prose.
- **Rail buttons**: five **side-stamp cuts** — each a 2-letter ligature set in Antonio extra-condensed (`SI`, `MN`, `BP`, `DB`, `LG`) at huge size (44pt), filling the rail cell almost edge to edge like a record label monogram. Active lifts to tobacco-gold.
- **Saved-sites pattern (NEW)**: each saved site is an **LP front sleeve** — a square 200×200 with the site name set in Antonio extra-condensed taking up half the square, rotated 90° if it doesn't fit, with the WP version printed beneath in tiny tracking-spaced caps `RECORDED WP 6.7 / PHP 8.2`. Date appears as a catalogue number top-right (`BLP 4123 · 14·V·26`). The 4 sites become a **record shelf** viewed face-out — 4 sleeves in a row. No meta-line; the sleeve is the metadata.
- **Start-routes pattern (NEW)**: six **promo white-label sleeves** — plain off-white squares with route names rubber-stamped in tobacco-gold.
- **Library overlay**: the **record rack** — 43 blueprints as sleeve spines viewed edge-on, with one sleeve pulled forward for hover preview. Categories are tabbed dividers between sections of the rack (`FEATURED · WEBSITE · GUTENBERG ...`).
- **Top capsule**: a **single black band** with the address and controls set in the Reid Miles style — chunky condensed labels with tobacco accents.
- **Corner site widget**: a **center-label** — circular disc with site name running around the edge, state in the spindle hole.
- **Why genuinely different**: saved sites are *square sleeves in a horizontal rack*, viewed face-out. They cannot be confused with rows of anything.

---

### 7 — Western Union Office, Buffalo, 1956 (Telegraph Console)

- **Visual idiom**: a brass telegraph key, a brown bakelite console, the rhythm of dots and dashes scratched on yellow flimsy paper. Late shift.
- **Palette**: rail `#0C0A08` / pane `#13100B` / iframe-area `#080604`. Accent telegram-yellow `#D4B45A`. Ink primary `#E4D8B8`, secondary `#7A6E54`.
- **Typefaces**: **Special Elite** for the typed flimsies + **Spectral** for the printed forms. Reasoning: a telegraph office is *typed* output on *printed* forms. Special Elite is the cleanest typewriter face that isn't a meme.
- **Rail buttons**: five **Morse signatures** — each a horizontal stack of dots and dashes representing the first letter of the function (`S` = `· · ·`, `M` = `– –`, `B` = `– · · ·`, `D` = `– · ·`, `L` = `· – · ·`). Active gains a yellow underline.
- **Saved-sites pattern (NEW)**: each saved site is a **flimsy** — a strip of yellow paper, full pane width, with the typewritten text running across it as a telegram: `COFFEE SHOP STOP 14:30 STOP WP 6.7 STOP PHP 8.2 STOP RUNNING STOP — END —`. The site name is just the first word of the telegram. The strip has perforated edges. No card; the *form* of the telegram replaces the card.
- **Start-routes pattern (NEW)**: six **blank telegram forms** — yellow strips with `[ROUTE NAME]` pre-printed in the from-line and an empty body. Click to "send."
- **Library overlay**: a **wall of pigeonhole slots** — 43 blueprints as folded telegrams tucked into a wooden pigeonhole grid, with the visible folded edge showing each blueprint's name. Categories are the pigeonhole columns, each labeled with a brass plate.
- **Top capsule**: a **single perforated paper strip** with controls printed as form-fields and the address as the telegram address line.
- **Corner site widget**: a **received-stamp** — site name typed across with a date-stamp circle overlapping the corner.
- **Why genuinely different**: list items read as *telegrams across a strip*, with stops between fields. The "two rows of text" v11 violation is impossible because telegrams are one line by convention.

---

### 8 — KW 412, BBC World Service Engineering Rack

- **Visual idiom**: a 19-inch radio engineering rack with patch cords, VU meters lit from inside, the gentle hum of valves.
- **Palette**: rail `#0A0C0D` / pane `#0F1214` / iframe-area `#060809`. Accent VU-needle warm white `#E8DCC0` with a single muted oxide red `#A24A3A` for over-meter. Ink primary `#D8E0DE`, secondary `#5E6A6C`.
- **Typefaces**: **Sora** at heavy weights for the rack-unit labels (engraved feel) + **Fraunces** for the patch labels (the slightly bookish counterpoint engineers actually used on the printed legends).
- **Rail buttons**: five **rack-unit faceplates** — each a tall slim rectangle representing 1U of a rack, with a single distinctive control: Sites = a rotary dial, SM = a 2-position toggle, Bp = a patch jack hole, Db = a VU meter, Lg = three LEDs. Each genuinely a different *physical control*. Active has its control lit.
- **Saved-sites pattern (NEW)**: each saved site is a **patch label** — a small ivory plastic strip clipped under a patch jack on the rack, with the site name engraved (slight bevel shadow) and a hand-coiled patch cord drawn arcing away to the right toward the iframe. Sites with state changes have their cord glowing. Four saved sites = four labeled patches in a row down the left edge of the pane. The patch cords are functional: they visually connect to the iframe (in the corner widget) when active.
- **Start-routes pattern (NEW)**: six **empty jack holes** in a 6-up patch panel — each labeled with the route name engraved beside the jack, no cord plugged in. "Plugging in" starts the route.
- **Library overlay**: a **rack-mount tape library wall** — 43 blueprints as cartridges with hand-lettered spines, slotted into a 19-inch rack. Categories are color-banded rack sections (one accent — band height varies).
- **Top capsule**: a **single horizontal rack-unit faceplate** with the address engraved in the legend strip and controls as small panel-mount knobs.
- **Corner site widget**: a **VU meter** mounted in the iframe corner with the site name engraved below the needle. Activity moves the needle.
- **Why genuinely different**: the list has *physical cords* visibly connecting items to the iframe. The saved sites are spatially related to the running site, not just listed.

---

### 9 — Mission Control, Building 30, 02:18 UTC

- **Visual idiom**: a 1960s Houston flight-control console — black bakelite, single amber annunciator lamps, status grids painted on glass overlays.
- **Palette**: rail `#0A0C0E` / pane `#0E1115` / iframe-area `#06080A`. Accent annunciator amber `#E0A848`. Ink primary `#DCE2DE`, secondary `#5E6A6E`.
- **Typefaces**: **Sora** at heavy + **Public Sans** for body. Sora's geometric severity reads as engraved console labels; Public Sans for log readouts. Reasoning: NASA console legend type was engraved Helvetica-adjacent geometry. We avoid Helvetica by using Sora.
- **Rail buttons**: five **annunciator panels** — each a small rectangular lamp with engraved 3-letter codes: `STS` `MGR` `BLP` `DBS` `LOG`. Inactive: dark engraving. Active: lamp lit amber from inside, code reading as silhouette.
- **Saved-sites pattern (NEW)**: each saved site is a **mission status row in the FIDO matrix** — but reformatted: a strip with the site name as a "vehicle callsign" (e.g. `COFFEE-SHOP / FLT-014`) in engraved caps, then a row of 5 annunciator lamps showing system status (DB / CACHE / NET / FS / PHP), one of which may be amber-lit. No prose meta-line at all — all metadata is encoded in which lamps are lit.
- **Start-routes pattern (NEW)**: six **GO/NO-GO poll lines** — each route has a flight-director's poll format: `VANILLA — GO?` with an amber lamp beside it that lights on hover, meaning "ready to commit."
- **Library overlay**: a **trajectory wall** — 43 blueprints as named waypoints on a curved trajectory plot. Categories are orbital phases (`LAUNCH · INSERTION · TRANSIT · DESCENT ...` reassigned to the 10 WP categories).
- **Top capsule**: a **single engraved console strip** with annunciator-style controls. Address shown as a flight callsign.
- **Corner site widget**: a **mission patch** — a small embroidered-looking circular badge with the site name curving around it.
- **Why genuinely different**: list metadata is *encoded as lamp positions*, not text. The lamps replace the meta-line entirely.

---

### 10 — Officina Bodoni, Verona, plate room (Printing Plate Before Strike)

- **Visual idiom**: a metal printing plate inked and ready, set into the press bed. The mirror-image text glows under the bench lamp, ink not yet kissed to paper.
- **Palette**: rail `#0C0B09` / pane `#13110C` / iframe-area `#080705`. Accent ink-on-metal teal-black sheen `#5A8678` (the green-blue of fresh ink in raking light). Ink primary `#E8E0CC`, secondary `#7A6E5A`.
- **Typefaces**: **Italiana** display (Bodoni-adjacent, on Google Fonts) + **Spectral** body. Italiana's hairline-to-stem contrast reads as letterpress.
- **Rail buttons**: five **type-slug ends** — each a small rectangular cross-section with a raised letterform (S, M, B, D, L) shown as if you're looking at the foot of a metal sort. Active is shown as having been *struck* (slight ink smear at its edge).
- **Saved-sites pattern (NEW)**: each saved site is a **chase forme** — a rectangular metal frame with the site name set as raised type *mirror-reversed*, plus furniture (quoins, leads) filling the surrounding area. The metadata is set in smaller raised type within the same forme as a footer line. The visual is industrial, not papery — it's the metal stage *before* it prints. Four sites = four laid-out formes stacked vertically with thin lock-up rules between them.
- **Start-routes pattern (NEW)**: six **empty chases** — rectangular metal frames waiting to be set, with the route name set as a single sort at the top-left corner.
- **Library overlay**: a **type-case drawer** — 43 blueprints as compartments in a printer's California job case (the asymmetric drawer with varied compartment sizes), each holding a typeset block representing the blueprint. Categories are the drawer rows.
- **Top capsule**: a **single galley tray** running across the top with set type for the address and controls.
- **Corner site widget**: a **proof slip** — a small piece of paper with site name printed by hand-strike in the corner.
- **Why genuinely different**: list items are *mirror-reversed metal formes*, not readable cards. Reading requires the eye to flip — which is the whole metaphor.

---

### 11 — Apotek Hjorten, Visby, 1898 (Apothecary Cabinet)

- **Visual idiom**: a Scandinavian apothecary cabinet at night — walnut drawers with brass cartouches, latin-labeled jars in rows behind glass, single oil lamp.
- **Palette**: rail `#0E0B08` / pane `#15110C` / iframe-area `#0A0805`. Accent apothecary green-glass `#4A7A5C` (washed bottle green). Ink primary `#E4DAC0`, secondary `#7A6E58`.
- **Typefaces**: **Cormorant Garamond** italic (only italic — for Latin labels) + **DM Serif Display** for the cartouches. Reasoning: 19th-century pharmacy labels use italic Latin and large display Roman.
- **Rail buttons**: five **drawer cartouches** — each a small brass oval engraved with a Latin-style abbreviation: `St.` (Sites), `Cur.` (Manager), `Form.` (Blueprint), `Tab.` (Database), `Reg.` (Logs). Each cartouche genuinely a different brass-engraved silhouette.
- **Saved-sites pattern (NEW)**: each saved site is a **labeled jar** — a tall narrow rectangle (bottle proportions) with: a paper apothecary label wrapped across its middle, the site name in italic Latin style across the label (`Coffea Officinarum`), and a tincture-level line showing how full the bottle is (= unsaved/saved state). Four sites = four jars in a row on a shelf, viewed front-on. The pane shows the wood shelf rail beneath them.
- **Start-routes pattern (NEW)**: six **empty bottles** on a separate shelf labeled "Praeparanda" — each with a route name on a hanging tag tied around the bottle neck.
- **Library overlay**: a **wall of apothecary drawers** — 43 blueprints as small drawers in a 8×6 cabinet, each with a brass cartouche label. Categories are wood shelf-zones with carved headers.
- **Top capsule**: a **single brass nameplate strip** with engraved controls.
- **Corner site widget**: a **wax seal** in the corner — site name pressed into red wax (but we don't use red — use the bottle-green wax variant).
- **Why genuinely different**: list items are *bottles with fill-levels*. State is encoded in *liquid level*, not in pills or text.

---

### 12 — Stagione 1962, Bussola Club, Forte dei Marmi (Nightclub Program)

- **Visual idiom**: a folded nightclub program from 1962 — heavy stock, italic display, hand-set tables of tonight's acts, deckled edges.
- **Palette**: rail `#0C0907` / pane `#14100C` / iframe-area `#080604`. Accent champagne gilt `#D4B470`. Ink primary `#EBE0C4`, secondary `#7A6E58`.
- **Typefaces**: **Italiana** display italic (the swooping nightclub script) + **Cormorant Garamond** for the program text. Reasoning: Italian club programs of that era used extreme italic display headers above setlists in old-style serifs.
- **Rail buttons**: five **act numbers** — Roman numerals I–V set in Italiana display italic at large size, each with a distinct flourish (the V has a tail, the III has a connecting bridge). Active gains champagne fill.
- **Saved-sites pattern (NEW)**: each saved site is a **billing line on tonight's program** — full-width line set as: site name in giant Italiana italic (slightly tilted, theatrical), followed on the next line by a dotted leader running to the right with the time-slot at the end (`14:30 — Set II`). The whole entry reads as one playbill line. No card. No icon. Multiple saved sites form a stacked playbill.
- **Start-routes pattern (NEW)**: six **billing-to-come lines** in a separate program section titled "Si presenteranno" — each with route name in slightly smaller Italiana and "—" leaders.
- **Library overlay**: a **season program booklet** — 43 blueprints as billed acts across multiple printed pages, with the 10 categories as section headers (Featured = "Stelle Internazionali", Themes = "Spettacoli a Tema", etc., reassigned).
- **Top capsule**: a **single dotted-leader strip** with the address as the headline act of the evening.
- **Corner site widget**: a **stage-side billing card** in the corner.
- **Why genuinely different**: list items are *theatrical billings* with tilted display italic and dotted leaders — the eye reads them as showtimes, not as data rows.

---

## Elimination Round — 8 of 12

I'm cutting the 4 that either share too much DNA with v11 directions or whose metaphor doesn't reshape the list pattern aggressively enough:

- **Cut: #1 Hatchards Type-Specimen** — adjacent to v11's Spectral-heavy 005 & 008. Strong typographically but the list mechanism (giant name + small evidence line) is *just barely* the forbidden two-rows pattern in disguise.
- **Cut: #5 Caroline Schendel Chemist** — beautiful but the *taped paper* visual borrows from generic "vintage notebook" tropes. Generated waveforms are good but the tilt-paper-tape look is a known idiom.
- **Cut: #9 Mission Control** — the lamp-grid metadata is great but the palette and Sora typeface land too near v11's #010 Subterranean Telecom.
- **Cut: #12 Bussola Nightclub Program** — Italiana italic billings risk reading as "fancy" rather than as a coherent system; closest cousin to v11 #008's illuminated script vibe.

**The 8 strongest, in order of strongest metaphor-discipline:**

1. **#2 Hannover Hbf Split-Flap** — strongest list reinvention; columns of flap cells with no card concept at all.
2. **#3 Echo Sounder** — list items are *generated waveforms*; metadata becomes shape.
3. **#8 BBC Engineering Rack** — patch cords physically connect list to running iframe; spatial, not textual.
4. **#7 Telegraph Flimsy** — saved sites are *single-line telegrams* with STOP separators; structurally impossible to violate the meta-line rule.
5. **#6 Blue Note Side B** — square sleeves face-out on a rack; the only direction where list items aren't horizontal at all.
6. **#11 Apotek Hjorten** — state encoded in liquid level inside a jar; metaphor literally embodies save-state.
7. **#10 Officina Bodoni Plate Room** — mirror-reversed metal formes; weird, demanding, novel.
8. **#4 Cinema Capitol Projection** — vertical film-can spines as list items; orthogonal to every other direction.

Each of the 8 makes a *different decision about what a list item is*: a flap column, a waveform, a patched cord, a telegram strip, a face-out sleeve, a filled jar, a mirror forme, a vertical can spine. That's the v12 unlock — eight genuinely different list ontologies, not eight skins of the same row.
