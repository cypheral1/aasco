import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./property.module.css";

const properties = {
  "meghna-star-walk-kharghar": { title: "Meghna Star Walk At Kharghar NX.", location: "NX Kharghar", price: "23.99 Lacs* - 32.99 Lacs*", details: "360 - 600 sq. ft.  |  1, 2 BHK", image: "https://www.aasco.co.in/assets/img/property/95/1.jpg", description: "A thoughtfully planned residential address in NX Kharghar, selected by Aasco Reality for its location, connectivity, and everyday convenience." },
  "arihant-avanti-palace": { title: "Arihant Avanti Palace", location: "Dombivli", price: "42 Lacs* - 65 Lacs*", details: "400 - 600 sq. ft.  |  1, 2 BHK", image: "https://www.aasco.co.in/assets/img/property/94/1.jpg", description: "A residential opportunity on the Kalyan-Shilphata Road, with Aasco Reality guiding you through the visit, paperwork, and purchase." },
  "mumbai-homes": { title: "Mumbai Homes", location: "Mumbai", price: "Explore available properties", details: "Residential homes and investments", image: "https://www.aasco.co.in/assets/img/banner/170508_10_27_41_5DS29248.0.jpg", description: "Explore residential opportunities across Mumbai with local property advice shaped around your goals and budget." },
  "navi-mumbai-homes": { title: "Navi Mumbai Properties", location: "Navi Mumbai", price: "Explore available properties", details: "Connected homes and investments", image: "https://www.aasco.co.in/assets/img/banner/170508_10_27_41_5DS29248.0.jpg", description: "Find well-connected homes and investment opportunities across Navi Mumbai with guidance from dream to reality." },
  "thane-residences": { title: "Thane Residences", location: "Thane", price: "Explore available properties", details: "Residential homes and investments", image: "https://www.aasco.co.in/assets/img/banner/170508_10_27_41_5DS29248.0.jpg", description: "Property options in Thane supported by clear guidance, market understanding, and a client-first process." },
  "taloja-new-homes": { title: "Taloja New Homes", location: "Taloja", price: "Explore available properties", details: "New homes and investments", image: "https://www.aasco.co.in/assets/img/banner/170508_10_27_41_5DS29248.0.jpg", description: "Explore new homes in Taloja with end-to-end assistance from Aasco Reality." },
} as const;

type PropertySlug = keyof typeof properties;

export function generateStaticParams() { return Object.keys(properties).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = properties[slug as PropertySlug];
  return property ? { title: `${property.title} | Aasco Realty`, description: property.description } : { title: "Property | Aasco Realty" };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties[slug as PropertySlug];
  if (!property) notFound();
  return <main className={styles.page}><header className={styles.header}><Link href="/works#top">← All properties</Link><Link className={styles.brand} href="/#top">Aasco Realty</Link><Link href="/contact#top">Enquire ↗</Link></header><section className={styles.hero}><div className={styles.imageWrap}><img src={property.image} alt={property.title} /></div><div className={styles.content}><p className={styles.eyebrow}>{property.location} · AASCO REALTY</p><h1>{property.title}</h1><p className={styles.description}>{property.description}</p><div className={styles.meta}><div><span>PRICE</span><strong>{property.price}</strong></div><div><span>DETAILS</span><strong>{property.details}</strong></div></div><Link className={styles.button} href="/contact#top">Schedule a visit <span>↗</span></Link></div></section><section className={styles.bottom}><p>From dream to reality.</p><p>Our advisors can help with site visits, legal consultation, and after-sales assistance.</p></section></main>;
}
