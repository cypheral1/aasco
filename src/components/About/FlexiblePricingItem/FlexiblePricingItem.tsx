import styles from "./FlexiblePricingItem.module.css";

export function FlexiblePricingItem() {
  return (
    <li className={styles.flexiblePricingItem} aria-hidden={"true"}>
      <div className={styles.sliderCard3} data-name={"Slider Card3"}>
        <div className={styles.primary28} data-name={"Slider Card3"}>
          <div className={styles.dot17}></div>
          <div className={styles.topNotchExperts}>
            <h3 className={styles.h311} dir={"auto"}>
              RERA Approved Projects
            </h3>
          </div>
        </div>
      </div>
    </li>
  );
}
