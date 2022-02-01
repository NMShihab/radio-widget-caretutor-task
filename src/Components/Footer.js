import React from "react";
import { useSelector } from "react-redux";
import style from "./Footer.module.css";

const Footer = () => {
  const { station } = useSelector((state) => state);
  return (
    <div className={style.footerpart}>
      {Object.keys(station).length !== 0 && (
        <div>
          <p className={style.ptext}>currently Playing</p>
          <span className={style.sptext}>{station.station.sname}</span>
        </div>
      )}
    </div>
  );
};

export default Footer;
