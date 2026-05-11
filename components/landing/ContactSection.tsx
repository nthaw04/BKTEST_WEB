import { Mail, MapPin, Phone } from "lucide-react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0263509592!2d106.67991149999999!3d10.885600199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7d252be7681%3A0x940fabfaa4d4ec0!2zMTkgVGjhuqFuaCBYdcOibiAzOSwgVGjhu5tpIEFuLCBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1778479364292!5m2!1svi!2s";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "19A Đường TX39, Khu phố 3, Phường Thới An, TP. Hồ Chí Minh",
  },
  {
    icon: Phone,
    label: "0909 906 869",
    href: "tel:0909906869",
  },
  {
    icon: Mail,
    label: "polytestvn@yahoo.com",
    href: "mailto:polytestvn@yahoo.com",
  },
];

export const ContactSection = () => {
  return (
    <section className="bg-white px-6 py-6 lg:px-10 lg:py-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid overflow-hidden border border-zinc-200 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.07)] lg:grid-cols-[0.48fr_1fr]">
          <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7">
            <ul className="space-y-3 text-sm text-zinc-600">
              {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-900 text-zinc-950">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>

                  {href ? (
                    <a
                      href={href}
                      className="leading-relaxed transition-colors hover:text-[#1B1F6E]"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="leading-relaxed">{label}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="my-5 h-px bg-zinc-200" />

            <h1 className="font-serif text-2xl leading-tight font-black tracking-tight text-black sm:text-3xl">
              Liên hệ với chúng tôi
            </h1>

            <form
              action="mailto:polytestvn@yahoo.com"
              method="post"
              encType="text/plain"
              className="mt-5 space-y-3"
            >
              <input
                name="name"
                type="text"
                placeholder="Họ và tên"
                className="h-11 w-full rounded-full border border-zinc-200 px-5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-[#1B1F6E]"
              />
              <input
                name="email"
                type="email"
                placeholder="Email của bạn"
                className="h-11 w-full rounded-full border border-zinc-200 px-5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-[#1B1F6E]"
              />
              <textarea
                name="message"
                placeholder="Nội dung tin nhắn..."
                rows={4}
                className="w-full resize-none rounded-3xl border border-zinc-200 px-5 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-[#1B1F6E]"
              />
              <button
                type="submit"
                className="inline-flex h-11 min-w-36 items-center justify-center rounded-full bg-[#171720] px-6 text-sm font-bold text-white transition-colors hover:bg-[#1B1F6E]"
              >
                Gửi liên hệ
              </button>
            </form>
          </div>

          <div className="min-h-[340px] border-t border-zinc-200 lg:min-h-[430px] lg:border-t-0 lg:border-l">
            <iframe
              src={MAP_EMBED_URL}
              className="h-full min-h-[340px] w-full lg:min-h-[430px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - Trung tâm Nghiên cứu Thử nghiệm Bách Khoa"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
