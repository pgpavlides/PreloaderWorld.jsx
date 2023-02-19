

import React from 'react';
import preloader15 from '/src/preloaders/preloader15/_preloader15.module.scss'

function Preloader15(props) {
    return (
        <>
            <div className={preloader15.container}>
                <div className={preloader15.container_box}>
                <div className={preloader15.box}></div>
                <div className={preloader15.box}></div>
                <div className={preloader15.box}></div>
                </div>
                
              
            </div>
        </>
    );
}

export default Preloader15;