import React from "react";
import "../css/maine.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import logoFordPng from "../img/logoFordPng.png";

const HomePage = () => {
  return (
    <div className="home-page-wraper ">
      <div className="home-page-wraper__shadow-bacground"></div>

      <div className="titleHomPage  animated fadeInLeftBig delay-0.95s">
        <h1>Nasza specjalizacja</h1>
        <img
          className="titleHomPage__logoFord"
          src={logoFordPng}
          alt="logo firmy ford"
          width="160px"
        />
        <h3 className="titleHomPage__subtitel">
          "Samochodu nie można traktować jak żyjącej istoty. Samochód potrzebuje
          miłości." - Walter Röhrl
        </h3>
        <NavLink className="navLink" to="/contact">
          <button className=" animated rubberBand titleHomPage__button-call">
            <p>Umów wizytę</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
