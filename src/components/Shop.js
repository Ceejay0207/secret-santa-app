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
       <div className="title">Secret Santa</div>
      <button className=" loginBtn " type="submit"  >Login</button>
      <button className=" registerBtn" type="submit">Get Started</button>
    </nav>
  <div className=" d-flex justify-content-center aling-items-center" style={{backgroundColor:'#eaf9f6'}}>
    <div>
      <a href=""style={{textDecoration:'none' , color:'#58b69b'}}>Welcome , Admin!</a>
    </div>
      <div className="header-list">
      <Link to="/dashboard" style={{textDecoration:'none' , color:'#000'}}> Dashboard</Link>
      <Link to="/exchanges" style={{textDecoration:'none' , color:'#000'}}> Exchanges </Link>
      <Link to="/wishlist" style={{textDecoration:'none' , color:'#000'}}> Wishlist</Link>
      <Link to="/shop" style={{textDecoration:'none' , color:'#000'}}> Shop</Link>
      </div>
  </div>

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
</div>

  );
};

export default Shop;