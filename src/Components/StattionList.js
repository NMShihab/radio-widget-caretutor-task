import React, { useState } from "react";
import Data from "../Data/Data";
import style from "./StationList.module.css";

const StattionList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlePlay = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log(e);
  };
  return (
    <div className={style.listcontainer}>
      {Data.map((d) => (
        <div className={style.list} onClick={handlePlay} key={d.id}>
          <h2 className={style.fmname}>{d.sname}</h2>
          <h2 className={style.fid}>{d.sid}</h2>
        </div>
      ))}
    </div>
  );
};

export default StattionList;
