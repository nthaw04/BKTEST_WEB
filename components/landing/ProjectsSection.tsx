import Image from "next/image";

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

export const ProjectsSection = () => {
  return (
    <section
      id="du-an"
      className="border-b border-black/10 bg-zinc-50 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
          {PROJECT_EYEBROW}
        </p>
        <h2 className="font-serif text-3xl leading-tight font-black tracking-tight text-black sm:text-4xl lg:text-5xl">
          {PROJECT_TITLE}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_ITEMS.map((project, index) => (
            <article
              key={`${project.name}-${project.year}`}
              className="group overflow-hidden border border-black/10 bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={560}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Dự án 0{index + 1}
                </p>
                <h3 className="mt-2 text-lg leading-snug font-bold text-black">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-[#f59e0b]">
                  Năm {project.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
