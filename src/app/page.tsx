import NewUserForm from "@/components/NewUserForm/NewUserForm";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles["header--bold"]}>JS</span>
        <span className={styles["header--light"]}>Articles.dev</span>
        <hr className={styles.horizontal} />
      </div>

      <p className={styles.paragraph}>
        Unleash the power of JavaScript with our weekly newsletter! Dive into
        handpicked articles by top experts in the field. Stay up-to-date with
        trends, tips, and tricks to elevate your coding skills. Don't miss out
        on exciting JavaScript content
        <span className={styles["paragraph--bold"]}>—join us now!</span>
      </p>

      <NewUserForm />
    </div>
  );
}
