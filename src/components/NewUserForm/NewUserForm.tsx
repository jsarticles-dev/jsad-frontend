"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import toastMessage from "../ToastMessage/ToastMessage";
import { ToastContainer } from "react-toastify";

const validateEmail = (email: string) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

export default function NewUserForm({
  doesUseInNavbar,
}: {
  doesUseInNavbar?: boolean;
}) {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setError(null);
    const { value } = event.target;
    setEmail(value);
  };

  const handleClick = async () => {
    const isValid = validateEmail(email);
    if (isValid) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const response: any = await res.json();
        if (response?.message) {
          return toastMessage.error(response.message);
        }
        throw new Error("Failed to fetch data");
      }

      toastMessage.success("Successfully joined!");
    } else {
      setError("This e-mail address is not valid!");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.form__container}>
        <div className={styles.box__error}>{error}</div>
        <input
          className={styles.form__input}
          onChange={handleEmailChange}
          placeholder='Enter your e-mail'
        />
        <button className={styles.form__button} onClick={handleClick}>
          Join Now
        </button>
      </div>
      {!doesUseInNavbar && (
        <div>
          <div className={styles.box}>
            <Link href='/newsletters' className={styles.box__link}>
              Let me see first
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
