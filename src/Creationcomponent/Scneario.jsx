// Scenario.jsx
import React from "react";

const Scenario = () => {
  return (
    <section className="w-full py-12 px-6 flex justify-center ">
      <div className="w-full max-w-[1120px]">

        {/* Heading */}
        <div className="pt-3 mb-8">
          <h2 className="font-serif italic text-[42px] text-[#1B1C19] leading-none">
            Scenario Building
          </h2>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-[1.2fr_0.9fr_0.7fr] gap-4 items-start mb-4">

          {/* Left Top Image */}
          <div className="relative overflow-hidden h-[290px]">
            <img
              src="b1.png"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#1E88E5] text-white text-[14px] font-medium px-3 py-[2px] rounded">
              
            </div>
          </div>

          {/* Middle Top Image */}
          <div className="relative overflow-hidden h-[290px]">
            <img
              src="b2.png"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#1E88E5] text-white text-[14px] font-medium px-3 py-[2px] rounded">
              
            </div>
          </div>

          {/* Right Top Image */}
          <div className="overflow-hidden h-[290px]">
            <img
              src="b3.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-[1.2fr_0.9fr_0.7fr] gap-4">

          {/* Bottom Left Image */}
          <div className="relative overflow-hidden h-[240px]">
            <img
              src="b4.png"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#1E88E5] text-white text-[14px] font-medium px-3 py-[2px] rounded">
            
            </div>
          </div>

          {/* Bottom Middle Image */}
          <div className="relative overflow-hidden h-[240px]">
            <img
              src="b5.png"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#1E88E5] text-white text-[14px] font-medium px-3 py-[2px] rounded">
              
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between h-[240px]">

            <div>
              <h3 className="font-newsreader italic text-[24px] leading-none text-[#000000] ">
                Imaginative drawing
              </h3>

              <p className="text-[14px]  text-[#534249] font-jakarta font-400 text-justify">
                Creating imagined spaces that blend
                elements of fantasy with touches of
                reality, worlds that feel both modern and
                slightly futuristic, brought to life through
                an earthy color palette.
              </p>
            </div>

            <div>
              <h3 className="font-newsreader italic text-[28px] font-300 leading-none text-[#000000] mb-2">
                Medium used:
              </h3>

              <p className="text-[14px] font-400 text-[#6B6258]">
                Final- Procreate
                <br />
                Explorations- Soft pastels
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Scenario;