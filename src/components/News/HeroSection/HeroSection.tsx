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
      <Link href={"/#top"} className={styles.logo} data-framecoded-motion={"rd11"}>
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
      <div className={styles.heading}>
        <div className={styles.news} data-framecoded-motion={"rd13"}>
          <h1 className={styles.h1} dir={"auto"}>
            News
          </h1>
        </div>
        <div className={styles.newsInsightsThat} data-framecoded-motion={"rd18"}>
          <div className={styles.subTitle}>
            <h5 className={styles.h5} dir={"auto"}>
              News Insights That Drive Creativity
            </h5>
          </div>
          <div className={styles.aShowcaseOfProjectsCraftedWithStrategyCreativityTrendAndPrecision}>
            <p className={styles.exploringDesignsStrategies} dir={"auto"}>
              Exploring designs, strategies, and creativity that shape modern brand’s business.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.detailPlus1} data-framecoded-motion={"rd1d"}>
        <div className={styles.plus}>
          <div className={styles.el}></div>
          <div className={styles.el2}></div>
        </div>
      </div>
      <div className={styles.detailPlus2} data-framecoded-motion={"rd1h"}>
        <div className={styles.plus2}>
          <div className={styles.el3}></div>
          <div className={styles.el4}></div>
        </div>
      </div>
      <div className={styles.detailPlus3} data-framecoded-motion={"rd1l"}>
        <div className={styles.plus3}>
          <div className={styles.el5}></div>
          <div className={styles.el6}></div>
        </div>
      </div>
    </section>
  );
}
