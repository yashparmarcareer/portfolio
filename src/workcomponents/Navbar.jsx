import React from 'react'

const Navbar = () => {
  return (
    <div className='h-14 flex flex-row justify-between items-center'>
        <div>
          <h1 className='font-newsreader mx-6 text-2xl font-light'>Design Portfolio</h1>
        </div>
        <div className='flex gap-40 '>
          <span className='font-newsreader hover:text-[#9A3C70] border-b-blue-400'>About</span>
          <span className='font-newsreader'>Work</span>
          <span className='font-newsreader'>Creations</span>
        </div>
        <div>
          <button className='w-[128px] h-[44px] rounded-4xl font-jakarta bg-[#F285BD] px-3 py-1 mx-6'>
            <p className='font-jakarta font-bold text-[14px] tracking-[1.4px] text-[#70194E]'>RESUME</p>
          </button>

        </div>
      </div>
  )
}

export default Navbar
