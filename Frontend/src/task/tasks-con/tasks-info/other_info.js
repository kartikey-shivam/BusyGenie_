import React from "react";
// import Edit from "./../../logo/edit.png";
const Other_info1 = (props) => {
  return (
    <div className="other-con_sub">
      <div class="form_grp">
        {" "}
        <h3 className="other_info-heading"> {props.Value} </h3>{" "}
        <input
          type={props.Type}
          class="form_input form_input-1"
          placeholder={props.Ph}
          id={props.Value}
          onChange={props.Change}
          name={props.Name}
        />{" "}
        <label for={props.Value} class="form_lable">
          {" "}
          {props.Label}{" "}
        </label>{" "}
      </div>{" "}
    </div>
  );
};
export default Other_info1;
