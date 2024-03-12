import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Imagebgpro from '../Components/imagebgpro';
import Aboutcontent from '../Components/aboutcontent';

const about = () => {
  return (
    <div>
      <Navbar/>
      <Imagebgpro heading="ABOUT." text="I am a MERN Stack Developer"/>
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default about