# V3 Design 004 - First-touch Settings

## Thesis
This design keeps the calm legibility of macOS Ventura Settings, but refuses to make settings the first thing a new visitor sees. The first viewport is a running WordPress site with a sparse browser-like bar: current path, save state, Save, and one clear entry into Launch & Tools. The searchable manager is the system-settings layer behind that first touch, with native rows, grouped panes, and a full-size preview mode for actually using WordPress.

## Remix / merge / remove choices
The launcher, saved playgrounds, quick settings, and Site Manager are merged into one manager window with fewer top-level categories: Session, Tools, and Output. The six start routes are still separate, but each reveals the input it needs for PRs, GitHub, blueprint URLs, or zip imports. Settings are no longer duplicated as a loose popover; the toolbar opens the manager, and the Settings pane is the canonical place for version, PHP, language, network, multisite, the unsaved warning, and Apply & Reset. The additional actions menu remains available in the manager header and as an Export pane, so GitHub PR export and zip download are not hidden in first-touch chrome.

## Trade-offs
The manager window can cover part of the live site, which is a cost compared with a permanent split view. I offset that with a default closed state, a Live Preview manager pane, and a full-size mode that restores the iframe to the whole window while keeping the essential URL and save controls. The sidebar categories are intentionally fewer than the prior macOS design, but that means some related actions share a pane. On mobile, the manager becomes a bottom sheet with direct shortcuts for Site, Start, Files, Settings, and Logs so important tools do not collapse into an undifferentiated More menu.

## Self-critique and revision note
The first pass risked becoming another settings shell with too many visible controls. I revised toward the V3 insights by making the live preview the default surface, making Save state louder than a dot alone, adding route-specific start forms, adding a real destructive confirmation sheet, and keeping full-size preview as a primary control. The remaining weakness is that a static prototype can only simulate the iframe and file editors; the interaction model is represented, but production would need tighter keyboard and focus handling.
