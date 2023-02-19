import React from "react";
import preloader14 from"/src/preloaders/preloader14/_preloader14.module.scss";

function Preloader14(props) {
  return (
    <>
      <div className={preloader14.container}>
        <div className={preloader14.boxcontainer}>
          <div className={preloader14.box1}></div>
          <div className={preloader14.box2}></div>
          <div className={preloader14.box3}></div>
        </div>
      </div>
    </>
  );
}

export default Preloader14;
