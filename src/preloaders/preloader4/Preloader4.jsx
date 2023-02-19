import React from "react";
import preloader4 from "/src/preloaders/preloader4/_preloader4.module.scss";

function Preloader4(props) {
  return (
    <>
        <div className={preloader4.content}>
          <div className={`${preloader4.load} ${preloader4.load1}`}></div>
          <div className={`${preloader4.load} ${preloader4.load2}`}></div>
          <div className={`${preloader4.load} ${preloader4.load3}`}></div>
        </div>
    </>
  );
}

export default Preloader4;
