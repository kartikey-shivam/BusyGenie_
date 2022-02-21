import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Background from "./../../images/back_show.png";
import InkPen from "./../../images/pen.png";
import axios from "axios";
import TimeBox from "./../timebar/time";
const Show = () => {
  const dispatch = useDispatch();
  const taskName = useSelector((state) => state.custom.taskName);
  const dateOfFinalization = useSelector(
    (state) => state.custom.dateOfFinalization
  );
  const id = useSelector((state) => state.custom.id);
  const comment = useSelector((state) => state.custom.comment);
  const markAsDone = useSelector((state) => state.custom.markAsDone);
  const [formState, setFormState] = useState(
    taskName,
    dateOfFinalization,
    id,
    comment,
    markAsDone
  );
  // const msd = useSelector((state) => state.markAsDone);
  // useEffect(() => {
  //   const formS = JSON.parse(localStorage.getItem("user"));
  //   if (
  //     taskName === "" &&
  //     dateOfFinalization === "" &&
  //     id === "" &&
  //     comment === "" &&
  //     markAsDone === ""
  //   ) {
  //     setFormState((prev) => ({ ...prev, ...formS }));
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(formState));
  // }, []);

  const deleteHandler = () => {
    // console.log(id);
    axios.delete(`https://busygenie.herokuapp.com/api/v1/timeEntry/${id}`);
  };
  const markAsDonefunc = () => {
    if (markAsDone) {
      axios.patch(`https://busygenie.herokuapp.com/api/v1/timeEntry/${id}`, {
        markAsDone: false,
      });
    } else {
      axios.patch(`https://busygenie.herokuapp.com/api/v1/timeEntry/${id}`, {
        markAsDone: true,
      });
    }
  };

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
  var date = new Date(dateOfFinalization);
  var d = date.getDate();
  var m = monthNames[date.getMonth()];
  var y = date.getFullYear();
  date = d + " " + m + " " + y;
  const mark = markAsDone ? "mark as undone" : "mark as done";
  console.log(mark);
  return (
    <div className="task_show">
      <div className="back">
        <img src={Background} alt="" className="back_img" />
      </div>
      <div className="show-con">
        <div className="show-main_heading">Task Info</div>
        <div className="show-con_box">
          <h3 className="show-con_box_heading">Task Name</h3>
          <p className="show-con_box_content">{taskName}</p>
        </div>
        <div className="show-con_box">
          <h3 className="show-con_box_heading">Submit date</h3>
          <p className="show-con_box_content">{date}</p>
        </div>
        <div className="show-con_box">
          <h3 className="show-con_box_heading">Comment</h3>
          <p className="show-con_box_content">{comment}</p>
        </div>
        {/* <div className="show-con_box">
          <h3 className="show-con_box_heading">Time status</h3>
          <p className="show-con_box_content">23 hrs</p>
        </div> */}
      </div>
      <div className="timeBox">
        <TimeBox />
      </div>
      <div className="show-btn">
        <Link to={"/task"}>
          <button type="" className="btn btn--green" onClick={markAsDonefunc}>
            {markAsDone ? "mark as undone" : "mark as done"}
          </button>
        </Link>
        <Link to={"/task"}>
          {" "}
          <button type="" className="btn btn--green" onClick={deleteHandler}>
            Delete
          </button>
        </Link>
      </div>
      <div className="ink-pen">
        <img src={InkPen} alt="" className="ink-pen_img" />
      </div>
    </div>
  );
};
3;
export default Show;
