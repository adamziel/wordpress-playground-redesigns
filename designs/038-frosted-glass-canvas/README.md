# 038 — Glassmorphism + heavy blur

## Thesis
The WordPress site *is* the desktop. Every piece of chrome — toolbar, launcher, Site Manager, settings, blueprint gallery, logs — is a sheet of frosted glass that floats above the iframe and lets the site's hue glow through. Heavy backdrop-blur (40-60px), 8% white tint, soft 0.5px white inner stroke, and a coloured ambient gradient bleeding from the iframe edges. The result feels like iOS Control Center sliding over Safari, or macOS Big Sur's menu bar inviting the wallpaper to be the room's lighting. Nothing is ever a flat opaque rectangle; every panel is "glass on top of WordPress".

## What I remixed / merged / removed
- **Merged** the Saved Playgrounds drawer + Blueprint gallery into a single bottom-anchored "Launcher" sheet that grows on demand — same gesture as iOS Control Center expanding into Settings. The featured row, full 43-blueprint gallery (with the categories pill bar, search), the six "Start new" tiles, and "Your Playgrounds" all live in one glass surface that scrolls.
- **Merged** the three settings entry points: the toolbar gear opens the same frosted popover the Site Manager Settings tab embeds — one component, two homes.
- **Kept** the Site Manager as a left glass column, but its tabs (Settings / Files / Blueprint / Database / Logs) live in a segmented glass pill rather than a tab bar — easier to tap on mobile, matches the floating aesthetic.
- **Removed** opaque chrome entirely. Even the address bar is glass. Refresh, save, name, additional-actions menu (Export GitHub PR / Download zip), WP-admin/Homepage shortcuts: all live as discrete glass capsules so each control has its own light.
- **Mobile** collapses every panel into a bottom glass sheet you can drag up; the toolbar shrinks to a single floating pill at the top.

## Trade-offs
Glassmorphism punishes low-contrast WordPress sites — when the iframe is mostly white, blurred glass on white reads weakly. I compensate with a +6% tint, a 0.5px white inner-stroke, and a soft drop-shadow, but accessibility-strict reviewers will still want a "reduce transparency" toggle (not implemented; it would be a one-line CSS variable swap). `backdrop-filter` is GPU-heavy on cheap laptops, so I keep the blurred layers small and avoid blurring under scrolling lists. Heavy blur also hides micro-typography hierarchy; I lean on weight contrast (600 vs 450) and uppercase eyebrow labels to hold structure where colour can't.
