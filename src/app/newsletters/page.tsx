import NewsletterCard from "@/components/NewsletterCard/NewsletterCard";
import NewsletterLayout from "./newsletterLayout";
import styles from "@/app/newsletters/newsletter.module.css";

interface Newsletter {
  _id: string;
  header: string;
  content: string;
  dateOfDispatch: string;
  number: number;
}
[];

const getNewsletters = async () => {
  const res = await fetch(`${process.env.API_URL}/newsletters/`, {
    cache: "no-store",
  });
  const newsletters = await res.json();

  return newsletters;
};
export default async function EmailsPage() {
  const newsletters = await getNewsletters();

  return (
    <NewsletterLayout>
      <div className={styles.grid}>
        {newsletters.reverse().map((newsletter: Newsletter, index: number) => {
          return (
            <NewsletterCard
              key={index}
              id={newsletter._id}
              date={new Date(newsletter.dateOfDispatch)}
              number={newsletter.number}
            />
          );
        })}
      </div>
    </NewsletterLayout>
  );
}
