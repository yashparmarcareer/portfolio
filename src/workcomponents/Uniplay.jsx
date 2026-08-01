import React from "react";
import { ArrowRight } from "lucide-react";
const UniPlay = () => {
  return (
    <section className="w-full flex justify-center px-6 py-24 ">
      <div className="w-full max-w-[1120px]">

        {/* Main Layout */}
        <div className="grid grid-cols-12 gap-10 items-center">

          {/* Left Side */}
          <div className="col-span-5 flex flex-col items-start">

            {/* Card */}
            <div className="w-full bg-[#EAE8E3] rounded-[42px] p-10 relative -rotate-1">

              {/* Pin */}
              <img
                src="pin.png"
                alt="pin"
                className="absolute -top-4 -right-2 w-8  w-fit"
              />

              {/* Heading */}
              <p className="uppercase text-[12px] tracking-[1.5px] text-[#9A3C70] font-bold font-jakarta">
                Key Focus
              </p>

              {/* Points */}
              <div className="mt-7 flex flex-col gap-5">

                {[
                  "Micro-interactions",
                  "Haptic Feedback Design",
                  "Physical Computing",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="w-[7px] h-[7px] rounded-full border border-[#9A3C70]" />

                    <p className="font-jakarta text-[16px] text-[#2B2A28]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <p className="mt-14 text-[15px] italic leading-[28px] text-[#6C6662] font-newsreader">
                “Creating intuitive, playful interactions”
              </p>
            </div>

            {/* Know More */}
            <button className="group flex items-center gap-4 mt-8">

             <a
  href=" https://www.behance.net/gallery/222052163/UNI-PLAY"
  target="_blank"
  rel="noopener noreferrer"
  className="group"
>
  <div className="w-11 h-11 rounded-full border border-[#9A3C70] flex items-center justify-center transition-all duration-300 group-hover:bg-[#9A3C70]">
    <ArrowRight className="w-4 h-4 text-[#9A3C70] group-hover:text-white transition-all duration-300" />
  </div>
</a>

              <p className="tracking-[2px] text-[#70194E] text-[18px] font-bold font-jakarta uppercase">
                Know More
              </p>
            </button>
          </div>

          {/* Right Side */}
          <div className="col-span-7 relative">

            <div className="bg-[#ECE7E1] rounded-[42px] p-6 relative">

              {/* Tape */}
              <div className="absolute -top-3 left-1/2  -translate-x-1/2 w-16 h-4 bg-[#E7A8C5] rounded-sm " />

              {/* Images */}
              <div className="grid grid-cols-2 gap-4">

                {/* Image 1 */}
                <div className="h-[260px] rounded-[28px] bg-[#D8D2CB] overflow-hidden">
                  {/* Put image here */}
                  <img src="App Mockup 1.png" alt="" className="w-full h-full object-cover" />
                </div>

                {/* Image 2 */}
                <div className="h-[260px] rounded-[28px] bg-[#D8D2CB] overflow-hidden">
                  {/* Put image here */}
                  <img src="App Mockup 2.png" alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-8">

                <h2 className="font-newsreader italic text-[52px] leading-none text-[#1B1C19]">
                  Uni-Play
                </h2>

                <p className="mt-5 max-w-[500px] text-[16px] leading-[30px] text-[#5B5350] font-jakarta">
                  A solo-play interactive game inspired by musical chairs,
                  designed for kids without siblings or nearby friends.
                </p>
              </div>
            </div>

            {/* Bottom Label */}
            <div className="absolute -bottom-30 right-0 ">

              <div className="px-6 py-2 rounded-full bg-[#9A3C70] -rotate-1">

                <p className="uppercase tracking-[2px] text-white text-sm font-semibold font-jakarta   ">
                  Product Design
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default UniPlay;