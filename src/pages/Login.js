import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //getting email password
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/auth/login',
      {
        email:'email@mail.com',
        password:'12123',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        console.log(response)

          throw new Error('Fallback error');
      })
      .catch((error) => {
          console.log(error)
          throw new Error('Fallback error');
      });
      }
  return (
    <>
     <nav className="navBackground navbar navbar-expand-lg d-flex justify-content-center " >
       <div className="title text-white ">Secret Santa</div>
    </nav>
      <div className="form__container d-flex flex-column align-items-center justify-content-center">
        <form className="formInput">
          <h4 className="form__heading text-center">Login Here </h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="Email"
              aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"/>
          </div>
          <div className="form__signupLink mb-3 text-center">
              Don't have an account? <Link to="/register">Click here!</Link>
          </div>
          <button type="submit" className="form__button btnInput " onClick={handleSubmit}>
              Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
