import React from 'react'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Creation from './pages/Creation.jsx'
// import creativeworks from './pages/creativeworks.jsx'
import CreativeWorks from './pages/creativeworks.jsx'
// import Bits from './creative_workscomponents/Bits.jsx'
const App = () => {
  return (
    <div className="min-h-[calc(100%+200px)]">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/work' element={<Work />} />
          <Route path='/creation' element={<Creation/>} />  
          {/* <Route path='/creationworks' element={<creativeworks/>}/> */}
          <Route path='/creationworks' element={<CreativeWorks />} />
          {/* <Route path="/Bits" element={<Bits />} /> */}
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App