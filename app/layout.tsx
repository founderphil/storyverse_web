import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import StructuredData from "@/components/StructuredData";
import { SITE_URL, SITE_DESCRIPTION, ORGANIZATION_ID } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Immersive Experiences & Brand Activations | Storyverse NYC", template: "%s | Storyverse NYC" },
  description: SITE_DESCRIPTION,
  openGraph: { title: "Storyverse NYC — Immersive Experiences & Brand Activations", description: SITE_DESCRIPTION, siteName: "Storyverse NYC", type: "website", images: [{ url: "/images/social_logo.png", alt: "Storyverse NYC" }] },
  twitter: { card: "summary_large_image", title: "Storyverse NYC", description: SITE_DESCRIPTION, images: ["/images/social_logo.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={{ "@context": "https://schema.org", "@type": "Organization", "@id": ORGANIZATION_ID, name: "Storyverse NYC", alternateName: ["Storyverse", "StoryverseNYC"], legalName: "StoryverseNYC Inc.", url: SITE_URL, description: SITE_DESCRIPTION, logo: `${SITE_URL}/images/social_logo.png`, email: "contact@storyversenyc.com", location: { "@type": "Place", name: "New York City" }, areaServed: "Worldwide" }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
