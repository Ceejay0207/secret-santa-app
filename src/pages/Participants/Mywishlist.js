import React from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import WishlistModal from "../../components/Participant/WishlistModal";

const Mywishlist =() => {
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
    <div className="table d-flex justify-content-center">
        <div className="d-flex justify-content-center align-items-center flex-column m-5" style={{'maxWidth':'max-content'}} >
        <span style={{'fontSize':'30px' , 'fontWeight':'bold'}}>My Wishlists</span>
        <div className="participant-btn align-self-end " style={{'backgroundColor':'#58b69b'}}>
        <button className="text-black" data-bs-toggle="modal" data-bs-target="#wishlistmodal" >Add Wishlist</button>
        </div>
      <Table striped bordered hover style={{'width':'1040px'}} className="">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Link</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>GG</td>
            <td>20</td>
            <td>img</td>
            <td>button</td>
          </tr>
          <tr>
            <td>2</td>
            <td>QQ</td>
            <td>20</td>
            <td>img</td>
            <td>button</td>
          </tr>
          <tr>
            <td>3</td>
            <td>EE</td>
            <td>20</td>
            <td>img</td>
            <td>button</td>
          </tr>
        </tbody>
      </Table>
      </div>
      </div>
      <WishlistModal/>
    </>
  );
}
export default Mywishlist;