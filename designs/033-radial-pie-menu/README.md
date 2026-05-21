## Thesis

The Playground chrome collapses into a single fixed **hub** orbiting the iframe. The hub is a small ring at the bottom-center of the viewport; hovering or clicking it fans out a **pie menu** of primary actions as petals. Each petal can itself be a pie — secondary actions disclose as a second ring, tertiary content (blueprint cards, file tree, logs) expands as an arc-shaped surface that wraps the hub. Nothing lives in a top toolbar or a side sidebar — the iframe is the page, and every control radiates outward from the user's current focus.

## What I remixed / merged / removed

The **top toolbar**, the **Site Manager sidebar**, the **Saved Playgrounds drawer**, and the **Settings popover** are all merged into one geometry: a hub with rotating sectors. Refresh, URL bar, save, name label, saved-playgrounds, site manager, and quick settings are all first-ring petals. Site Manager's five tabs (Settings, Files, Blueprint, Database, Logs) become five inner-ring petals when the wrench petal is opened. The Launcher's "Start new" sources (Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip) become petals of the "+" sector. The Blueprint gallery, file tree, DB browser, and logs all render inside the same arc-canvas — the hub stays put, the content swaps. The address bar is the only linear element preserved as a chord across the top of the hub, because typing a URL needed a horizontal target.

## Trade-offs

A pie menu is fast for known actions but hostile to discovery — labels are short and angled, and a first-time user has to commit to spinning the hub before they see what's there. Mobile gets a thumb-reach pie that's lovely with one hand but cramped at 390px (we drop to 6 petals per ring and use a long-press to reveal labels). The "Apply Settings & Reset" destructive action gains a confirm-arc to keep it from being a single careless tap. We also lose persistent visibility of the playground name and save state, so we keep a tiny status crescent on the hub itself, always visible.
