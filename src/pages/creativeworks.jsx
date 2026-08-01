import React from 'react'
import Navbar from "../homecomponents/Navbar"
import CW from '../creative_workscomponents/CW'
import FestiveReflection from "../creative_workscomponents/FestiveReflection";
import Bits from '../creative_workscomponents/Bits';
import Footer from '../workcomponents/Footer'
const CreativeWorks = () => {
  return (
    <div className='bg-[#FBF9F4]'>
      <Navbar />
      <CW/>
     <FestiveReflection/>
     <Bits/>
     <Footer/>
    </div>
  )
}

export default CreativeWorks