export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  coverImage: string;
  date: string;
  featured: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  /** Image shown on cards (home + /projects). Typically a single hero screenshot. */
  coverImage?: string;
  /** Image shown in the hero of the detail page. Falls back to coverImage if omitted. */
  heroImage?: string;
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  date: string;
  featured: boolean;
  /** Manual sort position within the featured group (lower = earlier). Falls back to date. */
  order?: number;
}

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  featured: boolean;
  [key: string]: unknown;
}
