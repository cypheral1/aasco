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
      <Link href={"/#top"} className={styles.logo} data-framecoded-motion={"rfbj"}>
        <div className={styles.logo4}>
          <Image
            className={styles.logo5}
            src={"/assets/cccRnqGEwbQnTaD4HQVasE90KzU-cc1146e4e3.svg"}
            alt={"logo"}
            width={71}
            height={24}
            srcSet={
              "/assets/cccRnqGEwbQnTaD4HQVasE90KzU-c504b6e83e.svg 71w, /assets/cccRnqGEwbQnTaD4HQVasE90KzU-318f9e01f8.svg 142w"
            }
            sizes={"(max-width: 71px) 100vw, 71px"}
          />
        </div>
      </Link>
      <div className={styles.workDetails}>
        <div className={styles.left2}>
          <header className={styles.theCanvasTheoryHeader}>
            <div className={styles.unerioLandingPage} data-framecoded-motion={"rfbl"}>
              <h2 className={styles.h2} dir={"auto"}>
                The Canvas Theory
              </h2>
            </div>
            <div className={styles.details} data-framecoded-motion={"rfby"}>
              <div
                className={
                  styles.aSeamlessDigitalExperienceCraftedToElevateBrandPresenceAndOrganicVisibility
                }
              >
                <p className={styles.designingMeaningNot} dir={"auto"}>
                  Designing meaning, not just visuals.Every detail tells a deeper story anddesign
                  balances.
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
            <div className={styles.projectOverview2} data-framecoded-motion={"rfc9"}>
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
                    <p className={styles.theCanvasTheory2} dir={"auto"}>
                      The Canvas Theory is envisioned as a concept-driven digital platform that
                      blends creativity with thoughtful storytelling. The objective of the web
                      design was to create an experience that feels artistic, expressive, and
                      intellectually engaging.
                    </p>
                  </div>
                  <div
                    className={
                      styles.keyGoalsIncludedStrongFirstImpressionsClearMessagingAndSmoothUserFlowCompetitorResearchAndTrendAnalysisWereAlsoConsideredToPositionUnerioEffectively
                    }
                  >
                    <p className={styles.theBrandFocuses} dir={"auto"}>
                      The brand focuses on showcasing ideas, visuals, and narratives in a way that
                      resonates with creative audiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.designProcess} data-framecoded-motion={"rfcj"}>
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
                    <p className={styles.theColourPalette} dir={"auto"}>
                      The colour palette balanced neutral tones with selective bold accents,
                      mimicking how paint interacts with a blank canvas. Layouts were designed to
                      feel fluid &amp; slightly unconventional, breaking rigid grids where necessary
                      to create a more artistic flow.
                    </p>
                  </div>
                  <div
                    className={
                      styles.keyGoalsIncludedStrongFirstImpressionsClearMessagingAndSmoothUserFlowCompetitorResearchAndTrendAnalysisWereAlsoConsideredToPositionUnerioEffectively2
                    }
                  >
                    <p className={styles.interactiveElementsSuch} dir={"auto"}>
                      Interactive elements such as hover effects, transitions, &amp; layered visuals
                      were used to bring depth and motion to the experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.finalOutcome} data-framecoded-motion={"rfct"}>
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
                    <p className={styles.theFinalWebsite} dir={"auto"}>
                      The final website delivers an immersive and visually engaging experience that
                      captures the essence of creativity &amp; theory. The Canvas Theory now has a
                      distinct digital presence that feels both modern and artistic, making it stand
                      out from conventional portfolio websites.
                    </p>
                  </div>
                  <div
                    className={
                      styles.keyGoalsIncludedStrongFirstImpressionsClearMessagingAndSmoothUserFlowCompetitorResearchAndTrendAnalysisWereAlsoConsideredToPositionUnerioEffectively3
                    }
                  >
                    <p className={styles.theFlexibleDesign} dir={"auto"}>
                      The flexible design system allows for continuous evolution, supporting new
                      content, ideas and visual explorations.
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
          <div className={styles.coverImage} data-framecoded-motion={"rfdb"}>
            <div className={styles.image2}>
              <Image
                className={styles.image3}
                src={"/assets/8Wux7WXqGzU9IXcnd8MjzVJDhU-bf8b9e9302.png"}
                alt={"image"}
                width={1050}
                height={1060}
                srcSet={
                  "/assets/8Wux7WXqGzU9IXcnd8MjzVJDhU-e2a9dc0b7b.png 1014w,/assets/8Wux7WXqGzU9IXcnd8MjzVJDhU-bf8b9e9302.png 1050w"
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
