import React from 'react'

const Scrapbook = () => {
  return (
    <div className=''>
      
      <div className='flex flex-col justify-center items-center leading-25 mt-20 '>
        <h2 className='font-newsreader font-[300] italic text-[96px] tracking-[-4.8px]   '>Design</h2>
        <h1 className='font-newsreader font-[500] italic text-[96px]  text-[#9A3C70]   ' >Scrapbook.</h1>

        <img className=' w-fit relative left-5 ' src="blueline.png" alt="" />
      </div>
      <div className='flex flex-col justify-between items-center gap-5 mt-10'>
      <div className='max-w-[620px] h-auto text-center  flex justify-center items-center '>
        <p className='font-jakarta text-[16px] leading-[28px] font-500'>Exploring the intersection of digital craft and physical emotion, my projects bring together interfaces and tangible products, shaping experiences that feel intuitive, human, and deeply connected across both digital and real world touch points.</p>
        
      </div>
      <img className='w-fit ' src="Decorative Star.png" alt="" />
      </div>
    </div>
  )
}

export default Scrapbook
