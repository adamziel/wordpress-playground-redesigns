# 011 — Pastel Macaron

## Thesis

A candy-shop palette dressed in disciplined typographic restraint. The chrome around the WordPress iframe is built from four pastel macaron tones — rose (#FFB5C5), mint (#B8E0D2), lavender (#D7BDE2), and butter (#F6E1B0) — laid on warm white (#FFF9F4). Inter at weight 400/500 keeps the type calm, generous 18px corner radii and 1px tinted hairlines hold every surface together, and a soft drop shadow under each panel gives the design a sweet, almost confectionery lift. The visible vocabulary is playful, but the underlying grid is strict: the iframe stays the loudest, sharpest object on the screen and every other surface recedes into a low-saturation pastel haze.

## What is locked

The v7 #010 interaction model is preserved end-to-end. One quiet left rail (the candy-jar with only two docks), one swap-content pane, one slim top capsule shaped as a rose pill, a corner site widget shaped as a mint capsule, a z3 modal Library overlay, and the mobile mirror where the rail becomes a bottom tab bar and the pane becomes a bottom sheet. The save-pill in butter is the single source of truth for save state — Unsaved, Saving, Saved, Stale — and never duplicated by a banner. The 36px capsule carries refresh, address, Playground name, save-pill, More menu (Export to GitHub PR, Download .zip), and Fullscreen on a single row. The Library overlay sits at z3 with backdrop blur, a 10-category sidebar (All, Featured, Website, Personal, Content, Themes, Gutenberg, Experiments, WooCommerce, News) and at least 16 cards.

## What this skin explores

The pane content arrangement is the v7-closest variant: **two docks** on the rail (Sites + Manage). The Sites pane uses three Yours/New/Library segments — all six start routes are reachable from New (Vanilla WordPress, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip). The Manage pane uses **five candy-pill tabs** colour-coded by domain — Settings (rose), Files (mint), Blueprint (lavender), Database (butter), Logs (peach) — so each tab keeps its own tonal home even as content swaps inside a single pane.

## Trade-offs

- Pastels limit contrast for status colours. Save states use butter for Unsaved, lavender for Saving, mint for Saved, and a deeper rose for Stale — no neon.
- The mint corner widget and the mint Saved pill share a tone; we differentiate by shape (capsule vs pill) and weight.
- Apply+Reset is destructive but the colour system is gentle, so the confirmation modal leans on a typed-phrase mechanic plus a visible diff and an auto-snapshot promise to make the destructiveness explicit through copy, not chrome.
- 18px radii feel friendlier than 6px but eat slightly more horizontal space; the pane keeps 380px to match v7 and never widens beyond 520px in Manage mode.
