import React from "react";
import styles from "./SampleOMCard.module.css";

const SampleOMCard = ({ title, description, image }) => {
  return (
    <div className={styles.omCard}>
      <img src={image} alt={`${title} preview`} className={styles.omImage} />
      <div className={styles.omContent}>
        <h3 className={styles.omTitle}>{title}</h3>
        <p className={styles.omDescription}>{description}</p>
        <button className={styles.viewTemplateButton}>
          View Sample Template
        </button>
      </div>
    </div>
  );
};

export default SampleOMCard;
