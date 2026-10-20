/**
 * The career outline shared by /about and /resume, so both pages group the
 * same roles under the same headings. About adds a narrative paragraph per
 * stint; the resume nests each role's dates and bullets underneath.
 *
 * Microsoft is one stint with a neutral heading rather than an arrow chain of
 * titles, so the order of roles doesn't narrate the manager-to-IC move (see
 * CLAUDE.md voice rules). The resume lists the individual roles underneath.
 */
export const careerStints = [
  {
    id: "microsoft",
    period: "2022 – Present",
    role: "Product design & design leadership, Azure",
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
