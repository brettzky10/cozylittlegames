//LinkArrowIcon.tsx
type Props = {
    className?: string;
  };
  
  export function MleepFarmer({ className, ...props }: Props) {
    return (
        <svg className="farmer-speak" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="279.307px" height="298.711px" viewBox="0 0 279.307 298.711" enableBackground="new 0 0 279.307 298.711"
        xmlSpace="preserve">
            <g className="farmer">
            <g className="dog-mouth">
                <polygon className="dog-upper-jaw" points="272.575,136.251 272.257,115.88 247.331,112.19 247.358,114.684 171.064,103.627 171.064,163.57 270.255,163.57 
                    269.828,136.251 			"/>
                <polygon className="dog-lower-jaw" points="259.372,184.442 194.881,184.709 194.881,165.71 265.26,165.71 			"/>
            </g>
            <g className="dog-body">
                <radialGradient id="dog-gradient" cx="86.0645" cy="77.2935" r="273.3862" gradientUnits="userSpaceOnUse">
                    <stop  offset="0.5806" stopColor="#9B8C64" />
                    <stop  offset="1" stopColor="#000000" />
                </radialGradient>
                <path fill="url(#dog-gradient)" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" d="M176.006,210.511
                    c23.487-16.295,38.976-44.195,38.976-75.884c0-50.258-38.951-91-87-91s-87,40.742-87,91c0,31.688,15.488,59.589,38.976,75.884
                    c-35.831,14.86-60.476,45.822-60.476,81.616c0,0.223,0.008,0.443,0.01,0.666h216.98c0.002-0.223,0.01-0.443,0.01-0.666
                    C236.481,256.333,211.837,225.372,176.006,210.511z"/>
                <polygon points="80.064,209.46 127.897,233.629 174.564,209.877 187.231,216.129 127.064,268.293 71.064,214.795 			"/>
            </g>
            <rect className="dog-eye" x="163.065" y="94.794" transform="matrix(0.7071 0.7071 -0.7071 0.7071 125.7961 -92.0973)" width="22" height="21.999"/>
            <g className="dog-hat">
                <polygon points="190.334,64.226 168.852,5.917 87.655,5.917 65.661,64.226 6.731,64.226 6.731,75.67 249.231,75.67 
                    249.231,64.226 			"/>
                <path fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" d="M66.259,66.179
                    c0,0-11.626-37.782-33.424-31.97"/>
            </g>
            </g>
        </svg>
    );
  }