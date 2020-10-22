import React,{useEffect} from "react";
import Typical from "react-typical";
import Aos from "aos";
import "aos/dist/aos.css";


function Apresentacao(){
    useEffect(() => {
        Aos.init({duration:1000});
    }, []);

   

    return(
        <div data-aos="slide-down" className="apresentacao">
            <div className="personal-photo-div">
                <img className="personal-photo" src={process.env.PUBLIC_URL + "/images/myphoto4.png"} alt="Fotografia Pessoal"></img>
            </div>
            <h1>Olá, sou o Luís Freitas.<br></br><Typical steps={[1000,"Um Programador!", 1000, "Engenheiro Informático!",1000, "Web Developer!",1000]} loop={Infinity} wrapper="h1"/> </h1>
        </div>
    );

}


export default Apresentacao;