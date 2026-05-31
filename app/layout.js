import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/next"
import "@radix-ui/themes/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hank作品集",
  description: "Hank的作品集網站 | 工業設計",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Analytics />
      <body>
        <Theme appearance="dark" accentColor="indigo" radius="medium" scaling="100%">
          {children}
        </Theme>
      </body>
    </html>
  );
};