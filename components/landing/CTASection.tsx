import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="border-b border-black/10 bg-black px-6 py-20 text-white lg:px-10 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
            Bắt đầu dự án mới
          </p>
          <h2 className="font-serif text-4xl leading-tight font-black tracking-tight sm:text-5xl lg:text-6xl">
            Đồng hành cùng chúng tôi
          </h2>
        </div>

        <Button
          asChild
          className="h-12 rounded-none bg-[#f59e0b] px-8 text-sm font-semibold tracking-[0.08em] text-black uppercase transition-colors hover:bg-[#ffd089]"
        >
          <a href="#lien-he">Liên hệ tư vấn ngay</a>
        </Button>
      </div>
    </section>
  );
};
