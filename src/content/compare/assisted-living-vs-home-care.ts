import type { Guide } from "../types";

const guide: Guide = {
  slug: "assisted-living-vs-home-care",
  section: "compare",
  cluster: "compare",
  title: "Assisted Living vs. Home Care vs. Nursing Home (2026)",
  description:
    "Assisted living, home care or a nursing home? Compare 2025 national costs, what Medicaid and Medicare cover, and when paid family care keeps someone home.",
  h1: "Assisted living vs. home care vs. nursing home",
  short: "Assisted living vs. home care",
  eyebrow: "Costs and coverage compared",
  lead: "When a parent or spouse can't manage alone anymore, families usually weigh three options: bring help into the home, move to assisted living, or move to a nursing home. The right answer depends on care needs, money and what Medicaid will pay for. Here's an honest side-by-side.",
  answer:
    "Home care brings help to your relative's home by the hour. Assisted living is a residence with meals and personal care, at a national median of $6,200 a month in 2025. A nursing home adds 24-hour skilled nursing, at $9,581 a month for a semi-private room. Medicaid covers nursing homes and home care; in assisted living it can pay for services but not room and board.",
  takeaways: [
    "2025 national medians: $35 an hour for in-home care, $6,200 a month for assisted living, $9,581 a month for a semi-private nursing home room.",
    "Medicare doesn't pay for long-term care in any of the three settings.",
    "Medicaid must cover nursing home care. It can pay for home care and for services in assisted living, but not assisted living rent and meals.",
    "Home care costs less than a facility at part-time hours; around-the-clock hired care can cost more than a nursing home.",
    "A paid family caregiver can keep someone at home longer without the family paying agency rates.",
  ],
  sections: [
    {
      id: "three-options",
      h2: "Assisted living vs. home care vs. nursing home: the basics",
      blocks: [
        "**Home care** means a caregiver comes to your relative's home to help with bathing, dressing, meals, medication reminders and getting around. It can be a few hours a week or around the clock. See [what in-home care is](/guides/what-is-in-home-care/).",
        "**Assisted living** is a residential community — usually a private apartment or room — with meals, housekeeping, activities and help with daily tasks. Staff are on site, but it isn't a medical setting.",
        "**A nursing home** (skilled nursing facility) provides 24-hour care with licensed nurses on staff. It's for people with serious medical needs or who need hands-on help at all hours.",
        "A fourth option runs underneath the first: **paid family care at home**, where Medicaid pays a relative to be the caregiver. It's the same home care benefit, delivered by someone your relative already trusts.",
      ],
    },
    {
      id: "costs",
      h2: "Cost of assisted living vs. home care vs. nursing home",
      blocks: [
        "CareScout's 2025 Cost of Care Survey, collected from providers from July to November 2025, reports these national medians:",
        {
          table: {
            caption: "National median costs, CareScout 2025 Cost of Care Survey",
            head: ["Type of care", "Median cost", "Roughly per year"],
            rows: [
              ["In-home non-medical caregiver", "$35 an hour", "$80,080 at 44 hours a week"],
              ["Adult day health care", "$95 a day", "Depends on days used"],
              ["Assisted living community", "$6,200 a month", "$74,400"],
              ["Nursing home, semi-private room", "$9,581 a month", "$114,972"],
              ["Nursing home, private room", "$10,798 a month", "$129,576"],
            ],
          },
        },
        "Costs vary widely by state and city. For a closer look at home care prices, read [the cost of in-home care](/guides/cost-of-in-home-care/) and [private pay home care](/guides/private-pay-home-care/).",
        {
          callout: {
            tone: "money",
            title: "The hours decide the comparison",
            text: "At 20 hours a week, $35-an-hour home care is about $3,030 a month — well under assisted living. At 24 hours a day, hired home care would run far above a nursing home. Most families are somewhere in between.",
          },
        },
      ],
    },
    {
      id: "medicare",
      h2: "What Medicare covers in each setting",
      blocks: [
        "Medicare is clear on this: it **doesn't pay for long-term care**. Most long-term care is non-medical help with daily activities, and Medicare and Medigap don't cover it, whether at home, in assisted living or in a nursing home.",
        "Medicare does cover limited, short-term skilled care — for example, a stay in a skilled nursing facility after a qualifying hospital stay, or part-time home health visits from a Medicare-certified agency. Those are recovery services, not ongoing custodial care. Medicare also doesn't pay family caregivers — see [does Medicare pay family caregivers?](/guides/does-medicare-pay-family-caregivers/)",
      ],
    },
    {
      id: "medicaid",
      h2: "What Medicaid covers: home care, assisted living and nursing homes",
      blocks: [
        "Medicaid is the program many families turn to for long-term care once savings run low, but it treats each setting differently. Your relative must qualify on income, assets and care needs, and the rules are set state by state within federal limits.",
        {
          table: {
            head: ["Setting", "Medicaid coverage", "Notes"],
            rows: [
              ["Nursing home", "Mandatory benefit in every state", "Covers room, board and care for people who qualify"],
              ["Home care", "Home health is mandatory; personal care and waiver services are optional, and each state chooses what to offer", "Often includes a self-directed option that can pay family"],
              ["Assisted living", "Services only, through waivers or state plan options where offered", "Room and board is not paid by Medicaid; your relative pays rent from income"],
            ],
          },
        },
        "The assisted living gap matters. Federal waiver rules let states pay for home and community-based services but not room and board, so even with Medicaid, your relative usually pays the rent-and-meals part of assisted living out of their own income. Not every assisted living community accepts Medicaid for services, either.",
        "Read more in [Medicaid home care](/guides/medicaid-home-care/) and [Medicaid family caregiver programs](/guides/medicaid-family-caregiver-program/).",
      ],
    },
    {
      id: "when-home-care",
      h2: "When home care makes sense",
      blocks: [
        {
          ul: [
            "Your relative wants to stay home, and the home is safe or can be made safe.",
            "They need help with some daily tasks, but not constant medical supervision.",
            "Family is nearby and can cover part of the day — or be paid to cover it.",
            "Needs are part-time, so hourly care costs less than a facility.",
          ],
        },
        "Home care comes in many forms: [non-medical home care](/guides/non-medical-home-care/), [senior home care](/guides/senior-home-care/), [part-time and short-term care](/guides/part-time-and-short-term-home-care/) and [24-hour home care](/guides/24-hour-home-care/).",
      ],
    },
    {
      id: "when-assisted-living",
      h2: "When assisted living makes sense",
      blocks: [
        {
          ul: [
            "Your relative is lonely or isolated at home and would benefit from company and activities.",
            "The house is hard to maintain or unsafe, and modifying it isn't practical.",
            "They need some help each day, but not skilled nursing.",
            "They can afford the monthly rent and meals, with or without Medicaid help for services.",
          ],
        },
        "Ask each community what's included, how fees rise as needs grow, whether it accepts Medicaid waiver services, and what happens if your relative runs out of money.",
      ],
    },
    {
      id: "when-nursing-home",
      h2: "When a nursing home makes sense",
      blocks: [
        {
          ul: [
            "Your relative needs skilled nursing or hands-on help around the clock.",
            "Medical needs are complex — frequent wound care, feeding tubes, or advanced dementia with safety risks.",
            "No combination of family and paid help can safely cover the hours at home.",
          ],
        },
        "Medicare's [Care Compare](https://www.medicare.gov/care-compare/) lets you check nursing home ratings and inspection results. If needs are medical but a move isn't right yet, [in-home nursing care](/guides/in-home-nursing-care/) may bridge the gap.",
      ],
    },
    {
      id: "side-by-side",
      h2: "Home care vs. assisted living vs. nursing home: side by side",
      blocks: [
        {
          table: {
            head: ["", "Home care", "Assisted living", "Nursing home"],
            rows: [
              ["Where", "Your relative's home", "A residential community", "A licensed facility"],
              ["Level of care", "Help with daily tasks, by the hour", "Daily help, meals, some supervision", "24-hour skilled nursing"],
              ["Independence", "Highest", "High", "Lower"],
              ["2025 median cost", "$35/hour", "$6,200/month", "$9,581/month semi-private"],
              ["Medicare pays long-term?", "No", "No", "No"],
              ["Medicaid pays?", "Yes, if eligible", "Services only, not room and board", "Yes, if eligible"],
              ["Family can be paid?", "Yes, in every state through Medicaid", "Rarely", "No"],
            ],
          },
        },
      ],
    },
    {
      id: "paid-family-care",
      h2: "How paid family caregiving keeps someone at home longer",
      blocks: [
        "The main reason people move out of their homes isn't medical — it's that no one can cover the hours. Paid family caregiving changes that math. If your relative qualifies for Medicaid home care, the program can pay a daughter, son, grandchild or other relative for the approved hours instead of sending an agency aide.",
        "That means the person doing the work is paid, the care comes from someone familiar, and the family isn't paying $35 an hour out of pocket. For many families it's the difference between a move this year and staying home for years. Read [how to get paid to care for a family member](/guides/get-paid-to-care-for-family-member/).",
        { stateTable: "programs" },
        "Pay varies by state — see [family caregiver pay rates](/guides/family-caregiver-pay-rates/) — and so do the rules for spouses. When the caregiver lives in, stipend programs like [Structured Family Caregiving](/guides/structured-family-caregiving/) and [live-in caregiver](/guides/live-in-caregiver/) arrangements can apply.",
      ],
    },
    {
      id: "home-first-checklist",
      h2: "A checklist before choosing a facility",
      blocks: [
        {
          ol: [
            "**Get a needs assessment.** Medicaid or your Area Agency on Aging can assess how many hours of help your relative needs.",
            "**Check Medicaid eligibility.** Long-term care Medicaid has different rules than regular Medicaid. [Check eligibility](/qualify/).",
            "**Ask who could be paid.** A relative, a friend or a neighbor may qualify as the paid caregiver.",
            "**Price the home option.** Add paid family hours, any agency hours, and home safety changes.",
            "**Tour facilities anyway.** Know your options in case needs change quickly.",
          ],
        },
        "If you're just starting, our [guide to caring for aging parents](/guides/caring-for-aging-parents/) covers the first conversations and decisions.",
      ],
    },
    {
      id: "state-differences",
      h2: "How much it varies by state",
      blocks: [
        "Costs and Medicaid rules both vary widely. A few starting points:",
        {
          chips: [
            { href: "/new-york/", label: "New York" },
            { href: "/california/", label: "California" },
            { href: "/florida/", label: "Florida" },
            { href: "/texas/", label: "Texas" },
            { href: "/pennsylvania/", label: "Pennsylvania" },
            { href: "/ohio/", label: "Ohio" },
          ],
        },
        "Or browse all [states](/states/). Each state page lists its programs, reported caregiver pay and how to apply.",
        "Assisted living is also regulated by states, not the federal government, so what a community must provide — and what it may call itself — differs from one state to the next. Ask each community for its state license and its most recent inspection results, and compare them before you sign a contract.",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "See if Medicaid could pay for care at home." },
            { href: "/compare/home-care-agency-vs-paid-family-caregiver/", title: "Agency vs. family caregiver", text: "Which home care route fits your family." },
            { href: "/guides/cost-of-in-home-care/", title: "Cost of in-home care", text: "What home care costs and who pays." },
            { href: "/guides/respite-care/", title: "Respite care", text: "Breaks for family caregivers." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is home care cheaper than assisted living?",
      a: "At part-time hours, usually yes. At CareScout's 2025 national median of $35 an hour, about 40 hours a week of home care costs roughly as much as a month of assisted living at $6,200. Beyond that, home care costs more.",
    },
    {
      q: "Does Medicaid pay for assisted living?",
      a: "Medicaid can pay for care services in assisted living through waivers or state plan options where a state offers them, but it does not pay room and board. Your relative usually pays rent and meals from their own income.",
    },
    {
      q: "Does Medicare pay for assisted living or a nursing home?",
      a: "Medicare doesn't pay for long-term care in either setting. It covers only limited short-term skilled nursing facility care after a qualifying hospital stay.",
    },
    {
      q: "What does a nursing home cost?",
      a: "CareScout's 2025 survey reports a national median of $9,581 a month for a semi-private room and $10,798 for a private room.",
    },
    {
      q: "Can Medicaid pay a family member to provide care at home?",
      a: "Yes. Every state has at least one Medicaid program that can pay a family caregiver, usually through a self-directed option.",
    },
    {
      q: "Can a family member be paid if my parent lives in assisted living?",
      a: "Rarely. Paid family caregiver programs are built around care at home. Some states allow limited services in other settings, so ask your state program.",
    },
    {
      q: "How do I know when it's time for a nursing home?",
      a: "When your relative needs skilled nursing or hands-on help around the clock that family and paid help can't safely cover at home. A doctor or care manager can help you judge.",
    },
  ],
  related: [
    "/guides/cost-of-in-home-care/",
    "/guides/medicaid-home-care/",
    "/compare/home-care-agency-vs-paid-family-caregiver/",
  ],
  sources: [
    { label: "CareScout 2025 Cost of Care Survey", url: "https://www.carescout.com/cost-of-care" },
    { label: "Medicaid.gov: mandatory and optional Medicaid benefits", url: "https://www.medicaid.gov/medicaid/benefits/mandatory-optional-medicaid-benefits" },
    { label: "MACPAC: Medicaid authorities used to cover services in residential care settings", url: "https://www.macpac.gov/subtopic/table-2-medicaid-authorities-used-to-cover-services-in-residential-care-settings-by-state-2016" },
    { label: "HHS OIG: home and community-based services in assisted living facilities", url: "https://oig.hhs.gov/reports/all/2012/home-and-community-based-services-in-assisted-living-facilities/" },
    { label: "Medicare.gov: long-term care", url: "https://www.medicare.gov/coverage/long-term-care" },
    { label: "Medicare Care Compare", url: "https://www.medicare.gov/care-compare/" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/sunroom-grandmother.webp", alt: "A grandmother sits in a bright sunroom at home" },
  keywords: [],
};

export default guide;
