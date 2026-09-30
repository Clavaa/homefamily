import type { Guide } from "../types";

const guide: Guide = {
  slug: "how-to-choose-a-home-care-agency",
  section: "guides",
  cluster: "finding-care",
  title: "How to Choose a Home Care Agency (2026 Checklist)",
  description:
    "How to compare home care agencies: licensing checks, questions to ask, red flags, reviews and where to get official lists of providers in your state.",
  h1: "How to choose a home care agency",
  short: "Choose a home care agency",
  eyebrow: "A checklist for families",
  lead: "Picking the people who will come into your parent's home is one of the hardest calls a family makes. Here is how to check a license, what to ask, which warning signs to walk away from, and how to compare providers side by side.",
  answer:
    "To choose a home care agency, first confirm it is licensed or registered with your state, then ask how it screens, trains and supervises caregivers, what it charges and who covers missed shifts. Read reviews, call references, compare at least three agencies in writing, and check whether Medicaid could pay a family member instead.",
  takeaways: [
    "Start with an official list: your state's licensing lookup, or Medicare Care Compare for Medicare-certified home health agencies.",
    "Ask every agency the same questions in writing, so you can compare answers rather than sales pitches.",
    "Walk away from any agency that won't show a license, pushes a long contract or asks for large upfront payments.",
    "Online reviews help, but a phone call with a current client family tells you more.",
    "If your relative qualifies for Medicaid, a family member may be able to be the paid caregiver instead of an agency aide.",
  ],
  sections: [
    {
      id: "what-agencies-do",
      h2: "What home care agencies actually do",
      blocks: [
        "Homecare agencies employ caregivers and send them to a client's home. Depending on the state and the license, a home care agency may provide non-medical help — bathing, dressing, meals, housework, company — or skilled services like nursing and therapy. Families call them by many names: home help agency, caregiving agencies, caregiver companies, care companies, or a home help care agency. In the UK the same thing is a carer company. They are all home care providers.",
        "It helps to know which of three kinds of in home care providers you are looking at before you compare prices:",
        {
          table: {
            caption: "Three kinds of care at home providers",
            head: ["Type", "What they do", "Who usually pays"],
            rows: [
              ["Non-medical home care agency (companion or personal care)", "Help with daily living: bathing, meals, errands, supervision", "Private pay, long-term care insurance, Medicaid"],
              ["Home health agency", "Nursing and therapy ordered by a doctor", "Medicare, Medicaid, insurance. See [home health vs. home care](/guides/home-health-vs-home-care/)."],
              ["Registry or referral service", "Matches you with independent caregivers you then manage", "Usually private pay"],
            ],
          },
        },
        "Senior home care agencies mostly fall in the first group. If your parent needs wound care or physical therapy after a hospital stay, you want a home health agency. If they need someone to help them get through the day safely, you want an in home care agency that offers personal care. Our guide to [non-medical home care](/guides/non-medical-home-care/) explains the difference in more detail, and [what is in-home care](/guides/what-is-in-home-care/) covers the basics.",
      ],
    },
    {
      id: "official-lists",
      h2: "How to get a list of home care providers in your state",
      blocks: [
        "Search engines show ads first. For a neutral list of home care service providers, start with official sources:",
        {
          ul: [
            "**Medicare Care Compare** lists every Medicare-certified home health agency, with star ratings for quality and patient experience. It does not list non-medical agencies. Use it at [medicare.gov/care-compare](https://www.medicare.gov/care-compare/).",
            "**Your state's license lookup.** Most states license or register agencies through the health department or a consumer protection office, and many have an online search. Connecticut, for example, registers homemaker-companion agencies with its Department of Consumer Protection and lets you verify a registration through its eLicense system.",
            "**Your Area Agency on Aging.** Call the [Eldercare Locator](https://eldercare.acl.gov/) to reach your local office, which keeps lists of agencies and can tell you what public programs your parent may qualify for. See [home care near me](/guides/home-care-near-me/) for how that search works.",
            "**Your state's Medicaid program.** If your relative has Medicaid, the program or health plan will give you its own list of contracted agencies — and may let you hire a relative instead.",
          ],
        },
        "Our state pages summarize each state's programs and how to apply — for example [Pennsylvania](/pennsylvania/), [Florida](/florida/), [Texas](/texas/) or [Ohio](/ohio/).",
      ],
    },
    {
      id: "licensing",
      h2: "Check the license first: home care agencies in New Jersey, Connecticut, Massachusetts and beyond",
      blocks: [
        "Licensing rules for home care agencies differ a lot from state to state. Some states license every agency; some only register non-medical agencies; a few have had little oversight at all. Always ask the agency which state office licenses or registers it, then check that office's records yourself.",
        {
          table: {
            head: ["State", "Who oversees non-medical agencies", "What to check"],
            rows: [
              ["[New Jersey](/new-jersey/)", "Division of Consumer Affairs registers \"health care service firms\" that place aides in homes", "Ask the Division whether the firm is registered and has complaints; confirm aides are certified home health aides where required"],
              ["[Connecticut](/connecticut/)", "Department of Consumer Protection registers homemaker-companion agencies; home health agencies are licensed separately by the Department of Public Health", "Verify the registration on the state's eLicense lookup"],
              ["[Massachusetts](/massachusetts/)", "Rules for non-medical agencies have been changing; check with the state", "Ask what license the agency holds and confirm it with the issuing office"],
              ["Every state", "Health department or consumer protection office", "License number, complaints, inspection results"],
            ],
          },
        },
        "When families look for the best home care agencies in CT or the best home care agency NJ offers, the license lookup is step one — a slick website is not evidence of anything. The same goes for home care agencies in Massachusetts: ask, then verify. Caregiver agencies in CT that do personal care but won't give a registration number are a hard no.",
        "Also ask whether the agency is **Medicaid-certified**. Home care agencies Connecticut Medicaid works with, home care agencies in New Jersey Medicaid plans contract with, and so on are the only ones Medicaid will pay. See [Medicaid home care](/guides/medicaid-home-care/).",
      ],
    },
    {
      id: "questions",
      h2: "Questions to ask an in home care agency",
      blocks: [
        "Ask each agency the same questions and write the answers down. A good home care agency will answer all of them without hesitating. Be specific about your parent: can the aide help her bathe? The best home care agency will tell you exactly who does what, and put it in the care plan.",
        { h3: "Caregivers and training" },
        {
          ul: [
            "Are caregivers employees of the agency, or independent contractors? (Employees mean the agency handles taxes, insurance and supervision.)",
            "What background checks do you run, and how often?",
            "What training do caregivers get before their first shift, and after? Do you use certified home health aides?",
            "Can we meet the caregiver first, and can we ask for a different one?",
          ],
        },
        { h3: "Supervision and reliability" },
        {
          ul: [
            "Who supervises caregivers, and how often does a supervisor visit?",
            "What happens if the caregiver calls out sick — who covers, and how fast?",
            "Who do we call after hours, and does a real person answer?",
            "How is the care plan written, and how often is it updated?",
          ],
        },
        { h3: "Money and contracts" },
        {
          ul: [
            "What is the hourly rate, and is there a minimum shift length or weekly minimum?",
            "Are nights, weekends and holidays billed differently?",
            "Is there a deposit? How much notice to cancel?",
            "Do you accept long-term care insurance, Medicaid or VA benefits?",
          ],
        },
        "For price context, see [what in-home care costs](/guides/cost-of-in-home-care/) and [private pay home care](/guides/private-pay-home-care/). If you need round-the-clock coverage, read [24-hour home care](/guides/24-hour-home-care/) first — agencies price it very differently.",
      ],
    },
    {
      id: "best-home-care",
      h2: "What makes the best home care agency",
      blocks: [
        "There is no single best homecare agency for everyone. The best home care providers for a parent with dementia are not necessarily the best in home care services for someone recovering from surgery. What the best caregiver agency has in common, wherever it is, comes down to a few things:",
        {
          ul: [
            "**Consistency.** The same one or two caregivers most of the time, not a new face every shift.",
            "**Supervision.** A nurse or care manager who checks in and adjusts the plan.",
            "**Honest pricing.** A rate sheet in writing and no surprise fees.",
            "**Responsiveness.** Someone answers the phone when a shift is missed.",
            "**Fit.** Caregivers trained for your parent's needs — memory care, mobility, diabetes.",
          ],
        },
        "When people search for the best in home care for seniors or the best caregivers for seniors, they are really asking for all five. The best home care is the one your parent is comfortable with and that shows up reliably. Your parent deserves the best of care, but a good home care agency that fits your family is often more valuable than the one with the most awards. Rankings of top home care agencies are usually advertising, so judge the agency, not the list.",
        "Many of the best in home senior care providers are small, local companies. Franchises like [Home Instead](/compare/home-instead/), [Right at Home](/compare/right-at-home/) and [Home Helpers](/compare/home-helpers/) are also options — we compare them against [local home care agencies](/compare/local-home-care-agencies/).",
      ],
    },
    {
      id: "reviews",
      h2: "How to read home care reviews",
      blocks: [
        "Home care reviews are useful, but read them carefully. Look for patterns, not single stories.",
        {
          ul: [
            "**Look at dates.** Staff turnover is high in this field. A review from three years ago may describe a different team.",
            "**Look for specifics.** \"The scheduler always found coverage\" tells you more than \"great company\".",
            "**Read the complaints.** Missed shifts, billing disputes and caregivers who don't show up are the problems that matter most.",
            "**Check how the agency responds** to bad reviews. Defensive replies are a warning sign.",
            "**Ask for references.** A home caregiver agency should be able to connect you with a current client family who agreed to talk.",
          ],
        },
        "For Medicare-certified home health agencies, the Care Compare star ratings are based on data the agency reports and on patient surveys, which makes them more reliable than anonymous reviews.",
      ],
    },
    {
      id: "red-flags",
      h2: "Red flags when comparing senior care providers",
      blocks: [
        "Walk away from elder care home care agency offers that include any of these:",
        {
          ul: [
            "No license or registration number, or a vague answer about who licenses them.",
            "Caregivers paid as independent contractors while the agency acts as their boss. You could be the one left exposed if someone is hurt.",
            "Large upfront deposits or a long contract with no way out.",
            "Pressure to sign the same day.",
            "They can't tell you who supervises the caregiver.",
            "They won't put their rates in writing.",
          ],
        },
        "Also be wary of anyone who charges a fee to \"sign you up\" for Medicaid or a caregiver program. Legitimate enrollment help is paid by the program, not by families.",
        {
          callout: {
            tone: "warn",
            title: "Not all home care agency staff are the same",
            text: "Two agencies with the same hourly rate can deliver very different care. The difference is usually in supervision and staffing depth, which is why the questions above matter more than the price.",
          },
        },
      ],
    },
    {
      id: "compare",
      h2: "How to compare home care companies side by side",
      blocks: [
        "Call at least three homecare companies and put their answers into one table. Ask each one who will help your father dress and bathe. The agency should answer with names and a schedule, not a promise. Here is a simple template:",
        {
          table: {
            head: ["Question", "Agency A", "Agency B", "Agency C"],
            rows: [
              ["License or registration number verified?", "", "", ""],
              ["Hourly rate / minimum hours", "", "", ""],
              ["Caregivers are employees?", "", "", ""],
              ["Backup when a caregiver calls out", "", "", ""],
              ["Supervisor visits how often", "", "", ""],
              ["Accepts Medicaid / LTC insurance / VA", "", "", ""],
              ["Reference family called?", "", "", ""],
            ],
          },
        },
        "A good elderly care agency will not mind being compared. An elderly care company that dodges the questions is telling you something. Senior in home care providers who ask about your parent's routine, history and preferences before quoting a price usually take care planning seriously.",
      ],
    },
    {
      id: "phone-numbers",
      h2: "Finding a home care phone number you can trust",
      blocks: [
        "Many families simply search for a home care phone number or a caregiver phone number and call the first result. That first result is often a paid ad or a referral service that sells your details to several agencies.",
        "Before you call home care companies, find the phone number for home care agencies on your state's license lookup or on the agency's own website, not on a directory. If you already have a caregiver number from a friend, still check the license. We don't publish agency phone numbers ourselves — the official source is always the safer place to get one.",
      ],
    },
    {
      id: "types-of-providers",
      h2: "Agencies, facilities and home help providers: which one do you need?",
      blocks: [
        "Families often mix up care settings. A home care facility isn't really a thing — home care comes to you. People who search for in home care facilities usually mean one of these:",
        {
          ul: [
            "**Home help providers and home help service agency staff** — housekeeping, meals, errands and companionship.",
            "**Personal care aides** — hands-on help with bathing and dressing. A PCA home care agency supplies these aides; in many Medicaid programs a PCA can be a family member.",
            "**A home care aide agency** that supplies certified aides for more complex needs.",
            "**A home care center or adult day program** — a place your parent goes during the day. See [respite care](/guides/respite-care/).",
            "**Assisted living or a care home** — a move. See [assisted living vs. home care](/compare/assisted-living-vs-home-care/).",
          ],
        },
        "Choosing between a care home, agency care or a paid family caregiver is really a question of how much help is needed and who is available to give it. For most families who want care at home, home care agency visits cover part of the day and family covers the rest. If your parent needs hands-on care & help home care agency staff can't fully cover, look at [live-in caregivers](/guides/live-in-caregiver/) or [24-hour home care](/guides/24-hour-home-care/).",
        "If the goal is helping your parent stay at home, care agency choice matters, but so does the rest of the plan — meals, transportation, medication and family visits. Our guide to [caring for aging parents](/guides/caring-for-aging-parents/) walks through the full picture.",
      ],
    },
    {
      id: "family-as-provider",
      h2: "When the best home provider is family",
      blocks: [
        "Sometimes the right home provider is someone who already knows your parent. In every state, Medicaid has at least one program that lets the person receiving care hire a relative and pays that relative. Home provider services delivered by a daughter, son or grandchild are paid at the program's rate, the same as in home provider services from an agency aide.",
        "In some states, like Pennsylvania, New Jersey and Maryland, certain agencies will [hire a family member as the caregiver](/guides/home-care-agencies-that-hire-family-members/) and put them on the agency payroll. In others, the family caregiver is hired directly through a [consumer-directed program](/guides/consumer-directed-care/) like [CDPAP in New York](/new-york/caregiver-program/) or [IHSS in California](/california/caregiver-program/).",
        "Read [agency care vs. a paid family caregiver](/compare/home-care-agency-vs-paid-family-caregiver/) to weigh the two, or [check eligibility](/qualify/) to see which programs your relative may qualify for. Home care service providers and family caregivers can also work together — family covers evenings, an agency covers weekdays. If you want paid family care at home, agency and self-directed routes both exist in many states.",
      ],
    },
    {
      id: "paying",
      h2: "Paying for care provider services",
      blocks: [
        "Most families want to keep a parent at home. Care providers differ in which payers they accept, and how you pay often decides which in home service providers you can use:",
        {
          table: {
            head: ["Payer", "What it covers", "Read more"],
            rows: [
              ["Private pay", "Any licensed agency, any hours", "[Private pay home care](/guides/private-pay-home-care/)"],
              ["Medicaid", "Agencies in the state's network, or a paid family caregiver", "[Medicaid home care](/guides/medicaid-home-care/)"],
              ["Medicare", "Short-term skilled home health only, not ongoing personal care", "[Does Medicare pay family caregivers?](/guides/does-medicare-pay-family-caregivers/)"],
              ["Long-term care insurance", "Depends on the policy; often requires a licensed agency", "[Cost of in-home care](/guides/cost-of-in-home-care/)"],
            ],
          },
        },
        "Agencies for elderly home care set their own private rates, so the same hour of help can cost very different amounts across town. Ask about minimum hours before you compare hourly rates.",
      ],
    },
    {
      id: "espanol",
      h2: "Cómo elegir una agencia de home care",
      blocks: [
        "Muchas familias buscan en español \"agencia de home care\" o \"agencias de hha\" (agencias de auxiliares de salud en el hogar). Los pasos son los mismos: verifique la licencia con el estado, pregunte cómo capacitan y supervisan a los cuidadores, pida las tarifas por escrito y compare al menos tres agencias.",
        "Pregunte también si la agencia tiene cuidadores que hablen español, y si su familiar califica para Medicaid: en todos los estados hay programas que pueden pagarle a un familiar como cuidador. Tenemos información en español en [nuestra página en español](/es/).",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/guides/home-care-near-me/", title: "Home care near you", text: "Find local agencies and caregivers in your area." },
            { href: "/compare/local-home-care-agencies/", title: "Local agencies vs. franchises", text: "How small local agencies compare with national brands." },
            { href: "/guides/cost-of-in-home-care/", title: "What home care costs", text: "Hourly rates and how families pay." },
            { href: "/qualify/", title: "Check eligibility", text: "See if Medicaid could pay a family caregiver instead." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How do I find a good home care agency?",
      a: "Start with an official list from your state's licensing office, your Area Agency on Aging or, for home health, Medicare Care Compare. Call at least three agencies, ask each the same questions, check references and verify the license yourself.",
    },
    {
      q: "What should I ask a home care agency before hiring?",
      a: "Ask whether caregivers are employees, what background checks and training they get, who supervises them, what happens when a caregiver calls out, what the rates and minimums are, and whether the agency accepts Medicaid or insurance.",
    },
    {
      q: "How can I check if a home care agency is licensed?",
      a: "Ask the agency which state office licenses or registers it, then look it up on that office's website or call them. Many states, including Connecticut and New Jersey, let you confirm registration and ask about complaints.",
    },
    {
      q: "Is Medicare Care Compare useful for non-medical home care?",
      a: "No. Care Compare lists Medicare-certified home health agencies, which provide skilled care. Non-medical companion and personal care agencies are not on it; use your state's license lookup for those.",
    },
    {
      q: "Are franchise agencies better than local agencies?",
      a: "Not necessarily. Franchises offer brand standards, but each office is locally owned. A well-run local agency can be just as good. Judge each office on licensing, supervision, staffing and references.",
    },
    {
      q: "What are red flags when choosing a home care agency?",
      a: "No license number, caregivers treated as independent contractors, large deposits, long contracts, pressure to sign quickly, and no clear answer about who supervises the caregiver or covers missed shifts.",
    },
    {
      q: "Can a family member be the caregiver instead of an agency aide?",
      a: "Often, yes. If your relative qualifies for Medicaid home care, every state has at least one program that lets a relative be the paid caregiver, either directly or through an agency.",
    },
  ],
  related: [
    "/guides/home-care-near-me/",
    "/compare/local-home-care-agencies/",
    "/guides/home-care-agencies-that-hire-family-members/",
  ],
  sources: [
    { label: "Medicare.gov Care Compare (home health agencies)", url: "https://www.medicare.gov/care-compare/" },
    { label: "CMS: Home Health Star Ratings", url: "https://www.cms.gov/medicare/quality/home-health/home-health-star-ratings" },
    { label: "Connecticut DCP: Homemaker-Companion Agency Registration", url: "https://portal.ct.gov/dcp/license-services-division/license-division/homemaker-companion-agency-registration" },
    { label: "New Jersey Division of Consumer Affairs: health care service firms", url: "https://www.njconsumeraffairs.gov/" },
    { label: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/og-hands-paperwork.webp", alt: "Hands sorting through care paperwork on a table" },
  keywords: [
    "homecare agencies",
    "home help agency",
    "home care providers",
    "in home care providers",
    "in home care agency",
    "care at home providers",
    "senior home care agencies",
    "caregiving agencies",
    "caregiver companies",
    "at home care agency",
    "agencies for elderly home care",
    "elderly care agency",
    "best home care",
    "senior care providers",
    "best homecare agency",
    "home care agencies in new jersey",
    "home care agencies connecticut",
    "home care agencies in massachusetts",
    "agencia de home care",
    "home care reviews",
  ],
};

export default guide;
