import React, { useEffect } from "react";
import preloader24 from "/src/preloaders/preloader24/_preloader24.module.scss";

function Preloader24(props) {

  
  useEffect(() => {
    console.log("mpika");
    const svg = document.querySelector('svg')
    const myAnimationLoop = () => {
      // Use a for loop to apply the animation properties to the appropriate elements
      for (let i = 1; i <= 12; i++) {
        let id = i === 1 ? "d1" : "d" + i;
        let elementa = document.querySelector(`#${preloader24.d11}`)   ;
        const element = svg.getElementById(`${preloader24.d11}`);
        // element.style.animation = "animate 0.3s linear";
        // element.style.animationDelay = i * 0.1 + "s";
        // element.style.transformOrigin = "center";
        console.log(element);
      }
       // Optional debug statement to show that the loop has completed
    };

    myAnimationLoop(); // Call the function once to start the loop

    const interval = setInterval(() => myAnimationLoop(), 500); // Loop every 5 seconds (5000 milliseconds)

    // Return a cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={preloader24.container}>
        <svg
          width="756"
          height="426"
          viewBox="0 0 378 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id={preloader24.frame}>
            <g id={preloader24.radialgroup}>
              <g 
              id={preloader24.d11} filter="url(#filter0_d_0_3)">
                <circle
                  cx="166.5"
                  cy="68.0289"
                  r="6"
                  transform="rotate(150 166.5 68.0289)"
                  fill="#090909"
                />
                <circle
                  cx="166.5"
                  cy="68.0289"
                  r="5.75"
                  transform="rotate(150 166.5 68.0289)"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
              <g id={preloader24.d10} filter="url(#filter1_d_0_3)">
                <circle
                  cx="150.029"
                  cy="84.5"
                  r="6"
                  transform="rotate(120 150.029 84.5)"
                  fill="#090909"
                />
                <circle
                  cx="150.029"
                  cy="84.5"
                  r="5.75"
                  transform="rotate(120 150.029 84.5)"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
              <g id={preloader24.d9} filter="url(#filter2_d_0_3)">
                <circle
                  cx="144"
                  cy="107"
                  r="6"
                  transform="rotate(90 144 107)"
                  fill="#090909"
                />
                <circle
                  cx="144"
                  cy="107"
                  r="5.75"
                  transform="rotate(90 144 107)"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
              <g id={preloader24.d8} filter="url(#filter3_d_0_3)">
                <circle
                  cx="150.029"
                  cy="129.5"
                  r="6"
                  transform="rotate(60 150.029 129.5)"
                  fill="#090909"
                />
                <circle
                  cx="150.029"
                  cy="129.5"
                  r="5.75"
                  transform="rotate(60 150.029 129.5)"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
              <g id={preloader24.d7} filter="url(#filter4_d_0_3)">
                <circle
                  cx="166.5"
                  cy="145.971"
                  r="6"
                  transform="rotate(30 166.5 145.971)"
                  fill="#090909"
                />
                <circle
                  cx="166.5"
                  cy="145.971"
                  r="5.75"
                  transform="rotate(30 166.5 145.971)"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
              <g id={preloader24.d6} filter="url(#filter5_d_0_3)">
                <circle cx="189" cy="152" r="6" fill="#090909" />
                <circle
                  cx="189"
                  cy="152"
                  r="5.75"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
              <g id={preloader24.d5} filter="url(#filter6_d_0_3)">
                <circle
                  cx="211.5"
                  cy="145.971"
                  r="6"
                  transform="rotate(150 211.5 145.971)"
                  fill="#090909"
                />
                <circle
                  cx="211.5"
                  cy="145.971"
                  r="5.75"
                  transform="rotate(150 211.5 145.971)"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
              <g id={preloader24.d4} filter="url(#filter7_d_0_3)">
                <circle
                  cx="227.971"
                  cy="129.5"
                  r="6"
                  transform="rotate(120 227.971 129.5)"
                  fill="#090909"
                />
                <circle
                  cx="227.971"
                  cy="129.5"
                  r="5.75"
                  transform="rotate(120 227.971 129.5)"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
              <g id={preloader24.d3} filter="url(#filter8_d_0_3)">
                <circle
                  cx="234"
                  cy="107"
                  r="6"
                  transform="rotate(90 234 107)"
                  fill="#090909"
                />
                <circle
                  cx="234"
                  cy="107"
                  r="5.75"
                  transform="rotate(90 234 107)"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
              <g id={preloader24.d2} filter="url(#filter9_d_0_3)">
                <circle
                  cx="227.971"
                  cy="84.5"
                  r="6"
                  transform="rotate(60 227.971 84.5)"
                  fill="#090909"
                />
                <circle
                  cx="227.971"
                  cy="84.5"
                  r="5.75"
                  transform="rotate(60 227.971 84.5)"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
              <g id={preloader24.d1} filter="url(#filter10_d_0_3)">
                <circle
                  cx="211.5"
                  cy="68.0289"
                  r="6"
                  transform="rotate(30 211.5 68.0289)"
                  fill="#090909"
                />
                <circle
                  cx="211.5"
                  cy="68.0289"
                  r="5.75"
                  transform="rotate(30 211.5 68.0289)"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
              <g id={preloader24.d12} filter="url(#filter11_d_0_3)">
                <circle cx="189" cy="62" r="6" fill="#090909" />
                <circle
                  cx="189"
                  cy="62"
                  r="5.75"
                  stroke="#1E93FF"
                  strokeWidth="0.5"
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_0_3"
              x="156.499"
              y="62.0279"
              width="20.002"
              height="20.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_0_3"
              x="140.028"
              y="78.499"
              width="20.002"
              height="20.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_0_3"
              x="134"
              y="101"
              width="20"
              height="20"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_0_3"
              x="140.028"
              y="123.499"
              width="20.002"
              height="20.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d_0_3"
              x="156.499"
              y="139.97"
              width="20.002"
              height="20.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_d_0_3"
              x="179"
              y="146"
              width="20"
              height="20"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
            <filter
              id="filter6_d_0_3"
              x="201.499"
              y="139.97"
              width="20.002"
              height="20.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
            <filter
              id="filter7_d_0_3"
              x="217.97"
              y="123.499"
              width="20.002"
              height="20.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
            <filter
              id="filter8_d_0_3"
              x="224"
              y="101"
              width="20"
              height="20"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
            <filter
              id="filter9_d_0_3"
              x="217.97"
              y="78.499"
              width="20.002"
              height="20.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
            <filter
              id="filter10_d_0_3"
              x="201.499"
              y="62.0279"
              width="20.002"
              height="20.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
            <filter
              id="filter11_d_0_3"
              x="179"
              y="56"
              width="20"
              height="20"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}

export default Preloader24;
