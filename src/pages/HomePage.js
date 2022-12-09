import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import backgroundImage from "../images/homepage-background.jpg";

function HomePage() {

    const navigate = useNavigate ();

  const handleSubmit = (e) => {
  e.preventDefault();

  navigate ('/Login')

  }

    return (
        <div className="Image" style={{ backgroundImage:`url(${backgroundImage})` }}>
            <nav className="navbar navbar-expand-lg " style={{backgroundColor:'white'}}>
       <div className="container-fluid ">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <button className="btn btn-primary " type="submit">Login</button>
        <button className="btn btn-primary" type="submit">Get Started</button>
      </form>
    </div>
  </div>
</nav>
        

  <div className="Content">
    <p className="text-white">Home of the world's #1 Secret Santa Generator</p>
    <h1 className="">Destination: Secret Santa</h1> 
    <p>Invite your friends and family to the best way to exchange gifts. It's free, fun, and easy. You even get your own Wishlist!</p>
      

       
         <button  type="submit" onClick={handleSubmit}>Start My secret santa</button>
        </div>
        </div>

    )

}


export default HomePage;
