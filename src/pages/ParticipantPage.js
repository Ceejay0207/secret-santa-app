import React from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";


const Participant =() => {



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
    <div className="table d-flex justify-content-center">
        <div className="d-flex justify-content-center align-items-center flex-column m-5" style={{'maxWidth':'max-content'}} >
        <span style={{'fontSize':'30px' , 'fontWeight':'bold'}}>List of Participants</span>
        <div className="participant-btn align-self-end " style={{'backgroundColor':'#58b69b'}}>
        <button className="text-black" >Add Participant</button>
        </div>
      <Table striped bordered hover style={{'width':'640px'}}>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Organization Name</th>
            <th>Participant Name</th>
            <th>Age</th>
            <th>Birthdate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>GG</td>
            <td>Mark</td>
            <td>20</td>
            <td>asd</td>
            <td>button</td>
          </tr>
          <tr>
            <td>2</td>
            <td>QQ</td>
            <td>Cj</td>
            <td>20</td>
            <td>qwe</td>
            <td>button</td>
          </tr>
          <tr>
            <td>3</td>
            <td>EE</td>
            <td>Ej</td>
            <td>20</td>
            <td>qsde</td>
            <td>button</td>
          </tr>
        </tbody>
      </Table>
      </div>
      </div>
      
      </>
  );
}



export default Participant;