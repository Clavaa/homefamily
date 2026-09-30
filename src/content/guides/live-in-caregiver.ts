import type { Guide } from "../types";

const guide: Guide = {
  slug: "live-in-caregiver",
  section: "guides",
  cluster: "types-of-care",
  title: "Live-In Caregiver: How Live-In Home Care Works (2026)",
  description:
    "What a live-in caregiver does, the sleep and break rules, how live-in home care is priced, how to find one — and how a family member can be paid to live in.",
  h1: "Live-in caregivers: how live-in home care works",
  short: "Live-in caregivers",
  eyebrow: "Types of home care",
  lead: "A live-in caregiver lives in the home of the person they care for, giving help through the day and being there at night. It's the most personal kind of home care, and often cheaper than round-the-clock shifts. Here's what live-in care means, the labor rules, what it costs, how to find a caregiver — and how a relative can be paid to be one.",
  answer:
    "A live-in caregiver, or live-in home caregiver, lives in the home of the person receiving care and helps with bathing, meals, housekeeping, medications and supervision. They must get sleep, meal and free time, and interrupted breaks count as work. Agencies usually charge a daily rate. In many states, Medicaid can pay a family member to be the live-in caregiver.",
  takeaways: [
    "A live-in caregiver lives in the home and gets real sleep and break time — it's not 24 hours of awake care.",
    "Federal rules let sleep, meal and free time go unpaid by agreement, but interruptions must be paid.",
    "Agencies must pay live-in aides overtime over 40 hours a week; families who hire directly don't, but must pay minimum wage for hours worked.",
    "Live-in care is usually cheaper than 24-hour shift care.",
    "Structured Family Caregiving and Adult Foster Care pay a daily stipend to a relative who lives with the person.",
  ],
  sections: [
    {
      id: "what-is-a-live-in-caregiver",
      h2: "What is a live-in caregiver?",
      blocks: [
        "A **live-in caregiver** — also called a live-in carer, live-in caretaker, in-house caregiver or in-house carer — stays in the home of the person they look after. An in-home live-in caregiver is sometimes called an in-house caretaker, and the service in-house home care or in-house elderly care. They help through the day, sleep in their own room, and are nearby at night if needed. Some people call it a stay-in caregiver.",
        "Live-in home care is different from 24-hour shift care. With shifts, someone is awake all night. With live-in care, one caregiver lives there and gets a proper night's sleep. That makes live-in care a good fit for someone who needs steady help and company but usually sleeps through the night. If they need help many times a night, see [24-hour home care](/guides/24-hour-home-care/).",
        "Most live-in care is non-medical. A live-in health aide, live-in health care aide or live-in home health aide may have extra training, and live-in home health care or other live-in healthcare from a live-in health care provider usually comes through a licensed home health agency. A live-in aide is still not a nurse; a live-in nurse is a separate and much more costly arrangement — see [live-in nursing care](#live-in-nurse) below.",
      ],
    },
    {
      id: "what-they-do",
      h2: "What live-in home care services include",
      blocks: [
        "Live-in home care services cover everyday life inside the home:",
        {
          ul: [
            "Personal care — bathing, dressing, toileting, grooming.",
            "Cooking, shopping, laundry and light housekeeping.",
            "Medication reminders and getting to appointments.",
            "Supervision for someone with memory loss.",
            "Company — the part families often value most.",
          ],
        },
        "Live-in help for elderly parents is often what lets a widowed parent stay in the house. Live-in care for elderly people, sometimes called live-in assistance for elderly adults, puts one familiar person in the home. A live-in caretaker for elderly relatives, or a live-in companion for elderly relatives who mainly need company and safety, not hands-on care, is called live-in companion care. A live-in helper for elderly people who also cooks and cleans overlaps with homemaker work — see [non-medical home care](/guides/non-medical-home-care/).",
      ],
    },
    {
      id: "rules",
      h2: "Live-in care rules: sleep, breaks and pay",
      blocks: [
        "The U.S. Department of Labor treats someone as a live-in domestic worker if they live in the home permanently, or for extended periods — five days a week (120 hours or more), or five consecutive days or nights.",
        {
          table: {
            caption: "Federal live-in rules (Department of Labor)",
            head: ["Rule", "What it means"],
            rows: [
              ["Sleep, meals and free time", "Can be excluded from paid hours by written agreement between caregiver and employer."],
              ["Interruptions", "If sleep or a break is interrupted by work, that time must be paid."],
              ["Free time", "Must be long enough for the caregiver to use it as their own."],
              ["Hired by a family directly", "Exempt from overtime, but must be paid at least minimum wage for all hours worked."],
              ["Hired through an agency", "Since January 1, 2015, agencies can't claim the live-in overtime exemption — hours over 40 a week earn overtime."],
              ["Records", "Hours worked must be tracked, even for live-in workers."],
            ],
          },
        },
        "State rules can go further — some states have domestic worker laws with their own overtime, rest-day or sleep-time rules. Check your state labor department before you set up private live-in care, and read the DOL fact sheet in the sources.",
      ],
    },
    {
      id: "cost",
      h2: "What live-in home care costs",
      blocks: [
        "Live-in care is usually priced per day, not per hour. Because sleep and break time can be excluded, it typically costs less than 24 hours of awake shift care. We haven't found a reliable national survey of live-in daily rates, so ask local agencies for a written quote that says:",
        {
          ul: [
            "The daily rate, and whether it changes on weekends or holidays.",
            "How many hours of sleep and breaks are built in.",
            "What happens — and what it costs — when a night is interrupted.",
            "Who covers the caregiver's days off.",
          ],
        },
        "For a baseline, CareScout's 2025 Cost of Care Survey put the national median for a non-medical caregiver at $35 an hour. Round-the-clock shift care at that rate is about $840 a day, which is the ceiling live-in care should come in under. See [the cost of in-home care](/guides/cost-of-in-home-care/) and [private pay home care](/guides/private-pay-home-care/).",
      ],
    },
    {
      id: "live-in-nurse",
      h2: "Live-in nurse and in-house nurse care",
      blocks: [
        "A live-in nurse or in-house nurse is uncommon and expensive. Most families searching for a live-in nurse for elderly parents need a live-in aide, with a nurse visiting for skilled tasks. CareScout's 2025 survey put private duty nursing at a national median of $90 an hour.",
        "In-house nurse care makes sense for ventilators, tube feeding or complex wound care. Live-in nursing care at home is usually arranged through a home health or private duty nursing agency. Medicare doesn't pay for it — see [in-home nursing care](/guides/in-home-nursing-care/) and [home health aides](/guides/home-health-aide/). If you're searching for in-house nurse care near me, confirm the agency's nursing license with your state.",
      ],
    },
    {
      id: "agency-vs-private",
      h2: "Live-in home care agency vs. private live-in care",
      blocks: [
        {
          table: {
            head: ["", "Live-in home care agency", "Private live-in care"],
            rows: [
              ["Who employs the caregiver", "The agency", "You (the family)"],
              ["Screening and training", "Agency does it", "You arrange it"],
              ["Relief caregivers", "Agency supplies them", "You find them"],
              ["Overtime", "Must pay over 40 hours", "Live-in exemption may apply"],
              ["Cost", "Higher", "Lower, plus payroll taxes"],
            ],
          },
        },
        "Live-in care companies and live-in care providers range from national franchises to small local agencies — compare [Home Instead](/compare/home-instead/), [Right at Home](/compare/right-at-home/) and [local agencies](/compare/local-home-care-agencies/). Independent live-in carers cost less but leave you as the employer; see [private pay home care](/guides/private-pay-home-care/) for taxes and contracts.",
      ],
    },
    {
      id: "finding-one",
      h2: "How to find a live-in carer",
      blocks: [
        "If you're looking for a live-in carer, start local. Searches like live-in home care near me, live-in carers near me, live-in caregivers near me or live-in caretakers near me all come down to the agencies and programs in your county.",
        {
          ol: [
            "**Decide on the model.** Agency, independent, or a family member paid through Medicaid.",
            "**Check the space.** A live-in caregiver needs a private room and a place for their things.",
            "**Contact agencies.** A live-in home care agency or agency for live-in carers can place someone quickly. Our [home care near me guide](/guides/home-care-near-me/) explains where to look.",
            "**Interview carefully.** Ask about experience, references, and how they handle night-time calls. Use our [agency checklist](/guides/how-to-choose-a-home-care-agency/).",
            "**Write an agreement.** Duties, hours, sleep time, days off, pay and notice period.",
          ],
        },
        "To find live-in caregiver help in your county, look at live-in caregiver agencies near me on our county pages — [Nassau County](/new-york/nassau/), [Orange County, California](/california/orange/), [Hillsborough County](/florida/hillsborough/), [Middlesex County, Massachusetts](/massachusetts/middlesex/) or [Marion County, Indiana](/indiana/marion/). If you're posting a \"live-in caregiver needed\" ad to hire a live-in caregiver privately, run a background check and ask for references.",
      ],
    },
    {
      id: "short-term",
      h2: "Short-term live-in carer options",
      blocks: [
        "Not every live-in arrangement is permanent. A short-term live-in carer can cover recovery after a hospital stay, a family caregiver's holiday, or the weeks while a longer plan is set up. Agencies often have minimum stays, so ask. For shorter needs, see [part-time and short-term home care](/guides/part-time-and-short-term-home-care/) and [respite care](/guides/respite-care/).",
      ],
    },
    {
      id: "paid-family",
      h2: "Paid live-in family caregiving: Structured Family Caregiving and Adult Foster Care",
      blocks: [
        "The most common live-in caregiver in America is a relative. Several state Medicaid programs pay a family member who lives with the person a daily or monthly stipend. They go by names like **Structured Family Caregiving**, **Adult Foster Care** and **Adult Family Living**.",
        {
          table: {
            caption: "Live-in family caregiver stipends reported on our state pages",
            head: ["State", "Program", "Reported pay"],
            rows: [
              ["[Indiana](/indiana/caregiver-pay/)", "Structured Family Caregiving", "$46–$80/day, tax-free"],
              ["[Georgia](/georgia/caregiver-pay/)", "Structured Family Caregiving", "$1,987–$2,400/month, generally tax-free"],
              ["[Connecticut](/connecticut/caregiver-pay/)", "Adult Family Living", "Up to about $500/week, tax-free"],
              ["[Massachusetts](/massachusetts/caregiver-pay/)", "Adult Foster Care", "About $1,000–$1,600/month, tax-free"],
              ["[South Dakota](/south-dakota/caregiver-pay/)", "Structured Family Caregiving", "About $392/week, tax-free"],
              ["[Ohio](/ohio/caregiver-pay/)", "Structured Family Caregiving", "About $1,500–$3,000/month"],
            ],
          },
        },
        "Because the caregiver lives with the person, these payments often qualify as tax-free difficulty-of-care payments under IRS rules. Read [Structured Family Caregiving](/guides/structured-family-caregiving/) and [how to get paid to care for a family member](/guides/get-paid-to-care-for-family-member/), or [check eligibility](/qualify/) in two minutes.",
        "Hourly self-directed programs can also pay a live-in relative — [CDPAP](/guides/cdpap/) in New York and [IHSS](/guides/ihss/) in California. Compare the options in [agency care vs. a paid family caregiver](/compare/home-care-agency-vs-paid-family-caregiver/) and see [Caregiver Homes](/compare/caregiver-homes/), which runs Structured Family Caregiving in some states.",
      ],
    },
    {
      id: "is-live-in-right",
      h2: "Live-in care options: is it right for your family?",
      blocks: [
        "Live-in care options work best when the person sleeps most nights, the home has room for a caregiver, and the family wants one steady face. They work poorly when night-time needs are frequent, when there's no private space, or when no relief caregiver is lined up.",
        "Live-in aides for seniors and live-in homecare for the elderly aren't the only answer. Compare live-in home care for seniors with [senior home care](/guides/senior-home-care/) at fewer hours, with [24-hour shift care](/guides/24-hour-home-care/), and with [assisted living](/compare/assisted-living-vs-home-care/). Our overview, [what is in-home care](/guides/what-is-in-home-care/), covers every option.",
      ],
    },
    {
      id: "working-well",
      h2: "Making live-in home help work",
      blocks: [
        "Live-in home help is a relationship as much as a job. What keeps it working:",
        {
          ul: [
            "**Clear duties** written down, including what's off-limits.",
            "**Protected time off** — daily breaks and at least one day off a week, with a relief caregiver.",
            "**A night log** so interruptions are recorded and paid.",
            "**Regular check-ins** between the family and the caregiver.",
          ],
        },
        "Whether you employ a live-in senior caregiver, a senior live-in caregiver, a live-in elderly caregiver or you are the caregiver yourself, respect for the caregiver's time is what stops burnout. That's true for private live-in care and for care live-in by a family member alike.",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "See if a live-in relative can be paid in your state." },
            { href: "/guides/structured-family-caregiving/", title: "Structured Family Caregiving", text: "Daily stipends for live-in family caregivers." },
            { href: "/guides/24-hour-home-care/", title: "24-hour home care", text: "Shift care vs. live-in and what each costs." },
            { href: "/guides/how-to-choose-a-home-care-agency/", title: "Choosing an agency", text: "Questions to ask before you sign." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What does a live-in caregiver do?",
      a: "A live-in caregiver lives in the home and helps with personal care, meals, housekeeping, medication reminders, appointments and supervision, with time off for sleep and breaks.",
    },
    {
      q: "Do live-in caregivers get paid for sleeping?",
      a: "Not necessarily. Federal rules let the caregiver and employer agree to exclude sleep, meal and free time from paid hours. Any time those breaks are interrupted by work must be paid.",
    },
    {
      q: "Is live-in care the same as 24-hour care?",
      a: "No. 24-hour care uses caregivers in shifts who stay awake. A live-in caregiver lives in the home and gets real sleep time.",
    },
    {
      q: "How much does a live-in caregiver cost?",
      a: "Agencies usually quote a daily rate that varies widely by location. Live-in care is generally cheaper than round-the-clock shift care, which is about $840 a day at the 2025 national median hourly rate.",
    },
    {
      q: "Can a family member be paid as a live-in caregiver?",
      a: "Yes. Programs such as Structured Family Caregiving and Adult Foster Care pay a relative who lives with the person a daily or monthly stipend, often tax-free.",
    },
    {
      q: "Do live-in caregivers get overtime?",
      a: "If an agency employs them, yes, for hours over 40 a week. If a family hires them directly, the federal live-in exemption from overtime may apply, but state law can differ.",
    },
    {
      q: "Does Medicare pay for a live-in caregiver?",
      a: "No. Medicare does not cover 24-hour care or ongoing personal care at home.",
    },
  ],
  related: [
    "/guides/24-hour-home-care/",
    "/guides/structured-family-caregiving/",
    "/guides/senior-home-care/",
  ],
  sources: [
    { label: "U.S. DOL Fact Sheet #79B: live-in domestic service workers", url: "https://www.dol.gov/agencies/whd/fact-sheets/79b-flsa-live-in-domestic-workers" },
    { label: "29 CFR 552.102: live-in domestic service employees", url: "https://www.law.cornell.edu/cfr/text/29/552.102" },
    { label: "CareScout 2025 Cost of Care Survey (press release)", url: "https://investor.genworth.com/news-events/press-releases/detail/1054" },
    { label: "IRS: certain Medicaid waiver payments may be excludable from income", url: "https://www.irs.gov/individuals/certain-medicaid-waiver-payments-may-be-excludable-from-income" },
    { label: "Medicare.gov: home health services", url: "https://www.medicare.gov/coverage/home-health-services" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/hero-latino-family.webp", alt: "A family sits together in their living room at home" },
  keywords: [
    "live in home care",
    "live in home care services",
    "live in home health care",
    "live in home help",
    "live in home caregiver",
    "live in caregiver",
    "live in carer",
    "live in carers near me",
    "live in senior caregiver",
    "in house nurse care",
    "live in home health aide",
    "live in caretaker",
    "live in care for elderly",
    "live in caregivers near me",
    "in house caregiver",
    "live in nurse",
    "live in help for elderly",
    "live in companion for elderly",
    "live in care providers",
    "live in companion",
  ],
};

export default guide;
