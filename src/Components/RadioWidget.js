import React from "react";
import style from "./RadioWidget.module.css";
import Header from "./Header";
import StationBody from "./StatioBody";
import Footer from "./Footer";

const RadioWidget = () => {
  return (
    <div className={style.card}>
      <Header />
      <StationBody />
      <Footer />
    </div>
  );
};

export default RadioWidget;
