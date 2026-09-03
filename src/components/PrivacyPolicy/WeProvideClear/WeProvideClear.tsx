import styles from "./WeProvideClear.module.css";

export interface WeProvideClearProps {
  /** Text */
  weProvideClear: string;
}

export function WeProvideClear(props: WeProvideClearProps) {
  return (
    <div className={styles.weProvideClear}>
      <div className={styles.weProvideClear2}>
        <div className={styles.primary3}>
          <div className={styles.dot}></div>
          <div className={styles.userBehaviorResearchConversionMappingHighFidelityWireframing}>
            <p className={styles.weProvideClear3} dir={"auto"}>
              {props.weProvideClear}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
