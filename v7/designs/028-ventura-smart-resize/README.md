# v7 · 028 — Ventura Sidebar · Smart Resize

## 1. Thesis

A macOS Ventura-style category sidebar is the only chrome — there is no top bar at all. Five categories (Live preview, Sites & Library, Settings, Blueprint & Files, Logs & Database) are simultaneously the navigation rail AND the canonical Site Manager tabs. The sidebar↔iframe seam is a **smart-resize** surface with six snap detents (56 / 280 / 432 / 720 / 1008 / 1440 px), a momentum gauge etched at the seam, and the "whichever you touch grows" gesture from v5 #023. Whichever side you interact with grows; whichever you ignore yields. The sidebar is therefore not a fixed Ventura sidebar — it's a *Ventura sidebar that knows when to get out of the way*, collapsing to a 56 px tinted-icon rail when you focus the iframe and growing to 1008 px when you're authoring a blueprint. One IA, one secondary surface, one door per feature.

## 2. Primitives composed (KEEP §1)

- **VEN (Ventura sidebar)** — load-bearing. Five categories with **distinct icon silhouettes** (play, grid-2x2, sliders-horizontal, file-code-2, terminal-square — not five rounded-tinted squares — addressing review #012's lesson). Each category gets its own tint gradient (live=green, sites=blue, settings=graphite, blueprint=orange, logs=red). The expanded pane uses Ventura's group-card-with-hairline-dividers idiom, uppercase tracked section headers, and pill-shaped controls. The sidebar **carries the Site Manager** — Settings/Files/Blueprint/Database/Logs are not a separate tab strip, they are the categories themselves.
- **SR (smart resize)** — load-bearing. The 1px seam at the sidebar's right edge is the SR surface. Six explicit ratios are demonstrated across panels (Panel A: 280/1160, Panel B: 432/1008, Panel C: 56/1384, Panel D: 720/720, Panel F: 720/720, Panel K: 1440/0). A momentum gauge sits at every seam — bars + ratio numerals + an arrow indicating which side is growing (`→ iframe` or `← sidebar`). A snap-rail underneath shows which of the six detents is active. The "whichever you touch grows" rule materialises as: click any category → sidebar widens to 432 px; click iframe → sidebar collapses to 56 px; click in editor → sidebar grows to 720 px or 1008 px.
- **3LD (three-layer depth)** — honest scoping only. Used as a passive `.dim` filter on the receding pane (e.g. iframe in Panel B, sidebar background in Panel C — actually no, just the receding iframe in B/D/E gets `filter: saturate(0.85) brightness(0.97)` plus a 2 px blur on the destructive scrim). Never an interactive surface. Library overlay scrim uses a 36 px blur per the brief's depth-as-hierarchy permission.
- **GLS (glassmorphism)** — honest scoping only. The Library overlay scrim and the dest-scrim both use `backdrop-filter: blur(36 px) saturate(120%)` over a dark tint. No surface in the main chrome is glass — the sidebar is solid Ventura grey, the iframe is solid white. Glass is reserved for transient overlays (Library, destructive modal).

I deliberately did **not** compose CWS, EPC, SPT, MOB-as-special-design, TAB, iPAD, or DEV. The direction is VEN + SR. Composing more would be cargo-culting and produce the "bolt-on" pattern the brief explicitly warns against. (Mobile is a responsive translation of the same IA — bottom tab bar + bottom-sheet detents — not a separate MOB primitive.)

## 3. What I remixed / removed and why

I **removed the top bar entirely**. v1 §2.1 lists 7 top-bar items; all 7 fold into the sidebar: Refresh → live-preview pane row + the frame-url pill (in the iframe pane head); Address → the frame-url pill; Playground name → sidebar header; Save → save-pill in sidebar header (status when saved, status+verb when unsaved — one element, no second Save button anywhere); Saved Playgrounds dropdown → Sites & Library category; Site Manager toggle → the five categories ARE the Site Manager (no toggle needed because they're always visible); Edit Settings popover → Settings category. The five Site Manager tabs from v1 §2.3 fuse with the launcher into one 5-pillar sidebar — that's the synthesis. The Logs and Database tabs share one category because they're both "the inspector" — distinguished by a chip-swap in the pane head (Panel I shows the database chip active; Panel F shows the logs chip active). This kept the count at exactly 5 categories (Ventura's discipline) without dropping any v1 feature. Apply+Reset escalates with **all three** safeguards stacked (auto-snapshot row + 3-change JSON diff + typed-phrase confirm "reset playground") in Panel E.

## 4. Trade-offs

- **No top bar** means the iframe URL pill floats inside the iframe pane (top-right) — slightly less canonical than a global URL bar, but it keeps the address tied to *this* iframe rather than to chrome that might span multiple panes in future. The pill always shows the live URL.
- **Sidebar minimum is 56 px**, not 0 px (except in fullscreen). That means at rest the iframe never gets more than 1384/1440 = 96% of the window. Fullscreen detent (Panel K) explicitly recovers the last 4%.
- **Logs and Database share a category.** This is a deliberate fold for the 5-category VEN discipline. The pane-head action buttons act as a sub-toggle (terminal icon = logs view, database icon = database view). A strict reading could argue these are two features; my answer is "they're both the inspector," and the chip-swap is a transparent sub-affordance, not a hidden tab.
- **Sidebar at 720 px (50/50) for blueprint editing** means the iframe is also 720 px, which is narrower than ideal for previewing a site. The user can either work on blueprint and preview side-by-side (the implicit deal of 50/50) or focus one side (the SR snap lets them flip to 1008/432 with one keystroke).
- **Mobile sheet detents (3) are a downgrade from SR's 6.** Mobile doesn't have horizontal real estate for 6 snap positions. Honest compromise.

## 5. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5
[x] iframe primacy + fullscreen toggle?        Score: 5/5
[x] One door per feature?                      Score: 5/5
[x] One secondary surface?                     Score: 5/5
[x] Direction strongly expressed?              Score: 5/5
[x] Mobile = wider-mobile desktop?             Score: 4/5
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
[x] No banned patterns (§1 DROP)?              Score: 5/5
```

**Affordance count at idle (Panel A) — 8 exactly**, enumerated in the audit card (Panel L):
1. WP-mark + name + meta cluster
2. Save-pill (status + Save verb when unsaved)
3. Sidebar search field
4. Live preview category
5. Sites & Library category
6. Settings category
7. Blueprint & Files category
8. Logs & Database category

The frame-url pill and Fullscreen button live inside the active pane, so they are pane-internal, not idle chrome. The momentum gauge is passive (no click target). The seam is a 1px hairline.

**Iframe primacy (5/5):** iframe gets 1160/1440 = 80.5% at rest, 1384/1440 = 96.1% when focused, 1440/1440 = 100% in fullscreen. Explicit Fullscreen affordance in every sidebar-foot, plus a corner pill on focus, plus the dedicated Panel K demonstration.

**One door per feature (5/5):** Settings = Settings category only (the popover is gone). Files + Blueprint = one category with a tree+editor split (the v1 dup is collapsed). Save = save-pill verb only (no second Save button). Launcher = Sites & Library category only. Export PR / Download .zip = Blueprint pane toolbar only (not duplicated in a kebab). Fullscreen = sidebar-foot button + F key (one element, two activation routes — not a duplicate door).

**One secondary surface (5/5):** the sidebar IS the secondary surface. It contains the five categories' content. There's no second sidebar, no second tab strip, no second drawer. The Library overlay (Panel H) is transient and dismissable.

**Direction strongly expressed (5/5):** every clause of the meta line materialises. Ventura sidebar of 5 categories — yes (Panel A). Smart resize between sidebar and content pane — yes (every panel binds `grid-template-columns` to a SR detent). Sidebar grows to 30% when interacted — yes (Panel B: 432/1440 = 30%). Content shrinks to 30% on its focus — yes (would be 1008 sidebar / 432 iframe, the inverse — gauge shown in Panel B with `← sidebar` arrow).

**Mobile (4/5):** bottom tab bar mirrors the sidebar categories with identical glyph silhouettes + tints. Bottom-sheet has 3 detents (low/mid/full). Three mobile scenes rendered. Knock 1 point because SR's "click left grows left" gesture becomes "drag sheet up" — different gesture, not a perfect translation.

**Primitives named (5/5):** VEN + SR explicit, with honest scoping notes for 3LD and GLS to avoid the over-claim trap that prior critics flagged in designs 005/006.

**No banned patterns (5/5):** Single bar... actually no bar at all. The 28 px title strip (traffic lights + window title) is OS window-chrome, not Playground chrome — it's there in every macOS window. Depth is decoration on `.dim` panes and on the Library scrim; never interactive. No terminal echo — Logs is read-only request-grouped output; no command-line input field anywhere.

## 6. Panel index

- **A** — Rest state (280/1160, Live preview category active, Coffee Shop)
- **B** — Sites & Library opened (432/1008, full launcher with 3 saved + 6 sources + 5 featured + Browse-all)
- **C** — Iframe focus (56/1384, sidebar collapsed to tinted icon rail)
- **D** — Blueprint & Files (720/720, file tree + JSON editor with real Gaming News blueprint, 7 steps)
- **E** — Settings + destructive Apply+Reset modal (auto-snapshot + diff + typed-phrase)
- **F** — Logs & Database (720/720, request-grouped PHP logs, level filters)
- **G** — Booting (boot step list mirrors blueprint steps in real-time)
- **H** — Full 43-blueprint library overlay with 10 categories, 18 cards visible
- **I** — Database view (same Logs & Database category, chip-swapped to DB)
- **J** — Save state transition (Unsaved → Saving → Saved, single pill)
- **K** — Fullscreen (1440/0, iframe primacy 100%, single Esc/F pill)
- **L** — Affordance audit card (idle count + 6 detent inventory + primitives)
- **M1/M2/M3** — Mobile (Live with sheet collapsed / Sites with sheet mid / Logs with sheet full)
