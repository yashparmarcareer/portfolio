import React from "react";

const Graphic = () => {
  return (
    <div className="w-full flex justify-center items-center py-20 relative">
      
      <div className="relative flex items-center">
        
        <h1 className="font-newsreader italic font-300 text-[96px] text-[#9A3C70] leading-none">
          Graphic
        </h1>

        <h1 className="font-newsreader italic font-light text-[96px] text-[#1B1C19] leading-none ml-3 relative">
          Design

          <img
            src="/scrapbook line.png"
            alt="underline"
            className="absolute bottom-0 right-0 w-[140px]"
          />
        </h1>

      </div>
    </div>
  );
};

export default Graphic;