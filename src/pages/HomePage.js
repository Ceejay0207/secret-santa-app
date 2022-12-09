import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import santabg from "./santabg.jpg";

function HomePage() {

    const navigate = useNavigate ();

  const handleSubmit = (e) => {
  e.preventDefault();

  navigate ('/Login')

  }

    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
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
        

        <div className="container-fluid bg-danger">
         <button  type="submit" onClick={handleSubmit}>Get started</button>
        </div>
        </div>

    )

}


export default HomePage;
