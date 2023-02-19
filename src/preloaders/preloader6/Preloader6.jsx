import React from "react";
import preloader6 from "/src/preloaders/preloader6/_preloader6.module.scss";

function Preloader6(props) {
  return (
    <>
      <div className={preloader6.content}>
        <div className={preloader6.preloader}>
          <div className={preloader6.box}>
            <div className={preloader6.box__inner}>
              <div className={`${preloader6["box__back-flap"]}`}></div>
              <div className={`${preloader6["box__right-flap"]}`}></div>
              <div className={`${preloader6["box__front-flap"]}`}></div>
              <div className={`${preloader6["box__left-flap"]}`}></div>
              <div className={preloader6.box__front}></div>
            </div>
          </div>
          <div className={preloader6.box}>
            <div className={preloader6.box__inner}>
              <div className={`${preloader6["box__back-flap"]}`}></div>
              <div className={`${preloader6["box__right-flap"]}`}></div>
              <div className={`${preloader6["box__front-flap"]}`}></div>
              <div className={`${preloader6["box__left-flap"]}`}></div>
              <div className={preloader6.box__front}></div>
            </div>
          </div>
          <div className={preloader6.line}>
            <div className={preloader6.line__inner}></div>
          </div>
          <div className={preloader6.line}>
            <div className={preloader6.line__inner}></div>
          </div>
          <div className={preloader6.line}>
            <div className={preloader6.line__inner}></div>
          </div>
          <div className={preloader6.line}>
            <div className={preloader6.line__inner}></div>
          </div>
          <div className={preloader6.line}>
            <div className={preloader6.line__inner}></div>
          </div>
          <div className={preloader6.line}>
            <div className={preloader6.line__inner}></div>
          </div>
          <div className={preloader6.line}>
            <div className={preloader6.line__inner}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preloader6;
