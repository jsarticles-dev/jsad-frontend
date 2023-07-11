"use client";

import styles from "@/components/LoginForm/loginform.module.css";
import { useState } from "react";
import axios from "axios";
import { setCookies } from "@/app/actions";

interface ILoginForm {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [form, setForm] = useState<ILoginForm>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/employees/login`,
      {
        email: form.email,
        password: form.password,
      }
    );

    if (response?.data?.success === true) {
      setCookies(response?.data?.data?.token);
    }
  };

  return (
    <>
      <label className={styles.login__label}>E-mail</label>

      <input
        className={styles.login__input}
        onChange={handleChange}
        name='email'
      />
      <label className={styles.login__label}>Password</label>
      <input
        type='password'
        className={styles.login__input}
        onChange={handleChange}
        name='password'
      />
      <button className={styles.login__button} onClick={handleSubmit}>
        Log in
      </button>
    </>
  );
}
