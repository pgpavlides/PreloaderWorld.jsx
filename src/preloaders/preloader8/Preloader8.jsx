import React from "react";
import preloader8 from "/src/preloaders/preloader8/_preloader8.module.scss";

function Preloader8(props) {
  return (
    <>
    <div className={preloader8.main_container}>
    <div className={preloader8.container}>
      <div className={preloader8.box1}></div>
      <div className={preloader8.box2}></div>
      <div className={preloader8.box3}></div>
    </div> 
    </div>  
      
    </>
  );
}

export default Preloader8;
