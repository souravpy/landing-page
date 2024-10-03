import React from "react";
import styles from "./PropertyTypes.module.css";
import PropertyTypeItem from "./PropertyTypeItem";

const propertyTypes = [
  {
    name: "Retail",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3356e02dc5b14e9d44119fe9dc3084f92baec37e38ad08df476d24d32009aa94?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a",
  },
  {
    name: "Multi-family",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/101ab7e379e725046e83c2b8844b93a1e5c673da1568ab033cd6bc4dc84c31ef?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a",
  },
  {
    name: "Office",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/23fcc14785331aa7f0edc53d8b75b0f7e22defd75dfa72def5627be89a1f6669?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a",
  },
  {
    name: "Industrial",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7b1cfd2ef6b38f1bac51232d4323185697dd0cafa4ac84a581d0bdcc977fcea?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a",
  },
  {
    name: "Hotel",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2a2ce43322a08491b3426b6aeb7d03f1db16caf9dbc007364f38a956d3efe03?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a",
  },
  {
    name: "Land",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16a197b44c64e86a58fe85490ce783573b948f3dfec6f5eadbe9d0bef856e751?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a",
  },
];

const PropertyTypes = () => {
  return (
    <section className={styles.propertyTypes}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.subtitle}>Create OMs and Ads For</span>
        Various Real Estate Property Types
      </h2>
      <div className={styles.typeGrid}>
        {propertyTypes.map((type, index) => (
          <PropertyTypeItem key={index} name={type.name} icon={type.icon} />
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
