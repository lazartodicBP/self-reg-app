import React from "react";
import Link from "next/link";
import Card from "../Card/Card";
import type { Product } from "@/services/products-data";
import styles from "./PlanCard.module.css";

interface PlanCardProps {
  product: Product;
  description: {
    title: string;
    description: string;
    images: { src: string; alt?: string; width: number; height: number }[];
  };
  type: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ product, description, type }) => (
  <Card className={styles[`type${type}`]}> 
    <div className={`${styles.inner} u-h-full u-flex u-column u-text-center`}>
      {/*<h3 className={styles.subtitle}>Household option</h3>*/}
      <h2 className={`${styles.title} ${styles.titleGradient}`}>{product.Name}</h2>
      <p className={styles.price}>{product.Rate}</p>
      <span className={styles.priceDescription}>AUD/week</span>
      <div className={styles.divider} />
      <p className={styles.description}>{description.title}</p>
      <p className={styles.descriptionSecondary}>{description.description}</p>
      <div className={styles.images}>
        {description.images.map((img, i) => (
          <img
            key={i}
            className={styles.image}
            src={img.src}
            alt={img.alt ?? `image-${i}`}
            width={img.width}
            height={img.height}
          />
        ))}
      </div>
      <div className={styles.tryBtnContainer}>
        <Link
          href={`/register?planId=${product.Id}`}
          className={`u-btn u-btn--focus ${styles.tryBtn}`}
        >
          Try it now
        </Link>
      </div>
    </div>
  </Card>
);

export default PlanCard;
