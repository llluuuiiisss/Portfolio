import React from "react";


function Navbar(){
    return(
    <nav className="navbar fixed-top navbar-lg navbar-expand-lg navbar-dark">
        <h1 className="navbar-brand" >Luís Freitas</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" style={{borderColor:"#03a9f4"}} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link"  href="#port" title="Navegar até Projetos.">Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="#contactos" title="Navegar até Contactos.">Contactos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="#download" title="Navegar até Download CV.">Download CV</a>
            </li>
          </ul>
        </div>
    </nav>);
}

export default Navbar;