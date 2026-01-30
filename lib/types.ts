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
  coverImage?: string;
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  featured: boolean;
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
