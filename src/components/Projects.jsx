import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import ProjRow from "./ProjRow";


function  Projects(){
    useEffect(() => {
        Aos.init({duration:500});
    }, []);
    return(
        <div data-aos="fade-up" id="port" className="proj-div light-section">
            <h2><u>Portfólio</u> </h2>
            <div className="container-fluid" >
                <ProjRow/>
            </div>
        </div>
    );


}


export default Projects;