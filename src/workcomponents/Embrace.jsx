import React from "react";
import { Link } from "react-router-dom";

const Embrace = () => {
  return (
    <section className="w-full flex justify-center px-6  bg-[#FBF9F4]">
      <div className="w-full max-w-[1120px]">

        {/* Heading */}
        <div className="mb-16">
          <div className="inline-flex px-6 py-2 rounded-full bg-[#9A3C70] -rotate-1">
            <p className="uppercase tracking-[2px] text-white text-sm font-semibold font-jakarta">
              Graphic Design
            </p>
          </div>
        </div>

        {/* Layout */}
        <div className="relative min-h-[760px]">

          {/* Left Poster */}
          <div className="absolute left-0 top-4 rotate-[-2deg]">

            <img
              src="b-g.png"
              alt=""
              className="w-[420px] object-contain drop-shadow-xl"
            />
          </div>

          {/* Top Small Poster */}
          <div className="absolute left-[48%] top-0 rotate-[6deg]">

            <img
              src="cartoon.png"
              alt=""
              className="w-[240px] object-contain drop-shadow-lg"
            />
          </div>

          {/* Main Painting */}
          <div className="absolute left-[38%] top-[220px] rotate-[-1deg] z-10">

            <img
              src="nature.png"
              alt=""
              className="w-[430px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Small Card */}
          <div className="absolute right-0 top-[280px] rotate-[8deg]">

            <img
              src="fish.png"
              alt=""
              className="w-[220px] object-contain drop-shadow-lg"
            />
          </div>

          {/* Pink Tape */}
          <div className="absolute left-[370px] -top-2 w-8 h-20 bg-[#EDB5CF] rotate-[-40deg] rounded-sm opacity-90" />

          {/* View Button */}
        <Link
  to="/creation"
  className="absolute left-0 bottom-0 inline-block px-12 py-3 rounded-full bg-[#F285BD] text-[15px] font-[700] font-jakarta text-[#70194E] transition-all duration-300 hover:scale-105"
>
  View
</Link>

        </div>
      </div>
    </section>
  );
};

export default Embrace;