import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./property.module.css";
import enquiryStyles from "./enquiry.module.css";
import enquiryMotion from "./enquiry-motion.module.css";
import { SaiWorldCityView } from "../../../components/Property/SaiWorldCityView";

import { siteAssetUrl, siteJsonLd, siteUrl } from "@/config/site";

interface PropertyItem {
  title: string;
  headingTitle: string;
  metaTitle?: string;
  location: string;
  price: string;
  priceRange: string;
  details: string;
  image: string;
  description: string;
  keywords: string;
  isDedicatedView: boolean;
}

const properties: Record<string, PropertyItem> = {
  "sai-world-city-panvel": {
    title: "Sai World City Panvel — 2, 3 & 4 BHK Luxury Flats | AASCO",
    headingTitle: "Sai World City Panvel",
    metaTitle: "Sai World City Panvel — 2, 3 & 4 BHK Luxury Flats from ₹1.25 Cr* | AASCO Realty",
    location: "Palaspe Junction, Panvel, Navi Mumbai",
    price: "₹ 1.25 Cr* Onwards",
    priceRange: "₹ 1.25 Cr* - 3.34 Cr*",
    details: "620 - 1858 sq. ft.  |  2, 3, 3.5 & 4 BHK",
    image: "https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758",
    description: "38-Acre Integrated Global Township at Palaspe Junction, Panvel inspired by New York, Paris & Dubai. 75,000 sq.ft. Club Vegas, 50+ luxury amenities by Paradise Group. MahaRERA registered.",
    keywords: "Sai World City Panvel, Sai World City Palaspe Junction, Sai Sun City Panvel, 2 BHK in Panvel, 3 BHK in Panvel, Flats in Panvel, Paradise Group Panvel, Luxury Flats Navi Mumbai, Sai World City Floor Plan, Sai World City Price",
    isDedicatedView: true,
  },
  "sai-sun-city": {
    title: "Sai Sun City / Sai World City Panvel | AASCO",
    headingTitle: "Sai World City Panvel",
    metaTitle: "Sai Sun City / Sai World City Panvel — Luxury Residences | AASCO",
    location: "Palaspe Junction, Panvel, Navi Mumbai",
    price: "₹ 1.25 Cr* Onwards",
    priceRange: "₹ 1.25 Cr* - 3.34 Cr*",
    details: "620 - 1858 sq. ft.  |  2, 3, 3.5 & 4 BHK",
    image: "https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758",
    description: "38-Acre Integrated Global Township at Palaspe Junction, Panvel inspired by New York, Paris & Dubai. 75,000 sq.ft. Club Vegas, 50+ luxury amenities by Paradise Group.",
    keywords: "Sai Sun City Panvel, Sai World City Panvel, Palaspe Junction Flats, Paradise Group Panvel",
    isDedicatedView: true,
  },
  "sai-sun-city-panvel": {
    title: "Sai Sun City Panvel — Luxury Residences | AASCO",
    headingTitle: "Sai World City Panvel",
    metaTitle: "Sai Sun City Panvel — 2 & 3 BHK Flats from ₹1.25 Cr* | AASCO",
    location: "Palaspe Junction, Panvel, Navi Mumbai",
    price: "₹ 1.25 Cr* Onwards",
    priceRange: "₹ 1.25 Cr* - 3.34 Cr*",
    details: "620 - 1858 sq. ft.  |  2, 3, 3.5 & 4 BHK",
    image: "https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758",
    description: "38-Acre Integrated Global Township at Palaspe Junction, Panvel inspired by New York, Paris & Dubai. 75,000 sq.ft. Club Vegas, 50+ luxury amenities by Paradise Group.",
    keywords: "Sai Sun City Panvel, Sai World City Panvel, Palaspe Junction Flats, Paradise Group Panvel",
    isDedicatedView: true,
  },
  "navi-mumbai-homes": {
    title: "Sai World City & Towers — Navi Mumbai | AASCO",
    headingTitle: "Sai World City & Towers",
    metaTitle: "Sai World City & Luxury Homes in Navi Mumbai | AASCO",
    location: "Palaspe Junction, Panvel, Navi Mumbai",
    price: "₹ 1.25 Cr* - 3.34 Cr*",
    priceRange: "₹ 1.25 Cr* - 3.34 Cr*",
    details: "620 - 1858 sq. ft.  |  2, 3, 3.5 & 4 BHK",
    image: "https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758",
    description: "A 38-Acre Integrated Global Township inspired by New York, Paris & Dubai featuring 75,000 sq.ft. Club Vegas and 50+ luxury amenities by Paradise Group.",
    keywords: "Navi Mumbai Luxury Homes, Sai World City Panvel, Luxury Flats Navi Mumbai",
    isDedicatedView: true,
  },
  "meghna-star-walk-kharghar": {
    title: "Meghna Star Walk At Kharghar NX | AASCO",
    headingTitle: "Meghna Star Walk At Kharghar NX.",
    metaTitle: "Meghna Star Walk At Kharghar NX — 1 & 2 BHK from ₹23.99 Lacs* | AASCO",
    location: "NX Kharghar, Navi Mumbai",
    price: "23.99 Lacs* - 32.99 Lacs*",
    priceRange: "₹ 23.99 L - 32.99 L",
    details: "360 - 600 sq. ft.  |  1, 2 BHK",
    image: "/assets/properties/property-1.jpg",
    description: "A thoughtfully planned residential address in NX Kharghar, selected by AASCO for its location, connectivity, and everyday convenience.",
    keywords: "Meghna Star Walk, Flats in Kharghar NX, 1 BHK in Kharghar, 2 BHK in Kharghar",
    isDedicatedView: false,
  },
  "arihant-avanti-palace": {
    title: "Arihant Avanti Palace — Dombivli | AASCO",
    headingTitle: "Arihant Avanti Palace",
    metaTitle: "Arihant Avanti Palace Dombivli — 1 & 2 BHK from ₹42 Lacs* | AASCO",
    location: "Kalyan-Shilphata Road, Dombivli",
    price: "42 Lacs* - 65 Lacs*",
    priceRange: "₹ 42 L - 65 L",
    details: "400 - 650 sq. ft.  |  1, 2 BHK",
    image: "/assets/properties/property-2.jpg",
    description: "A residential opportunity on the Kalyan-Shilphata Road, with AASCO guiding you through the visit, paperwork, and purchase.",
    keywords: "Arihant Avanti Palace, Flats in Dombivli, Shilphata Road Property",
    isDedicatedView: false,
  },
  "mumbai-homes": {
    title: "Mumbai Luxury Homes | AASCO Realty",
    headingTitle: "Mumbai Luxury Homes",
    metaTitle: "Mumbai Luxury Homes & Premium Apartments | AASCO Realty",
    location: "Mumbai, Maharashtra",
    price: "Explore available properties",
    priceRange: "On Request",
    details: "Residential homes and investments",
    image: "/assets/properties/property-1.jpg",
    description: "Explore residential opportunities across Mumbai with local property advice shaped around your goals and budget.",
    keywords: "Mumbai Luxury Homes, Buy Flat in Mumbai, Real Estate Mumbai",
    isDedicatedView: false,
  },
  "thane-residences": {
    title: "Thane Residences | AASCO Realty",
    headingTitle: "Thane Residences",
    metaTitle: "Thane Residences — Luxury Apartments & Projects | AASCO",
    location: "Thane, Maharashtra",
    price: "Explore available properties",
    priceRange: "On Request",
    details: "Residential homes and investments",
    image: "/assets/properties/property-2.jpg",
    description: "Property options in Thane supported by clear guidance, market understanding, and a client-first process.",
    keywords: "Thane Residences, Flats in Thane, Ghodbunder Road Properties",
    isDedicatedView: false,
  },
  "taloja-new-homes": {
    title: "Taloja New Homes | AASCO Realty",
    headingTitle: "Taloja New Homes",
    metaTitle: "Taloja New Homes & Affordable Apartments | AASCO",
    location: "Taloja, Navi Mumbai",
    price: "Explore available properties",
    priceRange: "On Request",
    details: "New homes and investments",
    image: "/assets/properties/property-3.jpg",
    description: "Explore new homes in Taloja with end-to-end assistance from AASCO Realty.",
    keywords: "Taloja New Homes, Flats in Taloja, Taloja Phase 1 2 Properties",
    isDedicatedView: false,
  },
};

