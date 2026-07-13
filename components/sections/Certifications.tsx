"use client";

import { useTranslations, useLocale } from "next-intl";
import { profile } from "@/lib/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/data/profile";

export function Certifications() {
  const t = useTranslations("certifications");
  const locale = useLocale() as Locale;
  const linkedinUrl =
    profile.linkedinCertifications ?? profile.linkedin;

  return (
    <section id="certifications" className="section-padding scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {profile.certifications.map((cert, i) => {
            const certUrl = cert.url ?? linkedinUrl;
            return (
              <Reveal key={cert.title.en} delay={(i % 2) as 0 | 1}>
                <a
                  href={certUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-shine group flex h-full flex-col rounded-xl border border-border bg-bg-card/50 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_32px_var(--accent-glow)] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold-muted font-mono text-sm font-bold text-gold">
                      ✓
                    </div>
                    <span className="font-mono text-sm text-accent">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-text-primary transition-colors group-hover:text-accent">
                    {cert.title[locale]}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                  <p className="mt-auto pt-4 font-mono text-xs text-text-muted transition-colors group-hover:text-accent">
                    {t("viewOnLinkedIn")} →
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-8 text-center">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 font-mono text-sm text-text-secondary transition-all hover:border-accent hover:text-accent"
            >
              {t("viewAllLinkedIn")} →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
