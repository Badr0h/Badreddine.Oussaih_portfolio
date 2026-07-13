import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getProjectBySlug, getProjectSlugs } from "@/lib/data/projects";
import { profile } from "@/lib/data/profile";
import type { Locale } from "@/lib/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { Footer } from "@/components/layout/Footer";
import { LangSwitch } from "@/components/layout/LangSwitch";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = getProjectSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const loc = locale as Locale;
  const title = `${project.title[loc]} — ${profile.name}`;
  const description = project.description[loc];

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

function CaseStudySection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="border-b border-border py-8 last:border-0">
      <h2 className="font-display text-lg font-semibold text-text-primary">
        {title}
      </h2>
      <p className="mt-3 leading-relaxed text-text-secondary">{content}</p>
    </div>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) {
    notFound();
  }

  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: "caseStudy" });

  return (
    <div className="min-h-screen bg-bg-deep">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border glass-panel">
        <div className="container-main flex h-[var(--nav-h)] items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-text-secondary hover:text-accent"
          >
            ← {t("back")}
          </Link>
          <LangSwitch />
        </div>
      </header>

      <main className="pt-[calc(var(--nav-h)+2rem)] pb-16">
        <article className="container-main max-w-3xl">
          <div
            className="mb-6 h-0.5 w-16 rounded-full"
            style={{ backgroundColor: project.accentColor }}
            aria-hidden
          />
          <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {project.title[loc]}
          </h1>
          <p className="mt-2 text-lg text-text-secondary">
            {project.tagline[loc]}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {project.images && project.images.length > 0 ? (
            <div className="my-10">
              <ProjectGallery
                images={project.images}
                alt={project.title[loc]}
              />
            </div>
          ) : (
            <div
              className="my-10 flex aspect-video items-center justify-center rounded-2xl border border-border"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}18, ${project.accentColor}06)`,
              }}
            >
              <span
                className="font-display text-4xl font-bold opacity-25"
                style={{ color: project.accentColor }}
              >
                {project.title[loc]}
              </span>
            </div>
          )}

          <CaseStudySection
            title={t("problem")}
            content={project.caseStudy.problem[loc]}
          />
          <CaseStudySection
            title={t("role")}
            content={project.caseStudy.role[loc]}
          />
          <CaseStudySection
            title={t("approach")}
            content={project.caseStudy.approach[loc]}
          />
          <CaseStudySection
            title={t("result")}
            content={project.caseStudy.result[loc]}
          />

          <div className="mt-8 rounded-xl border border-border bg-bg-muted/50 p-6">
            <h2 className="font-display text-lg font-semibold text-text-primary">
              {t("links")}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.demo && (
                <Button href={project.demo} external>
                  {t("liveDemo")}
                </Button>
              )}
              {project.github && (
                <Button href={project.github} variant="secondary" external>
                  {t("sourceCode")}
                </Button>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
