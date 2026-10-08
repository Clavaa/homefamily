# Program research brief — one record per named program

Goal: a real page for every named family-caregiver program in every state
(`/{state}/programs/{slug}/`). People search these programs by name
("structured family caregiving georgia", "ihss colorado", "iris wisconsin",
"cdass colorado", "personal choices alabama"). The state's
`/{state}/caregiver-program/` page is already the site's best Google landing
page; these go one level deeper.

## Output

`src/data/programs/<state-slug>.json` — a JSON array, one object per program
listed for that state in `src/data/states.json` (same order). Add a program
the state runs that pays family but is missing from states.json only if a
primary source confirms it (mark `"added": true`).

```jsonc
{
  "slug": "structured-family-caregiving",       // lowercase-hyphen, unique within the state; no state name in it
  "name": "Structured Family Caregiving (SFC)", // official name
  "aka": ["SFC", "structured family care"],     // names and abbreviations people search
  "kind": "waiver service | state plan | self-direction option | state-funded | children's waiver",
  "summary": "2–3 plain sentences: what it is and how it pays a family caregiver.",
  "who_qualifies": ["Medicaid…", "Age/disability…", "Needs nursing-home level of care…"],
  "who_can_be_paid": {
    "adult_children_relatives": "yes | limited | no — one sentence",
    "spouse": "yes | limited | no — one sentence",
    "parent_of_minor": "yes | limited | no — one sentence",
    "live_together": "required | optional | n/a — one sentence"
  },
  "pay": { "display": "$110.39/day", "detail": "how it's set, who pays it, as published" },
  "hours_or_budget": "how hours/budget are decided",
  "waitlist": { "status": "none | possible | long | capped", "detail": "" },
  "self_directed_or_agency": "Who employs the caregiver: the member (with a fiscal agent), an agency, or either.",
  "how_to_apply": ["Step 1 …", "Step 2 …", "Step 3 …"],
  "contacts": [{ "name": "Official office", "phone": "as published on the official site", "url": "https://…" }],
  "faqs": [{ "q": "…", "a": "…" }],             // 4–6, real questions people ask about THIS program
  "keywords": ["search phrases this page answers"],
  "sources": ["https://… primary first"],
  "certainty": "primary | secondary",
  "updated": "2026-10-08"
}
```

## Rules

- **Primary sources** (state Medicaid/agency pages, waiver documents, provider
  manuals, statute) for every fact. Pay figures must match states.json or a
  newer primary source (note the newer source).
- Plain English, 8th-grade, no hype. Never say Sunroom Care operates in, is
  licensed in or can enroll anyone in a state. Never invent phone numbers.
- Unknown → say "not published" rather than guessing.
- Research only — no accounts, no contact. Write only your assigned files. No git.
- Validate with `node seo/check-programs.mjs <state-slug>` until it passes.
