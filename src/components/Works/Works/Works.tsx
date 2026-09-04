import styles from "./Works.module.css";
import { Navbar } from "../../Navbar";
import { HeroSection } from "../HeroSection";
import { HireUsSection } from "../HireUsSection";
import { ImageSection } from "../ImageSection";
import { PropertyDirectory } from "../PropertyDirectory";

export function Works() {
  return (
    <div className={styles.works2} id={"main"}>
      <section className={styles.worksSection} data-layout-template={"true"}>
        <Navbar />
        <div className={styles.works3}>
          <div className={styles.top} id={"top"}></div>
          <HeroSection />
          <PropertyDirectory />
          <div className={styles.image19}>
            <div className={styles.image20}>
              <HireUsSection />
            </div>
          </div>
        </div>
        <div className={styles.div80} id={"overlay"}></div>
        <div className={styles.div81}></div>
        <div className={styles.image23}>
          <div className={styles.image24}>
            <ImageSection />
          </div>
        </div>
        <div className={styles.div105}></div>
      </section>
    </div>
  );
}
