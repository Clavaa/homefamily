"""Assign every Keyword Planner phrase to exactly one page. Ordered rules:
first match wins. Output: seo/keyword-map.json {path: [keywords...]}."""
import csv, json, re, sys
rows = list(csv.DictReader(open("seo/keyword-planner-2026-09-30.tsv"), delimiter="\t"))
vol = {r["Keyword"]: int((r["Avg. monthly searches"] or "0").replace(",", "")) for r in rows}

NYC = r"\b(nyc|brooklyn|bronx|queens|manhattan|staten island|long island|nassau|suffolk|westchester|buffalo|rochester|syracuse|watertown|new york|ny|nys|special touch)\b"
PA = r"\b(philadelphia|pittsburgh|allentown|reading pa|harrisburg|lancaster|scranton|williamsport|erie|york pa|pennsylvania|pa)\b"
CITY = r"\b(atlanta|baltimore|boston|chicago|charlotte|columbia sc|columbus|dallas|denver|fort worth|houston|indianapolis|kansas city|las vegas|los angeles|louisville|memphis|miami|minneapolis|nashville|orlando|orange county|phoenix|portland|raleigh|reno|richmond|salem|san antonio|san diego|spokane|st louis|st charles|st petersburg|tampa|tucson|albuquerque|bellevue|bend|charleston|colorado springs|fort lauderdale|fort wayne|hartford|jersey city|little rock|newark|oak park|savannah|south bend|springfield|the villages|vancouver|west palm beach|wichita|wilmington|cleveland|london)\b"

