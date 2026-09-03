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
      <Link href={"/#top"} className={styles.logo} data-framecoded-motion={"rgn3"}>
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
      <div className={styles.heading}>
        <div className={styles.visualBrandAndStorytelling} data-framecoded-motion={"rgn5"}>
          <h2 className={styles.h2} dir={"auto"}>
            Trends Shaping the Future
          </h2>
        </div>
        <div className={styles.details} data-framecoded-motion={"rgni"}>
          <div className={styles.whereDesignSpeaksBeforeWordsAndEveryVisualCarriesMeaning}>
            <p className={styles.definingWhatNext} dir={"auto"}>
              Defining what’s next through evolving design, innovation, and creative thinking.
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
              <div className={styles.p2ndDec2025}>
                <p className={styles.p3rdJan2025} dir={"auto"}>
                  3rd Jan 2025
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
            <div className={styles.bRANDING}>
              <p className={styles.design} dir={"auto"}>
                DESIGN
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailPlus1} data-framecoded-motion={"rgnn"}>
        <div className={styles.plus}>
          <div className={styles.el}></div>
          <div className={styles.el2}></div>
        </div>
      </div>
      <div className={styles.detailPlus2} data-framecoded-motion={"rgnr"}>
        <div className={styles.plus2}>
          <div className={styles.el3}></div>
          <div className={styles.el4}></div>
        </div>
      </div>
      <div className={styles.detailPlus3} data-framecoded-motion={"rgnv"}>
        <div className={styles.plus3}>
          <div className={styles.el5}></div>
          <div className={styles.el6}></div>
        </div>
      </div>
    </section>
  );
}
