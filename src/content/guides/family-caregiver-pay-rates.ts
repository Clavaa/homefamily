import type { Guide } from "../types";

const guide: Guide = {
  slug: "family-caregiver-pay-rates",
  section: "guides",
  cluster: "costs",
  title: "Family Caregiver Pay Rates by State (2026)",
  description:
    "What family caregivers are paid in every state — hourly wages, daily and monthly stipends, live-in pay, what sets your hours, and when the pay is tax-free.",
  h1: "Family caregiver pay rates by state",
  short: "Caregiver pay by state",
  eyebrow: "Hourly, daily and monthly — all 51",
  lead: "Family caregiver pay isn't one number. It depends on your relative's state, the program and — most of all — how many hours the assessment approves. Here is what every state reports, how hourly and stipend programs differ, and why some agencies pay more than others.",
  answer:
    "Family caregiver pay depends on the state and program. Of the 51 jurisdictions, 29 publish an hourly rate, from about $11 to $29.04 an hour. Stipend programs pay by the day or month instead — Indiana reports $46–$80 a day for live-in caregivers and Georgia about $1,987–$2,400 a month. Your approved hours decide your total.",
  takeaways: [
    "Hourly programs report roughly $11 to $29.04 an hour; stipend programs pay a flat daily or monthly amount.",
    "Your approved hours matter more than the rate: 20 hours at $17 is $340 a week, 40 hours is $680.",
    "Union contracts in states like Washington, Oregon, Illinois and Massachusetts push hourly pay higher.",
    "Live-in stipends can be tax-free under the IRS difficulty-of-care rule when you share a home with your relative.",
    "There's no reliable ranking of the \"highest paying\" agencies — pay is set mostly by the state's Medicaid rate.",
  ],
  sections: [
    {
      id: "family-caregiver-pay",
      h2: "Family caregiver pay: how much can you make?",
      blocks: [
        "**Family caregiver pay** comes from Medicaid, so the state — not a private employer — sets the ceiling. In hourly programs you earn a wage for each approved hour. In stipend programs you get a flat daily or monthly amount for living with and caring for your relative.",
        "The **caregiver pay** most families see falls between the state minimum wage and the low $20s an hour. Kentucky reports the highest published maximum, $29.04 an hour in Participant Directed Services, though take-home is lower after payroll costs. On the monthly side, Georgia's Structured Family Caregiving reports about $1,987–$2,400.",
        {
          callout: {
            tone: "money",
            title: "Quick math",
            text: "Pay = approved hours × rate. Twenty hours a week at $17 is $340; forty hours is $680. Before you compare rates, find out how many hours your relative is likely to get — see [how the needs assessment works](/guides/become-a-paid-caregiver-for-a-family-member/).",
          },
        },
      ],
    },
    {
      id: "by-state",
      h2: "Family caregiver pay rate by state",
      blocks: [
        "This table shows the reported **family caregiver pay rate** in each state. Each row links to that state's full caregiver pay page. \"Varies\" means the state lets the participant set the wage inside a budget, or doesn't publish a single rate.",
        { stateTable: "pay" },
        "Rates change every year, often on January 1 or July 1. The state pages note the effective date where the state publishes one.",
      ],
    },
    {
      id: "hourly-daily-monthly",
      h2: "Hourly vs. daily vs. monthly caregiver payment",
      blocks: [
        "A **caregiver payment** comes in one of three shapes:",
        {
          table: {
            head: ["Model", "How it's paid", "Examples"],
            rows: [
              ["Hourly wage", "Each approved hour, by timesheet or visit app", "[New York CDPAP](/new-york/caregiver-pay/), [California IHSS](/california/caregiver-pay/), [Washington](/washington/caregiver-pay/)"],
              ["Daily stipend", "Flat amount per day of live-in care", "[Indiana SFC](/indiana/caregiver-pay/), [Louisiana MIHC](/louisiana/caregiver-pay/), [South Dakota SFC](/south-dakota/caregiver-pay/)"],
              ["Monthly budget or stipend", "A budget you spend on care, or a flat monthly amount", "[Georgia SFC](/georgia/caregiver-pay/), [Massachusetts AFC](/massachusetts/caregiver-pay/), [Wisconsin IRIS](/wisconsin/iris/)"],
            ],
          },
        },
        "Hourly programs suit families where the caregiver lives elsewhere or works part-time. Stipend programs suit a caregiver who lives with their relative full time — the pay isn't tied to counting hours.",
      ],
    },
    {
      id: "caregiver-hourly-rate",
      h2: "Caregiver hourly rate: family programs vs. the job market",
      blocks: [
        "The **caregiver hourly rate** in family programs tracks the wider home care job market. The Bureau of Labor Statistics reports that home health and personal care aides earned a median of $17.21 an hour ($35,800 a year) in May 2025.",
        "That's the **elderly caregiver hourly rate** a worker takes home. It's very different from what a family pays an agency: CareScout's 2025 Cost of Care Survey puts the national median for in-home non-medical care at $35 an hour. The gap is the agency's costs and margin — and it's why self-directed programs, with fewer layers, can pass more of the rate to the caregiver. See [what in-home care costs](/guides/cost-of-in-home-care/).",
      ],
    },
    {
      id: "what-sets-your-pay",
      h2: "What sets your caregiver compensation and hours",
      blocks: [
        "Four things decide your **caregiver compensation**:",
        {
          ol: [
            "**The state's Medicaid rate.** It sets the ceiling for everyone paid from the program.",
            "**Union contracts.** Home care workers in some states bargain collectively. Washington's wage scale runs $22.52–$26.09 an hour from July 2025, Oregon's homecare workers earn $20–$24.10, Illinois' Home Services Program pays $19.50 rising to $20.00 in July 2026, and Massachusetts PCAs earn $19.50–$23.25 on a seniority scale.",
            "**Your relative's budget.** In budget-based programs like [IRIS](/wisconsin/iris/) or [New Jersey's PPP](/new-jersey/caregiver-program/), the participant sets your wage inside a monthly budget — higher pay means fewer hours.",
            "**Approved hours.** Set by the needs assessment and reviewed each year.",
          ],
        },
        "**Family member caregiver compensation** follows the same rules as for any other worker in the program. Being a relative doesn't raise or lower your rate.",
      ],
    },
    {
      id: "highest-paying",
      h2: "Highest paying home care agencies: why rates differ",
      blocks: [
        "People search for the **highest paying home care agency**, the **top paying home care agencies** or the **highest paid home health agency** in their area. We don't publish rankings, because no reliable public source ranks agencies by what they pay family caregivers — and most of the difference comes from the program, not the agency.",
        "What actually makes one agency pay more than another:",
        {
          ul: [
            "**Program type.** Self-directed payroll agencies (fiscal intermediaries) usually pass more of the rate to you than full-service home care agencies, which pay nurses, schedulers and offices.",
            "**Pass-through rules.** Some stipend programs set a minimum share for the caregiver: at least 60% in Indiana's Structured Family Caregiving, at least 50% in South Dakota's, at least 65% in Nevada's.",
            "**Local wage floors.** New York's CDPAP minimums are higher in New York City ($20.65) than upstate ($18.65); Colorado's floor is higher in Denver.",
            "**Benefits.** Paid time off, health coverage and overtime policies change what a job is really worth.",
          ],
        },
        "So when you search **top paying home health care agencies** or the **highest paying home health agency near me**, ask each agency for its hourly wage, its pay schedule and what share of the Medicaid rate reaches you. Compare two or three. Our [guide to agencies that hire family members](/guides/home-care-agencies-that-hire-family-members/) lists the questions.",
      ],
    },
    {
      id: "live-in",
      h2: "Live-in caregiver pay per day",
      blocks: [
        "Live-in family caregivers are usually paid through stipend programs. Reported **live in caregiver pay per day** in these programs:",
        {
          table: {
            head: ["State", "Program", "Reported pay"],
            rows: [
              ["[Indiana](/indiana/caregiver-pay/)", "Structured Family Caregiving", "About $46–$80/day to the caregiver (program rates $77.54–$133.44/day by level)"],
              ["[Georgia](/georgia/caregiver-pay/)", "Structured Family Caregiving", "About $80/day; $1,987–$2,400/month by tier"],
              ["[Louisiana](/louisiana/caregiver-pay/)", "Monitored In-Home Caregiving", "Per-diem reported ~$85–$150/day, up to ~$1,800/month"],
              ["[South Dakota](/south-dakota/caregiver-pay/)", "Structured Family Caregiving", "Per-diem tiers $82.00–$114.81/day, at least 50% to the caregiver"],
              ["[Connecticut](/connecticut/caregiver-pay/)", "Adult Family Living", "Up to about $500/week, tax-free"],
              ["[Massachusetts](/massachusetts/caregiver-pay/)", "Adult Foster Care", "About $1,000–$1,600/month, tax-free"],
            ],
          },
        },
        "Most of these require you to live with your relative. For what live-in care costs when a family hires privately, see [live-in caregivers](/guides/live-in-caregiver/) and [24-hour home care](/guides/24-hour-home-care/).",
      ],
    },
    {
      id: "states-people-ask-about",
      h2: "Caregiver pay in Georgia, Michigan, Indiana, Colorado, Massachusetts and Missouri",
      blocks: [
        { h3: "Indiana caregiver pay" },
        "**Indiana caregiver pay** under Structured Family Caregiving is a daily stipend: program rates effective July 1, 2025 are $77.54, $99.71 and $133.44 a day by level, and the agency must pass at least 60% to the caregiver — roughly $46–$80 a day, generally tax-free. See the [Indiana caregiver program](/indiana/caregiver-program/).",
        { h3: "Caregiver pay in Georgia" },
        "**Caregiver pay in Georgia** through Structured Family Caregiving is reported at about $80 a day in 2026, or $1,987–$2,400 a month by acuity tier, paid weekly and generally tax-free. See [Georgia caregiver pay](/georgia/caregiver-pay/) and [Fulton County](/georgia/fulton/).",
        { h3: "Michigan caregiver pay" },
        "**Michigan caregiver pay** in the Home Help Program is $17.13 an hour from January 1, 2026, up from $15.88, according to MDHHS rate bulletins. **Caregiver pay Michigan** families see through the MI Choice waiver's self-directed option is set within a budget. See [Michigan caregiver pay](/michigan/caregiver-pay/) and [Wayne County](/michigan/wayne/).",
        { h3: "Family caregiver pay rate Colorado" },
        "The **family caregiver pay rate Colorado** reports is about $17–$20 an hour. The floor is minimum wage — $17.00 statewide and $19.29 in Denver as of January 2026 — and in CDASS the employer sets the wage within their allocation. See [Colorado caregiver pay](/colorado/caregiver-pay/).",
        { h3: "Family caregiver pay rate Massachusetts" },
        "The **family caregiver pay rate Massachusetts** publishes for PCAs is $19.50–$23.25 an hour on a seniority scale, plus a $3.25 complex-care differential from January 2026. Adult Foster Care pays a tax-free stipend of about $1,000–$1,600 a month. Spouses can't be paid there. See [Massachusetts caregiver pay](/massachusetts/caregiver-pay/).",
        { h3: "Family caregiver pay rate Missouri" },
        "The **family caregiver pay rate Missouri** reports for Consumer Directed Services attendants is about $12–$20 an hour, depending on the vendor. The Structured Family Caregiving Waiver pays a daily stipend through a provider agency. See [Missouri caregiver pay](/missouri/caregiver-pay/).",
      ],
    },
    {
      id: "caretaker-pay",
      h2: "Caretaker pay for a family member: other ways it's paid",
      blocks: [
        "\"Caretaker\" and \"caregiver\" mean the same thing here. **Caretaker pay for a family member** can come from sources beyond Medicaid:",
        {
          ul: [
            "**The VA.** The Program of Comprehensive Assistance for Family Caregivers pays a monthly stipend to the primary caregiver of an eligible veteran, and Veteran Directed Care lets a veteran hire a family member. See [cost of in-home care](/guides/cost-of-in-home-care/).",
            "**Long-term care insurance.** Some policies pay a cash benefit that can go to a relative; others only pay licensed providers.",
            "**A personal care agreement.** A relative can pay you privately under a written agreement — useful when planning for future Medicaid eligibility. See [private pay home care](/guides/private-pay-home-care/).",
          ],
        },
        "Medicare doesn't provide **family caretaker pay** of any kind — see [does Medicare pay family caregivers?](/guides/does-medicare-pay-family-caregivers/). For grants and other help, see [family caregiver support programs](/guides/family-caregiver-support-programs/).",
      ],
    },
    {
      id: "taxes",
      h2: "Is caregiver pay for family taxable? The difficulty-of-care rule",
      blocks: [
        "Usually **caregiver pay for family** is reported as wages on a W-2. But IRS Notice 2014-7 lets you exclude Medicaid home and community-based waiver payments from income as \"difficulty of care\" payments when you care for someone who lives in your home.",
        {
          ul: [
            "**You must share a home.** The IRS defines the provider's home as where you actually live — if you keep a separate residence, the exclusion doesn't apply.",
            "**Relatives qualify.** More than one caregiver living in the home can use it.",
            "**It's reported on your W-2**, in box 12 with code II, when the payer treats it as excludable.",
            "**You can still count it for the EITC.** You may choose to include all (not part) of these payments as earned income for the Earned Income Tax Credit or the additional Child Tax Credit.",
          ],
        },
        "Stipend programs such as Structured Family Caregiving are often paid this way. If you've been paying tax on live-in care pay, ask a tax preparer whether you can amend.",
      ],
    },
    {
      id: "raise-your-pay",
      h2: "How to raise your caregiver family member pay",
      blocks: [
        "You can't negotiate the state's rate, but you can change the things around it that set your **caregiver family member pay**:",
        {
          ol: [
            "**Ask for a reassessment** when your relative's needs grow. More hours is the biggest lever.",
            "**Compare payroll agencies or vendors.** In Missouri, for example, CDS vendor wages range from about $12 to $20 an hour.",
            "**Check a stipend program** if you live together — it may pay more than hourly care and be tax-free.",
            "**Share hours with a sibling** if the program allows more than one caregiver, so the approved hours are fully used.",
            "**Claim the difficulty-of-care exclusion** if it applies.",
          ],
        },
        "Not sure which program your relative can use? [Check eligibility](/qualify/) or see [programs that pay family, by state](/guides/medicaid-family-caregiver-program/).",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "Find your relative's program and pay range." },
            { href: "/guides/get-paid-to-care-for-family-member/", title: "Get paid to care for family", text: "The full guide to how paid family care works." },
            { href: "/guides/cost-of-in-home-care/", title: "Cost of in-home care", text: "What families pay agencies, and how to cover it." },
            { href: "/guides/caregiver-jobs/", title: "Caregiver jobs", text: "Pay and openings for home care aides." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How much do family caregivers get paid per hour?",
      a: "It depends on the state. The 29 states that publish an hourly rate report about $11 to $29.04 an hour, with most between the state minimum wage and the low twenties.",
    },
    {
      q: "Do family caregivers get paid for 24 hours of care?",
      a: "Rarely by the hour. Hourly programs pay only for approved hours, which are usually well under 24 a day. Live-in stipend programs pay a flat daily amount instead.",
    },
    {
      q: "What is the live-in caregiver pay per day?",
      a: "In stipend programs it's reported at about $46 to $80 a day in Indiana and about $80 a day in Georgia, with other states in a similar range. Most require you to live with your relative.",
    },
    {
      q: "Is family caregiver pay taxable?",
      a: "Usually it's taxable wages. But Medicaid waiver payments for care of someone living in your home may be excluded from income under IRS Notice 2014-7.",
    },
    {
      q: "Which home care agencies pay the most?",
      a: "There is no reliable public ranking. Pay is mostly set by the state's Medicaid rate, union contracts and pass-through rules. Ask each agency for its wage and what share of the rate reaches you.",
    },
    {
      q: "Can I get paid more if my relative needs more care?",
      a: "Yes, usually through more approved hours or a higher stipend tier. Ask for a reassessment when needs increase.",
    },
    {
      q: "Does Medicare pay family caregivers?",
      a: "No. Medicare does not pay relatives for care. Medicaid, the VA and some long-term care insurance policies can.",
    },
  ],
  related: [
    "/guides/get-paid-to-care-for-family-member/",
    "/guides/cost-of-in-home-care/",
    "/guides/structured-family-caregiving/",
  ],
  sources: [
    { label: "IRS: certain Medicaid waiver payments may be excludable from income (Notice 2014-7)", url: "https://www.irs.gov/individuals/certain-medicaid-waiver-payments-may-be-excludable-from-income" },
    { label: "BLS Occupational Outlook Handbook: home health and personal care aides", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" },
    { label: "CareScout 2025 Cost of Care Survey (press release)", url: "https://investor.genworth.com/news-events/press-releases/detail/1054" },
    { label: "VA: Program of Comprehensive Assistance for Family Caregivers", url: "https://www.va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/" },
    { label: "Each state's published Medicaid program rules", url: "https://www.medicaid.gov/state-overviews/index.html" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/caregiver-phone.webp", alt: "A caregiver checks a pay schedule on her phone" },
  keywords: [
    "caregiver pay",
    "family caregiver pay",
    "caregiver payment",
    "family caregiver pay rate",
    "highest paying home health agency near me",
    "caregiver compensation",
    "live in caregiver pay per day",
    "family caretaker pay",
    "top paying home health care agencies",
    "elderly caregiver hourly rate",
    "caregiver pay for family",
    "caretaker pay for family member",
    "caretaker pay",
    "caregiver hourly rate",
    "top paying home care agencies",
    "indiana caregiver pay",
    "caregiver family member pay",
    "family member caregiver compensation",
    "highest paid home health agency",
    "michigan caregiver pay",
  ],
};

export default guide;
