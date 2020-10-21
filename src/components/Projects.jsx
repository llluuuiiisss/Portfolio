import React from "react";
import ProjRow from "./ProjRow";


function  Projects(){
    return(
        <div id="port" className="proj-div light-section">
            <h2><u>Portfolio</u> </h2>
            <div className="container-fluid" >
                <ProjRow/>
            </div>
        </div>
    );


}


export default Projects;