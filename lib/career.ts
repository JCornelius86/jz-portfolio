/**
 * The career outline shared by /about and /resume, so both pages group the
 * same roles under the same headings. About adds a narrative paragraph per
 * stint; the resume nests each role's dates and bullets underneath.
 *
 * Microsoft is two stints on purpose: the current IC role stands alone rather
 * than as the last step of an arrow chain (see CLAUDE.md voice rules).
 */
export const careerStints = [
  {
    id: "microsoft-current",
    period: "2026 – Present",
    role: "Senior Product Designer, Azure Advisor",
    company: "Microsoft",
  },
  {
    id: "microsoft",
    period: "2022 – 2026",
    role: "Senior UX Designer → Senior Design Manager",
    company: "Microsoft",
  },
  {
    id: "snap",
    period: "2013 – 2022",
    role: "UX Engineer → UX Manager → Lead Data Analyst",
    company: "SnapAV / SnapOne",
  },
  {
    id: "lockheed",
    period: "2011 – 2013",
    role: "Human Systems Integration Engineer",
    company: "Lockheed Martin",
  },
  {
    id: "ge",
    period: "2011",
    role: "Human Factors Engineer",
    company: "General Electric",
  },
] as const;

export type CareerStintId = (typeof careerStints)[number]["id"];
