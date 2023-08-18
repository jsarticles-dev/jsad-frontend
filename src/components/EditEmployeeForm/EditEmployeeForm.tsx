import { fetchAuthData } from "@/app/actions";
import styles from "@/components/EditEmployeeForm/editEmployeeForm.module.css";

import { useState } from "react";

export enum EMPLOYEE_ROLES {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
}

type EditEmployeeFormProps = {
  setIsOpen: (value: boolean) => void;
  initialFormData: {
    _id: string;
    name: string;
    email: string;
    role: EMPLOYEE_ROLES;
  };
};

export default function EditEmployeeForm({
  setIsOpen,
  initialFormData,
}: EditEmployeeFormProps) {
  const [formData, setFormData] =
    useState<EditEmployeeFormProps["initialFormData"]>(initialFormData);

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await fetchAuthData({
        url: `${process.env.NEXT_PUBLIC_API_URL}/employees/${initialFormData._id}`,
        method: "PATCH",
        body: {
          name: formData.name,
          email: formData.email,
          role: formData.role,
        },
      });

      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.form__label}>Name</label>
      <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChangeForm}
      />
      <label className={styles.form__label}>Email</label>
      <input
        type='email'
        name='email'
        value={formData.email}
        onChange={handleChangeForm}
      />
      <label className={styles.form__label}>Role</label>
      <div>
        <input
          type='radio'
          id='admin'
          name='role'
          value={EMPLOYEE_ROLES.ADMIN}
          checked={formData.role === EMPLOYEE_ROLES.ADMIN}
          onChange={handleChangeForm}
        />
        <label htmlFor='admin'>Admin</label>
        <input
          type='radio'
          id='editor'
          name='role'
          value={EMPLOYEE_ROLES.EDITOR}
          checked={formData.role === EMPLOYEE_ROLES.EDITOR}
          onChange={handleChangeForm}
        />
        <label htmlFor='editor'>Editor</label>
      </div>
      <button className={styles.form__submit__button} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
