
const Skills = () =>{

    
return(
    <div className="row skills m-0 " id="skills">
    <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-dark fw-bolder mt-0">SKILLS</h1>
        <div className="divide-line">
            <div><hr className="default m-3 "/></div>
            <div className="fa-solid  fa-star text-dark fs-3"></div>
            <div><hr className="default m-3"/></div>
        </div>
            <div className="row mt-5 m-2"> 
                <div className="col "> 
                <div className="html-data">
                <div>
                <i className="fa-brands fa-html5"></i>
                 <h2>HTML</h2>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quo!
                </div>
               </div>
            </div>
            <div className="col"> 
                <div className="css-data">
                    <div>
                        <i className="fa-brands fa-css3"></i>
                        <h2>CSS</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quo!</div>
                    </div>
                      </div>
             <div className="col"> 
                <div className="js-data" >
                    <div>
                        <i className="fa-brands fa-js"></i>
                        <h2>JAVASCRIPT</h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quo!
                    </div>
                </div>
              </div>
             </div>
             </div>
          </div>
)


}
export default Skills;