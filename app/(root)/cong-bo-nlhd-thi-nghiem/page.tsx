import type { Metadata } from "next";
import { ExternalLink, FileText, FlaskConical } from "lucide-react";
import { FooterSection, Header } from "@/components/landing";

export const metadata: Metadata = {
  title: "CÔNG BỐ NLHĐ THÍ NGHIỆM",
  description: "Hồ sơ công bố năng lực hoạt động thí nghiệm.",
};

type DocumentLink = {
  label: string;
  href: string;
};

type CapabilityItem =
  | DocumentLink
  | {
      label: string;
      children: DocumentLink[];
    };

const capabilityItems: CapabilityItem[] = [
  {
    label: "CÔNG BỐ NĂNG LỰC HOẠT ĐỘNG THÍ NGHIỆM CHUYÊN NGÀNH XÂY DỰNG",
    href: "https://drive.google.com/file/d/17hS0qe92O8raQZkvbvhC50ASYqxJXUdT/view?usp=sharing",
  },
  {
    label: "HỒ SƠ NĂNG LỰC PHÁP LÝ",
    children: [
      {
        label: "Giấy ĐKKD - TT Bách Khoa",
        href: "https://drive.google.com/file/d/1qa-WnBGui4Sob3PAymbK4IvBs6LcCige/view?usp=sharing",
      },
      {
        label: "QĐ LAS-XD 58.017",
        href: "https://drive.google.com/file/d/1vE4acPv0LxBOwqSYUX7z_d95tk5hvqui/view?usp=sharing",
      },
      {
        label:
          "Giấy chứng nhận đủ điều kiện hoạt động thí nghiệm chuyên ngành xây dựng",
        href: "https://drive.google.com/file/d/1dDw7FDvNGMVyRqtPpDJ1xwZ7_UY-DC0s/view?usp=sharing",
      },
    ],
  },
  {
    label: "QĐ THÀNH LẬP PTN",
    href: "https://drive.google.com/file/d/1BAYqFyvQo_dQVdPAqw-y3vFoYkC5V3XM/view?usp=sharing",
  },
  {
    label: "DANH SÁCH CÁN BỘ QUẢN LÝ - TNV",
    href: "https://drive.google.com/file/d/1t3KUGnsH8J2BCLJlTf4W3u8Hl-Kpe7Lo/view?usp=sharing",
  },
  {
    label: "BẢNG PHÂN CÔNG CÔNG VIỆC THÍ NGHIỆM",
    href: "https://drive.google.com/file/d/1zXWnYzpy7ARd5kSLb3R2g91RWXqcOZKh/view?usp=sharing",
  },
  {
    label: "DANH MỤC THIẾT BỊ - DỤNG CỤ KIỂM SOÁT",
    href: "https://drive.google.com/file/d/11Chw2E71aRVIDfQS2ydFbtU1-XYS_l1u/view?usp=sharing",
  },
  {
    label: "KIỂM ĐỊNH - HIỆU CHUẨN THIẾT BỊ PHÒNG TN - TTBK",
    href: "https://drive.google.com/file/d/15pvxRvhqpFXAiav-OIJ8JkaslB2fIx1w/view?usp=sharing",
  },
  {
    label: "HỒ SƠ QUẢN LÝ CHẤT LƯỢNG",
    children: [
      {
        label: "Danh mục quy trình Thủ tục ISO 17025:2017",
        href: "https://drive.google.com/file/d/1qOnoga-azjBK06a4B3Nwb-vNCtK9SooR/view?usp=sharing",
      },
      {
        label: "Sổ tay Chất lượng của Phòng Thí nghiệm",
        href: "https://drive.google.com/file/d/1zuiuiH6P1n5rt9X9CxCaUb06kiR41fA4/view?usp=sharing",
      },
    ],
  },
  {
    label: "NĂNG LỰC HẠ TẦNG",
    children: [
      {
        label: "Sơ đồ mặt bằng PTN",
        href: "https://drive.google.com/file/d/1A25HvWMdsE16xMeQOfBpGW5z6E3IYoBc/view?usp=sharing",
      },
      {
        label: "Giấy chứng nhận quyền sử dụng đất",
        href: "https://drive.google.com/file/d/1zwe0wtOR9y4I35Ah4dnrdmae-Vrogbad/view?usp=sharing",
      },
    ],
  },
];

const CongBoNLHDThiNghiemPage = () => {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#10223f]">
      <Header />

      <section className="mx-auto w-full max-w-7xl px-6 pt-10 pb-12 lg:px-10">
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
              <FlaskConical className="h-3.5 w-3.5" />
              {capabilityItems.length} tài liệu
            </div>
          </div>

          <ol className="mt-5 space-y-2">
            {capabilityItems.map((item, index) => {
              const itemNumber = index + 1;
              const hasChildren = "children" in item;
              if (hasChildren) {
                return (
                  <li key={item.label}>
                    <div className="flex items-start gap-3 rounded-xl border border-transparent px-2.5 py-2.5">
                      <span className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#e6f3ff] text-xs font-bold text-[#1d88dc]">
                        {itemNumber}
                      </span>

                      <span className="flex min-w-0 flex-1 items-start justify-between gap-2">
                        <span className="pt-0.5 text-[15px] font-semibold leading-relaxed text-[#173159]">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-[#7aa9d1]">
                          {item.children.length} mục con
                        </span>
                      </span>
                    </div>

                    <ol className="mt-1 ml-10 space-y-1.5">
                      {item.children.map((child, childIndex) => {
                        const hasChildLink = child.href !== "#";

                        return (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              target={hasChildLink ? "_blank" : undefined}
                              rel={
                                hasChildLink ? "noopener noreferrer" : undefined
                              }
                              className="group flex items-start gap-3 rounded-lg border border-transparent px-2.5 py-2 transition-all hover:border-[#d8e9f9] hover:bg-[#f7fbff]"
                            >
                              <span className="mt-0.5 inline-flex h-5 min-w-9 items-center justify-center rounded-full bg-[#f0f8ff] text-[11px] font-bold text-[#1d88dc]">
                                {itemNumber}.{childIndex + 1}
                              </span>

                              <span className="flex min-w-0 flex-1 items-start justify-between gap-2">
                                <span className="pt-0.5 text-base font-semibold leading-relaxed text-[#25456f] transition-colors group-hover:text-[#0b78cf]">
                                  {child.label}
                                </span>
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#5f8fb8] transition-colors group-hover:text-[#0b78cf]">
                                  <FileText className="h-3.5 w-3.5" />
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </span>
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  </li>
                );
              }

              const hasDocumentLink = item.href !== "#";

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={hasDocumentLink ? "_blank" : undefined}
                    rel={hasDocumentLink ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-3 rounded-xl border border-transparent px-2.5 py-2.5 transition-all hover:border-[#d8e9f9] hover:bg-[#f7fbff]"
                  >
                    <span className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#e6f3ff] text-xs font-bold text-[#1d88dc]">
                      {itemNumber}
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
              );
            })}
          </ol>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default CongBoNLHDThiNghiemPage;
