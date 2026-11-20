import { build } from "esbuild"
import { fileURLToPath } from "node:url"

await build({
  entryPoints: [fileURLToPath(new URL("src/main.ts", import.meta.url))],
  outfile: fileURLToPath(new URL("main.js", import.meta.url)),
  bundle: true,
  format: "cjs",
  platform: "browser",
  target: "es2022",
  external: ["obsidian", "@codemirror/state", "@codemirror/view"],
  minify: true,
  banner: { js: "/* Flashcard Callouts — built from src/main.ts */" },
})
