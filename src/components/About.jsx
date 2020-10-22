import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About(){
    useEffect(() => {
        Aos.init({duration:500});
    }, []);

    return(
        <div data-aos="fade-up" className="about-div light-section">
            <h2><u>Sobre</u></h2>
            <p>Sou recém licenciado em engenharia informática e estou empenhado em obter a minha primeira experiência de trabalho. Destaco a minha aptidão para resolução de problemas sob pressão, dinamismo, proatividade, sentido de responsabilidade,  capacidade de aprendizagem e aptidão para trabalho em equipa. Paralelamente à formação académica, tenho desenvolvido constantemente atividades complementares, profissionais ou voluntárias em áreas tão diversificadas como a programação de eventos, consultoria e apoio informático a empresas e construção civil.</p>

        </div>
    );
}


export default About;