// Validate src/data/programs/<state>.json against seo/PROGRAM-BRIEF.md.
import { readFileSync, existsSync, readdirSync } from "node:fs";
const root = new URL("..", import.meta.url).pathname;
const states = JSON.parse(readFileSync(root + "src/data/states.json", "utf8"));
const args = process.argv.slice(2);
const list = args.length ? args : states.map((s) => s.slug);
let bad = 0, total = 0;
for (const slug of list) {
  const f = root + `src/data/programs/${slug}.json`;
  if (!existsSync(f)) { if (args.length) { console.log(`✗ ${slug}: missing`); bad++; } continue; }
  const p = [];
  let arr;
  try { arr = JSON.parse(readFileSync(f, "utf8")); } catch (e) { console.log(`✗ ${slug}: bad JSON ${e.message}`); bad++; continue; }
  const st = states.find((s) => s.slug === slug);
  if (arr.length < st.programs.length) p.push(`${arr.length} records for ${st.programs.length} programs in states.json`);
  const seen = new Set();
  for (const r of arr) {
    const tag = r.slug || "?";
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.slug || "")) p.push(`${tag}: bad slug`);
    if (seen.has(r.slug)) p.push(`${tag}: duplicate slug`); seen.add(r.slug);
    for (const k of ["name", "summary", "who_qualifies", "who_can_be_paid", "pay", "how_to_apply", "faqs", "sources", "keywords"]) if (!r[k] || (Array.isArray(r[k]) && !r[k].length)) p.push(`${tag}: ${k} empty`);
    if ((r.faqs || []).length < 4) p.push(`${tag}: ${r.faqs?.length ?? 0} FAQs (min 4)`);
    if ((r.how_to_apply || []).length < 2) p.push(`${tag}: how_to_apply needs steps`);
    if (!(r.sources || []).some((u) => /^https?:\/\//.test(u))) p.push(`${tag}: no source URL`);
    const words = JSON.stringify(r).split(/\s+/).length;
    if (words < 350) p.push(`${tag}: thin (${words} words)`);
    if (/sunroom/i.test(JSON.stringify(r))) p.push(`${tag}: mentions Sunroom`);
    total++;
  }
  if (p.length) { bad++; console.log(`✗ ${slug}\n   - ${p.join("\n   - ")}`); }
  else console.log(`✓ ${slug}: ${arr.length} programs`);
}
console.log(`${total} program records`);
process.exit(bad ? 1 : 0);
