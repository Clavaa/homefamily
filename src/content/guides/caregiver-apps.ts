import type { Guide } from "../types";

const guide: Guide = {
  slug: "caregiver-apps",
  section: "guides",
  cluster: "careers",
  title: "Caregiver Apps and Websites: What Each Kind Does",
  description:
    "Caregiver apps and websites explained: family coordination apps, EVV apps home health aides must use, scheduling tools, state caregiver sites and support.",
  h1: "Caregiver apps and websites",
  short: "Caregiver apps",
  eyebrow: "Coordination, scheduling and visit verification",
  lead: "There are hundreds of caregiving apps, and most families only need two or three. Here's how the main kinds differ — apps that help a family share the load, the visit-verification apps paid caregivers are required to use, scheduling tools, and the state websites that actually connect you to paid care.",
  answer:
    "Caregiver apps fall into four groups: family coordination apps with shared calendars, medication lists and messaging; electronic visit verification (EVV) apps, which Medicaid requires paid personal care and home health aides to use; scheduling apps for agencies and care teams; and support and matching websites. Which you need depends on whether you're caring for family, being paid, or hiring help.",
  takeaways: [
    "Family coordination apps — such as Caring Village and Lotsa Helping Hands — help relatives share tasks, schedules and updates.",
    "If you're paid through Medicaid for personal care, you'll almost certainly use an EVV app to clock in and out. It's federally required.",
    "Your state or payroll agency chooses the EVV app, not you.",
    "State websites and matching services, like Oregon's Carina, connect caregivers and people who need care.",
    "No app replaces the program that pays for care — start there if cost is the problem.",
  ],
  sections: [
    {
      id: "types",
      h2: "Caregiver app types: which one do you need?",
      blocks: [
        "A **caregiver app** can mean four very different things. Picking the right kind saves you from downloading a dozen you won't use.",
        {
          table: {
            head: ["Type", "What it does", "Who uses it"],
            rows: [
              ["Family coordination", "Shared calendar, to-do lists, medication lists, messaging, documents", "Families sharing care of a relative"],
              ["Electronic visit verification (EVV)", "Records the start, end and details of each paid visit", "Aides paid through Medicaid personal care or home health"],
              ["Scheduling and agency apps", "Shifts, assignments, timesheets, care notes", "Agencies and their caregivers"],
              ["Support, matching and state sites", "Find caregivers or work, training, support groups, program info", "Caregivers and families"],
            ],
          },
        },
        "A simple rule of thumb: if you're caring for a relative without pay, start with a coordination app. If you're paid through Medicaid, the EVV app comes with the job. If you're hiring help, you'll lean on scheduling tools and matching websites. Most families end up with one from each group they actually need, not one of everything.",
      ],
    },
    {
      id: "family-caregiver-app",
      h2: "Family caregiver app options for sharing the load",
      blocks: [
        "A **family caregiver app** helps several people keep track of one person's care: who's taking Mom to the doctor, which pills changed, what the nurse said. Two widely used examples, described from their own sites:",
        { h3: "Caring Village app" },
        "The **Caring Village app** is built for family caregivers. Its site lists a wellness journal, care plans, a shared calendar, medication tracking, document storage, secure messaging and shared to-do lists, plus an AI assistant for caregiving questions. It has a free plan for a small group and paid tiers for larger families.",
        { h3: "Lotsa Helping Hands" },
        "Lotsa Helping Hands is built around a care calendar: you post requests for help — meals, rides to appointments, visits — and friends and neighbors sign up. It's free, with no eligibility requirements, and has a mobile app.",
        "Other tools families use: a shared phone calendar, a group text and a shared notes document. For many families, that's enough. If you're coordinating more than a few helpers, a dedicated app is worth it.",
      ],
    },
    {
      id: "evv",
      h2: "Apps for home health aides: electronic visit verification",
      blocks: [
        "If you're paid to give care through Medicaid — including as a paid family caregiver — the most important of all **apps for home health aides** is the one you don't choose: your state's EVV app.",
        "Section 12006 of the 21st Century Cures Act requires states to use electronic visit verification for Medicaid personal care services (by January 1, 2020) and home health services (by January 1, 2023). EVV records six things about every visit:",
        {
          ol: [
            "The type of service performed",
            "The person receiving the service",
            "The date of the service",
            "The location where it was delivered",
            "The person providing the service",
            "The time the service began and ended",
          ],
        },
        "In practice, these **home health aide apps** usually run on your phone, and you check in at the start and end of each visit. Nebraska, for example, verifies independent providers' visits by smartphone. Your state decides which methods it accepts.",
        {
          callout: {
            tone: "info",
            title: "You don't pick the EVV app",
            text: "Your state, managed-care plan or payroll agency chooses it. When you enroll as a paid caregiver, ask which app to use and get it set up before your first shift — visits that aren't verified can delay pay. See [how to become a paid caregiver](/guides/become-a-paid-caregiver-for-a-family-member/).",
          },
        },
      ],
    },
    {
      id: "scheduling",
      h2: "Caregiver schedule app and home health care app tools for agencies",
      blocks: [
        "Agencies use a **home health care app** or scheduling platform to assign shifts, share care plans and collect notes. As an aide, your agency will tell you which **caregiver schedule app** it uses; many combine scheduling with EVV.",
        "For families who hire several private caregivers, a shared calendar or a scheduling app built for shift work can replace the whiteboard on the fridge. What to look for:",
        {
          ul: [
            "Shift swaps and open-shift alerts",
            "Clock-in and clock-out records you can export for payroll",
            "Care notes visible to the whole team",
            "Access controls, so each caregiver only sees what they need",
          ],
        },
        "If you're paying private caregivers directly, keep good time records — you may be a household employer. See [private pay home care](/guides/private-pay-home-care/).",
      ],
    },
    {
      id: "best",
      h2: "Best caregiver apps: how to choose",
      blocks: [
        "We don't publish a ranking of the **best caregiver apps** — features and prices change often, and the best one is the one your family will actually open. Ask these questions instead:",
        {
          ul: [
            "**Is it free?** A **free home care app** or a free tier is enough for many families. Check what's limited.",
            "**Can everyone use it?** Older relatives and busy siblings need something simple, on the phones they already have.",
            "**Where is the data stored?** Medication lists and documents are sensitive. Read the privacy policy.",
            "**Does it do the one thing you need?** Shared calendar, medication tracking, or asking for help — not all three equally well.",
          ],
        },
        "**Home care apps** are a supplement, not a plan. If the hard part is paying for help, the answer is a program, not an app — see [what in-home care costs](/guides/cost-of-in-home-care/) and [family caregiver support programs](/guides/family-caregiver-support-programs/).",
      ],
    },
    {
      id: "websites",
      h2: "Caregiver websites and caregiver sites worth knowing",
      blocks: [
        "Beyond apps, a few kinds of **caregiver website** are genuinely useful:",
        {
          ul: [
            "**Government program sites.** Your state Medicaid agency, Area Agency on Aging and the federal Eldercare Locator are where paid care actually starts.",
            "**State caregiver registries and matching services.** Some states run their own — see Oregon below.",
            "**Job and matching sites**, where families post jobs and caregivers post profiles. See [caregiver jobs](/guides/caregiver-jobs/).",
            "**Support communities** for caregivers of people with dementia, cancer or disabilities.",
          ],
        },
        "When you're comparing **caregiver sites**, look for who runs it and how it makes money. A **homecare website** that sells leads to agencies will steer you toward agencies; a state site will show you the programs.",
      ],
    },
    {
      id: "oregon",
      h2: "Oregon caregiver program website and Carina",
      blocks: [
        "People search for the **Oregon caregiver program website** because Oregon runs one of the more developed state systems. The Oregon Home Care Commission supports Carina, an online care-matching service that helps people who need in-home services find homecare workers, personal support workers and personal care attendants, and helps those workers find jobs.",
        "To be paid through Oregon's programs, the person receiving care still needs an assessment through the local Area Agency on Aging or APD office. Oregon's programs — the Consumer-Employed Provider program, Independent Choices and Spousal Pay — are covered on the [Oregon caregiver program](/oregon/caregiver-program/) page, with pay on [Oregon caregiver pay](/oregon/caregiver-pay/). Local pages: [Multnomah County](/oregon/multnomah/), [Lane County](/oregon/lane/).",
      ],
    },
    {
      id: "state-portals",
      h2: "State caregiver portals in other states",
      blocks: [
        "Many states now run caregiver enrollment and pay through online portals or a single statewide payroll company:",
        {
          ul: [
            "**New York:** since April 2025 every CDPAP consumer and caregiver registers with PPL, the single statewide fiscal intermediary. See [CDPAP](/guides/cdpap/) and [PPL compared](/compare/ppl-public-partnerships/).",
            "**Washington:** individual providers are employed through CDWA, the Consumer Directed Employer, which handles contracting, background checks, training and payroll. See [Washington caregiver program](/washington/caregiver-program/).",
            "**California:** IHSS providers and recipients use the state's IHSS payroll system; see [IHSS](/guides/ihss/) and [California caregiver pay](/california/caregiver-pay/).",
            "**Wisconsin:** IRIS participants work with a fiscal employer agent. See [IRIS](/wisconsin/iris/).",
          ],
        },
        "Your state's page lists its programs and how to apply — browse the [states list](/states/).",
      ],
    },
    {
      id: "support-apps",
      h2: "Caregiver support apps for your own wellbeing",
      blocks: [
        "Caregivers look after everyone but themselves. Support apps and online groups can help with stress, sleep and isolation, and some disease-specific organizations run their own caregiver communities.",
        "Apps help, but real breaks help more. Look into [respite care](/guides/respite-care/) — many states and the National Family Caregiver Support Program fund it through Area Agencies on Aging — and [part-time home care](/guides/part-time-and-short-term-home-care/).",
      ],
    },
    {
      id: "paid-caregivers",
      h2: "If you're a paid family caregiver: the apps you'll actually use",
      blocks: [
        "Paid family caregivers usually end up with just three things on their phone:",
        {
          ol: [
            "**The EVV app** your state or payroll agency assigns, to clock in and out.",
            "**The payroll portal** for pay stubs, tax forms and direct deposit.",
            "**A family coordination app** or shared calendar, if siblings help too.",
          ],
        },
        "Not being paid yet? See [how to get paid to care for a family member](/guides/get-paid-to-care-for-family-member/), [family caregiver pay rates](/guides/family-caregiver-pay-rates/), or [check eligibility](/qualify/) in two minutes.",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "See if a relative's program can pay you." },
            { href: "/guides/caregiver-jobs/", title: "Caregiver jobs", text: "Pay, training and finding clients." },
            { href: "/guides/family-caregiver-support-programs/", title: "Support programs", text: "Respite, training and help for caregivers." },
            { href: "/guides/home-care-agencies-that-hire-family-members/", title: "Agencies that hire family", text: "The agency route to paid family care." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is the best app for family caregivers?",
      a: "It depends on what you need. Coordination apps like Caring Village focus on shared calendars, medications and messaging; Lotsa Helping Hands focuses on organizing help from friends. Choose one your whole family will use.",
    },
    {
      q: "Do paid caregivers have to use an app?",
      a: "If you're paid through Medicaid for personal care or home health, you'll almost certainly use electronic visit verification, which federal law requires. Your state decides which app or method you use.",
    },
    {
      q: "What does EVV track?",
      a: "Six things: the type of service, the person receiving it, the date, the location, the person providing it, and the start and end times.",
    },
    {
      q: "Can I choose which EVV app I use?",
      a: "Usually not. Your state, managed-care plan or payroll agency decides. Ask during enrollment and set it up before your first shift.",
    },
    {
      q: "Are there free caregiver apps?",
      a: "Yes. Lotsa Helping Hands is free, and Caring Village has a free plan for a small group. Shared phone calendars and group texts also work for many families.",
    },
    {
      q: "What is Oregon's caregiver matching website?",
      a: "The Oregon Home Care Commission supports Carina, an online service that matches people who need in-home services with homecare workers and helps workers find jobs.",
    },
  ],
  related: [
    "/guides/caregiver-jobs/",
    "/guides/family-caregiver-support-programs/",
    "/guides/become-a-paid-caregiver-for-a-family-member/",
  ],
  sources: [
    { label: "Medicaid.gov: electronic visit verification", url: "https://www.medicaid.gov/medicaid/home-community-based-services/guidance/electronic-visit-verification-evv" },
    { label: "California DHCS: EVV implementation (six required data elements)", url: "https://www.dhcs.ca.gov/services/ltc/Documents/HCBA-PL-23-005-CalEVV-Implementation.pdf" },
    { label: "Caring Village: what is Caring Village?", url: "https://caringvillage.com/?p=3571" },
    { label: "Lotsa Helping Hands", url: "https://lotsahelpinghands.com/" },
    { label: "Oregon Home Care Commission: Carina", url: "https://www.oregon.gov/dhs/SENIORS-DISABILITIES/HCC/Pages/carina.aspx" },
    { label: "ACL: National Family Caregiver Support Program", url: "https://acl.gov/programs/support-caregivers/national-family-caregiver-support-program" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/caregiver-phone.webp", alt: "A caregiver uses a phone app to check a care schedule" },
  keywords: [
    "caregiver app",
    "caregiver website",
    "home care apps",
    "homecare website",
    "home health care app",
    "caregiver sites",
    "best caregiver apps",
    "caring village app",
    "free home care app",
    "oregon caregiver program website",
    "home health aide apps",
    "apps for home health aides",
    "caregiver schedule app",
    "family caregiver app",
  ],
};

export default guide;
