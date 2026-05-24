# v12 Brainstorm C — Typography-Led Directions

The premise: each design's personality is carried by **one bold typographic choice**. The face is the design. The saved-sites list, the start-routes panel, and the library overlay all inherit their layout from the typographic conceit rather than from the universal "icon + title + sub-line" card the user has now banned. No nested borders, no purple, dark base, no monospace outside the editor, no typical fonts, no helper text under buttons. Status colour comes from a state-tinted lift of the one accent.

The forbidden v11 pattern (see `004-onyx-museum/index.html`, `.saved .s`): numeral on the left, title + italic sub-line stacked in a flex column, meta column on the right, every row identical. None of the 12 directions below render saved sites that way.

---

### 1 — Inscription Hall
- **Visual idiom**: a Roman lapidary slab seen by torchlight; every saved site is a chiseled line cut into stone, not a row in a list.
- **Palette**: rail `#0B0A08` · pane `#15130E` · iframe area `#08070A` · accent **chisel-gilt** `#B0884A` · ink primary `#E8DFC8` · ink secondary `#79705B`.
- **Headline typeface**: **Cinzel** at 600, optical-size used at 28–48 px, generous tracking (`0.08em`). Cinzel is a contemporary Trajan-alike with the V-cut serifs; it carries the entire personality.
- **Body typeface**: **Spectral** 400 — the only neighbour Cinzel doesn't fight; used for forms, log lines, blueprint descriptions.
- **Rail-button treatment**: five **chiseled glyphs cut into the rail wall** — `SITES`, `MGR`, `BP`, `DB`, `LOG` stacked vertically, each at 11 px Cinzel small-caps, tracked +120, with a 1 px engraved highlight above and a 1 px shadow below (two hairlines, no box). Active glyph fills with chisel-gilt and a 4 px gilt triangular notch is cut to its left.
- **Saved-sites pattern (NEW)**: a **wall of four engraved lines**, full pane width, centred, each line a single 22 px Cinzel inscription — `COFFEE SHOP · MMXXVI·V·XX` — with a 1 px gilt hairline beneath only the hovered line. No frame, no number, no meta column. Roman numerals for the date is the conceit. Unsaved entry is the same inscription with a hairline strike-through and the word `UNSAVED` set in 9 px tracked.
- **Start-routes pattern (NEW)**: six **inscription titles** stacked the same way: `VANILLA WORDPRESS`, `WORDPRESS · PR`, `GUTENBERG · PR`, `FROM GITHUB`, `BLUEPRINT URL`, `IMPORT ZIP`. The trailing `· PR` / `· URL` acts as the only meta. Click a line, the line lights gilt and a single-input field unfolds beneath in the same face at half size.
- **Library overlay**: 43 inscriptions arranged in a 4-column tablet grid, category filter as a horizontal frieze of all-caps Cinzel words at the top with a gilt underline under the active one.
- **Why different from v11**: 008-Monastery is illuminated initials; this is the opposite — austere, secular, no flourish, the title IS the row.

---

### 2 — Concrete Poem
- **Visual idiom**: each saved site is its own typographic shape; the title's letters wrap and break to draw a glyph the site name suggests (Coffee Shop becomes a cup-shaped block; Gaming News becomes a tickertape strip).
- **Palette**: rail `#0F0F11` · pane `#16161A` · iframe area `#0A0A0C` · accent **bone-warm** `#D4C9AE` · ink primary `#E6E4DC` · ink secondary `#6E6E72`.
- **Headline typeface**: **Bricolage Grotesque** with its full **wdth / wght / opsz** axes exposed — letters are pushed and pulled into shapes. The variable axis IS the layout engine.
- **Body typeface**: **Newsreader** 400 for meta hints and form labels.
- **Rail-button treatment**: five **single Bricolage glyphs** each in a different axis-extreme — `S` ultra-wide / `M` ultra-narrow / `B` ultra-bold / `D` ultra-light / `L` ultra-condensed-italic. Each silhouette unmistakable. Active glyph drifts to a balanced axis (interpolated transition), gaining a 1 px bone underline.
- **Saved-sites pattern (NEW)**: four **composed type-shapes** in a 2×2 quilt — each site's letters are arranged to form a recognisable mass (Coffee Shop wraps into a stacked U-shape; Vueo theme dev forms a tall pillar; Gaming News a wide horizontal bar; Unsaved Playground a half-faded outline). No card, no border, no second line. The shape IS the affordance.
- **Start-routes pattern (NEW)**: six lines, each set in a different axis combination so each route reads as its own personality — `Vanilla` plain regular, `WordPress PR` italic narrow, `Gutenberg PR` bold expanded, `From GitHub` condensed mono-feeling, `Blueprint URL` light expanded, `Import ZIP` heavy condensed. No icons. The typography is the icon.
- **Library overlay**: 43 blueprints each set in their own axis-extreme miniature — a wall of typographic personalities, sortable by axis (width slider replaces the search ranker).
- **Why different from v11**: nothing in v11 lets typography draw shapes; everything was tidy linear rows.

