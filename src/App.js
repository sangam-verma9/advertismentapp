import React from "react";
import  Home  from "./Home";
import Services from './Services'
import About from './About'
import Contect from './Contect'
import {Routes, Route } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Footer from "./Footer";
import Navbar from "./Navbar";
const App =()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contect" element={<Contect/>} />
        <Route path="*"  element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
export default App;