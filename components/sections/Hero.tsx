"use client";

import { useTranslations, useLocale } from "next-intl";
import { profile, getCvUrl } from "@/lib/data/profile";
import { Button } from "@/components/ui/Button";
import { MeshBackground } from "@/components/ui/MeshBackground";
import type { Locale } from "@/lib/data/profile";

const tickerItems = [
  "Spring Boot 3",
  "Angular 19",
  "Next.js 16",
  "PostgreSQL",
  "Docker",
  "SaaS",
  "REST APIs",
  "Spring Security",
  "TypeScript",
  "Vercel",
];

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as Locale;

  const doubledTicker = [...tickerItems, ...tickerItems];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden scroll-mt-24 pt-[var(--nav-h)]"
    >
      <MeshBackground />

      <div className="container-main relative flex min-h-[calc(92vh-var(--nav-h))] flex-col justify-center py-16">
        <div className="hero-enter mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-bg-elevated/60 px-4 py-1.5 backdrop-blur-sm">
          <span className="pulse-dot h-2 w-2 rounded-full bg-accent" aria-hidden />
          <span className="font-mono text-xs text-text-secondary">
            {t("available")}
          </span>
        </div>

        <p className="hero-enter hero-enter-d1 mb-3 font-mono text-sm text-text-muted">
          {t("greeting")}{" "}
          <span className="text-accent">{profile.name}</span>
        </p>

        <h1 className="hero-enter hero-enter-d2 font-display text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[1.05] tracking-tight">
          <span className="text-text-primary">
            {profile.title[locale].split("|")[0]?.trim()}
          </span>
          <br />
          <span className="text-gradient">
            {profile.title[locale].split("|")[1]?.trim() ?? ""}
          </span>
        </h1>

        <p className="hero-enter hero-enter-d3 mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {t("subtitle")}
        </p>

        <div className="hero-enter hero-enter-d4 mt-8 flex flex-wrap gap-3">
          <Button href="#projects">{t("ctaProjects")}</Button>
          <Button href="#contact" variant="secondary">
            {t("ctaContact")}
          </Button>
          <Button href={getCvUrl(locale)} variant="ghost" download>
            {t("ctaCv")} ↓
          </Button>
        </div>

        <div className="hero-enter hero-enter-d5 mt-14 overflow-hidden border-y border-border py-3">
          <div className="ticker-track flex w-max gap-8">
            {doubledTicker.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-2 font-mono text-xs text-text-muted"
              >
                <span className="text-accent">▸</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