export function generateStaticParams() {
  return Object.keys(properties).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = properties[slug];
  if (!property) {
    return { title: "Property Not Found | AASCO Realty" };
  }

  const canonicalPath = property.isDedicatedView
    ? "/properties/sai-world-city-panvel"
    : `/properties/${slug}`;
  const canonical = siteUrl(canonicalPath);
  const title = property.metaTitle || `${property.title} | AASCO Realty`;
  const description = property.description;
  const imageUrl = siteAssetUrl(property.image);

  return {
    title,
    description,
    keywords: property.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "AASCO Realty",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: property.headingTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function getStructuredData(slug: string, property: PropertyItem) {
  const propertyUrl = siteUrl(
    property.isDedicatedView ? "/properties/sai-world-city-panvel" : `/properties/${slug}`
  );

  const schemas: unknown[] = [
    // 1. Breadcrumbs Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Properties",
          item: siteUrl("/works"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Panvel & Navi Mumbai",
          item: siteUrl("/works"),
        },
        {
          "@type": "ListItem",
          position: 4,
          name: property.headingTitle,
          item: propertyUrl,
        },
      ],
    },
    // 2. Real Estate Agent Schema
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "AASCO Realty",
      url: siteUrl("/"),
      telephone: "+919082407700",
      email: "info@aasco.in",
      priceRange: "₹₹₹",
      image: siteAssetUrl(property.image),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Navi Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "410206",
        addressCountry: "IN",
      },
    },
  ];

  if (property.isDedicatedView) {
    // 3. ApartmentComplex & Real Estate Listing Schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      name: "Sai World City Panvel",
      alternateName: ["Sai Sun City Panvel", "Sai World City Palaspe Junction", "Sai World City by Paradise Group"],
      description: property.description,
      url: propertyUrl,
      telephone: "+919082407700",
      image: [
        siteAssetUrl("https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758"),
        siteAssetUrl("https://paradise-saiworldcitypanvel.com/assets/images/banner/B2.webp?v=1776947758"),
        siteAssetUrl("https://paradise-saiworldcitypanvel.com/assets/images/gallery/Gallery-1.webp"),
        siteAssetUrl("https://paradise-saiworldcitypanvel.com/assets/images/amenities/Clubhouse.webp"),
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Palaspe Junction, Near Old Mumbai-Pune Highway & NH 17",
        addressLocality: "Panvel",
        addressRegion: "Navi Mumbai, Maharashtra",
        postalCode: "410206",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.9894,
        longitude: 73.1276,
      },
      numberOfAccommodationUnits: 2500,
      petsAllowed: true,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "75,000 Sq.Ft. Club Vegas Resort Clubhouse", value: true },
        { "@type": "LocationFeatureSpecification", name: "Temperature-Controlled Vegas Lap Pool", value: true },
        { "@type": "LocationFeatureSpecification", name: "TechnoGym Olympic Fitness Arena", value: true },
        { "@type": "LocationFeatureSpecification", name: "Private Dolby Atmos Screening Cinema", value: true },
        { "@type": "LocationFeatureSpecification", name: "100% Vastu-Compliant East-West Layouts", value: true },
        { "@type": "LocationFeatureSpecification", name: "MahaRERA Registered Project (P52000006318 & P52000038422)", value: true },
        { "@type": "LocationFeatureSpecification", name: "10 Mins to Mumbai Trans Harbour Link (MTHL)", value: true },
        { "@type": "LocationFeatureSpecification", name: "20 Mins to Navi Mumbai International Airport (NMIA)", value: true },
      ],
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: 12500000,
        highPrice: 33400000,
        offerCount: 4,
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
      },
    });

    // 4. FAQ Schema for Rich Google Snippets
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the price of 2 BHK and 3 BHK flats at Sai World City Panvel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At Sai World City Panvel, 2 BHK luxury residences start from ₹1.25 Cr* onwards (620–892 sq.ft. carpet), 3 BHK Grande Royale residences start from ₹2.41 Cr* onwards (1334 sq.ft. carpet), 3.5 BHK suites start from ₹2.89 Cr*, and 4 BHK Royal Sky Penthouses start from ₹3.34 Cr*.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Sai World City located and how is its connectivity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sai World City is located at Palaspe Junction, Panvel, Navi Mumbai. It offers immediate access to NH 17 (Mumbai-Goa Highway), NH 4 (Mumbai-Pune Expressway), is 10 minutes from the Mumbai Trans Harbour Link (MTHL / Atal Setu) for direct South Mumbai access, and 20 minutes from the upcoming Navi Mumbai International Airport (NMIA).",
          },
        },
        {
          "@type": "Question",
          name: "Is Sai World City Panvel approved by MahaRERA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Sai World City is 100% MahaRERA compliant. Phase 2 MahaRERA registration number is P52000006318 and Phase 3 is P52000038422. Marketed by AASCO Realty (MahaRERA Authorized Agent: A52000032476).",
          },
        },
        {
          "@type": "Question",
          name: "What amenities are featured in 75,000 sq.ft. Club Vegas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Club Vegas is an international Las Vegas-inspired G+5 multi-level clubhouse featuring an Olympic-sized infinity lap pool, sunken aqua loungers, TechnoGym fitness center, private 32-seater Dolby Atmos cinema, championship snooker and table tennis lounge, zen courtyards, and 50+ curated lifestyle amenities.",
          },
        },
        {
          "@type": "Question",
          name: "How can I book a site visit or download the official floor plan brochure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can book a private VIP site visit or download complete floor plans and cost sheets through AASCO Realty by calling +91 90824 07700 or connecting via WhatsApp. AASCO provides complimentary cab pick-up from Panvel Station and end-to-end advisory.",
          },
        },
      ],
    });
  }

  return schemas;
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = properties[slug];

  if (!property) {
    notFound();
  }

  const structuredData = getStructuredData(slug, property);

  // If this property has the dedicated ultra-luxury interactive landing page
  if (property.isDedicatedView) {
    return (
      <>
        {structuredData.map((value, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: siteJsonLd(value) }}
          />
        ))}
        <SaiWorldCityView />
      </>
    );
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/works#top">← All properties</Link>
        <Link className={styles.brand} href="/#top">
          Aasco
        </Link>
        <Link href="/contact#top">Enquire ↗</Link>
      </header>
      <section className={styles.hero}>
        <div className={styles.imageWrap}>
          <img src={property.image} alt={property.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{property.location} · AASCO</p>
          <h1>{property.title}</h1>
          <p className={styles.description}>{property.description}</p>
          <div className={styles.meta}>
            <div>
              <span>PRICE</span>
              <strong>{property.price}</strong>
            </div>
            <div>
              <span>DETAILS</span>
              <strong>{property.details}</strong>
            </div>
          </div>
          <Link className={styles.button} href="/contact#top">
            Schedule a visit <span>↗</span>
          </Link>
        </div>
      </section>
      <section className={`${enquiryStyles.enquiry} ${enquiryMotion.reveal}`}>
        <div>
          <p className={styles.eyebrow}>PRIVATE VIEWING</p>
          <h2>
            Make an <em>enquiry</em>
          </h2>
          <p className={enquiryStyles.enquiryIntro}>
            Tell us how we can help with this property.
          </p>
        </div>
        <form
          className={`${enquiryStyles.enquiryForm} ${enquiryMotion.form}`}
          action="/contact#top"
          method="get"
        >
          <input type="hidden" name="property" value={property.title} />
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            <span>Phone</span>
            <input
              name="phone"
              type="tel"
              placeholder="+91 00000 00000"
              required
            />
          </label>
          <label className={enquiryStyles.enquiryWide}>
            <span>Message</span>
            <textarea
              name="message"
              placeholder={`I am interested in ${property.title}.`}
              rows={3}
              required
            ></textarea>
          </label>
          <button
            className={`${enquiryStyles.enquiryButton} ${enquiryMotion.button}`}
            type="submit"
          >
            Send enquiry <span>↗</span>
          </button>
        </form>
      </section>
      <section className={styles.bottom}>
        <p>From dream to reality.</p>
        <p>
          Our advisors can help with site visits, legal consultation, and after-sales assistance.
        </p>
      </section>
    </main>
  );
}
