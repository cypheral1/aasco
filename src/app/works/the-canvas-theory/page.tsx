import type { Metadata } from "next";
import { WorksTheCanvasTheory } from "@/components/WorksTheCanvasTheory";
import { siteAssetUrl, siteJsonLd, siteUrl } from "@/config/site";
import { MotionRuntime } from "@/ui/MotionRuntime";
import {
  motionDefinitions,
  interactionDefinitions,
} from "@/components/WorksTheCanvasTheory/WorksTheCanvasTheory/WorksTheCanvasTheory.motion";

const structuredData: unknown[] = [];

export const metadata: Metadata = {
  title: "The Canvas Theory - My Framer Site",
  description:
    "Norvin is a premium Framer template for agencies and creatives to showcase work with modern layouts, smooth interactions, and high performance. Launch a professional portfolio quickly and stand out.",
  alternates: { canonical: siteUrl("/works/the-canvas-theory") },
  openGraph: {
    title: "The Canvas Theory - My Framer Site",
    description:
      "Norvin is a premium Framer template for agencies and creatives to showcase work with modern layouts, smooth interactions, and high performance. Launch a professional portfolio quickly and stand out.",
    url: siteUrl("/works/the-canvas-theory"),
    images: [siteAssetUrl("https://framerusercontent.com/images/HLVocncMZU8AwfYZmU9Cb7uua3A.png")],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Canvas Theory - My Framer Site",
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
      <WorksTheCanvasTheory />
      <MotionRuntime definitions={motionDefinitions} interactions={interactionDefinitions} />
    </>
  );
}
