# 047 — Stripe Dashboard

## Thesis
Treat WordPress Playground like a Stripe-style operations dashboard. The marquee metric isn't revenue — it's "WP". A persistent left rail navigates between Overview, Sites, Blueprints, Files, Database, and Logs. Overview leads with a giant key figure (active WordPress version), a sparkline-driven time-series of boots and saves, and a clean ledger of recent activity. The running site is a card on this dashboard, not the whole UI — the iframe lives in a "Live preview" panel that can be expanded full-bleed when you actually want to use the site. Everything is gridded, monospace-numeric, and confident. Money-software aesthetics, but for sandboxes.

## What I remixed / merged / removed
- **Toolbar collapsed into a global top bar** with a Stripe-style address/search input that doubles as the iframe URL bar and a command palette. Refresh, Save, Settings popover, and Saved-Playgrounds launcher all live as inline buttons here.
- **Site Manager tabs (Settings, Files, Blueprint, Database, Logs)** became destinations in the left rail; the iframe view is one such destination ("Live preview"). This kills the popover/sidebar/info-notice triplication of settings.
- **The "Saved Playgrounds" launcher drawer** became the Overview page itself: "Your Playgrounds" is a Stripe ledger table, "Start a new Playground" is a row of compact action tiles (Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip), and the featured blueprint shelf sits below the chart.
- **Blueprint gallery** lives as its own page with category chips, search, and a Stripe-products-style card grid.
- **Additional actions** (Export to GitHub PR, Download .zip) became a quiet "•••" menu next to the site title, just like Stripe's resource-detail pages.
- **The destructive "Apply & Reset"** is now an inline confirm tray inside Settings, with the cost stated plainly, instead of a small red banner.

## Trade-offs
The full-width chart is decorative — playground boots-per-day isn't a real KPI the way charge volume is. I leaned into the conceit anyway because the direction asked for it, and it gives the dashboard immediate Stripe-recognition. Pushing the iframe off the home view is the biggest gamble: first-time visitors who expect WordPress to be the page now see a dashboard first, with an "Open live preview" CTA. I mitigated that by making the live preview card prominent on Overview and giving it a one-click full-bleed toggle. Cramming five Site Manager tabs into a left rail also flattens the "site context" hierarchy — the active playground is implied by the header chip rather than by a containing sidebar.
