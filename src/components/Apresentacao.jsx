import React from "react";


function Apresentacao(){

    return(
        <div className="apresentacao">
            <div className="personal-photo-div">
                <img className="personal-photo" src={process.env.PUBLIC_URL + "/images/myphoto3.png"} alt="Fotografia Pessoal"></img>
            </div>
            <h1>Olá, sou o Luís Freitas.<br></br>Engenheiro Informático! </h1>
        </div>
    );

}


export default Apresentacao;