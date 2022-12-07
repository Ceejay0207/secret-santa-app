import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";


const Participant = () => {
  const [name, setName] = useState("");
  const [wishlist, setWishlist] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate ();
  
  //form submit handler

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
    alert("Name Is Required");
    }
    else if (wishlist === "") {
      alert("Wishlist Is Required");
    }else {
      localStorage.setItem("name", name);
      localStorage.setItem("gender", gender);
      localStorage.setItem("wishlist", wishlist);
      alert("User Saved!");
     navigate ('/HomePage')
    }
  };
  
  return (
    <>
      <Header />
      <div className="container content mt-4">
        <h5> 📝 Add Participant</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                  Wishlist
              </label>
              <input
                type="text"
                value={wishlist}
                onChange={(e) => setWishlist(e.target.value)}
                className="form-control"
                id="exampleInputName"
              />
            </div>
            
            {/* radios button inpput */}
            <div className="d-flex flex-row">
              Gender :
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Male"
                  defaultChecked={gender === "Male"}
                  onClick={(e) => setGender(e.target.value)}
                  id="flexRadio1"
                />
                <label className="form-check-label" htmlFor="flexRadio1">
                  Male
                </label>
              </div>
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Female"
                  defaultChecked={gender === "Female"}
                  onClick={(e) => setGender(e.target.value)}
                  id="flexRadio2"
                />
                <label className="form-check-label" htmlFor="flexRadio2">
                  Female
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="form__submit-btn"
              onClick={(e) => handleSubmit(e)} >
              Add
            </button>
          </div>
          </div>
        </div>
     
    </>
  );
};

export default Participant;