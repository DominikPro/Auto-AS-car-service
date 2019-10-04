import React from "react";
import { BrowserRouter as Router,Link, NavLink, Route } from "react-router-dom";
import "../css/maine.css";

const Navigation = () => {
  return (
   
<div className="navigation-wrapper">
  <div className="logo">
  <img className="logo__image" src="https://dummyimage.com/50x50/fff/aaa" alt="logo" height="50px" width="50"/>
  </div> 
      <ul className="navigation">
        <li className="navigation__item"><NavLink activeClassName="navigation__link--active" className="navigation__link" to="/" exact>Home</NavLink></li>
        <li className="navigation__item"><NavLink activeClassName="navigation__link--active" className="navigation__link" to="/contact">Kontakt</NavLink></li>
        <li className="navigation__item"><NavLink activeClassName="navigation__link--active" className="navigation__link" to="/services">Usługi</NavLink></li>
      </ul>
  </div>
 
  );
};

export default Navigation;
