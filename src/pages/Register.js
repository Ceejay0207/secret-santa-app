import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
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
          localStorage.setItem("email", email);
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
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              id="exampleInputPassword1"
            />
          </div>
          <div className="form__signupLink mb-3 text-center">
            
              Already have an account? <Link to="/">Login</Link>
            
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