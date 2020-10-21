import React from "react";


function Navbar(){
    return(
    <nav className="navbar fixed-top navbar-lg navbar-expand-lg navbar-dark">
        <a className="navbar-brand" style={{color:"#03a9f4"}} href="">Luís Freitas</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" style={{borderColor:"#03a9f4"}} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" style={{color:"#03a9f4"}} href="#port">Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:"#03a9f4"}} href="#contactos">Contactos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:"#03a9f4"}} href="#download">Download CV</a>
            </li>
          </ul>
        </div>
    </nav>);
}

export default Navbar;