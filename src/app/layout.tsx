import type { Metadata } from "next";
import { Inter, Syne, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WWORLD JOB — валютная удалёнка с ИИ",
  description:
    "ИИ собирает резюме, отправляет работодателям и помогает найти worldwide remote работу в $ и € — из России, без релокации.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${unbounded.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
