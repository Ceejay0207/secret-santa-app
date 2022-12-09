import React from "react";
import { useState } from "react";
import TableRows from "../components/table";
import Header from "../components/Header";
import $ from 'jquery';

const MainPage = () => {
    const [groupName, setGroupName] = useState("")
    const [spend, setSpend] = useState("");
    const [date, setDate] = useState("");


//     const addNewRow = () => {
//       let clone = $('#participantRow').clone()
//       clone.removeClass('d-none')
//       clone.removeAttr('id')
//       clone.attr('onClick', removeRow)
//       let container = $('#rowContainer')

//       container.append(clone)
//     }

//     const removeRow = (e) => {
//       console.log(e.target)
      
//     }


// // const firstClone = template.content.cloneNode(true);
// // firstClone.addEventListener("click", clickHandler);
// // container.appendChild(firstClone);

// // const secondClone = template.content.firstElementChild.cloneNode(true);
// // secondClone.addEventListener("click", clickHandler);
// // container.appendChild(secondClone);

return(
    <>
   
    <Header/>
    <div className="container-fluid py-3 " style={{'maxWidth':'784px'}}>
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
          </div>
          <div className="container-fluid py-3 " style={{'maxWidth':'784px'}}>
        <h4 className="form__heading">Add Participant </h4>
      <hr />

      <form>
        <TableRows/>
      </form>

      <button type="button" className=" btn btn-primary btn-sm w-25" > Submit</button> 
          </div>
    </>
)


}

export default MainPage;

      {/* <form>
        <div className="row" >
          <div className="col-4 ">
             <label htmlFor="fullname" className="form-label">
             Full Name
            </label>
          </div>
          <div className="col-4 ">
            <label htmlFor="email" className="form-label">
             Email
            </label>
         </div>
         <div className="col-4 ">
            <label htmlFor="age" className="form-label">
            Age
            </label>
        </div>
        </div>
        <div id="participantRow" className="row mb-3 d-none">
         <div className="col-4 ">
            <input
              type="text"
              className="form-control"
              id=""/>
         </div>
          <div className="col-4">
            <input
              type="email"
              className="form-control"
              id=""/>
            </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control" 
              id=""/>
           </div>
           <button type="button" onClick={removeRow} className="col-1 btn btn-danger">Delete</button>
      </div>
       <div id="rowContainer">
       <div className="row mb-3">
           <div className="col-4 ">
            <input
              type="text"
              className="form-control"
              id=""/>
         </div>
          <div className="col-4">
            <input
              type="email"
              className="form-control"
              id=""/>
            </div>
          <div className="col-3">
            <input
              type="number"
              className="form-control"
              id=""/>
           </div>
           <button type="button" onClick={removeRow} className="col-1 btn btn-danger">Delete</button>
           </div>
          
       </div>
          </form>*/}

 