import React from "react";
import { ArrowRight } from "lucide-react";

const Dhara = () => {
  return (
    <section className="w-full flex justify-center px-6 py-24 ">
      <div className="w-full max-w-[1120px]">

        {/* Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#9A3C70] -rotate-1">
            <p className="uppercase tracking-[2px] text-white text-sm font-semibold font-jakarta">
              Interaction Design
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-12 items-center">

          {/* Left Side */}
          <div className="col-span-7">
            <div className="bg-[#ECE7E1] rounded-[42px] p-6">

              {/* Image Placeholder */}
              <div className="w-full h-[330px] rounded-[28px] bg-[#D9D4CD] overflow-hidden">
                {/* Put image here */}
                <img src="drone.png" alt="" className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="mt-8">
                <h2 className="font-newsreader italic text-[52px] leading-none text-[#1B1C19]">
                  Dhara
                </h2>

                <p className="mt-5 max-w-[520px] text-[16px] leading-[30px] text-[#5B5350] font-jakarta">
                  Designed a Human-Machine Interface (HMI) that enables Indian
                  farmers to easily operate agricultural drones for crop
                  spraying.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-5 flex flex-col items-start">

            {/* Card */}
            <div className="w-full bg-[#EAE8E3] rounded-[42px] p-10 relative rotate-1">

              {/* Small pink tape */}
              {/* Pin */}
              <img
                src="pin.png"
                alt="pin"
                className="absolute -top-4 -right-3 w-8 w-fit "
              />

              <p className="uppercase text-[12px] tracking-[1.5px] text-[#9A3C70] font-bold font-jakarta">
                Key Focus
              </p>

              {/* Points */}
              <div className="mt-7 flex flex-col gap-5">

                {[
                  "User Research",
                  "HMI Prototype",
                  "User Testing",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-[#2B2A28]"
                  >
                    <div className="w-[7px] h-[7px] rounded-full border border-[#9A3C70]" />
                    <p className="font-jakarta text-[16px]">{item}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <p className="mt-14 text-[15px] italic leading-[28px] text-[#6C6662] font-newsreader">
                “Making every screen feel natural, guided, and effortless”
              </p>
            </div>

            {/* Button */}
            <button className="group flex items-center gap-4 mt-8">
              <a
                href="https://www.behance.net/gallery/249199641/Dhara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-11 h-11 rounded-full border border-[#9A3C70] flex items-center justify-center group-hover:bg-[#9A3C70] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-[#9A3C70] group-hover:text-white transition-all duration-300" />
                </div>
              </a>
              <p className="tracking-[2px] text-[#70194E] text-[18px] font-bold font-jakarta">
                KNOW MORE
              </p>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Dhara;