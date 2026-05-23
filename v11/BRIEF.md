# WordPress Playground v11 — Ten Dark Skins of the Quiet Rail

Locked-model only. Ten dark-theme prototypes that all express the v7 #010 “Quiet Rail · Depth Tiers” interaction model. The user has signed off on the model and on this round's taste constraints. v11 explores **simplicity, clarity, focus** — strip what isn't carrying weight.

Live URL: `https://adamziel.github.io/wordpress-playground-redesigns/v11/`.

---

## The locked interaction model (do not reshape)

1. **One iframe-primary surface.** The WordPress iframe is the only sharp, fully visible surface. Everything else recedes.
2. **One quiet left rail (~64–72 px).** Contains exactly 5 dock buttons — Sites, Site Manager, Blueprint, Database, Logs — plus one quiet identity mark at the top. **That is the whole rail.** No gear, no help, no avatar, no badges, no “new” tag. The 5 buttons must be visually distinct from each other (see §3).
3. **One swap-content pane** to the right of the rail. Clicking a dock swaps the pane's contents. Never two panels side by side.
4. **A slim top capsule** across the top of the iframe area. Holds refresh, address bar / path input, Playground name, save-state pill, fullscreen toggle, More (Export to GitHub PR, Download .zip). Under 8 affordances total. One row.
5. **A corner site widget** at the iframe's bottom-left (or bottom-right per idiom). Site name + state, click to open Sites pane.
6. **A modal Library overlay** for the 43-blueprint browser. 10 categories, search, ≥ 16 cards.
7. **A mobile mirror** at 390 × 844: rail rotates to a bottom tab bar; pane becomes a bottom sheet; corner widget becomes a thin capsule above the bottom bar; library overlay is full-screen.

---

## Hard taste constraints (these are the test)

These are derived from explicit user feedback after seeing v10. Every design is judged against this list:

1. **Genuinely dark.** Page background lives in `#06–#1A` range. No "dark accent on light".
2. **No purple, plum, violet, magenta-leaning hues.** Anywhere. Pick accents from amber, ochre, brass, gilt, vermilion, copper, red-ochre, drafting red, bone-cream, ivory, teal (muted), bottle green, steel-blue, ink-blue, slate — or no accent at all.
3. **No monospace outside the in-pane code editor.** Path inputs, labels, save pills, log lines, blueprint JSON titles, captions — all proportional type. The code editor body and the inline `<code>` for paths INSIDE the file editor may be monospace. Nothing else.
4. **No typical font faces.** Avoid Inter, Roboto, Helvetica, Arial, ui-sans-serif default, JetBrains Mono. Use distinctive but readable typefaces — typical picks: Geist, Mona Sans, Manrope, DM Sans, Outfit, Plus Jakarta Sans, Public Sans, Sora, Space Grotesk, Bricolage Grotesque, Recursive Sans, Atkinson Hyperlegible, Fraunces, Newsreader, Spectral, Lora, Crimson Pro, Cormorant Garamond.
5. **Multiple distinct rail buttons, Forest-Botanical style.** Five rail buttons, each visibly individual — not a column of identical squares. Treatments may use: 2-letter monogram pairs, single italic letters, Roman numerals (I–V), stamped numerals (01–05), hand-cut glyphs (woodblock / dot-line / brush / illuminated capital / patch label / Fig.-N caption). **No icon font set.** No generic Lucide / Phosphor / Tabler.
6. **No icon proliferation in the sidebar.** Exactly the 5 dock buttons + one identity mark. Nothing else.
7. **No color proliferation.** Single accent only (or zero accent). Status colors (saving / saved / stale / error) are the only exception and must be muted in the dark idiom — typically a state-tinted version of the single accent or a single neutral lift.
8. **No borders inside borders.** If a card has a border, its inner blocks have no border (or only a single bottom rule). Avoid stacked rectangles.
9. **No secondary text under buttons.** Each rail dock has one mark. Buttons in the pane have one label, no helper line beneath.
10. **Simplicity and clarity over decoration.** If removing an element would make the screen easier to focus on, remove it. The user must be able to point at the rail, the pane, the capsule, and the iframe instantly.

---

## What every design must show (feature coverage)

Each `designs/NNN-slug/index.html` is a single self-contained HTML document. It must visibly contain:

- Real `<iframe>` (its content can be a `srcdoc` mock of a WordPress site — keep the mock realistic, not Lorem Ipsum).
- Refresh control, address/path input, WP Admin button, Homepage button, Fullscreen / focus toggle.
- Save state pill in at least one panel showing the cycle: `Unsaved`, `Saving`, `Saved`, `Stale`.
- Saved Playgrounds list with **4 realistic entries** (e.g. Coffee Shop, Vueo theme dev, Gaming News, Unsaved Playground — name + date + size).
- All six **Start a new Playground** routes: Vanilla WordPress, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip.
- Blueprint gallery with **search field**, all **10 category names** (All, Featured, Website, Personal, Content, Themes, Gutenberg, Experiments, WooCommerce, News), and **≥ 16 visible blueprint cards** drawn from the 43 known list (see `/home/claude/wordpress-playground-redesigns/BLUEPRINTS.md`).
- All 5 Site Manager surfaces shown across the document: **Settings**, **Files**, **Blueprint**, **Database**, **Logs**.
- Settings fields: WordPress version (with "Include older versions"), PHP version, Language, Allow network access, Create a multisite network.
- Additional actions: Export to GitHub PR + Download .zip.
- Destructive Apply + Reset with a real confirmation mechanic (typed-phrase + diff + auto-snapshot).
- **Three states minimum** in one document: running session, booting/starting, launcher/library/manager open. Render as labeled panels.
- **Mobile mirror** 390 × 844 in the same document.
- Realistic mock data: ≥ 6 PHP log lines, sample blueprint JSON, file tree under `/wordpress`, SQLite path `/wordpress/wp-content/database/.ht.sqlite` with size.

---

## File layout

```
v11/designs/NNN-slug/
  index.html      (single self-contained, ≥ 18 000 bytes, all CSS+JS inline, viewport meta required)
  README.md       (≥ 700 chars: thesis, what's locked vs explored, focus-test answer, trade-offs)
  meta.json       (schema below)
```

`meta.json`:

```json
{
  "num": 1,
  "slug": "001-atelier-steel",
  "title": "Atelier Steel",
  "summary": "≤ 180 chars — name the idiom and the focus-test answer.",
  "model": "locked",
  "darkAccent": "bone-warm #D7CDB6 — active dock bar + saving pill only",
  "typeface": "Geist Headline + Geist Body",
  "railTreatment": "two-letter monograms (Si / SM / Bp / Db / Lg) in Geist medium",
  "paneArrangement": "5-dock"
}
```

The validator (`scripts/validate-design.mjs`) enforces the feature coverage and forbids known violations (Inter / Roboto / JetBrains Mono outside an `inline-code` editor block / purple hex ranges).

---

## The focus test

Before shipping, ask: *if a stranger were handed this design and asked to point at where the live WordPress site lives, the controls for that site, the launcher, and the destructive reset, could they do it in under five seconds without prior training?* If yes — ship. If no — strip more.
