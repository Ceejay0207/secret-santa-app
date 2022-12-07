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
<div className="form__container d-flex flex-column align-items-center justify-content-center">
        <form>
          <h4 className="form__heading">Register</h4>
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
          <div className="form__signupLink mb-3">
            <p>
              Already Have An Account? <Link to="/">LogIn!</Link>
            </p>
          </div>
          <button type="submit" className="form__button" onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
)

}

export default Register;