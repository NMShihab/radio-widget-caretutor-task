import React, { useState } from "react";
import Player from "./Player";
import Data from "../Data/Data";
import style from "./StationList.module.css";

const StattionList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <div className={style.listcontainer}>
      {Data.map((d) => (
        <div className={style.listcontainer} key={d.id}>
          {isOpen && d.id == value && <Player />}
          <li
            className={style.list}
            onClick={() => {
              setValue(d.id);
              setIsOpen(!isOpen);
            }}
          >
            <h2 className={style.fmname}>{d.sname}</h2>
            <h2 className={style.fid}>{d.sid}</h2>
          </li>
        </div>
      ))}
    </div>
  );
};

export default StattionList;
