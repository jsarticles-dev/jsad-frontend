import styles from "@/app/login/login.module.css";
import React from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.login__layout}>
      <div className={styles.header}>
        <span className={styles["header--bold"]}>JS </span>
        <span className={styles["header--light"]}>Articles.dev</span>
      </div>
      {children}
    </div>
  );
}
