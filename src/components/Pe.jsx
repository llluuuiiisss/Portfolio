import React,{useEffect} from "react";
import {FaGithubSquare,FaLinkedin} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";



function Pe(){
    useEffect(() => {
        Aos.init({duration:500});
    }, []);
    return(
    <div data-aos="fade-up" className="footer light-section">
        <div className="social-networks">
            <a href="https://github.com/llluuuiiisss/" title="Abrir GitHub."><FaGithubSquare/></a>
            <a  href="https://www.linkedin.com/in/luis-freitas-878930187/" title="Abrir Linkedin."><FaLinkedin/></a>
        </div>
        <p style={{padding:"0 0 1%"}}>© Copyright 2020 Luís Freitas</p>
    </div>
    );

}

export default Pe;