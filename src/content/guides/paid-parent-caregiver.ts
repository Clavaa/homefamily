import type { Guide } from "../types";

const guide: Guide = {
  slug: "paid-parent-caregiver",
  section: "guides",
  cluster: "programs",
  title: "Paid Parent Caregivers and Disabled Family Members",
  description:
    "Can a parent be paid to care for a disabled child? Which states allow it, Colorado's parent CNA program, children's waivers and paid care for disabled adults.",
  h1: "Paid parent caregivers: getting paid to care for a disabled child or adult",
  short: "Paid parent caregivers",
  eyebrow: "Children and adults with disabilities",
  lead: "Parents of children with disabilities often provide care far beyond ordinary parenting — tube feedings, seizures, lifting, nights without sleep. In 13 states Medicaid can pay a parent for that care, and in 16 more it can in some programs. Caring for a disabled adult relative is paid almost everywhere.",
  answer:
    "Yes, in many states a parent can be paid to care for a disabled child through Medicaid. Thirteen states allow it broadly and 16 more allow it in certain programs, usually a children's waiver, a live-in stipend, or by becoming a certified nursing assistant. Caring for a disabled adult family member is allowed in nearly every state.",
  takeaways: [
    "Parents of minors are \"legally responsible\" relatives, so Medicaid limits when they can be paid. Rules vary widely by state.",
    "Thirteen states allow paid parent caregivers broadly, 16 allow it in some programs, and 22 have no clear pathway.",
    "Colorado's parent CNA pathway pays parents who become certified nursing assistants through a home health agency.",
    "Parents of adult children with disabilities are usually treated like any other relative and can be paid.",
    "Children's waivers and the Katie Beckett (TEFRA) option can make a child eligible for Medicaid without counting parents' income.",
  ],
  sections: [
    {
      id: "can-parents-be-paid",
      h2: "Can a parent be a paid caregiver for a disabled child?",
      blocks: [
        "Often, yes — but it depends on the state and program. Medicaid has long treated parents of minor children as \"legally responsible individuals\": people expected to care for their child without pay. So most programs that hire family exclude parents of children under 18 (or under 21 in some states).",
        "The exception is \"extraordinary care\" — care well beyond what any parent of a child that age would provide. Many states now allow a **paid parent caregiver** for that care through a children's waiver, a special program for medically complex children, or by having the parent become a certified aide employed by an agency.",
        {
          callout: {
            tone: "info",
            title: "The numbers",
            text: "Of the 51 jurisdictions, 13 allow parents of minors to be paid broadly, 16 allow it in some programs, and 22 have no clear pathway. Your state's [caregiver program page](/states/) has the specifics.",
          },
        },
      ],
    },
    {
      id: "which-states",
      h2: "Which states pay parents of disabled children",
      blocks: [
        "These states allow paid parent caregivers for minor children broadly:",
        {
          table: {
            head: ["State", "How parents are paid"],
            rows: [
              ["[Arizona](/arizona/caregiver-program/)", "Parents as Paid Caregivers, up to 40 hours a week per child across both parents"],
              ["[California](/california/caregiver-program/)", "IHSS — AB 1287 (2024) removed old limits on parents of minors"],
              ["[Colorado](/colorado/caregiver-program/)", "IHSS/CFC personal care for extraordinary care, or the Family CNA pathway"],
              ["[Delaware](/delaware/caregiver-program/)", "Personal care up to 40 hours a week; another adult signs timesheets"],
              ["[Florida](/florida/caregiver-program/)", "Family Home Health Aide program, $25/hr up to 8 hours a day; CDC+"],
              ["[Indiana](/indiana/caregiver-program/)", "Structured Family Caregiving on the Health & Wellness waiver"],
              ["[Kansas](/kansas/caregiver-program/)", "Technology Assisted, Brain Injury and Physical Disability waivers"],
              ["[Minnesota](/minnesota/caregiver-program/)", "CFSS worker since October 2024"],
              ["[New Mexico](/new-mexico/caregiver-program/)", "With managed-care plan approval, for extraordinary care"],
              ["[North Carolina](/north-carolina/caregiver-program/)", "CAP/C, including a certified-parent pathway"],
              ["[North Dakota](/north-dakota/caregiver-program/)", "Family Paid Caregiver Pilot on several children's waivers"],
              ["[South Carolina](/south-carolina/caregiver-program/)", "Medically Complex Children Waiver, up to 40 hours a week"],
              ["[Utah](/utah/caregiver-program/)", "DSPD Caregiver Compensation after required training"],
            ],
          },
        },
        "Sixteen more states — including [Georgia](/georgia/caregiver-program/) (GAPP), [Ohio](/ohio/caregiver-program/), [Maryland](/maryland/caregiver-program/), [Virginia](/virginia/caregiver-program/), [Oregon](/oregon/caregiver-program/) and [Wisconsin](/wisconsin/caregiver-program/) (CLTS) — pay parents only in specific waivers, often with a 40-hour weekly cap or an extraordinary-care test. New York, Texas, Pennsylvania and Massachusetts are among the states with no pathway for parents of minors.",
      ],
    },
    {
      id: "colorado-parent-cna",
      h2: "Colorado parent CNA program",
      blocks: [
        "Colorado has an unusual route. Under what families call the **Colorado parent CNA program**, a parent (or another family member) of a child who qualifies for home health CNA services and is enrolled in Health First Colorado (Medicaid) can become a certified nursing assistant and be employed by a licensed home health agency to care for their own child.",
        {
          h3: "How parent CNA in Colorado works",
        },
        "To use the parent CNA program, Colorado families go through four steps:",
        {
          ol: [
            "**The child qualifies** for Medicaid home health CNA services, based on medical need.",
            "**The parent completes CNA training** and passes the state certification exam.",
            "**A home health agency hires the parent** as a CNA and assigns them to their child.",
            "**The agency pays the parent** an hourly wage for the approved CNA hours, and handles supervision and payroll.",
          ],
        },
        "Because the parent works for an agency, **parent CNA Colorado** pay is set by the agency, not the state. The pathway is also called a **family CNA program**, since other relatives can use it too. It sits alongside Colorado's IHSS and CDASS, where parents can be paid for extraordinary personal care. Families searching for a **parent CNA program** in another state will find similar models in North Carolina's CAP/C and Illinois' proposal for its MFTD waiver, but most states don't have one yet. See the [Colorado caregiver program](/colorado/caregiver-program/), [Denver](/colorado/denver/) and our [IHSS guide](/guides/ihss/).",
        "The broader term **parent CNA** simply means a parent who is a certified nursing assistant for their own child. If you're weighing it, read what a [home health aide](/guides/home-health-aide/) does and how [home health differs from home care](/guides/home-health-vs-home-care/).",
      ],
    },
    {
      id: "childrens-waivers",
      h2: "Children's waivers and Katie Beckett",
      blocks: [
        "Before a parent can be paid, the child has to be on Medicaid. For many families, the parents' income is too high for regular Medicaid. Two tools solve that:",
        {
          ul: [
            "**Katie Beckett / TEFRA.** A federal option that lets states cover children with significant disabilities who need an institutional level of care but live at home, without counting the parents' income.",
            "**Children's home and community-based waivers.** Many states run waivers for medically fragile children or children with developmental disabilities, such as Wisconsin's CLTS, Illinois' MFTD, Kansas' Technology Assisted Waiver and North Carolina's CAP/C. Several of these are where paid-parent options live.",
          ],
        },
        "Waivers often have waitlists, so apply early even if you're not sure you need paid care yet. [Check eligibility](/qualify/) to see which programs your child may fit.",
      ],
    },
    {
      id: "parent-caretaker-medicaid",
      h2: "Parent caretaker Medicaid is something different",
      blocks: [
        "\"Parents and caretaker relatives\" is also the name of a Medicaid eligibility group — the one that covers low-income parents and relatives raising children. People searching **parent caretaker Medicaid** are sometimes looking for that: it gives the parent health coverage, but it doesn't pay them for caregiving.",
        "Programs that pay a parent for caring are the home care programs on this page. The two can overlap — a parent may be covered by one and paid through the other — but they're separate.",
      ],
    },
    {
      id: "pay",
      h2: "Parent caregiver pay",
      blocks: [
        "**Parent caregiver pay** follows the state's program rate. A few published examples:",
        {
          table: {
            head: ["State", "Program", "Reported pay"],
            rows: [
              ["[Florida](/florida/caregiver-pay/)", "Family Home Health Aide", "$25/hr, up to 8 hours a day"],
              ["[Minnesota](/minnesota/caregiver-pay/)", "CFSS (paid parent)", "up to about $22.74/hr"],
              ["[California](/california/caregiver-pay/)", "IHSS", "$16.90–$22/hr"],
              ["[Arizona](/arizona/caregiver-pay/)", "Parents as Paid Caregivers", "$13–$16/hr, up to 40 hrs/week"],
              ["[Indiana](/indiana/caregiver-pay/)", "Structured Family Caregiving", "$46–$80/day"],
            ],
          },
        },
        "Many programs cap paid parent hours at 40 a week, even when both parents provide care. If you live with your child, the pay may be tax-free under the IRS difficulty-of-care rule. See [family caregiver pay rates](/guides/family-caregiver-pay-rates/) for all states.",
      ],
    },
    {
      id: "disabled-adults",
      h2: "Caregiver for disabled adults: who can be paid",
      blocks: [
        "The rules loosen once a child with a disability becomes an adult. In most states, a parent of an adult child is treated like any other relative, and so are siblings and adult children. So if you want to **get paid to care for a disabled family member** who is an adult, the path is usually the same as for an aging parent: Medicaid home care plus a self-directed option.",
        "New York, for example, pays parents of children 21 and over through [CDPAP](/guides/cdpap/), and Pennsylvania allows parents of disabled adult children 21 and over. Spouses of disabled adults face separate rules — see [Medicaid family caregiver programs](/guides/medicaid-family-caregiver-program/) for the spouse table.",
        "Whether you're a sibling, adult child or parent, being a **caregiver for a disabled family member** under Medicaid works like this: the adult qualifies for Medicaid home care, chooses you, and you're paid through the state's [consumer-directed care](/guides/consumer-directed-care/) program. It's the same route whether you want to **get paid to help a disabled family member** a few hours a week or full time.",
      ],
    },
    {
      id: "home-care-disabled-adults",
      h2: "Home care services for disabled adults",
      blocks: [
        "Medicaid's **home care for disabled adults** covers more than family pay. **Home care services for disabled adults** can include personal care, homemaker help, respite, adult day programs, home modifications, and skilled nursing. **Caregiver services for disabled adults** can come from an agency, a self-directed worker, or a mix of both.",
        "If you'd rather have an agency **caregiver for disabled adults**, or a **home health aide for disabled adults** with skilled needs, see [Medicaid home care](/guides/medicaid-home-care/) and [in-home nursing care](/guides/in-home-nursing-care/). A **special needs caregiver** hired privately is also an option; see [cost of in-home care](/guides/cost-of-in-home-care/).",
      ],
    },
    {
      id: "how-to-get-paid",
      h2: "How to get paid for taking care of a disabled family member",
      blocks: [
        "Whether it's a child or an adult, the steps to **get paid for taking care of a disabled family member** are:",
        {
          ol: [
            "**Get the person on Medicaid** — through regular eligibility, SSI, a disability category, or Katie Beckett/TEFRA for a child.",
            "**Apply for the right waiver or program**, and get on any waitlist early.",
            "**Complete the needs assessment**, describing a typical hard day in detail.",
            "**Choose the option that allows your relationship** — self-direction, a live-in stipend, or an agency (CNA) route.",
            "**Enroll as the caregiver** with the payroll agency or home health agency.",
          ],
        },
        "The **caregiver pay for a disabled family member** is the program's normal rate — relatives aren't paid less. If you want to be **paid to take care of a disabled family member** but your state bars your relationship, ask about other programs in the same state; a waiver often allows what a state-plan program doesn't. Our [step-by-step guide](/guides/become-a-paid-caregiver-for-a-family-member/) covers the paperwork.",
      ],
    },
    {
      id: "support",
      h2: "Support beyond a paycheck",
      blocks: [
        "Caring for a child or adult with high needs is exhausting even when it's paid. [Respite care](/guides/respite-care/) gives you scheduled breaks, and [family caregiver support programs](/guides/family-caregiver-support-programs/) list training, counseling and financial help. Parents in the 22 states without a paid-parent pathway can still use these, and can often be paid once their child turns 18 or 21.",
      ],
    },
    {
      id: "next-steps",
      h2: "Where to go next",
      blocks: [
        {
          cards: [
            { href: "/qualify/", title: "Check eligibility", text: "See whether your state pays you to care for your child or relative." },
            { href: "/guides/medicaid-family-caregiver-program/", title: "Programs by state", text: "Every Medicaid program that pays family." },
            { href: "/guides/consumer-directed-care/", title: "Consumer-directed care", text: "How hiring family works." },
            { href: "/guides/respite-care/", title: "Respite care", text: "Getting a break when you need one." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I get paid to take care of my disabled child?",
      a: "In many states, yes. Thirteen states allow paid parent caregivers broadly and 16 more allow it in certain programs, usually children's waivers with an extraordinary-care requirement.",
    },
    {
      q: "What is the Colorado parent CNA program?",
      a: "A pathway where a parent of a child who qualifies for Medicaid home health CNA services becomes a certified nursing assistant and is employed by a home health agency to care for their own child.",
    },
    {
      q: "Can I get paid to care for my disabled adult son or daughter?",
      a: "Usually yes. Once a child is an adult, most states treat a parent like any other relative. Some states, such as New York, set the age at 21.",
    },
    {
      q: "My income is too high for Medicaid. Can my disabled child still qualify?",
      a: "Possibly. The Katie Beckett or TEFRA option and many children's waivers do not count parents' income for children who need an institutional level of care.",
    },
    {
      q: "How many hours can a paid parent work?",
      a: "Many states cap paid parent hours at 40 a week per child, sometimes combined across both parents.",
    },
    {
      q: "Is parent caretaker Medicaid the same as being paid to care?",
      a: "No. Parent and caretaker relative Medicaid is health coverage for low-income parents. Paid caregiving comes from separate home care programs.",
    },
  ],
  related: [
    "/guides/medicaid-family-caregiver-program/",
    "/guides/consumer-directed-care/",
    "/guides/respite-care/",
  ],
  sources: [
    { label: "Colorado CDPHE: parents as their child's certified nursing aide", url: "https://cdphe.colorado.gov/parents-as-their-childs-certified-nursing-aide-cna" },
    { label: "Medicaid.gov: self-directed services", url: "https://www.medicaid.gov/medicaid/long-term-services-supports/self-directed-services" },
    { label: "Medicaid.gov: eligibility groups", url: "https://www.medicaid.gov/medicaid/eligibility/index.html" },
    { label: "Georgia Medicaid: Katie Beckett (TEFRA) program", url: "https://medicaid.georgia.gov/document/publication/katie-beckett-program/download" },
    { label: "IRS: difficulty-of-care payments", url: "https://www.irs.gov/individuals/certain-medicaid-waiver-payments-may-be-excludable-from-income" },
  ],
  published: "2026-09-30",
  updated: "2026-09-30",
  photo: { src: "/photos/hero-latino-family.webp", alt: "A parent and family at home together" },
  keywords: [
    "home care for disabled adults",
    "special needs caregiver",
    "caregiver for disabled adults",
    "caregiver for disabled family member",
    "get paid for taking care of disabled family member",
    "paid parent caregiver",
    "parent cna program colorado",
    "parent cna colorado",
    "parent cna",
    "colorado parent cna program",
    "get paid to help disabled family member",
    "home health aide for disabled adults",
    "parent cna program",
    "get paid to care for disabled family member",
    "caregiver services for disabled adults",
    "paid to take care of disabled family member",
    "home care services for disabled adults",
    "parent caretaker medicaid",
    "parent caregiver pay",
    "caregiver pay for disabled family member",
  ],
};

export default guide;
