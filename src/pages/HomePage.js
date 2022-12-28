import React from "react";
import { useNavigate } from "react-router";
import backgroundImage from "../images/homepage-background2.jpg";

function HomePage() {

    const navigate = useNavigate ();

  const handleSubmit = (e) => {
  e.preventDefault();

  navigate ('/Login')

  }

    return (
  <div>
  <div className="Image" style={{ backgroundImage:`url(${backgroundImage})` }}>
    <nav className="navbar navbar-expand-lg d-flex justify-content-between " style={{backgroundColor:'white'}}>
       <span className="icon"><i className="fa-solid fa-gift" ></i></span>
       <div className="title">Secret Santa</div>
      <button className=" loginBtn " type="submit"  onClick={handleSubmit}>Login</button>
      <button className=" registerBtn" type="submit">Get Started</button>
    </nav>
  </div>

  <div className="Content">
    <p className="text-white">Home of the world's #1 Secret Santa Generator</p>
    <h1 style={{fontSize:'45px'}}>Destination: Secret Santa</h1> 
    <p>Invite your friends and family to the best way to exchange gifts. It's free, fun, and easy. You even get your own Wishlist!</p>  
    <button className="btnStarted" type="submit" style={{'borderRadius':'10px'}} onClick={handleSubmit}>Start My secret santa</button>
  </div>
  </div>

    )

}


export default HomePage;
