import React from "react";
import { Link } from "react-router-dom";
const Panel1 = () => {
  return (
    <div>
      <li class="navigation__item">
        <Link to={"/signin"} className="navigation__link">
          <button className="layout-btn">
            <span>03</span> Login
          </button>
        </Link>
      </li>
      <li class="navigation__item">
        <Link to={"/signup"} className="navigation__link">
          <button className="layout-btn">
            <span>04</span> SignUp
          </button>
        </Link>
      </li>
    </div>
  );
};
export default Panel1;
