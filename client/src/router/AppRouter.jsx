import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import BoyaBadana from '../operations/BoyaBadana'
import AsmaTavan from '../operations/AsmaTavan'
import DekoratifBoya from '../operations/DekoratifBoya'
import MetalAsmaTavan from '../operations/MetalAsmaTavan'
import TasYunuAsmaTavan from '../operations/TasYunuAsmaTavan'
import AboutUs from '../pages/AboutUs'
import DealerShips from '../pages/DealerShips'
import References from '../pages/References'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hakkimizda' element={<AboutUs />}/>
        <Route path='/bayiliklerimiz' element={<DealerShips />}/>
        <Route path='/referanslarimiz' element={<References />}/>
        <Route path='/projelerimiz' element={<Projects />} />
        <Route path='/iletisim' element={<Contact />} />
        <Route path='/boya-badana' element={<BoyaBadana />} />
        <Route path='/asma-tavan' element={<AsmaTavan />}/>
        <Route path='/dekoratif-boya' element={<DekoratifBoya />} />
        <Route path='/metal-asma-tavan' element={<MetalAsmaTavan />}/>
        <Route path='/tas-yunu-asma-tavan' element={<TasYunuAsmaTavan />} />
    </Routes>
  )
}

export default AppRouter