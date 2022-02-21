import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoimg from "../logo/logo.png";
import boximg from "../images/boximg.png";
import googlelogo from "../logo/search.png";
import facebooklogo from "../logo/facebook.png";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "./../features/auth/authSlice";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
      navigate("/task");
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

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };
  // if(isLoading){
  //   return <></>
  // }
  return (
    <div className="backimg">
      <div class="signup_page">
        <div class="signup">
          <div class="main_logo">
            {" "}
            <img src={logoimg} alt="" class="main_logo-image" />{" "}
            <div class="signup_text">
              <p class="left_text"> Be your own time </p>{" "}
            </div>{" "}
          </div>{" "}
          <div class="signup-box">
            {" "}
            <img src={boximg} alt="" class="signup-box_image" />{" "}
          </div>{" "}
          <div class="signup_container">
            <h2 class="primary-heading"> Create your account </h2>{" "}
            {/* <div className="logo_signup">
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
            </div>{" "}
            <h3 class="or"> -OR - </h3>{" "} */}
            <form action="#" class="form" onSubmit={onSubmit}>
              <div class="form_grp">
                {" "}
                <input
                  type="text"
                  class="form_input"
                  placeholder="Full Name"
                  name="name"
                  value={name}
                  id="name"
                  onChange={onChange}
                  required
                />{" "}
                <label for="fullName" class="form_lable">
                  {" "}
                  Full Name{" "}
                </label>{" "}
              </div>{" "}
              <div class="form_grp">
                {" "}
                <input
                  type="email"
                  class="form_input"
                  placeholder="Email address"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />{" "}
                <label for="email" class="form_lable">
                  {" "}
                  Email address{" "}
                </label>{" "}
              </div>{" "}
              <div class="form_grp">
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
              <div class="form_grp">
                {" "}
                <input
                  type="password"
                  class="form_input"
                  placeholder="Confirm Password"
                  id="password2"
                  name="password2"
                  onChange={onChange}
                  required
                />{" "}
                <label for="confirm password" class="form_lable">
                  {" "}
                  confirm Password{" "}
                </label>{" "}
              </div>{" "}
              <a href={user ? "/" : "/signup"}>
                <button className="btn btn--green u-center-form-btn">
                  Sign Up
                </button>
              </a>
              {/* <div class="signup-btn">
                <button type="submit" class="signup-btn_1" href="#">
                  {" "}
                  Create Account{" "}
                </button>{" "}
              </div>{" "} */}
            </form>{" "}
            <div class="signin_text">
              <Link to="/signin">
                <p class="signin_text_1"> Already have an account ? </p>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Signup;
