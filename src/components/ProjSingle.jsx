import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function ProjSingle(props){
    const {id,name,descr,demo,code,linkDemo,linkCode,images}=props.objeto;

    return (
        <div>
            <h3>{name}</h3>
                    <div id={"line"+id} className="carousel slide quadr" data-interval="false" data-ride="carousel">
                        <ol className="carousel-indicators" style={{cursor: "context-menu"}}>
                                {
                                    images.map(function(item, index){
                                        if(index===0){
                                            return (
                                                <li data-target={"#line"+item.id} data-slide-to="0" key="0" className="active" style={{cursor: "context-menu"}}></li>
                                            );
                                        }
                                        else{
                                            return (
                                                <li data-target={"#line"+item.id} data-slide-to={""+index} style={{cursor: "context-menu"}} key={""+index}></li>
                                            );
                                        }
                                    })
                                }

                        </ol>
                        <div className="carousel-inner">
                            {
                                images.map(function(item, index){
                                    if(index===0){
                                        return (
                                            <div className="carousel-item active" key={""+index}>
                                                <img className="d-block w-100" src={item} alt="First slide"></img>
                                            </div>
                                        );
                                    }
                                    else{
                                        return (
                                            <div className="carousel-item" key={""+index}>
                                                <img className="d-block w-100" src={item} alt={index+" slide"}></img>
                                            </div>
                                        );
                                    }
                                    
                                })
                            }
                        </div>

                        <a className="carousel-control-prev" href={"#line"+id} role="button"  data-slide="prev" title="Recuar imagem.">
                            <span className="carousel-control-prev-icon"  aria-hidden="true"></span>
                            <span className="sr-only" >Previous</span>
                        </a>
                        <a className="carousel-control-next" href={"#line"+id} role="button" data-slide="next" title="Avançar imagem.">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="btn-code">
                        {code ? <a href={linkCode} title="Abrir código do Projeto." type="button" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Código <FontAwesomeIcon icon={faCode} /></a> : <div className="btn btn-default btn-dark disabled " style={{cursor:"default"}}>Código <FontAwesomeIcon icon={faCode}/></div>}
                    </div>
                    <div className="btn-demo">
                        {demo ? <a href={linkDemo} title="Abrir demo do Projeto." type="button" target="_blank" rel="noopener noreferrer" className="btn btn-primary"><FontAwesomeIcon icon={faEye} /> Demo</a> : <div className="btn btn-default btn-dark disabled " style={{cursor:"default"}}><FontAwesomeIcon icon={faEyeSlash}/> Demo</div>}         
                    </div>

                    <p>{descr}</p>
        </div>
    );
    
    
}

export default ProjSingle;