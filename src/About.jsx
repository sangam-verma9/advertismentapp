import React from "react";
import Common from "./Common";
import img2 from "../src/images/imgabout.png"
const App =()=>{
  return(
    <>
        <Common
         name="Welcome to our about page"
         btnname="Contect Us"
         imgsrc={img2}
         path="/contect"
        />

    </>
  )
}
export default App;