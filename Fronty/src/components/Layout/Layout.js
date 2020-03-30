import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";

export default props => {
  return (
    <React.Fragment>
      <Navbar />
      <main className={classes.layout}>{props.children}</main>
    </React.Fragment>
  );
};
