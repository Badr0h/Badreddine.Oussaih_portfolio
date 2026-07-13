import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("caseStudy");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-4xl font-bold text-text-primary">
        404
      </h1>
      <p className="mt-2 text-lg text-text-secondary">{t("notFound")}</p>
      <p className="mt-1 text-sm text-text-muted">{t("notFoundDesc")}</p>
      <Link
        href="/"
        className="mt-6 text-sm font-medium text-accent hover:underline"
      >
        ← {t("back")}
      </Link>
    </div>
  );
}
