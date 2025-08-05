import React from "react";
import styles from "./Divider.module.css";

const Divider = ({children}) => {

  return <h3 className={styles.divider}>
    {children}
  </h3>

};

export default Divider;
