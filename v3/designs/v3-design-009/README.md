# V3 Design 009 - Calm Inspector Playground

## Thesis
This direction treats WordPress Playground as a browser tab first and a developer tool second. The first viewport stays calm: a strong URL bar, an unmistakable yellow unsaved state, Save, Launch, Tools, Settings, and the live WordPress site at full size. The Site Manager becomes a collapsible inspector dock with the existing Settings, Files, Blueprint, Database, and Logs tabs, so developer depth is one deliberate gesture away instead of being forced on first-touch users.

## Remix / Merge / Remove Choices
I remixed the strongest #064 DevTools idea into a lighter product shell: the top bar keeps browser muscle memory, but the inspector ships collapsed and can dock over the right side or become a bottom sheet on mobile. The launcher merges Saved Playgrounds, Start New, featured blueprints, the full 43-blueprint gallery, and Your Playgrounds into one large sheet, but each start route now exposes the real required input: PR number, Gutenberg branch, GitHub URL, blueprint URL, or ZIP upload. I kept the quick settings trigger because it is a current top-bar feature, while the full Settings tab remains in the inspector with the same destructive Apply & Reset flow.

## Trade-offs
The design favors approachability over always-visible power tools, so Files, Blueprint, Database, and Logs require opening the inspector. That is intentional for first-touch calm, but heavy debugging users may keep the inspector open most of the time. The launcher briefly covers the live site to give the full gallery and route forms enough room; the focus button restores a full-size preview whenever the user wants uninterrupted WordPress interaction. The quick settings popover and inspector Settings tab still duplicate some controls because the current product has both entry points, but the destructive confirmation is shared and explicit.

## Self-Critique / Revision Note
After checking the V3 insights, I revised the concept away from an always-open DevTools panel. The collapsed inspector handle, inline route forms, full-site focus mode, mobile bottom navigation, and real reset confirmation directly address the recurring V3 review gaps: too many visible buttons, missing PR/GitHub/URL inputs, weak unsaved state, cramped live previews, and destructive actions without a second step.
