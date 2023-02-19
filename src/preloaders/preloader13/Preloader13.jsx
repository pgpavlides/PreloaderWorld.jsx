import React from "react";
import preloader13 from"/src/preloaders/preloader13/_preloader13.module.scss";

function Preloader13(props) {
  return (
    <>
      <div className={preloader13.container}>
        <div className={preloader13.rotator}></div>
        <div className={preloader13.rotator2}></div>
        <div className={preloader13.cross}></div>
      </div>
    </>
  );
}

export default Preloader13;
