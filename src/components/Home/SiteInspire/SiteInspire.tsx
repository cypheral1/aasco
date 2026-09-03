import styles from "./SiteInspire.module.css";

export interface SiteInspireProps {
  /** Text */
  text1: string;
  /** Text */
  text2: string;
}

export function SiteInspire(props: SiteInspireProps) {
  return (
    <div className={styles.siteInspire}>
      <div className={styles.siteInspire2}>
        <div className={styles.primary136}>
          <div className={styles.fWA4}>
            <h3 className={styles.h38} dir={"auto"}>
              {props.text1}
            </h3>
          </div>
          <div className={styles.p04}>
            <p className={styles.p042} dir={"auto"}>
              {props.text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
