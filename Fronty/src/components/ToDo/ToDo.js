import React from "react";
import classes from "./ToDo.module.css";

export default props => {
  return (
    <div className={classes.ToDo} onClick={props.delete}>
      <h4>{props.content}</h4>
    </div>
  );
};
