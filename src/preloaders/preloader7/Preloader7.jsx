import React from "react";
import preloader7 from "/src/preloaders/preloader7/_preloader7.module.scss";

function Preloader7(props) {
  return (
    <>
    <div className={preloader7.content}>
      <div className={preloader7.wrapper}>
        <div className={preloader7.circle}></div>
        <div className={preloader7.circle}></div>
        <div className={preloader7.circle}></div>
        <div className={preloader7.shadow}></div>
        <div className={preloader7.shadow}></div>
        <div className={preloader7.shadow}></div>
        <span>Loading</span>
      </div>
      </div>
      
    </>
  );
}

export default Preloader7;
