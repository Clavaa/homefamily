// Every internal route the site serves (mirrors src/data/counties.ts slug
// logic). Used by check-content.mjs to fail any link that would 404.
import { readFileSync } from "node:fs";
const root = new URL("..", import.meta.url).pathname;
const states = JSON.parse(readFileSync(root + "src/data/states.json", "utf8"));
const counties = JSON.parse(readFileSync(root + "src/data/counties.json", "utf8"));
const kebab = (n) => n.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/['’]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const STRIP = / (County|Parish)$/;
const ANY = / (County|Parish|Borough|Census Area|Municipality|city|City and Borough|Planning Region)$/;
export const PLANNED = JSON.parse(readFileSync(root + "seo/pages.json", "utf8")).map((p) => p.path);
export const routes = new Set(["/", "/es/", "/qualify/", "/states/", "/about/", "/about/leadership/", "/privacy/", "/guides/", "/compare/", "/wisconsin/iris/", ...PLANNED]);
export const countySlugs = {};
for (const s of states) {
  routes.add(`/${s.slug}/`);
  for (const sub of ["caregiver-pay", "spousal-caregiver", "caregiver-program"]) routes.add(`/${s.slug}/${sub}/`);
  const rows = counties[s.name] ?? [];
  const base = new Map();
  for (const r of rows) { const b = kebab(r.county.replace(ANY, "")); base.set(b, (base.get(b) ?? 0) + 1); }
  countySlugs[s.slug] = [];
  for (const r of rows) {
    const amb = base.get(kebab(r.county.replace(ANY, ""))) > 1;
    const slug = amb ? kebab(r.county) : kebab(r.county.replace(STRIP, ""));
    if (["caregiver-pay", "spousal-caregiver", "caregiver-program", "iris"].includes(slug)) continue;
    routes.add(`/${s.slug}/${slug}/`); countySlugs[s.slug].push(`${slug}  (${r.county})`);
  }
}
if (process.argv[2] === "counties") {
  const st = process.argv[3];
  console.log((countySlugs[st] ?? []).join("\n"));
} else if (process.argv[1].endsWith("routes.mjs")) console.log(routes.size, "routes");
