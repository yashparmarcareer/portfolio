import React from 'react'

const Face = () => {
    return (
        <div className='flex flex-row justify-center gap-8 mt-20'>
            <div className='flex flex-col gap-2'>
                <img className='w-fit ' src="Music Player Widget.png" alt="" />
                <div className="w-[284px] h-[272px] rounded-[48px] bg-[#FEC4DE4D] flex flex-col justify-center px-8">
                    <h2 className="text-[24px] font-newsreader italic font-[300] mb-8">
                        Contact Me
                    </h2>

                    <a
                        href="mailto:shreya.u22159@cept.ac.in"
                        className="flex items-center gap-3 mb-5 text-[#7B4E63] hover:text-[#F285BD] transition-colors duration-300"
                    >
                        <img src="EMAIL.png" alt="Email" />
                        <span className="font-jakarta text-[14px]">EMAIL</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/shreya-agrawal-b855a6341/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 mb-5 text-[#7B4E63] hover:text-[#F285BD] transition-colors duration-300"
                    >
                        <img src="LINKEDIN.png" alt="LinkedIn" />
                        <span className="font-jakarta text-[14px]">LINKEDIN</span>
                    </a>

                    <a
                        href="https://www.behance.net/shreyaagrawal33"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[#7B4E63] hover:text-[#F285BD] transition-colors duration-300"
                    >
                        <img src="BEHANCE.png" alt="Behance" />
                        <span className="font-jakarta text-[14px]">BEHANCE</span>
                    </a>
                </div>
            </div>
            {/* 2nd div which is face photo */}

            <div>
                <img className='w-fit  ' src="SHREYA_PHOTO.png" alt="" />
            </div>
            {/* 3rd div content div  */}
            <div className='w-[244px] h-[576px]  flex flex-col gap-4 '>
                <div className='leading-1.0'>
                    <h2 className='font-newsreader text-[60px] italic font-[300] leading-[100%]'>Curating <br /></h2>
                    <h2 className='text-[60px] leading-[100%] italic text-[#9A3C70]  '>Soulful</h2>
                    <h2 className='text-[60px] leading-[100%] italic text-[#9A3C70] '>Stories.</h2>
                </div>
                <p className='font-jakarta leading-[29.25px]'>I believe every pixel should have a purpose and every layout should tell a story.
                </p>
                <p className='font-jakarta leading-[29.25px]'>For me, what matters most is understanding the core of an idea and transforming it into an experience that feels worthwhile for others</p>
                <span className='font-jakarta text-[12px] tracking-[1.2px] mt-10 radius-[2px] w-[143.94px] h-[24px] flex justify-center items-center font-[400] leading-[12px] bg-[#c2baa7]'>CURRENT MOOD</span>
                <div className='w-auto flex  gap-3 mt-1'> <img className='w-fit' src="cup.png" alt="" /> <span className='font-newsreader [300] italic text-[20px] leading-[28px ] text-[#9A3C70] '>Third cup of latte...</span>
                </div>
            </div>
        </div>
    )
}

export default Face
