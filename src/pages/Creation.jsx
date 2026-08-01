import React from 'react'
import Navbar from "../homecomponents/Navbar"
import Scrapbook from '../workcomponents/Scrapbook'
import Graphic from '../Creationcomponent/Graphic'
import Branding from '../Creationcomponent/Branding'
import Poster from '../Creationcomponent/Poster'
import Scneario from '../Creationcomponent/Scneario'
import Footer from '../workcomponents/Footer'

const Creation = () => {
  return (
    <div  className='bg-[#FBF9F4]'>
        <Navbar/>
        <Graphic/>
        <Branding/>
        <Poster/>
        <Scneario/>
        <Footer/>

    </div>
  )
}

export default Creation
