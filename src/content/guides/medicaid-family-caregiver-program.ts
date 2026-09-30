import type { Guide } from "../types";

const guide: Guide = {
  slug: "medicaid-family-caregiver-program",
  section: "guides",
  cluster: "programs",
  title: "Medicaid Family Caregiver Programs by State (2026)",
  description:
    "How Medicaid pays family caregivers in every state: program names, who can be paid, spouse rules and how to apply, from Florida and Georgia to Oregon.",
  h1: "Medicaid family caregiver programs: how every state pays family",
  short: "Medicaid caregiver programs",
  eyebrow: "All 50 states and DC",
  lead: "Every state has at least one Medicaid program that can pay a relative to provide care at home. They go by dozens of names — CDPAP, IHSS, Home Help, CDS, IRIS, Structured Family Caregiving — but they work the same way. Here is how to find yours.",
  answer:
    "A Medicaid family caregiver program pays a relative to provide home care to someone on Medicaid. The person needing care must qualify for Medicaid long-term care, then choose a family member as their caregiver through a self-directed or live-in option. The caregiver is paid hourly or by daily stipend. All 50 states and DC have one.",
  takeaways: [
    "Every state and DC runs at least one Medicaid caregiver program that can pay family, usually under a local name.",
    "The person receiving care qualifies — not the caregiver. Their Medicaid eligibility and care needs decide the hours.",
    "Adult children can be paid almost everywhere. Spouses can be paid in 22 states, and in some programs in 13 more.",
    "Some programs are entitlements with no waitlist; others, like Florida's and Indiana's waivers, have long waits.",
    "Medicare does not pay family caregivers. Medicaid is the main route, with the VA as a second one for veterans.",
  ],
  sections: [
    {
      id: "what-is-it",
      h2: "What is a Medicaid family caregiver program?",
      blocks: [
        "A **Medicaid family caregiver** program is any Medicaid benefit that lets the person receiving care choose a relative as their paid caregiver. There's no single federal program with that name. Instead, each state offers home care through its Medicaid plan and waivers, and most of them include a self-directed option where the member hires their own worker — and that worker can be family.",
        "So a **Medicaid caregiver program** in one state might be called Home Help, in another Consumer Directed Services, and in a third Structured Family Caregiving. The label changes; the idea doesn't. Your relative qualifies, a needs assessment sets the hours, and you are paid as a **Medicaid paid caregiver** — a state-paid caregiver for a family member — through a payroll agency or the state itself.",
        "People search for this in many ways: **family caregiver program**, **caregiver program**, **family caregiving program**, **relative caregiver program**, **government caregiver program** or **state caregiver program**. On state forms you may even see the paid relative called a Medicaid caretaker, attendant, personal assistant or individual provider. It's all the same benefit.",
        {
          callout: {
            tone: "info",
            title: "The short version",
            text: "A Medicaid program that pays a family caregiver exists in all 50 states and DC. Use the tables below to find yours, or [check eligibility in two minutes](/qualify/).",
          },
        },
      ],
    },
    {
      id: "how-medicaid-pays",
      h2: "Does Medicaid pay for family caregivers?",
      blocks: [
        "Yes. When people ask whether they can go about **getting paid as a caregiver by Medicaid**, the answer in every state is yes, as long as the person needing care qualifies and the program allows that relationship. Medicaid pays for family caregivers through two main models:",
        {
          ul: [
            "**Hourly, self-directed care.** The member is the employer, hires you, and you log hours. Examples: [CDPAP in New York](/guides/cdpap/), [IHSS in California](/guides/ihss/), Michigan Home Help, Missouri CDS. This is [consumer-directed care](/guides/consumer-directed-care/).",
            "**A daily stipend for a live-in caregiver.** You live with the member and an agency pays you a set amount per day. Example: [Structured Family Caregiving](/guides/structured-family-caregiving/) in Georgia, Indiana, Ohio and other states.",
          ],
        },
        "In both models a **Medicaid in-home caregiver** who is a relative is paid the same rate as anyone else. The limits are on which relatives can be paid — mainly spouses and parents of minor children.",
        "The federal basis is Medicaid's self-directed services options, which give members \"employer authority\" over their worker and sometimes \"budget authority\" over the care budget.",
      ],
    },
    {
      id: "government-assistance",
      h2: "Government assistance for family caregivers",
      blocks: [
        "Medicaid is the largest source of **government assistance for family caregivers**, because it's the only one that pays wages for ongoing care. But it isn't the only help. Here's the full picture of **government assistance for caregivers**:",
        {
          table: {
            head: ["Program", "Pays family?", "Who it's for"],
            rows: [
              ["Medicaid self-directed and live-in programs", "Yes — hourly or daily stipend", "People on Medicaid who need help with daily care"],
              ["VA caregiver programs", "Yes, for eligible veterans", "Veterans and their family caregivers"],
              ["State-funded (non-Medicaid) programs", "Sometimes", "Seniors just over Medicaid limits in some states"],
              ["National Family Caregiver Support Program", "No wages — respite, training, counseling", "Unpaid caregivers, through Area Agencies on Aging"],
              ["Medicare", "No", "See [does Medicare pay family caregivers](/guides/does-medicare-pay-family-caregivers/)"],
            ],
          },
        },
        "If Medicaid isn't an option yet, read [family caregiver support programs](/guides/family-caregiver-support-programs/) and [respite care](/guides/respite-care/) for help that doesn't depend on it. For most families, a **caregiver paid by the state** through Medicaid is the answer.",
      ],
    },
    {
      id: "programs-by-state",
      h2: "Programs that pay family caregivers, state by state",
      blocks: [
        "This table lists the **programs that pay family caregivers** in every state and DC. Each row links to that state's full caregiver program page, with pay, rules and how to apply.",
        { stateTable: "programs" },
        "Looking for **caregiver programs near me**, as many people type it? Start with your relative's state above, then the county page — for example [Los Angeles County](/california/los-angeles/), [Brooklyn (Kings County)](/new-york/kings/) or [Maricopa County](/arizona/maricopa/) — which lists local offices and agencies.",
      ],
    },
    {
      id: "who-qualifies",
      h2: "Who qualifies for a Medicaid caregiver program",
      blocks: [
        "Two people have to qualify: the person receiving care, and you.",
        {
          h3: "The person receiving care",
        },
        {
          ul: [
            "**Medicaid eligibility.** Long-term care Medicaid has its own income and asset rules, often more generous than standard Medicaid.",
            "**Care needs.** Usually help with at least one or two activities of daily living — bathing, dressing, eating, toileting, moving around — or a nursing-home level of care for waiver programs.",
            "**Living at home.** In a house, apartment or your home, not a facility.",
          ],
        },
        {
          h3: "The family caregiver",
        },
        {
          ul: [
            "Usually 18 or older, legally able to work in the US, and able to pass a background check.",
            "Not a relationship the program excludes — most often a spouse, a parent of a minor child, or the member's own legal representative.",
            "Some programs require a short orientation, CPR or aide training. Live-in programs require you to share a home.",
          ],
        },
        "Want the step-by-step version? Read [how to become a paid caregiver for a family member](/guides/become-a-paid-caregiver-for-a-family-member/).",
      ],
    },
    {
      id: "spouses",
      h2: "Can a spouse be paid? Rules in every state",
      blocks: [
        "Spouses are the relationship Medicaid restricts most. In 22 states a spouse can be paid, in 13 only under certain programs, and in 16 not at all. New York, Pennsylvania, Texas and Massachusetts are among the states that don't allow it; Wisconsin, Oregon, Colorado and Minnesota do.",
        { stateTable: "spouse" },
        "Where spouses are barred from the hourly program, a live-in stipend program sometimes allows them — Missouri's and Nevada's Structured Family Caregiving waivers are examples. Each state's [spousal caregiver page](/wisconsin/spousal-caregiver/) spells out the exceptions.",
      ],
    },
    {
      id: "florida-georgia",
      h2: "Florida and Georgia caregiver programs",
      blocks: [
        {
          h3: "Florida caregiver program",
        },
        "The **Florida Medicaid caregiver program** most families use is the Participant Directed Option inside Statewide Medicaid Managed Care Long-Term Care. There's also Consumer Directed Care Plus (CDC+) for people with developmental disabilities, and a Family Home Health Aide program that pays a trained parent $25 an hour for a medically complex child. So if you're a **caregiver in Florida** searching for a **Florida family caregiver program**, those are the three names to know.",
        "The catch: Florida's long-term care program is not an entitlement. The waitlist is ranked by a frailty score, not by how long you've waited. That makes the phone screening that sets the score important. Full details are on the [Florida caregiver program page](/florida/caregiver-program/), and county pages such as [Miami-Dade](/florida/miami-dade/) and [Broward](/florida/broward/) list local contacts. Searches for \"family caregiver program Florida\" or \"Medicaid caregiver program Florida\" lead to the same programs.",
        {
          h3: "Georgia caregiver program",
        },
        "The main **Georgia Medicaid caregiver program** for a relative who lives with the member is Structured Family Caregiving, which pays a daily stipend reported at about $1,987 to $2,400 a month by care level. Georgia also offers self-directed care in CCSP and SOURCE, the NOW and COMP waivers for people with developmental disabilities, and GAPP for medically fragile children. If you're a **caregiver in Georgia**, the [Georgia caregiver program page](/georgia/caregiver-program/) covers each — and our [Structured Family Caregiving guide](/guides/structured-family-caregiving/) explains the stipend. A **Medicaid caregiver program Georgia** families often overlook is SOURCE, which generally has no waitlist for people on SSI.",
      ],
    },
    {
      id: "midwest",
      h2: "Ohio, Michigan, Indiana, Missouri and Illinois",
      blocks: [
        "**Ohio family caregiver program** options include the PASSPORT Waiver's self-directed care, Next Generation MyCare and Structured Family Caregiving; spouses can be paid. See the [Ohio caregiver program](/ohio/caregiver-program/).",
        "**Michigan Home Help** is the state's core program. The **Home Help program Michigan** runs pays an individual caregiver — who can be an adult child or other relative, though not a spouse — directly through MDHHS after a caseworker assessment, at $17.13 an hour from January 2026. For home care, Michigan pays through Home Help; for skilled **home health care Michigan** Medicaid also covers agency nursing, and a **home health aide Michigan** agencies employ can be a family member in some cases. See [Michigan's caregiver program](/michigan/caregiver-program/) and [Wayne County](/michigan/wayne/).",
        "The **Indiana family caregiver program** most families know is Structured Family Caregiving: a live-in, tax-free daily stipend. A **paid family caregiver Indiana** approves can also work as an attendant under the PathWays and Health & Wellness waivers — but those waivers have had waitlists since 2024. For **in-home care Indiana** details, see the [Indiana caregiver program](/indiana/caregiver-program/) and [Marion County](/indiana/marion/).",
        "The main **Missouri caregiver program** is Consumer Directed Services, an entitlement with no waitlist, plus a small Structured Family Caregiving waiver for people with dementia. For **Missouri home health care** and **at-home care: Missouri** families start with an in-home assessment from the state's senior and disability services division. More at the [Missouri caregiver program](/missouri/caregiver-program/).",
        "An **Illinois caregiver program** means either the Community Care Program (seniors) or the Home Services Program (people with disabilities). Someone asking for a \"list of home care agencies in Illinois\" is usually better served by starting with the program, since it decides which agencies are paid. See [Illinois](/illinois/caregiver-program/).",
      ],
    },
    {
      id: "colorado",
      h2: "Colorado family caregivers: CDASS, IHSS and parent CNA",
      blocks: [
        "Colorado is one of the most flexible states. **Colorado family caregivers** can be paid through CDASS (the member hires and directs their own attendant), through Colorado's own program named IHSS, or — for parents of children with high needs — by becoming a certified nursing assistant paid through a home health agency. Spouses can be paid.",
        "So a **Colorado paid family caregiver** usually works in one of those three routes, and a **paid caregiver for family member Colorado** approves earns roughly $17 to $20 an hour, with the floor set by the state and Denver minimum wages. Any **family caregiver program Colorado** offers starts with the local Case Management Agency and enrollment in Health First Colorado (Medicaid). For **home health care: Colorado** Medicaid also covers skilled agency care, which is where the parent CNA pathway sits.",
        "Families who search \"family caregiver act Colorado\" are often thinking of Colorado's paid family and medical leave program (FAMLI), which can replace part of your wages for up to 12 weeks while you care for a relative with a serious health condition. It's leave, not caregiver pay. Others search \"Colorado family caregivers address\" looking for an office; the right door is the Case Management Agency for your county, listed on each county page like [Denver](/colorado/denver/) or [El Paso County](/colorado/el-paso/).",
        "Every **Colorado caregiver** route and rule is on the [Colorado caregiver program page](/colorado/caregiver-program/). For the parent CNA pathway, see [paid parent caregivers](/guides/paid-parent-caregiver/). If you're a **family caregiver: Colorado** is a state where spouses and parents both have a path.",
      ],
    },
    {
      id: "northeast",
      h2: "Connecticut, New Jersey, Maryland, Massachusetts and Rhode Island",
      blocks: [
        {
          h3: "Connecticut",
        },
        "The **CT caregiver program** families ask about is a mix: Community First Choice and the PCA Waiver for self-directed care, the CT Home Care Program for Elders, and Adult Family Living, which pays a live-in caregiver. A **CT family caregiver program** search usually lands on one of these; spouses can't be paid. The **family caregiver program CT** runs for live-in relatives, Adult Family Living, reports about $500 a week. For **CT home care** details and **caregivers: Connecticut** rules, see the [Connecticut caregiver program](/connecticut/caregiver-program/).",
        {
          h3: "New Jersey",
        },
        "The **NJ family caregiver program** under Medicaid is the Personal Preference Program, which gives the member a monthly budget to hire the caregiver of their choice — including a spouse. For seniors who aren't on Medicaid, New Jersey also runs Jersey Assistance for Community Caregiving (JACC), a state-funded program for people 60 and older who need a nursing-home level of care. JACC pays for services like home care, respite and adult day care, with an income-based copay. See the [New Jersey caregiver program](/new-jersey/caregiver-program/).",
        {
          h3: "Maryland",
        },
        "A **Maryland caregiver program** means Community First Choice, Community Personal Assistance Services or the Community Options Waiver — all of which let a participant hire a relative, and spouses can be paid. People who search \"home care agencies in Maryland\" or **in-home care Maryland** often don't realise the member can hire family directly. See [Maryland](/maryland/caregiver-program/).",
        {
          h3: "Massachusetts",
        },
        "A **paid caregiver Massachusetts** approves works through the MassHealth PCA program (hourly, self-hired) or Adult Foster Care, which pays a **live-in caregiver: Massachusetts** families use it for parents who move in. Spouses can't be paid in either. Any **caregiver: Massachusetts** or **family caregiver Massachusetts** question starts at the [Massachusetts caregiver program](/massachusetts/caregiver-program/).",
        {
          h3: "Rhode Island",
        },
        "The **RI caregiver program** is the Personal Choice Program, where the member hires and manages their own caregiver, plus the Independent Provider Program. See [consumer-directed care](/guides/consumer-directed-care/) and [Rhode Island](/rhode-island/caregiver-program/).",
      ],
    },
    {
      id: "west-south",
      h2: "Oregon, California, Texas, Virginia and other states",
      blocks: [
        "**Oregon home care** for family runs through the Consumer-Employed Provider program, the Independent Choices Program and a Spousal Pay Program. The **Oregon caregiver program** pays $20 to $24.10 an hour and spouses can be paid. See [Oregon](/oregon/caregiver-program/).",
        "A **California caregiver program** almost always means IHSS. A **caregiver: California** pays through IHSS earns a county-negotiated wage, and parents of minors are now eligible. Read our [IHSS guide](/guides/ihss/) or the [California caregiver program page](/california/caregiver-program/).",
        "**Texas caregivers** are paid through Consumer Directed Services in STAR+PLUS and several waivers, at a reported $15 an hour; spouses can't be paid. See [Texas](/texas/caregiver-program/) and [Harris County](/texas/harris/).",
        "The **Virginia caregiver program** is consumer-directed personal care in the CCC Plus Waiver. If you're looking for a **home care agency in Virginia**, note that in consumer direction the member hires the worker and a fiscal agent runs payroll. See [Virginia](/virginia/caregiver-program/).",
        "The **Kentucky family caregiver program** is Participant Directed Services, which reports the highest published hourly rate, $29.04. **Delaware caregivers** are paid through DSHP-Plus self-directed care, where spouses and parents can be hired. The **Wisconsin caregiver program** is [IRIS](/wisconsin/iris/), with no waitlist and paid spouses. Every other state is in the table above and on the [states index](/states/).",
      ],
    },
    {
      id: "keep-mom-home",
      h2: "Using a Medicaid caregiver program to keep a parent at home",
      blocks: [
        "Many families come to this from one worry: they want to keep a parent out of a nursing home. People type it as \"keep mom at home care\" — and Medicaid's home care programs were designed for exactly that, because home care usually costs the state less than a facility.",
        "If your parent is on Medicaid or close to its limits, follow the steps below. [Caring for aging parents](/guides/caring-for-aging-parents/) covers the wider decisions, and [Medicaid home care](/guides/medicaid-home-care/) explains what Medicaid covers at home.",
      ],
    },
    {
      id: "pay",
      h2: "How much Medicaid pays family caregivers",
      blocks: [
        "Pay depends on the state, the program and the approved hours. Of the 51 jurisdictions, 29 publish an hourly rate, from about $11 to $29.04. Others pay a daily or monthly stipend.",
        {
          table: {
            caption: "Selected reported rates (from each state's published figures)",
            head: ["State", "Program", "Reported pay"],
            rows: [
              ["[Kentucky](/kentucky/caregiver-pay/)", "Participant Directed Services", "$29.04/hr"],
              ["[Oregon](/oregon/caregiver-pay/)", "Consumer-Employed Provider", "$20–$24.10/hr"],
              ["[New York](/new-york/caregiver-pay/)", "CDPAP", "$18.65–$20.65/hr"],
              ["[Michigan](/michigan/caregiver-pay/)", "Home Help", "$15.88–$17.13/hr"],
              ["[Indiana](/indiana/caregiver-pay/)", "Structured Family Caregiving", "$46–$80/day"],
              ["[Ohio](/ohio/caregiver-pay/)", "Structured Family Caregiving", "$1,500–$3,000/month"],
            ],
          },
        },
        "For every state, see [family caregiver pay rates](/guides/family-caregiver-pay-rates/).",
      ],
    },
    {
      id: "apply",
      h2: "How to apply for a Medicaid caregiver program",
      blocks: [
        {
          ol: [
            "**Find your program.** Use the state tables above or [our two-minute check](/qualify/).",
            "**Apply for Medicaid long-term care** if your relative isn't already enrolled.",
            "**Request a home care assessment** from the state agency, Area Agency on Aging or managed-care plan.",
            "**Choose the self-directed or live-in option** and name yourself as the caregiver.",
            "**Enroll with the payroll agency** — background check, tax forms, direct deposit.",
          ],
        },
        "Some families prefer an agency route instead; see [home care agencies that hire family members](/guides/home-care-agencies-that-hire-family-members/). Sunroom Care helps with the enrollment paperwork at no cost to your family; we're paid by the program, and we're not a state agency.",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "Five questions, your programs and pay range." },
            { href: "/guides/get-paid-to-care-for-family-member/", title: "Get paid to care for family", text: "The complete guide to paid family care." },
            { href: "/guides/consumer-directed-care/", title: "Consumer-directed care", text: "How self-directed programs let you hire family." },
            { href: "/guides/structured-family-caregiving/", title: "Structured Family Caregiving", text: "Daily stipends for live-in family caregivers." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Does Medicaid pay for a family caregiver?",
      a: "Yes. Every state has at least one Medicaid program that lets the person receiving care hire a relative, who is then paid hourly or by daily stipend.",
    },
    {
      q: "Is there a federal family caregiver program that pays wages?",
      a: "No single federal program pays family caregivers directly. Medicaid is run by each state, and the VA pays caregivers of some veterans. The National Family Caregiver Support Program offers respite and training, not wages.",
    },
    {
      q: "Can I be paid to care for my spouse through Medicaid?",
      a: "In 22 states yes, and in 13 more under certain programs. Sixteen states, including New York, Texas, Pennsylvania and Massachusetts, do not pay spouses.",
    },
    {
      q: "Do I have to live with the person I care for?",
      a: "Not for hourly self-directed programs. Live-in stipend programs such as Structured Family Caregiving and Adult Foster Care do require you to share a home.",
    },
    {
      q: "Is there a waitlist?",
      a: "It depends on the program. State-plan programs such as IHSS, CDPAP, Michigan Home Help and Missouri CDS have no waitlist. Many waivers, including Florida's and Indiana's, do.",
    },
    {
      q: "What if my relative isn't on Medicaid yet?",
      a: "Apply for long-term care Medicaid and ask for a home care assessment at the same time. Long-term care Medicaid often has higher income limits than people expect.",
    },
    {
      q: "Does it cost anything to use Sunroom Care?",
      a: "No. Sunroom Care is paid by the program, never by families, and is not a state agency.",
    },
  ],
  related: [
    "/guides/get-paid-to-care-for-family-member/",
    "/guides/consumer-directed-care/",
    "/guides/family-caregiver-pay-rates/",
  ],
  sources: [
    { label: "Medicaid.gov: self-directed services", url: "https://www.medicaid.gov/medicaid/long-term-services-supports/self-directed-services" },
    { label: "NJ Division of Aging Services: Jersey Assistance for Community Caregiving (JACC)", url: "https://www.nj.gov/humanservices/doas/services/a-k/jacc/index.shtml" },
    { label: "Michigan MDHHS: Home Help individual caregivers", url: "https://www.michigan.gov/mdhhs/doing-business/providers/providers/other/homehelp/individual-providers/individual-caregivers" },
    { label: "Colorado FAMLI: paid family and medical leave", url: "https://famli.colorado.gov/" },
    { label: "Each state's published Medicaid program rules", url: "https://www.medicaid.gov/state-overviews/index.html" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/og-hands-paperwork.webp", alt: "Hands filling out Medicaid enrollment paperwork on a table" },
  keywords: [
    "medicaid family caregiver",
    "medicaid caregiver program",
    "family caregiver program",
    "medicaid caregiver",
    "colorado family caregivers",
    "home help program michigan",
    "medicaid in home caregiver",
    "government assistance for family caregivers",
    "medicaid paid caregiver",
    "missouri caregiver program",
    "indiana family caregiver program",
    "caregiver program",
    "medicaid pay for family caregiver",
    "relative caregiver program",
    "programs that pay family caregivers",
    "illinois caregiver program",
    "georgia caregiver program",
    "florida caregiver program",
    "state caregiver program",
    "ohio family caregiver program",
  ],
};

export default guide;
