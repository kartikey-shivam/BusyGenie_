import React, { useEffect, useState } from "react";
import { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import userphoto from "./../../images/user.png";
import Cloud from "./../../images/Layer6.png";
import Genie5 from "./../../images/genie5.png";
import axios from "axios";
const Task_user = () => {
  // const [name, email] = useSelector((state) => state.auth.user);
  // const [userInfo,setUserInfo] = useState([])
  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/v1/timeEntry").then((responseData) => {
  //     const loadedTask = responseData.data;
  //     setTaskList(loadedTask);
  //   });
  // }, []);
  // console.log("hey1", name);
  const { token, user } = useSelector((state) => state.auth.user);
  return (
    <div className="section-1">
      <div className="task_user-back_img">
        <div className="task_user-back_img-1">
          {" "}
          <img
            src={Genie5}
            alt=""
            className="task_user-back_img-1_image"
          />{" "}
        </div>{" "}
        <div className="task_user-back_img-2">
          <img src={Cloud} alt="" className="task_user-back_img-2_image" />
        </div>{" "}
      </div>{" "}
      <div className="task_user-info">
        {" "}
        <div className="task_user-info_nt">
          <div className="task_user-info_nt_name">
            {" "}
            Hi {user.name}, here some task that you have to complete.{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Task_user;
