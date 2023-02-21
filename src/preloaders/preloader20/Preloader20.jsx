import React from "react";
import preloader20 from "/src/preloaders/preloader20/_preloader20.module.scss";

function Preloader20(props) {
  return (
    <>
      <div className={preloader20.container}>
        <div className={preloader20.box}>
          <div className={preloader20.box}>
            <div className={preloader20.box}>
              <div className={preloader20.box}>
                <div className={preloader20.box}>
                  <div className={preloader20.box}>
                    <div className={preloader20.box}>
                      <div className={preloader20.box}>
                        <div className={preloader20.box}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preloader20;
