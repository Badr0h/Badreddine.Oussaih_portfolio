import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getProjectSlugs } from "@/lib/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getProjectSlugs();

  const homeEntries = routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  const projectEntries = routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({
      url: `${siteUrl}/${locale}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...homeEntries, ...projectEntries];
}
