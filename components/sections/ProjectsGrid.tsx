"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import {
  getFeaturedProjects,
  getSecondaryProjects,
} from "@/lib/data/projects";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/lib/data/profile";

function ProjectCard({
  project,
  locale,
  t,
  featured = false,
}: {
  project: ReturnType<typeof getFeaturedProjects>[number];
  locale: Locale;
  t: ReturnType<typeof useTranslations<"projects">>;
  featured?: boolean;
}) {
  return (
    <article
      className={`card-shine group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-border-strong hover:shadow-[0_8px_40px_rgba(0,0,0,0.35)] ${
        featured ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {project.thumbnail && (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
          <Image
            src={project.thumbnail}
            alt={project.title[locale]}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div
            className="h-1 w-8 rounded-full"
            style={{ backgroundColor: project.accentColor }}
            aria-hidden
          />
          {project.featured && (
            <Badge variant="gold">{t("featured")}</Badge>
          )}
        </div>

        <h3 className="font-display text-lg font-bold text-text-primary transition-colors group-hover:text-accent">
          {project.title[locale]}
        </h3>
        <p className="mt-1 font-mono text-xs text-text-muted">
          {project.tagline[locale]}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
          {project.description[locale]}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-sm">
          {project.featured && project.caseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="font-medium text-accent hover:underline"
            >
              {t("viewCaseStudy")} →
            </Link>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
            >
              {t("viewDemo")}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
            >
              {t("viewCode")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsGrid() {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;
  const featured = getFeaturedProjects();
  const secondary = getSecondaryProjects();

  return (
    <section
      id="projects"
      className="section-padding scroll-mt-24 border-t border-border/50"
    >
      <div className="container-main">
        <Reveal>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) as 0 | 1 | 2}>
              <ProjectCard
                project={project}
                locale={locale}
                t={t}
                featured={i === 0}
              />
            </Reveal>
          ))}
        </div>

        {secondary.length > 0 && (
          <Reveal>
            <h3 className="mt-14 mb-6 font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
              {t("otherProjects")}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {secondary.map((project) => (
                <article
                  key={project.slug}
                  className="card-shine rounded-xl border border-border bg-bg-muted/40 p-5 transition-colors hover:border-border-strong"
                >
                  <h4 className="font-display font-semibold text-text-primary">
                    {project.title[locale]}
                  </h4>
                  <p className="mt-2 text-sm text-text-secondary">
                    {project.description[locale]}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
