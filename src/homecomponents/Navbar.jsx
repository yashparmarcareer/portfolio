import React from 'react'
import { Link } from 'react-router-dom'
import Work from '../pages/Work.jsx'
import Creation from '../pages/Creation.jsx'
const Navbar = () => {
  return (
    <div className='h-14 flex flex-row justify-between items-center'>
      <div>
        <h1 className='font-newsreader mx-6 text-2xl font-light'>Design Portfolio</h1>
      </div>
      <div className='flex gap-40 '>
        <Link to="/" className='font-newsreader hover:text-[#9A3C70] hover:border-b-2 border-[#F285BD] '>About</Link>
        {/* <span className='font-newsreader'>Work</span> */}
        <Link to="/Work" className='font-newsreader hover:text-[#9A3C70] hover:border-b-2 border-[#F285BD] '>Work</Link>

        <Link to="/creationworks" className='font-newsreader hover:text-[#9A3C70] hover:border-b-2 border-[#F285BD] '>Creation</Link>
      </div>
      <div>
        <a
          href="shreyaresume.pdf" // Path to your PDF in the public folder
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-[128px] h-[44px] rounded-4xl bg-[#F285BD] px-3 py-1 mx-6 font-jakarta font-bold text-[14px] tracking-[1.4px] text-[#70194E]"
        >
          RESUME
        </a>

      </div>
    </div>
  )
}

export default Navbar
