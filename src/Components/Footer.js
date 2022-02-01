import React from "react";
import { useSelector } from "react-redux";
import style from "./Footer.module.css";

const Footer = () => {
  const { station } = useSelector((state) => state);
  return (
    <div className={style.footerpart}>
      {Object.keys(station).length !== 0 && (
        <div>
          <p>currently Playing</p>
          <h5>{station.payload.sname} playing</h5>
        </div>
      )}
    </div>
  );
};

export default Footer;
