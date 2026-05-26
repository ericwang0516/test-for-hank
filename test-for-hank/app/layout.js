import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
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
  title: "3D 作品展示",
  description: "使用 Three.js 建立的 3D 互動展示",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Theme appearance="dark" accentColor="indigo" radius="medium" scaling="100%">
          {children}
        </Theme>
      </body>
    </html>
  );
}
