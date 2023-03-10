import React from "react";
import Card from "./Card";
// import Sdata from "./Sdata";
import imgsrc1 from "../src/images/imgcard.png"
import imgsrc2 from "../src/images/imgcard6.png"
import imgsrc3 from "../src/images/imgcard2.png"
import imgsrc4 from "../src/images/imgcard3.png"
import imgsrc5 from "../src/images/imgcard4.png"
import imgsrc6 from "../src/images/imgcard5.png"
// import { NavLink } from "react-router-dom";
const App = () => {
    return (
        <>
            <div className="mb-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
{/* 
                            {
                                Sdata.map((currind, ind) => {
                                    return <Card key={ind} cardimg={currind.imgsrc} title={currind.title} />
                                })
                            } */}

                            <Card cardimg={imgsrc1} title="facebook" btnname="From facebook" />
                            <Card cardimg={imgsrc2} title="Instagram" btnname="From Instagram" />
                            <Card cardimg={imgsrc3} title="Whatsapp" btnname="From Whatsapp" />
                            <Card cardimg={imgsrc4} title="Twitter" btnname="From Twitter" />
                            <Card cardimg={imgsrc5} title="youtube" btnname="From youtube" />
                            <Card cardimg={imgsrc6} title="Snapchat" btnname="From Snapchat" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;