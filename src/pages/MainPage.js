import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import $ from 'jquery';

const MainPage = () => {
    const [groupName, setGroupName] = useState("")
    const [spend, setSpend] = useState("");
    const [date, setDate] = useState("");


    const addNewRow = () => {
      // let template = document.getElementById('participantRow')
      // let container = document.getElementById('rowContainer')
      // let clone = template.cloneNode(true)
      // clone.removeAttribute("id");
      // clone.classList.remove('d-none');
      // container.append(clone)
      // let element = container.innerHTML += template.outerHTML
      // $("#participantRow")
      // let clone = $('#participantRow').html();
      
      // clone.removeClass('d-none')
      // clone.removeAttr('id')
      // console.log(clone.text())
      // $('#rowContainer').appendTo(clone)
      // let container = $('#rowContainer')
   



     
    }


// const firstClone = template.content.cloneNode(true);
// firstClone.addEventListener("click", clickHandler);
// container.appendChild(firstClone);

// const secondClone = template.content.firstElementChild.cloneNode(true);
// secondClone.addEventListener("click", clickHandler);
// container.appendChild(secondClone);

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
          #document-fragment
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
          <div className="col-4">
            <input
              type="text"
              className="form-control" 
              id=""/>
           </div>
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
          <div className="col-4">
            <input
              type="number"
              className="form-control"
              id=""/>
           </div>
           </div>

       </div>
          
           
          </form>
          <button type="button" onClick={addNewRow} className=" btn btn-secondary m-3 btn-sm w-25" > Add</button>
          <button type="button" className=" btn btn-primary btn-sm w-25" > Submit</button>
          </div>
    </>
)


}

export default MainPage;