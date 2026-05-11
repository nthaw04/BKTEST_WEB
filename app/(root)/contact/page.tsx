import type { Metadata } from "next";
import { ContactSection, FooterSection, Header } from "@/components/landing";

export const metadata: Metadata = {
  title: "LIÊN HỆ",
  description: "Liên hệ Trung tâm Nghiên cứu Thử nghiệm Bách Khoa.",
};

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default ContactPage;
