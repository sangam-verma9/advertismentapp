import React, { useState } from "react";

const Contect = () => {
  const [data,setdata]=useState({
    full_name:'',
    email:'',
    mobile_no:'',
    message:''

  })
  const InputEvent=(event)=>{
      const {name,value}=event.target;
      setdata((preval)=>{
        return{
          ...preval,
          [name]:value
        }
      })
  }
  const formSubmit=(e)=>{
      e.preventDefault();
      alert(`My name is ${data.full_name}.My email address is ${data.email} and mobile no. is ${data.mobile_no}.I want to say ${data.message}.`)
  }
  return (
    <>
      <div>
        <h1 className="text-center">Contect Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text"
                 className="form-control"
                  id="exampleFormControlInput1"
                  name="full_name"
                  value={data.full_name}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                   autoComplete="off"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email"
                 className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent} 
                  placeholder="Enter your email"
                   autoComplete="off"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Mobile No.</label>
                <input type="number"
                 className="form-control"
                  id="exampleFormControlInput1" 
                  name="mobile_no"
                  value={data.mobile_no}
                  onChange={InputEvent}
                  placeholder="Enter your mobile no"
                  autoComplete="off"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control"
                 id="exampleFormControlTextarea1"
                 name="message"
                  value={data.message}
                  onChange={InputEvent}
                  rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contect;