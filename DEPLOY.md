# Deploying

Static Next.js 15 app: 3,304 prerendered pages plus one serverless function
(`/api/lead`). Vercel needs no configuration beyond importing the repo — but
set the environment variables below, or leads go nowhere and every canonical
points at the wrong domain.

## Environment variables

| Variable | Where | Why |
|---|---|---|
| `SENDGRID_API_KEY` | Production | **Lead intake.** Without it `/api/lead` returns `ok: true` and silently drops the lead — by design, so dev and preview don't send mail. Nothing reaches you until this is set. |
| `NEXT_PUBLIC_SITE_URL` | Production | The origin for every canonical, sitemap URL and schema `@id` (e.g. `https://example.com`, no trailing slash). Unset, the build falls back to Vercel's own deployment URL, then to the placeholder in `src/site.config.ts`. |
| `NEXT_PUBLIC_ALLOW_INDEXING` | *(rarely)* | Only if you host somewhere that isn't Vercel and want the site indexed. See below. |

`NEXT_PUBLIC_VERCEL_URL` and `NEXT_PUBLIC_VERCEL_ENV` are injected by Vercel
automatically — don't set them yourself.

## Indexing

Only the production deployment is indexable. Previews and local builds serve a
disallow-all `robots.txt` **and** a `noindex` on every page, so a staging copy
of 3,300 pages can never compete with the live site for its own keywords.
That's driven by `isIndexable` in `src/site.config.ts`.

## Data at build time

`src/data/states.json`, `quiz.json` and `county-facts.json` are **committed**.
Their generators need inputs that are *not* in the repo:

- `build-data.mjs` reads `../../research/familycaregiver_states_ALL.csv`
  (a sibling directory, outside this repo)
- `build-county-facts.mjs` reads 16 MB of federal CSV under `data-src/` (gitignored)

On a clean checkout — which is every Vercel build — both inputs are absent, so
both scripts log a notice and keep the committed JSON. A deploy therefore never
depends on census.gov or ers.usda.gov being up.

To actually refresh the data, run it locally where the sources exist:

```bash
npm run data                          # states.json + quiz.json from the research CSV
npm run data:counties -- --refresh    # re-download the federal files and rebuild
```

Then commit the regenerated JSON.

## Before you send traffic

- [ ] `SENDGRID_API_KEY` set, and a test lead actually arrives
- [ ] `NEXT_PUBLIC_SITE_URL` set to the real domain, domain attached in Vercel
- [ ] Placeholders in `src/site.config.ts` replaced: brand, phone, `email`, `leadTo`
- [ ] `robots.txt` on production shows `Allow: /` (not the disallow-all preview version)
- [ ] Sitemaps reachable: `/sitemap/core.xml` plus one shard per state
