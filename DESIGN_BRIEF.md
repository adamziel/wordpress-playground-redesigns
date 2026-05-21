# WordPress Playground — Redesign Brief

> **You are one of 100 designers** producing a high-fidelity wireframe (HTML/CSS/JS) of WordPress Playground's UI. Your design must preserve every existing feature listed below, but you may merge screens, remove modes/screens, remix layouts, change visual style, or invert the information architecture. **The only hard rule: no feature drops, no new features. Reshape, don't extend.**

---

## 1. What WordPress Playground actually is

A WebAssembly-powered WordPress instance that runs entirely in the browser (PHP via WASM, MySQL emulated through SQLite). It's used for: theme/plugin demos, learning WordPress, testing PRs and Gutenberg experiments, building blueprints, and quick disposable sandboxes. Live at `https://playground.wordpress.net`. The same React app is also reachable on mobile breakpoints.

The viewport is dominated by an `<iframe>` that renders the live WordPress site. **The chrome around that iframe** — toolbar, panels, modals — is the surface being redesigned. The WordPress admin/site inside the iframe is out of scope (it's just WordPress).

---

## 2. Complete feature inventory (do not drop any)

### 2.1 Top toolbar (single horizontal bar across the top)
1. **Refresh** the WordPress iframe.
2. **Address bar** — type a path like `/wp-admin` and Submit to navigate the inner site.
3. **Playground name label** — "Unsaved Playground" or the saved name.
4. **Save** button — persist the current playground to browser storage (OPFS).
5. **Saved Playgrounds** dropdown trigger (opens the big launcher panel below).
6. **Open / Close Site Manager** button — toggles the Site Manager sidebar.
7. **Edit Playground settings** popover trigger (quick settings — WP version, PHP, language, network, multisite, apply+reset).

### 2.2 "Saved Playgrounds" launcher panel (currently a right-side drawer)
Three stacked sections:

- **Start a new Playground**
  - `Vanilla WordPress`
  - `WordPress PR` (boot from a WordPress core PR)
  - `Gutenberg PR` (boot from a Gutenberg PR)
  - `From GitHub` (theme/plugin from a GitHub repo)
  - `Blueprint URL` (paste any blueprint JSON URL)
  - `Import .zip` (upload a previously exported playground)

- **Start from a Blueprint** (5 featured + "View all 43 blueprints")
  - Featured: Art Gallery, Coffee Shop, Feed Reader with the Friends Plugin, Gaming News, Non-profit Organization.
  - The full blueprint gallery is a separate sub-screen with:
    - Search box
    - Category filters: All, Featured, Website, Personal, Content, Themes, Gutenberg, Experiments, WooCommerce, News
    - 43 cards, each with title + description + tags. (See `BLUEPRINTS.md` for full list of 43.)

- **Your Playgrounds**
  - List of saved sites stored in the browser (currently shows "Unsaved Playground — Not saved to browser storage" when none exist).

### 2.3 Site Manager (currently a left sidebar; tabbed)
Header:
- **Playground title** (editable)
- **WP Admin** button (jumps the iframe to `/wp-admin`)
- **Homepage** button (jumps the iframe to `/`)
- **Additional actions** menu:
  - "Export WordPress theme, plugin, or wp-content directory to a GitHub repository as a Pull Request."
  - "Download the current playground as a .zip file"

Tabs (5):
1. **Settings** — duplicate of the Edit Playground settings popover (WP version, PHP, language, network, multisite, Apply+Reset). Also surfaces an inline info notice: "This is an Unsaved Playground. Your changes will be lost on page refresh." with a **Save site locally** button.
2. **File browser** — full file tree of `/wordpress/` with `wp-admin`, `wp-content`, `wp-includes` folders; click a file to open a code editor pane. Has **New File** and **New Folder** buttons.
3. **Blueprint** — shows the active blueprint JSON in an editor. Has **Copy link to blueprint**, **Download bundle**, **Run Blueprint** buttons + the same File tree column (so users can author multi-file blueprint bundles).
4. **Database** — early-access SQLite-backed DB browser. Carries an inline notice: "Database management is an early access feature... [GitHub issue tracker]".
5. **Logs** — PHP error log viewer with a Search box.

### 2.4 Notifications
Toast region (currently bottom-left).

---

## 3. Primary user flows (preserve all)

1. **First-touch / anonymous user lands on the URL** → sees the iframe loading WordPress, can immediately browse. The current site renders a marketing "Hello from WordPress Playground!" page inside the iframe.
2. **Switch WordPress or PHP version** → open settings (quick popover OR Site Manager Settings tab) → pick version → Apply Settings & Reset (destructive — wipes the site).
3. **Start from a blueprint** → open the launcher → either pick a featured tile or open the full gallery → search/filter → click → playground boots that blueprint.
4. **Save a playground locally** → click Save in the top toolbar OR Save in the Site Manager info notice → site persists to browser OPFS. The label changes from "Unsaved Playground" to the saved name. Appears in "Your Playgrounds".
5. **Resume a saved playground** → open launcher → "Your Playgrounds" → click an entry to mount it.
6. **Author or edit a blueprint** → Site Manager → Blueprint tab → edit JSON → Run Blueprint to re-boot the site with the new blueprint.
7. **Export work** → Additional actions → "Export to GitHub as PR" or "Download .zip".
8. **Import existing work** → launcher → Import .zip.
9. **Debug** → Site Manager → Logs tab. Or File browser to inspect/edit a PHP file in place.
10. **Open WordPress admin or homepage** → header buttons in Site Manager OR type `/wp-admin` in the address bar.
11. **Try a WordPress core PR / Gutenberg PR** → launcher → "WordPress PR" or "Gutenberg PR" entry → paste PR number/URL.
12. **Boot from a remote repo or arbitrary blueprint URL** → launcher → "From GitHub" or "Blueprint URL".

---

## 4. Pain points the current UI has (you may but don't have to address)

- Three settings entry points (popover, sidebar tab, info-notice button) all do similar things.
- "Saved Playgrounds" trigger label only hints at the launcher; new users miss that it's also where you start *new* sessions, browse 43 blueprints, and import zips.
- The Site Manager is opaque about whether changes affect the running site immediately or require Apply.
- "Apply Settings & Reset Playground" is destructive and only marked with a small red banner.
- 43 blueprints with no preview thumbnails or "what does it actually look like".
- Logs tab is unstyled text; no level filter, no per-request grouping.
- File browser + Blueprint tab partially duplicate each other.
- The "Unsaved Playground" / "Save" affordance is a small text button — users can lose a whole session by refreshing without noticing.
- The marketing landing page inside the iframe shouts at returning users.

---

## 5. Hard constraints for your redesign

- **Preserve every feature in §2.** A reviewer will check.
- **Don't invent new features.** No AI assistants, no plugin marketplaces, no team-sharing accounts, no real-time collab, etc. unless it's a remix of something already present.
- **The iframe stays.** The redesign is the chrome.
- **Single self-contained HTML file** (CSS inline or in `<style>`, JS inline or in `<script>`). External fonts are fine (Google Fonts, system fonts). External images are fine but prefer SVG/icon fonts so the file works offline.
- **Mock data is required.** Populate "Your Playgrounds" with 2–4 realistic example saved sites. Populate the blueprint gallery with the full list of 43 if reasonable, or at least 12. Show realistic log lines, an example blueprint JSON, etc.
- **Show three states minimum:** booting/loading, a working session, and the launcher/blueprint browser open. Use modal toggles, tabs, or scroll-into-view sections in one document. Or split into a few files — both are fine.
- **Responsive at 390×844 (mobile) and 1440×900 (desktop).** Mobile doesn't need every feature one-tap-away; collapsing into a hamburger menu / bottom sheet is fine.
- **High fidelity.** This is not a Balsamiq sketch. Real typography, real spacing, real icons (Heroicons / Lucide / Phosphor / Tabler are all fine), real color choices. Pretend it could ship.
- **Document your concept in `README.md`** alongside the HTML: one paragraph of the design thesis, one paragraph of what you remixed/merged/removed and why, one paragraph of trade-offs.

---

## 6. Your concept

Each session is launched with a numbered slot and a **unique design direction** from `DESIGN_DIRECTIONS.md`. Read your assigned direction carefully. It's a starting prompt — push it further. Two designers given the same direction must still arrive at different layouts (use the structure of §2 differently).

## 7. The 43 known blueprints

(In §10 of this brief — `BLUEPRINTS.md` for the full data table.)
