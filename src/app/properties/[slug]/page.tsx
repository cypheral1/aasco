import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./property.module.css";
import enquiryStyles from "./enquiry.module.css";
import enquiryMotion from "./enquiry-motion.module.css";

const properties = {
  "meghna-star-walk-kharghar": { title: "Meghna Star Walk At Kharghar NX.", location: "NX Kharghar", price: "23.99 Lacs* - 32.99 Lacs*", details: "360 - 600 sq. ft.  |  1, 2 BHK", image: "/assets/properties/property-1.jpg", description: "A thoughtfully planned residential address in NX Kharghar, selected by Aasco for its location, connectivity, and everyday convenience." },
  "arihant-avanti-palace": { title: "Arihant Avanti Palace", location: "Dombivli", price: "42 Lacs* - 65 Lacs*", details: "400 - 650 sq. ft.  |  1, 2 BHK", image: "/assets/properties/property-2.jpg", description: "A residential opportunity on the Kalyan-Shilphata Road, with Aasco guiding you through the visit, paperwork, and purchase." },
  "navi-mumbai-homes": { title: "Sai World City & Towers", location: "Kharghar, Navi Mumbai", price: "65 Lacs* - 1.25 Cr*", details: "720 - 1250 sq. ft.  |  2, 3 BHK", image: "/assets/properties/property-3.jpg", description: "A premium luxury residential high-rise community with top-tier amenities and panoramic hills views in Kharghar." },
  "mumbai-homes": { title: "Mumbai Luxury Homes", location: "Mumbai", price: "Explore available properties", details: "Residential homes and investments", image: "/assets/properties/property-1.jpg", description: "Explore residential opportunities across Mumbai with local property advice shaped around your goals and budget." },
  "thane-residences": { title: "Thane Residences", location: "Thane", price: "Explore available properties", details: "Residential homes and investments", image: "/assets/properties/property-2.jpg", description: "Property options in Thane supported by clear guidance, market understanding, and a client-first process." },
  "taloja-new-homes": { title: "Taloja New Homes", location: "Taloja", price: "Explore available properties", details: "New homes and investments", image: "/assets/properties/property-3.jpg", description: "Explore new homes in Taloja with end-to-end assistance from Aasco." },
} as const;

type PropertySlug = keyof typeof properties;

export function generateStaticParams() { return Object.keys(properties).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = properties[slug as PropertySlug];
  return property ? { title: `${property.title} | Aasco`, description: property.description } : { title: "Property | Aasco" };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties[slug as PropertySlug];
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/works#top">← All properties</Link>
        <Link className={styles.brand} href="/#top">Aasco</Link>
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
            <div><span>PRICE</span><strong>{property.price}</strong></div>
            <div><span>DETAILS</span><strong>{property.details}</strong></div>
          </div>
          <Link className={styles.button} href="/contact#top">Schedule a visit <span>↗</span></Link>
        </div>
      </section>
      <section className={`${enquiryStyles.enquiry} ${enquiryMotion.reveal}`}>
        <div>
          <p className={styles.eyebrow}>PRIVATE VIEWING</p>
          <h2>Make an <em>enquiry</em></h2>
          <p className={enquiryStyles.enquiryIntro}>Tell us how we can help with this property.</p>
        </div>
        <form className={`${enquiryStyles.enquiryForm} ${enquiryMotion.form}`} action="/contact#top" method="get">
          <input type="hidden" name="property" value={property.title} />
          <label><span>Name</span><input name="name" type="text" placeholder="Your name" required /></label>
          <label><span>Phone</span><input name="phone" type="tel" placeholder="+91 00000 00000" required /></label>
          <label className={enquiryStyles.enquiryWide}><span>Message</span><textarea name="message" placeholder={`I am interested in ${property.title}.`} rows={3} required></textarea></label>
          <button className={`${enquiryStyles.enquiryButton} ${enquiryMotion.button}`} type="submit">Send enquiry <span>↗</span></button>
        </form>
      </section>
      <section className={styles.bottom}>
        <p>From dream to reality.</p>
        <p>Our advisors can help with site visits, legal consultation, and after-sales assistance.</p>
      </section>
    </main>
  );
}
