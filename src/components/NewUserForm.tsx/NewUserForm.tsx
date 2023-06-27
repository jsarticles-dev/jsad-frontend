"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

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

  const handleClick = () => {
    const isValid = validateEmail(email);
    if (isValid) {
    } else {
      setError("This e-mail address is not valid!");
    }
  };

  return (
    <>
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
            <span className={styles.box__link}>Let me see first</span>
          </div>
        </div>
      )}
    </>
  );
}
