import type { Metadata } from "next";
import "./globals.css";
import { questrial } from "./fonts";

export const metadata: Metadata = {
  title: "TRUNG TÂM NGHIÊN CỨU THỬ NGHIỆM BÁCH KHOA",
  description: "Kiến tạo công trình vững bền cùng giải pháp xây dựng cao cấp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${questrial.variable}`}>
      <body
        suppressHydrationWarning
        className={`${questrial.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
