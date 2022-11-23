
const Contact = () => {
    return (
        <div className="row contact m-0 " id="contact">
        <div className="d-flex content-container flex-column justify-content-center align-items-center">
            <h1 className="mt-5 text-white fw-bolder">CONTACT ME</h1>
            <div className="divide-line">
                <div><hr className="default m-3 "/></div>
                <div className= "fa-solid  fa-star text-white fs-3"></div>
                <div><hr className="default m-3"/></div>
            </div>
               <form action="#"  id="form_id"/>
                <div className="forms-data mt-3 d-flex flex-column">
                <input type="text" name="fName" id="fName" placeholder="Full Name"/>
                <input type="email" name="email" id="email" placeholder="Email" />
                <input type="number" name="number" id="number" placeholder="Phone Number" />
                <textarea className="mt-3" name="message" rows="3" cols="50" id="message" placeholder="Message" ></textarea>
            
                <input type="submit" className="button"/>
          </div>
        </div>
     </div>
    )
}


export default Contact;