import React from "react";
import preloader11 from "/src/preloaders/preloader11/_preloader11.module.scss";

function Preloader11(props) {
  return (
    <>
      <div className={preloader11.content}>
        <div className={preloader11.loader}></div>
      </div>
    </>
  );
}

export default Preloader11;
