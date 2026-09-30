# Writer brief — /guides/ and /compare/ pages

Sunroom Care (sunroomcare.com) helps families get paid to care for a relative
through state Medicaid programs. It is **free to families** (paid by the
program, never by the family) and it is **not a state agency**. It helps
families find the right program and handles the enrollment paperwork.

Every page is one TypeScript file that default-exports a `Guide`
(`src/content/types.ts`). One component renders them all. You only write words.

## Read first

1. `src/content/types.ts` — the model and the inline markup (`[text](/path/)`, `**bold**`).
2. `src/content/guides/get-paid-to-care-for-family-member.ts` — **the model page.** Match its
   structure, depth, tone and link density.
3. `seo/pages.json` — each page's assigned search phrases, sorted by monthly
   volume (highest first).
4. `src/data/states.json` — the facts we publish per state (programs, pay,
   spouse and parent rules, waitlists, how to apply). `src/data/program-names.ts`
   — what CDPAP/IHSS-style programs are called in each state.

## Hard rules

- **Every assigned keyword must appear in the page copy** (H2s, H3s, paragraphs,
  lists, table cells, callouts or FAQs). Articles and possessives (a, an, the,
  your, my, our), punctuation and markup are ignored when matching. The
  `keywords` array does **not** count.
  - Put the highest-volume phrases in H2s. Weave the rest into sentences.
  - **Never** a keyword dump: no "related searches" block, no list of phrases,
    no sentence that exists only to hold a phrase. Grammar must stay correct.
    Where a search phrase is ungrammatical ("home care cerca de mi",
    "freedom care w2"), quote it as something people type, once.
- **Facts.** No invented numbers, rates, statistics, company claims or phone
  numbers. State figures come from `states.json`. Anything else — national
  costs, Medicare rules, company facts, program history — must be checked
  against an authoritative source (Medicaid.gov, CMS, Medicare.gov, ACL, VA,
  IRS, BLS, state agency sites, CareScout/Genworth Cost of Care survey, the
  company's own site) with WebSearch/WebFetch, and cited in `sources`. If you
  can't verify something, leave it out.
- **Companies.** Compare pages are independent comparisons. Never imply
  Sunroom Care is, or is affiliated with, the company. Don't publish a
  company's phone number, address or login link as fact — tell readers to use
  the official site (link it, nofollow is automatic). Be fair: say what each
  company does well.
- **Don't** claim Sunroom Care has nurses, offices, years in business, ratings
  or customer counts. Don't name any individual.
- Voice: plain, warm, direct, 8th-grade reading level, short paragraphs, no
  hype, no exclamation marks. Honest about limits ("Medicare does not pay
  family caregivers").

## Structure (checked by `node seo/check-content.mjs <section>/<slug>`)

- 1,800–3,000 words. Minimum 10 H2 sections (aim 12–16), each with an
  `id` (lowercase-hyphenated). 6–10 FAQs (plain text answers, no markup).
- `answer`: a 40–60 word direct answer to the page's main query — the
  featured-snippet box.
- `takeaways`: 4–6 bullets.
- **20+ unique internal links** (the checker fails on any link that would 404):
  - other guides and compare pages — every path in `seo/pages.json` is valid
    even if not written yet
  - state pages: `/{state}/`, `/{state}/caregiver-program/`,
    `/{state}/caregiver-pay/`, `/{state}/spousal-caregiver/` (state slugs as in
    states.json, e.g. `new-york`, `district-of-columbia`)
  - county pages `/{state}/{county}/` — get valid slugs with
    `node seo/routes.mjs counties <state-slug>` (e.g. `/new-york/kings/` is
    Brooklyn)
  - `/qualify/` (eligibility check), `/states/`, `/wisconsin/iris/`
  - Descriptive anchor text ("CDPAP in New York"), never "click here".
- `related`: exactly 3 paths. End with a `cards` block of 4 next steps.
- Use `{ stateTable: "programs" | "pay" | "spouse" }` where a 51-state table
  helps; tables and callouts for comparisons and money.
- Do **not** add `{ cta: true }` in a section of its own — the renderer
  inserts an eligibility CTA automatically.
- `title` ≤ 60 chars (the "| Sunroom Care" suffix is added for you);
  `description` 110–158 chars. `published` and `updated`: "2026-09-30".
- `keywords`: the page's top ~20 assigned phrases.
- `photo`: one of `/photos/about-son-father.webp`, `caregiver-phone.webp`,
  `county-porch.webp`, `hero-daughter-mother.webp`, `hero-latino-family.webp`,
  `og-hands-paperwork.webp`, `qualify-laptop.webp`, `rural-home.webp`,
  `sunroom-grandmother.webp` (all under `/photos/`), with an honest alt text.

## Don't

- Touch any file other than your own pages.
- Run `next dev`, `next build`, `npm install` or any git command.
