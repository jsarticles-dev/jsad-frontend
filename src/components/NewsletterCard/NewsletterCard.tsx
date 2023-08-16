import styles from "@/components/NewsletterCard/newsletter_card.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import StatusTag from "../StatusTags/StatusTag";

interface NewsletterCardProps {
  number: number;
  date: Date;
  id: string;
  isDashboardElement?: boolean;
  isStatusTagActive?: boolean;
}
export default function NewsletterCard({
  number,
  date,
  id,
  isDashboardElement,
  isStatusTagActive,
}: NewsletterCardProps) {
  const checkIsEditingActive = () => {
    const plannedDate = new Date(date).getTime();
    const today = new Date().getTime();

    if (plannedDate === today) {
      return false;
    } else if (plannedDate > today) {
      return true;
    } else {
      return false;
    }
  };

  const getStatusTag = (date: Date) => {
    const plannedDate = new Date(date).getTime();
    const today = new Date().getTime();

    if (plannedDate === today) {
      return StatusTag.sent();
    } else if (plannedDate > today) {
      return StatusTag.pending();
    } else {
      return StatusTag.sent();
    }
  };

  return (
    <div className={styles.card__container}>
      <div className={styles.card__header}>
        <span className={styles["card__header--medium"]}>Week</span>
        <span className={styles["card__header--bold--extra"]}>#{number}</span>
        <span className={styles.card__date}>
          {dayjs(date).format("DD MMMM YYYY")}
        </span>
      </div>
      {isStatusTagActive && getStatusTag(date)}
      <Link
        href={
          isDashboardElement && checkIsEditingActive()
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
