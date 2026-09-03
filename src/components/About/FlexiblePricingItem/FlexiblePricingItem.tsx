import styles from "./FlexiblePricingItem.module.css";

export function FlexiblePricingItem() {
  return (
    <li className={styles.flexiblePricingItem} aria-hidden={"true"}>
      <div className={styles.sliderCard3} name={"Slider Card3"}>
        <div className={styles.primary28} name={"Slider Card3"}>
          <div className={styles.dot17}></div>
          <div className={styles.topNotchExperts}>
            <h3 className={styles.h311} dir={"auto"}>
              Flexible Pricing
            </h3>
          </div>
        </div>
      </div>
    </li>
  );
}
