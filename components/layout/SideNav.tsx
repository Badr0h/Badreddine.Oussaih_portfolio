"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { navSections } from "@/lib/data/profile";
import type { Locale } from "@/lib/data/profile";

type SideNavProps = {
  activeSection: string;
};

export function SideNav({ activeSection }: SideNavProps) {
  const locale = useLocale() as Locale;

  return (
    <nav
      className="fixed left-0 top-0 z-40 hidden h-screen w-[var(--nav-sidebar-w)] flex-col justify-center border-r border-border bg-bg-primary/80 px-6 backdrop-blur-sm lg:flex"
      aria-label="Section navigation"
    >
      <ul className="space-y-1">
        {navSections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "font-medium text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    isActive
                      ? "scale-125 bg-accent"
                      : "bg-border-strong group-hover:bg-text-muted"
                  }`}
                  aria-hidden
                />
                {section.label[locale]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeSection;
}
