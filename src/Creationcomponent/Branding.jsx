import React from "react";

const Branding = () => {
  return (
    <div className="w-full flex justify-center  py-20">

      <div className="w-[1124px]">

        {/* Heading */}
        <div className="flex items-center gap-5 mb-8">

          <h2 className="font-newsreader italic font-medium text-[40px] leading-none text-[#1B1C19]">
            Branding
          </h2>

          {/* <div className="flex-1 h-[1px] bg-[#E2DDD6] mt-1"></div> */}

        </div>

        {/* Main Layout */}
        <div className="flex gap-4">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">

            {/* Top Left */}
            <div className="w-[343px] h-[260px] bg-[#D9D9D9] overflow-hidden">
              <img src="s1.png" alt="" />
            </div>

            {/* Bottom Left */}
            <div className="w-[343px] h-[229px] bg-[#D9D9D9] overflow-hidden">
            <img src="s4.png" alt="" />
            </div>

          </div>
{/* MIDDLE COLUMN */}
<div className="flex flex-col gap-4">

  {/* Single Collage Image */}
  <div className="w-[462px] h-[260px] overflow-hidden">
    <img
      src="s2.png"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* Bottom Image 1 */}
  <div className="w-[462px] h-[97px] overflow-hidden">
    <img
      src="s5.png"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* Bottom Image 2 */}
  <div className="w-[462px] h-[97px] overflow-hidden mt-4">
    <img
      src="s6.png"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

</div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">

            {/* Heart */}
            <div className="w-[249px] h-[260px] bg-[#D9D9D9] overflow-hidden mb-4">
              <img src="s3.png" alt="" />
            </div>

            {/* Text */}
           <div className="w-[252px] mt-7">

  <h3 className="font-newsreader italic font-medium text-[26px] leading-[100%] text-[#1B1C19] mb-3">
    App Branding
  </h3>

  <p className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[145%] text-justify tracking-[-0.01em] text-[#5C5C5C]">
    The branding was designed to spark curiosity and encourage partners to
    use the app by highlighting its engaging features. As part of this,
    invite letters and small love notes were created, serving as a thoughtful
    first step toward strengthening their relationship.
  </p>

</div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Branding;