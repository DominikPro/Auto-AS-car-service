// import React from "react";
import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
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
    console.log(this.state.hamburgerMenuOpen);
  };

  render() {
    return (
      <>
        <div className="navigation-wrapper">
          <div
            // onClick={this.handleClickHambyrger}
            className="logo animated flipInX delay-0.9s"
          >
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
          {/* onClick={handleClickHambyrger} */}
          <div
            onClick={this.handleClickHambyrger}
            className="hamburger-menu-button"
          >
            <i class="fas fa-bars"></i>
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