---

### 3 — Hand-Lettered Ledger
- **Visual idiom**: a leatherbound night-watchman's logbook, every saved site written in dip-pen ink by the same hand at slightly varying pressure.
- **Palette**: rail `#0E0B07` · pane `#16110A` · iframe area `#0B0805` · accent **iron-gall** `#6B7BA8` (ink-blue) · ink primary `#E2D8BE` · ink secondary `#78684C`.
- **Headline typeface**: **Caveat Brush** at 28–40 px — a brush-pen face with real stroke variation; ONLY for site names and pane titles.
- **Body typeface**: **Spectral** 400 italic for meta, dates, log lines (gives the printed-form feel against the handwritten entries).
- **Rail-button treatment**: five **inked tally strokes** — Sites = a four-stroke gate-mark, Manager = two crossed lines, Blueprint = a folded crease, Database = three short horizontal pen-strikes, Logs = a single horizontal stroke. Each genuinely hand-drawn SVG; active stroke gains a faint iron-gall halo.
- **Saved-sites pattern (NEW)**: four **handwritten lines down a ruled page**, each entry a single line of Caveat Brush — `Coffee Shop — opened May 20` — with the date set inline as part of the prose, no column. The fourth (Unsaved) is written in lighter pressure with a tiny iron-gall asterisk at its left margin. Rule lines are 1 px `#1A140C` horizontal, the only border.
- **Start-routes pattern (NEW)**: six **table-of-contents entries** in the same hand, leadered with hand-drawn dotted lines to an inked verb at the right (`open`, `paste`, `paste`, `link`, `paste`, `drop`). No cards.
- **Library overlay**: 43 entries set as a hand-indexed catalogue — alphabetical by name, each line `Art Gallery ........ Website`. Category filter is a row of brush-pen tags at the top.
- **Why different from v11**: v11 had no handwriting register at all; everything was machined.

---

