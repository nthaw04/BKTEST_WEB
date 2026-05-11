"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import Image from "next/image";

const CARD_HEIGHT = 200;
const CARD_GAP = 16;
const CARD_STEP = CARD_HEIGHT + CARD_GAP;
const VIEWPORT_HEIGHT = CARD_HEIGHT * 2 + CARD_GAP;

const ABOUT_EYEBROW = "Về chúng tôi";
const ABOUT_TITLE = "Giới thiệu";
const ABOUT_PARAGRAPHS = [
  "Trung tâm Nghiên cứu Thử nghiệm Bách Khoa được thành lập theo quyết định của Hội đồng sáng lập Trung tâm và Sở Khoa học và Công nghệ TP. Hồ Chí Minh số 139/ĐK-KHCN ngày 21/08/2006 về lĩnh vực hoạt động công nghệ:",
  "Nghiên cứu, thiết kế, chế tạo thiết bị thử nghiệm xây dựng.",
  "Tư vấn, thử nghiệm, kiểm định và đánh giá chất lượng công trình. Khảo sát địa chất, địa hình, thiết kế, thẩm định hồ sơ khảo sát thiết kế, tư vấn giám sát công trình, đào tạo nâng cao nghiệp vụ, chuyên môn về các lĩnh vực đăng ký.",
  "Liên kết và hợp tác với các tổ chức trong và ngoài nước về lĩnh vực hoạt động khoa học công nghệ.",
  "Ngày 03/07/2013, Trung tâm được Sở KH&CN TP. Hồ Chí Minh cấp giấy chứng nhận đăng ký hoạt động Khoa học và Công nghệ lần 2 do chuyển địa chỉ hoạt động.",
  "Với phương châm “Trung thực, chính xác trong mọi phép thử”.",
  "Phòng thí nghiệm vật liệu – địa chất và kiểm định của Trung tâm được Bộ Xây dựng cấp quyết định số 1564/QĐ-BXD ngày 15/11/2006 và quyết định cấp lại số 1116/QĐ-BXD ngày 10/09/2008 công nhận các phép thử vật liệu – địa chất và kiểm định công trình cùng với mã số chuyên ngành LAS-XD 474.",
  "Với đội ngũ kỹ sư và cán bộ có bề dày kinh nghiệm trong khảo sát địa chất, địa hình, thiết kế, tư vấn, thí nghiệm kiểm định các dự án trọng điểm về cầu đường, thủy điện và xây dựng dân dụng… cùng với trang thiết bị hiện đại có độ chính xác cao. Hệ thống phòng thí nghiệm của Trung tâm bao gồm:",
  "Trong xu thế hội nhập hiện nay, Trung tâm cam kết không ngừng phát triển để trở thành đơn vị lớn mạnh về mọi mặt. Chúng tôi rất mong muốn được hợp tác với Quý vị trong các lĩnh vực như khoan khảo sát địa chất trên mọi địa hình. Về vật liệu, Trung tâm sẵn sàng đặt phòng thí nghiệm tại công trường nếu được yêu cầu.",
  "Trân trọng!",
] as const;

const PROJECT_EYEBROW = "Năng lực triển khai";
const PROJECT_TITLE = "Dự án tiêu biểu";
const PROJECT_ITEMS = [
  {
    name: "Cao tốc Chơn Thành - Đức Hòa",
    year: "2026",
    image: "/images/du_an/tieu-bieu.jpg",
  },
  {
    name: "Tuyến Mỹ An - Cao Lãnh",
    year: "2025",
    image: "/images/du_an/cao-lanh.jpg",
  },
  {
    name: "Cầu Sông Ông Đốc - Cà Mau",
    year: "2024",
    image: "/images/du_an/cau-song-ong-doc.png",
  },
  {
    name: "Đường trục Đông Tây TP Cà Mau",
    year: "2023",
    image: "/images/du_an/CM7.jpg",
  },
  {
    name: "Nút giao Nguyễn Khoái - TP.HCM",
    year: "2022",
    image: "/images/du_an/nguyen-khoai.jpg",
  },
  {
    name: "Tuyến Vành đai 2 - Cà Mau",
    year: "2021",
    image: "/images/du_an/tieu-bieu.jpg",
  },
] as const;

