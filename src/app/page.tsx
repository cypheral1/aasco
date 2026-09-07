import type { Metadata } from "next";
import { Home } from "@/components/Home";
import { siteAssetUrl, siteJsonLd, siteUrl } from "@/config/site";
import { MotionRuntime } from "@/ui/MotionRuntime";
import { motionDefinitions, interactionDefinitions } from "@/components/Home/Home/Home.motion";

const structuredData: unknown[] = [
  {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "AASCO Realty",
    url: siteUrl("/"),
    logo: siteAssetUrl("https://paradise-saiworldcitypanvel.com/assets/images/logo/logo.png"),
    telephone: "+919082407700",
    email: "info@aasco.in",
    description: "Aasco Realty is a premier real estate consultancy offering trusted advisory, verified luxury properties, and end-to-end guidance across Navi Mumbai and Mumbai.",
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Navi Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "410206",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.9894,
      longitude: 73.1276,
    },
  },
];

export const metadata: Metadata = {
  title: "AASCO Realty — Premier Real Estate Advisory | Navi Mumbai & Mumbai",
  description:
    "AASCO Realty helps you discover exceptional luxury homes, verified developments, and investment properties with trusted local market expertise.",
  keywords: [
    "AASCO Realty",
    "Real Estate Navi Mumbai",
    "Flats in Panvel",
    "Luxury Apartments Mumbai",
    "Sai World City Panvel",
    "Kharghar Properties",
  ],
  alternates: { canonical: siteUrl("/") },
  openGraph: {
    title: "AASCO Realty — Premier Real Estate Advisory",
    description:
      "Find exceptional residential developments and make confident real estate decisions with AASCO Realty.",
    url: siteUrl("/"),
    siteName: "AASCO Realty",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteAssetUrl("https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758"),
        width: 1200,
        height: 630,
        alt: "AASCO Realty — Luxury Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AASCO Realty — Premier Real Estate Advisory",
    description:
      "Find exceptional residential developments and make confident real estate decisions with AASCO Realty.",
    images: [siteAssetUrl("https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758")],
  },
};

export default function Page() {
  return (
    <>
      {structuredData.map((value, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: siteJsonLd(value) }}
        />
      ))}
      <Home />
      <MotionRuntime definitions={motionDefinitions} interactions={interactionDefinitions} />
    </>
  );
}

