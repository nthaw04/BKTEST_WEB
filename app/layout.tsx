import type { Metadata } from "next";
import "./globals.css";
import { googleSansFlex, sfUIDisplay } from "./fonts";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH KHẢO SÁT NỀN MÓNG & KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY",
  description: "Kiến tạo công trình vững bền cùng giải pháp xây dựng cao cấp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sfUIDisplay.variable} ${googleSansFlex.variable}`}
    >
      <body
        suppressHydrationWarning
        className={`${sfUIDisplay.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
