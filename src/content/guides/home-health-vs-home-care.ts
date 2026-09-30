import type { Guide } from "../types";

const guide: Guide = {
  slug: "home-health-vs-home-care",
  section: "guides",
  cluster: "types-of-care",
  title: "Home Health vs. Home Care: What's the Difference?",
  description:
    "Home health is short-term skilled care a doctor orders and Medicare can cover. Home care is non-medical daily help. Who provides each and who pays.",
  h1: "Home health care vs. home care: what's the difference?",
  short: "Home health vs. home care",
  eyebrow: "Skilled care or daily help",
  lead: "The names sound almost the same, but they are two different kinds of help, paid for in different ways. Knowing which one your parent or spouse needs saves weeks of calls to the wrong agencies.",
  answer:
    "Home health care is skilled medical care at home, such as nursing, wound care and therapy, ordered by a doctor and given by a Medicare-certified agency, usually for a few weeks. Home care is non-medical help with bathing, dressing and meals, often for months or years. Medicare covers home health if you qualify; it does not cover ongoing home care.",
  takeaways: [
    "**Home health** = skilled, short-term, doctor-ordered. **Home care** = non-medical daily help, often long-term.",
    "Medicare pays the full cost of covered home health visits for people who are homebound and need part-time skilled care.",
    "Medicare does not pay for around-the-clock care or for personal care when that is the only help someone needs.",
    "Medicaid covers home health in every state and pays for ongoing personal care through many programs, including ones that pay family members.",
    "Private pay non-medical care had a national median of $35 an hour in CareScout's 2025 survey.",
  ],
  sections: [
    {
      id: "short-answer",
      h2: "Home health vs. home care: the short answer",
      blocks: [
        "**Home health** is medical. A doctor or other provider orders it, a licensed nurse or therapist delivers it, and it usually ends when the person has recovered from an illness, injury or hospital stay. **Home care** is everyday help — bathing, dressing, meals, getting to the bathroom, company and supervision — from an aide or caregiver who does not need a nursing license.",
        "Most families need both at some point. A parent comes home from the hospital with in home health care from an agency: a nurse checks the wound, a therapist works on walking. Three weeks later the nurse stops coming, but your parent still can't shower safely alone. That second need is home care, and it is paid for differently.",
        "If you are not sure which one you are looking for, start with [what in-home care means](/guides/what-is-in-home-care/) and our guide to [non-medical home care](/guides/non-medical-home-care/).",
      ],
    },
    {
      id: "home-health-care-services",
      h2: "What home health care services include",
      blocks: [
        "Home health care services are skilled care delivered where the patient lives. Medicare.gov lists what it covers under the home health benefit:",
        {
          ul: [
            "**Skilled nursing** — wound care, injections, IV therapy, and watching an unstable condition.",
            "**Therapy** — physical therapy, occupational therapy and speech-language pathology.",
            "**Medical social services** — help with the social and emotional side of an illness.",
            "**Home health aide visits** — hands-on personal care, but only while the person is also getting skilled care.",
            "**Medical equipment and supplies** ordered as part of the plan of care.",
          ],
        },
        "These in home health care services are what people mean by medical home care services, or medical in home care. When a discharge planner says \"we'll set you up with home health,\" this is the list. Medical in home care services are visit-based: a nurse may come twice a week for an hour, a therapist three times a week. Nobody stays all day.",
        "If you need a nurse for longer shifts, that is [in-home nursing care](/guides/in-home-nursing-care/) or private duty nursing — a separate service, usually private pay or Medicaid.",
      ],
    },
    {
      id: "home-health-agency",
      h2: "What a home health agency does",
      blocks: [
        "A home health agency is the organization that employs the nurses, therapists and aides, and bills Medicare, Medicaid or insurance. For Medicare to pay, it has to be a **Medicare-certified** home health agency. The agency sends a nurse or therapist to assess the patient, writes the plan of care with the doctor, schedules visits and keeps the doctor updated.",
        "You will see the same thing called a home health care provider, one of the in home health care providers, a home health provider, an at home healthcare agency or a \"health at home agency.\" Home health provider services are the visits and coordination that agency delivers. Some home health care agencies also run a non-medical division; ask which side you are talking to.",
        {
          h3: "Agencies for home health care vs. home care agencies",
        },
        "Agencies for home health care are licensed and, if they bill Medicare, certified and inspected against federal rules. In home healthcare agencies must use aides who have finished at least 75 hours of training (see [home health aides](/guides/home-health-aide/)). A non medical home care agency is licensed by the state in many places but is not Medicare-certified, because Medicare does not pay for what it does. Neither is better — they do different jobs.",
      ],
    },
    {
      id: "non-medical-home-care",
      h2: "Non-medical home care: help with daily life",
      blocks: [
        "Non medical home care is help with the activities of daily living. Non medical home care services usually include:",
        {
          ul: [
            "Bathing, dressing, grooming and toileting",
            "Meals, light housekeeping, laundry and errands",
            "Medication reminders (not giving medication)",
            "Walking, transfers and fall prevention",
            "Company, supervision and respite for a family caregiver",
          ],
        },
        "People also search for \"non medical home health care,\" which mixes the two terms. What they almost always want is non-medical home care: an aide or companion for a set number of hours a week. This is the care that can last for years, and it is the care most families end up paying for or getting through Medicaid. See [senior home care](/guides/senior-home-care/) and [part-time and short-term home care](/guides/part-time-and-short-term-home-care/).",
      ],
    },
    {
      id: "side-by-side",
      h2: "Home health care vs. home care side by side",
      blocks: [
        {
          table: {
            caption: "The two kinds of care at home",
            head: ["", "Home health care", "Non-medical home care"],
            rows: [
              ["What it is", "Skilled nursing, therapy, aide visits tied to skilled care", "Personal care, homemaking, companionship"],
              ["Who orders it", "A doctor or allowed provider, after a face-to-face visit", "The family or the person receiving care"],
              ["Who provides it", "RNs, LPNs, therapists, trained home health aides", "Home care aides, caregivers, companions — sometimes family"],
              ["How long", "Usually weeks, while there is a skilled need", "Months or years"],
              ["Schedule", "Short visits", "Hours a day, up to [24-hour care](/guides/24-hour-home-care/) or [live-in](/guides/live-in-caregiver/)"],
              ["Medicare pays?", "Yes, if the person qualifies", "No"],
              ["Medicaid pays?", "Yes — a mandatory Medicaid benefit", "Often, through personal care and waiver programs"],
              ["Private pay", "Possible, but less common", "Common; see [private pay home care](/guides/private-pay-home-care/)"],
            ],
          },
        },
        "A useful rule: if the task needs a nursing license or a therapist's skill, it's home health. If a trained, caring adult could do it, it's home care.",
      ],
    },
    {
      id: "medicare-home-health",
      h2: "Who orders home health, and when Medicare pays",
      blocks: [
        "Medicare's home health benefit is generous but narrow. According to Medicare.gov, you qualify when all of these are true:",
        {
          ol: [
            "**You are homebound.** Leaving home isn't recommended because of your condition, or you can't leave without help, and leaving takes a major effort.",
            "**A doctor or allowed provider has seen you in person** and orders home health as part of a plan of care.",
            "**You need part-time or intermittent skilled care** — nursing, physical therapy, speech therapy, or continuing occupational therapy.",
            "**A Medicare-certified home health agency** provides the care.",
          ],
        },
        {
          callout: {
            tone: "money",
            title: "What you pay",
            text: "You pay nothing for covered home health services. For medical equipment, you pay 20% of the Medicare-approved amount after the Part B deductible. \"Part-time or intermittent\" generally means fewer than 8 hours a day and 28 hours or less a week, up to 35 hours a week in some cases.",
          },
        },
        {
          h3: "What Medicare does not cover",
        },
        "Medicare does not pay for 24-hour care at home, meal delivery, homemaker services unrelated to the care plan, or personal care when that is the only care you need. It also does not pay family caregivers — see [does Medicare pay family caregivers](/guides/does-medicare-pay-family-caregivers/).",
      ],
    },
    {
      id: "who-pays",
      h2: "Private home health care, Medicaid and insurance",
      blocks: [
        "When Medicare doesn't apply, there are three other ways to pay.",
        {
          h3: "Medicaid",
        },
        "Home health is a mandatory Medicaid benefit, so every state covers it. Personal care and most long-term home care come through optional benefits and waivers, which vary by state. Many of those programs let the person receiving care hire a relative — see [Medicaid home care](/guides/medicaid-home-care/) and [how to get paid to care for a family member](/guides/get-paid-to-care-for-family-member/).",
        {
          h3: "Private pay home health",
        },
        "Private home health care means paying an agency directly, without Medicare. Families use private home healthcare agencies when a parent isn't homebound, needs more hours than Medicare allows, or wants private duty home health care — a nurse or aide for long shifts. Private home health care services cost more than non-medical care because licensed staff cost more. Ask for rates in writing. Some people shorten it to \"private home health\"; it is the same thing.",
        {
          h3: "Long-term care insurance and the VA",
        },
        "Many long-term care insurance policies pay for home health and home care once you need help with daily activities. The VA has home care benefits for eligible veterans. See [the cost of in-home care](/guides/cost-of-in-home-care/) for how each source works.",
      ],
    },
    {
      id: "seniors",
      h2: "Home health care for elderly parents and seniors",
      blocks: [
        "Most home health for seniors — home healthcare for seniors, in other words — starts after a hospital or rehab stay. Senior home health care is the same Medicare benefit anyone gets; it's simply that older adults use it most. Home health services for seniors are good at getting someone back on their feet. They are not designed to keep a frail parent safe at home for years.",
        "That's the gap families run into with home health care for parents. Home health for elderly patients may end while the need for help does not. When you plan home health care for an elderly parent, ask the agency on day one: **\"When you discharge her, who will help with bathing and meals?\"** The answer is usually non-medical home care, a family caregiver, or both.",
        "Home health care options for seniors, from most to least medical:",
        {
          ul: [
            "Skilled home health visits (Medicare, Medicaid, insurance)",
            "[In-home nursing](/guides/in-home-nursing-care/) or private duty nursing for complex needs",
            "A [home health aide](/guides/home-health-aide/) for personal care",
            "[Non-medical home care](/guides/non-medical-home-care/) for daily help",
            "A paid family caregiver through Medicaid — see [caring for aging parents](/guides/caring-for-aging-parents/)",
          ],
        },
        "Adult home health care for a younger adult with a disability works the same way. In home health care for seniors and for younger adults both rest on the doctor's order and the skilled need.",
      ],
    },
    {
      id: "long-term",
      h2: "Long-term home health care: programs and options",
      blocks: [
        "Long term home health care, in the strict sense, is rare. Medicare's benefit has no set limit on visits as long as you keep qualifying, but most people stop needing skilled care. What families call long-term home health is usually long-term home care plus occasional skilled visits.",
        "The home health care programs that pay for long-term help at home are mostly Medicaid programs: personal care, waivers, and self-directed options. Each state runs its home health program and home care programs differently. Our [state programs table](/states/) shows what yours offers, and you can [check eligibility in two minutes](/qualify/).",
        "The home health care system is really two systems: a medical one paid by Medicare and insurance, and a long-term care one paid mostly by Medicaid and families. Your home health options depend on which side your need falls.",
      ],
    },
    {
      id: "workers",
      h2: "Home health workers and caregivers: who comes to the house",
      blocks: [
        "Home health workers include registered nurses, licensed practical nurses, physical and occupational therapists, speech therapists, social workers and aides. Home health care workers who do hands-on personal care are home health aides; the federal government counts them together with personal care aides as \"home health and personal care aides.\" The Bureau of Labor Statistics reported a median wage of $35,800 a year for that group in May 2025.",
        "You'll also hear \"home health assistant\" or \"health caregiver\" — usually a home health aide. When people search caregivers home health care or caregivers home health services, they often want an aide who can help with bathing and dressing. On the home care side, that caregiver can be a relative who gets paid through Medicaid — read [become a paid caregiver for a family member](/guides/become-a-paid-caregiver-for-a-family-member/).",
      ],
    },
    {
      id: "near-me",
      h2: "Finding home health care agencies near me",
      blocks: [
        "Searches for home health care agencies near me, home health care agency near me or home health services near me all have one best first stop for Medicare home health: **Medicare's Care Compare**, which lists every certified agency serving a ZIP code, with inspection results and patient survey scores. Your doctor or hospital discharge planner should also give you a list.",
        "For home care, there is no federal list. Use your state's home care licensing lookup, your Area Agency on Aging, and our [home care near me guide](/guides/home-care-near-me/).",
        {
          table: {
            caption: "What you're looking for and where to look",
            head: ["What you need", "Common searches", "Where to start"],
            rows: [
              ["Skilled nursing or therapy after a hospital stay", "home healthcare near me, in home health care near me, home health care services near me, in home health care services near me", "Care Compare, your doctor, the discharge planner"],
              ["A certified agency", "home health companies near me, home health care companies near me, health care agencies near me, in home health care agencies near me", "Care Compare, then call two or three"],
              ["Daily help, not medical", "non medical home care near me, non medical home care agency near me", "[Home care near me](/guides/home-care-near-me/), [local agencies](/compare/local-home-care-agencies/)"],
              ["Care for an older parent", "senior home health care near me, in home health care for seniors near me", "[Senior home care](/guides/senior-home-care/), your Area Agency on Aging"],
              ["Private pay", "private home health care near me, at home health care near me", "[Private pay home care](/guides/private-pay-home-care/)"],
            ],
          },
        },
        "Whatever you typed — in home healthcare near me, home health places near me, home health care places near me, home health care nearby, in home health services near me, in home health near me, home health assistance near me, health home care near me, home health caregivers near me or home health care workers near me — narrow it with two questions: is the need skilled, and who is paying? Then you only call the agencies that fit.",
      ],
    },
    {
      id: "best-agency",
      h2: "How to choose the best home health agency near me",
      blocks: [
        "\"Best home health care near me\" depends on your parent's needs, but the checks are the same. Before you pick from the best home health care agencies near me in a search result, ask:",
        {
          ol: [
            "Are you Medicare-certified, and do you take my parent's insurance or Medicaid plan?",
            "Can you start within the time the doctor wants?",
            "Who supervises aides, and how often does a nurse visit?",
            "What happens when my parent is discharged from home health — do you offer home care too?",
            "What did your last state inspection find?",
          ],
        },
        "The best home health agency near me is the one that answers these clearly and in writing. For the best in home health care near me on the non-medical side, use our [checklist for choosing a home care agency](/guides/how-to-choose-a-home-care-agency/).",
      ],
    },
    {
      id: "phone-numbers",
      h2: "Home health phone numbers: who to call first",
      blocks: [
        "People often search for a home health phone number, a phone number for home health care, a home health care number or simply a home health number. There isn't one national number. The phone number for home health you want is the intake line of a certified agency that serves your ZIP code — Care Compare lists them, and the discharge planner can call for you.",
        "For home care or help paying for it, call your local Area Agency on Aging or your state Medicaid agency. Your [state page](/states/) lists how to apply in your state.",
      ],
    },
    {
      id: "by-state",
      h2: "Home health care by state",
      blocks: [
        "Medicare's home health rules are the same everywhere. Medicaid home care is not. A few states people ask about:",
        {
          ul: [
            "**Home health care NJ:** New Jersey's Medicaid self-directed option is the Personal Preference Program. See [New Jersey](/new-jersey/) and [Bergen County](/new-jersey/bergen/).",
            "**Home health care in Florida:** Florida's long-term care program has a participant-directed option, with reported pay of $15–$25 an hour. See [Florida](/florida/) and [Miami-Dade County](/florida/miami-dade/).",
            "**Home health care Connecticut:** Connecticut offers Community First Choice and the CT Home Care Program. See the [Connecticut caregiver program](/connecticut/caregiver-program/).",
            "**Home health care agencies Delaware:** Care Compare is the quickest answer to \"home health care Delaware\" searches; DSHP-Plus self-directed care reports $13–$21 an hour. See [Delaware](/delaware/) and [New Castle County](/delaware/new-castle/).",
            "**Home health care Washington:** Washington reports $22.52–$27.28 an hour for paid caregivers. See [Washington](/washington/caregiver-pay/) and [King County](/washington/king/).",
            "**List of home health agencies in Georgia:** Care Compare gives the current list by county. Georgia also runs Structured Family Caregiving — see [Georgia](/georgia/caregiver-program/) and [Fulton County](/georgia/fulton/).",
          ],
        },
      ],
    },
    {
      id: "words",
      h2: "Local home health care: the words people use",
      blocks: [
        "Local home health care goes by many names, and the names don't always match the service. \"At home health,\" \"health at home,\" \"health at home care,\" \"at home health care,\" \"in home health\" and \"at home healthcare\" usually mean medical home health. \"Senior home health,\" \"senior home healthcare\" and \"senior care home health\" are often searches for non-medical care for an older parent. Some searches double up the words — \"home home health,\" \"at home home health,\" \"care home health\" or \"at home care home health\" — or mix them, as in \"home and health care,\" \"healthcare home services,\" \"health home care agency\" or \"care in the home health services.\"",
        "Home health care facilities, strictly speaking, don't exist: home health is delivered in your home, not in a facility. If you want a facility, compare [assisted living vs. home care](/compare/assisted-living-vs-home-care/).",
        "Home health care assistance, home healthcare assistance and home medical assistance can mean either kind of care. If you're looking for home health care help, the question to settle is whether you need skilled care. If you need home health care services for recovery, start with the doctor. If you need daily help, start with home care.",
      ],
    },
    {
      id: "family",
      h2: "Can a family member be paid to provide home care?",
      blocks: [
        "For home health, no — Medicare pays certified agencies, not relatives. For home care, often yes. Medicaid programs in every state and DC can pay a family member for the personal care a relative needs, and some agencies hire family members as aides. See [home care agencies that hire family members](/guides/home-care-agencies-that-hire-family-members/) and [agency care vs. a paid family caregiver](/compare/home-care-agency-vs-paid-family-caregiver/).",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "See if Medicaid could pay for care — or pay you." },
            { href: "/guides/home-health-aide/", title: "Home health aides", text: "What aides do, their training and what they cost." },
            { href: "/guides/in-home-nursing-care/", title: "In-home nursing", text: "Nurse visits, private duty nursing and costs." },
            { href: "/guides/private-pay-home-care/", title: "Private pay home care", text: "Hiring a caregiver privately or through an agency." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is the difference between home health and home care?",
      a: "Home health is skilled medical care, such as nursing and therapy, ordered by a doctor and usually short-term. Home care is non-medical help with daily activities like bathing, dressing and meals, and can last for years.",
    },
    {
      q: "Does Medicare pay for home health care?",
      a: "Yes, if you are homebound, a doctor orders it after seeing you, you need part-time or intermittent skilled care, and a Medicare-certified agency provides it. You pay nothing for covered home health services.",
    },
    {
      q: "Does Medicare pay for non-medical home care?",
      a: "No. Medicare does not cover personal care or homemaker services when that is the only help you need, and it does not cover 24-hour care at home.",
    },
    {
      q: "Who pays for long-term home care?",
      a: "Mostly Medicaid, long-term care insurance, the VA for eligible veterans, and families paying privately. Many Medicaid programs can pay a family member as the caregiver.",
    },
    {
      q: "How long does Medicare home health last?",
      a: "As long as you keep qualifying. There is no set number of visits, but care ends when you no longer need skilled services or are no longer homebound.",
    },
    {
      q: "How much does home care cost?",
      a: "CareScout's 2025 Cost of Care Survey put the national median for non-medical caregiver services at $35 an hour, or $80,080 a year at 44 hours a week. Local rates vary widely.",
    },
    {
      q: "Can a home health aide help with bathing?",
      a: "Yes. Under Medicare home health, an aide can help with personal care like bathing, but only while you are also getting skilled nursing or therapy.",
    },
    {
      q: "How do I find a Medicare-certified home health agency?",
      a: "Use Medicare's Care Compare tool on Medicare.gov and search by ZIP code, or ask your doctor or hospital discharge planner for a list of agencies that serve your area.",
    },
  ],
  related: [
    "/guides/non-medical-home-care/",
    "/guides/home-health-aide/",
    "/guides/in-home-nursing-care/",
  ],
  sources: [
    { label: "Medicare.gov: Home health services coverage", url: "https://www.medicare.gov/coverage/home-health-services" },
    { label: "Medicare.gov: What's home health care?", url: "https://www.medicare.gov/what-medicare-covers/whats-home-health-care" },
    { label: "Medicare Care Compare", url: "https://www.medicare.gov/care-compare/" },
    { label: "Medicaid.gov: Mandatory and optional Medicaid benefits", url: "https://www.medicaid.gov/medicaid/benefits/mandatory-optional-medicaid-benefits" },
    { label: "42 CFR 484.80: Home health aide services", url: "https://www.law.cornell.edu/cfr/text/42/484.80" },
    { label: "BLS: Home health and personal care aides", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" },
    { label: "CareScout 2025 Cost of Care Survey results", url: "https://investor.genworth.com/news-events/press-releases/detail/1054" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/sunroom-grandmother.webp", alt: "An older woman sits in a sunlit room at home" },
  keywords: [
    "home health care services",
    "home health care agencies",
    "agencies for home health care",
    "in home health care",
    "private home health care",
    "home health",
    "home health care provider",
    "home health agency",
    "at home healthcare",
    "home health care agencies near me",
    "home health services near me",
    "home health care agency near me",
    "home healthcare near me",
    "in home health care providers",
    "non medical home care",
    "home healthcare for seniors",
    "home health care for elderly",
    "private pay home health",
    "long term home health care",
    "private duty home health care",
  ],
};

export default guide;
