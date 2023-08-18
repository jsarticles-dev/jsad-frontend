"use client";
import { deleteCookie } from "@/app/actions";
import styles from "@/components/AdminNavbar/adminNavbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const router = useRouter();
  const handleLogOut = () => {
    deleteCookie("cookie");
    router.push("/");
  };
  return (
    <div className={styles.navbar__container}>
      <Link href='/' className={styles.header}>
        <span className={styles["header--bold"]}>JS </span>
        <span className={styles["header--light"]}>Articles.dev</span>
      </Link>
      <Link href='/admin/dashboard' className={styles.menu__item}>
        Dashboard
      </Link>
      <Link className={styles.menu__item} href={"/admin/dashboard/users"}>
        Users
      </Link>
      <Link className={styles.menu__item} href={"/admin/dashboard/employees"}>
        Employees
      </Link>
      <Link
        className={styles.menu__item}
        href={"/admin/dashboard/newsletters/new"}
      >
        New Newsletter
      </Link>

      <span
        className={`${styles.menu__item} ${styles.danger}`}
        onClick={handleLogOut}
      >
        Log out
      </span>
    </div>
  );
}
