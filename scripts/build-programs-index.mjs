// Writes src/data/programs.generated.ts: one static import per research file in
// src/data/programs/<state>.json, so a state's program pages appear as soon as
// its file exists. Runs before dev and build.
import { readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "data");
const files = readdirSync(join(dir, "programs")).filter((f) => f.endsWith(".json")).sort();
const id = (f) => "p_" + f.replace(/\.json$/, "").replace(/-/g, "_");
const lines = [
  'import type { ProgramRecord } from "./programs";',
  ...files.map((f) => `import ${id(f)} from "./programs/${f}";`),
  "",
  "export const PROGRAM_FILES: Record<string, ProgramRecord[]> = {",
  ...files.map((f) => `  "${f.replace(/\.json$/, "")}": ${id(f)} as ProgramRecord[],`),
  "};",
  "",
];
writeFileSync(join(dir, "programs.generated.ts"), lines.join("\n"));
console.log(`Program index: ${files.length} states`);
