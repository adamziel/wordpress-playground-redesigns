# V3 Design 018 - Full-size iPad Workspace

## Thesis
This concept treats WordPress Playground as an iPad multitasking workspace where the live WordPress iframe is the primary app and every management surface is secondary. The default screen is usable immediately: a browser-like top bar, a large running site, a swappable Split View pane, and a saved-playgrounds Dock. The important variation is Full Size mode: it removes catalog and tool chrome while keeping Save, URL navigation, WP Admin, Homepage, refresh, and exit controls in a floating rail so WordPress never feels trapped in a settings card.

## Remix, Merge, Remove
The current Site Manager becomes the Split View pane with the required Settings, Files, Blueprint, Database, and Logs tabs. The Saved Playgrounds drawer becomes a Slide Over launcher with three sections: start routes, blueprint gallery, and Your Playgrounds. The six start routes are preserved as distinct cards, and the routes that require input expose it inline: WordPress PR, Gutenberg PR or branch, GitHub repo, Blueprint URL, and zip import. Settings are not duplicated into a separate form; the toolbar settings control focuses the Settings pane, where the unsaved notice and Apply & Reset confirmation live. WP Admin, Homepage, Export to GitHub PR, and Download .zip are kept in the Site Manager header/actions.

## Trade-offs
The iPad metaphor is strong but asks desktop users to understand Split View, Slide Over, and Dock affordances. I made the pane switch explicit with labels, tabs, and a visible handle, and mobile falls back to a bottom sheet plus direct shortcuts for Site, Start, Files, Settings, and Logs instead of burying everything in More. Split View only shows one tool pane at a time, so a user cannot inspect Files and Logs simultaneously. The payoff is that the running site stays central, and Full Size mode gives the iframe the entire viewport without losing critical controls.

## Self-Critique And Revision Note
After checking the V3 insights, I revised the design around three risks: route tiles now show concrete paste/upload fields, Apply & Reset renders a confirm/cancel modal, and Full Size mode keeps Save, URL, WP Admin, Homepage, and exit reachable. I also strengthened the unsaved state in the top chip and Dock. The remaining weakness is that this static prototype simulates the WordPress iframe and editors, so production would need real focus management, drag resizing, and keyboard behavior for the multitasking gestures.
