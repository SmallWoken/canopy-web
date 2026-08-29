import type { MetadataRoute } from "next";
import { site, pages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.effectiveDateISO);
  return [
    { url: site.baseUrl, lastModified },
    ...pages.map((page) => ({
      url: `${site.baseUrl}${page.href}`,
      lastModified,
    })),
  ];
}
