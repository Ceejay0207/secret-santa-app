import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


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
    if (email === userName && password === userPassword) {
      alert("Login Success");
      navigate("/Admin");
    } else {
      alert("Invalid Email OR password");
    }
  };
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
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"/>
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
