import type { ComponentType } from "react";
import AdvisorHeroPoster from "./AdvisorHeroPoster";

/**
 * Case studies and projects opt into a component hero via `heroComponent`
 * frontmatter. Used by the case study page, the project page, and the home
 * flagship panel; coverImage remains the card/OG image everywhere else.
 */
export const heroComponents: Record<string, ComponentType> = {
  "advisor-poster": AdvisorHeroPoster,
};
