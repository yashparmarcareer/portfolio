// Poster.jsx
import React from "react";

const Poster = () => {
  return (
    <section className="w-full px-6 py-16 flex justify-center">
      <div className="w-full max-w-[1120px]">

        {/* Heading */}
        <div className="pt-4 mb-10">
          <h2 className="font-serif italic text-[42px] leading-none text-[#1B1C19]">
            Poster
          </h2>
        </div>

        {/* Main Layout */}
        <div className="flex gap-[42px] items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col">

            {/* Main Poster */}
            <div className="w-[509px] h-[721px] overflow-hidden border border-[#D6D1C7] bg-white">
              <img
                src={"poster_1.png"}
                alt="Main Poster"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-5">
              <h3 className="font-newsreader font-300 italic text-[24px] leading-none text-[#534249]">
                Exhibition Poster
              </h3>

              <p className="mt-2 max-w-[500px] text-[14px] font-400 leading-[20px] text-[#6B675F] font-jakarta">
                The poster was sent as an invitation for an exhibition.
                Concept and graphic by me.
              </p>
            </div>
          </div>

         
<div className="flex flex-col">

  {/* Custom Layout */}
  <div className="flex gap-[18px]">

    {/* LEFT COLUMN */}
    <div className="flex flex-col gap-[18px]">

      {/* Top Small */}
      <div className="w-[241px] h-[166px] overflow-hidden border border-[#D6D1C7] bg-white">
        <img
          src={"poster_2.png"}
          alt="Poster"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle Small */}
      <div className="w-[241px] h-[160px] overflow-hidden border border-[#D6D1C7] bg-white">
        <img
          src={"poster_4.png"}
          alt="Poster"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Large */}
      <div className="w-[241px] h-[351px] overflow-hidden border border-[#D6D1C7] bg-white">
        <img
          src={"poster_5.png"}
          alt="Poster"
          className="w-full h-full object-cover"
        />
      </div>

    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col gap-[18px]">

      {/* Top Tall */}
      <div className="w-[283px] h-[351px] overflow-hidden border border-[#D6D1C7] bg-white">
        <img
          src={"poster_3.png"}
          alt="Poster"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Tall */}
      <div className="w-[283px] h-[351px] overflow-hidden border border-[#D6D1C7] bg-white">
        <img
          src={"poster_6.png"}
          alt="Poster"
          className="w-full h-full object-cover"
        />
      </div>

    </div>

  </div>

  {/* Content */}
  <div className="mt-5">
    <h3 className="font-newsreader italic text-[24px] leading-none text-[#534249] whitespace-nowrap">
      Graphic Club Member
    </h3>

    <p className="mt-2 max-w-[520px] text-[14px] leading-[20px] text-[#6B675F] font-jakarta">
      I was involved in ideating the graphics and made few drafts
      for the final posters.
    </p>
  </div>

</div>

        </div>
      </div>
    </section>
  );
};

export default Poster;