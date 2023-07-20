"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

function setCookies(token: string) {
  cookies().set("cookie", token);
}

interface IFetchParams {
  url: string;
  method: "POST" | "GET" | "PUT" | "DELETE";
  body?: { [key: string]: any } | undefined;
}

async function fetchAuthData({ url, method, body }: IFetchParams) {
  const accessToken = cookies().get("cookie")?.value;

  if (accessToken) {
    const data = await fetch(url, {
      method: method || "GET",
      headers: {
        authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return data.json();
  }
}

const checkIsTokenValid = async () => {
  const accessToken = cookies().get("cookie")?.value;
  if (!accessToken) {
    return redirect("/login");
  }
  if (accessToken) {
    const response = await fetch(`${process.env.API_URL}/auth/isValid`, {
      cache: "no-store",
      method: "GET",
      headers: { authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
      return redirect("/login");
    }
  }
};

export { setCookies, fetchAuthData, checkIsTokenValid };
