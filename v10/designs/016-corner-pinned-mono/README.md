# 016 — Corner-Pinned Tools · Mono Brutalist

## Thesis

There is no rail. The chrome around the WordPress iframe is reduced to four monospace **CORNER CHIPS**, one pinned to each corner of the live surface, plus a single slim top capsule. The chips are raw, ALL CAPS, JetBrains Mono labels in a 2px black box on bone paper (#F5F1E8). Click any chip and the **same single secondary pane** expands — but it anchors to the chip's corner instead of always sliding from the left. Manage opens top-right; Sites opens bottom-left; Library opens as a full overlay from top-left; Logs opens bottom-right.

The result is the v7 #010 model unfolded to its skeleton: one iframe, one secondary surface, one capsule, one corner widget identity, but the destinations are *attached to the iframe itself* like Post-it tabs on a printed page. Reading direction becomes spatial — Sites lives where you'd find the printer tray of a draft, Manage lives where the inspector marks revisions, Library lives where the file cabinet sits, Logs lives where the smoke comes out.

## What's locked vs. explored

**Locked (matches v7 #010):**
- One iframe-primary surface; the WordPress live site is always the loudest object.
- One secondary pane — only one open at a time. Same content rules, same 5 Site Manager surfaces (Settings / Files / Blueprint / Database / Logs) accessed as 5 internal tabs inside the Manage pane.
- Slim 36px top capsule with refresh / address / WP Admin / Homepage / pgtitle / save pill / More / Fullscreen.
- Corner Sites widget identity preserved as the bottom-left SITES chip.
- z3 modal Library overlay with 10 categories and ≥ 16 cards, search and ⌘L shortcut.
- Mobile mirror: chips collapse to a 4-button bottom row, pane becomes a bottom sheet, library remains full-screen.
- Apply+Reset uses a typed phrase + diff + auto-snapshot confirmation pattern.

**Explored (structural shift):**
- The rail is **removed entirely.** The 4 destinations live as floating corner chips on the iframe — Library top-left, Manage top-right, Sites bottom-left, Logs bottom-right.
- Pane anchoring is *spatial* — the pane appears closest to the chip you clicked (Manage drops below the top-right chip; Sites floats above the bottom-left chip).
- The visual idiom is pure brutalist mono: no color (one signal red on destructive Apply only), no radius (0px everywhere), no shadow, no gradient. Raw 1.5–2px black borders, JetBrains Mono on every element, ALL CAPS labels with letter-spacing.

## Trade-offs

- **Win:** the iframe gets the maximum possible breathing room — no rail eating 64px of horizontal width. Corner chips occupy ~120×34px each, leaving the live surface dominant.
- **Win:** the brutalist mono treatment makes a stranger able to identify the design without reading the title — there is no design like it in the round.
- **Cost:** four corners is four points of attention. Mitigated by uniform chip shape, identical typography, and the fact that only the active chip flips to inverse (black fill, bone text).
- **Cost:** spatial pane anchoring means panes float in different positions depending on the active tool. The fixed 380px width and the anchor rule (Manage right-edge aligned to chip right-edge; Sites left-edge aligned to chip left-edge) keep it predictable.
