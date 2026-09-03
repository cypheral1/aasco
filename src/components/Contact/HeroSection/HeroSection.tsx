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
      <Link href={"/#top"} className={styles.logo} data-framecoded-motion={"r5lv"}>
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
        <div className={styles.sayHi} data-framecoded-motion={"r5lx"}>
          <h1 className={styles.h1} dir={"auto"}>
            Say Hi
          </h1>
        </div>
        <div className={styles.letBuildSomething} data-framecoded-motion={"r5m5"}>
          <div className={styles.letSBuildSomethingCool}>
            <h5 className={styles.h5} dir={"auto"}>
              Let’s Build Something Cool
            </h5>
          </div>
          <div
            className={styles.haveAProjectInMindOrJustWantToSayHelloWeReHereToHelpLetSMakeItHappen}
          >
            <p className={styles.haveProjectIn} dir={"auto"}>
              <span>Have a project in mind or just want to say hello? We’re here to help, </span>
              <br className={styles.br} />
              <span>let’s make it happen.</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.detailPlus1} data-framecoded-motion={"r5ma"}>
        <div className={styles.plus}>
          <div className={styles.el}></div>
          <div className={styles.el2}></div>
        </div>
      </div>
      <div className={styles.detailPlus2} data-framecoded-motion={"r5me"}>
        <div className={styles.plus2}>
          <div className={styles.el3}></div>
          <div className={styles.el4}></div>
        </div>
      </div>
      <div className={styles.detailPlus3} data-framecoded-motion={"r5mi"}>
        <div className={styles.plus3}>
          <div className={styles.el5}></div>
          <div className={styles.el6}></div>
        </div>
      </div>
    </section>
  );
}
