import React from "react";
import preloader9 from "/src/preloaders/preloader9/_preloader9.module.scss";

function Preloader9(props) {
  return (
    <>
    
    <div className={preloader9.container}>
      
      <div className={preloader9.container__circle}></div>
      <div className={preloader9.container__box1}></div>
      <div className={preloader9.container__box2}></div>
      <div className={preloader9.container__box3}></div>
      <div className={preloader9.container__box4}></div>
      <div className={preloader9.container__box5}></div>
      
      
    </div>  
      
    </>
  );
}

export default Preloader9;
