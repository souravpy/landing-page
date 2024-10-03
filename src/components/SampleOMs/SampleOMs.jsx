import React from "react";
import styles from "./SampleOMs.module.css";
import SampleOMCard from "./SampleOMCard";

const sampleOMs = [
  {
    title: "Retail OM",
    description: "strip centers, street retail, vehicle related, and more.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6f396863a338c321137a72ee876fd6ff74044731d0300771fbf6e7ac3809e749?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a",
  },
  {
    title: "Multi-Family OM",
    description: "garden, low-rise, mid-rise, high-rise.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f4c5afcb0a544e2bb6c54b9bb30a344d5c341b6754a89557667d4ebbbea4ed69?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a",
  },
  {
    title: "Office OM",
    description: "all classes of office buildings, loft/creative, medical.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/768efa149ba3fea789386052906bf88543f663054bd1c38bbc4422f9a727d3a8?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a",
  },
];

const SampleOMs = () => {
  return (
    <section className={styles.sampleOMs}>
      <h2 className={styles.sectionTitle}>
        Sample OMs created with our platform
      </h2>
      <div className={styles.omGrid}>
        {sampleOMs.map((om, index) => (
          <SampleOMCard key={index} {...om} />
        ))}
      </div>
    </section>
  );
};

export default SampleOMs;
