# V3 Design 048 - Saved Split Workspace

## Thesis
This redesign treats WordPress Playground as an iPad multitasking workspace where the live WordPress site remains the primary app and everything else is secondary. The right Split View pane holds the Site Manager tabs, the Slide Over panel handles starting and resuming Playgrounds, and the bottom shelf makes saved identities feel concrete. The assigned variation is saved identity rigor, so the design makes the unsaved state, browser-local save consequence, active identity, resume rows, rename/delete actions, and reset/reload consequence visible in the core chrome.

## Remix, Merge, Remove Choices
The existing Saved Playgrounds drawer becomes a Slide Over launcher with Start New, Blueprint Gallery, and Your Playgrounds sections. Start routes are not generic tiles: WordPress PR, Gutenberg PR/branch, GitHub, Blueprint URL, and Import .zip each expose the relevant input, including a real file input for ZIP import. The Site Manager remains a swappable secondary pane with Settings, Files, Blueprint, Database, and Logs, while WP Admin, Homepage, Export to GitHub PR, and Download .zip stay near the live site or pane header. I did not add database tools such as Adminer or phpMyAdmin because they are outside the current brief.

## Trade-offs
The iPad model is strong for live-site-plus-tools work, but Split View, Slide Over, and shelf patterns need labels on desktop. I made the pane switcher explicit and kept focus mode available so the iframe can become full screen without losing Save, URL entry, WP Admin, Homepage, and Exit. The first opened launcher is intentionally fuller than the default screen because it must show route forms and saved management, but the normal working view keeps the live site large and the manager limited to one tool pane at a time.

## Self-Critique And Revision Note
After checking the V3 insights, I revised the design around four risks: the live surface is a real iframe, ZIP import uses a real upload control, Apply & Reset requires a typed active name and shows the reload consequence, and Save visibly changes the session identity instead of only showing a dot. The remaining weakness is that the static prototype cannot implement real split resizing or actual OPFS persistence, so those behaviors are represented as high-fidelity states, progress, shelf rows, and toasts.
