import React from "react";
import "../css/navigation.css";

const Navigation = () => {
  return (
<div className="navigation-wrapper">
  <div className="logo">
  <img className="logo__image" src="https://dummyimage.com/50x50/fff/aaa" alt="logo" height="50px" width="50"/>
  </div> 
      <ul className="navigation">
        <li className="navigation__item">
        <a className="navigation__link"  href="#">Button</a>
        </li>
        <li className="navigation__item">
        <a className="navigation__link"  href="#">Button</a></li>
        <li className="navigation__item"><a className="navigation__link"  href="#">Button</a></li>
        <li className="navigation__item"><a className="navigation__link"  href="#">Button</a></li>
      </ul>
  </div>
  );
};

export default Navigation;
