import type { Guide } from "../types";

const guide: Guide = {
  slug: "home-care-near-me",
  section: "guides",
  cluster: "finding-care",
  title: "Home Care Near Me: How to Find Local Caregivers",
  description:
    "How to find home care near you: local agencies, caregivers in your area, the Eldercare Locator, Area Agencies on Aging and state and county directories.",
  h1: "Home care near me: how to find local help",
  short: "Home care near me",
  eyebrow: "Find help in your area",
  lead: "Searching for home care near you usually turns up a page of ads. Here is how to find real, licensed local help — agencies, independent caregivers and public programs — and how to tell whether a family member could be the paid caregiver instead.",
  answer:
    "To find home care near you, call the Eldercare Locator at 1-800-677-1116 or visit eldercare.acl.gov to reach your local Area Agency on Aging, which knows the licensed agencies and public programs in your county. Then check your state's license lookup, compare three agencies, and ask whether Medicaid could pay a family caregiver.",
  takeaways: [
    "The Eldercare Locator (1-800-677-1116) connects you to your local Area Agency on Aging — a free, neutral starting point.",
    "Search results for home care near you are mostly ads and referral services; verify every agency's license with your state.",
    "Decide first what kind of help you need: companionship, hands-on personal care, or skilled nursing.",
    "If your relative qualifies for Medicaid, the program may pay an agency — or pay a family member to be the caregiver.",
    "Our state and county pages list the programs that pay for home care where your relative lives.",
  ],
  sections: [
    {
      id: "where-to-start",
      h2: "Home care near me: where to start",
      blocks: [
        "When you type \"home care near me\" into a search bar, the first results are usually paid ads, followed by referral websites that pass your phone number to several agencies at once. That can mean a lot of calls and not much clarity. There is a better order to do this in.",
        {
          ol: [
            "**Work out what kind of help is needed** — a few hours of company and meals, daily hands-on personal care, or nursing.",
            "**Call your local Area Agency on Aging** through the Eldercare Locator. It is free and not selling anything.",
            "**Get a list of home care agencies near me** from your state's licensing office, and cross-check any agency you find online.",
            "**Compare three agencies** using the same questions. Our guide on [how to choose a home care agency](/guides/how-to-choose-a-home-care-agency/) has a checklist.",
            "**Check whether Medicaid pays** — including for a family caregiver. [Check eligibility](/qualify/) in two minutes.",
          ],
        },
        "Families searching for in home care near me, elderly home care near me or home care services near me are all asking the same question: who, locally, can come to the house and help?",
      ],
    },
    {
      id: "eldercare-locator",
      h2: "Find local home care services through the Eldercare Locator",
      blocks: [
        "The [Eldercare Locator](https://eldercare.acl.gov/) is a free public service of the U.S. Administration for Community Living. You can call **1-800-677-1116**, text, chat or email, and trained staff will connect you to the Area Agency on Aging for your parent's county.",
        "Your Area Agency on Aging (sometimes called an Aging and Disability Resource Center, or ADRC) is the closest thing to a neutral guide to local home care services. It can:",
        {
          ul: [
            "Give you local home care agencies and adult day programs in the county.",
            "Tell you whether your parent may qualify for Medicaid home care or state-funded programs.",
            "Arrange an assessment for some programs.",
            "Connect you to the [family caregiver support program](/guides/family-caregiver-support-programs/) in your area, which can fund [respite care](/guides/respite-care/), training and counseling.",
          ],
        },
        {
          callout: {
            tone: "info",
            title: "Start with the county, not the city",
            text: "Most public home care programs are run county by county. When you call, give the county your relative lives in — not yours, if you live somewhere else.",
          },
        },
      ],
    },
    {
      id: "what-help",
      h2: "In home care services near me: which kind do you need?",
      blocks: [
        "Before you call anyone, be clear about the help your relative needs. It changes who you should call.",
        {
          table: {
            head: ["What your relative needs", "Who provides it", "Search for"],
            rows: [
              ["Company, meals, errands, light housework", "Companion or homemaker agencies", "In home services near me, home care assistance near me"],
              ["Bathing, dressing, toileting, transfers", "Personal care agencies, PCAs, home care aides", "Home care aides near me, PCA agency near me"],
              ["Nursing, wound care, therapy after a hospital stay", "Medicare-certified home health agencies", "[Home health vs. home care](/guides/home-health-vs-home-care/)"],
              ["Someone overnight or all day", "Live-in or 24-hour care", "[Live-in caregiver](/guides/live-in-caregiver/), [24-hour home care](/guides/24-hour-home-care/)"],
              ["A break for the family caregiver", "Respite programs, adult day centers", "[Respite care](/guides/respite-care/)"],
            ],
          },
        },
        "Senior in home care services near me searches usually mean the first two rows — [non-medical home care](/guides/non-medical-home-care/). That's also what most Medicaid home care programs pay for. Adult home care near me searches often come from families of younger adults with disabilities, who are served by the same programs. For more on the types, see [senior home care](/guides/senior-home-care/) and [what is in-home care](/guides/what-is-in-home-care/).",
      ],
    },
    {
      id: "by-state",
      h2: "Home care agencies near me, by state",
      blocks: [
        "Every state runs home care differently — different program names, different pay, different rules on whether a spouse or adult child can be the paid caregiver. Our state pages summarize what's available and how to apply. Pick the state your relative lives in:",
        {
          chips: [
            { href: "/new-york/", label: "New York" },
            { href: "/california/", label: "California" },
            { href: "/texas/", label: "Texas" },
            { href: "/florida/", label: "Florida" },
            { href: "/pennsylvania/", label: "Pennsylvania" },
            { href: "/illinois/", label: "Illinois" },
            { href: "/ohio/", label: "Ohio" },
            { href: "/georgia/", label: "Georgia" },
            { href: "/north-carolina/", label: "North Carolina" },
            { href: "/michigan/", label: "Michigan" },
            { href: "/new-jersey/", label: "New Jersey" },
            { href: "/virginia/", label: "Virginia" },
            { href: "/washington/", label: "Washington" },
            { href: "/arizona/", label: "Arizona" },
            { href: "/massachusetts/", label: "Massachusetts" },
            { href: "/tennessee/", label: "Tennessee" },
            { href: "/indiana/", label: "Indiana" },
            { href: "/missouri/", label: "Missouri" },
            { href: "/maryland/", label: "Maryland" },
            { href: "/wisconsin/", label: "Wisconsin" },
            { href: "/colorado/", label: "Colorado" },
            { href: "/minnesota/", label: "Minnesota" },
            { href: "/nevada/", label: "Nevada" },
            { href: "/connecticut/", label: "Connecticut" },
          ],
        },
        "Not listed? See [all 50 states and DC](/states/). Each state page links to its caregiver program, reported pay and spouse rules — for example [caregiver programs in Texas](/texas/caregiver-program/) or [caregiver pay in California](/california/caregiver-pay/).",
      ],
    },
    {
      id: "by-county",
      h2: "Home care in my area: county pages for large counties",
      blocks: [
        "Home care in my area really means home care in my county: that's where assessments are done, where many programs are run, and where local caregivers live. These are some of the largest counties we cover:",
        {
          chips: [
            { href: "/california/los-angeles/", label: "Los Angeles County, CA" },
            { href: "/illinois/cook/", label: "Cook County, IL" },
            { href: "/texas/harris/", label: "Harris County, TX" },
            { href: "/arizona/maricopa/", label: "Maricopa County, AZ" },
            { href: "/california/san-diego/", label: "San Diego County, CA" },
            { href: "/california/orange/", label: "Orange County, CA" },
            { href: "/florida/miami-dade/", label: "Miami-Dade County, FL" },
            { href: "/new-york/kings/", label: "Brooklyn (Kings County), NY" },
            { href: "/new-york/queens/", label: "Queens, NY" },
            { href: "/new-york/bronx/", label: "The Bronx, NY" },
            { href: "/texas/dallas/", label: "Dallas County, TX" },
            { href: "/texas/tarrant/", label: "Tarrant County, TX" },
            { href: "/texas/bexar/", label: "Bexar County, TX" },
            { href: "/florida/broward/", label: "Broward County, FL" },
            { href: "/florida/palm-beach/", label: "Palm Beach County, FL" },
            { href: "/florida/hillsborough/", label: "Hillsborough County, FL" },
            { href: "/washington/king/", label: "King County, WA" },
            { href: "/nevada/clark/", label: "Clark County, NV" },
            { href: "/michigan/wayne/", label: "Wayne County, MI" },
            { href: "/pennsylvania/philadelphia/", label: "Philadelphia, PA" },
            { href: "/pennsylvania/allegheny/", label: "Allegheny County, PA" },
            { href: "/ohio/cuyahoga/", label: "Cuyahoga County, OH" },
            { href: "/ohio/franklin/", label: "Franklin County, OH" },
            { href: "/georgia/fulton/", label: "Fulton County, GA" },
            { href: "/north-carolina/mecklenburg/", label: "Mecklenburg County, NC" },
            { href: "/north-carolina/wake/", label: "Wake County, NC" },
            { href: "/minnesota/hennepin/", label: "Hennepin County, MN" },
            { href: "/new-jersey/bergen/", label: "Bergen County, NJ" },
            { href: "/massachusetts/middlesex/", label: "Middlesex County, MA" },
            { href: "/maryland/montgomery/", label: "Montgomery County, MD" },
            { href: "/wisconsin/milwaukee/", label: "Milwaukee County, WI" },
            { href: "/tennessee/shelby/", label: "Shelby County, TN" },
          ],
        },
        "For city-by-city notes, see [home care by city](/guides/home-care-by-city/). In New York City, all five boroughs use [CDPAP](/guides/cdpap/); in Los Angeles County and every other California county, the main program is [IHSS](/guides/ihss/).",
      ],
    },
    {
      id: "agencies-vs-independent",
      h2: "Caregivers near me: agency, independent or family?",
      blocks: [
        "There are three ways to get caregivers in my area searches to end with a person at the door. Each has trade-offs.",
        {
          table: {
            head: ["Route", "Upside", "Downside"],
            rows: [
              ["A home care agency", "Screens, trains, insures and replaces caregivers; handles payroll", "Costs more per hour; less choice of who comes"],
              ["An independent caregiver you hire", "Often cheaper; you choose the person", "You're the employer: taxes, backup, background checks"],
              ["A family member paid by Medicaid", "Someone your relative trusts; paid by the program", "Your relative must qualify for Medicaid home care"],
            ],
          },
        },
        "When you look for in home caregivers near me or at home caregivers near me through an agency, you're paying partly for backup: if the caregiver is sick, the agency sends someone else. Local caregivers you hire directly can be excellent, but you carry that risk yourself. Online boards list local caregivers near me and caretakers near me, but those listings are rarely verified — check references and run a background check.",
        "Private caregivers for seniors near me and elderly caregivers near me searches often find the same people agencies employ. The difference is who handles the paperwork.",
      ],
    },
    {
      id: "vetting",
      h2: "How to vet the best home care agencies near me",
      blocks: [
        "Ratings sites promise the top rated home care agencies near me, but most rankings are advertising. The best home care agencies near me are the ones that pass these checks:",
        {
          ul: [
            "**Licensed or registered** with your state — verify it yourself, not on the agency's site.",
            "**Caregivers are employees,** not contractors, so the agency carries workers' compensation and liability.",
            "**Clear backup plan** for missed shifts, and a supervisor you can call.",
            "**Written rates**, minimum hours and cancellation terms.",
            "**References** from a current client family.",
          ],
        },
        "The best caregiver agency near me for one family won't be the best for another. A best home care near me search can't tell you whether an agency serves your parent's town reliably; only a phone call and a reference can. Home care companies near me and in home care companies near me show up in maps results too; before you call, check the license. For Medicare-certified home health agencies, [Medicare Care Compare](https://www.medicare.gov/care-compare/) shows star ratings.",
        "Some families search for a specific brand, such as \"care advantage near me\" or a national franchise. That's fine — every local office is independently run, so check its own license and reviews. See our independent comparisons of [Home Instead](/compare/home-instead/), [Right at Home](/compare/right-at-home/) and [Home Helpers](/compare/home-helpers/).",
      ],
    },
    {
      id: "places-and-offices",
      h2: "Home care places, offices and facilities near me",
      blocks: [
        "Home care comes to your relative. When people search for home care places near me, caregiver places near me or caregiving places in town, they usually want one of three things:",
        {
          ul: [
            "**An agency's local office.** A home care office near me or caregiver office near me search helps if you want to meet staff in person. A home care center near me search often finds the same offices.",
            "**An adult day center** — a place your parent goes during the day, which gives family caregivers a break.",
            "**A residential setting** like assisted living. If a home care facility near me search is really about moving a parent, read [assisted living vs. home care](/compare/assisted-living-vs-home-care/).",
          ],
        },
        "Facility home care near me and in home care facilities near me are common searches too, but home care places are not facilities. Home care lets your relative stay put.",
      ],
    },
    {
      id: "what-to-expect",
      h2: "Senior care agencies near me: what help looks like",
      blocks: [
        "A typical visit from senior care agencies near me lasts a few hours. The caregiver might help with a shower, make lunch, do laundry, give medication reminders and keep your parent company. Home care workers near me searches are often from families who want someone for set hours each day, or for a short stretch after a hospital stay. See [part-time and short-term home care](/guides/part-time-and-short-term-home-care/).",
        "Home care for the elderly near me searches, in home elderly care near me and in home care for seniors near me all describe this kind of visit. So do searches for caregiver help near me, senior care at home near me, care in the home near me and caregiver for elderly near me. Families who need more than a few hours should ask about [24-hour home care](/guides/24-hour-home-care/). If the need is urgent — home care needed near me, starting this week — say so on the first call. Agencies prioritize clients who can start quickly.",
      ],
    },
    {
      id: "cost",
      h2: "What in home care services near me cost",
      blocks: [
        "Private-pay rates vary by region. Ask each agency for its hourly rate, minimum visit length and weekend surcharges. Our guide to [the cost of in-home care](/guides/cost-of-in-home-care/) explains how to budget, and [private pay home care](/guides/private-pay-home-care/) covers paying out of pocket.",
        "Many families don't need to pay privately at all. Medicaid pays for home care in every state for people who qualify, and many programs let your relative choose who provides it. See [Medicaid home care](/guides/medicaid-home-care/) and [family caregiver pay rates by state](/guides/family-caregiver-pay-rates/).",
        {
          callout: {
            tone: "money",
            title: "Medicare's limits",
            text: "Medicare covers short-term skilled home health from a certified agency, not ongoing personal care or companionship. See [does Medicare pay family caregivers](/guides/does-medicare-pay-family-caregivers/).",
          },
        },
      ],
    },
    {
      id: "family-caregiver",
      h2: "When the best caregiver near you is family",
      blocks: [
        "Agencies in many areas are short of staff. Every state has at least one Medicaid program that lets your relative hire a family member instead — an adult child, grandchild, sibling, and in many states a spouse. The program pays the family caregiver's wage.",
        "That's the route behind [CDPAP in New York](/new-york/caregiver-program/), [IHSS in California](/california/caregiver-program/), [IRIS in Wisconsin](/wisconsin/iris/) and [Structured Family Caregiving](/guides/structured-family-caregiving/) in several states. Start with [how to get paid to care for a family member](/guides/get-paid-to-care-for-family-member/), or read about [agencies that hire family members](/guides/home-care-agencies-that-hire-family-members/).",
        "Comparing in home caregiver agencies near me against a relative? Read [agency care vs. a paid family caregiver](/compare/home-care-agency-vs-paid-family-caregiver/).",
      ],
    },
    {
      id: "phrases",
      h2: "Common ways families search for local help, and where each leads",
      blocks: [
        "Families describe the same need in many ways. Here is where the most common searches should lead:",
        {
          ul: [
            "**\"Home care agency near me\" or \"in home care agency near me\"** — get a list from your Area Agency on Aging or state licensing office rather than a maps listing, then use our [agency checklist](/guides/how-to-choose-a-home-care-agency/).",
            "**\"Nearest home care agency\"** — the nearest home care agency isn't always the best. One across the county with more staff may cover shifts more reliably than the one down the street.",
            "**\"Home care nearby\" or \"home care services in my area\"** — having home care nearby matters mostly for reliability: caregivers who live close are less likely to miss a shift in bad weather. Ask each agency where its caregivers live.",
            "**\"Senior home care agencies near me\" or \"elderly home care agencies near me\"** — ask whether the agency specializes in older adults, including dementia care, and whether it takes Medicaid.",
            "**\"Elderly care agency near me\" or \"elderly in home care near me\"** — the same checks apply; also ask whether the aide can help with transfers and bathing, which many older adults need.",
            "**\"In home care providers near me\" or \"homecare providers near me\"** — providers include agencies and independent caregivers. If you hire someone directly, you are the employer.",
            "**\"Home provider services near me\"** — in some states, \"provider\" is the official word for a paid caregiver, and Medicaid lets a relative be that provider. See [IHSS](/guides/ihss/).",
            "**\"Local caregiver agencies\" or \"caregiving agencies in my area\"** — your Area Agency on Aging keeps these lists and can tell you which agencies are taking new clients.",
            "**\"Best caregivers near me\" or \"best in home care near me\"** — the best caregiver is consistent, trained for your relative's needs and someone your relative likes. Ask to meet them first.",
            "**\"At home elderly care near me\" or \"at home caregiver near me\"** — these usually mean non-medical help: bathing, meals and supervision, which Medicaid covers for people who qualify through its home care programs.",
            "**\"Adult in home care near me\"** — for adults under 65 with disabilities, the same Medicaid programs apply, often with different waivers. See [paid parent caregivers](/guides/paid-parent-caregiver/) for families of adult children.",
            "**\"Caregiver services near me\", \"caregiver service near me\" or \"home care service near me\"** — ask what a visit includes. Some agencies bill driving and errands separately.",
            "**\"Home care services for seniors near me\" or \"home care services for elderly near me\"** — ask which payers the agency accepts: Medicaid, VA, long-term care insurance or private pay.",
            "**\"Caregiving agency near me\", \"carer agency near me\", \"agency caregiver near me\" or \"agency for caregiver near me\"** — confirm the agency's caregivers are its own employees, not contractors.",
            "**\"Care company near me\" or \"caregiving companies near me\"** — you'll see franchises and local companies. See [local agencies vs. franchises](/compare/local-home-care-agencies/).",
            "**\"Senior caregivers near me\", \"care takers near me\" or \"caretakers for elderly near me\"** — online boards list independent caregivers, but rarely verify them. Check references and run a background check.",
            "**\"Seniors home care near me\" or \"home care elderly near me\"** — call your Area Agency on Aging first; it knows which local programs have openings.",
            "**\"Carer near me\", \"carers in my area\", \"carers for the elderly near me\", \"home carers near me\" or \"home care near to me\"** — British-style phrasing for the same thing, including in home care for the elderly near me. In the US, start with the Eldercare Locator.",
          ],
        },
              ],
    },
    {
      id: "espanol",
      h2: "Home care cerca de mí: ayuda en español",
      blocks: [
        "Muchas familias buscan \"home care cerca de mi\" en español. El Eldercare Locator (1-800-677-1116) también atiende en español y lo conecta con la agencia local para personas mayores. Pregunte a cada agencia si tiene cuidadores que hablen español.",
        "Si su familiar califica para Medicaid, en todos los estados hay programas que pueden pagarle a un familiar como cuidador. Vea [nuestra página en español](/es/).",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/guides/how-to-choose-a-home-care-agency/", title: "Choose an agency", text: "Licensing checks, questions to ask and red flags." },
            { href: "/states/", title: "Your state's programs", text: "What pays for home care in all 50 states and DC." },
            { href: "/guides/caring-for-aging-parents/", title: "Caring for aging parents", text: "Options, costs and help when a parent needs care." },
            { href: "/qualify/", title: "Check eligibility", text: "See if Medicaid could pay a family caregiver." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How do I find home care near me?",
      a: "Call the Eldercare Locator at 1-800-677-1116 or visit eldercare.acl.gov to reach your local Area Agency on Aging. It can list licensed agencies and public programs in your county. Then verify each agency's license with your state and compare at least three.",
    },
    {
      q: "Is there free home care near me?",
      a: "Medicaid pays for home care for people who qualify, and Area Agencies on Aging run some programs funded by the Older Americans Act. Medicare covers only short-term skilled home health. Your Area Agency on Aging can tell you what your relative may qualify for.",
    },
    {
      q: "What's the difference between a home care agency and a home health agency?",
      a: "A home care agency provides non-medical help such as bathing, meals and companionship. A home health agency provides skilled nursing and therapy ordered by a doctor, and is often paid by Medicare.",
    },
    {
      q: "Should I hire a caregiver through an agency or on my own?",
      a: "An agency screens, insures and replaces caregivers, which costs more but carries less risk. Hiring on your own is often cheaper, but you become the employer and must handle taxes, backup and background checks.",
    },
    {
      q: "Can a family member be paid as my parent's caregiver?",
      a: "In every state, at least one Medicaid program lets a qualifying person hire a relative as their paid caregiver. Adult children are allowed almost everywhere; spouse rules vary by state.",
    },
    {
      q: "How quickly can home care start?",
      a: "Private-pay agencies can often start within days if they have staff. Medicaid-funded care takes longer because of eligibility and assessment steps, usually weeks rather than days.",
    },
  ],
  related: [
    "/guides/how-to-choose-a-home-care-agency/",
    "/guides/home-care-by-city/",
    "/compare/local-home-care-agencies/",
  ],
  sources: [
    { label: "Eldercare Locator (Administration for Community Living)", url: "https://eldercare.acl.gov/" },
    { label: "Medicare.gov Care Compare", url: "https://www.medicare.gov/care-compare/" },
    { label: "ACL: National Family Caregiver Support Program", url: "https://acl.gov/programs/support-caregivers/national-family-caregiver-support-program" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/county-porch.webp", alt: "A caregiver and an older woman talk on a front porch" },
  keywords: [
    "home care near me",
    "home caregivers near me",
    "home carers near me",
    "caregivers near me",
    "home care agency near me",
    "in home care near me",
    "in home caregivers near me",
    "caretakers near me",
    "senior caregivers near me",
    "caregiver services near me",
    "caregiving agency near me",
    "in home care services near me",
    "home care companies near me",
    "home care for elderly near me",
    "in home elderly care near me",
    "elderly home care near me",
    "in home care for seniors near me",
    "home care aides near me",
    "homecare providers near me",
    "carer near me",
  ],
};

export default guide;
