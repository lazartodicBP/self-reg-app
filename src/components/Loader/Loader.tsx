import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.overlay}></div>
      <div className={styles.spinner}>
        <span>Loading</span>
        <span>...</span>
      </div>
    </div>
  );
};

export default Loader;
