"use client";

import { fetchAuthData } from "@/app/actions";
import { CrossIcon, PauseIcon } from "../icons";
import styles from "@/components/UsersActions/userActionButtons.module.css";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface UserActionButtonsProp {
  userId: string;
}

export default function UserActionButtons({ userId }: UserActionButtonsProp) {
  const router = useRouter();

  const handleClick = async () => {
    await fetchAuthData({
      url: `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
      method: "DELETE",
    });

    router.refresh();
  };
  return (
    <div className={styles.container__icon}>
      <div onClick={handleClick}>
        <CrossIcon />
      </div>
    </div>
  );
}
