import type { Guide } from "../types";

const guide: Guide = {
  slug: "ppl-public-partnerships",
  section: "compare",
  cluster: "compare",
  title: "PPL (Public Partnerships): A Guide for Caregivers",
  description:
    "What Public Partnerships (PPL) does for a family caregiver: enrollment, timesheets, pay and benefits, including New York CDPAP since 2025. Independent guide.",
  h1: "PPL (Public Partnerships LLC): what it does for a family caregiver",
  short: "PPL (Public Partnerships)",
  eyebrow: "Independent guide",
  lead: "If you're being paid to care for a relative through a self-directed Medicaid program, there's a good chance PPL runs your payroll. Since 2025 it's the only payroll agent for New York's CDPAP. Here is what PPL does, what it doesn't, and how to get from enrollment to your first paycheck.",
  answer:
    "Public Partnerships LLC (PPL) is a financial management services company that runs payroll for self-directed Medicaid programs. A PPL caregiver is hired by the person receiving care; PPL handles the enrollment paperwork, background checks, timesheets, tax withholding and pay. Since April 2025 PPL has been New York's only CDPAP fiscal intermediary.",
  takeaways: [
    "PPL is a payroll and paperwork agent — a \"fiscal intermediary\" or \"financial management services\" provider — not a home care agency.",
    "PPL says it supports about 50 self-directed programs in 18 states.",
    "In New York, every CDPAP consumer and personal assistant must work through PPL since 2025.",
    "New York CDPAP personal assistants are paid weekly, at least $18.65–$20.65 an hour in 2026 depending on region.",
    "Sunroom Care is independent and not affiliated with PPL. For PPL's phone numbers and portal, use pplfirst.com.",
  ],
  sections: [
    {
      id: "what-is-ppl",
      h2: "What is PPL, and what does a PPL caregiver do?",
      blocks: [
        "**Public Partnerships LLC**, usually called **PPL**, is a financial management services provider for self-directed care. In a self-directed Medicaid program, the person who needs care is the employer: they choose, hire and supervise their own caregiver, often a relative. But they don't want to run payroll, withhold taxes or file employer forms. That's PPL's job.",
        "So a **PPL caregiver** isn't a PPL employee in the usual sense. You work for the person you care for. PPL is the go-between that makes sure you're enrolled, your hours are recorded and you're paid correctly. PPL describes itself as supporting about 50 self-directed programs in 18 states, for more than 700,000 participants and caregivers combined.",
        {
          callout: {
            tone: "info",
            title: "Independent guide",
            text: "Sunroom Care is not PPL and is not affiliated with it. We explain what PPL publishes; for your account, pay or login, use PPL's official site, pplfirst.com.",
          },
        },
      ],
    },
    {
      id: "what-ppl-does",
      h2: "What PPL does for you, step by step",
      blocks: [
        {
          table: {
            head: ["Stage", "What PPL handles", "What you or your relative do"],
            rows: [
              ["Enrollment", "Collects hiring forms, runs background checks where required, sets up the employer and employee records", "Fill in and sign the forms; provide ID for the I-9"],
              ["Timesheets", "Provides the electronic visit verification (EVV) app, web portal or phone line", "Clock in and out for each shift; your relative approves the hours"],
              ["Pay", "Processes payroll, withholds taxes, pays by direct deposit, pay card or check", "Choose a payment method and keep bank details current"],
              ["Taxes", "Files employer tax returns and issues your W-2", "Use the W-2 when you file your own taxes"],
              ["Benefits (where offered)", "Administers benefits the program provides", "Enroll if eligible"],
            ],
          },
        },
        "What PPL doesn't do: it doesn't decide whether your relative qualifies for Medicaid, how many hours they're approved for, or whether you're allowed to be the caregiver. Those come from the state program and your relative's assessment.",
      ],
    },
    {
      id: "new-york-cdpap",
      h2: "PPL and New York CDPAP since 2025",
      blocks: [
        "New York's Consumer Directed Personal Assistance Program ([CDPAP](/guides/cdpap/)) used to work with hundreds of separate fiscal intermediaries. In 2024–2025 the state moved to a single statewide fiscal intermediary and chose PPL. From April 1, 2025, PPL became the only entity authorized to provide CDPAP fiscal intermediary services. A federal court order later gave consumers until May 15, 2025 and personal assistants until June 6, 2025 to register.",
        "PPL also works with CDPAP \"facilitators\" — organizations that subcontract with PPL to help consumers and personal assistants in their region. You can register through a facilitator or directly with PPL.",
        "The switch has been contested. A former fiscal intermediary sued over the selection in 2024, and in June 2026 the U.S. Department of Justice sued New York and PPL, alleging the contract was improperly awarded and overbilled. None of this changes the practical steps: as of today, New York personal assistants still register and get paid through PPL. Read more on the [New York caregiver program](/new-york/caregiver-program/) page and our [FreedomCare comparison](/compare/freedomcare/).",
      ],
    },
    {
      id: "registering",
      h2: "How to register with PPL in New York",
      blocks: [
        "According to PPL's New York CDPAP FAQ, personal assistants can register by phone, online through the **PPL@Home** portal, by email, in person by appointment, or through an approved CDPAP facilitator. The paperwork typically includes:",
        {
          ul: [
            "An offer letter and the Personal Assistant Agreement",
            "IRS Form W-4 and New York Form IT-2104",
            "USCIS Form I-9, with identity and work-authorization documents",
            "A payment method form (direct deposit or pay card)",
            "A health assessment",
          ],
        },
        "Your relative, the consumer, also registers as the employer. Until both sides are complete, PPL can't pay you, so finish your forms quickly and keep copies.",
      ],
    },
    {
      id: "timesheets",
      h2: "Timesheets and EVV: Time4Care",
      blocks: [
        "Medicaid requires electronic visit verification (EVV) for personal care. In New York, PPL's EVV app is called **Time4Care**. You clock in and out on the app, or through the PPL@Home portal, and there's an offline mode that syncs later if you don't have reliable internet. PPL also offers a phone option for entering and approving hours.",
        "Tips that save families headaches:",
        {
          ul: [
            "Clock in when you start and out when you finish — don't batch-enter hours at the end of the week.",
            "Make sure your relative (or their representative) approves each timesheet before the deadline.",
            "Never log more hours than your relative's plan authorizes. Those hours won't be paid.",
          ],
        },
      ],
    },
    {
      id: "pay",
      h2: "How much PPL caregivers are paid, and when",
      blocks: [
        "PPL processes pay; it doesn't set the rate. In New York, the state sets minimum base wages. From January 1, 2026:",
        {
          table: {
            caption: "New York CDPAP minimum base wages through PPL (2026)",
            head: ["Region", "Minimum hourly wage"],
            rows: [
              ["New York City", "$20.65"],
              ["Nassau, Suffolk and Westchester", "$20.05"],
              ["Rest of state", "$18.65"],
            ],
          },
        },
        "PPL's New York FAQ says the pay schedule is weekly, on Thursdays, by direct deposit, a Wisely pay card or a mailed check. The first direct deposit can take one or two pay periods to start. See [New York caregiver pay](/new-york/caregiver-pay/) and county pages for [Brooklyn](/new-york/kings/), [the Bronx](/new-york/bronx/), [Queens](/new-york/queens/), [Nassau](/new-york/nassau/) and [Suffolk](/new-york/suffolk/).",
        {
          callout: {
            tone: "money",
            title: "Benefits for New York personal assistants",
            text: "PPL lists safe and sick leave, holiday pay, a health benefits plan for eligible full-time workers, 401(k) and 401(a) plans, paid training and paid family leave for New York CDPAP personal assistants.",
          },
        },
      ],
    },
    {
      id: "other-states",
      h2: "PPL in other states",
      blocks: [
        "Outside New York, PPL is one of several payroll agents, and which one you use often depends on your relative's managed care plan. From our state data:",
        {
          ul: [
            "**New Jersey** — in the Personal Preference Program, PPL is the fiscal intermediary for members of several managed care plans, while another company serves others. A spouse can be the paid caregiver in New Jersey. See [New Jersey](/new-jersey/caregiver-program/).",
            "**Virginia** — consumer-directed care uses PPL or another fiscal/employer agent depending on the member's plan. See [Virginia](/virginia/caregiver-program/).",
            "**West Virginia** — PPL was the Personal Options payroll agent until 2024, when another company took over. See [West Virginia](/west-virginia/caregiver-program/).",
          ],
        },
        "For the programs PPL currently serves, check the state list on pplfirst.com, or ask your relative's case manager which payroll agent your program uses. Other states use different companies entirely — Tempus Unlimited in [Pennsylvania](/pennsylvania/caregiver-program/), for example, and Acumen in [Oklahoma](/oklahoma/caregiver-program/).",
      ],
    },
    {
      id: "compare",
      h2: "PPL vs. a home care agency vs. Sunroom Care",
      blocks: [
        "People often confuse these three roles. They do different jobs, and a family may deal with more than one.",
        {
          table: {
            head: ["", "PPL (payroll agent)", "Home care agency", "Sunroom Care"],
            rows: [
              ["Who employs the caregiver", "Your relative; PPL runs payroll", "The agency", "Nobody — we don't employ caregivers"],
              ["Chooses the caregiver", "Your relative", "The agency assigns one", "—"],
              ["Supervises care", "No", "Yes", "No"],
              ["Handles enrollment paperwork", "PPL's own onboarding", "Agency hiring", "Yes — we help families find the program and complete enrollment"],
              ["Cost to family", "Paid by the program", "Paid by the program or privately", "Free — paid by the program, never the family"],
            ],
          },
        },
        "If you want an agency's supervision and backup, read [home care agency vs. paid family caregiver](/compare/home-care-agency-vs-paid-family-caregiver/). If you want your relative in charge, self-direction — with PPL or another payroll agent — is the route. See [consumer-directed care](/guides/consumer-directed-care/).",
      ],
    },
    {
      id: "problems",
      h2: "When a PPL paycheck is late or wrong",
      blocks: [
        "Most pay problems come from a few causes: a missing form, an unapproved timesheet, hours outside the authorization, or bank details that haven't taken effect yet. Check those first in PPL@Home. If you still need help, contact PPL through the phone numbers and email on [pplfirst.com](https://pplfirst.com/) — we don't reprint them because they vary by state and program. In New York, your relative's care manager or managed care plan can also help if the problem is with the authorized hours.",
      ],
    },
    {
      id: "getting-started",
      h2: "Getting started as a paid family caregiver",
      blocks: [
        "PPL is the last step, not the first. Every state has at least one self-directed program; the [states list](/states/) shows yours, and [family caregiver pay rates](/guides/family-caregiver-pay-rates/) shows what each one reports paying. A note on taxes: your PPL pay is usually reported on a W-2, but if you live with the person you care for, the IRS difficulty-of-care rule may make some or all of it excludable from income. Ask a tax preparer before you file. Your relative needs Medicaid, an assessment and a self-directed option before PPL enrollment matters. Start with [how to get paid to care for a family member](/guides/get-paid-to-care-for-family-member/), check [who can be a paid caregiver](/guides/become-a-paid-caregiver-for-a-family-member/), or take the [two-minute eligibility check](/qualify/).",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/guides/cdpap/", title: "CDPAP explained", text: "New York's self-directed program, step by step." },
            { href: "/new-york/caregiver-pay/", title: "New York caregiver pay", text: "2026 wages by region." },
            { href: "/compare/freedomcare/", title: "FreedomCare", text: "A former CDPAP intermediary, compared." },
            { href: "/qualify/", title: "Check eligibility", text: "See which programs fit your relative." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is a PPL caregiver?",
      a: "A caregiver hired by a person in a self-directed Medicaid program, whose payroll is run by Public Partnerships LLC. You work for the person you care for; PPL handles your paperwork and pay.",
    },
    {
      q: "Is PPL the only CDPAP option in New York?",
      a: "Yes. Since April 2025, PPL has been the only fiscal intermediary for CDPAP. Facilitators can help with registration but work under PPL.",
    },
    {
      q: "How often does PPL pay in New York?",
      a: "Weekly, on Thursdays, according to PPL's New York FAQ. You can choose direct deposit, a pay card or a paper check.",
    },
    {
      q: "Does PPL decide how many hours I get?",
      a: "No. Your relative's approved hours come from their Medicaid assessment and plan. PPL pays for approved hours that are recorded and approved.",
    },
    {
      q: "Can I be paid by PPL to care for my spouse?",
      a: "Not in New York CDPAP. In some other states, such as New Jersey, a spouse can be paid. The state program sets the rule, not PPL.",
    },
    {
      q: "Is Sunroom Care part of PPL?",
      a: "No. Sunroom Care is independent, free to families and helps them find and enroll in the right program.",
    },
  ],
  related: [
    "/guides/cdpap/",
    "/compare/freedomcare/",
    "/guides/consumer-directed-care/",
  ],
  sources: [
    { label: "PPL: official site (programs, scale)", url: "https://pplfirst.com/" },
    { label: "PPL: New York CDPAP FAQ (registration, Time4Care, pay, wages, benefits)", url: "https://pplfirst.com/new-york-cdpap-frequently-asked-questions/" },
    { label: "NY DOH: CDPAP statewide fiscal intermediary policy", url: "https://www.health.ny.gov/health_care/medicaid/redesign/mrt90/mltc_policy/2025/25-03.htm" },
    { label: "Holland & Knight: preliminary injunction and CDPAP transition dates", url: "https://www.hklaw.com/en/insights/publications/2025/04/preliminary-injunction-agreement-balances-cdpap-transition" },
    { label: "U.S. Department of Justice: suit over New York CDPAP contract (June 2026)", url: "https://www.justice.gov/opa/pr/department-justice-files-suit-stop-ongoing-medicaid-fraud-related-new-yorks-10-billion-home" },
    { label: "IRS: certain Medicaid waiver payments may be excludable from income", url: "https://www.irs.gov/individuals/certain-medicaid-waiver-payments-may-be-excludable-from-income" },
    { label: "New Jersey DMAHS: Personal Preference Program FAQ", url: "https://www.nj.gov/humanservices/dmahs/clients/PPP_FAQ.pdf" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/caregiver-phone.webp", alt: "A caregiver checks a timesheet app on her phone" },
  keywords: ["ppl caregiver"],
};

export default guide;
