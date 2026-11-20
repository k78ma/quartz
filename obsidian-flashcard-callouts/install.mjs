import { copyFile, mkdir } from "node:fs/promises"
import { resolve } from "node:path"
import { fileURLToPath } from "node:url"

const vault = process.argv[2]
  ? resolve(process.argv[2])
  : fileURLToPath(new URL("../content", import.meta.url))
const destination = resolve(vault, ".obsidian/plugins/flashcard-callouts")
await mkdir(destination, { recursive: true })
for (const name of ["main.js", "manifest.json", "styles.css"]) {
  await copyFile(new URL(name, import.meta.url), resolve(destination, name))
}
console.log(`Installed Flashcard Callouts in ${destination}`)
