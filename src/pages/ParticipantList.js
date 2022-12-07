import React from "react";
import Header from "../components/Header";

const ParticipantList = () => {
 
  return (
    <div>
      <Header />
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">
         Participant List
          </h3>
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
                <h4>
                  Name :{" "}
                  {localStorage.getItem("name")
                    ? localStorage.getItem("name")
                    : "NA"}
                </h4>
                <h4>
                  Wishlist :{" "}
                  {localStorage.getItem("wishlist")
                    ? localStorage.getItem("wishlist")
                    : "NA"}
                </h4>
                <h4>
                  Gender :{" "}
                  {localStorage.getItem("gender")
                    ? localStorage.getItem("gender")
                    : "NA"}
                </h4>
              </div>
            </div>
          </div>
        </div>
              
      </div>

  );
};

export default ParticipantList;