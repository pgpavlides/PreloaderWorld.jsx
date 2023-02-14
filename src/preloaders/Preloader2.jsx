

import React from 'react';
import '/src/preloaders/_preloader2.scss'

function Preloader2(props) {
    return (
        <>
            <div className="container">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <span className="loading-text">Loading...</span>
            </div>
        </>
    );
}

export default Preloader2;