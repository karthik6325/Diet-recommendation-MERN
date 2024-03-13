import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Imagebgpro from '../Components/imagebgpro';
import Form from '../Components/form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Imagebgpro heading="CONTACT." text="Connect with us"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact