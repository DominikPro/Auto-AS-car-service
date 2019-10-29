import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "../css/maine.css";

const ServicesPage = () => {
  return (
    <div className="services-page-wrapper">
      <div className="title-box">
        <h1 className="title-box__maine-title animated flipInX delay-0.7s">
          Usługi świadczymy już od ponad 10 lat!
        </h1>
        <h4 className="title-box__subtitle">
        Jesteśmy profesjonalnym warsztatem samochodowym. Zajmujemy się diagnostyką       i serwisowaniem samochodów osobowych i dostawczych wszystkich marek. Nasi mechanicy to profesjonaliści, z wieloletnim doświadczeniem zawodowym w branży motoryzacyjnej.   Zapewniamy najwyższą jakość usług, ponieważ podczas diagnostyki i naprawy samochodów wykorzystujemy specjalistyczny  sprzęt oraz nowoczesne narzędzia diagnostyczne.
        </h4>
      </div>

      <div className="product-box  ">
        <div className="icon">
          <i className="fas fa-car-alt icon__i"></i>
        </div>

        <h2 className="product-box__title">Wymiana opon</h2>
        <p className="product-box__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum
          autem libero sequi impedit ducimus explicabo eum quo voluptatibus!
          Deserunt, consequatur laudantium? Minus magni minima ipsa impedit iste
          sint ab.
        </p>
        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>

      <div className="product-box">
        <div className="icon">
          <i class="fas fa-allergies icon__i"></i>
        </div>
        <h2 className="product-box__title">Wymiana opon</h2>
        <p className="product-box__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum
          autem libero sequi impedit ducimus explicabo eum quo voluptatibus!
          Deserunt, consequatur laudantium? Minus magni minima ipsa impedit iste
          sint ab.
        </p>
        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>

      <div className="product-box">
        <div className="icon">
          <i class="fas fa-car-crash icon__i"></i>
        </div>
        <h2 className="product-box__title">Wymiana opon</h2>
        <p className="product-box__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum
          autem libero sequi impedit ducimus explicabo eum quo voluptatibus!
          Deserunt, consequatur laudantium? Minus magni minima ipsa impedit iste
          sint ab.
        </p>
        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>

      <div className="product-box">
        <div className="icon">
          <i class="fas fa-car-side icon__i"></i>
        </div>
        <h2 className="product-box__title">Wymiana opon</h2>
        <p className="product-box__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum
          autem libero sequi impedit ducimus explicabo eum quo voluptatibus!
          Deserunt, consequatur laudantium? Minus magni minima ipsa impedit iste
          sint ab.
        </p>
        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>
      <div className="product-box">
        <div className="icon">
          <i class="fas fa-tachometer-alt icon__i"></i>
        </div>
        <h2 className="product-box__title">Wymiana opon</h2>
        <p className="product-box__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum
          autem libero sequi impedit ducimus explicabo eum quo voluptatibus!
          Deserunt, consequatur laudantium? Minus magni minima ipsa impedit iste
          sint ab.
        </p>
        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>

      <div className="product-box">
        <div className="icon">
          <i className="fas fa-paper-plane icon__i"></i>
        </div>
        <h2 className="product-box__title">Wymiana opon</h2>
        <p className="product-box__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum
          autem libero sequi impedit ducimus explicabo eum quo voluptatibus!
          Deserunt, consequatur laudantium? Minus magni minima ipsa impedit iste
          sint ab.
        </p>
        <NavLink className="navLink" to="/contact">
          <button className="product-box__button">Umów wizytę</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ServicesPage;
