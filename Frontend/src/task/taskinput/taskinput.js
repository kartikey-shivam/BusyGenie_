import React from "react";
import Task_input_con from "./task_input-con";
// import Task_nav from "./task-nav";
import Task_img from "./../../images/task_img.png";
const Task_input = (props) => {
  return (
    <div className="task">
      <img src={Task_img} alt="" className="task-img" />{" "}
      <div className="task_input">
        {" "}
        <Task_input_con />{" "}
      </div>{" "}
    </div>
  );
};

export default Task_input;
