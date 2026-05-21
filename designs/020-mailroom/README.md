# #020 — Mailroom (Mail.app)

## Thesis
Playground is reimagined as a desktop **email client**. The left "Mailboxes" column lists blueprint *categories* (All, Featured, Website, Themes, Gutenberg, etc.) plus your "Your Playgrounds" — exactly like Inbox / Sent / Drafts / Smart Mailboxes. The middle "Message list" column shows the playgrounds & blueprints inside the selected mailbox, each one rendered like an email row (sender = blueprint author, subject = blueprint title, preview = description, timestamp = saved date, unread dot = "not booted yet"). The right "Reading pane" is the live iframe with a Mail-style header toolbar (Reply ⇒ Refresh, Forward ⇒ Open in admin, Archive ⇒ Save, Flag ⇒ Settings). It maps a complex multi-modal app onto a metaphor every user already knows.

## What I remixed / merged / removed
- **Merged** the Saved Playgrounds launcher and the Blueprint gallery into a single 3-column browser. There's no "open a panel to start something new" — starting something new is just selecting a different mailbox.
- **Merged** the three settings entry points: the popover, sidebar tab, and info-notice are now a single "Flag/Inspector" drawer that slides out of the reading pane (just like Mail's message inspector).
- **Remixed** the additional-actions menu as a Mail-style action bar: Reply (refresh), Reply All (homepage), Forward (wp-admin), Archive (save), Move (export to GitHub PR), Junk (download .zip), with the address bar living in the reading-pane header like an email subject field.
- **Remixed** the Site Manager's tabs (Settings, Files, Blueprint, DB, Logs) as a **detail-view tab strip** at the bottom of the reading pane — like Mail's quick-look attachments — so they don't compete for full-screen attention.
- **Removed** the redundant "Open Site Manager" toggle. The reading pane *is* the site manager once a playground is selected.

## Trade-offs
The mailbox metaphor is delightful but slightly leaky: blueprints aren't really "messages from someone" and forcing a sender/timestamp column requires fictional metadata (I cast WordPress contributors as the "sender" of each blueprint, which adds charm but may confuse). Power users who already know the existing toolbar layout will have to learn a new mental model. The three-column layout is dense on desktop and demands an aggressive collapse on mobile (here: bottom-sheet message list → full-screen reading pane, like Mail iOS). And the "Reply = Refresh" action mapping is cute but discoverable only through tooltips.
