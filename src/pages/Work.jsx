import React from 'react'
import Navbar from "../homecomponents/Navbar"
import Scrapbook from '../workcomponents/Scrapbook'
import Dhara from '../workcomponents/Dhara'
import Uniplay from '../workcomponents/Uniplay'
import Contac from '../workcomponents/Contac'
import Embrace from '../workcomponents/Embrace'
import Footer from '../workcomponents/Footer'
import { useEffect } from 'react'
const Work = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='h-auto bg-[#FBF9F4] '>
      <Navbar/>
      <Scrapbook/>
      <Dhara/>
      <Uniplay/>
      <Contac/>
      <Embrace/>
      <Footer/>
    </div>
  )
}

export default Work
