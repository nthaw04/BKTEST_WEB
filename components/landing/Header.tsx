"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const COMPANY_NAME =
  "CÔNG TY TNHH KHẢO SÁT NỀN MÓNG & KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY";

const NAV_ITEMS = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#khao-sat-hien-truong", label: "Khảo sát - thí nghiệm" },
  { href: "#du-an", label: "Dự án tiêu biểu" },
  { href: "#doi-tac", label: "Sơ đồ tổ chức" },
  { href: "/cong-bo-nlhd-thi-nghiem", label: "CÔNG BỐ NLHĐ THÍ NGHIỆM" },
  { href: "#lien-he", label: "Liên hệ" },
] as const;

export const Header = () => {
  const pathname = usePathname();
  const isSubPage = pathname !== "/";
  const tickerText =
    "Đơn giá xây dựng: GIÁ THÔ 3.000.000 – 3.400.000 Đ/M2 • TRỌN GÓI 4.500.000 - 5.000.000 TRIỆU Đ/M";

  return (
    <div className="sticky top-0 z-50 border-b border-black/10 bg-white shadow-sm">
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-18 w-18 shrink-0 place-items-center border border-black/10 bg-white leading-none">
              <span className="text-6xl font-black tracking-[-0.08em] text-[#d90b0b]">
                <span className="text-[#009c2f]">P</span>N
              </span>
            </span>

            <span className="min-w-0">
              <span className="line-clamp-2 text-sm font-extrabold text-[#d90b0b] uppercase sm:text-lg">
                {COMPANY_NAME}
              </span>
              <span className="mt-1 hidden items-start gap-1 text-xs text-zinc-700 sm:flex">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-500" />
                123/3 Đỗ Xuân Hợp, P.Phước Long B, Tp Thủ Đức, Tp Hồ Chí Minh
              </span>
            </span>
          </Link>

          <div className="hidden shrink-0 text-right md:block">
            <p className="text-xs font-bold uppercase text-zinc-800">
              Gọi ngay
            </p>
            <p className="mt-1 flex items-center justify-end gap-2 text-3xl leading-none font-black text-[#d90b0b]">
              <Phone className="h-5 w-5" />
              0913 682 617
            </p>
            <p className="mt-1 text-xs text-zinc-600">
              Tư vấn khảo sát, thí nghiệm và kiểm định 24/7
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0d7a30]">
        <nav className="mx-auto h-12 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <ul className="hidden h-12 w-full border-r border-white/15 md:grid md:grid-cols-7">
            <li className="border-l border-white/15">
              <a
                href={isSubPage ? "/#top" : "#top"}
                className="flex h-12 w-full items-center justify-center whitespace-nowrap bg-[#0b6b2a] px-1 text-center text-[10px] font-bold text-white uppercase lg:px-2 lg:text-[11px] xl:text-[12px]"
              >
                Trang chủ
              </a>
            </li>

            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-l border-white/15">
                {(() => {
                  const resolvedHref =
                    isSubPage && item.href.startsWith("#")
                      ? `/${item.href}`
                      : item.href;
                  const isActive =
                    !item.href.startsWith("#") && pathname === item.href;

                  return resolvedHref.startsWith("#") ? (
                    <a
                      href={resolvedHref}
                      className={`flex h-12 w-full items-center justify-center whitespace-nowrap px-1 text-center text-[10px] font-bold text-white uppercase transition-colors lg:px-2 lg:text-[11px] xl:text-[12px] ${
                        isActive ? "bg-[#0b6b2a]" : "hover:bg-[#0b6b2a]"
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={resolvedHref}
                      className={`flex h-12 w-full items-center justify-center whitespace-nowrap px-1 text-center text-[10px] font-bold text-white uppercase transition-colors lg:px-2 lg:text-[11px] xl:text-[12px] ${
                        isActive ? "bg-[#0b6b2a]" : "hover:bg-[#0b6b2a]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })()}
              </li>
            ))}
          </ul>

          <div className="flex w-full items-center justify-between md:hidden">
            <a
              href={isSubPage ? "/#top" : "#top"}
              className="inline-flex h-12 items-center bg-[#0b6b2a] px-4 text-[12px] font-bold tracking-wide text-white uppercase"
            >
              Trang chủ
            </a>

            <Sheet>
              <SheetTrigger
                className="inline-flex h-9 w-9 items-center justify-center border border-white/30 text-white"
                aria-label="Mở menu"
              >
                <Menu className="h-4.5 w-4.5" />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[86%] border-l border-black/10 bg-white p-6"
              >
                <div className="mt-8 flex flex-col gap-3">
                  {NAV_ITEMS.map((item) => {
                    const resolvedHref =
                      isSubPage && item.href.startsWith("#")
                        ? `/${item.href}`
                        : item.href;

                    return resolvedHref.startsWith("#") ? (
                      <a
                        key={item.href}
                        href={resolvedHref}
                        className="border-b border-black/10 pb-3 text-sm font-bold text-black/80 uppercase"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={resolvedHref}
                        className="border-b border-black/10 pb-3 text-sm font-bold text-black/80 uppercase"
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>

      <div className="border-t border-black/10 bg-white py-2">
        <div className="ticker-wrap">
          <div className="ticker-track">
            <span className="ticker-item">{tickerText}</span>
            <span className="ticker-item" aria-hidden="true">
              {tickerText}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-wrap {
          width: 100%;
          overflow: hidden;
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: tickerMove 20s linear infinite;
        }

        .ticker-item {
          display: inline-block;
          white-space: nowrap;
          padding-right: 3rem;
          font-size: 1.05rem;
          font-weight: 800;
          color: #d90b0b;
        }

        @keyframes tickerMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .ticker-item {
            font-size: 0.92rem;
            padding-right: 2rem;
          }

          .ticker-track {
            animation-duration: 16s;
          }
        }
      `}</style>
    </div>
  );
};
