import styles from "./TopNotchExpertsItem.module.css";

export function TopNotchExpertsItem() {
  return (
    <li className={styles.topNotchExpertsItem} aria-hidden={"true"}>
      <div className={styles.sliderCard1} data-name={"Slider Card1"}>
        <div className={styles.primary29} data-name={"Slider Card1"}>
          <div className={styles.dot18}></div>
          <div className={styles.topNotchExperts2}>
            <h3 className={styles.h312} dir={"auto"}>
              Top-notch Experts
            </h3>
          </div>
        </div>
      </div>
    </li>
  );
}
