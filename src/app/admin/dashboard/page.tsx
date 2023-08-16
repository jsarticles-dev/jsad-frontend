import NewsletterCard from "@/components/NewsletterCard/NewsletterCard";
import styles from "@/app/admin/dashboard/dashboard.module.css";
import { checkIsTokenValid } from "@/app/actions";
import AdminLayout from "../adminLayout";

const getNewsletters = async () => {
  const res = await fetch(`${process.env.API_URL}/newsletters/`, {
    cache: "no-store",
  });
  const newsletters = await res.json();

  return newsletters;
};

interface Newsletter {
  _id: string;
  header: string;
  content: string;
  dateOfDispatch: string;
  number: number;
}
[];

export default async function DashboardPage() {
  await checkIsTokenValid();
  const newsletters = await getNewsletters();

  return (
    <AdminLayout>
      <div className={styles.grid}>
        {newsletters.reverse().map((newsletter: Newsletter, index: number) => {
          return (
            <NewsletterCard
              isDashboardElement
              key={index}
              id={newsletter._id}
              date={new Date(newsletter.dateOfDispatch)}
              number={newsletter.number}
              isStatusTagActive
            />
          );
        })}
      </div>
    </AdminLayout>
  );
}
