export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  coverImage: string;
  /** Image shown in the hero of the detail page. Falls back to coverImage.
   * Lets the card carry a tight mark (e.g. an app icon) while the page
   * still leads with product imagery. */
  heroImage?: string;
  date: string;
  featured: boolean;
  /** Optional label rendered as a pill near the title, e.g. "Private Preview". */
  status?: string;
  /** Optional key into the hero component registry ([slug]/page.tsx). When
   * set, the named component renders as the hero instead of coverImage. */
  heroComponent?: string;
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
  playStoreUrl?: string;
  date: string;
  featured: boolean;
  /** Manual sort position within the featured group (lower = earlier). Falls back to date. */
  order?: number;
  /** Hidden from listings, but the detail page still renders when linked directly. */
  archived?: boolean;
  /** Extra screens for the pinned side column, each shown once its section's
   * h2 scrolls up. The hero image stays first. Use screens the article doesn't
   * already show inline. Without a rail the hero doesn't stick. */
  rail?: { section: string; src: string; alt: string }[];
  /** Optional key into the hero component registry. When set, the named
   * component renders as the detail-page hero instead of heroImage. */
  heroComponent?: string;
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
