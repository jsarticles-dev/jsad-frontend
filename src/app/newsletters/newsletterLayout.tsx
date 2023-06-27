import Navbar from "../../components/Navbar/Navbar";
import styles from "@/app/newsletters/newsletter.module.css";

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.newsletter__layout__container}>
        <Navbar />
      </div>
      {children}
    </>
  );
}
