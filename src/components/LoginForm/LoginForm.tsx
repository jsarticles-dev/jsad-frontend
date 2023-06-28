"use client";

import styles from "@/components/LoginForm/loginform.module.css";
import { useState } from "react";

interface ILoginForm {
  email: string;
  password: string;
}
export default function LoginForm() {
  const [form, setForm] = useState<ILoginForm>({ email: "", password: "" });
  
  return (
    <>
      <label className={styles.login__label}>E-mail</label>
      <input className={styles.login__input} name='email' />
      <label className={styles.login__label}>Password</label>
      <input type='password' className={styles.login__input} name='password' />
      <button className={styles.login__button}>Log in</button>
    </>
  );
}
