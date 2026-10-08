# states.json corrections found by program research (2026-10-08)

Apply in one pass before deploy; each line cites the program record that holds the source.

## spouse / parentMinor status
- new-hampshire: spouse yes → **no** (He-E 801.12(a)(6), He-W 552.04(b)(3), He-M 524.26(j)) — states.json "yes" came from a stale secondary site
- nebraska: spouse no → **limited**; parentMinor no → **limited** (LRI Personal Care, extraordinary-care test, 40 hr/wk, agency-based)
- montana: spouse limited (keep) ; parentMinor → **limited** (Big Sky extraordinary care, 40 hr/wk)
- mississippi: relatives (non-legally-responsible) limited via agency since 7/1/2023 (pending CMS) — matchStatus hardcodes MS adult relatives "limited" already
- oklahoma: spouse limited (exception only, 40 hr/wk) — matches
- oregon: spouse yes (ICP allows spouse per 2/10/2026 overview) — matches

## pay
- missouri: SFC $110.33/day from 7/1/2026; CDS vendor enrollment frozen since 8/1/2026 (waitlist detail)
- montana: $7.91/15min self-directed (~$31.64/hr Medicaid rate), $9.23/15min agency
- nevada: self-directed PCS $25/hr ($6.25/15min), worker floor $16/hr (SB 511); SFC $137.50/day, ages 21+, 100–140 slots
- oregon: $21.25–$25.25/hr (2026), $23.00–$27.00 from Jan 2027
- rhode-island: $15–$21/hr (participant sets wage); Independent Provider Program merged into Personal Choice 2/12/2024
- south-carolina: MCC Waiver $16.20/hr (FAQ rev. 8/11/2025)
- south-dakota: SFC $82.00 / $102.51 / $114.81 per day from 7/1/2026

## other
- missouri: Family Support Division phone 855-373-4636 not found on official pages; 855-373-9994 used
- pennsylvania: OBRA payroll vendor is PPL (877-908-1750), not Tempus; OBRA ages 18–59

## batch: WA WV WI WY
- wisconsin: IRIS single statewide FEA = PPL selected 1/29/2026, bid protest pending, participants move "sometime in 2027" (dhs.wisconsin.gov/iris/fea-announcement.htm) — states.json agencyModel AND bespoke /wisconsin/iris/ page say ~April 2026 → fix both
- wyoming: spouse yes → **limited** (CCW renewal WY.0236.R07.00 eff. 7/1/2026: no financial authority, beyond normal spousal duties; guardian/employer of record barred)
- wyoming: waitlist "mixed" → possible (~2,891–2,903 funded/yr, enrolled by eligibility date)

## batch: ID IL IN IA KS KY
- kentucky: spouse yes → **limited** for HCB (907 KAR 7:010: immediate family/spouse via PDS only with written state approval); Michelle P. allows spouse/parents 40 hr/wk; PDS rates from 1/1/2025 $6.36/15min attendant, $9.08/15min personal care; waitlist attestation due 1/31/2027
- indiana: SFC agency rate $77.54–$133.44/day (BT2025105); $46–$80/day is a ceiling for the caregiver share, not guaranteed; attendant care $34.36/hr to agency (70% to worker)
- illinois: MFTD legally responsible (parent/spouse) CNAs payable since 5/20/2026 for participants 21+ only; HSP phone 800-843-6154 (not 877-581-3690)
- kansas: TA waiver amendment (waitlist + LRI pay, 5/1/2026) CMS approval unconfirmed; FE waitlist reported from 7/6/2026 (secondary)
