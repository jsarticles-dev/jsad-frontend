"use client";

import styles from "@/components/NewsletterCard/newsletter_card.module.css";

interface NewsletterCardProps {
  number: number;
  date: Date;
}
export default function NewsletterCard({ number, date }: NewsletterCardProps) {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__header}>
        <span className={styles["card__header--medium"]}>Week</span>
        <span className={styles["card__header--bold--extra"]}>#{number}</span>
        <span className={styles.card__date}></span>
      </div>
      <a className={styles.link}>{"See more ->"}</a>
    </div>
  );
}
