import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="header-nav navbar navbar-expand-lg navbar-dark  ">
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link " to="/superadmin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/shop">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Login">
                Logout{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;