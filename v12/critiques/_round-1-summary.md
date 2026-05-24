# v12 Round 1 — Critic Summary

## 20-design diversity test result

The set passes the headline test: laid side-by-side, the 20 designs read as 20 different shapes of list, not as 20 colors of the same row. The icon-left + 2-row-text v11 anti-pattern is genuinely absent from the saved-sites and start-routes panels of all 20 designs. Designers honored their assigned list pattern in 18 of 20 cases (the two borderline cases, #017 and #013, defended their patterns reasonably but are the weakest examples of "distinct list ontology" in the set).

That said, the 20 designs cluster into roughly 4 typographic families:
- **Type-as-data** (#012 variable-axis, #014 hierarchy-by-size, #019 inverted-contrast) — using a single typeface's properties to encode the row.
- **Tabular / ledger** (#001 newsprint-ledger, #020 tabular-figures, partly #018 newspaper-masthead) — rows with right-aligned numerals.
- **Physical objects** (#003 punchcard, #004 postcard-rack, #005 stamp-sheet, #006 vertical-book-spines, #013 stencil-plates, #015 marquee-letterboard, #017 jersey-tile) — each entry is a physical-object metaphor.
- **Prose / inscription** (#007 wall-labels, #008 hand-lettered, #010 liner-notes, #011 inscription-hall, #018 newspaper-masthead) — each entry is a sentence or stanza.

Within each family the designs are visually distinct, so the diversity test still passes.

---

## 5 strongest designs

1. **#012 Variable-Axis Specimen** — most ambitious answer to §11. Recursive's MONO/CASL/slnt/wght axes encode metadata literally INTO the title; the title IS the row. Rail buttons are 5 single letters at 5 distinct axis points — the strongest rail in the set.
2. **#010 Liner Notes Column** — cleanest typographic answer. Numbered tracks with leader-dots and tabular runtimes; one column, no ornamentation. Excellent rail (5 unicode geometric marks with real silhouette differences).
3. **#006 Vertical Book Spines** — most graphically decisive. A horizontal row of vertical-RL spines at a wood-shelf base is unmistakably its own ontology. Width encodes site size with no need for meta text.
4. **#001 Newsprint Ledger** — most disciplined ledger execution. Real HTML `<table>` with `Name / WP / PHP / Size / Updated` columns, hairline separators, no per-row icon. Excellent dialect carry-over to start-routes.
5. **#007 Wall Labels (Museum)** — strongest "prose" answer. Each entry reads as a literary catalogue ascription sentence, not as a UI list. Picture-light wash for active state is appropriately subtle.

## 5 weakest designs

1. **#004 Postcard Rack** — execution undermines the concept. Postmark seal dominates each card; the "rack" idiom is lost to a vertical accordion; the teal pill-shaped Apply button breaks the paper aesthetic. Conceptually distinct but the rendering doesn't honor the metaphor.
2. **#013 Stencil ID Plates** — visually too close to #002 Departure Board (same Saira Stencil One typeface, same orange-amber, same 2-letter rail codes). The saved-sites list (plates) is technically different from #002's split-flap rows, but the overall design language clusters them as siblings. Diversity hit.
3. **#017 Sportsbook Jersey** — borderline §11 violation. The structural shape "giant number on left, text on right" structurally echoes the v11 icon+row anti-pattern (the defense is that the number is typographic, not iconic). Plus the iframe mock uses Anton everywhere — the iframe doesn't even look like a WordPress site.
4. **#005 Stamp Sheet** — concept is strong, but execution has problems: the CSS perforation mask likely only renders on one edge of the stamp (not all four); the stamp has TWO meta marks per face (country eyebrow + denomination), where the brief says ONE.
5. **#015 Marquee Letterboard** — concept is strong, but too many `text-shadow` glows aggregate to a neon-y feel inconsistent with "indie cinema marquee at 10pm". Anton is also doing too much across the chrome.

---

## Cross-cutting patterns multiple designs share

### A. Designer 4's persistent iframe-corner annotation label (#016, #017, #018, #019, #020)
Every design in the #016–#020 range has an `.iframe-area::after { content: "X · iframe surface"; ... }` rule (lines 112/108/111/103/116 respectively). These are CAD-style fixed-position labels sitting on top of the iframe at the top-right corner. They are exactly the kind of pedagogical chrome the user banned. Removal in Round 2 is mandatory for all 5.

### B. Corner widget showing two stacked rows / two text elements (#001, #002, #006, #007, #008, #009, #011, #014, #015, #017, #018)
A surprising number of corner widgets at the iframe's bottom-left or bottom-right show `name + meta-line` — exactly the v11 anti-pattern in miniature. Several have the meta as a "subtle italic metadata", which still adds a second text line. Round 2 should collapse all corner widgets to a SINGLE typographic compound (or just the name).

### C. Mono usage inside the typed-phrase confirmation input (#008, #010, #014, #015)
Several designs use `ui-monospace` or `Courier New` for the diff-block and typed-phrase confirmation input in the Apply+Reset dialog. Per BRIEF §3 monospace should only be inside the code editor. The diff and the typed phrase are UI prose, not code. Round 2 should switch these to the design's body face with tabular-figures.

### D. Saira Stencil One overuse (#002, #013, #015)
Three designs use Saira Stencil One (or in #015 Anton which is similar in voice) heavily across chrome (not just titles). This concentrates "industrial stencil" voice in nearly 1/4 of the set. Designer 1 (#001–#005) repeated Saira in #002 and the file's overall stencil cluster makes #013 read as a sibling of #002. The two stencil designs are the biggest cross-similarity issue.

### E. Rail-button silhouette weakness (#002, #003, #013, #017)
Four designs use 2-letter monogram pairs (#002 SI/SM/BP/DB/LG, #013 same, #017 01/02/03/04/05) — these read as uniform columns even when the size/weight varies subtly. BRIEF §5 specifically cautions against "row of identical monogram pairs". Round 2 should push more dramatic per-dock variation in 4 of the rails.

### F. Mock-screenshot fills that look uniform (#009)
The lookbook's `fill-coffee`, `fill-vueo`, `fill-gaming`, `fill-unsaved` gradients all render as dark brown rectangles at viewport — the lookbook reads as a column of identical tiles. Needs much more hue separation.

---

## 3 biggest things to fix in Round 2 across the set

### 1. Remove all iframe-area pedagogical corner labels.
Designer 4 (#016–#020) consistently added a `.iframe-area::after` label like `FIELD · iframe surface`, `the broadsheet · iframe surface`, `hairline · iframe surface`, `the annual report · iframe`. Five designs need this removed. The iframe is self-evidently the iframe. The pane already names the surface.

### 2. Collapse corner widget two-text-row patterns to single typographic compounds.
At least 11 designs have a `.cws` / `.corner-widget` / `.widget` near the iframe corner that shows `name` + `meta-line`. The user explicitly banned this pattern at the list level; reproducing it in miniature at the corner widget is the same anti-pattern in disguise. Round 2 should collapse all corner widgets to one typographic line (name only, or one compound like `Coffee Shop · live`).

### 3. Push rail-button silhouette variation harder in the monogram-pair designs.
Designs #002, #013, #017 (plus arguably #003) have rails of nearly-identical 2-letter or 2-digit tiles. The Forest-Botanical test asks for visual individuality per silhouette. Round 2 should: (a) drop leading zeros in #017 (just `1 2 3 4 5`); (b) vary cut weight more dramatically in #002 and #013 (or replace 2-3 of the 5 monograms with single distinctive letters); (c) make #003's punchcard rail's dot patterns occupy more of the dock so the silhouettes are visible at thumbnail.

---

## Per-design quick verdict

| # | Slug | Verdict |
|---|------|---------|
| 001 | newsprint-ledger | ship as-is, minor |
| 002 | departure-board | minor |
| 003 | punchcard | minor |
| 004 | postcard-rack | MAJOR |
| 005 | stamp-sheet | minor |
| 006 | vertical-book-spines | ship as-is |
| 007 | wall-labels-museum | ship as-is |
| 008 | hand-lettered-ledger | minor |
| 009 | cinematic-lookbook | minor |
| 010 | liner-notes-column | ship as-is |
| 011 | inscription-hall | minor |
| 012 | variable-axis-specimen | ship as-is |
| 013 | stencil-id-plates | minor (similarity hit vs #002) |
| 014 | hierarchy-by-size | ship as-is |
| 015 | marquee-letterboard | minor |
| 016 | architectural-plan | ship as-is, minor |
| 017 | sportsbook-jersey | minor (borderline §11) |
| 018 | newspaper-masthead | minor |
| 019 | inverted-contrast | minor |
| 020 | tabular-figures | minor (§9 rail label issue) |

5 ship-as-is. 13 minor. 1 borderline. 1 major.
