import React from "react";
import Minus from "../Image/minus.png";
import Plus from "../Image/plus.png";
import Ellipse from "../Image/ellipse.svg";
import style from "./Player.module.css";

const Player = () => {
  return (
    <div className={style.playercontainer}>
      <img className={style.iconimg} src={Minus} alt="minus" />
      <img className={style.iconellipse} src={Ellipse} alt="ellipse" />
      <img className={style.iconimg} src={Plus} alt="Plus" />
    </div>
  );
};

export default Player;
