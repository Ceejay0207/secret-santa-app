import React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {



return(
    <>
   
   <nav className="navbar navbar-expand-lg d-flex justify-content-between " style={{backgroundColor:'white'}}>
       <i className="fa-solid fa-gift"></i>
    <span className="title">Secret Santa</span>
      <button className=" loginBtn " type="submit"  >Login</button>
      <button className=" registerBtn" type="submit">Get Started</button>
    </nav>
    <div className=" header-nav d-flex justify-content-center align-items-center mt-3  " style={{backgroundColor:'#eaf9f6'}}>
      <span className="admin">
      <a href=""style={{textDecoration:'none' , color:'#58b69b'}}>Welcome , Admin!</a>
      </span>
      <div className="header-list mt-0 fs-6" >
      <Link to="/dashboard" style={{textDecoration:'none' , color:'#000'}}> Dashboard</Link>
      <Link to="/exchanges" style={{textDecoration:'none' , color:'#000'}}> Exchanges </Link>
      <Link to="/wishlist" style={{textDecoration:'none' , color:'#000'}}> Wishlist</Link>
      <Link to="/shop" style={{textDecoration:'none' , color:'#000'}}> Shop</Link>
    </div>
    </div>
  
  <div className="wishlist-container">
  <span>
      <h3 className="text-dark text-center mt-3">Your Wishlists</h3>
  </span>
  <div className="wishlist">
      <a href="">
      <div className="wishlist-box">
      <span>Create a Wishlist</span>  
  </div>
  </a>
  </div>
  <div className="wishlist-button"><span>+</span></div>
  </div>
  <div className="wishlist-fade"></div>
  <div className="social-container">
    <div className="socials">
    <div className="social-title ">Secret Santa</div>
    <div className="socials-content">
        <a href="">About</a>
        <a href="">Contact us</a>
        <a href="">Tell a friend</a>
    </div>
    </div>
    </div>
    <div className="social-container">
    <div className="info">
        <span>Follow on Social:</span>
    <div className="social-icon">
        <a href="" className="info-icon"><i className="fa-brands fa-facebook"></i></a>
        <a href="" className="info-icon"><i className="fa-brands fa-twitter"></i></a>
        <a href="" className="info-icon"><i className="fa-brands fa-instagram"></i></a>
    </div> 
    </div>
    </div>
    <div className="footer">
      <span>@2023 Secret Santa App</span>
    </div>
    </>
)
}   
export default Wishlist;