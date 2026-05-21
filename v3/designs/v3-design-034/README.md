# V3 Design 034 - Reset Sheet Settings

## Thesis
This direction keeps the macOS Ventura Settings clarity, but refuses to make WordPress feel like a small settings preview. The default category is Live Preview, the iframe is a real central surface, and Full-size Playground mode strips the interface down to Save, path entry, WP Admin, Homepage, and Exit. The category rail stays short and searchable: Live Preview, Start & Saved, WordPress Settings, Files, Blueprint, Database & Logs, and Export & Navigation.

## Remix, Merge, Remove
I merged the current Site Manager tabs into native grouped panes instead of spreading settings across a popover, sidebar tab, and notice. The toolbar gear routes to the same WordPress Settings pane as the manager. Saved Playgrounds opens a library sheet with all six current start routes, and each route has its own input state: PR URL, Gutenberg PR or branch, GitHub repo plus load type, Blueprint URL, and a real `.zip` file input. Database and Logs share a named Data pane, not a generic More bucket. Export to GitHub PR and Download `.zip` live in Export & Navigation next to WP Admin and Homepage.

## Trade-offs
The settings-app metaphor is legible but can become a dashboard if every product surface gets equal weight, so this version reduces category sprawl and makes the first viewport a usable live site. Files, Blueprint, Database, and Logs are still one pane switch away, which is less simultaneous than an IDE or iPad split view. The Library sheet is denser than a pure launcher, but it avoids the repeated V2/V3 issue where WordPress PR, Gutenberg PR, GitHub, Blueprint URL, and ZIP import looked like identical tiles with no inputs.

## Self-Critique And Revision Note
After checking the design against `v3/INSIGHTS.md`, I tightened the direction around three risks: the live site needed an unmistakable full-size mode, the ZIP route needed to be a real upload state, and the reset flow needed a final changed active state rather than only a warning. The revised prototype therefore includes a real iframe, a focus overlay that preserves the essential live-site controls, an actual file input for Import `.zip`, and one canonical destructive sheet with warning, Save first, Cancel, Confirm, progress, completion, toast, and updated runtime chips.
