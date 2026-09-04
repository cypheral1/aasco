import styles from "./Contact.module.css";
import { Navbar } from "../../Navbar";
import { ContactSection } from "../ContactSection";
import { FaqsSection } from "../FaqsSection";
import { HeroSection } from "../HeroSection";
import { ImageSection } from "../ImageSection";

export function Contact() {
  return (
    <div className={styles.sayHi2} id={"main"} data-framecoded-state={"t0s1"}>
      <section
        className={styles.sayHiSection}
        data-layout-template={"true"}
        data-framecoded-state={"t0s3"}
      >
        <Navbar />
        <div className={styles.sayHi3}>
          <div className={styles.top} id={"top"} data-framecoded-state={"t0s31"}></div>
          <HeroSection />
          <ContactSection />
          <div className={styles.faqs} data-framecoded-state={"t0s180"}>
            <div className={styles.faqs2}>
              <FaqsSection />
            </div>
          </div>
        </div>
        <div className={styles.div60} id={"overlay"}></div>
        <div className={styles.div61}></div>
        <div className={styles.image4}>
          <div className={styles.image5}>
            <ImageSection />
          </div>
        </div>
        <div className={styles.div85}></div>
      </section>
    </div>
  );
}
