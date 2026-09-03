import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { siteAssetUrl, siteJsonLd, siteUrl } from "@/config/site";
import { MotionRuntime } from "@/ui/MotionRuntime";
import {
  motionDefinitions,
  interactionDefinitions,
} from "@/components/PrivacyPolicy/PrivacyPolicy/PrivacyPolicy.motion";

const structuredData: unknown[] = [];

export const metadata: Metadata = {
  title: "Aasco Realty - Real Estate",
  description:
    "Aasco Realty helps you find exceptional properties and make confident real estate decisions with trusted local expertise.",
  alternates: { canonical: siteUrl("/privacy-policy") },
  openGraph: {
    title: "Norvin - Premium Agency & Portfolio Template",
    description:
      "Norvin is a premium Framer template for agencies and creatives to showcase work with modern layouts, smooth interactions, and high performance. Launch a professional portfolio quickly and stand out.",
    url: siteUrl("/privacy-policy"),
    images: [siteAssetUrl("https://framerusercontent.com/images/HLVocncMZU8AwfYZmU9Cb7uua3A.png")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norvin - Premium Agency & Portfolio Template",
    description:
      "Norvin is a premium Framer template for agencies and creatives to showcase work with modern layouts, smooth interactions, and high performance. Launch a professional portfolio quickly and stand out.",
    images: [siteAssetUrl("https://framerusercontent.com/images/HLVocncMZU8AwfYZmU9Cb7uua3A.png")],
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
      <PrivacyPolicy />
      <MotionRuntime definitions={motionDefinitions} interactions={interactionDefinitions} />
    </>
  );
}
