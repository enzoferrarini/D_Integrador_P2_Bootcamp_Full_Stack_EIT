import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="redes">
          <p className="footer__tittle">Juguetería Cósmica</p>
          <div>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="contactos flex__direction ai__c">
          <p>¿Necesitas Ayuda?</p>
          <p className="d__flex f__column ai__c">
            <span>Centro de Ayuda</span>
            <span>Preguntas Frecuentes</span>
            <span>Solicitud devoluciones</span>
          </p>
        </div>
        <div className="contactos flex__direction ai__c">
          <p>Atención al Cliente</p>
          <p className="d__flex f__column ai__c">
            <span>0800 122 0338</span>
            <span>0810 999 3728</span>
            <span>contacto@jc.com</span>
          </p>
        </div>
        <div className="contactos flex__direction ai__c">
          <p>Venta Telefónica</p>
          <p className="d__flex f__column ai__c">
            <span>0810 333 8700</span>
            <span>ventas@jc.com</span>
          </p>
        </div>
      </div>
      </footer>
  );
}
export default Footer;
