import { profile } from "@/lib/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.vercel.app";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: profile.email,
  jobTitle: profile.title.en,
  knowsAbout: [...profile.knowsAbout],
  sameAs: profile.platforms.map((p) => p.url),
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.education.school,
  },
};
