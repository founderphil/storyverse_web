import type { Metadata } from "next";

export const SITE_URL = "https://storyversenyc.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const SITE_DESCRIPTION = "Storyverse is a New York immersive experience studio creating custom brand activations, live performance, and audience technology for brands and agencies worldwide.";

export function pageMetadata(title: string, description: string, path: string, image = "/images/social_logo.png"): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | Storyverse NYC`, description, url: path, type: "website", siteName: "Storyverse NYC", images: [{ url: image, alt: title }] },
    twitter: { card: "summary_large_image", title: `${title} | Storyverse NYC`, description, images: [image] },
  };
}
