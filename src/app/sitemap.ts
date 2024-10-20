import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return [
    // English URLs
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },

    // Czech (cs) URLs
    {
      url: `${baseUrl}/cs`,
      lastModified: new Date(),
    },
  ];
}
