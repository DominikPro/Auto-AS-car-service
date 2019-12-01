import React from "react";
import "../css/maine.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper__hours-information">
        <h2 className="footer-group-name">Godziny otwarcia:</h2>
        <p>Pn - Pt - 08:00 do 17:00</p>
        <p>Sobota - nieczycnne</p>
        <p>Niedziela - nieczycnne</p>
        <p></p>
      </div>
      <div className="footer-wrapper__contact-information">
        <h2 className="footer-group-name">Kontakt:</h2>
        <p href="tel:+530900904">
          <i className="fas fa-phone-alt"></i>Tel: 503-900-904
        </p>
        <p>
          <i className="far fa-envelope"></i>e-mail: auto@serwis.com
        </p>

        <p></p>
      </div>
      <div className="footer-wrapper__adress-information">
        <h2 className="footer-group-name">Adres:</h2>
        <p>Ul. Rozrywka 1</p>
        <p>Kraków 31-419</p>

        <p></p>
      </div>
      <a className="footer-wrapper__author" href="http://proficz.com/">
        <h2>proficz.com</h2>
      </a>
    </div>
  );
};

export default Footer;
