import React from "react";
import { NavLink } from "react-router-dom";
const Common =(propes)=>{
  return(
    <>
        <section className="">
            <div className="container-fluid bg-body">
                <div className="row">
                    <div className="col-10 mx-auto pt-5">
                        <div className="row d-flex  align-items-center mb-3">
                            <div className="col-md-6 col-sm-12 ">
                                <h1>{propes.name}</h1>
                                <h3>We are team of high qualified member of Advertisement</h3>
                                <div>
                                    <NavLink to={propes.path} className="btn btn-success">{propes.btnname}</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={propes.imgsrc} className="img-fluid animate" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}
export default Common;