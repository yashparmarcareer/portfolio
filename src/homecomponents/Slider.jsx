import React from 'react'

const Slider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap mt-30 ">
      <div className="flex gap-14 animate-marquee">

        {/* Repeat content twice for smooth loop */}
        <div className="flex gap-14 min-w-max   ">
          <h1 className="text-[96px] text-gray-400 italic font-newsreader">
            <span className="mx-20">·</span>INNOVATE
          </h1>

          <h1 className="text-[96px] text-gray-400 italic font-newsreader">
            <span className="mx-20">·</span>COLLABORATE
          </h1>
        </div>

        <div className="flex gap-14">
          <h1 className="text-[96px] text-gray-400 italic font-newsreader">
            <span className="mx-20">·</span>INNOVATE
          </h1>

          <h1 className="text-[96px] text-gray-400 italic font-newsreader">
            <span className="mx-20">·</span>COLLABORATE
          </h1>
        </div>

      </div>
    </div>
  )
}

export default Slider