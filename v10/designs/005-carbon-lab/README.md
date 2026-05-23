# 005 — Carbon Lab

## Thesis

WordPress Playground reimagined as a piece of IBM-style industrial software. The premise: Playground is a runtime control plane, and runtime control planes look like Carbon. White (#FFFFFF) chassis, Gray 100 ink (#161616), Blue 60 (#0F62FE) accent, strict 0px corners, 1px Gray 30 hairlines, IBM Plex Sans for chrome and IBM Plex Mono for paths, logs, and code. The WordPress iframe remains the loudest object — it is the only surface with full saturation and live content. Every panel of chrome recedes via desaturation and stricter geometry. The 16px grid is enforced everywhere; nothing curves.

## What is locked, what is explored

The v7 #010 interaction model is preserved exactly: one quiet left rail of 5 docks (Sites, Site Manager, Blueprint, Database, Logs), one swap-content pane, one slim top capsule, one corner site widget styled as a Carbon Notification toast, one modal Library overlay, one mobile mirror. The 5-dock arrangement gives every tool its own pane — no internal tabs except as Carbon "structured list" segments. What is explored is the visual idiom: data-table density for Settings, Carbon InlineLoading for booting, typed-phrase confirmation modal for destructive Apply + Reset, square chips for category facets, and IBM Plex Mono for any address, path, or log line.

## Trade-offs

Carbon is famously enterprise-coded — some testers may read it as "too IBM" for a community OSS tool. The pay-off is unambiguous information density: the Settings data table makes diffs (current vs new vs status) obvious without a separate diff sheet, and the 5-dock arrangement keeps each tool's surface area uncrowded. The corner widget styled as a Carbon Notification gives the running site state more visual weight than a typical frosted capsule, which slightly raises the volume of one piece of chrome relative to the iframe — but it stays inside the iframe coordinate system and recedes when the user is reading WordPress.
