import React from "react";
import projetos from "../projetos";
import ProjSingle from "./ProjSingle";

function ProjRow(){
    return(
            projetos.map(function (item,index){
            return (
                <div className="row" key={""+index}>
                    {
                    item.map(function (arrObj,i){
                        return(
                        <div className="col-lg-3 midle" key={""+i}>
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