### 4 — Variable-Axis Specimen
- **Visual idiom**: the saved-sites list IS a font specimen — each site name's weight, width, and slant ENCODE data. Heavier = larger on disk; wider = more recently opened; italicised = unsaved.
- **Palette**: rail `#0E1014` · pane `#13161B` · iframe area `#080A0E` · accent **steel-blue** `#5C7C96` · ink primary `#E2E5E9` · ink secondary `#6E7480`.
- **Headline typeface**: **Recursive Sans** Linear, full axis (`wght 300–1000`, `slnt 0--15`, `CASL 0–1`) — the only Google variable that exposes enough axes to encode three data dimensions.
- **Body typeface**: **Recursive** Linear at 400/0/0 for forms and meta — same family, dialled to neutral, so the contrast comes only from the encoded entries.
- **Rail-button treatment**: five **axis demonstrations** — each rail glyph is the letter `R` set at a different axis preset (heavy / wide / slanted / casual / regular). Visually distinct because the axis itself differs. Active glyph animates a 240 ms axis transition into the chosen state.
- **Saved-sites pattern (NEW)**: a **single column of names** at 24 px, no meta column at all. The encoding does the work — `Coffee Shop` at wght 700 (it's the biggest, 24 MB), `Vueo theme dev` slanted 8° (touched yesterday), `Gaming News` at wght 400, `Unsaved Playground` italic casual (state-tinted steel-blue). A legend strip below the list explains the encoding once.
- **Start-routes pattern (NEW)**: six route names set with axis encoding the *speed/destructiveness* — `Vanilla WordPress` neutral, `WordPress PR` heavy (rebuilds), `Gutenberg PR` heavy slanted, `From GitHub` regular, `Blueprint URL` regular, `Import ZIP` italic casual (one-shot). Same column-of-names treatment.
- **Library overlay**: 43 blueprint names with axes encoding popularity (weight) and category (CASL). Filters slide the axis range — drag the wght slider to show only the heaviest (most-used) blueprints.
- **Why different from v11**: v11 used Recursive once (010) only for its label-look; here the axis is the entire information architecture.

---

### 5 — Bilingual Masthead
- **Visual idiom**: each saved site is a single line in two cuts — display serif title + small-caps Latin tagline — like a Penguin Classics cover where every entry has its sub-title baked into the same baseline.
- **Palette**: rail `#0C0D0F` · pane `#13141A` · iframe area `#08090C` · accent **vermilion** `#B14A35` · ink primary `#E8E2D2` · ink secondary `#7B7568`.
- **Headline typeface**: **Fraunces** 500 opsz-144 for the display title.
- **Body typeface**: **Fraunces** small-caps at 9 px tracked +160 for the inline tagline (same family, second cut — keeps the spec lean).
- **Rail-button treatment**: five **bilingual stacks** — each dock is its English name at 11 px Fraunces over a 7 px Latin small-caps subtitle (`Sites / loca`, `Manager / opera`, `Blueprint / forma`, `Database / data`, `Logs / acta`). Each silhouette distinct because the word pair is unique. Active dock fills vermilion on the Latin half only.
- **Saved-sites pattern (NEW)**: four **single-baseline mastheads** — `COFFEE SHOP   ·   coffee · woocommerce · 24mb · may 20` where the display title is 22 px Fraunces and the meta is small-caps 9 px on the SAME baseline, separated by a single 4 px vermilion centred dot. No second line, no card. The line breaks naturally if narrow.
- **Start-routes pattern (NEW)**: six bilingual mastheads stacked vertically — `VANILLA WORDPRESS · sine ulla mutatione`, `WORDPRESS PR · ex repositorio`, etc. The Latin (or English colloquial) is the description.
- **Library overlay**: 43 mastheads. Categories appear as the small-caps strip across the top, each category name in the same bilingual treatment (`THEMES · velamina`).
- **Why different from v11**: v11's editorial direction (005) used Spectral vertically; this uses Fraunces *horizontally* with two cuts on one baseline, eliminating the second line entirely.

---

### 6 — Hierarchy by Size Only
- **Visual idiom**: a column of site titles where **font size encodes recency** — the newest site is set at 56 px, the next at 36, then 24, then 14. The visual rank IS the meta.
- **Palette**: rail `#0F0F11` · pane `#16171B` · iframe area `#0A0B0E` · accent **brass** `#C49A4C` · ink primary `#ECE7D8` · ink secondary `#6F6A60`.
- **Headline typeface**: **DM Serif Display** — high-contrast didone-ish display that gains personality fast as size increases.
- **Body typeface**: **Public Sans** 400 for forms and any non-list meta.
- **Rail-button treatment**: five **letters at five different sizes** stacked — `S` 22 px (largest, primary), `M` 18, `B` 15, `D` 13, `L` 11. The hierarchy is fixed; usage frequency dictated the rank once. Active letter inverts to brass on a 1 px brass underline.
- **Saved-sites pattern (NEW)**: four titles in a single column, **flush left, no border**, ordered by recency with `Coffee Shop` set 56 px DM Serif Display, `Vueo theme dev` 32 px, `Gaming News` 22 px, `Unsaved Playground` 14 px ink-italic. The whole column tapers down the page. Tiny brass dot at left of the active row, that's the only chrome.
- **Start-routes pattern (NEW)**: six routes ranked by *likelihood of use* — `Vanilla WordPress` 44 px, `Blueprint URL` 30 px, `Import ZIP` 24 px, `From GitHub` 20 px, `WordPress PR` 16 px, `Gutenberg PR` 14 px. The size tells you what most people pick.
- **Library overlay**: 43 blueprints ranked by category popularity, sizes step from 36 down to 12; tag filters preserve the size-ranking.
- **Why different from v11**: nothing in v11 used size as the primary information dimension; everything was uniform-sized rows.

---

### 7 — Stencil ID Plates
- **Visual idiom**: a row of **stenciled identification plates** as if sprayed onto a crate; each saved site is one stencil-cut title, the breaks in the letters being the visual signature.
- **Palette**: rail `#0E0E0E` · pane `#161614` · iframe area `#0A0A09` · accent **ochre** `#C68A2B` · ink primary `#E6E1CE` · ink secondary `#7C7568`.
- **Headline typeface**: **Saira Stencil One** at 28 px, or **Stardos Stencil** for a more US-military cut. The stencil bridges in `O`, `D`, `R` carry the conceit.
- **Body typeface**: **Saira** (matching, non-stencil) 400 for forms and meta, so the stencil reads as deliberate not gimmicky.
- **Rail-button treatment**: five **stencil-cut single letters** `S M B D L` at 24 px, stencil bridges intact. Active letter is sprayed in ochre overlay (CSS mask).
- **Saved-sites pattern (NEW)**: four **stencil ID plates** stacked vertically, each just the title in 28 px stencil, full pane width, separated by 24 px of negative space. No date, no number, no card. Hover surfaces a single-line ochre tooltip with date+size.
- **Start-routes pattern (NEW)**: six **crate-stamp slugs** — `VANILLA WP`, `WP/PR`, `GB/PR`, `GITHUB`, `BLUEPRINT`, `ZIP` — terse stencil titles, all caps, no descriptions. The route name does the explaining.
- **Library overlay**: 43 stencil plates in a 4×11 grid. Each blueprint name abbreviated to fit one line in stencil; full name reveals on hover. Category filter is a horizontal row of stencil tags.
- **Why different from v11**: stencil cuts are a forbidden-feeling industrial register v11 deliberately avoided — this leans into it.

---

### 8 — Editorial Drop-Cap
- **Visual idiom**: each saved site begins with a giant **drop-cap initial** that occupies 3 baselines, then the title flows inline like a paragraph opening; the meta runs as the rest of the prose.
- **Palette**: rail `#0E100F` · pane `#15171A` · iframe area `#0A0B0D` · accent **drafting-red** `#A8483A` · ink primary `#E7E3D6` · ink secondary `#7A766A`.
- **Headline typeface**: **Newsreader** opsz-72 at 64 px for the drop-cap (display optical size really matters here).
- **Body typeface**: **Newsreader** opsz-14 at 14 px for the inline flow (same family, two opsz — the conceit).
- **Rail-button treatment**: five **drop-cap fragments** — each dock is a single Newsreader opsz-72 capital at 24 px (`S`, `M`, `B`, `D`, `L`), no second mark. Active gains a 1 px drafting-red underline beneath the cap.
- **Saved-sites pattern (NEW)**: four **paragraph-style entries** — a 56 px `C` drop-cap, then on the right-flowing first line `offee Shop · WooCommerce · 24 MB · opened May 20`. Below the cap on lines 2–3, a continuation: `Last saved 2 minutes ago. Click to resume.` The drop-cap IS the visual anchor; no card; entries separated by a single hairline.
- **Start-routes pattern (NEW)**: six paragraph entries, each with a 48 px drop-cap of the route's first letter (`V` `W` `G` `F` `B` `I`), title flowing inline beside it, a single-sentence description below as prose.
- **Library overlay**: 43 drop-cap paragraphs in 2 columns. The drop-cap colour shifts to drafting-red for "Featured" entries — that's the entire visual differentiator.
- **Why different from v11**: v11's 006 Inked Schema used Crimson Pro as captions; this uses the same editorial register but turns each row into a paragraph opening, which is a wholly different list shape.

---

### 9 — Vertical Book Spines
- **Visual idiom**: a shelf of vertical spines; each saved site is a title set **vertical-rl** like a hardback, stacked horizontally along the pane like books on a shelf.
- **Palette**: rail `#0C0A08` · pane `#14110C` · iframe area `#08070A` · accent **bottle-green** `#3F6B4E` · ink primary `#E4DDC9` · ink secondary `#776B55`.
- **Headline typeface**: **Cormorant Garamond** 500 italic — its long ascenders and elegant italic look right rotated.
- **Body typeface**: **Atkinson Hyperlegible** 400 for forms (Cormorant rotated is hard to read at small sizes, so any non-spine text uses Atkinson).
- **Rail-button treatment**: five **vertical labels** — each dock is the full word `Sites` `Manager` `Blueprint` `Database` `Logs` set vertical-rl in Cormorant italic 14 px, ink-secondary. Active gains a 2 px bottle-green bar at the top of the spine. Each word's silhouette differs because length differs.
- **Saved-sites pattern (NEW)**: four **vertical spines** in a horizontal row across the pane, each 32 px wide × 220 px tall — title in Cormorant italic 18 px rotated, the date set 9 px Atkinson at the foot of the spine. Width subtly varies (24 / 28 / 32 / 36 px) by file size, like books of different thicknesses. Unsaved spine has a hairline gap (no thickness).
- **Start-routes pattern (NEW)**: six spines on a second shelf — same treatment, slightly taller, route name on the spine. Click and the spine "tilts" forward (CSS rotateY) into a horizontal title-card with the launch form.
- **Library overlay**: a **wall of 43 spines** across multiple shelves, browsable horizontally; categories are shelf-labels above each shelf.
- **Why different from v11**: nothing in v11 used rotated typography; the entire list shape is rotated 90°.

---

### 10 — Newspaper-Masthead Per Entry
- **Visual idiom**: each saved site is rendered as its **own miniature masthead** — title in display serif, a dateline in small caps beneath, a thin double-rule, just like the top of a regional broadsheet.
- **Palette**: rail `#101012` · pane `#161718` · iframe area `#0B0B0D` · accent **red-ochre** `#A64A39` · ink primary `#EAE5D9` · ink secondary `#7C786C`.
- **Headline typeface**: **Playfair Display** 700 opsz-90 at 26 px — the high-contrast Scotch-style masthead face. Distinctive cut.
- **Body typeface**: **Source Serif 4** 400 for body and forms (Playfair has no body weight that works for forms).
- **Rail-button treatment**: five **mini-mastheads** — each dock is a single word in Playfair 12 px (`Sites`, `Manager`, `Blueprint`, `Database`, `Logs`) with a 1 px double-rule under each (`border-bottom: 3px double`). Each title's letter shape distinct. Active masthead's double-rule turns red-ochre.
- **Saved-sites pattern (NEW)**: four **masthead-cards without card chrome** — `COFFEE SHOP` in 26 px Playfair, with a 7 px small-caps tracked dateline beneath (`SAVED · MAY 20 · WP 6.7 · 24 MB`), then a 3 px double-rule across the pane width. No box, no number, no second column. Stacked vertically.
- **Start-routes pattern (NEW)**: six mini-mastheads — `THE VANILLA EDITION`, `THE PULL REQUEST`, `THE GUTENBERG REVIEW`, `THE GITHUB DISPATCH`, `THE BLUEPRINT BULLETIN`, `THE ZIP HERALD`. Each with its own double-rule and a one-line standfirst beneath in small caps.
- **Library overlay**: 43 mastheads in 2 columns; categories are section labels (`THE THEMES SECTION`, `THE WOOCOMMERCE SECTION`) running across the top of each cluster.
- **Why different from v11**: v11's 005 Brutalist Editorial used one masthead for the whole chrome; here EACH entry becomes its own masthead — a fractal version.

---

### 11 — Tabular Figures Column
- **Visual idiom**: a typesetter's date-and-figure ledger — the meta column is **tabular numerals in a proportional face** so dates and sizes line up vertically while the names breathe naturally. The numerals are the conceit; the names are quiet.
- **Palette**: rail `#0D0F11` · pane `#15171A` · iframe area `#090B0D` · accent **teal-muted** `#3E7E78` · ink primary `#E0E4E6` · ink secondary `#74797E`.
- **Headline typeface**: **Source Serif 4** 500 at 16 px for names — calm proportional serif with first-class tabular figure feature (`font-feature-settings: 'tnum'`).
- **Body typeface**: **Source Sans 3** 400 — same family pair, tnum throughout the meta columns.
- **Rail-button treatment**: five **numeric channel-tags** `01 02 03 04 05` set in Source Sans 13 px tnum, ink-secondary. Active gains a 2 px teal bar at the top of its numeral, not a box.
- **Saved-sites pattern (NEW)**: a **two-column ledger** — name left-flush in Source Serif, meta right-flush in tabular Source Sans (`24.0 MB · 20·05·26 · 14:22`). The decimals and colons all align across rows because of tabular figures. No border between rows, just 18 px vertical rhythm. The visual conceit is the perfectly-aligned digit grid against the rag of names.
- **Start-routes pattern (NEW)**: same ledger shape but the right column is the route's *expected boot time* in tabular figures (`~2.4 s`, `~14 s`, `~14 s`, `~6 s`, `~4 s`, `~depends`). The numerals quantify the choice.
- **Library overlay**: 43 entries in the same ledger, right column is the blueprint's last-updated date in tabular figures. Categories are a horizontal teal-underlined strip at top.
- **Why different from v11**: v11 forbade monospace; this fulfils the alignment desire WITHOUT monospace by using only tabular figures in a proportional face — a register no v11 design touched.

---

### 12 — Inverted-Contrast Display
- **Visual idiom**: a high-contrast didone (Bodoni-ish) display face used INVERTED — instead of the usual rich black on cream, the hairlines glow against deep black, like neon engraved on jet.
- **Palette**: rail `#08080A` · pane `#0F0F12` · iframe area `#050507` · accent **gilt-pale** `#D8C188` · ink primary `#F4EFE2` · ink secondary `#615C52`.
- **Headline typeface**: **Bodoni Moda** opsz-96 at 32–48 px — the thinnest hairlines of any Google didone, perfect for the inverted-contrast effect.
- **Body typeface**: **Inria Serif** 400 for forms and meta — a low-contrast serif that doesn't compete with Bodoni's drama.
- **Rail-button treatment**: five **single Bodoni capitals** `S M B D L` at 28 px opsz-96, ink-primary, deliberately ultra-thin. Active capital fills to gilt-pale (the only colour). Silhouettes differ because Bodoni capital widths differ wildly at display size.
- **Saved-sites pattern (NEW)**: four **single-line display titles** in 36 px Bodoni opsz-96 — `Coffee Shop` — full-pane-wide, generous 32 px vertical spacing, no meta visible. Hover reveals a single Inria Serif italic line beneath at 11 px (date + size). The title alone is the row; the contrast does the visual work.
- **Start-routes pattern (NEW)**: six display titles same treatment. `Vanilla WordPress` reads as a couture chapter heading. Tiny gilt dot to the left of the route on hover.
- **Library overlay**: 43 display titles in 3 columns at 24 px Bodoni opsz-72. Category filter is a horizontal strip of Bodoni small caps at 10 px tracked +160. The whole modal feels like a fashion contents page.
- **Why different from v11**: nothing in v11 had display-serif drama at this scale; all v11 type sat at body-text size with restraint.

---

## Elimination round — 8 most type-distinctive

Picking the eight where the type is genuinely doing the heavy lifting, not just being chosen carefully. I'm dropping the four where the conceit risks reading as "another nicely-typeset list".

**Keep:**

1. **Inscription Hall** — Cinzel cut into stone, Roman numeral dates: nothing else in v11 or v12 looks like it.
2. **Concrete Poem** — Bricolage axis-shaping is wholly novel as a list device, not just a display trick.
3. **Hand-Lettered Ledger** — Caveat Brush is the most contrarian register against everything WordPress-y; the handwriting is genuinely the design.
4. **Variable-Axis Specimen** — Recursive axes encoding data is a typographic-AS-information move v11 never made.
6. **Hierarchy by Size Only** — size-as-meta is the cleanest type-led information hierarchy in the set; eliminates meta lines entirely.
7. **Stencil ID Plates** — stencil bridges are an instantly-recognisable cut; the whole UI rides on it.
9. **Vertical Book Spines** — only direction that rotates the list 90°; impossible to confuse with any v11 design.
11. **Tabular Figures Column** — solves the alignment urge without monospace; the typographic feature IS the design.

**Cut (but worth noting why):**

- **Bilingual Masthead** (5) — strong but the two-cut-on-one-baseline trick risks looking like a Fraunces specimen; closer to v11's 005 than I'd like.
- **Editorial Drop-Cap** (8) — beautiful but drop-caps are common; the typographic personality is the FACE, not a structural reinvention of the list.
- **Newspaper-Masthead Per Entry** (10) — risks fractal-noise; one masthead per entry could read as decoration rather than information.
- **Inverted-Contrast Display** (12) — gorgeous but the conceit is "use Bodoni big"; the list pattern (single line per row) isn't structurally novel enough.

The eight that survive are united by one rule: **the typographic move dictates the row shape**, not the other way around. Each one would be impossible to render without its specific typeface choice — which is the test the user is asking for.
