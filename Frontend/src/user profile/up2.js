import React from "react";
import Edit from "./../logo/edit.png";
const Other_info = (props) => {
  return (
    <div className="other-con_sub">
      <div class="form_grp">
        {" "}
        <h3 className="tertiary_heading other-con_sub-heading">
          {" "}
          {props.Name}{" "}
        </h3>{" "}
        <input
          type={props.Type}
          class="form_input"
          placeholder={props.Ph}
          id={props.Name}
        />{" "}
        <label for={props.Name} class="form_lable">
          {" "}
          {props.Label}{" "}
        </label>{" "}
        {/* <div className="editlogo">
          <img src={Edit} className="edit-logo" />{" "}
        </div>{" "} */}
      </div>{" "}
    </div>
  );
};
export default Other_info;
