import React from "react";
import style from "./StationBody.module.css";

const StatioBody = (props) => {
  return <div className={style.bodypart}>{props.children}</div>;
};

export default StatioBody;
