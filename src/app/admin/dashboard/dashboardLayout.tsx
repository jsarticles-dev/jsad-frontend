import Navbar from "@/components/Navbar/Navbar";
import styles from "@/app/admin/dashboard/dashboard.module.css";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className={styles.newsletter__layout__container}>
        <Navbar isEmailSubscriptionFormActive={false} />
      </div>
      {children}
    </>
  );
}
