# 071 — Persona-tabbed top nav

## Thesis
The very top of the screen is owned by four persona tabs: **Theme Author**, **Plugin Author**, **Site Owner**, **Learner**. Switching tabs is not just a filter — it re-tunes the whole chrome around the WordPress iframe. The address bar's quick-jump targets change. The "featured" blueprint row swaps. The Site Manager opens to a different default tab. Even the launcher's "Start new" verbs change ("Boot a theme PR", "Boot a plugin PR", "Start from scratch", "Try a sandbox"). The iframe is the constant; everything else is persona-tuned chrome.

## What I remixed / merged / removed
- **Merged** the persona switch with the global top toolbar — there is no separate onboarding screen, no modal nag. You're always in a persona, and you can change it cheaply.
- **Merged** the three settings entry points (popover, sidebar Settings tab, info-notice "Save site locally") into one persona-aware quick-settings popover *plus* the Site Manager Settings tab. The info-notice promoting "Save" was rolled into a single persistent pill in the toolbar that turns amber when you have unsaved work — so the destructive nature of refresh is visible instead of buried.
- **Curated** the 43 blueprints into persona-relevant shortlists in the launcher (each persona gets ~6 hand-picked featured cards), but the full 43-card gallery remains one click away with all original category filters intact.
- **Kept** Site Manager as a left sidebar with all five tabs (Settings, Files, Blueprint, Database, Logs), but the *default* tab depends on persona: Files for Theme Author, Logs for Plugin Author, Settings for Site Owner, Blueprint for Learner.
- **Kept every existing affordance**: Refresh, URL bar, Save, Saved Playgrounds launcher, Site Manager toggle, settings popover, Blueprint browser with categories+search, file browser, blueprint editor, DB browser, logs, Additional actions menu with "Export to GitHub PR" and "Download .zip", Import .zip, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL.

## Trade-offs
Persona tabs add a layer of IA that veteran users may resent ("just give me everything"). I mitigate that with a **"All tools"** fifth tab that exposes the full unfiltered surface, so power users are never gated. The persona choice is sticky (localStorage) but never blocks — switching is one click and non-destructive. The risk is that someone misidentifies their persona on first contact and sees a slightly oddly-curated set of starter blueprints; the antidote is that the curation only affects featured shortlists, not the underlying gallery, so the cost of a wrong guess is a few extra clicks, not lost features.
