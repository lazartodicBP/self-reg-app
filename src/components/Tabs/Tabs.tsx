import React from "react";
import styles from "./Tabs.module.css";

const Tabs = (props) => {

  return <div className={styles.tabs}>
    {
      props.data?.map(item => (
        <div
          key={item.value}
          className={`${styles.tab} ${props.value === item.value ? styles.selected : ""}`}
        >
          {item.label}
        </div>
      ))
    }
  </div>

};

export default Tabs;
