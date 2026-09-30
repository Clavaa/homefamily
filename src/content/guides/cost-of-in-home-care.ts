import type { Guide } from "../types";

const guide: Guide = {
  slug: "cost-of-in-home-care",
  section: "guides",
  cluster: "costs",
  title: "Cost of In-Home Care in 2026 and How to Pay for It",
  description:
    "What in-home care costs per hour, for 24-hour and live-in care and for a nurse at home — plus every way to pay: Medicaid, VA, insurance and free options.",
  h1: "The cost of in-home care, and how to pay for it",
  short: "Cost of in-home care",
  eyebrow: "2025 national figures, every way to pay",
  lead: "In-home care is one of the biggest costs a family can face, and most people don't know what it costs until they need it. Here are the latest national figures for hourly, full-time, 24-hour and nursing care at home — and every way families actually pay, including the programs that can pay a relative instead.",
  answer:
    "In-home care cost a national median of $35 an hour in 2025, according to CareScout's Cost of Care Survey — about $80,080 a year at 44 hours a week. Skilled nursing at home ran about $90 an hour. Medicaid, VA programs and long-term care insurance can pay, and Medicaid can often pay a family member to provide the care.",
  takeaways: [
    "CareScout's 2025 survey puts the national median for non-medical in-home care at $35 an hour, and in-home skilled nursing at $90 an hour.",
    "Round-the-clock care at hourly rates adds up fast: 24 hours at $35 is $840 a day.",
    "Medicare pays only for short-term skilled home health, not ongoing personal care or 24-hour care.",
    "Medicaid is the largest payer of long-term home care, and in every state it can pay a family caregiver.",
    "VA programs, long-term care insurance and local Area Agency on Aging services can cover some or all of the cost.",
  ],
  sections: [
    {
      id: "cost",
      h2: "Cost of in-home care in 2026",
      blocks: [
        "The most widely used national benchmark for the **cost of in home care** is CareScout's Cost of Care Survey (formerly the Genworth survey). Its 2025 results, released in March 2026, are the latest available:",
        {
          table: {
            caption: "National median costs, CareScout 2025 Cost of Care Survey",
            head: ["Type of care", "National median"],
            rows: [
              ["Non-medical in-home care (homemaker and home health aide)", "$35 an hour — $80,080 a year at 44 hours a week"],
              ["Skilled nursing at home", "$90 an hour; $160 a visit"],
              ["Adult day health care", "$95 a day — $24,700 a year at five days a week"],
              ["Assisted living", "$6,200 a month — $74,400 a year"],
              ["Nursing home, semi-private room", "$315 a day — $114,975 a year"],
              ["Nursing home, private room", "$355 a day — $129,575 a year"],
            ],
          },
        },
        "The **in home care services cost** where you live can be well above or below the national median. CareScout's own site has a cost calculator by area, and your state page shows which Medicaid programs can pay — for example [New York](/new-york/), [California](/california/) or [Texas](/texas/).",
      ],
    },
    {
      id: "per-hour",
      h2: "Home care cost per hour",
      blocks: [
        "The **home care cost per hour** from an agency is a national median of $35, per CareScout's 2025 survey. CareScout now reports homemaker services and home health aide services together as \"non-medical caregiver\" because their prices converged — so the **home health aide cost per hour** and the **caregiver cost per hour** for companionship and personal care are now the same figure.",
        "Why so much more than the aide earns? The Bureau of Labor Statistics reports a median wage of $17.21 an hour for home health and personal care aides in May 2025. The agency's share covers payroll taxes, insurance, training, scheduling, supervision and profit. That gap is why hiring privately, or through a self-directed Medicaid program, costs less per hour.",
        "Agencies often set a minimum visit length, commonly a few hours, and may charge more for nights, weekends and holidays. Ask for the full rate sheet. The **cost of home health care per hour** for skilled services is different — see the nursing section below.",
      ],
    },
    {
      id: "full-time",
      h2: "Full-time caregiver cost",
      blocks: [
        "The **full time caregiver cost** depends on the hours. At the $35 national median:",
        {
          table: {
            caption: "Arithmetic at the $35/hour national median",
            head: ["Hours of care", "Per week", "Per year (52 weeks)"],
            rows: [
              ["20 hours a week", "$700", "$36,400"],
              ["40 hours a week", "$1,400", "$72,800"],
              ["44 hours a week (CareScout's basis)", "$1,540", "$80,080"],
            ],
          },
        },
        "That's the typical **in home caregiver cost** through an agency. The **at home caregiver cost** of hiring privately is usually lower per hour, but you take on employer duties such as taxes and insurance — see [private pay home care](/guides/private-pay-home-care/). Either way, **caregiver cost** drives most families to look for help paying.",
      ],
    },
    {
      id: "24-hour",
      h2: "Cost of 24-hour home care",
      blocks: [
        "The **cost of 24 hour home care** depends on how it's staffed. Shift care — several aides working awake shifts — is billed by the hour: 24 hours at $35 is $840 a day, or about $25,200 for a 30-day month. That's arithmetic, not a quoted rate.",
        "The **in home 24 hour care cost** is often lower with a live-in arrangement, where one caregiver stays in the home and gets sleep and meal breaks. Agencies usually price live-in care at a daily rate instead. Read more in [24-hour home care](/guides/24-hour-home-care/).",
        {
          callout: {
            tone: "warn",
            title: "Compare with a nursing home",
            text: "At hourly rates, 24-hour care at home can cost more than a nursing home — CareScout's 2025 median for a semi-private room is $315 a day. For many families, the most affordable round-the-clock care at home is a relative paid through Medicaid, backed up by part-time help.",
          },
        },
      ],
    },
    {
      id: "live-in",
      h2: "Live-in home care cost",
      blocks: [
        "The **live in home care cost** is usually quoted as a flat daily rate. CareScout's 2025 survey doesn't report a separate national live-in figure, so get quotes locally and ask what the rate includes: sleep hours, breaks, relief caregivers and overtime.",
        "The **cost for live in caregiver** care also depends on whether you use an agency or hire directly, and on labor rules for sleep time and overtime in your state. The **live in aide cost** through Medicaid is different: in stipend programs like [Structured Family Caregiving](/guides/structured-family-caregiving/), a relative who lives with the person is paid a daily stipend — Indiana reports about $46–$80 a day to the caregiver. See [live-in caregivers](/guides/live-in-caregiver/) and [family caregiver pay rates](/guides/family-caregiver-pay-rates/).",
      ],
    },
    {
      id: "nurse",
      h2: "In-home nurse cost",
      blocks: [
        "Skilled nursing costs much more than aide care. CareScout's 2025 survey puts the **in home nurse cost** at a national median of $90 an hour, or $160 a visit. That's the **at home nurse cost** for private-duty nursing — a nurse who stays for a shift.",
        "The **home nurse care cost** is often covered when it's short-term and ordered by a doctor: Medicare pays for part-time skilled nursing at home for people who are homebound and need it. The **at home nursing care cost** for long-term, private-duty nursing is usually paid by Medicaid (especially for children with complex needs) or out of pocket. Families also ask about the **in house nurse cost** or **in house nurse care cost** for a nurse who lives in; that's rare, and priced individually.",
        "See [in-home nursing care](/guides/in-home-nursing-care/) and [home health vs. home care](/guides/home-health-vs-home-care/).",
      ],
    },
    {
      id: "vs-other-care",
      h2: "Cost of in-home care for elderly parents vs. other options",
      blocks: [
        "The **cost of in home care for elderly** relatives looks different next to the alternatives. Using CareScout's 2025 national medians:",
        {
          table: {
            head: ["Option", "National median", "Best fit"],
            rows: [
              ["Part-time home care (20 hrs/week)", "About $36,400 a year", "Needs help with some tasks"],
              ["Adult day health care", "$24,700 a year (5 days/week)", "Family works days; parent can travel"],
              ["Assisted living", "$74,400 a year", "Needs daily help, not nursing"],
              ["Full-time home care (44 hrs/week)", "$80,080 a year", "Needs help most of the day"],
              ["Nursing home, semi-private", "$114,975 a year", "Needs 24-hour nursing"],
            ],
          },
        },
        "The **cost of home care for seniors** grows with hours, so it's cheapest when needs are light and most expensive for round-the-clock care. See [assisted living vs. home care](/compare/assisted-living-vs-home-care/) and [senior home care](/guides/senior-home-care/).",
      ],
    },
    {
      id: "medicaid",
      h2: "Medicaid: the main way families pay",
      blocks: [
        "Medicaid pays for more long-term home care than any other source. For people who qualify on income, assets and care needs, it can cover personal care at home — and in every state and DC, a Medicaid program can pay a family member to provide it.",
        "That changes the math. Instead of paying $35 an hour to an agency, your relative's Medicaid program pays you or another relative. See [Medicaid home care](/guides/medicaid-home-care/), [programs that pay family by state](/guides/medicaid-family-caregiver-program/), or [check eligibility](/qualify/).",
      ],
    },
    {
      id: "va",
      h2: "VA home care assistance for veterans",
      blocks: [
        "Veterans have several options. **VA home care assistance** programs include:",
        {
          ul: [
            "**Homemaker and Home Health Aide care:** a trained aide comes to the veteran's home to help with eating, dressing, bathing, toileting, mobility and shopping. Available to enrolled veterans who meet clinical need; a copay may apply depending on service-connected disability status.",
            "**Veteran Directed Care:** the veteran gets a budget for personal care and hires their own workers — including a family member or neighbor.",
            "**Program of Comprehensive Assistance for Family Caregivers:** a monthly stipend, training and other benefits for the primary family caregiver of a veteran with a VA disability rating of 70% or higher who needs at least six months of continuous personal care.",
            "**Aid and Attendance:** an added monthly amount for veterans and survivors who receive a VA pension and need help with daily activities.",
          ],
        },
        "Start with a VA social worker at the veteran's VA medical center; availability varies by location.",
      ],
    },
    {
      id: "insurance",
      h2: "Home care insurance: what covers home care?",
      blocks: [
        "People search for **home care insurance** or **home health care insurance** as if it were one product. It isn't — several kinds of **home care policies** may pay, and each covers different things.",
        {
          table: {
            head: ["Coverage", "Pays for ongoing personal care?", "Notes"],
            rows: [
              ["Original Medicare", "No", "Covers part-time skilled home health, with aide visits only alongside skilled care."],
              ["Medicare Advantage", "Usually no", "Must cover almost everything Original Medicare does; some plans add extra benefits."],
              ["Medicaid", "Yes", "The main payer of long-term home care; can pay family caregivers."],
              ["Long-term care insurance", "Yes, per the policy", "Often covers home care once you need help with daily activities."],
              ["Private health insurance", "Rarely", "Usually limited to short-term skilled care."],
            ],
          },
        },
        { h3: "Medicare and home health insurance coverage" },
        "Medicare's **home health insurance coverage** is real but narrow. It pays for part-time or intermittent skilled nursing and therapy for homebound people, and for **home health aide insurance coverage** only while you also get skilled care. It doesn't pay for 24-hour care, homemaker services unrelated to the care plan, or personal care when that's the only care you need. Details: [does Medicare pay family caregivers?](/guides/does-medicare-pay-family-caregivers/).",
        { h3: "UnitedHealthcare home health aide coverage and other Medicare plans" },
        "Families often type \"united healthcare home health aide\" or their own plan's name into a search box. Medicare Advantage plans, whoever offers them, must cover almost all medically necessary services Original Medicare covers — including home health aide visits when you qualify for skilled home health — and may offer extra benefits. Check your plan's Evidence of Coverage or call the plan. The same goes for other **home health insurance plans**: the **home health care insurance coverage** in the plan documents is what counts, and **home health aide insurance** for ongoing daily help is rare outside Medicaid and long-term care insurance.",
        { h3: "Long-term care insurance and in-home care insurance for seniors" },
        "Long-term care insurance is the closest thing to **in home care insurance for seniors**. Most policies pay when you need help with two or more of six activities of daily living, or have a cognitive impairment such as Alzheimer's. Most have an elimination period — often 30, 60 or 90 days — before benefits start. Some **home health care policy** designs pay a cash benefit that can be used for a relative; others pay only licensed providers. **Non medical home care insurance** coverage depends on the policy wording.",
        "As **insurance for elderly home care**, these policies are usually bought well before care is needed; **home health care insurance for seniors** who already need help is hard to get. If you have a policy, file early — it's the most common source of **homecare insurance coverage** families overlook. Any **home healthcare insurance** should say plainly whether it covers home care and family caregivers.",
      ],
    },
    {
      id: "caregiver-insurance",
      h2: "Caregiver insurance: coverage for the people giving care",
      blocks: [
        "**Caregiver insurance** can also mean insurance that protects the caregiver, or the family that hires one:",
        {
          ul: [
            "**Home health agency insurance.** Licensed agencies carry liability and workers' compensation for their staff — one reason agency rates are higher. See [starting a home care agency](/guides/start-a-home-care-agency/).",
            "**Private caregiver insurance.** If you hire someone directly, check whether your homeowner's policy covers injuries to a household worker, and whether your state requires workers' compensation for household employees.",
            "**Independent caregiver insurance.** Caregivers working for private clients often buy their own liability coverage; **insurance for private caregivers** is sold by commercial insurers.",
            "**Paid family caregivers.** In Medicaid self-directed programs, the payroll agency typically handles payroll taxes; ask what **caregiver insurance coverage** — such as workers' compensation — comes with the program.",
          ],
        },
        "Whatever the arrangement, ask who is covered if the caregiver is hurt or makes a mistake. **Insurance for caregiver services** is easy to overlook until something goes wrong.",
      ],
    },
    {
      id: "affordable",
      h2: "Affordable home care: how to lower the cost",
      blocks: [
        "**Affordable home care** usually comes from changing who provides the care and who pays for it, not from finding a cheap agency. Ways families find **affordable in home care**:",
        {
          ol: [
            "**Pay a relative through Medicaid.** It's often the most **affordable home health care** arrangement there is — the program pays, and the caregiver is someone your family trusts. [Check eligibility](/qualify/).",
            "**Mix paid and unpaid help.** An agency for bathing and a few key hours; family for the rest. See [part-time home care](/guides/part-time-and-short-term-home-care/).",
            "**Use adult day care** for the daytime hours — at $95 a day median, it's cheaper than hourly care.",
            "**Hire privately** for a lower hourly rate, handling taxes properly.",
            "**Ask your Area Agency on Aging** about sliding-scale services for older adults.",
          ],
        },
        "An **affordable home care agency** is one that's transparent: no hidden minimums, clear rates for nights and weekends. Compare **affordable home care services** using our [guide to choosing an agency](/guides/how-to-choose-a-home-care-agency/) and [local home care agencies compared](/compare/local-home-care-agencies/).",
        "Searches like \"affordable caregivers near me\" or \"cheap caregivers near me\" turn up **affordable caregivers** and **low cost caregivers** in private ads, but check background, references and taxes first. For **affordable at home care**, **affordable home care for seniors**, **cheap home care for elderly** relatives or an **affordable home health aide**, Medicaid and Area Agency on Aging programs are the reliable routes. **Low cost in home care for seniors** is often available through them — and **affordable in home care for the elderly** starts with checking whether your relative qualifies. County pages list local options: [Kings County, NY](/new-york/kings/), [Los Angeles County](/california/los-angeles/), [Miami-Dade County](/florida/miami-dade/).",
      ],
    },
    {
      id: "free",
      h2: "Free in-home care for seniors",
      blocks: [
        "**Free in home care for seniors** does exist, though usually in limited hours or for people with low income:",
        {
          ul: [
            "**Medicaid home care**, which has no cost for most eligible people — the closest thing to **free home care** at scale.",
            "**Older Americans Act services** through your Area Agency on Aging, such as in-home help, meals and respite; availability varies by area.",
            "**The National Family Caregiver Support Program**, which funds respite, counseling and training for family caregivers through Area Agencies on Aging.",
            "**Medicare home health**, which is **free home health care** with no copay for eligible homebound people who need skilled care — including a **free home health aide** while skilled care continues.",
            "**VA programs** for eligible veterans (see above).",
          ],
        },
        "**Free elderly care** from volunteers, faith groups and senior centers can fill gaps too. For **long term care assistance for elderly** relatives, start with the federal Eldercare Locator, which connects you to your local Area Agency on Aging, and see [family caregiver support programs](/guides/family-caregiver-support-programs/) and [respite care](/guides/respite-care/).",
      ],
    },
    {
      id: "pay-family",
      h2: "When family provides the care: getting paid instead of paying",
      blocks: [
        "Many families reading about cost are already giving the care themselves. If that's you, the question isn't only what care costs — it's whether a program will pay you for the care you're giving.",
        "In every state and DC, Medicaid has at least one program that can pay a family caregiver. Of the 51 jurisdictions, 29 publish an hourly rate, from about $11 to $29.04. Read [how to get paid to care for a family member](/guides/get-paid-to-care-for-family-member/) or [check eligibility](/qualify/) in two minutes.",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "See which programs can pay for care — or pay you." },
            { href: "/guides/medicaid-home-care/", title: "Medicaid home care", text: "How Medicaid pays for care at home." },
            { href: "/guides/family-caregiver-pay-rates/", title: "Family caregiver pay", text: "What family caregivers are paid, by state." },
            { href: "/guides/private-pay-home-care/", title: "Private pay home care", text: "Paying out of pocket, and doing it right." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How much does in-home care cost per hour?",
      a: "The national median was $35 an hour in 2025 for non-medical in-home care, including home health aide services, according to CareScout's Cost of Care Survey. Rates vary widely by area.",
    },
    {
      q: "How much does 24-hour home care cost?",
      a: "At the $35 national median, 24 hours of hourly shift care is $840 a day. Live-in care, where one caregiver stays in the home, is usually priced at a lower daily rate. Get local quotes.",
    },
    {
      q: "How much does an in-home nurse cost?",
      a: "CareScout's 2025 survey puts in-home skilled nursing at a national median of $90 an hour, or $160 a visit.",
    },
    {
      q: "Does Medicare pay for in-home care?",
      a: "Only short-term, part-time skilled home health for people who are homebound. Medicare doesn't pay for ongoing personal care, homemaker services on their own or 24-hour care.",
    },
    {
      q: "Does insurance cover home care?",
      a: "Long-term care insurance often does, depending on the policy. Medicaid covers long-term home care for people who qualify. Medicare and most private health insurance cover only short-term skilled care.",
    },
    {
      q: "Is there free in-home care for seniors?",
      a: "Yes, in some cases. Medicaid home care, Area Agency on Aging services, the VA and Medicare home health can be free or low cost for people who qualify.",
    },
    {
      q: "Can the VA pay for home care?",
      a: "Yes. The VA offers Homemaker and Home Health Aide care, Veteran Directed Care, a stipend for family caregivers of eligible veterans, and Aid and Attendance for veterans on a VA pension.",
    },
    {
      q: "Can I get paid to provide my parent's home care instead?",
      a: "Often, yes. Medicaid programs in every state can pay a family member to provide home care if your parent qualifies and chooses you.",
    },
  ],
  related: [
    "/guides/family-caregiver-pay-rates/",
    "/guides/medicaid-home-care/",
    "/guides/24-hour-home-care/",
  ],
  sources: [
    { label: "CareScout 2025 Cost of Care Survey (press release, March 2, 2026)", url: "https://investor.genworth.com/news-events/press-releases/detail/1054" },
    { label: "CareScout cost of care calculator", url: "https://www.carescout.com/cost-of-care" },
    { label: "BLS Occupational Outlook Handbook: home health and personal care aides", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" },
    { label: "Medicare.gov: home health services", url: "https://www.medicare.gov/coverage/home-health-services" },
    { label: "Medicare.gov: compare Original Medicare and Medicare Advantage", url: "https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/your-coverage-options/compare-original-medicare-medicare-advantage" },
    { label: "VA: Homemaker and Home Health Aide care", url: "https://www.va.gov/geriatrics/pages/Homemaker_and_Home_Health_Aide_Care.asp" },
    { label: "VA: Veteran Directed Care", url: "https://www.va.gov/geriatrics/pages/Veteran-Directed_Care.asp" },
    { label: "VA: Program of Comprehensive Assistance for Family Caregivers", url: "https://www.va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/" },
    { label: "VA: Aid and Attendance benefits", url: "https://www.va.gov/pension/aid-attendance-housebound/" },
    { label: "ACL: receiving long-term care insurance benefits", url: "https://acl.gov/ltc/costs-and-who-pays/what-is-long-term-care-insurance/receiving-long-term-care-insurance-benefits" },
    { label: "ACL: National Family Caregiver Support Program", url: "https://acl.gov/programs/support-caregivers/national-family-caregiver-support-program" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/sunroom-grandmother.webp", alt: "An older woman sits in a sunlit room at home" },
  keywords: [
    "cost of in home care",
    "home care insurance",
    "home health care insurance",
    "cost of in home care for elderly",
    "home nurse care cost",
    "affordable home care",
    "cost of home care for seniors",
    "caregiver insurance",
    "affordable home health care",
    "in home care services cost",
    "home health insurance",
    "home health aide insurance",
    "in home nurse cost",
    "affordable home care agency",
    "cost of 24 hour home care",
    "home health aide cost",
    "affordable in home care",
    "home care cost per hour",
    "in home caregiver cost",
    "live in home care cost",
  ],
};

export default guide;
