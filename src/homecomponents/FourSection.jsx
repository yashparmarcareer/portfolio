import React from 'react'

const FourSection = () => {
  return (
    <div className='flex justify-center items-center gap-20 mt-8 '>
      <div className="w-[232px] h-[637px]">

        {/* Heading */}
        <div className="relative inline-block mb-10">
          <h1 className="relative z-10 font-newsreader font-[300] italic text-[36px] leading-[40px] text-[#1B1C19]">
            Experience
          </h1>

          <img
            src="Overlay.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 top-6 z-0 pointer-events-none"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-jakarta font-[400] text-[10px] tracking-[2px] leading-[15px] text-[#857279]">
            2022 - PRESENT
          </span>

          <h2 className="font-jakarta font-bold text-[18px] leading-[28px] text-[#1B1C19]">
            College Studios
          </h2>

          <div className='flex flex-col gap-4 mt-2  '>
            <div>
              <p className='font-jakarta font-[400]  text-[10px] tracking-[2px] text-[#857279] whitespace-nowrap mt-7 '>COLLABORATIVE STUDIO WITH</p>
              <div className='flex flex-col gap-4 h-auto'>
                <p className="font-jakarta font-[400] text-[14px] leading-5">
                  <span className="font-[600]">
                    Zeux -
                  </span>{" "}
                  Designing for Digital Futures
                </p>
                <p className="font-jakarta font-[400] text-[14px] leading-5">
                  <span className="font-[600]">
                    Foley Design -
                  </span>{" "}
                  Secret to Sculpting Products
                </p>

              </div>
            </div>
            <p className='text-[14px] font-[400] leading-[20px] font-jakarta'>Design for Phygital Cultures</p>
            <p className='text-[14px] font-[400] leading-[20px] font-jakarta'>Humanizing Tech Experiences</p>
            <p className='text-[14px] font-[400] leading-[20px] font-jakarta'>New Product Development in Sustainable Practice</p>
            <p className='text-[14px] font-[400] leading-[20px] font-jakarta'>Elements  of Form & Space</p>
          </div>
        </div>

        <div className='mt-7 '>
          <span className='font-jakarta font-[400] text-[10px] tracking-[2px] leading-[15px]'>2024-2026</span>
          <h2 className='font-[700] text-[18px] leading-[28px] font-jakarta text-[#1B1C19]'>internships</h2>
          <div className='flex flex-col gap-4'>
            <p className="font-jakarta font-semibold text-[14px] leading-[20px]">
              IDC IIT Bombay{" "}
              <span className="font-normal text-[14px] leading-[20px]">
                - Interaction designer under Mr. Anirudha Joshi

              </span>
            </p>
            <p className="font-jakarta font-semibold text-[14px] leading-[20px]">
              361 Degree Marketing{" "}
              <span className="font-normal">
                - UI/UX and graphic designer
              </span>
            </p>
            <p className="font-jakarta font-semibold text-[14px] leading-[20px]">
              Xfinite{" "}
              <span className="font-normal">
                - Communication designer
              </span>
            </p>
            <p className="font-jakarta font-semibold text-[14px] leading-[20px]">
              Rathin Goghari Architects{" "}
              <span className="font-normal text-[14px] leading-[20px]">
                - Space and graphic designer
              </span>
            </p>



          </div>
        </div>
      </div>




      {/* EDUCATION DIV */}
      <div className="w-[232px] h-[637px]">

        {/* Heading */}
        <div className="relative inline-block mb-10">
          <h1 className="relative z-10 font-newsreader font-[300] italic text-[36px] leading-[40px] text-[#1B1C19]">
            Education
          </h1>

          <img
            src="Overlay.png"
            alt=""
            className="absolute z-0 left-1/2 -translate-x-1/2 top-6 w-fit pointer-events-none"
          />
        </div>

        {/* School Details */}
        <div className="flex flex-col gap-4 mt-2">
          <p className="font-newsreader italic font-[300] text-[14px] leading-[20px] text-[#534249]">
            10th - Podar International School, Powai, Mumbai
          </p>

          <p className="font-newsreader italic font-[300] text-[14px] leading-[20px] text-[#534249]">
            12th - India International School, Mansarovar, Jaipur
          </p>
        </div>

        {/* Ongoing */}
        <div className="mt-7">
          <h2 className="font-jakarta text-[18px] font-bold text-[#1B1C19]">
            Ongoing
          </h2>

          <p className="font-newsreader italic font-[300] text-[14px] leading-[20px] text-[#1B1C19]">
            B.Des, CEPT University
            <br />
            Graduation Year: 2027
          </p>
        </div>

        {/* Languages */}
        <div className="mt-10">
          <h2 className="font-newsreader italic font-[300] text-[30px] leading-[36px] text-[#1B1C19] mb-4">
            Languages
          </h2>

          <div className="flex flex-col gap-2">
            <span className="w-fit rounded-l bg-[#F0EEE9] px-1 py-1 font-jakarta text-[10px] tracking-[1px] text-[#1B1C19]">
              ENGLISH (FLUENT)
            </span>

            <span className="w-fit rounded-l bg-[#F0EEE9] px-1 py-1 font-jakarta text-[10px] tracking-[1px] text-[#1B1C19]">
              HINDI (NATIVE)
            </span>
          </div>
        </div>

      </div>

      {/* Software div */}
      <div className="w-[232px] h-[637px]">

        {/* Heading */}
        <div className="relative inline-block mb-10">
          <h1 className="relative z-10 font-newsreader font-[300] italic text-[36px] leading-[40px] text-[#1B1C19]">
            Software
          </h1>

          <img
            src="Overlay.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 top-6 z-0 pointer-events-none"
          />
        </div>

        <div className="flex flex-col">

          <div className="flex flex-col gap-4">
            <p>
              <span className="inline-block w-[8px] h-[8px] bg-[#9A3C70] rounded-full mr-2"></span>
              Adobe Creative Cloud
            </p>

            <p>
              <span className="inline-block w-[8px] h-[8px] bg-[#9A3C70] rounded-full mr-2"></span>
              FIGMA & PROCREATE
            </p>

            <p>
              <span className="inline-block w-[8px] h-[8px] bg-[#9A3C70] rounded-full mr-2"></span>
              RHINO 3D & KEYSHOT
            </p>

            <p>
              <span className="inline-block w-[8px] h-[8px] bg-[#9A3C70] rounded-full mr-2"></span>
              ARDUINO & PROCESSING
            </p>
          </div>

          <div className="w-[231px] h-[123px] mt-10 overflow-hidden rounded-xl">
            <img
              src="ps.png"
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="font-newsreader font-[300] italic text-[24px] leading-[32px] text-[#9A3C70] mt-10">
            Analog
          </h2>

          <p className="font-jakarta font-[200] italic text-[14px] leading-[24px] text-[#1B1C19]">
            Ideation, Sketching, User Research
            <br />
            Form Development, Prototyping
          </p>
        </div>

      </div>
    <div className="w-[232px] h-[637px]">

  {/* Heading */}
  <div className="relative inline-block mb-10">
    <h1 className="relative z-10 font-newsreader font-[300] italic text-[36px] leading-[40px] text-[#1B1C19]">
      Achievements
    </h1>

    <img
      src="Overlay.png"
      alt=""
      className="absolute left-1/2 -translate-x-1/2 top-6 z-0 pointer-events-none"
    />
  </div>

  <div className="w-full flex justify-center items-center">
    <img
      src="Background+Border.png"
      alt="Achievements"
      className="w-fit"
    />
  </div>

</div>

    </div>
  )
}

export default FourSection
