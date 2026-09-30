import type { Guide } from "../types";

const guide: Guide = {
  slug: "24-hour-home-care",
  section: "guides",
  cluster: "types-of-care",
  title: "24-Hour Home Care: Costs, Live-In vs. Shifts (2026)",
  description:
    "How 24-hour care at home works: live-in vs. shift care, what round-the-clock care costs, labor rules, and how Medicaid and paid family caregivers can help.",
  h1: "24-hour home care: how round-the-clock care at home works",
  short: "24-hour home care",
  eyebrow: "Types of home care",
  lead: "When someone can't safely be alone at any hour, families look at 24-hour care at home. It can be done two ways — rotating shifts of awake caregivers, or a live-in caregiver who sleeps in the home — and the cost difference is large. Here's how each works, what it costs, and how Medicaid and family caregivers can cover part of it.",
  answer:
    "24-hour home care means someone is with the person at home around the clock. It's delivered either by awake caregivers working shifts, usually two 12-hour or three 8-hour shifts, or by a live-in caregiver who gets sleep and break time. At the 2025 national median of $35 an hour, fully staffed shift care costs about $840 a day.",
  takeaways: [
    "24-hour care can be **shift care** (awake caregivers all night) or **live-in care** (one caregiver who sleeps in the home).",
    "At CareScout's 2025 national median of $35 an hour, 24 hours of shift care is about $840 a day before overtime or agency minimums.",
    "Medicare does not pay for 24-hour care at home.",
    "Medicaid can pay for some of the hours, and in every state it can pay a family member for them.",
    "Most families cover 24-hour care with a mix of paid hours, family shifts and Medicaid.",
  ],
  sections: [
    {
      id: "what-is-24-hour-care",
      h2: "What is 24-hour home care?",
      blocks: [
        "**24-hour home care** means someone is present in the home day and night so the person receiving care is never alone. It's also called 24-hour care at home, 24-hour care in home, 24-hour in-home care (or 24-hr in-home care), round-the-clock care or 7-day home care. You'll see it written as 24/7 care, as 24hr care at home, or searched as \"24 hrs home care\" or \"24 home care services\".",
        "People usually need 24-hour care for elderly relatives in three situations, and 24-hour care at home for elderly parents is most common in these: advanced dementia with wandering or night-time confusion; high fall risk with frequent night-time toileting; or the last months of a serious illness. 24-hour senior care at home lets them stay put instead of moving to a facility.",
        "Most 24-hour care is non-medical: help with bathing, toileting, meals, repositioning and supervision. If round-the-clock nursing is needed, that's a different and much more expensive service — see [24-hour nursing care at home](#24-hour-nursing) below.",
      ],
    },
    {
      id: "24-hour-vs-live-in",
      h2: "24-hour care vs. 24-hour live-in care",
      blocks: [
        "The two models sound similar but work very differently.",
        {
          table: {
            head: ["", "24-hour shift care", "24-hour live-in care"],
            rows: [
              ["Who", "Two or three caregivers rotating", "One caregiver (with relief days) who lives in the home"],
              ["Awake at night?", "Yes, always", "No — needs a real sleep break"],
              ["Best for", "Frequent night-time needs, wandering, heavy care", "Someone who mostly sleeps through the night"],
              ["Cost", "Highest — every hour is paid", "Lower — sleep and break time may be unpaid by agreement"],
              ["Continuity", "Several faces", "One familiar face"],
            ],
          },
        },
        "A 24-hour live-in caregiver arrangement works only if the caregiver can actually sleep. If the person needs help several times a night, live-in 24-hour care usually turns into shift care. Read the full guide to [live-in caregivers](/guides/live-in-caregiver/) for how live-in care works.",
      ],
    },
    {
      id: "shift-staffing",
      h2: "How 24-hour caregivers are scheduled",
      blocks: [
        "A 24-hour caregiver schedule usually looks like one of these:",
        {
          ul: [
            "**Two 12-hour shifts** — for example 7am–7pm and 7pm–7am. Fewer handoffs, but long shifts.",
            "**Three 8-hour shifts** — easier on caregivers, more handoffs.",
            "**Live-in plus relief** — one live-in caregiver four or five days, another for the rest of the week.",
            "**Family plus paid** — family covers evenings and weekends; paid aides cover days or nights.",
          ],
        },
        "A full-time caregiver works about 40 hours a week, so true 24/7 care needs roughly four full-time people — 168 hours divided by 40 — once you count days off, holidays and sick days. That's why a 24-hour care agency is often easier than hiring on your own: it handles the rota and the backup. Full-time care at home is a staffing job as much as a caring one.",
      ],
    },
    {
      id: "rules",
      h2: "Pay rules for 24-hour caregivers",
      blocks: [
        "Federal labor rules affect what 24-hour care costs, so it's worth knowing the basics.",
        {
          ul: [
            "**Agencies must pay overtime.** Since January 1, 2015, home care agencies and other third-party employers can't claim the overtime exemptions for companionship or live-in workers. Hours over 40 a week are paid at time and a half.",
            "**24-hour shifts and sleep.** Under federal rules, when an employee is on duty for 24 hours or more, employer and employee can agree to exclude a scheduled sleep period of up to 8 hours — but if the caregiver can't get at least 5 hours' sleep, the whole period counts as work time.",
            "**Live-in workers** hired directly by a family are exempt from overtime but must be paid at least minimum wage for all hours worked. Sleep, meals and free time can be excluded by agreement, and interruptions count as work.",
          ],
        },
        "State laws can be stricter. Ask the agency how it bills overnight and live-in shifts, and read the Department of Labor's fact sheets linked in the sources before you hire directly.",
      ],
    },
    {
      id: "cost",
      h2: "What does 24-hour home care cost?",
      blocks: [
        "CareScout's 2025 Cost of Care Survey put the national median for a non-medical in-home caregiver at **$35 an hour**. Multiply that by 24 and you get a rough picture of round-the-clock care — before overtime, agency minimums or local price differences.",
        {
          table: {
            caption: "24-hour care at the 2025 national median of $35/hour (simple math, not a quote)",
            head: ["Period", "Awake shift care"],
            rows: [
              ["One day (24 hours)", "about $840"],
              ["One week (168 hours)", "about $5,880"],
              ["30 days", "about $25,200"],
            ],
          },
        },
        {
          callout: {
            tone: "money",
            title: "Live-in is usually cheaper",
            text: "Many agencies quote live-in care as a flat daily rate because sleep and break time can be excluded. Ask for the daily rate in writing and what counts as a night interruption.",
          },
        },
        "For comparison, the same survey put the national median for a semi-private nursing home room at $315 a day. That's why 24-hour care at home paid privately can cost more than a 24-hour care facility. See [the cost of in-home care](/guides/cost-of-in-home-care/) and [assisted living vs. home care](/compare/assisted-living-vs-home-care/).",
      ],
    },
    {
      id: "24-hour-nursing",
      h2: "24-hour nursing care at home",
      blocks: [
        "24-hour nursing care is different from 24-hour caregivers. A nurse gives skilled care — ventilators, tube feeding, complex wound care. CareScout's 2025 survey put private duty nursing at a national median of **$90 an hour**, so full-time nursing care at home costs far more than aide care.",
        "Most people who search for 24/7 nurse care at home, 24hr nursing care at home or a 24-hour elderly care nursing service actually need aides overnight, with a nurse visiting as needed. Ask the doctor which tasks truly need a nurse. See [in-home nursing care](/guides/in-home-nursing-care/) and [home health aides](/guides/home-health-aide/).",
      ],
    },
    {
      id: "home-health",
      h2: "24-hour home health care: what Medicare covers",
      blocks: [
        "Families often hope Medicare will pay for 24-hour home health care. It won't. Medicare.gov lists \"24-hour-a-day care at your home\" among the things Medicare home health doesn't cover. Medicare covers part-time or intermittent skilled care for people who are homebound — a nurse or therapist visit, not round-the-clock staffing.",
        "So full-time home health care, 24hr home health care, a 24-hour home health aide and a full-time home health aide are paid for by Medicaid, the VA, long-term care insurance or the family — not Medicare. Read [does Medicare pay family caregivers](/guides/does-medicare-pay-family-caregivers/) and [home health vs. home care](/guides/home-health-vs-home-care/).",
      ],
    },
    {
      id: "medicaid",
      h2: "How Medicaid can cover part of 24-hour care",
      blocks: [
        "Medicaid pays for home care in every state, but the number of hours comes from a needs assessment and each program's limits. For someone who needs 24-hour care, Medicaid hours rarely cover everything, so families fill the gaps.",
        {
          ol: [
            "**Get the assessment right.** Describe night-time needs in detail — how often they wake, wander or need the bathroom.",
            "**Use the self-directed option** so the approved hours can go to a caregiver you choose, including a relative. See [consumer-directed care](/guides/consumer-directed-care/).",
            "**Consider a live-in stipend program.** Structured Family Caregiving and Adult Foster Care pay a daily stipend to a caregiver who lives with the person. See [Structured Family Caregiving](/guides/structured-family-caregiving/).",
            "**Fill the rest** with family shifts, respite and private-pay hours.",
          ],
        },
        "Some states approve very high hours. New York's [CDPAP](/guides/cdpap/) can pay for extended care, and California's [IHSS](/guides/ihss/) sets hours by county assessment. Check your state's [caregiver program](/states/), or [check eligibility](/qualify/) in two minutes. [Medicaid home care](/guides/medicaid-home-care/) explains the programs.",
      ],
    },
    {
      id: "family-caregivers",
      h2: "Family members as full-time caregivers",
      blocks: [
        "Most 24-hour care at home is actually given by family, often unpaid. Medicaid in every state can pay a relative as a full-time caregiver for the approved hours. A son or daughter who is already a full-time live-in caregiver may be able to get paid for the hours they already work.",
        "Stipend programs suit this especially well. Indiana's Structured Family Caregiving reports about $46–$80 a day to the live-in caregiver, and Massachusetts Adult Foster Care pays a tax-free stipend — see [Indiana caregiver pay](/indiana/caregiver-pay/) and [Massachusetts](/massachusetts/caregiver-program/). Georgia reports $1,987–$2,400 a month; see [Georgia caregiver pay](/georgia/caregiver-pay/).",
        { stateTable: "pay" },
        "Whether you call yourself a full-time live-in carer or a live-in full-time carer, burnout is the biggest risk. Build in [respite care](/guides/respite-care/) from the start.",
      ],
    },
    {
      id: "finding-care",
      h2: "24-hour caregivers & home care services near you",
      blocks: [
        "If you're searching for 24-hour caregivers near me, 24-hour in-home care near me or 24-hour senior care near me, start with who serves your county. People also type \"home care around me\" or \"care agency around me\" — the answer is the same: use the [home care near me guide](/guides/home-care-near-me/) to find licensed agencies and county programs.",
        "When you compare 24-hour home care services, ask every 24-hour care agency the same questions: do caregivers stay awake overnight, how do they bill live-in versus shift care, who covers a missed shift at 3am, and how are caregivers screened. Our [agency checklist](/guides/how-to-choose-a-home-care-agency/) has the full list. Some agencies offer home care 24 hours a day only as live-in care, so ask. For 24-hour home health care near me searches, confirm the agency is licensed for the level of care you need.",
        "County pages help too — for example [Queens](/new-york/queens/), [San Diego County](/california/san-diego/), [Broward County](/florida/broward/), [Dallas County](/texas/dallas/) and [Bergen County](/new-jersey/bergen/).",
      ],
    },
    {
      id: "caregiver-24-hour-home-care",
      h2: "What a caregiver does in 24-hour home care",
      blocks: [
        "Caregiver 24-hour home care duties are the same as daytime care, spread across the clock: personal care, toileting, meals, medication reminders, repositioning to prevent sores, and supervision. At night the job is mostly watching and responding — help to the bathroom, calming confusion, preventing falls.",
        "Good 24-hour caregiver services keep a shift log so each caregiver knows what happened before they arrived. Ask for one. See [non-medical home care](/guides/non-medical-home-care/) for what aides can and can't do.",
      ],
    },
    {
      id: "is-it-right",
      h2: "Is 24-hour care in your own home the right choice?",
      blocks: [
        "24-hour care in your own home keeps a person in familiar surroundings, with one-to-one attention no facility can match. But it's expensive, depends on reliable staffing, and can wear out family. Ask yourselves:",
        {
          ul: [
            "Can we cover every shift, including holidays and sick days?",
            "Is the home safe for night-time care — bathroom access, lighting, space for a caregiver to sleep?",
            "Would a full-time in-home care for elderly plan with fewer paid hours plus family be enough?",
            "Would assisted living or a nursing home be safer or more affordable?",
          ],
        },
        "If the answer is uncertain, start with overnight care or [part-time care](/guides/part-time-and-short-term-home-care/) and add hours. Our [senior home care guide](/guides/senior-home-care/) and [what is in-home care](/guides/what-is-in-home-care/) cover the broader options, and 24-hour health care at home is always easier to plan before a crisis than during one.",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "See if Medicaid can pay for hours — or pay a family caregiver." },
            { href: "/guides/live-in-caregiver/", title: "Live-in caregivers", text: "How live-in care works, rules and costs." },
            { href: "/guides/cost-of-in-home-care/", title: "Cost of in-home care", text: "What care costs and how to budget." },
            { href: "/guides/structured-family-caregiving/", title: "Structured Family Caregiving", text: "Daily stipends for live-in family caregivers." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How much does 24-hour home care cost?",
      a: "At CareScout's 2025 national median of $35 an hour, 24 hours of awake shift care is about $840 a day before overtime and local differences. Live-in care, quoted as a daily rate, usually costs less.",
    },
    {
      q: "What is the difference between 24-hour care and live-in care?",
      a: "24-hour care uses caregivers in shifts who stay awake. Live-in care uses one caregiver who lives in the home and gets sleep and break time.",
    },
    {
      q: "Does Medicare pay for 24-hour home care?",
      a: "No. Medicare.gov lists 24-hour-a-day care at home as something Medicare home health does not cover.",
    },
    {
      q: "Does Medicaid pay for 24-hour care at home?",
      a: "Medicaid pays for the hours an assessment approves, which is sometimes a lot but rarely all 24 hours. Families usually combine Medicaid hours with family care and private pay.",
    },
    {
      q: "Can a family member be paid for 24-hour care?",
      a: "A relative can be paid for the Medicaid-approved hours in every state. Stipend programs such as Structured Family Caregiving pay a daily amount to a live-in family caregiver.",
    },
    {
      q: "Do 24-hour caregivers get to sleep?",
      a: "Live-in caregivers must get sleep time. For 24-hour shifts, federal rules allow up to 8 hours of sleep to be unpaid by agreement, but only if the caregiver usually gets at least 5 hours of sleep.",
    },
    {
      q: "Is 24-hour home care cheaper than a nursing home?",
      a: "Not usually when paid privately. Around-the-clock shift care at the national median costs more per day than a semi-private nursing home room.",
    },
  ],
  related: [
    "/guides/live-in-caregiver/",
    "/guides/cost-of-in-home-care/",
    "/guides/senior-home-care/",
  ],
  sources: [
    { label: "CareScout 2025 Cost of Care Survey (press release)", url: "https://investor.genworth.com/news-events/press-releases/detail/1054" },
    { label: "Medicare.gov: home health services", url: "https://www.medicare.gov/coverage/home-health-services" },
    { label: "U.S. DOL Fact Sheet #79B: live-in domestic service workers", url: "https://www.dol.gov/agencies/whd/fact-sheets/79b-flsa-live-in-domestic-workers" },
    { label: "U.S. DOL Fact Sheet #79A: companionship services", url: "https://www.dol.gov/agencies/whd/fact-sheets/79a-flsa-companionship" },
    { label: "29 CFR 785.22: duty of 24 hours or more", url: "https://www.law.cornell.edu/cfr/text/29/785.22" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/rural-home.webp", alt: "A house in the countryside with lights on in the evening" },
  keywords: [
    "24hr care at home",
    "24 home care",
    "24 hour home care services",
    "24hr care",
    "24 hour care",
    "24 hour care at home",
    "24 hour home health care",
    "24 hour in home care",
    "24 hour care at home for elderly",
    "24 hour care in home",
    "home care 24 hours",
    "24 hr in home care",
    "full time caregiver",
    "24 hour nursing care at home",
    "24 hour caregiver",
    "24 hour care for elderly",
    "24 hour nursing care",
    "24 hour live in care",
    "full time nursing care at home",
    "24 hour care agency",
  ],
};

export default guide;
