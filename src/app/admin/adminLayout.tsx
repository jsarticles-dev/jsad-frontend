import Navbar from "../../components/Navbar/Navbar";
import styles from "@/app/newsletters/newsletter.module.css";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.newsletter__layout__container}>
        <Navbar isEmailSubscriptionFormActive={false} />
      </div>
      {children}
    </>
  );
}
