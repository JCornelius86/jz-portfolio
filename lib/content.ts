import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { CaseStudy, Project } from "./types";

const contentDir = path.join(process.cwd(), "content");

function readMdxFile(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data, content };
}

export function getCaseStudies(): CaseStudy[] {
  const dir = path.join(contentDir, "case-studies");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const { data } = readMdxFile(path.join(dir, file));
      return {
        slug: file.replace(/\.mdx$/, ""),
        ...data,
      } as CaseStudy;
    })
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
}

export function getCaseStudy(slug: string) {
  const filePath = path.join(contentDir, "case-studies", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = readMdxFile(filePath);
  return {
    meta: { slug, ...data } as CaseStudy,
    content,
  };
}

export function getCaseStudySlugs(): string[] {
  const dir = path.join(contentDir, "case-studies");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getProjects(): Project[] {
  const dir = path.join(contentDir, "projects");
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

  return files
    .map((file) => {
      const { data } = readMdxFile(path.join(dir, file));
      return {
        slug: file.replace(/\.mdx$/, ""),
        ...data,
      } as Project;
    })
    .sort((a, b) => {
      // Featured first, then manual `order`, then newest date as a fallback.
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      const ao = a.order ?? Number.POSITIVE_INFINITY;
      const bo = b.order ?? Number.POSITIVE_INFINITY;
      if (ao !== bo) return ao - bo;
      return (b.date ?? "").localeCompare(a.date ?? "");
    });
}

export function getProject(slug: string) {
  const filePath = path.join(contentDir, "projects", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = readMdxFile(filePath);
  return {
    meta: { slug, ...data } as Project,
    content,
  };
}

export function getProjectSlugs(): string[] {
  const dir = path.join(contentDir, "projects");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
