import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", ...Object.keys(projects).map(slug => `/work/${slug}`)]
    .map(path => ({ url: `${SITE_URL}${path}` }));
}
