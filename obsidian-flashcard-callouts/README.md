# Flashcard Callouts for Obsidian

A standalone Obsidian plugin that displays spaced repetition flashcards as callouts inside the note editor. Inspired by this vault's Quartz flashcard presentation; it does not depend on or modify Quartz.

## Use

The plugin is installed in `content/.obsidian/plugins/flashcard-callouts` and enabled in the active vault.

- Click **Render flashcards as callouts** in Obsidian's left ribbon to turn preview on.
- Click the ribbon button again to return to editable card source.
- Click a card's question to fold or expand its answer.
- Click **Reverse** on a reversed card to swap its faces visually.
- Click **Edit** to turn preview off and place the cursor at that card's source.
- The status bar's **Cards: source / callouts** button and the command palette's **Flashcard Callouts: Toggle callout rendering** do the same toggle. Assign a hotkey through Obsidian's Hotkeys settings if desired.

Preview applies to open note editors and stays enabled when switching notes. It starts off when Obsidian loads. Ordinary note text stays editable while flashcards are rendered as callouts. Cursor movement skips the rendered cards; use a card's **Edit** button or the flashcard toggle to access card source. Flashcard rendering works in both Live Preview and Source mode independently of Markdown formatting. Opening preview from Reading view switches the active note into the editor; this version uses editor decorations and does not add a separate Reading view renderer.

## Supported syntax

```text
Question::Answer
Front:::Back

Question
?
An answer with multiple paragraphs, Markdown, equations, images, or lists.
+++

Reversible question
??
Reversible answer
+++

A sentence with {=an answer=} in context.
A sentence with {=1;;an answer;;a hint=} in context.
```

Clozes appear highlighted in context, as in Quartz. Legacy `==highlight==` clozes are recognized when accompanied by spaced repetition scheduling comments. Multiline cards need an ending `+++` or scheduling comment. The preview hides card delimiters and associated `<!--SR:...-->` metadata without changing either. Code, frontmatter, headings, blockquotes, and Excalidraw notes are excluded from card detection.

The renderer uses Obsidian's native Markdown renderer for links, embeds, math, and formatting. Standard separators from this vault are supported; custom separators configured in Spaced Repetition are not read dynamically.

## Develop

Use Node.js 22 or newer (the included `.node-version` selects 24).

```sh
cd /Users/kai/code/quartz/obsidian-flashcard-callouts
npm ci
npm test
npm run check
npm run build
npm run install:vault
```

To install in a different vault, run `node install.mjs /absolute/path/to/vault` after building. The installer copies only `main.js`, `manifest.json`, and `styles.css`; it does not enable the plugin or alter other settings. Enable it under Community plugins. After reinstalling an enabled plugin, disable and enable it again to load the new build.

The code has four responsibilities:

- `src/parser.ts` turns Markdown into immutable card descriptions and source ranges. It has no Obsidian or DOM dependencies. Card kinds are explicit: basic, reversed, or cloze.
- `src/editor.ts` owns CodeMirror decorations and cursor navigation. It never rewrites notes or makes the editor read-only.
- `src/widget.ts` owns card DOM, native Markdown rendering, and component cleanup. Equivalent card content reuses its DOM when surrounding prose changes, preserving folding and reversal. Edit resolves the card's current document position instead of retaining an old source offset.
- `src/main.ts` connects the plugin lifecycle, ribbon, command, and status bar. `styles.css` owns the Quartz-inspired appearance.

Render components and DOM event listeners are unloaded with their widgets or the plugin. Late asynchronous render completions do not request editor layout updates after disposal. Reverse is available once both faces have finished rendering. Clozes use non-collapsible markup because they have no separate answer.

Tests use a checked-in Markdown fixture and CodeMirror editor states; they do not read or modify your vault. They cover parsing exclusions, scheduling metadata, non-overlapping ranges, edits around cards, and switching source files. Run `npm run check` for strict type checking, tests, and formatting, and `npm run format` to apply the project's formatting rules.

Obsidian and CodeMirror remain external to the bundle, using the copies supplied by Obsidian. No network calls or vault writes occur in the plugin. Parsing currently reparses the active note after a document edit; selection-only changes reuse existing decorations. This favors correct Markdown context over partial parsing for typical note sizes.

The implementation uses Obsidian's documented [editor extension API](https://docs.obsidian.md/Plugins/Editor/Editor%20extensions) and [decorations](https://docs.obsidian.md/Plugins/Editor/Decorations).
