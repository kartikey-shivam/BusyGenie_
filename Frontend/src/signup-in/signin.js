import React from "react";
import { Route } from "react-router-dom";
import { Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Signup from "./signup";
import logoimg from "../logo/logo.png";
import boximg from "../images/boximg.png";
import googlelogo from "../logo/search.png";
import facebooklogo from "../logo/facebook.png";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
const Sign_in = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <div className="backimg">
      <div className="signup_page">
        <div className="signup signin">
          {" "}
          <div class="signup-box signin-box">
            {" "}
            <img
              src={boximg}
              alt=""
              class="signup-box_image signinup-box_image"
            />{" "}
          </div>{" "}
          <div className="signup_container signin_container">
            <h2 className="primary-heading"> Sign In </h2>{" "}
            {/* <div className="logo_signup logo_signin">
              <div className="logo_signup-google">
                <img
                  src={googlelogo}
                  alt="$"
                  className="logo_signup-google-img"
                />
              </div>{" "}
              <div className="logo_signup-facebook">
                <img
                  src={facebooklogo}
                  alt="$"
                  className="logo_signup-facebook-img"
                />{" "}
              </div>{" "}
            </div>{" "} */}
            {/* <h3 class="or"> -OR - </h3>{" "} */}
            <form action="#" className="form form-signin" onSubmit={onSubmit}>
              {" "}
              <div className="form_grp form_grp-signin">
                {" "}
                <input
                  type="email"
                  class="form_input"
                  placeholder="Email address"
                  name="email"
                  id="email"
                  onChange={onChange}
                  required
                />{" "}
                <label for="email" class="form_lable">
                  {" "}
                  Email address{" "}
                </label>{" "}
              </div>{" "}
              <div className="form_grp">
                {" "}
                <input
                  type="password"
                  class="form_input"
                  placeholder="Password"
                  id="password"
                  name="password"
                  onChange={onChange}
                  required
                />{" "}
                <label for="password" class="form_lable">
                  {" "}
                  Password{" "}
                </label>{" "}
              </div>{" "}
              <a href={user ? "/" : "/signin"}>
                <button className="btn btn--green u-center-form-btn">
                  Sign In
                </button>
              </a>
              {/* <div class="signup-btn signin-btn">
                <button type="submit" class="signup-btn_1" a href="#">
                  {" "}
                  Sign In{" "}
                </button>{" "}
              </div>{" "} */}
            </form>{" "}
            <div className="signin_text">
              <Link to="/signup">
                <p className="signin_text_1"> Create new account </p>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          <div className="main_logo-signin">
            <img src={logoimg} alt="logo" className="main_logo-signin_image" />
            <div className="signup_text signup_text-1">
              <p className="left_text"> Be your own time </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Sign_in;
