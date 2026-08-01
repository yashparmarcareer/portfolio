import React from 'react'

const Name = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden relative gap-3">

      {/* Subtitle */}
      <h4 className="text-xs font-jakarta tracking-[0.2em] text-[#9A3C70]">
        MULTIDISCLIPINARY DESIGNER & STORYTELEER
      </h4>

      {/* Name */}
      <h1 className="text-[96px] italic font-newsreader leading-[110%]">
        Shreya Agrawal
      </h1>

      {/* DESIGN */}
      <div className="relative inline-block">
        <h1 className="text-[128px] font-newsreader font-[400] tracking-[0.02em] leading-[100%] relative z-20">
          DESIGN
        </h1>

        <img
          className="w-[60px] absolute right-[-35px] bottom-[80px] z-10"
          src="star-circle.png"
          alt=""
        />
      </div>

      {/* PORTFOLIO */}
      <div className="relative">
        <h1 className="text-[128px] italic font-thin font-newsreader tracking-[0.02em]  text-[#9A3C70] leading-[100%]">
          PORTFOLIO
        </h1>

        <img
          className="absolute left-[50%] top-[80%]"
          src="SVG.png"
          alt=""
        />
      </div>

      {/* Bottom Image */}
      <img className="w-[550px]" src="Container.png" alt="" />

    </div>
  )
}

export default Name