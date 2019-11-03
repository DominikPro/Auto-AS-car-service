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
            onClick={this.handleClickHambyrger}
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
            <p className="phone-button-navigation" href="tel:+530900904">
              <i className=" phone-button__icon fas fa-phone-alt"></i>
              <p>Zadzwoń</p>
            </p>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
