import styles from "./AboutSection.module.css";
import Link from "next/link";

const properties = [
  { title: "Meghna Star Walk At Kharghar NX.", location: "NX Kharghar", price: "23.99 Lacs* - 32.99 Lacs*", details: "360 - 600 sq. ft.  |  1, 2 BHK", href: "/properties/meghna-star-walk-kharghar", source: "https://www.aasco.co.in/assets/img/property/95/1.jpg", fallback: "/assets/rR3iz1wvsX1fxQ49fxhGNehO8r0-b34da70cbc.png" },
  { title: "Arihant Avanti Palace", location: "Dombivli", price: "42 Lacs* - 65 Lacs*", details: "400 - 600 sq. ft.  |  1, 2 BHK", href: "/properties/arihant-avanti-palace", source: "https://www.aasco.co.in/assets/img/property/94/1.jpg", fallback: "/assets/cMgOK9Ll5ZGWnUhkP6BKLP58Bmc-9265dee139.png" },
];

export function AboutSection() {
  return (
    <section className={styles.aboutSection} aria-labelledby="featured-properties-title">
      <div className={styles.featuredHeader}>
        <div><p className={styles.eyebrow}>CURATED FOR YOU</p><h2 id="featured-properties-title">Featured <em>properties</em></h2></div>
        <p className={styles.featuredIntro}>Find trusted homes and investment opportunities with Aasco Reality, from dream to reality.</p>
      </div>
      <div className={styles.propertyGrid}>
        {properties.map((property) => (
          <Link href={property.href} className={styles.propertyCard} key={property.title} data-framecoded-motion="r5m">
            <div className={styles.propertyImage}><img src={property.source} alt={property.title} onError={(event) => { event.currentTarget.src = property.fallback; }} /><span>Featured</span></div>
            <div className={styles.propertyInfo}><div><p className={styles.location}>{property.location}</p><h3>{property.title}</h3><p className={styles.details}>{property.details}</p></div><strong>{property.price}</strong><span className={styles.cardArrow}>↗</span></div>
          </Link>
        ))}
      </div>
      <div className={styles.propertyFooter}><span>Trusted guidance for every move</span><Link href="/works#top">View all properties ↗</Link></div>
    </section>
  );
}
