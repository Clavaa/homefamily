import type { Guide } from "../types";

const guide: Guide = {
  slug: "medicaid-home-care",
  section: "guides",
  cluster: "programs",
  title: "Medicaid Home Care: Services, Agencies and Family Providers",
  description:
    "What Medicaid home care covers, how to find agencies that accept Medicaid, New York's eligibility rules, and how a family member can be the paid caregiver.",
  h1: "Medicaid home care: what it covers and how family can provide it",
  short: "Medicaid home care",
  eyebrow: "Home health and personal care",
  lead: "Medicaid is the largest payer of long-term care at home in the US. It covers skilled home health in every state and daily personal care in most, and in all 50 states and DC the person receiving care can choose a family member as the caregiver in at least one program. Here is how it fits together.",
  answer:
    "Medicaid home care covers help at home for people who qualify for Medicaid and need assistance. It includes home health (nursing, therapy and aides, required in every state) and personal care services such as bathing, dressing and meals. Most states let the member hire a family member as their paid caregiver through a self-directed option.",
  takeaways: [
    "Medicaid home health is a mandatory benefit in every state; personal care is optional but offered widely through the state plan or waivers.",
    "Unlike Medicare, Medicaid covers long-term personal care, not just short skilled episodes.",
    "You can get Medicaid home care from an agency that accepts Medicaid or through a self-directed program where family can be hired.",
    "In New York, most new adult applicants since September 2025 must meet \"minimum needs\" rules for personal care and CDPAP.",
    "Michigan's Medicaid Home Help program pays an individual caregiver, who can be a relative, directly.",
  ],
  sections: [
    {
      id: "what-is-it",
      h2: "What is Medicaid home care?",
      blocks: [
        "**Medicaid home care** is the umbrella term for services Medicaid pays for in a person's home instead of a hospital or nursing home. It covers two broad kinds of help:",
        {
          ul: [
            "**Medicaid home health care** — skilled nursing, therapy, and home health aide visits, ordered by a doctor as part of a plan of care. Federal law makes home health a mandatory Medicaid benefit, so every state covers it.",
            "**Medicaid personal care services** — hands-on help with daily activities like bathing, dressing, eating, toileting and moving around, often with meals, laundry and light housework. Personal care is an optional state plan benefit, but most states offer it through the state plan, Community First Choice or home and community-based waivers.",
          ],
        },
        "Together they make up **Medicaid home care services**. Unlike Medicare, Medicaid covers ongoing, long-term personal care — the daily help most families actually need. See [does Medicare pay family caregivers](/guides/does-medicare-pay-family-caregivers/) for the difference.",
      ],
    },
    {
      id: "services",
      h2: "Medicaid home care services: what's covered",
      blocks: [
        "Exact coverage depends on the state and program, but a **Medicaid home care program** commonly includes:",
        {
          table: {
            head: ["Service", "What it is", "Who usually provides it"],
            rows: [
              ["Home health (skilled)", "Nursing, therapy, wound care, injections", "Licensed home health agency"],
              ["Home health aide", "Personal care under nurse supervision", "Agency aide"],
              ["Personal care", "Bathing, dressing, meals, mobility", "Agency aide or self-directed worker, often family"],
              ["Homemaker and chore", "Cleaning, laundry, shopping", "Agency or self-directed worker"],
              ["Respite", "Short breaks for the family caregiver", "Agency, adult day or facility"],
              ["Adult day health", "Supervised day program", "Licensed adult day center"],
              ["Home modifications and equipment", "Ramps, grab bars, medical supplies", "Contracted vendors"],
            ],
          },
        },
        "Waivers can add more, like home-delivered meals, emergency response systems and case management. For definitions of each, read [what in-home care is](/guides/what-is-in-home-care/) and [home health vs. home care](/guides/home-health-vs-home-care/).",
      ],
    },
    {
      id: "home-health",
      h2: "Medicaid home health and the Medicaid home health aide",
      blocks: [
        "**Medicaid home health** works a lot like Medicare's: a doctor orders it, a licensed agency provides it, and the plan of care is reviewed regularly. The difference is that Medicaid doesn't require the person to be homebound, and it can continue as long as the need does.",
        "A **Medicaid home health aide** is a certified aide employed by a licensed agency who helps with personal care and simple health tasks under a nurse's supervision. **Home health aide services for Medicaid patients** are often combined with personal care hours. If you're interested in becoming one, see [home health aide](/guides/home-health-aide/) and [caregiver jobs](/guides/caregiver-jobs/). For skilled needs, see [in-home nursing care](/guides/in-home-nursing-care/).",
      ],
    },
    {
      id: "eligibility",
      h2: "Who qualifies for Medicaid home care",
      blocks: [
        "Two tests apply everywhere:",
        {
          ol: [
            "**Financial eligibility.** Income and assets under the state's Medicaid limits. For long-term care, many states use higher income limits than regular Medicaid, and some allow spending down or special trusts.",
            "**Functional need.** An assessment showing the person needs help with daily activities. Waiver programs usually require a nursing-home level of care.",
          ],
        },
        "Some programs are entitlements — anyone who qualifies gets services — while many waivers have limited slots and waitlists. Your state page shows which is which; for example [California](/california/caregiver-program/) (no waitlist), [Florida](/florida/caregiver-program/) (priority-ranked waitlist) or [Texas](/texas/caregiver-program/) (long interest lists).",
      ],
    },
    {
      id: "new-york",
      h2: "New York Medicaid home care eligibility",
      blocks: [
        "New York has one of the largest Medicaid home care programs, and its rules changed in 2025. People applying for personal care or [CDPAP](/guides/cdpap/) for the first time on or after September 1, 2025 generally must:",
        {
          ul: [
            "Qualify for New York Medicaid that covers community-based long-term care.",
            "Meet the \"minimum needs\" requirement: needing at least limited hands-on help with more than two activities of daily living — or, with a dementia or Alzheimer's diagnosis, supervision with more than one.",
            "Need community-based long-term services for more than 120 days to enroll in a managed long-term care (MLTC) plan.",
          ],
        },
        "People already receiving personal care or CDPAP, or continuously enrolled in an MLTC plan, as of September 1, 2025 keep their eligibility under the old rules. In New York City, Medicaid applications go through HRA; elsewhere, through the county Department of Social Services. See [home care in New York](/guides/home-care-new-york/), the [New York caregiver program](/new-york/caregiver-program/), and county pages like [Brooklyn](/new-york/kings/), [Queens](/new-york/queens/) and [Erie County](/new-york/erie/).",
      ],
    },
    {
      id: "michigan",
      h2: "Michigan Medicaid Home Help program",
      blocks: [
        "Michigan's **Medicaid Home Help program** is a good example of a state plan personal care program built around individual caregivers. MDHHS pays for hands-on help with activities of daily living and some instrumental activities like housework and meal preparation, after an adult services worker assesses the need.",
        "The client chooses their own caregiver and is the employer. An individual caregiver — who can be an adult child or another relative, though not a spouse — enrolls in the state's CHAMPS system, passes a background check, and is paid directly by MDHHS. The rate is $17.13 an hour as of January 2026. Home Help is an entitlement with no waitlist.",
        "To apply for the **Michigan Medicaid Home Help program**, contact your county MDHHS office. See the [Michigan caregiver program](/michigan/caregiver-program/) and [Oakland County](/michigan/oakland/).",
      ],
    },
    {
      id: "agencies",
      h2: "Finding home care agencies that accept Medicaid",
      blocks: [
        "If your family wants an agency to provide the care, you'll need **home care agencies that accept Medicaid** — or, for skilled care, **home health agencies that accept Medicaid**. Not every agency does, and the ones that do often have to be in your relative's managed-care plan network.",
        {
          ol: [
            "**Start with the Medicaid plan or case manager.** They have the list of contracted **Medicaid home care agencies**.",
            "**Ask the agency** whether it's enrolled with Medicaid, in your relative's plan, and accepting new clients.",
            "**Check licensing and quality** — see [how to choose a home care agency](/guides/how-to-choose-a-home-care-agency/).",
          ],
        },
        "A **home care that accepts Medicaid** listing online isn't always current, so confirm by phone. The same goes for **home health care that accepts Medicaid**: it's a network question, not just a yes-or-no. When you ask whether an agency is **home health that accepts Medicaid**, also ask about its waitlist for aides. Some agencies call themselves **home health care that takes Medicaid** or **home health that takes Medicaid** but only accept certain plans. Our guides to [home care near me](/guides/home-care-near-me/) and [local home care agencies](/compare/local-home-care-agencies/) can help.",
      ],
    },
    {
      id: "family-provider",
      h2: "Medicaid home health care: a family member as the provider",
      blocks: [
        "This is the part many families miss: Medicaid home care doesn't have to come from a stranger. In all 50 states and DC, at least one program lets the person receiving care choose a relative. There are three ways to become a **paid caregiver through Medicaid**:",
        {
          table: {
            head: ["Route", "How it works", "Examples"],
            rows: [
              ["Self-directed care", "The member hires you; a payroll agency pays you hourly", "[CDPAP](/guides/cdpap/), [IHSS](/guides/ihss/), Michigan Home Help, [IRIS](/wisconsin/iris/)"],
              ["Live-in stipend", "You live together; an agency pays a daily stipend", "[Structured Family Caregiving](/guides/structured-family-caregiving/)"],
              ["Agency employment", "An agency hires and trains you, then assigns you to your relative", "[Agencies that hire family](/guides/home-care-agencies-that-hire-family-members/)"],
            ],
          },
        },
        "So **Medicaid home health care by a family member** is usually personal care through self-direction rather than skilled nursing. A relative can become a **home health aide through Medicaid** by getting certified and working for an agency, but that's the less common route. Being a **caregiver through Medicaid** via self-direction usually needs no certification. Read [consumer-directed care](/guides/consumer-directed-care/) and [how to become a paid caregiver for a family member](/guides/become-a-paid-caregiver-for-a-family-member/).",
        {
          callout: {
            tone: "money",
            title: "What family providers earn",
            text: "The same as any worker in the program. Of the 51 jurisdictions, 29 publish hourly rates from about $11 to $29.04. See [family caregiver pay rates](/guides/family-caregiver-pay-rates/).",
          },
        },
      ],
    },
    {
      id: "who-can-be-paid",
      h2: "Which relatives can be paid",
      blocks: [
        "Adult children, grandchildren, siblings and most other relatives can be paid almost everywhere. Two relationships have extra rules:",
        {
          ul: [
            "**Spouses** can be paid in 22 states, in some programs in 13 more, and not at all in 16 — see the spouse table in [Medicaid family caregiver programs](/guides/medicaid-family-caregiver-program/).",
            "**Parents of minor children** can be paid broadly in 13 states and in some programs in 16 more — see [paid parent caregivers](/guides/paid-parent-caregiver/).",
          ],
        },
      ],
    },
    {
      id: "how-to-apply",
      h2: "How to get home care through Medicaid",
      blocks: [
        "Getting **home care through Medicaid** — or **home health care through Medicaid** — follows the same order in most states:",
        {
          ol: [
            "**Apply for Medicaid**, marking that you need long-term care, if your relative isn't enrolled.",
            "**Request a home care assessment** from the state, county, Area Agency on Aging or managed-care plan.",
            "**Choose how care is delivered** — an agency, self-direction or a live-in program.",
            "**If family will provide care**, enroll the caregiver with the payroll agency.",
            "**Reassess when needs change.** Hours can go up after a decline.",
          ],
        },
        "Sunroom Care helps families through these steps at no cost — we're paid by the program, not by you, and we're not a state agency. [Check eligibility in two minutes](/qualify/).",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "See which Medicaid home care program fits." },
            { href: "/guides/medicaid-family-caregiver-program/", title: "Programs by state", text: "Every Medicaid program that pays family." },
            { href: "/guides/home-care-agencies-that-hire-family-members/", title: "Agencies that hire family", text: "The agency route to paid family care." },
            { href: "/guides/cost-of-in-home-care/", title: "Cost of in-home care", text: "What care costs when Medicaid doesn't pay." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Does Medicaid pay for home care?",
      a: "Yes. Every state covers Medicaid home health, and most cover personal care through the state plan or waivers for people who qualify financially and need help with daily activities.",
    },
    {
      q: "What is the difference between Medicaid home health and personal care?",
      a: "Home health is skilled care ordered by a doctor, such as nursing and therapy, and is required in every state. Personal care is hands-on help with daily activities and is optional, though widely offered.",
    },
    {
      q: "Can a family member be paid through Medicaid home care?",
      a: "Yes. Every state has at least one program where the person receiving care can choose a relative, usually through self-direction.",
    },
    {
      q: "How do I find home care agencies that accept Medicaid?",
      a: "Ask your relative's Medicaid plan or case manager for its contracted agencies, then confirm with each agency that it is enrolled, in network and taking new clients.",
    },
    {
      q: "What changed in New York in 2025?",
      a: "Since September 1, 2025, most new applicants for personal care or CDPAP must meet minimum needs rules, such as needing hands-on help with more than two daily activities, or supervision with more than one for people with dementia.",
    },
    {
      q: "Does Michigan's Home Help program pay family?",
      a: "Yes. The client can choose an adult child or other relative, though not a spouse. The caregiver enrolls with MDHHS and is paid directly.",
    },
  ],
  related: [
    "/guides/medicaid-family-caregiver-program/",
    "/guides/does-medicare-pay-family-caregivers/",
    "/guides/home-care-agencies-that-hire-family-members/",
  ],
  sources: [
    { label: "Medicaid.gov: mandatory and optional Medicaid benefits", url: "https://www.medicaid.gov/medicaid/benefits/mandatory-optional-medicaid-benefits" },
    { label: "Medicaid.gov: self-directed services", url: "https://www.medicaid.gov/medicaid/long-term-services-supports/self-directed-services" },
    { label: "42 CFR 440.70: Medicaid home health services (no homebound requirement)", url: "https://www.law.cornell.edu/cfr/text/42/440.70" },
    { label: "NY DOH: minimum needs requirement", url: "https://www.health.ny.gov/health_care/managed_care/policy/min_needs.htm" },
    { label: "NY DOH MLTC Policy 25-04", url: "https://www.health.ny.gov/health_care/medicaid/redesign/mrt90/mltc_policy/2025/25-04.htm" },
    { label: "Michigan MDHHS: Home Help program", url: "https://www.michigan.gov/mdhhs/doing-business/providers/providers/other/homehelp" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/rural-home.webp", alt: "A modest family home on a quiet rural road" },
  keywords: [
    "medicaid home health care",
    "medicaid home care",
    "medicaid personal care services",
    "medicaid home care services",
    "medicaid home health",
    "medicaid home health aide",
    "medicaid home care agencies",
    "home health agencies that accept medicaid",
    "home health care that accepts medicaid",
    "home care agencies that accept medicaid",
    "home health care that takes medicaid",
    "medicaid home help program",
    "home health that accepts medicaid",
    "home health that takes medicaid",
    "medicaid home care program",
    "home care that accepts medicaid",
    "michigan medicaid home help program",
    "caregiver through medicaid",
    "home care through medicaid",
    "home health care through medicaid",
  ],
};

export default guide;
