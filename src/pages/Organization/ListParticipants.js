import React from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import OrganizationModal from '../../components/Organization/OrganizationModal.js'

const ListParticipants =() => {
  return (
    <>
    <div>
    <nav className="header-nav navbar navbar-expand-lg navbar-dark  ">
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " to="/organization">
                Participant
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
        <span style={{'fontSize':'30px' , 'fontWeight':'bold'}}>List of Participants</span>
        <div className="participant-btn align-self-end " style={{'backgroundColor':'#58b69b'}}>
        <button className="text-black" data-bs-toggle="modal" data-bs-target="#organizationmodal" >Add Participant</button>
        </div>
      <Table striped bordered hover style={{'width':'640px'}}>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Participant Name</th>
            <th>Age</th>
            <th>Birthdate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>20</td>
            <td>asd</td>
            <td>button</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cj</td>
            <td>20</td>
            <td>qwe</td>
            <td>button</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ej</td>
            <td>20</td>
            <td>qsde</td>
            <td>button</td>
          </tr>
        </tbody>
      </Table>
      </div>
      </div>
      <OrganizationModal/>
      </>
  );
}



export default ListParticipants;