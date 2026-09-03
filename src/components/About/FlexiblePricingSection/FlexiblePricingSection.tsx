import styles from "./FlexiblePricingSection.module.css";
import { DedicatedSupport24Item } from "../DedicatedSupport24Item";
import { FlexiblePricingItem } from "../FlexiblePricingItem";
import { TopNotchExpertsItem } from "../TopNotchExpertsItem";

export function FlexiblePricingSection() {
  return (
    <section className={styles.flexiblePricingSection}>
      <ul className={styles.flexiblePricingList} data-framecoded-motion={"r6um"}>
        <FlexiblePricingItem />
        <TopNotchExpertsItem />
        <DedicatedSupport24Item />
        <FlexiblePricingItem />
        <TopNotchExpertsItem />
        <DedicatedSupport24Item />
        <FlexiblePricingItem />
        <TopNotchExpertsItem />
        <DedicatedSupport24Item />
        <FlexiblePricingItem />
        <TopNotchExpertsItem />
        <DedicatedSupport24Item />
        <li className={styles.flexiblePricingItem5} aria-hidden={"true"}>
          <div className={styles.sliderCard35} name={"Slider Card3"}>
            <div className={styles.primary40} name={"Slider Card3"}>
              <div className={styles.dot29}></div>
              <div className={styles.topNotchExperts13}>
                <h3 className={styles.h323} dir={"auto"}>
                  Flexible Pricing
                </h3>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.topNotchExpertsItem5} aria-hidden={"true"}>
          <div className={styles.sliderCard15} name={"Slider Card1"}>
            <div className={styles.primary41} name={"Slider Card1"}>
              <div className={styles.dot30}></div>
              <div className={styles.topNotchExperts14}>
                <h3 className={styles.h324} dir={"auto"}>
                  Top-notch Experts
                </h3>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.dedicatedSupport24Item5} aria-hidden={"true"}>
          <div className={styles.sliderCard25} name={"Slider Card2"}>
            <div className={styles.primary42} name={"Slider Card2"}>
              <div className={styles.dot31}></div>
              <div className={styles.topNotchExperts15}>
                <h3 className={styles.h325} dir={"auto"}>
                  Dedicated Support 24/7
                </h3>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.flexiblePricingItem6} aria-hidden={"true"}>
          <div className={styles.sliderCard36} name={"Slider Card3"}>
            <div className={styles.primary43} name={"Slider Card3"}>
              <div className={styles.dot32}></div>
              <div className={styles.topNotchExperts16}>
                <h3 className={styles.h326} dir={"auto"}>
                  Flexible Pricing
                </h3>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.topNotchExpertsItem6} aria-hidden={"true"}>
          <div className={styles.sliderCard16} name={"Slider Card1"}>
            <div className={styles.primary44} name={"Slider Card1"}>
              <div className={styles.dot33}></div>
              <div className={styles.topNotchExperts17}>
                <h3 className={styles.h327} dir={"auto"}>
                  Top-notch Experts
                </h3>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.dedicatedSupport24Item6} aria-hidden={"true"}>
          <div className={styles.sliderCard26} name={"Slider Card2"}>
            <div className={styles.primary45} name={"Slider Card2"}>
              <div className={styles.dot34}></div>
              <div className={styles.topNotchExperts18}>
                <h3 className={styles.h328} dir={"auto"}>
                  Dedicated Support 24/7
                </h3>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
