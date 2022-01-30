import React from "react";
import style from "./Header.module.css";
import backArrow from "../Image/back-arrow.png";
import swich from "../Image/switch.png";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <img src={backArrow} alt="back-arrow" />
        <h1>HEADER</h1>
        <img src={swich} alt="switch" />
      </div>
    </div>
  );
};

export default Header;
