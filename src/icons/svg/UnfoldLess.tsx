import * as React from "react";

function SvgUnfoldLess(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.463 19.779L7.05 18.364 12 13.415l4.944 4.955-1.408 1.408L12 16.242l-3.536 3.537zM12 10.586L7.055 5.631l1.41-1.409L12 7.757l3.535-3.535 1.415 1.414-4.949 4.949-.001.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUnfoldLess;