const ABOUT_HIGHLIGHTS = [
  "Trung tâm Nghiên cứu Thử nghiệm Bách Khoa",
  "139/ĐK-KHCN",
  "21/08/2006",
  "03/07/2013",
  "Trung thực, chính xác trong mọi phép thử",
  "1564/QĐ-BXD",
  "15/11/2006",
  "1116/QĐ-BXD",
  "10/09/2008",
  "LAS-XD 474",
  "19A đường TX39, KP3, P. Thạnh Xuân, Q.12, TP. HCM",
  "08. 3716 6834",
  "08. 3716 6835",
].sort((a, b) => b.length - a.length);

const renderHighlightedParagraph = (paragraph: string) => {
  const parts: Array<{ text: string; highlight: boolean }> = [];
  let cursor = 0;

  while (cursor < paragraph.length) {
    let nextIndex = -1;
    let matchedText = "";

    for (const phrase of ABOUT_HIGHLIGHTS) {
      const index = paragraph.indexOf(phrase, cursor);

      if (index === -1) continue;

      if (nextIndex === -1 || index < nextIndex) {
        nextIndex = index;
        matchedText = phrase;
      }
    }

    if (nextIndex === -1) {
      parts.push({ text: paragraph.slice(cursor), highlight: false });
      break;
    }

    if (nextIndex > cursor) {
      parts.push({
        text: paragraph.slice(cursor, nextIndex),
        highlight: false,
      });
    }

    parts.push({ text: matchedText, highlight: true });
    cursor = nextIndex + matchedText.length;
  }

  return parts.map((part, index) =>
    part.highlight ? (
      <strong
        key={`${part.text}-${index}`}
        className="font-semibold text-zinc-950"
      >
        {part.text}
      </strong>
    ) : (
      <Fragment key={`${part.text}-${index}`}>{part.text}</Fragment>
    ),
  );
};

export const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  const projectItems = PROJECT_ITEMS;

  const loopProjects = useMemo(
    () => [...projectItems, projectItems[0], projectItems[1]],
    [projectItems],
  );

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
      setEnableTransition(true);
    }, 3200);

    return () => clearInterval(sliderInterval);
  }, []);

  useEffect(() => {
    if (activeIndex !== projectItems.length) return;

    const resetTimer = setTimeout(() => {
      setEnableTransition(false);
      setActiveIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }, 750);

    return () => clearTimeout(resetTimer);
  }, [activeIndex, projectItems.length]);

  return (
    <section
      id="gioi-thieu"
      className="border-b border-black/10 bg-white px-6 py-12 lg:px-10 lg:py-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 tracking-tighter lg:grid-cols-3 lg:items-start">
        <div className="lg:col-span-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
            {ABOUT_EYEBROW}
          </p>
          <h2 className="font-serif text-4xl leading-tight font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
            {ABOUT_TITLE}
          </h2>
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-sm leading-7 font-normal tracking-tight text-zinc-600 sm:text-[15px]"
            >
              {renderHighlightedParagraph(paragraph)}
            </p>
          ))}
        </div>

        <aside id="du-an" className="lg:col-span-1">
          <div className="p-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f59e0b]">
              {PROJECT_EYEBROW}
            </p>
            <h3 className="mt-2 font-serif text-3xl leading-tight font-black tracking-tight text-black">
              {PROJECT_TITLE}
            </h3>

            <div
              className="relative mt-5 overflow-hidden"
              style={{ height: `${VIEWPORT_HEIGHT}px` }}
            >
              <div
                className="space-y-3"
                style={{
                  transform: `translateY(-${activeIndex * CARD_STEP}px)`,
                  transition: enableTransition
                    ? "transform 700ms ease"
                    : "none",
                }}
              >
                {loopProjects.map((project, index) => (
                  <article
                    key={`${project.name}-${project.year}-${index}`}
                    className="group overflow-hidden border border-black/10 bg-white"
                    style={{ height: `${CARD_HEIGHT}px` }}
                  >
                    <div className="flex h-full">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={300}
                        height={200}
                        className="h-full w-32 object-cover sm:w-40"
                      />

                      <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                          Dự án{" "}
                          {String((index % projectItems.length) + 1).padStart(
                            2,
                            "0",
                          )}
                        </p>
                        <h4 className="mt-1 wrap-break-word text-base leading-7 font-bold text-black sm:text-lg">
                          {project.name}
                        </h4>
                        <p className="text-xs font-semibold tracking-[0.12em] text-[#f59e0b]">
                          Năm {project.year}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
