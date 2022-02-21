import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import logoimg from "../images/logo";
import Signup from "../signup-in/signup";
import Sign_in from "../signup-in/signin";
import Task from "../task/task";
import List from "../logo/list.png";
import { logout, reset } from "../features/auth/authSlice";
import Panel1 from "./panel1";
import Panel2 from "./Panel2";

import { useDispatch, useSelector } from "react-redux";
// const Nav = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar_content"> navbar </div>{" "}
//     </div>
//   );
// };
const Layout = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <Link to={"/"} className="navigation__link">
                <button className="layout-btn">
                  <span>01</span> Home
                </button>
              </Link>
            </li>
            <li class="navigation__item">
              <Link to={"/task"} className="navigation__link">
                <button className="layout-btn">
                  <span>02</span> Tasks
                </button>
              </Link>
            </li>
            {user ? <Panel2 Clicked={onLogout} /> : <Panel1 />}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