R = [
 ("/compare/freedomcare/", r"freedom ?care|freedomcare|freedom caregiver|freedom (choice|home|senior)|freedom from care"),
 ("/compare/help-at-home/", r"^(call )?help at home\b|phone number for help at home|care help at home|cna help at home|medicare help at home"),
 ("/compare/home-instead/", r"home instead|instead home|at home instead|call home instead"),
 ("/compare/right-at-home/", r"right at home|right home care|right to home|telephone number for right at home"),
 ("/compare/patriot-home-care/", r"patriot"),
 ("/compare/home-helpers/", r"home helpers"),
 ("/compare/caregivers-of-america/", r"caregivers of america"),
 ("/compare/caregiver-homes/", r"caregiver homes"),
 ("/compare/ppl-public-partnerships/", r"\bppl\b"),
 ("/compare/local-home-care-agencies/", r"heart to heart|all heart|preferred homecare|always (caring|home|there)|bestcare|best care home|link home care|caring people|friends (&|and) family|advantage home care|community home care|a better life|better life|abby home|access home care|we care home|people care|care choice|choice home care|all care home|a team home|america('s)? (best )?home|american home care|all american|united home|heart home care|the heart home|from the heart|caring (home|family)|chosen family|com for care|about you|at your side|by your side|here for you|with love|loving|one you love|peace of mind|red lion|homestead|village caregiving|family love|family resources|friends for life|complete homecare|compassionate|number one|better (at home|solutions)|life home care|living care home health|individual home care|independence home|healthcare plus|mom's home|care partners|special touch|family care of georgia|at home care of louisiana|helping hands"),
 ("/guides/home-care-new-york/", NYC),
 ("/guides/home-care-pennsylvania/", PA),
 ("/guides/home-care-by-city/", CITY),
 ("/guides/start-a-home-care-agency/", r"start|opening|business"),
 ("/guides/caregiver-apps/", r"\bapps?\b|website|sites\b"),
 ("/guides/cdpap/", r"cdpap|consumer directed personal assistance|home attendant"),
 ("/guides/ihss/", r"ihss|in home support services|altcs"),
 ("/guides/structured-family-caregiving/", r"structured family|sfc"),
 ("/guides/consumer-directed-care/", r"consumer directed|self directed|cds home|personal choice|independent home care provider"),
 ("/guides/paid-parent-caregiver/", r"parent cna|parent caregiver|paid parent|parent caretaker|family cna|special needs|disabled"),
 ("/guides/does-medicare-pay-family-caregivers/", r"medicare"),
 ("/guides/medicaid-home-care/", r"medicaid (home|personal)|home (health )?(care|health)? ?(agencies )?that (accepts?|takes?) medicaid|through medicaid|accept medicaid|medicaid patients"),
 ("/guides/respite-care/", r"respite"),
 ("/guides/family-caregiver-support-programs/", r"support|resource|helpline|hotline|counsel|month|assistance program|family caregiver assistance|financial assistance|government assistance for caregivers of|help for caregivers|care for caregivers|caregiver (assistance|information|organizations|benefit)|organizations"),
 ("/guides/caregiver-jobs/", r"\bjobs?\b|hiring|employment|looking for work|no experience|clients|staffing|pay weekly|w2"),
 ("/guides/family-caregiver-pay-rates/", r"pay rate|hourly rate|compensation|caretaker pay|caregiver pay\b|caregiver payment|highest pa|top paying|best paying|pay per day|family caregiver pay\b|caregiver family member pay|family caretaker pay"),
 ("/guides/become-a-paid-caregiver-for-a-family-member/", r"^(become|becoming|apply|sign up|i want to|caregiver how)|requirements|qualification|training|certified|licen[cs]e|pca for|becoming|home health aide for (family|relative)|hha for family|aide for family member|home care aide program|family home health aide program|home health aide program|applications?\b|caregiver program for family member|caregiver for family member in"),
 ("/guides/get-paid-to-care-for-family-member/", r"(get |got )?paid (to|for) |pay to care|paid home care for family|family paid caregiver"),
 ("/guides/home-care-agencies-that-hire-family-members/", r"agenc(y|ies) that (hire|pay) family|home care by family|family (home care|in home care|home health|member home care provider)|home care for family( member)?$|home health care for family|in home (health )?care for family member|family home|family taking care of family|family care (agency|home health)|family and friends home care|care for family member$|home health care family caregivers|in home family caregiver|family paid caregiver"),
 ("/guides/medicaid-family-caregiver-program/", r"medicaid|state caregiver|government|caregiver paid by state|state paid|programs? (that|to)|caregiver program$|caregiver programs|relative caregiver program|family caregiver program|family caregiving program|caregiver (program|application)|caregiver (massachusetts|california|colorado|florida|georgia|in florida|in georgia)|colorado|texas caregivers|delaware caregivers|caregivers connecticut|family caregiver (colorado|massachusetts)|kentucky|ohio|oregon|indiana|michigan|missouri|maryland|illinois|wisconsin|virginia|ri caregiver|nc family|nj family|ct |jersey assistance|keep mom at home care"),
 ("/guides/get-paid-to-care-for-family-member/", r"paid|get money|getting paid|pay (to|for)|paying for care"),
 ("/guides/cost-of-in-home-care/", r"cost|affordable|cheap|low cost|free|price|paying|insurance|policy|policies|long term care assistance|va home|united healthcare"),
 ("/guides/24-hour-home-care/", r"24|7 day|full time|round"),
 ("/guides/live-in-caregiver/", r"live in|stay in|in house"),
 ("/guides/part-time-and-short-term-home-care/", r"part time|short term|hourly|temporary|on call|for a day|one on one|daily|visits?\b|sitters?"),
 ("/guides/home-health-aide/", r"\bhha\b|home health aide|health aides?\b|home aides?|home aids?|aide services|in home aide|nurse aide|healthcare aide|health care aide|cna|home aid\b|home aid (agency|assistance|care|for)|aide for elderly|at home aid|private aid"),
 ("/guides/in-home-nursing-care/", r"nurs"),
 ("/guides/home-health-vs-home-care/", r"home health|medical home|medical in home|healthcare|health care|health at home|at home health|in home health|health caregiver|caregivers home health|home medical|health home"),
 ("/guides/non-medical-home-care/", r"non medical|personal (care|caregiver|carer|caretaker|assistant|home|in home)|companion|homemaker|domiciliary|bath aide|personal assistant|elderly (companions|helper|assistant|sitters)|aide services|home care personal assistant"),
 ("/guides/private-pay-home-care/", r"private|independent|hire|caregivers for hire|caretakers for hire|for hire|find|looking for|families looking|search|i need a (caregiver|carer|caretaker|cna|home health)|need (a )?caregiver|need home health|need help at home|i need home care|caregiver needed|needed for"),
 ("/guides/caring-for-aging-parents/", r"parent|mom|mother|dad|elderly parent|aging|seniors taking|keep mom|help for elderly|help with elderly|family member taking care|caring for|taking care|take care|care for (a )?(loved|family|my|your)|loved one|caretaker for|caregiver for (my|mom|parent|loved|elderly family|family)|being a care|family caregiver$|family caretaker|friends and family caregivers|help to care|elder care assistance|options for elderly|elderly .*options|care options"),
 ("/guides/home-care-near-me/", r"near|in my area|around me|nearby|nearest|local|cerca|places"),
 ("/guides/how-to-choose-a-home-care-agency/", r"best|top|list of|reviews|good home|agencia|agencias|places|office|number|phone|call |companies|company|agenc|organizations|providers?\b|home care center|facility|facilities"),
 ("/guides/senior-home-care/", r"senior|elder|old people|aging|adult|elderly"),
 ("/guides/what-is-in-home-care/", r"."),
]
out = {}
for r in rows:
    k = r["Keyword"]; kl = k.lower()
    for path, pat in R:
        if re.search(pat, kl):
            out.setdefault(path, []).append(k); break
for p in out: out[p].sort(key=lambda k: -vol[k])
json.dump(out, open("seo/keyword-map.json", "w"), indent=1)
for p, ks in sorted(out.items(), key=lambda x: -len(x[1])):
    print(f"{len(ks):4} {sum(vol[k] for k in ks):>9,}  {p}   e.g. {ks[:4]}")
