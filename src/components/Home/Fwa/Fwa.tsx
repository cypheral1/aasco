import styles from "./Fwa.module.css";

export interface FwaProps {
  /** Text */
  text1: string;
  /** Text */
  text2: string;
}

export function Fwa(props: FwaProps) {
  return (
    <div className={styles.fwa}>
      <div className={styles.fwa2}>
        <div className={styles.primary133}>
          <div className={styles.fWA}>
            <h3 className={styles.h35} dir={"auto"}>
              {props.text1}
            </h3>
          </div>
          <div className={styles.p017}>
            <p className={styles.p018} dir={"auto"}>
              {props.text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
