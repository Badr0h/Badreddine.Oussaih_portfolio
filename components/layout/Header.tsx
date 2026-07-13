"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { profile, navSections } from "@/lib/data/profile";
import type { Locale } from "@/lib/data/profile";
import { LangSwitch } from "./LangSwitch";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border glass-panel shadow-lg shadow-black/20"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-main flex h-[var(--nav-h)] items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-text-primary sm:text-lg"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-accent-muted font-mono text-xs text-accent transition-colors group-hover:border-accent">
            BO
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navSections.slice(1, 6).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-accent-muted hover:text-accent"
            >
              {section.label[locale]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.cvUrl}
            download
            className="hidden rounded-lg border border-border px-3 py-1.5 font-mono text-xs text-text-secondary transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            CV ↓
          </a>
          <LangSwitch />

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border glass-panel px-5 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-0.5">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-accent-muted hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {section.label[locale]}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.cvUrl}
                download
                className="block rounded-lg px-3 py-2.5 font-mono text-sm text-accent"
                onClick={() => setOpen(false)}
              >
                CV ↓
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
