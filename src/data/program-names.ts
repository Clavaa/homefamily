/**
 * What people call a state's family-caregiver program when they search, and
 * what it is actually called there.
 *
 * Program names travel: "CDPAP" is New York's and "IHSS" is California's,
 * but people search "cdpap texas", "ihss georgia" and "cdpap florida" every
 * month because a relative in another state used the word. Each state's
 * caregiver-program page answers that search directly — "Texas has no CDPAP;
 * its version is Consumer Directed Services" — instead of letting a reader
 * conclude their state has nothing.
 *
 * `local` is the name to look for in this state. Keep every note to what is
 * published in states.json or the state's own program pages.
 */
export interface ProgramNames {
  /** The state's closest equivalent to self-directed / consumer-directed care. */
  local: string;
  /** One or two sentences, used verbatim on the page. */
  note: string;
}

export const PROGRAM_NAMES: Record<string, ProgramNames> = {
  "new-york": {
    local: "CDPAP (Consumer Directed Personal Assistance Program)",
    note: "New York is where the name CDPAP comes from. Since 2025 the program runs through a single statewide fiscal intermediary, Public Partnerships LLC (PPL), rather than hundreds of separate agencies, so a caregiver's paperwork and pay now go through PPL.",
  },
  california: {
    local: "IHSS (In-Home Supportive Services)",
    note: "California is where the name IHSS comes from. The county IHSS office assesses the hours, the person receiving care hires the provider — who can be a son, daughter or other relative — and the state pays the provider directly.",
  },
  texas: {
    local: "Consumer Directed Services (CDS)",
    note: "Texas has no program called CDPAP or IHSS. Its version is the Consumer Directed Services (CDS) option, available inside STAR+PLUS and several waivers, where the person receiving care employs their own attendant — often a relative.",
  },
  colorado: {
    local: "CDASS, IHSS and the Family CNA (\"parent CNA\") pathway",
    note: "Colorado has a program actually named IHSS, plus CDASS (Consumer-Directed Attendant Support Services), where the member hires and directs their own attendant. Parents of children with high needs can be paid as certified nursing assistants through a home health agency — the pathway people search as \"parent CNA\".",
  },
  florida: {
    local: "Participant Directed Option (PDO) and CDC+",
    note: "Florida has no program named CDPAP. Its versions are the Participant Directed Option inside Statewide Medicaid Managed Care Long-Term Care, and Consumer Directed Care Plus (CDC+), both of which let a member hire a relative.",
  },
  georgia: {
    local: "Structured Family Caregiving (SFC)",
    note: "Georgia has no IHSS or CDPAP. Its main family option is Structured Family Caregiving, which pays a daily stipend to a caregiver who lives with the member, alongside self-directed options in CCSP and SOURCE.",
  },
  indiana: {
    local: "Structured Family Caregiving (SFC) and Attendant Care",
    note: "Indiana pays live-in family caregivers through Structured Family Caregiving, at a daily rate, and pays attendants — who can be relatives — through the PathWays and Health & Wellness waivers.",
  },
  michigan: {
    local: "Home Help Program",
    note: "Michigan's version is the Medicaid Home Help Program: the state pays an individual provider, who can be a relative, for help with daily activities, after a caseworker assessment.",
  },
  missouri: {
    local: "Consumer Directed Services (CDS)",
    note: "Missouri calls it Consumer Directed Services. The participant hires their own attendant — a relative other than a spouse can usually be hired — and a vendor handles payroll.",
  },
  massachusetts: {
    local: "PCA Program and Adult Foster Care (AFC)",
    note: "Massachusetts has no IHSS. Its equivalents are the MassHealth PCA program, where the member hires their own personal care attendant, and Adult Foster Care, which pays a live-in caregiver a daily stipend.",
  },
  pennsylvania: {
    local: "Participant-directed services in Community HealthChoices",
    note: "Pennsylvania has no CDPAP or IHSS by name. Family caregivers are paid through participant-directed services in Community HealthChoices and the OBRA waiver, where the participant is the employer and a financial management service runs payroll.",
  },
  arizona: {
    local: "ALTCS self-directed care",
    note: "Arizona has no IHSS by name. Its equivalent runs through ALTCS, the Arizona Long Term Care System, whose self-directed and Agency with Choice options let a member hire a relative — including, under Parents as Paid Caregivers, a parent.",
  },
  oregon: {
    local: "Consumer-Employed Provider program and Independent Choices",
    note: "Oregon's version is the Consumer-Employed Provider program — homecare workers hired directly by the person receiving care — plus the Independent Choices Program, which gives the member a cash budget.",
  },
  wisconsin: {
    local: "IRIS",
    note: "Wisconsin has no IHSS. Its self-directed program is IRIS (Include, Respect, I Self-Direct), which lets a member hire a relative — including a spouse — with no waitlist.",
  },
  virginia: {
    local: "Consumer direction in the CCC Plus Waiver",
    note: "Virginia has no CDPAP by name. Its equivalent is consumer-directed personal care in the CCC Plus Waiver, and the LRI option can pay spouses and parents in some cases.",
  },
  "new-jersey": {
    local: "Personal Preference Program (PPP)",
    note: "New Jersey has no CDPAP. Its equivalent is the Personal Preference Program, which gives the member a monthly cash budget to hire the caregiver of their choice.",
  },
  connecticut: {
    local: "Community First Choice and the CT Home Care Program",
    note: "Connecticut has no CDPAP by name. Its self-directed options include Community First Choice and the PCA Waiver, and Adult Family Living pays a live-in caregiver.",
  },
  maryland: {
    local: "Community First Choice (CFC) and CPAS",
    note: "Maryland has no CDPAP by name. Its equivalents are Community First Choice and Community Personal Assistance Services, both of which allow a participant to hire a relative.",
  },
  "north-carolina": {
    local: "CAP/DA consumer direction",
    note: "North Carolina has no CDPAP by name. Its equivalent is the consumer-directed option in CAP/DA, where the participant employs their own aide.",
  },
  "rhode-island": {
    local: "Personal Choice Program",
    note: "Rhode Island's version is the Personal Choice Program, where the participant hires and manages their own caregiver.",
  },
  illinois: {
    local: "Community Care Program and Home Services Program",
    note: "Illinois pays family caregivers through the Home Services Program (for people with disabilities) and the Community Care Program (for seniors), each with its own rules about which relatives can be hired.",
  },
  ohio: {
    local: "PASSPORT and Structured Family Caregiving",
    note: "Ohio's main paths are the PASSPORT Waiver's self-directed option and Structured Family Caregiving for a caregiver who lives with the member.",
  },
  kentucky: {
    local: "Participant Directed Services (PDS)",
    note: "Kentucky calls it Participant Directed Services, available across several waivers, where the participant hires their own employee.",
  },
};
