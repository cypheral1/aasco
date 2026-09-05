import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./property.module.css";
import enquiryStyles from "./enquiry.module.css";
import enquiryMotion from "./enquiry-motion.module.css";
import { SaiWorldCityView } from "../../../components/Property/SaiWorldCityView";

const properties = {
  "sai-world-city-panvel": {
    title: "Sai World City Panvel",
    location: "Palaspe Junction, Panvel",
    price: "₹ 1.25 Cr* Onwards",
    details: "620 - 1858 sq. ft.  |  2, 3, 3.5 & 4 BHK",
    image: "https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758",
    description: "A 38-Acre Integrated Global Township inspired by New York, Paris & Dubai featuring 75,000 sq.ft. Club Vegas and 50+ luxury amenities by Paradise Group.",
    isDedicatedView: true,
  },
  "sai-sun-city": {
    title: "Sai World City / Sai Sun City Panvel",
    location: "Palaspe Junction, Panvel",
    price: "₹ 1.25 Cr* Onwards",
    details: "620 - 1858 sq. ft.  |  2, 3, 3.5 & 4 BHK",
    image: "https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758",
    description: "A 38-Acre Integrated Global Township inspired by New York, Paris & Dubai featuring 75,000 sq.ft. Club Vegas and 50+ luxury amenities by Paradise Group.",
    isDedicatedView: true,
  },
  "sai-sun-city-panvel": {
    title: "Sai Sun City / Sai World City Panvel",
    location: "Palaspe Junction, Panvel",
    price: "₹ 1.25 Cr* Onwards",
    details: "620 - 1858 sq. ft.  |  2, 3, 3.5 & 4 BHK",
    image: "https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758",
    description: "A 38-Acre Integrated Global Township inspired by New York, Paris & Dubai featuring 75,000 sq.ft. Club Vegas and 50+ luxury amenities by Paradise Group.",
    isDedicatedView: true,
  },
  "navi-mumbai-homes": {
    title: "Sai World City & Towers",
    location: "Palaspe Junction, Panvel, Navi Mumbai",
    price: "₹ 1.25 Cr* - 3.34 Cr*",
    details: "620 - 1858 sq. ft.  |  2, 3, 3.5 & 4 BHK",
    image: "https://paradise-saiworldcitypanvel.com/assets/images/banner/B1.webp?v=1776947758",
    description: "A 38-Acre Integrated Global Township inspired by New York, Paris & Dubai featuring 75,000 sq.ft. Club Vegas and 50+ luxury amenities by Paradise Group.",
    isDedicatedView: true,
  },
  "meghna-star-walk-kharghar": {
    title: "Meghna Star Walk At Kharghar NX.",
    location: "NX Kharghar",
    price: "23.99 Lacs* - 32.99 Lacs*",
    details: "360 - 600 sq. ft.  |  1, 2 BHK",
    image: "/assets/properties/property-1.jpg",
    description: "A thoughtfully planned residential address in NX Kharghar, selected by Aasco for its location, connectivity, and everyday convenience.",
    isDedicatedView: false,
  },
  "arihant-avanti-palace": {
    title: "Arihant Avanti Palace",
    location: "Dombivli",
    price: "42 Lacs* - 65 Lacs*",
    details: "400 - 650 sq. ft.  |  1, 2 BHK",
    image: "/assets/properties/property-2.jpg",
    description: "A residential opportunity on the Kalyan-Shilphata Road, with Aasco guiding you through the visit, paperwork, and purchase.",
    isDedicatedView: false,
  },
  "mumbai-homes": {
    title: "Mumbai Luxury Homes",
    location: "Mumbai",
    price: "Explore available properties",
    details: "Residential homes and investments",
    image: "/assets/properties/property-1.jpg",
    description: "Explore residential opportunities across Mumbai with local property advice shaped around your goals and budget.",
    isDedicatedView: false,
  },
  "thane-residences": {
    title: "Thane Residences",
    location: "Thane",
    price: "Explore available properties",
    details: "Residential homes and investments",
    image: "/assets/properties/property-2.jpg",
    description: "Property options in Thane supported by clear guidance, market understanding, and a client-first process.",
    isDedicatedView: false,
  },
  "taloja-new-homes": {
    title: "Taloja New Homes",
    location: "Taloja",
    price: "Explore available properties",
    details: "New homes and investments",
    image: "/assets/properties/property-3.jpg",
    description: "Explore new homes in Taloja with end-to-end assistance from Aasco.",
    isDedicatedView: false,
  },
} as const;

type PropertySlug = keyof typeof properties;

export function generateStaticParams() {
  return Object.keys(properties).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = properties[slug as PropertySlug];
  return property
    ? {
        title: `${property.title} | Aasco Realty`,
        description: property.description,
      }
    : { title: "Property | Aasco Realty" };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = properties[slug as PropertySlug];

  if (!property) {
    notFound();
  }

  // If this property has the dedicated ultra-luxury interactive landing page
  if (property.isDedicatedView) {
    return <SaiWorldCityView />;
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
