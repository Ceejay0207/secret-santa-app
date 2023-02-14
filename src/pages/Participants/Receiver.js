import React from "react";
import { Link } from "react-router-dom";

const Receiver =() => {
  return (
    <>
    <div>
    <nav className="header-nav navbar navbar-expand-lg navbar-dark  ">
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link " to="/participants/">
               Receiver
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/participants/mywishlist">
               My Wishlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Logout">
                Logout{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="draw">
       <span className="draw-title">Draw Name</span>
       <button>Start Draw Name</button>
    </div>
    </>
  );
}
export default Receiver;