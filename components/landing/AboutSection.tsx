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
  "CÔNG TY TNHH KHẢO SÁT NỀN MÓNG VÀ KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY được thành lập theo giấy chứng nhận đăng ký doanh nghiệp số 0304826616 do Sở kế hoạch đầu tư TP Hồ Chí Minh cấp lần đầu ngày 01 tháng 02 năm 2007, đăng ký thay đổi lần thứ 2 ngày 29 tháng 03 năm 2023.",
  "Phòng thí nghiệm địa kỹ thuật đã được cấp giấy chứng nhận đủ điều kiện hoạt động thí nghiệm chuyên ngành xây dựng của Sở Xây dựng Tp HCM: Phòng thí nghiệm Địa kỹ thuật được Sở Xây Dựng cấp mã số dấu LAS - XD 58.031 theo quyết định số: 95/GCN-SXD-KT&VLXD ngày 01/11/2024). Bên cạnh đó Phòng thí nghiệm chuyên ngành xây dựng của Công ty đã xây dựng, áp dụng và được chứng nhận hệ thống quản lý phòng thí nghiệm theo các yêu cầu của tiêu chuẩn TCVN ISO/IEC 17025 : 2024.",
  "Công ty rất sẵn sàng hợp tác phát triển trong nước, ngoài nước và quốc tế với các đối tác phù hợp, đồng thời sẵn sàng chia sẻ kinh nghiệm nghề nghiệp nhằm cùng nhau phát triển trên tiêu chí: “Phát triển bền vững – Nâng cao và đảm bảo chất lượng công trình”.",
  "Trung tâm xin gửi lời cảm ơn chân thành đến các quý Chủ đầu tư, quý Ban quản lý, Đơn vị tư vấn giám sát, Nhà thầu thi công xây lắp và các đơn vị đối tác đã quan tâm, tạo điều kiện và hợp tác cùng Trung tâm. Trung tâm luôn mong muốn nhận được sự quan tâm, hợp tác và góp ý của Quý khách hàng trong thời gian tới.",
  "Trân trọng cảm ơn và kính chào!",
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
  "CÔNG TY TNHH KHẢO SÁT NỀN MÓNG VÀ KIỂM ĐỊNH XÂY DỰNG ĐÔNG TÂY",
  "0304826616",
  "01 tháng 02 năm 2007",
  "29 tháng 03 năm 2023",
  "LAS - XD 58.031",
  "95/GCN-SXD-KT&VLXD",
  "01/11/2024",
  "TCVN ISO/IEC 17025 : 2024",
  "Phát triển bền vững – Nâng cao và đảm bảo chất lượng công trình",
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
