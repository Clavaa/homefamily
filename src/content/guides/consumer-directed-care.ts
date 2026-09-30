import type { Guide } from "../types";

const guide: Guide = {
  slug: "consumer-directed-care",
  section: "guides",
  cluster: "programs",
  title: "Consumer-Directed Care: How Self-Directed Medicaid Works",
  description:
    "Consumer-directed care lets a Medicaid member hire family as a paid caregiver: employer and budget authority, fiscal agents, Missouri CDS, RI Personal Choice.",
  h1: "Consumer-directed care: how self-directed Medicaid lets you hire family",
  short: "Consumer-directed care",
  eyebrow: "The model behind paid family care",
  lead: "Almost every program that pays a family caregiver — CDPAP, IHSS, IRIS, Missouri CDS, Rhode Island's Personal Choice — is built on one idea: the person receiving care is the boss. This is how consumer-directed care works, what the jargon means, and how to use it.",
  answer:
    "Consumer-directed care is a Medicaid option where the person who needs home care hires, trains and supervises their own caregiver instead of accepting whoever an agency sends. The caregiver can usually be a relative or friend. A fiscal intermediary handles payroll and taxes. Every state offers some form of it.",
  takeaways: [
    "In consumer-directed care, the person receiving care — or their representative — is the employer.",
    "\"Employer authority\" means choosing and managing the worker. \"Budget authority\" means deciding how the care budget is spent.",
    "A fiscal intermediary (or financial management service) runs payroll, taxes and background checks.",
    "It's how most family caregivers get paid: CDPAP, IHSS, IRIS, Missouri CDS and RI Personal Choice are all consumer-directed.",
    "Spouses and parents of minors face extra limits that vary by state.",
  ],
  sections: [
    {
      id: "what-is-it",
      h2: "What is consumer-directed care?",
      blocks: [
        "**Consumer-directed care** — also called **self-directed care**, participant-directed services or **consumer-directed services** — is a way of receiving Medicaid home care where the person who needs help makes the decisions. They choose who comes into their home, when, and how the work is done. In the traditional model, an agency makes those choices.",
        "Medicaid.gov describes it as giving participants \"decision-making authority over certain services\" and \"direct responsibility to manage their services.\" In practice, that means your father can hire you, set your schedule and train you in how he likes things done, and Medicaid pays for the hours.",
        "Self-direction grew out of the federal Cash and Counseling demonstrations and is now available through several Medicaid authorities, including 1915(c) waivers, the 1915(j) self-directed personal assistance option, Community First Choice (1915(k)) and 1115 demonstrations. You don't need to know which one your state uses — only that every state has at least one **self-directed care program**.",
      ],
    },
    {
      id: "employer-authority",
      h2: "Employer authority: choosing and managing the caregiver",
      blocks: [
        "Employer authority is the heart of consumer direction. It means the participant can \"recruit, hire, train and supervise\" their own workers. Concretely, the participant (or a representative) can:",
        {
          ul: [
            "Hire a relative, friend or neighbor instead of a stranger.",
            "Set the schedule within the approved hours.",
            "Train the caregiver in their own routines.",
            "Replace the caregiver if it isn't working.",
          ],
        },
        "Some programs make the participant the legal \"employer of record\" and use a fiscal/employer agent to handle the paperwork. Others use an \"agency with choice\" model, where an agency is the legal employer but the participant still picks and directs the worker. Arizona's Agency with Choice and Colorado's IHSS work this way.",
      ],
    },
    {
      id: "budget-authority",
      h2: "Budget authority: deciding how the money is spent",
      blocks: [
        "Some programs go further and give the participant budget authority — a monthly budget they manage. Within the program's rules, they can decide how much to pay each worker, how to split hours between caregivers, and sometimes buy goods or services that support independence.",
        "New Jersey's Personal Preference Program, Wisconsin's [IRIS](/wisconsin/iris/), Oregon's Independent Choices Program and Rhode Island's Personal Choice Program all include a budget. Programs like New York's [CDPAP](/guides/cdpap/) give employer authority but pay a set wage, so there's less to manage.",
      ],
    },
    {
      id: "fiscal-intermediary",
      h2: "What a fiscal intermediary does",
      blocks: [
        "No one expects a family to run payroll. Every consumer-directed program uses a payroll organization, called a fiscal intermediary, fiscal/employer agent, financial management service (FMS) or, in Missouri, a CDS vendor. It:",
        {
          ul: [
            "Enrolls the caregiver and runs the background check.",
            "Collects timesheets or electronic visit verification.",
            "Pays the caregiver and withholds taxes.",
            "Tracks spending against the budget where there is one.",
          ],
        },
        "Some states use a single statewide intermediary — New York moved to [PPL](/compare/ppl-public-partnerships/) in April 2025 — while others let you choose among several. A few, like California's [IHSS](/guides/ihss/) and Michigan's Home Help, pay the caregiver directly from the state.",
      ],
    },
    {
      id: "vs-agency",
      h2: "Consumer-directed care vs. agency care",
      blocks: [
        {
          table: {
            head: ["", "Consumer-directed", "Traditional agency"],
            rows: [
              ["Who chooses the caregiver", "The participant", "The agency"],
              ["Can it be family?", "Yes, most relatives", "Only if the agency hires them"],
              ["Training", "Set by the participant; little or no certification", "Aide certification usually required"],
              ["Scheduling", "Flexible, set by the participant", "Set by the agency"],
              ["Backup if the caregiver is sick", "Participant must plan it", "Agency sends a substitute"],
            ],
          },
        },
        "The trade-off is control versus convenience. If you want the agency to handle everything, see [how to choose a home care agency](/guides/how-to-choose-a-home-care-agency/) and [agency care vs. a paid family caregiver](/compare/home-care-agency-vs-paid-family-caregiver/). Some agencies also [hire family members](/guides/home-care-agencies-that-hire-family-members/) as a middle route.",
      ],
    },
    {
      id: "missouri-cds",
      h2: "Consumer Directed Services Missouri",
      blocks: [
        "Missouri's version is called **Consumer Directed Services (CDS)**, run by the Division of Senior and Disability Services. It's a Medicaid personal care program, and because it's an entitlement, there's no waitlist.",
        {
          h3: "Who qualifies for Missouri CDS",
        },
        {
          ul: [
            "18 or older, with a physical disability that means they need another person's help with routine tasks.",
            "Able to direct their own care.",
            "In active Medicaid (MO HealthNet) status.",
            "Assessed by the state as needing help with daily activities.",
          ],
        },
        "The participant hires their own attendant and chooses a state-contracted CDS vendor to run payroll. Adult children and most other relatives can be hired; spouses and legal guardians can't. Reported pay is about $12 to $20 an hour depending on the vendor. For a spouse, Missouri's small [Structured Family Caregiving](/guides/structured-family-caregiving/) waiver is the alternative.",
        "Some people search for this as \"CDS home health care\". Strictly, CDS is personal care — help with daily living — rather than skilled home health, which Medicaid covers separately through licensed agencies. See [home health vs. home care](/guides/home-health-vs-home-care/) and the [Missouri caregiver program](/missouri/caregiver-program/), plus county pages like [Jackson County](/missouri/jackson/).",
      ],
    },
    {
      id: "rhode-island",
      h2: "Personal Choice Program RI",
      blocks: [
        "Rhode Island's **Personal Choice Program** is a self-directed option within Medicaid long-term services and supports. The participant becomes the employer, the caregiver is their employee, and the participant manages a service budget — including, within limits, how much the caregiver is paid.",
        "It serves adults 18 and over with disabilities and people 65 and over who meet a high or highest level of care. A long-term care specialist from a community agency helps build the monthly budget and checks in at least quarterly, and a fiscal agency pays the caregiver. Services include personal care, homemaker and chore services.",
        "Adult children and other relatives can be hired; spouses can't. Reported pay is up to $15 an hour. Rhode Island also has an Independent Provider Program. Start at the [Rhode Island caregiver program](/rhode-island/caregiver-program/). If you searched \"personal choice program RI\", this is the one.",
      ],
    },
    {
      id: "by-state",
      h2: "Consumer-directed services by state",
      blocks: [
        "Every state has a self-directed option, but the names vary. Here are some of the most searched:",
        {
          table: {
            head: ["State", "Consumer-directed program", "Spouse paid?"],
            rows: [
              ["[New York](/new-york/caregiver-program/)", "CDPAP", "No"],
              ["[California](/california/caregiver-program/)", "IHSS", "Limited"],
              ["[Texas](/texas/caregiver-program/)", "Consumer Directed Services (CDS)", "No"],
              ["[Missouri](/missouri/caregiver-program/)", "Consumer Directed Services (CDS)", "Limited"],
              ["[Colorado](/colorado/caregiver-program/)", "CDASS and IHSS", "Yes"],
              ["[Florida](/florida/caregiver-program/)", "Participant Directed Option and CDC+", "Limited"],
              ["[Wisconsin](/wisconsin/iris/)", "IRIS", "Yes"],
              ["[New Jersey](/new-jersey/caregiver-program/)", "Personal Preference Program", "Yes"],
              ["[Kentucky](/kentucky/caregiver-program/)", "Participant Directed Services", "Yes"],
              ["[Rhode Island](/rhode-island/caregiver-program/)", "Personal Choice Program", "No"],
            ],
          },
        },
        "For all 51, including pay and waitlists, see [Medicaid family caregiver programs by state](/guides/medicaid-family-caregiver-program/).",
      ],
    },
    {
      id: "independent-provider",
      h2: "Becoming an independent home care provider",
      blocks: [
        "In several states the caregiver is an **independent home care provider** — enrolled directly with the state or a payroll agent rather than employed by a company. Michigan's Home Help pays individual caregivers directly; Oregon's homecare workers and Washington's individual providers work the same way. The title sounds formal, but for a family caregiver it mostly means paperwork: an enrollment form, a background check, tax forms and sometimes a short orientation.",
        "You don't need to start a business or get a license to be paid through consumer direction. If you're thinking about turning caregiving into a career beyond your own family, see [caregiver jobs](/guides/caregiver-jobs/) or [starting a home care agency](/guides/start-a-home-care-agency/).",
      ],
    },
    {
      id: "is-it-right",
      h2: "Is consumer-directed care right for your family?",
      blocks: [
        "It tends to work well when the person receiving care — or a trusted relative acting as their representative — wants control, has someone specific in mind, and can plan backup coverage. It's harder when no one can manage scheduling, or when the only willing caregiver is a spouse in a state that doesn't pay spouses.",
        "It also comes with duties. The participant or representative signs timesheets, keeps the caregiver within the approved hours, reports changes in health or living arrangements, and has a backup plan for days the main caregiver is sick or away. Enrolling a second relative as a backup caregiver is one way to cover this. Most programs ask for a backup plan in the care plan, so it's worth thinking about who that person could be before the assessment.",
        "Before choosing, check three things: whether your relative qualifies for Medicaid home care ([check in two minutes](/qualify/)), whether the relationship is allowed in your state (see the [spousal caregiver rules](/texas/spousal-caregiver/) and [paid parent caregiver rules](/guides/paid-parent-caregiver/)), and how many hours the assessment is likely to approve. Our guide to [becoming a paid caregiver for a family member](/guides/become-a-paid-caregiver-for-a-family-member/) walks through the rest.",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "See which self-directed program fits your family." },
            { href: "/guides/cdpap/", title: "CDPAP (New York)", text: "The best-known consumer-directed program." },
            { href: "/guides/ihss/", title: "IHSS (California)", text: "California's version, and its equivalents elsewhere." },
            { href: "/guides/get-paid-to-care-for-family-member/", title: "Get paid to care for family", text: "The complete guide." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is the difference between consumer-directed and self-directed care?",
      a: "Nothing important. Consumer-directed, self-directed and participant-directed all describe the same idea: the person receiving care chooses and manages their own caregiver.",
    },
    {
      q: "Can I hire a family member through consumer-directed care?",
      a: "Yes. Most programs allow adult children, siblings and other relatives. Spouses and parents of minor children face limits that depend on the state and program.",
    },
    {
      q: "Who pays the caregiver in consumer-directed care?",
      a: "Medicaid funds it, and a fiscal intermediary or financial management service runs payroll, withholds taxes and pays the caregiver.",
    },
    {
      q: "What if the person needing care can't manage a caregiver?",
      a: "Most programs allow a representative, such as a relative or guardian, to take on the employer duties. In some programs that representative can't also be the paid caregiver.",
    },
    {
      q: "Who qualifies for Missouri Consumer Directed Services?",
      a: "Adults 18 and over with a physical disability who can direct their own care, are in active Medicaid status and are assessed as needing help with daily activities.",
    },
    {
      q: "Can a spouse be paid through Rhode Island's Personal Choice Program?",
      a: "No. Rhode Island does not allow spouses to be hired in Personal Choice or the Independent Provider Program. Adult children and other relatives can be.",
    },
  ],
  related: [
    "/guides/medicaid-family-caregiver-program/",
    "/guides/cdpap/",
    "/guides/ihss/",
  ],
  sources: [
    { label: "Medicaid.gov: self-directed services", url: "https://www.medicaid.gov/medicaid/long-term-services-supports/self-directed-services" },
    { label: "Missouri MMAC: Consumer Directed Services general information", url: "https://mmac.mo.gov/providers/provider-enrollment/home-and-community-based-services/contract-proposal-information/consumer-directed-services-general-information" },
    { label: "Rhode Island EOHHS: Personal Choice Program", url: "https://eohhs.ri.gov/media/35416/download" },
    { label: "Michigan MDHHS: Home Help individual caregivers", url: "https://www.michigan.gov/mdhhs/doing-business/providers/providers/other/homehelp/individual-providers/individual-caregivers" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/caregiver-phone.webp", alt: "A family caregiver checks her schedule on her phone" },
  keywords: [
    "consumer directed services",
    "consumer directed care",
    "consumer directed services missouri",
    "cds home health care",
    "self directed care",
    "self directed care program",
    "independent home care provider",
    "personal choice program ri",
  ],
};

export default guide;
