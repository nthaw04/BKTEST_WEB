import type { Metadata } from "next";
import { ExternalLink, FileText, FlaskConical } from "lucide-react";
import { FooterSection, Header } from "@/components/landing";

export const metadata: Metadata = {
  title: "CÔNG BỐ NLHĐ THÍ NGHIỆM",
  description: "Hồ sơ công bố năng lực hoạt động thí nghiệm.",
};

const capabilityItems = [
  {
    label: "ĐƠN CÔNG BỐ NĂNG LỰC HOẠT ĐỘNG THÍ NGHIỆM",
    href: "https://drive.google.com/file/d/1o_1DiIpKc0u7pJ6hQ4tWDypQTxniMUaG/view?usp=drive_link",
  },
  {
    label: "ĐĂNG KÍ KINH DOANH. MÃ NGÀNH. LAS",
    href: "https://drive.google.com/file/d/1EDyHavOSGyHISXw8wJ-ZVIhXE33OWrNa/view?usp=drive_link",
  },
  {
    label: "QUYẾT ĐỊNH THÀNH LẬP PHÒNG THÍ NGHIỆM",
    href: "https://drive.google.com/file/d/1X6fc5EyxBTt8kvi8k8uQ3QGY3Cm_Ff67/view?usp=drive_link",
  },
  {
    label: "DANH SÁCH NHÂN SỰ, BẰNG CẤP, HỢP ĐỒNG",
    href: "https://drive.google.com/file/d/1usgTTENYKrnPQOjoh4TVt64EI4KdwJTf/view?usp=drive_link",
  },
  {
    label: "BẢNG PHÂN CÔNG CÔNG VIỆC",
    href: "https://drive.google.com/file/d/1SwRUs8DlWCpaiRm1DcQ5NeVK4aeTwPtL/view?usp=drive_link",
  },
  {
    label: "HĐKT. BBBG. HÓA ĐƠN TB",
    href: "https://drive.google.com/file/d/1goiXlEzl_fJBlu7YuDeeK3cZh7upZ-1l/view?usp=drive_link",
  },
  {
    label: "HIỆU CHUẨN 2025 - 2026",
    href: "https://drive.google.com/file/d/1tJfW1r_NtJ05RAssx1JMOOGir3yOcf7E/view?usp=sharing",
  },
  {
    label: "DANH MỤC TÀI LIỆU QLCL THEO TCVN ISO 17025: 2017",
    href: "https://drive.google.com/file/d/1LSCh_FkyMOJn0F2qT7-5uI_4M5nVNRco/view?usp=sharing",
  },
  {
    label: "HỢP ĐỒNG THUÊ NHÀ, MẶT BẰNG",
    href: "https://drive.google.com/file/d/1LSCh_FkyMOJn0F2qT7-5uI_4M5nVNRco/view?usp=sharing",
  },
] as const;

const CongBoNLHDThiNghiemPage = () => {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#10223f]">
      <Header />

      <section className="mx-auto w-full max-w-7xl px-6 pt-20 pb-12 lg:px-10">
        <h1 className="mt-3 text-3xl leading-tight text-center font-black tracking-tight sm:text-4xl">
          CÔNG BỐ NLHĐ THÍ NGHIỆM
        </h1>

        <div className="mt-8 rounded-2xl border border-[#dbe8f5] bg-white p-5 shadow-[0_15px_40px_rgba(15,31,59,0.08)] sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#e8f0f8] pb-5">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#2f7ec6] uppercase">
                Danh mục hồ sơ
              </p>
              <h2 className="mt-1 text-lg font-extrabold text-[#142949] sm:text-2xl">
                HỒ SƠ CÔNG BỐ NĂNG LỰC HOẠT ĐỘNG THÍ NGHIỆM
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-[#edf6ff] px-3 py-1.5 text-xs font-semibold text-[#136fc0]">
              <FlaskConical className="h-3.5 w-3.5" />9 tài liệu
            </div>
          </div>

          <ol className="mt-5 space-y-2">
            {capabilityItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-transparent px-2.5 py-2.5 transition-all hover:border-[#d8e9f9] hover:bg-[#f7fbff]"
                >
                  <span className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#e6f3ff] text-xs font-bold text-[#1d88dc]">
                    {index + 1}
                  </span>

                  <span className="flex min-w-0 flex-1 items-start justify-between gap-2">
                    <span className="pt-0.5 text-[15px] font-semibold leading-relaxed text-[#173159] transition-colors group-hover:text-[#0b78cf]">
                      {item.label}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#5f8fb8] transition-colors group-hover:text-[#0b78cf]">
                      <FileText className="h-3.5 w-3.5" />
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default CongBoNLHDThiNghiemPage;
