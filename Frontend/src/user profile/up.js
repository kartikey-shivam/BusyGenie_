import React from "react";
import Other_info from "./up2";
import Edit from "./../logo/edit.png";
import Back_img_1 from "./../images/genie4.png";
import Back_img_2 from "./../images/genie3.png";
import Layout from "./../component/layout";
import { useSelector } from "react-redux";
const Up = () => {
  const { token, user } = useSelector((state) => state.auth.user);
  return (
    // <div className="up">
    <div className="up-back_img">
      <Layout />
      <div className="up-back_img-1">
        {" "}
        <div class="up_container">
          {" "}
          <div className="up_info">
            {/* <div className="up_photo">
                {" "}
                <img src={Edit} alt="" className="edit-logo_main" />
              </div>{" "} */}
            <h2 className="up_info_name u-margin-bottom-small">
              {" "}
              {user.name}{" "}
            </h2>{" "}
            <h2 className="up_info_email"> {user.email}</h2>{" "}
          </div>{" "}
          <div className="other-con">
            <Other_info
              Name="Username"
              Type="text"
              Label="username"
              Ph="Example: Devil, Dcoder, etc..."
            />
            <Other_info
              Name="Phone number"
              Type="tel"
              Label="Phn.No."
              Ph="+91-XXXXXXXXXX"
            />
            <Other_info
              Name="About"
              Type="text"
              Label="About"
              Ph="Example: Active, Busy, etc..."
            />
            <Other_info
              Name="Skills"
              Type="text"
              Label="Skills"
              Ph="Example: Web developer, programmer, etc..."
            />
            <div>
              <a href="/">
                <button className="btn btn--green">Submit</button>
              </a>
            </div>
          </div>{" "}
        </div>{" "}
        <div className="up-back_img-1">
          <img src={Back_img_1} alt="" className="up-back_img-1_image" />
        </div>
      </div>{" "}
      <div className="up-back_img-2">
        {" "}
        <img src={Back_img_2} alt="" className="up-back_img-2_image" />
      </div>{" "}
    </div>
    // </div>
  );
};
export default Up;
