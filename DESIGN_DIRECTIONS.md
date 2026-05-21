# 100 design directions

Each session is assigned ONE numbered direction. Push it. Two designers given different directions must produce visibly different layouts and information architectures.

1. **Command-palette-first**: every action triggered by `Cmd/Ctrl+K`. The toolbar shrinks to almost nothing. Settings/blueprints/files all accessed through a fuzzy-search palette.
2. **IDE-like**: VS Code aesthetic. Activity bar on the left (icons), tabbed editor in the middle for the WordPress iframe + blueprint/file editors, status bar at the bottom (PHP version, WP version, logs counter, save status).
3. **Notion-like**: side panel of nested pages ("Sites", "Blueprints", "Settings"). Center pane is content. No floating toolbar — actions live in the page.
4. **Mac Finder windows**: each playground is a "window" with its own chrome. Title bar with traffic-light buttons. Multiple windows can be open as tabs in a desktop-like shell.
5. **Browser-tab metaphor**: each saved playground is a real tab strip at the top. New tab = new playground. URL bar is the WordPress address bar. Bookmarks bar = blueprints.
6. **Mobile-first**: design for 390×844 first, then desktop is just a wider mobile. Bottom tab bar with 4 tabs (Site, Files, Blueprint, More). Sheets slide up.
7. **Dark cyberpunk hacker terminal**: green-on-black, monospace, ASCII separators. The iframe sits inside a faux CRT bezel. Settings shown as `wp-cli` commands you can copy.
8. **Apple Vision / spatial**: floating glass panels in 3D space (using CSS transforms / perspective). The iframe is a "window". Settings hover as cards beside it.
9. **Storybook-style component library**: left rail = component categories (Site, Blueprint, Files, DB, Logs). The viewport is the "canvas". Tools like "controls" and "docs" tabs.
10. **Figma-like**: zoomable infinite canvas. Each saved playground is a frame at a fixed position. Properties panel on the right for settings of the focused playground.
11. **Newspaper / magazine layout**: serif headlines, multi-column. The active site is the "lede" article; blueprints are sidebar features.
12. **Game launcher (Steam)**: library on the left, big art for the currently selected playground/blueprint, "Play" button. Recently played / friends-playing sections.
13. **Game launcher (Epic-style)**: vertical nav, huge hero card for the featured blueprint. Animated cover thumbnails.
14. **macOS Settings.app (Ventura style)**: sidebar of categories. Right pane swaps. The iframe lives in its own "Live Preview" category.
15. **Windows 11 Settings**: pill-shaped categories, breadcrumbs, lots of whitespace.
16. **GitHub repo page**: top tabs (Code = the iframe, Issues = logs, Pull requests = WP-PR / Gutenberg-PR boot, Actions = blueprints, Insights = stats). Branch picker = WP version.
17. **Linear / Vercel / minimal**: very tight, mostly monochrome, sharp typography, accent color sparingly. Keyboard-driven.
18. **Discord layout**: server list on the far left (each saved playground = a server icon), channel list (Files/Blueprint/Logs as channels), main pane is the iframe or chat-like log stream.
19. **Slack layout**: workspace switcher on the far left, channel sidebar, threads-like log viewer in the right panel.
20. **Email client (Mail.app)**: 3-column. Mailboxes = blueprints. Message list = saved playgrounds. Reading pane = the live site.
21. **Spotify-like**: left nav with "Your Library" of saved playgrounds, big "Made for you" grid of blueprints, bottom bar with playback-style controls (refresh, back/forward, save, settings).
22. **Music DAW / Ableton**: track lanes = boot/install/configure steps of the blueprint, the iframe = the master output. Drag-and-drop steps to author a blueprint.
23. **Kanban**: blueprints organized in cards across columns by category. Drag a card to "Launch" column to boot it.
24. **Tile dashboard (Windows 8 / live tiles)**: blueprints and saved sites as resizable tiles with live status (running, idle, error).
25. **Card stack (Tinder-style)**: swipe through blueprints; swipe right to launch, left to dismiss. Mobile-native vibe.
26. **Wizard / step-by-step**: every action becomes a multi-step flow with progress bar. Heavy hand-holding for new WordPress users.
27. **Single-page scroll**: no panels, no modals. Scroll down to reveal settings, blueprints, file browser. Sticky iframe-preview on the right.
28. **Two-up split view**: iframe on top, controls on bottom — like a video editor's preview + timeline.
29. **Console + visual hybrid**: bottom-docked terminal that streams logs and accepts wp-cli; visual controls in the top. Toggle the terminal up/down.
30. **Excel / spreadsheet**: blueprints in rows, columns are properties (WP version, PHP, plugins, themes). Filter, sort, group like Excel.
31. **Trello / sticky notes**: each saved playground is a sticky on a corkboard, draggable. Click a sticky to expand it into the running site.
32. **Concept-album minimal**: just the iframe + a single floating "..." button that expands into a radial pie menu of actions.
33. **Radial / pie menu**: all primary actions surround the cursor or a fixed center icon. Hover-disclosure.
34. **Sketch / Excalidraw hand-drawn**: hand-drawn fonts, dashed borders, wonky strokes. Playful.
35. **Brutalist web 1.0**: monospaced, system fonts, 1px borders, brutalist newspaper grid. No rounded corners, no shadows.
36. **Y2K / aero glass**: glossy buttons, gradients, glass-like panels with chromatic aberration accents.
37. **Memphis / 80s**: vivid pinks, teals, squiggle dividers, geometric shapes as decorations.
38. **Glassmorphism + heavy blur**: the iframe is the background; controls float in frosted-glass cards above.
39. **Neumorphism**: soft pillowy buttons, inset/outset shadows, monochrome palette.
40. **High-contrast accessibility-first**: WCAG AAA contrast, very large hit targets, keyboard hints visible by default, focus rings prominent.
41. **Print-document inspired**: A4 page layout, serif body, footnotes, marginalia for tips.
42. **Comic book**: speech bubbles for help, halftone backgrounds, bold ink outlines.
43. **Childrens-book / kid-friendly**: rounded everything, oversized illustrations, friendly mascot named "Wapuu" guiding the user.
44. **Wapuu-centric mascot UI**: Wapuu (WP mascot) lives in a sidebar, narrates state changes, recommends blueprints. Stop short of being annoying.
45. **WordPress Studio / Local-by-Flywheel-like**: faithful desktop-app feel with environment cards, "Open Site" / "Stop" big primary buttons.
46. **Vercel/Netlify dashboard**: deploy-style cards for each playground. "Build logs" panel slides up. "Promote to production" doesn't exist — that becomes "Save".
47. **Stripe Dashboard**: clean nav, big "$" — er, "WP" — header metric, time-series chart of activity.
48. **Apple Music Now Playing**: iframe is the album art, blueprint name is the song title, controls beneath. "Up next" is recently used blueprints.
49. **Maps**: imagine WordPress versions, PHP versions, blueprints as locations on a map you can pan around. Click a pin → boot that combo.
50. **Tube / metro line map**: WP and PHP versions as stations on parallel lines. Pick a station to boot.
51. **Timeline / Git log**: each save creates a node in a vertical commit-graph. Branch a playground from any node. "Reset Playground" = checkout main.
52. **Branching tree (org-chart)**: same idea but horizontal — your playground history is a tree you can fork.
53. **Tabs-only**: every panel is a tab on the SAME tab strip. No sidebars. (Settings tab, Files tab, Blueprint tab, Logs tab, DB tab.)
54. **Floating action button (Material You)**: single FAB bottom-right that expands into the major actions. Material-3 dynamic color.
55. **iPad multitasking**: split-view with the iframe + a secondary pane you can swap (files / blueprint / logs). Pull-tab to resize.
56. **Stage Manager**: floating windows organized into "spaces" on the left rail.
57. **Three-pane Outlook/Mail**: nav | list | reading pane. Inbox of "things you can do" on the left.
58. **Single dropdown**: collapse everything except the iframe behind ONE menu in the top-right. Brutalist minimalism.
59. **Fullscreen iframe + heads-up overlay**: chrome only appears on hover/edge-swipe (like a video player).
60. **Video player chrome**: bottom bar with play/pause/scrubber metaphors — scrubber is a timeline of states; play = start, pause = freeze, etc.
61. **Time-machine**: visual rewind through the playground's state history. Stacked-pages-receding effect.
62. **Hub-and-spoke**: central "home" with major actions as spokes. Clicking a spoke flips into that sub-screen.
63. **Reader-first**: the iframe is paramount, taking 75% of width. Everything else collapses into a thin vertical rail with icon-only buttons + tooltips.
64. **Inspector-first (devtools)**: bottom-docked devtools-like inspector with tabs for Elements / Console / Network / Sources — repurposed for Logs / Blueprint / Files / DB.
65. **Twitter-like timeline**: vertical feed where each item is a saved-playground card with avatar (favicon), title, WP/PHP badges, last-used time, "Boot" button.
66. **TweetDeck multi-column**: many narrow columns side-by-side — one column per saved playground or per blueprint category.
67. **Pinterest grid**: masonry of blueprint cards with rich preview images.
68. **Apple TV grid**: featured row, "Recently Used" row, "Recommended for theme authors" row, "Recommended for plugin authors" row.
69. **Channel guide / TV grid**: 2D grid where rows are categories and columns are blueprints. Select to "tune in".
70. **Onboarding-driven**: the first screen asks "Are you a theme author / plugin author / site owner / learner?" and tailors the IA. Persists choice.
71. **Persona-tabbed top nav**: top tabs for the four personas; each surfaces a curated set of blueprints + tools.
72. **Pricing-page-style for blueprints**: blueprints presented as feature-comparison columns. "Choose your starter."
73. **Restaurant-menu style**: blueprints grouped as "Starters / Mains / Desserts" with prose descriptions and a sommelier-style helper.
74. **Cookbook**: each blueprint is a recipe card with ingredients (plugins, themes), prep time (PHP/WP versions), and a step-by-step "method".
75. **Catalog / IKEA**: numbered SKUs for each blueprint with cool product photography mockups.
76. **Drag-and-drop blueprint builder**: visual canvas. Drag steps (install plugin, set option, create user) into a flowchart. Run = boot.
77. **Block-editor styled (Gutenberg-inside-Gutenberg)**: the Playground's own chrome uses Gutenberg blocks visually — block toolbar, inserter, sidebar inspector.
78. **wp-admin styled (faux-WP)**: makes the Playground chrome look like wp-admin itself (admin bar + left menu) — so the inner iframe feels nested but consistent.
79. **Dual-iframe split**: two playgrounds side-by-side for A/B comparison (e.g., WP 6.4 vs 7.0). Synchronized URL bar optional.
80. **Multi-pane workspace**: 4 quadrants — preview, blueprint editor, file tree, logs. Each can be maximized.
81. **Floating widgets desktop**: everything is a draggable floating widget. Save layout per-playground.
82. **Single-line top toolbar, everything else collapses**: super minimal. Every panel is a slide-over from one of the four screen edges.
83. **Bottom sheet only** (mobile-app feel even on desktop): controls live in a swipe-up sheet. The iframe is the wallpaper.
84. **Sidebar that swaps content** (single sidebar, multiple personalities — Files mode, Blueprint mode, Settings mode, Logs mode, DB mode — selected by a column of icons).
85. **Two-tier vertical nav** (a column of category icons + a wider column of items in that category, then the iframe).
86. **Top + bottom toolbar (no sidebars)**: top = nav/URL/save; bottom = current-context tools that swap (file actions, blueprint actions, settings).
87. **Pull-to-refresh + edge gestures** (mobile-app gestures even on desktop): every gesture is a discoverable feature.
88. **Voice/keyboard-prompt-driven**: a Quick-prompt input replaces toolbars. "switch to PHP 7.4", "save", "show logs" — interpreted via a finite grammar.
89. **AR/HUD military aesthetic**: targeting reticles, monospaced telemetry, status corners (top-left = WP version, top-right = PHP, bottom = log tail).
90. **Sci-fi terminal (Severance / Alien)**: vector lines, beep-boop minimal, monospace. Functional, eerie.
91. **Soft-pastel cozy**: warm pastels, rounded everything, low-contrast, friendly micro-copy ("Let's get cozy. Want to save your work?").
92. **High-density spreadsheet pro**: every pixel earns its keep — like Bloomberg Terminal or Reuters. Many simultaneous panels.
93. **Three-screen kiosk** (single-page but feels physical — bezels, indicator LEDs as status dots).
94. **Comic-strip storyboard**: blueprints as comic panels showing what they "do".
95. **Travel-booking-style**: blueprint = destination, plugins = activities, WP version = travel dates. Big primary "Book your trip" → boot.
96. **Calendar-style**: a calendar grid where you "schedule" a playground — except the dates are actually category cells (Themes / Plugins / Experiments / etc).
97. **Chess-board grid**: 8×8 grid of blueprint thumbnails. Visual variety encouraged.
98. **Carousel-driven**: one giant action at a time, big arrows left/right to navigate options. Kiosk-friendly.
99. **One-screen everything**: deliberately fits 100% of features visually on the initial viewport with no scroll. Information-dense but legible.
100. **Reverse-of-current**: take a screenshot of the current Playground and invert the spatial hierarchy — what was a popover becomes persistent; what was persistent becomes a popover; what was a tab becomes a sidebar item; what was a sidebar item becomes the main canvas. Ship it.
