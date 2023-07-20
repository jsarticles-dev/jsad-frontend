import NewsletterLayout from "../newsletterLayout";
import styles from "@/app/newsletters/[id]/newsletter_context.module.css";
import dayjs from "dayjs";

const getNewsletter = async (id: string | string[] | null | undefined) => {
  const res = await fetch(`${process.env.API_URL}/newsletters/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const newsletters = await res.json();

  return newsletters;
};
export default async function NewsletterContext({
  params,
}: {
  params: { id: string };
}) {
  const newsletter = await getNewsletter(params.id);

  return (
    <NewsletterLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles["header--medium"]}>Week </span>
          <span className={styles["header--bold--extra"]}>
            #{newsletter.number}
          </span>
          <span className={styles["card__date"]}>
            {dayjs(newsletter.dateOfDispatch).format("DD MMMM YYYY")}
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: newsletter.content  }} />
      </div>
    </NewsletterLayout>
  );
}
