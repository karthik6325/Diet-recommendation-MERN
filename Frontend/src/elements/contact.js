import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Imagebgpro from '../Components/imagebgpro';
import Form from '../Components/form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Imagebgpro heading="CONTACT." text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact