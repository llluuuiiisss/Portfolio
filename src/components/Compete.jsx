import React, {useEffect} from "react";
import Comp from "./SingleCompetencia";
import {front,back,gerais} from "../competencias";
import Aos from "aos";
import "aos/dist/aos.css";



//{front.map(function(item){return(<Comp txt={item}/>);})}

function Compete(){


    return (
        <div data-aos="fade-up" className ="compete-div dark-section">
            <h2><u>Competências Informáticas</u></h2>
            <div className="compete-box">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-lg-4 midle">
                            <h3>Front-End</h3>
                            {front.map((it,i) => {return(<Comp txt={it} key={i}/>)})}
                            
                        </div>
                        <div className="col-lg-4 midle">
                            <h3>Back-End</h3>
                            {back.map((it,i) => {return(<Comp txt={it} key={i}/>)})}
                        </div>
                        <div className="col-lg-4 midle">
                            <h3>Gerais</h3>
                            {gerais.map((it,i) => {return(<Comp txt={it} key={i}/>)})}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Compete;