import React from "react";
import styles from "./GradientBar.module.css";

type Props = {
  color?: string;
};

const GradientBar: React.FC<Props> = ({ color }) => (
  <div className={styles.bar} style={{ backgroundColor: color || undefined }} />
);

export default GradientBar;
