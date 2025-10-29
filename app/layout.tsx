import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";

const openRunde = localFont({
  src: [
    {
      path: "../public/fonts/OpenRunde-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/OpenRunde-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/OpenRunde-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Beside Animation",
  description: "Beside Animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${openRunde.variable} antialiased`}>{children}</body>
    </html>
  );
}
