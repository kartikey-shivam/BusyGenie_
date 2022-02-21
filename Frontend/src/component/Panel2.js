import React from "react";
import { Link } from "react-router-dom";
const Panel2 = (props) => {
  return (
    <div>
      <li class="navigation__item">
        <Link to={"/about"} class="navigation__link">
          <button className="layout-btn">
            <span>03</span> About
          </button>
        </Link>
      </li>
      <li class="navigation__item" onClick={props.Clicked}>
        <Link to={"/"} className="navigation__link">
          <button className="layout-btn">
            <span>04</span> Logout
          </button>
        </Link>
      </li>
    </div>
  );
};
export default Panel2;
