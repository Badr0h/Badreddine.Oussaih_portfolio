"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { getPrimaryFeaturedProject } from "@/lib/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/data/profile";

export function FeaturedProject() {
  const t = useTranslations("featured");
  const locale = useLocale() as Locale;
  const project = getPrimaryFeaturedProject();

  return (
    <section id="featured" className="section-padding scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t("label")}
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="card-shine overflow-hidden rounded-2xl border border-border bg-bg-card/80 backdrop-blur-sm">
            <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
              {project.thumbnail ? (
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                  <Image
                    src={project.thumbnail}
                    alt={project.title[locale]}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-bg-card/90 hidden lg:block"
                    aria-hidden
                  />
                </div>
              ) : (
                <div
                  className="flex min-h-[280px] items-center justify-center lg:min-h-[420px]"
                  style={{
                    background: `linear-gradient(160deg, ${project.accentColor}12, transparent)`,
                  }}
                >
                  <span
                    className="font-display text-5xl font-bold opacity-15"
                    style={{ color: project.accentColor }}
                  >
                    {project.title[locale]}
                  </span>
                </div>
              )}

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div
                  className="mb-4 h-0.5 w-12 rounded-full"
                  style={{ backgroundColor: project.accentColor }}
                  aria-hidden
                />
                <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
                  {project.title[locale]}
                </h2>
                <p className="mt-2 font-mono text-sm text-accent">
                  {project.tagline[locale]}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {project.outcome?.[locale] ?? project.description[locale]}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={`/projects/${project.slug}`}>
                    {t("viewCaseStudy")}
                  </Button>
                  {project.demo && (
                    <Button href={project.demo} variant="secondary" external>
                      {t("viewDemo")}
                    </Button>
                  )}
                  {project.github && (
                    <Button href={project.github} variant="ghost" external>
                      {t("viewCode")} →
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
