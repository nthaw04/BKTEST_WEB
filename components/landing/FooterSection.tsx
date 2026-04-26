import Image from "next/image";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

const sectionLabelClass =
  "text-[10px] font-semibold uppercase tracking-[0.14em] text-[#f59e0b]";
const sectionLinkClass =
  "text-xs leading-tight tracking-tight text-black transition-colors hover:text-[#f59e0b] sm:text-sm";

export const FooterSection = () => {
  const logoText = "Đông Tây";
  const companyName =
    "CÔNG TY TNHH KHẢO SÁT NỀN MÓNG & KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY";
  const companyDescription =
    "Đơn vị thi công và phát triển công trình theo định hướng chất lượng, bền vững và hiệu quả vận hành dài hạn.";
  const phone = "0913 682 617";
  const email = "dongtayco@gmail.com";
  const address =
    "123/3 Đỗ Xuân Hợp, P.Phước Long B, Tp Thủ Đức, Tp Hồ Chí Minh";
  const workingHours = "Thứ 2 - Thứ 7: 08:00 - 11:30, 13:00 - 17:00";
  const copyright =
    "© 2026 CÔNG TY TNHH KHẢO SÁT NỀN MÓNG & KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY";

  const aboutLinks = [
    { href: "#gioi-thieu", label: "Giới thiệu" },
    { href: "#du-an", label: "Dự án" },
    { href: "#doi-tac", label: "Sơ đồ tổ chức" },
  ];

  const serviceLinks = [
    { href: "#khao-sat-hien-truong", label: "KHẢO SÁT - THÍ NGHIỆM" },
    { href: "#du-an", label: "Dự án tiêu biểu" },
  ];

  const legalItems = [
    "MST 0304826616",
    "LAS - XD 58.031",
    "TCVN ISO/IEC 17025 : 2024",
  ];

  const socialItems = [
    { label: "Facebook", icon: Facebook },
    { label: "Instagram", icon: Instagram },
    { label: "YouTube", icon: Youtube },
  ];

  return (
    <footer
      id="lien-he"
      className="border-t border-black/10 bg-white px-6 pt-12 pb-6 lg:px-10 lg:pt-14"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_1.15fr] xl:gap-10">
        <div className="space-y-6 md:col-span-2 xl:col-span-1">
          <div className="flex items-start gap-4">
            <Image
              src="/logo.png"
              alt={companyName}
              width={88}
              height={88}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />

            <div className="pt-1">
              <h3 className="text-lg leading-none font-semibold tracking-tight text-black sm:text-xl">
                {logoText}
              </h3>
              <p className="mt-1.5 text-xs leading-none font-light tracking-tight text-zinc-500 sm:text-sm">
                Khảo sát &amp; kiểm định
              </p>
            </div>
          </div>

          <p className="max-w-xl text-xs leading-6 tracking-tight text-zinc-800 sm:text-sm sm:leading-6">
            {companyDescription}
          </p>

          <div className="space-y-4 text-xs leading-6 tracking-tight text-black sm:text-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff4eb] text-[#f59e0b]">
                <MapPin size={15} strokeWidth={2.2} />
              </span>
              <p className="max-w-md">{address}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff4eb] text-[#f59e0b]">
                <Phone size={15} strokeWidth={2.2} />
              </span>
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="transition-colors hover:text-[#f59e0b]"
              >
                {phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff4eb] text-[#f59e0b]">
                <Mail size={15} strokeWidth={2.2} />
              </span>
              <a
                href={`mailto:${email}`}
                className="break-all transition-colors hover:text-[#f59e0b]"
              >
                {email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socialItems.map(({ label, icon: Icon }) => (
              <div
                key={label}
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-[#f59e0b] hover:text-[#f59e0b]"
              >
                <Icon size={16} strokeWidth={2} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="min-h-36">
            <p className={sectionLabelClass}>Về Đông Tây</p>
            <ul className="mt-5 space-y-3">
              {aboutLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={sectionLinkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={sectionLabelClass}>Pháp nhân</p>
            <ul className="mt-5 space-y-3">
              {legalItems.map((item) => (
                <li key={item} className={sectionLinkClass}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="min-h-36">
            <p className={sectionLabelClass}>Dịch vụ</p>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={sectionLinkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={sectionLabelClass}>Liên hệ</p>
            <ul className="mt-5 space-y-3">
              {[workingHours].map((item) => (
                <li
                  key={item}
                  className="max-w-xs text-xs leading-6 tracking-tight text-black sm:text-sm"
                >
                  {(() => {
                    const [label, ranges = ""] = item.split(": ");
                    const [range1 = "", range2 = ""] = ranges.split(", ");

                    return (
                      <div className="grid grid-cols-[auto_1fr] gap-x-2">
                        <span>{label}:</span>
                        <span>
                          {range1}
                          {range1 ? "," : ""}
                        </span>
                        <span aria-hidden="true" />
                        <span>{range2}</span>
                      </div>
                    );
                  })()}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-2 xl:col-span-1">
          <p className={sectionLabelClass}>Vị trí</p>
          <div className="mt-5 overflow-hidden border border-zinc-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7511481391803!2d106.7658198753198!3d10.830346358196264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527aadd069d8b%3A0xc88b4b29abaa28c!2zMTIzIMSQLiDEkOG7lyBYdcOibiBI4bujcCwgUGjGsOG7m2MgTG9uZyBCLCBQaMaw4bubYyBMb25nLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1774880265540!5m2!1sen!2s"
              className="h-56 w-full lg:h-64"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - Đông Tây"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col gap-3 border-t border-black/10 pt-4 text-[11px] font-medium tracking-tight text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{copyright}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span>Điều khoản sử dụng</span>
          <span className="hidden text-zinc-300 sm:inline">|</span>
          <span>Chính sách bảo mật</span>
        </div>
      </div>
    </footer>
  );
};
