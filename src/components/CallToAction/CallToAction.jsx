import React from "react";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <div className={styles.ctaContainer}>
      <button className={styles.tryFreeButton}>
        Try for free
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f87ef6e1f6b95b0bb585e714320f6a3b49c09d9b36dead7efa714c8aeb764b3?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a"
          alt=""
          className={styles.arrowIcon}
        />
      </button>
      <button className={styles.watchDemoButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73ab5e380133040ec9fe83855aafe4f8d9d9f24058dae95b818a8b4cee4bee91?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a"
          alt="Watch demo"
          className={styles.demoIcon}
        />
      </button>
    </div>
  );
};

export default CallToAction;
