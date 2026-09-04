import styles from "./AwardSection.module.css";
import Link from "next/link";

const localities = [
  {
    name: "Kharghar",
    price: "₹12,500/sqft",
    growth: "+14%",
    image: "/assets/hong-kong-city-skyline-city-lights.jpg",
    href: "/works?search=Kharghar#top",
    shapeClass: styles.shape1,
  },
  {
    name: "Panvel",
    price: "₹8,200/sqft",
    growth: "+18%",
    image: "/assets/service-penthouse.jpg",
    href: "/works?search=Panvel#top",
    shapeClass: styles.shape2,
  },
  {
    name: "Taloja",
    price: "₹6,800/sqft",
    growth: "+22%",
    image: "/assets/service-residence.jpg",
    href: "/works?search=Taloja#top",
    shapeClass: styles.shape3,
  },
  {
    name: "Ulwe",
    price: "₹9,100/sqft",
    growth: "+16%",
    image: "/assets/realty-city-night.jpg",
    href: "/works?search=Ulwe#top",
    shapeClass: styles.shape4,
  },
  {
    name: "Dronagiri",
    price: "₹7,400/sqft",
    growth: "+20%",
    image: "/assets/properties/property-2.jpg",
    href: "/works?search=Dronagiri#top",
    shapeClass: styles.shape5,
  },
  {
    name: "Ghansoli",
    price: "₹14,200/sqft",
    growth: "+9%",
    image: "/assets/properties/property-3.jpg",
    href: "/works?search=Ghansoli#top",
    shapeClass: styles.shape6,
  },
];

export function AwardSection() {
  return (
    <section className={styles.localitiesSection} aria-labelledby="localities-heading">
      <div className={styles.ambientOrb}></div>
      <div className={styles.container}>
        <div className={styles.header} data-framecoded-motion="r1vq">
          <div className={styles.eyebrowWrap} data-framecoded-motion="r1vn">
            <span className={styles.dash}>—</span>
            <span className={styles.eyebrow}>EXPLORE BY AREA</span>
          </div>
          <h2 id="localities-heading" className={styles.heading}>
            TOP LOCALITIES IN NAVI MUMBAI
          </h2>
        </div>

        <div className={styles.grid}>
          {localities.map((item) => (
            <div key={item.name} className={styles.cardWrapper} data-framecoded-motion="r5m">
              <Link
                href={item.href}
                className={`${styles.card} ${item.shapeClass}`}
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(4, 7, 12, 0.92) 0%, rgba(8, 14, 24, 0.76) 50%, rgba(4, 7, 12, 0.90) 100%), url('${item.image}')`,
                }}
              >
                <div className={styles.cardGlare}></div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardName}>{item.name}</h3>
                  <p className={styles.cardPrice}>{item.price}</p>
                </div>
                <div className={styles.growthBadge}>
                  <span className={styles.badgePulse}></span>
                  {item.growth}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

