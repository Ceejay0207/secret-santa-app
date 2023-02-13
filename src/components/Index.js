import React from "react";
import { Link } from "react-router-dom";
import nike from "../images/nike.png";
import crocs from "../images/crocs.png";
import hm from "../images/hm.jpg";
import amazon from "../images/amazon.png";
import adidas from "../images/adidas.png";
import uniqlo from "../images/unqlo.png";

const Shop = () => {
 
  return (
    <div>

<nav className="navbar navbar-expand-lg d-flex justify-content-between " style={{backgroundColor:'white'}}>
       <i className="fa-solid fa-gift"></i>
    <span className="title">Secret Santa</span>
      <a href="/login">
       <button className=" loginBtn " type="submit"  >Login</button>
      </a>
      <a href="/register">
        <button className=" registerBtn" type="submit">Get Started</button>
      </a>
    </nav>
    {/* <div className=" header-nav d-flex justify-content-center align-items-center mt-3  " style={{backgroundColor:'#eaf9f6'}}>
      <span className="admin">
      <a href=""style={{textDecoration:'none' , color:'#58b69b'}}>Welcome , Admin!</a>
      </span>
      <div className="header-list mt-0 fs-6" >
      <Link to="/dashboard" style={{textDecoration:'none' , color:'#000'}}> Dashboard</Link>
      <Link to="/exchanges" style={{textDecoration:'none' , color:'#000'}}> Exchanges </Link>
      <Link to="/wishlist" style={{textDecoration:'none' , color:'#000'}}> Wishlist</Link>
      <Link to="/shop" style={{textDecoration:'none' , color:'#000'}}> Shop</Link>
    </div>
    </div> */}
  <div className="content-section">
    
      <form className=" d-flex justify-content-center aling-items-center">
        <div>
        <input type="text" className="search-input" placeholder="Search"></input>
        <button type="search" className="search-btn" ><span className="icon-search"><i className="fa-solid fa-magnifying-glass"></i></span></button>
        </div>
      </form>
  </div>
  <div className="container">
    <h1 className="text-dark text-center mt-3 fs-3 fw-bold">Wish From Your Favorite Brands</h1>
    <div className="slide-container">
      <a href="" className="slide-content">
        <div role={"img"} className="img-content" style={{ backgroundImage:`url(${nike})` }}></div></a>
        <a href="" className="slide-content">
        <div role={"img"} className="img-content" style={{ backgroundImage:`url(${crocs})` }}></div></a>
        <a href="" className="slide-content">
        <div role={"img"} className="img-content" style={{ backgroundImage:`url(${amazon})` }}></div></a>
        <a href="" className="slide-content">
        <div role={"img"} className="img-content" style={{ backgroundImage:`url(${uniqlo})` }}></div></a>
        <a href="" className="slide-content">
        <div role={"img"} className="img-content" style={{ backgroundImage:`url(${adidas})` }}></div></a>
        <a href="" className="slide-content">
        <div role={"img"} className="img-content" style={{ backgroundImage:`url(${hm})` }}></div></a>
    </div>
  </div>
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
</div>

  );
};

export default Shop;