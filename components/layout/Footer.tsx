"use client";

import { useTranslations } from "next-intl";
import { profile } from "@/lib/data/profile";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-primary/80">
      <div className="container-main flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-bold text-text-primary">
            {profile.name}
          </p>
          <p className="mt-1 font-mono text-xs text-text-muted">
            © {year} · {t("rights")}
          </p>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-text-muted">
          <span>{t("builtWith")}</span>
          <Link
            href="/"
            className="text-accent transition-colors hover:text-accent-hover"
            aria-label="Back to top"
          >
            ↑ top
          </Link>
        </div>
      </div>
    </footer>
  );
}
