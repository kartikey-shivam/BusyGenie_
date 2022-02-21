import React, { Component } from "react";
import { useSelector } from "react-redux";
import More from "./../../../logo/more.png";
import Checkbox from "./../../../logo/checkbox.png";
// import Add_task from "./../addtask";
import OtherCon from "./other-con";
// import TaskDone from "./taskDone";
const AddingTask = (props) => {
  let color = false;
  if (props.precedence == "orange") {
    color = true;
  } else {
    color = false;
  }
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = new Date(props.Date);
  var d = date.getDate();
  var m = monthNames[date.getMonth()];
  var y = date.getFullYear();
  date = d + " " + m + " " + y;
  const mark = props.Mark;
  return (
    <div className="tasks-name">
      {mark ? (
        <div
          className=" tasks-name_container tasks-name_container-done"
          onClick={props.Clicked}
        >
          <div
            className="status-dot status-dot-done"
            style={{ "background-color": "silver" }}
          ></div>
          <div className=" status status-done">
            <span className="status-span-done"> </span>
          </div>
          <div className="taskName taskName-done"> {props.Name} </div>
          <div className="tasks-name_container-date tasks-name_container-date-done">
            {" "}
            {date}{" "}
          </div>
        </div>
      ) : (
        <div className="tasks-name_container" onClick={props.Clicked}>
          <div
            className="status-dot"
            style={{ "background-color": color ? "orange" : "red" }}
          ></div>
          <div className="status">
            <span className="status-span"> </span>
          </div>
          <div className="taskName"> {props.Name} </div>
          <div className="tasks-name_container-date"> {date} </div>
        </div>
      )}
    </div>
  );
};

export default AddingTask;
