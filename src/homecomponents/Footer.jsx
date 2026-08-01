import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-7 mb-10'>
      <h1 className='font-[400] text-[30px] font-libertinus  '>Shreya Agrawal </h1>
      <div className='flex flex-row gap-12'>
       <a
  href="shreya.u22159@cept.ac.in"
  className="font-[400] text-[14px] tracking-[1.4px] text-[#71717A] underline"
>
  EMAIL
</a>

<a
  href="https://www.linkedin.com/in/your-profile"
  target="_blank"
  rel="noopener noreferrer"
  className="font-[400] text-[14px] tracking-[1.4px] text-[#71717A] underline"
>
  LINKEDIN
</a>

<a
  href="https://www.youtube.com/@your-channel"
  target="_blank"
  rel="noopener noreferrer"
  className="font-[400] text-[14px] tracking-[1.4px] text-[#71717A] underline"
>
  YOUTUBE
</a>

<a
  href="https://www.behance.net/your-profile"
  target="_blank"
  rel="noopener noreferrer"
  className="font-[400] text-[14px] tracking-[1.4px] text-[#71717A] underline"
>
  BEHANCE
</a>
      </div>
      <h2 className='font-jakarta font-[400] text-[14px] tracking-[1.4px] text-[#BE185D]'>© 2026 DESIGN PORTFOLIO. SHREYA AGRAWAL.</h2>
    </div>
  )
}

export default Footer
