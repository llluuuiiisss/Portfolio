import React from "react";
import {FaGithubSquare,FaLinkedin} from "react-icons/fa";

function Pe(){
    return(
    <div className="footer">
        <div className="social-networks">
            <a href="https://github.com/llluuuiiisss/" title="Abrir GitHub."><FaGithubSquare/></a>
            <a  href="https://www.linkedin.com/in/luis-freitas-878930187/" title="Abrir Linkedin."><FaLinkedin/></a>
        </div>
        <p>© Copyright 2020 Luís Freitas</p>

    </div>
    );

}

export default Pe;