import styles from "./PrivacyPolicy.module.css";
import Link from "next/link";
import { ContentSection } from "../ContentSection";
import { HeroSection } from "../HeroSection";
import { ImageSection } from "../ImageSection";

export function PrivacyPolicy() {
  return (
    <div className={styles.privacy2} id={"main"}>
      <section className={styles.privacySection} data-layout-template={"true"}>
        <div className={styles.div6}>
          <div className={styles.newYorkUSA2}>
            <div className={styles.menu2} data-framecoded-motion={"rdw9"}>
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
                  <div className={styles.p844Pm}>
                    <p className={styles.p844Pm2}>8:44 PM</p>
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
        <div className={styles.privacy3}>
          <div className={styles.top} id={"top"}></div>
          <HeroSection />
          <ContentSection />
        </div>
        <div className={styles.div17} id={"overlay"}></div>
        <div className={styles.div18}></div>
        <div className={styles.image}>
          <div className={styles.image2}>
            <ImageSection />
          </div>
        </div>
        <div className={styles.div42}></div>
      </section>
    </div>
  );
}
