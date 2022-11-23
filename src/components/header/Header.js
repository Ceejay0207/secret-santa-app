const Header = () => {
    return (
        <div className="row header d-flex container-fluid flex-column justify-content-evenly m-0" id="header">
        <div className="container">
        <nav>
            <h4 className="text-white" id="name">CEE<span className="userName">JAY</span></h4>
            <ul>
            <li><a href="#about" className="text-white">ABOUT</a></li>
            <li><a href="#skills" className="text-white" >SKILLS</a></li>
            <li><a href="#contact" className="text-white" >CONTACT</a></li>
        </ul>
        </nav>
        </div>
        </div>
    
    )
    
        
}


export default Header;