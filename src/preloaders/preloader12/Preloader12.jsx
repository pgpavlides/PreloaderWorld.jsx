import React from "react";
import preloader12 from "/src/preloaders/preloader12/_preloader12.module.scss";

function Preloader12(props) {
  return (
    <>
      <div className={preloader12.container}>
        <span className={preloader12.container__span}></span>
        <span className={preloader12.container__span}></span>
        <span className={preloader12.container__span}></span>
        <span className={preloader12.container__span}></span>
        <span className={preloader12.container__span}></span>
        <span className={preloader12.container__span}></span>
        <span className={preloader12.container__span}></span>
        <span className={preloader12.container__span}></span>
      </div>
    </>
  );
}
export default Preloader12;
