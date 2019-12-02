import React from "react";
import { NavLink } from "react-router-dom";
import "../css/maine.css";

const ServicesPage = () => {
  return (
    <div className="services-page-wrapper">
      <div className="title-box">
        <h1 className="title-box__maine-title animated flipInX delay-0.7s">
          Usługi świadczymy już od ponad 10 lat!
        </h1>
        <h4 className="title-box__subtitle">
          Jesteśmy profesjonalnym warsztatem samochodowym. Zajmujemy się
          diagnostyką i serwisowaniem samochodów osobowych i dostawczych
          wszystkich marek. Nasi mechanicy to profesjonaliści, z wieloletnim
          doświadczeniem zawodowym w branży motoryzacyjnej. Zapewniamy najwyższą
          jakość usług, ponieważ podczas diagnostyki i naprawy samochodów
          wykorzystujemy specjalistyczny sprzęt oraz nowoczesne narzędzia
          diagnostyczne.
        </h4>
      </div>

      <div className="product-box  ">
        <div className="icon">
          <i className="fas fa-car-alt icon__i"></i>
        </div>

        <h2 className="product-box__title">Przegląd ogólny</h2>
        <div className="product-box__description">
          Kompleksowe przeglądy samochodu od <br />
          <p className="price">100 pln.</p>
        </div>
        <div className="product-box__description">
          Czyszczenie i dezynfekcja klimatyzacji preparatem Wurth od <br />
          <p className="price">50 pln.</p>
        </div>

        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>

      <div className="product-box">
        <div className="icon">
          <i className="fas fa-allergies icon__i"></i>
        </div>
        <h2 className="product-box__title">Wymiana płynów </h2>
        <div className="product-box__description">
          Wymiana oleju silnikowego od <br />
          <p className="price"> 60 pln.</p>
        </div>
        <div className="product-box__description">
          Wymiana płynu chłodniczego od <br />
          <p className="price"> 80 pln.</p>
        </div>
        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>

      <div className="product-box">
        <div className="icon">
          <i className="fas fa-car-crash icon__i"></i>
        </div>
        <h2 className="product-box__title">Wymiana opon</h2>
        <div className="product-box__description">
          Wymiana kół wraz z wyważeniem od
          <br /> <p className="price">50 pln.</p>
        </div>
        <div className="product-box__description">
          Wymiana opon wraz z wyważeniem od <br />
          <p className="price">70 pln.</p>
        </div>
        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>

      <div className="product-box">
        <div className="icon">
          <i className="fas fa-car-side icon__i"></i>
        </div>
        <h2 className="product-box__title">Przegląd przed zakupem</h2>
        <div className="product-box__description">
          Nasi specjaliści z wieloletnim doświadczeniem wykonają dla Ciebie
          Kompleksowy przegląd samochodu przed zakupem od
          <br /> <p className="price"> 140 pln.</p>
        </div>
        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>
      <div className="product-box">
        <div className="icon">
          <i className="fas fa-tachometer-alt icon__i"></i>
        </div>
        <h2 className="product-box__title">Diagnosytka komputerowa</h2>
        <div className="product-box__description">
          Diagnostyka komputerowa wraz z kasowaniem błedów od <br />{" "}
          <p className="price"> 50 pln.</p>
        </div>
        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>

      <div className="product-box">
        <div className="icon">
          <i className="fas fa-paper-plane icon__i"></i>
        </div>
        <h2 className="product-box__title">Kompleksowy serwis</h2>
        <p className="product-box__description">
          Świadczymy pełen zakres usług serwisowych. Dzięki specjaslistycznym
          narzędziom oraz doświadczeniu szybko i trafnie diagnozujemy usterki.
          Wstępną wycene przygotujem już przez telefon.
        </p>
        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ServicesPage;
