import React from 'react'

const CW = () => {
  return (
    <section className="w-full  flex flex-col items-center justify-center py-24">
      
      {/* Small Heading */}
      <p className="uppercase tracking-[2.8px] font-jakarta font-[600] font-semibold  text-[#F285BD] text-[20px] mb-2">
        Miscellaneous
      </p>

      {/* Main Heading */}
      <div className="relative">
        <h1 className="font-newsreader">
          <span className="text-[#1B1C19] font-[300] italic text-[96px] font-newsreader ">Creative </span>
          <span className="text-[#A94E83] font-[500] italic text-[96px] ">Works</span>
        </h1>

        {/* Underline */}
        <img className='relative bottom-8' src="CW_line.png" alt="" />
      </div>

      {/* Description */}
      <p className="max-w-[650px] font-newsreader text-center font-[500] text-[16px] text-[#534249] mt-4 text-base leading-relaxed">
        A curated collection of various creative projects spanning
        installation, experience design, system thinking, and
        international visit.
      </p>

    </section>
  )
}

export default CW