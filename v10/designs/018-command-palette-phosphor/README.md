# 018 — Command Palette First · Terminal Phosphor

## Thesis

A CRT-phosphor reimagining of WordPress Playground where the keyboard is the IA. The five v7 destinations (Site Manager, Blueprint, Database, Logs, plus Sites) and every meta action collapse into a single persistent `⌘K` palette mounted at the top center of the workspace. The rail keeps only TWO buttons — `[1] SITE` for the current playground home and `[2] LIBRARY` for the modal blueprint browser. Everything else (Settings, Files, Blueprint, Database, Logs, Save, Refresh, WP Admin, Homepage, Fullscreen, Export to GitHub PR, Download .zip, every start route) is one keystroke away.

The visual idiom is disciplined CRT: pure black canvas (`#000000`), phosphor green (`#00FF95`) for live affordances, dim phosphor (`#00B870`) for inactive labels, JetBrains Mono throughout, 1px phosphor borders with NO radius, and a 4 %-opacity 1px horizontal scanline overlay. The iframe is the only non-phosphor surface in the entire layout — it shows real WordPress chrome in full color, which makes the live site impossible to miss against the monochrome shell.

## What's locked vs explored

Locked: iframe primacy, one swap-content pane, slim top capsule, corner site widget, modal library (z3 overlay), mobile bottom-bar mirror, single save-pill source of truth, 10 category filters, 16 + cards, six start routes, five Site Manager surfaces (Settings · Files · Blueprint · Database · Logs), all five settings fields, both exports, an Apply + Reset confirmation mechanic (typed-phrase plus auto-snapshot plus diff).

Explored (structural shift): the rail primitive is **the palette** itself. The left rail is a two-button minimum; the pane is no longer rail-driven but palette-driven. Type `logs` and the palette filters AND the pane swaps to the log viewer. Type `settings`, `files`, `blueprint`, `database`, or any verb and the corresponding pane mounts. This makes Playground feel like a tiny operating system shell.

## Trade-offs

Discoverability of the five Site Manager surfaces drops for purely mouse users — but the two-button rail plus the "Manage" category list inside the open palette restores it, and category badges in the palette also expose the destinations at rest. The phosphor monochrome is a strong aesthetic stake; it's intentional that the iframe content (real WordPress UI) reads as warm and saturated against the green chrome — that contrast is the entire design's argument: "the chrome is a CLI; your site is the product."
