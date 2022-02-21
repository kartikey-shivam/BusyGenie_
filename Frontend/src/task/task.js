import React from "react";
import Task_user from "./userinfo-other/task_user-info";
import { Routes, Route, Link } from "react-router-dom";
import Task_input from "./taskinput/taskinput";
import TimeBar from "./timebar/time";
import Layout from "./../component/layout";
// import Add_task from "../addtask";
import Cld from "./calendar/calendar";
import { Component } from "react/cjs/react.production.min";
// import { Route } from "react-router";
class Task_ui extends Component {
  render() {
    return (
      <div>
        {" "}
        {/* <Layout /> */}
        <Task_user />
        <Task_input />
        {/* <Cld />
        <Routes></Routes>{" "} */}
      </div>
    );
  }
}
export default Task_ui;
