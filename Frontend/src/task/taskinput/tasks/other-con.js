import React from "react";

const OtherCon = () => {
  return (
    <div className="other-option_container">
      <ul>
        <li className="other-option_container-subjects"> Edit task </li>{" "}
        <li className="other-option_container-subjects"> Mark as done </li>{" "}
        <li
          className="other-option_container-subjects"
          // onClick={props.deleteHandler}
        >
          {" "}
          Delete task{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
};
export default OtherCon;
