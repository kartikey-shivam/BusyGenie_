import React, { Component, useState, useEffect } from "react";
import Add from "./../../images/add.png";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Genie_6 from "./../../images/Genie6.png";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Plus from "./../../logo/plus.png";
import Check from "./../../logo/check.png";
import Trash from "./../../logo/trash.png";
import AddingTask from "./tasks/AddingTask";
import Filter from "./../../logo/filter.png";
import Show from "./../openTaskPage/taskShow";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Sidebar = () => {
  return (
    <div className="task_input-container-sidebar">
      <div className="task_input-container-sidebar_item task_input-container-sidebar-1">
        {" "}
        <Link to={"/addtask"}>
          {" "}
          <img
            src={Plus}
            alt=""
            className="task_input-container-sidebar_img "
          />{" "}
          {/* <span className="logo-hover_text"> Add new task </span>{" "} */}{" "}
        </Link>{" "}
      </div>{" "}
      <div className="task_input-container-sidebar_item task_input-container-sidebar-2">
        {" "}
        <Link to={"/calendar"}>
          <img
            src={Check}
            alt=""
            className="task_input-container-sidebar_img"
          />{" "}
        </Link>
        <span className="logo-hover_text">calendar </span>{" "}
      </div>{" "}
      {/* <div className="task_input-container-sidebar_item task_input-container-sidebar-2">
        {" "}
        <img
          src={Filter}
          alt=""
          className="task_input-container-sidebar_img"
        />{" "}
        <span className="logo-hover_text filter-con">
          <ul>
            <li className="other-option_container-subjects"> By name </li>{" "}
            <li className="other-option_container-subjects"> By precedence </li>{" "}
            <li className="other-option_container-subjects"> By Date </li>{" "}
          </ul>{" "}
        </span>{" "}
      </div>{" "} */}
      <div className="task_input-container-sidebar_item task_input-container-sidebar-3">
        {" "}
        <Link to={"/task/pomodoro"}>
          <img
            src={Trash}
            alt=""
            className="task_input-container-sidebar_img"
          />{" "}
        </Link>
        <span className="logo-hover_text"> pomodoro clock</span>{" "}
      </div>{" "}
    </div>
  );
};
const NewTask = (props) => {
  return (
    <div className="tasks-name">
      <div className="tasks-name_box">
        <img src={Add} alt="" className="tasks-name_img" />{" "}
      </div>{" "}
    </div>
  );
};
const Task_input_con = () => {
  const [taskList, setTaskList] = useState([]);
  const dispatch = useDispatch();
  // const { token, user } = useSelector((state) => state.auth.user);
  useEffect(() => {
    axios
      .get("https://busygenie.herokuapp.com/api/v1/timeEntry")
      .then((responseData) => {
        const loadedTask = responseData.data;
        setTaskList(loadedTask);
      });
  }, []);
  console.log(taskList);
  // const dataManipulation = (props) => {
  //   dispatch({ type: "updateData", val: taskList });
  // };
  const listTask = taskList.map((task) => {
    return (
      <Link to="/showingTask">
        <AddingTask
          Name={task.taskName}
          Date={task.dateOfFinalization}
          precedence={task.precedence}
          Mark={task.markAsDone}
          Clicked={() => {
            dispatch({
              type: "updateData",
              tsk: task.taskName,
              dof: task.dateOfFinalization,
              pdc: task.precedence,
              id: task._id,
              msd: task.markAsDone,
              cmt: task.comment,
            });
          }}
        />
      </Link>
    );
  });
  return (
    <div className="task_input-container">
      <Sidebar /> <h3 className="task_input-container-box_heading">Tasks</h3>
      <div className="task_input-container-box">{listTask}</div>{" "}
      <div className="task_genie">
        <img src={Genie_6} alt="" className="task_genie-img" />
      </div>{" "}
    </div>
  );
};

export default Task_input_con;
