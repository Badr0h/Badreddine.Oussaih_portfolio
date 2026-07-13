"use client";

import { useTranslations, useLocale } from "next-intl";
import { profile } from "@/lib/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/data/profile";

export function About() {
  const t = useTranslations("about");
  const locale = useLocale() as Locale;
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <section
      id="about"
      className="section-padding scroll-mt-24 border-t border-border/50"
    >
      <div className="container-main">
        <Reveal>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
          <Reveal delay={1}>
            <div className="relative mx-auto w-fit lg:mx-0">
              <div
                className="flex h-44 w-44 items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-accent-muted to-gold-muted font-display text-5xl font-extrabold text-gradient"
                aria-hidden
              >
                {initials}
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-lg border border-border bg-bg-card px-3 py-1.5 font-mono text-xs text-text-muted">
                {profile.location[locale].split("—")[0]?.trim()}
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-text-secondary">
                {profile.bio[locale]}
              </p>
              <p className="text-base leading-relaxed text-text-secondary">
                {profile.bioExtended[locale]}
              </p>

              <div className="rounded-xl border border-border bg-bg-muted/30 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {profile.education.school}
                </p>
                <p className="mt-2 font-display text-base font-semibold text-text-primary">
                  {profile.education.degree[locale]}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {profile.education.description[locale]}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {profile.spokenLanguages.map((lang) => (
                  <span
                    key={lang.name.en}
                    className="rounded-lg border border-border bg-bg-card/50 px-3 py-1.5 text-sm"
                  >
                    <span className="font-medium text-text-primary">
                      {lang.name[locale]}
                    </span>
                    <span className="text-text-muted">
                      {" "}
                      · {lang.level[locale]}
                    </span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {profile.platforms.map((platform) => (
                  <Button
                    key={platform.id}
                    href={platform.url}
                    variant="secondary"
                    external
                  >
                    {platform.label}
                  </Button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
