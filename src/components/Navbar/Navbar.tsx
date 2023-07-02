import NewUserForm from "../NewUserForm.tsx/NewUserForm";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbar__container}>
      <Link href='/' className={styles.header}>
        <div className={styles.header}>
          <span className={styles["header--bold"]}>JS </span>
          <span className={styles["header--light"]}>Articles.dev</span>
        </div>
      </Link>
      <div className={styles.form__container}>
        <NewUserForm doesUseInNavbar />
      </div>
    </div>
  );
}
