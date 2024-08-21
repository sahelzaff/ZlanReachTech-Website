import React from 'react'
import NavBar from './components/NavBar';
import Footer from "./components/footer";
import Home from "./components/SlidingTextAnimationHome";
import CustomCursor from './components/CustomCursor';
import OurServicesHome from './components/OurServicesHome';
import TechUse from './components2/TechUse';
import Bus from './components/bussiness';
import Countdown from './components2/countdown';
import Unique from './components/unique';




const App = () => {
  return (
    <>
   
    <NavBar/>
    <Home/>
    <OurServicesHome/>
    <Bus/>
    <Unique/>
    <Footer/>
    <CustomCursor/>

    </>
  )
}

export default App