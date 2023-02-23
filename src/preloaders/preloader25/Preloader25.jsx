import React from "react";
import preloader25 from "/src/preloaders/preloader25/_preloader25.module.scss";

function Preloader25(props) {
  return (
    <>
      <div className={preloader25.container}>
        <svg
          width="300"
          height="703"
          viewBox="0 0 1076 703"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id={preloader25.glass_guy}>
            <g id={preloader25.skeleton}>
              <circle
                id={preloader25.skeleton__left}
                cx="484.5"
                cy="364.5"
                r="112.5"
                stroke="black"
                strokeWidth="18"
              />
              <circle
                id={preloader25.skeleton__right}
                cx="846.5"
                cy="364.5"
                r="112.5"
                stroke="black"
                strokeWidth="18"
              />
              <path
                id={preloader25.skeleton__middle}
                d="M592 364C613 352.333 671.8 336 739 364"
                stroke="black"
                strokeWidth="18"
              />
              <path
                id={preloader25.skeleton__handle}
                d="M372 364.998H120C34.5 364.998 43 419 43 467"
                stroke="black"
                strokeWidth="18"
              />
            </g>
            <g id={preloader25.face}>
              <circle
                id={preloader25.face__lefteye}
                cx="484"
                cy="363"
                r="14"
                fill="black"
              />
              <circle
                id={preloader25.face__righteye}
                cx="847"
                cy="363"
                r="14"
                fill="black"
              />
              <path
                id={preloader25.face__leftbrow}
                d="M356 247.5C402 213.833 488.9 163.9 600.5 239.5"
                stroke="black"
                strokeWidth="18"
              />
              <path
                id={preloader25.face__rightbrow}
                d="M713.635 249.37C756.307 211.574 856.5 148.5 960 241"
                stroke="black"
                strokeWidth="18"
              />
              <path
                id={preloader25.face__mouth}
                d="M636.272 459.445C647.106 464.988 665.94 468.746 682 471.12C690.044 472.308 697.414 473.153 702.772 473.7C705.452 473.974 707.629 474.174 709.137 474.305C709.891 474.37 710.477 474.419 710.876 474.451C710.884 474.451 710.893 474.452 710.901 474.453L694.604 543.5H636.901C636.863 543.327 636.813 543.099 636.752 542.818C636.6 542.119 636.38 541.094 636.107 539.794C635.562 537.193 634.807 533.489 633.967 529.078C632.289 520.256 630.276 508.612 628.934 497.316C627.59 486.006 626.926 475.092 627.925 467.708C628.427 463.996 629.336 461.286 630.692 459.836C631.355 459.127 632.117 458.725 633.005 458.639C633.904 458.553 634.982 458.785 636.272 459.445Z"
                fill="black"
                stroke="black"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}

export default Preloader25;
