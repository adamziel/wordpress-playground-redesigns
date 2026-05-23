# v10 Directions — Twenty Skins of the Quiet Rail

Read `BRIEF.md` first. All 20 designs preserve the v7 #010 interaction model: one quiet rail (or rail-equivalent primitive in the structural set), one swap-content pane, slim top capsule, corner site widget, modal library, mobile bottom-bar mirror. They differ in visual idiom, border vocabulary, type system, pane content arrangement, and (for #13–#20) the IA primitive itself.

> **For all designs:** the WordPress iframe is the loudest object. Everything else recedes. Pick *how* it recedes from your visual idiom — desaturation, soft glass, ink-on-cream paper, low-key shadow — but the user must always know where the live site lives.

---

## Locked-model designs (#001–#012)

These keep the v7 #010 IA exactly (left rail + pane + capsule + corner widget + modal library + mobile bottom bar). They differ only in visual idiom and what each rail item opens.

### 001 — Editorial Newsprint
- **Visual idiom:** cream paper (#F4EFE1), ink-black headings in Tiempos / Source Serif Pro, hairline rules, gold accent (#B6892A), small-caps eyebrow labels. The pane reads like the table of contents page of a Sunday newspaper supplement; the iframe is the lead article.
- **Border vocabulary:** 1px ink-black hairlines, thin double-rule under section heads, no rounded corners (radius 0–2px).
- **Pane arrangement:** 5 separate dock icons (Sites, Site Manager, Blueprint, Database, Logs) — each opens a dedicated pane. Site Manager pane has the Settings rows inline (no tabs).
- **Top capsule:** ink-on-cream slab, monospace path, save-pill is a small typeset rosette.
- **Corner widget:** a "Now Reading" stamp.
- **Library overlay:** broadsheet-style with 4-column grid and a sidebar of categories like a newspaper section index.

### 002 — Linear Onyx
- **Visual idiom:** matte near-black (#0A0A0B), bright single accent indigo→fuchsia (#7C3AED → #EC4899) used only on the active rail item and pane top edge. Inter Display 600 + JetBrains Mono. The famously crisp Linear aesthetic but recast for runtime ops.
- **Border vocabulary:** 1px rgba(255,255,255,0.06) hairlines; 0.5px subpixel rules between rows; 10px outer radius.
- **Pane arrangement:** 2 dock icons (Sites, Manage). Sites pane has 3 segments (Yours / New / Library). Manage pane has 5 tabs (Settings / Files / Blueprint / Database / Logs) — closest to v7 #010.
- **Top capsule:** pill-shaped with subtle horizontal sheen.
- **Corner widget:** rounded sticker with a pulsing green status dot.
- **Library overlay:** dialog with 240px category sidebar.

### 003 — Solar Marigold
- **Visual idiom:** brand-forward marigold (#FFC847) + warm brown ink (#3A2C12) on bone (#FAF7EE). Friendly, slightly retro — like a 1970s product manual. Inter + a slab serif for headlines (Bricolage Grotesque). Playful but professional.
- **Border vocabulary:** chunky 2px outer borders, slight inner shadow, 14px rounded corners.
- **Pane arrangement:** 5 separate dock icons. Files / DB / Blueprint / Logs each have their own pane.
- **Top capsule:** rounded slab with a marigold left edge accent.
- **Corner widget:** sunshine badge.
- **Library overlay:** poster-style cards with bold category chips.

### 004 — Tokyo Twilight
- **Visual idiom:** deep indigo (#0B0E27) with neon plum (#C792EA) and cool cyan accent. Inter + JetBrains Mono. Subtle radial glow behind the rail and pane. Calm, urban, modern.
- **Border vocabulary:** 1px rgba(199,146,234,0.18) borders with a 0.5px inner highlight on the top.
- **Pane arrangement:** 2 dock icons (Sites, Manage). Manage pane uses tabs.
- **Top capsule:** floating diamond with a barely-visible gradient.
- **Corner widget:** glow-dot pill.
- **Library overlay:** dark dialog with category sidebar; cards glow on hover.

### 005 — Carbon Lab
- **Visual idiom:** IBM Carbon-inspired. White (#FFFFFF) base, Carbon Gray 100 ink (#161616), Blue 60 accent (#0F62FE). IBM Plex Sans + IBM Plex Mono. Square corners, dense data tables, very technical.
- **Border vocabulary:** 1px Gray 30 (#C6C6C6) borders, no radius (0px), strict 16px grid.
- **Pane arrangement:** 5 separate dock icons — each tool gets its own pane. Site Manager pane is a Carbon Data Table view of Settings.
- **Top capsule:** square slab, no radius, monospace path.
- **Corner widget:** Carbon Notification toast shape.
- **Library overlay:** Carbon-style modal with category facets and a data table.

### 006 — Risograph Pulp
- **Visual idiom:** duotone risograph print — fluorescent pink (#FF48B0) + powder blue (#5BA8E5) on bone (#F6F1E4), with a subtle paper-noise texture and halftone dots used as ornament. Playful but knowing.
- **Border vocabulary:** 1.5px ink-black hairlines that print slightly off-register (with a 1px pink shadow offset).
- **Pane arrangement:** 3 dock icons (Sites, Inspect, Runtime). Inspect groups Files+Blueprint as 2 tabs; Runtime groups Database+Logs as 2 tabs.
- **Top capsule:** sticker with a fake print-register mark.
- **Corner widget:** risograph stamp.
- **Library overlay:** poster sheet with hand-drawn category labels.

### 007 — Cafe Latte
- **Visual idiom:** warm cream (#F2E8D5) + espresso brown (#3D2817) + caramel accent (#C68B59). Editorial serif headlines (Fraunces or DM Serif Display) + Inter body. Soft paper grain. Calm, hospitable.
- **Border vocabulary:** 1px brown hairlines, 6px rounded corners, soft inner highlight.
- **Pane arrangement:** 2 dock icons (Sites, Manage). Manage pane collapses Files/Blueprint/Database/Logs under one "Inspect" tabbed section + a top "Settings" section that's always visible at the top of the pane.
- **Top capsule:** rounded paper slab, caramel save-pill.
- **Corner widget:** coffee-stain ring with site name.
- **Library overlay:** dialog with serif category labels.

### 008 — Vellum Sage
- **Visual idiom:** soft greens — sage (#9CAF88) + cream (#F5F0E3) + ink-green (#2D3A2D). Pen-ink dividers, vellum paper texture, hand-set Garamond/Cardo for labels. Quiet, scholarly.
- **Border vocabulary:** 1px ink-green hairlines, decorative end-caps on dividers (small dots).
- **Pane arrangement:** 5 separate dock icons.
- **Top capsule:** parchment slab.
- **Corner widget:** wax-seal style stamp.
- **Library overlay:** library card catalogue feel.

### 009 — Bauhaus Primary
- **Visual idiom:** primary red (#E74C3C) + yellow (#F1C40F) + blue (#2C7BE5) on bright off-white (#FAFAFA), pure black (#000000) ink. Helvetica Neue / Inter (geometric). Strict Bauhaus geometry. Circles, squares, triangles used as iconography.
- **Border vocabulary:** thick 3px black borders, no radius, big blocky panels.
- **Pane arrangement:** 5 separate dock icons, each rendered as a colored geometric chip (red square, yellow triangle, blue circle, black bar, red dot).
- **Top capsule:** black slab.
- **Corner widget:** primary-color flag.
- **Library overlay:** grid of primary-color blocks.

### 010 — Architectural Blueprint
- **Visual idiom:** dark navy (#0F1B2D) base with a faint cyan (#5FB3E0) grid imprint and white technical sans (Söhne / Inter). Drafting style — annotations, leader lines, dimension text. The pane reads like a callout window on a technical drawing.
- **Border vocabulary:** 1px cyan hairlines, 2px corner ticks (drafting square corners), no rounding.
- **Pane arrangement:** 3 dock icons (Sites, Inspector, Telemetry). Inspector groups Files+Blueprint as 2 tabs. Telemetry groups Database+Logs as 2 tabs.
- **Top capsule:** annotation strip with leader-line accents.
- **Corner widget:** dimension callout.
- **Library overlay:** drafting board with category sheets.

### 011 — Pastel Macaron
- **Visual idiom:** rose (#FFB5C5), mint (#B8E0D2), lavender (#D7BDE2), butter (#F6E1B0) on warm white (#FFF9F4). Inter with soft weight. Friendly, candy-shop, playful but disciplined.
- **Border vocabulary:** 1px borders in matching pastel tints, generous 18px corner radius.
- **Pane arrangement:** 2 dock icons (Sites, Manage). Manage pane has 5 candy-pill tabs.
- **Top capsule:** rose pill.
- **Corner widget:** mint capsule.
- **Library overlay:** pastel grid with rounded cards.

### 012 — Forest Botanical
- **Visual idiom:** deep emerald (#1F3A2E) + ochre accent (#C58E3A) + cream (#F4EEDC). Hand-drawn divider ornaments (botanical motifs as SVG inline). Calm, slow, considered. Newsreader serif + Inter.
- **Border vocabulary:** 1px ochre hairlines, decorative leaf-cap on section dividers.
- **Pane arrangement:** 5 separate dock icons.
- **Top capsule:** olivewood slab.
- **Corner widget:** botanical sticker.
- **Library overlay:** field-guide style.

---

## Structural-exploratory designs (#013–#020)

These keep iframe-primacy + one secondary surface + the slim capsule + corner widget + modal library + mobile mirror. They reshape the rail primitive.

### 013 — Top Tab Strip (Graphite)
- **Structural shift:** the rail is **rotated 90° to the top**, sitting directly above the iframe under the capsule. The dock icons become 5 horizontal tabs. The pane drops down from the top edge of the iframe (sliding overlay from top, 40% of viewport tall).
- **Visual idiom:** monochrome graphite — Anthracite (#1A1D21), 7 grays, single moss-green accent (#8A9A5B). Inter + JetBrains Mono.
- **Border vocabulary:** 1px graphite hairlines, 6px radius.
- **Pane arrangement:** 5 dock tabs across the top, each opens a distinct dropping panel.

### 014 — Right Rail (Brass)
- **Structural shift:** mirror of v7 #010 — the rail is on the **right**, the pane swings open to the *left* of the rail. Address bar / save pill stay top-left so the user’s eye lands on the rail naturally after reading the address.
- **Visual idiom:** oxidized brass and bottle green — copper (#B07840) + bottle (#0E3A2F) + ivory (#F5EFE2). Professional, slightly luxurious, like a fountain pen catalogue.
- **Border vocabulary:** 1px hairlines, soft inner shadow, brass-gradient edge on the active rail item.
- **Pane arrangement:** 2 dock icons.

### 015 — Floating Dock (Aurora)
- **Structural shift:** the rail is **unpinned and floating** at the bottom-center of the iframe, like a macOS Dock. Pane appears as a translucent floating sheet anchored to the dock when an item is active. The dock and sheet float over the iframe; the iframe extends edge-to-edge.
- **Visual idiom:** liquid glass aurora — translucent panels, subtle prismatic gradient (violet→pink→cyan), iOS-26-style. Inter + SF Mono.
- **Border vocabulary:** no hard borders; specular highlights and ring-shadows; 18px radius.
- **Pane arrangement:** 5 dock icons.

### 016 — Corner-Pinned Tools (Mono Brutalist)
- **Structural shift:** **no rail at all.** Each tool becomes a small floating chip pinned to a different corner of the iframe (Sites bottom-left, Manage top-right, Library top-left, Logs bottom-right). Clicking a chip expands the same single secondary pane, but the pane anchors near the chip.
- **Visual idiom:** brutalist mono — pure black ink on bone, JetBrains Mono throughout, ALL CAPS labels, raw 1.5px borders.
- **Border vocabulary:** 1.5–2px solid black, no radius (0px), no shadow.
- **Pane arrangement:** anchored panes from corners.

### 017 — Bottom Inspector Dock (DevTools)
- **Structural shift:** **the pane is below the iframe** as a resizable, full-width dock (Chrome DevTools style). The rail collapses to a horizontal tab strip *inside* the dock. The iframe takes 65% of the height; the dock takes 35% and can be resized via a drag handle.
- **Visual idiom:** developer-tools clean — light theme variant, slate gray (#3C4144), Inter + JetBrains Mono, single Chrome-blue accent (#1A73E8).
- **Border vocabulary:** 1px slate hairlines, 4px radius on inputs only.
- **Pane arrangement:** dock has tabs (Sites · Settings · Files · Blueprint · DB · Logs) along the top.

### 018 — Command Palette First (Terminal Phosphor)
- **Structural shift:** the rail collapses to **2 buttons only** (Site + Library) plus a persistent `⌘K` palette as the primary IA. Everything reachable through the palette. The pane still exists as the one secondary surface; the palette drives what it shows.
- **Visual idiom:** terminal phosphor green — black bg (#000000), phosphor green (#00FF95), JetBrains Mono. Slight scanline overlay. CRT vibe, but disciplined.
- **Border vocabulary:** 1px phosphor borders, no radius.
- **Pane arrangement:** palette-driven; the palette docks at the top while open.

### 019 — Split-Rail Twin Pane (Mondrian)
- **Structural shift:** a **2-icon always-on slim left rail** (top icon = Launch, bottom icon = Inspect), each commits the pane to one of two pane modes. The pane never changes height/width — only contents. Effectively one secondary surface but the rail is minimal (only 2 destinations).
- **Visual idiom:** Mondrian primary blocks — pure red, yellow, blue, black, white. Helvetica Neue, geometric.
- **Border vocabulary:** thick 4px black borders, no radius. Color-block sections.
- **Pane arrangement:** 2-icon rail; pane contents reflow per icon. Inspect mode has 5 tabs (S/F/B/D/L).

### 020 — Bottom Sheet IA (Sunset Coral)
- **Structural shift:** **the pane is replaced by a persistent bottom sheet** that occupies ~40% of the viewport height by default and can drag up to 75%. The rail rotates to a thin top-edge strip of the sheet (handles + 5 tabs). The iframe takes the top 60% of the viewport.
- **Visual idiom:** sunset coral — peach (#FFB088), coral (#FF6B6B), warm sand (#FFE6D5), navy ink (#1F2A44). Friendly, warm, slightly tropical.
- **Border vocabulary:** soft 1px coral hairlines, 16px top corner radius on the sheet.
- **Pane arrangement:** the sheet IS the pane.

---

## Things every designer must remember

- The iframe is the loudest object. If the rail or pane competes with it visually, the design has failed.
- The save-pill is the *single source of truth* for save state. No red banner, no notice strip duplicating it.
- Library overlay is z3 deep — backdrop blur or scrim, then a discrete card. The user must feel they've left the workspace.
- 10 categories: All, Featured, Website, Personal, Content, Themes, Gutenberg, Experiments, WooCommerce, News. Show all 10. Show ≥ 16 cards.
- 4 saved sites mock data: e.g. "Coffee Shop", "Vueo theme dev", "Gaming News", "Unsaved Playground". Realistic dates and sizes.
- 6 start routes: Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip. All visible.
- 5 settings fields: WordPress version + "Include older versions", PHP version, Language, Allow network access, Create a multisite network.
- 2 export actions: Export to GitHub PR, Download .zip.
- The destructive Apply+Reset must show *some* confirmation mechanic — typed phrase, diff, auto-snapshot, undo banner.
- Mobile is mandatory. A second device frame within the same HTML showing the 390×844 layout is the standard pattern (see v7 #010 panel I).
