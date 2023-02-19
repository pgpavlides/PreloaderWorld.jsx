

import React from 'react';
import preloader16 from'/src/preloaders/preloader16/_preloader16.module.scss'

function Preloader16(props) {
    return (
        <>
            <div className={preloader16.container}>
                <div className={preloader16.container_box}>
                <div className={preloader16.infinity}></div>
                
                </div>
                
              
            </div>
        </>
    );
}

export default Preloader16;