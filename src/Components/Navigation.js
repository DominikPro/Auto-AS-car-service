import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "../css/maine.css";
import logoImg from "../img/logo.jpg";

const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <div className="logo animated flipInX delay-0.9s">
        <NavLink to="/" exact>
          <img
            className="logo__img"
            src={logoImg}
            alt="logo firmy"
            width="150px"
          />
        </NavLink>

        <h1 className="logo__motto">Serwis samochodów osobowy i dostawczych</h1>
      </div>
      <ul className="navigation ">
        <li className="navigation__item">
          <NavLink
            activeClassName="navigation__link--active"
            className="navigation__link"
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>

        <li className="navigation__item">
          <NavLink
            activeClassName="navigation__link--active"
            className="navigation__link"
            to="/services"
          >
            Usługi
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            activeClassName="navigation__link--active"
            className="navigation__link"
            to="/contact"
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
