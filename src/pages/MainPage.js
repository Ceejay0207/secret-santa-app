import React from "react";
import { useState } from "react";
import TableRows from "../components/table";
import Header from "../components/Header";
import backgroundImage from "../images/participant-background3.jpg";



const MainPage = () => {
    const [groupName, setGroupName] = useState("")
    const [spend, setSpend] = useState("");
    const [date, setDate] = useState("");

return(
    <>
    <div className="background-mainpage" style={{ backgroundImage:`url(${backgroundImage})` }}>
      <Header/>
    <div className="mainpage-content container-fluid py-3 " >
      <h4 className="form__heading">Create your Group </h4>
      <hr />
      <form className="row mb-3">
         <div className="col-4 ">
            <label htmlFor="exampleInputGroupName" className="form-label">
              Group name
            </label>
            <input
              type="text"
              className="form-control"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              id="exampleInputGroupName"/>
          </div>
      
          <div className="col-4">
            <label htmlFor="exampleInputSpend" className="form-label">
              How much will spend
            </label>
            <input
              type="number"
              className="form-control"
              value={spend}
              onChange={(e) => setSpend(e.target.value)}
              id="exampleInputSpend"/>
            </div>
          <div className="col-4">
            <label htmlFor="exampleInputDate" className="form-label">
             Date
            </label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="exampleInputDate"/>
           </div>
          </form>
          
          <div className="container-fluid py-3 " style={{'maxWidth':'784px'}}>
        <h4 className="form__heading">Add Participant </h4>
      <hr/>
      <form>
        <TableRows/>
      </form>
      <div className="submit-layout ">
        <button type="submit"  className="submitBtn btn-sm w-25 " > Submit</button>
      </div>
          </div>
          </div>
          </div>
    </>
)
}
export default MainPage;