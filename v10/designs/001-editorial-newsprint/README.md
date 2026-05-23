# 001 — Editorial Newsprint

## Thesis

The chrome around the WordPress iframe is treated as a Sunday newspaper supplement — cream stock, ink-black serif headings, hairline rules, small-caps eyebrows, and a single restrained gold accent (#B6892A). The iframe is the lead article; everything else is the table of contents pages laid out around it. The visual quiet of newsprint forces the live WordPress site to be the loudest thing on screen, which is exactly the iframe-primacy promise of the v7 #010 model.

## What's locked vs reshaped

**Locked (the v7 #010 interaction model):** one quiet left rail with five docks (Sites, Site Manager, Blueprint, Database, Logs); one swap-content pane that never shows two tools side-by-side; one slim 36px top capsule with refresh, address, name, save-pill, more, and fullscreen; a corner "Now Reading" stamp that opens Sites; a z3 modal Library overlay with category index and grid; a mobile mirror where the rail rotates to a bottom tab bar and the pane becomes a bottom sheet.

**Reshaped (the visual idiom):** no glass blur, no purple+cyan, no rounded chrome — instead 1px ink-black hairlines, a double-rule under section heads, 0–2px radii, Source Serif 4 + small-caps Inter for eyebrow labels. Save-pill is typeset as a small rosette. The Library overlay is broadsheet-style — a 4-column grid with a sidebar of categories like a newspaper section index. The Site Manager pane uses inline rows rather than tabs because newspapers don't have tabs.

## Trade-offs

- The newsprint idiom skews calm and traditional; users used to high-contrast SaaS chrome may need a beat to find the "active" rail item (it is marked by a thicker gold rule, not a filled chip).
- Hairline borders rely on crisp 1px rendering — at fractional zooms they can soften. We accept this; the idiom requires the discipline.
- Five separate panes (5-dock arrangement) means more rail trips than the tabbed Site Manager would; it pays back in calm, single-purpose surfaces.
- Cream paper limits the runway for state colors. We use ink-black for default, gold for active/important, a muted oxblood for destructive, and a deep moss for "saved" — no neon.
