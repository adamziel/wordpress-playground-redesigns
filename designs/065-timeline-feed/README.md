# 065 — Twitter-like timeline

## Thesis
WordPress Playground reimagined as a social timeline. The center column is an infinite vertical feed where every saved playground, every blueprint, every PR boot, every recent run is a **post** — favicon avatar, "@handle" (slug), WP/PHP/PHP-WASM badges, a one-line "what this is," a thumbnail preview, last-used timestamp, and a primary **Boot** action. You scroll your "home" the way you'd scroll X/Twitter: catching up on your sandbox sessions instead of tweets. Tapping a post opens the **thread detail** — that's where the iframe lives, with logs flowing in below as time-stamped replies. The left rail is the standard nav (Home, Explore blueprints, PRs, Imports, Settings, Saved); the right rail is "What's happening" (trending blueprints, WP/Gutenberg PR feeds, "From GitHub" composer). A floating **Compose** button is the universal new-playground entry — pick a starter the way you'd pick a tweet type.

## What I remixed / merged / removed
- **Saved Playgrounds drawer → the home timeline.** It's no longer hidden behind a dropdown — it *is* the homepage. Featured blueprints get reposts in your feed by an "@playground" account so brand-new users still see content above the fold.
- **Three settings entry points → one Settings sheet** (left rail item) plus a per-thread "edit" pencil that opens the same sheet pre-scrolled to that site's config. The toolbar settings cog is gone.
- **Top toolbar dissolved.** Refresh / URL bar / playground name / save / saved-launcher / site-manager / settings are now: the thread detail header (URL bar, refresh, save star, more menu), the left rail (saved launcher, settings), and the thread's tabbed body (Site / Files / Blueprint / DB / Logs). One bar, not seven.
- **"Compose" button = unified launcher.** A floating + button opens a composer with six tabs: Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip. Same modal, six modes — mirrors X's compose with media/poll/gif tabs.
- **Blueprint gallery → Explore tab.** A pinterest-style masonry of 43 cards with category chip-filters and a sticky search — same data, social shape.
- **Logs → replies.** Each PHP log line is a "reply" under the thread, threaded by request. Severity is a colored avatar dot. Filters are quote-tweet-style tabs.
- **Additional actions** (Export to GitHub PR, Download .zip) live in the thread's "•••" menu, exactly like a tweet's more menu.
- **Marketing landing page** gone. New users land on the timeline with three sample threads pinned at the top.

## Trade-offs
The social metaphor is fun but I had to fight to keep technical density legible — badges, monospace slugs, and a serif-free typography stack do most of the heavy lifting. The thread-detail tabs (Site / Files / Blueprint / DB / Logs) reintroduce some of the tabbed Site Manager I claimed to dissolve, but they live inside the thread context, not as a global sidebar — so the user is always anchored to a specific playground while editing. Mobile collapses everything into one column with a bottom tab bar (Home / Explore / Compose / Notifications / You); the right "What's happening" rail becomes pull-to-refresh banners. Power users who edit blueprints all day may find scrolling through a feed slower than a tree — but they can pin a thread (the equivalent of "pinned tweet") to keep their workspace at the top.
