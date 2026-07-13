import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.vercel.app";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
};
