import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orgname, setOrgName] = useState("");
    const [password, setPassWord] = useState("");
    const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
        alert("Email Is Required");
        } else if (password === "") {
        alert("Password is Required");
        } else {
          alert("Account Created!");
          navigate("/Login")
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("orgname", orgname);
          localStorage.setItem("password", password);
  };
 }
return(
  <>
  <nav className="navBackground navbar navbar-expand-lg d-flex justify-content-center " >
  <div className="title text-white ">Secret Santa</div>
</nav>
<div className="form__container d-flex flex-column align-items-center justify-content-center">
          <form className="formInput">
          <h4 className="form__heading text-center">Register</h4>
          <hr />
          <div className="mb-3">
          <label htmlFor="Fullname" className="form-label">
              Full Name
          </label>
          <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="InputFullName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
          </label>
          <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="Orgname" className="form-label">
              Organization Name
          </label>
          <input
              type="text"
              className="form-control"
              value={orgname}
              onChange={(e) => setOrgName(e.target.value)}
              id="orgname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              id="password"
            />
          </div>
          <div className="form__signupLink mb-3 text-center">
              Already have an account?
              <Link to="/">Login</Link>
          </div>
          <button type="submit" className="btnInput form__button" onClick={handleSubmit}>
              Register
          </button>
        </form>
      </div>
      </>
)

}

export default Register;