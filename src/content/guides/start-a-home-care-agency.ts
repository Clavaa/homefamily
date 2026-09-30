import type { Guide } from "../types";

const guide: Guide = {
  slug: "start-a-home-care-agency",
  section: "guides",
  cluster: "careers",
  title: "How to Start a Home Care Agency: The Real Picture",
  description:
    "Starting a non-medical home care or home health agency: state licensing, Medicare certification, Medicaid enrollment, insurance, staffing and what to expect.",
  h1: "How to start a home care agency",
  short: "Start a home care agency",
  eyebrow: "Non-medical care vs. home health",
  lead: "Many caregivers and families who've lived through home care think about starting an agency of their own. It can be done, but the rules depend heavily on which kind of agency you mean and which state you're in. Here's the factual version: licensing, Medicare and Medicaid, insurance, staffing and the parts that are harder than they look.",
  answer:
    "To start a home care agency, first decide between non-medical home care (personal care and companionship) and home health (skilled care ordered by a doctor). Then meet your state's licensing rules. Home health agencies that bill Medicare must also be certified, enroll with CMS and prove they have reserve operating funds. Medicaid work requires enrolling with your state.",
  takeaways: [
    "Non-medical home care and home health are different businesses with different rules and payers.",
    "Licensing is set by each state: some license non-medical agencies, some don't, and some limit new home health agencies with certificate-of-need laws.",
    "Medicare-certified home health agencies must meet federal conditions of participation, pass a survey or accreditation and hold initial reserve operating funds.",
    "Medicaid is the biggest payer of personal care, and requires state enrollment and electronic visit verification.",
    "Hiring and keeping aides is usually the hardest part of the business.",
  ],
  sections: [
    {
      id: "two-kinds",
      h2: "Home care business vs. home health care business",
      blocks: [
        "Before anything else, be clear which **home care business** you're starting. The two kinds sound alike but are regulated and paid for very differently.",
        {
          table: {
            head: ["", "Non-medical home care", "Home health"],
            rows: [
              ["What it provides", "Help with bathing, dressing, meals, mobility, companionship, errands", "Skilled nursing, therapy and aide visits ordered by a doctor"],
              ["Main payers", "Private pay, Medicaid personal care, long-term care insurance, VA", "Medicare, Medicaid, private insurance"],
              ["Licensing", "Varies by state — from a full license to none", "State license plus, for Medicare, federal certification"],
              ["Clinical staff", "Usually not required", "Registered nurses and therapists required"],
            ],
          },
        },
        "A **home health care business** (some write it **home healthcare business**) is a medical provider. A non-medical **caregiver business** is not. Our guide to [home health vs. home care](/guides/home-health-vs-home-care/) explains the difference from the client's side, and [non-medical home care](/guides/non-medical-home-care/) covers what those services include.",
      ],
    },
    {
      id: "non-medical",
      h2: "Starting a non-medical home care agency",
      blocks: [
        "**Starting a non medical home care agency** is the more common path, because it doesn't need nurses or Medicare certification. The steps are broadly the same everywhere, though the details are set by your state:",
        {
          ol: [
            "**Check your state's licensing rules.** Some states require a home care license and inspection; others only require a business license. California, for example, licenses home care organizations and requires their aides to be on the state's Home Care Aide Registry after a background check.",
            "**Form the business** and get an employer identification number from the IRS.",
            "**Buy insurance** — see below.",
            "**Write policies** for hiring, background checks, training, client care plans and complaints.",
            "**Decide on payers.** Private pay only, or also Medicaid, the VA and long-term care insurance.",
            "**Hire and train caregivers**, then start marketing to clients.",
          ],
        },
        "Because rules differ so much, check with your state health or human services department before you spend money. Your state page is a good starting point for which Medicaid programs operate there — for example [Texas](/texas/), [Florida](/florida/) or [Pennsylvania](/pennsylvania/).",
      ],
    },
    {
      id: "home-health",
      h2: "How to start a home health agency",
      blocks: [
        "To **start a home health agency** that bills Medicare, you take on a federal layer on top of the state license:",
        {
          ul: [
            "**Conditions of participation.** Medicare-certified home health agencies must meet the federal rules in 42 CFR Part 484 — covering patient rights, care planning, clinical records, staffing and aide training (at least 75 hours for home health aides).",
            "**Survey or accreditation.** You prove compliance through a state survey or through a CMS-approved accrediting organization, such as ACHC, CHAP or The Joint Commission, which gives \"deemed status.\"",
            "**Medicare enrollment.** You enroll with CMS as an institutional provider.",
            "**Initial reserve operating funds.** Under 42 CFR 489.28, a new home health agency must show it has enough money to operate for its first three months after Medicare billing privileges are granted. CMS can deny or revoke billing privileges if it doesn't.",
          ],
        },
        "**Opening a home health agency** also depends on your state. Some states require a certificate of need before a new home health agency can open, which can limit new entrants. Ask your state health department first.",
      ],
    },
    {
      id: "medicaid",
      h2: "Medicaid enrollment for a home care agency business",
      blocks: [
        "For most personal care, Medicaid is the largest payer. A **home care agency business** that wants Medicaid clients enrolls with the state Medicaid agency and, in many states, contracts with the managed-care plans that run long-term care.",
        "Medicaid also requires electronic visit verification for personal care and home health visits under the 21st Century Cures Act, so your caregivers will clock in and out through an EVV system. See [caregiver apps](/guides/caregiver-apps/).",
        "In many states, Medicaid clients can choose **self-direction** instead of an agency, hiring their own caregiver — often a relative. That's a big share of the market in states like New York, California and Wisconsin. Read about [consumer-directed care](/guides/consumer-directed-care/), [CDPAP](/guides/cdpap/), [IHSS](/guides/ihss/) and [IRIS](/wisconsin/iris/) to understand what you're competing with. Some agencies build a business around families instead — see [home care agencies that hire family members](/guides/home-care-agencies-that-hire-family-members/) and [Structured Family Caregiving](/guides/structured-family-caregiving/).",
      ],
    },
    {
      id: "insurance",
      h2: "Insurance for a home care start up business",
      blocks: [
        "Every **home care start up business** needs insurance that matches the risk of working in clients' homes. The usual pieces are:",
        {
          ul: [
            "**General liability** for injuries and property damage.",
            "**Professional liability** for mistakes in care.",
            "**Workers' compensation**, which most states require once you have employees — and aides have a high injury risk from lifting and transfers.",
            "**Bonding or crime coverage** to protect clients against theft.",
            "**Auto coverage** if caregivers drive clients.",
          ],
        },
        "Medicaid programs, the VA and referral partners may require proof of certain coverage before they'll contract with you. Ask each payer what it requires.",
      ],
    },
    {
      id: "staffing",
      h2: "Staffing: the hardest part of starting a caregiver business",
      blocks: [
        "Owners consistently say that finding clients is easier than finding caregivers. The Bureau of Labor Statistics projects about 760,500 openings a year for home health and personal care aides, with a median wage of $17.21 an hour in May 2025. You'll compete for the same workers as every other agency.",
        "When **starting a caregiver business**, plan for recruiting, background checks, training and retention from day one. Our [caregiver jobs guide](/guides/caregiver-jobs/) shows the job from the worker's side — what they ask about pay, hours, travel and training.",
      ],
    },
    {
      id: "pricing",
      h2: "Pricing: the money side of starting a home care business",
      blocks: [
        "Your prices have to cover wages, payroll taxes, insurance, training, scheduling software, office costs and marketing. For context, CareScout's 2025 Cost of Care Survey puts the national median price for non-medical in-home care at $35 an hour, while the BLS median aide wage is about half that.",
        "Medicaid pays a set rate, which you can't raise. Private pay rates are yours to set, but families compare. Model both before you commit, and see what families face in [what in-home care costs](/guides/cost-of-in-home-care/) and [private pay home care](/guides/private-pay-home-care/).",
      ],
    },
    {
      id: "startup-steps",
      h2: "Home health care business start up: a checklist",
      blocks: [
        "A condensed **home health care business start up** checklist, for a Medicare-certified agency:",
        {
          ol: [
            "Confirm your state license requirements and whether a certificate of need applies.",
            "Form the business, open a bank account and set aside initial reserve operating funds.",
            "Hire an administrator and clinical manager who meet federal and state qualifications.",
            "Write policies that meet the conditions of participation in 42 CFR Part 484.",
            "Get your state license.",
            "Enroll in Medicare and arrange a state survey or accreditation.",
            "Enroll in Medicaid and with managed-care plans if you'll serve Medicaid patients.",
          ],
        },
        "The **home health business start up** timeline is usually much longer than for a non-medical agency, because of the survey and enrollment steps.",
      ],
    },
    {
      id: "franchise",
      h2: "Opening a home care agency: franchise or independent?",
      blocks: [
        "**Opening a home care agency** can mean buying a franchise or building your own. Franchises offer a brand, systems and training for a fee and ongoing royalties; independents keep control and margins but build everything themselves.",
        "If you're weighing it, study how established agencies present themselves: our independent comparisons of [Home Instead](/compare/home-instead/), [Right at Home](/compare/right-at-home/), [Home Helpers](/compare/home-helpers/) and [Patriot Home Care](/compare/patriot-home-care/), and the overview of [local home care agencies](/compare/local-home-care-agencies/).",
      ],
    },
    {
      id: "realistic",
      h2: "Is it worth it to start a home care agency?",
      blocks: [
        "People who **start a home care agency** often do it because they've seen how hard it is for families to find reliable help. The need is real. So are the challenges: thin margins on Medicaid work, a tight labor market, compliance work and slow early growth while you build referrals.",
        "It helps to spend time working in the field first — as an aide, scheduler or care coordinator — so you understand the job and the clients. If you've been a family caregiver, you already know what families need. For many, that's where a new agency starts.",
      ],
    },
    {
      id: "family-alternative",
      h2: "If you mainly want to be paid to care for a relative",
      blocks: [
        "Some people look into agencies because they want to be paid to care for their own parent or spouse. You usually don't need an agency for that. Medicaid programs in every state can pay a relative directly through self-direction.",
        "Read [how to get paid to care for a family member](/guides/get-paid-to-care-for-family-member/), see your state's caregiver program — for example [New York](/new-york/caregiver-program/), [California](/california/caregiver-program/) or [Ohio](/ohio/caregiver-program/) — or [check eligibility](/qualify/). All states are listed on the [states page](/states/).",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/guides/caregiver-jobs/", title: "Caregiver jobs", text: "The job from the aide's side: pay and training." },
            { href: "/guides/home-health-vs-home-care/", title: "Home health vs. home care", text: "The difference that shapes your business." },
            { href: "/guides/how-to-choose-a-home-care-agency/", title: "How families choose", text: "What families look for in an agency." },
            { href: "/qualify/", title: "Paid family care", text: "Get paid to care for a relative instead." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Do I need a license to start a home care agency?",
      a: "It depends on your state. Some states license non-medical home care agencies and inspect them, others require only a business license. Home health agencies need a state license in most states, and Medicare certification to bill Medicare.",
    },
    {
      q: "What's the difference between a home care and a home health agency?",
      a: "Home care provides non-medical help such as bathing, dressing and meals. Home health provides skilled nursing and therapy ordered by a doctor, and can be certified to bill Medicare.",
    },
    {
      q: "Can a non-medical home care agency bill Medicare?",
      a: "No. Medicare does not cover non-medical personal care when that is the only care needed. Non-medical agencies are paid by families, Medicaid, the VA and long-term care insurance.",
    },
    {
      q: "What does Medicare require of a new home health agency?",
      a: "It must meet the federal conditions of participation, pass a state survey or accreditation by a CMS-approved organization, enroll with CMS and show initial reserve operating funds for its first three months.",
    },
    {
      q: "Do home care agencies have to use electronic visit verification?",
      a: "For Medicaid personal care and home health services, yes. The 21st Century Cures Act requires states to use EVV for those visits.",
    },
    {
      q: "Do I need to start an agency to be paid to care for my parent?",
      a: "Usually not. Medicaid self-directed programs in every state can pay a relative directly, without an agency.",
    },
  ],
  related: [
    "/guides/caregiver-jobs/",
    "/guides/home-health-vs-home-care/",
    "/guides/non-medical-home-care/",
  ],
  sources: [
    { label: "CMS: home health agencies — certification and compliance", url: "https://www.cms.gov/medicare/health-safety-standards/certification-compliance/home-health-agencies" },
    { label: "CMS: accrediting organizations", url: "https://www.cms.gov/medicare/health-safety-standards/quality-safety-oversight-general-information/accrediting-organizations-aos" },
    { label: "HHS: home health agency capitalization requirements (42 CFR 489.28)", url: "https://www.hhs.gov/guidance/document/home-health-agency-hha-capitalization-requirements" },
    { label: "42 CFR 484.80 — home health aide training requirements", url: "https://www.law.cornell.edu/cfr/text/42/484.80" },
    { label: "Medicaid.gov: electronic visit verification", url: "https://www.medicaid.gov/medicaid/home-community-based-services/guidance/electronic-visit-verification-evv" },
    { label: "BLS Occupational Outlook Handbook: home health and personal care aides", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" },
    { label: "CareScout 2025 Cost of Care Survey (press release)", url: "https://investor.genworth.com/news-events/press-releases/detail/1054" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/qualify-laptop.webp", alt: "A person reviews business plans on a laptop at a kitchen table" },
  keywords: [
    "home care business",
    "home health care business",
    "home healthcare business",
    "caregiver business",
    "opening a home health agency",
    "starting home care business",
    "home care start up business",
    "start a home care agency",
    "start a home health agency",
    "starting a caregiver business",
    "opening a home care agency",
    "starting a non medical home care agency",
    "home health care business start up",
    "home health business start up",
    "home care agency business",
  ],
};

export default guide;
