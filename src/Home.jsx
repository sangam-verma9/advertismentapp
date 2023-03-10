import React from "react";
import Common from "./Common";
import img1 from "../src/images/imghome.png"
const Home =()=>{
  return(
    <>
        <Common
         name="Advertise your business with Sangam"
         btnname="Get Started"
         imgsrc={img1}
         path="/services"
        />

    </>
  )
}
export default Home;