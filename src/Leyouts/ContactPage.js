import React from "react";
import "../css/maine.css";
import Footer from "../Components/Footer";
import Maps from "../Components/Maps";

const ContactPage = () => {
  return (
    <>
      <div className="wraper-contact-page">
        <div className="contact-title-box">
          <h1 className="contact-title-box__maine-title animated flipInX delay-0.9s">
            Informajce o nas
          </h1>
        </div>
        <Maps />
        <div className="information">
          <h1 className="information__title ">Umów wizytę</h1>
          <h3 className="information__subtitle">
            By usprawnić obsługę przygotuj:
          </h3>
          <p className="information__subtitle">- Numer rejstracyjny pojazdu</p>
          <p className="information__subtitle">- Numer vin pojazdu</p>
          <p className="information__subtitle">
            - Krótki opis co trapi twój samochód
          </p>
          <p className="phone-number">
            <i className=" phone-number__icon fas fa-phone-alt"></i>
            <h3 href="tel:+48530900904">tel: 530900904</h3>
          </p>
          <a href="tel:+48530900904" className="phone-button">
            <i
              href="tel:+48530900904"
              className="phone-button__icon fas fa-phone-alt"
            ></i>
            <p href="tel:+48530900904">Kliknij by zadzwonić</p>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
