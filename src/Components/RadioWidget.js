import React from "react";
import style from "./RadioWidget.module.css";
import Header from "./Header";
import StationBody from "./StatioBody";
import StattionList from "./StattionList";
import Footer from "./Footer";

const RadioWidget = () => {
  return (
    <div className={style.card}>
      <Header />
      <StationBody>
        <StattionList />
      </StationBody>
      <Footer />
    </div>
  );
};

export default RadioWidget;
