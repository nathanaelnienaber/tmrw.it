import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://tmrw.it/sitemap.xml",
    host: "https://tmrw.it",
  };
}
