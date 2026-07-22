"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { profile, getCvUrl } from "@/lib/data/profile";
import type { Locale } from "@/lib/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale() as Locale;
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="contact" className="section-padding scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={1}>
            <div className="overflow-visible rounded-2xl border border-border bg-bg-card/50 p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
                {t("email")}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-4 inline-block max-w-full break-all font-mono text-lg font-medium leading-snug text-accent transition-colors hover:text-accent-hover sm:text-xl md:text-2xl"
              >
                {profile.email}
              </a>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-lg border border-border px-4 py-2 font-mono text-xs text-text-secondary transition-colors hover:border-accent hover:text-accent"
                >
                  {copied ? t("copied") : t("copyEmail")}
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-lg border border-accent/30 bg-accent-muted px-4 py-2 font-mono text-xs text-accent transition-colors hover:border-accent"
                >
                  {t("sendEmail")} →
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal delay={2}>
              <div className="card-shine flex flex-col rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-muted to-transparent p-6">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {t("downloadCv")}
                </p>
                <p className="mt-3 flex-1 text-sm text-text-secondary">
                  {t("cvFormat")}
                </p>
                <Button href={getCvUrl(locale)} download className="mt-4 w-full">
                  {t("downloadCv")} ↓
                </Button>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="card-shine rounded-2xl border border-border bg-bg-muted/30 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
                  {t("platforms")}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
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
      </div>
    </section>
  );
}
