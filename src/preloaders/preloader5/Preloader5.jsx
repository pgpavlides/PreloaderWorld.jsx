import React from "react";
import preloader5 from "/src/preloaders/preloader5/_preloader5.module.scss";

function Preloader5(props) {
  return (
    <>
      <div className={preloader5.content}>
      <div className={preloader5.middle}>
        <div className={`${preloader5.bar} ${preloader5.bar1}`}></div>
        <div className={`${preloader5.bar} ${preloader5.bar2}`}></div>
        <div className={`${preloader5.bar} ${preloader5.bar3}`}></div>
        <div className={`${preloader5.bar} ${preloader5.bar4}`}></div>
        <div className={`${preloader5.bar} ${preloader5.bar5}`}></div>
        <div className={`${preloader5.bar} ${preloader5.bar6}`}></div>
        <div className={`${preloader5.bar} ${preloader5.bar7}`}></div>
        <div className={`${preloader5.bar} ${preloader5.bar8}`}></div>
        
      </div>
      </div>
    </>
  );
}

export default Preloader5;
