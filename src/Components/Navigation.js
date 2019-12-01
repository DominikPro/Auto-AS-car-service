import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/maine.css";
import logoImg from "../img/logo.jpg";

class Navigation extends Component {
  state = {
    hamburgerMenuOpen: false
  };

  handleClickHambyrger = () => {
    this.setState(prevState => ({
      hamburgerMenuOpen: !prevState.hamburgerMenuOpen
    }));
  };

  render() {
    return (
      <>
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

            <h1 className="logo__motto animated flipInX delay-0.9s">
              Serwis samochodów osobowy i dostawczych
            </h1>
          </div>

          <div
            onClick={this.handleClickHambyrger}
            className="hamburger-menu-button"
          >
            <i className="fas fa-bars"></i>
          </div>
          <ul
            className={
              this.state.hamburgerMenuOpen ? "navigation" : "navigationOff"
            }
          >
            <li className="navigation__item">
              <NavLink
                onClick={this.handleClickHambyrger}
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
                onClick={this.handleClickHambyrger}
                activeClassName="navigation__link--active"
                className="navigation__link"
                to="/services"
              >
                Usługi
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                onClick={this.handleClickHambyrger}
                activeClassName="navigation__link--active"
                className="navigation__link"
                to="/contact"
              >
                Kontakt
              </NavLink>
            </li>
            <a
              href="https://www.facebook.com/Autoas-Krak%C3%B3w-319645204799559/"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a href="tel:+48530900904" className="phone-button-navigation">
              <i
                href="tel:+48530900904"
                className="phone-button__icon fas fa-phone-alt"
              ></i>
              <p href="tel:+48530900904">Zadzwoń</p>
            </a>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
