/**
 * TODO: replace with actual hires before launch — state Medicaid programs
 * and payers verify named executives; RN licenses are publicly checkable.
 *
 * Bios are ROLE-SCOPED on purpose: they describe what the role does for
 * families at KinCare Pay. Do not add personal histories, schools, past
 * employers, years of experience, or credential claims beyond the titles
 * listed here.
 */

export type LeadershipTier = "executive" | "vp" | "director";

export interface Leader {
  /** Full name as displayed (credential suffixes like ", RN" stay in the name). */
  name: string;
  title: string;
  tier: LeadershipTier;
  /** 2–3 plain sentences about what this role does for families. */
  bio: string;
}

/** Initials for the avatar — first + last name, credential suffix ignored. */
export function initialsOf(name: string): string {
  const parts = name.split(",")[0].trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export const leaders: Leader[] = [
  {
    name: "Aaron Gold",
    title: "Chief Executive Officer",
    tier: "executive",
    bio: "Aaron leads KinCare Pay. He sets our direction and holds every team to one promise: families come first, and no family ever pays us a fee.",
  },
  {
    name: "Benjamin Weiss",
    title: "President",
    tier: "executive",
    bio: "Benjamin runs the company day to day. He makes sure every part of KinCare Pay — nurses, enrollment, payroll — works together, so your family gets one smooth experience instead of ten phone numbers.",
  },
  {
    name: "Susan Kaplan, RN",
    title: "Chief Clinical Officer",
    tier: "executive",
    bio: "Susan is a registered nurse who leads our clinical team. She sets the care standards our nurses follow and makes sure every care plan is safe, honest, and right for your loved one.",
  },
  {
    name: "Matthew Stein",
    title: "Chief Operating Officer",
    tier: "executive",
    bio: "Matthew keeps our daily operations running. His teams handle the scheduling, paperwork, and behind-the-scenes details so caregivers can focus on caring — not on forms.",
  },
  {
    name: "Daniel Katz",
    title: "Chief Financial Officer",
    tier: "executive",
    bio: "Daniel manages the company's finances. His team makes sure the program funds that pay caregivers are handled correctly, so your payment arrives on time, every week.",
  },
  {
    name: "Jennifer Lewis, RN",
    title: "VP, Clinical Operations",
    tier: "vp",
    bio: "Jennifer is a registered nurse who leads our nurses in the field. She makes sure nurse visits happen on schedule and that families get clear, simple answers to their health questions.",
  },
  {
    name: "Robert Feldman",
    title: "VP, Business Development",
    tier: "vp",
    bio: "Robert builds our relationships with hospitals, clinics, and community groups. His work helps more families find out these caregiver programs exist — many never knew they could get paid.",
  },
  {
    name: "Michelle Rosen",
    title: "VP, Revenue Cycle",
    tier: "vp",
    bio: "Michelle leads the team that bills the state programs. Her team bills the program — never the family. That's why you will never see an invoice from us.",
  },
  {
    name: "Lisa Hart",
    title: "VP, Human Resources",
    tier: "vp",
    bio: "Lisa supports the caregivers and staff who make KinCare Pay work. Her team handles caregiver onboarding, background checks, and ongoing support once you're hired.",
  },
  {
    name: "Andrew Klein",
    title: "VP, Compliance & Quality",
    tier: "vp",
    bio: "Andrew makes sure we follow every state and Medicaid rule. His team double-checks our work, so families can trust that everything we do is by the book.",
  },
  {
    name: "Jessica Miller",
    title: "Director, Intake & Admissions",
    tier: "director",
    bio: "Jessica leads the team that answers your first call. Her team walks you through the 2-minute check, explains your options in plain words, and gets your enrollment started.",
  },
  {
    name: "Samantha Green, RN",
    title: "Director of Nursing",
    tier: "director",
    bio: "Samantha is a registered nurse who manages our nursing staff. She reviews care plans and makes sure every nurse visit meets our clinical standards.",
  },
  {
    name: "Michael Brooks",
    title: "Director, Payer Relations",
    tier: "director",
    bio: "Michael works directly with the state Medicaid programs that fund caregiver pay. He keeps those connections strong so enrollments and payments move fast.",
  },
  {
    name: "Rachel Cohen",
    title: "Director, Scheduling",
    tier: "director",
    bio: "Rachel's team keeps care schedules on track. If a visit needs to change, her team fixes it fast and keeps everyone in the loop.",
  },
  {
    name: "Nicole Adler",
    title: "Director, Patient Services",
    tier: "director",
    bio: "Nicole leads family support. If you have a question, a worry, or a problem, her team picks up the phone and stays with you until it's solved.",
  },
];

export const executives = leaders.filter((l) => l.tier === "executive");
export const vps = leaders.filter((l) => l.tier === "vp");
export const directors = leaders.filter((l) => l.tier === "director");

/** "Who supports your family" — the field/support structure behind leadership. */
export interface SupportRole {
  role: string;
  blurb: string;
}

export const supportRoles: SupportRole[] = [
  {
    role: "Registered nurses",
    blurb: "Nurses visit your loved one, build the care plan, and answer health questions along the way.",
  },
  {
    role: "Care coordinators",
    blurb: "Your coordinator is your one point of contact — one person who knows your family and your case.",
  },
  {
    role: "Enrollment specialists",
    blurb: "They handle the Medicaid paperwork and follow up with the state so you don't have to.",
  },
  {
    role: "Payroll support",
    blurb: "They make sure your weekly pay shows up on time — and fix it fast if anything looks off.",
  },
];
