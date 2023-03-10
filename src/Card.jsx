import React from "react";
import { NavLink } from "react-router-dom";
const Card = (propes) => {
    return (
        <>
            <div className="col-md-4 col-sm-10 mx-auto">
                <div className="card">
                    <img src={propes.cardimg} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{propes.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" className="btn btn-primary">{propes.btnname}</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;
