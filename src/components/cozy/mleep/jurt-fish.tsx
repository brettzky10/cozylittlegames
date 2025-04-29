//LinkArrowIcon.tsx
type Props = {
    className?: string;
  };
  
  export function JurtFish({ className, ...props }: Props) {
    return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="310.667px" height="308px" viewBox="0 0 310.667 308" enableBackground="new 0 0 310.667 308" xmlSpace="preserve">

    <g className="jurt">
    <g className="jurt-head">
        <polygon fill="#9B8C64" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="26.235,154.668 54.748,162.21 
            33.961,183.132 			"/>
        <polygon fill="#9B8C64" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="65.235,164.335 93.748,171.877 
            72.961,192.799 			"/>
        <polygon fill="#9B8C64" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="52.023,187.909 69.441,211.709 
            40.121,214.895 			"/>
        <radialGradient id="jurt-grad" cx="93.377" cy="123.1665" r="208.4703" gradientUnits="userSpaceOnUse">
            <stop  offset="0.5806" stopColor="#9B8C64"/>
            <stop  offset="1" stopColor="#000000"/>
        </radialGradient>
        <path fill="url(#jurt-grad)" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" d="M131.711,44.499
            c-63.068,0-115.611,45.029-127.254,104.69l180.254,49.309L9.434,217.391c17.803,50.358,65.822,86.441,122.277,86.441
            c71.613,0,129.666-58.054,129.666-129.667C261.377,102.553,203.324,44.499,131.711,44.499z"/>
        <g>
            <path d="M95.38,50.007c-9.588,2.673-15.253,5.409-15.253,5.409c19.75,64.25-53.892,99.252-53.892,99.252l21.06,5.928
                C49.863,158.469,116.457,102.64,95.38,50.007z"/>
            <path d="M188.127,58.166c-7.791-3.912-15.512-6.784-23.033-8.831c-8.309,7.197-80.051,72.278-33.051,134.998l-47.379-13.218
                l61.463,17.301C89.127,119.416,188.127,58.166,188.127,58.166z"/>
        </g>
    </g>
    <g className="jurt-left-eye">
        <path d="M24.056,118.767c-11.494-7.483-14.176-23.742-5.99-36.316s35.634-9.219,35.634-9.219s14.176,23.742,5.99,36.316
            C51.504,122.121,35.551,126.249,24.056,118.767z"/>
        <circle fill="#9B8C64" cx="48.627" cy="90.416" r="5.5"/>
    </g>
    <g className="jurt-right-eye">
        <path d="M172.65,153.067c-13.707-0.451-24.42-12.973-23.926-27.968c0.492-14.996,25.713-26.336,25.713-26.336
            s24.42,12.973,23.927,27.969S186.358,153.519,172.65,153.067z"/>
        <circle fill="#9B8C64" cx="187.127" cy="122.416" r="5.5"/>
    </g>
    <g className="jurt-side-fin">
        
            <ellipse fill="#9B8C64" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" cx="264.21" cy="180.166" rx="43.833" ry="62"/>
        
            <line fill="#9B8C64" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="221.711" y1="168.5" x2="301.711" y2="147.833"/>
        
            <line fill="#9B8C64" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="220.377" y1="186.166" x2="306.711" y2="187.166"/>
        
            <line fill="#9B8C64" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="223.711" y1="205.833" x2="295.377" y2="222.166"/>
    </g>
    <g className="jurt-head-fin">
        <path fill="#9B8C64" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" d="M131.711,44.499
            c32.054,0,61.385,11.637,84.016,30.908c2.775-5.948,4.316-12.438,4.316-19.24c0-28.535-26.862-51.667-60-51.667
            c-30,0-54.854,18.96-59.293,43.723C110.672,45.792,121.04,44.499,131.711,44.499z"/>
        
            <line fill="#9B8C64" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="128.711" y1="43.833" x2="155.044" y2="4.5"/>
        
            <line fill="#9B8C64" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="162.377" y1="47.833" x2="195.044" y2="13.5"/>
        
            <line fill="#9B8C64" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="186.711" y1="57.166" x2="217.711" y2="42.833"/>
    </g>
    </g>

    </svg>
    );
  }