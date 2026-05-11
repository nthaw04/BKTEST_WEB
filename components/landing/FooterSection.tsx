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
  "text-sm font-semibold uppercase tracking-[0.14em] text-[#1B1F6E]";
const sectionLinkClass =
  "text-xs leading-tight tracking-tight text-black transition-colors hover:text-[#1B1F6E] sm:text-sm";

export const FooterSection = () => {
  const logoText = "LAS-XD 58.017";
  const companyName = "Trung tâm nghiên cứu thử nghiệm Bách Khoa";
  const companyDescription =
    "Phòng thí nghiệm Vật liệu và Kiểm định công trình.";
  const phone = "0909 906 69";
  const email = "polytestvn@yahoo.com";
  const address = "19A Đường TX39, Khu phố 3, Phường Thới An, TP. Hồ Chí Minh";
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
    "MST 0304728295",
    "LAS-XD 58.017",
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
        <div className="space-y-4 md:col-span-2 xl:col-span-1">
          <div className="flex items-start gap-4">
            <Image
              src="/logo.png"
              alt={companyName}
              width={100}
              height={100}
              className="h-20 w-20 object-contain object-top sm:h-20 sm:w-20"
            />

            <div>
              <h3 className="text-base leading-none font-semibold tracking-none text-black sm:text-xl">
                {companyName}
              </h3>
              <p className="mt-2 text-sm leading-none font-light tracking-tight text-zinc-500 sm:text-sm">
                {logoText}
              </p>
            </div>
          </div>

          {/* <p className="max-w-xl text-xs leading-6 tracking-tight text-zinc-800 sm:text-sm sm:leading-6">
            {companyDescription}
          </p> */}

          <div className="space-y-4 text-xs leading-6 tracking-tight text-black sm:text-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8e9f5] text-[#1B1F6E]">
                <MapPin size={15} strokeWidth={2.2} />
              </span>
              <p className="max-w-md">{address}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8e9f5] text-[#1B1F6E]">
                <Phone size={15} strokeWidth={2.2} />
              </span>
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="transition-colors hover:text-[#1B1F6E]"
              >
                {phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8e9f5] text-[#1B1F6E]">
                <Mail size={15} strokeWidth={2.2} />
              </span>
              <a
                href={`mailto:${email}`}
                className="break-all transition-colors hover:text-[#1B1F6E]"
              >
                {email}
              </a>
            </div>
          </div>

          {/* <div className="flex items-center gap-3">
            {socialItems.map(({ label, icon: Icon }) => (
              <div
                key={label}
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-[#1B1F6E] hover:text-[#1B1F6E]"
              >
                <Icon size={16} strokeWidth={2} />
              </div>
            ))}
          </div> */}
        </div>

        <div className="flex flex-col gap-8">
          <div className="min-h-36">
            <p className={sectionLabelClass}>Về chúng tôi</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0263509592!2d106.67991149999999!3d10.885600199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7d252be7681%3A0x940fabfaa4d4ec0!2zMTkgVGjhuqFuaCBYdcOibiAzOSwgVGjhu5tpIEFuLCBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1778479364292!5m2!1svi!2s"
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
