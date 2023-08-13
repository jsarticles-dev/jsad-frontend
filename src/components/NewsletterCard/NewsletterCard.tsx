import styles from "@/components/NewsletterCard/newsletter_card.module.css";
import Link from "next/link";
import dayjs from "dayjs";

interface NewsletterCardProps {
  number: number;
  date: Date;
  id: string;
  isDashboardElement?: boolean;
}
export default function NewsletterCard({
  number,
  date,
  id,
  isDashboardElement,
}: NewsletterCardProps) {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__header}>
        <span className={styles["card__header--medium"]}>Week</span>
        <span className={styles["card__header--bold--extra"]}>#{number}</span>
        <span className={styles.card__date}>
          {dayjs(date).format("DD MMMM YYYY")}
        </span>
      </div>
      <Link
        href={
          isDashboardElement
            ? `admin/dashboard/newsletters/${id}/edit`
            : `/newsletters/${id}`
        }
        className={styles.link}
      >
        {"See more →"}
      </Link>
    </div>
  );
}
