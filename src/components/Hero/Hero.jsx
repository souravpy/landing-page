import React from "react";
import styles from "./Hero.module.css";
import CallToAction from "../CallToAction/CallToAction";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <strong>Sell CRE Faster</strong> with <br />
          OMs & Ads created <br />
          in <strong>minutes</strong>
        </h1>
        <p className={styles.heroDescription}>
          Create beautiful Commercial Real Estate Offering Memorandums, Flyers &
          Ads in minutes with our AI powered platform
        </p>
        <CallToAction />
      </div>
      <div className={styles.heroImage}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a438e8e280d01a109f074939bbe1ce47d524e843bf712c8fd904056ffb31e99f?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a"
          alt="Platform preview"
          className={styles.previewImage}
        />
      </div>
    </section>
  );
};

export default Hero;
