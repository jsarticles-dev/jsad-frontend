"use client";

import React, { useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "@/components/NewsletterEditForm/newsletterEditForm.module.css";
import { fetchAuthData } from "@/app/actions";
import { useRouter } from "next/navigation";

interface INewsletterEditForm {
  content: string;
  dateOfDispatch: Date;
  header: string;
}

export default function NewsletterEditForm({
  newsletterId,
}: {
  newsletterId: string;
}) {
  const [formState, setFormState] = useState<INewsletterEditForm>({
    content: "",
    dateOfDispatch: new Date(),
    header: "",
  });

  const router = useRouter();

  const handleEditorChange = (newEditorContent: string) => {
    setFormState((prevState) => ({ ...prevState, content: newEditorContent }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDeleteNewsletter = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    await fetchAuthData({
      url: `${process.env.NEXT_PUBLIC_API_URL}/newsletters/${newsletterId}`,
      method: "DELETE",
    });

    return router.push("/admin/dashboard");
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/newsletters/${newsletterId}`,
        { cache: "no-store" }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const newsletter = await res.json();

      setFormState({
        content: newsletter.content,
        header: newsletter.header,
        dateOfDispatch: new Date(newsletter.dateOfDispatch),
      });
    })();
  }, [newsletterId]);

  const handleSubmitForm = async () => {
    await fetchAuthData({
      url: `${process.env.NEXT_PUBLIC_API_URL}/newsletters/${newsletterId}`,
      method: "PUT",
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
          value={formState.header}
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
          Update newsletter
        </button>
        <button
          className={`danger ${style.form__button}`}
          onClick={handleDeleteNewsletter}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
