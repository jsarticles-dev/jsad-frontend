import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "JSArticles.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
