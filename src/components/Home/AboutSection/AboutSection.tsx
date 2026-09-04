import styles from "./AboutSection.module.css";
import Link from "next/link";

const properties = [
  {
    title: "Meghna Star Walk At Kharghar NX.",
    location: "NX Kharghar",
    price: "23.99 Lacs* - 32.99 Lacs*",
    details: "360 - 600 sq. ft.  |  1, 2 BHK",
    href: "/properties/meghna-star-walk-kharghar",
    source: "/assets/properties/property-1.jpg",
    fallback: "/assets/properties/property-1.jpg",
  },
  {
    title: "Arihant Avanti Palace",
    location: "Dombivli",
    price: "42 Lacs* - 65 Lacs*",
    details: "400 - 650 sq. ft.  |  1, 2 BHK",
    href: "/properties/arihant-avanti-palace",
    source: "/assets/properties/property-2.jpg",
    fallback: "/assets/properties/property-2.jpg",
  },
  {
    title: "Sai World City & Towers",
    location: "Kharghar, Navi Mumbai",
    price: "65 Lacs* - 1.25 Cr*",
    details: "720 - 1250 sq. ft.  |  2, 3 BHK",
    href: "/properties/navi-mumbai-homes",
    source: "/assets/properties/property-3.jpg",
    fallback: "/assets/properties/property-3.jpg",
  },
];

const topDevelopers = [
  { name: "Godrej Properties", location: "Mumbai & MMR" },
  { name: "Lodha Group", location: "Mumbai & MMR" },
  { name: "Paradise Group", location: "Navi Mumbai" },
  { name: "Hiranandani Group", location: "Mumbai & Thane" },
  { name: "Arihant Superstructures", location: "Navi Mumbai" },
  { name: "L&T Realty", location: "Mumbai & MMR" },
  { name: "Marathon Group", location: "Navi Mumbai & Thane" },
  { name: "Oberoi Realty", location: "Mumbai" },
  { name: "Kalpataru", location: "Mumbai & Thane" },
  { name: "Shapoorji Pallonji", location: "Mumbai" },
  { name: "Piramal Realty", location: "Mumbai" },
  { name: "The Wadhwa Group", location: "Navi Mumbai & Mumbai" },
  { name: "Rustomjee", location: "Mumbai & MMR" },
  { name: "Sunteck Realty", location: "Mumbai" },
  { name: "Today Global", location: "Navi Mumbai" },
  { name: "Meghna Builders", location: "Navi Mumbai" },
];

export function AboutSection() {
  return (
    <section className={styles.aboutSection} aria-labelledby="featured-properties-title">
      <div className={styles.featuredHeader} data-framecoded-motion="r19">
        <div>
          <p className={styles.eyebrow} data-framecoded-motion="r1vn">CURATED FOR YOU</p>
          <h2 id="featured-properties-title">
            Featured <em>properties</em>
          </h2>
        </div>
        <p className={styles.featuredIntro} data-framecoded-motion="r1c">
          Find trusted homes and investment opportunities with Aasco, from dream to reality.
        </p>
      </div>
      <div className={styles.propertyGrid}>
        {properties.map((property) => (
          <Link
            href={property.href}
            className={styles.propertyCard}
            key={property.title}
            data-framecoded-motion="r5m"
          >
            <div className={styles.propertyImage}>
              <img
                src={property.source}
                alt={property.title}
                onError={(event) => {
                  event.currentTarget.src = property.fallback;
                }}
              />
              <span>Featured</span>
            </div>
            <div className={styles.propertyInfo}>
              <div>
                <p className={styles.location}>{property.location}</p>
                <h3>{property.title}</h3>
                <p className={styles.details}>{property.details}</p>
              </div>
              <strong>{property.price}</strong>
              <span className={styles.cardArrow}>↗</span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.propertyFooter} data-framecoded-motion="r52">
        <span>Trusted guidance for every move</span>
        <Link href="/works#top">View all properties ↗</Link>
      </div>
      <div className={styles.developerTickerWrapper} data-framecoded-motion="r1yo">
        <div className={styles.developerTickerHeader}>
          <span className={styles.developerTickerTitle}>Top Developers • Mumbai &amp; Navi Mumbai</span>
          <span className={styles.developerTickerBadge}>Verified Partners</span>
        </div>
        <div className={styles.developerTickerTrack} aria-label="Top Developers in Mumbai and Navi Mumbai">
          <div className={styles.developerTickerList}>
            {[...topDevelopers, ...topDevelopers].map((dev, index) => (
              <div key={`${dev.name}-${index}`} className={styles.developerPill}>
                <span className={styles.developerDot}>◆</span>
                <span className={styles.developerName}>{dev.name}</span>
                <span className={styles.developerTag}>{dev.location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
