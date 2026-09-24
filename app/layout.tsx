import React from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://storyversenyc.com"),
  title: "StoryverseNYC — Cinematic brand worlds & immersive production",
  description:
    "A full-service studio creating cinematic, performance-led brand worlds—and the technology that lets audiences participate before, during, and after the live experience.",
  openGraph: {
    title: "StoryverseNYC",
    description:
      "A full-service studio creating cinematic, performance-led brand worlds—and the technology that lets audiences participate before, during, and after the live experience.",
    url: "https://storyversenyc.com",
    siteName: "StoryverseNYC",
    type: "website",
    images: [
      {
        url: "images/social_logo.png",
        width: 1200,
        height: 630,
        alt: "StoryverseNYC social image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StoryverseNYC",
    description:
      "A full-service studio creating cinematic, performance-led brand worlds—and the technology that lets audiences participate before, during, and after the live experience.",
    images: ["images/social_logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
