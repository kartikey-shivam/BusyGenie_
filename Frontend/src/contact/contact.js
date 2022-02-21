import React from "react";
import { Insta } from "./../images/insta.png";
import { In } from "./../images/in.png";
import { Discord } from "./../images/discord.png";
import { lakshay } from "./../images/lakshay.png";
import { pragya } from "./../images/pragya.png";

const Person = (props) => {
  return (
    <div className="person-con">
      <div className="person-img"></div>
      <div className="person-con_info">
        <div className="person-con_info-name">{props.Name}</div>
        <div className="person-con_info-icon">
          <div className="person-con_info-icon_img-1"></div>
          <div className="person-con_info-icon_img-2"></div>
          <div className="person-con_info-icon_img-3"></div>
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-con">
        <div className="contact-con_img">
          <img src="" alt="" className="contact-con_img-1" />
        </div>
        <div className="person-con">
          <div className="person-img-1"></div>
          <div className="person-con_info">
            <div className="person-con_info-name">Shivam Saraswat</div>
            <div className="person-con_info-icon">
              <div
                href="https://github.com/kartikey-shivam"
                className="person-con_info-icon_img-1"
              ></div>
              <div href="" className="person-con_info-icon_img-2"></div>
              <div href="" className="person-con_info-icon_img-3"></div>
            </div>
          </div>
        </div>
        <div className="person-con">
          <div className="person-img-2"></div>
          <div className="person-con_info">
            <div className="person-con_info-name">Pragya Rathore</div>
            <div className="person-con_info-icon">
              <div
                href="https://github.com/pika918"
                className="person-con_info-icon_img-1"
              ></div>
              <div
                href="https://www.linkedin.com/in/pragyarathore29"
                className="person-con_info-icon_img-2"
              ></div>
              <div href="" className="person-con_info-icon_img-3"></div>
            </div>
          </div>
        </div>
        <div className="person-con">
          <div className="person-img-3"></div>
          <div className="person-con_info">
            <div className="person-con_info-name">Lakshay Parashar</div>
            <div className="person-con_info-icon">
              <div
                href="https://github.com/DCoder-1/"
                className="person-con_info-icon_img-1"
              ></div>
              <div href="" className="person-con_info-icon_img-2"></div>
              <div href="" className="person-con_info-icon_img-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
