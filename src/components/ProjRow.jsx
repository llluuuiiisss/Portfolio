import React from "react";
import Carousel from "./Carousel";
import projetos from "../projetos";
import ProjSinglE from "./ProjSingle";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ProjSingle from "./ProjSingle";

function ProjRow(){
    console.log(projetos);
    return(
            projetos.map(function (item,index){
            return (
                <div className="row">
                    {
                    item.map(function (arrObj,i){
                        return(
                        <div className="col-lg-3 midle">
                            <ProjSingle objeto={arrObj}/>
                        </div>
                        )
                    })
                    }
                </div>

                )
            })
    );
}

export default ProjRow;