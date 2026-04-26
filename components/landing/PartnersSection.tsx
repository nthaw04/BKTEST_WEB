"use client";

export const PartnersSection = () => {
  const lineClass = "fill-none stroke-slate-500 stroke-2";

  const boxClass =
    "absolute z-10 flex items-center justify-center rounded-none border px-3 py-2 text-center text-[17px] leading-[1.12] font-semibold tracking-[-0.02em] shadow-sm";

  return (
    <section
      id="doi-tac"
      className="border-b border-black/10 bg-white px-6 py-4 lg:px-10 lg:py-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
          Cơ cấu vận hành
        </p>
        <h2 className="font-serif text-3xl leading-tight font-black tracking-tight text-black sm:text-4xl lg:text-5xl">
          Sơ Đồ Tổ Chức Của Công Ty
        </h2>

        <div className="mt-6 overflow-x-auto pb-2">
          <div className="mx-auto flex min-w-230 justify-center">
            <div className="relative h-135 w-255">
              <div className="absolute left-1/2 top-0 h-160 w-300 -translate-x-1/2 scale-[0.82] origin-top rounded-none border border-black/10 bg-transparent p-6">
                <svg
                  viewBox="0 0 1200 640"
                  className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                >
                  <path
                    className={lineClass}
                    d="M598 124 V148"
                    style={{ animationDelay: "0.15s" }}
                    pathLength={1}
                  />
                  <path
                    className={lineClass}
                    d="M225 148 H928"
                    style={{ animationDelay: "0.25s" }}
                    pathLength={1}
                  />

                  <path
                    className={lineClass}
                    d="M225 148 V164"
                    style={{ animationDelay: "0.35s" }}
                    pathLength={1}
                  />
                  <path
                    className={lineClass}
                    d="M219 164 L225 174 L231 164"
                    style={{ animationDelay: "0.37s" }}
                    pathLength={1}
                  />

                  <path
                    className={lineClass}
                    d="M634 148 V164"
                    style={{ animationDelay: "0.41s" }}
                    pathLength={1}
                  />
                  <path
                    className={lineClass}
                    d="M628 164 L634 174 L640 164"
                    style={{ animationDelay: "0.43s" }}
                    pathLength={1}
                  />

                  <path
                    className={lineClass}
                    d="M928 148 V164"
                    style={{ animationDelay: "0.44s" }}
                    pathLength={1}
                  />
                  <path
                    className={lineClass}
                    d="M922 164 L928 174 L934 164"
                    style={{ animationDelay: "0.46s" }}
                    pathLength={1}
                  />

                  <path
                    className={lineClass}
                    d="M225 272 V286"
                    style={{ animationDelay: "0.55s" }}
                    pathLength={1}
                  />
                  <path
                    className={lineClass}
                    d="M634 272 V286"
                    style={{ animationDelay: "0.61s" }}
                    pathLength={1}
                  />
                  <path
                    className={lineClass}
                    d="M928 272 V286"
                    style={{ animationDelay: "0.67s" }}
                    pathLength={1}
                  />

                  <path
                    className={lineClass}
                    d="M225 382 V420"
                    style={{ animationDelay: "0.9s" }}
                    pathLength={1}
                  />
                  <path
                    className={lineClass}
                    d="M634 382 V420"
                    style={{ animationDelay: "0.94s" }}
                    pathLength={1}
                  />
                  <path
                    className={lineClass}
                    d="M928 382 V420"
                    style={{ animationDelay: "0.98s" }}
                    pathLength={1}
                  />
                  <path
                    className={lineClass}
                    d="M225 420 H928"
                    style={{ animationDelay: "1.02s" }}
                    pathLength={1}
                  />
                  <path
                    className={lineClass}
                    d="M590 420 V458"
                    style={{ animationDelay: "1.08s" }}
                    pathLength={1}
                  />
                </svg>

                <div
                  className={`${boxClass} h-22 w-64 border-rose-400 bg-rose-50 text-[19px] text-rose-900`}
                  style={{
                    left: 470,
                    top: 36,
                    animation: "nodeIn 0.65s ease forwards",
                    animationDelay: "0.05s",
                  }}
                >
                  BAN GIÁM ĐỐC
                  <br />
                  TRUNG TÂM
                </div>

                <div
                  className={`${boxClass} h-24 w-60 border-indigo-400 bg-indigo-50 text-indigo-900`}
                  style={{
                    left: 105,
                    top: 176,
                    animation: "nodeIn 0.65s ease forwards",
                    animationDelay: "0.18s",
                  }}
                >
                  PHÒNG HÀNH CHÍNH
                  <br />
                  TỔNG HỢP
                </div>
                <div
                  className={`${boxClass} h-24 w-56 border-indigo-400 bg-indigo-50 text-indigo-900`}
                  style={{
                    left: 522,
                    top: 176,
                    animation: "nodeIn 0.65s ease forwards",
                    animationDelay: "0.28s",
                  }}
                >
                  PHÒNG KHẢO SÁT
                  <br />
                  ĐỊA HÌNH, ĐỊA CHẤT
                </div>
                <div
                  className={`${boxClass} h-24 w-64 border-indigo-400 bg-indigo-50 text-indigo-900`}
                  style={{
                    left: 800,
                    top: 176,
                    animation: "nodeIn 0.65s ease forwards",
                    animationDelay: "0.33s",
                  }}
                >
                  PHÒNG THÍ NGHIỆM
                  <br />
                  CHUYÊN NGÀNH XÂY DỰNG
                </div>

                <div
                  className={`${boxClass} h-24 w-60 border-emerald-400 bg-emerald-50 text-emerald-900`}
                  style={{
                    left: 105,
                    top: 286,
                    animation: "nodeIn 0.65s ease forwards",
                    animationDelay: "0.43s",
                  }}
                >
                  PHÁT HÀNH, NHÂN BẢN
                  <br />
                  BÀN GIAO HỒ SƠ
                </div>
                <div
                  className={`${boxClass} h-24 w-56 border-emerald-400 bg-emerald-50 text-emerald-900`}
                  style={{
                    left: 522,
                    top: 286,
                    animation: "nodeIn 0.65s ease forwards",
                    animationDelay: "0.55s",
                  }}
                >
                  KHẢO SÁT, THÍ NGHIỆM
                  <br />
                  HIỆN TRƯỜNG
                </div>
                <div
                  className={`${boxClass} h-24 w-60 border-emerald-400 bg-emerald-50 text-emerald-900`}
                  style={{
                    left: 808,
                    top: 286,
                    animation: "nodeIn 0.65s ease forwards",
                    animationDelay: "0.86s",
                  }}
                >
                  THÍ NGHIỆM
                  <br />
                  TRONG PHÒNG
                </div>

                <div
                  className={`${boxClass} h-22 w-60 border-amber-500 bg-amber-50 text-amber-900`}
                  style={{
                    left: 470,
                    top: 458,
                    animation: "nodeIn 0.65s ease forwards",
                    animationDelay: "1.14s",
                  }}
                >
                  TỔNG HỢP, XỬ LÝ,
                  <br />
                  PHÁT HÀNH KẾT QUẢ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        svg path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawLine 0.9s ease forwards;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes nodeIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};
