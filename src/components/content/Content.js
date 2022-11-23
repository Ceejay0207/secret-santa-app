 import MyImage from '../assets/image1.jpg';
const Content = () => { 
    return (
        <div className="row content m-0" id="about">
        <div
          className="d-flex container-fluid flex-column justify-content-center align-items-center">
            <img src={MyImage} alt=""/>
        <h3 className="mt-4 text-white">Hi! I'm Ceejay Quiamco</h3>
        <div className="divide-line mt-3">
            <div><hr className="default m-3"/></div>
            <div className= "fa-solid fa-star text-white fs-3"></div>
            <div><hr className="default m-3"/></div>
        </div>
        <h4 className="mt-3 text-white" >Aspiring Web Developer</h4>

    </div>
   </div>

   
    )
    
}


export default Content;