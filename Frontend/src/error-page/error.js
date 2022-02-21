import React from "react";
import Genie10 from "./../images/Genie10.png";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <div className="error-page">
        <img src={Genie10} alt="" className="genie10-img" />
        <div className="error-container">
          <h1 className="error_heading"> Page Not Found </h1>{" "}
          <p className="error_text">
            {" "}
            Even genie is not able to find your page{" "}
          </p>{" "}
        </div>{" "}
        <div className="circle-con">
          <div className="circle_focus"> </div>{" "}
        </div>{" "}
      </div>{" "}
      <Link to="/">Home</Link>
    </div>
  );
};

export default Error;
