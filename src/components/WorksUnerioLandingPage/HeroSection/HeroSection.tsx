import styles from "./HeroSection.module.css";
import { Image } from "../../../ui/Image";
import Link from "next/link";
export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bGImage}>
        <div className={styles.logo2}>
          <Image
            className={styles.logo3}
            src={"/assets/8KwUIUtT0J2RnZ00jPBczKTg-bf3c947107.svg"}
            alt={"logo"}
            width={1352}
            height={68}
            srcSet={
              "/assets/8KwUIUtT0J2RnZ00jPBczKTg-1690c3ba87.svg 512w,/assets/8KwUIUtT0J2RnZ00jPBczKTg-a8c7eda586.svg 1024w,/assets/8KwUIUtT0J2RnZ00jPBczKTg-bf3c947107.svg 1352w"
            }
            sizes={
              "(min-width: 1440px) calc(min(100vw, 1920px) - 86px), (min-width: 810px) and (max-width: 1439.98px) calc(min(100vw, 1920px) - 86px), (max-width: 809.98px) calc(min(100vw, 1920px) - 86px)"
            }
            priority
          />
        </div>
      </div>
      <Link href={"/#top"} className={styles.logo} data-framecoded-motion={"r8tn"}>
        <div className={styles.logo4}>
          <Image
            className={styles.logo5}
            src={"/assets/cccRnqGEwbQnTaD4HQVasE90KzU-cc1146e4e3.svg"}
            alt={"logo"}
            width={93}
            height={24}
            srcSet={
              "/assets/cccRnqGEwbQnTaD4HQVasE90KzU-c504b6e83e.svg 93w, /assets/cccRnqGEwbQnTaD4HQVasE90KzU-318f9e01f8.svg 186w"
            }
            sizes={"(max-width: 93px) 100vw, 93px"}
          />
        </div>
      </Link>
      <div className={styles.workDetails}>
        <div className={styles.left2}>
          <header className={styles.unerioLandingPageHeader}>
            <div className={styles.unerioLandingPage} data-framecoded-motion={"r8tp"}>
              <h2 className={styles.h2} dir={"auto"}>
                Unerio Landing page
              </h2>
            </div>
            <div className={styles.details} data-framecoded-motion={"r8u2"}>
              <div
                className={
                  styles.aSeamlessDigitalExperienceCraftedToElevateBrandPresenceAndOrganicVisibility
                }
              >
                <p className={styles.seamlessDigitalExperience} dir={"auto"}>
                  A seamless digital experience crafted to elevate brand presence and organic
                  visibility.
                </p>
              </div>
              <div className={styles.bottom}>
                <div className={styles.left}>
                  <span
                    className={styles.icon2}
                    data-framecoded-svg="true"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#1727193461" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                    }}
                  />
                  <div className={styles.p30Complete}>
                    <p className={styles.p12Months} dir={"auto"}>
                      1-2 Months
                    </p>
                  </div>
                </div>
                <div className={styles.line} aria-hidden={"true"}>
                  <div className={styles.div9}>
                    <span
                      className={styles.icon3}
                      data-framecoded-svg="true"
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg12856375077" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                      }}
                    />
                  </div>
                </div>
                <div className={styles.fOUNDATION}>
                  <p className={styles.web} dir={"auto"}>
                    WEB
                  </p>
                </div>
              </div>
            </div>
          </header>
          <div className={styles.bottom2}>
            <div className={styles.projectOverview2} data-framecoded-motion={"r8ud"}>
              <div className={styles.line2}></div>
              <div className={styles.projectOverview3}>
                <div className={styles.projectOverview}>
                  <h5 className={styles.h5} dir={"auto"}>
                    Project Overview
                  </h5>
                </div>
                <div className={styles.contentBox}>
                  <div
                    className={
                      styles.weBeganByUnderstandingUnerioSVisionTargetAudienceAndBrandPersonalityTheFocusWasOnCreatingAModernMinimalAndUserFriendlyLandingPageThatClearlyCommunicatesTheProductSValueKeyGoalsIncludedStrongFirstImpressionsClearMessagingAndSmoothUserFlowCompetitorResearchAndTrendAnalysisWereAlsoConsideredToPositionUnerioEffectively
                    }
                  >
                    <p className={styles.weBeganBy} dir={"auto"}>
                      We began by understanding Unerio’s vision, target audience, and brand
                      personality. The focus was on creating a modern, minimal, and user-friendly
                      landing page that clearly communicates the product’s value.
                    </p>
                  </div>
                  <div
                    className={
                      styles.keyGoalsIncludedStrongFirstImpressionsClearMessagingAndSmoothUserFlowCompetitorResearchAndTrendAnalysisWereAlsoConsideredToPositionUnerioEffectively
                    }
                  >
                    <p className={styles.keyGoalsIncluded} dir={"auto"}>
                      Key goals included strong first impressions, clear messaging, and smooth user
                      flow. Competitor research and trend analysis were also considered to position
                      Unerio effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.designProcess} data-framecoded-motion={"r8un"}>
              <div className={styles.line3}></div>
              <div className={styles.designProcess2}>
                <div className={styles.projectOverview22}>
                  <h5 className={styles.h52} dir={"auto"}>
                    Design Process
                  </h5>
                </div>
                <div className={styles.contentBox2}>
                  <div
                    className={
                      styles.weBeganByUnderstandingUnerioSVisionTargetAudienceAndBrandPersonalityTheFocusWasOnCreatingAModernMinimalAndUserFriendlyLandingPageThatClearlyCommunicatesTheProductSValueKeyGoalsIncludedStrongFirstImpressionsClearMessagingAndSmoothUserFlowCompetitorResearchAndTrendAnalysisWereAlsoConsideredToPositionUnerioEffectively2
                    }
                  >
                    <p className={styles.theDesignProcess} dir={"auto"}>
                      The design process started with wireframing to structure content and layout.
                      We then moved into visual exploration, selecting typography, colors, and UI
                      elements that align with Unerio’s brand identity.
                    </p>
                  </div>
                  <div
                    className={
                      styles.keyGoalsIncludedStrongFirstImpressionsClearMessagingAndSmoothUserFlowCompetitorResearchAndTrendAnalysisWereAlsoConsideredToPositionUnerioEffectively2
                    }
                  >
                    <p className={styles.highFidelityDesigns} dir={"auto"}>
                      High-fidelity designs were created in Figma, focusing on clarity, hierarchy,
                      &amp; responsiveness. Iterations were made to refine user experience, ensuring
                      intuitive navigation and engaging visuals throughout the landing page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.finalOutcome} data-framecoded-motion={"r8ux"}>
              <div className={styles.line4}></div>
              <div className={styles.finalOutcome2}>
                <div className={styles.projectOverview32}>
                  <h5 className={styles.h53} dir={"auto"}>
                    Final Outcome
                  </h5>
                </div>
                <div className={styles.contentBox3}>
                  <div
                    className={
                      styles.weBeganByUnderstandingUnerioSVisionTargetAudienceAndBrandPersonalityTheFocusWasOnCreatingAModernMinimalAndUserFriendlyLandingPageThatClearlyCommunicatesTheProductSValueKeyGoalsIncludedStrongFirstImpressionsClearMessagingAndSmoothUserFlowCompetitorResearchAndTrendAnalysisWereAlsoConsideredToPositionUnerioEffectively3
                    }
                  >
                    <p className={styles.theFinalLanding} dir={"auto"}>
                      The final landing page delivers a clean and impactful user experience with a
                      strong visual identity. It effectively guides users through the content,
                      highlights features, &amp; encourages interaction.
                    </p>
                  </div>
                  <div
                    className={
                      styles.keyGoalsIncludedStrongFirstImpressionsClearMessagingAndSmoothUserFlowCompetitorResearchAndTrendAnalysisWereAlsoConsideredToPositionUnerioEffectively3
                    }
                  >
                    <p className={styles.theDesignBalances} dir={"auto"}>
                      The design balances aesthetic &amp; functionality, resulting in a modern,
                      conversion-focused landing page that strengthens Unerio’s digital presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.viewLive}>
              <div className={styles.viewLive2}>
                <a
                  href={"https://www.framer.com/@nframe/"}
                  className={styles.primary3}
                  data-border={"true"}
                  data-framecoded-trigger={"hl05t8z"}
                >
                  <div className={styles.filler2} data-framecoded-state={"hl05t8zs0"}></div>
                  <div className={styles.viewLive3} data-framecoded-state={"hl05t8zs1"}>
                    <div className={styles.startProject32} data-framecoded-state={"hl05t8zs1_0"}>
                      <p className={styles.viewLive4} dir={"auto"}>
                        View Live
                      </p>
                    </div>
                    <div className={styles.startProject42} data-framecoded-state={"hl05t8zs1_1"}>
                      <p className={styles.viewLive5} dir={"auto"}>
                        View Live
                      </p>
                    </div>
                  </div>
                  <div className={styles.iconBox2}>
                    <div className={styles.arrowUp2} aria-hidden={"true"}>
                      <div className={styles.div10}>
                        <span
                          className={styles.icon4}
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
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.coverImage} data-framecoded-motion={"r8vf"}>
            <div className={styles.image2}>
              <Image
                className={styles.image3}
                src={
                  "https://framerusercontent.com/images/FWaeMTG4fQzpKfY8PZNRmtHiOwE.png?width=1016&height=650"
                }
                alt={"image"}
                width={1016}
                height={650}
                srcSet={
                  "https://framerusercontent.com/images/FWaeMTG4fQzpKfY8PZNRmtHiOwE.png?scale-down-to=512&width=1016&height=650 512w,https://framerusercontent.com/images/FWaeMTG4fQzpKfY8PZNRmtHiOwE.png?width=1016&height=650 1016w"
                }
                sizes={
                  "(min-width: 1440px) min(max(min(min(100vw, 1920px) - 144px, 1920px) / 2, 1px), 525px), (max-width: 809.98px) min(min(100vw, 1920px) - 30px, 1920px), (min-width: 810px) and (max-width: 1439.98px) min(min(100vw, 1920px) - 60px, 1920px)"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
