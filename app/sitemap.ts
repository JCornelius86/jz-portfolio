import type { MetadataRoute } from "next";
import { getCaseStudySlugs, getProjectSlugs } from "@/lib/content";

const SITE = "https://jczabel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, priority: 1.0 },
    { url: `${SITE}/work`, lastModified: now, priority: 0.9 },
    { url: `${SITE}/projects`, lastModified: now, priority: 0.8 },
    { url: `${SITE}/about`, lastModified: now, priority: 0.7 },
    { url: `${SITE}/resume`, lastModified: now, priority: 0.7 },
  ];

  const caseStudies: MetadataRoute.Sitemap = getCaseStudySlugs().map((slug) => ({
    url: `${SITE}/work/${slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  const projects: MetadataRoute.Sitemap = getProjectSlugs().map((slug) => ({
    url: `${SITE}/projects/${slug}`,
    lastModified: now,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudies, ...projects];
}
