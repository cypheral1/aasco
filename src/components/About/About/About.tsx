import styles from "./About.module.css";
import { Image } from "../../../ui/Image";
import Link from "next/link";
import { AboutSection } from "../AboutSection";
import { FaqsSection } from "../FaqsSection";
import { FlexiblePricingSection } from "../FlexiblePricingSection";
import { HeroSection } from "../HeroSection";
import { HireUsSection } from "../HireUsSection";
import { ImageSection2 } from "../ImageSection2";
import { PricingPlanSection } from "../PricingPlanSection";
import { ServiceSection } from "../ServiceSection";
import { TeamSection } from "../TeamSection";
import { TopNotchExpertsSection } from "../TopNotchExpertsSection";

export function About() {
  return (
    <div className={styles.about2} id={"main"} data-framecoded-state={"t1s1266"}>
      <section
        className={styles.aboutSection2}
        data-layout-template={"true"}
        data-framecoded-state={"t1s1268"}
      >
        <div className={styles.div6}>
          <div className={styles.newYorkUSA2} data-framecoded-state={"t1s1270"}>
            <div className={styles.menu2} data-framecoded-motion={"r6gv"}>
              <div className={styles.menuTime}>
                <div className={styles.menu3}>
                  <div
                    className={styles.primary}
                    data-border={"true"}
                    data-highlight={"true"}
                    tabIndex={"0"}
                  >
                    <div
                      className={styles.hamMenu}
                      data-highlight={"true"}
                      tabIndex={"0"}
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
                  <div className={styles.p835Pm}>
                    <p className={styles.p835Pm2}>8:35 PM</p>
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
        <div className={styles.about3}>
          <div className={styles.top} id={"top"} data-framecoded-state={"t1s1296"}></div>
          <HeroSection />
          <section className={styles.imageSection} data-framecoded-motion={"r6hv"}>
            <div className={styles.image}>
              <div className={styles.image2}>
                <div className={styles.image3}>
                  <Image
                    className={styles.image4}
                    src={"/assets/SuTUHWId1Z1blxgFFqxGAqLtEpM-075ca2b2a1.png"}
                    alt={"image"}
                    width={2592}
                    height={1150}
                    srcSet={
                      "/assets/SuTUHWId1Z1blxgFFqxGAqLtEpM-e159a58e38.png 512w,/assets/SuTUHWId1Z1blxgFFqxGAqLtEpM-5e04bc328c.png 1024w,/assets/SuTUHWId1Z1blxgFFqxGAqLtEpM-0223ad2ff4.png 2048w,/assets/SuTUHWId1Z1blxgFFqxGAqLtEpM-075ca2b2a1.png 2592w"
                    }
                    sizes={
                      "(min-width: 1440px) calc(min(100vw, 1920px) - 144px), (min-width: 810px) and (max-width: 1439.98px) calc(min(100vw, 1920px) - 60px), (max-width: 809.98px) calc(min(100vw, 1920px) - 30px)"
                    }
                  />
                </div>
              </div>
            </div>
          </section>
          <AboutSection />
          <ServiceSection />
          <div className={styles.pricingPlan}>
            <div className={styles.pricingPlan2} id={"pricing"}>
              <PricingPlanSection />
            </div>
          </div>
          <div className={styles.div83}>
            <div className={styles.div82} data-framecoded-motion={"r6y8"}>
              <div className={styles.primary46}>
                <div className={styles.container4}>
                  <div className={styles.ticker1}>
                    <div className={styles.div80}>
                      <FlexiblePricingSection />
                    </div>
                  </div>
                  <div className={styles.ticker2}>
                    <div className={styles.div81}>
                      <TopNotchExpertsSection />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TeamSection />
          <div className={styles.faqs}>
            <div className={styles.faqs2} data-framecoded-state={"t1s1956"}>
              <FaqsSection />
            </div>
          </div>
          <div className={styles.image26}>
            <div className={styles.image27}>
              <HireUsSection />
            </div>
          </div>
        </div>
        <div className={styles.div149} id={"overlay"}></div>
        <div className={styles.div150}></div>
        <div className={styles.image30}>
          <div className={styles.image31}>
            <ImageSection2 />
          </div>
        </div>
        <div className={styles.div174}></div>
      </section>
    </div>
  );
}
