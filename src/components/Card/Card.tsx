import React, { FC, PropsWithChildren } from "react";
import styles from "./Card.module.css";

interface CardProps extends PropsWithChildren {
  disabled?: boolean;
  className?: string;
}

const Card: FC<CardProps> = ({ children, disabled, className }) => {
  return (
    <div
      className={`${styles.card} ${disabled ? styles["card--disabled"] : ""} ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
