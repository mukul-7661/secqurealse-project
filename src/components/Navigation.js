import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div>
      <ul className="nav">
        <li className="nav__list">
          <span className="first">S</span>
          <span className="second">ECURE</span>
          <span className="third">Al</span>
          <span className="second">SE</span>
        </li>
        <li className="nav__list">
          <div className="nav__counters">
            <div className="nav__counter__male">{props.male}</div>
            <div className="nav__counter__female">{props.female}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
