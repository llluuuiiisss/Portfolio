import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone,faHome,faDownload,faCopy } from '@fortawesome/free-solid-svg-icons';
import { IconName } from "react-icons/md";

function Contact(){
      function copyElementText(id) {
          var text = document.getElementById(id).innerText;
          var elem = document.createElement("textarea");
          document.body.appendChild(elem);
          elem.value = text;
          elem.select();
          document.execCommand("copy");
          document.body.removeChild(elem);
      }

      function popup(id) {
        var popup = document.getElementById(id);
        popup.classList.toggle("show");
        setInterval(function(){ var popup = document.getElementById(id);popup.classList.remove("show"); }, 1000);
      }

    return(
        <div id="contactos" className="contact dark-section">
            <h2><u>Contactos</u></h2>
            <div>
                <h3 id="phone"><FontAwesomeIcon icon={faPhone} /> +351 936 768 310 </h3>
                <div className="popup">
                    <h3><a title="Clique para copiar." onClick={function(){copyElementText('phone');popup('phonePopup');}}><FontAwesomeIcon icon={faCopy} /> </a></h3>
                    <span className="popuptext" id="phonePopup">Número copiado!</span>
                </div>
            </div>

            <div>
                <h3 id="mail"><FontAwesomeIcon icon={faEnvelope} /> luisfreitas1999@hotmail.com </h3>
                <div className="popup">
                    <h3><a title="Clique para copiar." onClick={function(){copyElementText('mail');popup('mailPopup');}}><FontAwesomeIcon icon={faCopy} /> </a></h3>
                    <span className="popuptext" id="mailPopup">Email copiado!</span>
                </div>
            </div>
            <div>
                <h3 id="local"><FontAwesomeIcon icon={faHome} /> Ponte da Barca, Viana do Castelo </h3>
                <div className="popup">
                    <h3><a title="Clique para copiar." onClick={function(){copyElementText('local');popup('adresspopup');}}><FontAwesomeIcon icon={faCopy} /> </a></h3>
                    <span className="popuptext" id="adresspopup">Morada copiado!</span>
                </div>
            </div>
            <div id="download" className="btn-download">
                <a title="Baixar Curriculum." type="button" href={process.env.PUBLIC_URL + "/down/luisFreitas.pdf"} download="curriculo.pdf" className="btn btn-primary btn-lg"><FontAwesomeIcon icon={faDownload} /> Download Curriculum</a>
            </div>
        </div>
    );
}

export default Contact;