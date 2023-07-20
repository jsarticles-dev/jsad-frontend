"use client";

import React, { useState } from "react";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "@/components/NewNewsletterForm/newNewsletter.module.css";
import { fetchAuthData } from "@/app/actions";

interface INewNewsletterForm {
  content: string;
  dateOfDispatch: Date;
  header: string;
}

export default function NewNewsletterForm() {
  const [formState, setFormState] = useState<INewNewsletterForm>({
    content: "",
    dateOfDispatch: new Date(),
    header: "",
  });

  const handleEditorChange = (newEditorContent: string) => {
    setFormState({ ...formState, content: newEditorContent });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmitForm = async () => {
    await fetchAuthData({
      url: `${process.env.NEXT_PUBLIC_API_URL}/newsletters`,
      method: "POST",
      body: { ...formState },
    });
  };

  return (
    <div className={style.form__wrapper}>
      <div className={style.form__container}>
        <label className={style.form__label}>Header</label>
        <input
          className={style.form__input}
          name='header'
          onChange={handleChange}
        />
        <label className={style.form__label}>Newsletter Content</label>
        <RichTextEditor
          onChange={handleEditorChange}
          content={formState.content}
        />
      </div>
      <div className={style.form__container}>
        <label className={style.form__label}>Date of Dispatch</label>
        <DatePicker
          selected={formState.dateOfDispatch}
          onChange={(date: Date) =>
            setFormState({ ...formState, dateOfDispatch: date })
          }
        />
        <button className={style.form__button} onClick={handleSubmitForm}>
          Add new newsletter
        </button>
      </div>
    </div>
  );
}
