import React from "react";
import "../css/maine.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper__hours-information">
        <h2>Godziny otwarcia:</h2>
        <p>Pn - Pt - 08:00 do 17:00</p>
        <p>Sobota - nieczycnne</p>
        <p>Niedziela - nieczycnne</p>
        <p></p>
      </div>
      <div className="footer-wrapper__contact-information">
        <h2>Kontakt:</h2>
        <p>Tel: 500-000-00</p>
        <p>e-mail: auto@serwis.com</p>

        <p></p>
      </div>
      <div className="footer-wrapper__adress-information">
        <h2>Adres:</h2>
        <p>Ul. Rozrywka 1</p>
        <p>Tarnów 31-419</p>

        <p></p>
      </div>
      <a
        className="footer-wrapper__author"
        target="_blank"
        href="http://proficz.com/"
      >
        <h2>proficz.com</h2>
      </a>
    </div>
  );
};

export default Footer;
