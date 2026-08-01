import React from 'react'

const Ipr = () => {
  return (
    <div className='flex flex-row justify-center gap-8 mt-10  '>
      <a href="ipr.pdf" target='_blank'>
      <div className='w-[357.33px] h-[357.33px] bg-[#FEC4DE] rounded-[48px] flex flex-col justify-center items-center '>
        <h2 className='text-[60px] text-[#7B4E63] italic font-newsreader'>IPR</h2>
        <p className='text-[16px] font-[400] text-[#7B4E63] text-center font-jakarta leading-[24px]'>INTELLECTUAL PROPERTY <br /> RIGHT HOLDER</p>
      </div>
      </a>
      <div className=' w-[738.67px] h-[357.33px] bg-[#FFFFFF] px-10 rounded-[48px]  flex flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <h1 className='font-newsreader text-[24px] italic font-[300]'>The philosphy</h1>
          <p className='font-jakarta font-[400] text-[16px] leading-[24px]'>Design is more than aesthetic—it's a deliberate act of <br />
            curation that breathes soul into digital and physical products</p>
        </div>
        <img className='w-fit ' src="Container-2.png" alt="" />
      </div>
    </div>
  )
}

export default Ipr
