# v3-design-045 - Saved Identity Settings

## Thesis

This redesign keeps the calmness of Windows 11 Settings: wide spacing, Mica-like surfaces, breadcrumbs, object rows, and clear category cards. The difference from the earlier settings variants is that the live WordPress site is not treated as a small preview. The default screen is a usable browser-like Playground surface, and Focus site removes management chrome while preserving Save, path navigation, WP Admin, Homepage, and Exit.

## Remix, Merge, Remove

I remixed the Windows 11 Settings direction into two layers: a quiet settings rail for orientation and a focused task pane only when the user asks for tools. The Save and Resume story is finished as a first-class identity system: unsaved warning, save progress, active saved badge, saved rows, rename and delete controls, and explicit reload/reset consequences. The gear, Settings category, and Apply & Reset all route to the same confirmation flow. The launcher keeps all current start routes and shows route-specific inputs, including a real ZIP file input, plus featured blueprints, full gallery search/filter, and Your Playgrounds.

## Trade-offs

The desktop layout favors calm legibility over power-user density. Files, Blueprint, Database, and Logs are one focused pane at a time, so it is less IDE-like than a docked DevTools design. The Start launcher is a large overlay because route forms and the blueprint gallery need room, but the default running site remains visible behind it and Focus site gives WordPress the whole viewport. On mobile, the rail becomes a bottom navigation and the task pane becomes a sheet, which keeps Database and Logs named rather than hiding them in a vague More menu.

## Self-critique and revision note

After checking `v3/INSIGHTS.md`, I revised the initial settings-shell sketch in three ways: the iframe became the default full workspace, the first opened manager state was reduced to selected-object rows rather than every tool at once, and the save/reset flows gained visible final states. I also removed non-brief database affordances such as Adminer/phpMyAdmin/download database, kept ZIP import as an actual file control, and made WP Admin/Homepage live near the site instead of burying them in an actions panel.
