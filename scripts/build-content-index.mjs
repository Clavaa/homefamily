// Writes src/content/registry.generated.ts: one static import per content file
// in src/content/guides/ and src/content/compare/. Each file default-exports a
// Guide. Run automatically before dev and build, so adding a page is just
// adding a file.
import { readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "content");
const lines = ['import type { Guide } from "./types";'];
const names = [];
for (const dir of ["guides", "compare"]) {
  for (const f of readdirSync(join(root, dir)).filter((f) => f.endsWith(".ts")).sort()) {
    const id = `${dir}_${f.replace(/\.ts$/, "").replace(/[^a-z0-9]/gi, "_")}`;
    lines.push(`import ${id} from "./${dir}/${f.replace(/\.ts$/, "")}";`);
    names.push(id);
  }
}
lines.push("", `export const ALL: Guide[] = [${names.join(", ")}];`, "");
writeFileSync(join(root, "registry.generated.ts"), lines.join("\n"));
console.log(`Content index: ${names.length} pages`);
