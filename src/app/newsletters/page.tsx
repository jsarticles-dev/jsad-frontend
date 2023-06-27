import NewsletterCard from "@/components/NewsletterCard/NewsletterCard";
import NewsletterLayout from "./newsletterLayout";
import styles from "@/app/newsletters/newsletter.module.css";

export default function EmailsPage() {
  return (
    <NewsletterLayout>
      <div className={styles.grid}></div>
    </NewsletterLayout>
  );
}
