import NewsletterLayout from "../newsletterLayout";
import styles from "@/app/newsletters/[id]/newsletter_context.module.css";

export default function NewsletterContext() {
  return (
    <NewsletterLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles["header--medium"]}>Week </span>
          <span className={styles["header--bold--extra"]}>#</span>
          <span className={styles["card__date"]}></span>
        </div>
      </div>
    </NewsletterLayout>
  );
}
