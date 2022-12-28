import React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {



return(
    <>
   
   <nav className="navbar navbar-expand-lg d-flex justify-content-between " style={{backgroundColor:'white'}}>
       <i className="fa-solid fa-gift"></i>
       <div className="title">Secret Santa</div>
      <button className=" loginBtn " type="submit"  >Login</button>
      <button className=" registerBtn" type="submit">Get Started</button>
    </nav>
  <div className=" d-flex justify-content-center aling-items-center " style={{backgroundColor:'#eaf9f6'}}>
    <div>
      <a href=""style={{textDecoration:'none' , color:'#58b69b'}}>Welcome , Admin!</a>
    </div>
      <div className="header-list " >
      <Link to="/dashboard" style={{textDecoration:'none' , color:'#000'}}> Dashboard</Link>
      <Link to="/exchanges" style={{textDecoration:'none' , color:'#000'}}> Exchanges </Link>
      <Link to="/wishlist" style={{textDecoration:'none' , color:'#000'}}> Wishlist</Link>
      <Link to="/shop" style={{textDecoration:'none' , color:'#000'}}> Shop</Link>
      </div>
  </div>
  <div>
    <h3 className="text-dark text-center mt-3">Wishlist</h3>
  </div>
  <div>
    <div>
        <a href="">
            <div></div>
        
        </a> 
    </div>
  </div>
    </>
)
}   
export default Wishlist;