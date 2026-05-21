# V3 Design 005 - First-Touch Calm Settings

## Thesis
This direction treats WordPress Playground as a quiet Windows 11 Settings-style workspace, but the first viewport remains the live WordPress site rather than a settings home. The top bar keeps only the essentials visible: refresh, path input, unsaved identity, save, Start, Tools, and settings. Everything deeper opens into a calm split management surface with breadcrumbs, cards, and generous whitespace.

## Remix, Merge, Remove
I merged the saved-playgrounds launcher, blueprint gallery, and Site Manager into one management panel with Windows-like categories: Start, Blueprints, Your Playgrounds, Settings, Files, Blueprint, Database, Logs, and Export. The PR, Gutenberg, GitHub, Blueprint URL, and ZIP routes expose real input states directly on their launch cards. Settings has one full surface, with the toolbar gear taking users there, and destructive Apply & Reset uses an explicit confirmation dialog plus inline warning. WP Admin, Homepage, Export to GitHub PR, and Download .zip remain present in the Site Manager surface and adjacent live-site controls.

## Trade-Offs
The first screen is intentionally sparse, so some feature discovery depends on the Start and Tools buttons instead of always-visible sidebars. The management panel can cover part of the iframe on desktop, but Focus site restores a full-size WordPress surface and mobile turns the panel into a bottom sheet. The UI favors legibility over raw density, which makes file and log inspection calmer but less compact than a DevTools-style implementation.

## Self-Critique and Revision Note
Against `v3/INSIGHTS.md`, the initial sketch risked repeating the old Windows Settings weakness by making the live site feel like a card inside settings. I revised the layout so the live iframe is the default full workspace, while settings and tools are transient split surfaces. I also added route-specific launcher inputs, a louder unsaved state, a focus mode, full 43-blueprint data, and a destructive reset confirmation to address the specific V3 review gaps.
