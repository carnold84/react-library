import * as React from "react";

function SvgCloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#cloud_svg__clip0)">
        <path
          d="M0 14a6 6 0 015.025-5.921 8 8 0 0114.738 1.979A5 5 0 0119 20H6a6 6 0 01-6-6z"
          fill="inherit"
        />
      </g>
      <defs>
        <clipPath id="cloud_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCloud;
