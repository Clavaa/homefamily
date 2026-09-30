import type { Guide } from "../types";

const guide: Guide = {
  slug: "in-home-nursing-care",
  section: "guides",
  cluster: "types-of-care",
  title: "In-Home Nursing Care: Visits, Private Duty & Costs",
  description:
    "In-home nursing care explained: RN and LPN visits vs. private duty nursing, 24/7 nursing at home, what Medicare and Medicaid cover, costs and finding a nurse.",
  h1: "In-home nursing care: what it is, who pays and how to find a nurse",
  short: "In-home nursing care",
  eyebrow: "Skilled nursing at home",
  lead: "Some people need more than help with bathing and meals. They need a nurse — for wounds, IV lines, a feeding tube, a ventilator or a condition that changes fast. In-home nursing brings that care to the house, as short visits or as long shifts. Here is how each works and who pays for it.",
  answer:
    "In-home nursing care is care from a registered nurse (RN) or licensed practical nurse (LPN) in the patient's home. It comes as short skilled visits, which Medicare covers for homebound patients, or as private duty nursing in long shifts, which Medicaid covers in some states and families otherwise pay for privately or through insurance.",
  takeaways: [
    "Nursing visits (home health) are short and skilled; private duty nursing means a nurse stays for hours at a time.",
    "Medicare covers part-time or intermittent skilled nursing for homebound patients, at no cost for covered visits — but not 24-hour care.",
    "Private duty nursing is an optional Medicaid benefit, so coverage for adults varies by state. Children on Medicaid can get it when medically necessary.",
    "Many people who think they need a nurse need an aide for most hours plus nurse visits — which costs far less.",
    "In the BLS's 2025 data, the median RN earned $46.90 an hour and the median LPN $30.96, before any agency overhead.",
  ],
  sections: [
    {
      id: "what-is",
      h2: "What is in-home nursing care?",
      blocks: [
        "In home nursing care is skilled care from a licensed nurse delivered in the patient's home instead of a hospital, rehab or nursing home. An in home nurse can be a **registered nurse (RN)**, who assesses, plans and handles complex care, or a **licensed practical nurse (LPN/LVN)**, who gives care under an RN's or doctor's direction.",
        "In home nursing care services usually include:",
        {
          ul: [
            "Wound care and dressing changes",
            "Injections, IV therapy and managing IV lines",
            "Feeding tubes, catheters and ostomy care",
            "Tracheostomy and ventilator care",
            "Monitoring blood pressure, blood sugar, breathing and other vital signs",
            "Managing complex medication schedules and teaching family how to give care",
          ],
        },
        "If the tasks your relative needs are bathing, dressing, toileting and supervision, you likely need a [home health aide](/guides/home-health-aide/) or [non-medical home care](/guides/non-medical-home-care/), not a nurse. Our guide to [home health vs. home care](/guides/home-health-vs-home-care/) sorts out which is which.",
      ],
    },
    {
      id: "visits-vs-private-duty",
      h2: "Nurse visits vs. private duty nursing",
      blocks: [
        "In home nurse services come in two very different shapes.",
        {
          table: {
            caption: "The two kinds of in-home nursing",
            head: ["", "Skilled nursing visits", "Private duty nursing"],
            rows: [
              ["How long the nurse stays", "Usually under an hour or two per visit", "Shifts of several hours, up to 24 hours a day"],
              ["Typical patient", "Recovering from surgery, illness or a hospital stay", "Complex, ongoing needs — ventilators, trachs, medically fragile children"],
              ["Who orders it", "A doctor, as part of a home health plan of care", "A doctor; the family or payer arranges the shifts"],
              ["Who provides it", "A home health agency", "A private duty nursing agency or an independent nurse"],
              ["Medicare", "Covered if the patient qualifies", "Not covered"],
              ["Medicaid", "Covered — home health is mandatory", "Optional for adults; covered for children when medically necessary"],
            ],
          },
        },
        "Nurse visits are what most people get. Private nursing care at home — a nurse who stays for a shift — is less common and much more expensive, and it's usually for people who would otherwise be in a hospital or skilled facility.",
      ],
    },
    {
      id: "medicare",
      h2: "Does Medicare cover in-home nursing care?",
      blocks: [
        "Medicare covers skilled nursing at home under its home health benefit when all of these are true, according to Medicare.gov:",
        {
          ol: [
            "The patient is **homebound** — leaving home isn't recommended or takes a major effort and help.",
            "A doctor or allowed provider has **seen them in person** and ordered home health.",
            "They need **part-time or intermittent** skilled nursing or therapy.",
            "A **Medicare-certified home health agency** provides the care.",
          ],
        },
        {
          callout: {
            tone: "money",
            title: "What Medicare pays — and doesn't",
            text: "You pay nothing for covered home health visits. \"Part-time or intermittent\" generally means fewer than 8 hours a day and 28 hours or less a week (up to 35 in some cases). Medicare does not pay for 24-hour care at home or for private duty nursing.",
          },
        },
        "So Medicare can send a nurse to check a wound twice a week. It will not pay a nurse to stay overnight. For the full rules, see [home health vs. home care](/guides/home-health-vs-home-care/) and [does Medicare pay family caregivers](/guides/does-medicare-pay-family-caregivers/).",
      ],
    },
    {
      id: "medicaid",
      h2: "What Medicaid covers for nursing at home",
      blocks: [
        "Home health, including nursing visits, is a **mandatory** Medicaid benefit in every state. **Private duty nursing** is an **optional** benefit, so whether an adult can get long nursing shifts at home depends on the state and, often, on a waiver program for people who would otherwise need a hospital or nursing home level of care.",
        "Children are different. Under Medicaid's EPSDT benefit, states must cover medically necessary services for children under 21 — including optional services like private duty nursing — even if the state doesn't cover them for adults. Families of medically fragile children should ask the child's Medicaid plan about private duty nursing hours directly.",
        "Medicaid waivers also pay for the non-nursing hours: personal care, [respite](/guides/respite-care/), and in many states a paid family caregiver. See [Medicaid home care](/guides/medicaid-home-care/) and [paid parent caregivers](/guides/paid-parent-caregiver/).",
      ],
    },
    {
      id: "cost",
      h2: "How much does private nursing care at home cost?",
      blocks: [
        "Nursing costs more than aide care because nurses earn more. The Bureau of Labor Statistics reported 2025 median pay of **$46.90 an hour for registered nurses** and **$30.96 an hour for LPNs**. Those are wages; an agency adds payroll taxes, insurance, supervision and profit on top, so the hourly rate you're charged is higher.",
        "For comparison, CareScout's 2025 survey put non-medical caregiver services — aides and homemakers — at a national median of $35 an hour.",
        {
          callout: {
            tone: "info",
            title: "Ask for a quote in writing",
            text: "Nursing rates vary by state, by RN vs. LPN, by the complexity of care and by shift length. Get the hourly rate, any minimum shift, and night, weekend and holiday rates in writing from each agency.",
          },
        },
        "Many families cut cost with a mix: an aide for most hours and an RN visit to handle the skilled tasks and supervise. See [the cost of in-home care](/guides/cost-of-in-home-care/) and [private pay home care](/guides/private-pay-home-care/) for how families pay.",
      ],
    },
    {
      id: "24-7",
      h2: "24/7 nursing care at home",
      blocks: [
        "Round-the-clock nursing is usually for people on ventilators, with unstable conditions or at the end of life. It takes several nurses rotating shifts, and it is the most expensive way to receive care anywhere. Medicare doesn't cover it. Medicaid may, through private duty nursing or a waiver, depending on the state and the patient's age. Some long-term care insurance policies help.",
        "For people who need someone there all the time but not a nurse all the time, [24-hour home care](/guides/24-hour-home-care/) with aides, or a [live-in caregiver](/guides/live-in-caregiver/), plus scheduled nurse visits is often safer for the budget and just as safe for the patient. Hospice also sends nurses home for people at the end of life.",
      ],
    },
    {
      id: "elderly",
      h2: "In-home nursing care for elderly parents",
      blocks: [
        "In home nursing care for elderly adults is most often short-term: after a fall, a surgery or a hospital stay. The nurse teaches the family, manages new medications and watches for complications, then discharges the patient when they're stable.",
        "Families searching for home nurses for elderly relatives — or an in home nurse for elderly parents, in home nurses for the elderly or at home nurses for elderly loved ones — often need something slightly different: steady daily help plus occasional nursing. In home nurse care for elderly parents with diabetes, heart failure or wounds can mean an RN visiting weekly while an aide or family member handles the rest.",
        "If you're the one doing the daily care, your state may pay you for it. See [caring for aging parents](/guides/caring-for-aging-parents/) and [how to get paid to care for a family member](/guides/get-paid-to-care-for-family-member/).",
      ],
    },
    {
      id: "nursing-home",
      h2: "In-home nursing vs. a nursing home",
      blocks: [
        "Many families look at nursing home assistance, or nursing home assistance for elderly parents, before learning how much care can happen at home. Medicaid pays for nursing home care, and every state also has Medicaid programs designed to deliver that same level of care at home instead.",
        "A nursing home caregiver — a CNA or nurse in a facility — looks after many residents at once. At home, one aide or nurse looks after one person. For people who can be kept safe at home, that's usually what they prefer. Compare the options in [assisted living vs. home care](/compare/assisted-living-vs-home-care/), and [check whether your relative may qualify](/qualify/) for Medicaid home care.",
      ],
    },
    {
      id: "caregiver-nurse",
      h2: "Caregiver, nurse or both?",
      blocks: [
        "\"Caregiver nurse\" and \"home help nurse\" are common searches, but they blur two jobs. A caregiver or aide helps with daily living. A nurse handles medical care. The right plan names which tasks need a license:",
        {
          table: {
            head: ["Task", "Who can do it"],
            rows: [
              ["Bathing, dressing, toileting, meals", "Aide, caregiver or family member"],
              ["Medication reminders", "Aide, caregiver or family member"],
              ["Vital signs and reporting changes", "Home health aide under nurse supervision, or a nurse"],
              ["Injections, IV therapy, wound care", "Nurse (family can be trained for some tasks)"],
              ["Assessing a change in condition", "RN"],
            ],
          },
        },
        "Home nurse care services usually include teaching family members to handle some skilled tasks, so a relative may end up doing more than they expected. That's another reason paid family caregiving matters — see [how to become a paid caregiver for a family member](/guides/become-a-paid-caregiver-for-a-family-member/).",
      ],
    },
    {
      id: "find",
      h2: "How to find in-home nursing care near me",
      blocks: [
        "How you search for in home nursing care near me depends on the kind of nursing:",
        {
          ul: [
            "**Nurse visits after a hospital stay:** ask the doctor or discharge planner for a referral, and use Medicare's Care Compare to see certified agencies that serve your ZIP code. This is the quickest route to home nursing care near me.",
            "**Private duty nursing:** ask the Medicaid plan or waiver case manager which agencies are approved, or call private duty nursing agencies directly for private pay.",
            "**Help with daily care:** see [home care near me](/guides/home-care-near-me/) and [local home care agencies](/compare/local-home-care-agencies/).",
          ],
        },
        "Whether you typed in home nurses near me, in home nursing services near me, at home nursing care near me, at home nursing services near me, at home nurse near me or \"nurse to home,\" the same questions apply. Ask each agency whether it is Medicare-certified, whether it takes your insurance or Medicaid plan, whether nurses are RNs or LPNs, how quickly it can start, and who covers a missed shift. Our [checklist for choosing a home care agency](/guides/how-to-choose-a-home-care-agency/) has more.",
      ],
    },
    {
      id: "private",
      h2: "Hiring a private home nurse",
      blocks: [
        "A private home nurse is a nurse you pay directly, through an agency or as an independent contractor. Families searching private nursing services near me or private home nursing care near me should check:",
        {
          ol: [
            "The nurse's license, on your state board of nursing's lookup.",
            "Malpractice and liability insurance.",
            "Who the nurse takes orders from — a doctor still needs to direct medical care.",
            "Backup coverage when the nurse is sick or on vacation.",
            "Whether you'd be the nurse's employer. If so, IRS Publication 926 household employer rules may apply — see [private pay home care](/guides/private-pay-home-care/).",
          ],
        },
      ],
    },
    {
      id: "by-state",
      h2: "Nursing services and home care by state",
      blocks: [
        "Medicare's nursing rules are national. Nursing services under Medicaid, and the home care programs that fill the other hours, vary by state. A few examples:",
        {
          ul: [
            "[New York](/new-york/caregiver-program/) runs CDPAP, where a family member can be paid for care; see [Kings County](/new-york/kings/).",
            "[California's IHSS](/guides/ihss/) pays in-home providers; see [Los Angeles County](/california/los-angeles/).",
            "[Texas](/texas/caregiver-program/) offers Consumer Directed Services and waivers including MDCP for children; see [Harris County](/texas/harris/).",
            "[Florida](/florida/caregiver-program/) lists a Family Home Health Aide option for children; see [Miami-Dade County](/florida/miami-dade/).",
          ],
        },
        "Every state is on our [state list](/states/).",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "See if Medicaid could pay for care at home." },
            { href: "/guides/home-health-aide/", title: "Home health aides", text: "Hands-on personal care, training and costs." },
            { href: "/guides/home-health-vs-home-care/", title: "Home health vs. home care", text: "Skilled care or daily help: which you need." },
            { href: "/guides/24-hour-home-care/", title: "24-hour home care", text: "Round-the-clock care without a nurse every hour." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is in-home nursing care?",
      a: "Skilled care from a registered nurse or licensed practical nurse in the patient's home, such as wound care, injections, IV therapy, tube feeding and monitoring. It can be short visits or long private duty shifts.",
    },
    {
      q: "Does Medicare pay for a nurse at home?",
      a: "Medicare pays for part-time or intermittent skilled nursing visits if the patient is homebound, a doctor orders it after seeing them, and a Medicare-certified agency provides it. It does not pay for 24-hour or private duty nursing.",
    },
    {
      q: "Does Medicaid pay for private duty nursing?",
      a: "Private duty nursing is an optional Medicaid benefit, so coverage for adults depends on the state and often on a waiver. For children under 21, Medicaid must cover it when it is medically necessary.",
    },
    {
      q: "What is the difference between an RN and an LPN at home?",
      a: "An RN assesses the patient, plans care and handles complex tasks. An LPN gives care such as monitoring, dressing changes and basic treatments under an RN's or doctor's direction.",
    },
    {
      q: "How much does an in-home nurse cost?",
      a: "Rates vary widely by state, nurse type and shift. BLS data shows median 2025 wages of $46.90 an hour for RNs and $30.96 for LPNs; agency rates are higher to cover overhead. Get written quotes.",
    },
    {
      q: "Can I get a nurse at home 24 hours a day?",
      a: "Yes, through private duty nursing, but it is costly and Medicare does not cover it. Medicaid may in some states and for children. Many families combine aides around the clock with scheduled nurse visits.",
    },
    {
      q: "Do I need a nurse or a home health aide?",
      a: "If the tasks are bathing, dressing, toileting, meals and supervision, an aide is usually right. If they include injections, IV care, wound care or ventilator care, you need a nurse for those tasks.",
    },
  ],
  related: [
    "/guides/home-health-vs-home-care/",
    "/guides/home-health-aide/",
    "/guides/24-hour-home-care/",
  ],
  sources: [
    { label: "Medicare.gov: Home health services coverage", url: "https://www.medicare.gov/coverage/home-health-services" },
    { label: "Medicaid.gov: Mandatory and optional Medicaid benefits", url: "https://www.medicaid.gov/medicaid/benefits/mandatory-optional-medicaid-benefits" },
    { label: "Medicaid.gov: EPSDT", url: "https://www.medicaid.gov/medicaid/benefits/early-and-periodic-screening-diagnostic-and-treatment" },
    { label: "BLS: Registered nurses", url: "https://www.bls.gov/ooh/healthcare/registered-nurses.htm" },
    { label: "BLS: Licensed practical and licensed vocational nurses", url: "https://www.bls.gov/ooh/healthcare/licensed-practical-and-licensed-vocational-nurses.htm" },
    { label: "CareScout 2025 Cost of Care Survey results", url: "https://investor.genworth.com/news-events/press-releases/detail/1054" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/og-hands-paperwork.webp", alt: "Hands reviewing care paperwork at a table" },
  keywords: [
    "in home nursing care",
    "in home nurse",
    "in home nursing care near me",
    "nursing services",
    "in home nurses near me",
    "nurse to home",
    "private nursing care at home",
    "home nursing care near me",
    "in home nursing care for elderly",
    "in home nurse services",
    "home nurses for elderly",
    "in home nurse care for elderly",
    "nursing home caregiver",
    "private home nurse",
    "in home nurse for elderly",
    "caregiver nurse",
    "home help nurse",
    "home nurse care services",
    "in home nursing care services",
    "private nursing services near me",
  ],
};

export default guide;
