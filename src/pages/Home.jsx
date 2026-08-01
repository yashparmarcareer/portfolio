import React from 'react'
import Navbar from '../homecomponents/Navbar'
import Name from '../homecomponents/Name'
import Video from '../homecomponents/Video'
import Ipr from '../homecomponents/Ipr'
import Slider from '../homecomponents/Slider'
import Face from '../homecomponents/Face'
import FourSection from '../homecomponents/FourSection'
import FourPhotos from '../homecomponents/FourPhotos'
import Footer from '../workcomponents/Footer'
const Home = () => {
  return (
    <div className="bg-[#FBF9F4CC]" >
      <Navbar/>
      <Name/>
      <Video/>
      <Ipr/>
      <Slider/>
      <Face/>
      <FourSection/>
      <FourPhotos/>
      <Footer/>
    </div>
  )
}

export default Home
