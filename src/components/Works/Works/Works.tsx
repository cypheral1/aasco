import styles from "./Works.module.css";
import Link from "next/link";
import { HeroSection } from "../HeroSection";
import { HireUsSection } from "../HireUsSection";
import { ImageSection } from "../ImageSection";
import { WorkCardSection } from "../WorkCardSection";

export function Works() {
  return (
    <div className={styles.works2} id={"main"}>
      <section className={styles.worksSection} data-layout-template={"true"}>
        <div className={styles.div6}>
          <div className={styles.newYorkUSA2}>
            <div className={styles.menu2} data-framecoded-motion={"rbyb"}>
              <div className={styles.menuTime}>
                <div className={styles.menu3}>
                  <div
                    className={styles.primary}
                    data-border={"true"}
                    data-highlight={"true"}
                    tabIndex={0}
                  >
                    <div
                      className={styles.hamMenu}
                      data-highlight={"true"}
                      tabIndex={0}
                      data-framecoded-trigger={"hycgpg9"}
                    >
                      <div className={styles.container}>
                        <div className={styles.topBar} data-framecoded-state={"hycgpg9s0_0"}></div>
                        <div
                          className={styles.bottomBar}
                          data-framecoded-state={"hycgpg9s0_1"}
                        ></div>
                        <div
                          className={styles.centerBar}
                          data-framecoded-state={"hycgpg9s0_2"}
                        ></div>
                      </div>
                      <div
                        className={styles.overlayFrame}
                        data-framecoded-state={"hycgpg9s1"}
                      ></div>
                    </div>
                    <div className={styles.menu}>
                      <p className={styles.menu4} dir={"auto"}>
                        Menu
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.time}>
                  <div className={styles.newYorkUSA}>
                    <p className={styles.newYorkUSA3} dir={"auto"}>
                      / New York, USA -{" "}
                    </p>
                  </div>
                  <div className={styles.p842Pm}>
                    <p className={styles.p842Pm2}>8:42 PM</p>
                  </div>
                </div>
              </div>
              <div className={styles.addressContact}>
                <div className={styles.startProject2}>
                  <Link
                    href={"/contact#top"}
                    className={styles.primary2}
                    data-border={"true"}
                    data-framecoded-trigger={"htkzva5"}
                  >
                    <div className={styles.filler} data-framecoded-state={"htkzva5s0"}></div>
                    <div className={styles.startProject3} data-framecoded-state={"htkzva5s1"}>
                      <div className={styles.startProject} data-framecoded-state={"htkzva5s1_0"}>
                        <p className={styles.startProject4} dir={"auto"}>
                          Start Project
                        </p>
                      </div>
                      <div className={styles.startProject22} data-framecoded-state={"htkzva5s1_1"}>
                        <p className={styles.startProject5} dir={"auto"}>
                          Start Project
                        </p>
                      </div>
                    </div>
                    <div className={styles.iconBox}>
                      <div className={styles.arrowUp} aria-hidden={"true"}>
                        <div className={styles.div3}>
                          <span
                            className={styles.icon}
                            data-framecoded-svg="true"
                            aria-hidden="true"
                            dangerouslySetInnerHTML={{
                              __html:
                                '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg11542283135" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.works3}>
          <div className={styles.top} id={"top"}></div>
          <HeroSection />
          <WorkCardSection />
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
