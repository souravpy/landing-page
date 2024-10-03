import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <button className={styles.loginButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a13b0a18ce96ec92e8953b5e8814061fe45264b7d174cc0877804a8e6705ed5?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a"
              alt=""
              className={styles.loginIcon}
            />
            Login
          </button>
        </li>
        <li>
          <button className={styles.tryFreeButton}>Try for Free</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
