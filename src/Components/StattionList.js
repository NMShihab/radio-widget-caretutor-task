import React from "react";
import Player from "./Player";
import Data from "../Data/Data";
import { useSelector, useDispatch } from "react-redux";
import { playAction } from "../actions/playAction";
import style from "./StationList.module.css";

const StattionList = () => {
  const { station } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={style.listcontainer}>
      {Data.map((d) => (
        <div className={style.listcontainer} key={d.id}>
          {Object.keys(station).length !== 0 && d.id === station.station.id && (
            <Player />
          )}
          <li
            className={style.list}
            onClick={() => {
              dispatch(
                playAction({
                  id: d.id,
                  sname: d.sname,
                })
              );
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
