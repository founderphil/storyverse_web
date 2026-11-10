import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/work", ...services.map(service => `/services/${service.slug}`), ...Object.keys(projects).map(slug => `/work/${slug}`)]
    .map(path => ({ url: `${SITE_URL}${path}` }));
}
