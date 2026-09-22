import React from "react";

const Contac = () => {
  return (
    <section className="w-full flex justify-center px-6 py-24 bg-[#FBF9F4]">
      <div className="w-full max-w-[1120px] relative">

        {/* PRODUCT DESIGN BUTTON */}
      <div className="flex justify-end mb-10">
  <div className="px-6 py-2 rounded-full bg-[#9A3C70] rotate-2">
    <p className="uppercase tracking-[2px] text-white text-sm font-semibold font-jakarta">
      Product Design
    </p>
  </div>
</div>

        {/* Background Text */}
        <h2 className="absolute left-[28%] bottom-[10%] text-[#E7C7D3] text-[64px] italic font-newsreader rotate-[-10deg] opacity-40 pointer-events-none">
          industrial
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-8 items-start">

          {/* LEFT CARD */}
          <div className="flex flex-col">

            {/* Image */}
            <div className="relative overflow-hidden p-4">
              <a
                href="https://www.behance.net/gallery/213829721/Contac"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="contac.png"
                    alt="Contact"
                    className="w-full h-[620px] object-cover rounded-[38px] cursor-pointer"
                  />
                </div>
              </a>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h2 className="font-newsreader italic text-[48px] text-[#1B1C19] leading-none">
                Contac
              </h2>

              <p className="mt-3 text-[15px] text-[#5B5350] font-jakarta">
                Sustainable & Inclusive Design
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {[
                  "BOARD GAME",
                  "VISUALLY IMPAIRED",
                  "REUSABLE",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#E7DFD8] text-[#8B7B75] text-[10px] tracking-[1px] font-semibold font-jakarta"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex flex-col relative mt-20">

            {/* Pink Star */}
            <div className="absolute -top-7 -left-4 z-20 w-14 h-14 rounded-full bg-[#E86DB2] flex items-center justify-center shadow-md">
              <span className="text-[#4D1032] text-xl">
                ★
              </span>
            </div>

            {/* Image */}
            <div className="rounded-[38px] overflow-hidden">
              <a
                href="https://www.behance.net/gallery/213584301/Tri-ssue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="overflow-hidden rounded-[38px]">
                  <img
                    src="trissure.png"
                    alt="Tri-ssue"
                    className="w-full h-[620px] object-cover rounded-[38px] cursor-pointer"
                  />
                </div>
              </a>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h2 className="font-newsreader italic text-[48px] text-[#1B1C19] leading-none">
                Tri-ssue
              </h2>

              <p className="mt-3 text-[15px] text-[#5B5350] font-jakarta">
                Form Exploration
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {[
                  "METAL SHEET",
                  "MONOLITHIC",
                  "FUNCTIONAL",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#E7DFD8] text-[#8B7B75] text-[10px] tracking-[1px] font-semibold font-jakarta"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contac;