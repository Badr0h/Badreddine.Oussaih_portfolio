"use client";

import { useTranslations, useLocale } from "next-intl";
import { profile } from "@/lib/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/data/profile";

export function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale() as Locale;

  return (
    <section id="experience" className="section-padding scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </Reveal>

        <div className="relative space-y-0">
          {profile.experience.map((item, index) => (
            <Reveal key={item.company.en} delay={(index % 2) as 0 | 1}>
              <div className="relative grid gap-4 border-l border-border pl-8 pb-10 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-8">
                <span
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg-deep bg-accent"
                  aria-hidden
                />

                <div className="font-mono text-xs text-text-muted sm:pt-1">
                  {item.period[locale]}
                </div>

                <div className="card-shine rounded-xl border border-border bg-bg-card/50 p-5 sm:p-6">
                  <h3 className="font-display text-lg font-bold text-text-primary">
                    {item.company[locale]}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.role[locale]}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.description[locale]}
                  </p>
                  {item.stack && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.stack.map((tech) => (
                        <Badge key={tech} variant="accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
