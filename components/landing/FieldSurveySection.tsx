"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const VISIBLE_SLIDES = 3;
const FIELD_SURVEY_EYEBROW = "Năng lực hiện trường";
const FIELD_SURVEY_TITLE = "KHẢO SÁT - THÍ NGHIỆM";
const FIELD_SURVEY_ITEMS = [
  {
    image: "/images/cong_trinh/ct_1.jpg",
    title: "Khảo sát hiện trường 01",
  },
  {
    image: "/images/cong_trinh/ct_2.jpg",
    title: "Khảo sát hiện trường 02",
  },
  {
    image: "/images/cong_trinh/ct_3.jpg",
    title: "Khảo sát hiện trường 03",
  },
  {
    image: "/images/cong_trinh/ct_4.jpg",
    title: "Khảo sát hiện trường 04",
  },
  {
    image: "/images/cong_trinh/ct_5.jpg",
    title: "Khảo sát hiện trường 05",
  },
  {
    image: "/images/cong_trinh/ct_6.jpg",
    title: "Khảo sát hiện trường 06",
  },
  {
    image: "/images/cong_trinh/1.jpg",
    title: "Khảo sát hiện trường 07",
  },
  {
    image: "/images/cong_trinh/2.jpg",
    title: "Khảo sát hiện trường 08",
  },
  {
    image: "/images/cong_trinh/3.jpg",
    title: "Khảo sát hiện trường 09",
  },
  {
    image: "/images/cong_trinh/4.jpg",
    title: "Khảo sát hiện trường 10",
  },
  {
    image: "/images/cong_trinh/5.jpg",
    title: "Khảo sát hiện trường 11",
  },
] as const;

export const FieldSurveySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  const items = FIELD_SURVEY_ITEMS;

  const loopItems = useMemo(
    () => [...items, ...items.slice(0, VISIBLE_SLIDES)],
    [items],
  );

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
      setEnableTransition(true);
    }, 2800);

    return () => clearInterval(sliderInterval);
  }, []);

  useEffect(() => {
    if (activeIndex !== items.length) return;

    const resetTimer = setTimeout(() => {
      setEnableTransition(false);
      setActiveIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }, 700);

    return () => clearTimeout(resetTimer);
  }, [activeIndex, items.length]);

  return (
    <section
      id="khao-sat-hien-truong"
      className="border-b border-black/10 bg-zinc-50 px-6 py-4 lg:px-10 lg:py-10"
    >
      <div className="mx-auto w-full max-w-7xl overflow-hidden">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
          {FIELD_SURVEY_EYEBROW}
        </p>
        <h2 className="font-serif text-4xl leading-tight font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
          {FIELD_SURVEY_TITLE}
        </h2>

        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${activeIndex * (100 / VISIBLE_SLIDES)}%)`,
              transition: enableTransition ? "transform 700ms ease" : "none",
            }}
          >
            {loopItems.map((item, index) => (
              <article
                key={`${item.image}-${index}`}
                className="w-full flex-none px-2 md:w-1/2 lg:w-1/3"
              >
                <div className="group overflow-hidden border border-black/10 bg-white">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={840}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-72"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="p-4 sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f59e0b]">
                      CÔNG TÁC KHẢO SÁT
                    </p>
                    <h3 className="mt-2 text-base font-bold text-black sm:text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
