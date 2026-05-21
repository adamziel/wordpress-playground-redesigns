# 018 — Discord layout

## Thesis
WordPress Playground reimagined as Discord. Every saved playground is a **server** in the far-left rail, each with a circular pill icon and a colored tooltip. The second column is the **channel list** of that playground — `# settings`, `# files`, `# blueprint`, `# database`, `# logs` plus a "RUN" voice-channel-style block that holds quick actions (WP Admin, Homepage, Refresh, Address bar). The main pane is the iframe presented as the channel content — and in the `# logs` channel, PHP errors flow in as a real chat stream with avatars (PHP, MySQL, WP-Cron), reactions, and threaded request groups. The launcher is the **server-add modal** — exactly Discord's "Add a Server" flow but for blueprints, GitHub repos, PR numbers, and .zip imports. Members panel on the right becomes the **blueprint browser** (43 cards = 43 "online members").

## What I remixed / merged / removed
- **Three settings entry points → one** `# settings` channel pinned to every server. The popover trigger is gone (you click the channel like any other). The destructive Apply+Reset is wrapped in a Discord-style "danger" confirm.
- **Saved Playgrounds drawer → server rail.** Switching playgrounds is one click, never a menu. The "Unsaved Playground" appears as the first server with a dashed border and a save-to-keep CTA.
- **File browser + Blueprint tab partially duplicated each other** in the original — I kept both as channels but the file tree lives in a shared collapsible sidebar within each, so authors don't lose context.
- **Logs as chat** was the obvious remix; each PHP message is a chat message with timestamp, severity reaction, and (collapsible) stack trace as a thread. Search becomes the channel-search input.
- **Additional actions menu** (Export to GitHub PR / Download .zip) is the server's drop-down chevron next to its name, same UX as Discord's server settings.
- The marketing landing page is replaced by an empty-state "welcome to your server" panel.

## Trade-offs
Discord's density is high — on mobile it collapses to a single column with a bottom tab bar (Servers / Channels / Live / Members), losing simultaneous visibility of channel list + content. The metaphor strains when the iframe is in focus (a 600px-tall iframe inside a chat-shaped column feels narrow — I gave it a "maximize" affordance that hides the right panel). Power users may dislike that quick-settings are no longer a popover; conversely new users get exactly one place per concern. Voice-channel-style RUN block is a deliberate metaphor stretch: it's the closest Discord analog to "ambient persistent quick actions."
