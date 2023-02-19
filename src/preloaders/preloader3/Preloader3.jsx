

import React from 'react';
import preloader3 from '/src/preloaders/preloader3/_preloader3.module.scss'

function Preloader3(props) {
    return (
        <>
            <div className={preloader3.container_loader}>
                <div className={preloader3.loader}></div>                
            </div>
        </>
    );
}

export default Preloader3;