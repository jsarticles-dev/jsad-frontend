import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import styles from "@/app/newsletters/newsletter.module.css";
import { checkIsTokenValid } from "../actions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkIsTokenValid();
  return (
    <>
      <div className={styles.newsletter__layout__container}>
        <AdminNavbar />
      </div>
      {children}
    </>
  );
}
