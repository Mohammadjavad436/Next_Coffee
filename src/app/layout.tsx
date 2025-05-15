import type { Metadata } from "next";
import './global.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export const metadata: Metadata = {
  title: "Coffee Verna",
  description: "This project is selling coffee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        {children}
      </body>
    </html>
  );
}
