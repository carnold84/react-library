import * as React from "react";

function SvgThinBigUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#thin_big_up_svg__clip0)">
        <path
          d="M19.5 6.5L13 0 6.5 6.5l.707.707L12.5 1.914V24h1V1.914l5.293 5.293.707-.707z"
          fill="inherit"
        />
      </g>
      <defs>
        <clipPath id="thin_big_up_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgThinBigUp;
