import type { Guide } from "../types";

const guide: Guide = {
  slug: "home-health-aide",
  section: "guides",
  cluster: "types-of-care",
  title: "Home Health Aides: What They Do, Training & Cost",
  description:
    "What a home health aide does, the federal 75-hour training rule, what HHA care costs, and how to hire one through an agency, privately or as a family member.",
  h1: "Home health aides: what they do, what they cost and how to hire one",
  short: "Home health aides",
  eyebrow: "Hands-on help at home",
  lead: "A home health aide is the person who helps with bathing, dressing, moving around the house and the other daily tasks that get hard with age, illness or disability. Here is what an aide can and can't do, how they are trained, what they cost and how to find one — including how a family member can become the paid aide.",
  answer:
    "A home health aide (HHA) gives hands-on personal care at home: bathing, dressing, toileting, moving safely and simple health checks under a nurse's supervision. Aides working for Medicare-certified agencies must finish at least 75 hours of training and pass a competency test. You can hire one through an agency, privately, or through Medicaid.",
  takeaways: [
    "Home health aides help with personal care and basic health tasks, supervised by a registered nurse at certified agencies.",
    "Federal rules require at least 75 hours of training, including 16 hours of supervised practical training, for aides at Medicare-certified agencies.",
    "CareScout's 2025 survey put non-medical caregiver services, including aides, at a national median of $35 an hour.",
    "Medicare covers aide visits only alongside skilled nursing or therapy. Medicaid pays for ongoing aide care in every state.",
    "A family member can often become the paid aide, through Medicaid self-direction or an agency that hires family.",
  ],
  sections: [
    {
      id: "what-is",
      h2: "What is a home health aide?",
      blocks: [
        "A home health aide — also called a home health care aide, home healthcare aide or HHA — is a trained worker who helps someone with daily personal care in their own home. You'll also hear \"health aide,\" \"home aide,\" \"in home aide,\" \"home nurse aide\" or \"in home nurse aide.\" They all describe the same job: hands-on help, not nursing.",
        "In the federal job data, home health aides are grouped with personal care aides. The Bureau of Labor Statistics describes home health aides as workers who help people with bathing, dressing and meals, and who may also check vital signs and help with medication under a health professional's supervision. The BLS reported a median wage of $35,800 a year for the combined group in May 2025.",
        "An aide is different from a nurse. If your parent needs wound care, injections or IV medication, that's [in-home nursing care](/guides/in-home-nursing-care/). If they need help getting through the day safely, that's an aide. Our guide to [home health vs. home care](/guides/home-health-vs-home-care/) explains where the line falls.",
      ],
    },
    {
      id: "services",
      h2: "Home health aide services: what an aide does",
      blocks: [
        "Home health aide services usually include:",
        {
          ul: [
            "Bathing, showering and bed baths — the core of most bath aide services",
            "Dressing, grooming, hair and mouth care",
            "Toileting and incontinence care",
            "Transfers from bed to chair, walking, and repositioning to prevent sores",
            "Checking temperature, pulse and breathing, and reporting changes to the nurse",
            "Medication reminders, and help with medication where state rules and the care plan allow it",
            "Light housekeeping, laundry and meals connected to the person's care",
          ],
        },
        "Home care aide services from a non-medical agency look much the same, minus the health checks. Home aide services and in home aide services are often used for either. What an aide won't do: give injections, change sterile dressings, adjust medications or make medical judgments. Those belong to a nurse.",
        {
          callout: {
            tone: "info",
            title: "Aide or companion?",
            text: "A companion or homemaker helps with company, errands and housework but not hands-on personal care. If your parent needs help in the shower or on the toilet, you need an aide. See [non-medical home care](/guides/non-medical-home-care/).",
          },
        },
      ],
    },
    {
      id: "training",
      h2: "Home health aide training and certification",
      blocks: [
        "For aides who work at Medicare-certified home health agencies, federal rules at 42 CFR 484.80 set the floor:",
        {
          ul: [
            "**At least 75 hours** of classroom and supervised practical training.",
            "**At least 16 hours of classroom training before at least 16 hours of supervised practical training** with patients.",
            "**A competency evaluation**, with key skills — communication, vital signs, personal hygiene, safe transfers and positioning — tested by watching the aide do them.",
            "**At least 12 hours of in-service training** every 12 months.",
            "**Nurse supervision**: when the patient is also getting skilled care, a registered nurse or therapist checks on the aide's work at least every 14 days; for aide-only care, a nurse visits in person at least every 60 days.",
          ],
        },
        "States can add more. Non-medical agencies and private hires may have different or no training rules, depending on the state. That's why \"certified home health aide\" usually signals the federal standard, and \"aide\" alone may not.",
        {
          h3: "HHA vs. CNA",
        },
        "A certified nursing assistant (CNA) is trained to state standards for nursing homes and hospitals, and many home health agencies hire CNAs as aides. Families searching \"hire CNA for home care,\" \"in home CNA care,\" \"CNA services at home\" or \"home CNA services\" are usually looking for the same hands-on help an HHA gives. If you think \"I need a CNA for my mom,\" what matters is the person's training, experience and supervision — not the letters.",
      ],
    },
    {
      id: "cost",
      h2: "How much does a home health aide cost?",
      blocks: [
        "CareScout's 2025 Cost of Care Survey reported a national median of **$35 an hour** for non-medical caregiver services — a category that now combines homemakers and home health aides because their prices have converged. At 44 hours a week, that's $80,080 a year. Local rates can be far above or below the median.",
        {
          table: {
            caption: "Weekly cost at the 2025 national median of $35 an hour",
            head: ["Hours per week", "Weekly cost", "Typical use"],
            rows: [
              ["10", "$350", "A few morning visits for bathing and dressing"],
              ["20", "$700", "Half days on weekdays"],
              ["44", "$1,540", "Full-time weekday care"],
              ["168", "$5,880", "Round-the-clock hourly care — see [24-hour home care](/guides/24-hour-home-care/)"],
            ],
          },
        },
        "Agencies often have minimum shift lengths and charge more for nights, weekends and holidays. See [the cost of in-home care](/guides/cost-of-in-home-care/) for ways to pay, and [live-in caregivers](/guides/live-in-caregiver/) for a different pricing model.",
      ],
    },
    {
      id: "who-pays",
      h2: "Who pays for home health aide assistance?",
      blocks: [
        {
          table: {
            head: ["Payer", "Pays for an aide?", "Limits"],
            rows: [
              ["Medicare", "Only alongside skilled care", "Part-time visits while the person is homebound and getting nursing or therapy"],
              ["Medicaid", "Yes, in every state", "Home health is mandatory; ongoing personal care comes through state programs and waivers — see [Medicaid home care](/guides/medicaid-home-care/)"],
              ["Long-term care insurance", "Usually", "After the policy's waiting period, when help with daily activities is needed"],
              ["VA", "For eligible veterans", "Through VA home care programs"],
              ["Private pay", "Yes", "You pay the agency or the aide directly"],
            ],
          },
        },
        "Home health aide assistance from Medicare stops when the skilled care stops. For ongoing home aide care, Medicaid is the largest payer, and many programs let the person choose who the aide is. [Check whether your relative may qualify](/qualify/).",
      ],
    },
    {
      id: "agencies",
      h2: "HHA agencies: how a home health aide agency works",
      blocks: [
        "An HHA agency hires, trains, insures and supervises aides, then schedules them into clients' homes. A home health aide agency handles payroll taxes, backup when an aide is sick, and — at certified agencies — nurse supervision. That's what you pay the agency's markup for.",
        "Home health aide companies range from Medicare-certified agencies to non-medical home care franchises. Agencies for home health aides that bill Medicare or Medicaid must meet their rules; a private HHA agency that only takes private pay answers to state licensing. Ask any home aide agency or health aide agency:",
        {
          ol: [
            "Are your aides certified, and what training do they have?",
            "Who supervises the aide, and how often does a nurse visit?",
            "Are aides your employees, with background checks, workers' comp and liability insurance?",
            "What's your minimum shift, and what happens if the aide calls out?",
            "Do you take Medicaid or long-term care insurance?",
          ],
        },
        "Our [checklist for choosing a home care agency](/guides/how-to-choose-a-home-care-agency/) goes further, and [local home care agencies](/compare/local-home-care-agencies/) compares agency types. \"HHA home care\" and \"HHA services\" usually mean aide care from an agency like this.",
      ],
    },
    {
      id: "near-me",
      h2: "Finding a home health aide near me",
      blocks: [
        "If you're searching home health aide near me, home health aide agency near me or hha agencies near me, start from what's paying:",
        {
          ul: [
            "**Medicare home health:** the certified agency your doctor refers you to assigns the aide. Medicare's Care Compare lists certified home health care aides near me by ZIP code.",
            "**Medicaid:** your state program or managed-care plan gives you a list of agencies — or lets your relative hire their own aide. See your [state's programs](/states/).",
            "**Private pay:** compare two or three local home health aide agencies and at least one independent aide. Our [home care near me guide](/guides/home-care-near-me/) walks through it.",
          ],
        },
        "Whether you typed home health aide services near me, home aide services near me, home aides near me, in home aides near me, health aides near me, health care aides near me, home health aides in my area, aide services near me, home aide agency near me, hha companies near me or home health aide companies near me, the next step is the same: call, ask the questions above, and get the rate in writing. \"Best HHA agency near me\" is the one whose answers you'd trust at 2 a.m.",
      ],
    },
    {
      id: "private",
      h2: "Private home health aides and private HHA care",
      blocks: [
        "A private home health aide is an aide you pay directly — either through an agency on a private-pay basis or hired on your own. People call it a private HHA, private home aide, private health aide, personal home health aide, or private aide services. Home health aide private pay rates at agencies are the full agency rate; an independent home health aide usually charges less per hour because there's no agency overhead.",
        "The trade-off: when you hire privately, **you** are usually the employer. That means background checks, backup coverage, and household employer taxes once you pay one worker $3,000 or more in cash wages in 2026, according to IRS Publication 926. We cover that in detail in [private pay home care](/guides/private-pay-home-care/).",
        {
          h3: "Private duty home health aide and private cases",
        },
        "A private duty home health aide works long shifts for one client, rather than short visits. Aides call these \"home health aide private cases.\" Families looking for private aides for elderly parents, or a private hire home health aide for nights, often find them through agency private-duty divisions, word of mouth or caregiver registries. If you're looking for private home health aide near me or private home health aides near me, check references and ask about insurance before anything else.",
      ],
    },
    {
      id: "elderly",
      h2: "Home health aide for elderly parents and seniors",
      blocks: [
        "Most home health aide for elderly clients' care is about keeping someone safe at home: a steady hand in the shower, help getting dressed, someone to notice when something's off. A home health aide for seniors can be the difference between staying home and moving to a facility.",
        "When you're arranging an aide for elderly relatives, match the schedule to the risky times of day — usually mornings (bathing, dressing) and evenings (bedtime, toileting). A home aide for elderly parents with dementia needs someone patient and consistent; ask for the same aide each visit. See [caring for aging parents](/guides/caring-for-aging-parents/) and [senior home care](/guides/senior-home-care/) for the bigger picture.",
        "Families often start with a simple thought: \"I need a home health aide.\" If that's you — or you need home health aide help for your mom this week — use the steps in the next section.",
      ],
    },
    {
      id: "hire",
      h2: "How to hire a home health aide, step by step",
      blocks: [
        "If you need home health aide help and want to hire home health aide care quickly:",
        {
          ol: [
            "**Write down the tasks and times.** Bathing three mornings a week is a different job from overnight supervision.",
            "**Find out who pays.** Ask the doctor about Medicare home health, and [check Medicaid eligibility](/qualify/).",
            "**Call two or three agencies** and ask the agency questions above.",
            "**Interview the aide**, not just the agency. Ask about experience with your parent's conditions.",
            "**Do a paid trial shift** with you there.",
            "**Put the plan in writing:** tasks, schedule, rate, and who to call if the aide doesn't show.",
          ],
        },
        "Families looking for home health aide care often find the aide is available sooner than the funding. If your relative may qualify for Medicaid, apply at the same time you start looking — that's how you find a home health aide without paying privately for months.",
      ],
    },
    {
      id: "family",
      h2: "Become the paid home health aide for a family member",
      blocks: [
        "Many families end up asking: if I'm already doing this, can I be the caregiver home health aide? Often yes, two ways.",
        {
          h3: "Through Medicaid self-direction",
        },
        "Consumer-directed programs let the person receiving care hire a relative as their aide, with pay set by the state. Adult children can be paid almost everywhere. See [how to become a paid caregiver for a family member](/guides/become-a-paid-caregiver-for-a-family-member/) and [consumer-directed care](/guides/consumer-directed-care/).",
        {
          h3: "Through an agency that hires family",
        },
        "Some agencies will hire you as an HHA caregiver, pay for your training and assign you to your own relative. See [home care agencies that hire family members](/guides/home-care-agencies-that-hire-family-members/) and [agency care vs. a paid family caregiver](/compare/home-care-agency-vs-paid-family-caregiver/). For pay by state, see [family caregiver pay rates](/guides/family-caregiver-pay-rates/).",
      ],
    },
    {
      id: "states",
      h2: "Home health aides by state",
      blocks: [
        "Federal training rules are the same everywhere; pay and programs are not.",
        {
          ul: [
            "**Home health aide NJ:** New Jersey's self-directed Medicaid option is the Personal Preference Program. If you're comparing a home health aide agency NJ families use against self-direction, start at [New Jersey](/new-jersey/) and [Hudson County](/new-jersey/hudson/).",
            "**Home health aide Florida:** Florida lists a Family Home Health Aide option for children, and a participant-directed option for adults reporting $15–$25 an hour. See [Florida caregiver programs](/florida/caregiver-program/) and [Broward County](/florida/broward/).",
            "**Home health aide Massachusetts:** the PCA Program reports $19.50–$23.25 an hour. See [Massachusetts pay](/massachusetts/caregiver-pay/) and [Middlesex County](/massachusetts/middlesex/).",
            "**Home health aide Connecticut:** Connecticut reports $500 a week through its programs. See [Connecticut](/connecticut/) and the [Capitol Planning Region](/connecticut/capitol-planning-region/).",
          ],
        },
        "Other states are on our [state list](/states/).",
      ],
    },
    {
      id: "spelling",
      h2: "Home aid, home aide, in-home aids: the same search",
      blocks: [
        "An aide is a person; aid is help. Searches don't always keep them apart — \"home aid agency,\" \"home aid care,\" \"home aid assistance,\" \"home aid for elderly,\" \"at home aid for elderly,\" \"private aid,\" \"home aids\" and \"in home aids\" are all people looking for an aide. So are \"at home health aide,\" \"in home health aide\" and \"in home health care aide,\" and \"health aides for home.\" Spanish speakers often search \"agencias de HHA.\" All of them lead back to the same choices: an agency, a private aide, or a paid family member.",
        "If you're after home health care aides for hire or local home health aide agencies, the [home care near me guide](/guides/home-care-near-me/) is the best next step. And if you're weighing the whole range of help, including [respite care](/guides/respite-care/) for a tired family caregiver, start there.",
      ],
    },
    {
      id: "aide-services",
      h2: "Aide services beyond personal care",
      blocks: [
        "Aide services can stretch to cover the rest of the day: meal prep, laundry, a walk outside, a ride to an appointment where allowed. Ask whether driving is included and whether the aide can use your car. If what your parent mostly needs is company and supervision, a companion may cost the same or less; if they need hands-on help, insist on an aide. For work as an aide yourself, see [caregiver jobs](/guides/caregiver-jobs/).",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "See if Medicaid could pay for an aide — or pay you." },
            { href: "/guides/home-health-vs-home-care/", title: "Home health vs. home care", text: "Skilled care or daily help: which you need." },
            { href: "/guides/in-home-nursing-care/", title: "In-home nursing", text: "When an aide isn't enough and you need a nurse." },
            { href: "/guides/private-pay-home-care/", title: "Private pay home care", text: "Hiring an aide privately, taxes and insurance." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What does a home health aide do?",
      a: "A home health aide helps with personal care such as bathing, dressing, toileting, moving safely and meals, and at certified agencies may check vital signs under a nurse's supervision.",
    },
    {
      q: "How much training does a home health aide need?",
      a: "Aides at Medicare-certified agencies need at least 75 hours of training, including at least 16 hours of supervised practical training, plus a competency evaluation and 12 hours of in-service training each year. States can require more.",
    },
    {
      q: "How much does a home health aide cost per hour?",
      a: "CareScout's 2025 survey reported a national median of $35 an hour for non-medical caregiver services, which now includes home health aides. Rates vary by area, agency and schedule.",
    },
    {
      q: "Does Medicare pay for a home health aide?",
      a: "Only as part of Medicare home health, when you are homebound and also getting skilled nursing or therapy. Medicare does not pay for an aide when personal care is the only help you need.",
    },
    {
      q: "Does Medicaid pay for a home health aide?",
      a: "Yes. Home health is a mandatory Medicaid benefit, and states pay for ongoing personal care through their own programs and waivers. Many let the person choose their own aide, including a relative.",
    },
    {
      q: "Can I be a paid home health aide for my mom?",
      a: "Often yes. Many Medicaid programs let an adult child be the paid caregiver, and some agencies hire family members as aides and assign them to their own relative.",
    },
    {
      q: "Is it cheaper to hire a private home health aide?",
      a: "The hourly rate is usually lower, but you take on the employer's role, including background checks, backup care and household employment taxes once wages reach the IRS threshold.",
    },
    {
      q: "What is the difference between a home health aide and a CNA?",
      a: "Both give hands-on personal care. CNAs are trained to state standards mainly for nursing homes and hospitals, while home health aides meet federal home health training rules. Many agencies hire both.",
    },
  ],
  related: [
    "/guides/home-health-vs-home-care/",
    "/guides/become-a-paid-caregiver-for-a-family-member/",
    "/guides/home-care-agencies-that-hire-family-members/",
  ],
  sources: [
    { label: "42 CFR 484.80: Home health aide services", url: "https://www.law.cornell.edu/cfr/text/42/484.80" },
    { label: "BLS: Home health and personal care aides", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" },
    { label: "CareScout 2025 Cost of Care Survey results", url: "https://investor.genworth.com/news-events/press-releases/detail/1054" },
    { label: "Medicare.gov: Home health services coverage", url: "https://www.medicare.gov/coverage/home-health-services" },
    { label: "Medicaid.gov: Mandatory and optional Medicaid benefits", url: "https://www.medicaid.gov/medicaid/benefits/mandatory-optional-medicaid-benefits" },
    { label: "IRS Publication 926: Household Employer's Tax Guide", url: "https://www.irs.gov/publications/p926" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/about-son-father.webp", alt: "An adult son helps his older father at home" },
  keywords: [
    "home health aide",
    "home health care aide",
    "hha agency",
    "home healthcare aide",
    "home health aide near me",
    "home health aide agency",
    "health aide",
    "home health aide services",
    "home aide",
    "home health aide agency near me",
    "home health care aides near me",
    "hha agencies near me",
    "home aide agency",
    "home health aide for elderly",
    "home health aide for seniors",
    "private hha agency",
    "home care aide services",
    "private home health aide",
    "hire home health aide",
    "private duty home health aide",
  ],
};

export default guide;
