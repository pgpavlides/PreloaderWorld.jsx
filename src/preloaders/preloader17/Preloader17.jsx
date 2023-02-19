import React from "react";
import preloader17 from"/src/preloaders/preloader17/_preloader17.module.scss";

function Preloader17(props) {
  return (
    <>
      <div className={preloader17.container}>
        <svg
          className={preloader17.svg}
          width="120"
          height="100"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id={preloader17.triangles}>
            <g id={preloader17.darkGroup} opacity="0.7">
              <path
                id={preloader17.dark1}
                d="M76 52.268C77.3333 53.0378 77.3333 54.9623 76 55.7321L41.5 75.6506C40.1667 76.4204 38.5 75.4582 38.5 73.9186L38.5 34.0814C38.5 32.5418 40.1667 31.5796 41.5 32.3494L76 52.268Z"
              />
              <path
                id={preloader17.dark2}
                d="M90 52.268C91.3333 53.0378 91.3333 54.9623 90 55.7321L55.5 75.6506C54.1667 76.4204 52.5 75.4582 52.5 73.9186L52.5 34.0814C52.5 32.5418 54.1667 31.5796 55.5 32.3494L90 52.268Z"
              />
            </g>
            <g id={preloader17.lightGroup} opacity="0.7">
              <path
                id={preloader17.light1}
                d="M76 52.268C77.3333 53.0378 77.3333 54.9623 76 55.7321L41.5 75.6506C40.1667 76.4204 38.5 75.4582 38.5 73.9186L38.5 34.0814C38.5 32.5418 40.1667 31.5796 41.5 32.3494L76 52.268Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}

export default Preloader17;
