


import preloader2 from '/src/preloaders/preloader2/_preloader2.module.scss'

function Preloader2(props) {
    return (
        <>
            <div className={preloader2.container}>
                <div className={preloader2.ring}></div>
                <div className={preloader2.ring}></div>
                <div className={preloader2.ring}></div>
                <span >Loading...</span>
            </div>
        </>
    );
}

export default Preloader2;