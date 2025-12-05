import "./globals.css";
import Header from "@/components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "تورنومنت کلش رویال حلی 4",
  description: "ثبت نام در تورنومنت کلش رویال",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
