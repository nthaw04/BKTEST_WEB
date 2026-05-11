"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim",
        {
          autoAlpha: 0,
          y: 24,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.14,
          delay: 0.2,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-80 overflow-hidden border-b border-black/10 sm:h-105 lg:h-117.5"
    >
      <Image
        src="/images/du_an/tieu-bieu.jpg"
        alt="Dự án hạ tầng giao thông"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-end justify-center px-4 pb-6 sm:px-6 sm:pb-7 lg:px-10 lg:pb-8">
        <div className="hero-anim w-full max-w-4xl bg-[#1B1F6E]/85 py-4 px-2 text-center shadow-[0_14px_35px_rgba(0,0,0,0.22)] sm:py-5 sm:px-2 lg:max-w-3xl">
          <h1 className="hero-anim text-balance font-serif text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">
            Khảo sát địa chất, địa hình, thiết kế, tư vấn, thí nghiệm kiểm định
          </h1>

          {/* <div className="hero-anim mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {["Thiết kế kiến trúc", "Thi công xây dựng", "Thi công M&E"].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex min-h-10 items-center justify-center bg-[#1B1F6E] px-4 text-sm font-semibold text-white sm:min-w-44 sm:text-base"
                >
                  {item}
                </span>
              ),
            )}
          </div> */}

          {/* <p className="hero-anim mt-2.5 font-serif text-xl italic text-white/95 sm:text-2xl">
            Làm việc với cả tấm lòng
          </p> */}
        </div>
      </div>
    </section>
  );
};
