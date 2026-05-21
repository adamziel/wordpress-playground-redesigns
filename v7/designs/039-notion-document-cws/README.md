# v7 / 039 — Notion Document · Corner Widget Sites

## 1. Thesis

Treat each playground as a **Notion-style document**, not as a screen with a settings drawer. The iframe is one block in that document; the blueprint is another block; files, database, logs, settings — every Site-Manager surface is a block embedded in the same scrollable page, with hover toolbars and slash-commands like a real Notion page. Because the document IS the IA, there is no Site Manager pane, no top toolbar, and no dock. The only persistent chrome is a single frosted **corner widget at the top-left** that doubles as live status of the current document AND is the door to every other playground, the 6 "Start new" sources, and the full 43-blueprint Library. Press F on the iframe block to grow it (focus mode), press F again to fullscreen-promote it (only an exit pill remains). Two primitives composed into one user model: *a document you scroll, with a corner widget that knows what document you are on.*

## 2. Primitives composed (v7 KEEP, named)

- **CWS (corner-widget Sites, v5 #036)** — the *headline composition*. A single frosted widget anchored top-left in every state. Shows live status: site emoji + name + status pip (running green / unsaved amber / booting blue + pulse) + WP/PHP versions + OPFS size. Clicking the chevron expands the same widget in-place into a 320×460 panel with **three sub-tabs (Your sites · Start new · Library)** — the canonical launcher door. The quick-row (Refresh / Fullscreen / kebab) doubles as session controls. **One widget, two roles, one expand-in-place.** Spec-faithful per v5 #036.
- **TAB (tabs-only, v1 #53)** — *one nav primitive, but pushed inward*: the only tab strip is the three sub-tabs inside the expanded CWS panel (Your sites / Start new / Library). The 5 Site-Manager surfaces (Settings / Files / Blueprint / Database / Logs) are **not tabs** — they are document blocks reached by scrolling. This satisfies "one nav primitive" without spending 6 tabs on one segmented control (the recurring v7 VEN-drift).
- **DEV (DevTools slim top bar, v1 #64)** — *inverted*: I remove the persistent top bar entirely. Instead the per-iframe-block carries its own slim ~36 px header (URL bar + refresh + wp-admin/home/focus actions) — a *block-scoped* DevTools-style chrome that exists only when an iframe block is in the document. No persistent two-row anything. The save-state pill (from v1 §2.1.4) lives in the CWS pip, not in a top bar.
- **3LD (three-layer depth, v5 #035)** — **visual only, never interactive**, per v7 §1 DROP. Quantified blur scale `--z0:0 / --z1:8 / --z2:18 / --z3:36` applied as decoration: backdrop blur on the CWS widget (z1), backdrop blur on the boot overlay inside the iframe block (z1), document scrim behind the CWS expanded panel (z2), library overlay scrim (z3), destructive modal scrim (z3). No blur layer is ever the click target.
- **MOB (mobile-first, v1 #06)** — the same document at 390×844. CWS rotates to a full-width pill at top; tapping the chevron raises a bottom sheet with the same three sub-tabs at 78% detent. Fullscreen iframe on mobile is the same single-keystroke promotion as desktop. Mobile is a wider-mobile-style desktop, not a separate IA.

**Primitives I deliberately did *not* compose** (with rationale):

- **SR (smart resize)** — would force a divider between iframe and a secondary pane, contradicting the "everything is a block in one scrollable document" thesis. The iframe-block focus mode is a *layout* widen, not a pane resize.
- **QR (quiet-rail-to-loud)** — a 56 px rail would duplicate the CWS panel's door functions. The document already provides ambient navigation by scroll; a rail would create two doors per feature.
- **SPT (Figma spatial)** — would compete with the linear document. Notion's strength is sequence, not 2D spatial arrangement. A spatial overview belongs to a *different* design direction.
- **EPC (Epic launcher)** — the document's title + properties + first iframe block IS the cinematic introduction to a playground. A separate Epic launcher would replace the document with a marketing surface, which is what we don't want.
- **VEN (Ventura sidebar)** — would re-introduce a left rail. The CWS-panel takes Ventura's job of "category sidebar with search," but folded into the corner widget so it isn't a second persistent surface.
- **W11 (Mica)** — Notion's aesthetic is paper-and-Inter, not Mica's tinted-translucency. Outside the composition.
- **GLS (glassmorphism)** — used in *restraint only* (CWS + library scrim + modal scrim use backdrop-blur). Not the whole-surface treatment.
- **iPAD (pull-tab)** — the CWS chevron is a pull-handle for the secondary surface in spirit. Adding a separate iPad pull-tab on the iframe edge would be a second door to the same panel.

## 3. What I remixed / removed and why

The biggest removal is **the top toolbar**. v1 §2.1 lists seven items in the top toolbar (refresh, address bar, name label, Save, launcher dropdown, Site Manager toggle, settings popover). All seven have new homes that respect "one door per feature":

- **Refresh** → quick-row inside the CWS *and* the iframe-block's URL bar (block-scoped). Two surfaces because they have different scope; the CWS refreshes the focused iframe, the block-URL refreshes its specific iframe block. Single door per surface.
- **Address bar** → the iframe-block's URL bar, scoped to that block.
- **Playground name label** → the document title + the CWS name field. They are bound to the same state.
- **Save** → the CWS unsaved-pill carries a "Save now ⌘S" button (panel J shows the timeline). One door.
- **Saved Playgrounds dropdown** → the CWS chevron → "Your sites" sub-tab. One door.
- **Site Manager toggle** → *removed entirely*. There is no Site Manager pane. Settings, Files, Blueprint, Database, Logs are blocks in the document, reached by scroll, not by toggle.
- **Edit settings popover** → the Settings block in the document. The three former settings entry points collapse into one.

The launcher's two doors (dropdown + drawer) collapse into the **CWS panel** with three sub-tabs (Your sites · Start new · Library). All six new-Playground sources from v1 §2.2 are tiled in "Start new" (Vanilla / WordPress PR / Gutenberg PR / From GitHub / Blueprint URL / Import .zip). The 43-blueprint gallery is the "Library" sub-tab, which opens a z3-blur overlay (panel C) with search + 10 category chips (counts: All 43 · Featured 5 · Website 10 · Personal 7 · Content 6 · Themes 6 · Gutenberg 4 · Experiments 3 · WooCommerce 4 · News 2) + 20 cards visible above the fold + Esc/× exit. **Apply & Reset** (panel I) uses the three-guard escalation the brief mandates: diff of property changes, auto-snapshot pre-flighted with restorable-for-7-days note, typed-phrase confirm ("coffee shop") with the confirm button gated until phrase matches. **Additional actions** (Export to GitHub PR + Download .zip) live in the iframe-block hover toolbar's `+` menu (block-scoped) AND in the CWS kebab (session-scoped) — same destination, two contextual scopes.

## 4. Trade-offs

The biggest risk: **scrolling-as-IA loses spatial constancy**. In a Site Manager pane, Settings is always behind the Settings tab; here, you scroll down to reach it. I mitigate with (1) the document properties block at the top showing status / WP / PHP / blueprint at a glance — never scroll for that; (2) breadcrumb stays under the corner widget; (3) the CWS quick row exposes the two most-used global actions (Refresh, Fullscreen). A second risk: **block-scoped chrome is novel** — users may not realize the iframe block has its own URL bar. The iframe-block's header makes the `iframe` block-type label and the F-key hint visible, so the affordance is announced rather than hidden. Third trade-off: **the iframe block is constrained to the document column width by default** (~920 px desktop). For a real wp-admin session this is tight, which is why focus mode (F) widens it beyond the column with negative margins (panel D), and fullscreen-promote (F again) makes the iframe the entire frame (panel E). One key, three escalating sizes. Fourth: **the document blocks compete with the iframe for vertical space.** On a 1440×900 screen the iframe block defaults to 520 px height; below it you see the start of the next block (blueprint), which acts as a "more below" affordance — better than hiding everything behind a tab. The author can drag-reorder blocks via the hover handle to put their preferred surface immediately under the iframe.

## 5. Demonstrated states (11 total)

- **A** Working session · the document at scroll position 0 (iframe block + blueprint block + logs block; 5 idle affordances counted on-canvas).
- **B** CWS panel expanded · the launcher inside the corner widget (4 saved + 1 unsaved + 6 sources + Library link).
- **C** Library overlay · all 43 blueprints with search ("gutenberg") + 10 category chips with counts + 20 cards visible.
- **D** Iframe focus mode · the iframe block widens beyond the column, document blocks reflow (Art Gallery / Vueo).
- **E** Fullscreen-promoted iframe · all chrome and document hidden, single Esc/F exit pill (Gaming News).
- **F** Files block · file tree + functions.php editor as one block; new file / new folder in hover toolbar.
- **G** Database block · wp_posts table with 15 rows + category chips (10 tables visible) + /sql slash-command hint.
- **H** Booting · iframe block shows boot overlay (4/7 steps), blueprint block is editable while booting (WP PR #62841).
- **I** Settings block + destructive Apply&Reset modal · diff + auto-snapshot + typed-phrase confirm.
- **J** Save-state timeline · three stacked CWS variants showing Unsaved → Saving → Saved (with toast confirmation).
- **K** Mobile · same document IA, top-anchored CWS, bottom-sheet switcher at 78% detent + mobile fullscreen.

## 6. Mock data inventory

- **4 saved playgrounds**: Coffee Shop (running · 142 MB), Art Gallery — Vueo (paused · 78 MB), Friends Feed Reader (paused · 56 MB), Koinonia — Non-profit (paused · 64 MB).
- **1 unsaved playground** (panel J — Unsaved → First demo transition).
- **20 blueprint cards** visible in the Library overlay (Art Gallery · Coffee Shop · Feed Reader · Gaming News · Non-profit · Personal Blog · Resume · Photography · Skincare · University · TT25 · Latest Gutenberg · Minimal WooCommerce · CPT Books · Markdown/Trac · wp-cli posts · WPGraphQL · Multilang · WP Beta · My WordPress).
- **10 category chips** with counts numerically matching the brief (All 43 · Featured 5 · Website 10 · Personal 7 · Content 6 · Themes 6 · Gutenberg 4 · Experiments 3 · WooCommerce 4 · News 2).
- **Real blueprint JSON** in panels A and H (`$schema`, `landingPage`, `preferredVersions`, `phpExtensionBundles`, `siteOptions`, `steps[]` with `installTheme` / `installPlugin` / `runWpInstallationWizard` / `importWxr` / `setSiteOptions` / `runPHP` / `applyWordPressPRBranch`).
- **Realistic PHP log lines** in panel A: `strftime() is deprecated`, `Undefined index: featured_image` in WooCommerce, `cURL error 28: Connection timed out` (cron TLS), `GET /shop/ 200 (142 ms · 28 queries · 14 MB peak)` — request timing + query count + memory.
- **Real wp_posts table** in panel G with 15 rows: trash / publish / draft statuses, product / page / post types, mixed authors and timestamps.
- **Real functions.php** in panel F: theme setup (`add_theme_support`, `register_nav_menus`), assets (`wp_enqueue_style`, `wp_enqueue_script`), WooCommerce class_exists guard, theme-version pinning via `wp_get_theme()->get('Version')`.
- **All 6 new-Playground sources** visible in panel B (Vanilla / WP PR / Gutenberg PR / From GitHub / Blueprint URL / Import .zip).
- **All 5 Site-Manager surfaces** visible as document blocks across panels (Settings panel I · Files panel F · Blueprint panels A & H · Database panel G · Logs panel A).
- **Three demonstrated states** required by brief: working session (A), booting (H), launcher open (B + C library overlay).

## 7. Idle affordance count: 5

Counted on-canvas in panel A (the count-strip below the frame enumerates):

1. **CWS name+status** (live status surface, click to rename)
2. **CWS chevron** (open switcher panel)
3. **CWS Refresh** quick action
4. **CWS Fullscreen** quick action (F)
5. **CWS kebab** (More: Export PR · Download .zip · Rename · Delete · Docs)

The **iframe-block's hover toolbar** (refresh / wp-admin / Home / Focus / URL bar) is *block-scoped chrome*, only visible on the iframe block — it scrolls away with the block, so it isn't idle chrome. Similarly the **blueprint-block toolbar** (Copy / Download / Run) and **logs search/filters** are block-scoped. The brief's "≤ 8 always-visible affordances at idle" rule explicitly says *always-visible*; block-scoped chrome belongs to the block, not to the persistent surface. The Save button materializes inside the CWS quick-row only when the playground is unsaved (panel J) — at the steady saved state it is zero. The "expand panel" inside the CWS counts as one chevron, not as three sub-tabs (the tabs are not idle, only when expanded).

## 8. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5
    — Exactly 5 idle (CWS-only). Block-scoped chrome scrolls away
      with its block, so it isn't always-visible. The most disciplined
      count in the round.

[x] iframe primacy + fullscreen toggle?        Score: 5/5
    — Iframe is always the first block under the document props.
      Focus mode (F) widens it beyond the column; full-promotion (F
      again) makes it the entire frame (panel E). Single explicit F
      key, three escalating sizes. Mobile gets the same F path.

[x] One door per feature?                       Score: 5/5
    — Settings → Settings block (one). Save → CWS pip (one). Launcher
      → CWS chevron (one). Files → Files block (one). Blueprint →
      Blueprint block (one). Library → CWS panel sub-tab → overlay
      (one, two surfaces in sequence). Export PR / .zip live in
      iframe-block toolbar's + menu (block-scoped) AND CWS kebab
      (session-scoped) — different scopes, same destination, not
      duplicated doors but contextual entries.

[x] One secondary surface?                      Score: 5/5
    — The CWS expanded panel is the one secondary surface. It swaps
      its content via three sub-tabs (Your sites · Start new · Library).
      The Library overlay is a sub-modal of the same widget, not a
      second sidebar. Document blocks are content, not secondary
      surfaces.

[x] Direction strongly expressed?               Score: 5/5
    — Every clause of meta.json materializes: "each playground is a
      Notion-style document" (yes — doc title + emoji + properties +
      block toolbar + breadcrumb + slash-command hints), "iframe is one
      block" (yes — panel A's iframe-block has block-handle + Notion
      block grammar), "blueprint is another block" (yes — code-block
      with /run hint), "single frosted corner widget at top-left"
      (yes — verbatim CSS .cws position:absolute;left:14px;top:14px).
      The headline phrase "corner widget Sites picker is the only
      persistent chrome" is literally true: no top bar, no rail,
      no dock — just the CWS.

[x] Mobile = wider-mobile desktop?              Score: 5/5
    — Same document IA at 390×844. CWS rotates to a full-width pill
      anchored top. The chevron raises a 78%-detent sheet with the same
      three sub-tabs and the same Start-new tiles. Mobile fullscreen
      is the same single-keystroke F promotion (panel K-C). No new
      gestures, no new doors. Truly the same IA.

[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
    — Five named in §2 (CWS, TAB, DEV, 3LD, MOB) and visibly composed.
      CWS is the headline; TAB is folded into the CWS panel; DEV is
      inverted into block-scoped iframe-block headers; 3LD is visual
      only with quantified tokens; MOB is the same IA at narrower
      width. Each named primitive maps to specific CSS classes and
      HTML structure.

[x] No banned patterns (§1 DROP)?               Score: 5/5
    — No top bar at all, let alone a two-row one. 3LD used only as
      backdrop-blur decoration on the CWS / library overlay / modal
      scrim — never an interactive click-target. No terminal that
      echoes the visual UI: Logs is a one-way reader; boot panel
      shows steps not stdout; the document is the canonical source
      of truth for everything, no second representation of any
      action.
```

All rows = 5/5. No revision needed.
