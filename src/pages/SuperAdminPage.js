import React from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
const SuperAdmin =()=>{
    return (
      <>
      <div>
      <nav className="header-nav navbar navbar-expand-lg navbar-dark  ">
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link " to="/superadmin">
                Organization
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/participant">
                Participant
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
        <div className="table">
        <div className="d-flex justify-content-center align-items-center flex-column m-5" >
            <span style={{'fontSize':'30px' , 'fontWeight':'bold'}}>List of Organization</span>
      <Table striped bordered hover style={{'width':'640px'}}>
        <thead>
          <tr>
            <th>Organization Id</th>
            <th>Name</th>
            <th>Total Participant Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>1</td>
            <td>button</td>
          </tr>
          <tr>
            <td>2</td>
            <td>cj</td>
            <td>2</td>
            <td>button</td>
          </tr>
          <tr>
            <td>3</td>
            <td>irving</td>
            <td>3</td>
            <td>button</td>
          </tr>
        </tbody>
      </Table>
      </div>
      </div>
      </>
    );
  }
  
  export default SuperAdmin;