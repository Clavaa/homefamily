// Quality gate for src/content/{guides,compare}/*.ts. Usage:
//   node seo/check-content.mjs                 # every content file
//   node seo/check-content.mjs guides/cdpap    # one file
// Fails a page that is thin, links anywhere that would 404, or is missing any
// keyword assigned to it in seo/pages.json (the keywords array itself does
// not count — the phrase has to appear in rendered copy).
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { routes } from "./routes.mjs";
const root = new URL("..", import.meta.url).pathname;
const pages = JSON.parse(readFileSync(root + "seo/pages.json", "utf8"));
const byPath = Object.fromEntries(pages.map((p) => [p.path, p.keywords]));

const MIN = { words: 1500, h2: 10, faqs: 6, links: 20 };
// Articles and possessives (a, an, the, your, my, our) are ignored ("get paid to take care of a family member" answers
// "get paid to take care of family member"), as are link and bold markup and
// punctuation.
const norm = (s) =>
  (" " +
    s
      .toLowerCase()
      .replace(/\\"/g, '"')
      .replace(/[’]/g, "'")
      .replace(/\]\([^)]*\)/g, "")
      .replace(/[^a-z0-9&$']+/g, " ") +
    " ")
    // pad first so a leading article ("a better life home care") is stripped too
    .replace(/ (a|an|the|your|my|our)(?= )/g, " ")
    .replace(/\s+/g, " ");

let files = process.argv.slice(2).map((a) => `src/content/${a.replace(/\.ts$/, "")}.ts`);
if (!files.length)
  for (const d of ["guides", "compare"])
    for (const f of readdirSync(root + `src/content/${d}`)) if (f.endsWith(".ts")) files.push(`src/content/${d}/${f}`);

let failed = 0;
for (const f of files) {
  if (!existsSync(root + f)) { console.log(`✗ ${f}: missing`); failed++; continue; }
  const raw = readFileSync(root + f, "utf8");
  const problems = [];
  const slug = raw.match(/\bslug:\s*"([^"]+)"/)?.[1];
  const section = raw.match(/\bsection:\s*"([^"]+)"/)?.[1];
  const path = `/${section}/${slug}/`;
  if (!byPath[path]) problems.push(`path ${path} is not in seo/pages.json`);
  // copy = everything except the keywords array
  const copy = raw.replace(/\bkeywords:\s*\[[\s\S]*?\]\s*,?/, "");
  const text = norm(copy);
  const missing = (byPath[path] ?? []).filter((k) => !text.includes(norm(k)));
  if (missing.length) problems.push(`${missing.length} keywords missing: ${missing.join(" | ")}`);
  const strings = [...copy.matchAll(/"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`/g)].map((m) => m[1] ?? m[2]);
  const words = strings.join(" ").replace(/\]\([^)]*\)/g, "]").split(/\s+/).filter((w) => /[a-z]/i.test(w)).length;
  if (words < MIN.words) problems.push(`only ${words} words (min ${MIN.words})`);
  const h2 = (copy.match(/\bh2:\s*"/g) ?? []).length;
  if (h2 < MIN.h2) problems.push(`only ${h2} H2 sections (min ${MIN.h2})`);
  const faqs = (copy.match(/\bq:\s*"/g) ?? []).length;
  if (faqs < MIN.faqs) problems.push(`only ${faqs} FAQs (min ${MIN.faqs})`);
  const links = [
    ...[...copy.matchAll(/\]\((\/[^)\s]*)\)/g)].map((m) => m[1]),
    ...[...copy.matchAll(/href:\s*"(\/[^"]*)"/g)].map((m) => m[1]),
    ...[...(copy.match(/related:\s*\[([\s\S]*?)\]/)?.[1] ?? "").matchAll(/"(\/[^"]*)"/g)].map((m) => m[1]),
  ];
  const bad = [...new Set(links.map((l) => l.split("#")[0]).filter((l) => !routes.has(l)))];
  if (bad.length) problems.push(`broken internal links: ${bad.join(", ")}`);
  const uniq = new Set(links.map((l) => l.split("#")[0])).size;
  if (uniq < MIN.links) problems.push(`only ${uniq} unique internal links (min ${MIN.links})`);
  const title = raw.match(/\btitle:\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? "";
  if (title.length > 60) problems.push(`title is ${title.length} chars (max 60)`);
  const desc = raw.match(/\bdescription:\s*\n?\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? "";
  if (desc.length < 110 || desc.length > 158) problems.push(`description is ${desc.length} chars (110–158)`);
  const kw = (byPath[path] ?? []).length;
  if (problems.length) { failed++; console.log(`✗ ${path}  (${words} words, ${h2} H2, ${uniq} links, ${kw - missing.length}/${kw} kw)\n   - ${problems.join("\n   - ")}`); }
  else console.log(`✓ ${path}  ${words} words · ${h2} H2 · ${faqs} FAQs · ${uniq} internal links · ${kw}/${kw} keywords`);
}
const have = new Set(files.map((f) => f.replace(/^src\/content\//, "/").replace(/\.ts$/, "/")));
if (process.argv.length <= 2) {
  const todo = pages.filter((p) => !have.has(p.path));
  if (todo.length) { failed++; console.log(`\n${todo.length} planned pages not written: ${todo.map((p) => p.path).join(" ")}`); }
}
process.exit(failed ? 1 : 0);
