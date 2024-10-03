import React from "react";
import styles from "./MainComponent.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import PropertyTypes from "../PropertyTypes/PropertyTypes";
import SampleOMs from "../SampleOMs/SampleOMs";

const MainComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <main>
        <Hero />
        <PropertyTypes />
        <SampleOMs />
      </main>
    </div>
  );
};

export default MainComponent;
