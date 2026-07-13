"use client";

import { useTranslations, useLocale } from "next-intl";
import { profile } from "@/lib/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/data/profile";

export function Skills() {
  const t = useTranslations("skills");
  const locale = useLocale() as Locale;

  return (
    <section
      id="skills"
      className="section-padding scroll-mt-24 border-t border-border/50"
    >
      <div className="container-main">
        <Reveal>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((category, i) => (
            <Reveal key={category.id} delay={(i % 3) as 0 | 1 | 2}>
              <div className="card-shine h-full rounded-xl border border-border bg-bg-muted/30 p-5 transition-colors hover:border-border-strong">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {category.label[locale]}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-bg-card/60 px-2.5 py-1 text-sm text-text-secondary transition-colors hover:border-accent/30 hover:text-text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
